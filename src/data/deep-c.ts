import { Guide } from '../types';
import { b, CHECKED } from './bi';

const s = (en: string, te: string) => b(en, te);
const P = (problem: [string, string], fix: [string, string]) => ({ problem: s(...problem), fix: s(...fix) });

/** Full walkthroughs, batch C (checked 20 Oct 2026): WhatsApp services, worker schemes, land & certificates, town services. */
export const deepC: Record<string, Partial<Guide>> = {
  'mana-mitra': {
    stages: [
      {
        title: s('Set it up once', 'ఒకసారి సెటప్'),
        steps: [
          s('Save 9552300009 as "Mana Mitra". Open WhatsApp and check the chat shows the green verified-business tick and "Andhra Pradesh Government".', '9552300009ని "మన మిత్ర"గా సేవ్ చేయండి. వాట్సాప్ తెరిచి చాట్‌లో ఆకుపచ్చ వెరిఫైడ్ టిక్, "Andhra Pradesh Government" ఉందో చూడండి.'),
          s('Send "Hi". Choose Telugu or English.', '"Hi" పంపండి. తెలుగు లేదా ఇంగ్లీష్ ఎంచుకోండి.'),
        ],
      },
      {
        title: s('Download a certificate', 'సర్టిఫికెట్ డౌన్‌లోడ్'),
        steps: [
          s('Tap "Select Service" → Citizen services / Certificates → choose the certificate (caste, income, birth, death, family member…).', '"Select Service" → పౌర సేవలు / సర్టిఫికెట్లు → సర్టిఫికెట్ ఎంచుకోండి (కుల, ఆదాయ, జనన, మరణ, కుటుంబ సభ్యుల…).'),
          s('Enter the application number from your Secretariat / MeeSeva receipt (or Aadhaar where asked) and the OTP.', 'సచివాలయం / మీసేవ రసీదులోని అప్లికేషన్ నంబర్ (లేదా అడిగితే ఆధార్), OTP నమోదు చేయండి.'),
          s('The signed PDF arrives in the chat — forward it to yourself or save it to DigiLocker.', 'సంతకం చేసిన PDF చాట్‌లోనే వస్తుంది — మీకే ఫార్వర్డ్ చేయండి లేదా డిజిలాకర్‌లో సేవ్ చేయండి.'),
        ],
      },
      {
        title: s('Other things you can do there', 'అక్కడ చేయగల ఇతర పనులు'),
        steps: [
          s('Pay electricity bills, property tax and other dues; book APSRTC tickets; book temple darshan and sevas; book SADAREM slots.', 'కరెంట్ బిల్లులు, ఆస్తి పన్ను, ఇతర బకాయిలు చెల్లించడం; APSRTC టికెట్లు బుక్; ఆలయ దర్శనం, సేవలు బుక్; SADAREM స్లాట్లు బుక్.'),
          s('Raise a grievance (complaint) and track it with the number you get.', 'ఫిర్యాదు చేసి, వచ్చిన నంబర్‌తో ట్రాక్ చేయండి.'),
        ],
      },
    ],
    costExample: s('Using Mana Mitra is free; you pay only the actual bill, ticket or fee.', 'మన మిత్ర వాడకం ఉచితం; అసలు బిల్లు, టికెట్ లేదా ఫీజు మాత్రమే చెల్లిస్తారు.'),
    problems: [P(['OTP not coming.', 'OTP రావడం లేదు.'], ['Use the WhatsApp number that is linked to your Aadhaar, or link the mobile at an Aadhaar centre.', 'ఆధార్‌కు లింక్ అయిన వాట్సాప్ నంబర్ వాడండి, లేదా ఆధార్ కేంద్రంలో మొబైల్ లింక్ చేయించండి.']), P(['Someone calls saying they are "from Mana Mitra" and asks for OTP.', '"మన మిత్ర నుండి" అని ఎవరైనా కాల్ చేసి OTP అడుగుతున్నారు.'], ['Mana Mitra never calls for OTPs. Hang up and report to 1930.', 'మన మిత్ర ఎప్పుడూ OTP కోసం కాల్ చేయదు. ఫోన్ పెట్టేసి 1930కి ఫిర్యాదు చేయండి.'])],
    lastChecked: CHECKED,
  },

  'stree-shakti-free-bus': {
    stages: [
      {
        title: s('Before you travel', 'ప్రయాణానికి ముందు'),
        steps: [
          s('Carry one original ID with an AP address: Aadhaar, voter ID, rice card or driving licence (a clear phone copy / DigiLocker is usually accepted).', 'AP చిరునామాతో ఒక అసలు ID తీసుకెళ్లండి: ఆధార్, ఓటర్ ID, రైస్ కార్డు లేదా డ్రైవింగ్ లైసెన్స్ (స్పష్టమైన ఫోన్ కాపీ / డిజిలాకర్ సాధారణంగా అంగీకరిస్తారు).'),
          s('Check the bus type on the board: Pallevelugu, Ultra Pallevelugu, City Ordinary, Metro Express and Express are free. Super Luxury, non-stop, AC and inter-state buses are not.', 'బోర్డుపై బస్సు రకం చూడండి: పల్లెవెలుగు, అల్ట్రా పల్లెవెలుగు, సిటీ ఆర్డినరీ, మెట్రో ఎక్స్‌ప్రెస్, ఎక్స్‌ప్రెస్ ఉచితం. సూపర్ లగ్జరీ, నాన్-స్టాప్, AC, అంతర్రాష్ట్ర బస్సులు కావు.'),
        ],
      },
      {
        title: s('On the bus', 'బస్సులో'),
        steps: [
          s('Tell the conductor your destination and show your ID.', 'కండక్టర్‌కు గమ్యం చెప్పి ID చూపించండి.'),
          s('Take the zero-fare ticket and keep it till you get down — checking staff may ask for it.', 'జీరో-ఫేర్ టికెట్ తీసుకుని దిగే వరకు ఉంచుకోండి — తనిఖీ సిబ్బంది అడగవచ్చు.'),
        ],
      },
    ],
    costExample: s('A daily 40 km Express trip that cost about ₹60 each way is now ₹0 — up to ₹3,000+ saved a month.', 'రోజూ 40 కి.మీ. ఎక్స్‌ప్రెస్ ప్రయాణం ఒక్కవైపు సుమారు ₹60 ఉండేది, ఇప్పుడు ₹0 — నెలకు ₹3,000+ ఆదా.'),
    problems: [P(['Conductor refuses the free ticket.', 'కండక్టర్ ఉచిత టికెట్ ఇవ్వడం లేదు.'], ['Check the bus type is covered. If it is, note the bus number and time and complain to the depot manager or APSRTC call centre.', 'బస్సు రకం కవర్ అవుతుందో చూడండి. అయితే బస్సు నంబర్, సమయం నోట్ చేసి డిపో మేనేజర్ లేదా APSRTC కాల్ సెంటర్‌కు ఫిర్యాదు చేయండి.'])],
    lastChecked: CHECKED,
  },

  'auto-drivers-sevalo': {
    stages: [
      {
        title: s('Keep your papers valid', 'మీ పత్రాలు చెల్లుబాటులో ఉంచండి'),
        steps: [
          s('Driving licence (with transport endorsement where required), RC of the auto/cab, fitness, insurance and permit should be valid — they are verified.', 'డ్రైవింగ్ లైసెన్స్ (అవసరమైనచోట ట్రాన్స్‌పోర్ట్ ఎండార్స్‌మెంట్‌తో), ఆటో/క్యాబ్ RC, ఫిట్‌నెస్, బీమా, పర్మిట్ చెల్లుబాటులో ఉండాలి — తనిఖీ చేస్తారు.'),
          s('Bank account must be Aadhaar-seeded for DBT.', 'బ్యాంక్ ఖాతా DBT కోసం ఆధార్ సీడ్ అయి ఉండాలి.'),
        ],
      },
      {
        title: s('Apply when the window opens', 'విండో తెరిచినప్పుడు దరఖాస్తు'),
        steps: [
          s('Watch for the announcement (news, Secretariat). Go to your Village / Ward Secretariat with DL, RC, Aadhaar, rice card and bank passbook.', 'ప్రకటన కోసం చూడండి (వార్తలు, సచివాలయం). DL, RC, ఆధార్, రైస్ కార్డు, బ్యాంక్ పాస్‌బుక్‌తో మీ గ్రామ / వార్డు సచివాలయానికి వెళ్లండి.'),
          s('Staff enter the details and take your fingerprint; keep the acknowledgement.', 'సిబ్బంది వివరాలు నమోదు చేసి వేలిముద్ర తీసుకుంటారు; అక్నాలెడ్జ్‌మెంట్ ఉంచుకోండి.'),
          s('Check the eligible list displayed at the Secretariat; raise objections there in time if you are missed.', 'సచివాలయంలో ప్రదర్శించిన అర్హుల జాబితా చూడండి; వదిలేస్తే సమయానికి అక్కడే అభ్యంతరం చెప్పండి.'),
        ],
      },
    ],
    costExample: s('₹15,000 a year by DBT. Applying is free.', 'DBT ద్వారా ఏడాదికి ₹15,000. దరఖాస్తు ఉచితం.'),
    problems: [P(['Rejected because RC is in someone else\'s name.', 'RC వేరొకరి పేరుపై ఉందని తిరస్కరించారు.'], ['Transfer the RC to your name first (see the RC transfer guide), then apply in the next round.', 'ముందుగా RCని మీ పేరుకు బదిలీ చేయండి (RC బదిలీ గైడ్ చూడండి), తర్వాత తదుపరి రౌండ్‌లో దరఖాస్తు చేయండి.'])],
    afterwards: [s('Register on e-Shram for free accident insurance.', 'ఉచిత ప్రమాద బీమా కోసం e-Shramలో నమోదు చేసుకోండి.')],
    lastChecked: CHECKED,
  },

  'fishermen-support': {
    stages: [
      {
        title: s('Be in the pre-ban survey', 'నిషేధానికి ముందు సర్వేలో ఉండండి'),
        steps: [
          s('Before 15 April, the Fisheries Assistant at your Secretariat surveys boats and crew. Be present with Aadhaar, rice card, boat registration / fisherman ID and bank passbook.', '15 ఏప్రిల్‌కు ముందు మీ సచివాలయంలోని మత్స్య సహాయకుడు బోట్లు, సిబ్బందిని సర్వే చేస్తారు. ఆధార్, రైస్ కార్డు, బోట్ రిజిస్ట్రేషన్ / మత్స్యకార ID, బ్యాంక్ పాస్‌బుక్‌తో హాజరవ్వండి.'),
          s('Crew members: make sure the boat owner lists you in the crew details.', 'సిబ్బంది: బోట్ యజమాని మిమ్మల్ని సిబ్బంది వివరాల్లో చేర్చేలా చూసుకోండి.'),
        ],
      },
      {
        title: s('Check the list and get paid', 'జాబితా చూసి చెల్లింపు పొందడం'),
        steps: [
          s('The draft eligible list is displayed at the Secretariat — check your name, Aadhaar and bank.', 'డ్రాఫ్ట్ అర్హుల జాబితా సచివాలయంలో ప్రదర్శిస్తారు — మీ పేరు, ఆధార్, బ్యాంక్ చూడండి.'),
          s('If missed, give a written objection with proofs to the Fisheries Assistant / FDO within the time given.', 'వదిలేస్తే, ఇచ్చిన గడువులో రుజువులతో మత్స్య సహాయకుడికి / FDOకు రాతపూర్వక అభ్యంతరం ఇవ్వండి.'),
          s('₹20,000 is credited by DBT around the ban period.', 'నిషేధ కాలంలో DBT ద్వారా ₹20,000 జమ.'),
        ],
      },
    ],
    costExample: s('₹20,000 per eligible family per year. Free to apply.', 'ప్రతి అర్హ కుటుంబానికి ఏడాదికి ₹20,000. దరఖాస్తు ఉచితం.'),
    problems: [P(['Money not received though listed.', 'జాబితాలో ఉన్నా డబ్బు రాలేదు.'], ['Check Aadhaar-bank NPCI seeding, then tell the Fisheries Assistant to re-push the payment.', 'ఆధార్-బ్యాంక్ NPCI సీడింగ్ చూసి, చెల్లింపు మళ్లీ పంపమని మత్స్య సహాయకుడికి చెప్పండి.'])],
    afterwards: [s('Ask about accident insurance for fishermen and the fishermen pension (NTR Bharosa) at 50+.', 'మత్స్యకారుల ప్రమాద బీమా, 50+ వయస్సులో మత్స్యకార పెన్షన్ (NTR భరోసా) గురించి అడగండి.')],
    lastChecked: CHECKED,
  },

  'nethanna-sevalo': {
    stages: [
      {
        title: s('Register your loom', 'మీ మగ్గం నమోదు'),
        steps: [
          s('Your working loom must be registered and geo-tagged with the Handlooms & Textiles department — ask the Handlooms Assistant Director office or your weavers\' society.', 'మీ పనిచేసే మగ్గం చేనేత & జౌళి శాఖలో నమోదై జియో-ట్యాగ్ అయి ఉండాలి — చేనేత సహాయ సంచాలకుల కార్యాలయం లేదా మీ నేత సంఘాన్ని అడగండి.'),
          s('Keep Aadhaar, rice card, weaver ID and an Aadhaar-seeded bank account ready.', 'ఆధార్, రైస్ కార్డు, నేత ID, ఆధార్ సీడ్ అయిన బ్యాంక్ ఖాతా సిద్ధంగా ఉంచండి.'),
        ],
      },
      {
        title: s('Verification and payment', 'ధృవీకరణ, చెల్లింపు'),
        steps: [
          s('During the survey, Secretariat / Handlooms staff visit and photograph the loom.', 'సర్వే సమయంలో సచివాలయ / చేనేత సిబ్బంది వచ్చి మగ్గాన్ని ఫోటో తీస్తారు.'),
          s('Check the eligible list at the Secretariat; object in time if missed.', 'సచివాలయంలో అర్హుల జాబితా చూడండి; వదిలేస్తే సమయానికి అభ్యంతరం చెప్పండి.'),
          s('₹25,000 is credited around National Handloom Day (7 August).', 'జాతీయ చేనేత దినోత్సవం (7 ఆగస్టు) సమయంలో ₹25,000 జమ.'),
        ],
      },
    ],
    costExample: s('₹25,000 a year per eligible weaver family. Free to apply.', 'ప్రతి అర్హ నేత కుటుంబానికి ఏడాదికి ₹25,000. దరఖాస్తు ఉచితం.'),
    problems: [P(['Loom not found in the survey.', 'సర్వేలో మగ్గం కనిపించలేదు.'], ['Apply for loom registration / geo-tagging at the Handlooms office, then ask to be added before the list is final.', 'చేనేత కార్యాలయంలో మగ్గం నమోదు / జియో-ట్యాగింగ్‌కు దరఖాస్తు చేసి, జాబితా ఖరారు కాకముందే చేర్చమని అడగండి.'])],
    afterwards: [s('Weavers 50+ can apply for the weavers\' pension under NTR Bharosa.', '50+ నేతలు NTR భరోసా కింద నేత పెన్షన్‌కు దరఖాస్తు చేయవచ్చు.')],
    lastChecked: CHECKED,
  },

  'pm-kisan': {
    stages: [
      {
        title: s('New registration', 'కొత్త నమోదు'),
        steps: [
          s('pmkisan.gov.in → "New Farmer Registration" → Rural / Urban → Aadhaar + mobile + state → OTP.', 'pmkisan.gov.in → "New Farmer Registration" → Rural / Urban → ఆధార్ + మొబైల్ + రాష్ట్రం → OTP.'),
          s('Fill land details (survey number, extent) exactly as in 1B, upload the land document, submit. Or ask the RSK to register you.', '1Bలో ఉన్నట్లే భూమి వివరాలు (సర్వే నంబర్, విస్తీర్ణం) నింపి, భూమి పత్రం అప్‌లోడ్ చేసి సబ్మిట్ చేయండి. లేదా RSKను నమోదు చేయమని అడగండి.'),
          s('The State verifies land and Aadhaar; approval shows in "Know Your Status".', 'రాష్ట్రం భూమి, ఆధార్ ధృవీకరిస్తుంది; ఆమోదం "Know Your Status"లో కనిపిస్తుంది.'),
        ],
      },
      {
        title: s('Keep receiving it', 'కొనసాగించడం'),
        steps: [
          s('e-KYC: pmkisan.gov.in → "e-KYC" → Aadhaar OTP; or face authentication in the PM-KISAN app; or fingerprint at the RSK / CSC.', 'e-KYC: pmkisan.gov.in → "e-KYC" → ఆధార్ OTP; లేదా PM-KISAN యాప్‌లో ఫేస్ ధృవీకరణ; లేదా RSK / CSCలో వేలిముద్ర.'),
          s('Farmer ID (AgriStack): get it created at the RSK with Aadhaar and land details.', 'ఫార్మర్ ID (అగ్రిస్టాక్): ఆధార్, భూమి వివరాలతో RSKలో తయారు చేయించండి.'),
          s('Bank must be Aadhaar-seeded (NPCI). Check "Know Your Status" before each instalment.', 'బ్యాంక్ ఆధార్ సీడ్ (NPCI) అయి ఉండాలి. ప్రతి విడతకు ముందు "Know Your Status" చూడండి.'),
        ],
      },
    ],
    costExample: s('₹2,000 × 3 = ₹6,000 a year (part of AP\'s ₹20,000 Annadata Sukhibhava).', '₹2,000 × 3 = ఏడాదికి ₹6,000 (AP ₹20,000 అన్నదాత సుఖీభవలో భాగం).'),
    problems: [P(['Status says "Land seeding: No".', 'స్టేటస్‌లో "Land seeding: No".'], ['Ask the Agriculture Assistant at the RSK to seed your land record; fix 1B first if wrong.', 'మీ భూమి రికార్డు సీడ్ చేయమని RSKలో వ్యవసాయ సహాయకుడిని అడగండి; 1B తప్పయితే ముందు సరిచేయండి.']), P(['Instalments stopped.', 'విడతలు ఆగిపోయాయి.'], ['Usually e-KYC or NPCI. Fix both, then call 155261 or raise a grievance on the portal.', 'సాధారణంగా e-KYC లేదా NPCI. రెండూ సరిచేసి 155261కి కాల్ చేయండి లేదా పోర్టల్‌లో ఫిర్యాదు చేయండి.'])],
    lastChecked: CHECKED,
  },

  'certified-copy': {
    stages: [
      {
        title: s('Find the document number', 'డాక్యుమెంట్ నంబర్ కనుక్కోవడం'),
        steps: [
          s('Look at any old photocopy, EC or loan papers for "Document No. / Year / SRO".', 'ఏ పాత జిరాక్స్, EC లేదా రుణ పత్రాల్లోనైనా "Document No. / Year / SRO" చూడండి.'),
          s('Don\'t have it? Do a free EC search on registration.ap.gov.in with survey / door number — each entry shows the document number.', 'లేదా? సర్వే / డోర్ నంబర్‌తో registration.ap.gov.inలో ఉచిత EC సెర్చ్ చేయండి — ప్రతి ఎంట్రీలో డాక్యుమెంట్ నంబర్ ఉంటుంది.'),
        ],
      },
      {
        title: s('Apply and receive', 'దరఖాస్తు, పొందడం'),
        steps: [
          s('registration.ap.gov.in → "EC, CC & MV Assistance" → Certified Copy → enter SRO, document number, year → log in → pay the fee shown.', 'registration.ap.gov.in → "EC, CC & MV Assistance" → Certified Copy → SRO, డాక్యుమెంట్ నంబర్, సంవత్సరం → లాగిన్ → చూపిన ఫీజు చెల్లించండి.'),
          s('Download the digitally signed copy, or apply at the SRO / MeeSeva and collect it.', 'డిజిటల్ సంతకం కాపీ డౌన్‌లోడ్ చేయండి, లేదా SRO / మీసేవలో దరఖాస్తు చేసి తీసుకోండి.'),
          s('Original lost? File a police lost-document report and keep it with the CC — banks ask for both.', 'అసలు పోయిందా? పోలీసు పోయిన పత్రం రిపోర్ట్ చేసి CCతో పాటు ఉంచండి — బ్యాంకులు రెండూ అడుగుతాయి.'),
        ],
      },
    ],
    costExample: s('A small fee that depends on pages (usually a few hundred rupees at most).', 'పేజీలను బట్టి చిన్న ఫీజు (సాధారణంగా గరిష్ఠంగా కొన్ని వందల రూపాయలు).'),
    problems: [P(['Very old deed (before 1983) not online.', 'చాలా పాత డీడ్ (1983కి ముందు) ఆన్‌లైన్‌లో లేదు.'], ['Apply at the SRO in person; staff search the physical volumes.', 'SROలో స్వయంగా దరఖాస్తు చేయండి; సిబ్బంది భౌతిక వాల్యూమ్‌లలో వెతుకుతారు.'])],
    afterwards: [s('Scan all property papers into DigiLocker / email so you never depend on one paper copy.', 'అన్ని ఆస్తి పత్రాలు డిజిలాకర్ / ఈమెయిల్‌లో స్కాన్ చేసి ఉంచండి — ఒక్క కాగితంపై ఆధారపడకుండా.')],
    lastChecked: CHECKED,
  },

  'land-records': {
    stages: [
      {
        title: s('View 1B and Adangal (free)', '1B, అడంగల్ చూడడం (ఉచితం)'),
        steps: [
          s('meebhoomi.ap.gov.in → "ROR 1B" → district, mandal, village → search by survey number, account (khata) number, pattadar name or Aadhaar → captcha.', 'meebhoomi.ap.gov.in → "ROR 1B" → జిల్లా, మండలం, గ్రామం → సర్వే నంబర్, ఖాతా నంబర్, పట్టాదారు పేరు లేదా ఆధార్‌తో వెతకండి → క్యాప్చా.'),
          s('Check: pattadar name, father\'s name, survey number, extent, land type (wet / dry).', 'చూడండి: పట్టాదారు పేరు, తండ్రి పేరు, సర్వే నంబర్, విస్తీర్ణం, భూమి రకం (మాగాణి / మెట్ట).'),
          s('"Adangal" in the same menu shows cultivation details by season.', 'అదే మెనూలోని "అడంగల్" సీజన్ వారీ సాగు వివరాలు చూపిస్తుంది.'),
          s('Maps: FMB / LP map section (resurveyed villages show the new LP map).', 'పటాలు: FMB / LP మ్యాప్ విభాగం (రీసర్వే అయిన గ్రామాల్లో కొత్త LP మ్యాప్).'),
        ],
      },
      {
        title: s('Get a pattadar passbook', 'పట్టాదారు పాస్‌బుక్ పొందడం'),
        steps: [
          s('Apply at the Village Secretariat for a new / duplicate e-passbook with the deed, 1B copy, Aadhaar and photo.', 'డీడ్, 1B కాపీ, ఆధార్, ఫోటోతో కొత్త / డూప్లికేట్ ఇ-పాస్‌బుక్‌కు గ్రామ సచివాలయంలో దరఖాస్తు చేయండి.'),
          s('VRO verifies; Tahsildar approves; collect it at the Secretariat.', 'VRO ధృవీకరిస్తారు; తహసీల్దార్ ఆమోదిస్తారు; సచివాలయంలో తీసుకోండి.'),
          s('Ask the VRO to seed your Aadhaar to your land account (needed for farmer schemes).', 'మీ భూమి ఖాతాకు ఆధార్ సీడ్ చేయమని VROను అడగండి (రైతు పథకాలకు అవసరం).'),
        ],
      },
    ],
    costExample: s('Viewing: free. Passbook and certified copies: small user charges printed on the receipt.', 'చూడడం: ఉచితం. పాస్‌బుక్, సర్టిఫైడ్ కాపీలు: రసీదుపై ముద్రించిన చిన్న యూజర్ ఛార్జీలు.'),
    problems: [P(['My land shows in someone else\'s name.', 'నా భూమి వేరొకరి పేరుపై కనిపిస్తోంది.'], ['Download and keep a copy now, then apply for "Mutation for Correction" with your deed and EC; also raise a PGRS grievance. If someone registered it fraudulently, file a police complaint.', 'ఇప్పుడే కాపీ డౌన్‌లోడ్ చేసి, మీ డీడ్, ECతో "Mutation for Correction"కు దరఖాస్తు చేయండి; PGRS ఫిర్యాదు కూడా. ఎవరైనా మోసంతో రిజిస్టర్ చేస్తే పోలీసు ఫిర్యాదు చేయండి.'])],
    lastChecked: CHECKED,
  },

  'land-resurvey': {
    stages: [
      {
        title: s('When resurvey comes to your village', 'మీ గ్రామానికి రీసర్వే వచ్చినప్పుడు'),
        steps: [
          s('Watch for the notice at the Secretariat / gram sabha with your survey numbers and dates.', 'మీ సర్వే నంబర్లు, తేదీలతో సచివాలయం / గ్రామసభ నోటీసు కోసం చూడండి.'),
          s('On the day, be at your field (or send a family member with a signed authorisation) with deed, 1B / passbook and old sketch.', 'ఆ రోజు డీడ్, 1B / పాస్‌బుక్, పాత స్కెచ్‌తో మీ పొలంలో ఉండండి (లేదా సంతకం చేసిన అధికార పత్రంతో కుటుంబ సభ్యుని పంపండి).'),
          s('Show the surveyor every boundary stone / bund; agree points with neighbours in front of the team.', 'సర్వేయర్‌కు ప్రతి హద్దు రాయి / గట్టు చూపించండి; బృందం ముందే పొరుగువారితో పాయింట్లు ఒప్పుకోండి.'),
        ],
      },
      {
        title: s('Check the draft and object if wrong', 'డ్రాఫ్ట్ చూసి తప్పయితే అభ్యంతరం'),
        steps: [
          s('The draft land register and map are displayed at the Secretariat — check name, extent and shape.', 'డ్రాఫ్ట్ భూ రిజిస్టర్, పటం సచివాలయంలో ప్రదర్శిస్తారు — పేరు, విస్తీర్ణం, ఆకారం చూడండి.'),
          s('If wrong, file a written objection with proofs within the notice period; get an acknowledgement.', 'తప్పయితే, నోటీసు గడువులో రుజువులతో రాతపూర్వక అభ్యంతరం దాఖలు చేసి రసీదు తీసుకోండి.'),
          s('The mobile magistrate / Tahsildar hears it; appeal to the RDO if not satisfied.', 'మొబైల్ మేజిస్ట్రేట్ / తహసీల్దార్ విచారిస్తారు; సంతృప్తి లేకపోతే RDOకు అప్పీల్ చేయండి.'),
        ],
      },
      {
        title: s('After finalisation', 'ఖరారు తర్వాత'),
        steps: [
          s('Collect the new LP map and updated passbook; check them on Meebhoomi.', 'కొత్త LP మ్యాప్, అప్‌డేట్ అయిన పాస్‌బుక్ తీసుకుని మీభూమిలో చూడండి.'),
          s('Boundary dispute outside resurvey: apply at the Secretariat for an individual survey by the Village Surveyor (listed charge).', 'రీసర్వే బయట హద్దు వివాదం: గ్రామ సర్వేయర్‌తో వ్యక్తిగత సర్వేకు సచివాలయంలో దరఖాస్తు చేయండి (నిర్ణీత ఛార్జీ).'),
        ],
      },
    ],
    costExample: s('Government resurvey: free. Individual survey request: the listed survey charge on the receipt.', 'ప్రభుత్వ రీసర్వే: ఉచితం. వ్యక్తిగత సర్వే అభ్యర్థన: రసీదుపై నిర్ణీత సర్వే ఛార్జీ.'),
    problems: [P(['Missed the objection period.', 'అభ్యంతర గడువు దాటిపోయింది.'], ['Apply to the Tahsildar / RDO anyway with proofs and the reason for delay; corrections are harder but possible.', 'అయినా రుజువులు, ఆలస్య కారణంతో తహసీల్దార్ / RDOకు దరఖాస్తు చేయండి; సవరణలు కష్టం కానీ సాధ్యం.'])],
    lastChecked: CHECKED,
  },

  'land-subdivision': {
    stages: [
      {
        title: s('Apply', 'దరఖాస్తు'),
        steps: [
          s('At the Village Secretariat or MeeSeva, ask for "Sub-division" with your registered deed, 1B, map copy, EC and Aadhaar; pay the listed charge.', 'గ్రామ సచివాలయం లేదా మీసేవలో రిజిస్టర్డ్ డీడ్, 1B, పటం కాపీ, EC, ఆధార్‌తో "Sub-division" అడిగి నిర్ణీత ఛార్జీ చెల్లించండి.'),
          s('Inherited land: add death certificate and Family Member Certificate, and a consent letter from the other heirs.', 'వారసత్వ భూమి: మరణ ధృవీకరణ, కుటుంబ సభ్యుల ధృవీకరణ, ఇతర వారసుల అంగీకార లేఖ జత చేయండి.'),
        ],
      },
      {
        title: s('Survey and approval', 'సర్వే, ఆమోదం'),
        steps: [
          s('The surveyor informs you and the neighbouring owners of the date; be present and show the boundaries of your part.', 'సర్వేయర్ మీకు, పొరుగు యజమానులకు తేదీ తెలియజేస్తారు; హాజరై మీ భాగం హద్దులు చూపించండి.'),
          s('A sketch with new sub-numbers (e.g. 45/1, 45/2) is prepared; the Tahsildar approves.', 'కొత్త ఉప-సంఖ్యలతో (ఉదా: 45/1, 45/2) స్కెచ్ తయారు చేస్తారు; తహసీల్దార్ ఆమోదిస్తారు.'),
          s('1B and the map update; apply for mutation / passbook in your name if not automatic.', '1B, పటం అప్‌డేట్ అవుతాయి; ఆటోమేటిక్‌గా కాకపోతే మీ పేరుపై మ్యుటేషన్ / పాస్‌బుక్‌కు దరఖాస్తు చేయండి.'),
        ],
      },
    ],
    costExample: s('Application + survey charges as listed at the Secretariat (printed on the receipt).', 'సచివాలయంలో నిర్ణీత దరఖాస్తు + సర్వే ఛార్జీలు (రసీదుపై ముద్రించినవి).'),
    problems: [P(['Neighbour disputes the line.', 'పొరుగువారు హద్దును వివాదం చేస్తున్నారు.'], ['The surveyor records both claims; the Tahsildar decides from records. Appeal to the RDO if needed.', 'సర్వేయర్ ఇద్దరి వాదనలు నమోదు చేస్తారు; రికార్డుల ఆధారంగా తహసీల్దార్ నిర్ణయిస్తారు. అవసరమైతే RDOకు అప్పీల్.'])],
    lastChecked: CHECKED,
  },

  'land-conversion': {
    stages: [
      {
        title: s('Check what the land can be used for', 'భూమిని దేనికి వాడవచ్చో చూడడం'),
        steps: [
          s('Ask the development authority / municipal town-planning office (or panchayat) for the master-plan land use of your survey number: residential, commercial, agricultural, green belt…', 'మీ సర్వే నంబర్ మాస్టర్ ప్లాన్ భూ వినియోగం గురించి డెవలప్‌మెంట్ అథారిటీ / మున్సిపల్ టౌన్ ప్లానింగ్ కార్యాలయాన్ని (లేదా పంచాయతీని) అడగండి: నివాస, వాణిజ్య, వ్యవసాయ, గ్రీన్ బెల్ట్…'),
          s('Check the 22A list and that the land isn\'t assigned / tank / government land.', '22A జాబితా, భూమి అసైన్డ్ / చెరువు / ప్రభుత్వ భూమి కాదని చూడండి.'),
        ],
      },
      {
        title: s('Get the right approval', 'సరైన ఆమోదం పొందడం'),
        steps: [
          s('Making plots: a licensed technical person applies for layout approval on APDPMS (roads, open space and drains must be given as per rules).', 'ప్లాట్లు వేయడం: లైసెన్స్ టెక్నికల్ వ్యక్తి APDPMSలో లేఅవుట్ ఆమోదానికి దరఖాస్తు చేస్తారు (నియమాల ప్రకారం రోడ్లు, ఖాళీ స్థలం, డ్రైన్లు ఇవ్వాలి).'),
          s('One house on your own land: apply for building permission (see that guide).', 'సొంత భూమిపై ఒక ఇల్లు: బిల్డింగ్ అనుమతికి దరఖాస్తు చేయండి (ఆ గైడ్ చూడండి).'),
          s('Ask the Tahsildar whether any old NALA assessment from before the 2025 repeal is pending on your land.', '2025 రద్దుకు ముందటి పాత NALA అసెస్‌మెంట్ మీ భూమిపై పెండింగ్‌లో ఉందో తహసీల్దార్‌ను అడగండి.'),
        ],
      },
    ],
    costExample: s('Layout / development charges are calculated by the portal from area and location; no separate NALA conversion fee since the 2025 repeal.', 'లేఅవుట్ / డెవలప్‌మెంట్ ఛార్జీలు విస్తీర్ణం, ప్రాంతం ఆధారంగా పోర్టల్ లెక్కిస్తుంది; 2025 రద్దు తర్వాత వేరే NALA మార్పిడి ఫీజు లేదు.'),
    problems: [P(['Bought a plot in an unapproved layout on farm land.', 'వ్యవసాయ భూమిపై అనధికార లేఅవుట్‌లో ప్లాట్ కొన్నారు.'], ['Regularise under LRS when a window opens; until then building permission and loans are difficult.', 'అవకాశం తెరిచినప్పుడు LRS కింద క్రమబద్ధీకరించండి; అప్పటి వరకు బిల్డింగ్ అనుమతి, రుణాలు కష్టం.'])],
    lastChecked: CHECKED,
  },

  'ews-certificate': {
    stages: [
      {
        title: s('Check eligibility and the format you need', 'అర్హత, కావాల్సిన ఫార్మాట్ చూడడం'),
        steps: [
          s('Not SC/ST/BC; family income below ₹8 lakh in the previous financial year. For central posts also check the property limits (5 acres farm land, 1,000 sq ft flat, 100/200 sq yd plot).', 'SC/ST/BC కాదు; గత ఆర్థిక సంవత్సరంలో కుటుంబ ఆదాయం ₹8 లక్షల లోపు. కేంద్ర ఉద్యోగాలకు ఆస్తి పరిమితులు కూడా చూడండి (5 ఎకరాల వ్యవసాయ భూమి, 1,000 చ.అ. ఫ్లాట్, 100/200 చ.గ. ప్లాట్).'),
          s('Central jobs / IIT / NIT / NEET-JEE central quota → central "Annexure-I" format. AP jobs / colleges → state format. Ask for the right one.', 'కేంద్ర ఉద్యోగాలు / IIT / NIT / NEET-JEE కేంద్ర కోటా → కేంద్ర "Annexure-I" ఫార్మాట్. AP ఉద్యోగాలు / కాలేజీలు → రాష్ట్ర ఫార్మాట్. సరైనది అడగండి.'),
        ],
      },
      {
        title: s('Apply', 'దరఖాస్తు'),
        steps: [
          s('MeeSeva or Village / Ward Secretariat → "EWS Certificate" → Aadhaar, rice card / voter ID, income proof (ITR / salary slips), self-declaration of income and assets, photo.', 'మీసేవ లేదా గ్రామ / వార్డు సచివాలయం → "EWS Certificate" → ఆధార్, రైస్ కార్డు / ఓటర్ ID, ఆదాయ రుజువు (ITR / జీతం స్లిప్‌లు), ఆదాయ, ఆస్తుల స్వీయ ప్రకటన, ఫోటో.'),
          s('VRO / RI verify; the Tahsildar signs. Download on Mana Mitra or collect.', 'VRO / RI ధృవీకరిస్తారు; తహసీల్దార్ సంతకం. మన మిత్రలో డౌన్‌లోడ్ చేయండి లేదా తీసుకోండి.'),
          s('Check the financial year printed on it matches what your exam / admission asks.', 'దానిపై ముద్రించిన ఆర్థిక సంవత్సరం మీ పరీక్ష / ప్రవేశం అడిగినదానితో సరిపోతుందో చూడండి.'),
        ],
      },
    ],
    costExample: s('About ₹50 at MeeSeva. Needs to be taken fresh every financial year.', 'మీసేవలో సుమారు ₹50. ప్రతి ఆర్థిక సంవత్సరం కొత్తగా తీసుకోవాలి.'),
    problems: [P(['Recruiter rejected the state-format certificate.', 'రిక్రూటర్ రాష్ట్ర ఫార్మాట్ సర్టిఫికెట్ తిరస్కరించారు.'], ['Apply again specifically for the central Annexure-I format.', 'ప్రత్యేకంగా కేంద్ర Annexure-I ఫార్మాట్‌కు మళ్లీ దరఖాస్తు చేయండి.'])],
    lastChecked: CHECKED,
  },

  'obc-ncl-certificate': {
    stages: [
      {
        title: s('Check you are in the central list', 'కేంద్ర జాబితాలో ఉన్నారో చూడడం'),
        steps: [
          s('Search your caste in the central OBC list for Andhra Pradesh on ncbc.nic.in. Some AP BC groups are not in the central list.', 'ncbc.nic.inలో ఆంధ్రప్రదేశ్ కేంద్ర OBC జాబితాలో మీ కులం వెతకండి. కొన్ని AP BC వర్గాలు కేంద్ర జాబితాలో లేవు.'),
          s('Creamy layer check: parents\' income (not counting salary and farm income) below ₹8 lakh a year for 3 years, and parents not in high-rank posts.', 'క్రీమీ లేయర్ తనిఖీ: తల్లిదండ్రుల ఆదాయం (జీతం, వ్యవసాయ ఆదాయం కాకుండా) 3 ఏళ్లు ఏడాదికి ₹8 లక్షల లోపు, తల్లిదండ్రులు ఉన్నత పదవుల్లో లేకపోవడం.'),
        ],
      },
      {
        title: s('Apply', 'దరఖాస్తు'),
        steps: [
          s('MeeSeva / Secretariat → "OBC (Non-Creamy Layer) certificate — central format" with the AP caste certificate, parents\' 3-year income proof, Aadhaar, photo.', 'మీసేవ / సచివాలయం → "OBC (Non-Creamy Layer) certificate — central format" — AP కుల ధృవీకరణ, తల్లిదండ్రుల 3 ఏళ్ల ఆదాయ రుజువు, ఆధార్, ఫోటోతో.'),
          s('Tahsildar issues it after verification. Match its date to the "crucial date" in your job / admission notice.', 'ధృవీకరణ తర్వాత తహసీల్దార్ జారీ చేస్తారు. దాని తేదీ మీ ఉద్యోగ / ప్రవేశ నోటీసులోని "కీలక తేదీ"తో సరిపోవాలి.'),
        ],
      },
    ],
    costExample: s('Small MeeSeva user charge. Take a fresh one each year you apply.', 'చిన్న మీసేవ యూజర్ ఛార్జీ. దరఖాస్తు చేసే ప్రతి ఏటా కొత్తది తీసుకోండి.'),
    problems: [P(['Caste not in the central list.', 'కులం కేంద్ర జాబితాలో లేదు.'], ['You can\'t get central OBC reservation; apply in the general/EWS category if eligible. State reservation still applies in AP.', 'కేంద్ర OBC రిజర్వేషన్ రాదు; అర్హత ఉంటే జనరల్/EWS వర్గంలో దరఖాస్తు చేయండి. APలో రాష్ట్ర రిజర్వేషన్ ఇంకా వర్తిస్తుంది.'])],
    lastChecked: CHECKED,
  },

  'sadarem-certificate': {
    stages: [
      {
        title: s('Book the assessment', 'అసెస్‌మెంట్ బుక్ చేయడం'),
        steps: [
          s('WhatsApp "Hi" to 9552300009 → Citizen Services → SADAREM → Slot Booking → Aadhaar + OTP → choose the hospital and date (or book at the Secretariat).', '9552300009కి వాట్సాప్‌లో "Hi" → పౌర సేవలు → SADAREM → స్లాట్ బుకింగ్ → ఆధార్ + OTP → ఆసుపత్రి, తేదీ ఎంచుకోండి (లేదా సచివాలయంలో బుక్).'),
          s('Slots open quarter by quarter — if none, try again when the next quarter opens.', 'స్లాట్లు త్రైమాసికం వారీగా తెరుస్తారు — లేకపోతే తదుపరి త్రైమాసికం తెరిచినప్పుడు మళ్లీ ప్రయత్నించండి.'),
        ],
      },
      {
        title: s('Assessment day', 'అసెస్‌మెంట్ రోజు'),
        steps: [
          s('Go to the allotted government hospital with Aadhaar, rice card, all medical records and test reports, earlier certificates and photos.', 'ఆధార్, రైస్ కార్డు, అన్ని వైద్య రికార్డులు, టెస్ట్ రిపోర్టులు, పాత సర్టిఫికెట్లు, ఫోటోలతో కేటాయించిన ప్రభుత్వ ఆసుపత్రికి వెళ్లండి.'),
          s('A medical board examines and records the type and percentage of disability.', 'మెడికల్ బోర్డు పరీక్షించి వైకల్యం రకం, శాతం నమోదు చేస్తుంది.'),
        ],
      },
      {
        title: s('Certificate and benefits', 'సర్టిఫికెట్, ప్రయోజనాలు'),
        steps: [
          s('Download it on Mana Mitra (Certificate Download) or collect it.', 'మన మిత్రలో (Certificate Download) డౌన్‌లోడ్ చేయండి లేదా తీసుకోండి.'),
          s('With 40%+: apply for the disability pension at the Secretariat, bus/rail concessions, and the central UDID card on swavlambancard.gov.in.', '40%+తో: సచివాలయంలో దివ్యాంగ పెన్షన్, బస్/రైలు రాయితీలు, swavlambancard.gov.inలో కేంద్ర UDID కార్డుకు దరఖాస్తు చేయండి.'),
          s('Disagree with the percentage? Apply for re-assessment through the official process.', 'శాతంతో ఏకీభవించరా? అధికారిక ప్రక్రియ ద్వారా పునః అసెస్‌మెంట్‌కు దరఖాస్తు చేయండి.'),
        ],
      },
    ],
    costExample: s('Assessment and certificate: free.', 'అసెస్‌మెంట్, సర్టిఫికెట్: ఉచితం.'),
    problems: [P(['Someone offers a "higher percentage" for money.', '"ఎక్కువ శాతం" ఇప్పిస్తామని ఎవరైనా డబ్బు అడుగుతున్నారు.'], ['That is fraud and the certificate can be cancelled later. Refuse; report to ACB 14400.', 'అది మోసం, సర్టిఫికెట్ తర్వాత రద్దు కావచ్చు. ఒప్పుకోకండి; ACB 14400కు ఫిర్యాదు చేయండి.'])],
    lastChecked: CHECKED,
  },

  'farmer-certificate': {
    stages: [
      {
        title: s('Apply', 'దరఖాస్తు'),
        steps: [
          s('Make sure 1B shows your land correctly (fix by mutation first if not).', '1Bలో మీ భూమి సరిగ్గా ఉందో చూడండి (లేకపోతే ముందు మ్యుటేషన్‌తో సరిచేయండి).'),
          s('At the Village Secretariat or MeeSeva, name the exact certificate: "Small / Marginal Farmer certificate" or "Agricultural Income certificate". Give 1B / passbook, Aadhaar, rice card, self-declaration.', 'గ్రామ సచివాలయం లేదా మీసేవలో ఖచ్చితమైన సర్టిఫికెట్ పేరు చెప్పండి: "Small / Marginal Farmer certificate" లేదా "Agricultural Income certificate". 1B / పాస్‌బుక్, ఆధార్, రైస్ కార్డు, స్వీయ ప్రకటన ఇవ్వండి.'),
          s('VRO checks the holding; Tahsildar issues. Download on Mana Mitra or collect.', 'VRO భూమిని తనిఖీ చేస్తారు; తహసీల్దార్ జారీ. మన మిత్రలో డౌన్‌లోడ్ లేదా తీసుకోండి.'),
        ],
      },
    ],
    costExample: s('Small user charge at the Secretariat / MeeSeva.', 'సచివాలయం / మీసేవలో చిన్న యూజర్ ఛార్జీ.'),
    afterwards: [s('Use it for subsidised machinery, drip irrigation and crop loans (see Farm Subsidies and KCC guides).', 'సబ్సిడీ యంత్రాలు, డ్రిప్ సాగు, పంట రుణాలకు వాడండి (వ్యవసాయ సబ్సిడీలు, KCC గైడ్‌లు చూడండి).')],
    lastChecked: CHECKED,
  },

  'water-connection': {
    stages: [
      {
        title: s('Apply', 'దరఖాస్తు'),
        steps: [
          s('Town: Ward Secretariat (amenities secretary), municipal office, or cdma.ap.gov.in → water tap connection. Village: panchayat office / Village Secretariat.', 'పట్టణం: వార్డు సచివాలయం (సౌకర్యాల కార్యదర్శి), మున్సిపల్ కార్యాలయం, లేదా cdma.ap.gov.in → నీటి కుళాయి కనెక్షన్. గ్రామం: పంచాయతీ కార్యాలయం / గ్రామ సచివాలయం.'),
          s('Give the latest property tax receipt, ownership proof, building permission and Aadhaar; pay the application amount; keep the receipt with the priority number.', 'తాజా ఆస్తి పన్ను రసీదు, యాజమాన్య రుజువు, బిల్డింగ్ అనుమతి, ఆధార్ ఇచ్చి; దరఖాస్తు మొత్తం చెల్లించి; ప్రాధాన్య నంబర్‌తో రసీదు ఉంచుకోండి.'),
        ],
      },
      {
        title: s('Sanction and connection', 'మంజూరు, కనెక్షన్'),
        steps: [
          s('After inspection you get a sanction with the remaining charges (supervision, deposit, road cutting) — pay within the days given.', 'తనిఖీ తర్వాత మిగతా ఛార్జీలతో (పర్యవేక్షణ, డిపాజిట్, రోడ్డు కటింగ్) మంజూరు వస్తుంది — ఇచ్చిన రోజుల్లో చెల్లించండి.'),
          s('The licensed plumber makes the connection; check the connection number on your first water bill.', 'లైసెన్స్ ప్లంబర్ కనెక్షన్ ఇస్తారు; మొదటి నీటి బిల్లులో కనెక్షన్ నంబర్ చూడండి.'),
          s('Pay water charges online later on cdma.ap.gov.in → Water Charges (see the House & water tax guide).', 'తర్వాత cdma.ap.gov.in → Water Chargesలో నీటి ఛార్జీలు ఆన్‌లైన్‌లో చెల్లించండి (ఇంటి & నీటి పన్ను గైడ్ చూడండి).'),
        ],
      },
    ],
    costExample: s('Application amount + supervision charges + security deposit + road-cutting charges, all on the sanction letter.', 'దరఖాస్తు మొత్తం + పర్యవేక్షణ ఛార్జీలు + సెక్యూరిటీ డిపాజిట్ + రోడ్డు కటింగ్ ఛార్జీలు, అన్నీ మంజూరు లేఖలో.'),
    problems: [P(['No connection after 30 days (town, line available).', '30 రోజులు దాటినా కనెక్షన్ లేదు (పట్టణం, లైన్ ఉంది).'], ['Write to the Municipal Commissioner quoting the citizen charter time limit; raise PGRS if still delayed.', 'సిటిజన్ చార్టర్ గడువును ఉటంకిస్తూ మున్సిపల్ కమిషనర్‌కు రాయండి; ఇంకా ఆలస్యమైతే PGRS.'])],
    lastChecked: CHECKED,
  },

  'trade-licence': {
    stages: [
      {
        title: s('Apply for the licence', 'లైసెన్స్‌కు దరఖాస్తు'),
        steps: [
          s('Town: cdma.ap.gov.in → Trade Licence → New (or your corporation\'s site), or the Ward Secretariat. Village: panchayat.', 'పట్టణం: cdma.ap.gov.in → Trade Licence → New (లేదా మీ కార్పొరేషన్ సైట్), లేదా వార్డు సచివాలయం. గ్రామం: పంచాయతీ.'),
          s('Enter trade type, shop area, address; upload Aadhaar/PAN, property tax receipt or rent agreement with owner\'s consent, and a shop photo.', 'వ్యాపార రకం, షాప్ విస్తీర్ణం, చిరునామా నమోదు చేసి; ఆధార్/PAN, ఆస్తి పన్ను రసీదు లేదా యజమాని అంగీకారంతో అద్దె ఒప్పందం, షాప్ ఫోటో అప్‌లోడ్ చేయండి.'),
          s('Pay the fee shown; a sanitary/health inspector may visit.', 'చూపిన ఫీజు చెల్లించండి; శానిటరీ/ఆరోగ్య ఇన్‌స్పెక్టర్ రావచ్చు.'),
          s('Download the licence and display it in the shop.', 'లైసెన్స్ డౌన్‌లోడ్ చేసి షాప్‌లో ప్రదర్శించండి.'),
        ],
      },
      {
        title: s('Other registrations you may need', 'అవసరమయ్యే ఇతర నమోదులు'),
        steps: [
          s('Food business: FSSAI registration on foscos.fssai.gov.in (basic registration for small shops).', 'ఆహార వ్యాపారం: foscos.fssai.gov.inలో FSSAI నమోదు (చిన్న షాపులకు బేసిక్ రిజిస్ట్రేషన్).'),
          s('Udyam (MSME) registration — free on udyamregistration.gov.in — helps with loans and schemes.', 'ఉద్యమ్ (MSME) నమోదు — udyamregistration.gov.inలో ఉచితం — రుణాలు, పథకాలకు ఉపయోగం.'),
          s('GST only if turnover crosses the limit or you sell online / inter-state.', 'టర్నోవర్ పరిమితి దాటితే లేదా ఆన్‌లైన్ / అంతర్రాష్ట్ర అమ్మకాలు ఉంటేనే GST.'),
        ],
      },
    ],
    costExample: s('Licence fee depends on trade and area — shown before payment. FSSAI basic registration and Udyam are cheap / free.', 'లైసెన్స్ ఫీజు వ్యాపారం, విస్తీర్ణాన్ని బట్టి — చెల్లించే ముందు చూపిస్తారు. FSSAI బేసిక్ నమోదు, ఉద్యమ్ చౌక / ఉచితం.'),
    problems: [P(['Forgot to renew.', 'రెన్యువల్ మర్చిపోయారు.'], ['Renew online with the penalty shown, before the shop is sealed.', 'షాప్ సీల్ చేయకముందే చూపిన జరిమానాతో ఆన్‌లైన్‌లో రెన్యువల్ చేయండి.'])],
    afterwards: [s('Renew every year before expiry.', 'గడువుకు ముందే ప్రతి ఏటా రెన్యువల్ చేయండి.')],
    lastChecked: CHECKED,
  },

  'civic-complaints': {
    stages: [
      {
        title: s('Report it', 'ఫిర్యాదు చేయడం'),
        steps: [
          s('Take a clear photo with a landmark in it (shop, temple, pole number).', 'ల్యాండ్‌మార్క్ (షాప్, గుడి, స్తంభం నంబర్)తో స్పష్టమైన ఫోటో తీయండి.'),
          s('Town: PuraSeva app → choose the category (garbage, streetlight, drain, road…) → photo → location → submit. Or tell the Ward Secretariat sanitation / amenities secretary.', 'పట్టణం: PuraSeva యాప్ → వర్గం ఎంచుకోండి (చెత్త, వీధి దీపం, డ్రైన్, రోడ్డు…) → ఫోటో → లొకేషన్ → సబ్మిట్. లేదా వార్డు సచివాలయ పారిశుద్ధ్య / సౌకర్యాల కార్యదర్శికి చెప్పండి.'),
          s('Village: Panchayat Secretary / Village Secretariat; or Mana Mitra WhatsApp → grievance.', 'గ్రామం: పంచాయతీ కార్యదర్శి / గ్రామ సచివాలయం; లేదా మన మిత్ర వాట్సాప్ → ఫిర్యాదు.'),
          s('Note the complaint number.', 'ఫిర్యాదు నంబర్ నోట్ చేయండి.'),
        ],
      },
      {
        title: s('Follow up', 'ఫాలో-అప్'),
        steps: [
          s('Check status in the app with the number.', 'నంబర్‌తో యాప్‌లో స్టేటస్ చూడండి.'),
          s('Closed without the work being done? Reopen it, or escalate through PGRS (meekosam) quoting the old number.', 'పని చేయకుండానే మూసేశారా? మళ్లీ తెరవండి, లేదా పాత నంబర్ ఉటంకిస్తూ PGRS (మీకోసం) ద్వారా పైకి తీసుకెళ్లండి.'),
        ],
      },
    ],
    costExample: s('Free.', 'ఉచితం.'),
    lastChecked: CHECKED,
  },
};
