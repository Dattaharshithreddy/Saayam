import { Guide } from '../types';
import { b, CHECKED } from './bi';

const s = (en: string, te: string) => b(en, te);
const P = (problem: [string, string], fix: [string, string]) => ({ problem: s(...problem), fix: s(...fix) });

/** Full walkthroughs, batch E (checked 20 Oct 2026): police, travel, grievances, banking, insurance, small loans. */
export const deepE: Record<string, Partial<Guide>> = {
  'traffic-challan': {
    stages: [
      {
        title: s('Check what is pending', 'పెండింగ్ ఏముందో చూడడం'),
        steps: [
          s('Open echallan.parivahan.gov.in → "Check Online Services" → "Get Challan Details".', 'echallan.parivahan.gov.in తెరిచి → "Check Online Services" → "Get Challan Details".'),
          s('Choose "Vehicle Number", type the number (e.g. AP39AB1234), enter the chassis / engine last digits if asked, then the captcha and OTP.', '"Vehicle Number" ఎంచుకుని నంబర్ టైప్ చేయండి (ఉదా: AP39AB1234), అడిగితే ఛాసిస్ / ఇంజిన్ చివరి అంకెలు, తర్వాత క్యాప్చా, OTP.'),
          s('Each challan shows date, place, offence, amount and a photo. Check the photo really is your vehicle.', 'ప్రతి చలాన్‌లో తేదీ, స్థలం, నేరం, మొత్తం, ఫోటో ఉంటాయి. ఫోటోలో నిజంగా మీ వాహనమే ఉందో చూడండి.'),
        ],
      },
      {
        title: s('Pay', 'చెల్లించడం'),
        steps: [
          s('Tick the challans → "Pay Now" → pay by UPI / card / net banking.', 'చలాన్లు టిక్ చేసి → "Pay Now" → UPI / కార్డు / నెట్ బ్యాంకింగ్‌తో చెల్లించండి.'),
          s('Download and save the receipt. Status changes to "Paid" — check again after a day.', 'రసీదు డౌన్‌లోడ్ చేసి దాచుకోండి. స్టేటస్ "Paid"గా మారుతుంది — ఒక రోజు తర్వాత మళ్లీ చూడండి.'),
        ],
        note: s('Challans "sent to court" (virtual court) are paid on vcourts.gov.in with the same challan number.', '"కోర్టుకు పంపిన" (వర్చువల్ కోర్టు) చలాన్లు అదే చలాన్ నంబర్‌తో vcourts.gov.inలో చెల్లిస్తారు.'),
      },
      {
        title: s('Challan is wrong', 'చలాన్ తప్పు అయితే'),
        steps: [
          s('Note the challan number and take a screenshot of the photo.', 'చలాన్ నంబర్ నోట్ చేసి ఫోటో స్క్రీన్‌షాట్ తీయండి.'),
          s('Raise a grievance on the e-challan portal or visit the traffic police station of that area with your RC; ask for it to be cancelled.', 'e-చలాన్ పోర్టల్‌లో ఫిర్యాదు చేయండి లేదా RCతో ఆ ప్రాంత ట్రాఫిక్ పోలీస్ స్టేషన్‌కు వెళ్లి రద్దు చేయమని అడగండి.'),
          s('If someone uses a fake copy of your number plate, also give a police complaint.', 'ఎవరైనా మీ నంబర్ ప్లేట్ నకిలీ వాడుతుంటే పోలీసు ఫిర్యాదు కూడా ఇవ్వండి.'),
        ],
      },
    ],
    costExample: s('No helmet: ₹1,000 fine under the Motor Vehicles Act (plus possible licence suspension). Checking is free.', 'హెల్మెట్ లేకపోతే: మోటారు వాహనాల చట్టం ప్రకారం ₹1,000 జరిమానా (లైసెన్స్ సస్పెన్షన్ కూడా ఉండవచ్చు). చూడడం ఉచితం.'),
    problems: [
      P(['SMS with a link says "pay challan now".', '"ఇప్పుడే చలాన్ చెల్లించండి" అని లింక్‌తో SMS.'], ['Don\'t click. Type echallan.parivahan.gov.in yourself and check. Fake challan apps steal bank details.', 'క్లిక్ చేయకండి. echallan.parivahan.gov.in మీరే టైప్ చేసి చూడండి. నకిలీ చలాన్ యాప్‌లు బ్యాంక్ వివరాలు దొంగిలిస్తాయి.']),
      P(['Paid but still shows pending.', 'చెల్లించినా పెండింగ్‌గా చూపిస్తోంది.'], ['Wait 2–3 days; then raise a grievance on the portal with the receipt.', '2–3 రోజులు ఆగండి; తర్వాత రసీదుతో పోర్టల్‌లో ఫిర్యాదు చేయండి.']),
    ],
    lastChecked: CHECKED,
  },

  'apsrtc-booking': {
    stages: [
      {
        title: s('Book a ticket online', 'ఆన్‌లైన్ టికెట్ బుకింగ్'),
        steps: [
          s('Open apsrtconline.in or the APSRTC app → enter From, To and date → Search.', 'apsrtconline.in లేదా APSRTC యాప్ తెరిచి → From, To, తేదీ → Search.'),
          s('Pick a bus (service type, time, fare) → choose seats → enter passenger name, age, gender and mobile.', 'బస్సు ఎంచుకోండి (సర్వీస్ రకం, సమయం, ఛార్జీ) → సీట్లు ఎంచుకుని → ప్రయాణికుల పేరు, వయస్సు, లింగం, మొబైల్.'),
          s('Senior citizen concession: tick it and carry the age proof shown at booking.', 'వృద్ధుల రాయితీ: టిక్ చేసి బుకింగ్‌లో చూపిన వయస్సు రుజువు తీసుకెళ్లండి.'),
          s('Pay; the e-ticket comes by SMS / email. Show it on the phone with an ID while travelling.', 'చెల్లించండి; ఇ-టికెట్ SMS / ఇమెయిల్‌కి వస్తుంది. ప్రయాణంలో ఐడీతో ఫోన్‌లో చూపించండి.'),
        ],
        note: s('WhatsApp option: send "Hi" to 9552300009 (Mana Mitra) and choose bus ticket booking.', 'వాట్సాప్ మార్గం: 9552300009 (మన మిత్ర)కి "Hi" పంపి బస్ టికెట్ బుకింగ్ ఎంచుకోండి.'),
      },
      {
        title: s('Cancel', 'రద్దు'),
        steps: [
          s('Same site/app → "Cancel ticket" → ticket number and mobile → the refund (after cancellation charges) returns to the payment account in a few days.', 'అదే సైట్/యాప్ → "Cancel ticket" → టికెట్ నంబర్, మొబైల్ → రద్దు ఛార్జీల తర్వాత రీఫండ్ కొన్ని రోజుల్లో చెల్లించిన ఖాతాకు.'),
        ],
      },
      {
        title: s('Get a bus pass', 'బస్ పాస్ పొందడం'),
        steps: [
          s('Student pass: get the application from the bus station pass counter (or online where available), have it signed by your school / college, attach photo and Aadhaar.', 'విద్యార్థి పాస్: బస్ స్టేషన్ పాస్ కౌంటర్ (లేదా అందుబాటులో ఉంటే ఆన్‌లైన్) నుండి దరఖాస్తు తీసుకుని స్కూల్ / కాలేజీ సంతకం చేయించి ఫోటో, ఆధార్ జతచేయండి.'),
          s('Pay the pass fee at the counter and collect the pass, usually the same day. Renew monthly / quarterly.', 'కౌంటర్‌లో పాస్ ఫీజు చెల్లించి సాధారణంగా అదే రోజు పాస్ తీసుకోండి. నెలవారీ / త్రైమాసికంగా రెన్యువల్.'),
          s('Women: most ordinary and express buses are free under Stree Shakti — just show Aadhaar / ID.', 'మహిళలు: స్త్రీ శక్తి కింద చాలా ఆర్డినరీ, ఎక్స్‌ప్రెస్ బస్సులు ఉచితం — ఆధార్ / ఐడీ చూపిస్తే చాలు.'),
        ],
      },
    ],
    problems: [P(['Money cut but no ticket.', 'డబ్బు కట్ అయింది కానీ టికెట్ రాలేదు.'], ['Check "Print / view ticket" with your mobile after 30 minutes; if still nothing, the amount auto-refunds — else complain on the APSRTC site with the transaction ID.', '30 నిమిషాల తర్వాత మొబైల్‌తో "Print / view ticket" చూడండి; అప్పుడూ లేకపోతే మొత్తం ఆటోమేటిక్‌గా రీఫండ్ — లేదంటే లావాదేవీ IDతో APSRTC సైట్‌లో ఫిర్యాదు చేయండి.'])],
    lastChecked: CHECKED,
  },

  'emergency-helplines': {
    stages: [
      {
        title: s('Danger now — call 112', 'ఇప్పుడే ప్రమాదం — 112కి కాల్'),
        steps: [
          s('Dial 112 (works even without balance). Say: what is happening, exact place with a landmark, how many people, any weapons or injuries.', '112 డయల్ చేయండి (బ్యాలెన్స్ లేకున్నా పనిచేస్తుంది). చెప్పండి: ఏం జరుగుతోంది, ల్యాండ్‌మార్క్‌తో ఖచ్చితమైన స్థలం, ఎంతమంది, ఆయుధాలు లేదా గాయాలు ఉన్నాయా.'),
          s('Can\'t speak? Press the power button 3 times (or 5 on some phones) or use the 112 India app SOS — your location is sent.', 'మాట్లాడలేరా? పవర్ బటన్ 3 సార్లు (కొన్ని ఫోన్లలో 5) నొక్కండి లేదా 112 India యాప్ SOS వాడండి — మీ లొకేషన్ వెళ్తుంది.'),
        ],
      },
      {
        title: s('Money stolen online — the first hour', 'ఆన్‌లైన్‌లో డబ్బు పోయింది — మొదటి గంట'),
        steps: [
          s('Call 1930 immediately. Give: your bank, account / UPI ID, transaction ID / UTR, amount, time, and the fraudster\'s number or UPI ID.', 'వెంటనే 1930కి కాల్ చేయండి. చెప్పండి: మీ బ్యాంక్, ఖాతా / UPI ID, లావాదేవీ ID / UTR, మొత్తం, సమయం, మోసగాడి నంబర్ లేదా UPI ID.'),
          s('Note the acknowledgement number they give; the money can be put on hold in the fraudster\'s account.', 'వారిచ్చే అక్నాలెడ్జ్‌మెంట్ నంబర్ నోట్ చేయండి; మోసగాడి ఖాతాలో డబ్బు నిలిపివేయవచ్చు.'),
          s('Call your bank\'s helpline to block the card / UPI / net banking.', 'కార్డు / UPI / నెట్ బ్యాంకింగ్ బ్లాక్ చేయడానికి మీ బ్యాంక్ హెల్ప్‌లైన్‌కి కాల్ చేయండి.'),
          s('Within 24 hours, file the full complaint on cybercrime.gov.in with screenshots; keep the complaint number for the bank and police.', '24 గంటల్లో స్క్రీన్‌షాట్లతో cybercrime.gov.inలో పూర్తి ఫిర్యాదు చేయండి; బ్యాంక్, పోలీసుల కోసం ఫిర్యాదు నంబర్ దాచుకోండి.'),
        ],
      },
      {
        title: s('Women and children', 'మహిళలు, పిల్లలు'),
        steps: [
          s('181: women\'s helpline — counselling, police help, and the One Stop Centre (shelter, medical and legal help) in each district.', '181: మహిళా హెల్ప్‌లైన్ — కౌన్సెలింగ్, పోలీసు సహాయం, ప్రతి జిల్లాలో వన్ స్టాప్ సెంటర్ (ఆశ్రయం, వైద్య, న్యాయ సహాయం).'),
          s('1098: a child in danger, child labour, child marriage, a missing child.', '1098: ప్రమాదంలో ఉన్న పిల్లలు, బాల కార్మికులు, బాల్య వివాహం, తప్పిపోయిన పిల్లలు.'),
        ],
      },
    ],
    costExample: s('All calls are free.', 'అన్ని కాల్స్ ఉచితం.'),
    afterwards: [s('Save 112, 108, 181, 1930 and 1098 in your phone and your parents\' phones today.', '112, 108, 181, 1930, 1098లను ఈరోజే మీ ఫోన్‌లో, మీ తల్లిదండ్రుల ఫోన్‌లో సేవ్ చేయండి.')],
    lastChecked: CHECKED,
  },

  'police-complaint': {
    stages: [
      {
        title: s('Write the complaint', 'ఫిర్యాదు రాయడం'),
        steps: [
          s('On plain paper, addressed to "The Station House Officer, ____ Police Station": your name, father\'s name, age, address and phone.', 'సాదా కాగితంపై "స్టేషన్ హౌస్ ఆఫీసర్, ____ పోలీస్ స్టేషన్" చిరునామాతో: మీ పేరు, తండ్రి పేరు, వయస్సు, చిరునామా, ఫోన్.'),
          s('Write what happened in order: date, time, place, who did it (name / description), what was taken or done, witnesses.', 'జరిగింది క్రమంలో రాయండి: తేదీ, సమయం, స్థలం, ఎవరు చేశారు (పేరు / వివరణ), ఏం తీసుకున్నారు లేదా చేశారు, సాక్షులు.'),
          s('Attach copies of evidence (photos, bills, messages, IMEI). Sign with date. Make 2 copies.', 'రుజువుల కాపీలు జతచేయండి (ఫోటోలు, బిల్లులు, మెసేజ్‌లు, IMEI). తేదీతో సంతకం. 2 కాపీలు చేయండి.'),
        ],
      },
      {
        title: s('At the police station', 'పోలీస్ స్టేషన్‌లో'),
        steps: [
          s('Give it at the station of the area where it happened — or any station (Zero FIR; they must transfer it).', 'జరిగిన ప్రాంత స్టేషన్‌లో ఇవ్వండి — లేదా ఏ స్టేషన్‌లోనైనా (జీరో FIR; వారు బదిలీ చేయాలి).'),
          s('For a serious (cognizable) offence — theft, assault, cheating, harassment — ask for the FIR to be registered and take the free FIR copy.', 'తీవ్రమైన (కాగ్నిజబుల్) నేరానికి — దొంగతనం, దాడి, మోసం, వేధింపులు — FIR నమోదు చేయమని అడిగి ఉచిత FIR కాపీ తీసుకోండి.'),
          s('For other matters, get your copy stamped / a receipt (CSR) with the date.', 'ఇతర విషయాలకు, మీ కాపీపై స్టాంప్ / తేదీతో రసీదు (CSR) తీసుకోండి.'),
          s('Note the FIR number and the investigating officer\'s name and phone.', 'FIR నంబర్, దర్యాప్తు అధికారి పేరు, ఫోన్ నోట్ చేయండి.'),
        ],
      },
      {
        title: s('Lost phone or documents', 'పోయిన ఫోన్ లేదా పత్రాలు'),
        steps: [
          s('Report the loss at the station or online on the AP Police citizen portal / app and download the lost report.', 'స్టేషన్‌లో లేదా AP పోలీసు సిటిజన్ పోర్టల్ / యాప్‌లో ఆన్‌లైన్‌లో నష్టం రిపోర్ట్ చేసి లాస్ట్ రిపోర్ట్ డౌన్‌లోడ్ చేయండి.'),
          s('Phone: get a duplicate SIM from your operator, then on sancharsaathi.gov.in → "Block your lost / stolen mobile" with the IMEI, police report and ID.', 'ఫోన్: మీ ఆపరేటర్ నుండి డూప్లికేట్ SIM తీసుకుని, తర్వాత IMEI, పోలీసు రిపోర్ట్, ఐడీతో sancharsaathi.gov.in → "Block your lost / stolen mobile".'),
          s('Use the lost report to apply for duplicate certificates, RC, licence, etc.', 'డూప్లికేట్ సర్టిఫికెట్లు, RC, లైసెన్స్ మొదలైనవాటికి లాస్ట్ రిపోర్ట్ వాడండి.'),
        ],
      },
      {
        title: s('If police refuse', 'పోలీసులు నిరాకరిస్తే'),
        steps: [
          s('Send the complaint by registered post / email to the Superintendent of Police (SP) / Commissioner, keeping the receipt.', 'రిజిస్టర్డ్ పోస్ట్ / ఇమెయిల్ ద్వారా ఎస్పీ / కమిషనర్‌కు ఫిర్యాదు పంపి, రసీదు దాచుకోండి.'),
          s('Still nothing: file a private complaint before the Magistrate (free legal aid on 15100 can help).', 'అప్పటికీ ఏమీ లేకపోతే: మేజిస్ట్రేట్ ముందు ప్రైవేట్ ఫిర్యాదు వేయండి (15100లో ఉచిత న్యాయ సహాయం సహాయపడుతుంది).'),
        ],
      },
    ],
    costExample: s('Complaint, FIR copy and lost report: free. Nobody may charge you.', 'ఫిర్యాదు, FIR కాపీ, లాస్ట్ రిపోర్ట్: ఉచితం. ఎవరూ డబ్బు తీసుకోకూడదు.'),
    lastChecked: CHECKED,
  },

  'pgrs-grievance': {
    stages: [
      {
        title: s('Prepare', 'సిద్ధం'),
        steps: [
          s('Collect your old application / receipt number, dates, the office and officer, and any rejection letter.', 'మీ పాత దరఖాస్తు / రసీదు నంబర్, తేదీలు, కార్యాలయం, అధికారి, ఏదైనా తిరస్కరణ లేఖ సేకరించండి.'),
          s('Write 4–5 clear lines: what you applied for, when, what went wrong, what you want done.', '4–5 స్పష్టమైన లైన్లు రాయండి: దేనికి దరఖాస్తు చేశారు, ఎప్పుడు, ఏం తప్పు జరిగింది, ఏం చేయాలనుకుంటున్నారు.'),
        ],
      },
      {
        title: s('File it', 'దాఖలు'),
        steps: [
          s('Online: pgrs.ap.gov.in → "Register grievance" → Aadhaar + OTP → choose district, department and subject → type the details → attach files → submit.', 'ఆన్‌లైన్: pgrs.ap.gov.in → "Register grievance" → ఆధార్ + OTP → జిల్లా, శాఖ, విషయం ఎంచుకోండి → వివరాలు టైప్ చేసి → ఫైళ్లు జతచేసి → సబ్మిట్.'),
          s('Or at the Village / Ward Secretariat any day, or in person at the Collectorate / mandal office on Monday (grievance day).', 'లేదా ఏ రోజైనా గ్రామ / వార్డు సచివాలయంలో, లేదా సోమవారం (గ్రీవెన్స్ డే) కలెక్టరేట్ / మండల కార్యాలయంలో నేరుగా.'),
          s('Note the grievance number from the SMS.', 'SMS నుండి గ్రీవెన్స్ నంబర్ నోట్ చేయండి.'),
        ],
      },
      {
        title: s('Follow up', 'ఫాలో-అప్'),
        steps: [
          s('Track on the portal / app. Officers may call you for details — answer.', 'పోర్టల్ / యాప్‌లో ట్రాక్ చేయండి. అధికారులు వివరాల కోసం కాల్ చేయవచ్చు — సమాధానం ఇవ్వండి.'),
          s('If closed without solving, give negative feedback / re-open so it goes to a higher officer.', 'పరిష్కరించకుండా మూసేస్తే, నెగటివ్ ఫీడ్‌బ్యాక్ ఇవ్వండి / మళ్లీ తెరవండి, అప్పుడు ఉన్నత అధికారికి వెళ్తుంది.'),
        ],
      },
    ],
    costExample: s('Free.', 'ఉచితం.'),
    problems: [P(['Officer asks for a bribe.', 'అధికారి లంచం అడుగుతున్నారు.'], ['Call ACB 14400 — they can arrange a trap. Don\'t pay.', 'ACB 14400కి కాల్ చేయండి — వారు ట్రాప్ ఏర్పాటు చేయగలరు. చెల్లించకండి.'])],
    lastChecked: CHECKED,
  },

  'free-legal-aid': {
    stages: [
      {
        title: s('Reach the Legal Services Authority', 'న్యాయ సేవాధికార సంస్థను చేరడం'),
        steps: [
          s('Call 15100, or visit the District Legal Services Authority (DLSA) office in the district court complex, or the Mandal Legal Services Committee at the mandal court.', '15100కి కాల్ చేయండి, లేదా జిల్లా కోర్టు ఆవరణలోని జిల్లా న్యాయ సేవాధికార సంస్థ (DLSA), లేదా మండల కోర్టులోని మండల న్యాయ సేవల కమిటీకి వెళ్లండి.'),
          s('Bring your ID, any category / income proof, and all papers about your problem (notices, FIR, documents).', 'మీ ఐడీ, వర్గ / ఆదాయ రుజువు, మీ సమస్యకు సంబంధించిన అన్ని కాగితాలు (నోటీసులు, FIR, పత్రాలు) తీసుకెళ్లండి.'),
        ],
      },
      {
        title: s('Apply', 'దరఖాస్తు'),
        steps: [
          s('Fill the simple legal aid form (staff help you write it) and sign an affidavit about your eligibility if asked.', 'సాధారణ న్యాయ సహాయ ఫారం నింపండి (సిబ్బంది రాయడంలో సహాయం చేస్తారు), అడిగితే అర్హతపై అఫిడవిట్ సంతకం చేయండి.'),
          s('You get advice the same day; for a case, a panel lawyer is assigned — note their name and phone.', 'అదే రోజు సలహా; కేసుకు ప్యానెల్ న్యాయవాదిని కేటాయిస్తారు — వారి పేరు, ఫోన్ నోట్ చేయండి.'),
          s('The lawyer files / defends the case; court fees and copies are paid by the authority.', 'న్యాయవాది కేసు వేస్తారు / వాదిస్తారు; కోర్టు ఫీజు, కాపీల ఖర్చు సంస్థ భరిస్తుంది.'),
        ],
      },
      {
        title: s('Settle quickly in Lok Adalat', 'లోక్ అదాలత్‌లో త్వరగా పరిష్కారం'),
        steps: [
          s('Ask the DLSA to list your matter (loan, family, accident claim, cheque bounce, challans) in the next Lok Adalat.', 'మీ విషయాన్ని (రుణం, కుటుంబ, ప్రమాద క్లెయిమ్, చెక్ బౌన్స్, చలాన్లు) తదుపరి లోక్ అదాలత్‌లో చేర్చమని DLSAని అడగండి.'),
          s('Both sides agree on a settlement; the award is final and paid court fees are refunded.', 'ఇరువైపులా పరిష్కారానికి అంగీకరిస్తారు; అవార్డు తుదిది, చెల్లించిన కోర్టు ఫీజు తిరిగి ఇస్తారు.'),
        ],
      },
    ],
    costExample: s('Lawyer, advice and court fees: free for eligible people.', 'అర్హులకు న్యాయవాది, సలహా, కోర్టు ఫీజు: ఉచితం.'),
    problems: [P(['Assigned lawyer is not responding.', 'కేటాయించిన న్యాయవాది స్పందించడం లేదు.'], ['Write to the DLSA Secretary; they can change the lawyer.', 'DLSA కార్యదర్శికి రాయండి; వారు న్యాయవాదిని మార్చగలరు.'])],
    lastChecked: CHECKED,
  },

  'jan-dhan-account': {
    stages: [
      {
        title: s('Open the account', 'ఖాతా తెరవడం'),
        steps: [
          s('Go to any bank branch or a Bank Mitra (business correspondent) in your village with Aadhaar and your mobile.', 'ఆధార్, మొబైల్‌తో ఏ బ్యాంక్ బ్రాంచ్‌కైనా లేదా మీ గ్రామంలోని బ్యాంక్ మిత్ర (బిజినెస్ కరస్పాండెంట్) వద్దకు వెళ్లండి.'),
          s('Ask for a "Jan Dhan / BSBD zero-balance account". Fill the form; add a nominee.', '"జన్ ధన్ / BSBD జీరో బ్యాలెన్స్ ఖాతా" అడగండి. ఫారం నింపి నామినీని చేర్చండి.'),
          s('Give fingerprint for Aadhaar e-KYC. Collect the passbook; the RuPay card comes the same day or by post.', 'ఆధార్ e-KYC కోసం వేలిముద్ర ఇవ్వండి. పాస్‌బుక్ తీసుకోండి; RuPay కార్డు అదే రోజు లేదా పోస్ట్‌లో వస్తుంది.'),
        ],
      },
      {
        title: s('Make it ready for scheme money', 'పథకాల డబ్బుకు సిద్ధం చేయడం'),
        steps: [
          s('Ask the bank to do "Aadhaar seeding / NPCI mapping" — DBT money goes to the Aadhaar-mapped account.', '"ఆధార్ సీడింగ్ / NPCI మ్యాపింగ్" చేయమని బ్యాంకును అడగండి — DBT డబ్బు ఆధార్ మ్యాప్ అయిన ఖాతాకే వెళ్తుంది.'),
          s('Check after 2–3 days on myaadhaar.uidai.gov.in → "Bank Seeding Status".', '2–3 రోజుల తర్వాత myaadhaar.uidai.gov.in → "Bank Seeding Status"లో చూడండి.'),
          s('Link your mobile and set up UPI (BHIM / any UPI app) with the RuPay card.', 'మీ మొబైల్ లింక్ చేసి RuPay కార్డుతో UPI (BHIM / ఏదైనా UPI యాప్) సెటప్ చేయండి.'),
        ],
      },
    ],
    costExample: s('Opening and running: ₹0. No minimum balance. RuPay card has accident insurance (up to ₹2 lakh for accounts opened after Aug 2018).', 'తెరవడం, నడపడం: ₹0. కనీస బ్యాలెన్స్ లేదు. RuPay కార్డుకు ప్రమాద బీమా (ఆగస్టు 2018 తర్వాత తెరిచిన ఖాతాలకు ₹2 లక్షల వరకు).'),
    problems: [P(['Account frozen / inoperative.', 'ఖాతా ఫ్రీజ్ / ఇన్‌ఆపరేటివ్ అయింది.'], ['No transactions for 2 years makes it inoperative. Visit the branch with Aadhaar, do re-KYC and one transaction.', '2 సంవత్సరాలు లావాదేవీ లేకపోతే ఇన్‌ఆపరేటివ్ అవుతుంది. ఆధార్‌తో బ్రాంచ్‌కు వెళ్లి రీ-KYC, ఒక లావాదేవీ చేయండి.'])],
    afterwards: [s('Enrol in PMJJBY + PMSBY (₹456/year) from the same account.', 'అదే ఖాతా నుండి PMJJBY + PMSBY (ఏడాదికి ₹456)లో చేరండి.')],
    lastChecked: CHECKED,
  },

  'pmjjby-pmsby': {
    stages: [
      {
        title: s('Join', 'చేరడం'),
        steps: [
          s('Bank app / net banking → "Insurance" or "Social security schemes" → PMJJBY and PMSBY → choose the account → confirm nominee → accept auto-debit.', 'బ్యాంక్ యాప్ / నెట్ బ్యాంకింగ్ → "Insurance" లేదా "Social security schemes" → PMJJBY, PMSBY → ఖాతా ఎంచుకోండి → నామినీ నిర్ధారించండి → ఆటో-డెబిట్ అంగీకరించండి.'),
          s('Or at the branch / post office: fill the one-page form for each, sign the auto-debit consent.', 'లేదా బ్రాంచ్ / పోస్టాఫీసులో: ప్రతిదానికి ఒక పేజీ ఫారం నింపి ఆటో-డెబిట్ అంగీకారంపై సంతకం చేయండి.'),
          s('Download / keep the acknowledgement (certificate of insurance).', 'అక్నాలెడ్జ్‌మెంట్ (బీమా సర్టిఫికెట్) డౌన్‌లోడ్ చేసి / దాచుకోండి.'),
        ],
        note: s('Keep balance in May — renewal is debited around 1 June each year.', 'మేలో బ్యాలెన్స్ ఉంచండి — ప్రతి ఏటా జూన్ 1 దగ్గర రెన్యువల్ కట్ అవుతుంది.'),
      },
      {
        title: s('Family makes a claim', 'కుటుంబం క్లెయిమ్ చేయడం'),
        steps: [
          s('The nominee goes to the same bank branch with: claim form (from the bank), death certificate, nominee\'s Aadhaar and bank details, and the deceased\'s passbook.', 'నామినీ అదే బ్యాంక్ బ్రాంచ్‌కు తీసుకెళ్లాలి: క్లెయిమ్ ఫారం (బ్యాంక్ నుండి), మరణ ధృవీకరణ, నామినీ ఆధార్, బ్యాంక్ వివరాలు, మరణించినవారి పాస్‌బుక్.'),
          s('Accident (PMSBY): also FIR and post-mortem report; disability claims need a government doctor\'s certificate.', 'ప్రమాదం (PMSBY): FIR, పోస్ట్‌మార్టం రిపోర్ట్ కూడా; వైకల్య క్లెయిమ్‌లకు ప్రభుత్వ డాక్టర్ సర్టిఫికెట్.'),
          s('Bank sends to the insurer; money comes to the nominee\'s account.', 'బ్యాంక్ బీమా సంస్థకు పంపుతుంది; డబ్బు నామినీ ఖాతాకు వస్తుంది.'),
        ],
      },
    ],
    costExample: s('Both together: ₹456 a year → ₹2 lakh on death from any cause, plus another ₹2 lakh if it was an accident (₹4 lakh total).', 'రెండూ కలిపి: ఏడాదికి ₹456 → ఏ కారణంతో మరణించినా ₹2 లక్షలు, ప్రమాదమైతే మరో ₹2 లక్షలు (మొత్తం ₹4 లక్షలు).'),
    problems: [P(['Policy lapsed — no balance on 1 June.', 'పాలసీ లాప్స్ — జూన్ 1న బ్యాలెన్స్ లేదు.'], ['Re-enrol any time by paying the premium again (PMJJBY needs a health declaration and a new 30-day wait).', 'ప్రీమియం మళ్లీ చెల్లించి ఎప్పుడైనా తిరిగి చేరండి (PMJJBYకి ఆరోగ్య డిక్లరేషన్, కొత్తగా 30 రోజుల నిరీక్షణ).'])],
    lastChecked: CHECKED,
  },

  'atal-pension': {
    stages: [
      {
        title: s('Join', 'చేరడం'),
        steps: [
          s('At your bank / post office ask for the APY form, or use net banking → "Atal Pension Yojana".', 'మీ బ్యాంక్ / పోస్టాఫీసులో APY ఫారం అడగండి, లేదా నెట్ బ్యాంకింగ్ → "Atal Pension Yojana".'),
          s('Fill: Aadhaar, mobile, spouse and nominee, pension amount (₹1,000 / 2,000 / 3,000 / 4,000 / 5,000).', 'నింపండి: ఆధార్, మొబైల్, భార్య/భర్త, నామినీ, పెన్షన్ మొత్తం (₹1,000 / 2,000 / 3,000 / 4,000 / 5,000).'),
          s('The contribution chart shows your monthly amount for your age; sign the auto-debit consent.', 'మీ వయస్సుకు నెలవారీ మొత్తాన్ని కంట్రిబ్యూషన్ చార్ట్ చూపిస్తుంది; ఆటో-డెబిట్ అంగీకారంపై సంతకం చేయండి.'),
          s('You get a PRAN number by SMS — keep it.', 'SMSలో PRAN నంబర్ వస్తుంది — దాచుకోండి.'),
        ],
      },
      {
        title: s('While paying', 'చెల్లిస్తున్నప్పుడు'),
        steps: [
          s('Keep balance on the debit date each month. Check your statement on the NPS / Protean CRA site or the bank app with the PRAN.', 'ప్రతి నెల డెబిట్ తేదీన బ్యాలెన్స్ ఉంచండి. PRANతో NPS / Protean CRA సైట్ లేదా బ్యాంక్ యాప్‌లో స్టేట్‌మెంట్ చూడండి.'),
          s('You can increase / decrease the pension amount once a year at the bank.', 'ఏడాదికి ఒకసారి బ్యాంకులో పెన్షన్ మొత్తం పెంచవచ్చు / తగ్గించవచ్చు.'),
        ],
      },
      {
        title: s('At 60', '60 ఏళ్లకు'),
        steps: [
          s('Apply at the bank to start the pension; it is paid monthly for life, then to the spouse, then the corpus to the nominee.', 'పెన్షన్ ప్రారంభించడానికి బ్యాంకులో దరఖాస్తు చేయండి; జీవితాంతం నెలవారీ, తర్వాత భార్య/భర్తకు, తర్వాత నిధి నామినీకి.'),
        ],
      },
    ],
    costExample: s('Join at 25 for ₹3,000/month pension: about ₹226 a month until 60 (check the bank\'s chart for your exact age).', '25 ఏళ్లకు ₹3,000 నెలవారీ పెన్షన్‌కు చేరితే: 60 వరకు నెలకు సుమారు ₹226 (మీ ఖచ్చితమైన వయస్సుకు బ్యాంక్ చార్ట్ చూడండి).'),
    lastChecked: CHECKED,
  },

  'sukanya-samriddhi': {
    stages: [
      {
        title: s('Open the account', 'ఖాతా తెరవడం'),
        steps: [
          s('Before the girl turns 10, go to a post office or bank (SBI and most public-sector banks) with her birth certificate and your Aadhaar, PAN, photo.', 'అమ్మాయికి 10 ఏళ్లు రాకముందే, ఆమె జనన ధృవీకరణ, మీ ఆధార్, PAN, ఫోటోతో పోస్టాఫీసు లేదా బ్యాంకుకు (SBI, చాలా ప్రభుత్వ బ్యాంకులు) వెళ్లండి.'),
          s('Fill the SSY form; pay the first deposit (₹250 or more). Collect the passbook.', 'SSY ఫారం నింపి మొదటి డిపాజిట్ (₹250 లేదా ఎక్కువ) చెల్లించండి. పాస్‌బుక్ తీసుకోండి.'),
        ],
      },
      {
        title: s('Keep depositing', 'డిపాజిట్ కొనసాగించడం'),
        steps: [
          s('Deposit any amount between ₹250 and ₹1.5 lakh each financial year (April–March) for 15 years — at the counter, or online through IPPB / the bank app.', 'ప్రతి ఆర్థిక సంవత్సరం (ఏప్రిల్–మార్చి) 15 సంవత్సరాలు ₹250 నుండి ₹1.5 లక్షల మధ్య ఎంతైనా — కౌంటర్‌లో లేదా IPPB / బ్యాంక్ యాప్ ద్వారా ఆన్‌లైన్‌లో.'),
          s('Deposits qualify for income-tax deduction under the old regime.', 'పాత పన్ను విధానంలో డిపాజిట్లకు ఆదాయపు పన్ను మినహాయింపు.'),
        ],
      },
      {
        title: s('Withdraw', 'ఉపసంహరణ'),
        steps: [
          s('After she turns 18 (or passes 10th), up to 50% can be withdrawn for higher education with an admission / fee proof.', 'ఆమెకు 18 ఏళ్లు (లేదా 10వ తరగతి ఉత్తీర్ణత) తర్వాత ఉన్నత విద్యకు అడ్మిషన్ / ఫీజు రుజువుతో 50% వరకు తీసుకోవచ్చు.'),
          s('Full closure at 21 years from opening, or at her marriage after 18.', 'తెరిచిన 21 సంవత్సరాలకు, లేదా 18 తర్వాత ఆమె వివాహ సమయంలో పూర్తి మూసివేత.'),
        ],
      },
    ],
    costExample: s('₹1,000 a month (₹12,000 a year) for 15 years = ₹1.8 lakh deposited; at 8.2% it grows to roughly ₹5.5 lakh at 21 (rate can change each quarter).', 'నెలకు ₹1,000 (ఏడాదికి ₹12,000) 15 సంవత్సరాలు = ₹1.8 లక్షలు జమ; 8.2% వద్ద 21 ఏళ్లకు సుమారు ₹5.5 లక్షలు (రేటు ప్రతి త్రైమాసికం మారవచ్చు).'),
    lastChecked: CHECKED,
  },

  'mudra-loan': {
    stages: [
      {
        title: s('Prepare a simple plan', 'సాధారణ ప్రణాళిక'),
        steps: [
          s('Write on one page: what business, where, what you will buy (with shop quotations), total cost, how much you need, expected monthly sales and profit.', 'ఒక పేజీలో రాయండి: ఏ వ్యాపారం, ఎక్కడ, ఏం కొంటారు (దుకాణాల కొటేషన్లతో), మొత్తం ఖర్చు, ఎంత కావాలి, ఆశించే నెలవారీ అమ్మకాలు, లాభం.'),
          s('Get Udyam registration free on udyamregistration.gov.in with Aadhaar.', 'ఆధార్‌తో udyamregistration.gov.inలో ఉచితంగా ఉద్యమ్ నమోదు చేయండి.'),
        ],
      },
      {
        title: s('Apply', 'దరఖాస్తు'),
        steps: [
          s('Online: jansamarth.in → "Business Activity Loan" → Mudra → check eligibility → fill details → choose a bank → submit.', 'ఆన్‌లైన్: jansamarth.in → "Business Activity Loan" → ముద్ర → అర్హత చూడండి → వివరాలు నింపి → బ్యాంక్ ఎంచుకుని → సబ్మిట్.'),
          s('Or visit the bank branch near your business with the plan, quotations, KYC and 6 months\' bank statement.', 'లేదా ప్రణాళిక, కొటేషన్లు, KYC, 6 నెలల బ్యాంక్ స్టేట్‌మెంట్‌తో మీ వ్యాపారం దగ్గరి బ్యాంక్ బ్రాంచ్‌కు వెళ్లండి.'),
          s('Bank officer may visit your shop. On sanction, money goes to the supplier or your account; working capital may come as a Mudra card.', 'బ్యాంక్ అధికారి మీ దుకాణాన్ని సందర్శించవచ్చు. మంజూరైతే డబ్బు సరఫరాదారుకు లేదా మీ ఖాతాకు; వర్కింగ్ క్యాపిటల్ ముద్ర కార్డుగా రావచ్చు.'),
        ],
      },
      {
        title: s('Repay', 'తిరిగి చెల్లింపు'),
        steps: [
          s('Pay the EMI on time every month; keep sales in the same bank account — it builds your credit for a bigger loan later.', 'ప్రతి నెల సకాలంలో EMI చెల్లించండి; అమ్మకాలు అదే బ్యాంక్ ఖాతాలో ఉంచండి — తర్వాత పెద్ద రుణానికి క్రెడిట్ పెరుగుతుంది.'),
        ],
      },
    ],
    costExample: s('Shishu loan ₹50,000 at ~10% over 3 years: EMI about ₹1,600 a month (rate varies by bank).', 'శిశు రుణం ₹50,000, ~10% వడ్డీ, 3 సంవత్సరాలు: EMI నెలకు సుమారు ₹1,600 (రేటు బ్యాంకును బట్టి).'),
    problems: [P(['Bank says "no" without reason.', 'బ్యాంక్ కారణం లేకుండా "కాదు" అంటోంది.'], ['Ask for the rejection reason in writing; complain to the Lead District Manager or on cms.rbi.org.in.', 'తిరస్కరణ కారణం రాతపూర్వకంగా అడగండి; లీడ్ డిస్ట్రిక్ట్ మేనేజర్‌కు లేదా cms.rbi.org.inలో ఫిర్యాదు చేయండి.'])],
    lastChecked: CHECKED,
  },

  svanidhi: {
    stages: [
      {
        title: s('Vendor ID', 'వెండర్ ఐడీ'),
        steps: [
          s('If you have a municipal vending certificate / ID, keep it ready.', 'మున్సిపల్ వెండింగ్ సర్టిఫికెట్ / ఐడీ ఉంటే సిద్ధంగా ఉంచండి.'),
          s('If not, apply for a Letter of Recommendation (LoR) on the PM SVANidhi portal or at the ward secretariat — the municipality verifies that you vend there.', 'లేకపోతే PM SVANidhi పోర్టల్‌లో లేదా వార్డు సచివాలయంలో సిఫారసు లేఖ (LoR) కోసం దరఖాస్తు చేయండి — మీరు అక్కడ వ్యాపారం చేస్తున్నారని మున్సిపాలిటీ ధృవీకరిస్తుంది.'),
        ],
      },
      {
        title: s('Loan application', 'రుణ దరఖాస్తు'),
        steps: [
          s('pmsvanidhi.mohua.gov.in → "Apply for loan" → mobile OTP → Aadhaar e-KYC → vendor details → choose a bank. Or ask the ward secretariat / CSC to apply for you.', 'pmsvanidhi.mohua.gov.in → "Apply for loan" → మొబైల్ OTP → ఆధార్ e-KYC → వెండర్ వివరాలు → బ్యాంక్ ఎంచుకోండి. లేదా వార్డు సచివాలయం / CSCని దరఖాస్తు చేయమనండి.'),
          s('The bank calls you, signs the loan papers and pays into your account.', 'బ్యాంక్ మిమ్మల్ని పిలిచి రుణ పత్రాలపై సంతకం తీసుకుని ఖాతాలో జమ చేస్తుంది.'),
          s('Get a UPI QR from the bank and accept customer payments with it.', 'బ్యాంక్ నుండి UPI QR తీసుకుని దానితో కస్టమర్ చెల్లింపులు స్వీకరించండి.'),
        ],
      },
      {
        title: s('Repay and grow', 'చెల్లించి ఎదగడం'),
        steps: [
          s('Pay the monthly EMI; 7% interest subsidy is credited back every quarter.', 'నెలవారీ EMI చెల్లించండి; 7% వడ్డీ సబ్సిడీ ప్రతి త్రైమాసికం తిరిగి జమ.'),
          s('After closing the first loan, apply for the second (₹25,000) and third (₹50,000).', 'మొదటి రుణం ముగిశాక రెండో (₹25,000), మూడో (₹50,000) రుణానికి దరఖాస్తు చేయండి.'),
        ],
      },
    ],
    costExample: s('₹15,000 for 12 months: EMI about ₹1,330; with the 7% subsidy back, the real interest is very low.', '₹15,000, 12 నెలలు: EMI సుమారు ₹1,330; 7% సబ్సిడీ తిరిగి వస్తే అసలు వడ్డీ చాలా తక్కువ.'),
    lastChecked: CHECKED,
  },

  vishwakarma: {
    stages: [
      {
        title: s('Register at a CSC', 'CSCలో నమోదు'),
        steps: [
          s('Go to the nearest CSC with Aadhaar, the mobile linked to it, bank passbook and rice card.', 'ఆధార్, దానికి లింక్ అయిన మొబైల్, బ్యాంక్ పాస్‌బుక్, రైస్ కార్డుతో దగ్గరి CSCకి వెళ్లండి.'),
          s('The CSC operator registers you on pmvishwakarma.gov.in with your fingerprint, enters your trade and family details.', 'CSC ఆపరేటర్ మీ వేలిముద్రతో pmvishwakarma.gov.inలో నమోదు చేసి మీ వృత్తి, కుటుంబ వివరాలు నమోదు చేస్తారు.'),
          s('Take the acknowledgement with the application number.', 'అప్లికేషన్ నంబర్‌తో అక్నాలెడ్జ్‌మెంట్ తీసుకోండి.'),
        ],
      },
      {
        title: s('Verification', 'ధృవీకరణ'),
        steps: [
          s('Panchayat secretary / ULB verifies you actually do this trade; then the district committee approves.', 'మీరు నిజంగా ఈ వృత్తి చేస్తున్నారని పంచాయతీ కార్యదర్శి / ULB ధృవీకరిస్తారు; తర్వాత జిల్లా కమిటీ ఆమోదిస్తుంది.'),
          s('Download the PM Vishwakarma certificate and ID card from the portal / CSC.', 'పోర్టల్ / CSC నుండి PM విశ్వకర్మ సర్టిఫికెట్, ఐడీ కార్డు డౌన్‌లోడ్ చేయండి.'),
        ],
      },
      {
        title: s('Training, toolkit, loan', 'శిక్షణ, టూల్‌కిట్, రుణం'),
        steps: [
          s('Attend the 5–7 day basic training when called; ₹500/day stipend comes to your account.', 'పిలిచినప్పుడు 5–7 రోజుల ప్రాథమిక శిక్షణకు హాజరవ్వండి; రోజుకు ₹500 స్టైపెండ్ మీ ఖాతాకు.'),
          s('Use the ₹15,000 toolkit e-voucher to buy tools.', 'పనిముట్లు కొనడానికి ₹15,000 టూల్‌కిట్ ఇ-వోచర్ వాడండి.'),
          s('Apply for the first loan (up to ₹1 lakh, 18 months) through the portal; after repaying, the second loan (up to ₹2 lakh).', 'పోర్టల్ ద్వారా మొదటి రుణానికి (₹1 లక్ష వరకు, 18 నెలలు) దరఖాస్తు చేయండి; చెల్లించాక రెండో రుణం (₹2 లక్షల వరకు).'),
        ],
      },
    ],
    costExample: s('₹1 lakh loan at 5%: interest about ₹2,600 over 18 months. Registration and training free.', '₹1 లక్ష రుణం 5% వద్ద: 18 నెలల్లో వడ్డీ సుమారు ₹2,600. నమోదు, శిక్షణ ఉచితం.'),
    lastChecked: CHECKED,
  },

  ujjwala: {
    stages: [
      {
        title: s('Apply', 'దరఖాస్తు'),
        steps: [
          s('Go to the nearest LPG distributor (or pmuy.gov.in → "Apply for new Ujjwala connection" → choose the company).', 'దగ్గరి LPG డిస్ట్రిబ్యూటర్ వద్దకు వెళ్లండి (లేదా pmuy.gov.in → "Apply for new Ujjwala connection" → కంపెనీ ఎంచుకోండి).'),
          s('Give the KYC form with the woman\'s Aadhaar, rice card, all family members\' Aadhaar, bank details and photo.', 'మహిళ ఆధార్, రైస్ కార్డు, కుటుంబ సభ్యులందరి ఆధార్, బ్యాంక్ వివరాలు, ఫోటోతో KYC ఫారం ఇవ్వండి.'),
          s('Sign the declaration that no one in the family has an LPG connection.', 'కుటుంబంలో ఎవరికీ LPG కనెక్షన్ లేదని డిక్లరేషన్‌పై సంతకం చేయండి.'),
        ],
      },
      {
        title: s('Get the connection', 'కనెక్షన్ పొందడం'),
        steps: [
          s('After verification, the distributor gives the cylinder, regulator, pipe, stove and first refill; a mechanic checks the installation.', 'ధృవీకరణ తర్వాత డిస్ట్రిబ్యూటర్ సిలిండర్, రెగ్యులేటర్, పైప్, స్టవ్, మొదటి రీఫిల్ ఇస్తారు; మెకానిక్ ఇన్‌స్టాలేషన్ తనిఖీ చేస్తారు.'),
          s('Collect the consumer number and book refills by IVRS / WhatsApp / app.', 'కన్స్యూమర్ నంబర్ తీసుకుని IVRS / వాట్సాప్ / యాప్ ద్వారా రీఫిల్స్ బుక్ చేయండి.'),
          s('Make sure the connection is Aadhaar- and bank-linked so the Ujjwala subsidy and Deepam-2 money reach you.', 'ఉజ్వల సబ్సిడీ, దీపం-2 డబ్బు అందడానికి కనెక్షన్ ఆధార్, బ్యాంక్‌తో లింక్ అయి ఉండేలా చూడండి.'),
        ],
      },
    ],
    costExample: s('Connection, regulator, pipe and first refill with stove: free. Refills: market price, subsidy back to bank.', 'కనెక్షన్, రెగ్యులేటర్, పైప్, స్టవ్‌తో మొదటి రీఫిల్: ఉచితం. రీఫిల్స్: మార్కెట్ ధర, సబ్సిడీ బ్యాంకుకు తిరిగి.'),
    problems: [P(['Distributor asks money for the connection.', 'కనెక్షన్‌కు డిస్ట్రిబ్యూటర్ డబ్బు అడుగుతున్నారు.'], ['Don\'t pay. Complain on the LPG helpline 1800-2333-555 or pgportal.gov.in. (1906 is only for gas leaks.)', 'చెల్లించకండి. LPG హెల్ప్‌లైన్ 1800-2333-555 లేదా pgportal.gov.inలో ఫిర్యాదు చేయండి. (1906 గ్యాస్ లీక్‌లకు మాత్రమే.)'])],
    lastChecked: CHECKED,
  },

  digilocker: {
    stages: [
      {
        title: s('Sign up', 'సైన్ అప్'),
        steps: [
          s('Install "DigiLocker" (by MeitY / NeGD — check the publisher) → "Sign up".', '"DigiLocker" ఇన్‌స్టాల్ చేయండి (MeitY / NeGD — పబ్లిషర్ చూడండి) → "Sign up".'),
          s('Enter name as in Aadhaar, date of birth, mobile → OTP → set a 6-digit PIN → link Aadhaar with OTP.', 'ఆధార్‌లో ఉన్నట్లు పేరు, పుట్టిన తేదీ, మొబైల్ → OTP → 6 అంకెల PIN సెట్ → OTPతో ఆధార్ లింక్.'),
        ],
      },
      {
        title: s('Fetch your documents', 'పత్రాలు తెచ్చుకోవడం'),
        steps: [
          s('Aadhaar appears automatically in "Issued Documents".', '"Issued Documents"లో ఆధార్ ఆటోమేటిక్‌గా వస్తుంది.'),
          s('Tap "Search" → type e.g. "Driving Licence" (Ministry of Road Transport) → enter DL number → "Get Document".', '"Search" నొక్కి → ఉదా: "Driving Licence" (Ministry of Road Transport) → DL నంబర్ → "Get Document".'),
          s('Do the same for RC (vehicle number + chassis), PAN, SSC / Inter marks memo (BSE AP / BIE AP: hall ticket number + year), and AP certificates where listed.', 'అలాగే RC (వాహన నంబర్ + ఛాసిస్), PAN, SSC / ఇంటర్ మార్కుల మెమో (BSE AP / BIE AP: హాల్ టికెట్ నంబర్ + సంవత్సరం), జాబితాలో ఉన్న AP సర్టిఫికెట్లు.'),
        ],
        note: s('The name must match Aadhaar; small spelling differences stop the fetch.', 'పేరు ఆధార్‌తో సరిపోలాలి; చిన్న స్పెల్లింగ్ తేడాలు కూడా ఫెచ్‌ను ఆపుతాయి.'),
      },
      {
        title: s('Use them', 'వాడడం'),
        steps: [
          s('Show the document on the phone when asked (traffic police, job verification, admissions).', 'అడిగినప్పుడు ఫోన్‌లో పత్రం చూపించండి (ట్రాఫిక్ పోలీసు, ఉద్యోగ ధృవీకరణ, అడ్మిషన్లు).'),
          s('Share as a link / PDF from the document\'s menu.', 'పత్రం మెనూ నుండి లింక్ / PDFగా పంచుకోండి.'),
        ],
      },
    ],
    costExample: s('Free.', 'ఉచితం.'),
    lastChecked: CHECKED,
  },
};
