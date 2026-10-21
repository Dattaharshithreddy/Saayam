import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { KeyboardAvoidingView, Linking, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import type { ScrollViewInstance } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { act, Action, BotReply, Chip, requestPrompt, respond, welcome } from '../src/bot/engine';
import { LevelBadge } from '../src/components';
import { getGuide } from '../src/data/guides';
import { sendReport } from '../src/feedback';
import { ui } from '../src/i18n';
import { useContent } from '../src/content';
import { useLang } from '../src/LanguageContext';
import { usePrefs } from '../src/prefs';
import { colors, radius, space, type } from '../src/theme';

type Msg = { from: 'bot' | 'me'; text: string; results?: string[]; chips?: Chip[] };

/** Saayam — offline helper that answers only from the guides inside the app. */
export default function SaayamBot() {
  useContent();
  const params = useLocalSearchParams<{ q?: string; guide?: string }>();
  const router = useRouter();
  const { lang, t } = useLang();
  const { scale } = usePrefs();
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const focus = useRef<string | undefined>(params.guide);
  const lastQuestion = useRef('');
  const scroller = useRef<ScrollViewInstance>(null);

  // First message (and an immediate answer if we came from the home search box).
  // Re-run when the saved language finishes loading, until the person has typed something.
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    const first = welcome(lang, params.guide);
    focus.current = first.focus ?? params.guide;
    const start: Msg[] = [toMsg(first)];
    if (params.q?.trim()) {
      lastQuestion.current = params.q.trim();
      const r = respond(params.q, lang, focus.current);
      if (r.focus) focus.current = r.focus;
      start.push({ from: 'me', text: params.q.trim() }, toMsg(r));
    }
    setMsgs(start);
    if (params.q?.trim()) started.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  useEffect(() => {
    const id = setTimeout(() => scroller.current?.scrollToEnd({ animated: true }), 50);
    return () => clearTimeout(id);
  }, [msgs, typing]);

  function botSays(r: BotReply | undefined) {
    if (!r) return;
    if (r.focus) focus.current = r.focus;
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [...m, toMsg(r)]);
    }, 350);
  }

  function send() {
    const text = input.trim();
    if (!text) return;
    started.current = true;
    lastQuestion.current = text;
    setInput('');
    setMsgs((m) => [...m, { from: 'me', text }]);
    botSays(respond(text, lang, focus.current));
  }

  async function onChip(c: Chip) {
    const a: Action = c.action;
    started.current = true;
    if (a.kind === 'open') return router.push(`/guide/${a.id}`);
    if (a.kind === 'whatsapp') return Linking.openURL('https://wa.me/919552300009?text=Hi');
    if (a.kind === 'eligibility') return router.push('/eligibility');
    if (a.kind === 'reminders') return router.push('/reminders');
    if (a.kind === 'request') {
      setMsgs((m) => [...m, { from: 'me', text: c.label }, { from: 'bot', text: requestPrompt(lang) }]);
      const body = `${lang === 'te' ? 'నాకు ఈ విషయంపై గైడ్ కావాలి' : 'I need a guide about'}: ${lastQuestion.current || '…'}`;
      try {
        await sendReport('Saayam: guide request', body, lang);
      } catch {
        /* the person can try again */
      }
      return;
    }
    setMsgs((m) => [...m, { from: 'me', text: c.label }]);
    botSays(act(a, lang));
  }

  function openResult(id: string) {
    started.current = true;
    const g = getGuide(id);
    if (!g) return;
    setMsgs((m) => [...m, { from: 'me', text: t(g.title) }]);
    botSays(act({ kind: 'guide', id }, lang));
  }

  const fs = (n: number) => n * scale;

  return (
    <SafeAreaView style={s.safe} edges={['bottom']}>
      <Stack.Screen options={{ title: t(ui.botTitle) }} />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView ref={scroller} contentContainerStyle={s.list} keyboardShouldPersistTaps="handled">
          {msgs.map((m, i) =>
            m.from === 'me' ? (
              <View key={i} style={[s.bubble, s.mine]}>
                <Text style={[s.text, { color: '#fff', fontSize: fs(type.body) }]}>{m.text}</Text>
              </View>
            ) : (
              <View key={i} style={s.botRow}>
                <View style={s.avatar}>
                  <Text style={s.avatarText}>సా</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <View style={[s.bubble, s.theirs]}>
                    <Text style={[s.text, { fontSize: fs(type.body), lineHeight: fs(24) }]} selectable>
                      {m.text}
                    </Text>
                  </View>
                  {m.results?.map((id) => {
                    const g = getGuide(id);
                    if (!g) return null;
                    return (
                      <Pressable key={id} style={s.result} onPress={() => openResult(id)} accessibilityRole="button">
                        <LevelBadge level={g.level} />
                        <Text style={[s.resultTitle, { fontSize: fs(type.body) }]}>{t(g.title)}</Text>
                        <Text style={s.resultArrow}>›</Text>
                      </Pressable>
                    );
                  })}
                  {!!m.chips?.length && i === msgs.length - 1 && (
                    <View style={s.chips}>
                      {m.chips.map((c, k) => (
                        <Pressable key={k} style={[s.chip, c.action.kind === 'open' && s.chipPrimary]} onPress={() => onChip(c)} accessibilityRole="button">
                          <Text style={[s.chipText, c.action.kind === 'open' && { color: '#fff' }]}>{c.label}</Text>
                        </Pressable>
                      ))}
                    </View>
                  )}
                </View>
              </View>
            ),
          )}
          {typing && <Text style={s.typing}>{t(ui.botTyping)}</Text>}
          <Text style={s.note}>{t(ui.botNote)}</Text>
        </ScrollView>

        <View style={s.composer}>
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder={t(ui.chatPlaceholder)}
            placeholderTextColor={colors.muted}
            style={s.input}
            multiline
            onSubmitEditing={send}
            blurOnSubmit
            returnKeyType="send"
            accessibilityLabel={t(ui.chatPlaceholder)}
          />
          <Pressable onPress={send} disabled={!input.trim()} style={[s.send, !input.trim() && { opacity: 0.5 }]} accessibilityRole="button">
            <Text style={s.sendText}>{t(ui.send)}</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const toMsg = (r: BotReply): Msg => ({ from: 'bot', text: r.text, results: r.results, chips: r.chips });

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  list: { padding: space.lg, paddingBottom: space.xl },
  botRow: { flexDirection: 'row', gap: space.sm, alignItems: 'flex-start', marginBottom: space.sm },
  avatar: { width: 34, height: 34, borderRadius: 17, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', marginTop: 2 },
  avatarText: { color: '#fff', fontWeight: '800', fontSize: 14 },
  bubble: { maxWidth: '92%', borderRadius: radius.lg, padding: space.md, marginBottom: space.sm },
  mine: { alignSelf: 'flex-end', backgroundColor: colors.primary, borderBottomRightRadius: 4, maxWidth: '80%' },
  theirs: { alignSelf: 'flex-start', backgroundColor: colors.card, borderWidth: 1, borderColor: colors.line, borderTopLeftRadius: 4 },
  text: { color: colors.ink, lineHeight: 24 },
  result: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.sm,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.primarySoft,
    borderRadius: radius.md,
    paddingVertical: space.sm,
    paddingHorizontal: space.md,
    marginBottom: 6,
  },
  resultTitle: { flex: 1, color: colors.primary, fontWeight: '700' },
  resultArrow: { color: colors.primary, fontSize: 22, fontWeight: '700' },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: 2, marginBottom: space.sm },
  chip: { backgroundColor: colors.primarySoft, borderRadius: 999, paddingHorizontal: space.md, paddingVertical: 8 },
  chipPrimary: { backgroundColor: colors.primary },
  chipText: { color: colors.primary, fontWeight: '700', fontSize: type.small },
  typing: { color: colors.muted, fontSize: type.small, marginLeft: 42, marginBottom: space.sm },
  note: { textAlign: 'center', color: colors.muted, fontSize: 12, marginTop: space.lg },
  composer: {
    flexDirection: 'row',
    gap: space.sm,
    padding: space.md,
    borderTopWidth: 1,
    borderTopColor: colors.line,
    backgroundColor: colors.card,
    alignItems: 'flex-end',
  },
  input: {
    flex: 1,
    maxHeight: 120,
    fontSize: type.body,
    color: colors.ink,
    backgroundColor: colors.bg,
    borderRadius: radius.md,
    paddingHorizontal: space.md,
    paddingVertical: 10,
  },
  send: { backgroundColor: colors.accent, borderRadius: radius.md, paddingHorizontal: space.lg, paddingVertical: 12 },
  sendText: { color: '#fff', fontWeight: '800', fontSize: type.body },
});
