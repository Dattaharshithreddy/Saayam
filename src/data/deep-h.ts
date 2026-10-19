import { Guide } from '../types';
import { b, CHECKED } from './bi';

const s = (en: string, te: string) => b(en, te);
const P = (problem: [string, string], fix: [string, string]) => ({ problem: s(...problem), fix: s(...fix) });

/** Full walkthroughs, batch H (checked 20 Oct 2026): temples, abroad, livestock, sand, Aadhaar problems. */
export const deepH: Record<string, Partial<Guide>> = {
  'ttd-darshan': {
    stages: [
      {
        title: s('Before release day', 'విడుదల రోజుకు ముందు'),
        steps: [
          s('Find the release date: TTD announces it on ttdevasthanams.ap.gov.in and in the news (usually the last week of each month, ~3 months ahead).', 'విడుదల తేదీ తెలుసుకోండి: TTD ttdevasthanams.ap.gov.inలో, వార్తల్లో ప్రకటిస్తుంది (సాధారణంగా ప్రతి నెల చివరి వారం, ~3 నెలల ముందు).'),
          s('Create your login on the official site / TTD app with your mobile.', 'అధికారిక సైట్ / TTD యాప్‌లో మీ మొబైల్‌తో లాగిన్ తయారు చేసుకోండి.'),
          s('Write down for every pilgrim: name exactly as in Aadhaar, age, gender, Aadhaar number. Children under 12 are listed per TTD rules.', 'ప్రతి యాత్రికునికి రాసుకోండి: ఆధార్‌లో ఉన్నట్లే పేరు, వయస్సు, లింగం, ఆధార్ నంబర్. 12 లోపు పిల్లలు TTD నియమాల ప్రకారం.'),
        ],
      },
      {
        title: s('Booking at the release time', 'విడుదల సమయంలో బుకింగ్'),
        steps: [
          s('Log in 10 minutes early. Choose "Special Entry Darshan (₹300)" → month → a green (available) date → time slot.', '10 నిమిషాల ముందే లాగిన్ అవ్వండి. "Special Entry Darshan (₹300)" → నెల → ఆకుపచ్చ (అందుబాటు) తేదీ → సమయ స్లాట్ ఎంచుకోండి.'),
          s('Enter each pilgrim\'s details carefully (names can\'t be changed later) → pay by UPI / card.', 'ప్రతి యాత్రికుని వివరాలు జాగ్రత్తగా నమోదు చేయండి (తర్వాత పేర్లు మార్చలేరు) → UPI / కార్డుతో చెల్లించండి.'),
          s('Download the ticket PDF. Rooms open separately (around 3 PM same day) — book under "Accommodation".', 'టికెట్ PDF డౌన్‌లోడ్ చేయండి. గదులు విడిగా (అదే రోజు సుమారు 3 PM) తెరుస్తాయి — "Accommodation"లో బుక్ చేయండి.'),
        ],
      },
      {
        title: s('On the day', 'ఆ రోజున'),
        steps: [
          s('Wear traditional dress (men: dhoti / pyjama with upper cloth; women: saree / churidar with dupatta).', 'సాంప్రదాయ దుస్తులు ధరించండి (పురుషులు: ధోవతి / పైజామా పై వస్త్రంతో; స్త్రీలు: చీర / చుడీదార్ దుపట్టాతో).'),
          s('Reach the reporting point (shown on ticket) at your slot time with the original ID of everyone. Phones and bags go to the free locker.', 'టికెట్‌లో చూపిన రిపోర్టింగ్ పాయింట్‌కు మీ స్లాట్ సమయానికి అందరి అసలు ఐడీలతో చేరండి. ఫోన్లు, బ్యాగులు ఉచిత లాకర్‌లో.'),
          s('Collect laddus at the laddu counter with the ticket.', 'టికెట్‌తో లడ్డూ కౌంటర్‌లో లడ్డూలు తీసుకోండి.'),
        ],
      },
      {
        title: s('No ticket? Free darshan', 'టికెట్ లేదా? ఉచిత దర్శనం'),
        steps: [
          s('SSD time-slot tokens: free at the Tirupati counters (Srinivasam, Vishnu Nivasam, Bhudevi Complex) early morning when issued — Aadhaar needed.', 'SSD సమయ స్లాట్ టోకెన్లు: జారీ చేసినప్పుడు తెల్లవారుజామున తిరుపతి కౌంటర్లలో (శ్రీనివాసం, విష్ణు నివాసం, భూదేవి కాంప్లెక్స్) ఉచితం — ఆధార్ కావాలి.'),
          s('Or join the free Sarva Darshan queue at the Vaikuntham Queue Complex, Tirumala (waiting can be long on weekends).', 'లేదా తిరుమల వైకుంఠం క్యూ కాంప్లెక్స్‌లో ఉచిత సర్వ దర్శనం క్యూలో చేరండి (వారాంతాల్లో ఎక్కువ నిరీక్షణ).'),
        ],
      },
    ],
    costExample: s('Family of 4 with ₹300 tickets: ₹1,200 (one laddu each included) + a ₹100 room for a day.', '₹300 టికెట్లతో 4 మంది కుటుంబం: ₹1,200 (ఒక్కొక్కరికి ఒక లడ్డూ) + ఒక రోజుకు ₹100 గది.'),
    problems: [P(['Quota sold out in minutes.', 'కోటా నిమిషాల్లో అయిపోయింది.'], ['Watch for the "current booking" / cancellation releases on the site, try weekdays, or use free SSD tokens.', 'సైట్‌లో "కరెంట్ బుకింగ్" / రద్దు విడుదలలు గమనించండి, వారపు రోజులు ప్రయత్నించండి, లేదా ఉచిత SSD టోకెన్లు వాడండి.'])],
    lastChecked: CHECKED,
  },

  'ap-temples-booking': {
    stages: [
      {
        title: s('Book on WhatsApp (easiest)', 'వాట్సాప్‌లో బుక్ (సులభం)'),
        steps: [
          s('Save 9552300009 and send "Hi".', '9552300009 సేవ్ చేసి "Hi" పంపండి.'),
          s('Choose language → "Temple services" → temple (e.g. Srisailam, Kanaka Durga) → darshan / seva / room / prasadam.', 'భాష → "Temple services" → ఆలయం (ఉదా: శ్రీశైలం, కనకదుర్గ) → దర్శనం / సేవ / గది / ప్రసాదం ఎంచుకోండి.'),
          s('Pick date and slot, enter names and Aadhaar of devotees, pay by UPI. The ticket PDF comes in the same chat.', 'తేదీ, స్లాట్ ఎంచుకుని, భక్తుల పేర్లు, ఆధార్ నమోదు చేసి UPIతో చెల్లించండి. టికెట్ PDF అదే చాట్‌లో వస్తుంది.'),
        ],
      },
      {
        title: s('Or on the website / app', 'లేదా వెబ్‌సైట్ / యాప్‌లో'),
        steps: [
          s('aptemples.ap.gov.in or the official AP Temples app → register with mobile → select temple → service → date → pay.', 'aptemples.ap.gov.in లేదా అధికారిక AP Temples యాప్ → మొబైల్‌తో నమోదు → ఆలయం → సేవ → తేదీ → చెల్లింపు.'),
        ],
      },
      {
        title: s('At the temple', 'ఆలయంలో'),
        steps: [
          s('Go to the counter / gate written on the ticket at your slot time with the same Aadhaar.', 'టికెట్‌పై రాసిన కౌంటర్ / ద్వారానికి మీ స్లాట్ సమయానికి అదే ఆధార్‌తో వెళ్లండి.'),
          s('Donation: ask for a printed receipt (and 80G receipt if you want tax benefit).', 'విరాళం: ముద్రించిన రసీదు అడగండి (పన్ను ప్రయోజనం కావాలంటే 80G రసీదు).'),
        ],
      },
    ],
    problems: [P(['Someone offers "VIP darshan" for cash.', 'ఎవరైనా నగదుకు "VIP దర్శనం" ఇస్తామంటున్నారు.'], ['It\'s a scam or illegal. Use only official tickets; complain to the temple EO or on PGRS.', 'అది మోసం లేదా చట్టవిరుద్ధం. అధికారిక టికెట్లు మాత్రమే వాడండి; ఆలయ EOకి లేదా PGRSలో ఫిర్యాదు చేయండి.'])],
    lastChecked: CHECKED,
  },

  'apnrts-insurance': {
    stages: [
      {
        title: s('Buy the policy (online, 15 minutes)', 'పాలసీ కొనడం (ఆన్‌లైన్, 15 నిమిషాలు)'),
        steps: [
          s('apnrts.ap.gov.in → "Insurance" → "Register New Policy" → mobile / email OTP.', 'apnrts.ap.gov.in → "Insurance" → "Register New Policy" → మొబైల్ / ఇమెయిల్ OTP.'),
          s('Choose Worker or Student. Fill passport details, country, employer / university, AP address.', 'వర్కర్ లేదా స్టూడెంట్ ఎంచుకోండి. పాస్‌పోర్ట్ వివరాలు, దేశం, యజమాని / విశ్వవిద్యాలయం, AP చిరునామా నింపండి.'),
          s('Add the nominee (name, relation, phone in India).', 'నామినీని చేర్చండి (పేరు, సంబంధం, భారత్‌లో ఫోన్).'),
          s('Upload passport front/back and visa / work permit or admission letter; pay ₹590 (workers, 3 years) or ₹218 (students, 1 year).', 'పాస్‌పోర్ట్ ముందు/వెనుక, వీసా / వర్క్ పర్మిట్ లేదా అడ్మిషన్ లేఖ అప్‌లోడ్ చేసి; ₹590 (వర్కర్లు, 3 సంవత్సరాలు) లేదా ₹218 (విద్యార్థులు, 1 సంవత్సరం) చెల్లించండి.'),
          s('Download the policy and send it to your family on WhatsApp.', 'పాలసీ డౌన్‌లోడ్ చేసి వాట్సాప్‌లో మీ కుటుంబానికి పంపండి.'),
        ],
      },
      {
        title: s('Claim', 'క్లెయిమ్'),
        steps: [
          s('Family / worker calls the APNRTS 24×7 helpline (+91 863 2340678) or WhatsApp +91 85005 27678 with the policy number.', 'కుటుంబం / కార్మికుడు పాలసీ నంబర్‌తో APNRTS 24×7 హెల్ప్‌లైన్ (+91 863 2340678) లేదా వాట్సాప్ +91 85005 27678కి సంప్రదించండి.'),
          s('APNRTS tells the exact documents (death certificate, police / hospital records, embassy letter) and helps file the claim with the insurer.', 'APNRTS అవసరమైన పత్రాలు (మరణ ధృవీకరణ, పోలీసు / ఆసుపత్రి రికార్డులు, రాయబార కార్యాలయ లేఖ) చెప్పి బీమా సంస్థకు క్లెయిమ్ వేయడంలో సహాయం చేస్తుంది.'),
        ],
      },
    ],
    costExample: s('₹590 for 3 years → ₹10 lakh accidental death / disability cover + medical and repatriation help.', '3 సంవత్సరాలకు ₹590 → ₹10 లక్షల ప్రమాద మరణ / వైకల్య కవర్ + వైద్య, స్వదేశానికి తరలింపు సహాయం.'),
    lastChecked: CHECKED,
  },

  'overseas-jobs-safe': {
    stages: [
      {
        title: s('Check the agent and the job', 'ఏజెంట్, ఉద్యోగం తనిఖీ'),
        steps: [
          s('emigrate.gov.in → "Recruiting Agents" → search the agent\'s name / licence number. Status must be "Active".', 'emigrate.gov.in → "Recruiting Agents" → ఏజెంట్ పేరు / లైసెన్స్ నంబర్ వెతకండి. స్టేటస్ "Active" ఉండాలి.'),
          s('Ask for the written job offer: employer name, address, job, salary, hours, food, stay, contract period. Ask for it in Telugu / English.', 'రాతపూర్వక ఉద్యోగ ఆఫర్ అడగండి: యజమాని పేరు, చిరునామా, పని, జీతం, పని గంటలు, భోజనం, వసతి, ఒప్పంద కాలం. తెలుగు / ఇంగ్లీష్‌లో అడగండి.'),
          s('The visa must be an employment / work visa — never go on a visit visa to work.', 'వీసా ఉద్యోగ / వర్క్ వీసా అయి ఉండాలి — పని కోసం విజిట్ వీసాపై ఎప్పుడూ వెళ్లకండి.'),
          s('Pay the agent only by bank transfer, max ₹30,000 + GST, and take a receipt.', 'ఏజెంట్‌కు బ్యాంక్ బదిలీ ద్వారా మాత్రమే, గరిష్టంగా ₹30,000 + GST చెల్లించి రసీదు తీసుకోండి.'),
        ],
      },
      {
        title: s('Paperwork before flying', 'ప్రయాణానికి ముందు పత్రాలు'),
        steps: [
          s('ECR passport: buy PBBY insurance online on eMigrate; the agent / employer applies for emigration clearance; check the clearance shows on eMigrate.', 'ECR పాస్‌పోర్ట్: eMigrateలో ఆన్‌లైన్‌లో PBBY బీమా కొనండి; ఏజెంట్ / యజమాని ఎమిగ్రేషన్ క్లియరెన్స్‌కు దరఖాస్తు చేస్తారు; eMigrateలో క్లియరెన్స్ కనిపిస్తుందో చూడండి.'),
          s('Buy APNRTS Pravasandhra Bharosa insurance (₹590, 3 years).', 'APNRTS ప్రవాసాంధ్ర భరోసా బీమా కొనండి (₹590, 3 సంవత్సరాలు).'),
          s('Leave copies of passport, visa, contract, agent and employer details, and insurance with family.', 'పాస్‌పోర్ట్, వీసా, ఒప్పందం, ఏజెంట్, యజమాని వివరాలు, బీమా కాపీలు కుటుంబం వద్ద ఉంచండి.'),
        ],
      },
      {
        title: s('After reaching', 'చేరిన తర్వాత'),
        steps: [
          s('Register with the Indian Embassy (many have an online form / app) and save its helpline and the APNRTS WhatsApp number.', 'భారత రాయబార కార్యాలయంలో నమోదు చేసుకోండి (చాలా వాటికి ఆన్‌లైన్ ఫారం / యాప్ ఉంది), దాని హెల్ప్‌లైన్, APNRTS వాట్సాప్ నంబర్ సేవ్ చేయండి.'),
          s('Keep your passport yourself; check the salary matches the contract.', 'పాస్‌పోర్ట్ మీ దగ్గరే ఉంచుకోండి; జీతం ఒప్పందంతో సరిపోలుతుందో చూడండి.'),
        ],
      },
    ],
    costExample: s('Legal costs: agent ≤ ₹30,000 + GST, PBBY ₹275–375 + GST, APNRTS ₹590. The employer usually pays visa and ticket.', 'చట్టబద్ధ ఖర్చులు: ఏజెంట్ ≤ ₹30,000 + GST, PBBY ₹275–375 + GST, APNRTS ₹590. వీసా, టికెట్ సాధారణంగా యజమాని భరిస్తారు.'),
    problems: [P(['Agent took money and vanished.', 'ఏజెంట్ డబ్బు తీసుకుని మాయమయ్యాడు.'], ['Police FIR + complaint on eMigrate / Protector of Emigrants, Hyderabad, with payment proof.', 'చెల్లింపు రుజువుతో పోలీసు FIR + eMigrate / హైదరాబాద్ ప్రొటెక్టర్ ఆఫ్ ఎమిగ్రెంట్స్‌కు ఫిర్యాదు.'])],
    lastChecked: CHECKED,
  },

  'nri-help-abroad': {
    stages: [
      {
        title: s('Collect details first', 'ముందు వివరాలు సేకరణ'),
        steps: [
          s('Passport number / copy, visa, employer name, address and phone, agent name, the person\'s phone, last contact date, and what the problem is.', 'పాస్‌పోర్ట్ నంబర్ / కాపీ, వీసా, యజమాని పేరు, చిరునామా, ఫోన్, ఏజెంట్ పేరు, వ్యక్తి ఫోన్, చివరిగా మాట్లాడిన తేదీ, సమస్య ఏమిటి.'),
        ],
      },
      {
        title: s('Raise the case', 'కేసు నమోదు'),
        steps: [
          s('Call / WhatsApp APNRTS (+91 863 2340678 / +91 85005 27678) — they contact the embassy for you.', 'APNRTSకు కాల్ / వాట్సాప్ (+91 863 2340678 / +91 85005 27678) — వారు మీ తరఫున రాయబార కార్యాలయాన్ని సంప్రదిస్తారు.'),
          s('madad.gov.in → register → "Consular grievance" → choose country and issue (unpaid wages, stranded, death, jail…) → upload passport copy → note the MADAD number.', 'madad.gov.in → నమోదు → "Consular grievance" → దేశం, సమస్య (జీతం రాలేదు, చిక్కుకున్నారు, మరణం, జైలు…) ఎంచుకుని → పాస్‌పోర్ట్ కాపీ అప్‌లోడ్ → MADAD నంబర్ నోట్ చేయండి.'),
          s('Follow up every few days with the case number.', 'ప్రతి కొన్ని రోజులకు కేసు నంబర్‌తో ఫాలో-అప్ చేయండి.'),
        ],
      },
      {
        title: s('If a person has died', 'వ్యక్తి మరణించినట్లయితే'),
        steps: [
          s('Next of kin signs a consent / NOC letter (bring home or local burial) and sends with relationship proof via the embassy / APNRTS.', 'దగ్గరి బంధువు అనుమతి / NOC లేఖ (ఇంటికి తేవడం లేదా అక్కడే అంత్యక్రియలు) సంతకం చేసి సంబంధ రుజువుతో రాయబార కార్యాలయం / APNRTS ద్వారా పంపాలి.'),
          s('Embassy completes local police / hospital papers; the body arrives at the nearest airport (Hyderabad / Vijayawada / Visakhapatnam etc.). APNRTS can arrange a free ambulance home.', 'రాయబార కార్యాలయం స్థానిక పోలీసు / ఆసుపత్రి పత్రాలు పూర్తి చేస్తుంది; భౌతికకాయం దగ్గరి విమానాశ్రయానికి (హైదరాబాద్ / విజయవాడ / విశాఖపట్నం మొ.) వస్తుంది. APNRTS ఇంటికి ఉచిత అంబులెన్స్ ఏర్పాటు చేయగలదు.'),
          s('Then claim PBBY / APNRTS / employer insurance and pending dues through the embassy.', 'తర్వాత PBBY / APNRTS / యజమాని బీమా, పెండింగ్ బకాయిలను రాయబార కార్యాలయం ద్వారా క్లెయిమ్ చేయండి.'),
        ],
      },
    ],
    costExample: s('Free. Indian Community Welfare Fund can pay tickets / repatriation when no one else can.', 'ఉచితం. ఎవరూ చెల్లించలేనప్పుడు ఇండియన్ కమ్యూనిటీ వెల్ఫేర్ ఫండ్ టికెట్లు / తరలింపు ఖర్చు భరించగలదు.'),
    lastChecked: CHECKED,
  },

  'nri-property': {
    stages: [
      {
        title: s('Buying', 'కొనుగోలు'),
        steps: [
          s('Check title, EC (30 years), 22A list, approvals (LP / building plan) as any buyer would.', 'ఏ కొనుగోలుదారుడిలాగే టైటిల్, EC (30 సంవత్సరాలు), 22A జాబితా, అనుమతులు (LP / భవన ప్లాన్) చూడండి.'),
          s('Pay from an NRE / NRO / FCNR account by bank transfer only; get the sale deed drafted.', 'NRE / NRO / FCNR ఖాతా నుండి బ్యాంక్ బదిలీ ద్వారా మాత్రమే చెల్లించండి; సేల్ డీడ్ డ్రాఫ్ట్ చేయించండి.'),
          s('Register in person on a visit, or through a trusted person with an embassy-attested GPA / SPA adjudicated within 3 months.', 'సందర్శనలో నేరుగా, లేదా 3 నెలల్లో అడ్జుడికేట్ చేసిన రాయబార కార్యాలయ ధృవీకృత GPA / SPAతో నమ్మకస్తుల ద్వారా నమోదు చేయండి.'),
          s('Then do mutation, property tax name change, and electricity / water name change.', 'తర్వాత మ్యుటేషన్, ఆస్తి పన్ను పేరు మార్పు, విద్యుత్ / నీటి పేరు మార్పు చేయండి.'),
        ],
      },
      {
        title: s('Selling', 'అమ్మకం'),
        steps: [
          s('Work out your capital gain with a CA. Before the sale, apply on TRACES for a lower / nil TDS certificate.', 'CAతో మీ మూలధన లాభం లెక్కించండి. అమ్మకానికి ముందే TRACESలో తక్కువ / శూన్య TDS సర్టిఫికెట్‌కు దరఖాస్తు చేయండి.'),
          s('Buyer (needs a TAN) deducts TDS, pays it, files the return and gives you Form 16A.', 'కొనుగోలుదారు (TAN కావాలి) TDS కోసి, చెల్లించి, రిటర్న్ వేసి మీకు ఫారం 16A ఇస్తారు.'),
          s('Receive money into your NRO account; file the Indian tax return (by 31 July) to claim refunds.', 'డబ్బు మీ NRO ఖాతాలో తీసుకోండి; రీఫండ్ కోసం భారత పన్ను రిటర్న్ (జూలై 31 లోపు) వేయండి.'),
          s('Repatriate through your bank with Form 145 / 146 (CA certificate), up to USD 1 million per year.', 'ఫారం 145 / 146 (CA సర్టిఫికెట్)తో మీ బ్యాంక్ ద్వారా ఏడాదికి USD 1 మిలియన్ వరకు విదేశాలకు పంపండి.'),
        ],
      },
      {
        title: s('Protect your property from abroad', 'విదేశాల నుండి ఆస్తి రక్షణ'),
        steps: [
          s('Check the EC and 1B / Adangal online once a year — fraud sales show up there.', 'ఏడాదికి ఒకసారి EC, 1B / అడంగల్ ఆన్‌లైన్‌లో చూడండి — మోసపూరిత అమ్మకాలు అక్కడ కనిపిస్తాయి.'),
          s('Pay property tax online; register any rental agreement.', 'ఆస్తి పన్ను ఆన్‌లైన్‌లో చెల్లించండి; అద్దె ఒప్పందం నమోదు చేయండి.'),
        ],
      },
    ],
    costExample: s('Flat sold for ₹80 lakh, held 5 years: buyer deducts ~14.3% = ₹11.4 lakh TDS unless you got a lower-TDS certificate based on your real gain.', '₹80 లక్షలకు అమ్మిన ఫ్లాట్, 5 సంవత్సరాలు ఉంచినది: తక్కువ-TDS సర్టిఫికెట్ లేకపోతే కొనుగోలుదారు ~14.3% = ₹11.4 లక్షల TDS కోస్తారు.'),
    lastChecked: CHECKED,
  },

  'vet-ambulance-1962': {
    stages: [
      {
        title: s('Emergency', 'అత్యవసరం'),
        steps: [
          s('Call 1962. Say: village and landmark, animal (cow / buffalo / goat), the problem (not standing, difficult calving, bleeding, bloat, poisoning, snake bite).', '1962కి కాల్ చేయండి. చెప్పండి: గ్రామం, ల్యాండ్‌మార్క్, పశువు (ఆవు / గేదె / మేక), సమస్య (లేవడం లేదు, కష్ట ప్రసవం, రక్తస్రావం, కడుపు ఉబ్బరం, విషం, పాము కాటు).'),
          s('Keep the animal in shade with water; don\'t force-feed or give home medicine for poisoning.', 'పశువును నీడలో నీటితో ఉంచండి; బలవంతంగా తినిపించకండి, విషానికి ఇంటి మందులు ఇవ్వకండి.'),
          s('The mobile vet treats on the spot or refers to the veterinary hospital.', 'మొబైల్ వెటర్నరీ డాక్టర్ అక్కడే చికిత్స చేస్తారు లేదా పశు వైద్యశాలకు రిఫర్ చేస్తారు.'),
        ],
      },
      {
        title: s('Routine care', 'సాధారణ సంరక్షణ'),
        steps: [
          s('Get every animal ear-tagged (Pashu Aadhaar) by the veterinary assistant at the RSK.', 'ప్రతి పశువుకు RSKలోని పశు సంవర్ధక సహాయకుని ద్వారా చెవి ట్యాగ్ (పశు ఆధార్) వేయించండి.'),
          s('FMD vaccine every 6 months, brucellosis for female calves 4–8 months, and others in village campaigns — all free.', 'ప్రతి 6 నెలలకు FMD టీకా, 4–8 నెలల ఆడ దూడలకు బ్రూసెల్లోసిస్, గ్రామ ప్రచారాల్లో ఇతరాలు — అన్నీ ఉచితం.'),
          s('Deworm regularly; ask for artificial insemination when the animal is in heat.', 'క్రమం తప్పకుండా నులిపురుగుల మందు; ఎదకు వచ్చినప్పుడు కృత్రిమ గర్భధారణ అడగండి.'),
        ],
      },
    ],
    costExample: s('Free visit, treatment and vaccines.', 'ఉచిత సందర్శన, చికిత్స, టీకాలు.'),
    lastChecked: CHECKED,
  },

  'livestock-insurance': {
    stages: [
      {
        title: s('Enrol', 'నమోదు'),
        steps: [
          s('Ask the veterinary assistant at the RSK when the enrolment drive is.', 'నమోదు డ్రైవ్ ఎప్పుడో RSKలోని పశు సంవర్ధక సహాయకుడిని అడగండి.'),
          s('Vet examines the animal, fixes the ear tag, values it and fills the proposal.', 'డాక్టర్ పశువును పరీక్షించి, చెవి ట్యాగ్ వేసి, విలువ కట్టి ప్రతిపాదన నింపుతారు.'),
          s('Take a photo of yourself with the animal showing the tag; pay your share of the premium; keep the policy.', 'ట్యాగ్ కనిపించేలా పశువుతో మీ ఫోటో తీయండి; ప్రీమియంలో మీ వాటా చెల్లించండి; పాలసీ దాచుకోండి.'),
        ],
      },
      {
        title: s('If the animal dies', 'పశువు మరణిస్తే'),
        steps: [
          s('Inform the vet and the insurance company within 24 hours (phone on the policy).', '24 గంటల్లో డాక్టర్, బీమా కంపెనీకి తెలియజేయండి (పాలసీపై ఫోన్).'),
          s('Don\'t bury before the post-mortem; take photos of the dead animal with the ear tag; keep the tag.', 'పోస్ట్‌మార్టమ్‌కు ముందు పూడ్చకండి; చెవి ట్యాగ్‌తో మృత పశువు ఫోటోలు తీయండి; ట్యాగ్ దాచుకోండి.'),
          s('Submit claim form, policy copy, post-mortem report, tag, photos and bank details to the insurer via the vet.', 'క్లెయిమ్ ఫారం, పాలసీ కాపీ, పోస్ట్‌మార్టం రిపోర్ట్, ట్యాగ్, ఫోటోలు, బ్యాంక్ వివరాలు డాక్టర్ ద్వారా బీమా సంస్థకు సమర్పించండి.'),
        ],
      },
    ],
    costExample: s('Cow valued ₹60,000, 3-year premium ~₹4,000: you pay about 15% (~₹600); the government pays the rest.', '₹60,000 విలువైన ఆవు, 3 సంవత్సరాల ప్రీమియం ~₹4,000: మీరు సుమారు 15% (~₹600); మిగతాది ప్రభుత్వం.'),
    lastChecked: CHECKED,
  },

  'gokulam-sheds': {
    stages: [
      {
        title: s('Apply', 'దరఖాస్తు'),
        steps: [
          s('Before the gram sabha (work-list approval), give an application to the employment scheme field assistant / Village Secretariat with job card, Aadhaar, bank, land proof, caste certificate.', 'గ్రామ సభ (పనుల జాబితా ఆమోదం)కు ముందు, జాబ్ కార్డు, ఆధార్, బ్యాంక్, భూమి రుజువు, కుల ధృవీకరణతో ఉపాధి పథకం ఫీల్డ్ అసిస్టెంట్ / గ్రామ సచివాలయానికి దరఖాస్తు ఇవ్వండి.'),
          s('Officials check the site and animals; the shed is included in the approved work list.', 'అధికారులు స్థలం, పశువులు తనిఖీ చేస్తారు; షెడ్‌ను ఆమోదిత పనుల జాబితాలో చేరుస్తారు.'),
        ],
      },
      {
        title: s('Build and get paid', 'నిర్మించి చెల్లింపు పొందడం'),
        steps: [
          s('Get the approved design and estimate; mark out the site as the engineer says.', 'ఆమోదిత డిజైన్, అంచనా తీసుకోండి; ఇంజినీర్ చెప్పినట్లు స్థలం గుర్తించండి.'),
          s('Build in stages (foundation → floor and walls → roof); after each stage call the technical assistant to inspect and geo-tag photos.', 'దశల్లో నిర్మించండి (పునాది → నేల, గోడలు → పైకప్పు); ప్రతి దశ తర్వాత తనిఖీ, జియో-ట్యాగ్ ఫోటోల కోసం టెక్నికల్ అసిస్టెంట్‌ను పిలవండి.'),
          s('Payments for material and labour come in stages to your account.', 'సామగ్రి, కూలీ చెల్లింపులు దశలవారీగా మీ ఖాతాకు వస్తాయి.'),
        ],
      },
    ],
    lastChecked: CHECKED,
  },

  'nlm-livestock-business': {
    stages: [
      {
        title: s('Prepare', 'సిద్ధం'),
        steps: [
          s('Get training at a Krishi Vigyan Kendra / veterinary university and keep the certificate.', 'కృషి విజ్ఞాన కేంద్రం / పశు వైద్య విశ్వవిద్యాలయంలో శిక్షణ పొంది సర్టిఫికెట్ దాచుకోండి.'),
          s('Secure land (own or a registered lease for the project period).', 'భూమి సమకూర్చుకోండి (సొంతం లేదా ప్రాజెక్ట్ కాలానికి నమోదిత లీజు).'),
          s('Prepare a DPR: units (e.g. 500 ewes + 25 rams), sheds, feed, staff, costs, income, loan repayment. A CA / district AH office can help.', 'DPR తయారు చేయండి: యూనిట్లు (ఉదా: 500 గొర్రెలు + 25 పొట్టేళ్లు), షెడ్లు, మేత, సిబ్బంది, ఖర్చులు, ఆదాయం, రుణ చెల్లింపు. CA / జిల్లా పశు సంవర్ధక కార్యాలయం సహాయపడతాయి.'),
        ],
      },
      {
        title: s('Apply', 'దరఖాస్తు'),
        steps: [
          s('nlm.udyamimitra.in → register → choose scheme (sheep/goat, poultry, piggery, fodder) → fill details → upload DPR, land, KYC, training certificate.', 'nlm.udyamimitra.in → నమోదు → పథకం (గొర్రెలు/మేకలు, కోళ్లు, పందులు, మేత) → వివరాలు నింపి → DPR, భూమి, KYC, శిక్షణ సర్టిఫికెట్ అప్‌లోడ్.'),
          s('State committee screens and recommends to a bank; bank appraises and sanctions the loan.', 'రాష్ట్ర కమిటీ పరిశీలించి బ్యాంకుకు సిఫారసు చేస్తుంది; బ్యాంక్ అంచనా వేసి రుణం మంజూరు చేస్తుంది.'),
          s('Subsidy (50%) comes through SIDBI in two instalments — after the first loan release and after the project is completed and verified.', 'సబ్సిడీ (50%) SIDBI ద్వారా రెండు వాయిదాల్లో — మొదటి రుణ విడుదల తర్వాత, ప్రాజెక్ట్ పూర్తై ధృవీకరణ తర్వాత.'),
        ],
      },
    ],
    costExample: s('Goat farm project ₹40 lakh: subsidy ₹20 lakh; you arrange ₹20 lakh by loan + own money.', '₹40 లక్షల మేకల ఫారం ప్రాజెక్ట్: సబ్సిడీ ₹20 లక్షలు; ₹20 లక్షలు రుణం + సొంత డబ్బు.'),
    lastChecked: CHECKED,
  },

  'free-sand': {
    stages: [
      {
        title: s('Book online', 'ఆన్‌లైన్ బుకింగ్'),
        steps: [
          s('Open sand.ap.gov.in → "Online Sand Booking" → mobile OTP → Aadhaar OTP.', 'sand.ap.gov.in → "Online Sand Booking" → మొబైల్ OTP → ఆధార్ OTP.'),
          s('Enter the construction address (with pin location), purpose (own house / repair).', 'నిర్మాణ చిరునామా (పిన్ లొకేషన్‌తో), ప్రయోజనం (సొంత ఇల్లు / మరమ్మత్తు) నమోదు చేయండి.'),
          s('Choose district → nearest stock point / reach with stock (updated daily at noon) → quantity in tonnes.', 'జిల్లా → స్టాక్ ఉన్న దగ్గరి స్టాక్ పాయింట్ / రీచ్ (ప్రతిరోజూ మధ్యాహ్నం అప్‌డేట్) → టన్నుల్లో పరిమాణం ఎంచుకోండి.'),
          s('Choose delivery (portal vehicle) or own vehicle; pay the loading + transport shown; download the booking slip / waybill.', 'డెలివరీ (పోర్టల్ వాహనం) లేదా సొంత వాహనం ఎంచుకుని; చూపిన లోడింగ్ + రవాణా చెల్లించి; బుకింగ్ స్లిప్ / వేబిల్ డౌన్‌లోడ్ చేయండి.'),
        ],
      },
      {
        title: s('Delivery', 'డెలివరీ'),
        steps: [
          s('The vehicle comes with the waybill; check the quantity (tonnes) before unloading.', 'వాహనం వేబిల్‌తో వస్తుంది; దించే ముందు పరిమాణం (టన్నులు) చూడండి.'),
          s('Self-lift by tractor / bullock cart: go to the designated nearby reach with Aadhaar; for own use only.', 'ట్రాక్టర్ / ఎడ్లబండితో స్వయంగా: ఆధార్‌తో నిర్దేశించిన దగ్గరి రీచ్‌కు వెళ్లండి; సొంత అవసరానికి మాత్రమే.'),
        ],
      },
    ],
    costExample: s('Sand free. 20 tonnes from a stock point 15 km away: you pay only loading + lorry charges shown on the portal.', 'ఇసుక ఉచితం. 15 కి.మీ దూరంలోని స్టాక్ పాయింట్ నుండి 20 టన్నులు: పోర్టల్‌లో చూపిన లోడింగ్ + లారీ ఛార్జీలు మాత్రమే.'),
    problems: [P(['Driver demands extra money.', 'డ్రైవర్ అదనపు డబ్బు అడుగుతున్నాడు.'], ['Don\'t pay; note the vehicle number and email help.apsand@gmail.com or file on PGRS.', 'చెల్లించకండి; వాహన నంబర్ నోట్ చేసి help.apsand@gmail.comకి ఇమెయిల్ లేదా PGRSలో ఫిర్యాదు చేయండి.'])],
    lastChecked: CHECKED,
  },

  'aadhaar-lost-download': {
    stages: [
      {
        title: s('Forgot the number', 'నంబర్ మర్చిపోతే'),
        steps: [
          s('myaadhaar.uidai.gov.in → "Retrieve EID / UID" → choose Aadhaar number → name, mobile / email → captcha → OTP → number comes by SMS.', 'myaadhaar.uidai.gov.in → "Retrieve EID / UID" → ఆధార్ నంబర్ ఎంచుకుని → పేరు, మొబైల్ / ఇమెయిల్ → క్యాప్చా → OTP → SMSలో నంబర్.'),
        ],
      },
      {
        title: s('Download e-Aadhaar', 'e-ఆధార్ డౌన్‌లోడ్'),
        steps: [
          s('"Download Aadhaar" → enter Aadhaar number → OTP → choose masked (recommended for sharing) or regular → download.', '"Download Aadhaar" → ఆధార్ నంబర్ → OTP → మాస్క్‌డ్ (పంచుకోవడానికి మంచిది) లేదా సాధారణం ఎంచుకుని → డౌన్‌లోడ్.'),
          s('Open the PDF with the password: first 4 letters of your name in CAPITALS + year of birth (e.g. RAVI1985).', 'పాస్‌వర్డ్‌తో PDF తెరవండి: మీ పేరులో మొదటి 4 అక్షరాలు CAPITALSలో + పుట్టిన సంవత్సరం (ఉదా: RAVI1985).'),
          s('Print it on A4 — it is as valid as the original card.', 'A4పై ప్రింట్ చేయండి — అసలు కార్డు అంత చెల్లుతుంది.'),
        ],
      },
      {
        title: s('Order a PVC card', 'PVC కార్డు ఆర్డర్'),
        steps: [
          s('"Order Aadhaar PVC Card" → Aadhaar number → OTP → preview → pay ₹75 → note the SRN. It arrives by speed post at your Aadhaar address.', '"Order Aadhaar PVC Card" → ఆధార్ నంబర్ → OTP → ప్రివ్యూ → ₹75 చెల్లించి → SRN నోట్ చేయండి. ఆధార్ చిరునామాకు స్పీడ్ పోస్ట్‌లో వస్తుంది.'),
        ],
      },
      {
        title: s('Mobile not linked', 'మొబైల్ లింక్ లేకపోతే'),
        steps: [
          s('Book an appointment on the UIDAI site or walk into an Aadhaar Seva Kendra / bank / post office centre. Give fingerprint, update mobile, pay ₹75. After it activates, download as above.', 'UIDAI సైట్‌లో అపాయింట్‌మెంట్ బుక్ చేయండి లేదా ఆధార్ సేవా కేంద్రం / బ్యాంక్ / పోస్టాఫీసు కేంద్రానికి వెళ్లండి. వేలిముద్ర ఇచ్చి మొబైల్ అప్‌డేట్ చేసి ₹75 చెల్లించండి. యాక్టివ్ అయ్యాక పైలాగే డౌన్‌లోడ్ చేయండి.'),
        ],
      },
    ],
    costExample: s('Download: free. PVC card ₹75. Mobile update ₹75.', 'డౌన్‌లోడ్: ఉచితం. PVC కార్డు ₹75. మొబైల్ అప్‌డేట్ ₹75.'),
    lastChecked: CHECKED,
  },

  'aadhaar-bank-dbt': {
    stages: [
      {
        title: s('Check which bank gets the money', 'ఏ బ్యాంకుకు డబ్బు వస్తుందో చూడడం'),
        steps: [
          s('myaadhaar.uidai.gov.in → Login (OTP) → "Bank Seeding Status".', 'myaadhaar.uidai.gov.in → లాగిన్ (OTP) → "Bank Seeding Status".'),
          s('It shows the bank name and "Active" / "Inactive". Not your bank, or inactive, or "not seeded" — fix it as below.', 'బ్యాంక్ పేరు, "Active" / "Inactive" చూపిస్తుంది. మీ బ్యాంక్ కాకపోతే, ఇన్‌యాక్టివ్ లేదా "not seeded" అయితే — కింది విధంగా సరిచేయండి.'),
        ],
      },
      {
        title: s('Seed your account', 'మీ ఖాతాను సీడ్ చేయడం'),
        steps: [
          s('Go to the branch of the account you want; ask for the "Aadhaar seeding and NPCI mapping / DBT consent form".', 'మీకు కావాల్సిన ఖాతా బ్రాంచ్‌కు వెళ్లి "ఆధార్ సీడింగ్, NPCI మ్యాపింగ్ / DBT అంగీకార ఫారం" అడగండి.'),
          s('Fill, sign, attach Aadhaar copy; the bank seeds it (many also allow it in net banking / app).', 'నింపి సంతకం చేసి ఆధార్ కాపీ జతచేయండి; బ్యాంక్ సీడ్ చేస్తుంది (చాలా బ్యాంకులు నెట్ బ్యాంకింగ్ / యాప్‌లో కూడా అనుమతిస్తాయి).'),
          s('No account? India Post Payments Bank opens one at your door with Aadhaar and seeds it the same day.', 'ఖాతా లేదా? ఇండియా పోస్ట్ పేమెంట్స్ బ్యాంక్ ఆధార్‌తో మీ ఇంటి వద్దే ఖాతా తెరిచి అదే రోజు సీడ్ చేస్తుంది.'),
        ],
      },
      {
        title: s('Get the stuck payment re-sent', 'ఆగిన చెల్లింపు మళ్లీ పంపించడం'),
        steps: [
          s('After the status shows Active (1–3 days), tell the Secretariat / RSK / scheme office so failed payments are re-processed.', 'స్టేటస్ Active చూపించాక (1–3 రోజులు), విఫలమైన చెల్లింపులు మళ్లీ ప్రాసెస్ చేయడానికి సచివాలయం / RSK / పథకం కార్యాలయానికి చెప్పండి.'),
        ],
      },
    ],
    costExample: s('Free.', 'ఉచితం.'),
    lastChecked: CHECKED,
  },

  'aadhaar-child-biometric': {
    stages: [
      {
        title: s('Baby / small child (Baal Aadhaar)', 'పసిపిల్లలు / చిన్న పిల్లలు (బాల్ ఆధార్)'),
        steps: [
          s('Take the child, the birth certificate and a parent\'s Aadhaar to an Aadhaar centre (or the hospital / anganwadi camp).', 'పిల్లవాడిని, జనన ధృవీకరణ, తల్లి/తండ్రి ఆధార్‌తో ఆధార్ కేంద్రానికి (లేదా ఆసుపత్రి / అంగన్‌వాడీ క్యాంప్‌కు) తీసుకెళ్లండి.'),
          s('Only a photo is taken; the parent authenticates with fingerprint. Keep the enrolment slip.', 'ఫోటో మాత్రమే తీస్తారు; తల్లి/తండ్రి వేలిముద్రతో ధృవీకరిస్తారు. నమోదు స్లిప్ దాచుకోండి.'),
        ],
      },
      {
        title: s('Update at 5 and 15', '5, 15 ఏళ్లకు అప్‌డేట్'),
        steps: [
          s('Book an appointment on the UIDAI site or visit a centre / school camp with the child and the Aadhaar number.', 'UIDAI సైట్‌లో అపాయింట్‌మెంట్ బుక్ చేయండి లేదా పిల్లవాడు, ఆధార్ నంబర్‌తో కేంద్రం / స్కూల్ క్యాంప్‌కు వెళ్లండి.'),
          s('Fingerprints, both irises and a new photo are captured. Free at ages 5–7 and 15–17.', 'వేలిముద్రలు, రెండు కనుపాపలు, కొత్త ఫోటో తీస్తారు. 5–7, 15–17 వయస్సుల్లో ఉచితం.'),
          s('Track with the URN; the update is active in about 1–2 weeks.', 'URNతో ట్రాక్ చేయండి; సుమారు 1–2 వారాల్లో అప్‌డేట్ యాక్టివ్.'),
        ],
      },
    ],
    costExample: s('Free at the right age; ₹125 if done at other ages.', 'సరైన వయస్సులో ఉచితం; ఇతర వయస్సుల్లో ₹125.'),
    lastChecked: CHECKED,
  },

  'aadhaar-misuse-lock': {
    stages: [
      {
        title: s('Check how your Aadhaar was used', 'మీ ఆధార్ ఎలా వాడారో చూడడం'),
        steps: [
          s('myaadhaar.uidai.gov.in → Login → "Authentication History" → pick the date range and "All".', 'myaadhaar.uidai.gov.in → లాగిన్ → "Authentication History" → తేదీ పరిధి, "All" ఎంచుకోండి.'),
          s('Each line shows date, time, type (biometric / OTP / demographic) and the agency. Note any you don\'t recognise.', 'ప్రతి లైన్‌లో తేదీ, సమయం, రకం (బయోమెట్రిక్ / OTP / డెమోగ్రాఫిక్), సంస్థ ఉంటాయి. గుర్తించని వాటిని నోట్ చేయండి.'),
        ],
      },
      {
        title: s('Lock biometrics', 'బయోమెట్రిక్స్ లాక్'),
        steps: [
          s('"Lock / Unlock Biometrics" → tick consent → OTP → Lock. Fingerprint / iris now fail for everyone.', '"Lock / Unlock Biometrics" → అంగీకారం టిక్ → OTP → Lock. ఇప్పుడు వేలిముద్ర / కనుపాప ఎవరికీ పనిచేయదు.'),
          s('Need it for ration / bank / pension? Unlock temporarily (it re-locks automatically after about 10 minutes).', 'రేషన్ / బ్యాంక్ / పెన్షన్‌కు కావాలా? తాత్కాలికంగా అన్‌లాక్ చేయండి (సుమారు 10 నిమిషాల తర్వాత ఆటోమేటిక్‌గా లాక్ అవుతుంది).'),
        ],
      },
      {
        title: s('If money or SIMs were taken', 'డబ్బు లేదా SIMలు తీసుకుంటే'),
        steps: [
          s('Money withdrawn through AePS: call 1930 now, file on cybercrime.gov.in, and give a written complaint to your bank with the date and amount.', 'AePS ద్వారా డబ్బు తీస్తే: ఇప్పుడే 1930కి కాల్, cybercrime.gov.inలో ఫిర్యాదు, తేదీ, మొత్తంతో బ్యాంకుకు రాతపూర్వక ఫిర్యాదు.'),
          s('Unknown SIMs: sancharsaathi.gov.in → "Know your mobile connections" → mark "Not my number".', 'తెలియని SIMలు: sancharsaathi.gov.in → "Know your mobile connections" → "Not my number" గుర్తించండి.'),
          s('Tell UIDAI: call 1947 or raise a grievance on myAadhaar.', 'UIDAIకి తెలియజేయండి: 1947కి కాల్ లేదా myAadhaarలో ఫిర్యాదు.'),
        ],
      },
    ],
    costExample: s('Free.', 'ఉచితం.'),
    lastChecked: CHECKED,
  },
};
