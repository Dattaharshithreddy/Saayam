import * as Speech from 'expo-speech';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  Alert,
  Linking,
  Modal,
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { sendReport } from '../../src/feedback';
import { Bullet, CheckRow, LevelBadge, Section, Step } from '../../src/components';
import { getGuide } from '../../src/data/guides';
import { guideSections, guideShareText } from '../../src/guideText';
import { ui } from '../../src/i18n';
import { useLang } from '../../src/LanguageContext';
import { usePrefs } from '../../src/prefs';
import { colors, radius, space, type } from '../../src/theme';

export default function GuideScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { lang, t } = useLang();
  const prefs = usePrefs();
  const router = useRouter();
  const [speaking, setSpeaking] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const g = getGuide(id);

  // Stop talking when leaving the page or switching language.
  useEffect(() => () => void Speech.stop(), []);
  useEffect(() => {
    Speech.stop();
    setSpeaking(false);
  }, [lang]);

  if (!g) return null;

  const sc = prefs.scale;
  const ticked = g.documents.filter((_, i) => prefs.isTicked(g.id, i)).length;

  async function toggleSpeak() {
    if (!g) return;
    if (speaking) {
      Speech.stop();
      setSpeaking(false);
      return;
    }
    const language = lang === 'te' ? 'te-IN' : 'en-IN';
    if (lang === 'te') {
      const voices = await Speech.getAvailableVoicesAsync().catch(() => []);
      // An empty list can mean "unknown" on some phones, so only warn when voices exist but none is Telugu.
      if (voices.length > 0 && !voices.some((v) => v.language?.toLowerCase().startsWith('te'))) {
        Alert.alert('🔊', t(ui.noVoice));
        return;
      }
    }
    const parts = guideSections(g, lang);
    setSpeaking(true);
    parts.forEach((text, i) =>
      Speech.speak(text, {
        language,
        rate: 0.9,
        onDone: i === parts.length - 1 ? () => setSpeaking(false) : undefined,
        onStopped: () => setSpeaking(false),
        onError: () => setSpeaking(false),
      }),
    );
  }

  function share() {
    if (!g) return;
    Share.share({ message: guideShareText(g, lang) }).catch(() => {});
  }

  return (
    <ScrollView contentContainerStyle={s.page}>
      <LevelBadge level={g.level} />
      <Text style={[s.title, { fontSize: type.h1 * sc, lineHeight: 34 * sc }]}>{t(g.title)}</Text>

      <View style={s.actions}>
        <Action icon={speaking ? '⏹️' : '🔊'} label={t(speaking ? ui.stopReading : ui.readAloud)} onPress={toggleSpeak} active={speaking} />
        <Action icon="📤" label={t(ui.share)} onPress={share} />
        <Action
          icon={prefs.isSaved(g.id) ? '★' : '☆'}
          label={t(prefs.isSaved(g.id) ? ui.saved : ui.save)}
          onPress={() => prefs.toggleSaved(g.id)}
          active={prefs.isSaved(g.id)}
        />
        <Action icon="A+" label={t(ui.bigText)} onPress={() => prefs.setBigText(!prefs.bigText)} active={prefs.bigText} />
      </View>

      <Text style={[s.summary, { fontSize: type.body * sc, lineHeight: 25 * sc }]}>{t(g.summary)}</Text>

      <Section title={t(ui.whoCanApply)}>
        {g.whoCanApply.map((x, i) => (
          <Bullet key={i}>{t(x)}</Bullet>
        ))}
      </Section>

      <Section title={`${t(ui.documents)}  ·  ${ticked}/${g.documents.length} ${t(ui.checklistProgress)}`}>
        <Text style={s.hint}>{t(ui.checklistHint)}</Text>
        {g.documents.map((x, i) => (
          <CheckRow key={i} checked={prefs.isTicked(g.id, i)} onToggle={() => prefs.toggleTick(g.id, i)}>
            {t(x)}
          </CheckRow>
        ))}
        {ticked > 0 && (
          <Pressable onPress={() => prefs.clearTicks(g.id)} style={s.link}>
            <Text style={s.smallLink}>↺ {t(ui.resetChecklist)}</Text>
          </Pressable>
        )}
      </Section>

      <Section title={t(ui.fees)}>
        {g.fees.map((f, i) => (
          <View key={i} style={[s.feeRow, i > 0 && s.feeDivider]}>
            <Text style={[s.feeItem, { fontSize: type.small * sc, lineHeight: 20 * sc }]}>{t(f.item)}</Text>
            <Text style={[s.feeAmount, { fontSize: type.body * sc, lineHeight: 24 * sc }]}>{t(f.amount)}</Text>
          </View>
        ))}
      </Section>

      {g.stages?.length ? (
        <Section title={t(ui.fullWalkthrough)}>
          {g.stages.map((st, si) => (
            <View key={si} style={s.stage}>
              <Text style={[s.stageTitle, { fontSize: type.h3 * sc, lineHeight: 26 * sc }]}>
                {t(ui.stageWord)} {si + 1} · {t(st.title)}
              </Text>
              {st.steps.map((x, i) => (
                <Step key={i} n={i + 1}>
                  {t(x)}
                </Step>
              ))}
              {st.note && <Text style={[s.stageNote, { fontSize: type.small * sc, lineHeight: 21 * sc }]}>💡 {t(st.note)}</Text>}
            </View>
          ))}
        </Section>
      ) : (
        <Section title={t(ui.steps)}>
          {g.steps.map((x, i) => (
            <Step key={i} n={i + 1}>
              {t(x)}
            </Step>
          ))}
        </Section>
      )}

      {g.costExample && (
        <Section title={t(ui.costExample)}>
          <Text style={[s.body, { fontSize: type.body * sc, lineHeight: 24 * sc }]}>{t(g.costExample)}</Text>
        </Section>
      )}

      {!!g.problems?.length && (
        <Section title={t(ui.problems)}>
          {g.problems.map((p, i) => (
            <View key={i} style={[s.problem, i > 0 && s.feeDivider]}>
              <Text style={[s.problemQ, { fontSize: type.body * sc, lineHeight: 24 * sc }]}>❓ {t(p.problem)}</Text>
              <Text style={[s.body, { fontSize: type.body * sc, lineHeight: 24 * sc }]}>✅ {t(p.fix)}</Text>
            </View>
          ))}
        </Section>
      )}

      {!!g.afterwards?.length && (
        <Section title={t(ui.afterwards)}>
          {g.afterwards.map((x, i) => (
            <Bullet key={i}>{t(x)}</Bullet>
          ))}
        </Section>
      )}

      <Section title={t(ui.whereToApply)}>
        {g.whereToApply.map((x, i) => (
          <Bullet key={i}>{t(x)}</Bullet>
        ))}
      </Section>

      <Section title={t(ui.timeline)}>
        <Text style={[s.body, { fontSize: type.body * sc, lineHeight: 24 * sc }]}>{t(g.timeline)}</Text>
      </Section>

      <Section title={t(ui.tips)}>
        {g.tips.map((x, i) => (
          <Bullet key={i}>{t(x)}</Bullet>
        ))}
      </Section>

      {(g.links.length > 0 || g.helpline) && (
        <Section title={t(ui.officialLinks)}>
          {g.links.map((l) => (
            <Pressable key={l.url} onPress={() => Linking.openURL(l.url)} style={s.link}>
              <Text style={s.linkText}>🔗 {l.label}</Text>
            </Pressable>
          ))}
          {g.helpline && (
            <Pressable onPress={() => Linking.openURL(`tel:${g.helpline!.number}`)} style={s.link}>
              <Text style={s.linkText}>
                📞 {t(g.helpline.label)}: {g.helpline.number}
              </Text>
            </Pressable>
          )}
        </Section>
      )}

      <View style={s.warn}>
        <Text style={s.warnText}>⚠️ {t(ui.disclaimer)}</Text>
        <Text style={s.checked}>
          {t(ui.lastChecked)}: {g.lastChecked}
        </Text>
        <Pressable onPress={() => setReportOpen(true)} style={s.reportBtn}>
          <Text style={s.reportText}>🚩 {t(ui.reportWrong)}</Text>
        </Pressable>
      </View>

      <Pressable style={s.askBtn} onPress={() => router.push({ pathname: '/ask', params: { guide: g.id } })}>
        <Text style={s.askBtnText}>💬 {t(ui.askAboutThis)}</Text>
      </Pressable>

      <ReportModal open={reportOpen} onClose={() => setReportOpen(false)} guideId={g.id} />
    </ScrollView>
  );
}

function Action({ icon, label, onPress, active }: { icon: string; label: string; onPress: () => void; active?: boolean }) {
  return (
    <Pressable onPress={onPress} style={[s.action, active && s.actionOn]} accessibilityRole="button" accessibilityLabel={label}>
      <Text style={[s.actionIcon, active && { color: '#fff' }]}>{icon}</Text>
      <Text style={[s.actionLabel, active && { color: '#fff' }]} numberOfLines={1}>
        {label}
      </Text>
    </Pressable>
  );
}

function ReportModal({ open, onClose, guideId }: { open: boolean; onClose: () => void; guideId: string }) {
  const { lang, t } = useLang();
  const g = getGuide(guideId);
  const [text, setText] = useState('');
  const [busy, setBusy] = useState(false);

  async function send() {
    if (!text.trim() || busy) return;
    setBusy(true);
    try {
      const body = `Guide: ${g ? g.title.en : guideId} (${guideId}, checked ${g?.lastChecked ?? '-'})\n\n${text.trim()}`;
      const how = await sendReport('Saayam: wrong information', body, lang, guideId);
      if (how === 'server') Alert.alert('🙏', t(ui.reportThanks));
      else if (how === 'email') Alert.alert('✉️', t(ui.reportEmail));
      setText('');
      onClose();
    } catch {
      Alert.alert('⚠️', t(ui.chatError));
    } finally {
      setBusy(false);
    }
  }

  return (
    <Modal visible={open} transparent animationType="slide" onRequestClose={onClose}>
      <View style={s.modalBg}>
        <View style={s.modal}>
          <Text style={s.modalTitle}>🚩 {t(ui.reportWrong)}</Text>
          <TextInput
            value={text}
            onChangeText={setText}
            placeholder={t(ui.reportPlaceholder)}
            placeholderTextColor={colors.muted}
            multiline
            style={s.modalInput}
            maxLength={2000}
          />
          <View style={s.modalRow}>
            <Pressable onPress={onClose} style={[s.modalBtn, s.modalCancel]}>
              <Text style={[s.modalBtnText, { color: colors.ink }]}>{t(ui.cancel)}</Text>
            </Pressable>
            <Pressable onPress={send} style={[s.modalBtn, (!text.trim() || busy) && { opacity: 0.5 }]}>
              <Text style={s.modalBtnText}>{t(ui.reportSend)}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const s = StyleSheet.create({
  stage: { marginBottom: space.md, paddingBottom: space.sm, borderBottomWidth: 1, borderBottomColor: colors.line },
  stageTitle: { fontWeight: '800', color: colors.primary, marginBottom: space.sm },
  stageNote: { color: colors.muted, backgroundColor: colors.primarySoft, borderRadius: radius.sm, padding: space.sm, marginTop: 4 },
  problem: { paddingVertical: space.sm, gap: 4 },
  problemQ: { fontWeight: '700', color: colors.ink },
  page: { padding: space.lg, paddingBottom: 56 },
  title: { fontSize: type.h1, fontWeight: '900', color: colors.ink, lineHeight: 34 },
  summary: { fontSize: type.body, color: colors.ink, lineHeight: 25, marginBottom: space.lg },
  body: { fontSize: type.body, color: colors.ink, lineHeight: 24 },
  actions: { flexDirection: 'row', gap: space.sm, marginTop: space.md, marginBottom: space.md },
  action: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: space.sm,
    borderRadius: radius.md,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.line,
  },
  actionOn: { backgroundColor: colors.primary, borderColor: colors.primary },
  actionIcon: { fontSize: 18, color: colors.primary, fontWeight: '900' },
  actionLabel: { fontSize: 11, color: colors.ink, marginTop: 2, fontWeight: '600' },
  hint: { fontSize: 13, color: colors.muted, marginBottom: space.sm, lineHeight: 18 },
  feeRow: { paddingVertical: space.sm },
  feeDivider: { borderTopWidth: 1, borderTopColor: colors.line },
  feeItem: { fontSize: type.small, color: colors.muted, lineHeight: 20 },
  feeAmount: { fontSize: type.body, fontWeight: '700', color: colors.ink, lineHeight: 24, marginTop: 2 },
  link: { paddingVertical: space.sm },
  linkText: { fontSize: type.body, color: colors.primary, fontWeight: '700' },
  smallLink: { fontSize: type.small, color: colors.primary, fontWeight: '600' },
  warn: { backgroundColor: colors.warnSoft, borderRadius: radius.md, padding: space.lg, marginBottom: space.lg },
  warnText: { color: colors.warnInk, fontSize: type.small, lineHeight: 21, fontWeight: '600' },
  checked: { color: colors.warnInk, fontSize: 12, marginTop: space.sm },
  reportBtn: { marginTop: space.md, alignSelf: 'flex-start' },
  reportText: { color: colors.warnInk, fontSize: type.small, fontWeight: '800', textDecorationLine: 'underline' },
  askBtn: { backgroundColor: colors.primary, borderRadius: radius.md, paddingVertical: 16, alignItems: 'center' },
  askBtnText: { color: '#fff', fontSize: type.body, fontWeight: '800' },
  modalBg: { flex: 1, backgroundColor: 'rgba(0,0,0,0.35)', justifyContent: 'flex-end' },
  modal: { backgroundColor: colors.card, borderTopLeftRadius: radius.lg, borderTopRightRadius: radius.lg, padding: space.lg },
  modalTitle: { fontSize: type.h3, fontWeight: '800', color: colors.ink, marginBottom: space.md },
  modalInput: {
    minHeight: 110,
    textAlignVertical: 'top',
    backgroundColor: colors.bg,
    borderRadius: radius.md,
    padding: space.md,
    fontSize: type.body,
    color: colors.ink,
  },
  modalRow: { flexDirection: 'row', gap: space.sm, marginTop: space.md },
  modalBtn: { flex: 1, backgroundColor: colors.primary, borderRadius: radius.md, paddingVertical: 14, alignItems: 'center' },
  modalCancel: { backgroundColor: colors.line },
  modalBtnText: { color: '#fff', fontWeight: '800', fontSize: type.body },
});
