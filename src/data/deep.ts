import { Guide } from '../types';
import { b, CHECKED, fee } from './bi';

/**
 * Full A-to-Z walkthroughs. Each entry upgrades an existing guide (matched by id) with
 * stage-by-stage steps, a worked cost example, "if it goes wrong" fixes and after-care.
 * New guides that only exist in walkthrough form are in `deepGuides` below.
 */
export const deep: Record<string, Partial<Guide>> = {
  // ───────────────────────────────────────────── DRIVING LICENCE (bike / car)
  'driving-licence': {
    title: b('Driving licence — bike or car, from learner\'s licence to the card', 'డ్రైవింగ్ లైసెన్స్ — బైక్ లేదా కారు, లెర్నర్ లైసెన్స్ నుండి కార్డు వరకు'),
    summary: b(
      'Two parts: (1) a learner\'s licence (LL) after a short road-rules test, then (2) after at least 30 days of practice, a driving test at the RTO for the permanent licence, which is posted to you. You apply online, pay online and go to the RTO only for the tests. Doing it yourself costs about ₹1,000–1,600 for bike + car — agents charge several times more.',
      'రెండు భాగాలు: (1) చిన్న రోడ్డు నియమాల పరీక్ష తర్వాత లెర్నర్ లైసెన్స్ (LL), తర్వాత (2) కనీసం 30 రోజుల ప్రాక్టీస్ తర్వాత RTOలో డ్రైవింగ్ టెస్ట్ — పర్మనెంట్ లైసెన్స్ పోస్ట్‌లో వస్తుంది. దరఖాస్తు, చెల్లింపు ఆన్‌లైన్‌లోనే; టెస్టులకు మాత్రమే RTOకు వెళ్లాలి. మీరే చేస్తే బైక్ + కారుకు సుమారు ₹1,000–1,600 — ఏజెంట్లు చాలా రెట్లు ఎక్కువ తీసుకుంటారు.',
    ),
    whoCanApply: [
      b('16+ : gearless scooter / moped up to 50cc (with parent\'s consent)', '16+ : 50cc వరకు గేర్ లేని స్కూటర్ / మోపెడ్ (తల్లిదండ్రుల అనుమతితో)'),
      b('18+ : motorcycle with gear (MCWG) and car / jeep / small goods vehicle (LMV)', '18+ : గేర్ ఉన్న మోటార్‌సైకిల్ (MCWG), కారు / జీప్ / చిన్న సరుకు వాహనం (LMV)'),
      b('20+ : lorry, bus and other heavy transport vehicles — see the separate "Heavy vehicle licence" guide', '20+ : లారీ, బస్సు, ఇతర భారీ రవాణా వాహనాలు — వేరే "భారీ వాహన లైసెన్స్" గైడ్ చూడండి'),
    ],
    documents: [
      b('Aadhaar with your current address and a working mobile number linked to it', 'ప్రస్తుత చిరునామాతో ఆధార్, దానికి లింక్ అయిన పనిచేసే మొబైల్ నంబర్'),
      b('If not using Aadhaar e-KYC: age proof (SSC / birth certificate / passport) and address proof', 'ఆధార్ e-KYC వాడకపోతే: వయస్సు రుజువు (SSC / జనన ధృవీకరణ / పాస్‌పోర్ట్), చిరునామా రుజువు'),
      b('Recent passport photo and your signature on white paper (scanned or photographed)', 'ఇటీవలి పాస్‌పోర్ట్ ఫోటో, తెల్ల కాగితంపై మీ సంతకం (స్కాన్ లేదా ఫోటో)'),
      b('Form 1 self-declaration of fitness (filled online); Form 1A doctor\'s certificate if you are 40 or older', 'ఫారం 1 ఆరోగ్య స్వీయ ప్రకటన (ఆన్‌లైన్‌లో నింపుతారు); 40 ఏళ్లు లేదా పైబడితే డాక్టర్ సర్టిఫికెట్ ఫారం 1A'),
      b('For the driving test: your vehicle with valid RC, insurance and pollution (PUC) certificate; helmet for bikes', 'డ్రైవింగ్ టెస్ట్‌కు: చెల్లుబాటయ్యే RC, బీమా, కాలుష్య (PUC) సర్టిఫికెట్‌తో మీ వాహనం; బైక్‌కు హెల్మెట్'),
    ],
    fees: [
      fee(b('Learner\'s licence', 'లెర్నర్ లైసెన్స్'), b('₹150 per vehicle class + ₹50 test', 'ఒక్కో వాహన తరగతికి ₹150 + ₹50 టెస్ట్')),
      fee(b('Driving test', 'డ్రైవింగ్ టెస్ట్'), b('₹300 per vehicle class (same again for a retest)', 'ఒక్కో వాహన తరగతికి ₹300 (మళ్లీ టెస్ట్‌కు మళ్లీ అంతే)')),
      fee(b('Issue of licence', 'లైసెన్స్ జారీ'), b('₹200, plus smart-card and service/user charges shown on the payment page', '₹200, అదనంగా చెల్లింపు పేజీలో చూపే స్మార్ట్ కార్డ్, సర్వీస్/యూజర్ ఛార్జీలు')),
    ],
    stages: [
      {
        title: b('Before you start (10 minutes)', 'మొదలు పెట్టే ముందు (10 నిమిషాలు)'),
        steps: [
          b('Decide which vehicles you need. Apply for all of them together in one LL to save trips: "MCWG" = motorcycle with gear, "LMV" = car / jeep / auto-sized goods vehicle. You pay a little extra per class.', 'మీకు ఏ వాహనాలు కావాలో నిర్ణయించుకోండి. ప్రయాణాలు తగ్గడానికి ఒకే LLలో అన్నింటికీ దరఖాస్తు చేయండి: "MCWG" = గేర్ ఉన్న మోటార్‌సైకిల్, "LMV" = కారు / జీప్ / చిన్న సరుకు వాహనం. ఒక్కో తరగతికి కొంచెం అదనం.'),
          b('Check your Aadhaar address is your current address, and that the mobile linked to Aadhaar is with you — the licence card is posted to this address and OTPs come to this number. If not, update Aadhaar first (see the Aadhaar guides).', 'మీ ఆధార్ చిరునామా ప్రస్తుత చిరునామానే అని, ఆధార్‌కు లింక్ అయిన మొబైల్ మీ దగ్గర ఉందని చూసుకోండి — లైసెన్స్ కార్డు ఈ చిరునామాకే పోస్ట్ అవుతుంది, OTPలు ఈ నంబర్‌కే వస్తాయి. లేకపోతే ముందు ఆధార్ అప్‌డేట్ చేయండి (ఆధార్ గైడ్‌లు చూడండి).'),
          b('Keep a clear photo of your face (plain background) and of your signature ready on the phone.', 'మీ ముఖం స్పష్టమైన ఫోటో (సాదా బ్యాక్‌గ్రౌండ్), సంతకం ఫోటో ఫోన్‌లో సిద్ధంగా ఉంచుకోండి.'),
          b('Practise road signs and rules with the free practice test on the Sarathi / Parivahan site — the real test asks the same kind of questions.', 'Sarathi / Parivahan సైట్‌లోని ఉచిత ప్రాక్టీస్ టెస్ట్‌తో రోడ్డు గుర్తులు, నియమాలు సాధన చేయండి — అసలు పరీక్షలో అలాంటి ప్రశ్నలే వస్తాయి.'),
        ],
      },
      {
        title: b('Apply for the learner\'s licence online (20–30 minutes)', 'లెర్నర్ లైసెన్స్‌కు ఆన్‌లైన్ దరఖాస్తు (20–30 నిమిషాలు)'),
        steps: [
          b('Open parivahan.gov.in → "Online Services" → "Driving Licence Related Services" → select "Andhra Pradesh". This opens the official licence service for AP (if AP sends you to its own transport portal, continue there — the steps are the same).', 'parivahan.gov.in తెరిచి → "Online Services" → "Driving Licence Related Services" → "Andhra Pradesh" ఎంచుకోండి. ఇది AP అధికారిక లైసెన్స్ సేవను తెరుస్తుంది (AP తన రవాణా పోర్టల్‌కు పంపితే అక్కడే కొనసాగించండి — దశలు ఒకటే).'),
          b('Click "Apply for Learner Licence" → read the instructions → "Continue".', '"Apply for Learner Licence" నొక్కండి → సూచనలు చదివి → "Continue".'),
          b('Choose Aadhaar authentication (e-KYC) if offered: enter Aadhaar, get OTP. Your name, date of birth, address and photo are filled from Aadhaar and you don\'t need to upload proofs.', 'అందుబాటులో ఉంటే ఆధార్ ధృవీకరణ (e-KYC) ఎంచుకోండి: ఆధార్ నమోదు చేసి OTP పొందండి. పేరు, పుట్టిన తేదీ, చిరునామా, ఫోటో ఆధార్ నుండి నిండుతాయి — రుజువులు అప్‌లోడ్ చేయనక్కర్లేదు.'),
          b('Fill the rest: RTO office for your area, mobile, email, blood group, emergency contact, education, and tick the vehicle classes (MCWG, LMV…).', 'మిగతావి నింపండి: మీ ప్రాంత RTO ఆఫీసు, మొబైల్, ఈమెయిల్, బ్లడ్ గ్రూప్, అత్యవసర కాంటాక్ట్, విద్య, వాహన తరగతులు (MCWG, LMV…) టిక్ చేయండి.'),
          b('Answer the Form 1 health questions honestly (eyesight, fits, etc.). If you are 40+, upload Form 1A signed by a registered doctor.', 'ఫారం 1 ఆరోగ్య ప్రశ్నలకు నిజాయితీగా జవాబివ్వండి (కంటి చూపు, ఫిట్స్ మొ.). 40+ అయితే రిజిస్టర్డ్ డాక్టర్ సంతకం చేసిన ఫారం 1A అప్‌లోడ్ చేయండి.'),
          b('Upload photo and signature in the size shown on the screen. Submit — note down the APPLICATION NUMBER (write it on paper too).', 'స్క్రీన్‌పై చూపిన సైజులో ఫోటో, సంతకం అప్‌లోడ్ చేయండి. సబ్మిట్ — APPLICATION NUMBER నోట్ చేయండి (కాగితంపై కూడా రాయండి).'),
          b('Pay online (UPI / card / net banking): ₹150 per class + ₹50 test + service charges. Download the receipt.', 'ఆన్‌లైన్‌లో చెల్లించండి (UPI / కార్డు / నెట్ బ్యాంకింగ్): ఒక్కో తరగతికి ₹150 + ₹50 టెస్ట్ + సర్వీస్ ఛార్జీలు. రసీదు డౌన్‌లోడ్ చేయండి.'),
          b('Book the LL test slot: choose the office, date and time. If the service offers an online test at home, follow its face-check instructions instead.', 'LL టెస్ట్ స్లాట్ బుక్ చేయండి: ఆఫీసు, తేదీ, సమయం ఎంచుకోండి. ఇంటి నుండే ఆన్‌లైన్ టెస్ట్ ఆప్షన్ ఉంటే, దాని ఫేస్-చెక్ సూచనలు పాటించండి.'),
        ],
        note: b('Lost the application number? Use "Find Application Number" on the same site with your name and date of birth.', 'అప్లికేషన్ నంబర్ పోయిందా? అదే సైట్‌లో పేరు, పుట్టిన తేదీతో "Find Application Number" వాడండి.'),
      },
      {
        title: b('Learner\'s licence test day', 'లెర్నర్ లైసెన్స్ టెస్ట్ రోజు'),
        steps: [
          b('Reach the RTO 30 minutes early with original Aadhaar, the application printout and fee receipt. Wear a collared shirt — the counter takes your photo.', 'అసలు ఆధార్, అప్లికేషన్ ప్రింట్, ఫీజు రసీదుతో 30 నిమిషాలు ముందే RTOకు చేరుకోండి. కాలర్ ఉన్న షర్ట్ వేసుకోండి — కౌంటర్‌లో మీ ఫోటో తీస్తారు.'),
          b('At the counter: documents are checked and your photo, signature and fingerprint are taken (if not already done online).', 'కౌంటర్‌లో: పత్రాలు తనిఖీ చేసి, మీ ఫోటో, సంతకం, వేలిముద్ర తీసుకుంటారు (ఆన్‌లైన్‌లో చేయకపోతే).'),
          b('Computer test: multiple-choice questions on road signs and traffic rules, available in Telugu. You need about 60% to pass. Read each question fully — there is a time limit per question.', 'కంప్యూటర్ టెస్ట్: రోడ్డు గుర్తులు, ట్రాఫిక్ నియమాలపై బహుళైచ్ఛిక ప్రశ్నలు, తెలుగులో కూడా. పాస్ కావడానికి సుమారు 60% కావాలి. ప్రతి ప్రశ్న పూర్తిగా చదవండి — ఒక్కో ప్రశ్నకు సమయ పరిమితి ఉంటుంది.'),
          b('Passed: your learner\'s licence is issued the same day — download / print it from the same website.', 'పాసైతే: అదే రోజు లెర్నర్ లైసెన్స్ జారీ — అదే వెబ్‌సైట్ నుండి డౌన్‌లోడ్ / ప్రింట్ చేయండి.'),
          b('Failed: you can retake after 7 days by paying ₹50 and booking a new slot.', 'ఫెయిలైతే: 7 రోజుల తర్వాత ₹50 చెల్లించి కొత్త స్లాట్‌తో మళ్లీ రాయవచ్చు.'),
        ],
      },
      {
        title: b('Practise for at least 30 days', 'కనీసం 30 రోజులు ప్రాక్టీస్'),
        steps: [
          b('Carry the LL whenever you drive. Put an "L" board on the front and back of the vehicle.', 'డ్రైవ్ చేసేటప్పుడు LL దగ్గర ఉంచుకోండి. వాహనం ముందు, వెనుక "L" బోర్డు పెట్టండి.'),
          b('Car: a person with a permanent licence must sit beside you. Bike: no pillion passenger except an instructor.', 'కారు: పర్మనెంట్ లైసెన్స్ ఉన్నవారు పక్కన కూర్చోవాలి. బైక్: శిక్షకుడు తప్ప వెనుక ఎవరినీ ఎక్కించుకోకూడదు.'),
          b('Practise the test moves: bike — riding an "8" shape without putting a foot down; car — reversing into a parking box, starting on a slope without rolling back, and stopping smoothly.', 'టెస్ట్ కదలికలు సాధన చేయండి: బైక్ — కాలు కింద పెట్టకుండా "8" ఆకారంలో నడపడం; కారు — పార్కింగ్ బాక్స్‌లోకి రివర్స్, వాలుపై వెనక్కి జారకుండా స్టార్ట్, సాఫీగా ఆపడం.'),
        ],
        note: b('The LL is valid for 6 months. Apply for the permanent licence any time between day 30 and the end of month 6.', 'LL 6 నెలలు చెల్లుతుంది. 30వ రోజు నుండి 6వ నెల చివరి లోపు ఎప్పుడైనా పర్మనెంట్ లైసెన్స్‌కు దరఖాస్తు చేయండి.'),
      },
      {
        title: b('Apply for the permanent licence and book the driving test', 'పర్మనెంట్ లైసెన్స్‌కు దరఖాస్తు, డ్రైవింగ్ టెస్ట్ బుకింగ్'),
        steps: [
          b('Same website → "Apply for Driving Licence" → enter your LL number and date of birth.', 'అదే వెబ్‌సైట్ → "Apply for Driving Licence" → మీ LL నంబర్, పుట్టిన తేదీ నమోదు చేయండి.'),
          b('Check the details carried over from the LL, choose the same vehicle classes, submit.', 'LL నుండి వచ్చిన వివరాలు సరిచూసి, అవే వాహన తరగతులు ఎంచుకుని సబ్మిట్ చేయండి.'),
          b('Pay ₹300 test fee per class + ₹200 licence fee + smart-card/service charges. Download the receipt.', 'ఒక్కో తరగతికి ₹300 టెస్ట్ ఫీజు + ₹200 లైసెన్స్ ఫీజు + స్మార్ట్ కార్డ్/సర్వీస్ ఛార్జీలు చెల్లించండి. రసీదు డౌన్‌లోడ్ చేయండి.'),
          b('Book the driving test slot (date and time at your RTO / MVI test track).', 'డ్రైవింగ్ టెస్ట్ స్లాట్ బుక్ చేయండి (మీ RTO / MVI టెస్ట్ ట్రాక్‌లో తేదీ, సమయం).'),
        ],
      },
      {
        title: b('Driving test day', 'డ్రైవింగ్ టెస్ట్ రోజు'),
        steps: [
          b('Bring: your LL, Aadhaar, fee receipt, slot printout, and the vehicle of the same class with its RC, insurance and PUC (a family member\'s vehicle is fine). Helmet for the bike test.', 'తీసుకెళ్లండి: LL, ఆధార్, ఫీజు రసీదు, స్లాట్ ప్రింట్, అదే తరగతి వాహనం — దాని RC, బీమా, PUCతో (కుటుంబ సభ్యుని వాహనం కూడా సరే). బైక్ టెస్ట్‌కు హెల్మెట్.'),
          b('Report at the counter; the inspector calls you in turn.', 'కౌంటర్‌లో రిపోర్ట్ చేయండి; ఇన్‌స్పెక్టర్ వరుసగా పిలుస్తారు.'),
          b('Bike: ride the "8" track and a short stretch without touching the ground with your feet. Car: drive the track (forward, reverse, parking, slope) and a short road drive with signals.', 'బైక్: కాళ్లు నేలకు తాకకుండా "8" ట్రాక్, చిన్న దూరం నడపండి. కారు: ట్రాక్ (ముందుకు, రివర్స్, పార్కింగ్, వాలు), సిగ్నళ్లతో చిన్న రోడ్డు డ్రైవ్.'),
          b('Use indicators, mirrors and the seat belt / helmet — inspectors fail people for skipping them.', 'ఇండికేటర్లు, అద్దాలు, సీట్ బెల్ట్ / హెల్మెట్ వాడండి — వాటిని వదిలేస్తే ఇన్‌స్పెక్టర్లు ఫెయిల్ చేస్తారు.'),
          b('Result is the same day. Failed: book again after 7 days and pay the ₹300 test fee again (your LL must still be valid).', 'ఫలితం అదే రోజు. ఫెయిలైతే: 7 రోజుల తర్వాత మళ్లీ బుక్ చేసి ₹300 టెస్ట్ ఫీజు మళ్లీ చెల్లించండి (మీ LL చెల్లుబాటులో ఉండాలి).'),
        ],
      },
      {
        title: b('Getting the licence', 'లైసెన్స్ పొందడం'),
        steps: [
          b('The smart-card licence is sent by speed post to your address, usually in 2–4 weeks. Track status on the same website with your application number.', 'స్మార్ట్ కార్డ్ లైసెన్స్ సాధారణంగా 2–4 వారాల్లో మీ చిరునామాకు స్పీడ్ పోస్ట్‌లో వస్తుంది. అప్లికేషన్ నంబర్‌తో అదే సైట్‌లో స్టేటస్ చూడండి.'),
          b('As soon as it is approved, add it to DigiLocker or mParivahan on your phone — this digital copy is legally valid when police check.', 'ఆమోదం రాగానే మీ ఫోన్‌లో DigiLocker లేదా mParivahanలో చేర్చండి — పోలీసులు తనిఖీ చేసినప్పుడు ఈ డిజిటల్ కాపీ చట్టప్రకారం చెల్లుతుంది.'),
        ],
      },
    ],
    costExample: b(
      'Bike (MCWG) + car (LMV) together: learner\'s licence ₹150 × 2 + ₹50 test = ₹350 → driving tests ₹300 × 2 = ₹600 → licence ₹200 → plus smart-card and service charges (a few hundred) ≈ ₹1,300–1,600 in total. Only a bike: about ₹800–1,000.',
      'బైక్ (MCWG) + కారు (LMV) కలిపి: లెర్నర్ లైసెన్స్ ₹150 × 2 + ₹50 టెస్ట్ = ₹350 → డ్రైవింగ్ టెస్టులు ₹300 × 2 = ₹600 → లైసెన్స్ ₹200 → అదనంగా స్మార్ట్ కార్డ్, సర్వీస్ ఛార్జీలు (కొన్ని వందలు) ≈ మొత్తం ₹1,300–1,600. బైక్ మాత్రమే: సుమారు ₹800–1,000.',
    ),
    problems: [
      { problem: b('Aadhaar OTP doesn\'t come.', 'ఆధార్ OTP రావడం లేదు.'), fix: b('Your mobile isn\'t linked to Aadhaar. Link it at an Aadhaar centre (₹75), or choose the non-Aadhaar option and upload age and address proofs.', 'మీ మొబైల్ ఆధార్‌కు లింక్ కాలేదు. ఆధార్ కేంద్రంలో లింక్ చేయించండి (₹75), లేదా ఆధార్ లేని ఆప్షన్ ఎంచుకుని వయస్సు, చిరునామా రుజువులు అప్‌లోడ్ చేయండి.') },
      { problem: b('No test slots available for weeks.', 'వారాల తరబడి టెస్ట్ స్లాట్లు లేవు.'), fix: b('Check other RTO / MVI offices in your district — you can usually pick any office in the district. New slots open as others cancel; check early morning.', 'మీ జిల్లాలోని ఇతర RTO / MVI ఆఫీసులు చూడండి — సాధారణంగా జిల్లాలో ఏ ఆఫీసైనా ఎంచుకోవచ్చు. రద్దయిన స్లాట్లు మళ్లీ తెరుస్తారు; ఉదయాన్నే చూడండి.') },
      { problem: b('My LL expired before I passed the driving test.', 'డ్రైవింగ్ టెస్ట్ పాసవకముందే LL గడువు ముగిసింది.'), fix: b('You must take a new learner\'s licence (apply and test again). Book the driving test well before month 6.', 'కొత్త లెర్నర్ లైసెన్స్ తీసుకోవాలి (మళ్లీ దరఖాస్తు, టెస్ట్). 6వ నెలకు చాలా ముందే డ్రైవింగ్ టెస్ట్ బుక్ చేయండి.') },
      { problem: b('Licence card not received after a month.', 'నెల దాటినా లైసెన్స్ కార్డు రాలేదు.'), fix: b('Check status online; if "dispatched", ask your post office with the speed-post number shown. If returned undelivered, the RTO keeps it — collect it in person with Aadhaar.', 'ఆన్‌లైన్‌లో స్టేటస్ చూడండి; "dispatched" అయితే చూపిన స్పీడ్ పోస్ట్ నంబర్‌తో పోస్టాఫీసులో అడగండి. తిరిగి వెళ్లిపోతే RTO దగ్గరే ఉంటుంది — ఆధార్‌తో స్వయంగా తీసుకోండి.') },
      { problem: b('Someone at the RTO asks for extra money to "pass" you.', 'RTOలో ఎవరైనా "పాస్" చేయిస్తామని అదనపు డబ్బు అడుగుతున్నారు.'), fix: b('Pay only the official fees shown in your online receipt. Report bribe demands to ACB on 14400.', 'మీ ఆన్‌లైన్ రసీదులో చూపిన అధికారిక ఫీజు మాత్రమే చెల్లించండి. లంచం అడిగితే ACB 14400కు ఫిర్యాదు చేయండి.') },
    ],
    afterwards: [
      b('Validity: if you got it before age 30, it is valid till you turn 40; then it is renewed every 10 years (5 years after 55). Renew online up to a year before expiry — a late renewal costs extra.', 'చెల్లుబాటు: 30 ఏళ్ల లోపు తీసుకుంటే 40 ఏళ్లు వచ్చే వరకు; తర్వాత ప్రతి 10 ఏళ్లకు (55 తర్వాత 5 ఏళ్లకు) రెన్యువల్. గడువుకు ఏడాది ముందు నుండే ఆన్‌లైన్‌లో రెన్యువల్ చేయవచ్చు — ఆలస్యమైతే అదనపు ఖర్చు.'),
      b('Change of address, duplicate licence (if lost — first get a police "lost document" report), or adding another vehicle class are all on the same website.', 'చిరునామా మార్పు, డూప్లికేట్ లైసెన్స్ (పోతే — ముందుగా పోలీసు "పోయిన పత్రం" రిపోర్ట్), కొత్త వాహన తరగతి చేర్చడం — అన్నీ అదే వెబ్‌సైట్‌లో.'),
      b('Going abroad? Apply for an International Driving Permit (₹1,000) on the same site with your passport and visa.', 'విదేశాలకు వెళ్తున్నారా? పాస్‌పోర్ట్, వీసాతో అదే సైట్‌లో ఇంటర్నేషనల్ డ్రైవింగ్ పర్మిట్‌కు (₹1,000) దరఖాస్తు చేయండి.'),
    ],
    keywords: ['driving licence', 'driving license', 'license', 'licence', 'LLR', 'LL', 'learner', 'RTO', 'sarathi', 'parivahan', 'bike licence', 'car licence', 'two wheeler', 'four wheeler', 'డ్రైవింగ్', 'లైసెన్స్', 'లెర్నర్'],
    links: [
      { label: 'Parivahan — driving licence services', url: 'https://parivahan.gov.in' },
      { label: 'Sarathi (licence services)', url: 'https://sarathi.parivahan.gov.in' },
    ],
    lastChecked: CHECKED,
  },

  // ───────────────────────────────────────────── PROPERTY REGISTRATION
  'property-registration': {
    title: b('Buy and register land, a house or a flat — complete walkthrough', 'భూమి, ఇల్లు లేదా ఫ్లాట్ కొని రిజిస్టర్ చేయడం — పూర్తి మార్గదర్శి'),
    summary: b(
      'A property becomes yours legally only when the sale deed is registered at the Sub-Registrar Office (SRO). In AP you check the property, prepare the deed online (Card Prime / public data entry), pay about 7.5% of the government market value (or the price, if higher) as duties and fees, book a slot, and register with the seller and two witnesses. The land record (1B) then changes to your name automatically.',
      'సేల్ డీడ్ సబ్-రిజిస్ట్రార్ ఆఫీసు (SRO)లో రిజిస్టర్ అయినప్పుడే ఆస్తి చట్టప్రకారం మీదవుతుంది. APలో ఆస్తి తనిఖీ చేసి, డీడ్‌ను ఆన్‌లైన్‌లో (కార్డ్ ప్రైమ్ / పబ్లిక్ డేటా ఎంట్రీ) తయారు చేసి, ప్రభుత్వ మార్కెట్ విలువపై (లేదా ధర ఎక్కువైతే దానిపై) సుమారు 7.5% డ్యూటీలు, ఫీజులు చెల్లించి, స్లాట్ బుక్ చేసి, అమ్మకందారు, ఇద్దరు సాక్షులతో రిజిస్టర్ చేయాలి. తర్వాత భూ రికార్డు (1B) ఆటోమేటిక్‌గా మీ పేరుకు మారుతుంది.',
    ),
    stages: [
      {
        title: b('Check the property before paying anything', 'ఏదైనా డబ్బు ఇచ్చే ముందు ఆస్తి తనిఖీ'),
        steps: [
          b('Get photocopies of the seller\'s title deed and the older "link" deeds (how the seller got it — sale, gift, inheritance) going back 30 years if possible.', 'అమ్మకందారుని టైటిల్ డీడ్, పాత "లింక్" డీడ్‌ల (అమ్మకందారుకు ఎలా వచ్చిందో — కొనుగోలు, గిఫ్ట్, వారసత్వం) జిరాక్స్‌లు తీసుకోండి — వీలైతే 30 ఏళ్ల వెనక్కి.'),
          b('Download the Encumbrance Certificate (EC) for 30 years on registration.ap.gov.in → "Encumbrance Search". It must show the seller as the last buyer and no unpaid loan or later sale.', 'registration.ap.gov.in → "Encumbrance Search"లో 30 ఏళ్ల EC డౌన్‌లోడ్ చేయండి. చివరి కొనుగోలుదారుగా అమ్మకందారు ఉండాలి; తీరని రుణం, తర్వాతి అమ్మకం ఉండకూడదు.'),
          b('Land: open meebhoomi.ap.gov.in → 1B and Adangal → enter village and survey number. The seller\'s name and extent must match the deed.', 'భూమి: meebhoomi.ap.gov.in → 1B, అడంగల్ → గ్రామం, సర్వే నంబర్ నమోదు చేయండి. అమ్మకందారు పేరు, విస్తీర్ణం డీడ్‌తో సరిపోవాలి.'),
          b('Check the 22A prohibited list on registration.ap.gov.in → "Prohibited Properties". If the survey number is listed, do not buy.', 'registration.ap.gov.in → "Prohibited Properties"లో 22A నిషేధిత జాబితా చూడండి. సర్వే నంబర్ ఉంటే కొనకండి.'),
          b('Plots and flats: ask for the layout approval (LP number) or building plan approval; for flats with 8+ units also check the project on the AP RERA website.', 'ప్లాట్లు, ఫ్లాట్లు: లేఅవుట్ ఆమోదం (LP నంబర్) లేదా బిల్డింగ్ ప్లాన్ ఆమోదం అడగండి; 8+ యూనిట్ల ఫ్లాట్లకు AP RERA వెబ్‌సైట్‌లో ప్రాజెక్ట్ కూడా చూడండి.'),
          b('Ask for the latest property tax / land tax receipt and see the site in person — talk to neighbours about boundaries and disputes.', 'తాజా ఆస్తి పన్ను / భూమి పన్ను రసీదు అడగండి, స్థలాన్ని స్వయంగా చూడండి — హద్దులు, వివాదాల గురించి పొరుగువారితో మాట్లాడండి.'),
          b('If the seller got it by inheritance, all legal heirs must sign the sale (check the Family Member Certificate).', 'అమ్మకందారుకు వారసత్వంగా వస్తే, చట్టబద్ధ వారసులందరూ అమ్మకంపై సంతకం చేయాలి (కుటుంబ సభ్యుల ధృవీకరణ పత్రం చూడండి).'),
        ],
        note: b('For a big purchase, paying a property lawyer ₹3,000–10,000 to check the title is cheap protection.', 'పెద్ద కొనుగోలుకు, టైటిల్ తనిఖీకి ఆస్తి న్యాయవాదికి ₹3,000–10,000 ఇవ్వడం చౌకైన రక్షణ.'),
      },
      {
        title: b('Agree the price and pay advance safely', 'ధర ఒప్పుకుని అడ్వాన్స్ సురక్షితంగా చెల్లించడం'),
        steps: [
          b('Write a sale agreement: price, advance, balance date, what happens if either side backs out. Both sign with two witnesses.', 'సేల్ అగ్రిమెంట్ రాయండి: ధర, అడ్వాన్స్, మిగతా చెల్లింపు తేదీ, ఎవరైనా వెనక్కి తగ్గితే ఏమవుతుంది. ఇద్దరూ ఇద్దరు సాక్షులతో సంతకం చేయాలి.'),
          b('Pay only by bank transfer or cheque — never cash. Cash of ₹20,000 or more for property is not allowed under income tax law.', 'బ్యాంక్ ట్రాన్స్‌ఫర్ లేదా చెక్ ద్వారానే చెల్లించండి — నగదు వద్దు. ఆస్తికి ₹20,000 లేదా ఎక్కువ నగదు ఆదాయపు పన్ను చట్టం ప్రకారం అనుమతి లేదు.'),
          b('Housing loan? Give the bank the documents now — the bank does its own legal check and pays the seller directly on registration day.', 'హౌసింగ్ లోన్ తీసుకుంటున్నారా? ఇప్పుడే బ్యాంకుకు పత్రాలు ఇవ్వండి — బ్యాంక్ సొంత లీగల్ తనిఖీ చేసి రిజిస్ట్రేషన్ రోజు నేరుగా అమ్మకందారుకు చెల్లిస్తుంది.'),
        ],
      },
      {
        title: b('Find the market value and calculate the duty', 'మార్కెట్ విలువ తెలుసుకుని డ్యూటీ లెక్కించడం'),
        steps: [
          b('registration.ap.gov.in → "Market Value Assistance" → choose district, mandal, village (or ward/block/locality in towns) → survey or door number. Note the value per acre / square yard.', 'registration.ap.gov.in → "Market Value Assistance" → జిల్లా, మండలం, గ్రామం (పట్టణాల్లో వార్డు/బ్లాక్/ప్రాంతం) → సర్వే లేదా డోర్ నంబర్. ఎకరానికి / చదరపు గజానికి విలువ నోట్ చేయండి.'),
          b('Multiply by the extent (and add the building value for houses / flats). Duty is charged on this market value or the agreed price — whichever is higher.', 'విస్తీర్ణంతో గుణించండి (ఇళ్లు / ఫ్లాట్లకు భవన విలువ కలపండి). ఈ మార్కెట్ విలువ లేదా ఒప్పుకున్న ధర — ఏది ఎక్కువైతే దానిపై డ్యూటీ.'),
          b('Open "Duty & Fee Calculator" → nature "Sale" → enter the value. It shows stamp duty (5%), transfer duty (1.5%) and registration fee (1%).', '"Duty & Fee Calculator" తెరిచి → nature "Sale" → విలువ నమోదు చేయండి. స్టాంప్ డ్యూటీ (5%), ట్రాన్స్‌ఫర్ డ్యూటీ (1.5%), రిజిస్ట్రేషన్ ఫీజు (1%) చూపిస్తుంది.'),
        ],
      },
      {
        title: b('Prepare the deed online (Card Prime / public data entry)', 'డీడ్‌ను ఆన్‌లైన్‌లో తయారు చేయడం (కార్డ్ ప్రైమ్ / పబ్లిక్ డేటా ఎంట్రీ)'),
        steps: [
          b('On registration.ap.gov.in, sign up / log in with mobile OTP (citizen login).', 'registration.ap.gov.inలో మొబైల్ OTPతో సైన్ అప్ / లాగిన్ అవ్వండి (సిటిజన్ లాగిన్).'),
          b('Choose document preparation → nature of document "Sale" → select the SRO for the area where the property is.', 'డాక్యుమెంట్ తయారీ ఎంచుకోండి → nature "Sale" → ఆస్తి ఉన్న ప్రాంత SRO ఎంచుకోండి.'),
          b('Add executants (sellers) and claimants (buyers): name, father\'s/husband\'s name, age, address, Aadhaar, PAN. Add two witnesses with Aadhaar.', 'ఎగ్జిక్యూటెంట్లు (అమ్మకందారులు), క్లెయిమెంట్లు (కొనుగోలుదారులు) చేర్చండి: పేరు, తండ్రి/భర్త పేరు, వయస్సు, చిరునామా, ఆధార్, PAN. ఆధార్‌తో ఇద్దరు సాక్షులను చేర్చండి.'),
          b('Property schedule: Rural — survey number, khata, extent, four boundaries. Urban — door number, ward, block, plot area, built-up area, floor. Copy these exactly from the link deed.', 'ఆస్తి షెడ్యూల్: గ్రామీణ — సర్వే నంబర్, ఖాతా, విస్తీర్ణం, నాలుగు హద్దులు. పట్టణ — డోర్ నంబర్, వార్డు, బ్లాక్, ప్లాట్ విస్తీర్ణం, నిర్మిత విస్తీర్ణం, అంతస్తు. లింక్ డీడ్ నుండి ఖచ్చితంగా కాపీ చేయండి.'),
          b('Enter the sale price and how it was paid (advance, cheque / transfer details, bank loan).', 'అమ్మకం ధర, ఎలా చెల్లించారో (అడ్వాన్స్, చెక్ / ట్రాన్స్‌ఫర్ వివరాలు, బ్యాంక్ లోన్) నమోదు చేయండి.'),
          b('Submit — you get a 16-digit APPLICATION ID. Download the draft deed and read every line with the seller: spellings of names, survey/door numbers, extent and boundaries.', 'సబ్మిట్ — 16 అంకెల APPLICATION ID వస్తుంది. డ్రాఫ్ట్ డీడ్ డౌన్‌లోడ్ చేసి అమ్మకందారుతో కలిసి ప్రతి లైన్ చదవండి: పేర్ల స్పెల్లింగ్, సర్వే/డోర్ నంబర్లు, విస్తీర్ణం, హద్దులు.'),
        ],
        note: b('A licensed document writer near the SRO can do this data entry for a fee — but you must still read the draft yourself. Most name-mismatch problems start here.', 'SRO దగ్గర లైసెన్స్ ఉన్న డాక్యుమెంట్ రైటర్ ఫీజుకు ఈ డేటా ఎంట్రీ చేస్తారు — కానీ డ్రాఫ్ట్ మీరే చదవాలి. చాలా పేరు తప్పు సమస్యలు ఇక్కడే మొదలవుతాయి.'),
      },
      {
        title: b('Pay duties and book the slot', 'డ్యూటీలు చెల్లించి స్లాట్ బుక్ చేయడం'),
        steps: [
          b('Pay stamp duty, transfer duty, registration fee and user charges online for your application ID (net banking / UPI / card) and download the challans / receipts.', 'మీ అప్లికేషన్ IDకు స్టాంప్ డ్యూటీ, ట్రాన్స్‌ఫర్ డ్యూటీ, రిజిస్ట్రేషన్ ఫీజు, యూజర్ ఛార్జీలు ఆన్‌లైన్‌లో చెల్లించి (నెట్ బ్యాంకింగ్ / UPI / కార్డు) చలాన్లు / రసీదులు డౌన్‌లోడ్ చేయండి.'),
          b('Price ₹50 lakh or more: the BUYER must deduct 1% TDS from the seller\'s payment and pay it on the income tax portal (e-Pay Tax → TDS on sale of property, "Form 26QB") within 30 days from the end of that month, then give the seller Form 16B.', 'ధర ₹50 లక్షలు లేదా ఎక్కువ: కొనుగోలుదారు అమ్మకందారు చెల్లింపు నుండి 1% TDS కట్ చేసి ఆదాయపు పన్ను పోర్టల్‌లో (e-Pay Tax → ఆస్తి అమ్మకంపై TDS, "Form 26QB") ఆ నెల చివరి నుండి 30 రోజుల్లో చెల్లించి, అమ్మకందారుకు Form 16B ఇవ్వాలి.'),
          b('Book an appointment slot at the SRO for a day when the seller, buyer and both witnesses can all come.', 'అమ్మకందారు, కొనుగోలుదారు, ఇద్దరు సాక్షులు అందరూ రాగలిగే రోజుకు SROలో అపాయింట్‌మెంట్ స్లాట్ బుక్ చేయండి.'),
        ],
      },
      {
        title: b('Registration day at the SRO', 'SROలో రిజిస్ట్రేషన్ రోజు'),
        steps: [
          b('Everyone comes on time: all sellers, all buyers, two witnesses. Bring original Aadhaar and PAN, the seller\'s original link deeds, payment receipts and the application ID.', 'అందరూ సమయానికి రావాలి: అమ్మకందారులందరూ, కొనుగోలుదారులందరూ, ఇద్దరు సాక్షులు. అసలు ఆధార్, PAN, అమ్మకందారుని అసలు లింక్ డీడ్‌లు, చెల్లింపు రసీదులు, అప్లికేషన్ ID తీసుకురండి.'),
          b('The SRO staff open your application, check the details and the payments.', 'SRO సిబ్బంది మీ అప్లికేషన్ తెరిచి వివరాలు, చెల్లింపులు తనిఖీ చేస్తారు.'),
          b('Each person gives Aadhaar fingerprint authentication and a photo is taken.', 'ప్రతి వ్యక్తి ఆధార్ వేలిముద్ర ధృవీకరణ ఇస్తారు, ఫోటో తీస్తారు.'),
          b('The Sub-Registrar asks the seller whether they are selling willingly and have received the money. Answer clearly.', 'అమ్మకందారు ఇష్టపూర్వకంగా అమ్ముతున్నారా, డబ్బు అందిందా అని సబ్-రిజిస్ట్రార్ అడుగుతారు. స్పష్టంగా జవాబివ్వండి.'),
          b('Final balance (if any) is handed over by DD / transfer in front of the officer, if that was agreed.', 'ఒప్పందం ప్రకారం మిగతా మొత్తం (ఉంటే) అధికారి ముందు DD / ట్రాన్స్‌ఫర్ ద్వారా ఇస్తారు.'),
          b('The deed is printed, signed by all, scanned and given a document number. Usually 30–60 minutes.', 'డీడ్ ప్రింట్ చేసి, అందరూ సంతకం చేసి, స్కాన్ చేసి డాక్యుమెంట్ నంబర్ ఇస్తారు. సాధారణంగా 30–60 నిమిషాలు.'),
          b('Collect the registered deed (often the same day). Check the document number and your name on it before leaving.', 'రిజిస్టర్డ్ డీడ్ తీసుకోండి (తరచుగా అదే రోజు). వెళ్లే ముందు డాక్యుమెంట్ నంబర్, మీ పేరు సరిచూసుకోండి.'),
        ],
      },
      {
        title: b('After registration — put everything in your name', 'రిజిస్ట్రేషన్ తర్వాత — అన్నీ మీ పేరుకు మార్చడం'),
        steps: [
          b('Land: the 1B / Adangal changes to your name automatically (auto-mutation). Check Meebhoomi after 2–4 weeks; if not updated, apply at the Village Secretariat (see the Land Mutation guide).', 'భూమి: 1B / అడంగల్ ఆటోమేటిక్‌గా మీ పేరుకు మారుతుంది (ఆటో-మ్యుటేషన్). 2–4 వారాల తర్వాత మీభూమిలో చూడండి; మారకపోతే గ్రామ సచివాలయంలో దరఖాస్తు చేయండి (భూమి మ్యుటేషన్ గైడ్ చూడండి).'),
          b('House / flat / plot in a town or village: apply to change the property tax name (municipality or panchayat) with a copy of the deed.', 'పట్టణం లేదా గ్రామంలో ఇల్లు / ఫ్లాట్ / ప్లాట్: డీడ్ కాపీతో ఆస్తి పన్ను పేరు మార్పుకు (మున్సిపాలిటీ లేదా పంచాయతీ) దరఖాస్తు చేయండి.'),
          b('Change the name on the electricity and water connections.', 'కరెంట్, నీటి కనెక్షన్లపై పేరు మార్చండి.'),
          b('After a month, download a fresh EC — your purchase should appear in it.', 'నెల తర్వాత కొత్త EC డౌన్‌లోడ్ చేయండి — మీ కొనుగోలు అందులో కనిపించాలి.'),
        ],
      },
    ],
    costExample: b(
      'Plot with market value ₹30,00,000 (price agreed ₹28 lakh, so duty is on ₹30 lakh): stamp duty 5% = ₹1,50,000 + transfer duty 1.5% = ₹45,000 + registration fee 1% = ₹30,000 → about ₹2,25,000 plus small user charges. No TDS (below ₹50 lakh). A ₹60 lakh flat: about ₹4,50,000 in duties, and the buyer deducts ₹60,000 TDS from the seller\'s payment.',
      'మార్కెట్ విలువ ₹30,00,000 ఉన్న ప్లాట్ (ఒప్పుకున్న ధర ₹28 లక్షలు, కాబట్టి డ్యూటీ ₹30 లక్షలపై): స్టాంప్ డ్యూటీ 5% = ₹1,50,000 + ట్రాన్స్‌ఫర్ డ్యూటీ 1.5% = ₹45,000 + రిజిస్ట్రేషన్ ఫీజు 1% = ₹30,000 → సుమారు ₹2,25,000, అదనంగా చిన్న యూజర్ ఛార్జీలు. TDS లేదు (₹50 లక్షల లోపు). ₹60 లక్షల ఫ్లాట్: డ్యూటీలు సుమారు ₹4,50,000, అమ్మకందారు చెల్లింపు నుండి కొనుగోలుదారు ₹60,000 TDS కట్ చేస్తారు.',
    ),
    problems: [
      { problem: b('Seller\'s name in 1B is different from the deed.', '1Bలో అమ్మకందారు పేరు డీడ్‌లో ఉన్నదానికి భిన్నంగా ఉంది.'), fix: b('Ask the seller to get it corrected first (mutation / correction at the secretariat). Don\'t register until the records match.', 'ముందుగా సరిచేయించమని అమ్మకందారుని అడగండి (సచివాలయంలో మ్యుటేషన్ / సవరణ). రికార్డులు సరిపోయే వరకు రిజిస్టర్ చేయకండి.') },
      { problem: b('After registration we found a spelling mistake in the deed.', 'రిజిస్ట్రేషన్ తర్వాత డీడ్‌లో స్పెల్లింగ్ తప్పు కనిపించింది.'), fix: b('Register a rectification deed at the same SRO with the same parties (see "Name wrong in property registration").', 'అదే SROలో అదే పార్టీలతో రెక్టిఫికేషన్ డీడ్ రిజిస్టర్ చేయండి ("ఆస్తి రిజిస్ట్రేషన్‌లో పేరు తప్పు" గైడ్ చూడండి).') },
      { problem: b('Fingerprints don\'t match during Aadhaar authentication (common for elderly people and labourers).', 'ఆధార్ ధృవీకరణలో వేలిముద్రలు సరిపోవడం లేదు (వృద్ధులు, కూలీల్లో సాధారణం).'), fix: b('Tell the officer — other Aadhaar methods (other fingers, iris or face) are tried where available. Updating biometrics at an Aadhaar centre before the slot avoids this.', 'అధికారికి చెప్పండి — అందుబాటులో ఉన్నచోట ఇతర ఆధార్ పద్ధతులు (ఇతర వేళ్లు, కనుపాప లేదా ముఖం) ప్రయత్నిస్తారు. స్లాట్‌కు ముందే ఆధార్ కేంద్రంలో బయోమెట్రిక్స్ అప్‌డేట్ చేయిస్తే ఈ సమస్య రాదు.') },
      { problem: b('The survey number is in the 22A prohibited list.', 'సర్వే నంబర్ 22A నిషేధిత జాబితాలో ఉంది.'), fix: b('The SRO will refuse. Don\'t pay. If the seller says it is wrongly listed, they must get it removed by the Collector first (see the 22A guide).', 'SRO తిరస్కరిస్తుంది. డబ్బు ఇవ్వకండి. తప్పుగా జాబితాలో ఉందని అమ్మకందారు అంటే, ముందుగా కలెక్టర్ ద్వారా తొలగించుకోవాలి (22A గైడ్ చూడండి).') },
      { problem: b('The seller lives abroad and can\'t come.', 'అమ్మకందారు విదేశాల్లో ఉన్నారు, రాలేరు.'), fix: b('They can give a registered power of attorney (GPA) to someone here, attested at the Indian Embassy and adjudicated in AP within 3 months (see the NRI and Will/GPA guides).', 'ఇక్కడి వ్యక్తికి రిజిస్టర్డ్ పవర్ ఆఫ్ అటార్నీ (GPA) ఇవ్వవచ్చు — భారత రాయబార కార్యాలయంలో ధృవీకరించి, 3 నెలల్లో APలో అడ్జుడికేట్ చేయించాలి (NRI, వీలునామా/GPA గైడ్‌లు చూడండి).') },
      { problem: b('Someone offers to register "at a lower value" to save duty.', 'డ్యూటీ ఆదా చేయడానికి "తక్కువ విలువకు" రిజిస్టర్ చేయిస్తామని ఎవరైనా అంటున్నారు.'), fix: b('Duty can never be below the government market value, and showing a lower price than actually paid causes income-tax and loan problems later. Refuse.', 'ప్రభుత్వ మార్కెట్ విలువ కంటే తక్కువ డ్యూటీ ఎప్పుడూ ఉండదు; నిజంగా చెల్లించిన దానికంటే తక్కువ ధర చూపిస్తే తర్వాత ఆదాయపు పన్ను, రుణ సమస్యలు వస్తాయి. ఒప్పుకోకండి.') },
    ],
    afterwards: [
      b('Keep the original registered deed and the seller\'s original link deeds safely — banks need originals for loans. Take a certified copy as a backup.', 'అసలు రిజిస్టర్డ్ డీడ్, అమ్మకందారుని అసలు లింక్ డీడ్‌లు జాగ్రత్తగా ఉంచండి — రుణాలకు బ్యాంకులు అసలువే అడుగుతాయి. బ్యాకప్‌గా సర్టిఫైడ్ కాపీ తీసుకోండి.'),
      b('Pay property tax every year in your name and keep the receipts.', 'ప్రతి ఏటా మీ పేరుపై ఆస్తి పన్ను కట్టి రసీదులు దాచుకోండి.'),
      b('Check the EC and 1B once a year — it is the easiest way to catch fraud on your property early.', 'ఏడాదికి ఒకసారి EC, 1B చూడండి — మీ ఆస్తిపై మోసాన్ని ముందే పట్టుకోవడానికి ఇదే సులభ మార్గం.'),
    ],
    lastChecked: CHECKED,
  },
};

/** Guides that exist only in full walkthrough form. */
export const deepGuides: Guide[] = [
  {
    id: 'heavy-vehicle-licence',
    category: 'transport',
    level: 'both',
    title: b('Lorry / bus driving licence (heavy transport vehicle)', 'లారీ / బస్సు డ్రైవింగ్ లైసెన్స్ (భారీ రవాణా వాహనం)'),
    summary: b(
      'To drive a lorry, tipper, tanker or bus you need a transport (heavy vehicle) licence. You must be 20 or older, normally already hold a driving licence, and finish training at a government-recognised heavy-vehicle driving school. Then you take a learner\'s licence for the heavy class and, after 30 days, a driving test in a heavy vehicle. Small goods vehicles up to 7,500 kg (pick-ups, mini-trucks) can be driven on an ordinary car (LMV) licence, as the Supreme Court held in November 2024.',
      'లారీ, టిప్పర్, ట్యాంకర్ లేదా బస్సు నడపడానికి రవాణా (భారీ వాహన) లైసెన్స్ కావాలి. 20 ఏళ్లు పైబడి ఉండాలి, సాధారణంగా ఇప్పటికే డ్రైవింగ్ లైసెన్స్ ఉండాలి, ప్రభుత్వ గుర్తింపు ఉన్న భారీ వాహన డ్రైవింగ్ స్కూల్‌లో శిక్షణ పూర్తి చేయాలి. తర్వాత భారీ తరగతికి లెర్నర్ లైసెన్స్, 30 రోజుల తర్వాత భారీ వాహనంలో డ్రైవింగ్ టెస్ట్. 7,500 కిలోల వరకు ఉన్న చిన్న సరుకు వాహనాలను (పికప్‌లు, మినీ ట్రక్కులు) సాధారణ కారు (LMV) లైసెన్స్‌తోనే నడపవచ్చు — నవంబర్ 2024లో సుప్రీంకోర్టు ఇలా తీర్పు ఇచ్చింది.',
    ),
    keywords: ['lorry', 'lorry licence', 'truck', 'heavy vehicle', 'HGMV', 'HPMV', 'HMV', 'bus licence', 'tipper', 'tanker', 'transport licence', 'badge', 'commercial licence', 'లారీ', 'ట్రక్', 'భారీ వాహన', 'బస్సు', 'రవాణా లైసెన్స్'],
    whoCanApply: [
      b('Age 20 or above', '20 ఏళ్లు లేదా పైబడినవారు'),
      b('Normally holding a driving licence for some time already (RTOs usually expect about a year of LMV driving) — ask your RTO', 'సాధారణంగా ఇప్పటికే కొంత కాలంగా డ్రైవింగ్ లైసెన్స్ ఉండాలి (RTOలు సాధారణంగా సుమారు ఏడాది LMV అనుభవం ఆశిస్తాయి) — మీ RTOను అడగండి'),
      b('Completed training at a recognised driving school for heavy vehicles (since 2019 this certificate replaces the old 8th-class education rule)', 'భారీ వాహనాల కోసం గుర్తింపు ఉన్న డ్రైవింగ్ స్కూల్‌లో శిక్షణ పూర్తి (2019 నుండి ఈ సర్టిఫికెట్ పాత 8వ తరగతి విద్య నియమం స్థానంలో)'),
      b('Medically fit — eyesight, hearing and general health certified by a doctor', 'వైద్యపరంగా ఫిట్ — కంటి చూపు, వినికిడి, సాధారణ ఆరోగ్యం డాక్టర్ ధృవీకరణ'),
    ],
    documents: [
      b('Existing driving licence (and Aadhaar with linked mobile)', 'ప్రస్తుత డ్రైవింగ్ లైసెన్స్ (లింక్ అయిన మొబైల్‌తో ఆధార్)'),
      b('Driving school training certificate (Form 5) for the heavy class', 'భారీ తరగతికి డ్రైవింగ్ స్కూల్ శిక్షణ సర్టిఫికెట్ (ఫారం 5)'),
      b('Medical certificate Form 1A signed by a registered doctor (required for every transport licence)', 'రిజిస్టర్డ్ డాక్టర్ సంతకం చేసిన మెడికల్ సర్టిఫికెట్ ఫారం 1A (ప్రతి రవాణా లైసెన్స్‌కు తప్పనిసరి)'),
      b('Photo and signature', 'ఫోటో, సంతకం'),
      b('For the test: a heavy vehicle of that class with valid RC, insurance, fitness certificate and permit (driving schools usually provide one)', 'టెస్ట్‌కు: చెల్లుబాటయ్యే RC, బీమా, ఫిట్‌నెస్ సర్టిఫికెట్, పర్మిట్‌తో ఆ తరగతి భారీ వాహనం (సాధారణంగా డ్రైవింగ్ స్కూల్ ఇస్తుంది)'),
    ],
    fees: [
      fee(b('Learner\'s licence for heavy class', 'భారీ తరగతికి లెర్నర్ లైసెన్స్'), b('₹150 + ₹50 test', '₹150 + ₹50 టెస్ట్')),
      fee(b('Driving test', 'డ్రైవింగ్ టెస్ట్'), b('₹300', '₹300')),
      fee(b('Adding the heavy class to your licence', 'మీ లైసెన్స్‌కు భారీ తరగతి చేర్చడం'), b('About ₹500, plus card and service charges', 'సుమారు ₹500, అదనంగా కార్డ్, సర్వీస్ ఛార్జీలు')),
      fee(b('Driving school', 'డ్రైవింగ్ స్కూల్'), b('Private fee — compare 2–3 recognised schools; ask if the test vehicle is included', 'ప్రైవేట్ ఫీజు — 2–3 గుర్తింపు ఉన్న స్కూళ్లను పోల్చండి; టెస్ట్ వాహనం కలిపి ఉందో అడగండి')),
    ],
    steps: [
      b('Join a recognised heavy-vehicle driving school and get the training certificate (Form 5).', 'గుర్తింపు ఉన్న భారీ వాహన డ్రైవింగ్ స్కూల్‌లో చేరి శిక్షణ సర్టిఫికెట్ (ఫారం 5) పొందండి.'),
      b('Get Form 1A from a doctor, apply online for a learner\'s licence for the heavy class and pass the LL test.', 'డాక్టర్ నుండి ఫారం 1A తీసుకుని, భారీ తరగతికి ఆన్‌లైన్‌లో లెర్నర్ లైసెన్స్‌కు దరఖాస్తు చేసి LL టెస్ట్ పాసవ్వండి.'),
      b('After 30 days, book and pass the driving test in a heavy vehicle; the class is added to your licence.', '30 రోజుల తర్వాత భారీ వాహనంలో డ్రైవింగ్ టెస్ట్ బుక్ చేసి పాసవ్వండి; మీ లైసెన్స్‌కు ఆ తరగతి చేరుతుంది.'),
    ],
    stages: [
      {
        title: b('Decide which licence you actually need', 'మీకు నిజంగా ఏ లైసెన్స్ కావాలో నిర్ణయించుకోండి'),
        steps: [
          b('Pick-up, Tata Ace type mini-truck, small tempo — gross weight up to 7,500 kg: an ordinary LMV (car) licence is enough.', 'పికప్, టాటా ఏస్ లాంటి మినీ ట్రక్, చిన్న టెంపో — మొత్తం బరువు 7,500 కిలోల వరకు: సాధారణ LMV (కారు) లైసెన్స్ చాలు.'),
          b('Medium goods vehicle (MGV) — above 7,500 kg up to 12,000 kg: medium/heavy transport class.', 'మీడియం సరుకు వాహనం (MGV) — 7,500 కిలోలకు పైగా 12,000 కిలోల వరకు: మీడియం/భారీ రవాణా తరగతి.'),
          b('Lorry, tipper, tanker, trailer — above 12,000 kg: Heavy Goods Motor Vehicle (HGMV). Bus: Heavy Passenger Motor Vehicle (HPMV).', 'లారీ, టిప్పర్, ట్యాంకర్, ట్రైలర్ — 12,000 కిలోలకు పైగా: హెవీ గూడ్స్ మోటార్ వెహికల్ (HGMV). బస్సు: హెవీ ప్యాసింజర్ మోటార్ వెహికల్ (HPMV).'),
          b('Carrying petrol, gas, chemicals or explosives also needs a separate hazardous-goods endorsement after extra training.', 'పెట్రోల్, గ్యాస్, రసాయనాలు లేదా పేలుడు పదార్థాల రవాణాకు అదనపు శిక్షణ తర్వాత ప్రత్యేక హజార్డస్-గూడ్స్ ఎండార్స్‌మెంట్ కూడా కావాలి.'),
        ],
        note: b('The weight is the "gross vehicle weight" written in the vehicle\'s RC.', 'బరువు అంటే వాహన RCలో రాసి ఉన్న "గ్రాస్ వెహికల్ వెయిట్".'),
      },
      {
        title: b('Training at a recognised driving school', 'గుర్తింపు ఉన్న డ్రైవింగ్ స్కూల్‌లో శిక్షణ'),
        steps: [
          b('Ask at your RTO for the list of driving schools recognised for heavy vehicles in your district — only their certificate is accepted.', 'మీ జిల్లాలో భారీ వాహనాలకు గుర్తింపు ఉన్న డ్రైవింగ్ స్కూళ్ల జాబితా మీ RTOలో అడగండి — వాటి సర్టిఫికెట్ మాత్రమే అంగీకరిస్తారు.'),
          b('Join with your existing licence and Aadhaar. Many schools apply for your learner\'s licence for you — check their fee covers the LL, training, test vehicle and test-day help.', 'ప్రస్తుత లైసెన్స్, ఆధార్‌తో చేరండి. చాలా స్కూళ్లు మీ తరఫున లెర్నర్ లైసెన్స్‌కు దరఖాస్తు చేస్తాయి — వాటి ఫీజులో LL, శిక్షణ, టెస్ట్ వాహనం, టెస్ట్ రోజు సహాయం ఉన్నాయో చూడండి.'),
          b('Attend all classes: road rules for heavy vehicles, loading limits, reversing with mirrors, gradients, basic repairs, first aid.', 'అన్ని తరగతులకు హాజరవ్వండి: భారీ వాహనాల రోడ్డు నియమాలు, లోడ్ పరిమితులు, అద్దాలతో రివర్స్, వాలులు, ప్రాథమిక మరమ్మతులు, ప్రథమ చికిత్స.'),
          b('At the end, collect the training certificate (Form 5).', 'చివర్లో శిక్షణ సర్టిఫికెట్ (ఫారం 5) తీసుకోండి.'),
        ],
      },
      {
        title: b('Medical certificate', 'మెడికల్ సర్టిఫికెట్'),
        steps: [
          b('Download Form 1A from the transport website or get it at the RTO.', 'రవాణా వెబ్‌సైట్ నుండి ఫారం 1A డౌన్‌లోడ్ చేయండి లేదా RTOలో తీసుకోండి.'),
          b('A registered (MBBS) doctor checks eyesight, colour vision, hearing and general fitness and signs it with their registration number.', 'రిజిస్టర్డ్ (MBBS) డాక్టర్ కంటి చూపు, రంగుల గుర్తింపు, వినికిడి, సాధారణ ఆరోగ్యం పరీక్షించి రిజిస్ట్రేషన్ నంబర్‌తో సంతకం చేస్తారు.'),
        ],
      },
      {
        title: b('Learner\'s licence for the heavy class', 'భారీ తరగతికి లెర్నర్ లైసెన్స్'),
        steps: [
          b('parivahan.gov.in → Driving Licence Related Services → Andhra Pradesh → "Apply for Learner Licence" (choose the option for an existing licence holder if shown, and enter your DL number).', 'parivahan.gov.in → Driving Licence Related Services → Andhra Pradesh → "Apply for Learner Licence" (చూపితే ఇప్పటికే లైసెన్స్ ఉన్నవారి ఆప్షన్ ఎంచుకుని మీ DL నంబర్ నమోదు చేయండి).'),
          b('Select the class (HGMV / HPMV / MGV), upload Form 1A, Form 5, photo and signature.', 'తరగతి (HGMV / HPMV / MGV) ఎంచుకుని, ఫారం 1A, ఫారం 5, ఫోటో, సంతకం అప్‌లోడ్ చేయండి.'),
          b('Pay ₹150 + ₹50 and book the LL test; pass the road-rules test at the RTO the same way as for a car.', '₹150 + ₹50 చెల్లించి LL టెస్ట్ బుక్ చేయండి; కారుకు లాగే RTOలో రోడ్డు నియమాల టెస్ట్ పాసవ్వండి.'),
        ],
      },
      {
        title: b('Driving test in a heavy vehicle (after 30 days)', 'భారీ వాహనంలో డ్రైవింగ్ టెస్ట్ (30 రోజుల తర్వాత)'),
        steps: [
          b('Same website → apply for the driving licence / addition of class with your LL number; pay the ₹300 test fee and licence charges; book the slot.', 'అదే వెబ్‌సైట్ → మీ LL నంబర్‌తో డ్రైవింగ్ లైసెన్స్ / తరగతి చేర్పుకు దరఖాస్తు; ₹300 టెస్ట్ ఫీజు, లైసెన్స్ ఛార్జీలు చెల్లించి స్లాట్ బుక్ చేయండి.'),
          b('Come with your LL, existing DL, Aadhaar, receipts and the heavy vehicle (with RC, insurance, fitness and permit) — usually the school\'s vehicle and instructor.', 'LL, ప్రస్తుత DL, ఆధార్, రసీదులు, భారీ వాహనం (RC, బీమా, ఫిట్‌నెస్, పర్మిట్‌తో) తీసుకురండి — సాధారణంగా స్కూల్ వాహనం, శిక్షకుడు.'),
          b('The inspector tests forward and reverse driving using mirrors, turning in a limited space, gradient start and road driving.', 'అద్దాలతో ముందుకు, రివర్స్ నడపడం, ఇరుకు స్థలంలో తిప్పడం, వాలుపై స్టార్ట్, రోడ్డు డ్రైవింగ్‌ను ఇన్‌స్పెక్టర్ పరీక్షిస్తారు.'),
          b('Pass: the heavy class is added and the new card is posted. Fail: retest after 7 days.', 'పాసైతే: భారీ తరగతి చేరి కొత్త కార్డు పోస్ట్‌లో వస్తుంది. ఫెయిలైతే: 7 రోజుల తర్వాత మళ్లీ టెస్ట్.'),
        ],
      },
    ],
    costExample: b(
      'Government fees: LL ₹200 + driving test ₹300 + addition of class about ₹500 + card/service charges ≈ ₹1,200–1,500. The driving school fee is extra and is usually the biggest cost.',
      'ప్రభుత్వ ఫీజులు: LL ₹200 + డ్రైవింగ్ టెస్ట్ ₹300 + తరగతి చేర్పు సుమారు ₹500 + కార్డ్/సర్వీస్ ఛార్జీలు ≈ ₹1,200–1,500. డ్రైవింగ్ స్కూల్ ఫీజు అదనం — సాధారణంగా ఇదే పెద్ద ఖర్చు.',
    ),
    problems: [
      { problem: b('No recognised heavy-vehicle school in my mandal.', 'నా మండలంలో గుర్తింపు ఉన్న భారీ వాహన స్కూల్ లేదు.'), fix: b('Any recognised school in the district or state is accepted. Government skill programmes for drivers are sometimes free — ask at the RTO or the district skill office.', 'జిల్లా లేదా రాష్ట్రంలో ఏ గుర్తింపు స్కూల్ అయినా సరే. డ్రైవర్లకు ప్రభుత్వ నైపుణ్య కార్యక్రమాలు కొన్నిసార్లు ఉచితం — RTO లేదా జిల్లా నైపుణ్య కార్యాలయంలో అడగండి.') },
      { problem: b('Someone offers a heavy licence "without training or test".', '"శిక్షణ, టెస్ట్ లేకుండా" భారీ లైసెన్స్ ఇప్పిస్తామని ఎవరైనా అంటున్నారు.'), fix: b('That is illegal and the licence can be cancelled; insurance may also reject claims after an accident. Refuse and report to ACB 14400.', 'అది చట్టవిరుద్ధం, లైసెన్స్ రద్దు కావచ్చు; ప్రమాదం తర్వాత బీమా క్లెయిమ్ కూడా తిరస్కరించవచ్చు. ఒప్పుకోకండి, ACB 14400కు ఫిర్యాదు చేయండి.') },
    ],
    afterwards: [
      b('A transport licence must be renewed every 5 years (every 3 years for hazardous goods) with a fresh Form 1A medical certificate.', 'రవాణా లైసెన్స్ ప్రతి 5 ఏళ్లకు (హజార్డస్ గూడ్స్‌కు 3 ఏళ్లకు) కొత్త ఫారం 1A మెడికల్ సర్టిఫికెట్‌తో రెన్యువల్ చేయాలి.'),
      b('Owning the lorry? The vehicle also needs its own papers: RC, insurance, fitness certificate, goods permit or national permit, road tax and PUC — keep them current.', 'లారీ మీ సొంతమా? వాహనానికి సొంత పత్రాలు కూడా కావాలి: RC, బీమా, ఫిట్‌నెస్ సర్టిఫికెట్, గూడ్స్ పర్మిట్ లేదా నేషనల్ పర్మిట్, రోడ్డు పన్ను, PUC — గడువులో ఉంచండి.'),
      b('Register on e-Shram as a driver — it gives free accident insurance (see the e-Shram guide).', 'డ్రైవర్‌గా e-Shramలో నమోదు చేసుకోండి — ఉచిత ప్రమాద బీమా వస్తుంది (e-Shram గైడ్ చూడండి).'),
    ],
    whereToApply: [b('parivahan.gov.in (online), test at your RTO / MVI office', 'parivahan.gov.in (ఆన్‌లైన్), టెస్ట్ మీ RTO / MVI ఆఫీసులో'), b('A recognised heavy-vehicle driving school', 'గుర్తింపు ఉన్న భారీ వాహన డ్రైవింగ్ స్కూల్')],
    timeline: b('Training (usually a few weeks) + at least 30 days on the learner\'s licence + test slot → about 2–3 months.', 'శిక్షణ (సాధారణంగా కొన్ని వారాలు) + లెర్నర్ లైసెన్స్‌పై కనీసం 30 రోజులు + టెస్ట్ స్లాట్ → సుమారు 2–3 నెలలు.'),
    tips: [
      b('Before buying or driving a small goods vehicle, check its gross weight in the RC — up to 7,500 kg your car licence is enough.', 'చిన్న సరుకు వాహనం కొనే / నడిపే ముందు RCలో దాని గ్రాస్ బరువు చూడండి — 7,500 కిలోల వరకు మీ కారు లైసెన్స్ చాలు.'),
      b('Keep the licence in DigiLocker / mParivahan too — police accept the digital copy.', 'లైసెన్స్‌ను DigiLocker / mParivahanలో కూడా ఉంచుకోండి — పోలీసులు డిజిటల్ కాపీని అంగీకరిస్తారు.'),
    ],
    links: [{ label: 'Parivahan — licence services', url: 'https://parivahan.gov.in' }],
    lastChecked: CHECKED,
  },
];
