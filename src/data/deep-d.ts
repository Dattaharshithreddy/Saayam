import { Guide } from '../types';
import { b, CHECKED } from './bi';

const s = (en: string, te: string) => b(en, te);
const P = (problem: [string, string], fix: [string, string]) => ({ problem: s(...problem), fix: s(...fix) });

/** Full walkthroughs, batch D (checked 20 Oct 2026): mothers & workers, health IDs, farm credit & insurance, school. */
export const deepD: Record<string, Partial<Guide>> = {
  'ntr-baby-kit': {
    stages: [
      {
        title: s('During pregnancy', 'గర్భధారణ సమయంలో'),
        steps: [
          s('Register the pregnancy with your ANM / ASHA worker in the first 3 months; get the MCP (mother-child protection) card.', 'మొదటి 3 నెలల్లో మీ ANM / ఆశా కార్యకర్త వద్ద గర్భాన్ని నమోదు చేయించి MCP (తల్లీ-బిడ్డ రక్షణ) కార్డు తీసుకోండి.'),
          s('Attend check-ups at the PHC / government hospital; ask the ANM about the central maternity benefit (PMMVY) too.', 'PHC / ప్రభుత్వ ఆసుపత్రిలో చెకప్‌లకు వెళ్లండి; కేంద్ర ప్రసూతి ప్రయోజనం (PMMVY) గురించి కూడా ANMను అడగండి.'),
        ],
      },
      {
        title: s('Delivery and the kit', 'ప్రసవం, కిట్'),
        steps: [
          s('When labour starts, call 102 (free ambulance to a government hospital).', 'నొప్పులు మొదలైతే 102కి కాల్ చేయండి (ప్రభుత్వ ఆసుపత్రికి ఉచిత అంబులెన్స్).'),
          s('At discharge, ask the ward staff for the NTR Baby Kit and check its contents.', 'డిశ్చార్జ్ సమయంలో వార్డు సిబ్బందిని NTR బేబీ కిట్ అడిగి అందులోని వస్తువులు చూడండి.'),
          s('Before leaving, ask for the birth registration number and for 102 to drop mother and baby home.', 'వెళ్లే ముందు జనన నమోదు నంబర్ అడగండి, తల్లీ బిడ్డను ఇంటికి దింపమని 102ని అడగండి.'),
        ],
      },
    ],
    costExample: s('Kit worth about ₹1,400 — free. Delivery, medicines and 102 transport at government hospitals are also free.', 'సుమారు ₹1,400 విలువైన కిట్ — ఉచితం. ప్రభుత్వ ఆసుపత్రుల్లో ప్రసవం, మందులు, 102 రవాణా కూడా ఉచితం.'),
    problems: [P(['Kit not given.', 'కిట్ ఇవ్వలేదు.'], ['Ask the hospital superintendent; complain on 104 if refused.', 'ఆసుపత్రి సూపరింటెండెంట్‌ను అడగండి; నిరాకరిస్తే 104కి ఫిర్యాదు చేయండి.'])],
    afterwards: [s('Register the birth and add the baby\'s name within a year; enrol the baby at the anganwadi for nutrition and vaccines.', 'జననం నమోదు చేసి ఏడాదిలోపు బిడ్డ పేరు చేర్చండి; పోషణ, టీకాల కోసం బిడ్డను అంగన్‌వాడీలో నమోదు చేయండి.')],
    lastChecked: CHECKED,
  },

  'construction-workers-board': {
    stages: [
      {
        title: s('Get your work certificate', 'పని ధృవీకరణ తీసుకోవడం'),
        steps: [
          s('You need proof of 90+ days of construction work in the last 12 months: a certificate from your contractor / employer, a registered trade union, or the panchayat / ward secretary.', 'గత 12 నెలల్లో 90+ రోజుల నిర్మాణ పని రుజువు కావాలి: కాంట్రాక్టర్ / యజమాని, నమోదిత ట్రేడ్ యూనియన్, లేదా పంచాయతీ / వార్డు కార్యదర్శి సర్టిఫికెట్.'),
        ],
      },
      {
        title: s('Register', 'నమోదు'),
        steps: [
          s('Apply on bocwwb.ap.gov.in, at the Assistant Labour Officer\'s office, or through the Secretariat with Aadhaar, age proof, work certificate, bank passbook, photo and nominee details.', 'ఆధార్, వయస్సు రుజువు, పని ధృవీకరణ, బ్యాంక్ పాస్‌బుక్, ఫోటో, నామినీ వివరాలతో bocwwb.ap.gov.inలో, సహాయ కార్మిక అధికారి కార్యాలయంలో, లేదా సచివాలయం ద్వారా దరఖాస్తు చేయండి.'),
          s('Pay the registration and yearly contribution (small amount) and collect the identity card.', 'నమోదు, వార్షిక చందా (చిన్న మొత్తం) చెల్లించి గుర్తింపు కార్డు తీసుకోండి.'),
        ],
      },
      {
        title: s('Claim a benefit', 'ప్రయోజనం క్లెయిమ్ చేయడం'),
        steps: [
          s('Within the time limit, apply at the labour office with the card and proof: birth certificate (maternity), marriage certificate (marriage help), school certificate (education), death / FIR / post-mortem (accident death).', 'గడువులోగా కార్డు, రుజువుతో కార్మిక కార్యాలయంలో దరఖాస్తు చేయండి: జనన ధృవీకరణ (ప్రసూతి), వివాహ ధృవీకరణ (వివాహ సహాయం), స్కూల్ సర్టిఫికెట్ (విద్య), మరణ / FIR / పోస్ట్‌మార్టం (ప్రమాద మరణం).'),
          s('After verification, money is paid to the bank account.', 'ధృవీకరణ తర్వాత బ్యాంక్ ఖాతాకు డబ్బు చెల్లిస్తారు.'),
        ],
      },
    ],
    costExample: s('Contribution about ₹50 a year keeps you covered. Benefits (death, accident, maternity, education, marriage) are much larger — current amounts at the labour office.', 'ఏడాదికి సుమారు ₹50 చందాతో కవర్ కొనసాగుతుంది. ప్రయోజనాలు (మరణం, ప్రమాదం, ప్రసూతి, విద్య, వివాహం) చాలా పెద్దవి — ప్రస్తుత మొత్తాలు కార్మిక కార్యాలయంలో.'),
    problems: [P(['Registration lapsed.', 'నమోదు గడువు ముగిసింది.'], ['Renew with the arrears at the labour office as soon as possible — claims during a lapse can be rejected.', 'వీలైనంత త్వరగా బకాయిలతో కార్మిక కార్యాలయంలో రెన్యువల్ చేయండి — గడువు ముగిసిన సమయంలో క్లెయిమ్‌లు తిరస్కరించవచ్చు.'])],
    afterwards: [s('Also register on e-Shram for an extra ₹2 lakh accident cover.', 'అదనంగా ₹2 లక్షల ప్రమాద కవర్ కోసం e-Shramలో కూడా నమోదు చేసుకోండి.')],
    lastChecked: CHECKED,
  },

  'e-shram': {
    stages: [
      {
        title: s('Register (10 minutes)', 'నమోదు (10 నిమిషాలు)'),
        steps: [
          s('Open eshram.gov.in → "Register on e-Shram" → enter Aadhaar-linked mobile → OTP.', 'eshram.gov.in → "Register on e-Shram" → ఆధార్ లింక్ మొబైల్ → OTP.'),
          s('Enter Aadhaar → OTP for e-KYC; your name, DOB and photo come from Aadhaar.', 'ఆధార్ → e-KYC కోసం OTP; మీ పేరు, పుట్టిన తేదీ, ఫోటో ఆధార్ నుండి.'),
          s('Fill address, education, main occupation (choose the closest: agricultural labour, mason, domestic worker, driver, vendor, gig worker…), skills and bank account.', 'చిరునామా, విద్య, ముఖ్య వృత్తి (దగ్గరిది ఎంచుకోండి: వ్యవసాయ కూలీ, మేస్త్రీ, ఇంటి పని, డ్రైవర్, వీధి వ్యాపారి, గిగ్ వర్కర్…), నైపుణ్యాలు, బ్యాంక్ ఖాతా నింపండి.'),
          s('Submit and download the e-Shram card with your 12-digit UAN.', 'సబ్మిట్ చేసి 12 అంకెల UANతో e-Shram కార్డు డౌన్‌లోడ్ చేయండి.'),
        ],
        note: s('No smartphone? Any CSC or the Secretariat can do it for you free.', 'స్మార్ట్‌ఫోన్ లేదా? ఏ CSC లేదా సచివాలయమైనా ఉచితంగా చేస్తాయి.'),
      },
      {
        title: s('Use it', 'దాన్ని వాడడం'),
        steps: [
          s('Accident cover: in case of accidental death or disability, the family / worker claims through the e-Shram helpline or labour office with the card, FIR and medical / death papers.', 'ప్రమాద కవర్: ప్రమాద మరణం లేదా వైకల్యం జరిగితే, కార్డు, FIR, వైద్య / మరణ పత్రాలతో e-Shram హెల్ప్‌లైన్ లేదా కార్మిక కార్యాలయం ద్వారా కుటుంబం / కార్మికుడు క్లెయిమ్ చేస్తారు.'),
          s('Aged 18–40? Join PM Shram Yogi Maan-dhan on the same portal for a ₹3,000/month pension after 60 (small monthly contribution).', '18–40 వయస్సా? 60 తర్వాత నెలకు ₹3,000 పెన్షన్ కోసం అదే పోర్టల్‌లో PM శ్రమ యోగి మాన్-ధన్‌లో చేరండి (చిన్న నెలవారీ చందా).'),
        ],
      },
    ],
    costExample: s('Registration: free. Accident cover: ₹2 lakh (death / permanent disability), ₹1 lakh (partial disability).', 'నమోదు: ఉచితం. ప్రమాద కవర్: ₹2 లక్షలు (మరణం / శాశ్వత వైకల్యం), ₹1 లక్ష (పాక్షిక వైకల్యం).'),
    problems: [P(['"Already registered under EPFO/ESIC".', '"ఇప్పటికే EPFO/ESIC కింద నమోదైంది".'], ['If you left that job long ago, the old PF/ESI link may block you — ask the e-Shram helpline (14434) how to proceed.', 'ఆ ఉద్యోగం ఎప్పుడో వదిలేస్తే, పాత PF/ESI లింక్ అడ్డుపడవచ్చు — ఎలా ముందుకెళ్లాలో e-Shram హెల్ప్‌లైన్ (14434)ని అడగండి.'])],
    lastChecked: CHECKED,
  },

  'announced-schemes': {
    tips: [
      s('Saayam is updated as schemes start — keep the app updated from the Play Store, and check the Secretariat notice board.', 'పథకాలు మొదలైనప్పుడు సాయం అప్‌డేట్ అవుతుంది — Play Store నుండి యాప్ అప్‌డేట్ చేసుకోండి, సచివాలయ నోటీసు బోర్డు చూడండి.'),
      s('Government welfare applications are always free. Anyone taking money or "registration fees" for these schemes is a fraud.', 'ప్రభుత్వ సంక్షేమ దరఖాస్తులు ఎప్పుడూ ఉచితం. ఈ పథకాల కోసం డబ్బు లేదా "నమోదు ఫీజు" తీసుకునేవారు మోసగాళ్లు.'),
    ],
    stages: [
      {
        title: s('Get ready now', 'ఇప్పుడే సిద్ధం కావడం'),
        steps: [
          s('Rice card active with e-KYC done for every member.', 'ప్రతి సభ్యునికి e-KYC పూర్తైన యాక్టివ్ రైస్ కార్డు.'),
          s('Bank account Aadhaar-seeded for DBT (check myAadhaar → Bank Seeding Status).', 'DBT కోసం ఆధార్ సీడ్ అయిన బ్యాంక్ ఖాతా (myAadhaar → Bank Seeding Status చూడండి).'),
          s('Recent income and caste certificates downloaded and saved.', 'ఇటీవలి ఆదాయ, కుల ధృవీకరణలు డౌన్‌లోడ్ చేసి సేవ్ చేయండి.'),
        ],
      },
      {
        title: s('When a scheme starts', 'పథకం మొదలైనప్పుడు'),
        steps: [
          s('The official announcement will say who is eligible and the dates; applications / surveys happen at the Village / Ward Secretariat.', 'అధికారిక ప్రకటనలో అర్హులు, తేదీలు ఉంటాయి; దరఖాస్తులు / సర్వేలు గ్రామ / వార్డు సచివాలయంలో జరుగుతాయి.'),
          s('Check your name in the eligible list displayed at the Secretariat; object in time if missed.', 'సచివాలయంలో ప్రదర్శించిన అర్హుల జాబితాలో మీ పేరు చూడండి; వదిలేస్తే సమయానికి అభ్యంతరం చెప్పండి.'),
        ],
      },
    ],
    lastChecked: CHECKED,
  },

  'ayushman-vay-vandana': {
    stages: [
      {
        title: s('Make the card (5 minutes)', 'కార్డు తయారు చేయడం (5 నిమిషాలు)'),
        steps: [
          s('Install the "Ayushman" app (NHA) or open beneficiary.nha.gov.in → log in as Beneficiary with any mobile + OTP.', '"Ayushman" యాప్ (NHA) ఇన్‌స్టాల్ చేయండి లేదా beneficiary.nha.gov.in తెరిచి → ఏ మొబైల్ + OTPతోనైనా Beneficiaryగా లాగిన్ అవ్వండి.'),
          s('Choose "Enroll for Ayushman Vay Vandana" → enter the senior\'s Aadhaar → e-KYC by Aadhaar OTP or face authentication (camera).', '"Enroll for Ayushman Vay Vandana" ఎంచుకోండి → వృద్ధుని ఆధార్ → ఆధార్ OTP లేదా ఫేస్ ధృవీకరణ (కెమెరా)తో e-KYC.'),
          s('Add a recent photo and mobile; submit. Download the card once approved (usually minutes).', 'ఇటీవలి ఫోటో, మొబైల్ చేర్చి సబ్మిట్ చేయండి. ఆమోదం తర్వాత (సాధారణంగా నిమిషాల్లో) కార్డు డౌన్‌లోడ్ చేయండి.'),
        ],
        note: s('Can\'t do it on the phone? Any empanelled hospital\'s Aarogya Mithra desk or a CSC makes it free.', 'ఫోన్‌లో చేయలేరా? ఏ ఎంపానెల్డ్ ఆసుపత్రి ఆరోగ్య మిత్ర డెస్క్ లేదా CSC అయినా ఉచితంగా చేస్తాయి.'),
      },
      {
        title: s('Use it at the hospital', 'ఆసుపత్రిలో వాడడం'),
        steps: [
          s('Go to the Aarogya Mithra / Ayushman desk before admission and show the card or Aadhaar.', 'అడ్మిషన్‌కు ముందు ఆరోగ్య మిత్ర / ఆయుష్మాన్ డెస్క్‌కు వెళ్లి కార్డు లేదా ఆధార్ చూపించండి.'),
          s('Covered procedures are cashless up to ₹5 lakh a year for the senior (on top of the family\'s cover).', 'కవర్ అయిన ప్రక్రియలు వృద్ధునికి ఏడాదికి ₹5 లక్షల వరకు నగదు రహితం (కుటుంబ కవర్‌కు అదనంగా).'),
        ],
      },
    ],
    costExample: s('Card and treatment: free, up to ₹5 lakh a year for each person aged 70+.', 'కార్డు, చికిత్స: ఉచితం, 70+ వయస్సు ప్రతి వ్యక్తికి ఏడాదికి ₹5 లక్షల వరకు.'),
    problems: [P(['Aadhaar shows age below 70 though actual age is 70+.', 'అసలు వయస్సు 70+ అయినా ఆధార్‌లో 70 లోపు చూపిస్తోంది.'], ['Correct the date of birth in Aadhaar first with proof (see Aadhaar update guide).', 'ముందుగా రుజువుతో ఆధార్‌లో పుట్టిన తేదీ సరిచేయండి (ఆధార్ అప్‌డేట్ గైడ్ చూడండి).'])],
    lastChecked: CHECKED,
  },

  'abha-health-id': {
    stages: [
      {
        title: s('Create ABHA', 'ABHA తయారు చేయడం'),
        steps: [
          s('Open abha.abdm.gov.in or the ABHA app → "Create ABHA Number" → "Using Aadhaar" → Aadhaar + OTP.', 'abha.abdm.gov.in లేదా ABHA యాప్ → "Create ABHA Number" → "Using Aadhaar" → ఆధార్ + OTP.'),
          s('Verify mobile; choose an ABHA address (e.g. ravi1985@abdm).', 'మొబైల్ ధృవీకరించి; ABHA చిరునామా ఎంచుకోండి (ఉదా: ravi1985@abdm).'),
          s('Download the ABHA card.', 'ABHA కార్డు డౌన్‌లోడ్ చేయండి.'),
        ],
      },
      {
        title: s('Link your records', 'మీ రికార్డులు లింక్ చేయడం'),
        steps: [
          s('At hospital registration counters, scan the ABHA QR with the app to share your details — no form filling.', 'ఆసుపత్రి నమోదు కౌంటర్లలో యాప్‌తో ABHA QR స్కాన్ చేసి వివరాలు పంచుకోండి — ఫారం నింపనక్కర్లేదు.'),
          s('Approve consent requests in the app to link prescriptions and reports; you can revoke any time.', 'ప్రిస్క్రిప్షన్లు, రిపోర్టులు లింక్ చేయడానికి యాప్‌లో అంగీకార అభ్యర్థనలు ఆమోదించండి; ఎప్పుడైనా ఉపసంహరించవచ్చు.'),
        ],
      },
    ],
    costExample: s('Free.', 'ఉచితం.'),
    lastChecked: CHECKED,
  },

  'health-numbers': {
    stages: [
      {
        title: s('Calling 108 correctly', '108కి సరిగ్గా కాల్ చేయడం'),
        steps: [
          s('Dial 108 (or 112). Say clearly: what happened, how many people, conscious or not.', '108 (లేదా 112) డయల్ చేయండి. స్పష్టంగా చెప్పండి: ఏం జరిగింది, ఎంతమంది, స్పృహలో ఉన్నారా లేదా.'),
          s('Give the exact place: village / street, nearest landmark, which side of the road.', 'ఖచ్చితమైన స్థలం చెప్పండి: గ్రామం / వీధి, దగ్గరి ల్యాండ్‌మార్క్, రోడ్డు ఏ వైపు.'),
          s('Keep the phone free — the ambulance crew will call for directions. Send someone to the main road to guide them.', 'ఫోన్ ఖాళీగా ఉంచండి — అంబులెన్స్ సిబ్బంది దారి కోసం కాల్ చేస్తారు. దారి చూపడానికి ఒకరిని మెయిన్ రోడ్డుకు పంపండి.'),
          s('Don\'t move a person with a suspected neck/back injury unless there is danger; for snake bite keep the limb still and don\'t cut or suck.', 'మెడ/వెన్ను గాయం అనుమానం ఉంటే ప్రమాదం ఉంటే తప్ప కదపకండి; పాము కాటుకు అవయవాన్ని కదలకుండా ఉంచండి, కోయడం, పీల్చడం చేయకండి.'),
        ],
      },
      {
        title: s('102 and 104', '102, 104'),
        steps: [
          s('102 (Thalli Bidda Express): pregnant women to the government hospital for delivery / check-ups and mother & baby back home — free.', '102 (తల్లీ బిడ్డ ఎక్స్‌ప్రెస్): గర్భిణులను ప్రసవం / చెకప్‌లకు ప్రభుత్వ ఆసుపత్రికి, తల్లీ బిడ్డను ఇంటికి — ఉచితం.'),
          s('104: doctor advice on phone, find NTR Vaidya Seva hospitals, complaints if a hospital asks money for a covered treatment.', '104: ఫోన్‌లో డాక్టర్ సలహా, NTR వైద్య సేవ ఆసుపత్రుల సమాచారం, కవర్ అయిన చికిత్సకు ఆసుపత్రి డబ్బు అడిగితే ఫిర్యాదు.'),
        ],
      },
    ],
    costExample: s('All free.', 'అన్నీ ఉచితం.'),
    lastChecked: CHECKED,
  },

  'crop-insurance': {
    stages: [
      {
        title: s('Every season, before the deadline', 'ప్రతి సీజన్, గడువుకు ముందు'),
        steps: [
          s('Book your crop in e-Crop at the RSK (the Agriculture Assistant geo-tags your field) — insurance and compensation use this.', 'RSKలో e-Cropలో మీ పంట నమోదు చేయండి (వ్యవసాయ సహాయకుడు పొలాన్ని జియో-ట్యాగ్ చేస్తారు) — బీమా, పరిహారం దీన్నే వాడతాయి.'),
          s('Loanee farmers: the bank enrols you automatically unless you opt out in writing — check the premium debited.', 'రుణం తీసుకున్న రైతులు: మీరు రాతపూర్వకంగా వద్దనకపోతే బ్యాంక్ ఆటోమేటిక్‌గా నమోదు చేస్తుంది — కట్ అయిన ప్రీమియం చూడండి.'),
          s('Non-loanee: enrol at the RSK, CSC, bank, or on pmfby.gov.in / Crop Insurance app with Aadhaar, bank passbook, 1B or CCRC and sowing details; pay your share.', 'రుణం లేనివారు: ఆధార్, బ్యాంక్ పాస్‌బుక్, 1B లేదా CCRC, విత్తన వివరాలతో RSK, CSC, బ్యాంక్, లేదా pmfby.gov.in / Crop Insurance యాప్‌లో నమోదై మీ వాటా చెల్లించండి.'),
          s('Keep the application / policy number.', 'అప్లికేషన్ / పాలసీ నంబర్ దాచుకోండి.'),
        ],
        note: s('Rabi 2026-27: 15 December for most crops, 31 December for paddy.', 'రబీ 2026-27: చాలా పంటలకు 15 డిసెంబర్, వరికి 31 డిసెంబర్.'),
      },
      {
        title: s('When the crop is damaged', 'పంట నష్టపోయినప్పుడు'),
        steps: [
          s('Report within 72 hours: Crop Insurance app, helpline 14447, the RSK or your bank. Say the survey number, crop and cause (flood, hailstorm, cyclone, pest).', '72 గంటల్లో తెలియజేయండి: Crop Insurance యాప్, హెల్ప్‌లైన్ 14447, RSK లేదా మీ బ్యాంక్. సర్వే నంబర్, పంట, కారణం (వరద, వడగళ్లు, తుఫాను, తెగులు) చెప్పండి.'),
          s('Take dated photos of the damaged field.', 'నష్టపోయిన పొలానికి తేదీతో ఫోటోలు తీయండి.'),
          s('An assessor inspects; the claim is paid to your bank after assessment. Area-wide losses are paid from crop-cutting results without individual claims.', 'అంచనాదారు తనిఖీ చేస్తారు; అంచనా తర్వాత క్లెయిమ్ మీ బ్యాంకుకు. ప్రాంతవ్యాప్త నష్టాలు వ్యక్తిగత క్లెయిమ్ లేకుండా పంట కోత ఫలితాల ఆధారంగా చెల్లిస్తారు.'),
        ],
      },
    ],
    costExample: s('Paddy with sum insured ₹50,000 per acre in kharif: your premium 2% = ₹1,000 per acre; the government pays the rest.', 'ఖరీఫ్‌లో ఎకరానికి ₹50,000 బీమా మొత్తంతో వరి: మీ ప్రీమియం 2% = ఎకరానికి ₹1,000; మిగతాది ప్రభుత్వం.'),
    problems: [P(['Claim not paid.', 'క్లెయిమ్ చెల్లించలేదు.'], ['Check status on pmfby.gov.in with the policy number; raise a grievance there or at the district agriculture office.', 'పాలసీ నంబర్‌తో pmfby.gov.inలో స్టేటస్ చూడండి; అక్కడ లేదా జిల్లా వ్యవసాయ కార్యాలయంలో ఫిర్యాదు చేయండి.'])],
    lastChecked: CHECKED,
  },

  'tenant-farmer-ccrc': {
    stages: [
      {
        title: s('Get the owner\'s consent', 'యజమాని అంగీకారం పొందడం'),
        steps: [
          s('Explain to the owner: the CCRC gives you no ownership rights and lasts only 11 months.', 'యజమానికి వివరించండి: CCRC మీకు యాజమాన్య హక్కులు ఇవ్వదు, 11 నెలలు మాత్రమే చెల్లుతుంది.'),
          s('Get their signature on the CCRC form / consent and a copy of their 1B.', 'CCRC ఫారం / అంగీకారంపై వారి సంతకం, వారి 1B కాపీ తీసుకోండి.'),
        ],
      },
      {
        title: s('Apply', 'దరఖాస్తు'),
        steps: [
          s('At the Village Secretariat / RSK give the form with your Aadhaar, rice card, bank passbook and the land details (survey number, extent).', 'గ్రామ సచివాలయం / RSKలో మీ ఆధార్, రైస్ కార్డు, బ్యాంక్ పాస్‌బుక్, భూమి వివరాలతో (సర్వే నంబర్, విస్తీర్ణం) ఫారం ఇవ్వండి.'),
          s('VRO / Agriculture Assistant verify; collect the CCRC.', 'VRO / వ్యవసాయ సహాయకుడు ధృవీకరిస్తారు; CCRC తీసుకోండి.'),
        ],
      },
      {
        title: s('Use it', 'వాడడం'),
        steps: [
          s('Book the crop in e-Crop in your name, take a crop loan / KCC, enrol in crop insurance, and claim input subsidy or crop-loss compensation.', 'మీ పేరుపై e-Cropలో పంట నమోదు, పంట రుణం / KCC, పంట బీమా నమోదు, ఇన్‌పుట్ సబ్సిడీ లేదా పంట నష్ట పరిహారం క్లెయిమ్ చేయండి.'),
          s('Renew every season / year.', 'ప్రతి సీజన్ / ఏడాది రెన్యువల్ చేయండి.'),
        ],
      },
    ],
    costExample: s('Free.', 'ఉచితం.'),
    problems: [P(['Owner refuses to sign.', 'యజమాని సంతకం చేయడానికి నిరాకరిస్తున్నారు.'], ['Ask the VRO / Agriculture Assistant to explain the rules to the owner; without consent the card can\'t be issued.', 'నియమాలు యజమానికి వివరించమని VRO / వ్యవసాయ సహాయకుడిని అడగండి; అంగీకారం లేకుండా కార్డు ఇవ్వరు.'])],
    lastChecked: CHECKED,
  },

  'kisan-credit-card': {
    stages: [
      {
        title: s('Apply', 'దరఖాస్తు'),
        steps: [
          s('Go to the bank where you have your account (or a cooperative bank) and ask for a Kisan Credit Card. Many banks also accept applications through the RSK.', 'మీ ఖాతా ఉన్న బ్యాంకుకు (లేదా సహకార బ్యాంకుకు) వెళ్లి కిసాన్ క్రెడిట్ కార్డు అడగండి. చాలా బ్యాంకులు RSK ద్వారా కూడా దరఖాస్తులు తీసుకుంటాయి.'),
          s('Give the form with Aadhaar, photo, 1B / passbook (or CCRC), and crop plan (which crops, how many acres).', 'ఆధార్, ఫోటో, 1B / పాస్‌బుక్ (లేదా CCRC), పంట ప్రణాళికతో (ఏ పంటలు, ఎన్ని ఎకరాలు) ఫారం ఇవ్వండి.'),
          s('The bank fixes the limit from the "scale of finance" for your crops; up to ₹2 lakh needs no collateral.', 'మీ పంటలకు "స్కేల్ ఆఫ్ ఫైనాన్స్" ఆధారంగా బ్యాంక్ పరిమితి నిర్ణయిస్తుంది; ₹2 లక్షల వరకు హామీ అక్కర్లేదు.'),
        ],
      },
      {
        title: s('Use and repay', 'వాడడం, తిరిగి చెల్లించడం'),
        steps: [
          s('Withdraw with the RuPay card or at the branch when you need money for seeds, fertiliser, labour.', 'విత్తనాలు, ఎరువులు, కూలీకి డబ్బు కావాల్సినప్పుడు RuPay కార్డుతో లేదా బ్రాంచ్‌లో తీసుకోండి.'),
          s('Repay after harvest before the due date (usually within 12 months) to get the 3% prompt-repayment benefit — effective interest 4%.', '3% సకాల చెల్లింపు ప్రయోజనం పొందడానికి కోత తర్వాత గడువులోగా (సాధారణంగా 12 నెలల్లో) చెల్లించండి — ప్రభావిత వడ్డీ 4%.'),
          s('Renew the limit every year; the bank reviews it.', 'ప్రతి ఏటా పరిమితి రెన్యువల్; బ్యాంక్ సమీక్షిస్తుంది.'),
        ],
      },
    ],
    costExample: s('₹1,00,000 used for a year and repaid on time: about ₹4,000 interest (4%) instead of ₹7,000.', '₹1,00,000 ఏడాది వాడి సకాలంలో చెల్లిస్తే: ₹7,000కు బదులుగా సుమారు ₹4,000 వడ్డీ (4%).'),
    problems: [P(['Bank delays or refuses.', 'బ్యాంక్ ఆలస్యం చేస్తోంది లేదా నిరాకరిస్తోంది.'], ['Ask for the reason in writing; complain to the bank\'s grievance cell, then the Lead District Manager, then RBI CMS (cms.rbi.org.in).', 'కారణం రాతపూర్వకంగా అడగండి; బ్యాంక్ ఫిర్యాదుల విభాగానికి, తర్వాత లీడ్ డిస్ట్రిక్ట్ మేనేజర్‌కు, తర్వాత RBI CMS (cms.rbi.org.in)కి ఫిర్యాదు చేయండి.'])],
    lastChecked: CHECKED,
  },

  'national-scholarships': {
    stages: [
      {
        title: s('One-Time Registration (OTR)', 'వన్-టైమ్ రిజిస్ట్రేషన్ (OTR)'),
        steps: [
          s('scholarships.gov.in → "One Time Registration" → mobile OTP → Aadhaar (or EID) e-KYC; if asked, do face authentication in the NSP OTR app.', 'scholarships.gov.in → "One Time Registration" → మొబైల్ OTP → ఆధార్ (లేదా EID) e-KYC; అడిగితే NSP OTR యాప్‌లో ఫేస్ ధృవీకరణ.'),
          s('Note your OTR number — it stays for your whole study life.', 'మీ OTR నంబర్ నోట్ చేయండి — మీ చదువంతా అదే.'),
        ],
        note: s('2026 OTR deadline: 31 October 2026.', '2026 OTR గడువు: 31 అక్టోబర్ 2026.'),
      },
      {
        title: s('Apply for the scheme', 'పథకానికి దరఖాస్తు'),
        steps: [
          s('Log in with OTR → fill academic details, income, category → the portal shows schemes you can apply for → apply and upload documents.', 'OTRతో లాగిన్ → విద్యా వివరాలు, ఆదాయం, వర్గం నింపండి → మీరు దరఖాస్తు చేయగల పథకాలు చూపిస్తుంది → దరఖాస్తు చేసి పత్రాలు అప్‌లోడ్ చేయండి.'),
          s('Tell your school / college to verify it on NSP before their deadline (institute verification is required).', 'వారి గడువులోగా NSPలో ధృవీకరించమని మీ స్కూల్ / కాలేజీకి చెప్పండి (సంస్థ ధృవీకరణ తప్పనిసరి).'),
          s('Track status; money comes by DBT to the Aadhaar-seeded account.', 'స్టేటస్ ట్రాక్ చేయండి; ఆధార్ సీడ్ అయిన ఖాతాకు DBT ద్వారా డబ్బు.'),
        ],
      },
    ],
    costExample: s('Free to apply. Amounts depend on the scheme and course.', 'దరఖాస్తు ఉచితం. మొత్తాలు పథకం, కోర్సును బట్టి.'),
    problems: [P(['Application stuck at "institute verification".', 'దరఖాస్తు "సంస్థ ధృవీకరణ" వద్ద ఆగిపోయింది.'], ['Meet the college scholarship nodal officer before the institute deadline.', 'సంస్థ గడువుకు ముందే కాలేజీ స్కాలర్‌షిప్ నోడల్ అధికారిని కలవండి.'])],
    lastChecked: CHECKED,
  },

  'rte-free-seats': {
    stages: [
      {
        title: s('Before applying', 'దరఖాస్తుకు ముందు'),
        steps: [
          s('Check the child\'s date of birth falls in the range given in the notification (usually January–February).', 'నోటిఫికేషన్‌లో (సాధారణంగా జనవరి–ఫిబ్రవరి) ఇచ్చిన పరిధిలో పిల్లల పుట్టిన తేదీ ఉందో చూడండి.'),
          s('Keep ready: child\'s birth certificate and Aadhaar, parent\'s Aadhaar, rice card / income certificate, caste certificate, residence proof, any special-category certificate.', 'సిద్ధంగా ఉంచండి: పిల్లల జనన ధృవీకరణ, ఆధార్, తల్లి/తండ్రి ఆధార్, రైస్ కార్డు / ఆదాయ ధృవీకరణ, కుల ధృవీకరణ, నివాస రుజువు, ప్రత్యేక వర్గ సర్టిఫికెట్ ఉంటే.'),
        ],
      },
      {
        title: s('Apply and lottery', 'దరఖాస్తు, లాటరీ'),
        steps: [
          s('cse.ap.gov.in → RTE admissions → register with the parent\'s mobile → fill child details → choose schools near your home (priority by distance).', 'cse.ap.gov.in → RTE admissions → తల్లి/తండ్రి మొబైల్‌తో నమోదు → పిల్లల వివరాలు → మీ ఇంటి దగ్గరి స్కూళ్లు ఎంచుకోండి (దూరం బట్టి ప్రాధాన్యం).'),
          s('Check the lottery results (rounds in March–April) on the same site / SMS.', 'అదే సైట్ / SMSలో లాటరీ ఫలితాలు (మార్చి–ఏప్రిల్ రౌండ్లు) చూడండి.'),
          s('Selected: report to the school with originals within the dates to confirm admission.', 'ఎంపికైతే: ప్రవేశం నిర్ధారించడానికి తేదీల్లోగా అసలు పత్రాలతో స్కూల్‌కు వెళ్లండి.'),
        ],
      },
    ],
    costExample: s('Free schooling — the government pays the school.', 'ఉచిత విద్య — ప్రభుత్వం స్కూల్‌కు చెల్లిస్తుంది.'),
    problems: [P(['School asks for fees / donation.', 'స్కూల్ ఫీజు / డొనేషన్ అడుగుతోంది.'], ['Refuse and complain to the Mandal / District Education Officer with the allotment letter.', 'ఒప్పుకోకండి, కేటాయింపు లేఖతో మండల / జిల్లా విద్యాధికారికి ఫిర్యాదు చేయండి.'])],
    lastChecked: CHECKED,
  },

  'duplicate-ssc-inter': {
    stages: [
      {
        title: s('If the certificate is lost', 'సర్టిఫికెట్ పోతే'),
        steps: [
          s('File a lost-document report with the police (online on citizen.appolice.gov.in or at the station) and get a certificate from the SI, or a Deputy Tahsildar certificate.', 'పోలీసులకు పోయిన పత్రం రిపోర్ట్ చేసి (citizen.appolice.gov.inలో ఆన్‌లైన్ లేదా స్టేషన్‌లో) SI నుండి సర్టిఫికెట్, లేదా డిప్యూటీ తహసీల్దార్ సర్టిఫికెట్ తీసుకోండి.'),
          s('Make an affidavit on stamp paper about the loss and get it notarised.', 'పోయిన విషయంపై స్టాంప్ పేపర్‌పై అఫిడవిట్ చేసి నోటరీ చేయించండి.'),
        ],
      },
      {
        title: s('Apply to the board', 'బోర్డుకు దరఖాస్తు'),
        steps: [
          s('SSC: bse.ap.gov.in → duplicate / migration / correction services. Inter: bie.ap.gov.in → student services. Or apply through your school / college.', 'SSC: bse.ap.gov.in → duplicate / migration / correction సేవలు. ఇంటర్: bie.ap.gov.in → student services. లేదా మీ స్కూల్ / కాలేజీ ద్వారా.'),
          s('Enter hall ticket number, year and school; upload the police / revenue certificate, affidavit and photo; pay the board fee.', 'హాల్ టికెట్ నంబర్, సంవత్సరం, స్కూల్ నమోదు చేసి; పోలీసు / రెవెన్యూ సర్టిఫికెట్, అఫిడవిట్, ఫోటో అప్‌లోడ్ చేసి; బోర్డు ఫీజు చెల్లించండి.'),
          s('For a correction (name / DOB spelling), upload proof such as the birth certificate and school records.', 'సవరణకు (పేరు / పుట్టిన తేదీ స్పెల్లింగ్), జనన ధృవీకరణ, స్కూల్ రికార్డుల వంటి రుజువు అప్‌లోడ్ చేయండి.'),
          s('Collect the duplicate from the board / school or receive it by post.', 'డూప్లికేట్‌ను బోర్డు / స్కూల్ నుండి తీసుకోండి లేదా పోస్ట్‌లో పొందండి.'),
        ],
      },
    ],
    costExample: s('Board fee as shown on the website + notary charges for the affidavit.', 'వెబ్‌సైట్‌లో చూపిన బోర్డు ఫీజు + అఫిడవిట్‌కు నోటరీ ఛార్జీలు.'),
    afterwards: [s('Download your marks memos into DigiLocker so you always have a valid copy.', 'చెల్లుబాటయ్యే కాపీ ఎప్పుడూ ఉండేలా మీ మార్కుల మెమోలను డిజిలాకర్‌లోకి డౌన్‌లోడ్ చేయండి.')],
    lastChecked: CHECKED,
  },
};
