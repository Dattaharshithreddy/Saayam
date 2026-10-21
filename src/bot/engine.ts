/**
 * Saayam — the offline helper. It never goes online: it matches what the person types
 * (English, Telugu or Tenglish) against the guides inside the app and answers from them.
 */
import { categories } from '../data/categories';
import { getGuide, guides } from '../data/guides';
import { CategoryId, Guide, L, Lang } from '../types';
import { concepts, greetingWords, lifeEvents, Section, sectionWords, stopWords, thanksWords } from './vocab';

export type Action =
  | { kind: 'cat'; id: CategoryId }
  | { kind: 'guide'; id: string }
  | { kind: 'section'; id: string; section: Section }
  | { kind: 'open'; id: string }
  | { kind: 'topics' }
  | { kind: 'request' }
  | { kind: 'whatsapp' }
  | { kind: 'eligibility' }
  | { kind: 'reminders' };

export type Chip = { label: string; action: Action };

export type BotReply = {
  text: string;
  /** Guides offered as tappable results. */
  results?: string[];
  chips?: Chip[];
  /** The guide this answer is about — follow-up questions like "fee?" refer to it. */
  focus?: string;
};

const T = (l: L, lang: Lang) => l[lang];
const tx = (en: string, te: string): L => ({ en, te });

// ───────────────────────────────────────── text matching

/** Lower-case, drop punctuation and Telugu zero-width joiners, pad with spaces. */
export function normalize(s: string): string {
  return (
    ' ' +
    s
      .toLowerCase()
      .replace(/[‌‍]/g, '')
      // "NRIలు", "aadhaarలో" → "nri లు": split English words from Telugu endings
      .replace(/([a-z0-9])([\u0C00-\u0C7F])/g, '$1 $2')
      .replace(/([\u0C00-\u0C7F])([a-z0-9])/g, '$1 $2')
      .replace(/[^\p{L}\p{M}\p{N}]+/gu, ' ')
      .trim() +
    ' '
  );
}

const TELUGU = /[ఀ-౿]/;
const WHOLE_WORD = new Set(['neet', 'auto', 'case', 'bore', 'bed', 'law', 'vote', 'body', 'site', 'time', 'days', 'when', 'call', 'link', 'tips', 'shop', 'job', 'pan', 'gas', 'tap', 'pig', 'cow', 'vet', 'ttd', 'ews', 'obc', 'ncl', 'rte', 'ssc', 'iti', 'mba', 'mca', 'llb', 'kcc', 'pf', 'epf', 'uan', 'rc', 'ec', 'ccrc', 'msp', 'dbt', 'nri', 'nris', 'gst', 'bds', 'll', 'uid', 'rti', 'fir', 'mbbs']);
const normCache = new Map<string, string>();
function norm(word: string): string {
  let n = normCache.get(word);
  if (n === undefined) {
    n = normalize(word).trim();
    normCache.set(word, n);
  }
  return n;
}

/** Does the (normalized) query contain this word or phrase? */
export function has(q: string, word: string): boolean {
  const w = norm(word);
  if (!w) return false;
  if (TELUGU.test(w)) return q.includes(w);
  if (w.length <= 3 || WHOLE_WORD.has(w)) return q.includes(` ${w} `) || q.includes(` ${w}s `);
  return q.includes(` ${w}`);
}

// ───────────────────────────────────────── guide index

type Indexed = { g: Guide; keywords: string[]; titleWords: string[] };

function buildIndex(): Indexed[] {
  return guides.map((g) => {
    const titleWords = [g.title.en, g.title.te]
      .flatMap((t) => normalize(t).trim().split(' '))
      .filter((w) => (TELUGU.test(w) ? w.length >= 3 : w.length >= 4 && !stopWords.has(w)));
    return { g, keywords: g.keywords ?? [], titleWords: [...new Set(titleWords)] };
  });
}

let index: Indexed[] = buildIndex();

/** Call after the guides list has been replaced by a content update. */
export function rebuildIndex() {
  index = buildIndex();
}

/** Score every guide for a query. Higher is better. */
export function rank(query: string): { id: string; score: number }[] {
  const q = normalize(query);
  const scores = new Map<string, number>();
  const add = (id: string, n: number) => scores.set(id, (scores.get(id) ?? 0) + n);

  for (const c of concepts) {
    const hits = c.words.filter((w) => has(q, w)).length;
    if (hits) c.guides.forEach((id, i) => add(id, 5 + Math.min(hits - 1, 2) * 2 - i * 1.5));
  }
  for (const { g, keywords, titleWords } of index) {
    let n = 0;
    for (const k of keywords) if (has(q, k)) n += norm(k).includes(' ') ? 6 : 4;
    for (const w of titleWords) if (has(q, w)) n += 2;
    if (n) add(g.id, n);
  }
  return [...scores.entries()]
    .map(([id, score]) => ({ id, score }))
    .filter((x) => getGuide(x.id))
    .sort((a, b) => b.score - a.score);
}

function detectSection(q: string): Section | undefined {
  const order: Section[] = ['fees', 'docs', 'who', 'where', 'time', 'links', 'tips'];
  return order.find((s) => sectionWords[s].some((w) => has(q, w)));
}

// ───────────────────────────────────────── replies

const toolWords = {
  eligibility: ['what can i get', 'what can we get', 'eligible', 'eligibility', 'which schemes', 'schemes for me', 'naku emi vastayi', 'maku emi vastayi', 'ఏమేమి వస్తాయి', 'ఏమి వస్తాయి', 'అర్హత', 'ఏ పథకాలు'],
  reminders: ['remind', 'reminder', 'alert me', 'gurthu cheyi', 'గుర్తు చేయ', 'రిమైండర్'],
};

const L_ = {
  toolElig: tx(
    'Answer a few quick questions and I\'ll show every scheme your family may be eligible for.',
    'కొన్ని చిన్న ప్రశ్నలకు సమాధానం ఇవ్వండి — మీ కుటుంబానికి అర్హత ఉండే ప్రతి పథకం చూపిస్తాను.',
  ),
  toolRem: tx(
    'I can remind you before your licence, insurance, tax or pension-certificate dates. Open reminders:',
    'లైసెన్స్, బీమా, పన్ను, పెన్షన్ ధృవీకరణ తేదీలకు ముందే గుర్తు చేయగలను. రిమైండర్లు తెరవండి:',
  ),
  welcome: tx(
    'Namaste! I\'m Saayam. Tell me your problem in your own words — in Telugu or English — or pick a topic below.\n\nFor example: "my father died, land in his name", "caste certificate", "pension not received", "TTD darshan".',
    'నమస్తే! నేను సాయం. మీ సమస్యను మీ మాటల్లో చెప్పండి — తెలుగు లేదా ఇంగ్లీష్‌లో — లేదా కింద విభాగం ఎంచుకోండి.\n\nఉదాహరణకు: "నాన్న చనిపోయారు, భూమి ఆయన పేరు మీద ఉంది", "కుల ధృవీకరణ పత్రం", "పెన్షన్ రాలేదు", "TTD దర్శనం".',
  ),
  aboutGuide: tx('What do you want to know about "{t}"?', '"{t}" గురించి ఏం తెలుసుకోవాలి?'),
  found: tx('These guides match what you wrote. Tap one:', 'మీరు రాసినదానికి ఈ గైడ్‌లు సరిపోతాయి. ఒకటి నొక్కండి:'),
  oneMatch: tx('I think this is what you need:', 'మీకు కావాల్సింది ఇదే అనుకుంటున్నాను:'),
  alsoSee: tx('Also related:', 'సంబంధితమైనవి:'),
  notFound: tx(
    'Sorry, I couldn\'t find a guide for that. Try different words (e.g. "pension", "land mutation", "caste certificate") or pick a topic.\n\nYou can also send "Hi" to Mana Mitra WhatsApp 9552300009, or ask at your Village / Ward Secretariat.',
    'క్షమించండి, దానికి గైడ్ దొరకలేదు. వేరే పదాలతో ప్రయత్నించండి (ఉదా: "పెన్షన్", "మ్యుటేషన్", "కుల ధృవీకరణ") లేదా విభాగం ఎంచుకోండి.\n\nమన మిత్ర వాట్సాప్ 9552300009కి "Hi" పంపవచ్చు, లేదా మీ గ్రామ / వార్డు సచివాలయంలో అడగవచ్చు.',
  ),
  hello: tx('Namaste! What do you need help with?', 'నమస్తే! మీకు ఏ విషయంలో సహాయం కావాలి?'),
  thanks: tx('You\'re welcome! Ask me anything else anytime. 🙏', 'సంతోషం! ఇంకేదైనా ఎప్పుడైనా అడగండి. 🙏'),
  catIntro: tx('Guides in "{t}":', '"{t}"లోని గైడ్‌లు:'),
  anythingElse: tx('Anything else about this?', 'దీని గురించి ఇంకేమైనా?'),
  checked: tx('Last checked {d}. Confirm at the office before paying anyone.', 'చివరిగా తనిఖీ {d}. ఎవరికైనా డబ్బు ఇచ్చే ముందు ఆఫీసులో నిర్ధారించుకోండి.'),
  requestPrompt: tx(
    'Tell us which guide you need — tap "Request a guide" to send us a message.',
    'మీకు ఏ గైడ్ కావాలో మాకు చెప్పండి — "గైడ్ కావాలి" నొక్కి సందేశం పంపండి.',
  ),
};

const chipText: Record<Section | 'open' | 'topics' | 'request' | 'whatsapp', L> = {
  who: tx('Who can apply', 'ఎవరు అర్హులు'),
  docs: tx('Documents', 'పత్రాలు'),
  fees: tx('Fees', 'ఫీజు'),
  steps: tx('Steps', 'దశలు'),
  where: tx('Where to go', 'ఎక్కడికి'),
  time: tx('How long', 'ఎంత సమయం'),
  tips: tx('Tips', 'జాగ్రత్తలు'),
  links: tx('Links & helpline', 'లింకులు & హెల్ప్‌లైన్'),
  open: tx('📖 Open full guide', '📖 పూర్తి గైడ్ తెరువు'),
  topics: tx('🗂️ All topics', '🗂️ అన్ని విభాగాలు'),
  request: tx('✉️ Request a guide', '✉️ గైడ్ కావాలి'),
  whatsapp: tx('💬 Mana Mitra WhatsApp', '💬 మన మిత్ర వాట్సాప్'),
};

const sectionTitle: Record<Section, L> = {
  who: tx('Who can apply', 'ఎవరు అర్హులు'),
  docs: tx('Documents to carry', 'తీసుకెళ్లాల్సిన పత్రాలు'),
  fees: tx('Fees & money', 'ఫీజు & డబ్బు'),
  steps: tx('Step by step', 'దశల వారీగా'),
  where: tx('Where to go', 'ఎక్కడికి వెళ్లాలి'),
  time: tx('How long it takes', 'ఎంత సమయం పడుతుంది'),
  tips: tx('Good to know', 'తెలుసుకోవాల్సినవి'),
  links: tx('Official links & helpline', 'అధికారిక లింకులు & హెల్ప్‌లైన్'),
};

function sectionChips(id: string, lang: Lang, except?: Section): Chip[] {
  const order: Section[] = ['docs', 'fees', 'steps', 'where', 'who', 'time', 'tips', 'links'];
  return [
    { label: T(chipText.open, lang), action: { kind: 'open', id } },
    ...order.filter((s) => s !== except).map((s) => ({ label: T(chipText[s], lang), action: { kind: 'section', id, section: s } as Action })),
  ];
}

function topicChips(lang: Lang): Chip[] {
  return categories.map((c) => ({ label: `${c.icon} ${T(c.title, lang)}`, action: { kind: 'cat', id: c.id } }));
}

const fallbackChips = (lang: Lang): Chip[] => [
  { label: T(chipText.topics, lang), action: { kind: 'topics' } },
  { label: T(chipText.whatsapp, lang), action: { kind: 'whatsapp' } },
  { label: T(chipText.request, lang), action: { kind: 'request' } },
];

/** One section of a guide as plain text. */
export function sectionText(g: Guide, s: Section, lang: Lang): string {
  const bullets = (xs: L[]) => xs.map((x) => `• ${T(x, lang)}`).join('\n');
  let body: string;
  switch (s) {
    case 'who': body = bullets(g.whoCanApply); break;
    case 'docs': body = bullets(g.documents); break;
    case 'fees': body = g.fees.map((f) => `• ${T(f.item, lang)}: ${T(f.amount, lang)}`).join('\n'); break;
    case 'steps':
      body = g.stages?.length
        ? g.stages.map((st, si) => `▶ ${si + 1}. ${T(st.title, lang)}\n` + st.steps.map((x, i) => `   ${si + 1}.${i + 1} ${T(x, lang)}`).join('\n')).join('\n\n')
        : g.steps.map((x, i) => `${i + 1}. ${T(x, lang)}`).join('\n');
      break;
    case 'where': body = bullets(g.whereToApply); break;
    case 'time': body = T(g.timeline, lang); break;
    case 'tips': body = bullets(g.tips); break;
    case 'links':
      body = [
        ...g.links.map((l) => `🔗 ${l.label}: ${l.url}`),
        ...(g.helpline ? [`📞 ${T(g.helpline.label, lang)}: ${g.helpline.number}`] : []),
      ].join('\n');
      break;
  }
  return `${T(g.title, lang)}\n— ${T(sectionTitle[s], lang)} —\n${body}`;
}

function overview(g: Guide, lang: Lang, lead?: L): BotReply {
  const head = lead ? `${T(lead, lang)}\n\n` : '';
  return {
    text: `${head}📄 ${T(g.title, lang)}\n\n${T(g.summary, lang)}\n\n${T(L_.aboutGuide, lang).replace('{t}', T(g.title, lang))}`,
    chips: sectionChips(g.id, lang),
    focus: g.id,
  };
}

export function welcome(lang: Lang, guideId?: string): BotReply {
  const g = guideId ? getGuide(guideId) : undefined;
  if (g) return overview(g, lang);
  return { text: T(L_.welcome, lang), chips: topicChips(lang) };
}

/** Reply to something the person typed. `focus` is the guide being discussed, if any. */
export function respond(input: string, lang: Lang, focus?: string): BotReply {
  const q = normalize(input);
  const words = q.trim().split(' ').filter(Boolean);
  if (!words.length) return welcome(lang);

  const ranked = rank(input);
  const best = ranked[0];
  const section = detectSection(q);
  const focused = focus ? getGuide(focus) : undefined;

  // Short greetings / thanks with nothing else in them.
  if (!best && words.length <= 3) {
    if (greetingWords.some((w) => has(q, w))) return { text: T(L_.hello, lang), chips: topicChips(lang) };
    if (thanksWords.some((w) => has(q, w))) return { text: T(L_.thanks, lang), chips: focused ? sectionChips(focused.id, lang) : undefined, focus };
  }

  // "Fee?" / "documents enti?" about the guide we're already discussing.
  if (section && focused && (!best || best.score < 8 || best.id === focused.id)) {
    return { text: sectionText(focused, section, lang), chips: sectionChips(focused.id, lang, section), focus: focused.id };
  }

  // Tools: eligibility checker and reminders.
  if (toolWords.eligibility.some((w) => has(q, w)) && (!best || best.score < 10)) {
    return { text: T(L_.toolElig, lang), chips: [{ label: lang === 'te' ? '✅ మాకు ఏమేమి వస్తాయి?' : '✅ What can we get?', action: { kind: 'eligibility' } }] };
  }
  if (toolWords.reminders.some((w) => has(q, w))) {
    return { text: T(L_.toolRem, lang), chips: [{ label: lang === 'te' ? '⏰ నా రిమైండర్లు' : '⏰ My reminders', action: { kind: 'reminders' } }] };
  }

  // A life situation ("my father died", "going to Gulf").
  const event = lifeEvents.find((e) => e.words.some((w) => has(q, w)) && !(e.unless ?? []).some((w) => has(q, w)));
  if (event) {
    // Put the specific guide they named (e.g. "Annadata Sukhibhava") first.
    // (After a death the order matters, so that list is never reordered.)
    const lead = best && best.score >= 8 && event.id !== 'death' ? [best.id] : [];
    const ids = [...new Set([...lead, ...event.guides])].filter((id) => getGuide(id));
    return { text: T(event.intro, lang), results: ids, chips: fallbackChips(lang).slice(0, 1) };
  }

  if (!best || best.score < 4) {
    return { text: T(L_.notFound, lang), chips: [...fallbackChips(lang)] };
  }

  const g = getGuide(best.id)!;
  const second = ranked[1];
  const clearWinner = !second || best.score >= second.score * 1.5;

  if (section && clearWinner) {
    return { text: sectionText(g, section, lang), chips: sectionChips(g.id, lang, section), focus: g.id };
  }
  if (clearWinner) {
    const others = ranked.slice(1, 3).filter((x) => x.score >= best.score * 0.4).map((x) => x.id);
    const reply = overview(g, lang, L_.oneMatch);
    if (others.length) {
      reply.text += `\n\n${T(L_.alsoSee, lang)}`;
      reply.results = others;
    }
    return reply;
  }
  const top = ranked.filter((x) => x.score >= best.score * 0.5).slice(0, 5).map((x) => x.id);
  return { text: T(L_.found, lang), results: top };
}

/** Reply to a chip tap. 'open', 'request' and 'whatsapp' are handled by the screen. */
export function act(action: Action, lang: Lang): BotReply | undefined {
  switch (action.kind) {
    case 'topics':
      return { text: T(L_.welcome, lang).split('\n\n')[0], chips: topicChips(lang) };
    case 'cat': {
      const c = categories.find((x) => x.id === action.id);
      const ids = guides.filter((g) => g.category === action.id).map((g) => g.id);
      return { text: T(L_.catIntro, lang).replace('{t}', c ? T(c.title, lang) : ''), results: ids };
    }
    case 'guide': {
      const g = getGuide(action.id);
      return g ? overview(g, lang) : undefined;
    }
    case 'section': {
      const g = getGuide(action.id);
      if (!g) return undefined;
      const extra = action.section === 'fees' || action.section === 'time' ? `\n\n${T(L_.checked, lang).replace('{d}', g.lastChecked)}` : '';
      return { text: sectionText(g, action.section, lang) + extra, chips: sectionChips(g.id, lang, action.section), focus: g.id };
    }
    default:
      return undefined;
  }
}

export const requestPrompt = (lang: Lang) => T(L_.requestPrompt, lang);
