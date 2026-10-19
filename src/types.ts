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
  steps: L[];
  whereToApply: L[];
  timeline: L;
  tips: L[];
  links: { label: string; url: string }[];
  helpline?: { label: L; number: string };
  /** Date the content was last checked against sources (YYYY-MM-DD). */
  lastChecked: string;
};
