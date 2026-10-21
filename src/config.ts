import Constants from 'expo-constants';

/** Public URL of the privacy policy (host docs/privacy-policy.html, e.g. on GitHub Pages). */
export const PRIVACY_URL = process.env.EXPO_PUBLIC_PRIVACY_URL || 'https://dattaharshithreddy.github.io/Saayam/privacy-policy.html';

/** Where reports and guide requests are emailed; also shown on the About screen. */
export const CONTACT_EMAIL = process.env.EXPO_PUBLIC_CONTACT_EMAIL || 'dattaharshithreddy@gmail.com';

import appJson from '../app.json';

/** Version from app.json (bundled at build time, so it is right on every platform). */
export const APP_VERSION: string = appJson.expo.version ?? Constants.expoConfig?.version ?? '1.0.0';

/** Official portals the guides are checked against — shown on the About screen (Play policy). */
export const OFFICIAL_SOURCES: { label: string; url: string }[] = [
  { label: 'Government of Andhra Pradesh', url: 'https://www.ap.gov.in' },
  { label: 'AP MeeSeva', url: 'https://ap.meeseva.gov.in' },
  { label: 'Village & Ward Secretariats (GSWS)', url: 'https://gsws.ap.gov.in' },
  { label: 'AP Registration & Stamps (IGRS)', url: 'https://registration.ap.gov.in' },
  { label: 'Meebhoomi land records', url: 'https://meebhoomi.ap.gov.in' },
  { label: 'National Government Services Portal', url: 'https://services.india.gov.in' },
  { label: 'myScheme (central schemes)', url: 'https://www.myscheme.gov.in' },
];

/** Guide updates are published here (docs/content on GitHub Pages) so fixes reach phones without a new APK. */
export const CONTENT_URL =
  process.env.EXPO_PUBLIC_CONTENT_URL || 'https://dattaharshithreddy.github.io/Saayam/content/manifest.json';
