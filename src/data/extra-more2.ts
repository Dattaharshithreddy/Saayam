import { Guide } from '../types';
import { fee, CHECKED } from './bi';
import { s, P, D, XDir } from './extra-helpers';

/** Third expansion — exams, schools, health complaints, housing, farmers, business, jobs (checked 21 Oct 2026). */
export const more2Guides: Guide[] = [
  // ─────────────────────────────────────────── REVALUATION
  {
    id: 'ssc-inter-revaluation',
    category: 'education',
    level: 'state',
    title: s('SSC / Inter marks — recounting, reverification and supplementary exams', 'SSC / ఇంటర్ మార్కులు — రీకౌంటింగ్, రీవెరిఫికేషన్, సప్లిమెంటరీ పరీక్షలు'),
    summary: s(
      'If you think your SSC or Intermediate marks are wrong, you can apply for recounting (totals checked) or reverification (the answer script is checked again; for Inter you also get a scanned copy). Applications open for about a week right after results — usually in April–May. Failed or want to improve? Write the supplementary ("advanced supplementary") exams held soon after.',
      'మీ SSC లేదా ఇంటర్ మార్కులు తప్పని అనిపిస్తే, రీకౌంటింగ్ (మొత్తాలు తనిఖీ) లేదా రీవెరిఫికేషన్ (జవాబు పత్రం మళ్లీ తనిఖీ; ఇంటర్‌కు స్కాన్ కాపీ కూడా)కు దరఖాస్తు చేయవచ్చు. ఫలితాల తర్వాత సుమారు ఒక వారం మాత్రమే దరఖాస్తులు — సాధారణంగా ఏప్రిల్–మే. ఫెయిల్ అయ్యారా లేదా మార్కులు పెంచుకోవాలా? వెంటనే జరిగే సప్లిమెంటరీ ("అడ్వాన్స్‌డ్ సప్లిమెంటరీ") పరీక్షలు రాయండి.',
    ),
    keywords: ['revaluation', 'recounting', 'reverification', 'retotalling', 'marks wrong', 'supplementary', 'advanced supplementary', 'improvement exam', 'answer sheet copy', 'scanned copy', 'రీకౌంటింగ్', 'రీవెరిఫికేషన్', 'సప్లిమెంటరీ', 'మార్కులు తప్పు'],
    whoCanApply: [s('Students who wrote the AP SSC / Intermediate public exams', 'AP SSC / ఇంటర్ పబ్లిక్ పరీక్షలు రాసిన విద్యార్థులు')],
    documents: [s('Hall ticket number, marks memo (online copy), date of birth, mobile', 'హాల్ టికెట్ నంబర్, మార్కుల మెమో (ఆన్‌లైన్ కాపీ), పుట్టిన తేదీ, మొబైల్')],
    fees: [
      fee(s('SSC (2026)', 'SSC (2026)'), s('Recounting ₹500 · Reverification ₹1,000 per subject', 'రీకౌంటింగ్ ₹500 · రీవెరిఫికేషన్ ₹1,000 ఒక్కో సబ్జెక్టుకు')),
      fee(s('Intermediate', 'ఇంటర్'), s('Recounting ₹260 · Reverification with scanned copy ₹1,300 per paper (check the year\'s notice)', 'రీకౌంటింగ్ ₹260 · స్కాన్ కాపీతో రీవెరిఫికేషన్ ₹1,300 ఒక్కో పేపర్‌కు (ఆ ఏడాది నోటీసు చూడండి)')),
    ],
    steps: [
      s('Apply online within the dates announced with the results.', 'ఫలితాలతో ప్రకటించిన తేదీల్లోగా ఆన్‌లైన్‌లో దరఖాస్తు.'),
      s('Pay per subject; track the result on the board site.', 'ఒక్కో సబ్జెక్టుకు చెల్లించి బోర్డు సైట్‌లో ఫలితం చూడండి.'),
    ],
    stages: [
      {
        title: s('Decide: recount or reverify?', 'నిర్ణయం: రీకౌంట్ లేదా రీవెరిఫై?'),
        steps: [
          s('Recounting: only checks totals and unvalued answers — good if marks look added wrong.', 'రీకౌంటింగ్: మొత్తాలు, మూల్యాంకనం కాని జవాబులు మాత్రమే — మార్కులు తప్పుగా కూడినట్లు అనిపిస్తే.'),
          s('Reverification: the answer script is valued again (Inter gives you a scanned copy first). Choose this if you expected much higher marks.', 'రీవెరిఫికేషన్: జవాబు పత్రం మళ్లీ మూల్యాంకనం (ఇంటర్‌లో ముందు స్కాన్ కాపీ ఇస్తారు). చాలా ఎక్కువ మార్కులు ఆశిస్తే ఇది ఎంచుకోండి.'),
          s('If you also plan to write the supplementary exam, apply for that separately — don\'t wait for the reverification result.', 'సప్లిమెంటరీ పరీక్ష కూడా రాయాలనుకుంటే దానికి విడిగా దరఖాస్తు చేయండి — రీవెరిఫికేషన్ ఫలితం కోసం ఆగకండి.'),
        ],
      },
      {
        title: s('Apply', 'దరఖాస్తు'),
        steps: [
          s('SSC: bse.ap.gov.in → student services → recounting / reverification → hall ticket number → choose subjects → pay online (the notice says how) → save the acknowledgement. Schools can also apply for students.', 'SSC: bse.ap.gov.in → student services → recounting / reverification → హాల్ టికెట్ నంబర్ → సబ్జెక్టులు ఎంచుకోండి → ఆన్‌లైన్ చెల్లింపు (నోటీసు ప్రకారం) → అక్నాలెడ్జ్‌మెంట్ దాచుకోండి. స్కూళ్లు కూడా విద్యార్థుల తరఫున దరఖాస్తు చేయవచ్చు.'),
          s('Inter: bie.ap.gov.in → student services → recounting / reverification → hall ticket, date of birth, mobile → subjects → pay → note the transaction number. Don\'t post applications to the board.', 'ఇంటర్: bie.ap.gov.in → student services → recounting / reverification → హాల్ టికెట్, పుట్టిన తేదీ, మొబైల్ → సబ్జెక్టులు → చెల్లింపు → లావాదేవీ నంబర్ నోట్ చేయండి. బోర్డుకు పోస్టులో పంపకండి.'),
          s('Inter reverification: download the scanned answer script, compare with the key, and confirm reverification in the window given.', 'ఇంటర్ రీవెరిఫికేషన్: స్కాన్ చేసిన జవాబు పత్రం డౌన్‌లోడ్ చేసి కీతో పోల్చి, ఇచ్చిన గడువులో రీవెరిఫికేషన్ నిర్ధారించండి.'),
        ],
        note: s('The window is short (about a week after results). Missing it means waiting for the supplementary.', 'గడువు తక్కువ (ఫలితాల తర్వాత సుమారు ఒక వారం). మిస్ అయితే సప్లిమెంటరీ వరకు ఆగాలి.'),
      },
      {
        title: s('Result and supplementary', 'ఫలితం, సప్లిమెంటరీ'),
        steps: [
          s('Check the revised result on the same site with the hall ticket number. Changed marks get a new memo through the school / college.', 'అదే సైట్‌లో హాల్ టికెట్‌తో సవరించిన ఫలితం చూడండి. మారిన మార్కులకు స్కూల్ / కాలేజీ ద్వారా కొత్త మెమో.'),
          s('Supplementary exams (usually May–June): pay the exam fee through your school / college by the deadline; Inter students can also write to improve marks.', 'సప్లిమెంటరీ పరీక్షలు (సాధారణంగా మే–జూన్): గడువులోగా స్కూల్ / కాలేజీ ద్వారా పరీక్ష ఫీజు చెల్లించండి; ఇంటర్ విద్యార్థులు మార్కుల పెంపుకు కూడా రాయవచ్చు.'),
        ],
      },
    ],
    costExample: s('SSC student doubting maths and science marks: reverification ₹1,000 × 2 = ₹2,000.', 'గణితం, సైన్స్ మార్కులపై సందేహం ఉన్న SSC విద్యార్థి: రీవెరిఫికేషన్ ₹1,000 × 2 = ₹2,000.'),
    whereToApply: [s('bse.ap.gov.in (SSC); bie.ap.gov.in (Inter); your school / college', 'bse.ap.gov.in (SSC); bie.ap.gov.in (ఇంటర్); మీ స్కూల్ / కాలేజీ')],
    timeline: s('Apply within about a week of results; revised results in a few weeks.', 'ఫలితాల తర్వాత సుమారు వారంలో దరఖాస్తు; కొన్ని వారాల్లో సవరించిన ఫలితాలు.'),
    tips: [s('Fees are not refunded even if marks don\'t change.', 'మార్కులు మారకపోయినా ఫీజు తిరిగి ఇవ్వరు.')],
    links: [{ label: 'BSE AP', url: 'https://bse.ap.gov.in' }, { label: 'BIE AP', url: 'https://bie.ap.gov.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── SCHOOL ADMISSIONS
  {
    id: 'school-admissions',
    category: 'education',
    level: 'both',
    title: s('Good free schools — Navodaya, Sainik, Kendriya Vidyalaya, Gurukulam and the NMMS scholarship', 'మంచి ఉచిత పాఠశాలలు — నవోదయ, సైనిక్, కేంద్రీయ విద్యాలయం, గురుకులం, NMMS స్కాలర్‌షిప్'),
    summary: s(
      'Some of the best schools cost little or nothing: Jawahar Navodaya Vidyalayas (free residential, Class 6 entrance), Sainik Schools (Class 6 and 9 entrance), Kendriya Vidyalayas (low fees, Class 1 lottery) and AP Gurukulam residential schools. Class 8 students in government schools can win ₹12,000 a year through the NMMS scholarship exam. Each has a yearly application window — miss it and you wait a year.',
      'కొన్ని ఉత్తమ పాఠశాలలు దాదాపు ఉచితం: జవహర్ నవోదయ విద్యాలయాలు (ఉచిత రెసిడెన్షియల్, 6వ తరగతి ప్రవేశ పరీక్ష), సైనిక్ స్కూళ్లు (6, 9 తరగతుల ప్రవేశ పరీక్ష), కేంద్రీయ విద్యాలయాలు (తక్కువ ఫీజు, 1వ తరగతి లాటరీ), AP గురుకులం రెసిడెన్షియల్ స్కూళ్లు. ప్రభుత్వ స్కూళ్లలో 8వ తరగతి విద్యార్థులు NMMS పరీక్షతో ఏడాదికి ₹12,000 పొందవచ్చు. ప్రతిదానికి వార్షిక దరఖాస్తు గడువు — మిస్ అయితే ఏడాది ఆగాలి.',
    ),
    keywords: ['navodaya', 'jnv', 'jnvst', 'sainik school', 'aissee', 'kendriya vidyalaya', 'kv admission', 'gurukulam', 'residential school', 'nmms', 'school admission', 'entrance class 6', 'నవోదయ', 'సైనిక్ స్కూల్', 'కేంద్రీయ విద్యాలయ', 'గురుకులం', 'NMMS', 'స్కూల్ ప్రవేశం'],
    whoCanApply: [s('Children of the right class and age for each school (see stages)', 'ప్రతి స్కూల్‌కు సరైన తరగతి, వయస్సు ఉన్న పిల్లలు (దశలు చూడండి)')],
    documents: [s('Birth certificate, Aadhaar, study certificate from the current school, caste / income / residence certificates, photo and signature', 'జనన ధృవీకరణ, ఆధార్, ప్రస్తుత స్కూల్ స్టడీ సర్టిఫికెట్, కుల / ఆదాయ / నివాస ధృవీకరణలు, ఫోటో, సంతకం')],
    fees: [
      fee(s('Navodaya', 'నవోదయ'), s('Free education, food and stay (small monthly Vidyalaya Vikas Nidhi for some)', 'ఉచిత చదువు, భోజనం, వసతి (కొందరికి చిన్న నెలవారీ విద్యాలయ వికాస నిధి)')),
      fee(s('NMMS scholarship', 'NMMS స్కాలర్‌షిప్'), s('₹12,000 a year for Classes 9–12', '9–12 తరగతులకు ఏడాదికి ₹12,000')),
    ],
    steps: [
      s('Note each school\'s application month and apply online on time.', 'ప్రతి స్కూల్ దరఖాస్తు నెల గుర్తుంచుకుని సమయానికి ఆన్‌లైన్ దరఖాస్తు.'),
      s('Prepare for the entrance test with old papers.', 'పాత ప్రశ్నపత్రాలతో ప్రవేశ పరీక్షకు సిద్ధం.'),
    ],
    stages: [
      {
        title: s('Jawahar Navodaya Vidyalaya (Class 6)', 'జవహర్ నవోదయ విద్యాలయం (6వ తరగతి)'),
        steps: [
          s('Child must be studying Class 5 in the same district in a recognised school, within the age band in the notification. 75% seats are for rural children; one-third for girls.', 'పిల్లలు అదే జిల్లాలో గుర్తింపు స్కూల్‌లో 5వ తరగతి చదువుతూ, నోటిఫికేషన్ వయస్సు పరిధిలో ఉండాలి. 75% సీట్లు గ్రామీణ పిల్లలకు; మూడో వంతు అమ్మాయిలకు.'),
          s('Apply free online on navodaya.gov.in (usually June–September) with the headmaster\'s certificate.', 'హెడ్‌మాస్టర్ సర్టిఫికెట్‌తో navodaya.gov.inలో ఉచితంగా ఆన్‌లైన్ దరఖాస్తు (సాధారణంగా జూన్–సెప్టెంబర్).'),
          s('Selection test (JNVST) is held in the district (usually December–January), in Telugu too. Results on the same site.', 'ఎంపిక పరీక్ష (JNVST) జిల్లాలోనే (సాధారణంగా డిసెంబర్–జనవరి), తెలుగులో కూడా. ఫలితాలు అదే సైట్‌లో.'),
        ],
      },
      {
        title: s('Sainik School (Class 6 and 9)', 'సైనిక్ స్కూల్ (6, 9 తరగతులు)'),
        steps: [
          s('Apply for AISSEE on aissee.nta.nic.in (usually October–December); girls can apply for Class 6.', 'aissee.nta.nic.inలో AISSEEకి దరఖాస్తు (సాధారణంగా అక్టోబర్–డిసెంబర్); 6వ తరగతికి అమ్మాయిలు కూడా.'),
          s('Exam usually in January; then medical exam and counselling. AP has Sainik School Korukonda (Vizianagaram) and Kalikiri (Annamayya).', 'పరీక్ష సాధారణంగా జనవరిలో; తర్వాత వైద్య పరీక్ష, కౌన్సెలింగ్. APలో సైనిక్ స్కూల్ కోరుకొండ (విజయనగరం), కలికిరి (అన్నమయ్య).'),
          s('Fees are subsidised; state scholarships help eligible families.', 'ఫీజులు రాయితీతో; అర్హ కుటుంబాలకు రాష్ట్ర స్కాలర్‌షిప్‌లు.'),
        ],
      },
      {
        title: s('Kendriya Vidyalaya', 'కేంద్రీయ విద్యాలయం'),
        steps: [
          s('Class 1: online registration on the KVS admission portal (usually March–April); child must be 6+ by 31 March. Seats by priority category and lottery; 25% under RTE.', '1వ తరగతి: KVS ప్రవేశ పోర్టల్‌లో ఆన్‌లైన్ నమోదు (సాధారణంగా మార్చి–ఏప్రిల్); 31 మార్చి నాటికి 6+ ఉండాలి. ప్రాధాన్య వర్గం, లాటరీ ద్వారా సీట్లు; 25% RTE కింద.'),
          s('Other classes: apply at the KV for vacancies when notified.', 'ఇతర తరగతులు: ప్రకటించినప్పుడు ఖాళీలకు KVలో దరఖాస్తు.'),
        ],
      },
      {
        title: s('AP Gurukulam and NMMS', 'AP గురుకులం, NMMS'),
        steps: [
          s('Gurukulam (SC / ST / BC / general / minority societies): see the Welfare hostels guide — entrance usually February–April.', 'గురుకులం (SC / ST / BC / జనరల్ / మైనారిటీ సొసైటీలు): సంక్షేమ హాస్టళ్ల గైడ్ చూడండి — ప్రవేశ పరీక్ష సాధారణంగా ఫిబ్రవరి–ఏప్రిల్.'),
          s('NMMS: Class 8 students in government / aided / local body schools, family income up to ₹3.5 lakh, at least 55% in Class 7 (50% SC/ST). Apply through the school when the AP exam notice comes (usually September–October); exam in November–December.', 'NMMS: ప్రభుత్వ / ఎయిడెడ్ / స్థానిక సంస్థ స్కూళ్లలో 8వ తరగతి విద్యార్థులు, కుటుంబ ఆదాయం ₹3.5 లక్షల వరకు, 7వ తరగతిలో కనీసం 55% (SC/STకి 50%). AP పరీక్ష నోటీసు వచ్చినప్పుడు (సాధారణంగా సెప్టెంబర్–అక్టోబర్) స్కూల్ ద్వారా దరఖాస్తు; పరీక్ష నవంబర్–డిసెంబర్.'),
          s('Selected students register on the National Scholarship Portal every year to get ₹12,000.', 'ఎంపికైనవారు ₹12,000 కోసం ప్రతి ఏటా జాతీయ స్కాలర్‌షిప్ పోర్టల్‌లో నమోదు చేయాలి.'),
        ],
      },
    ],
    costExample: s('NMMS winner: ₹12,000 × 4 years = ₹48,000 for Classes 9–12.', 'NMMS విజేత: 9–12 తరగతులకు ₹12,000 × 4 సంవత్సరాలు = ₹48,000.'),
    whereToApply: [s('navodaya.gov.in; aissee.nta.nic.in; KVS admission portal; your school (NMMS)', 'navodaya.gov.in; aissee.nta.nic.in; KVS ప్రవేశ పోర్టల్; మీ స్కూల్ (NMMS)')],
    timeline: s('Each is once a year — check the month above and set a reminder.', 'ప్రతిదీ ఏడాదికి ఒకసారి — పై నెల చూసి రిమైండర్ పెట్టుకోండి.'),
    tips: [s('Coaching centres are not required — free model papers are on the official sites.', 'కోచింగ్ సెంటర్లు అవసరం లేదు — అధికారిక సైట్లలో ఉచిత మోడల్ పేపర్లు ఉన్నాయి.')],
    links: [{ label: 'Navodaya Vidyalaya Samiti', url: 'https://navodaya.gov.in' }, { label: 'AISSEE (NTA)', url: 'https://aissee.nta.nic.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── DOG BITE
  {
    id: 'dog-bite-rabies',
    category: 'health',
    level: 'both',
    title: s('Dog or animal bite — free rabies injections and stray dog complaints', 'కుక్క లేదా జంతువు కాటు — ఉచిత రేబిస్ ఇంజెక్షన్లు, వీధి కుక్కల ఫిర్యాదులు'),
    summary: s(
      'Rabies is almost 100% fatal once symptoms start, but completely preventable with prompt treatment. After any bite or scratch from a dog, cat, monkey or other animal: wash the wound with soap and running water for 15 minutes and go to a government hospital / PHC the same day — anti-rabies vaccine is free there. Deep bites need rabies immunoglobulin too. Stray dog problems can be reported to the municipality / panchayat.',
      'లక్షణాలు మొదలైతే రేబిస్ దాదాపు 100% ప్రాణాంతకం, కానీ సకాల చికిత్సతో పూర్తిగా నివారించవచ్చు. కుక్క, పిల్లి, కోతి లేదా ఇతర జంతువు కాటు లేదా గీరు తర్వాత: 15 నిమిషాలు సబ్బు, పారే నీటితో గాయం కడిగి అదే రోజు ప్రభుత్వ ఆసుపత్రి / PHCకి వెళ్లండి — అక్కడ రేబిస్ టీకా ఉచితం. లోతైన కాట్లకు రేబిస్ ఇమ్యునోగ్లోబులిన్ కూడా కావాలి. వీధి కుక్కల సమస్యలను మున్సిపాలిటీ / పంచాయతీకి తెలియజేయవచ్చు.',
    ),
    keywords: ['dog bite', 'dog bit', 'rabies', 'anti rabies', 'arv', 'cat bite', 'monkey bite', 'stray dog', 'street dog', 'kukka karichindi', 'కుక్క కాటు', 'కుక్క కరిచింది', 'రేబిస్', 'వీధి కుక్కలు', 'కోతి కాటు'],
    whoCanApply: [s('Anyone bitten or scratched by an animal', 'జంతువు కరిచిన లేదా గీరిన ఎవరైనా')],
    documents: [s('None needed for treatment; keep the vaccination card given at the first dose', 'చికిత్సకు ఏదీ అవసరం లేదు; మొదటి డోసులో ఇచ్చే టీకా కార్డు దాచుకోండి')],
    fees: [fee(s('Anti-rabies vaccine and immunoglobulin at government hospitals', 'ప్రభుత్వ ఆసుపత్రుల్లో రేబిస్ టీకా, ఇమ్యునోగ్లోబులిన్'), s('Free', 'ఉచితం'))],
    steps: [
      s('Wash the wound for 15 minutes with soap and water.', '15 నిమిషాలు సబ్బు, నీటితో గాయం కడగండి.'),
      s('Same day: government hospital / PHC for the vaccine.', 'అదే రోజు: టీకాకు ప్రభుత్వ ఆసుపత్రి / PHC.'),
      s('Complete every dose on the dates given.', 'ఇచ్చిన తేదీల్లో అన్ని డోసులు పూర్తి చేయండి.'),
    ],
    stages: [
      {
        title: s('Immediately', 'వెంటనే'),
        steps: [
          s('Wash the wound under running water with soap for 15 minutes; then apply an antiseptic (povidone-iodine / spirit) if available.', 'పారే నీటిలో సబ్బుతో 15 నిమిషాలు గాయం కడగండి; ఉంటే యాంటీసెప్టిక్ (పోవిడోన్-అయోడిన్ / స్పిరిట్) రాయండి.'),
          s('Do NOT apply chilli, turmeric, oil, lime or herbs, and don\'t tightly bandage or stitch the wound.', 'కారం, పసుపు, నూనె, సున్నం, మూలికలు రాయకండి; గట్టిగా కట్టు కట్టకండి, కుట్లు వేయించకండి.'),
          s('Even a small scratch or a lick on broken skin needs the vaccine. Don\'t wait to "watch the dog".', 'చిన్న గీరు లేదా పగిలిన చర్మంపై నాకినా టీకా కావాలి. "కుక్కను గమనిద్దాం" అని ఆగకండి.'),
        ],
      },
      {
        title: s('At the hospital', 'ఆసుపత్రిలో'),
        steps: [
          s('Go to the PHC / CHC / area or district hospital the same day. The doctor grades the bite.', 'అదే రోజు PHC / CHC / ఏరియా లేదా జిల్లా ఆసుపత్రికి వెళ్లండి. డాక్టర్ కాటు తీవ్రత నిర్ణయిస్తారు.'),
          s('Anti-rabies vaccine is given on days 0, 3, 7 and 28 (or as the doctor schedules). Note the dates on the card and don\'t miss any dose.', 'రేబిస్ టీకా 0, 3, 7, 28 రోజుల్లో (లేదా డాక్టర్ షెడ్యూల్ ప్రకారం) ఇస్తారు. కార్డుపై తేదీలు రాసుకుని ఏ డోసూ మిస్ చేయకండి.'),
          s('Deep bites, bleeding wounds, bites on face / head / hands: rabies immunoglobulin is injected into and around the wound on the first day.', 'లోతైన కాట్లు, రక్తం వచ్చే గాయాలు, ముఖం / తల / చేతులపై కాట్లు: మొదటి రోజు గాయంలో, చుట్టూ రేబిస్ ఇమ్యునోగ్లోబులిన్ ఇంజెక్ట్ చేస్తారు.'),
          s('A tetanus injection may also be given.', 'టెటనస్ ఇంజెక్షన్ కూడా ఇవ్వవచ్చు.'),
        ],
      },
      {
        title: s('Stray dogs and pets', 'వీధి కుక్కలు, పెంపుడు జంతువులు'),
        steps: [
          s('Report aggressive or rabid-looking stray dogs and bite incidents to the municipality (ward secretariat / civic complaint) or panchayat — they run sterilisation and vaccination drives.', 'దూకుడుగా ఉన్న లేదా రేబిస్ లక్షణాలున్న వీధి కుక్కలు, కాటు సంఘటనలను మున్సిపాలిటీ (వార్డు సచివాలయం / పౌర ఫిర్యాదు) లేదా పంచాయతీకి తెలియజేయండి — వారు స్టెరిలైజేషన్, టీకా కార్యక్రమాలు నిర్వహిస్తారు.'),
          s('Vaccinate pet dogs and cats against rabies every year at the government veterinary hospital (often free) — or call 1962.', 'పెంపుడు కుక్కలు, పిల్లులకు ప్రతి ఏటా ప్రభుత్వ పశు వైద్యశాలలో రేబిస్ టీకా (తరచూ ఉచితం) — లేదా 1962కి కాల్.'),
        ],
      },
    ],
    costExample: s('Full course at a government hospital: free. At private hospitals the vaccine and immunoglobulin can cost thousands.', 'ప్రభుత్వ ఆసుపత్రిలో పూర్తి కోర్సు: ఉచితం. ప్రైవేట్ ఆసుపత్రుల్లో టీకా, ఇమ్యునోగ్లోబులిన్‌కు వేల రూపాయలు కావచ్చు.'),
    problems: [P(['Vaccine not available at the PHC.', 'PHCలో టీకా అందుబాటులో లేదు.'], ['Ask them to refer you to the nearest centre that has it — today. Complain on 104 if refused.', 'ఈరోజే అది ఉన్న దగ్గరి కేంద్రానికి రిఫర్ చేయమని అడగండి. నిరాకరిస్తే 104కి ఫిర్యాదు.'])],
    whereToApply: [s('Any PHC / government hospital; 104 for help', 'ఏ PHC / ప్రభుత్వ ఆసుపత్రి అయినా; సహాయానికి 104')],
    timeline: s('Start the vaccine the same day; course over 4 weeks.', 'అదే రోజు టీకా మొదలు; 4 వారాల్లో కోర్సు.'),
    tips: [s('Children often hide small bites — ask them, and teach them not to disturb dogs that are eating, sleeping or with puppies.', 'పిల్లలు చిన్న కాట్లను దాస్తారు — అడగండి; తింటున్న, నిద్రిస్తున్న, పిల్లలతో ఉన్న కుక్కలను కదిలించవద్దని నేర్పండి.')],
    links: [{ label: 'National Rabies Control Programme', url: 'https://ncdc.mohfw.gov.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── HOSPITAL COMPLAINTS
  {
    id: 'hospital-complaints',
    category: 'health',
    level: 'both',
    title: s('Hospital overcharging, medical negligence and your rights as a patient', 'ఆసుపత్రి అధిక వసూలు, వైద్య నిర్లక్ష్యం, రోగిగా మీ హక్కులు'),
    summary: s(
      'Patients have the right to know the treatment and its cost, to get an itemised bill and copies of their records, and to emergency care without paying first. If a scheme hospital (NTR Vaidya Seva / Ayushman) asks you for money, complain on 104. Overcharging or poor care at a private hospital can be complained to the District Medical & Health Officer; negligence can be taken to the Consumer Commission; overpriced medicines to the drug-price regulator (NPPA).',
      'రోగులకు చికిత్స, దాని ఖర్చు తెలుసుకునే హక్కు, వివరణాత్మక బిల్లు, రికార్డుల కాపీలు పొందే హక్కు, ముందుగా డబ్బు కట్టకుండా అత్యవసర చికిత్స హక్కు ఉన్నాయి. పథకం ఆసుపత్రి (NTR వైద్య సేవ / ఆయుష్మాన్) డబ్బు అడిగితే 104కి ఫిర్యాదు చేయండి. ప్రైవేట్ ఆసుపత్రిలో అధిక వసూలు లేదా పేలవ సేవపై జిల్లా వైద్య ఆరోగ్య అధికారికి; నిర్లక్ష్యంపై వినియోగదారుల కమిషన్‌కు; అధిక ధర మందులపై ఔషధ ధరల నియంత్రణ సంస్థ (NPPA)కు ఫిర్యాదు చేయవచ్చు.',
    ),
    keywords: ['hospital overcharging', 'hospital bill', 'medical negligence', 'wrong treatment', 'doctor complaint', 'hospital complaint', 'patient rights', 'case sheet', 'medical records', 'dmho', 'nppa', 'medicine overpriced', 'ఆసుపత్రి బిల్లు', 'వైద్య నిర్లక్ష్యం', 'డాక్టర్ ఫిర్యాదు', 'ఆసుపత్రి ఫిర్యాదు'],
    whoCanApply: [s('Patients and their families', 'రోగులు, వారి కుటుంబాలు')],
    documents: [s('Bills and receipts, prescriptions, reports, discharge summary, case sheet copy, scheme card / pre-authorisation number', 'బిల్లులు, రసీదులు, ప్రిస్క్రిప్షన్లు, రిపోర్టులు, డిశ్చార్జ్ సమ్మరీ, కేస్ షీట్ కాపీ, పథకం కార్డు / ప్రీ-ఆథరైజేషన్ నంబర్')],
    fees: [fee(s('104 / DMHO / NPPA complaints', '104 / DMHO / NPPA ఫిర్యాదులు'), s('Free', 'ఉచితం'))],
    steps: [
      s('Ask for an itemised bill and record copies in writing.', 'వివరణాత్మక బిల్లు, రికార్డుల కాపీలు రాతపూర్వకంగా అడగండి.'),
      s('Complain to the right authority with copies.', 'కాపీలతో సరైన అధికారికి ఫిర్యాదు.'),
    ],
    stages: [
      {
        title: s('Your rights in the hospital', 'ఆసుపత్రిలో మీ హక్కులు'),
        steps: [
          s('Emergency care (accident, delivery, heart attack) must start without demanding payment first; accident victims get cashless treatment up to ₹1.5 lakh at designated hospitals.', 'అత్యవసర చికిత్స (ప్రమాదం, ప్రసవం, గుండెపోటు) ముందుగా డబ్బు అడగకుండా ప్రారంభించాలి; ప్రమాద బాధితులకు నిర్దేశిత ఆసుపత్రుల్లో ₹1.5 లక్షల వరకు నగదు రహితం.'),
          s('Ask for an estimate before planned surgery, and an itemised final bill (each medicine, test, day charge).', 'ప్రణాళిక శస్త్రచికిత్సకు ముందు అంచనా, వివరణాత్మక తుది బిల్లు (ప్రతి మందు, పరీక్ష, రోజు ఛార్జీ) అడగండి.'),
          s('Ask in writing for copies of the case sheet and reports — doctors\' rules require them to be given within 72 hours of request.', 'కేస్ షీట్, రిపోర్టుల కాపీలు రాతపూర్వకంగా అడగండి — డాక్టర్ల నియమాల ప్రకారం అడిగిన 72 గంటల్లో ఇవ్వాలి.'),
          s('You can buy medicines from any pharmacy (including Jan Aushadhi) unless the hospital shows a real medical reason.', 'నిజమైన వైద్య కారణం చూపకపోతే ఏ ఫార్మసీ నుండైనా (జన ఔషధితో సహా) మందులు కొనవచ్చు.'),
        ],
      },
      {
        title: s('Scheme hospital asked for money', 'పథకం ఆసుపత్రి డబ్బు అడిగింది'),
        steps: [
          s('NTR Vaidya Seva / Ayushman covered treatment is cashless. If asked to pay, don\'t — call 104 or tell the Aarogya Mithra; keep receipts if you already paid.', 'NTR వైద్య సేవ / ఆయుష్మాన్ కవర్ చికిత్స నగదు రహితం. చెల్లించమంటే చెల్లించకండి — 104కి కాల్ లేదా ఆరోగ్య మిత్రకు చెప్పండి; ఇప్పటికే చెల్లిస్తే రసీదులు దాచుకోండి.'),
          s('The trust can order a refund and act against the hospital.', 'ట్రస్ట్ రీఫండ్ ఆదేశించి ఆసుపత్రిపై చర్య తీసుకోగలదు.'),
        ],
      },
      {
        title: s('Private hospital overcharging or poor care', 'ప్రైవేట్ ఆసుపత్రి అధిక వసూలు లేదా పేలవ సేవ'),
        steps: [
          s('Write to the hospital\'s administrator / grievance officer first; keep the acknowledgement.', 'ముందు ఆసుపత్రి అడ్మినిస్ట్రేటర్ / ఫిర్యాదుల అధికారికి రాయండి; అక్నాలెడ్జ్‌మెంట్ దాచుకోండి.'),
          s('Then complain to the District Medical & Health Officer (DMHO), who registers and regulates private hospitals — or on PGRS.', 'తర్వాత ప్రైవేట్ ఆసుపత్రులను నమోదు చేసి నియంత్రించే జిల్లా వైద్య ఆరోగ్య అధికారి (DMHO)కి — లేదా PGRSలో ఫిర్యాదు.'),
          s('Medicines sold above MRP / price ceiling: complain to NPPA (Pharma Jan Samadhan, toll-free 1800-111-255).', 'MRP / ధర పరిమితికి మించి మందులు అమ్మితే: NPPA (ఫార్మా జన్ సమాధాన్, టోల్-ఫ్రీ 1800-111-255)కి ఫిర్యాదు.'),
        ],
      },
      {
        title: s('Medical negligence', 'వైద్య నిర్లక్ష్యం'),
        steps: [
          s('Get all records first. A second doctor\'s written opinion on what went wrong helps a lot.', 'ముందుగా అన్ని రికార్డులు తీసుకోండి. ఏం తప్పు జరిగిందో మరో డాక్టర్ రాతపూర్వక అభిప్రాయం చాలా సహాయపడుతుంది.'),
          s('Compensation: file in the District Consumer Commission (e-jagriti.gov.in) within 2 years — see the Consumer complaint guide.', 'పరిహారం: 2 సంవత్సరాల్లో జిల్లా వినియోగదారుల కమిషన్‌లో (e-jagriti.gov.in) దాఖలు — వినియోగదారుల ఫిర్యాదు గైడ్ చూడండి.'),
          s('Professional misconduct by a doctor: complaint to the AP Medical Council. Gross negligence causing death can also be a police case.', 'డాక్టర్ వృత్తిపరమైన దుష్ప్రవర్తన: AP మెడికల్ కౌన్సిల్‌కు ఫిర్యాదు. మరణానికి కారణమైన తీవ్ర నిర్లక్ష్యం పోలీసు కేసు కూడా కావచ్చు.'),
        ],
      },
    ],
    costExample: s('Charged ₹18,000 at a scheme hospital for a covered surgery: complaint on 104 with receipts → refund ordered.', 'పథకం ఆసుపత్రిలో కవర్ అయిన శస్త్రచికిత్సకు ₹18,000 వసూలు: రసీదులతో 104లో ఫిర్యాదు → రీఫండ్ ఆదేశం.'),
    whereToApply: [s('104; DMHO office; e-jagriti.gov.in; NPPA 1800-111-255', '104; DMHO కార్యాలయం; e-jagriti.gov.in; NPPA 1800-111-255')],
    timeline: s('104 complaints: days to weeks. Consumer cases: months.', '104 ఫిర్యాదులు: రోజుల నుండి వారాలు. వినియోగదారుల కేసులు: నెలలు.'),
    tips: [s('Photograph every bill and prescription as you get it — originals get lost during long admissions.', 'ప్రతి బిల్లు, ప్రిస్క్రిప్షన్ అందినప్పుడే ఫోటో తీయండి — ఎక్కువ రోజుల అడ్మిషన్‌లో అసలు పత్రాలు పోతాయి.')],
    links: [{ label: 'NPPA — Pharma Jan Samadhan', url: 'https://www.nppaindia.nic.in' }, { label: 'e-Jagriti consumer cases', url: 'https://e-jagriti.gov.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── ADOPTION
  {
    id: 'adoption',
    category: 'law',
    level: 'central',
    title: s('Adopting a child legally (CARA)', 'చట్టబద్ధంగా పిల్లలను దత్తత తీసుకోవడం (CARA)'),
    summary: s(
      'Legal adoption in India is done only through CARA\'s online system and recognised adoption agencies (or, for relatives, through the court / District Magistrate process). Taking a child directly from a hospital, an agent or a family "informally" is not legal and can be a crime. Prospective parents register online, get a home study, wait for a referral, and the District Magistrate issues the adoption order.',
      'భారత్‌లో చట్టబద్ధ దత్తత CARA ఆన్‌లైన్ వ్యవస్థ, గుర్తింపు పొందిన దత్తత సంస్థల ద్వారానే (బంధువుల విషయంలో కోర్టు / జిల్లా మేజిస్ట్రేట్ ప్రక్రియ ద్వారా). ఆసుపత్రి, ఏజెంట్ లేదా కుటుంబం నుండి "అనధికారికంగా" నేరుగా పిల్లలను తీసుకోవడం చట్టబద్ధం కాదు, నేరం కావచ్చు. దత్తత తీసుకోవాలనుకునే తల్లిదండ్రులు ఆన్‌లైన్‌లో నమోదు చేసుకుని, హోమ్ స్టడీ, రిఫరల్ కోసం వేచి ఉంటారు, జిల్లా మేజిస్ట్రేట్ దత్తత ఉత్తర్వు ఇస్తారు.',
    ),
    keywords: ['adoption', 'adopt', 'adopt child', 'cara', 'child adoption', 'dattata', 'దత్తత', 'పిల్లలను దత్తత'],
    whoCanApply: [
      s('Married couples (at least 2 years of stable marriage, both consent) and single persons — a single man cannot adopt a girl', 'వివాహిత దంపతులు (కనీసం 2 సంవత్సరాల స్థిర వివాహం, ఇద్దరి అంగీకారం), ఒంటరి వ్యక్తులు — ఒంటరి పురుషుడు అమ్మాయిని దత్తత తీసుకోలేరు'),
      s('Age limits depend on the child\'s age (stated on the CARA portal)', 'వయస్సు పరిమితులు పిల్లల వయస్సును బట్టి (CARA పోర్టల్‌లో)'),
    ],
    documents: [s('Photos, PAN, Aadhaar / ID, birth proof, address proof, income proof, marriage certificate, medical fitness certificates, reference letters', 'ఫోటోలు, PAN, ఆధార్ / ఐడీ, పుట్టిన తేదీ రుజువు, చిరునామా రుజువు, ఆదాయ రుజువు, వివాహ ధృవీకరణ, వైద్య ఫిట్‌నెస్ సర్టిఫికెట్లు, సిఫారసు లేఖలు')],
    fees: [fee(s('Registration, home study, adoption fee', 'నమోదు, హోమ్ స్టడీ, దత్తత ఫీజు'), s('Fixed by CARA and shown on the portal — pay only the official fees', 'CARA నిర్ణయించినవి, పోర్టల్‌లో చూపిస్తారు — అధికారిక ఫీజులు మాత్రమే చెల్లించండి'))],
    steps: [
      s('Register on cara.wcd.gov.in.', 'cara.wcd.gov.inలో నమోదు.'),
      s('Home study by an agency; wait for referral.', 'సంస్థ ద్వారా హోమ్ స్టడీ; రిఫరల్ కోసం వేచి ఉండండి.'),
      s('Accept, foster care, DM adoption order, follow-ups.', 'అంగీకారం, ఫాస్టర్ కేర్, DM దత్తత ఉత్తర్వు, ఫాలో-అప్‌లు.'),
    ],
    stages: [
      {
        title: s('Register', 'నమోదు'),
        steps: [
          s('cara.wcd.gov.in → "Prospective Adoptive Parents" → register → choose in-country adoption, preferred states and the child\'s age / gender preference.', 'cara.wcd.gov.in → "Prospective Adoptive Parents" → నమోదు → దేశీయ దత్తత, ఇష్టమైన రాష్ట్రాలు, పిల్లల వయస్సు / లింగ ప్రాధాన్యత ఎంచుకోండి.'),
          s('Upload documents and pay the registration fee; your seniority starts from the registration date.', 'పత్రాలు అప్‌లోడ్ చేసి నమోదు ఫీజు చెల్లించండి; నమోదు తేదీ నుండి మీ సీనియారిటీ.'),
        ],
      },
      {
        title: s('Home study and referral', 'హోమ్ స్టడీ, రిఫరల్'),
        steps: [
          s('A social worker from a Specialised Adoption Agency visits and prepares the home study report (valid for a few years).', 'ప్రత్యేక దత్తత సంస్థ నుండి సామాజిక కార్యకర్త వచ్చి హోమ్ స్టడీ నివేదిక తయారు చేస్తారు (కొన్ని సంవత్సరాలు చెల్లుతుంది).'),
          s('When your turn comes, the portal refers a child\'s profile and medical report; you can reserve within the time allowed, then meet the child at the agency.', 'మీ వంతు వచ్చినప్పుడు పోర్టల్ పిల్లల ప్రొఫైల్, వైద్య నివేదిక పంపుతుంది; అనుమతించిన సమయంలో రిజర్వ్ చేసి సంస్థలో పిల్లలను కలవండి.'),
          s('Waiting time depends on the age you choose — older children and children with special needs are placed much faster.', 'నిరీక్షణ సమయం మీరు ఎంచుకున్న వయస్సును బట్టి — పెద్ద పిల్లలు, ప్రత్యేక అవసరాలున్న పిల్లలు చాలా వేగంగా.'),
        ],
      },
      {
        title: s('Adoption order and after', 'దత్తత ఉత్తర్వు, తర్వాత'),
        steps: [
          s('Pre-adoption foster care: the child comes home while the agency files the application before the District Magistrate.', 'దత్తతకు ముందు ఫాస్టర్ కేర్: సంస్థ జిల్లా మేజిస్ట్రేట్ ముందు దరఖాస్తు వేస్తుండగా పిల్లలు ఇంటికి వస్తారు.'),
          s('The District Magistrate issues the adoption order; a new birth certificate is issued with the adoptive parents\' names.', 'జిల్లా మేజిస్ట్రేట్ దత్తత ఉత్తర్వు ఇస్తారు; దత్తత తల్లిదండ్రుల పేర్లతో కొత్త జనన ధృవీకరణ జారీ.'),
          s('Agency does post-adoption follow-up visits for 2 years.', 'సంస్థ 2 సంవత్సరాలు దత్తత తర్వాత ఫాలో-అప్ సందర్శనలు చేస్తుంది.'),
        ],
      },
    ],
    costExample: s('Only the CARA-fixed fees — no "donations" or agent charges.', 'CARA నిర్ణయించిన ఫీజులే — "విరాళాలు" లేదా ఏజెంట్ ఛార్జీలు లేవు.'),
    problems: [P(['Someone is offering a baby for money.', 'ఎవరో డబ్బుకు బిడ్డను ఇస్తామంటున్నారు.'], ['That is child trafficking — refuse and report to 1098 or the police.', 'అది పిల్లల అక్రమ రవాణా — నిరాకరించి 1098 లేదా పోలీసులకు తెలియజేయండి.'])],
    whereToApply: [s('cara.wcd.gov.in; District Child Protection Unit; Specialised Adoption Agencies', 'cara.wcd.gov.in; జిల్లా బాలల రక్షణ విభాగం; ప్రత్యేక దత్తత సంస్థలు')],
    timeline: s('From months to a few years depending on preferences.', 'ప్రాధాన్యతలను బట్టి నెలల నుండి కొన్ని సంవత్సరాలు.'),
    tips: [s('Adopting a relative\'s child also needs the legal process — talk to the District Child Protection Unit.', 'బంధువుల పిల్లలను దత్తత తీసుకోవడానికి కూడా చట్ట ప్రక్రియ కావాలి — జిల్లా బాలల రక్షణ విభాగంతో మాట్లాడండి.')],
    links: [{ label: 'CARA', url: 'https://cara.wcd.gov.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── PMAY URBAN
  {
    id: 'pmay-urban',
    category: 'welfare',
    level: 'central',
    title: s('PMAY-Urban 2.0 — help to build or buy a house in towns, home-loan interest subsidy', 'PMAY-అర్బన్ 2.0 — పట్టణాల్లో ఇల్లు కట్టడానికి / కొనడానికి సహాయం, గృహ రుణ వడ్డీ సబ్సిడీ'),
    summary: s(
      'Families in towns and cities with no pucca house anywhere in India and income up to ₹9 lakh a year can get help under PMAY-Urban 2.0: about ₹2.5 lakh to build on their own plot, a subsidised house in an affordable project, or an interest subsidy of up to ₹1.8 lakh on a home loan. In villages, the rural housing scheme (PMAY-G) and AP\'s housing scheme apply instead.',
      'దేశంలో ఎక్కడా పక్కా ఇల్లు లేని, ఏడాదికి ₹9 లక్షల వరకు ఆదాయం ఉన్న పట్టణ కుటుంబాలు PMAY-అర్బన్ 2.0 కింద సహాయం పొందవచ్చు: సొంత ప్లాట్‌పై కట్టడానికి సుమారు ₹2.5 లక్షలు, తక్కువ ధర ప్రాజెక్టులో సబ్సిడీ ఇల్లు, లేదా గృహ రుణంపై ₹1.8 లక్షల వరకు వడ్డీ సబ్సిడీ. గ్రామాల్లో గ్రామీణ గృహ పథకం (PMAY-G), AP గృహ పథకం వర్తిస్తాయి.',
    ),
    keywords: ['pmay', 'pmay urban', 'pradhan mantri awas', 'housing subsidy', 'home loan subsidy', 'interest subsidy', 'clss', 'house in town', 'affordable housing', 'ఇల్లు సబ్సిడీ', 'ప్రధాన మంత్రి ఆవాస్', 'గృహ రుణ సబ్సిడీ'],
    whoCanApply: [
      s('Urban families (husband, wife, unmarried children) with no pucca house in any family member\'s name anywhere in India', 'దేశంలో ఎక్కడా కుటుంబ సభ్యుల పేరుపై పక్కా ఇల్లు లేని పట్టణ కుటుంబాలు (భర్త, భార్య, అవివాహిత పిల్లలు)'),
      s('Income: EWS up to ₹3 lakh, LIG ₹3–6 lakh, MIG ₹6–9 lakh a year', 'ఆదాయం: EWS ₹3 లక్షల వరకు, LIG ₹3–6 లక్షలు, MIG ₹6–9 లక్షలు ఏడాదికి'),
      s('Not having taken a housing benefit under another government scheme in the last 20 years', 'గత 20 సంవత్సరాల్లో ఇతర ప్రభుత్వ పథకం కింద గృహ ప్రయోజనం పొందకపోవడం'),
    ],
    documents: [s('Aadhaar of all members, income certificate, bank account, land document (for own-plot construction), self-declaration of no pucca house', 'సభ్యులందరి ఆధార్, ఆదాయ ధృవీకరణ, బ్యాంక్ ఖాతా, భూమి పత్రం (సొంత ప్లాట్ నిర్మాణానికి), పక్కా ఇల్లు లేదని స్వీయ ప్రకటన')],
    fees: [
      fee(s('Build on own plot (BLC) / affordable house (AHP)', 'సొంత ప్లాట్‌పై నిర్మాణం (BLC) / తక్కువ ధర ఇల్లు (AHP)'), s('About ₹2.5 lakh assistance per house (centre + state), EWS', 'ఒక్కో ఇంటికి సుమారు ₹2.5 లక్షల సహాయం (కేంద్రం + రాష్ట్రం), EWS')),
      fee(s('Interest subsidy (ISS)', 'వడ్డీ సబ్సిడీ (ISS)'), s('Loans up to ₹25 lakh for houses up to ₹35 lakh: 4% subsidy on the first ₹8 lakh — up to ₹1.8 lakh, paid in yearly instalments', '₹35 లక్షల వరకు ఇళ్లకు ₹25 లక్షల వరకు రుణాలు: మొదటి ₹8 లక్షలపై 4% సబ్సిడీ — ₹1.8 లక్షల వరకు, వార్షిక వాయిదాల్లో')),
    ],
    steps: [
      s('Apply on pmay-urban.gov.in or through the ward secretariat / municipality.', 'pmay-urban.gov.inలో లేదా వార్డు సచివాలయం / మున్సిపాలిటీ ద్వారా దరఖాస్తు.'),
      s('Verification; then construction instalments or loan subsidy.', 'ధృవీకరణ; తర్వాత నిర్మాణ వాయిదాలు లేదా రుణ సబ్సిడీ.'),
    ],
    stages: [
      {
        title: s('Choose the right part (vertical)', 'సరైన భాగం (వర్టికల్) ఎంచుకోవడం'),
        steps: [
          s('BLC — you own a plot: get money in stages to build your house (EWS).', 'BLC — మీకు ప్లాట్ ఉంది: ఇల్లు కట్టడానికి దశలవారీగా డబ్బు (EWS).'),
          s('AHP — buy a house in a government-supported affordable housing project at a lower price.', 'AHP — ప్రభుత్వ సహాయ తక్కువ ధర గృహ ప్రాజెక్టులో తక్కువ ధరకు ఇల్లు కొనండి.'),
          s('ISS — buying / building with a bank home loan: interest subsidy credited to your loan account.', 'ISS — బ్యాంక్ గృహ రుణంతో కొనడం / కట్టడం: వడ్డీ సబ్సిడీ మీ రుణ ఖాతాకు జమ.'),
          s('ARH — rental housing for migrants and workers.', 'ARH — వలసదారులు, కార్మికులకు అద్దె ఇళ్లు.'),
        ],
      },
      {
        title: s('Apply', 'దరఖాస్తు'),
        steps: [
          s('pmay-urban.gov.in → "Apply for PMAY-U 2.0" → check eligibility → Aadhaar OTP → fill family, income, address, bank and chosen vertical → submit. Or ask the ward secretariat / municipality housing wing to apply for you.', 'pmay-urban.gov.in → "Apply for PMAY-U 2.0" → అర్హత చూడండి → ఆధార్ OTP → కుటుంబం, ఆదాయం, చిరునామా, బ్యాంక్, ఎంచుకున్న వర్టికల్ నింపి → సబ్మిట్. లేదా వార్డు సచివాలయం / మున్సిపాలిటీ గృహ విభాగాన్ని దరఖాస్తు చేయమనండి.'),
          s('For ISS: apply for the home loan with a bank / housing finance company that is a primary lending institution under PMAY-U and tell them you are claiming ISS.', 'ISSకు: PMAY-U కింద ప్రాథమిక రుణ సంస్థగా ఉన్న బ్యాంక్ / హౌసింగ్ ఫైనాన్స్ కంపెనీలో గృహ రుణానికి దరఖాస్తు చేసి ISS కోరుతున్నట్లు చెప్పండి.'),
        ],
      },
      {
        title: s('After approval', 'ఆమోదం తర్వాత'),
        steps: [
          s('BLC: build in stages; officials geo-tag photos at each stage; money comes to your bank in instalments.', 'BLC: దశలవారీగా నిర్మించండి; ప్రతి దశలో అధికారులు ఫోటోలను జియో-ట్యాగ్ చేస్తారు; వాయిదాల్లో డబ్బు బ్యాంకుకు.'),
          s('The house should be in the woman\'s name or joint name where possible.', 'వీలైనచోట ఇల్లు మహిళ పేరుపై లేదా ఉమ్మడి పేరుపై ఉండాలి.'),
        ],
      },
    ],
    costExample: s('LIG family taking a ₹20 lakh home loan for a ₹30 lakh flat: ISS subsidy up to ₹1.8 lakh credited over 5 years — lower EMI / loan.', '₹30 లక్షల ఫ్లాట్‌కు ₹20 లక్షల గృహ రుణం తీసుకునే LIG కుటుంబం: 5 సంవత్సరాల్లో ₹1.8 లక్షల వరకు ISS సబ్సిడీ జమ — తక్కువ EMI / రుణం.'),
    problems: [P(['Agent asks money to "get the house sanctioned".', '"ఇల్లు మంజూరు చేయిస్తా" అని ఏజెంట్ డబ్బు అడుగుతున్నాడు.'], ['Applications are free. Report to ACB 14400 or PGRS.', 'దరఖాస్తులు ఉచితం. ACB 14400 లేదా PGRSకి తెలియజేయండి.'])],
    afterwards: [s('Village family? See the Housing scheme guide (PMAY-G and AP housing).', 'గ్రామ కుటుంబమా? గృహ పథకం గైడ్ చూడండి (PMAY-G, AP గృహ పథకం).')],
    whereToApply: [s('pmay-urban.gov.in; ward secretariat / municipality; banks for ISS', 'pmay-urban.gov.in; వార్డు సచివాలయం / మున్సిపాలిటీ; ISSకు బ్యాంకులు')],
    timeline: s('Verification in weeks to months; BLC money in stages during construction.', 'ధృవీకరణ వారాల నుండి నెలల్లో; BLC డబ్బు నిర్మాణ సమయంలో దశలవారీగా.'),
    tips: [s('Check the scheme status with your application number on the portal before paying anyone anything.', 'ఎవరికైనా ఏదైనా చెల్లించే ముందు పోర్టల్‌లో అప్లికేషన్ నంబర్‌తో స్టేటస్ చూడండి.')],
    links: [{ label: 'PMAY-Urban', url: 'https://pmay-urban.gov.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── SHAKTI
  {
    id: 'shakti-women-safety',
    category: 'safety',
    level: 'state',
    title: s('Shakti app and Shakti teams — AP Police help for women', 'శక్తి యాప్, శక్తి టీమ్‌లు — మహిళలకు AP పోలీసు సహాయం'),
    summary: s(
      'AP Police\'s Shakti app gives women an SOS button that alerts police with your location, a safe-travel option, and ways to report harassment, family problems and missing children. Shakti teams of women police patrol bus stands, colleges and crowded places. In any danger you can also call 112 or 181.',
      'AP పోలీసు శక్తి యాప్ మహిళలకు మీ లొకేషన్‌తో పోలీసులకు సమాచారం ఇచ్చే SOS బటన్, సురక్షిత ప్రయాణ ఆప్షన్, వేధింపులు, కుటుంబ సమస్యలు, తప్పిపోయిన పిల్లలను రిపోర్ట్ చేసే మార్గాలు ఇస్తుంది. మహిళా పోలీసుల శక్తి టీమ్‌లు బస్ స్టాండ్‌లు, కాలేజీలు, రద్దీ ప్రదేశాల్లో గస్తీ చేస్తాయి. ఏ ప్రమాదంలోనైనా 112 లేదా 181కి కూడా కాల్ చేయవచ్చు.',
    ),
    keywords: ['shakti', 'shakti app', 'shakti team', 'women safety app', 'sos', 'eve teasing', 'harassment bus', 'safe travel', 'శక్తి యాప్', 'శక్తి టీమ్', 'మహిళా భద్రత', 'SOS'],
    whoCanApply: [s('Any woman or girl in AP (and family members on her behalf)', 'APలో ఏ మహిళ లేదా అమ్మాయి అయినా (ఆమె తరఫున కుటుంబ సభ్యులు)')],
    documents: [s('A smartphone with location on; mobile number for registration', 'లొకేషన్ ఆన్‌లో ఉన్న స్మార్ట్‌ఫోన్; నమోదుకు మొబైల్ నంబర్')],
    fees: [fee(s('App and help', 'యాప్, సహాయం'), s('Free', 'ఉచితం'))],
    steps: [
      s('Install the official Shakti app (AP Police) and register.', 'అధికారిక శక్తి యాప్ (AP పోలీస్) ఇన్‌స్టాల్ చేసి నమోదు.'),
      s('Add emergency contacts; learn where the SOS button is.', 'అత్యవసర కాంటాక్ట్‌లు చేర్చండి; SOS బటన్ ఎక్కడో తెలుసుకోండి.'),
    ],
    stages: [
      {
        title: s('Set up now (5 minutes)', 'ఇప్పుడే సెటప్ (5 నిమిషాలు)'),
        steps: [
          s('Install "Shakti" published by AP Police from the Play Store / App Store — check the publisher name.', 'Play Store / App Store నుండి AP పోలీస్ ప్రచురించిన "Shakti" ఇన్‌స్టాల్ చేయండి — పబ్లిషర్ పేరు చూడండి.'),
          s('Register with your mobile number and OTP; allow location permission.', 'మీ మొబైల్ నంబర్, OTPతో నమోదు; లొకేషన్ అనుమతి ఇవ్వండి.'),
          s('Add 2–3 trusted emergency contacts.', '2–3 నమ్మకమైన అత్యవసర కాంటాక్ట్‌లు చేర్చండి.'),
        ],
      },
      {
        title: s('When you need help', 'సహాయం కావాలంటే'),
        steps: [
          s('Press SOS — police control room gets your location and calls you back; nearby patrol is sent.', 'SOS నొక్కండి — పోలీస్ కంట్రోల్ రూమ్‌కు మీ లొకేషన్ వెళ్లి తిరిగి కాల్ చేస్తారు; దగ్గరి పెట్రోల్ పంపుతారు.'),
          s('Travelling late or alone: use the safe-travel option so your route is watched.', 'రాత్రి లేదా ఒంటరిగా ప్రయాణం: మీ మార్గం గమనించేలా సేఫ్-ట్రావెల్ ఆప్షన్ వాడండి.'),
          s('Harassment on the street, bus or online: report through the app with details / photos; for serious cases also file an FIR.', 'వీధి, బస్సు లేదా ఆన్‌లైన్ వేధింపులు: వివరాలు / ఫోటోలతో యాప్‌లో రిపోర్ట్; తీవ్ర సందర్భాల్లో FIR కూడా వేయండి.'),
          s('No smartphone? Call 112 (police) or 181 (women helpline), or approach a Shakti team / police help desk at the bus stand.', 'స్మార్ట్‌ఫోన్ లేదా? 112 (పోలీస్) లేదా 181 (మహిళా హెల్ప్‌లైన్)కి కాల్ చేయండి, లేదా బస్ స్టాండ్‌లో శక్తి టీమ్ / పోలీస్ హెల్ప్ డెస్క్‌ను సంప్రదించండి.'),
        ],
      },
    ],
    costExample: s('Free.', 'ఉచితం.'),
    whereToApply: [s('Shakti app (AP Police); 112; 181', 'శక్తి యాప్ (AP పోలీస్); 112; 181')],
    timeline: s('Immediate.', 'వెంటనే.'),
    tips: [s('Set it up on your daughter\'s / mother\'s phone too, and practise once so they know where SOS is.', 'మీ కూతురు / తల్లి ఫోన్‌లో కూడా సెటప్ చేసి, SOS ఎక్కడో తెలిసేలా ఒకసారి ప్రాక్టీస్ చేయించండి.')],
    links: [{ label: 'AP Police', url: 'https://citizen.appolice.gov.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── SOIL HEALTH & SOLAR PUMP
  {
    id: 'soil-health-solar-pump',
    category: 'farmers',
    level: 'both',
    title: s('Free soil testing (Soil Health Card), fertiliser booking and solar pumps (PM-KUSUM)', 'ఉచిత మట్టి పరీక్ష (సాయిల్ హెల్త్ కార్డు), ఎరువుల బుకింగ్, సోలార్ పంపులు (PM-KUSUM)'),
    summary: s(
      'A free soil test tells you exactly which nutrients your field lacks, so you buy only the fertiliser you need — often saving thousands per season. Fertilisers are sold at subsidised prices only with Aadhaar authentication at the RSK / dealer. Under PM-KUSUM, farmers can get standalone solar pumps or solarise grid pumps with large subsidies when the state opens applications.',
      'ఉచిత మట్టి పరీక్ష మీ పొలంలో ఏ పోషకాలు తక్కువో ఖచ్చితంగా చెబుతుంది, కాబట్టి అవసరమైన ఎరువులే కొంటారు — తరచూ ప్రతి సీజన్‌కు వేల రూపాయలు ఆదా. ఎరువులు RSK / డీలర్ వద్ద ఆధార్ ధృవీకరణతోనే సబ్సిడీ ధరకు అమ్ముతారు. PM-KUSUM కింద రాష్ట్రం దరఖాస్తులు తెరిచినప్పుడు రైతులు పెద్ద సబ్సిడీలతో స్వతంత్ర సోలార్ పంపులు పొందవచ్చు లేదా గ్రిడ్ పంపులను సోలార్‌గా మార్చుకోవచ్చు.',
    ),
    keywords: ['soil test', 'soil health card', 'mitti pariksha', 'fertiliser', 'fertilizer', 'urea', 'dap', 'pm kusum', 'solar pump', 'kusum', 'మట్టి పరీక్ష', 'సాయిల్ హెల్త్', 'ఎరువులు', 'యూరియా', 'సోలార్ పంపు'],
    whoCanApply: [s('Farmers (owners; tenants for soil testing and fertiliser)', 'రైతులు (యజమానులు; మట్టి పరీక్ష, ఎరువులకు కౌలుదారులు)')],
    documents: [s('Aadhaar, 1B / passbook or CCRC, survey number, bank account', 'ఆధార్, 1B / పాస్‌బుక్ లేదా CCRC, సర్వే నంబర్, బ్యాంక్ ఖాతా')],
    fees: [
      fee(s('Soil testing and card', 'మట్టి పరీక్ష, కార్డు'), s('Free', 'ఉచితం')),
      fee(s('Solar pump (PM-KUSUM)', 'సోలార్ పంపు (PM-KUSUM)'), s('Government pays most of the cost; farmer\'s share (often around 10% upfront, rest by bank loan) as per the state\'s notification', 'ఖర్చులో ఎక్కువ భాగం ప్రభుత్వం; రైతు వాటా (తరచూ సుమారు 10% ముందుగా, మిగతాది బ్యాంక్ రుణం) రాష్ట్ర నోటిఫికేషన్ ప్రకారం')),
    ],
    steps: [
      s('Ask the Agriculture Assistant at the RSK for soil sampling.', 'మట్టి నమూనా కోసం RSKలో వ్యవసాయ సహాయకుడిని అడగండి.'),
      s('Buy fertiliser per the card\'s advice with Aadhaar.', 'కార్డు సలహా ప్రకారం ఆధార్‌తో ఎరువులు కొనండి.'),
      s('Ask about PM-KUSUM at the RSK / DISCOM / NREDCAP.', 'PM-KUSUM గురించి RSK / DISCOM / NREDCAPలో అడగండి.'),
    ],
    stages: [
      {
        title: s('Soil test', 'మట్టి పరీక్ష'),
        steps: [
          s('Before sowing (or after harvest), ask the RSK to take a sample, or take it yourself as they show: V-shaped cuts 15 cm deep from 8–10 spots in the field, mixed, about ½ kg in a cloth bag with your name and survey number.', 'విత్తే ముందు (లేదా కోత తర్వాత) నమూనా తీయమని RSKని అడగండి, లేదా వారు చూపినట్లు మీరే తీయండి: పొలంలో 8–10 చోట్ల 15 సెం.మీ లోతు V-ఆకార కోతలు, కలిపి, సుమారు ½ కిలో గుడ్డ సంచిలో మీ పేరు, సర్వే నంబర్‌తో.'),
          s('Results come as a Soil Health Card (also on soilhealth.dac.gov.in) with recommended doses of urea, DAP, potash and micronutrients for your crop.', 'ఫలితాలు సాయిల్ హెల్త్ కార్డుగా (soilhealth.dac.gov.inలో కూడా) మీ పంటకు యూరియా, DAP, పొటాష్, సూక్ష్మపోషకాల సిఫారసు మోతాదులతో వస్తాయి.'),
        ],
      },
      {
        title: s('Fertiliser', 'ఎరువులు'),
        steps: [
          s('Buy at the RSK / licensed dealer; your Aadhaar is authenticated on the PoS machine and the bill shows the subsidised price.', 'RSK / లైసెన్స్ డీలర్ వద్ద కొనండి; PoS యంత్రంలో మీ ఆధార్ ధృవీకరణ, బిల్లులో సబ్సిడీ ధర.'),
          s('Never pay more than the MRP printed on the bag; complain to the Agriculture Officer / PGRS about black-marketing or forced bundling of other products.', 'సంచిపై ముద్రించిన MRP కంటే ఎక్కువ చెల్లించకండి; బ్లాక్ మార్కెటింగ్ లేదా ఇతర ఉత్పత్తులు బలవంతంగా కలిపి అమ్మడంపై వ్యవసాయ అధికారి / PGRSకి ఫిర్యాదు.'),
        ],
      },
      {
        title: s('Solar pump (PM-KUSUM)', 'సోలార్ పంపు (PM-KUSUM)'),
        steps: [
          s('Ask at the RSK / DISCOM / NREDCAP (AP\'s renewable energy agency) whether applications are open this year and the farmer\'s share.', 'ఈ ఏడాది దరఖాస్తులు తెరిచి ఉన్నాయా, రైతు వాటా ఎంత అని RSK / DISCOM / NREDCAP (AP పునరుత్పాదక శక్తి సంస్థ)లో అడగండి.'),
          s('Apply with land and water-source details; pay your share; an empanelled vendor installs the pump with warranty and maintenance.', 'భూమి, నీటి వనరు వివరాలతో దరఖాస్తు; మీ వాటా చెల్లించండి; ఎంపానెల్డ్ వెండర్ వారంటీ, నిర్వహణతో పంపు అమర్చుతారు.'),
          s('Grid-connected pump owners may be able to sell extra solar power to the DISCOM under the solarisation component.', 'గ్రిడ్ పంపు యజమానులు సోలరైజేషన్ భాగం కింద అదనపు సౌర విద్యుత్‌ను DISCOMకి అమ్మగలరు.'),
        ],
      },
    ],
    costExample: s('Soil card shows enough potash: skip one potash application — saving a bag or two per acre each season.', 'సాయిల్ కార్డులో సరిపడా పొటాష్ ఉందని చూపిస్తే: ఒక పొటాష్ వేత మానండి — ప్రతి సీజన్ ఎకరానికి ఒకటి-రెండు సంచులు ఆదా.'),
    whereToApply: [s('Rythu Seva Kendra (RSK); soilhealth.dac.gov.in; DISCOM / NREDCAP for solar pumps', 'రైతు సేవా కేంద్రం (RSK); soilhealth.dac.gov.in; సోలార్ పంపులకు DISCOM / NREDCAP')],
    timeline: s('Soil card: a few weeks after sampling. Solar pumps: depends on the year\'s target.', 'సాయిల్ కార్డు: నమూనా తర్వాత కొన్ని వారాలు. సోలార్ పంపులు: ఆ ఏడాది లక్ష్యాన్ని బట్టి.'),
    tips: [s('Test every 2–3 years, and after changing crops.', 'ప్రతి 2–3 సంవత్సరాలకు, పంటలు మార్చిన తర్వాత పరీక్ష చేయించండి.')],
    links: [{ label: 'Soil Health Card portal', url: 'https://soilhealth.dac.gov.in' }, { label: 'PM-KUSUM (MNRE)', url: 'https://pmkusum.mnre.gov.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── FPO & NATURAL FARMING
  {
    id: 'fpo-natural-farming',
    category: 'farmers',
    level: 'both',
    title: s('Farmer groups (FPO) and natural farming support (APCNF)', 'రైతు సంఘాలు (FPO), ప్రకృతి వ్యవసాయ సహాయం (APCNF)'),
    summary: s(
      'Small farmers get better prices and cheaper inputs when they sell and buy together. A Farmer Producer Organisation (FPO) is a registered company or cooperative owned by farmers; the central 10,000 FPO scheme gives equity grants, management support and loan guarantees through agencies like NABARD and SFAC. AP\'s natural farming programme (APCNF, run by Rythu Sadhikara Samstha) gives free training and support to farm without chemicals.',
      'చిన్న రైతులు కలిసి అమ్మితే, కొంటే మంచి ధరలు, చౌక ఇన్‌పుట్లు పొందుతారు. రైతు ఉత్పత్తిదారుల సంస్థ (FPO) రైతుల యాజమాన్యంలోని నమోదిత కంపెనీ లేదా సహకార సంఘం; కేంద్ర 10,000 FPO పథకం NABARD, SFAC వంటి సంస్థల ద్వారా ఈక్విటీ గ్రాంట్లు, నిర్వహణ సహాయం, రుణ హామీలు ఇస్తుంది. AP ప్రకృతి వ్యవసాయ కార్యక్రమం (APCNF, రైతు సాధికార సంస్థ) రసాయనాలు లేకుండా సాగుకు ఉచిత శిక్షణ, సహాయం ఇస్తుంది.',
    ),
    keywords: ['fpo', 'farmer producer organisation', 'farmer company', 'farmers group', 'natural farming', 'apcnf', 'zero budget', 'organic farming', 'rythu sadhikara', 'రైతు ఉత్పత్తిదారుల సంస్థ', 'ప్రకృతి వ్యవసాయం', 'సేంద్రియ వ్యవసాయం'],
    whoCanApply: [s('Groups of farmers (FPO: usually 300+ members in plains); any farmer for natural farming', 'రైతుల సమూహాలు (FPO: మైదాన ప్రాంతాల్లో సాధారణంగా 300+ సభ్యులు); ప్రకృతి వ్యవసాయానికి ఏ రైతైనా')],
    documents: [s('Members\' Aadhaar, land records, bank details; for registration: company / cooperative documents', 'సభ్యుల ఆధార్, భూ రికార్డులు, బ్యాంక్ వివరాలు; నమోదుకు: కంపెనీ / సహకార పత్రాలు')],
    fees: [fee(s('FPO equity grant', 'FPO ఈక్విటీ గ్రాంట్'), s('Matching grant of up to ₹2,000 per member (max ₹15 lakh per FPO) under the central scheme', 'కేంద్ర పథకం కింద సభ్యునికి ₹2,000 వరకు సరిపోలే గ్రాంట్ (FPOకి గరిష్టం ₹15 లక్షలు)'))],
    steps: [
      s('Talk to the district agriculture office / NABARD about forming or joining an FPO.', 'FPO ఏర్పాటు లేదా చేరడం గురించి జిల్లా వ్యవసాయ కార్యాలయం / NABARDతో మాట్లాడండి.'),
      s('For natural farming, contact the natural farming staff at your RSK.', 'ప్రకృతి వ్యవసాయానికి మీ RSKలోని ప్రకృతి వ్యవసాయ సిబ్బందిని సంప్రదించండి.'),
    ],
    stages: [
      {
        title: s('Join or form an FPO', 'FPOలో చేరడం లేదా ఏర్పాటు'),
        steps: [
          s('Ask the Agriculture / Horticulture officer which FPOs work in your mandal and what they do (input shop, procurement, processing). Buy a share to become a member.', 'మీ మండలంలో ఏ FPOలు పనిచేస్తున్నాయి, అవి ఏం చేస్తాయి (ఇన్‌పుట్ దుకాణం, కొనుగోలు, ప్రాసెసింగ్) అని వ్యవసాయ / ఉద్యాన అధికారిని అడగండి. సభ్యులు కావడానికి షేర్ కొనండి.'),
          s('New FPO: under the 10,000 FPO scheme, a Cluster-Based Business Organisation hired by NABARD / SFAC / NCDC helps mobilise farmers, register the company / cooperative and prepare a business plan.', 'కొత్త FPO: 10,000 FPO పథకం కింద NABARD / SFAC / NCDC నియమించిన క్లస్టర్-బేస్డ్ బిజినెస్ ఆర్గనైజేషన్ రైతులను కూడగట్టడానికి, కంపెనీ / సహకార సంఘం నమోదుకు, వ్యాపార ప్రణాళికకు సహాయపడుతుంది.'),
          s('Registered FPOs get management support for 3 years, equity grants and credit guarantee for loans; they can also get licences for seeds, fertiliser and mandi trading.', 'నమోదిత FPOలకు 3 సంవత్సరాలు నిర్వహణ సహాయం, ఈక్విటీ గ్రాంట్లు, రుణాలకు క్రెడిట్ హామీ; విత్తనాలు, ఎరువులు, మండీ వ్యాపార లైసెన్సులు కూడా పొందవచ్చు.'),
        ],
      },
      {
        title: s('Natural farming (APCNF)', 'ప్రకృతి వ్యవసాయం (APCNF)'),
        steps: [
          s('Contact the natural farming Community Resource Person / RSK in your village; attend the free field training.', 'మీ గ్రామంలో ప్రకృతి వ్యవసాయ కమ్యూనిటీ రిసోర్స్ పర్సన్ / RSKను సంప్రదించండి; ఉచిత క్షేత్ర శిక్షణకు హాజరవ్వండి.'),
          s('Learn to make jeevamrutham, beejamrutham and natural pest repellents; start on part of your land.', 'జీవామృతం, బీజామృతం, సహజ పురుగు నివారణలు తయారు చేయడం నేర్చుకోండి; భూమిలో కొంత భాగంలో ప్రారంభించండి.'),
          s('Ask about support for inputs, multi-crop models and selling natural produce through FPOs / markets.', 'ఇన్‌పుట్లకు సహాయం, బహుళ పంట నమూనాలు, FPOలు / మార్కెట్ల ద్వారా ప్రకృతి ఉత్పత్తుల అమ్మకం గురించి అడగండి.'),
        ],
      },
    ],
    costExample: s('FPO with 500 members raising ₹10 lakh equity: matching grant up to ₹10 lakh (within the ₹15 lakh cap).', '₹10 లక్షల ఈక్విటీ సేకరించిన 500 మంది సభ్యుల FPO: ₹10 లక్షల వరకు సరిపోలే గ్రాంట్ (₹15 లక్షల పరిమితిలో).'),
    whereToApply: [s('District agriculture office; NABARD district office; RSK', 'జిల్లా వ్యవసాయ కార్యాలయం; NABARD జిల్లా కార్యాలయం; RSK')],
    timeline: s('FPO formation: several months. Natural farming training: ongoing in each season.', 'FPO ఏర్పాటు: అనేక నెలలు. ప్రకృతి వ్యవసాయ శిక్షణ: ప్రతి సీజన్‌లో కొనసాగుతుంది.'),
    tips: [s('Choose FPO directors who are active farmers, and insist on yearly audited accounts shared with members.', 'చురుకైన రైతులను FPO డైరెక్టర్లుగా ఎంచుకోండి, సభ్యులకు ఏటా ఆడిట్ చేసిన లెక్కలు చూపాలని పట్టుబట్టండి.')],
    links: [{ label: 'SFAC — FPOs', url: 'https://sfacindia.com' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── GST
  {
    id: 'gst-registration',
    category: 'business',
    level: 'central',
    title: s('GST registration and returns — step by step for small businesses', 'GST నమోదు, రిటర్న్‌లు — చిన్న వ్యాపారాలకు దశలవారీగా'),
    summary: s(
      'You need GST registration if your turnover crosses ₹40 lakh a year for goods or ₹20 lakh for services in AP, or if you sell online through e-commerce sites or to other states (some exceptions). Registration is free on gst.gov.in. Small businesses can choose the Composition Scheme (turnover up to ₹1.5 crore) to pay a small fixed percentage with simpler quarterly filing.',
      'APలో వస్తువులకు ఏడాదికి ₹40 లక్షలు లేదా సేవలకు ₹20 లక్షల టర్నోవర్ దాటితే, లేదా ఇ-కామర్స్ సైట్ల ద్వారా ఆన్‌లైన్‌లో లేదా ఇతర రాష్ట్రాలకు అమ్మితే (కొన్ని మినహాయింపులతో) GST నమోదు కావాలి. gst.gov.inలో నమోదు ఉచితం. చిన్న వ్యాపారాలు కంపోజిషన్ పథకం (₹1.5 కోట్ల వరకు టర్నోవర్) ఎంచుకుని చిన్న స్థిర శాతం, సులభమైన త్రైమాసిక దాఖలు చేయవచ్చు.',
    ),
    keywords: ['gst', 'gst registration', 'gstin', 'gst return', 'gstr', 'composition scheme', 'gst number', 'జీఎస్టీ', 'GST నమోదు'],
    whoCanApply: [s('Businesses above the turnover limit, online sellers, inter-state suppliers, or anyone who wants to register voluntarily', 'టర్నోవర్ పరిమితి దాటిన వ్యాపారాలు, ఆన్‌లైన్ విక్రేతలు, అంతర్-రాష్ట్ర సరఫరాదారులు, లేదా స్వచ్ఛందంగా నమోదు కావాలనుకునే ఎవరైనా')],
    documents: [s('PAN, Aadhaar (linked mobile), photo, business address proof (rent agreement / tax receipt / electricity bill + owner NOC), bank account proof', 'PAN, ఆధార్ (లింక్ మొబైల్), ఫోటో, వ్యాపార చిరునామా రుజువు (అద్దె ఒప్పందం / పన్ను రసీదు / కరెంట్ బిల్లు + యజమాని NOC), బ్యాంక్ ఖాతా రుజువు')],
    fees: [fee(s('Registration', 'నమోదు'), s('Free', 'ఉచితం')), fee(s('Late return', 'ఆలస్య రిటర్న్'), s('Late fee per day and interest on tax due', 'రోజుకు ఆలస్య ఫీజు, బకాయి పన్నుపై వడ్డీ'))],
    steps: [
      s('gst.gov.in → Services → Registration → New Registration.', 'gst.gov.in → Services → Registration → New Registration (కొత్త నమోదు).'),
      s('Complete Aadhaar authentication; get GSTIN.', 'ఆధార్ ధృవీకరణ పూర్తి చేసి GSTIN పొందండి.'),
      s('File returns on time every month / quarter.', 'ప్రతి నెల / త్రైమాసికం సమయానికి రిటర్న్‌లు వేయండి.'),
    ],
    stages: [
      {
        title: s('Register', 'నమోదు'),
        steps: [
          s('gst.gov.in → Services → Registration → "New Registration" → Part A: PAN, mobile, email → OTPs → you get a TRN.', 'gst.gov.in → Services → Registration → "New Registration" → పార్ట్ A: PAN, మొబైల్, ఇమెయిల్ → OTPలు → TRN వస్తుంది.'),
          s('Part B with the TRN: business details, principal place, goods / services (HSN / SAC codes), bank account; upload documents; choose Aadhaar authentication.', 'TRNతో పార్ట్ B: వ్యాపార వివరాలు, ప్రధాన స్థలం, వస్తువులు / సేవలు (HSN / SAC కోడ్‌లు), బ్యాంక్ ఖాతా; పత్రాలు అప్‌లోడ్; ఆధార్ ధృవీకరణ ఎంచుకోండి.'),
          s('Submit with EVC (OTP). Officer may ask for clarification or visit. GSTIN and certificate are issued online — display the certificate at your shop.', 'EVC (OTP)తో సమర్పించండి. అధికారి వివరణ అడగవచ్చు లేదా సందర్శించవచ్చు. GSTIN, సర్టిఫికెట్ ఆన్‌లైన్‌లో — సర్టిఫికెట్ దుకాణంలో ప్రదర్శించండి.'),
        ],
      },
      {
        title: s('Choose regular or composition', 'రెగ్యులర్ లేదా కంపోజిషన్ ఎంచుకోవడం'),
        steps: [
          s('Composition (turnover up to ₹1.5 crore; not for most services or inter-state / online sales): pay a small fixed rate on turnover, can\'t collect GST from customers or claim input credit; quarterly payment (CMP-08) and yearly return.', 'కంపోజిషన్ (₹1.5 కోట్ల వరకు టర్నోవర్; చాలా సేవలు, అంతర్-రాష్ట్ర / ఆన్‌లైన్ అమ్మకాలకు కాదు): టర్నోవర్‌పై చిన్న స్థిర రేటు, కస్టమర్ల నుండి GST వసూలు చేయలేరు, ఇన్‌పుట్ క్రెడిట్ లేదు; త్రైమాసిక చెల్లింపు (CMP-08), వార్షిక రిటర్న్.'),
          s('Regular: charge GST on invoices, claim input tax credit, file GSTR-1 (sales) and GSTR-3B (summary + payment) monthly — or quarterly under QRMP if turnover is up to ₹5 crore.', 'రెగ్యులర్: ఇన్‌వాయిస్‌లపై GST వసూలు, ఇన్‌పుట్ ట్యాక్స్ క్రెడిట్, GSTR-1 (అమ్మకాలు), GSTR-3B (సారాంశం + చెల్లింపు) నెలవారీ — లేదా ₹5 కోట్ల వరకు టర్నోవర్ అయితే QRMP కింద త్రైమాసికంగా.'),
        ],
      },
      {
        title: s('Every month / quarter', 'ప్రతి నెల / త్రైమాసికం'),
        steps: [
          s('Issue proper tax invoices with your GSTIN. Keep purchase bills with GSTIN — check they appear in your GSTR-2B before claiming credit.', 'మీ GSTINతో సరైన ట్యాక్స్ ఇన్‌వాయిస్‌లు ఇవ్వండి. GSTIN ఉన్న కొనుగోలు బిల్లులు దాచుకోండి — క్రెడిట్ కోరే ముందు అవి మీ GSTR-2Bలో ఉన్నాయో చూడండి.'),
          s('File even if there were no sales (nil return) — missing returns brings late fees and can cancel the registration.', 'అమ్మకాలు లేకపోయినా దాఖలు చేయండి (నిల్ రిటర్న్) — రిటర్న్‌లు మిస్ అయితే ఆలస్య ఫీజులు, నమోదు రద్దు కావచ్చు.'),
          s('Use a CA / GST practitioner if your business has many transactions.', 'మీ వ్యాపారంలో ఎక్కువ లావాదేవీలు ఉంటే CA / GST ప్రాక్టీషనర్ సహాయం తీసుకోండి.'),
        ],
      },
    ],
    costExample: s('Kirana shop with ₹60 lakh turnover choosing composition: pays a small fixed percentage of turnover each quarter instead of tracking GST on every sale.', '₹60 లక్షల టర్నోవర్ ఉన్న కిరాణా దుకాణం కంపోజిషన్ ఎంచుకుంటే: ప్రతి అమ్మకంపై GST లెక్కించకుండా ప్రతి త్రైమాసికం టర్నోవర్‌పై చిన్న స్థిర శాతం.'),
    whereToApply: [s('gst.gov.in; GST help desk 1800-103-4786', 'gst.gov.in; GST హెల్ప్ డెస్క్ 1800-103-4786')],
    timeline: s('GSTIN usually within 7 working days of a complete application.', 'పూర్తి దరఖాస్తు తర్వాత సాధారణంగా 7 పని రోజుల్లో GSTIN.'),
    tips: [s('GST rates were simplified in September 2025 (mainly 5% and 18%). Check the current rate for your product on the GST portal.', 'సెప్టెంబర్ 2025లో GST రేట్లు సరళీకరించారు (ప్రధానంగా 5%, 18%). మీ ఉత్పత్తికి ప్రస్తుత రేటు GST పోర్టల్‌లో చూడండి.')],
    links: [{ label: 'GST portal', url: 'https://www.gst.gov.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── FSSAI
  {
    id: 'fssai-licence',
    category: 'business',
    level: 'central',
    title: s('Food business licence (FSSAI) — registration or licence step by step', 'ఆహార వ్యాపార లైసెన్స్ (FSSAI) — నమోదు లేదా లైసెన్స్ దశలవారీగా'),
    summary: s(
      'Anyone who makes, stores, sells or serves food — tiffin centres, home bakers, sweet shops, pickle makers, restaurants, kirana stores, cloud kitchens — needs FSSAI. Turnover up to ₹12 lakh: basic registration (₹100 a year). Above that: a state licence; large businesses and importers: a central licence. Everything is online on FoSCoS.',
      'ఆహారం తయారు చేసే, నిల్వ చేసే, అమ్మే లేదా వడ్డించే ఎవరికైనా — టిఫిన్ సెంటర్లు, ఇంటి బేకర్లు, స్వీట్ షాపులు, పచ్చళ్ల తయారీదారులు, రెస్టారెంట్లు, కిరాణా దుకాణాలు, క్లౌడ్ కిచెన్‌లు — FSSAI కావాలి. ₹12 లక్షల వరకు టర్నోవర్: బేసిక్ నమోదు (ఏడాదికి ₹100). అంతకు మించి: రాష్ట్ర లైసెన్స్; పెద్ద వ్యాపారాలు, దిగుమతిదారులు: కేంద్ర లైసెన్స్. అంతా FoSCoSలో ఆన్‌లైన్.',
    ),
    keywords: ['fssai', 'food licence', 'food license', 'foscos', 'food registration', 'tiffin center licence', 'home bakery licence', 'restaurant licence', 'ఫుడ్ లైసెన్స్', 'FSSAI', 'ఆహార లైసెన్స్'],
    whoCanApply: [s('Any food business operator, including home-based and street food businesses', 'ఇంటి నుండి, వీధి ఆహార వ్యాపారాలతో సహా ఏ ఆహార వ్యాపార నిర్వాహకుడైనా')],
    documents: [s('Photo ID, photo, address proof of premises; for licences also layout plan, list of equipment, water test report, food safety management plan', 'ఫోటో ఐడీ, ఫోటో, ప్రాంగణ చిరునామా రుజువు; లైసెన్సులకు లేఅవుట్ ప్లాన్, యంత్రాల జాబితా, నీటి పరీక్ష నివేదిక, ఆహార భద్రత నిర్వహణ ప్రణాళిక కూడా')],
    fees: [
      fee(s('Basic registration (turnover ≤ ₹12 lakh)', 'బేసిక్ నమోదు (టర్నోవర్ ≤ ₹12 లక్షలు)'), s('₹100 a year', 'ఏడాదికి ₹100')),
      fee(s('State licence', 'రాష్ట్ర లైసెన్స్'), s('About ₹2,000–5,000 a year depending on business type', 'వ్యాపార రకాన్ని బట్టి ఏడాదికి సుమారు ₹2,000–5,000')),
    ],
    steps: [
      s('foscos.fssai.gov.in → choose registration / licence → fill → pay.', 'foscos.fssai.gov.in → నమోదు / లైసెన్స్ ఎంచుకోండి → నింపండి → చెల్లించండి.'),
      s('Display the certificate; print the number on packs.', 'సర్టిఫికెట్ ప్రదర్శించండి; ప్యాకెట్లపై నంబర్ ముద్రించండి.'),
    ],
    stages: [
      {
        title: s('Apply on FoSCoS', 'FoSCoSలో దరఖాస్తు'),
        steps: [
          s('foscos.fssai.gov.in → "Apply for licence / registration" → choose state and business kind (manufacturer, retailer, caterer…) and turnover → the site tells you whether you need registration, state or central licence.', 'foscos.fssai.gov.in → "Apply for licence / registration" → రాష్ట్రం, వ్యాపార రకం (తయారీదారు, రిటైలర్, క్యాటరర్…), టర్నోవర్ ఎంచుకోండి → నమోదు, రాష్ట్ర లేదా కేంద్ర లైసెన్స్ ఏది కావాలో సైట్ చెబుతుంది.'),
          s('Create login → fill Form A (registration) or Form B (licence) → upload documents → pay online → note the application reference.', 'లాగిన్ తయారు → ఫారం A (నమోదు) లేదా ఫారం B (లైసెన్స్) నింపండి → పత్రాలు అప్‌లోడ్ → ఆన్‌లైన్ చెల్లింపు → అప్లికేషన్ రిఫరెన్స్ నోట్ చేయండి.'),
          s('Food Safety Officer may inspect; certificate / licence is downloadable from FoSCoS.', 'ఫుడ్ సేఫ్టీ ఆఫీసర్ తనిఖీ చేయవచ్చు; సర్టిఫికెట్ / లైసెన్స్ FoSCoS నుండి డౌన్‌లోడ్.'),
        ],
      },
      {
        title: s('Keep it valid', 'చెల్లుబాటులో ఉంచడం'),
        steps: [
          s('Display the certificate where customers can see it; print the 14-digit FSSAI number and logo on packed food labels.', 'కస్టమర్లకు కనిపించేలా సర్టిఫికెట్ ప్రదర్శించండి; ప్యాక్ చేసిన ఆహార లేబుళ్లపై 14 అంకెల FSSAI నంబర్, లోగో ముద్రించండి.'),
          s('Renew before expiry (choose 1–5 years). Licence holders file an annual return online.', 'గడువుకు ముందే రెన్యువల్ (1–5 సంవత్సరాలు ఎంచుకోండి). లైసెన్స్ ఉన్నవారు ఆన్‌లైన్‌లో వార్షిక రిటర్న్ వేయాలి.'),
          s('Keep the kitchen clean, staff medically fit, water tested and raw materials from licensed suppliers.', 'వంటగది శుభ్రంగా, సిబ్బంది ఆరోగ్యంగా, నీరు పరీక్షించినదిగా, లైసెన్స్ సరఫరాదారుల నుండి ముడిపదార్థాలు.'),
        ],
      },
    ],
    costExample: s('Home tiffin business with ₹6 lakh yearly sales: basic registration ₹100 a year (₹500 for 5 years).', '₹6 లక్షల వార్షిక అమ్మకాల ఇంటి టిఫిన్ వ్యాపారం: బేసిక్ నమోదు ఏడాదికి ₹100 (5 సంవత్సరాలకు ₹500).'),
    whereToApply: [s('foscos.fssai.gov.in; district Food Safety office', 'foscos.fssai.gov.in; జిల్లా ఆహార భద్రత కార్యాలయం')],
    timeline: s('Registration: usually within a week. Licence: about a month.', 'నమోదు: సాధారణంగా వారంలో. లైసెన్స్: సుమారు ఒక నెల.'),
    tips: [s('Fake "FSSAI agents" charge thousands for the ₹100 registration — apply yourself on FoSCoS.', '₹100 నమోదుకు నకిలీ "FSSAI ఏజెంట్లు" వేలు వసూలు చేస్తారు — FoSCoSలో మీరే దరఖాస్తు చేయండి.')],
    links: [{ label: 'FoSCoS (FSSAI)', url: 'https://foscos.fssai.gov.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── TRADEMARK
  {
    id: 'trademark-registration',
    category: 'business',
    level: 'central',
    title: s('Register your brand name / logo (trademark)', 'మీ బ్రాండ్ పేరు / లోగో నమోదు (ట్రేడ్‌మార్క్)'),
    summary: s(
      'A registered trademark stops others from using your shop or product name / logo. Search first that no one already has it, then file online on IP India. Individuals, startups and small enterprises pay a lower fee. You can use ™ once filed and ® only after registration. A trademark lasts 10 years and can be renewed forever.',
      'నమోదిత ట్రేడ్‌మార్క్ మీ దుకాణం లేదా ఉత్పత్తి పేరు / లోగోను ఇతరులు వాడకుండా ఆపుతుంది. ముందు ఎవరికీ ఇప్పటికే లేదని వెతికి, IP Indiaలో ఆన్‌లైన్‌లో దాఖలు చేయండి. వ్యక్తులు, స్టార్టప్‌లు, చిన్న సంస్థలకు తక్కువ ఫీజు. దాఖలు చేశాక ™, నమోదు తర్వాతే ® వాడవచ్చు. ట్రేడ్‌మార్క్ 10 సంవత్సరాలు, శాశ్వతంగా రెన్యువల్ చేయవచ్చు.',
    ),
    keywords: ['trademark', 'trade mark', 'brand registration', 'logo registration', 'brand name', 'tm', 'ip india', 'ట్రేడ్‌మార్క్', 'బ్రాండ్ పేరు', 'లోగో నమోదు'],
    whoCanApply: [s('Any person or business using or planning to use a name / logo', 'పేరు / లోగో వాడుతున్న లేదా వాడాలనుకునే ఏ వ్యక్తి లేదా వ్యాపారమైనా')],
    documents: [s('Logo image (JPG), applicant ID and address, Udyam / startup certificate for the lower fee, date of first use proof (bills, ads) if already in use', 'లోగో చిత్రం (JPG), దరఖాస్తుదారు ఐడీ, చిరునామా, తక్కువ ఫీజుకు ఉద్యమ్ / స్టార్టప్ సర్టిఫికెట్, ఇప్పటికే వాడుతుంటే మొదటి వాడక తేదీ రుజువు (బిల్లులు, ప్రకటనలు)')],
    fees: [fee(s('Application (per class, online)', 'దరఖాస్తు (ఒక్కో క్లాస్‌కు, ఆన్‌లైన్)'), s('₹4,500 for individuals / startups / small enterprises; ₹9,000 for others', 'వ్యక్తులు / స్టార్టప్‌లు / చిన్న సంస్థలకు ₹4,500; ఇతరులకు ₹9,000'))],
    steps: [
      s('Search existing marks; pick the right class.', 'ఉన్న మార్కులు వెతకండి; సరైన క్లాస్ ఎంచుకోండి.'),
      s('File TM-A online; reply to objections; registration.', 'ఆన్‌లైన్‌లో TM-A దాఖలు; అభ్యంతరాలకు సమాధానం; నమోదు.'),
    ],
    stages: [
      {
        title: s('Search and choose the class', 'వెతకడం, క్లాస్ ఎంచుకోవడం'),
        steps: [
          s('IP India public search (ipindia.gov.in → Trade Marks → public search): search your word and similar spellings in your class.', 'IP India పబ్లిక్ సెర్చ్ (ipindia.gov.in → Trade Marks → public search): మీ క్లాస్‌లో మీ పదం, దగ్గరి స్పెల్లింగ్‌లు వెతకండి.'),
          s('Goods and services are in 45 classes (e.g. 30 = foods like pickles, spices; 43 = restaurants; 25 = clothing). File in each class you need.', 'వస్తువులు, సేవలు 45 క్లాసుల్లో (ఉదా: 30 = పచ్చళ్లు, మసాలాలు వంటి ఆహారాలు; 43 = రెస్టారెంట్లు; 25 = దుస్తులు). అవసరమైన ప్రతి క్లాస్‌లో దాఖలు.'),
          s('Choose a distinctive name — common words or place names are often refused.', 'ప్రత్యేకమైన పేరు ఎంచుకోండి — సాధారణ పదాలు, ప్రదేశాల పేర్లు తరచూ తిరస్కరిస్తారు.'),
        ],
      },
      {
        title: s('File and follow', 'దాఖలు, ఫాలో-అప్'),
        steps: [
          s('File Form TM-A on the IP India e-filing portal (or through a trademark agent); pay the fee; you get an application number — start using ™.', 'IP India ఇ-ఫైలింగ్ పోర్టల్‌లో (లేదా ట్రేడ్‌మార్క్ ఏజెంట్ ద్వారా) ఫారం TM-A దాఖలు; ఫీజు చెల్లించండి; అప్లికేషన్ నంబర్ వస్తుంది — ™ వాడడం ప్రారంభించండి.'),
          s('Examination report: if there is an objection, reply within the time given (usually 1 month), or attend the hearing.', 'పరీక్ష నివేదిక: అభ్యంతరం ఉంటే ఇచ్చిన గడువులో (సాధారణంగా 1 నెల) సమాధానం ఇవ్వండి, లేదా విచారణకు హాజరవ్వండి.'),
          s('Accepted marks are published in the Trade Marks Journal; others can oppose within 4 months. If no opposition, the certificate is issued — now you can use ®.', 'ఆమోదించిన మార్కులు ట్రేడ్‌మార్క్స్ జర్నల్‌లో ప్రచురిస్తారు; 4 నెలల్లో ఇతరులు వ్యతిరేకించవచ్చు. వ్యతిరేకత లేకపోతే సర్టిఫికెట్ — ఇప్పుడు ® వాడవచ్చు.'),
          s('Renew every 10 years.', 'ప్రతి 10 సంవత్సరాలకు రెన్యువల్.'),
        ],
      },
    ],
    costExample: s('Pickle brand by a small enterprise in class 30: ₹4,500.', 'చిన్న సంస్థ పచ్చళ్ల బ్రాండ్ క్లాస్ 30లో: ₹4,500.'),
    whereToApply: [s('ipindia.gov.in (e-filing)', 'ipindia.gov.in (ఇ-ఫైలింగ్)')],
    timeline: s('Often 12–24 months if there are no objections.', 'అభ్యంతరాలు లేకపోతే తరచూ 12–24 నెలలు.'),
    tips: [s('Watch for fake "trademark renewal" letters demanding payment — check status yourself on IP India.', 'చెల్లింపు డిమాండ్ చేసే నకిలీ "ట్రేడ్‌మార్క్ రెన్యువల్" లేఖల పట్ల జాగ్రత్త — IP Indiaలో మీరే స్టేటస్ చూడండి.')],
    links: [{ label: 'IP India', url: 'https://ipindia.gov.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── MSME DELAYED PAYMENT
  {
    id: 'msme-delayed-payment',
    category: 'business',
    level: 'both',
    title: s('Buyer not paying your small business? — MSME Samadhaan (45-day rule)', 'కొనుగోలుదారు మీ చిన్న వ్యాపారానికి చెల్లించడం లేదా? — MSME సమాధాన్ (45 రోజుల నియమం)'),
    summary: s(
      'If you are a micro or small enterprise registered on Udyam, buyers must pay you within the agreed time and never later than 45 days from delivery. If they delay, they owe compound interest at three times the RBI bank rate. You can file the claim online on MSME Samadhaan; the state Micro and Small Enterprises Facilitation Council (MSEFC) tries conciliation and then decides by arbitration.',
      'మీరు ఉద్యమ్‌లో నమోదైన సూక్ష్మ లేదా చిన్న సంస్థ అయితే, కొనుగోలుదారులు అంగీకరించిన సమయంలో, డెలివరీ నుండి 45 రోజులకు మించకుండా చెల్లించాలి. ఆలస్యం చేస్తే RBI బ్యాంక్ రేటుకు మూడు రెట్లు చక్రవడ్డీ చెల్లించాలి. MSME సమాధాన్‌లో ఆన్‌లైన్‌లో క్లెయిమ్ వేయవచ్చు; రాష్ట్ర సూక్ష్మ, చిన్న సంస్థల ఫెసిలిటేషన్ కౌన్సిల్ (MSEFC) రాజీ ప్రయత్నించి, తర్వాత మధ్యవర్తిత్వంతో నిర్ణయిస్తుంది.',
    ),
    keywords: ['payment delay', 'buyer not paying', 'msme samadhaan', 'msefc', 'delayed payment', '45 days', 'udyam payment', 'dues not paid', 'చెల్లింపు ఆలస్యం', 'బకాయిలు', 'MSME'],
    whoCanApply: [s('Micro and small enterprises with Udyam registration (supplier at the time of supply)', 'ఉద్యమ్ నమోదు ఉన్న సూక్ష్మ, చిన్న సంస్థలు (సరఫరా సమయంలో సరఫరాదారు)')],
    documents: [s('Udyam certificate, purchase orders / contract, invoices, delivery proof, ledger / statement of dues, correspondence', 'ఉద్యమ్ సర్టిఫికెట్, కొనుగోలు ఆర్డర్లు / ఒప్పందం, ఇన్‌వాయిస్‌లు, డెలివరీ రుజువు, లెడ్జర్ / బకాయిల స్టేట్‌మెంట్, ఉత్తరప్రత్యుత్తరాలు')],
    fees: [fee(s('Filing on MSME Samadhaan', 'MSME సమాధాన్‌లో దాఖలు'), s('Free', 'ఉచితం'))],
    steps: [
      s('Send a written demand; then file on samadhaan.msme.gov.in.', 'రాతపూర్వక డిమాండ్ పంపి; తర్వాత samadhaan.msme.gov.inలో దాఖలు.'),
      s('Attend MSEFC conciliation / arbitration.', 'MSEFC రాజీ / మధ్యవర్తిత్వానికి హాజరు.'),
    ],
    stages: [
      {
        title: s('Before filing', 'దాఖలుకు ముందు'),
        steps: [
          s('Make sure you are registered on Udyam (registration should be before the supply for full protection).', 'మీరు ఉద్యమ్‌లో నమోదయ్యారని నిర్ధారించుకోండి (పూర్తి రక్షణకు సరఫరాకు ముందే నమోదు ఉండాలి).'),
          s('Write to the buyer listing invoices, dates, amounts and the 45-day rule; ask for payment with interest.', 'ఇన్‌వాయిస్‌లు, తేదీలు, మొత్తాలు, 45 రోజుల నియమంతో కొనుగోలుదారుకు రాయండి; వడ్డీతో చెల్లించమని అడగండి.'),
        ],
      },
      {
        title: s('File on MSME Samadhaan', 'MSME సమాధాన్‌లో దాఖలు'),
        steps: [
          s('samadhaan.msme.gov.in → file application with Udyam number → buyer details (company / government department / PSU) → invoices and amounts → upload proof → submit.', 'samadhaan.msme.gov.in → ఉద్యమ్ నంబర్‌తో దరఖాస్తు → కొనుగోలుదారు వివరాలు (కంపెనీ / ప్రభుత్వ శాఖ / PSU) → ఇన్‌వాయిస్‌లు, మొత్తాలు → రుజువు అప్‌లోడ్ → సబ్మిట్.'),
          s('The application goes to the MSEFC of the state where your unit is; the buyer is notified (many pay at this stage).', 'దరఖాస్తు మీ యూనిట్ ఉన్న రాష్ట్ర MSEFCకి వెళ్తుంది; కొనుగోలుదారుకు నోటీసు (చాలామంది ఈ దశలోనే చెల్లిస్తారు).'),
          s('MSEFC holds conciliation; if no settlement, it decides as arbitrator. A buyer who wants to challenge the award in court must first deposit 75% of it.', 'MSEFC రాజీ నిర్వహిస్తుంది; రాజీ కాకపోతే మధ్యవర్తిగా నిర్ణయిస్తుంది. అవార్డును కోర్టులో సవాలు చేయాలంటే కొనుగోలుదారు ముందు 75% జమ చేయాలి.'),
        ],
      },
    ],
    costExample: s('₹4 lakh unpaid for 6 months beyond 45 days: claim the ₹4 lakh plus compound interest at 3× the bank rate.', '45 రోజులకు మించి 6 నెలలు ₹4 లక్షలు చెల్లించలేదు: ₹4 లక్షలు + బ్యాంక్ రేటుకు 3 రెట్లు చక్రవడ్డీ క్లెయిమ్.'),
    whereToApply: [s('samadhaan.msme.gov.in; District Industries Centre for help', 'samadhaan.msme.gov.in; సహాయానికి జిల్లా పరిశ్రమల కేంద్రం')],
    timeline: s('MSEFC should decide within 90 days of reference; often longer.', 'రిఫరెన్స్ నుండి 90 రోజుల్లో MSEFC నిర్ణయించాలి; తరచూ ఎక్కువ.'),
    tips: [s('Big buyers also lose an income-tax deduction if they pay MSEs late — mention this in your demand letter.', 'MSEలకు ఆలస్యంగా చెల్లిస్తే పెద్ద కొనుగోలుదారులు ఆదాయపు పన్ను మినహాయింపు కూడా కోల్పోతారు — మీ డిమాండ్ లేఖలో ఇది చెప్పండి.')],
    links: [{ label: 'MSME Samadhaan', url: 'https://samadhaan.msme.gov.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── IEC
  {
    id: 'export-iec',
    category: 'business',
    level: 'central',
    title: s('Start exporting — Import Export Code (IEC) and first steps', 'ఎగుమతి ప్రారంభం — ఇంపోర్ట్ ఎక్స్‌పోర్ట్ కోడ్ (IEC), మొదటి దశలు'),
    summary: s(
      'To export or import goods you need a 10-digit Import Export Code (IEC) from DGFT — it is issued online in minutes for ₹500 and is based on your PAN. Update it once a year (April–June) or it gets deactivated. Then register with an export promotion council for benefits, open a bank account for foreign payments, and use ICEGATE for customs.',
      'వస్తువులు ఎగుమతి లేదా దిగుమతి చేయడానికి DGFT నుండి 10 అంకెల ఇంపోర్ట్ ఎక్స్‌పోర్ట్ కోడ్ (IEC) కావాలి — ₹500కి నిమిషాల్లో ఆన్‌లైన్‌లో, మీ PAN ఆధారంగా జారీ. ఏడాదికి ఒకసారి (ఏప్రిల్–జూన్) అప్‌డేట్ చేయాలి, లేకపోతే నిష్క్రియం. తర్వాత ప్రయోజనాలకు ఎగుమతి ప్రోత్సాహక మండలిలో నమోదు, విదేశీ చెల్లింపులకు బ్యాంక్ ఖాతా, కస్టమ్స్‌కు ICEGATE.',
    ),
    keywords: ['iec', 'import export code', 'export', 'import', 'dgft', 'icegate', 'rcmc', 'exporter', 'ఎగుమతి', 'దిగుమతి', 'IEC'],
    whoCanApply: [s('Any person or business with a PAN', 'PAN ఉన్న ఏ వ్యక్తి లేదా వ్యాపారమైనా')],
    documents: [s('PAN, Aadhaar-linked mobile / DSC, address proof, bank account (cancelled cheque / certificate)', 'PAN, ఆధార్ లింక్ మొబైల్ / DSC, చిరునామా రుజువు, బ్యాంక్ ఖాతా (రద్దు చెక్ / సర్టిఫికెట్)')],
    fees: [fee(s('IEC', 'IEC'), s('₹500 (one time)', '₹500 (ఒకసారి)'))],
    steps: [
      s('dgft.gov.in → Apply for IEC → pay ₹500 → download.', 'dgft.gov.in → Apply for IEC → ₹500 చెల్లింపు → డౌన్‌లోడ్.'),
      s('Update IEC every year between April and June.', 'ప్రతి ఏటా ఏప్రిల్–జూన్ మధ్య IEC అప్‌డేట్.'),
    ],
    stages: [
      {
        title: s('Get the IEC', 'IEC పొందడం'),
        steps: [
          s('dgft.gov.in → register with mobile and email → "Apply for IEC" → fill business details, PAN, address, bank → upload documents.', 'dgft.gov.in → మొబైల్, ఇమెయిల్‌తో నమోదు → "Apply for IEC" → వ్యాపార వివరాలు, PAN, చిరునామా, బ్యాంక్ నింపి → పత్రాలు అప్‌లోడ్.'),
          s('Sign with Aadhaar OTP or DSC → pay ₹500 → IEC certificate is generated, usually immediately.', 'ఆధార్ OTP లేదా DSCతో సంతకం → ₹500 చెల్లింపు → IEC సర్టిఫికెట్, సాధారణంగా వెంటనే.'),
        ],
      },
      {
        title: s('Before the first shipment', 'మొదటి షిప్‌మెంట్‌కు ముందు'),
        steps: [
          s('Register on ICEGATE (customs) and get your bank\'s AD code registered at the port / airport you will use.', 'ICEGATE (కస్టమ్స్)లో నమోదు చేసి, మీరు వాడే ఓడరేవు / విమానాశ్రయంలో మీ బ్యాంక్ AD కోడ్ నమోదు చేయించండి.'),
          s('Join the export promotion council for your product (e.g. spices, seafood, apparel) to get an RCMC — needed for most export benefits.', 'మీ ఉత్పత్తి ఎగుమతి ప్రోత్సాహక మండలిలో చేరి (ఉదా: మసాలాలు, సముద్ర ఆహారం, దుస్తులు) RCMC పొందండి — చాలా ఎగుమతి ప్రయోజనాలకు అవసరం.'),
          s('Check product-specific rules (food: FSSAI and buyer-country standards; agri: APEDA; seafood: MPEDA).', 'ఉత్పత్తి నిర్దిష్ట నియమాలు చూడండి (ఆహారం: FSSAI, కొనుగోలుదారు దేశ ప్రమాణాలు; వ్యవసాయ: APEDA; సముద్ర ఆహారం: MPEDA).'),
          s('Receive payments only through the bank; your bank issues e-BRC for each export.', 'చెల్లింపులు బ్యాంక్ ద్వారానే; ప్రతి ఎగుమతికి మీ బ్యాంక్ e-BRC ఇస్తుంది.'),
        ],
      },
    ],
    costExample: s('IEC: ₹500 once. Annual update: free.', 'IEC: ఒకసారి ₹500. వార్షిక అప్‌డేట్: ఉచితం.'),
    whereToApply: [s('dgft.gov.in; DGFT regional office (Visakhapatnam) for help', 'dgft.gov.in; సహాయానికి DGFT ప్రాంతీయ కార్యాలయం (విశాఖపట్నం)')],
    timeline: s('IEC: same day.', 'IEC: అదే రోజు.'),
    tips: [s('Selling handicrafts or small parcels abroad? India Post\'s Dak Ghar Niryat Kendras help small exporters with paperwork.', 'హస్తకళలు లేదా చిన్న పార్సెళ్లు విదేశాలకు అమ్ముతున్నారా? ఇండియా పోస్ట్ డాక్ ఘర్ నిర్యాత్ కేంద్రాలు చిన్న ఎగుమతిదారులకు పత్రాలలో సహాయం చేస్తాయి.')],
    links: [{ label: 'DGFT', url: 'https://www.dgft.gov.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── AGNIVEER
  {
    id: 'agniveer-army',
    category: 'education',
    level: 'central',
    title: s('Join the Army, Navy or Air Force as an Agniveer', 'అగ్నివీర్‌గా ఆర్మీ, నేవీ లేదా ఎయిర్ ఫోర్స్‌లో చేరడం'),
    summary: s(
      'Under the Agnipath scheme, young people aged 17½ to 21 join the armed forces for 4 years as Agniveers. Selection is through an online written test and then physical and medical tests (Army recruitment rallies). Agniveers get a monthly salary, insurance cover and a tax-free Seva Nidhi package of about ₹10 lakh at the end; up to 25% may be selected for regular service.',
      'అగ్నిపథ్ పథకం కింద 17½ నుండి 21 ఏళ్ల యువత 4 సంవత్సరాలకు అగ్నివీర్‌లుగా సాయుధ దళాల్లో చేరతారు. ఆన్‌లైన్ రాత పరీక్ష, తర్వాత శారీరక, వైద్య పరీక్షల (ఆర్మీ రిక్రూట్‌మెంట్ ర్యాలీలు) ద్వారా ఎంపిక. అగ్నివీర్‌లకు నెలవారీ జీతం, బీమా కవర్, చివరలో సుమారు ₹10 లక్షల పన్ను రహిత సేవా నిధి ప్యాకేజీ; 25% వరకు శాశ్వత సేవకు ఎంపిక కావచ్చు.',
    ),
    keywords: ['agniveer', 'agnipath', 'army', 'army recruitment', 'army rally', 'navy', 'air force', 'join army', 'soldier', 'jawan', 'అగ్నివీర్', 'ఆర్మీ', 'సైన్యం', 'ఆర్మీ ర్యాలీ'],
    whoCanApply: [s('Unmarried men and women aged 17½–21 (as per each notification), with the education required for the trade (Class 10 / 12)', '17½–21 ఏళ్ల అవివాహిత పురుషులు, మహిళలు (ప్రతి నోటిఫికేషన్ ప్రకారం), ట్రేడ్‌కు అవసరమైన విద్య (10 / 12వ తరగతి)')],
    documents: [s('Class 10 / 12 certificates, Aadhaar, domicile / residence, caste certificate, photos, NCC / sports certificates if any', '10 / 12వ తరగతి సర్టిఫికెట్లు, ఆధార్, నివాసం, కుల ధృవీకరణ, ఫోటోలు, ఉంటే NCC / క్రీడా సర్టిఫికెట్లు')],
    fees: [fee(s('Online exam fee', 'ఆన్‌లైన్ పరీక్ష ఫీజు'), s('Small fee shown in each notification', 'ప్రతి నోటిఫికేషన్‌లో చూపిన చిన్న ఫీజు')), fee(s('Pay', 'జీతం'), s('About ₹30,000 a month in year 1 rising to about ₹40,000 in year 4 (part goes to the Seva Nidhi corpus)', '1వ సంవత్సరం నెలకు సుమారు ₹30,000, 4వ సంవత్సరంలో సుమారు ₹40,000 (కొంత సేవా నిధి నిధికి)'))],
    steps: [
      s('Register on the official site when the notification comes.', 'నోటిఫికేషన్ వచ్చినప్పుడు అధికారిక సైట్‌లో నమోదు.'),
      s('Write the online exam; then rally / physical and medical tests.', 'ఆన్‌లైన్ పరీక్ష రాయండి; తర్వాత ర్యాలీ / శారీరక, వైద్య పరీక్షలు.'),
    ],
    stages: [
      {
        title: s('Apply', 'దరఖాస్తు'),
        steps: [
          s('Army: joinindianarmy.nic.in. Navy: the Navy Agniveer portal. Air Force: the Agnipath Vayu portal. Notifications usually come early in the year.', 'ఆర్మీ: joinindianarmy.nic.in. నేవీ: నేవీ అగ్నివీర్ పోర్టల్. ఎయిర్ ఫోర్స్: అగ్నిపథ్ వాయు పోర్టల్. నోటిఫికేషన్లు సాధారణంగా సంవత్సరం ప్రారంభంలో.'),
          s('Register, choose the category (General Duty, Technical, Clerk / Store Keeper, Tradesman), fill details, upload photo / signature, pay the fee, choose exam centre.', 'నమోదు, వర్గం ఎంచుకోండి (జనరల్ డ్యూటీ, టెక్నికల్, క్లర్క్ / స్టోర్ కీపర్, ట్రేడ్స్‌మన్), వివరాలు, ఫోటో / సంతకం అప్‌లోడ్, ఫీజు, పరీక్ష కేంద్రం.'),
        ],
      },
      {
        title: s('Selection', 'ఎంపిక'),
        steps: [
          s('Online Common Entrance Exam (also in Telugu for Army) — download the admit card from the same site.', 'ఆన్‌లైన్ కామన్ ఎంట్రన్స్ ఎగ్జామ్ (ఆర్మీకి తెలుగులో కూడా) — అదే సైట్ నుండి అడ్మిట్ కార్డు.'),
          s('Shortlisted candidates attend the recruitment rally: 1.6 km run, pull-ups, other physical tests, document check, medical exam.', 'షార్ట్‌లిస్ట్ అయినవారు రిక్రూట్‌మెంట్ ర్యాలీకి: 1.6 కి.మీ పరుగు, పుల్-అప్స్, ఇతర శారీరక పరీక్షలు, పత్రాల తనిఖీ, వైద్య పరీక్ష.'),
          s('Final merit list; joining instructions by email / SMS.', 'తుది మెరిట్ జాబితా; ఇమెయిల్ / SMS ద్వారా చేరిక సూచనలు.'),
        ],
        note: s('Recruitment is free and on merit. Anyone promising selection for money is a fraud — report to the recruiting office or police.', 'నియామకం ఉచితం, మెరిట్ ఆధారంగా. డబ్బుకు ఎంపిక చేయిస్తామనే ఎవరైనా మోసగాళ్లు — రిక్రూటింగ్ కార్యాలయం లేదా పోలీసులకు తెలియజేయండి.'),
      },
      {
        title: s('After 4 years', '4 సంవత్సరాల తర్వాత'),
        steps: [
          s('Seva Nidhi (about ₹10 lakh, tax-free) is paid; up to 25% may be enrolled as regular soldiers.', 'సేవా నిధి (సుమారు ₹10 లక్షలు, పన్ను రహితం) చెల్లిస్తారు; 25% వరకు శాశ్వత సైనికులుగా నమోదు కావచ్చు.'),
          s('Ex-Agniveers get preference / reservation in central armed police forces and some state police jobs.', 'మాజీ అగ్నివీర్‌లకు కేంద్ర సాయుధ పోలీసు దళాలు, కొన్ని రాష్ట్ర పోలీసు ఉద్యోగాల్లో ప్రాధాన్యం / రిజర్వేషన్.'),
        ],
      },
    ],
    costExample: s('4 years of service: monthly pay + Seva Nidhi of about ₹10 lakh at exit.', '4 సంవత్సరాల సేవ: నెలవారీ జీతం + నిష్క్రమణలో సుమారు ₹10 లక్షల సేవా నిధి.'),
    whereToApply: [s('joinindianarmy.nic.in; Navy and Air Force Agniveer portals; Army Recruiting Office (Guntur / Visakhapatnam zone)', 'joinindianarmy.nic.in; నేవీ, ఎయిర్ ఫోర్స్ అగ్నివీర్ పోర్టల్‌లు; ఆర్మీ రిక్రూటింగ్ కార్యాలయం (గుంటూరు / విశాఖపట్నం జోన్)')],
    timeline: s('Notification to joining: several months.', 'నోటిఫికేషన్ నుండి చేరిక: అనేక నెలలు.'),
    tips: [s('Start running and fitness training months before the rally — the physical test decides many selections.', 'ర్యాలీకి నెలల ముందే పరుగు, ఫిట్‌నెస్ శిక్షణ ప్రారంభించండి — చాలా ఎంపికలను శారీరక పరీక్షే నిర్ణయిస్తుంది.')],
    links: [{ label: 'Join Indian Army', url: 'https://joinindianarmy.nic.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── POLICE RECRUITMENT
  {
    id: 'police-recruitment',
    category: 'education',
    level: 'state',
    title: s('AP Police constable and SI recruitment — how selection works', 'AP పోలీస్ కానిస్టేబుల్, SI నియామకం — ఎంపిక ఎలా జరుగుతుంది'),
    summary: s(
      'AP Police constables and Sub-Inspectors are recruited by the State Level Police Recruitment Board (SLPRB) through notifications on slprb.ap.gov.in. Selection has three parts: a preliminary written test, physical measurement and efficiency tests (height, chest, running), and a final written exam. Constables need Intermediate; SIs need a degree. Age limits and reservations are in each notification.',
      'AP పోలీస్ కానిస్టేబుళ్లు, సబ్-ఇన్‌స్పెక్టర్లను రాష్ట్ర స్థాయి పోలీస్ రిక్రూట్‌మెంట్ బోర్డు (SLPRB) slprb.ap.gov.inలో నోటిఫికేషన్ల ద్వారా నియమిస్తుంది. ఎంపికలో మూడు భాగాలు: ప్రాథమిక రాత పరీక్ష, శారీరక కొలతలు, సామర్థ్య పరీక్షలు (ఎత్తు, ఛాతీ, పరుగు), తుది రాత పరీక్ష. కానిస్టేబుళ్లకు ఇంటర్; SIలకు డిగ్రీ. వయస్సు పరిమితులు, రిజర్వేషన్లు ప్రతి నోటిఫికేషన్‌లో.',
    ),
    keywords: ['police recruitment', 'constable', 'police constable', 'si recruitment', 'sub inspector', 'slprb', 'police job', 'కానిస్టేబుల్', 'పోలీస్ ఉద్యోగం', 'SI ఉద్యోగం', 'పోలీస్ నియామకం'],
    whoCanApply: [s('Constable: Intermediate pass; SI: degree. Age, height and other limits as per the notification (relaxations for SC/ST/BC and others)', 'కానిస్టేబుల్: ఇంటర్ ఉత్తీర్ణత; SI: డిగ్రీ. వయస్సు, ఎత్తు, ఇతర పరిమితులు నోటిఫికేషన్ ప్రకారం (SC/ST/BC, ఇతరులకు సడలింపులు)')],
    documents: [s('SSC (date of birth), Inter / degree certificates, study certificates (local status), caste / EWS certificates, NCC / sports / ex-service certificates if any', 'SSC (పుట్టిన తేదీ), ఇంటర్ / డిగ్రీ సర్టిఫికెట్లు, స్టడీ సర్టిఫికెట్లు (లోకల్ స్టేటస్), కుల / EWS ధృవీకరణలు, ఉంటే NCC / క్రీడా / మాజీ సైనిక సర్టిఫికెట్లు')],
    fees: [fee(s('Application fee', 'దరఖాస్తు ఫీజు'), s('As per notification; lower for SC/ST', 'నోటిఫికేషన్ ప్రకారం; SC/STకి తక్కువ'))],
    steps: [
      s('Apply online when SLPRB notifies posts.', 'SLPRB పోస్టులు ప్రకటించినప్పుడు ఆన్‌లైన్ దరఖాస్తు.'),
      s('Prelims → physical tests → final exam → verification.', 'ప్రిలిమ్స్ → శారీరక పరీక్షలు → తుది పరీక్ష → ధృవీకరణ.'),
    ],
    stages: [
      {
        title: s('Get ready before the notification', 'నోటిఫికేషన్‌కు ముందే సిద్ధం'),
        steps: [
          s('Keep caste / EWS and study certificates current; local status depends on where you studied.', 'కుల / EWS, స్టడీ సర్టిఫికెట్లు తాజాగా ఉంచండి; లోకల్ స్టేటస్ మీరు ఎక్కడ చదివారో దానిపై.'),
          s('Start physical training: running (1,600 m for men / shorter for women within time limits), long jump, shot put as per previous notifications.', 'శారీరక శిక్షణ ప్రారంభించండి: పరుగు (పురుషులకు 1,600 మీ / మహిళలకు తక్కువ, సమయ పరిమితిలో), లాంగ్ జంప్, షాట్ పుట్ — గత నోటిఫికేషన్ల ప్రకారం.'),
          s('Study arithmetic, reasoning, general studies, AP history / geography and current affairs with previous papers.', 'పాత ప్రశ్నపత్రాలతో అంకగణితం, రీజనింగ్, జనరల్ స్టడీస్, AP చరిత్ర / భూగోళం, కరెంట్ అఫైర్స్ చదవండి.'),
        ],
      },
      {
        title: s('Apply and selection', 'దరఖాస్తు, ఎంపిక'),
        steps: [
          s('slprb.ap.gov.in → register → fill details, upload photo / signature and certificates → pay → print the application.', 'slprb.ap.gov.in → నమోదు → వివరాలు, ఫోటో / సంతకం, సర్టిఫికెట్లు అప్‌లోడ్ → చెల్లింపు → దరఖాస్తు ప్రింట్.'),
          s('Preliminary written test (qualifying) → physical measurement test and physical efficiency test → final written exam (merit).', 'ప్రాథమిక రాత పరీక్ష (అర్హత) → శారీరక కొలత పరీక్ష, శారీరక సామర్థ్య పరీక్ష → తుది రాత పరీక్ష (మెరిట్).'),
          s('Certificate verification, medical exam and police verification; then training at a police training college.', 'సర్టిఫికెట్ వెరిఫికేషన్, వైద్య పరీక్ష, పోలీసు వెరిఫికేషన్; తర్వాత పోలీస్ శిక్షణ కళాశాలలో శిక్షణ.'),
        ],
      },
    ],
    costExample: s('Only the notification fee — no coaching or agent fee is required.', 'నోటిఫికేషన్ ఫీజు మాత్రమే — కోచింగ్ లేదా ఏజెంట్ ఫీజు అవసరం లేదు.'),
    whereToApply: [s('slprb.ap.gov.in', 'slprb.ap.gov.in')],
    timeline: s('Notification to appointment: usually many months.', 'నోటిఫికేషన్ నుండి నియామకం: సాధారణంగా చాలా నెలలు.'),
    tips: [s('No one can get you a police job for money — report such offers to ACB 14400.', 'డబ్బుకు ఎవరూ పోలీస్ ఉద్యోగం ఇప్పించలేరు — అలాంటి ఆఫర్లను ACB 14400కి తెలియజేయండి.')],
    links: [{ label: 'SLPRB AP', url: 'https://slprb.ap.gov.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── FISHING BOAT
  {
    id: 'fishing-boat-registration',
    category: 'farmers',
    level: 'both',
    title: s('Fishing boat registration and licence, fisherman ID and safety at sea', 'ఫిషింగ్ పడవ నమోదు, లైసెన్స్, మత్స్యకారుని ఐడీ, సముద్రంలో భద్రత'),
    summary: s(
      'Every fishing boat must be registered and hold a valid fishing licence — it is needed for diesel subsidy, insurance, compensation and the fishing-ban support. Registration and licences are done online on the ReALCraft system through the Fisheries Department. Fishermen should also get the fisherman ID card and carry safety and distress-alert equipment at sea.',
      'ప్రతి ఫిషింగ్ పడవ నమోదై, చెల్లుబాటయ్యే ఫిషింగ్ లైసెన్స్ కలిగి ఉండాలి — డీజిల్ సబ్సిడీ, బీమా, పరిహారం, వేట నిషేధ సహాయానికి అవసరం. నమోదు, లైసెన్సులు మత్స్య శాఖ ద్వారా ReALCraft వ్యవస్థలో ఆన్‌లైన్‌లో. మత్స్యకారులు మత్స్యకారుని ఐడీ కార్డు కూడా తీసుకుని, సముద్రంలో భద్రతా, ఆపద సంకేత పరికరాలు తీసుకెళ్లాలి.',
    ),
    keywords: ['boat registration', 'fishing licence', 'fishing license', 'realcraft', 'fisherman id', 'boat licence', 'diesel subsidy', 'fishing boat', 'పడవ నమోదు', 'ఫిషింగ్ లైసెన్స్', 'మత్స్యకారుని ఐడీ', 'బోటు'],
    whoCanApply: [s('Boat owners and fishermen', 'పడవ యజమానులు, మత్స్యకారులు')],
    documents: [s('Boat builder\'s certificate / purchase proof, engine details, owner\'s Aadhaar, photos of the boat, bank details', 'పడవ నిర్మాణదారు సర్టిఫికెట్ / కొనుగోలు రుజువు, ఇంజిన్ వివరాలు, యజమాని ఆధార్, పడవ ఫోటోలు, బ్యాంక్ వివరాలు')],
    fees: [fee(s('Registration and licence', 'నమోదు, లైసెన్స్'), s('Small fees as per the state rules (shown at application)', 'రాష్ట్ర నియమాల ప్రకారం చిన్న ఫీజులు (దరఖాస్తులో చూపిస్తారు)'))],
    steps: [
      s('Apply through the Fisheries Assistant / Fisheries Development Officer.', 'మత్స్య సహాయకుడు / మత్స్య అభివృద్ధి అధికారి ద్వారా దరఖాస్తు.'),
      s('Boat is inspected; registration number and licence issued on ReALCraft.', 'పడవ తనిఖీ; ReALCraftలో నమోదు నంబర్, లైసెన్స్ జారీ.'),
    ],
    stages: [
      {
        title: s('Register the boat and get a licence', 'పడవ నమోదు, లైసెన్స్'),
        steps: [
          s('Meet the Fisheries Assistant at the Village Secretariat / Fisheries Development Officer; the application is entered on ReALCraft (realcraft.gov.in) with boat, engine and owner details.', 'గ్రామ సచివాలయంలో మత్స్య సహాయకుడు / మత్స్య అభివృద్ధి అధికారిని కలవండి; పడవ, ఇంజిన్, యజమాని వివరాలతో ReALCraft (realcraft.gov.in)లో దరఖాస్తు నమోదు.'),
          s('Officials inspect and measure the boat; pay the fee; registration certificate and fishing licence are issued.', 'అధికారులు పడవను తనిఖీ చేసి కొలుస్తారు; ఫీజు చెల్లింపు; నమోదు సర్టిఫికెట్, ఫిషింగ్ లైసెన్స్ జారీ.'),
          s('Paint the registration number and the state colour code on the boat as instructed; renew the licence before it expires.', 'సూచించినట్లు పడవపై నమోదు నంబర్, రాష్ట్ర రంగు కోడ్ పెయింట్ చేయండి; గడువుకు ముందే లైసెన్స్ రెన్యువల్.'),
        ],
      },
      {
        title: s('Fisherman ID and benefits', 'మత్స్యకారుని ఐడీ, ప్రయోజనాలు'),
        steps: [
          s('Get the fisherman identity card through the Fisheries Assistant — it is checked by the Coast Guard / Navy at sea.', 'మత్స్య సహాయకుని ద్వారా మత్స్యకారుని గుర్తింపు కార్డు పొందండి — సముద్రంలో కోస్ట్ గార్డ్ / నేవీ తనిఖీ చేస్తారు.'),
          s('Registered boats and licensed fishermen get the fishing-ban support, diesel subsidy, group accident insurance and boat / net compensation after disasters (see Fishermen support).', 'నమోదైన పడవలు, లైసెన్స్ మత్స్యకారులకు వేట నిషేధ సహాయం, డీజిల్ సబ్సిడీ, గ్రూప్ ప్రమాద బీమా, విపత్తుల తర్వాత పడవ / వల పరిహారం (మత్స్యకారుల సహాయం చూడండి).'),
        ],
      },
      {
        title: s('Safety at sea', 'సముద్రంలో భద్రత'),
        steps: [
          s('Carry life jackets for everyone, a distress alert transmitter / communication device, GPS and the boat papers.', 'అందరికీ లైఫ్ జాకెట్లు, ఆపద సంకేత ట్రాన్స్‌మిటర్ / కమ్యూనికేషన్ పరికరం, GPS, పడవ పత్రాలు తీసుకెళ్లండి.'),
          s('Follow cyclone and weather warnings from the Fisheries Department / IMD; don\'t cross the international maritime boundary.', 'మత్స్య శాఖ / IMD తుఫాను, వాతావరణ హెచ్చరికలు పాటించండి; అంతర్జాతీయ సముద్ర సరిహద్దు దాటకండి.'),
          s('Emergency at sea: Coast Guard 1554 (toll-free) or 112.', 'సముద్రంలో అత్యవసరం: కోస్ట్ గార్డ్ 1554 (టోల్-ఫ్రీ) లేదా 112.'),
        ],
      },
    ],
    costExample: s('Unregistered boat: no ban-period support or compensation even after a cyclone — register first.', 'నమోదు కాని పడవ: తుఫాను తర్వాత కూడా నిషేధ కాల సహాయం, పరిహారం రావు — ముందు నమోదు చేయండి.'),
    whereToApply: [s('Fisheries Assistant (Village Secretariat); Fisheries Development Officer; realcraft.gov.in', 'మత్స్య సహాయకుడు (గ్రామ సచివాలయం); మత్స్య అభివృద్ధి అధికారి; realcraft.gov.in')],
    timeline: s('Usually a few weeks after inspection.', 'తనిఖీ తర్వాత సాధారణంగా కొన్ని వారాలు.'),
    tips: [s('Keep copies of registration and licence in a waterproof cover on the boat and photos on your phone.', 'నమోదు, లైసెన్స్ కాపీలు పడవలో వాటర్‌ప్రూఫ్ కవర్‌లో, ఫోటోలు మీ ఫోన్‌లో ఉంచండి.')],
    links: [{ label: 'ReALCraft', url: 'https://realcraft.gov.in' }],
    lastChecked: CHECKED,
  },
];

export const more2Dir: XDir[] = [
  D('ssc-inter-revaluation', 'education', ['Recounting / reverification within a week of results; supplementary exams', 'ఫలితాల తర్వాత వారంలో రీకౌంటింగ్ / రీవెరిఫికేషన్; సప్లిమెంటరీ'], ['bse.ap.gov.in; bie.ap.gov.in', 'bse.ap.gov.in; bie.ap.gov.in']),
  D('school-admissions', 'education', ['Navodaya, Sainik, KV, Gurukulam; NMMS ₹12,000 / year', 'నవోదయ, సైనిక్, KV, గురుకులం; NMMS ఏడాదికి ₹12,000'], ['navodaya.gov.in; aissee.nta.nic.in', 'navodaya.gov.in; aissee.nta.nic.in']),
  D('dog-bite-rabies', 'health', ['Wash 15 min; free anti-rabies vaccine same day', '15 నిమిషాలు కడగండి; అదే రోజు ఉచిత రేబిస్ టీకా'], ['PHC / government hospital', 'PHC / ప్రభుత్వ ఆసుపత్రి']),
  D('hospital-complaints', 'health', ['Overcharging, records, negligence, medicine prices', 'అధిక వసూలు, రికార్డులు, నిర్లక్ష్యం, మందుల ధరలు'], ['104; DMHO; consumer commission', '104; DMHO; వినియోగదారుల కమిషన్']),
  D('adoption', 'welfare', ['Legal adoption only through CARA', 'CARA ద్వారానే చట్టబద్ధ దత్తత'], ['cara.wcd.gov.in', 'cara.wcd.gov.in']),
  D('pmay-urban', 'welfare', ['₹2.5 lakh to build / up to ₹1.8 lakh loan interest subsidy (towns)', 'నిర్మాణానికి ₹2.5 లక్షలు / ₹1.8 లక్షల వరకు రుణ వడ్డీ సబ్సిడీ (పట్టణాలు)'], ['pmay-urban.gov.in; ward secretariat', 'pmay-urban.gov.in; వార్డు సచివాలయం']),
  D('shakti-women-safety', 'police', ['AP Police Shakti app SOS, safe travel; Shakti teams', 'AP పోలీస్ శక్తి యాప్ SOS, సురక్షిత ప్రయాణం; శక్తి టీమ్‌లు'], ['Shakti app; 112; 181', 'శక్తి యాప్; 112; 181']),
  D('soil-health-solar-pump', 'farm', ['Free soil test, fertiliser with Aadhaar, PM-KUSUM solar pumps', 'ఉచిత మట్టి పరీక్ష, ఆధార్‌తో ఎరువులు, PM-KUSUM సోలార్ పంపులు'], ['RSK; NREDCAP / DISCOM', 'RSK; NREDCAP / DISCOM']),
  D('fpo-natural-farming', 'farm', ['Farmer Producer Organisations; APCNF natural farming', 'రైతు ఉత్పత్తిదారుల సంస్థలు; APCNF ప్రకృతి వ్యవసాయం'], ['District agriculture office; NABARD; RSK', 'జిల్లా వ్యవసాయ కార్యాలయం; NABARD; RSK']),
  D('gst-registration', 'business', ['Free GSTIN; composition up to ₹1.5 crore; monthly / quarterly returns', 'ఉచిత GSTIN; ₹1.5 కోట్ల వరకు కంపోజిషన్; నెలవారీ / త్రైమాసిక రిటర్న్‌లు'], ['gst.gov.in', 'gst.gov.in']),
  D('fssai-licence', 'business', ['Food business: ₹100 registration up to ₹12 lakh turnover', 'ఆహార వ్యాపారం: ₹12 లక్షల టర్నోవర్ వరకు ₹100 నమోదు'], ['foscos.fssai.gov.in', 'foscos.fssai.gov.in']),
  D('trademark-registration', 'business', ['Brand name / logo — ₹4,500 per class for small businesses', 'బ్రాండ్ పేరు / లోగో — చిన్న వ్యాపారాలకు క్లాస్‌కు ₹4,500'], ['ipindia.gov.in', 'ipindia.gov.in']),
  D('msme-delayed-payment', 'business', ['Buyers must pay MSEs within 45 days, else 3× interest', 'కొనుగోలుదారులు 45 రోజుల్లో MSEలకు చెల్లించాలి, లేకపోతే 3 రెట్లు వడ్డీ'], ['samadhaan.msme.gov.in', 'samadhaan.msme.gov.in']),
  D('export-iec', 'business', ['IEC ₹500 online; update yearly; ICEGATE, RCMC', 'IEC ₹500 ఆన్‌లైన్; ఏటా అప్‌డేట్; ICEGATE, RCMC'], ['dgft.gov.in', 'dgft.gov.in']),
  D('agniveer-army', 'education', ['Age 17½–21, 4 years, Seva Nidhi ~₹10 lakh', 'వయస్సు 17½–21, 4 సంవత్సరాలు, సేవా నిధి ~₹10 లక్షలు'], ['joinindianarmy.nic.in', 'joinindianarmy.nic.in']),
  D('police-recruitment', 'education', ['Constable / SI: prelims, physical tests, final exam', 'కానిస్టేబుల్ / SI: ప్రిలిమ్స్, శారీరక పరీక్షలు, తుది పరీక్ష'], ['slprb.ap.gov.in', 'slprb.ap.gov.in']),
  D('fishing-boat-registration', 'farm', ['Boat registration & licence on ReALCraft; fisherman ID; Coast Guard 1554', 'ReALCraftలో పడవ నమోదు & లైసెన్స్; మత్స్యకారుని ఐడీ; కోస్ట్ గార్డ్ 1554'], ['Fisheries Assistant; realcraft.gov.in', 'మత్స్య సహాయకుడు; realcraft.gov.in']),
];
