import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, ScrollView, ScrollViewInstance, StyleSheet, Text, TextInput, View } from 'react-native';
import { useContent } from '../src/content';
import { Answers, matchRules, questions, rules } from '../src/data/eligibility';
import { getGuide } from '../src/data/guides';
import { ui } from '../src/i18n';
import { useLang } from '../src/LanguageContext';
import { colors, radius, space, type } from '../src/theme';

const KEY = 'saayam.eligibility.v1';

export default function EligibilityScreen() {
  const { version } = useContent();
  const { t } = useLang();
  const router = useRouter();
  const scroll = useRef<ScrollViewInstance>(null);
  const [a, setA] = useState<Answers>({});
  const [show, setShow] = useState(false);
  const [resultsY, setResultsY] = useState(0);

  useEffect(() => {
    AsyncStorage.getItem(KEY)
      .then((raw) => raw && setA(JSON.parse(raw)))
      .catch(() => {});
  }, []);

  const set = (id: string, v: Answers[string]) => {
    setA((prev) => {
      const next = { ...prev, [id]: v };
      AsyncStorage.setItem(KEY, JSON.stringify(next)).catch(() => {});
      return next;
    });
  };

  const matches = useMemo(() => matchRules(rules, a).filter((r) => getGuide(r.guideId)), [a, version]);

  const toggleMulti = (id: string, opt: string) => {
    const cur = (a[id] as string[] | undefined) ?? [];
    set(id, cur.includes(opt) ? cur.filter((x) => x !== opt) : [...cur, opt]);
  };

  return (
    <ScrollView ref={scroll} contentContainerStyle={s.page} keyboardShouldPersistTaps="handled">
      <Text style={s.title}>✅ {t(ui.eligTitle)}</Text>
      <Text style={s.intro}>{t(ui.eligIntro)}</Text>

      {questions.map((q) => (
        <View key={q.id} style={s.q}>
          <Text style={s.qLabel}>{t(q.label)}</Text>
          {!!q.hint && <Text style={s.hint}>{t(q.hint)}</Text>}
          {q.kind === 'number' && (
            <TextInput
              value={a[q.id] === undefined ? '' : String(a[q.id])}
              onChangeText={(v) => {
                const n = v.replace(/\D/g, '').slice(0, 3);
                set(q.id, n ? Number(n) : undefined);
              }}
              keyboardType="number-pad"
              style={s.input}
              accessibilityLabel={t(q.label)}
            />
          )}
          {q.kind === 'yesno' && (
            <View style={s.chips}>
              {[true, false].map((v) => (
                <Chip key={String(v)} on={a[q.id] === v} label={t(v ? ui.yes : ui.no)} onPress={() => set(q.id, a[q.id] === v ? undefined : v)} />
              ))}
            </View>
          )}
          {(q.kind === 'single' || q.kind === 'multi') && (
            <View style={s.chips}>
              {q.options.map((o) => {
                const on = q.kind === 'single' ? a[q.id] === o.id : ((a[q.id] as string[] | undefined) ?? []).includes(o.id);
                return (
                  <Chip
                    key={o.id}
                    on={on}
                    label={t(o.label)}
                    onPress={() => (q.kind === 'single' ? set(q.id, on ? undefined : o.id) : toggleMulti(q.id, o.id))}
                  />
                );
              })}
            </View>
          )}
        </View>
      ))}

      <Pressable
        style={s.primary}
        accessibilityRole="button"
        onPress={() => {
          setShow(true);
          setTimeout(() => scroll.current?.scrollTo({ y: resultsY - 8, animated: true }), 50);
        }}
      >
        <Text style={s.primaryText}>{t(ui.eligShow)}</Text>
      </Pressable>

      <View onLayout={(e) => setResultsY(e.nativeEvent.layout.y)}>
        {show && (
          <>
            <Text style={s.h2}>{matches.length ? t(ui.eligResults).replace('{n}', String(matches.length)) : t(ui.eligNone)}</Text>
            {matches.map((r) => {
              const g = getGuide(r.guideId)!;
              return (
                <Pressable key={r.guideId} style={s.card} onPress={() => router.push({ pathname: '/guide/[id]', params: { id: g.id } })}>
                  <Text style={s.cardTitle}>{t(g.title)}</Text>
                  <Text style={s.why}>{t(r.why)}</Text>
                  <Text style={s.link}>{t(ui.remOpenGuide)} →</Text>
                </Pressable>
              );
            })}
            <Text style={s.note}>⚠️ {t(ui.eligNote)}</Text>
            <View style={s.row}>
              <Pressable onPress={() => scroll.current?.scrollTo({ y: 0, animated: true })}>
                <Text style={s.link}>{t(ui.eligEdit)}</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  setA({});
                  setShow(false);
                  AsyncStorage.removeItem(KEY).catch(() => {});
                  scroll.current?.scrollTo({ y: 0, animated: true });
                }}
              >
                <Text style={s.del}>{t(ui.eligClear)}</Text>
              </Pressable>
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
}

function Chip({ on, label, onPress }: { on: boolean; label: string; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={[s.chip, on && s.chipOn]} accessibilityRole="checkbox" accessibilityState={{ checked: on }}>
      <Text style={[s.chipText, on && s.chipTextOn]}>{on ? '✓ ' : ''}{label}</Text>
    </Pressable>
  );
}

const s = StyleSheet.create({
  page: { padding: space.lg, paddingBottom: 64 },
  title: { fontSize: type.h1, fontWeight: '900', color: colors.ink },
  intro: { fontSize: type.body, color: colors.muted, marginTop: space.xs, marginBottom: space.lg, lineHeight: 22 },
  q: { backgroundColor: colors.card, borderRadius: radius.md, padding: space.lg, marginBottom: space.md, borderWidth: 1, borderColor: colors.line },
  qLabel: { fontSize: type.h3, fontWeight: '800', color: colors.ink, marginBottom: space.sm },
  hint: { fontSize: type.small, color: colors.muted, marginTop: -4, marginBottom: space.sm },
  input: { borderWidth: 1.5, borderColor: colors.line, borderRadius: radius.sm, paddingHorizontal: space.md, paddingVertical: 10, fontSize: type.body, width: 110, color: colors.ink },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: space.sm },
  chip: { borderWidth: 1.5, borderColor: colors.line, borderRadius: 999, paddingHorizontal: 14, paddingVertical: 9, backgroundColor: '#fff' },
  chipOn: { backgroundColor: colors.primary, borderColor: colors.primary },
  chipText: { fontSize: type.small, color: colors.ink, fontWeight: '600' },
  chipTextOn: { color: '#fff' },
  primary: { backgroundColor: colors.accent, borderRadius: radius.md, padding: space.lg, alignItems: 'center', marginVertical: space.md },
  primaryText: { color: '#fff', fontWeight: '900', fontSize: type.h3 },
  h2: { fontSize: type.h2, fontWeight: '800', color: colors.ink, marginVertical: space.md },
  card: { backgroundColor: colors.card, borderRadius: radius.md, padding: space.lg, marginBottom: space.md, borderWidth: 1, borderColor: colors.line, borderLeftWidth: 5, borderLeftColor: colors.primary },
  cardTitle: { fontSize: type.h3, fontWeight: '800', color: colors.ink },
  why: { fontSize: type.body, color: colors.ink, marginTop: 4, lineHeight: 22 },
  link: { color: colors.primary, fontWeight: '700', fontSize: type.body, marginTop: space.sm },
  note: { fontSize: type.small, color: colors.warnInk, backgroundColor: colors.warnSoft, padding: space.md, borderRadius: radius.sm, lineHeight: 20, marginTop: space.sm },
  row: { flexDirection: 'row', gap: space.xl, marginTop: space.md },
  del: { color: '#B3261E', fontWeight: '700', fontSize: type.body, marginTop: space.sm },
});
