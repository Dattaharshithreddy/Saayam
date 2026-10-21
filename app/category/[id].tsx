import { useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { GuideCard } from '../../src/components';
import { categories } from '../../src/data/categories';
import { guides } from '../../src/data/guides';
import { useContent } from '../../src/content';
import { useLang } from '../../src/LanguageContext';
import { colors, space, type } from '../../src/theme';

export default function CategoryScreen() {
  useContent();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t } = useLang();
  const cat = categories.find((c) => c.id === id);
  if (!cat) return null;
  const list = guides.filter((g) => g.category === cat.id);

  return (
    <ScrollView contentContainerStyle={s.page}>
      <Text style={s.icon}>{cat.icon}</Text>
      <Text style={s.title}>{t(cat.title)}</Text>
      <Text style={s.blurb}>{t(cat.blurb)}</Text>
      {list.map((g) => (
        <GuideCard key={g.id} guide={g} />
      ))}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { padding: space.lg, paddingBottom: 48 },
  icon: { fontSize: 36 },
  title: { fontSize: type.h1, fontWeight: '900', color: colors.ink, marginTop: space.sm },
  blurb: { fontSize: type.body, color: colors.muted, marginBottom: space.lg, marginTop: 2 },
});
