import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LangToggle } from '../src/components';
import { ContentProvider } from '../src/content';
import { LanguageProvider } from '../src/LanguageContext';
import { PrefsProvider } from '../src/prefs';
import { RemindersProvider } from '../src/reminders';
import { colors } from '../src/theme';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <LanguageProvider>
        <PrefsProvider>
        <ContentProvider>
        <RemindersProvider>
        <StatusBar style="dark" />
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: colors.bg },
            headerShadowVisible: false,
            headerTintColor: colors.primary,
            headerTitle: '',
            headerRight: () => <LangToggle />,
            contentStyle: { backgroundColor: colors.bg },
          }}
        >
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
        </RemindersProvider>
        </ContentProvider>
        </PrefsProvider>
      </LanguageProvider>
    </SafeAreaProvider>
  );
}
