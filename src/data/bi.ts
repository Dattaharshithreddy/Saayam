import { L } from '../types';

/** Shorthand for a bilingual string: b('English', 'తెలుగు'). */
export const b = (en: string, te: string): L => ({ en, te });

/** Shorthand for a fee row. */
export const fee = (item: L, amount: L) => ({ item, amount });

export const CHECKED = '2026-10-19';
