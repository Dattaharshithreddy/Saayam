import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { DirEntry } from './data/directory';
import { ui } from './i18n';
import { useLang } from './LanguageContext';
import { colors, radius, space, type } from './theme';

export function DirRow({ entry }: { entry: DirEntry }) {
  const { t } = useLang();
  const router = useRouter();
  const open = () => {
    if (entry.guideId) router.push({ pathname: '/guide/[id]', params: { id: entry.guideId } });
    else router.push({ pathname: '/ask', params: { q: `${t(ui.howTo)} ${t(entry.title)}?` } });
  };
  return (
    <Pressable style={s.row} onPress={open} android_ripple={{ color: colors.line }}>
      <View style={{ flex: 1 }}>
        <Text style={s.rowTitle}>{t(entry.title)}</Text>
        <Text style={s.rowWhat}>{t(entry.what)}</Text>
        <Text style={s.rowWhere}>📍 {t(entry.where)}</Text>
      </View>
      <View style={[s.tag, entry.status === 'announced' ? s.tagWarn : entry.guideId ? s.tagGuide : s.tagAsk]}>
        <Text style={[s.tagText, entry.status === 'announced' ? { color: colors.warnInk } : entry.guideId ? { color: colors.primary } : { color: '#8A4510' }]}>
          {entry.status === 'announced' ? t(ui.notStarted) : entry.guideId ? t(ui.fullGuide) : t(ui.askShort)}
        </Text>
      </View>
    </Pressable>
  );
}

const s = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: space.md,
    backgroundColor: colors.card,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.line,
    padding: space.md,
    marginBottom: space.sm,
    alignItems: 'flex-start',
  },
  rowTitle: { fontSize: type.body, fontWeight: '800', color: colors.ink, lineHeight: 22 },
  rowWhat: { fontSize: type.small, color: colors.ink, marginTop: 2, lineHeight: 20 },
  rowWhere: { fontSize: 13, color: colors.muted, marginTop: 4, lineHeight: 18 },
  tag: { borderRadius: 999, paddingHorizontal: 8, paddingVertical: 3 },
  tagGuide: { backgroundColor: colors.primarySoft },
  tagAsk: { backgroundColor: colors.accentSoft },
  tagWarn: { backgroundColor: colors.warnSoft },
  tagText: { fontSize: 11, fontWeight: '800' },
});
