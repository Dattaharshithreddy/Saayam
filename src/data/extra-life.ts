import { Guide } from '../types';
import { fee, CHECKED } from './bi';
import { s, P, D, XDir } from './extra-helpers';

/** Life events, certificates, schooling and health services — full walkthroughs (checked 20 Oct 2026). */
export const lifeGuides: Guide[] = [
  // ─────────────────────────────────────────── RESIDENCE CERTIFICATE
  {
    id: 'residence-certificate',
    category: 'certificates',
    level: 'state',
    title: s('Residence / nativity certificate and local status for admissions', 'నివాస / స్థానికత ధృవీకరణ, ప్రవేశాలకు లోకల్ స్టేటస్'),
    summary: s(
      'A residence certificate from the Tahsildar proves you live in AP at a given address. It is asked for jobs, admissions (especially if you studied some classes outside AP), scholarships, gas / bank address proof and court matters. For admissions, "local" status is mostly decided by where you studied (study certificates); students who studied outside AP use a residence certificate of themselves or their parents as allowed by the rules.',
      'తహసీల్దార్ ఇచ్చే నివాస ధృవీకరణ మీరు APలో ఒక చిరునామాలో నివసిస్తున్నారని రుజువు చేస్తుంది. ఉద్యోగాలు, ప్రవేశాలు (ముఖ్యంగా కొన్ని తరగతులు AP బయట చదివితే), స్కాలర్‌షిప్‌లు, గ్యాస్ / బ్యాంక్ చిరునామా రుజువు, కోర్టు విషయాలకు అడుగుతారు. ప్రవేశాల్లో "లోకల్" స్టేటస్ ఎక్కువగా ఎక్కడ చదివారనే దానిపై (స్టడీ సర్టిఫికెట్లు); AP బయట చదివిన విద్యార్థులు నియమాలు అనుమతించినట్లు తమ లేదా తల్లిదండ్రుల నివాస ధృవీకరణ వాడతారు.',
    ),
    keywords: ['residence certificate', 'nativity certificate', 'domicile', 'local certificate', 'local status', 'non local', 'study certificate', 'address certificate', 'నివాస ధృవీకరణ', 'స్థానికత', 'లోకల్', 'నాన్ లోకల్', 'స్టడీ సర్టిఫికెట్'],
    whoCanApply: [s('Residents of AP (parents apply for minors)', 'AP నివాసులు (మైనర్లకు తల్లిదండ్రులు దరఖాస్తు చేస్తారు)')],
    documents: [
      s('Aadhaar, rice card, voter ID', 'ఆధార్, రైస్ కార్డు, ఓటర్ ఐడీ'),
      s('Proof of how long you have lived there: house tax / electricity bill / rent agreement / school records', 'అక్కడ ఎంతకాలం ఉన్నారో రుజువు: ఇంటి పన్ను / కరెంట్ బిల్లు / అద్దె ఒప్పందం / స్కూల్ రికార్డులు'),
      s('For admissions: study certificates from Class 4 / 6 onwards as the notification asks', 'ప్రవేశాలకు: నోటిఫికేషన్ అడిగినట్లు 4 / 6వ తరగతి నుండి స్టడీ సర్టిఫికెట్లు'),
    ],
    fees: [fee(s('Application', 'దరఖాస్తు'), s('Small MeeSeva / Secretariat service fee', 'చిన్న మీసేవ / సచివాలయ సేవా ఫీజు'))],
    steps: [
      s('Apply at the Village / Ward Secretariat or MeeSeva.', 'గ్రామ / వార్డు సచివాలయం లేదా మీసేవలో దరఖాస్తు.'),
      s('VRO / Revenue Inspector verifies; Tahsildar issues.', 'VRO / రెవెన్యూ ఇన్‌స్పెక్టర్ ధృవీకరణ; తహసీల్దార్ జారీ.'),
    ],
    stages: [
      {
        title: s('Apply', 'దరఖాస్తు'),
        steps: [
          s('At the Secretariat / MeeSeva ask for "Residence Certificate". Give Aadhaar and proofs of residence; say the purpose (admission, job, etc.).', 'సచివాలయం / మీసేవలో "Residence Certificate" అడగండి. ఆధార్, నివాస రుజువులు ఇవ్వండి; ప్రయోజనం చెప్పండి (ప్రవేశం, ఉద్యోగం మొ.).'),
          s('Note the application number; the VRO / Revenue Inspector may visit or call neighbours to confirm.', 'అప్లికేషన్ నంబర్ నోట్ చేయండి; VRO / రెవెన్యూ ఇన్‌స్పెక్టర్ సందర్శించవచ్చు లేదా పొరుగువారిని అడిగి నిర్ధారించవచ్చు.'),
          s('Download the signed certificate from the Secretariat / MeeSeva / AP Seva portal when approved.', 'ఆమోదం తర్వాత సచివాలయం / మీసేవ / AP సేవ పోర్టల్ నుండి సంతకం చేసిన సర్టిఫికెట్ డౌన్‌లోడ్ చేయండి.'),
        ],
      },
      {
        title: s('Local status for admissions', 'ప్రవేశాలకు లోకల్ స్టేటస్'),
        steps: [
          s('Get study certificates (bonafide) from each school / college for the years the notification asks (usually the 4 or 7 years before the qualifying exam).', 'నోటిఫికేషన్ అడిగిన సంవత్సరాలకు (సాధారణంగా అర్హత పరీక్షకు ముందు 4 లేదా 7 సంవత్సరాలు) ప్రతి స్కూల్ / కాలేజీ నుండి స్టడీ సర్టిఫికెట్లు (బోనఫైడ్) తీసుకోండి.'),
          s('Private study / gap years / studied outside AP: get a residence certificate for those years (for you or your parents, as the rules allow).', 'ప్రైవేట్ చదువు / గ్యాప్ సంవత్సరాలు / AP బయట చదివితే: ఆ సంవత్సరాలకు నివాస ధృవీకరణ (నియమాలు అనుమతించినట్లు మీకు లేదా తల్లిదండ్రులకు).'),
          s('Children of AP government employees working outside, or of central government employees posted in AP, have separate rules — check the admission notification.', 'బయట పనిచేసే AP ప్రభుత్వ ఉద్యోగుల, APలో పనిచేసే కేంద్ర ప్రభుత్వ ఉద్యోగుల పిల్లలకు వేరే నియమాలు — ప్రవేశ నోటిఫికేషన్ చూడండి.'),
        ],
      },
    ],
    costExample: s('Only the small service fee.', 'చిన్న సేవా ఫీజు మాత్రమే.'),
    problems: [P(['Rejected as "not residing".', '"నివసించడం లేదు" అని తిరస్కరించారు.'], ['Give more proofs (rent agreement, bills, school / work letter) and re-apply; appeal to the RDO if wrongly rejected.', 'మరిన్ని రుజువులు (అద్దె ఒప్పందం, బిల్లులు, స్కూల్ / ఉద్యోగ లేఖ) ఇచ్చి మళ్లీ దరఖాస్తు; తప్పుగా తిరస్కరిస్తే RDOకి అప్పీల్.'])],
    whereToApply: [s('Village / Ward Secretariat; MeeSeva', 'గ్రామ / వార్డు సచివాలయం; మీసేవ')],
    timeline: s('Usually within 1–2 weeks.', 'సాధారణంగా 1–2 వారాల్లో.'),
    tips: [s('Apply well before counselling — late certificates are a common reason for losing seats.', 'కౌన్సెలింగ్‌కు చాలా ముందే దరఖాస్తు చేయండి — ఆలస్య సర్టిఫికెట్లు సీట్లు కోల్పోవడానికి సాధారణ కారణం.')],
    links: [{ label: 'Government of Andhra Pradesh', url: 'https://www.ap.gov.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── SCHOOL CERTIFICATES & OPEN SCHOOL
  {
    id: 'school-certificates-open-school',
    category: 'education',
    level: 'both',
    title: s('TC, study / bonafide, migration certificates — and finishing 10th / Inter through Open School', 'TC, స్టడీ / బోనఫైడ్, మైగ్రేషన్ సర్టిఫికెట్లు — ఓపెన్ స్కూల్ ద్వారా 10వ / ఇంటర్ పూర్తి చేయడం'),
    summary: s(
      'Your school gives the Transfer Certificate (TC), study and bonafide certificates — free in government schools and within days. Joining a university in another state usually needs a migration certificate from the board. Anyone who dropped out can still complete SSC or Intermediate through the AP Open School Society (APOSS) or NIOS — the certificate is valid for jobs and higher studies.',
      'మీ స్కూల్ ట్రాన్స్‌ఫర్ సర్టిఫికెట్ (TC), స్టడీ, బోనఫైడ్ సర్టిఫికెట్లు ఇస్తుంది — ప్రభుత్వ స్కూళ్లలో ఉచితంగా, కొన్ని రోజుల్లో. ఇతర రాష్ట్ర విశ్వవిద్యాలయంలో చేరడానికి సాధారణంగా బోర్డు నుండి మైగ్రేషన్ సర్టిఫికెట్ కావాలి. చదువు మానేసిన ఎవరైనా AP ఓపెన్ స్కూల్ సొసైటీ (APOSS) లేదా NIOS ద్వారా SSC లేదా ఇంటర్ పూర్తి చేయవచ్చు — సర్టిఫికెట్ ఉద్యోగాలు, ఉన్నత చదువులకు చెల్లుతుంది.',
    ),
    keywords: ['tc', 'transfer certificate', 'study certificate', 'bonafide', 'conduct certificate', 'migration certificate', 'open school', 'aposs', 'nios', 'dropout', 'complete 10th', 'complete inter', 'private study', 'ట్రాన్స్‌ఫర్ సర్టిఫికెట్', 'స్టడీ సర్టిఫికెట్', 'బోనఫైడ్', 'ఓపెన్ స్కూల్', 'మైగ్రేషన్'],
    whoCanApply: [s('Students and former students; APOSS: 14+ for SSC, SSC-passed for Inter', 'విద్యార్థులు, పూర్వ విద్యార్థులు; APOSS: SSCకి 14+, ఇంటర్‌కు SSC ఉత్తీర్ణులు')],
    documents: [
      s('TC / study: student ID, Aadhaar, parent\'s letter; fees cleared (private schools)', 'TC / స్టడీ: విద్యార్థి ఐడీ, ఆధార్, తల్లి/తండ్రి లేఖ; ఫీజులు క్లియర్ (ప్రైవేట్ స్కూళ్లు)'),
      s('Migration: marks memo, hall ticket number, fee payment', 'మైగ్రేషన్: మార్కుల మెమో, హాల్ టికెట్ నంబర్, ఫీజు చెల్లింపు'),
      s('Open school: birth certificate / age proof, Aadhaar, photo, TC or last class passed proof, caste certificate', 'ఓపెన్ స్కూల్: జనన ధృవీకరణ / వయస్సు రుజువు, ఆధార్, ఫోటో, TC లేదా చివరి ఉత్తీర్ణ తరగతి రుజువు, కుల ధృవీకరణ'),
    ],
    fees: [
      fee(s('TC / study / bonafide', 'TC / స్టడీ / బోనఫైడ్'), s('Free in government schools', 'ప్రభుత్వ స్కూళ్లలో ఉచితం')),
      fee(s('Migration / Open school admission', 'మైగ్రేషన్ / ఓపెన్ స్కూల్ ప్రవేశం'), s('Board fee shown on the website (concessions for SC/ST, women, disabled in APOSS)', 'వెబ్‌సైట్‌లో చూపిన బోర్డు ఫీజు (APOSSలో SC/ST, మహిళలు, వికలాంగులకు రాయితీలు)')),
    ],
    steps: [
      s('Ask the headmaster / principal in writing for TC / study certificates.', 'TC / స్టడీ సర్టిఫికెట్ల కోసం హెడ్‌మాస్టర్ / ప్రిన్సిపల్‌ను రాతపూర్వకంగా అడగండి.'),
      s('Migration: apply on the board website.', 'మైగ్రేషన్: బోర్డు వెబ్‌సైట్‌లో దరఖాస్తు.'),
      s('Open school: apply online when admissions open.', 'ఓపెన్ స్కూల్: ప్రవేశాలు తెరిచినప్పుడు ఆన్‌లైన్ దరఖాస్తు.'),
    ],
    stages: [
      {
        title: s('TC, study and bonafide certificates', 'TC, స్టడీ, బోనఫైడ్ సర్టిఫికెట్లు'),
        steps: [
          s('Give a written request (parent signs for minors) at the school office. Government schools issue TC online through the school\'s login — the child\'s record moves to the new school.', 'స్కూల్ కార్యాలయంలో రాతపూర్వక అభ్యర్థన ఇవ్వండి (మైనర్లకు తల్లి/తండ్రి సంతకం). ప్రభుత్వ స్కూళ్లు స్కూల్ లాగిన్ ద్వారా ఆన్‌లైన్‌లో TC ఇస్తాయి — పిల్లల రికార్డు కొత్త స్కూల్‌కు వెళ్తుంది.'),
          s('Check name, date of birth, caste and dates on the TC before leaving — corrections are hard later.', 'వెళ్లే ముందు TCపై పేరు, పుట్టిన తేదీ, కులం, తేదీలు చూడండి — తర్వాత సవరణ కష్టం.'),
          s('Under the RTE Act, admission to a government school can\'t be refused for lack of a TC (children up to 14).', 'RTE చట్టం ప్రకారం TC లేదని ప్రభుత్వ స్కూల్‌లో ప్రవేశం నిరాకరించకూడదు (14 ఏళ్ల వరకు పిల్లలు).'),
          s('Private school withholding TC for fees: complain to the Mandal / District Educational Officer.', 'ఫీజు కోసం ప్రైవేట్ స్కూల్ TC ఆపితే: మండల / జిల్లా విద్యాధికారికి ఫిర్యాదు.'),
        ],
      },
      {
        title: s('Migration certificate', 'మైగ్రేషన్ సర్టిఫికెట్'),
        steps: [
          s('SSC: bse.ap.gov.in → services → migration certificate. Intermediate: bie.ap.gov.in → student services → migration.', 'SSC: bse.ap.gov.in → సేవలు → మైగ్రేషన్ సర్టిఫికెట్. ఇంటర్: bie.ap.gov.in → student services → migration.'),
          s('Enter hall ticket number and year, upload marks memo, pay the fee; download / collect.', 'హాల్ టికెట్ నంబర్, సంవత్సరం నమోదు, మార్కుల మెమో అప్‌లోడ్, ఫీజు; డౌన్‌లోడ్ / తీసుకోండి.'),
          s('University-to-university migration: apply to your university\'s examination branch.', 'విశ్వవిద్యాలయం నుండి విశ్వవిద్యాలయానికి మైగ్రేషన్: మీ విశ్వవిద్యాలయ పరీక్షల విభాగానికి దరఖాస్తు.'),
        ],
      },
      {
        title: s('Complete SSC / Inter through Open School', 'ఓపెన్ స్కూల్ ద్వారా SSC / ఇంటర్ పూర్తి'),
        steps: [
          s('APOSS (Telugu / English / Urdu medium): watch for admission notification on apopenschool.ap.gov.in (usually July–October). Apply online or at a study centre (selected government schools / colleges).', 'APOSS (తెలుగు / ఇంగ్లీష్ / ఉర్దూ మాధ్యమం): apopenschool.ap.gov.inలో ప్రవేశ నోటిఫికేషన్ గమనించండి (సాధారణంగా జూలై–అక్టోబర్). ఆన్‌లైన్‌లో లేదా స్టడీ సెంటర్‌లో (ఎంపిక చేసిన ప్రభుత్వ స్కూళ్లు / కాలేజీలు) దరఖాస్తు.'),
          s('Choose subjects, pay fees, attend weekend contact classes, write the exams (usually March–April). Passed subjects carry over — you get several chances.', 'సబ్జెక్టులు ఎంచుకుని, ఫీజు చెల్లించి, వారాంతపు తరగతులకు హాజరై, పరీక్షలు రాయండి (సాధారణంగా మార్చి–ఏప్రిల్). ఉత్తీర్ణమైన సబ్జెక్టులు కొనసాగుతాయి — అనేక అవకాశాలు.'),
          s('NIOS (national, English / Hindi and some regional media): nios.ac.in — admission online year-round blocks, on-demand exams.', 'NIOS (జాతీయ, ఇంగ్లీష్ / హిందీ, కొన్ని ప్రాంతీయ మాధ్యమాలు): nios.ac.in — సంవత్సరంలో బ్లాకులుగా ఆన్‌లైన్ ప్రవేశం, ఆన్-డిమాండ్ పరీక్షలు.'),
        ],
      },
    ],
    costExample: s('Government school TC: free. Open school: modest board fee with concessions.', 'ప్రభుత్వ స్కూల్ TC: ఉచితం. ఓపెన్ స్కూల్: రాయితీలతో తక్కువ బోర్డు ఫీజు.'),
    whereToApply: [s('Your school / college office; bse.ap.gov.in; bie.ap.gov.in; apopenschool.ap.gov.in; nios.ac.in', 'మీ స్కూల్ / కాలేజీ కార్యాలయం; bse.ap.gov.in; bie.ap.gov.in; apopenschool.ap.gov.in; nios.ac.in')],
    timeline: s('TC / study: usually within a week. Migration: days to weeks.', 'TC / స్టడీ: సాధారణంగా వారంలో. మైగ్రేషన్: రోజుల నుండి వారాలు.'),
    tips: [s('Lost your marks memo? See the "Duplicate SSC / Inter certificate" guide. Keep all memos in DigiLocker.', 'మార్కుల మెమో పోయిందా? "డూప్లికేట్ SSC / ఇంటర్ సర్టిఫికెట్" గైడ్ చూడండి. అన్ని మెమోలు డిజిలాకర్‌లో ఉంచండి.')],
    links: [{ label: 'AP Open School Society', url: 'https://apopenschool.ap.gov.in' }, { label: 'NIOS', url: 'https://www.nios.ac.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── FREE HEALTH SERVICES
  {
    id: 'free-health-services',
    category: 'health',
    level: 'both',
    title: s('Free and cheap health services — government hospitals, Jan Aushadhi, online doctor, mental health, TB, dialysis, blood', 'ఉచిత, తక్కువ ధర ఆరోగ్య సేవలు — ప్రభుత్వ ఆసుపత్రులు, జన ఔషధి, ఆన్‌లైన్ డాక్టర్, మానసిక ఆరోగ్యం, TB, డయాలసిస్, రక్తం'),
    summary: s(
      'Many health services cost nothing even without any scheme card: government hospitals and PHCs give free consultation, medicines and many tests; eSanjeevani gives free online doctor consultation; Tele-MANAS (14416) gives free 24×7 mental-health counselling in Telugu. TB patients get free treatment and ₹1,000 a month for nutrition. Generic medicines at Jan Aushadhi stores cost 50–90% less than brands.',
      'ఏ పథకం కార్డు లేకపోయినా చాలా ఆరోగ్య సేవలు ఉచితం: ప్రభుత్వ ఆసుపత్రులు, PHCలు ఉచిత సంప్రదింపు, మందులు, చాలా పరీక్షలు ఇస్తాయి; eSanjeevani ఉచిత ఆన్‌లైన్ డాక్టర్ సంప్రదింపు; Tele-MANAS (14416) తెలుగులో 24×7 ఉచిత మానసిక ఆరోగ్య కౌన్సెలింగ్. TB రోగులకు ఉచిత చికిత్స, పోషణకు నెలకు ₹1,000. జన ఔషధి దుకాణాల్లో జనరిక్ మందులు బ్రాండ్ల కంటే 50–90% తక్కువ.',
    ),
    keywords: ['free medicine', 'free tests', 'government hospital', 'phc', 'jan aushadhi', 'generic medicine', 'esanjeevani', 'online doctor', 'telemedicine', 'tele manas', '14416', 'mental health', 'depression', 'tb', 'tuberculosis', 'nikshay', 'dialysis', 'blood bank', 'blood', 'eraktkosh', 'ఉచిత మందులు', 'జన ఔషధి', 'ప్రభుత్వ ఆసుపత్రి', 'మానసిక ఆరోగ్యం', 'టీబీ', 'డయాలసిస్', 'రక్తం'],
    whoCanApply: [s('Everyone', 'అందరూ')],
    documents: [s('Aadhaar / any ID; old prescriptions and reports; ABHA number helps keep records', 'ఆధార్ / ఏదైనా ఐడీ; పాత ప్రిస్క్రిప్షన్లు, రిపోర్టులు; ABHA నంబర్ రికార్డులకు సహాయం')],
    fees: [fee(s('Government OP, medicines, many tests, eSanjeevani, Tele-MANAS, TB care', 'ప్రభుత్వ OP, మందులు, చాలా పరీక్షలు, eSanjeevani, Tele-MANAS, TB చికిత్స'), s('Free', 'ఉచితం'))],
    steps: [
      s('Go to the nearest PHC / Urban health centre / government hospital, or consult online on eSanjeevani.', 'దగ్గరి PHC / అర్బన్ హెల్త్ సెంటర్ / ప్రభుత్వ ఆసుపత్రికి వెళ్లండి, లేదా eSanjeevaniలో ఆన్‌లైన్ సంప్రదించండి.'),
    ],
    stages: [
      {
        title: s('Government hospitals and village clinics', 'ప్రభుత్వ ఆసుపత్రులు, గ్రామ క్లినిక్‌లు'),
        steps: [
          s('Village Health Clinic / PHC: free check-ups, BP / sugar tests, medicines, pregnancy care and vaccines. Family Doctor visits in villages follow a fixed schedule — ask the ANM.', 'విలేజ్ హెల్త్ క్లినిక్ / PHC: ఉచిత చెకప్‌లు, BP / షుగర్ పరీక్షలు, మందులు, గర్భధారణ సంరక్షణ, టీకాలు. గ్రామాల్లో ఫ్యామిలీ డాక్టర్ సందర్శనలు నిర్ణీత షెడ్యూల్ — ANMను అడగండి.'),
          s('Area / District hospitals and Government General Hospitals: register at the OP counter with Aadhaar (or ABHA QR scan) → doctor → free medicines from the hospital pharmacy and free basic tests.', 'ఏరియా / జిల్లా ఆసుపత్రులు, ప్రభుత్వ జనరల్ ఆసుపత్రులు: ఆధార్‌తో (లేదా ABHA QR స్కాన్) OP కౌంటర్‌లో నమోదు → డాక్టర్ → ఆసుపత్రి ఫార్మసీ నుండి ఉచిత మందులు, ఉచిత ప్రాథమిక పరీక్షలు.'),
          s('If a government hospital asks you to buy medicines outside, ask for the "not available" slip and complain on 104.', 'ప్రభుత్వ ఆసుపత్రి బయట మందులు కొనమంటే "అందుబాటులో లేదు" స్లిప్ అడిగి 104కి ఫిర్యాదు చేయండి.'),
        ],
      },
      {
        title: s('Free online doctor — eSanjeevani', 'ఉచిత ఆన్‌లైన్ డాక్టర్ — eSanjeevani'),
        steps: [
          s('Install "eSanjeevani" or open esanjeevani.mohfw.gov.in → register with mobile / ABHA → choose general OPD or a specialist.', '"eSanjeevani" ఇన్‌స్టాల్ చేయండి లేదా esanjeevani.mohfw.gov.in → మొబైల్ / ABHAతో నమోదు → జనరల్ OPD లేదా స్పెషలిస్ట్ ఎంచుకోండి.'),
          s('Wait in the online queue; a government doctor consults on video and sends an e-prescription.', 'ఆన్‌లైన్ క్యూలో వేచి ఉండండి; ప్రభుత్వ డాక్టర్ వీడియోలో సంప్రదించి ఇ-ప్రిస్క్రిప్షన్ పంపుతారు.'),
        ],
      },
      {
        title: s('Cheaper medicines — Jan Aushadhi', 'చౌక మందులు — జన ఔషధి'),
        steps: [
          s('Find a Pradhan Mantri Bhartiya Janaushadhi Kendra near you with the "Jan Aushadhi Sugam" app.', '"Jan Aushadhi Sugam" యాప్‌తో మీ దగ్గర ప్రధాన మంత్రి భారతీయ జనౌషధి కేంద్రం కనుగొనండి.'),
          s('Show your prescription; ask for the generic with the same salt and strength. Quality-tested; usually 50–90% cheaper.', 'మీ ప్రిస్క్రిప్షన్ చూపించండి; అదే సాల్ట్, బలంతో జనరిక్ అడగండి. నాణ్యత పరీక్షించినవి; సాధారణంగా 50–90% తక్కువ.'),
        ],
      },
      {
        title: s('Mental health — Tele-MANAS', 'మానసిక ఆరోగ్యం — Tele-MANAS'),
        steps: [
          s('Call 14416 (or 1-800-891-4416) any time, free. Choose Telugu. A trained counsellor listens; you can be connected to a psychiatrist.', 'ఎప్పుడైనా 14416 (లేదా 1-800-891-4416)కి ఉచితంగా కాల్ చేయండి. తెలుగు ఎంచుకోండి. శిక్షణ పొందిన కౌన్సెలర్ వింటారు; సైకియాట్రిస్ట్‌తో కనెక్ట్ చేయవచ్చు.'),
          s('For stress, sleep problems, exam pressure, addiction, low mood — for yourself or a family member. Calls are confidential.', 'ఒత్తిడి, నిద్ర సమస్యలు, పరీక్షల ఒత్తిడి, వ్యసనం, మనసు బాగోకపోవడం — మీకు లేదా కుటుంబ సభ్యునికి. కాల్స్ గోప్యం.'),
        ],
      },
      {
        title: s('TB, dialysis and blood', 'TB, డయాలసిస్, రక్తం'),
        steps: [
          s('Cough for 2+ weeks, weight loss, fever at night: free sputum test at the PHC. TB treatment is free; patients get ₹1,000 a month to the bank for nutrition during treatment (Ni-kshay Poshan Yojana).', '2+ వారాల దగ్గు, బరువు తగ్గడం, రాత్రి జ్వరం: PHCలో ఉచిత కఫ పరీక్ష. TB చికిత్స ఉచితం; చికిత్స సమయంలో పోషణకు రోగులకు నెలకు ₹1,000 బ్యాంకుకు (నిక్షయ్ పోషణ్ యోజన).'),
          s('Kidney failure: free dialysis at government hospital dialysis centres (PM National Dialysis Programme); NTR Vaidya Seva covers it at network hospitals.', 'కిడ్నీ వైఫల్యం: ప్రభుత్వ ఆసుపత్రి డయాలసిస్ కేంద్రాల్లో ఉచిత డయాలసిస్ (PM జాతీయ డయాలసిస్ కార్యక్రమం); నెట్‌వర్క్ ఆసుపత్రుల్లో NTR వైద్య సేవ కవర్ చేస్తుంది.'),
          s('Need blood: check live stock in nearby blood banks on eraktkosh.mohfw.gov.in; government blood banks give blood free to patients in government hospitals.', 'రక్తం కావాలా: eraktkosh.mohfw.gov.inలో దగ్గరి బ్లడ్ బ్యాంకుల్లో నిల్వ చూడండి; ప్రభుత్వ ఆసుపత్రి రోగులకు ప్రభుత్వ బ్లడ్ బ్యాంకులు ఉచితంగా రక్తం ఇస్తాయి.'),
        ],
      },
    ],
    costExample: s('BP and sugar patient: monthly medicines free at the PHC, or at Jan Aushadhi for a fraction of the brand price.', 'BP, షుగర్ రోగి: PHCలో నెలవారీ మందులు ఉచితం, లేదా జన ఔషధిలో బ్రాండ్ ధరలో కొంత భాగానికి.'),
    whereToApply: [s('PHC / government hospital; eSanjeevani app; 14416; Jan Aushadhi Kendra', 'PHC / ప్రభుత్వ ఆసుపత్రి; eSanjeevani యాప్; 14416; జన ఔషధి కేంద్రం')],
    timeline: s('Same day.', 'అదే రోజు.'),
    tips: [s('Hospitalisation? Check NTR Vaidya Seva / Ayushman cover first — big treatments are cashless for eligible families.', 'ఆసుపత్రిలో చేరాలా? ముందు NTR వైద్య సేవ / ఆయుష్మాన్ కవర్ చూడండి — అర్హ కుటుంబాలకు పెద్ద చికిత్సలు నగదు రహితం.')],
    links: [{ label: 'eSanjeevani', url: 'https://esanjeevani.mohfw.gov.in' }, { label: 'e-RaktKosh — blood availability', url: 'https://eraktkosh.mohfw.gov.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── NEWBORN CHECKLIST
  {
    id: 'newborn-checklist',
    category: 'welfare',
    level: 'both',
    title: s('New baby checklist — birth certificate, name, Aadhaar, vaccines, schemes', 'కొత్త బిడ్డ చెక్‌లిస్ట్ — జనన ధృవీకరణ, పేరు, ఆధార్, టీకాలు, పథకాలు'),
    summary: s(
      'In the first year after a baby is born, a few papers and visits set the child up for life: free birth registration within 21 days, adding the name, Baal Aadhaar, the vaccination schedule, the mother\'s maternity benefit, adding the baby to the rice card, and savings like Sukanya Samriddhi for a girl.',
      'బిడ్డ పుట్టిన మొదటి సంవత్సరంలో కొన్ని పత్రాలు, సందర్శనలు జీవితాంతం ఉపయోగపడతాయి: 21 రోజుల్లో ఉచిత జనన నమోదు, పేరు చేర్చడం, బాల్ ఆధార్, టీకా షెడ్యూల్, తల్లికి ప్రసూతి ప్రయోజనం, బిడ్డను రైస్ కార్డులో చేర్చడం, అమ్మాయికి సుకన్య సమృద్ధి వంటి పొదుపు.',
    ),
    keywords: ['newborn', 'new baby', 'baby born', 'after delivery', 'baby birth certificate', 'baby name', 'baby aadhaar', 'vaccination', 'vaccine schedule', 'u-win', 'immunisation', 'కొత్త బిడ్డ', 'బిడ్డ పుట్టాడు', 'బిడ్డ పుట్టింది', 'టీకాలు', 'పాప', 'బాబు'],
    whoCanApply: [s('Parents of a newborn', 'నవజాత శిశువు తల్లిదండ్రులు')],
    documents: [s('Hospital discharge summary / birth report, parents\' Aadhaar, marriage proof (if asked), MCP card', 'ఆసుపత్రి డిశ్చార్జ్ సమ్మరీ / జనన నివేదిక, తల్లిదండ్రుల ఆధార్, (అడిగితే) వివాహ రుజువు, MCP కార్డు')],
    fees: [fee(s('Birth registration within 21 days, Baal Aadhaar, vaccines', '21 రోజుల్లో జనన నమోదు, బాల్ ఆధార్, టీకాలు'), s('Free', 'ఉచితం'))],
    steps: [
      s('Birth certificate → name → Baal Aadhaar → vaccines → schemes.', 'జనన ధృవీకరణ → పేరు → బాల్ ఆధార్ → టీకాలు → పథకాలు.'),
    ],
    stages: [
      {
        title: s('First month', 'మొదటి నెల'),
        steps: [
          s('Hospital births are reported by the hospital — confirm with the registrar (panchayat / municipality) and download the birth certificate (see Birth & death guide). Home births: report within 21 days.', 'ఆసుపత్రి జననాలను ఆసుపత్రి నివేదిస్తుంది — రిజిస్ట్రార్ (పంచాయతీ / మున్సిపాలిటీ)తో నిర్ధారించి జనన ధృవీకరణ డౌన్‌లోడ్ చేయండి (జనన & మరణ గైడ్). ఇంటి జననాలు: 21 రోజుల్లో నివేదించండి.'),
          s('Birth-dose vaccines (BCG, OPV-0, Hepatitis B) at the hospital; get them recorded on the MCP card and the U-WIN vaccination system.', 'జనన మోతాదు టీకాలు (BCG, OPV-0, హెపటైటిస్ B) ఆసుపత్రిలో; MCP కార్డు, U-WIN టీకా వ్యవస్థలో నమోదు చేయించండి.'),
          s('Collect the NTR Baby Kit at discharge (government hospital).', 'డిశ్చార్జ్ సమయంలో NTR బేబీ కిట్ తీసుకోండి (ప్రభుత్వ ఆసుపత్రి).'),
        ],
      },
      {
        title: s('Name, Aadhaar, rice card', 'పేరు, ఆధార్, రైస్ కార్డు'),
        steps: [
          s('Add the child\'s name to the birth record within 1 year (free); later possible with a small late fee.', '1 సంవత్సరంలో జనన రికార్డులో పిల్లల పేరు చేర్చండి (ఉచితం); తర్వాత చిన్న ఆలస్య ఫీజుతో సాధ్యం.'),
          s('Baal Aadhaar: take baby, birth certificate and a parent\'s Aadhaar to an Aadhaar centre / camp (photo only, no fingerprints).', 'బాల్ ఆధార్: బిడ్డ, జనన ధృవీకరణ, తల్లి/తండ్రి ఆధార్‌తో ఆధార్ కేంద్రం / క్యాంప్‌కు (ఫోటో మాత్రమే, వేలిముద్రలు లేవు).'),
          s('Add the baby to the family rice card at the Secretariat (member addition) with the birth certificate and Aadhaar.', 'జనన ధృవీకరణ, ఆధార్‌తో సచివాలయంలో కుటుంబ రైస్ కార్డులో బిడ్డను చేర్చండి (సభ్యుల చేర్పు).'),
          s('Create the baby\'s ABHA health ID (optional) to keep vaccine and health records together.', 'టీకా, ఆరోగ్య రికార్డులు ఒకేచోట ఉంచడానికి బిడ్డ ABHA హెల్త్ ఐడీ తయారు చేయండి (ఐచ్ఛికం).'),
        ],
      },
      {
        title: s('Vaccines in the first year', 'మొదటి సంవత్సరంలో టీకాలు'),
        steps: [
          s('6, 10 and 14 weeks: pentavalent, OPV, rotavirus, PCV, IPV (as per the national schedule).', '6, 10, 14 వారాలు: పెంటావాలెంట్, OPV, రోటావైరస్, PCV, IPV (జాతీయ షెడ్యూల్ ప్రకారం).'),
          s('9 months: measles-rubella (MR-1), vitamin A; 16–24 months: boosters.', '9 నెలలు: మీజిల్స్-రుబెల్లా (MR-1), విటమిన్ A; 16–24 నెలలు: బూస్టర్లు.'),
          s('All free at the anganwadi / PHC on the Wednesday / Saturday immunisation days — the ANM tells the dates.', 'అంగన్‌వాడీ / PHCలో బుధవారం / శనివారం టీకా రోజుల్లో అన్నీ ఉచితం — తేదీలు ANM చెబుతారు.'),
        ],
      },
      {
        title: s('Money for the family', 'కుటుంబానికి డబ్బు'),
        steps: [
          s('PMMVY second instalment after birth registration and first vaccines (first child), or ₹6,000 if the second child is a girl — tell the anganwadi worker.', 'జనన నమోదు, మొదటి టీకాల తర్వాత PMMVY రెండో వాయిదా (మొదటి బిడ్డ), లేదా రెండో బిడ్డ అమ్మాయి అయితే ₹6,000 — అంగన్‌వాడీ కార్యకర్తకు చెప్పండి.'),
          s('Girl child: open a Sukanya Samriddhi account (8.2%).', 'ఆడపిల్ల: సుకన్య సమృద్ధి ఖాతా తెరవండి (8.2%).'),
          s('Add the baby as a nominee / dependant in your PF, insurance and the family\'s health cover.', 'మీ PF, బీమా, కుటుంబ ఆరోగ్య కవర్‌లో బిడ్డను నామినీ / ఆధారితుడిగా చేర్చండి.'),
        ],
      },
    ],
    costExample: s('Everything above is free except optional savings.', 'ఐచ్ఛిక పొదుపు తప్ప పైవన్నీ ఉచితం.'),
    whereToApply: [s('Hospital; panchayat / municipality (birth); Aadhaar centre; anganwadi / PHC; Secretariat', 'ఆసుపత్రి; పంచాయతీ / మున్సిపాలిటీ (జననం); ఆధార్ కేంద్రం; అంగన్‌వాడీ / PHC; సచివాలయం')],
    timeline: s('Birth registration within 21 days; name within 1 year; vaccines by the schedule.', '21 రోజుల్లో జనన నమోదు; 1 సంవత్సరంలో పేరు; షెడ్యూల్ ప్రకారం టీకాలు.'),
    tips: [s('Use the same spelling of the child\'s and parents\' names on the birth certificate, Aadhaar and school records — mismatches cause problems for years.', 'జనన ధృవీకరణ, ఆధార్, స్కూల్ రికార్డుల్లో పిల్లల, తల్లిదండ్రుల పేర్లకు ఒకే స్పెల్లింగ్ వాడండి — తేడాలు ఏళ్ల తరబడి సమస్యలు తెస్తాయి.')],
    links: [{ label: 'U-WIN — vaccination records', url: 'https://uwin.mohfw.gov.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── POLICE PERMISSIONS
  {
    id: 'police-permissions',
    category: 'safety',
    level: 'state',
    title: s('Police permission for events, processions, loudspeakers and protests', 'కార్యక్రమాలు, ఊరేగింపులు, లౌడ్‌స్పీకర్లు, నిరసనలకు పోలీసు అనుమతి'),
    summary: s(
      'Public events, processions, rallies, dharnas and use of loudspeakers / DJ in public need prior police permission. In AP you can apply online on the AP Police citizen portal or at the police station. Loudspeakers in open places are not allowed between 10 pm and 6 am (with limited exceptions notified by the state).',
      'బహిరంగ కార్యక్రమాలు, ఊరేగింపులు, ర్యాలీలు, ధర్నాలు, బహిరంగంగా లౌడ్‌స్పీకర్లు / DJ వాడకానికి ముందస్తు పోలీసు అనుమతి కావాలి. APలో AP పోలీస్ సిటిజన్ పోర్టల్‌లో ఆన్‌లైన్‌లో లేదా పోలీస్ స్టేషన్‌లో దరఖాస్తు చేయవచ్చు. బహిరంగ ప్రదేశాల్లో రాత్రి 10 నుండి ఉదయం 6 వరకు లౌడ్‌స్పీకర్లు అనుమతి లేదు (రాష్ట్రం నోటిఫై చేసిన పరిమిత మినహాయింపులు తప్ప).',
    ),
    keywords: ['police permission', 'event permission', 'procession', 'rally', 'dharna', 'protest permission', 'loudspeaker', 'dj permission', 'mike permission', 'function permission', 'ganesh', 'marriage procession', 'పోలీసు అనుమతి', 'ఊరేగింపు', 'లౌడ్‌స్పీకర్', 'మైక్ అనుమతి', 'ధర్నా', 'ర్యాలీ'],
    whoCanApply: [s('Organisers of public events, functions, processions and protests', 'బహిరంగ కార్యక్రమాలు, వేడుకలు, ఊరేగింపులు, నిరసనల నిర్వాహకులు')],
    documents: [
      s('Organiser\'s Aadhaar and phone; event details (date, time, place, route, expected crowd)', 'నిర్వాహకుని ఆధార్, ఫోన్; కార్యక్రమ వివరాలు (తేదీ, సమయం, స్థలం, మార్గం, ఆశించే జనం)'),
      s('Venue owner\'s consent / municipal or panchayat permission for public places', 'వేదిక యజమాని అంగీకారం / బహిరంగ ప్రదేశాలకు మున్సిపల్ లేదా పంచాయతీ అనుమతి'),
      s('Fire / electrical safety arrangements for large pandals', 'పెద్ద పందిళ్లకు అగ్ని / విద్యుత్ భద్రతా ఏర్పాట్లు'),
    ],
    fees: [fee(s('Permission', 'అనుమతి'), s('Shown on the portal (some permissions are free)', 'పోర్టల్‌లో చూపిస్తారు (కొన్ని అనుమతులు ఉచితం)'))],
    steps: [
      s('Apply online at least a few days before the event.', 'కార్యక్రమానికి కనీసం కొన్ని రోజుల ముందే ఆన్‌లైన్ దరఖాస్తు.'),
      s('Follow the conditions on the permission letter.', 'అనుమతి లేఖపై షరతులు పాటించండి.'),
    ],
    stages: [
      {
        title: s('Apply', 'దరఖాస్తు'),
        steps: [
          s('citizen.appolice.gov.in (or AP Police Seva app) → register → choose "Event / Performance permission" or "Procession / Dharna / Rally permission" → fill details and upload documents → pay if required.', 'citizen.appolice.gov.in (లేదా AP పోలీస్ సేవ యాప్) → నమోదు → "Event / Performance permission" లేదా "Procession / Dharna / Rally permission" ఎంచుకుని → వివరాలు నింపి పత్రాలు అప్‌లోడ్ → అవసరమైతే చెల్లింపు.'),
          s('Or give a written application to the SHO of the area. Apply early — big events and processions need time for route and bandobast planning.', 'లేదా ఆ ప్రాంత SHOకి రాతపూర్వక దరఖాస్తు. ముందుగానే దరఖాస్తు చేయండి — పెద్ద కార్యక్రమాలు, ఊరేగింపులకు మార్గం, బందోబస్తు ప్రణాళికకు సమయం కావాలి.'),
          s('Download the permission letter; keep it with the organiser at the venue.', 'అనుమతి లేఖ డౌన్‌లోడ్ చేసి వేదిక వద్ద నిర్వాహకుని దగ్గర ఉంచండి.'),
        ],
      },
      {
        title: s('Follow the rules', 'నియమాలు పాటించడం'),
        steps: [
          s('Loudspeakers: only within the allowed hours (not 10 pm–6 am in open areas) and noise limits; keep the speaker volume low near hospitals, schools and courts (silence zones).', 'లౌడ్‌స్పీకర్లు: అనుమతి సమయాల్లో మాత్రమే (బహిరంగ ప్రాంతాల్లో రా.10–ఉ.6 కాదు), శబ్ద పరిమితుల్లో; ఆసుపత్రులు, స్కూళ్లు, కోర్టుల దగ్గర (నిశ్శబ్ద మండలాలు) తక్కువ శబ్దం.'),
          s('Stick to the approved route and time; don\'t block ambulances; volunteers to manage crowd.', 'ఆమోదిత మార్గం, సమయానికి కట్టుబడండి; అంబులెన్స్‌లను అడ్డుకోకండి; జనాన్ని నిర్వహించడానికి వాలంటీర్లు.'),
          s('Protests are a right, but must be peaceful and at the permitted place.', 'నిరసనలు హక్కు, కానీ శాంతియుతంగా, అనుమతించిన స్థలంలో జరగాలి.'),
        ],
      },
    ],
    costExample: s('Wedding baraat on a public road with a band: apply online for procession permission a week in advance.', 'పబ్లిక్ రోడ్డుపై బ్యాండ్‌తో పెళ్లి ఊరేగింపు: వారం ముందే ఆన్‌లైన్‌లో ఊరేగింపు అనుమతికి దరఖాస్తు.'),
    problems: [P(['Neighbours using loud DJ late at night.', 'పొరుగువారు రాత్రి పొద్దుపోయాక పెద్ద DJ వాడుతున్నారు.'], ['Call 112 / the local police station — noise after 10 pm in open areas is a violation.', '112 / స్థానిక పోలీస్ స్టేషన్‌కు కాల్ చేయండి — బహిరంగ ప్రాంతాల్లో రాత్రి 10 తర్వాత శబ్దం ఉల్లంఘన.'])],
    whereToApply: [s('citizen.appolice.gov.in / AP Police Seva app; local police station', 'citizen.appolice.gov.in / AP పోలీస్ సేవ యాప్; స్థానిక పోలీస్ స్టేషన్')],
    timeline: s('Apply at least 3–7 days ahead; big events earlier.', 'కనీసం 3–7 రోజుల ముందే దరఖాస్తు; పెద్ద కార్యక్రమాలకు ఇంకా ముందు.'),
    tips: [s('For events inside a closed hall / marriage function hall, the venue usually handles permissions — confirm with them.', 'మూసిన హాల్ / కళ్యాణ మండపం లోపల కార్యక్రమాలకు సాధారణంగా వేదిక వారే అనుమతులు చూసుకుంటారు — వారితో నిర్ధారించుకోండి.')],
    links: [{ label: 'AP Police citizen services', url: 'https://citizen.appolice.gov.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── TRANSGENDER ID
  {
    id: 'transgender-id',
    category: 'certificates',
    level: 'both',
    title: s('Transgender persons — identity certificate, ID card, pension and support', 'ట్రాన్స్‌జెండర్ వ్యక్తులు — గుర్తింపు సర్టిఫికెట్, ఐడీ కార్డు, పెన్షన్, సహాయం'),
    summary: s(
      'Transgender persons can get an official certificate of identity and ID card online from the District Collector through the national portal — no medical examination is needed. With it you can update your name and gender in Aadhaar, PAN and other documents, and access welfare such as the transgender pension under NTR Bharosa, scholarships, skill training and shelter homes (Garima Greh).',
      'ట్రాన్స్‌జెండర్ వ్యక్తులు జాతీయ పోర్టల్ ద్వారా జిల్లా కలెక్టర్ నుండి అధికారిక గుర్తింపు సర్టిఫికెట్, ఐడీ కార్డు ఆన్‌లైన్‌లో పొందవచ్చు — వైద్య పరీక్ష అక్కర్లేదు. దానితో ఆధార్, PAN, ఇతర పత్రాల్లో పేరు, లింగం అప్‌డేట్ చేయవచ్చు, NTR భరోసా కింద ట్రాన్స్‌జెండర్ పెన్షన్, స్కాలర్‌షిప్‌లు, నైపుణ్య శిక్షణ, ఆశ్రయ గృహాలు (గరిమా గృహ్) వంటి సంక్షేమం పొందవచ్చు.',
    ),
    keywords: ['transgender', 'transgender certificate', 'transgender id', 'third gender', 'hijra', 'gender change', 'ట్రాన్స్‌జెండర్', 'హిజ్రా', 'లింగ మార్పు'],
    whoCanApply: [s('Any transgender person (self-declaration)', 'ఏ ట్రాన్స్‌జెండర్ వ్యక్తి అయినా (స్వీయ ప్రకటన)')],
    documents: [s('Self-declaration affidavit (format on the portal), Aadhaar or other ID, photo, address proof', 'స్వీయ ప్రకటన అఫిడవిట్ (ఫార్మాట్ పోర్టల్‌లో), ఆధార్ లేదా ఇతర ఐడీ, ఫోటో, చిరునామా రుజువు')],
    fees: [fee(s('Certificate and ID card', 'సర్టిఫికెట్, ఐడీ కార్డు'), s('Free', 'ఉచితం'))],
    steps: [
      s('Apply on transgender.dosje.gov.in.', 'transgender.dosje.gov.inలో దరఖాస్తు.'),
      s('District Collector issues the certificate and ID card.', 'జిల్లా కలెక్టర్ సర్టిఫికెట్, ఐడీ కార్డు జారీ.'),
    ],
    stages: [
      {
        title: s('Get the certificate and ID card', 'సర్టిఫికెట్, ఐడీ కార్డు పొందడం'),
        steps: [
          s('Open transgender.dosje.gov.in (National Portal for Transgender Persons) → register with mobile → fill Form 2 with the name and gender you identify with.', 'transgender.dosje.gov.in (ట్రాన్స్‌జెండర్ వ్యక్తుల జాతీయ పోర్టల్) → మొబైల్‌తో నమోదు → మీరు గుర్తించుకునే పేరు, లింగంతో ఫారం 2 నింపండి.'),
          s('Upload the self-declaration affidavit, photo and ID; submit. No medical or physical examination is required.', 'స్వీయ ప్రకటన అఫిడవిట్, ఫోటో, ఐడీ అప్‌లోడ్ చేసి సమర్పించండి. వైద్య లేదా శారీరక పరీక్ష అవసరం లేదు.'),
          s('The District Collector\'s office issues the certificate and ID card (download from the portal).', 'జిల్లా కలెక్టర్ కార్యాలయం సర్టిఫికెట్, ఐడీ కార్డు జారీ చేస్తుంది (పోర్టల్ నుండి డౌన్‌లోడ్).'),
        ],
      },
      {
        title: s('Use it', 'వాడడం'),
        steps: [
          s('Update name / gender in Aadhaar (enrolment centre), PAN, voter ID, bank and certificates with the certificate.', 'సర్టిఫికెట్‌తో ఆధార్ (నమోదు కేంద్రం), PAN, ఓటర్ ఐడీ, బ్యాంక్, సర్టిఫికెట్లలో పేరు / లింగం అప్‌డేట్ చేయండి.'),
          s('Apply at the Village / Ward Secretariat for the transgender pension under NTR Bharosa.', 'NTR భరోసా కింద ట్రాన్స్‌జెండర్ పెన్షన్‌కు గ్రామ / వార్డు సచివాలయంలో దరఖాస్తు.'),
          s('SMILE scheme: scholarships, skill training, health support and Garima Greh shelter homes — ask the district welfare office or the portal.', 'SMILE పథకం: స్కాలర్‌షిప్‌లు, నైపుణ్య శిక్షణ, ఆరోగ్య సహాయం, గరిమా గృహ్ ఆశ్రయ గృహాలు — జిల్లా సంక్షేమ కార్యాలయం లేదా పోర్టల్‌ను అడగండి.'),
          s('Discrimination in jobs, schools, housing or hospitals is prohibited (Transgender Persons Act, 2019) — complain to the District Collector / police.', 'ఉద్యోగాలు, స్కూళ్లు, ఇళ్లు, ఆసుపత్రుల్లో వివక్ష నిషేధం (ట్రాన్స్‌జెండర్ వ్యక్తుల చట్టం, 2019) — జిల్లా కలెక్టర్ / పోలీసులకు ఫిర్యాదు.'),
        ],
      },
    ],
    costExample: s('Free.', 'ఉచితం.'),
    whereToApply: [s('transgender.dosje.gov.in; District Collector; Village / Ward Secretariat (pension)', 'transgender.dosje.gov.in; జిల్లా కలెక్టర్; గ్రామ / వార్డు సచివాలయం (పెన్షన్)')],
    timeline: s('Certificate: the rules ask for issue within 30 days.', 'సర్టిఫికెట్: 30 రోజుల్లో జారీ చేయాలని నియమాలు.'),
    tips: [s('Keep the downloaded certificate in DigiLocker / your phone — it is the main proof for every update.', 'డౌన్‌లోడ్ చేసిన సర్టిఫికెట్ డిజిలాకర్ / మీ ఫోన్‌లో ఉంచండి — ప్రతి అప్‌డేట్‌కు ఇదే ముఖ్య రుజువు.')],
    links: [{ label: 'National Portal for Transgender Persons', url: 'https://transgender.dosje.gov.in' }],
    lastChecked: CHECKED,
  },
];

export const lifeDir: XDir[] = [
  D('residence-certificate', 'certs', ['Residence proof from Tahsildar; local status for admissions', 'తహసీల్దార్ నుండి నివాస రుజువు; ప్రవేశాలకు లోకల్ స్టేటస్'], ['Village / Ward Secretariat or MeeSeva', 'గ్రామ / వార్డు సచివాలయం లేదా మీసేవ']),
  D('school-certificates-open-school', 'education', ['TC, study, migration; finish SSC / Inter via APOSS or NIOS', 'TC, స్టడీ, మైగ్రేషన్; APOSS / NIOS ద్వారా SSC / ఇంటర్'], ['School; bse / bie.ap.gov.in; apopenschool.ap.gov.in', 'స్కూల్; bse / bie.ap.gov.in; apopenschool.ap.gov.in']),
  D('free-health-services', 'health', ['Free govt hospital care, eSanjeevani, Tele-MANAS 14416, Jan Aushadhi, TB ₹1,000/month', 'ఉచిత ప్రభుత్వ ఆసుపత్రి సేవ, eSanjeevani, Tele-MANAS 14416, జన ఔషధి, TB ₹1,000/నెల'], ['PHC / government hospital', 'PHC / ప్రభుత్వ ఆసుపత్రి']),
  D('newborn-checklist', 'welfare', ['Birth certificate, name, Baal Aadhaar, vaccines, rice card, PMMVY', 'జనన ధృవీకరణ, పేరు, బాల్ ఆధార్, టీకాలు, రైస్ కార్డు, PMMVY'], ['Hospital, panchayat, anganwadi', 'ఆసుపత్రి, పంచాయతీ, అంగన్‌వాడీ']),
  D('police-permissions', 'police', ['Events, processions, loudspeakers, dharnas — apply online', 'కార్యక్రమాలు, ఊరేగింపులు, లౌడ్‌స్పీకర్లు, ధర్నాలు — ఆన్‌లైన్ దరఖాస్తు'], ['citizen.appolice.gov.in', 'citizen.appolice.gov.in']),
  D('transgender-id', 'certs', ['Identity certificate and ID card (no medical test), pension, SMILE', 'గుర్తింపు సర్టిఫికెట్, ఐడీ కార్డు (వైద్య పరీక్ష లేదు), పెన్షన్, SMILE'], ['transgender.dosje.gov.in', 'transgender.dosje.gov.in']),
];
