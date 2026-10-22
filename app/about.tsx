import { useState } from 'react';
import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useMemo } from 'react';
import { APP_VERSION, CONTACT_EMAIL, PRIVACY_URL } from '../src/config';
import { allSources } from '../src/sources';
import { guides } from '../src/data/guides';
import { ui } from '../src/i18n';
import { useContent } from '../src/content';
import { useLang } from '../src/LanguageContext';
import { colors, radius, space, type } from '../src/theme';

export default function AboutScreen() {
  const content = useContent();
  const [upd, setUpd] = useState('');
  const [allSrc, setAllSrc] = useState(false);
  const sources = useMemo(() => allSources(), [content.version]);
  const { t } = useLang();
  return (
    <ScrollView contentContainerStyle={s.page}>
      <Text style={s.title}>{t(ui.aboutTitle)}</Text>

      <View style={s.notice}>
        <Text style={s.noticeTitle}>⚠️ {t(ui.notOfficialTitle)}</Text>
        <Text style={s.noticeText}>{t(ui.notOfficialBody)}</Text>
      </View>

      <Card title={t(ui.whatIsSaayam)}>
        <Text style={s.body}>{t(ui.whatIsSaayamBody).replace('{n}', String(guides.length))}</Text>
      </Card>

      <Card title={t(ui.updatesTitle)}>
        <Text style={s.body}>{t(ui.updatesBody).replace('{date}', content.date)}</Text>
        <Pressable
          style={s.link}
          disabled={content.checking}
          onPress={async () => {
            setUpd(t(ui.updChecking));
            const r = await content.checkNow();
            setUpd(t(r === 'updated' ? ui.updDone : r === 'latest' ? ui.updLatest : ui.updOffline));
          }}
        >
          <Text style={s.linkText}>🔄 {t(ui.checkUpdates)}</Text>
        </Pressable>
        {!!upd && <Text style={s.url}>{upd}</Text>}
      </Card>

      <Card title={t(ui.sourcesTitle)}>
        <Text style={s.body}>{t(ui.sourcesBody)}</Text>
        <Text style={s.url}>{t(ui.sourcesCount).replace('{n}', String(sources.length))}</Text>
        {(allSrc ? sources : sources.slice(0, 8)).map((src) => (
          <Pressable key={src.host} onPress={() => Linking.openURL(src.url)} style={s.link}>
            <Text style={s.linkText}>🔗 {src.host}</Text>
            <Text style={s.url}>{src.label}</Text>
          </Pressable>
        ))}
        {sources.length > 8 && (
          <Pressable onPress={() => setAllSrc(!allSrc)} style={s.link}>
            <Text style={s.linkText}>{allSrc ? t(ui.sourcesLess) : t(ui.sourcesAll).replace('{n}', String(sources.length))}</Text>
          </Pressable>
        )}
      </Card>

      <Card title={t(ui.privacyTitle)}>
        {[ui.privacy1, ui.privacy2, ui.privacy3, ui.privacy4, ui.privacy5].map((p, i) => (
          <View key={i} style={s.row}>
            <Text style={s.dot}>•</Text>
            <Text style={s.body}>{t(p)}</Text>
          </View>
        ))}
        {!!PRIVACY_URL && (
          <Pressable onPress={() => Linking.openURL(PRIVACY_URL)} style={s.link}>
            <Text style={s.linkText}>📄 {t(ui.fullPrivacy)}</Text>
          </Pressable>
        )}
      </Card>

      {!!CONTACT_EMAIL && (
        <Card title={t(ui.contactTitle)}>
          <Pressable onPress={() => Linking.openURL(`mailto:${CONTACT_EMAIL}?subject=Saayam`)} style={s.link}>
            <Text style={s.linkText}>✉️ {CONTACT_EMAIL}</Text>
          </Pressable>
        </Card>
      )}

      <Text style={s.version}>Saayam v{APP_VERSION}</Text>
    </ScrollView>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={s.card}>
      <Text style={s.cardTitle}>{title}</Text>
      {children}
    </View>
  );
}

const s = StyleSheet.create({
  page: { padding: space.lg, paddingBottom: 48 },
  title: { fontSize: type.h1, fontWeight: '900', color: colors.ink, marginBottom: space.lg },
  notice: { backgroundColor: colors.warnSoft, borderRadius: radius.md, padding: space.lg, marginBottom: space.md },
  noticeTitle: { color: colors.warnInk, fontWeight: '900', fontSize: type.h3, marginBottom: space.xs },
  noticeText: { color: colors.warnInk, fontSize: type.body, lineHeight: 24 },
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.md,
    padding: space.lg,
    marginBottom: space.md,
    borderWidth: 1,
    borderColor: colors.line,
  },
  cardTitle: { fontSize: type.h3, fontWeight: '800', color: colors.primary, marginBottom: space.sm },
  body: { flex: 1, fontSize: type.body, color: colors.ink, lineHeight: 24 },
  row: { flexDirection: 'row', gap: space.sm, marginBottom: space.sm },
  dot: { color: colors.accent, fontSize: type.body, lineHeight: 24 },
  link: { paddingVertical: space.sm },
  linkText: { fontSize: type.body, color: colors.primary, fontWeight: '700' },
  url: { fontSize: 12, color: colors.muted, marginTop: 1 },
  version: { textAlign: 'center', color: colors.muted, fontSize: 12, marginTop: space.md },
});
