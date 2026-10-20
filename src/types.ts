export type Lang = 'en' | 'te';

/** A piece of text in both languages. */
export type L = { en: string; te: string };

export type CategoryId =
  | 'property'
  | 'certificates'
  | 'health'
  | 'power'
  | 'farmers'
  | 'welfare'
  | 'food'
  | 'town'
  | 'education'
  | 'transport'
  | 'safety'
  | 'law'
  | 'money'
  | 'digital'
  | 'business'
  | 'abroad';

export type Category = {
  id: CategoryId;
  icon: string;
  title: L;
  blurb: L;
};

export type Fee = { item: L; amount: L };

/** One stage of a full walkthrough, e.g. "Learner's licence test", with detailed sub-steps. */
export type Stage = { title: L; steps: L[]; note?: L };

/** A common problem and exactly what to do about it. */
export type Problem = { problem: L; fix: L };

export type Guide = {
  id: string;
  category: CategoryId;
  /** Who runs it: AP state, Government of India, or both together. */
  level: 'state' | 'central' | 'both';
  title: L;
  summary: L;
  /** Extra words people may search with (both scripts). */
  keywords: string[];
  whoCanApply: L[];
  documents: L[];
  fees: Fee[];
  /** Short version of the process (always present; used when there is no walkthrough). */
  steps: L[];
  /** Full A-to-Z walkthrough, stage by stage. When present, the app shows this instead of `steps`. */
  stages?: Stage[];
  /** Worked example of the total cost. */
  costExample?: L;
  /** "If it goes wrong" — rejections, mistakes and how to fix them. */
  problems?: Problem[];
  /** What to do after you get it (renewals, linked updates). */
  afterwards?: L[];
  whereToApply: L[];
  timeline: L;
  tips: L[];
  links: { label: string; url: string }[];
  helpline?: { label: L; number: string };
  /** Date the content was last checked against sources (YYYY-MM-DD). */
  lastChecked: string;
};
