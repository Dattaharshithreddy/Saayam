import { Guide } from '../types';
import { b, CHECKED } from './bi';

const s = (en: string, te: string) => b(en, te);
const P = (problem: [string, string], fix: [string, string]) => ({ problem: s(...problem), fix: s(...fix) });

const counsellingSteps = [
  s('Open cap.apcfss.in → choose the CET → "New Registration" → hall ticket number, date of birth, mobile → OTP.', 'cap.apcfss.in → CET ఎంచుకుని → "New Registration" → హాల్ టికెట్ నంబర్, పుట్టిన తేదీ, మొబైల్ → OTP.'),
  s('Pay the processing fee online; fill category, income, local / non-local details.', 'ప్రాసెసింగ్ ఫీజు ఆన్‌లైన్‌లో చెల్లించి; వర్గం, ఆదాయం, లోకల్ / నాన్-లోకల్ వివరాలు నింపండి.'),
  s('Upload scanned certificates (clear colour scans, PDF / JPG under the size limit). Watch SMS — if something is "rejected", re-upload or go to a Help Line Centre.', 'స్కాన్ చేసిన సర్టిఫికెట్లు అప్‌లోడ్ చేయండి (స్పష్టమైన కలర్ స్కాన్లు, సైజు పరిమితిలో PDF / JPG). SMS గమనించండి — ఏదైనా "rejected" అయితే మళ్లీ అప్‌లోడ్ చేయండి లేదా హెల్ప్ లైన్ సెంటర్‌కు వెళ్లండి.'),
];
const optionsSteps = [
  s('Exercise web options: add colleges + branches in your true order of preference (top = most wanted). Add many — more options, better chance. Save and freeze before the deadline.', 'వెబ్ ఆప్షన్లు: కాలేజీలు + బ్రాంచ్‌లు మీ నిజమైన ప్రాధాన్య క్రమంలో చేర్చండి (పైన = ఎక్కువ కావాల్సినది). చాలా చేర్చండి — ఎక్కువ ఆప్షన్లు, ఎక్కువ అవకాశం. గడువులోగా సేవ్ చేసి ఫ్రీజ్ చేయండి.'),
  s('Check last year\'s closing ranks on the same site to choose realistic options.', 'వాస్తవిక ఆప్షన్లు ఎంచుకోవడానికి అదే సైట్‌లో గత ఏడాది క్లోజింగ్ ర్యాంకులు చూడండి.'),
  s('Download the allotment order → self-report online (pay tuition fee if not reimbursed) → report at the college with originals by the date.', 'కేటాయింపు ఉత్తర్వు డౌన్‌లోడ్ → ఆన్‌లైన్ సెల్ఫ్-రిపోర్ట్ (రీయింబర్స్ కాకపోతే ట్యూషన్ ఫీజు చెల్లించండి) → తేదీలోగా అసలు పత్రాలతో కాలేజీలో రిపోర్ట్.'),
];

/** Full walkthroughs, batch I (checked 20 Oct 2026): entrance exams, internships, business subsidies, SHGs. */
export const deepI: Record<string, Partial<Guide>> = {
  'eapcet-admission': {
    stages: [
      {
        title: s('Apply and write the exam', 'దరఖాస్తు, పరీక్ష'),
        steps: [
          s('When the notification comes (Feb–March), open cets.apsche.ap.gov.in → AP EAPCET → pay the fee first (Inter hall ticket number, mobile).', 'నోటిఫికేషన్ వచ్చినప్పుడు (ఫిబ్రవరి–మార్చి), cets.apsche.ap.gov.in → AP EAPCET → ముందుగా ఫీజు చెల్లించండి (ఇంటర్ హాల్ టికెట్ నంబర్, మొబైల్).'),
          s('Fill the form: stream (Engineering / Agriculture & Pharmacy), SSC and Inter details, category, income, study / local details; upload photo and signature; choose exam centres.', 'ఫారం నింపండి: స్ట్రీమ్ (ఇంజినీరింగ్ / అగ్రికల్చర్ & ఫార్మసీ), SSC, ఇంటర్ వివరాలు, వర్గం, ఆదాయం, స్టడీ / లోకల్ వివరాలు; ఫోటో, సంతకం అప్‌లోడ్; పరీక్ష కేంద్రాలు ఎంచుకోండి.'),
          s('Download the hall ticket; take the online exam (May) with the hall ticket and photo ID.', 'హాల్ టికెట్ డౌన్‌లోడ్ చేసి; హాల్ టికెట్, ఫోటో ఐడీతో ఆన్‌లైన్ పరీక్ష (మే) రాయండి.'),
          s('Check the preliminary key, raise objections if any, and download the rank card.', 'ప్రాథమిక కీ చూసి, ఉంటే అభ్యంతరాలు వేసి, ర్యాంక్ కార్డు డౌన్‌లోడ్ చేయండి.'),
        ],
        note: s('Inter marks also matter: for engineering, 75% weight is EAPCET and 25% is Inter group marks.', 'ఇంటర్ మార్కులు కూడా ముఖ్యం: ఇంజినీరింగ్‌కు 75% వెయిటేజ్ EAPCET, 25% ఇంటర్ గ్రూప్ మార్కులు.'),
      },
      {
        title: s('Get certificates ready (before results)', 'సర్టిఫికెట్లు సిద్ధం (ఫలితాలకు ముందు)'),
        steps: [
          s('Current-year income certificate, caste certificate, EWS certificate (if OC and eligible), study certificates Class 6–Inter, TC, SSC and Inter memos.', 'ప్రస్తుత సంవత్సర ఆదాయ ధృవీకరణ, కుల ధృవీకరణ, EWS (OC, అర్హులైతే), 6–ఇంటర్ స్టడీ సర్టిఫికెట్లు, TC, SSC, ఇంటర్ మెమోలు.'),
        ],
      },
      { title: s('Counselling registration', 'కౌన్సెలింగ్ నమోదు'), steps: counsellingSteps },
      { title: s('Options and joining', 'ఆప్షన్లు, చేరడం'), steps: optionsSteps },
    ],
    costExample: s('BC student: ₹750 exam + ₹1,200 counselling. Tuition in a convener seat is reimbursed under Vidya Deevena if eligible.', 'BC విద్యార్థి: ₹750 పరీక్ష + ₹1,200 కౌన్సెలింగ్. కన్వీనర్ సీటులో ట్యూషన్ అర్హులైతే విద్యా దీవెన కింద రీయింబర్స్.'),
    problems: [P(['Got a seat but want a better one.', 'సీటు వచ్చింది కానీ మంచిది కావాలి.'], ['Self-report and join, then take part in the next phase — if you get a new seat the old one is released.', 'సెల్ఫ్-రిపోర్ట్ చేసి చేరండి, తర్వాత తదుపరి దశలో పాల్గొనండి — కొత్త సీటు వస్తే పాతది విడుదలవుతుంది.'])],
    lastChecked: CHECKED,
  },

  'icet-admission': {
    stages: [
      {
        title: s('Exam', 'పరీక్ష'),
        steps: [
          s('cets.apsche.ap.gov.in → AP ICET → pay fee → fill degree details, category, local status → upload photo / signature → choose centre.', 'cets.apsche.ap.gov.in → AP ICET → ఫీజు → డిగ్రీ వివరాలు, వర్గం, లోకల్ స్టేటస్ → ఫోటో / సంతకం అప్‌లోడ్ → కేంద్రం ఎంచుకోండి.'),
          s('Exam sections: analytical ability, communication ability, mathematical ability. Download the rank card after results.', 'పరీక్ష విభాగాలు: విశ్లేషణ సామర్థ్యం, కమ్యూనికేషన్ సామర్థ్యం, గణిత సామర్థ్యం. ఫలితాల తర్వాత ర్యాంక్ కార్డు డౌన్‌లోడ్.'),
        ],
      },
      { title: s('Counselling registration', 'కౌన్సెలింగ్ నమోదు'), steps: counsellingSteps },
      { title: s('Options and joining', 'ఆప్షన్లు, చేరడం'), steps: optionsSteps },
    ],
    costExample: s('Counselling fee ₹1,250 (OC/BC) / ₹650 (SC/ST). Tuition reimbursed for eligible students.', 'కౌన్సెలింగ్ ఫీజు ₹1,250 (OC/BC) / ₹650 (SC/ST). అర్హులకు ట్యూషన్ రీయింబర్స్.'),
    lastChecked: CHECKED,
  },

  'polycet-admission': {
    stages: [
      {
        title: s('Apply and write', 'దరఖాస్తు, పరీక్ష'),
        steps: [
          s('polycetap.ap.gov.in → apply online with SSC hall ticket number, pay ₹400 / ₹100, upload photo and signature. (Many schools / polytechnics help fill it.)', 'polycetap.ap.gov.in → SSC హాల్ టికెట్ నంబర్‌తో ఆన్‌లైన్ దరఖాస్తు, ₹400 / ₹100 చెల్లింపు, ఫోటో, సంతకం అప్‌లోడ్. (చాలా స్కూళ్లు / పాలిటెక్నిక్‌లు నింపడంలో సహాయం చేస్తాయి.)'),
          s('Free coaching / model papers are given at government polytechnics before the exam.', 'పరీక్షకు ముందు ప్రభుత్వ పాలిటెక్నిక్‌లలో ఉచిత కోచింగ్ / మోడల్ పేపర్లు ఇస్తారు.'),
          s('Write the exam (OMR, 120 marks: maths 50, physics 40, chemistry 30). Download the rank card.', 'పరీక్ష రాయండి (OMR, 120 మార్కులు: గణితం 50, భౌతిక 40, రసాయన 30). ర్యాంక్ కార్డు డౌన్‌లోడ్.'),
        ],
      },
      {
        title: s('Counselling', 'కౌన్సెలింగ్'),
        steps: [
          s('Register on the counselling site given in the notification, pay the processing fee, upload / verify certificates (at a Help Line Centre if asked).', 'నోటిఫికేషన్‌లో ఇచ్చిన కౌన్సెలింగ్ సైట్‌లో నమోదు చేసి, ప్రాసెసింగ్ ఫీజు చెల్లించి, సర్టిఫికెట్లు అప్‌లోడ్ / ధృవీకరణ (అడిగితే హెల్ప్ లైన్ సెంటర్‌లో).'),
          s('Give web options (polytechnic + branch), download allotment, pay fee and join.', 'వెబ్ ఆప్షన్లు ఇవ్వండి (పాలిటెక్నిక్ + బ్రాంచ్), కేటాయింపు డౌన్‌లోడ్, ఫీజు చెల్లించి చేరండి.'),
        ],
      },
    ],
    afterwards: [s('After the diploma, write AP ECET to join B.Tech directly in 2nd year.', 'డిప్లొమా తర్వాత B.Tech 2వ సంవత్సరంలో నేరుగా చేరడానికి AP ECET రాయండి.')],
    lastChecked: CHECKED,
  },

  'other-cets': {
    stages: [
      {
        title: s('Pick the right test', 'సరైన పరీక్ష ఎంచుకోవడం'),
        steps: [
          s('Diploma / B.Sc (maths) → 2nd-year B.Tech: ECET. Degree → B.Ed: EdCET. Inter → 5-year LLB, degree → 3-year LLB: LAWCET. B.Tech → M.Tech: PGECET (or GATE). Degree → MA / M.Sc / M.Com: PGCET. B.P.Ed / D.P.Ed: PECET.', 'డిప్లొమా / B.Sc (గణితం) → 2వ సంవత్సరం B.Tech: ECET. డిగ్రీ → B.Ed: EdCET. ఇంటర్ → 5 ఏళ్ల LLB, డిగ్రీ → 3 ఏళ్ల LLB: LAWCET. B.Tech → M.Tech: PGECET (లేదా GATE). డిగ్రీ → MA / M.Sc / M.Com: PGCET. B.P.Ed / D.P.Ed: PECET.'),
        ],
      },
      {
        title: s('Apply, write, counsel', 'దరఖాస్తు, పరీక్ష, కౌన్సెలింగ్'),
        steps: [
          s('cets.apsche.ap.gov.in → choose the test → read the bulletin (eligibility, syllabus) → pay fee → fill and submit.', 'cets.apsche.ap.gov.in → పరీక్ష ఎంచుకుని → బులెటిన్ చదవండి (అర్హత, సిలబస్) → ఫీజు → నింపి సమర్పించండి.'),
          s('Download the hall ticket and write the exam; download the rank card.', 'హాల్ టికెట్ డౌన్‌లోడ్ చేసి పరీక్ష రాయండి; ర్యాంక్ కార్డు డౌన్‌లోడ్.'),
          s('Follow the counselling notification: register, certificate verification, web options, allotment, joining.', 'కౌన్సెలింగ్ నోటిఫికేషన్ పాటించండి: నమోదు, సర్టిఫికెట్ వెరిఫికేషన్, వెబ్ ఆప్షన్లు, కేటాయింపు, చేరడం.'),
        ],
      },
    ],
    lastChecked: CHECKED,
  },

  'neet-admission': {
    stages: [
      {
        title: s('NEET exam', 'NEET పరీక్ష'),
        steps: [
          s('neet.nta.nic.in → register (Feb–March) → fill form with Aadhaar, Class 10 / 12 details, category → upload photo, signature, thumb impression → pay → choose city (Telugu medium available).', 'neet.nta.nic.in → నమోదు (ఫిబ్రవరి–మార్చి) → ఆధార్, 10 / 12 తరగతి వివరాలు, వర్గంతో ఫారం → ఫోటో, సంతకం, బొటనవేలి ముద్ర అప్‌లోడ్ → చెల్లింపు → నగరం ఎంచుకోండి (తెలుగు మాధ్యమం అందుబాటులో).'),
          s('Download the admit card; follow the dress code; write the pen-and-paper exam in May.', 'అడ్మిట్ కార్డు డౌన్‌లోడ్; డ్రెస్ కోడ్ పాటించండి; మేలో పెన్-పేపర్ పరీక్ష రాయండి.'),
          s('Download the score card (June).', 'స్కోర్ కార్డు డౌన్‌లోడ్ (జూన్).'),
        ],
      },
      {
        title: s('All-India quota (optional)', 'అఖిల భారత కోటా (ఐచ్ఛికం)'),
        steps: [
          s('mcc.nic.in → register, pay fee and refundable deposit → choice filling → allotment → report. Rounds 1, 2, 3, stray.', 'mcc.nic.in → నమోదు, ఫీజు, తిరిగి ఇచ్చే డిపాజిట్ → ఛాయిస్ ఫిల్లింగ్ → కేటాయింపు → రిపోర్ట్. రౌండ్లు 1, 2, 3, స్ట్రే.'),
        ],
      },
      {
        title: s('AP state quota (Dr NTR UHS)', 'AP రాష్ట్ర కోటా (డా. NTR UHS)'),
        steps: [
          s('Watch drntr.uhsap.in for the notification; register online within dates and upload all certificates.', 'నోటిఫికేషన్ కోసం drntr.uhsap.in గమనించండి; తేదీల్లోగా ఆన్‌లైన్ నమోదు చేసి అన్ని సర్టిఫికెట్లు అప్‌లోడ్ చేయండి.'),
          s('Check the provisional merit list; raise objections if your details are wrong.', 'ప్రొవిజనల్ మెరిట్ జాబితా చూడండి; వివరాలు తప్పైతే అభ్యంతరం వేయండి.'),
          s('Give web options each phase (convener quota, then management / B-category if wanted); download allotment; join with originals and fee.', 'ప్రతి దశలో వెబ్ ఆప్షన్లు ఇవ్వండి (కన్వీనర్ కోటా, కావాలంటే మేనేజ్‌మెంట్ / B-కేటగిరీ); కేటాయింపు డౌన్‌లోడ్; అసలు పత్రాలు, ఫీజుతో చేరండి.'),
        ],
      },
    ],
    costExample: s('AP state registration ₹3,000 (OC/BC) / ₹2,400 (SC/ST). Government college MBBS convener seat fees are low and reimbursable for eligible students.', 'AP రాష్ట్ర నమోదు ₹3,000 (OC/BC) / ₹2,400 (SC/ST). ప్రభుత్వ కాలేజీ MBBS కన్వీనర్ సీటు ఫీజు తక్కువ, అర్హులకు రీయింబర్స్.'),
    lastChecked: CHECKED,
  },

  'pm-internship': {
    stages: [
      {
        title: s('Register', 'నమోదు'),
        steps: [
          s('pminternship.mca.gov.in → "Youth Registration" → mobile OTP → Aadhaar e-KYC.', 'pminternship.mca.gov.in → "Youth Registration" → మొబైల్ OTP → ఆధార్ e-KYC.'),
          s('Build the profile: education (marks / certificates are pulled from DigiLocker where possible), skills, languages, preferred states / districts, bank account.', 'ప్రొఫైల్ తయారు చేయండి: విద్య (వీలైనచోట డిజిలాకర్ నుండి మార్కులు / సర్టిఫికెట్లు), నైపుణ్యాలు, భాషలు, ఇష్టమైన రాష్ట్రాలు / జిల్లాలు, బ్యాంక్ ఖాతా.'),
          s('Download the profile / resume the portal makes.', 'పోర్టల్ తయారు చేసే ప్రొఫైల్ / రెజ్యూమ్ డౌన్‌లోడ్ చేయండి.'),
        ],
      },
      {
        title: s('Apply and join', 'దరఖాస్తు, చేరడం'),
        steps: [
          s('In an open round, filter by district / sector and apply to the allowed number of internships.', 'తెరిచిన రౌండ్‌లో జిల్లా / రంగం ద్వారా ఫిల్టర్ చేసి అనుమతించిన సంఖ్యలో ఇంటర్న్‌షిప్‌లకు దరఖాస్తు చేయండి.'),
          s('Watch SMS / portal for offers; accept one within the deadline.', 'ఆఫర్ల కోసం SMS / పోర్టల్ గమనించండి; గడువులోగా ఒకటి అంగీకరించండి.'),
          s('Join on the date given; ₹6,000 joining grant and the monthly stipend come to your Aadhaar-seeded account.', 'ఇచ్చిన తేదీన చేరండి; ₹6,000 జాయినింగ్ గ్రాంట్, నెలవారీ స్టైపెండ్ మీ ఆధార్ సీడ్ ఖాతాకు.'),
        ],
      },
    ],
    costExample: s('Free. Stipend every month for 12 months + ₹6,000 once + insurance.', 'ఉచితం. 12 నెలలు ప్రతి నెల స్టైపెండ్ + ఒకసారి ₹6,000 + బీమా.'),
    lastChecked: CHECKED,
  },

  apprenticeship: {
    stages: [
      {
        title: s('Graduates / diploma (NATS)', 'గ్రాడ్యుయేట్లు / డిప్లొమా (NATS)'),
        steps: [
          s('nats.education.gov.in → Student → Register → fill details, upload marks memo / provisional certificate → submit; enrolment is approved by the regional Board of Apprenticeship Training (Chennai for AP).', 'nats.education.gov.in → Student → Register → వివరాలు నింపి, మార్కుల మెమో / ప్రొవిజనల్ సర్టిఫికెట్ అప్‌లోడ్ → సమర్పణ; ప్రాంతీయ బోర్డ్ ఆఫ్ అప్రెంటిస్‌షిప్ ట్రైనింగ్ (APకి చెన్నై) నమోదు ఆమోదిస్తుంది.'),
          s('Search "Establishments" by location and branch, apply; attend the interview.', 'స్థానం, బ్రాంచ్ ద్వారా "Establishments" వెతికి దరఖాస్తు చేయండి; ఇంటర్వ్యూకు హాజరవ్వండి.'),
        ],
      },
      {
        title: s('ITI / 10th / 12th (NAPS)', 'ITI / 10వ / 12వ (NAPS)'),
        steps: [
          s('apprenticeshipindia.gov.in → Register as Candidate → Aadhaar e-KYC → profile and certificates.', 'apprenticeshipindia.gov.in → Register as Candidate → ఆధార్ e-KYC → ప్రొఫైల్, సర్టిఫికెట్లు.'),
          s('Search apprenticeship opportunities by trade and district → apply → accept the offer.', 'ట్రేడ్, జిల్లా ద్వారా అవకాశాలు వెతికి → దరఖాస్తు → ఆఫర్ అంగీకరించండి.'),
        ],
      },
      {
        title: s('During training', 'శిక్షణ సమయంలో'),
        steps: [
          s('The contract is registered on the portal; stipend comes monthly (part paid by government through DBT).', 'ఒప్పందం పోర్టల్‌లో నమోదవుతుంది; స్టైపెండ్ నెలవారీగా (కొంత ప్రభుత్వం DBT ద్వారా).'),
          s('Finish the period and the assessment; download the certificate.', 'కాలం, అంచనా పూర్తి చేసి సర్టిఫికెట్ డౌన్‌లోడ్ చేయండి.'),
        ],
      },
    ],
    lastChecked: CHECKED,
  },

  pmegp: {
    stages: [
      {
        title: s('Prepare', 'సిద్ధం'),
        steps: [
          s('Decide the unit (e.g. cement bricks, tailoring unit, dal mill) and cost: machines (quotations), shed, working capital.', 'యూనిట్ (ఉదా: సిమెంట్ ఇటుకలు, టైలరింగ్ యూనిట్, పప్పు మిల్లు), ఖర్చు నిర్ణయించండి: యంత్రాలు (కొటేషన్లు), షెడ్, వర్కింగ్ క్యాపిటల్.'),
          s('Arrange your own contribution: 10% (general) or 5% (special categories).', 'మీ వాటా సమకూర్చుకోండి: 10% (జనరల్) లేదా 5% (ప్రత్యేక వర్గాలు).'),
        ],
      },
      {
        title: s('Apply online', 'ఆన్‌లైన్ దరఖాస్తు'),
        steps: [
          s('kviconline.gov.in → PMEGP e-portal → "Application for new unit" → Aadhaar, personal details, category, unit location (rural / urban).', 'kviconline.gov.in → PMEGP e-portal → "Application for new unit" → ఆధార్, వ్యక్తిగత వివరాలు, వర్గం, యూనిట్ స్థానం (గ్రామీణ / పట్టణ).'),
          s('Choose the activity, agency (DIC / KVIC / KVIB) and two preferred bank branches; fill project cost (or use the portal\'s model project).', 'కార్యకలాపం, సంస్థ (DIC / KVIC / KVIB), రెండు ఇష్టమైన బ్యాంక్ బ్రాంచ్‌లు ఎంచుకుని; ప్రాజెక్ట్ ఖర్చు నింపండి (లేదా పోర్టల్ మోడల్ ప్రాజెక్ట్ వాడండి).'),
          s('Upload documents and submit; note the application ID.', 'పత్రాలు అప్‌లోడ్ చేసి సమర్పించండి; అప్లికేషన్ ID నోట్ చేయండి.'),
        ],
      },
      {
        title: s('Sanction and subsidy', 'మంజూరు, సబ్సిడీ'),
        steps: [
          s('Attend the District Task Force Committee interview; application goes to the bank.', 'జిల్లా టాస్క్ ఫోర్స్ కమిటీ ఇంటర్వ్యూకు హాజరవ్వండి; దరఖాస్తు బ్యాంకుకు వెళ్తుంది.'),
          s('Bank sanctions; complete the EDP training (online / offline) — needed before the subsidy is released.', 'బ్యాంక్ మంజూరు చేస్తుంది; EDP శిక్షణ (ఆన్‌లైన్ / ఆఫ్‌లైన్) పూర్తి చేయండి — సబ్సిడీ విడుదలకు అవసరం.'),
          s('Bank releases the loan; the subsidy is held in your name for 3 years and then adjusted if the unit runs well (physical verification).', 'బ్యాంక్ రుణం విడుదల చేస్తుంది; సబ్సిడీ మీ పేరుపై 3 సంవత్సరాలు ఉంచి, యూనిట్ బాగా నడిస్తే (భౌతిక తనిఖీ) సర్దుబాటు చేస్తారు.'),
        ],
      },
    ],
    costExample: s('Rural woman, project ₹10 lakh: own share ₹50,000 (5%), subsidy ₹3.5 lakh (35%), bank loan ₹9.5 lakh — of which ₹3.5 lakh is covered by the subsidy after 3 years.', 'గ్రామీణ మహిళ, ₹10 లక్షల ప్రాజెక్ట్: సొంత వాటా ₹50,000 (5%), సబ్సిడీ ₹3.5 లక్షలు (35%), బ్యాంక్ రుణం ₹9.5 లక్షలు — 3 సంవత్సరాల తర్వాత అందులో ₹3.5 లక్షలు సబ్సిడీతో తీరుతుంది.'),
    lastChecked: CHECKED,
  },

  'pmfme-food-processing': {
    stages: [
      {
        title: s('Apply', 'దరఖాస్తు'),
        steps: [
          s('pmfme.mofpi.gov.in → "Individual beneficiary" (or group) → register with mobile → fill the form: unit type, product, existing / new, location, cost.', 'pmfme.mofpi.gov.in → "Individual beneficiary" (లేదా గ్రూప్) → మొబైల్‌తో నమోదు → ఫారం: యూనిట్ రకం, ఉత్పత్తి, ఉన్నది / కొత్తది, స్థానం, ఖర్చు.'),
          s('Upload Aadhaar, PAN, bank statement, premises proof, quotations.', 'ఆధార్, PAN, బ్యాంక్ స్టేట్‌మెంట్, ప్రాంగణ రుజువు, కొటేషన్లు అప్‌లోడ్ చేయండి.'),
        ],
      },
      {
        title: s('DPR and loan', 'DPR, రుణం'),
        steps: [
          s('The District Resource Person visits / calls, helps make the DPR and helps get Udyam / FSSAI.', 'జిల్లా రిసోర్స్ పర్సన్ సందర్శిస్తారు / కాల్ చేస్తారు, DPR తయారీలో, ఉద్యమ్ / FSSAI పొందడంలో సహాయం చేస్తారు.'),
          s('District level committee recommends to the bank; bank sanctions the loan.', 'జిల్లా కమిటీ బ్యాంకుకు సిఫారసు చేస్తుంది; బ్యాంక్ రుణం మంజూరు చేస్తుంది.'),
          s('Buy machines and start; the 35% subsidy is credited to the loan account after the unit is set up.', 'యంత్రాలు కొని ప్రారంభించండి; యూనిట్ ఏర్పాటైన తర్వాత 35% సబ్సిడీ రుణ ఖాతాకు జమ.'),
        ],
      },
    ],
    costExample: s('Pickle unit ₹6 lakh: subsidy ₹2.1 lakh, your share ≥ ₹60,000, rest bank loan.', '₹6 లక్షల పచ్చళ్ల యూనిట్: సబ్సిడీ ₹2.1 లక్షలు, మీ వాటా ≥ ₹60,000, మిగతాది బ్యాంక్ రుణం.'),
    lastChecked: CHECKED,
  },

  'ap-industry-msme': {
    stages: [
      {
        title: s('Plan with the DIC', 'DICతో ప్రణాళిక'),
        steps: [
          s('Register on Udyam. Meet the General Manager, District Industries Centre with your idea — they tell which policy, incentives and approvals apply.', 'ఉద్యమ్‌లో నమోదు చేయండి. మీ ఆలోచనతో జిల్లా పరిశ్రమల కేంద్రం జనరల్ మేనేజర్‌ను కలవండి — ఏ విధానం, ప్రోత్సాహకాలు, అనుమతులు వర్తిస్తాయో చెబుతారు.'),
          s('Get a project report made and approach banks for a loan in principle.', 'ప్రాజెక్ట్ రిపోర్ట్ తయారు చేయించి సూత్రప్రాయ రుణం కోసం బ్యాంకులను సంప్రదించండి.'),
        ],
      },
      {
        title: s('Approvals through Single Desk', 'సింగిల్ డెస్క్ ద్వారా అనుమతులు'),
        steps: [
          s('Register on the AP Single Desk portal → fill the Common Application Form → the portal lists required approvals (building plan, pollution consent, fire NOC, factory licence, power connection).', 'AP సింగిల్ డెస్క్ పోర్టల్‌లో నమోదు → కామన్ అప్లికేషన్ ఫారం నింపండి → అవసరమైన అనుమతులు పోర్టల్ చూపిస్తుంది (భవన ప్లాన్, కాలుష్య అనుమతి, ఫైర్ NOC, ఫ్యాక్టరీ లైసెన్స్, విద్యుత్ కనెక్షన్).'),
          s('Upload documents, pay each department\'s fee, track and reply to queries.', 'పత్రాలు అప్‌లోడ్ చేసి, ప్రతి శాఖ ఫీజు చెల్లించి, ట్రాక్ చేసి ప్రశ్నలకు సమాధానం ఇవ్వండి.'),
          s('Land: apply to APIIC for an industrial / MSME park plot.', 'భూమి: పారిశ్రామిక / MSME పార్క్ ప్లాట్ కోసం APIICకి దరఖాస్తు చేయండి.'),
        ],
      },
      {
        title: s('Claim incentives', 'ప్రోత్సాహకాలు క్లెయిమ్'),
        steps: [
          s('Note the commercial production date. Within the policy deadline, apply online for capital subsidy, power, interest, SGST reimbursement with CA certificates.', 'వాణిజ్య ఉత్పత్తి తేదీ నోట్ చేయండి. విధాన గడువులోగా CA సర్టిఫికెట్లతో క్యాపిటల్ సబ్సిడీ, విద్యుత్, వడ్డీ, SGST రీయింబర్స్‌మెంట్‌కు ఆన్‌లైన్ దరఖాస్తు చేయండి.'),
        ],
      },
    ],
    lastChecked: CHECKED,
  },

  'corporation-loans': {
    stages: [
      {
        title: s('When the notification comes', 'నోటిఫికేషన్ వచ్చినప్పుడు'),
        steps: [
          s('Choose a unit you can actually run (dairy, shop, auto, tailoring…). Get a quotation and, for vehicles, a driving licence.', 'మీరు నిజంగా నడపగల యూనిట్ ఎంచుకోండి (డెయిరీ, షాప్, ఆటో, టైలరింగ్…). కొటేషన్, వాహనాలకు డ్రైవింగ్ లైసెన్స్ తీసుకోండి.'),
          s('Apply on the OBMMS portal or through the welfare assistant at the Secretariat with Aadhaar, rice card, caste / EWS certificate, bank passbook, photo.', 'ఆధార్, రైస్ కార్డు, కుల / EWS ధృవీకరణ, బ్యాంక్ పాస్‌బుక్, ఫోటోతో OBMMS పోర్టల్‌లో లేదా సచివాలయ సంక్షేమ సహాయకుని ద్వారా దరఖాస్తు చేయండి.'),
          s('Note the application ID.', 'అప్లికేషన్ ID నోట్ చేయండి.'),
        ],
      },
      {
        title: s('Selection and bank', 'ఎంపిక, బ్యాంక్'),
        steps: [
          s('Attend the verification / interview by MPDO / Municipal Commissioner; check the selected list at the Secretariat.', 'MPDO / మున్సిపల్ కమిషనర్ ధృవీకరణ / ఇంటర్వ్యూకు హాజరవ్వండి; సచివాలయంలో ఎంపిక జాబితా చూడండి.'),
          s('Sign loan papers when the bank calls; subsidy goes directly to the bank.', 'బ్యాంక్ పిలిచినప్పుడు రుణ పత్రాలపై సంతకం చేయండి; సబ్సిడీ నేరుగా బ్యాంకుకు.'),
          s('Buy the unit from the supplier (bank pays them); officials inspect (grounding).', 'సరఫరాదారు నుండి యూనిట్ కొనండి (బ్యాంక్ వారికి చెల్లిస్తుంది); అధికారులు తనిఖీ (గ్రౌండింగ్) చేస్తారు.'),
          s('Repay EMIs on time.', 'సకాలంలో EMIలు చెల్లించండి.'),
        ],
      },
    ],
    problems: [P(['Selected but bank not sanctioning.', 'ఎంపికైనా బ్యాంక్ మంజూరు చేయడం లేదు.'], ['Tell the corporation\'s district Executive Director; raise on PGRS with the application ID.', 'కార్పొరేషన్ జిల్లా ఎగ్జిక్యూటివ్ డైరెక్టర్‌కు చెప్పండి; అప్లికేషన్ IDతో PGRSలో ఫిర్యాదు చేయండి.'])],
    lastChecked: CHECKED,
  },

  'shg-dwcra-join': {
    stages: [
      {
        title: s('Form or join a group', 'గ్రూప్ ఏర్పాటు లేదా చేరడం'),
        steps: [
          s('Village: meet the Village Organisation (VO) leader / SERP Community Coordinator. Town: MEPMA Community Organiser at the ward secretariat.', 'గ్రామం: విలేజ్ ఆర్గనైజేషన్ (VO) లీడర్ / SERP కమ్యూనిటీ కోఆర్డినేటర్‌ను కలవండి. పట్టణం: వార్డు సచివాలయంలో MEPMA కమ్యూనిటీ ఆర్గనైజర్.'),
          s('New group: gather 10–12 women of similar background, choose a name, president and secretary / book-keeper, decide meeting day and monthly saving.', 'కొత్త గ్రూప్: ఒకే రకమైన నేపథ్యం ఉన్న 10–12 మహిళలను కూడగట్టి, పేరు, అధ్యక్షురాలు, కార్యదర్శి / బుక్-కీపర్‌ను ఎంచుకుని, సమావేశ రోజు, నెలవారీ పొదుపు నిర్ణయించండి.'),
          s('Write a resolution with everyone\'s signature; open a group savings account at the bank.', 'అందరి సంతకంతో తీర్మానం రాయండి; బ్యాంకులో గ్రూప్ పొదుపు ఖాతా తెరవండి.'),
          s('The group is registered with the VO / slum-level federation.', 'గ్రూప్‌ను VO / స్లమ్ స్థాయి సమాఖ్యలో నమోదు చేస్తారు.'),
        ],
      },
      {
        title: s('First 6 months', 'మొదటి 6 నెలలు'),
        steps: [
          s('Meet regularly, save every month, give small internal loans and record everything (Panchasutra).', 'క్రమం తప్పకుండా సమావేశం, ప్రతి నెల పొదుపు, చిన్న అంతర్గత రుణాలు, అన్నీ నమోదు (పంచసూత్ర).'),
          s('After grading, the group gets a revolving fund and the first bank linkage loan.', 'గ్రేడింగ్ తర్వాత గ్రూప్‌కు రివాల్వింగ్ ఫండ్, మొదటి బ్యాంక్ లింకేజ్ రుణం వస్తాయి.'),
        ],
      },
    ],
    costExample: s('Group of 10 saving ₹200 each a month = ₹2,000 a month, ₹24,000 a year of own funds — then bank loans several times that.', '10 మంది గ్రూప్, ఒక్కొక్కరు నెలకు ₹200 = నెలకు ₹2,000, ఏడాదికి ₹24,000 సొంత నిధి — తర్వాత దానికి అనేక రెట్లు బ్యాంక్ రుణాలు.'),
    lastChecked: CHECKED,
  },

  'shg-loans': {
    stages: [
      {
        title: s('Bank linkage loan', 'బ్యాంక్ లింకేజ్ రుణం'),
        steps: [
          s('In the meeting, each member says how much she needs and for what; write a Micro Credit Plan and a resolution signed by all.', 'సమావేశంలో ప్రతి సభ్యురాలు ఎంత, దేనికి కావాలో చెబుతుంది; మైక్రో క్రెడిట్ ప్లాన్, అందరూ సంతకం చేసిన తీర్మానం రాయండి.'),
          s('VO / MEPMA staff send the application to the linked bank with the group books and member KYC.', 'VO / MEPMA సిబ్బంది గ్రూప్ పుస్తకాలు, సభ్యుల KYCతో దరఖాస్తును లింక్డ్ బ్యాంకుకు పంపుతారు.'),
          s('Bank sanctions to the group account; money is shared as per the plan and written in the books.', 'బ్యాంక్ గ్రూప్ ఖాతాకు మంజూరు చేస్తుంది; ప్రణాళిక ప్రకారం పంచి పుస్తకాల్లో రాస్తారు.'),
          s('Repay monthly to the group account; the interest subvention comes back if repaid on time.', 'గ్రూప్ ఖాతాకు నెలవారీ చెల్లించండి; సకాలంలో చెల్లిస్తే వడ్డీ రాయితీ తిరిగి వస్తుంది.'),
        ],
      },
      {
        title: s('Streenidhi loan for a member', 'సభ్యురాలికి స్త్రీనిధి రుణం'),
        steps: [
          s('Member gives the purpose and plan to the SHG; the group approves.', 'సభ్యురాలు ప్రయోజనం, ప్రణాళిక SHGకి ఇస్తుంది; గ్రూప్ ఆమోదిస్తుంది.'),
          s('VO / federation applies through the Streenidhi app; sanction usually within 48 hours, money to the account.', 'VO / సమాఖ్య స్త్రీనిధి యాప్ ద్వారా దరఖాస్తు చేస్తుంది; సాధారణంగా 48 గంటల్లో మంజూరు, డబ్బు ఖాతాకు.'),
          s('Repay monthly; on-time repayment unlocks the next loan.', 'నెలవారీ చెల్లించండి; సకాల చెల్లింపు తదుపరి రుణం తెరుస్తుంది.'),
        ],
      },
    ],
    costExample: s('Streenidhi ₹1 lakh at 11% over 24 months: EMI about ₹4,660.', 'స్త్రీనిధి ₹1 లక్ష, 11%, 24 నెలలు: EMI సుమారు ₹4,660.'),
    problems: [P(['Leader keeps passbooks / ATM cards.', 'లీడర్ పాస్‌బుక్‌లు / ATM కార్డులు ఉంచుకుంటోంది.'], ['Ask for them back in the meeting; complain to the VO / SERP or MEPMA district office.', 'సమావేశంలో తిరిగి అడగండి; VO / SERP లేదా MEPMA జిల్లా కార్యాలయానికి ఫిర్యాదు చేయండి.'])],
    lastChecked: CHECKED,
  },
};
