import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { reminderTemplates } from '../src/data/reminders';
import { ui } from '../src/i18n';
import { useLang } from '../src/LanguageContext';
import { daysUntil, nextDate, parseISO, tplById, useReminders } from '../src/reminders';
import { colors, radius, space, type } from '../src/theme';

export default function RemindersScreen() {
  const { t, lang } = useLang();
  const router = useRouter();
  const params = useLocalSearchParams<{ add?: string }>();
  const { reminders, add, remove } = useReminders();
  const [picking, setPicking] = useState(false);
  const [tpl, setTpl] = useState<string | null>(null);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    if (params.add && tplById(params.add)) setTpl(params.add);
  }, [params.add]);

  const chosen = tpl ? tplById(tpl) : undefined;
  const reset = () => {
    setTpl(null);
    setPicking(false);
    setDay('');
    setMonth('');
    setYear('');
    setName('');
  };

  const save = async () => {
    if (!chosen) return;
    let date: string | undefined;
    if (chosen.kind === 'date') {
      const iso = `${year.padStart(4, '0')}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
      if (!parseISO(iso) || year.length !== 4) {
        setMsg(t(ui.remBadDate));
        return;
      }
      date = iso;
    }
    const { alerts } = await add(chosen.id, { name, date }, lang);
    setMsg(alerts || Platform.OS === 'web' ? '' : t(ui.remNoNotif));
    reset();
  };

  const sorted = [...reminders].sort((a, b) => (nextDate(a)?.getTime() ?? 0) - (nextDate(b)?.getTime() ?? 0));
  const fmt = (d: Date) => d.toLocaleDateString(lang === 'te' ? 'te-IN' : 'en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  const monthName = (m: number) => new Date(2026, m - 1, 1).toLocaleDateString(lang === 'te' ? 'te-IN' : 'en-IN', { month: 'short' });

  return (
    <ScrollView contentContainerStyle={s.page} keyboardShouldPersistTaps="handled">
      <Text style={s.title}>⏰ {t(ui.remTitle)}</Text>
      <Text style={s.blurb}>{t(ui.remBlurb)}</Text>
      {Platform.OS === 'web' && <Text style={s.note}>{t(ui.remWeb)}</Text>}
      {!!msg && <Text style={s.warn}>{msg}</Text>}

      {sorted.length === 0 && !chosen && !picking && <Text style={s.empty}>{t(ui.remEmpty)}</Text>}
      {sorted.map((r) => {
        const tp = tplById(r.tpl);
        const d = nextDate(r);
        const n = d ? daysUntil(d) : null;
        return (
          <View key={r.id} style={s.card}>
            <Text style={s.cardTitle}>{r.name || (tp ? t(tp.title) : r.tpl)}</Text>
            {d && (
              <Text style={[s.when, n !== null && n <= 7 && s.soon]}>
                {fmt(d)} ·{' '}
                {n === 0 ? t(ui.remToday) : n! > 0 ? t(ui.remDaysLeft).replace('{n}', String(n)) : t(ui.remOverdue).replace('{n}', String(-n!))}
              </Text>
            )}
            {tp && <Text style={s.small}>{t(tp.note)}</Text>}
            <View style={s.rowBtns}>
              {tp?.guideId && (
                <Pressable onPress={() => router.push({ pathname: '/guide/[id]', params: { id: tp.guideId! } })}>
                  <Text style={s.link}>{t(ui.remOpenGuide)} →</Text>
                </Pressable>
              )}
              <Pressable onPress={() => remove(r.id)} accessibilityRole="button">
                <Text style={s.del}>{t(ui.remDelete)}</Text>
              </Pressable>
            </View>
          </View>
        );
      })}

      {chosen ? (
        <View style={s.form}>
          <Text style={s.formTitle}>{t(chosen.title)}</Text>
          {chosen.id === 'custom' && (
            <TextInput value={name} onChangeText={setName} placeholder={t(ui.remName)} placeholderTextColor={colors.muted} style={s.input} />
          )}
          {chosen.kind === 'date' ? (
            <>
              <Text style={s.label}>{t(chosen.ask)}</Text>
              <View style={s.dateRow}>
                <TextInput value={day} onChangeText={(v) => setDay(v.replace(/\D/g, '').slice(0, 2))} placeholder={t(ui.remDay)} keyboardType="number-pad" style={[s.input, s.dateBox]} placeholderTextColor={colors.muted} accessibilityLabel={t(ui.remDay)} />
                <TextInput value={month} onChangeText={(v) => setMonth(v.replace(/\D/g, '').slice(0, 2))} placeholder={t(ui.remMonth)} keyboardType="number-pad" style={[s.input, s.dateBox]} placeholderTextColor={colors.muted} accessibilityLabel={t(ui.remMonth)} />
                <TextInput value={year} onChangeText={(v) => setYear(v.replace(/\D/g, '').slice(0, 4))} placeholder={t(ui.remYear)} keyboardType="number-pad" style={[s.input, s.yearBox]} placeholderTextColor={colors.muted} accessibilityLabel={t(ui.remYear)} />
              </View>
              <Text style={s.small}>{t(ui.remWhen).replace('{d}', chosen.daysBefore.filter((x) => x > 0).join(', ') || '0')}</Text>
            </>
          ) : (
            <Text style={s.small}>{t(ui.remYearly).replace('{dates}', chosen.dates.map((x) => `${x.d} ${monthName(x.m)}`).join(', '))}</Text>
          )}
          <Text style={s.small}>{t(chosen.note)}</Text>
          <View style={s.rowBtns}>
            <Pressable style={s.primary} onPress={save} accessibilityRole="button">
              <Text style={s.primaryText}>{t(ui.remSave)}</Text>
            </Pressable>
            <Pressable onPress={reset} accessibilityRole="button">
              <Text style={s.link}>{t(ui.remCancel)}</Text>
            </Pressable>
          </View>
        </View>
      ) : picking ? (
        <View style={s.form}>
          <Text style={s.formTitle}>{t(ui.remChoose)}</Text>
          {reminderTemplates.map((tp) => (
            <Pressable key={tp.id} style={s.choice} onPress={() => setTpl(tp.id)} accessibilityRole="button">
              <Text style={s.choiceText}>{t(tp.title)}</Text>
            </Pressable>
          ))}
          <Pressable onPress={() => setPicking(false)}>
            <Text style={s.link}>{t(ui.remCancel)}</Text>
          </Pressable>
        </View>
      ) : (
        <Pressable style={s.addBtn} onPress={() => { setMsg(''); setPicking(true); }} accessibilityRole="button">
          <Text style={s.addText}>{t(ui.remAdd)}</Text>
        </Pressable>
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { padding: space.lg, paddingBottom: 48 },
  title: { fontSize: type.h1, fontWeight: '900', color: colors.ink },
  blurb: { fontSize: type.body, color: colors.muted, marginTop: space.xs, marginBottom: space.lg, lineHeight: 22 },
  note: { fontSize: type.small, color: colors.muted, marginBottom: space.md },
  warn: { backgroundColor: colors.warnSoft, color: colors.warnInk, padding: space.md, borderRadius: radius.sm, marginBottom: space.md, fontSize: type.small, lineHeight: 20 },
  empty: { color: colors.muted, fontSize: type.body, marginBottom: space.md },
  card: { backgroundColor: colors.card, borderRadius: radius.md, padding: space.lg, marginBottom: space.md, borderWidth: 1, borderColor: colors.line },
  cardTitle: { fontSize: type.h3, fontWeight: '800', color: colors.ink },
  when: { fontSize: type.body, color: colors.primary, fontWeight: '700', marginTop: 4 },
  soon: { color: colors.accent },
  small: { fontSize: type.small, color: colors.muted, marginTop: space.xs, lineHeight: 20 },
  rowBtns: { flexDirection: 'row', alignItems: 'center', gap: space.lg, marginTop: space.md },
  link: { color: colors.primary, fontWeight: '700', fontSize: type.body },
  del: { color: '#B3261E', fontWeight: '700', fontSize: type.body },
  form: { backgroundColor: colors.card, borderRadius: radius.lg, padding: space.lg, borderWidth: 1.5, borderColor: colors.primary, marginTop: space.sm },
  formTitle: { fontSize: type.h3, fontWeight: '800', color: colors.primary, marginBottom: space.md },
  label: { fontSize: type.body, color: colors.ink, fontWeight: '700', marginBottom: space.sm },
  input: { borderWidth: 1.5, borderColor: colors.line, borderRadius: radius.sm, paddingHorizontal: space.md, paddingVertical: 10, fontSize: type.body, color: colors.ink, backgroundColor: '#fff', marginBottom: space.sm },
  dateRow: { flexDirection: 'row', gap: space.sm },
  dateBox: { width: 72, textAlign: 'center' },
  yearBox: { width: 96, textAlign: 'center' },
  choice: { paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: colors.line },
  choiceText: { fontSize: type.body, color: colors.ink },
  primary: { backgroundColor: colors.primary, borderRadius: radius.md, paddingVertical: 12, paddingHorizontal: space.lg },
  primaryText: { color: '#fff', fontWeight: '800', fontSize: type.body },
  addBtn: { backgroundColor: colors.primary, borderRadius: radius.md, padding: space.lg, alignItems: 'center', marginTop: space.sm },
  addText: { color: '#fff', fontWeight: '800', fontSize: type.h3 },
});
