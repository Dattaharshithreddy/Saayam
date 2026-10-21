import { L } from '../types';
import { b } from './bi';

/**
 * Reminder templates. "date" reminders ask the user for a date (an expiry) and remind a set
 * number of days before it; "yearly" reminders repeat on fixed days every year.
 */
export type ReminderTemplate =
  | { id: string; kind: 'date'; title: L; ask: L; daysBefore: number[]; guideId?: string; note: L }
  | { id: string; kind: 'yearly'; title: L; dates: { m: number; d: number }[]; guideId?: string; note: L };

export const reminderTemplates: ReminderTemplate[] = [
  { id: 'dl', kind: 'date', title: b('Driving licence expiry', 'డ్రైవింగ్ లైసెన్స్ గడువు'), ask: b('Valid till (date on the licence)', 'చెల్లుబాటు తేదీ (లైసెన్స్‌పై ఉన్నది)'), daysBefore: [30, 7, 0], guideId: 'licence-renewal-services', note: b('Renew online up to a year before expiry.', 'గడువుకు ఏడాది ముందు నుండే ఆన్‌లైన్‌లో రెన్యువల్ చేయవచ్చు.') },
  { id: 'vinsurance', kind: 'date', title: b('Vehicle insurance renewal', 'వాహన బీమా రెన్యువల్'), ask: b('Policy end date', 'పాలసీ ముగింపు తేదీ'), daysBefore: [15, 3, 0], guideId: 'vehicle-insurance-claim', note: b('Renew before it ends to keep your no-claim bonus.', 'నో-క్లెయిమ్ బోనస్ కొనసాగడానికి గడువుకు ముందే రెన్యువల్ చేయండి.') },
  { id: 'puc', kind: 'date', title: b('Pollution (PUC) certificate', 'కాలుష్య (PUC) సర్టిఫికెట్'), ask: b('PUC valid till', 'PUC చెల్లుబాటు తేదీ'), daysBefore: [7, 0], note: b('Get it tested at any authorised PUC centre.', 'ఏ అధీకృత PUC కేంద్రంలోనైనా పరీక్ష చేయించండి.') },
  { id: 'fitness', kind: 'date', title: b('Transport vehicle fitness (FC)', 'రవాణా వాహన ఫిట్‌నెస్ (FC)'), ask: b('FC valid till', 'FC చెల్లుబాటు తేదీ'), daysBefore: [30, 7, 0], guideId: 'commercial-vehicle-papers', note: b('₹50 a day extra after it expires.', 'గడువు ముగిశాక రోజుకు ₹50 అదనం.') },
  { id: 'permit', kind: 'date', title: b('Vehicle permit renewal', 'వాహన పర్మిట్ రెన్యువల్'), ask: b('Permit valid till', 'పర్మిట్ చెల్లుబాటు తేదీ'), daysBefore: [30, 7, 0], guideId: 'commercial-vehicle-papers', note: b('Apply on Vahan before it expires.', 'గడువుకు ముందే Vahanలో దరఖాస్తు చేయండి.') },
  { id: 'roadtax', kind: 'yearly', title: b('Quarterly road tax (transport vehicle)', 'త్రైమాసిక రోడ్డు పన్ను (రవాణా వాహనం)'), dates: [{ m: 3, d: 24 }, { m: 6, d: 23 }, { m: 9, d: 23 }, { m: 12, d: 24 }], guideId: 'commercial-vehicle-papers', note: b('Pay before each quarter starts (Jan, Apr, Jul, Oct).', 'ప్రతి త్రైమాసికం (జనవరి, ఏప్రిల్, జూలై, అక్టోబర్) మొదలయ్యే ముందు చెల్లించండి.') },
  { id: 'passport', kind: 'date', title: b('Passport expiry', 'పాస్‌పోర్ట్ గడువు'), ask: b('Date of expiry', 'గడువు తేదీ'), daysBefore: [270, 180, 30], guideId: 'passport', note: b('Many countries need 6 months\' validity to travel.', 'చాలా దేశాలకు ప్రయాణానికి 6 నెలల చెల్లుబాటు కావాలి.') },
  { id: 'lifecert', kind: 'yearly', title: b('Pensioner life certificate (November)', 'పెన్షనర్ జీవన ధృవీకరణ (నవంబర్)'), dates: [{ m: 11, d: 1 }], guideId: 'pensioner-life-certificate', note: b('Submit in November (80+ from 1 October) or the pension stops.', 'నవంబర్‌లో సమర్పించండి (80+ అక్టోబర్ 1 నుండి), లేకపోతే పెన్షన్ ఆగుతుంది.') },
  { id: 'itr', kind: 'yearly', title: b('Income tax return', 'ఆదాయపు పన్ను రిటర్న్'), dates: [{ m: 7, d: 1 }, { m: 7, d: 25 }], guideId: 'income-tax-return', note: b('Due 31 July for most people.', 'చాలామందికి గడువు 31 జూలై.') },
  { id: 'crop', kind: 'yearly', title: b('Crop insurance deadlines', 'పంట బీమా గడువులు'), dates: [{ m: 7, d: 15 }, { m: 12, d: 1 }], guideId: 'crop-insurance', note: b('Kharif usually by 31 July; rabi 15–31 December.', 'ఖరీఫ్ సాధారణంగా 31 జూలై; రబీ 15–31 డిసెంబర్.') },
  { id: 'proptax', kind: 'yearly', title: b('House / property tax', 'ఇంటి / ఆస్తి పన్ను'), dates: [{ m: 4, d: 1 }, { m: 10, d: 1 }], guideId: 'property-tax', note: b('Pay each half-year to avoid interest.', 'వడ్డీ పడకుండా ప్రతి అర్ధ సంవత్సరం చెల్లించండి.') },
  { id: 'pmjjby', kind: 'yearly', title: b('Keep balance for PMJJBY / PMSBY renewal', 'PMJJBY / PMSBY రెన్యువల్‌కు బ్యాలెన్స్ ఉంచండి'), dates: [{ m: 5, d: 25 }], guideId: 'pmjjby-pmsby', note: b('Premium is debited around 1 June.', 'ప్రీమియం జూన్ 1 దగ్గర కట్ అవుతుంది.') },
  { id: 'savings', kind: 'yearly', title: b('Yearly deposit — PPF / Sukanya', 'వార్షిక డిపాజిట్ — PPF / సుకన్య'), dates: [{ m: 3, d: 1 }], guideId: 'post-office-savings', note: b('Deposit the minimum before 31 March to keep the account active.', 'ఖాతా యాక్టివ్‌గా ఉండేలా 31 మార్చిలోపు కనీస మొత్తం జమ చేయండి.') },
  { id: 'childaadhaar', kind: 'date', title: b('Child\'s Aadhaar update (age 5 / 15)', 'పిల్లల ఆధార్ అప్‌డేట్ (5 / 15 ఏళ్లకు)'), ask: b('Date the child turns 5 or 15', 'పిల్లలకు 5 లేదా 15 ఏళ్లు నిండే తేదీ'), daysBefore: [30, 0], guideId: 'aadhaar-child-biometric', note: b('Free between 5–7 and 15–17 years.', '5–7, 15–17 ఏళ్ల మధ్య ఉచితం.') },
  { id: 'custom', kind: 'date', title: b('Something else', 'ఇంకేదైనా'), ask: b('Date', 'తేదీ'), daysBefore: [7, 1, 0], note: b('Write what to remember.', 'ఏం గుర్తుంచుకోవాలో రాయండి.') },
];

/** Which reminder a guide page can offer. */
export const reminderForGuide: Record<string, string> = Object.fromEntries(
  reminderTemplates.filter((t) => t.guideId).map((t) => [t.guideId as string, t.id]),
);
