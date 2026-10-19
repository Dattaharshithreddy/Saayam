import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { Linking, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GuideCard, LangToggle } from '../src/components';
import { categories } from '../src/data/categories';
import { searchDirectory } from '../src/data/directory';
import { guides, searchGuides } from '../src/data/guides';
import { DirRow } from '../src/DirRow';
import { ui } from '../src/i18n';
import { useLang } from '../src/LanguageContext';
import { usePrefs } from '../src/prefs';
import { colors, radius, space, type } from '../src/theme';

const POPULAR = [
  'property-name-correction',
  'caste-income-certificate',
  'pm-surya-ghar',
  'ntr-vaidya-seva',
  'rice-card',
  'ntr-bharosa-pension',
  'aadhaar-bank-dbt',
];

export default function Home() {
  const { t } = useLang();
  const router = useRouter();
  const { saved } = usePrefs();
  const savedGuides = saved.map((id) => guides.find((g) => g.id === id)).filter((g) => g !== undefined);
  const [query, setQuery] = useState('');
  const results = useMemo(() => searchGuides(query), [query]);
  const dirResults = useMemo(
    () => (query.trim() ? searchDirectory(query).filter((e) => !e.guideId) : []),
    [query],
  );
  const searching = query.trim().length > 0;

  return (
    <SafeAreaView style={s.safe} edges={['top']}>
      <ScrollView contentContainerStyle={s.page} keyboardShouldPersistTaps="handled">
        <View style={s.top}>
          <View style={{ flex: 1 }}>
            <Text style={s.brand}>{t(ui.appName)}</Text>
            <Text style={s.tagline}>{t(ui.tagline)}</Text>
          </View>
          <LangToggle />
        </View>

        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder={t(ui.searchPlaceholder)}
          placeholderTextColor={colors.muted}
          style={s.search}
          returnKeyType="search"
          accessibilityLabel={t(ui.searchPlaceholder)}
        />

        {searching ? (
          <View>
            {results.map((g) => (
              <GuideCard key={g.id} guide={g} />
            ))}
            {dirResults.length > 0 && <Text style={s.h2}>{t(ui.moreServices)}</Text>}
            {dirResults.map((e) => (
              <DirRow key={e.id} entry={e} />
            ))}
            {results.length === 0 && dirResults.length === 0 && <Text style={s.empty}>{t(ui.noResults)}</Text>}
            <AskCard initial={query} />
          </View>
        ) : (
          <>
            <AskCard />

            <Pressable style={s.dirBtn} onPress={() => router.push('/directory')}>
              <Text style={s.dirBtnTitle}>{t(ui.directoryButton)}</Text>
              <Text style={s.dirBtnBlurb}>{t(ui.directoryButtonBlurb)}</Text>
            </Pressable>

            {savedGuides.length > 0 && (
              <>
                <Text style={s.h2}>★ {t(ui.mySaved)}</Text>
                {savedGuides.map((g) => (
                  <GuideCard key={g.id} guide={g} />
                ))}
                <View style={{ height: space.md }} />
              </>
            )}

            <Text style={s.h2}>{t(ui.categories)}</Text>
            <View style={s.grid}>
              {categories.map((c) => (
                <Pressable
                  key={c.id}
                  style={s.tile}
                  android_ripple={{ color: colors.line }}
                  onPress={() => router.push({ pathname: '/category/[id]', params: { id: c.id } })}
                >
                    <Text style={s.tileIcon}>{c.icon}</Text>
                    <Text style={s.tileTitle}>{t(c.title)}</Text>
                    <Text style={s.tileBlurb} numberOfLines={2}>
                      {t(c.blurb)}
                    </Text>
                </Pressable>
              ))}
            </View>

            <Pressable style={s.banner} onPress={() => Linking.openURL('https://wa.me/919552300009?text=Hi')}>
              <Text style={s.bannerText}>💬 {t(ui.manaMitraBanner)}</Text>
            </Pressable>

            <Text style={s.h2}>{t(ui.popular)}</Text>
            {POPULAR.map((id) => guides.find((g) => g.id === id))
              .filter((g) => g !== undefined)
              .map((g) => (
                <GuideCard key={g.id} guide={g} />
              ))}
            <Pressable onPress={() => router.push('/about')} style={s.aboutLink} accessibilityRole="link">
              <Text style={s.aboutText}>ℹ️ {t(ui.aboutLink)}</Text>
            </Pressable>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

function AskCard({ initial }: { initial?: string }) {
  const { t } = useLang();
  const router = useRouter();
  return (
    <Pressable style={s.ask} onPress={() => router.push({ pathname: '/ask', params: initial ? { q: initial } : {} })}>
      <Text style={s.askTitle}>💬 {t(ui.askTitle)}</Text>
      <Text style={s.askBlurb}>{t(ui.askBlurb)}</Text>
    </Pressable>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  page: { padding: space.lg, paddingBottom: 48 },
  top: { flexDirection: 'row', alignItems: 'center', gap: space.md, marginBottom: space.lg },
  brand: { fontSize: 30, fontWeight: '900', color: colors.primary },
  tagline: { fontSize: type.small, color: colors.muted, marginTop: 2 },
  search: {
    backgroundColor: colors.card,
    borderWidth: 1.5,
    borderColor: colors.line,
    borderRadius: radius.md,
    paddingHorizontal: space.lg,
    paddingVertical: 14,
    fontSize: type.body,
    color: colors.ink,
    marginBottom: space.lg,
  },
  empty: { color: colors.muted, fontSize: type.body, marginBottom: space.md },
  ask: { backgroundColor: colors.primary, borderRadius: radius.lg, padding: space.lg, marginBottom: space.xl },
  askTitle: { color: '#fff', fontSize: type.h2, fontWeight: '800' },
  askBlurb: { color: '#D6EAE7', fontSize: type.small, marginTop: 4, lineHeight: 20 },
  h2: { fontSize: type.h2, fontWeight: '800', color: colors.ink, marginBottom: space.md },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: space.md },
  tile: {
    width: '48.5%',
    backgroundColor: colors.card,
    borderRadius: radius.md,
    padding: space.md,
    marginBottom: space.md,
    borderWidth: 1,
    borderColor: colors.line,
    minHeight: 118,
  },
  tileIcon: { fontSize: 26 },
  tileTitle: { fontSize: type.body, fontWeight: '800', color: colors.ink, marginTop: space.sm },
  tileBlurb: { fontSize: 13, color: colors.muted, marginTop: 2, lineHeight: 18 },
  dirBtn: {
    backgroundColor: colors.card,
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderRadius: radius.lg,
    padding: space.lg,
    marginTop: -space.md,
    marginBottom: space.xl,
  },
  dirBtnTitle: { fontSize: type.h3, fontWeight: '800', color: colors.primary },
  dirBtnBlurb: { fontSize: type.small, color: colors.muted, marginTop: 2, lineHeight: 20 },
  aboutLink: { marginTop: space.lg, paddingVertical: space.md, alignItems: 'center' },
  aboutText: { color: colors.muted, fontSize: type.small, textDecorationLine: 'underline', textAlign: 'center' },
  banner: { backgroundColor: colors.accentSoft, borderRadius: radius.md, padding: space.md, marginBottom: space.xl },
  bannerText: { color: '#8A4510', fontSize: type.small, fontWeight: '700', lineHeight: 20 },
});
