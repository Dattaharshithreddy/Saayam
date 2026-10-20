import { L } from '../types';
import type { DirGroup } from './directory';
import { b } from './bi';

/** Bilingual text shorthand. */
export const s = (en: string, te: string): L => b(en, te);
/** Problem / fix pair. */
export const P = (problem: [string, string], fix: [string, string]) => ({ problem: s(...problem), fix: s(...fix) });

/** One-line A–Z directory entry for a guide (title is taken from the guide). */
export type XDir = { guideId: string; group: DirGroup; what: L; where: L };
export const D = (guideId: string, group: DirGroup, what: [string, string], where: [string, string]): XDir => ({ guideId, group, what: s(...what), where: s(...where) });
