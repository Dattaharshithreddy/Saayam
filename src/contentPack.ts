import type { DirEntry } from './data/directory';
import type { Rule } from './data/eligibility';
import { Guide } from './types';

/** A full content update: every guide, directory line and eligibility rule. Pure data — no app code. */
export type ContentPack = {
  version: number;
  date: string;
  minApp?: string;
  guides: Guide[];
  directory: DirEntry[];
  rules: Rule[];
};

/** True when this content needs a newer app than `appVersion`. */
export function newerApp(required: string | undefined, appVersion = APP_VERSION_FALLBACK.value): boolean {
  if (!required) return false;
  const a = appVersion.split('.').map(Number);
  const r = required.split('.').map(Number);
  for (let i = 0; i < 3; i++) {
    if ((r[i] ?? 0) > (a[i] ?? 0)) return true;
    if ((r[i] ?? 0) < (a[i] ?? 0)) return false;
  }
  return false;
}

/** The running app sets this at start-up; scripts leave it at a high value. */
export const APP_VERSION_FALLBACK = { value: '999.0.0' };

const isL = (x: unknown) => !!x && typeof (x as any).en === 'string' && typeof (x as any).te === 'string';

/** Reject anything that would break the app. */
export function validPack(p: unknown): p is ContentPack {

  const c = p as ContentPack;
  if (!c || typeof c.version !== 'number' || !Array.isArray(c.guides) || !Array.isArray(c.directory) || !Array.isArray(c.rules)) return false;
  if (c.guides.length < 100 || newerApp(c.minApp)) return false;
  const ids = new Set<string>();
  for (const g of c.guides) {
    if (!g || typeof g.id !== 'string' || ids.has(g.id)) return false;
    ids.add(g.id);
    if (!isL(g.title) || !isL(g.summary) || typeof g.category !== 'string') return false;
    if (!Array.isArray(g.documents) || !Array.isArray(g.fees) || !Array.isArray(g.steps) || !Array.isArray(g.keywords)) return false;
    if (!Array.isArray(g.whoCanApply) || !Array.isArray(g.whereToApply) || !Array.isArray(g.tips) || !Array.isArray(g.links)) return false;
  }
  for (const d of c.directory) if (!d || typeof d.id !== 'string' || !isL(d.title) || !isL(d.what)) return false;
  for (const r of c.rules) if (!r || typeof r.guideId !== 'string' || !r.when) return false;
  return true;
}
