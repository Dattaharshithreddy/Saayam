import { L } from '../types';
import { b } from './bi';

/**
 * "What can I get?" — questions and rules. Everything here is plain data (JSON-friendly)
 * so it can be updated together with the guides without a new app release.
 */

export type Option = { id: string; label: L };
export type Question =
  | { id: string; kind: 'number'; label: L; hint?: L }
  | { id: string; kind: 'single' | 'multi'; label: L; hint?: L; options: Option[] }
  | { id: string; kind: 'yesno'; label: L; hint?: L };

export type Answers = Record<string, number | string | string[] | boolean | undefined>;

/** A condition on the answers. `is` matches a single answer, or any overlap for multi-choice answers. */
export type Cond =
  | { q: string; is?: (string | boolean)[]; min?: number; max?: number }
  | { all: Cond[] }
  | { any: Cond[] }
  | { not: Cond };

export type Rule = { guideId: string; when: Cond; why: L };

const o = (id: string, en: string, te: string): Option => ({ id, label: b(en, te) });

export const questions: Question[] = [
  { id: 'age', kind: 'number', label: b('Age of the person', 'వ్యక్తి వయస్సు'), hint: b('In years', 'సంవత్సరాల్లో') },
  { id: 'gender', kind: 'single', label: b('Gender', 'లింగం'), options: [o('female', 'Woman', 'స్త్రీ'), o('male', 'Man', 'పురుషుడు'), o('other', 'Transgender', 'ట్రాన్స్‌జెండర్')] },
  {
    id: 'social', kind: 'single', label: b('Social category', 'సామాజిక వర్గం'),
    options: [o('sc', 'SC', 'SC'), o('st', 'ST', 'ST'), o('bc', 'BC', 'BC'), o('oc', 'OC / general', 'OC / జనరల్')],
  },
  { id: 'minority', kind: 'yesno', label: b('Muslim, Christian, Sikh, Buddhist, Jain or Parsi?', 'ముస్లిం, క్రైస్తవ, సిక్కు, బౌద్ధ, జైన లేదా పార్సీ?') },
  { id: 'area', kind: 'single', label: b('Where do you live?', 'మీరు ఎక్కడ ఉంటారు?'), options: [o('rural', 'Village', 'గ్రామం'), o('urban', 'Town / city', 'పట్టణం / నగరం')] },
  { id: 'riceCard', kind: 'yesno', label: b('Does the family have an AP rice card?', 'కుటుంబానికి AP రైస్ కార్డు ఉందా?') },
  {
    id: 'income', kind: 'single', label: b('Total family income in a year', 'కుటుంబ మొత్తం వార్షిక ఆదాయం'),
    options: [o('low', 'Below ₹1.5 lakh', '₹1.5 లక్షల లోపు'), o('mid', '₹1.5 – 8 lakh', '₹1.5 – 8 లక్షలు'), o('high', 'Above ₹8 lakh', '₹8 లక్షలకు పైగా')],
  },
  { id: 'taxpayer', kind: 'yesno', label: b('Does anyone in the family pay income tax or have a government job?', 'కుటుంబంలో ఎవరైనా ఆదాయపు పన్ను కడతారా లేదా ప్రభుత్వ ఉద్యోగం ఉందా?') },
  {
    id: 'work', kind: 'multi', label: b('What work does the person do?', 'వ్యక్తి ఏ పని చేస్తారు?'), hint: b('Pick all that apply', 'వర్తించేవన్నీ ఎంచుకోండి'),
    options: [
      o('farmer', 'Farmer with own land', 'సొంత భూమి ఉన్న రైతు'),
      o('tenant', 'Tenant farmer', 'కౌలు రైతు'),
      o('farmLabour', 'Farm / daily-wage labour', 'వ్యవసాయ / రోజువారీ కూలీ'),
      o('livestock', 'Cattle, sheep, goats or poultry', 'పశువులు, గొర్రెలు, మేకలు లేదా కోళ్లు'),
      o('fisher', 'Fishing', 'చేపల వేట'),
      o('weaver', 'Handloom weaver', 'చేనేత'),
      o('driver', 'Auto / taxi / maxi-cab driver (own vehicle)', 'ఆటో / ట్యాక్సీ / మ్యాక్సీ క్యాబ్ డ్రైవర్ (సొంత వాహనం)'),
      o('construction', 'Construction worker', 'భవన నిర్మాణ కార్మికుడు'),
      o('vendor', 'Street vendor', 'వీధి వ్యాపారి'),
      o('artisan', 'Artisan (carpenter, tailor, barber, potter, smith…)', 'చేతివృత్తి (వడ్రంగి, దర్జీ, క్షురకుడు, కుమ్మరి, కమ్మరి…)'),
      o('business', 'Small shop or business', 'చిన్న దుకాణం లేదా వ్యాపారం'),
      o('private', 'Private job / company employee', 'ప్రైవేట్ ఉద్యోగం / కంపెనీ ఉద్యోగి'),
      o('gig', 'Delivery / gig worker', 'డెలివరీ / గిగ్ వర్కర్'),
      o('student', 'Student', 'విద్యార్థి'),
      o('jobless', 'Looking for work', 'పని కోసం వెతుకుతున్నారు'),
      o('home', 'Homemaker', 'గృహిణి'),
      o('abroad', 'Working / going abroad', 'విదేశాల్లో పని / వెళ్తున్నారు'),
    ],
  },
  {
    id: 'family', kind: 'multi', label: b('Is any of this true for the family?', 'కుటుంబంలో వీటిలో ఏదైనా ఉందా?'), hint: b('Pick all that apply', 'వర్తించేవన్నీ ఎంచుకోండి'),
    options: [
      o('pregnant', 'Pregnant woman', 'గర్భిణి'),
      o('under6', 'Child under 6', '6 ఏళ్లలోపు పిల్లలు'),
      o('school', 'Child in school (class 1–12)', 'స్కూల్‌లో పిల్లలు (1–12 తరగతి)'),
      o('college', 'Student in college / degree / professional course', 'కాలేజీ / డిగ్రీ / వృత్తి కోర్సులో విద్యార్థి'),
      o('girl10', 'Daughter below 10 years', '10 ఏళ్లలోపు కూతురు'),
      o('widow', 'Widow / single woman', 'వితంతువు / ఒంటరి మహిళ'),
      o('disability', 'Person with disability (40% or more)', 'వికలాంగులు (40% లేదా ఎక్కువ)'),
      o('pensioner', 'Retired person getting a pension', 'పెన్షన్ పొందుతున్న విరమణ వ్యక్తి'),
    ],
  },
  {
    id: 'home', kind: 'multi', label: b('House and gas', 'ఇల్లు, గ్యాస్'),
    options: [
      o('noHouse', 'No pucca house of our own', 'సొంత పక్కా ఇల్లు లేదు'),
      o('ownHouse', 'Own house with a roof', 'పైకప్పు ఉన్న సొంత ఇల్లు'),
      o('noGas', 'No LPG gas connection', 'LPG గ్యాస్ కనెక్షన్ లేదు'),
    ],
  },
];

const W = (...ids: string[]): Cond => ({ q: 'work', is: ids });
const F = (...ids: string[]): Cond => ({ q: 'family', is: ids });
const H = (...ids: string[]): Cond => ({ q: 'home', is: ids });
const age = (min?: number, max?: number): Cond => ({ q: 'age', min, max });
const rice: Cond = { any: [{ q: 'riceCard', is: [true] }, { q: 'income', is: ['low'] }] };
const notTax: Cond = { not: { q: 'taxpayer', is: [true] } };
const reserved: Cond = { any: [{ q: 'social', is: ['sc', 'st', 'bc'] }, { q: 'minority', is: [true] }] };
const female: Cond = { q: 'gender', is: ['female'] };

export const rules: Rule[] = [
  // Pensions & seniors
  { guideId: 'ntr-bharosa-pension', when: { all: [rice, { any: [age(60), F('widow', 'disability'), { q: 'gender', is: ['other'] }, { all: [W('weaver', 'fisher'), age(50)] }] }] }, why: b('Monthly pension for 60+, widows, persons with disabilities, transgender persons and some workers', '60+, వితంతువులు, వికలాంగులు, ట్రాన్స్‌జెండర్ వ్యక్తులు, కొందరు కార్మికులకు నెలవారీ పెన్షన్') },
  { guideId: 'ayushman-vay-vandana', when: age(70), why: b('Free ₹5 lakh hospital cover for everyone aged 70+', '70+ అందరికీ ₹5 లక్షల ఉచిత ఆసుపత్రి కవర్') },
  { guideId: 'senior-citizens', when: age(60), why: b('Maintenance from children, SCSS savings at 8.2%, elder helpline', 'పిల్లల నుండి భరణం, 8.2% SCSS పొదుపు, వృద్ధుల హెల్ప్‌లైన్') },
  { guideId: 'pensioner-life-certificate', when: F('pensioner'), why: b('Life certificate every November to keep the pension coming', 'పెన్షన్ ఆగకుండా ప్రతి నవంబర్ జీవన ధృవీకరణ') },
  // Health
  { guideId: 'ntr-vaidya-seva', when: rice, why: b('Free treatment in network hospitals for rice card families', 'రైస్ కార్డు కుటుంబాలకు నెట్‌వర్క్ ఆసుపత్రుల్లో ఉచిత చికిత్స') },
  { guideId: 'free-health-services', when: age(0), why: b('Free government hospital care, medicines, online doctor and mental health helpline for everyone', 'అందరికీ ఉచిత ప్రభుత్వ ఆసుపత్రి సేవ, మందులు, ఆన్‌లైన్ డాక్టర్, మానసిక ఆరోగ్య హెల్ప్‌లైన్') },
  // Women & children
  { guideId: 'maternity-anganwadi', when: F('pregnant', 'under6'), why: b('₹5,000 maternity benefit and free anganwadi food and care', '₹5,000 ప్రసూతి ప్రయోజనం, ఉచిత అంగన్‌వాడీ ఆహారం, సంరక్షణ') },
  { guideId: 'ntr-baby-kit', when: F('pregnant'), why: b('Free baby kit after delivery in a government hospital', 'ప్రభుత్వ ఆసుపత్రిలో ప్రసవం తర్వాత ఉచిత బేబీ కిట్') },
  { guideId: 'newborn-checklist', when: F('pregnant', 'under6'), why: b('Birth certificate, Baal Aadhaar, free vaccines', 'జనన ధృవీకరణ, బాల్ ఆధార్, ఉచిత టీకాలు') },
  { guideId: 'sukanya-samriddhi', when: F('girl10'), why: b('Savings for your daughter at 8.2%, tax-free', 'మీ కూతురికి 8.2% పన్ను రహిత పొదుపు') },
  { guideId: 'stree-shakti-free-bus', when: female, why: b('Free travel for women on most APSRTC buses', 'చాలా APSRTC బస్సుల్లో మహిళలకు ఉచిత ప్రయాణం') },
  { guideId: 'shg-dwcra-join', when: { all: [female, age(18, 60)] }, why: b('Join a self-help group for savings and cheap loans', 'పొదుపు, తక్కువ వడ్డీ రుణాలకు పొదుపు సంఘంలో చేరండి') },
  { guideId: 'ujjwala', when: { all: [female, rice, H('noGas')] }, why: b('Free LPG connection for women from poor families', 'పేద కుటుంబాల మహిళలకు ఉచిత LPG కనెక్షన్') },
  { guideId: 'deepam-free-gas', when: rice, why: b('Free gas cylinders for rice card families', 'రైస్ కార్డు కుటుంబాలకు ఉచిత గ్యాస్ సిలిండర్లు') },
  // Education
  { guideId: 'talliki-vandanam', when: { all: [F('school'), rice] }, why: b('Yearly money for each school-going child', 'స్కూల్‌కు వెళ్లే ప్రతి బిడ్డకు ఏటా డబ్బు') },
  { guideId: 'rte-free-seats', when: { all: [F('under6'), rice] }, why: b('Free seat in a private school (25% quota) for Class 1', '1వ తరగతికి ప్రైవేట్ స్కూల్‌లో ఉచిత సీటు (25% కోటా)') },
  { guideId: 'scholarship-fee-reimbursement', when: { all: [F('college'), { any: [reserved, { all: [{ q: 'social', is: ['oc'] }, rice] }] }] }, why: b('College fee paid by the government and money for hostel / mess', 'కాలేజీ ఫీజు ప్రభుత్వం చెల్లిస్తుంది, హాస్టల్ / మెస్‌కు డబ్బు') },
  { guideId: 'national-scholarships', when: F('school', 'college'), why: b('Central scholarships on the National Scholarship Portal', 'జాతీయ స్కాలర్‌షిప్ పోర్టల్‌లో కేంద్ర స్కాలర్‌షిప్‌లు') },
  { guideId: 'welfare-hostels', when: { all: [F('school', 'college'), reserved, rice] }, why: b('Free government hostel or residential school', 'ఉచిత ప్రభుత్వ హాస్టల్ లేదా రెసిడెన్షియల్ స్కూల్') },
  { guideId: 'education-loan', when: F('college'), why: b('Collateral-free education loan with interest subsidy', 'వడ్డీ సబ్సిడీతో హామీ లేని విద్యా రుణం') },
  { guideId: 'ews-certificate', when: { all: [{ q: 'social', is: ['oc'] }, { not: { q: 'minority', is: [true] } }, { q: 'income', is: ['low', 'mid'] }, { any: [F('college', 'school'), W('student', 'jobless')] }] }, why: b('10% EWS reservation in admissions and jobs', 'ప్రవేశాలు, ఉద్యోగాల్లో 10% EWS రిజర్వేషన్') },
  // Farmers
  { guideId: 'annadata-sukhibhava', when: { all: [W('farmer', 'tenant'), notTax] }, why: b('Yearly investment support for farmers (state + PM-KISAN)', 'రైతులకు వార్షిక పెట్టుబడి సహాయం (రాష్ట్రం + PM-KISAN)') },
  { guideId: 'pm-kisan', when: { all: [W('farmer'), notTax] }, why: b('₹6,000 a year for land-owning farmers', 'భూమి ఉన్న రైతులకు ఏడాదికి ₹6,000') },
  { guideId: 'tenant-farmer-ccrc', when: W('tenant'), why: b('Tenant card for crop loans, insurance and subsidies', 'పంట రుణాలు, బీమా, సబ్సిడీలకు కౌలు కార్డు') },
  { guideId: 'crop-insurance', when: W('farmer', 'tenant'), why: b('Crop insurance at a small premium', 'చిన్న ప్రీమియంతో పంట బీమా') },
  { guideId: 'kisan-credit-card', when: W('farmer', 'tenant', 'livestock', 'fisher'), why: b('Crop / animal loans at 4% if repaid on time', 'సకాలంలో చెల్లిస్తే 4% వడ్డీకి పంట / పశు రుణాలు') },
  { guideId: 'farm-subsidies', when: W('farmer', 'tenant'), why: b('Drip irrigation, machinery and seed subsidies', 'డ్రిప్, యంత్రాలు, విత్తన సబ్సిడీలు') },
  { guideId: 'soil-health-solar-pump', when: W('farmer'), why: b('Free soil testing and subsidised solar pumps', 'ఉచిత మట్టి పరీక్ష, సబ్సిడీ సోలార్ పంపులు') },
  { guideId: 'livestock-insurance', when: W('livestock'), why: b('Cattle / sheep insurance — government pays most of the premium', 'పశువుల బీమా — ప్రీమియంలో ఎక్కువ భాగం ప్రభుత్వం') },
  { guideId: 'gokulam-sheds', when: { all: [W('livestock'), { q: 'area', is: ['rural'] }] }, why: b('Subsidised cattle / goat shed', 'సబ్సిడీ పశువుల / మేకల షెడ్') },
  { guideId: 'fishermen-support', when: W('fisher'), why: b('Yearly support during the fishing ban and boat / net help', 'వేట నిషేధ కాలంలో వార్షిక సహాయం, పడవ / వల సహాయం') },
  { guideId: 'nethanna-sevalo', when: W('weaver'), why: b('Yearly support for handloom weavers', 'చేనేత కార్మికులకు వార్షిక సహాయం') },
  // Work & business
  { guideId: 'auto-drivers-sevalo', when: W('driver'), why: b('Yearly support for auto / taxi drivers who own the vehicle', 'సొంత వాహనం ఉన్న ఆటో / ట్యాక్సీ డ్రైవర్లకు వార్షిక సహాయం') },
  { guideId: 'construction-workers-board', when: W('construction'), why: b('Accident, maternity, education and marriage help from the workers\' board', 'కార్మికుల బోర్డు నుండి ప్రమాద, ప్రసూతి, విద్య, వివాహ సహాయం') },
  { guideId: 'e-shram', when: { all: [W('farmLabour', 'construction', 'vendor', 'artisan', 'gig', 'driver', 'home', 'fisher', 'weaver'), age(16, 59), notTax] }, why: b('Free ₹2 lakh accident cover for unorganised workers', 'అసంఘటిత కార్మికులకు ఉచిత ₹2 లక్షల ప్రమాద కవర్') },
  { guideId: 'rural-employment-guarantee', when: { all: [{ q: 'area', is: ['rural'] }, age(18)] }, why: b('Up to 125 days of paid work a year in the village', 'గ్రామంలో ఏడాదికి 125 రోజుల వరకు వేతన పని') },
  { guideId: 'svanidhi', when: W('vendor'), why: b('Loans of ₹15,000 → ₹25,000 → ₹50,000 for street vendors', 'వీధి వ్యాపారులకు ₹15,000 → ₹25,000 → ₹50,000 రుణాలు') },
  { guideId: 'vishwakarma', when: W('artisan'), why: b('Training, ₹15,000 toolkit and 5% loans for artisans', 'చేతివృత్తులవారికి శిక్షణ, ₹15,000 టూల్‌కిట్, 5% రుణాలు') },
  { guideId: 'mudra-loan', when: W('business', 'jobless', 'artisan', 'vendor'), why: b('Business loans without collateral', 'హామీ లేకుండా వ్యాపార రుణాలు') },
  { guideId: 'pmegp', when: { all: [W('jobless', 'business'), age(18)] }, why: b('Up to 35% subsidy to start a new unit', 'కొత్త యూనిట్ ప్రారంభానికి 35% వరకు సబ్సిడీ') },
  { guideId: 'corporation-loans', when: { all: [W('jobless', 'business', 'driver', 'artisan'), rice, age(21, 60)] }, why: b('Self-employment units with subsidy through welfare corporations', 'సంక్షేమ కార్పొరేషన్ల ద్వారా సబ్సిడీతో స్వయం ఉపాధి యూనిట్లు') },
  { guideId: 'pm-internship', when: { all: [W('jobless'), age(21, 24), { not: { q: 'income', is: ['high'] } }] }, why: b('12-month paid internship in a top company', 'అగ్రశ్రేణి కంపెనీలో 12 నెలల వేతన ఇంటర్న్‌షిప్') },
  { guideId: 'apprenticeship', when: { all: [W('jobless', 'student'), age(14)] }, why: b('Paid apprenticeship after ITI / diploma / degree', 'ITI / డిప్లొమా / డిగ్రీ తర్వాత వేతన అప్రెంటిస్‌షిప్') },
  { guideId: 'govt-jobs-skills', when: { all: [W('jobless', 'student'), age(18)] }, why: b('Free skill training and government job notifications', 'ఉచిత నైపుణ్య శిక్షణ, ప్రభుత్వ ఉద్యోగ నోటిఫికేషన్లు') },
  { guideId: 'labour-rights', when: W('private', 'construction', 'farmLabour', 'gig'), why: b('Minimum wage, PF / ESI, gratuity and free complaints', 'కనీస వేతనం, PF / ESI, గ్రాట్యుటీ, ఉచిత ఫిర్యాదులు') },
  { guideId: 'overseas-jobs-safe', when: W('abroad'), why: b('Safe recruitment and emigration steps', 'సురక్షిత నియామకం, ఎమిగ్రేషన్ దశలు') },
  { guideId: 'apnrts-insurance', when: W('abroad'), why: b('₹10 lakh accident cover for AP workers abroad for ₹590', '₹590కి విదేశాల్లో AP కార్మికులకు ₹10 లక్షల ప్రమాద కవర్') },
  // Money
  { guideId: 'pmjjby-pmsby', when: age(18, 70), why: b('₹2 lakh life + ₹2 lakh accident cover for ₹456 a year', 'ఏడాదికి ₹456కి ₹2 లక్షల జీవిత + ₹2 లక్షల ప్రమాద కవర్') },
  { guideId: 'atal-pension', when: { all: [age(18, 40), notTax] }, why: b('Guaranteed pension of up to ₹5,000 a month after 60', '60 తర్వాత నెలకు ₹5,000 వరకు హామీ పెన్షన్') },
  // Housing & other
  { guideId: 'housing-scheme', when: { all: [H('noHouse'), rice] }, why: b('House site / house under the housing scheme', 'గృహ పథకం కింద ఇంటి స్థలం / ఇల్లు') },
  { guideId: 'pm-surya-ghar', when: H('ownHouse'), why: b('Rooftop solar with up to ₹78,000 subsidy and free power', '₹78,000 వరకు సబ్సిడీతో రూఫ్‌టాప్ సోలార్, ఉచిత విద్యుత్') },
  { guideId: 'disability-benefits', when: F('disability'), why: b('Pension, free aids, bus / rail concessions', 'పెన్షన్, ఉచిత పరికరాలు, బస్ / రైల్ రాయితీలు') },
  { guideId: 'rice-card', when: { all: [{ not: { q: 'riceCard', is: [true] } }, { q: 'income', is: ['low'] }] }, why: b('You may qualify for a rice card — it opens most state schemes', 'మీరు రైస్ కార్డుకు అర్హులు కావచ్చు — చాలా రాష్ట్ర పథకాలకు ఇదే తాళం') },
  { guideId: 'transgender-id', when: { q: 'gender', is: ['other'] }, why: b('Identity certificate and ID card without medical test', 'వైద్య పరీక్ష లేకుండా గుర్తింపు సర్టిఫికెట్, ఐడీ కార్డు') },
];

function test(c: Cond, a: Answers): boolean {
  if ('all' in c) return c.all.every((x) => test(x, a));
  if ('any' in c) return c.any.some((x) => test(x, a));
  if ('not' in c) return !test(c.not, a);
  const v = a[c.q];
  if (v === undefined || v === '') return false;
  if (c.min !== undefined || c.max !== undefined) {
    const n = typeof v === 'number' ? v : Number(v);
    if (!Number.isFinite(n)) return false;
    if (c.min !== undefined && n < c.min) return false;
    if (c.max !== undefined && n > c.max) return false;
  }
  if (c.is) {
    if (Array.isArray(v)) return v.some((x) => c.is!.includes(x));
    return c.is.includes(v as string | boolean);
  }
  return true;
}

/** Rules that match the answers, in order, without duplicates. */
export function matchRules(rs: Rule[], a: Answers): Rule[] {
  const seen = new Set<string>();
  return rs.filter((r) => {
    if (seen.has(r.guideId) || !test(r.when, a)) return false;
    seen.add(r.guideId);
    return true;
  });
}
