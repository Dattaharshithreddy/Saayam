import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ui } from './i18n';
import { useLang } from './LanguageContext';
import { usePrefs } from './prefs';
import { colors, radius, space, type } from './theme';
import { Guide } from './types';

export function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <View style={s.toggle} accessibilityRole="radiogroup">
      {(['te', 'en'] as const).map((l) => (
        <Pressable
          key={l}
          onPress={() => setLang(l)}
          style={[s.toggleBtn, lang === l && s.toggleOn]}
          accessibilityRole="radio"
          accessibilityState={{ selected: lang === l }}
        >
          <Text style={[s.toggleText, lang === l && s.toggleTextOn]}>{l === 'te' ? 'తెలుగు' : 'English'}</Text>
        </Pressable>
      ))}
    </View>
  );
}

export function LevelBadge({ level }: { level: Guide['level'] }) {
  const { t } = useLang();
  const isState = level === 'state';
  return (
    <View style={[s.badge, { backgroundColor: isState ? colors.primarySoft : colors.centralSoft }]}>
      <Text style={[s.badgeText, { color: isState ? colors.primary : colors.central }]}>{t(ui[level])}</Text>
    </View>
  );
}

export function GuideCard({ guide }: { guide: Guide }) {
  const { t } = useLang();
  const router = useRouter();
  return (
    <Pressable
      style={s.card}
      android_ripple={{ color: colors.line }}
      onPress={() => router.push({ pathname: '/guide/[id]', params: { id: guide.id } })}
    >
      <LevelBadge level={guide.level} />
      <Text style={s.cardTitle}>{t(guide.title)}</Text>
      <Text style={s.cardSummary} numberOfLines={2}>
        {t(guide.summary)}
      </Text>
    </Pressable>
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={s.section}>
      <Text style={s.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

/** Body text that follows the "bigger text" setting. */
function useBody() {
  const { scale } = usePrefs();
  return { fontSize: type.body * scale, lineHeight: 24 * scale };
}

export function Bullet({ children }: { children: string }) {
  const body = useBody();
  return (
    <View style={s.row}>
      <Text style={[s.dot, { lineHeight: body.lineHeight }]}>•</Text>
      <Text style={[s.body, body]}>{children}</Text>
    </View>
  );
}

export function Step({ n, children }: { n: number; children: string }) {
  const body = useBody();
  return (
    <View style={s.row}>
      <View style={s.stepNum}>
        <Text style={s.stepNumText}>{n}</Text>
      </View>
      <Text style={[s.body, body]}>{children}</Text>
    </View>
  );
}

/** A document the reader can tick off as they collect it. */
export function CheckRow({ checked, onToggle, children }: { checked: boolean; onToggle: () => void; children: string }) {
  const body = useBody();
  return (
    <Pressable
      style={s.row}
      onPress={onToggle}
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}
      hitSlop={6}
    >
      <View style={[s.box, checked && s.boxOn]}>{checked && <Text style={s.tick}>✓</Text>}</View>
      <Text style={[s.body, body, checked && s.done]}>{children}</Text>
    </Pressable>
  );
}

const s = StyleSheet.create({
  toggle: { flexDirection: 'row', backgroundColor: colors.primarySoft, borderRadius: 999, padding: 3 },
  toggleBtn: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 999 },
  toggleOn: { backgroundColor: colors.primary },
  toggleText: { fontSize: type.small, color: colors.primary, fontWeight: '600' },
  toggleTextOn: { color: '#fff' },
  badge: { alignSelf: 'flex-start', borderRadius: 999, paddingHorizontal: 10, paddingVertical: 3, marginBottom: space.sm },
  badgeText: { fontSize: 12, fontWeight: '700' },
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.md,
    padding: space.lg,
    borderWidth: 1,
    borderColor: colors.line,
    marginBottom: space.md,
  },
  cardTitle: { fontSize: type.h3, fontWeight: '700', color: colors.ink, lineHeight: 24 },
  cardSummary: { fontSize: type.small, color: colors.muted, marginTop: space.xs, lineHeight: 21 },
  section: {
    backgroundColor: colors.card,
    borderRadius: radius.md,
    padding: space.lg,
    marginBottom: space.md,
    borderWidth: 1,
    borderColor: colors.line,
  },
  sectionTitle: { fontSize: type.h3, fontWeight: '800', color: colors.primary, marginBottom: space.md },
  row: { flexDirection: 'row', gap: space.sm, marginBottom: space.sm, alignItems: 'flex-start' },
  dot: { fontSize: type.body, color: colors.accent, lineHeight: 24 },
  body: { flex: 1, fontSize: type.body, color: colors.ink, lineHeight: 24 },
  stepNum: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  box: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  boxOn: { backgroundColor: colors.primary },
  tick: { color: '#fff', fontWeight: '900', fontSize: 14 },
  done: { color: colors.muted, textDecorationLine: 'line-through' },
  stepNumText: { color: '#fff', fontWeight: '800', fontSize: 13 },
});
