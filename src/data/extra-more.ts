import { Guide } from '../types';
import { fee, CHECKED } from './bi';
import { s, P, D, XDir } from './extra-helpers';

/** Railways and disaster relief — full walkthroughs (checked 20 Oct 2026). */
export const moreExtraGuides: Guide[] = [
  // ─────────────────────────────────────────── RAILWAYS
  {
    id: 'railway-tickets',
    category: 'transport',
    level: 'central',
    title: s('Train tickets — IRCTC booking, Tatkal, refunds, complaints (RailMadad 139)', 'రైలు టికెట్లు — IRCTC బుకింగ్, తత్కాల్, రీఫండ్‌లు, ఫిర్యాదులు (రైల్‌మదద్ 139)'),
    summary: s(
      'Reserved train tickets open 60 days before the journey. Book on the IRCTC website / app (RailOne / IRCTC Rail Connect) or at a railway counter. Tatkal opens one day before — 10 am for AC and 11 am for sleeper — and online Tatkal needs an Aadhaar-verified IRCTC account. Cancelled e-tickets are refunded automatically; if a train is late by more than 3 hours and you don\'t travel, file a TDR for a full refund. For any problem on a train or station, call 139 or use RailMadad.',
      'రిజర్వ్ రైలు టికెట్లు ప్రయాణానికి 60 రోజుల ముందు తెరుస్తారు. IRCTC వెబ్‌సైట్ / యాప్ (RailOne / IRCTC Rail Connect) లేదా రైల్వే కౌంటర్‌లో బుక్ చేయండి. తత్కాల్ ఒక రోజు ముందు — AC ఉదయం 10కి, స్లీపర్ 11కి — ఆన్‌లైన్ తత్కాల్‌కు ఆధార్ ధృవీకరించిన IRCTC ఖాతా కావాలి. రద్దు చేసిన ఇ-టికెట్లకు ఆటోమేటిక్ రీఫండ్; రైలు 3 గంటలకు మించి ఆలస్యమై మీరు ప్రయాణించకపోతే పూర్తి రీఫండ్‌కు TDR వేయండి. రైలు లేదా స్టేషన్‌లో ఏ సమస్యకైనా 139కి కాల్ చేయండి లేదా రైల్‌మదద్ వాడండి.',
    ),
    keywords: ['train ticket', 'railway ticket', 'irctc', 'tatkal', 'pnr', 'waiting list', 'train refund', 'tdr', 'railmadad', '139', 'train complaint', 'lower berth', 'senior citizen train', 'రైలు టికెట్', 'తత్కాల్', 'IRCTC', 'PNR', 'రైల్వే ఫిర్యాదు'],
    whoCanApply: [s('Any passenger', 'ఏ ప్రయాణికుడైనా')],
    documents: [s('Photo ID of each passenger during travel (Aadhaar / voter ID / licence / DigiLocker copy); Aadhaar-verified IRCTC account for online Tatkal', 'ప్రయాణంలో ప్రతి ప్రయాణికుని ఫోటో ఐడీ (ఆధార్ / ఓటర్ ఐడీ / లైసెన్స్ / డిజిలాకర్ కాపీ); ఆన్‌లైన్ తత్కాల్‌కు ఆధార్ ధృవీకరించిన IRCTC ఖాతా')],
    fees: [
      fee(s('Fare', 'ఛార్జీ'), s('As shown at booking; Tatkal has an extra Tatkal charge', 'బుకింగ్‌లో చూపిన విధంగా; తత్కాల్‌కు అదనపు తత్కాల్ ఛార్జీ')),
      fee(s('Cancellation', 'రద్దు'), s('Deduction depends on class and time before departure; Tatkal confirmed tickets: no refund on cancellation', 'తరగతి, బయలుదేరే ముందు సమయాన్ని బట్టి కోత; తత్కాల్ కన్ఫర్మ్ టికెట్లు: రద్దు చేస్తే రీఫండ్ లేదు')),
    ],
    steps: [
      s('Create and Aadhaar-verify your IRCTC account.', 'IRCTC ఖాతా తయారు చేసి ఆధార్‌తో ధృవీకరించండి.'),
      s('Book 60 days ahead, or Tatkal one day before.', '60 రోజుల ముందు, లేదా ఒక రోజు ముందు తత్కాల్ బుక్ చేయండి.'),
      s('Track PNR; claim refunds / TDR online; complain on 139.', 'PNR ట్రాక్ చేయండి; ఆన్‌లైన్‌లో రీఫండ్ / TDR; 139లో ఫిర్యాదు.'),
    ],
    stages: [
      {
        title: s('Set up your account (once)', 'మీ ఖాతా సెటప్ (ఒకసారి)'),
        steps: [
          s('Register on irctc.co.in or the official railway app with mobile and email → verify OTPs.', 'irctc.co.in లేదా అధికారిక రైల్వే యాప్‌లో మొబైల్, ఇమెయిల్‌తో నమోదు → OTPలు ధృవీకరించండి.'),
          s('My Account → "Authenticate User" → Aadhaar OTP. Needed for Tatkal and for booking in the first period after reservations open.', 'My Account → "Authenticate User" → ఆధార్ OTP. తత్కాల్‌కు, రిజర్వేషన్ తెరిచిన మొదటి సమయంలో బుకింగ్‌కు అవసరం.'),
          s('Save a "master list" of family passengers (name, age, ID) to book faster.', 'వేగంగా బుక్ చేయడానికి కుటుంబ ప్రయాణికుల "మాస్టర్ లిస్ట్" (పేరు, వయస్సు, ఐడీ) సేవ్ చేయండి.'),
        ],
      },
      {
        title: s('Book', 'బుక్ చేయడం'),
        steps: [
          s('Search trains → class → check availability ("AVL" = available, "RAC" = shared berth, "WL" = waitlist).', 'రైళ్లు వెతకండి → తరగతి → లభ్యత చూడండి ("AVL" = అందుబాటు, "RAC" = పంచుకునే బెర్త్, "WL" = వెయిటింగ్ లిస్ట్).'),
          s('Senior citizens and pregnant women: tick "lower berth" preference — a quota exists. (General fare concession for seniors is not available now.)', 'వృద్ధులు, గర్భిణులు: "lower berth" ప్రాధాన్యత టిక్ చేయండి — కోటా ఉంది. (వృద్ధులకు సాధారణ ఛార్జీ రాయితీ ప్రస్తుతం లేదు.)'),
          s('Pay; the e-ticket / SMS is valid with the original ID. Counter (PRS) tickets need the paper ticket.', 'చెల్లించండి; అసలు ఐడీతో ఇ-టికెట్ / SMS చెల్లుతుంది. కౌంటర్ (PRS) టికెట్లకు కాగితం టికెట్ కావాలి.'),
          s('Tatkal: log in 5 minutes early on the day before journey; AC at 10:00, sleeper / second sitting at 11:00. At counters, Tatkal needs an OTP on the passenger\'s Aadhaar-linked mobile.', 'తత్కాల్: ప్రయాణానికి ముందు రోజు 5 నిమిషాలు ముందే లాగిన్; AC 10:00కి, స్లీపర్ / సెకండ్ సిట్టింగ్ 11:00కి. కౌంటర్లలో తత్కాల్‌కు ప్రయాణికుని ఆధార్ లింక్ మొబైల్‌కు OTP కావాలి.'),
        ],
      },
      {
        title: s('Waitlist, cancellation, refunds', 'వెయిటింగ్ లిస్ట్, రద్దు, రీఫండ్‌లు'),
        steps: [
          s('Check PNR status on the app / 139. Chart is prepared before departure — waitlisted e-tickets that stay waitlisted are cancelled automatically with refund (minus a small clerkage).', 'యాప్ / 139లో PNR స్టేటస్ చూడండి. బయలుదేరే ముందు చార్ట్ తయారవుతుంది — వెయిటింగ్‌లోనే ఉన్న ఇ-టికెట్లు ఆటోమేటిక్‌గా రద్దై రీఫండ్ (చిన్న క్లర్కేజ్ మినహా).'),
          s('Cancel online before the chart for a refund as per the rules (more deduction closer to departure).', 'నియమాల ప్రకారం రీఫండ్‌కు చార్ట్‌కు ముందే ఆన్‌లైన్‌లో రద్దు చేయండి (బయలుదేరడానికి దగ్గరయ్యే కొద్దీ ఎక్కువ కోత).'),
          s('Train delayed more than 3 hours, AC not working, or you got a lower class: file a TDR on IRCTC (My Transactions → File TDR) before the train leaves / at the end of the journey as the reason requires.', 'రైలు 3 గంటలకు మించి ఆలస్యం, AC పనిచేయలేదు, లేదా తక్కువ తరగతి ఇచ్చారు: కారణం ప్రకారం రైలు బయలుదేరే ముందు / ప్రయాణం చివర IRCTCలో TDR వేయండి (My Transactions → File TDR).'),
          s('Refund goes to the original payment account, usually in a few days.', 'రీఫండ్ అసలు చెల్లింపు ఖాతాకు, సాధారణంగా కొన్ని రోజుల్లో.'),
        ],
      },
      {
        title: s('Problems on the journey', 'ప్రయాణంలో సమస్యలు'),
        steps: [
          s('Call 139 or use RailMadad (app / railmadad.indianrailways.gov.in): dirty coach, no water, AC fault, overcharging by vendors, medical help, security, harassment. Give PNR and coach number.', '139కి కాల్ చేయండి లేదా రైల్‌మదద్ (యాప్ / railmadad.indianrailways.gov.in) వాడండి: మురికి బోగీ, నీరు లేదు, AC లోపం, విక్రేతల అధిక ధర, వైద్య సహాయం, భద్రత, వేధింపులు. PNR, బోగీ నంబర్ ఇవ్వండి.'),
          s('Security emergency: 139 (RPF) or 112. Theft on a train: report to the TTE / GRP at the next station (FIR can be filed on board).', 'భద్రతా అత్యవసరం: 139 (RPF) లేదా 112. రైలులో దొంగతనం: TTE / తదుపరి స్టేషన్ GRPకి రిపోర్ట్ (రైలులోనే FIR వేయవచ్చు).'),
          s('Lost luggage: report at the station; check the "Mission Amanat" lost-property page of your railway zone.', 'పోయిన సామాను: స్టేషన్‌లో రిపోర్ట్; మీ రైల్వే జోన్ "Mission Amanat" లాస్ట్-ప్రాపర్టీ పేజీ చూడండి.'),
        ],
      },
    ],
    costExample: s('Waitlisted e-ticket that doesn\'t confirm: cancelled automatically — you get the fare back minus a small clerkage charge.', 'కన్ఫర్మ్ కాని వెయిటింగ్ ఇ-టికెట్: ఆటోమేటిక్‌గా రద్దు — చిన్న క్లర్కేజ్ ఛార్జీ మినహా ఛార్జీ తిరిగి.'),
    problems: [P(['Agent offers "confirmed Tatkal" for extra money.', 'అదనపు డబ్బుకు "కన్ఫర్మ్ తత్కాల్" ఇస్తామని ఏజెంట్.'], ['Illegal software / fake IDs are often used — tickets can be cancelled and you may be fined. Book yourself.', 'చట్టవిరుద్ధ సాఫ్ట్‌వేర్ / నకిలీ ఐడీలు వాడతారు — టికెట్లు రద్దు కావచ్చు, జరిమానా పడవచ్చు. మీరే బుక్ చేయండి.'])],
    whereToApply: [s('irctc.co.in; official railway app; railway reservation counters; 139 / RailMadad', 'irctc.co.in; అధికారిక రైల్వే యాప్; రైల్వే రిజర్వేషన్ కౌంటర్లు; 139 / రైల్‌మదద్')],
    timeline: s('Booking opens 60 days ahead; Tatkal one day before.', '60 రోజుల ముందు బుకింగ్; ఒక రోజు ముందు తత్కాల్.'),
    tips: [s('Persons with disabilities get fare concessions with the railway Divyangjan ID card (see Disability benefits).', 'రైల్వే దివ్యాంగజన్ ఐడీ కార్డుతో వికలాంగులకు ఛార్జీ రాయితీలు (వికలాంగుల ప్రయోజనాలు చూడండి).')],
    links: [{ label: 'IRCTC', url: 'https://www.irctc.co.in' }, { label: 'RailMadad', url: 'https://railmadad.indianrailways.gov.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── DISASTER RELIEF
  {
    id: 'disaster-relief',
    category: 'welfare',
    level: 'both',
    title: s('Flood, cyclone, fire — relief for crop loss, house damage, deaths and cattle', 'వరద, తుఫాను, అగ్నిప్రమాదం — పంట నష్టం, ఇంటి నష్టం, మరణాలు, పశువులకు సహాయం'),
    summary: s(
      'After a cyclone, flood, heavy rain, fire or other notified disaster, the government pays relief from the disaster response funds: input subsidy for crop loss, help for damaged houses, ex gratia for deaths, and compensation for lost cattle, boats and nets. In AP the damage is enumerated by village teams (Secretariat staff, RSK, VRO) and lists are displayed — make sure your name is on them and object in time if it isn\'t.',
      'తుఫాను, వరద, భారీ వర్షం, అగ్నిప్రమాదం లేదా ఇతర నోటిఫై చేసిన విపత్తు తర్వాత, ప్రభుత్వం విపత్తు నిధుల నుండి సహాయం చెల్లిస్తుంది: పంట నష్టానికి ఇన్‌పుట్ సబ్సిడీ, దెబ్బతిన్న ఇళ్లకు సహాయం, మరణాలకు ఎక్స్‌గ్రేషియా, కోల్పోయిన పశువులు, పడవలు, వలలకు పరిహారం. APలో గ్రామ బృందాలు (సచివాలయ సిబ్బంది, RSK, VRO) నష్టం లెక్కించి జాబితాలు ప్రదర్శిస్తాయి — మీ పేరు ఉందని నిర్ధారించుకోండి, లేకపోతే సమయానికి అభ్యంతరం చెప్పండి.',
    ),
    keywords: ['flood', 'cyclone', 'heavy rain', 'disaster', 'relief', 'compensation', 'crop loss', 'input subsidy', 'house damage', 'fire accident', 'ex gratia', 'cattle death', 'boat damage', 'వరద', 'తుఫాను', 'పంట నష్టం', 'ఇన్‌పుట్ సబ్సిడీ', 'ఇల్లు దెబ్బతింది', 'అగ్నిప్రమాదం', 'ఎక్స్‌గ్రేషియా'],
    whoCanApply: [s('Affected families, farmers (owners and CCRC tenants), fishermen and livestock owners in notified areas', 'నోటిఫై చేసిన ప్రాంతాల్లో బాధిత కుటుంబాలు, రైతులు (యజమానులు, CCRC కౌలుదారులు), మత్స్యకారులు, పశు యజమానులు')],
    documents: [
      s('Aadhaar, Aadhaar-linked bank account, rice card', 'ఆధార్, ఆధార్ లింక్ బ్యాంక్ ఖాతా, రైస్ కార్డు'),
      s('Crop: e-Crop booking for the season, 1B / CCRC', 'పంట: ఆ సీజన్ e-Crop బుకింగ్, 1B / CCRC'),
      s('Photos of damage with date; death: death certificate / post-mortem; cattle: vet certificate, ear tag', 'తేదీతో నష్టం ఫోటోలు; మరణం: మరణ ధృవీకరణ / పోస్ట్‌మార్టం; పశువులు: వెటర్నరీ సర్టిఫికెట్, చెవి ట్యాగ్'),
    ],
    fees: [fee(s('Relief amounts', 'సహాయ మొత్తాలు'), s('As per SDRF / NDRF norms and any enhanced amounts the state announces for that disaster', 'SDRF / NDRF నిబంధనలు, ఆ విపత్తుకు రాష్ట్రం ప్రకటించే అదనపు మొత్తాల ప్రకారం'))],
    steps: [
      s('Stay safe; follow evacuation orders.', 'సురక్షితంగా ఉండండి; తరలింపు ఆదేశాలు పాటించండి.'),
      s('Report damage to the Secretariat / RSK; get enumerated.', 'నష్టాన్ని సచివాలయం / RSKకి తెలియజేసి లెక్కింపులో చేరండి.'),
      s('Check the displayed list; money comes to the bank.', 'ప్రదర్శించిన జాబితా చూడండి; డబ్బు బ్యాంకుకు.'),
    ],
    stages: [
      {
        title: s('During the disaster', 'విపత్తు సమయంలో'),
        steps: [
          s('Follow warnings (SMS alerts, local announcements). Move to relief camps when told — food, water and medical care are free there.', 'హెచ్చరికలు పాటించండి (SMS అలర్ట్‌లు, స్థానిక ప్రకటనలు). చెప్పినప్పుడు సహాయ శిబిరాలకు వెళ్లండి — అక్కడ భోజనం, నీరు, వైద్యం ఉచితం.'),
          s('Keep documents in a plastic bag; save Aadhaar, rice card, land papers in DigiLocker in advance.', 'పత్రాలు ప్లాస్టిక్ కవర్‌లో ఉంచండి; ముందుగానే ఆధార్, రైస్ కార్డు, భూమి పత్రాలు డిజిలాకర్‌లో సేవ్ చేయండి.'),
          s('Emergency: 112. AP disaster control rooms are announced for each event.', 'అత్యవసరం: 112. ప్రతి సంఘటనకు AP విపత్తు కంట్రోల్ రూమ్‌లు ప్రకటిస్తారు.'),
        ],
      },
      {
        title: s('Get your loss recorded', 'మీ నష్టాన్ని నమోదు చేయించడం'),
        steps: [
          s('Take dated photos of damaged crops, house, animals and boats before cleaning up.', 'శుభ్రం చేసే ముందు దెబ్బతిన్న పంటలు, ఇల్లు, పశువులు, పడవల తేదీతో ఫోటోలు తీయండి.'),
          s('Crop: tell the Agriculture / Horticulture Assistant at the RSK; enumeration uses your e-Crop booking. Also inform your crop insurer within 72 hours if insured (see Crop insurance).', 'పంట: RSKలో వ్యవసాయ / ఉద్యాన సహాయకునికి చెప్పండి; లెక్కింపు మీ e-Crop బుకింగ్ వాడుతుంది. బీమా ఉంటే 72 గంటల్లో బీమా సంస్థకు కూడా తెలియజేయండి (పంట బీమా చూడండి).'),
          s('House / hut / belongings: tell the Secretariat staff / VRO; they inspect and record the damage category (fully / partly damaged, hut).', 'ఇల్లు / గుడిసె / వస్తువులు: సచివాలయ సిబ్బంది / VROకి చెప్పండి; వారు తనిఖీ చేసి నష్ట వర్గం నమోదు చేస్తారు (పూర్తిగా / పాక్షికంగా దెబ్బతిన్నది, గుడిసె).'),
          s('Death of a person: post-mortem and death certificate; the Tahsildar processes ex gratia for the family. Cattle / boats: veterinary / fisheries assistant records the loss.', 'వ్యక్తి మరణం: పోస్ట్‌మార్టం, మరణ ధృవీకరణ; కుటుంబానికి ఎక్స్‌గ్రేషియా తహసీల్దార్ ప్రాసెస్ చేస్తారు. పశువులు / పడవలు: పశు / మత్స్య సహాయకుడు నష్టం నమోదు.'),
        ],
      },
      {
        title: s('Check the list and get paid', 'జాబితా చూసి చెల్లింపు పొందడం'),
        steps: [
          s('Draft lists of beneficiaries are displayed at the Secretariat / RSK (social audit). Check your name, extent and category.', 'లబ్ధిదారుల ముసాయిదా జాబితాలు సచివాలయం / RSKలో ప్రదర్శిస్తారు (సోషల్ ఆడిట్). మీ పేరు, విస్తీర్ణం, వర్గం చూడండి.'),
          s('Missing or wrong: give a written objection within the display period with photos.', 'లేకపోతే లేదా తప్పుగా ఉంటే: ప్రదర్శన కాలంలో ఫోటోలతో రాతపూర్వక అభ్యంతరం ఇవ్వండి.'),
          s('Relief is paid by DBT to the Aadhaar-seeded account. Immediate relief (rice, essentials, cash) is often given at the camp / door.', 'సహాయం ఆధార్ సీడ్ ఖాతాకు DBT ద్వారా. తక్షణ సహాయం (బియ్యం, నిత్యావసరాలు, నగదు) తరచూ శిబిరం / ఇంటి వద్దే.'),
        ],
      },
    ],
    costExample: s('Paddy farmer with 2 acres submerged for days: input subsidy per hectare under the norms (plus crop insurance if enrolled) — only if the crop was booked in e-Crop.', 'రోజుల తరబడి 2 ఎకరాలు మునిగిన వరి రైతు: నిబంధనల ప్రకారం హెక్టారుకు ఇన్‌పుట్ సబ్సిడీ (నమోదైతే పంట బీమా కూడా) — e-Cropలో పంట నమోదైతేనే.'),
    problems: [P(['Not in the list though crop was damaged.', 'పంట దెబ్బతిన్నా జాబితాలో లేదు.'], ['Object in writing during display; if missed, file on PGRS with photos and e-Crop proof.', 'ప్రదర్శన సమయంలో రాతపూర్వక అభ్యంతరం; మిస్సయితే ఫోటోలు, e-Crop రుజువుతో PGRSలో ఫిర్యాదు.'])],
    afterwards: [s('Lost documents in the disaster? Duplicates can be issued — Secretariats often run special camps after big disasters.', 'విపత్తులో పత్రాలు పోయాయా? డూప్లికేట్లు ఇవ్వవచ్చు — పెద్ద విపత్తుల తర్వాత సచివాలయాలు తరచూ ప్రత్యేక శిబిరాలు నిర్వహిస్తాయి.')],
    whereToApply: [s('Village / Ward Secretariat; RSK; Tahsildar', 'గ్రామ / వార్డు సచివాలయం; RSK; తహసీల్దార్')],
    timeline: s('Immediate relief within days; input subsidy and house relief after enumeration — usually weeks to a few months.', 'తక్షణ సహాయం రోజుల్లో; లెక్కింపు తర్వాత ఇన్‌పుట్ సబ్సిడీ, ఇంటి సహాయం — సాధారణంగా వారాల నుండి కొన్ని నెలలు.'),
    tips: [s('Booking your crop in e-Crop every season is the single most important step — no booking, no relief or insurance.', 'ప్రతి సీజన్ e-Cropలో పంట నమోదు అత్యంత ముఖ్యమైన దశ — నమోదు లేకపోతే సహాయం, బీమా రావు.')],
    links: [{ label: 'AP State Disaster Management Authority', url: 'https://apsdma.ap.gov.in' }],
    lastChecked: CHECKED,
  },
];

export const moreExtraDir: XDir[] = [
  D('railway-tickets', 'transport', ['IRCTC booking, Tatkal 10 / 11 am, refunds, TDR, RailMadad 139', 'IRCTC బుకింగ్, తత్కాల్ 10 / 11, రీఫండ్‌లు, TDR, రైల్‌మదద్ 139'], ['irctc.co.in; 139', 'irctc.co.in; 139']),
  D('disaster-relief', 'welfare', ['Crop input subsidy, house damage, ex gratia, cattle / boat loss', 'పంట ఇన్‌పుట్ సబ్సిడీ, ఇంటి నష్టం, ఎక్స్‌గ్రేషియా, పశువులు / పడవ నష్టం'], ['Secretariat; RSK; Tahsildar', 'సచివాలయం; RSK; తహసీల్దార్']),
];
