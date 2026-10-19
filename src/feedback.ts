import { Linking, Share } from 'react-native';
import { API_URL, sendFeedback } from './api';
import { CONTACT_EMAIL } from './config';
import { Lang } from './types';

/**
 * Sends a "wrong information" report or a guide request.
 * - With a server (EXPO_PUBLIC_API_URL set): posts it there.
 * - Otherwise: opens the person's email app addressed to CONTACT_EMAIL.
 * - With neither configured: opens the share sheet so it can go by WhatsApp etc.
 * Returns how it was sent so the screen can say the right thing.
 */
export async function sendReport(subject: string, body: string, lang: Lang, guideId = 'request'): Promise<'server' | 'email' | 'share'> {
  if (API_URL) {
    await sendFeedback(guideId, lang, body);
    return 'server';
  }
  if (CONTACT_EMAIL) {
    const url = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    try {
      await Linking.openURL(url);
      return 'email';
    } catch {
      // No email app on the phone — fall through to the share sheet.
    }
  }
  await Share.share({ message: `${subject}\n\n${body}` });
  return 'share';
}
