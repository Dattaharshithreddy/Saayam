import { Guide } from '../types';
import { guides3 } from './guides-3';
import { guides4 } from './guides-4';
import { guides5 } from './guides-5';
import { guides6 } from './guides-6';
import { guides7 } from './guides-7';
import { guides8 } from './guides-8';
import { guides9 } from './guides-9';
import { moreGuides } from './guides-more';
import { deep, deepGuides } from './deep';

/**
 * Hand-written guides. Every fact here was checked against public sources on
 * the `lastChecked` date. Government rules and fees change: re-check before
 * each release, and keep wording plain enough for a first-time reader.
 */
const baseGuides: Guide[] = [
  // ─────────────────────────────────────────── PROPERTY ──
  {
    id: 'property-name-correction',
    category: 'property',
    level: 'state',
    title: {
      en: 'Name wrong in property registration (Rectification Deed)',
      te: 'ఆస్తి రిజిస్ట్రేషన్‌లో పేరు తప్పు (రెక్టిఫికేషన్ డీడ్)',
    },
    summary: {
      en: 'If your name, father\'s/husband\'s name or a spelling is wrong in a registered sale deed, you fix it by registering a "Rectification Deed" at the same Sub-Registrar Office (SRO). It only corrects mistakes — it cannot change who bought or what was sold.',
      te: 'రిజిస్టర్ అయిన సేల్ డీడ్‌లో మీ పేరు, తండ్రి/భర్త పేరు లేదా స్పెల్లింగ్ తప్పుగా ఉంటే, అదే సబ్-రిజిస్ట్రార్ ఆఫీసు (SRO)లో "రెక్టిఫికేషన్ డీడ్" రిజిస్టర్ చేసి సరిచేయాలి. ఇది తప్పులను మాత్రమే సరిచేస్తుంది — కొన్నవారిని లేదా అమ్మిన ఆస్తిని మార్చదు.',
    },
    keywords: ['name mismatch', 'spelling', 'sale deed', 'correction', 'rectification', 'SRO', 'IGRS', 'పేరు', 'సవరణ', 'దస్తావేజు'],
    whoCanApply: [
      { en: 'The buyer and seller of the original deed (normally both must sign)', te: 'అసలు డీడ్‌లోని కొనుగోలుదారు మరియు అమ్మకందారు (సాధారణంగా ఇద్దరూ సంతకం చేయాలి)' },
      { en: 'For a small clerical error only in the buyer\'s own details, AP Sub-Registrars may accept a self-rectification deed by the buyer alone — ask your SRO first', te: 'కొనుగోలుదారు సొంత వివరాల్లో చిన్న టైపింగ్ తప్పు మాత్రమే అయితే, కొనుగోలుదారు ఒక్కరే సెల్ఫ్-రెక్టిఫికేషన్ డీడ్ ఇవ్వడానికి AP SROలు అనుమతించవచ్చు — ముందుగా SROని అడగండి' },
    ],
    documents: [
      { en: 'Original registered sale deed (and a certified copy)', te: 'అసలు రిజిస్టర్డ్ సేల్ డీడ్ (మరియు సర్టిఫైడ్ కాపీ)' },
      { en: 'Proof of the correct name: Aadhaar, PAN, passport, or Gazette notification if you legally changed your name', te: 'సరైన పేరుకు ఆధారం: ఆధార్, PAN, పాస్‌పోర్ట్, లేదా పేరు మార్చుకుంటే గెజిట్ నోటిఫికేషన్' },
      { en: 'Aadhaar and PAN of everyone signing', te: 'సంతకం చేసే అందరి ఆధార్ మరియు PAN' },
      { en: 'Latest Encumbrance Certificate (EC)', te: 'తాజా ఎన్‌కంబరెన్స్ సర్టిఫికెట్ (EC)' },
      { en: 'Passport-size photos and two witnesses with ID', te: 'పాస్‌పోర్ట్ సైజ్ ఫోటోలు మరియు ID ఉన్న ఇద్దరు సాక్షులు' },
      { en: 'Draft rectification deed stating the WRONG entry and the CORRECT entry side by side', te: '"తప్పు వివరం" మరియు "సరైన వివరం" పక్కపక్కనే రాసిన రెక్టిఫికేషన్ డీడ్ డ్రాఫ్ట్' },
    ],
    fees: [
      {
        item: { en: 'Simple spelling / clerical name error', te: 'సాధారణ స్పెల్లింగ్ / టైపింగ్ పేరు తప్పు' },
        amount: { en: 'Usually nominal stamp duty + registration fee (a few hundred rupees). Confirm the exact amount with the SRO or the fee calculator on registration.ap.gov.in', te: 'సాధారణంగా నామమాత్రపు స్టాంప్ డ్యూటీ + రిజిస్ట్రేషన్ ఫీజు (కొన్ని వందల రూపాయలు). ఖచ్చితమైన మొత్తం SRO వద్ద లేదా registration.ap.gov.in ఫీజు కాలిక్యులేటర్‌లో చూడండి' },
      },
      {
        item: { en: 'If the change looks like a new transfer (a completely different person, survey number, extent)', te: 'మార్పు కొత్త బదిలీలా అనిపిస్తే (పూర్తిగా వేరే వ్యక్తి, సర్వే నంబర్, విస్తీర్ణం)' },
        amount: { en: 'The SRO can demand stamp duty as if it were a fresh sale (for a sale in AP: about 5% stamp duty + 1.5% transfer duty + 1% registration fee on market value)', te: 'కొత్త అమ్మకంలా SRO స్టాంప్ డ్యూటీ అడగవచ్చు (APలో అమ్మకానికి మార్కెట్ విలువపై సుమారు 5% స్టాంప్ డ్యూటీ + 1.5% ట్రాన్స్‌ఫర్ డ్యూటీ + 1% రిజిస్ట్రేషన్ ఫీజు)' },
      },
      {
        item: { en: 'Document writer / advocate for drafting', te: 'డ్రాఫ్ట్ రాయడానికి డాక్యుమెంట్ రైటర్ / న్యాయవాది' },
        amount: { en: 'Private charge — agree on it before work starts', te: 'ప్రైవేట్ ఛార్జీ — పని మొదలుపెట్టే ముందే మాట్లాడుకోండి' },
      },
    ],
    steps: [
      { en: 'Find exactly where the mistake is: main deed, schedule/plan, or only the EC. Note the page and line.', te: 'తప్పు ఎక్కడ ఉందో ఖచ్చితంగా చూడండి: మెయిన్ డీడ్, షెడ్యూల్/ప్లాన్, లేదా EC మాత్రమే. పేజీ, లైన్ నోట్ చేసుకోండి.' },
      { en: 'Match the correct spelling to your Aadhaar and PAN, so all records agree after the fix.', te: 'సరిచేసిన తర్వాత అన్ని రికార్డులు ఒకేలా ఉండేలా, సరైన స్పెల్లింగ్‌ను ఆధార్ మరియు PANకు సరిపోల్చండి.' },
      { en: 'Get a rectification deed drafted that says "Wrong: …  Correct: …" and that everything else in the original deed stays the same.', te: '"తప్పు: …  సరైనది: …" అని, అసలు డీడ్‌లో మిగతా అంతా అలాగే ఉంటుందని రాసిన రెక్టిఫికేషన్ డీడ్ డ్రాఫ్ట్ చేయించండి.' },
      { en: 'Enter the document details and book a slot on the AP registration portal (registration.ap.gov.in), and pay stamp duty and fee online.', te: 'AP రిజిస్ట్రేషన్ పోర్టల్‌ (registration.ap.gov.in)లో డాక్యుమెంట్ వివరాలు నమోదు చేసి స్లాట్ బుక్ చేసుకోండి, స్టాంప్ డ్యూటీ మరియు ఫీజు ఆన్‌లైన్‌లో చెల్లించండి.' },
      { en: 'On the slot date, go to the SRO with the signers and witnesses. Biometrics and photos are taken, and the deed is registered.', te: 'స్లాట్ రోజున సంతకం చేసేవారు మరియు సాక్షులతో SROకి వెళ్లండి. బయోమెట్రిక్, ఫోటోలు తీసుకుని డీడ్ రిజిస్టర్ చేస్తారు.' },
      { en: 'After registration, update the land record (1B/Adangal) through "Mutation for Correction" at your Village/Ward Secretariat — see the Land Mutation guide.', te: 'రిజిస్ట్రేషన్ తర్వాత, మీ గ్రామ/వార్డు సచివాలయంలో "మ్యుటేషన్ ఫర్ కరెక్షన్" ద్వారా భూ రికార్డు (1B/అడంగల్) అప్‌డేట్ చేయించండి — భూమి మ్యుటేషన్ గైడ్ చూడండి.' },
      { en: 'Also update property tax, electricity and water connections to the corrected name.', te: 'ఆస్తి పన్ను, విద్యుత్, నీటి కనెక్షన్లను కూడా సరిచేసిన పేరుకు మార్చండి.' },
    ],
    whereToApply: [
      { en: 'The same Sub-Registrar Office where the original deed was registered', te: 'అసలు డీడ్ రిజిస్టర్ అయిన అదే సబ్-రిజిస్ట్రార్ ఆఫీసు' },
      { en: 'Slot booking and payment: registration.ap.gov.in', te: 'స్లాట్ బుకింగ్ మరియు చెల్లింపు: registration.ap.gov.in' },
    ],
    timeline: {
      en: 'Registration itself is done on the slot day. The land-record update afterwards takes a few weeks.',
      te: 'రిజిస్ట్రేషన్ స్లాట్ రోజునే పూర్తవుతుంది. తర్వాత భూ రికార్డు అప్‌డేట్‌కు కొన్ని వారాలు పడుతుంది.',
    },
    tips: [
      { en: 'Fix it early. If the seller later dies or cannot be found, you may need a court order instead.', te: 'త్వరగా సరిచేయండి. అమ్మకందారు తర్వాత చనిపోయినా లేదా దొరకకపోయినా, కోర్టు ఆర్డర్ అవసరం కావచ్చు.' },
      { en: 'A rectification deed cannot change the survey number of what was sold without the original seller taking part.', te: 'అసలు అమ్మకందారు లేకుండా, అమ్మిన ఆస్తి సర్వే నంబర్‌ను రెక్టిఫికేషన్ డీడ్ మార్చలేదు.' },
      { en: 'Ask the SRO for the fee in writing before you pay a middleman anything.', te: 'మధ్యవర్తికి ఏమైనా ఇచ్చే ముందు, ఫీజు ఎంతో SROని రాతపూర్వకంగా అడగండి.' },
    ],
    links: [
      { label: 'AP Registration & Stamps (IGRS)', url: 'https://registration.ap.gov.in' },
      { label: 'Meebhoomi land records', url: 'https://meebhoomi.ap.gov.in' },
    ],
    lastChecked: '2026-10-19',
  },
  {
    id: 'land-mutation',
    category: 'property',
    level: 'state',
    title: {
      en: 'Land mutation — get your name into 1B / Adangal (Meebhoomi)',
      te: 'భూమి మ్యుటేషన్ — 1B / అడంగల్‌లో మీ పేరు (మీభూమి)',
    },
    summary: {
      en: 'Mutation updates the government land record (ROR-1B and Adangal) to show the new owner after a sale, inheritance, gift or partition, or to fix a wrong entry. Registration alone is not enough — the revenue record must also change.',
      te: 'అమ్మకం, వారసత్వం, గిఫ్ట్ లేదా భాగ పంపకం తర్వాత కొత్త యజమానిని చూపించేలా లేదా తప్పు వివరం సరిచేసేలా ప్రభుత్వ భూ రికార్డు (ROR-1B మరియు అడంగల్) మార్చడమే మ్యుటేషన్. రిజిస్ట్రేషన్ ఒక్కటే సరిపోదు — రెవెన్యూ రికార్డు కూడా మారాలి.',
    },
    keywords: ['mutation', '1B', 'adangal', 'pahani', 'meebhoomi', 'passbook', 'inheritance', 'pattadar', 'మ్యుటేషన్', 'పట్టాదారు', 'పాస్‌బుక్', 'వారసత్వం'],
    whoCanApply: [
      { en: 'New owner after a registered sale (usually automatic — see steps)', te: 'రిజిస్టర్డ్ అమ్మకం తర్వాత కొత్త యజమాని (సాధారణంగా ఆటోమేటిక్ — స్టెప్స్ చూడండి)' },
      { en: 'Legal heirs after the owner\'s death', te: 'యజమాని మరణం తర్వాత చట్టబద్ధ వారసులు' },
      { en: 'Anyone whose name, extent or other detail is wrong in 1B / Adangal', te: '1B / అడంగల్‌లో పేరు, విస్తీర్ణం లేదా ఇతర వివరం తప్పుగా ఉన్నవారు' },
    ],
    documents: [
      { en: 'Registered deed (sale, gift, partition) or rectification deed', te: 'రిజిస్టర్డ్ డీడ్ (అమ్మకం, గిఫ్ట్, భాగపంపకం) లేదా రెక్టిఫికేషన్ డీడ్' },
      { en: 'Current 1B / Adangal copy (free on Meebhoomi)', te: 'ప్రస్తుత 1B / అడంగల్ కాపీ (మీభూమిలో ఉచితం)' },
      { en: 'Pattadar passbook, if you have one', te: 'పట్టాదారు పాస్‌బుక్ (ఉంటే)' },
      { en: 'Aadhaar of the applicant', te: 'దరఖాస్తుదారుని ఆధార్' },
      { en: 'For inheritance: death certificate and family member certificate', te: 'వారసత్వానికి: మరణ ధృవీకరణ పత్రం మరియు కుటుంబ సభ్యుల ధృవీకరణ పత్రం' },
    ],
    fees: [
      {
        item: { en: 'Auto mutation after sale deed registration', te: 'సేల్ డీడ్ రిజిస్ట్రేషన్ తర్వాత ఆటో మ్యుటేషన్' },
        amount: { en: 'Free', te: 'ఉచితం' },
      },
      {
        item: { en: 'Mutation for transaction / correction at Secretariat or MeeSeva', te: 'సచివాలయం లేదా మీసేవలో మ్యుటేషన్ (బదిలీ / సవరణ)' },
        amount: { en: 'A listed user charge — ask for the receipt', te: 'నిర్ణీత యూజర్ ఛార్జీ — రసీదు తప్పకుండా అడగండి' },
      },
      {
        item: { en: 'Viewing 1B / Adangal on Meebhoomi', te: 'మీభూమిలో 1B / అడంగల్ చూడడం' },
        amount: { en: 'Free', te: 'ఉచితం' },
      },
    ],
    steps: [
      { en: 'After a sale deed is registered, mutation starts automatically. Check it on meebhoomi.ap.gov.in → 1B → "Auto Mutation Records".', te: 'సేల్ డీడ్ రిజిస్టర్ అయ్యాక మ్యుటేషన్ ఆటోమేటిక్‌గా మొదలవుతుంది. meebhoomi.ap.gov.in → 1B → "Auto Mutation Records"లో చూడండి.' },
      { en: 'The Tahsildar does a title enquiry and confirms or rejects. If it is stuck, visit the Village Revenue Officer (VRO) at your secretariat.', te: 'తహసీల్దార్ టైటిల్ విచారణ చేసి ఆమోదిస్తారు లేదా తిరస్కరిస్తారు. ఆగిపోతే, మీ సచివాలయంలోని గ్రామ రెవెన్యూ అధికారి (VRO)ని కలవండి.' },
      { en: 'For inheritance, gift or a wrong entry, apply in person at your Village/Ward Secretariat (or MeeSeva): choose "Mutation for Transactions" or "Mutation for Correction".', te: 'వారసత్వం, గిఫ్ట్ లేదా తప్పు వివరం కోసం గ్రామ/వార్డు సచివాలయం (లేదా మీసేవ)లో దరఖాస్తు చేయండి: "Mutation for Transactions" లేదా "Mutation for Correction" ఎంచుకోండి.' },
      { en: 'Keep the application number. Track it on Meebhoomi → Mutation / LP Records.', te: 'అప్లికేషన్ నంబర్ దాచుకోండి. మీభూమి → Mutation / LP Recordsలో ట్రాక్ చేయండి.' },
      { en: 'Once approved, download the updated 1B and apply for a new e-passbook if needed.', te: 'ఆమోదం వచ్చాక కొత్త 1B డౌన్‌లోడ్ చేసుకుని, అవసరమైతే కొత్త ఈ-పాస్‌బుక్‌కు దరఖాస్తు చేయండి.' },
    ],
    whereToApply: [
      { en: 'Village / Ward Secretariat (Grama/Ward Sachivalayam)', te: 'గ్రామ / వార్డు సచివాలయం' },
      { en: 'MeeSeva centre', te: 'మీసేవ కేంద్రం' },
      { en: 'Status only: meebhoomi.ap.gov.in', te: 'స్టేటస్ మాత్రమే: meebhoomi.ap.gov.in' },
    ],
    timeline: {
      en: 'Auto mutation usually reflects in about 2 weeks; Tahsildar confirmation can take up to about a month. Manual cases vary.',
      te: 'ఆటో మ్యుటేషన్ సాధారణంగా సుమారు 2 వారాల్లో కనిపిస్తుంది; తహసీల్దార్ ఆమోదానికి సుమారు నెల వరకు పట్టవచ్చు. మాన్యువల్ కేసుల్లో సమయం మారుతుంది.',
    },
    tips: [
      { en: 'Meebhoomi only shows records; the decision is made by the Tahsildar\'s office.', te: 'మీభూమి రికార్డులను మాత్రమే చూపిస్తుంది; నిర్ణయం తహసీల్దార్ కార్యాలయానిదే.' },
      { en: 'If rejected, ask for the rejection order in writing and appeal quickly — appeal windows are short.', te: 'తిరస్కరిస్తే, ఆర్డర్‌ను రాతపూర్వకంగా తీసుకుని త్వరగా అప్పీల్ చేయండి — అప్పీల్ గడువు తక్కువ.' },
      { en: 'Farmers: a correct 1B is also needed for Annadata Sukhibhava payments.', te: 'రైతులు: అన్నదాత సుఖీభవ డబ్బులకు కూడా సరైన 1B అవసరం.' },
    ],
    links: [
      { label: 'Meebhoomi', url: 'https://meebhoomi.ap.gov.in' },
      { label: 'AP MeeSeva', url: 'https://ap.meeseva.gov.in' },
    ],
    lastChecked: '2026-10-19',
  },

  // ─────────────────────────────────────────── POWER ──
  {
    id: 'pm-surya-ghar',
    category: 'power',
    level: 'both',
    title: {
      en: 'Rooftop solar with subsidy (PM Surya Ghar)',
      te: 'సబ్సిడీతో రూఫ్‌టాప్ సోలార్ (PM సూర్య ఘర్)',
    },
    summary: {
      en: 'The central PM Surya Ghar: Muft Bijli Yojana pays up to ₹78,000 subsidy for solar panels on your home roof. You apply online, install through a registered vendor, your DISCOM (APEPDCL / APCPDCL / APSPDCL) fits a net meter, and the subsidy comes to your bank account.',
      te: 'కేంద్ర ప్రభుత్వ PM సూర్య ఘర్: ముఫ్త్ బిజ్లీ యోజన మీ ఇంటి పైకప్పుపై సోలార్ ప్యానెల్స్‌కు ₹78,000 వరకు సబ్సిడీ ఇస్తుంది. ఆన్‌లైన్‌లో దరఖాస్తు చేసి, రిజిస్టర్డ్ వెండర్ ద్వారా ఇన్‌స్టాల్ చేయించాలి; మీ DISCOM (APEPDCL / APCPDCL / APSPDCL) నెట్ మీటర్ పెడుతుంది, సబ్సిడీ మీ బ్యాంక్ ఖాతాకు వస్తుంది.',
    },
    keywords: ['solar', 'rooftop', 'surya ghar', 'subsidy', 'net meter', 'DISCOM', 'APSPDCL', 'APEPDCL', 'APCPDCL', 'NREDCAP', 'సోలార్', 'సబ్సిడీ', 'కరెంట్'],
    whoCanApply: [
      { en: 'Indian household with its own house and a roof suitable for panels', te: 'సొంత ఇల్లు మరియు ప్యానెల్స్‌కు సరిపడే పైకప్పు ఉన్న భారతీయ కుటుంబం' },
      { en: 'A valid domestic electricity connection (the consumer number is needed)', te: 'చెల్లుబాటు అయ్యే గృహ విద్యుత్ కనెక్షన్ (కన్స్యూమర్ నంబర్ అవసరం)' },
      { en: 'Not taken any solar subsidy before on that connection', te: 'ఆ కనెక్షన్‌పై ఇంతకుముందు ఎలాంటి సోలార్ సబ్సిడీ తీసుకోకూడదు' },
    ],
    documents: [
      { en: 'Latest electricity bill (consumer number)', te: 'తాజా కరెంట్ బిల్లు (కన్స్యూమర్ నంబర్)' },
      { en: 'Aadhaar and mobile number', te: 'ఆధార్ మరియు మొబైల్ నంబర్' },
      { en: 'Bank account details and a cancelled cheque or passbook copy', te: 'బ్యాంక్ ఖాతా వివరాలు మరియు క్యాన్సిల్డ్ చెక్ లేదా పాస్‌బుక్ కాపీ' },
      { en: 'Proof of house ownership if asked (tax receipt or deed)', te: 'అడిగితే ఇంటి యాజమాన్య రుజువు (పన్ను రసీదు లేదా డీడ్)' },
    ],
    fees: [
      {
        item: { en: 'Central subsidy — 1 kW', te: 'కేంద్ర సబ్సిడీ — 1 kW' },
        amount: { en: '₹30,000', te: '₹30,000' },
      },
      {
        item: { en: 'Central subsidy — 2 kW', te: 'కేంద్ర సబ్సిడీ — 2 kW' },
        amount: { en: '₹60,000', te: '₹60,000' },
      },
      {
        item: { en: 'Central subsidy — 3 kW or more', te: 'కేంద్ర సబ్సిడీ — 3 kW లేదా అంతకంటే ఎక్కువ' },
        amount: { en: '₹78,000 (maximum)', te: '₹78,000 (గరిష్టం)' },
      },
      {
        item: { en: 'System cost before subsidy (market estimate)', te: 'సబ్సిడీకి ముందు సిస్టమ్ ఖర్చు (మార్కెట్ అంచనా)' },
        amount: { en: 'Roughly ₹55,000–70,000 per kW; get 2–3 vendor quotes', te: 'ఒక kWకి సుమారు ₹55,000–70,000; 2–3 వెండర్ల కొటేషన్లు తీసుకోండి' },
      },
      {
        item: { en: 'Application on the national portal', te: 'నేషనల్ పోర్టల్‌లో దరఖాస్తు' },
        amount: { en: 'Free', te: 'ఉచితం' },
      },
    ],
    steps: [
      { en: 'Pick the size: up to 150 units/month → 1–2 kW; 150–300 units → 2–3 kW; above 300 units → 3 kW or more.', te: 'సైజు ఎంచుకోండి: నెలకు 150 యూనిట్ల వరకు → 1–2 kW; 150–300 యూనిట్లు → 2–3 kW; 300 పైన → 3 kW లేదా ఎక్కువ.' },
      { en: 'Register on pmsuryaghar.gov.in: choose Andhra Pradesh, your DISCOM, and enter your consumer number and mobile.', te: 'pmsuryaghar.gov.inలో రిజిస్టర్ అవ్వండి: ఆంధ్రప్రదేశ్, మీ DISCOM ఎంచుకుని కన్స్యూమర్ నంబర్, మొబైల్ ఇవ్వండి.' },
      { en: 'Log in and fill the rooftop solar application. Wait for the DISCOM\'s feasibility approval.', te: 'లాగిన్ అయి రూఫ్‌టాప్ సోలార్ అప్లికేషన్ నింపండి. DISCOM ఫీజిబిలిటీ ఆమోదం కోసం వేచి ఉండండి.' },
      { en: 'Choose a vendor registered on the portal. Panels must be made-in-India approved (ALMM / DCR) — insist on it in writing.', te: 'పోర్టల్‌లో రిజిస్టర్ అయిన వెండర్‌ను ఎంచుకోండి. ప్యానెల్స్ భారతదేశంలో తయారైన ఆమోదిత (ALMM / DCR) రకం అయి ఉండాలి — రాతపూర్వకంగా అడగండి.' },
      { en: 'After installation, submit the plant details on the portal and apply for the net meter.', te: 'ఇన్‌స్టాలేషన్ తర్వాత, పోర్టల్‌లో ప్లాంట్ వివరాలు సమర్పించి నెట్ మీటర్‌కు దరఖాస్తు చేయండి.' },
      { en: 'The DISCOM inspects, fits the net meter and issues a commissioning certificate on the portal.', te: 'DISCOM తనిఖీ చేసి, నెట్ మీటర్ పెట్టి, పోర్టల్‌లో కమిషనింగ్ సర్టిఫికెట్ ఇస్తుంది.' },
      { en: 'Enter your bank details and cancelled cheque on the portal. The subsidy is credited to your account.', te: 'పోర్టల్‌లో మీ బ్యాంక్ వివరాలు, క్యాన్సిల్డ్ చెక్ ఇవ్వండి. సబ్సిడీ మీ ఖాతాలో జమ అవుతుంది.' },
    ],
    whereToApply: [
      { en: 'Online only: pmsuryaghar.gov.in (or the PM Surya Ghar app)', te: 'ఆన్‌లైన్ మాత్రమే: pmsuryaghar.gov.in (లేదా PM సూర్య ఘర్ యాప్)' },
      { en: 'Questions about net meter: your DISCOM section office', te: 'నెట్ మీటర్ సందేహాలు: మీ DISCOM సెక్షన్ ఆఫీసు' },
    ],
    timeline: {
      en: 'Typically 45–90 days from application to subsidy. Subsidy usually arrives within about 30 days of DISCOM inspection.',
      te: 'దరఖాస్తు నుండి సబ్సిడీ వరకు సాధారణంగా 45–90 రోజులు. DISCOM తనిఖీ తర్వాత సుమారు 30 రోజుల్లో సబ్సిడీ వస్తుంది.',
    },
    tips: [
      { en: 'AP extra help: SC/ST households get a system up to 2 kW completely free (State pays the balance above the central subsidy); BC households get ₹20,000 extra from the State. Ask your DISCOM / secretariat energy assistant before choosing a vendor.', te: 'AP అదనపు సహాయం: SC/ST కుటుంబాలకు 2 kW వరకు సిస్టమ్ పూర్తిగా ఉచితం (కేంద్ర సబ్సిడీ పైన మిగిలింది రాష్ట్రం చెల్లిస్తుంది); BC కుటుంబాలకు రాష్ట్రం నుండి ₹20,000 అదనం. వెండర్‌ను ఎంచుకునే ముందు మీ DISCOM / సచివాలయ ఎనర్జీ అసిస్టెంట్‌ను అడగండి.' },
      { en: 'Never pay a vendor for "subsidy processing" — the application is free and the subsidy comes directly from the government.', te: '"సబ్సిడీ ప్రాసెసింగ్" కోసం వెండర్‌కు డబ్బు ఇవ్వకండి — దరఖాస్తు ఉచితం, సబ్సిడీ నేరుగా ప్రభుత్వం నుండే వస్తుంది.' },
      { en: 'Subsidy stops at 3 kW. A bigger system is allowed, but the extra capacity gets no subsidy.', te: 'సబ్సిడీ 3 kW వరకే. పెద్ద సిస్టమ్ పెట్టుకోవచ్చు, కానీ అదనపు సామర్థ్యానికి సబ్సిడీ ఉండదు.' },
      { en: 'Low-interest, collateral-free bank loans are offered for systems up to 3 kW — apply from the same portal.', te: '3 kW వరకు సిస్టమ్‌లకు తక్కువ వడ్డీ, హామీ అవసరం లేని బ్యాంక్ రుణాలు ఉన్నాయి — అదే పోర్టల్ నుండి దరఖాస్తు చేయండి.' },
      { en: 'Check the vendor\'s warranty (panels ~25 years, inverter ~5–10 years) and who does after-sales service.', te: 'వెండర్ వారంటీ (ప్యానెల్స్ ~25 సంవత్సరాలు, ఇన్వర్టర్ ~5–10 సంవత్సరాలు) మరియు సర్వీస్ ఎవరు చేస్తారో చూసుకోండి.' },
    ],
    links: [
      { label: 'PM Surya Ghar national portal', url: 'https://pmsuryaghar.gov.in' },
      { label: 'NREDCAP (AP renewable energy agency)', url: 'https://nredcap.in' },
    ],
    helpline: { label: { en: 'PM Surya Ghar helpline', te: 'PM సూర్య ఘర్ హెల్ప్‌లైన్' }, number: '15555' },
    lastChecked: '2026-10-19',
  },

  // ─────────────────────────────────────────── FARMERS ──
  {
    id: 'annadata-sukhibhava',
    category: 'farmers',
    level: 'both',
    title: {
      en: 'Annadata Sukhibhava — ₹20,000 a year for farmers',
      te: 'అన్నదాత సుఖీభవ — రైతులకు ఏడాదికి ₹20,000',
    },
    summary: {
      en: 'Eligible farmer families in AP get ₹20,000 a year: ₹14,000 from the state plus ₹6,000 from the central PM-KISAN scheme, paid in three instalments into the Aadhaar-linked bank account. There is no separate application — you must keep your records correct.',
      te: 'APలో అర్హులైన రైతు కుటుంబాలకు ఏడాదికి ₹20,000: రాష్ట్రం నుండి ₹14,000 మరియు కేంద్ర PM-KISAN నుండి ₹6,000, మూడు విడతల్లో ఆధార్ లింక్ అయిన బ్యాంక్ ఖాతాకు వస్తుంది. ప్రత్యేక దరఖాస్తు లేదు — మీ రికార్డులు సరిగ్గా ఉంచుకోవాలి.',
    },
    keywords: ['farmer', 'rythu bharosa', 'pm kisan', 'annadata', 'installment', 'RSK', 'రైతు', 'అన్నదాత', 'రైతు భరోసా', 'విడత'],
    whoCanApply: [
      { en: 'Land-owning farmer families in AP with land in their name in the revenue records', te: 'రెవెన్యూ రికార్డుల్లో తమ పేరిట భూమి ఉన్న AP రైతు కుటుంబాలు' },
      { en: 'Forest Rights (RoFR) patta holders', te: 'అటవీ హక్కుల (RoFR) పట్టాదారులు' },
      { en: 'Tenant farmers — check your eligibility at the Rythu Seva Kendra', te: 'కౌలు రైతులు — రైతు సేవా కేంద్రంలో అర్హత తెలుసుకోండి' },
      { en: 'Not eligible: government employees, income-tax payers and other excluded groups', te: 'అర్హులు కాదు: ప్రభుత్వ ఉద్యోగులు, ఆదాయపు పన్ను చెల్లించేవారు మరియు ఇతర మినహాయింపు వర్గాలు' },
    ],
    documents: [
      { en: 'Aadhaar', te: 'ఆధార్' },
      { en: 'Bank account linked to Aadhaar (NPCI-mapped)', te: 'ఆధార్‌తో లింక్ అయిన బ్యాంక్ ఖాతా (NPCI మ్యాపింగ్)' },
      { en: 'Land records (1B / Adangal / passbook) in your name', te: 'మీ పేరిట భూ రికార్డులు (1B / అడంగల్ / పాస్‌బుక్)' },
      { en: 'Completed e-KYC', te: 'పూర్తి చేసిన ఈ-KYC' },
    ],
    fees: [
      {
        item: { en: 'To get the benefit', te: 'లబ్ధి పొందడానికి' },
        amount: { en: 'Free — no one can charge you', te: 'ఉచితం — ఎవరూ డబ్బు అడగకూడదు' },
      },
      {
        item: { en: 'Yearly amount', te: 'ఏడాది మొత్తం' },
        amount: { en: '₹20,000 in 3 instalments (first instalment of 2026-27: ₹7,000 = ₹5,000 state + ₹2,000 PM-KISAN)', te: '3 విడతల్లో ₹20,000 (2026-27 మొదటి విడత: ₹7,000 = ₹5,000 రాష్ట్రం + ₹2,000 PM-KISAN)' },
      },
    ],
    steps: [
      { en: 'Check if your name is on the list: annadathasukhibhava.ap.gov.in → "Know Your Status" → enter Aadhaar.', te: 'జాబితాలో మీ పేరు ఉందో చూడండి: annadathasukhibhava.ap.gov.in → "Know Your Status" → ఆధార్ ఇవ్వండి.' },
      { en: 'If e-KYC is pending, finish it at your Rythu Seva Kendra (RSK).', te: 'ఈ-KYC పెండింగ్‌లో ఉంటే, మీ రైతు సేవా కేంద్రం (RSK)లో పూర్తి చేయండి.' },
      { en: 'Make sure your bank account is Aadhaar-seeded for DBT (ask your bank to "NPCI map" it).', te: 'DBT కోసం మీ బ్యాంక్ ఖాతా ఆధార్‌తో సీడ్ అయిందో చూడండి (బ్యాంక్‌లో "NPCI మ్యాపింగ్" అడగండి).' },
      { en: 'If your land record has a wrong name or extent, fix it first (see the Land Mutation guide).', te: 'మీ భూ రికార్డులో పేరు లేదా విస్తీర్ణం తప్పుగా ఉంటే, ముందుగా సరిచేయించండి (భూమి మ్యుటేషన్ గైడ్ చూడండి).' },
      { en: 'If you are left out, raise a grievance at the RSK with your Aadhaar and land documents.', te: 'మీ పేరు రాకపోతే, ఆధార్ మరియు భూ పత్రాలతో RSKలో ఫిర్యాదు ఇవ్వండి.' },
    ],
    whereToApply: [
      { en: 'Rythu Seva Kendra (RSK) in your village', te: 'మీ గ్రామంలోని రైతు సేవా కేంద్రం (RSK)' },
      { en: 'Status: annadathasukhibhava.ap.gov.in', te: 'స్టేటస్: annadathasukhibhava.ap.gov.in' },
    ],
    timeline: {
      en: 'Paid in three instalments a year. The 2026-27 first instalment was released on 20 June 2026; later dates are announced by the government.',
      te: 'ఏడాదికి మూడు విడతల్లో చెల్లిస్తారు. 2026-27 మొదటి విడత 20 జూన్ 2026న విడుదలైంది; తదుపరి తేదీలు ప్రభుత్వం ప్రకటిస్తుంది.',
    },
    tips: [
      { en: 'This scheme replaced YSR Rythu Bharosa. If you got that earlier, still check your status now.', te: 'ఈ పథకం YSR రైతు భరోసా స్థానంలో వచ్చింది. ఇంతకుముందు అది వచ్చినా, ఇప్పుడు స్టేటస్ చూసుకోండి.' },
      { en: 'PM-KISAN is a separate list on pmkisan.gov.in — keep e-KYC done there too.', te: 'PM-KISAN వేరే జాబితా (pmkisan.gov.in) — అక్కడ కూడా ఈ-KYC పూర్తి చేయండి.' },
    ],
    links: [
      { label: 'Annadata Sukhibhava portal', url: 'https://annadathasukhibhava.ap.gov.in' },
      { label: 'PM-KISAN', url: 'https://pmkisan.gov.in' },
    ],
    lastChecked: '2026-10-19',
  },

  // ─────────────────────────────────────────── WELFARE ──
  {
    id: 'ntr-bharosa-pension',
    category: 'welfare',
    level: 'state',
    title: {
      en: 'NTR Bharosa pensions — old age, widow, disability and more',
      te: 'NTR భరోసా పెన్షన్లు — వృద్ధాప్య, వితంతు, వికలాంగ మరియు ఇతరులు',
    },
    summary: {
      en: 'AP pays monthly pensions to the elderly, widows, single women, persons with disabilities, weavers, fishermen, toddy tappers and other groups. Most categories get ₹4,000 a month; disability pensions are ₹6,000, and fully disabled or bedridden people get ₹15,000.',
      te: 'వృద్ధులు, వితంతువులు, ఒంటరి మహిళలు, వికలాంగులు, చేనేత కార్మికులు, మత్స్యకారులు, గీత కార్మికులు మరియు ఇతర వర్గాలకు AP నెలవారీ పెన్షన్ ఇస్తుంది. చాలా వర్గాలకు నెలకు ₹4,000; వికలాంగులకు ₹6,000, పూర్తి వికలాంగులు లేదా మంచానికే పరిమితమైనవారికి ₹15,000.',
    },
    keywords: ['pension', 'old age', 'widow', 'disabled', 'SADAREM', 'single women', 'ysr pension kanuka', 'పెన్షన్', 'వృద్ధాప్య', 'వితంతు', 'వికలాంగ'],
    whoCanApply: [
      { en: 'Old-age pension: residents aged 60 or above', te: 'వృద్ధాప్య పెన్షన్: 60 ఏళ్లు లేదా అంతకు పైబడినవారు' },
      { en: 'Widows, single women, persons with disabilities (with SADAREM certificate) and listed occupation groups', te: 'వితంతువులు, ఒంటరి మహిళలు, వికలాంగులు (SADAREM సర్టిఫికెట్‌తో) మరియు జాబితాలోని వృత్తి వర్గాలు' },
      { en: 'Must be from an eligible low-income household (rice card) and not already on another government pension', te: 'అర్హత ఉన్న తక్కువ ఆదాయ కుటుంబం (రైస్ కార్డు) అయి ఉండాలి, ఇప్పటికే వేరే ప్రభుత్వ పెన్షన్ ఉండకూడదు' },
    ],
    documents: [
      { en: 'Aadhaar', te: 'ఆధార్' },
      { en: 'Rice card', te: 'రైస్ కార్డు' },
      { en: 'Age proof (for old-age pension)', te: 'వయస్సు రుజువు (వృద్ధాప్య పెన్షన్‌కు)' },
      { en: 'Category proof: husband\'s death certificate (widow), SADAREM certificate (disability), occupation certificate where needed', te: 'వర్గ రుజువు: భర్త మరణ ధృవీకరణ (వితంతు), SADAREM సర్టిఫికెట్ (వికలాంగ), అవసరమైతే వృత్తి సర్టిఫికెట్' },
      { en: 'Bank passbook and photo', te: 'బ్యాంక్ పాస్‌బుక్ మరియు ఫోటో' },
    ],
    fees: [
      {
        item: { en: 'Old age, widow, single women, weavers, fishermen, toddy tappers and similar', te: 'వృద్ధాప్య, వితంతు, ఒంటరి మహిళ, చేనేత, మత్స్యకార, గీత కార్మిక మొదలైనవి' },
        amount: { en: '₹4,000 / month', te: 'నెలకు ₹4,000' },
      },
      {
        item: { en: 'Persons with disabilities', te: 'వికలాంగులు' },
        amount: { en: '₹6,000 / month', te: 'నెలకు ₹6,000' },
      },
      {
        item: { en: 'Fully disabled / bedridden', te: 'పూర్తి వికలాంగులు / మంచానికే పరిమితమైనవారు' },
        amount: { en: '₹15,000 / month', te: 'నెలకు ₹15,000' },
      },
      {
        item: { en: 'To apply', te: 'దరఖాస్తుకు' },
        amount: { en: 'Free', te: 'ఉచితం' },
      },
    ],
    steps: [
      { en: 'Go to your Village/Ward Secretariat and meet the Welfare & Education Assistant (or Ward Welfare Secretary).', te: 'మీ గ్రామ/వార్డు సచివాలయానికి వెళ్లి సంక్షేమ & విద్యా సహాయకుడిని (లేదా వార్డు సంక్షేమ కార్యదర్శిని) కలవండి.' },
      { en: 'For disability pension, first book a SADAREM assessment — you can do this on Mana Mitra WhatsApp (9552300009).', te: 'వికలాంగ పెన్షన్ కోసం ముందుగా SADAREM అసెస్‌మెంట్ బుక్ చేయండి — మన మిత్ర వాట్సాప్ (9552300009)లో చేయవచ్చు.' },
      { en: 'Submit the application with documents and do biometric e-KYC.', te: 'పత్రాలతో దరఖాస్తు ఇచ్చి బయోమెట్రిక్ ఈ-KYC చేయండి.' },
      { en: 'After field verification and sanction, the pension starts from the following month.', te: 'ఫీల్డ్ వెరిఫికేషన్ మరియు మంజూరు తర్వాత, తదుపరి నెల నుండి పెన్షన్ మొదలవుతుంది.' },
    ],
    whereToApply: [
      { en: 'Village / Ward Secretariat', te: 'గ్రామ / వార్డు సచివాలయం' },
    ],
    timeline: {
      en: 'Most pensions are handed over at your doorstep by secretariat staff at the start of each month. From 1 October 2026, pensioners under the central NSAP scheme get the money directly in their Aadhaar-linked bank account.',
      te: 'చాలా పెన్షన్లు ప్రతి నెల మొదట్లో సచివాలయ సిబ్బంది ఇంటి వద్దే అందజేస్తారు. 1 అక్టోబర్ 2026 నుండి, కేంద్ర NSAP పథకం కింద ఉన్నవారికి డబ్బు నేరుగా ఆధార్ లింక్ ఉన్న బ్యాంక్ ఖాతాకు వస్తుంది.',
    },
    tips: [
      { en: 'New sanctions open in windows. If the counter says "not now", ask when the next window opens and keep your papers ready.', te: 'కొత్త మంజూరులు కొన్ని సమయాల్లోనే తెరుస్తారు. "ఇప్పుడు కాదు" అంటే, తదుపరి ఎప్పుడో అడిగి పత్రాలు సిద్ధంగా ఉంచుకోండి.' },
      { en: 'This scheme was earlier called YSR Pension Kanuka.', te: 'ఈ పథకాన్ని ఇంతకుముందు YSR పెన్షన్ కానుక అనేవారు.' },
    ],
    links: [
      { label: 'Village & Ward Secretariat (GSWS)', url: 'https://gsws.ap.gov.in' },
    ],
    lastChecked: '2026-10-19',
  },
  {
    id: 'talliki-vandanam',
    category: 'welfare',
    level: 'state',
    title: {
      en: 'Talliki Vandanam — ₹15,000 per school child',
      te: 'తల్లికి వందనం — ప్రతి బడి పిల్లవాడికి ₹15,000',
    },
    summary: {
      en: 'Mothers of eligible families get ₹15,000 a year for every child studying in Class 1 to 12 (including Intermediate). ₹13,000 goes to the mother\'s bank account and ₹2,000 goes to school maintenance. It replaced Amma Vodi, which covered only one child.',
      te: 'అర్హత ఉన్న కుటుంబాల తల్లులకు 1 నుండి 12వ తరగతి (ఇంటర్‌తో సహా) చదివే ప్రతి పిల్లవాడికి ఏడాదికి ₹15,000. ₹13,000 తల్లి బ్యాంక్ ఖాతాకు, ₹2,000 పాఠశాల నిర్వహణకు వెళ్తుంది. ఒక్క పిల్లవాడికే ఉన్న అమ్మ ఒడి స్థానంలో ఇది వచ్చింది.',
    },
    keywords: ['school', 'amma vodi', 'mother', 'student', 'education', 'talliki', 'తల్లికి వందనం', 'అమ్మ ఒడి', 'బడి', 'విద్యార్థి'],
    whoCanApply: [
      { en: 'Mother (or guardian) with an active rice card', te: 'యాక్టివ్ రైస్ కార్డు ఉన్న తల్లి (లేదా సంరక్షకులు)' },
      { en: 'Child studying in Class 1–12 in a recognised government, aided or private school/college in AP', te: 'APలో గుర్తింపు పొందిన ప్రభుత్వ, ఎయిడెడ్ లేదా ప్రైవేట్ స్కూల్/కాలేజీలో 1–12వ తరగతి చదివే పిల్లవాడు' },
      { en: 'At least 75% attendance', te: 'కనీసం 75% హాజరు' },
      { en: 'Families of government employees and other excluded groups are not eligible', te: 'ప్రభుత్వ ఉద్యోగుల కుటుంబాలు మరియు ఇతర మినహాయింపు వర్గాలు అర్హులు కాదు' },
    ],
    documents: [
      { en: 'Mother\'s Aadhaar and the child\'s Aadhaar', te: 'తల్లి ఆధార్ మరియు పిల్లవాడి ఆధార్' },
      { en: 'Rice card', te: 'రైస్ కార్డు' },
      { en: 'Mother\'s bank account, Aadhaar-seeded (NPCI-mapped)', te: 'ఆధార్ సీడ్ అయిన (NPCI మ్యాపింగ్) తల్లి బ్యాంక్ ఖాతా' },
    ],
    fees: [
      {
        item: { en: 'Benefit per child per year', te: 'పిల్లవాడికి ఏడాదికి లబ్ధి' },
        amount: { en: '₹15,000 (₹13,000 to mother + ₹2,000 to school)', te: '₹15,000 (తల్లికి ₹13,000 + స్కూల్‌కు ₹2,000)' },
      },
      {
        item: { en: 'To apply', te: 'దరఖాస్తుకు' },
        amount: { en: 'Free', te: 'ఉచితం' },
      },
    ],
    steps: [
      { en: 'There is no separate form. Eligible families are picked from school and rice-card data.', te: 'ప్రత్యేక ఫారం లేదు. స్కూల్ మరియు రైస్ కార్డు డేటా ఆధారంగా అర్హులను ఎంపిక చేస్తారు.' },
      { en: 'Make sure the child\'s Aadhaar is updated in the school records.', te: 'పిల్లవాడి ఆధార్ స్కూల్ రికార్డుల్లో సరిగ్గా ఉందో చూసుకోండి.' },
      { en: 'Finish e-KYC at your Village/Ward Secretariat.', te: 'మీ గ్రామ/వార్డు సచివాలయంలో ఈ-KYC పూర్తి చేయండి.' },
      { en: 'Get the mother\'s bank account Aadhaar-seeded for DBT at the bank.', te: 'DBT కోసం తల్లి బ్యాంక్ ఖాతాను బ్యాంకులో ఆధార్‌తో సీడ్ చేయించండి.' },
      { en: 'Check eligibility and payment status on the NBM portal, or ask at the secretariat. If left out, file a grievance there.', te: 'NBM పోర్టల్‌లో అర్హత మరియు చెల్లింపు స్టేటస్ చూడండి, లేదా సచివాలయంలో అడగండి. పేరు రాకపోతే అక్కడే ఫిర్యాదు ఇవ్వండి.' },
    ],
    whereToApply: [
      { en: 'Village / Ward Secretariat', te: 'గ్రామ / వార్డు సచివాలయం' },
      { en: 'Status: gsws-nbm.ap.gov.in', te: 'స్టేటస్: gsws-nbm.ap.gov.in' },
    ],
    timeline: {
      en: 'Paid once a year around the start of the school year. The 2026-27 payment was scheduled for July 2026.',
      te: 'విద్యా సంవత్సరం మొదట్లో ఏడాదికి ఒకసారి చెల్లిస్తారు. 2026-27 చెల్లింపు జూలై 2026లో షెడ్యూల్ చేశారు.',
    },
    tips: [
      { en: 'The most common reason for missing money is a bank account not linked to Aadhaar for DBT. Fix that first.', te: 'డబ్బు రాకపోవడానికి ఎక్కువగా కారణం — DBT కోసం బ్యాంక్ ఖాతా ఆధార్‌తో లింక్ కాకపోవడం. ముందు అది సరిచేయండి.' },
    ],
    links: [
      { label: 'NBM beneficiary portal', url: 'https://gsws-nbm.ap.gov.in' },
    ],
    lastChecked: '2026-10-19',
  },

  // ─────────────────────────────────────────── FOOD ──
  {
    id: 'rice-card',
    category: 'food',
    level: 'state',
    title: {
      en: 'New rice card / add a member / corrections',
      te: 'కొత్త రైస్ కార్డు / సభ్యుని చేర్పు / సవరణలు',
    },
    summary: {
      en: 'The rice card gives subsidised ration and is also the key that unlocks most AP welfare schemes (Talliki Vandanam, pensions and more). You apply at your Village/Ward Secretariat or MeeSeva.',
      te: 'రైస్ కార్డు సబ్సిడీ రేషన్ ఇస్తుంది, అలాగే చాలా AP సంక్షేమ పథకాలకు (తల్లికి వందనం, పెన్షన్లు మొదలైనవి) ఇదే తాళంచెవి. గ్రామ/వార్డు సచివాలయం లేదా మీసేవలో దరఖాస్తు చేయాలి.',
    },
    keywords: ['ration', 'rice card', 'white card', 'add member', 'split card', 'epds', 'smart card', 'రేషన్', 'రైస్ కార్డు', 'బియ్యం కార్డు', 'సభ్యుడు'],
    whoCanApply: [
      { en: 'Families with annual income below about ₹1.2 lakh (rural) or ₹1.44 lakh (urban), subject to other conditions', te: 'వార్షిక ఆదాయం సుమారు ₹1.2 లక్షలు (గ్రామీణ) లేదా ₹1.44 లక్షలు (పట్టణ) కంటే తక్కువ ఉన్న కుటుంబాలు (ఇతర షరతులకు లోబడి)' },
      { en: 'Newly married couples can apply for a separate card', te: 'కొత్తగా పెళ్లైన దంపతులు వేరే కార్డుకు దరఖాస్తు చేయవచ్చు' },
    ],
    documents: [
      { en: 'Aadhaar of every family member', te: 'కుటుంబ సభ్యులందరి ఆధార్' },
      { en: 'Income certificate', te: 'ఆదాయ ధృవీకరణ పత్రం' },
      { en: 'Address proof', te: 'చిరునామా రుజువు' },
      { en: 'Passport-size photo of the head of family', te: 'కుటుంబ పెద్ద పాస్‌పోర్ట్ సైజ్ ఫోటో' },
      { en: 'Marriage certificate (for a new couple\'s card)', te: 'వివాహ ధృవీకరణ పత్రం (కొత్త దంపతుల కార్డుకు)' },
      { en: 'Birth certificate (to add a child)', te: 'జనన ధృవీకరణ పత్రం (పిల్లవాడిని చేర్చడానికి)' },
    ],
    fees: [
      {
        item: { en: 'Application', te: 'దరఖాస్తు' },
        amount: { en: 'Free at the secretariat; small service charge at MeeSeva', te: 'సచివాలయంలో ఉచితం; మీసేవలో చిన్న సర్వీస్ ఛార్జీ' },
      },
    ],
    steps: [
      { en: 'Go to your Village/Ward Secretariat (or MeeSeva) and say what you need: new card, add member, remove member, split, or correction.', te: 'మీ గ్రామ/వార్డు సచివాలయం (లేదా మీసేవ)కి వెళ్లి ఏం కావాలో చెప్పండి: కొత్త కార్డు, సభ్యుని చేర్పు, తొలగింపు, విభజన లేదా సవరణ.' },
      { en: 'Submit documents and do biometric e-KYC for each member.', te: 'పత్రాలు ఇచ్చి ప్రతి సభ్యునికి బయోమెట్రిక్ ఈ-KYC చేయండి.' },
      { en: 'An officer does field verification at your house.', te: 'అధికారి మీ ఇంటికి వచ్చి ఫీల్డ్ వెరిఫికేషన్ చేస్తారు.' },
      { en: 'Track the application with the number on your receipt. Once approved, collect ration at your fair price shop.', te: 'రసీదుపై ఉన్న నంబర్‌తో అప్లికేషన్ ట్రాక్ చేయండి. ఆమోదం వచ్చాక మీ రేషన్ షాపులో సరుకులు తీసుకోండి.' },
    ],
    whereToApply: [
      { en: 'Village / Ward Secretariat', te: 'గ్రామ / వార్డు సచివాలయం' },
      { en: 'MeeSeva centre or ap.meeseva.gov.in', te: 'మీసేవ కేంద్రం లేదా ap.meeseva.gov.in' },
    ],
    timeline: {
      en: 'Usually about 15–30 days after verification.',
      te: 'వెరిఫికేషన్ తర్వాత సాధారణంగా సుమారు 15–30 రోజులు.',
    },
    tips: [
      { en: 'Keep e-KYC done at the ration shop every year, or the card can go inactive and you may lose scheme benefits.', te: 'రేషన్ షాపులో ఈ-KYC పూర్తి చేస్తూ ఉండండి, లేకపోతే కార్డు ఇనాక్టివ్ అయి పథకాల లబ్ధి పోవచ్చు.' },
      { en: 'New QR-code smart rice cards began distribution in August 2026. Your old card stays valid until you get the new one.', te: 'QR కోడ్ ఉన్న కొత్త స్మార్ట్ రైస్ కార్డుల పంపిణీ ఆగస్టు 2026లో మొదలైంది. కొత్తది వచ్చే వరకు పాత కార్డు చెల్లుతుంది.' },
      { en: 'With One Nation One Ration Card you can take ration in any state.', te: 'వన్ నేషన్ వన్ రేషన్ కార్డ్ ద్వారా ఏ రాష్ట్రంలోనైనా రేషన్ తీసుకోవచ్చు.' },
    ],
    links: [
      { label: 'AP MeeSeva', url: 'https://ap.meeseva.gov.in' },
      { label: 'AP ePDS', url: 'https://epdsap.ap.gov.in' },
    ],
    lastChecked: '2026-10-19',
  },

  // ─────────────────────────────────────────── DIGITAL ──
  {
    id: 'mana-mitra',
    category: 'digital',
    level: 'state',
    title: {
      en: 'Mana Mitra — government services on WhatsApp',
      te: 'మన మిత్ర — వాట్సాప్‌లో ప్రభుత్వ సేవలు',
    },
    summary: {
      en: 'AP\'s official WhatsApp number 9552300009 gives hundreds of services without visiting an office: download certificates, pay electricity bills, book APSRTC bus tickets and temple darshan, book SADAREM slots, and raise complaints. Works in Telugu and English.',
      te: 'AP అధికారిక వాట్సాప్ నంబర్ 9552300009 ద్వారా ఆఫీసుకు వెళ్లకుండా వందల సేవలు: సర్టిఫికెట్లు డౌన్‌లోడ్, కరెంట్ బిల్లు చెల్లింపు, APSRTC బస్ టికెట్లు మరియు ఆలయ దర్శనం బుకింగ్, SADAREM స్లాట్ బుకింగ్, ఫిర్యాదులు. తెలుగు, ఇంగ్లీష్‌లో పనిచేస్తుంది.',
    },
    keywords: ['whatsapp', 'mana mitra', 'certificate', 'download', 'grievance', 'bill', 'bus ticket', 'temple', 'వాట్సాప్', 'మన మిత్ర', 'సర్టిఫికెట్'],
    whoCanApply: [
      { en: 'Anyone in AP with WhatsApp on their Aadhaar-linked mobile number', te: 'ఆధార్ లింక్ అయిన మొబైల్ నంబర్‌లో వాట్సాప్ ఉన్న APలోని ఎవరైనా' },
    ],
    documents: [
      { en: 'Your Aadhaar-linked mobile (for OTP)', te: 'ఆధార్‌తో లింక్ అయిన మీ మొబైల్ (OTP కోసం)' },
      { en: 'Application or certificate number when downloading', te: 'డౌన్‌లోడ్ చేసేటప్పుడు అప్లికేషన్ లేదా సర్టిఫికెట్ నంబర్' },
    ],
    fees: [
      {
        item: { en: 'Using the service', te: 'సేవ వినియోగం' },
        amount: { en: 'Free (normal service fees apply, like a bus ticket price)', te: 'ఉచితం (బస్ టికెట్ ధర లాంటి సాధారణ ఛార్జీలు వర్తిస్తాయి)' },
      },
    ],
    steps: [
      { en: 'Save 9552300009 in your contacts as "Mana Mitra".', te: '9552300009ని "మన మిత్ర" పేరుతో కాంటాక్ట్స్‌లో సేవ్ చేయండి.' },
      { en: 'Send "Hi" on WhatsApp.', te: 'వాట్సాప్‌లో "Hi" పంపండి.' },
      { en: 'Pick your language and the service from the menu (for example Citizen Services → certificate download).', te: 'మెనూలో భాష మరియు సేవ ఎంచుకోండి (ఉదా: Citizen Services → సర్టిఫికెట్ డౌన్‌లోడ్).' },
      { en: 'Enter the OTP and details asked. The document arrives as a PDF in the chat.', te: 'అడిగిన OTP మరియు వివరాలు ఇవ్వండి. డాక్యుమెంట్ చాట్‌లో PDFగా వస్తుంది.' },
    ],
    whereToApply: [
      { en: 'WhatsApp: 9552300009', te: 'వాట్సాప్: 9552300009' },
    ],
    timeline: {
      en: 'Most downloads and bookings are instant.',
      te: 'చాలా డౌన్‌లోడ్‌లు మరియు బుకింగ్‌లు వెంటనే పూర్తవుతాయి.',
    },
    tips: [
      { en: 'Only trust 9552300009 with the verified government badge. Never share OTPs with anyone who calls you.', te: 'వెరిఫైడ్ గవర్నమెంట్ బ్యాడ్జ్ ఉన్న 9552300009ని మాత్రమే నమ్మండి. ఫోన్ చేసిన ఎవరికీ OTP చెప్పకండి.' },
      { en: 'Saayam explains what to do; Mana Mitra is where many of those things are actually done.', te: 'ఏం చేయాలో సాయం వివరిస్తుంది; చాలా పనులు నిజంగా జరిగేది మన మిత్రలో.' },
    ],
    links: [
      { label: 'Open Mana Mitra on WhatsApp', url: 'https://wa.me/919552300009?text=Hi' },
    ],
    helpline: { label: { en: 'Mana Mitra WhatsApp', te: 'మన మిత్ర వాట్సాప్' }, number: '9552300009' },
    lastChecked: '2026-10-19',
  },
];

const allGuides: Guide[] = [...baseGuides, ...moreGuides, ...guides3, ...guides4, ...guides5, ...guides6, ...guides7, ...guides8, ...guides9, ...deepGuides];

/** Every guide, with its full A-to-Z walkthrough merged in where one has been written (see deep.ts). */
export const guides: Guide[] = allGuides.map((g) => (deep[g.id] ? { ...g, ...deep[g.id] } : g));

export function getGuide(id: string): Guide | undefined {
  return guides.find((g) => g.id === id);
}

export function searchGuides(query: string): Guide[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return guides.filter((g) =>
    [g.title.en, g.title.te, g.summary.en, g.summary.te, ...g.keywords].some((s) =>
      s.toLowerCase().includes(q),
    ),
  );
}
