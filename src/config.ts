import Constants from 'expo-constants';

/** Public URL of the privacy policy (host docs/privacy-policy.html, e.g. on GitHub Pages). */
export const PRIVACY_URL = process.env.EXPO_PUBLIC_PRIVACY_URL || 'https://dattaharshithreddy.github.io/Saayam/privacy-policy.html';

/** Where reports and guide requests are emailed; also shown on the About screen. */
export const CONTACT_EMAIL = process.env.EXPO_PUBLIC_CONTACT_EMAIL || 'saayam.support@gmail.com';

import appJson from '../app.json';

/** Version from app.json (bundled at build time, so it is right on every platform). */
export const APP_VERSION: string = appJson.expo.version ?? Constants.expoConfig?.version ?? '1.0.0';


/** Guide updates are published here (docs/content on GitHub Pages) so fixes reach phones without a new APK. */
export const CONTENT_URL =
  process.env.EXPO_PUBLIC_CONTENT_URL || 'https://dattaharshithreddy.github.io/Saayam/content/manifest.json';
