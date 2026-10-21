import { useMemo, useState } from 'react';
import { SectionList, StyleSheet, Text, TextInput, View } from 'react-native';
import { dirGroups, searchDirectory } from '../src/data/directory';
import { DirRow } from '../src/DirRow';
import { ui } from '../src/i18n';
import { useContent } from '../src/content';
import { useLang } from '../src/LanguageContext';
import { colors, radius, space, type } from '../src/theme';

export default function DirectoryScreen() {
  const { version } = useContent();
  const { t } = useLang();
  const [query, setQuery] = useState('');
  const sections = useMemo(() => {
    const found = searchDirectory(query);
    return dirGroups
      .map((g) => ({ key: g.id, title: t(g.title), data: found.filter((e) => e.group === g.id) }))
      .filter((s) => s.data.length > 0);
  }, [query, t, version]);

  return (
    <SectionList
      sections={sections}
      keyExtractor={(e) => e.id}
      contentContainerStyle={s.page}
      keyboardShouldPersistTaps="handled"
      stickySectionHeadersEnabled={false}
      ListHeaderComponent={
        <View>
          <Text style={s.title}>{t(ui.directoryTitle)}</Text>
          <Text style={s.blurb}>{t(ui.directoryBlurb)}</Text>
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder={t(ui.searchPlaceholder)}
            placeholderTextColor={colors.muted}
            style={s.search}
            accessibilityLabel={t(ui.searchPlaceholder)}
          />
        </View>
      }
      ListEmptyComponent={<Text style={s.empty}>{t(ui.noResults)}</Text>}
      renderSectionHeader={({ section }) => <Text style={s.group}>{section.title}</Text>}
      renderItem={({ item }) => <DirRow entry={item} />}
    />
  );
}

const s = StyleSheet.create({
  page: { padding: space.lg, paddingBottom: 48 },
  title: { fontSize: type.h1, fontWeight: '900', color: colors.ink },
  blurb: { fontSize: type.small, color: colors.muted, marginTop: 4, marginBottom: space.md, lineHeight: 20 },
  search: {
    backgroundColor: colors.card,
    borderWidth: 1.5,
    borderColor: colors.line,
    borderRadius: radius.md,
    paddingHorizontal: space.lg,
    paddingVertical: 12,
    fontSize: type.body,
    color: colors.ink,
    marginBottom: space.md,
  },
  empty: { color: colors.muted, fontSize: type.body },
  group: { fontSize: type.h3, fontWeight: '800', color: colors.primary, marginTop: space.lg, marginBottom: space.sm },

});
