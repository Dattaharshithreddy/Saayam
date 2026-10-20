import { Guide } from '../types';
import { fee, CHECKED } from './bi';
import { s, P, D, XDir } from './extra-helpers';

/** Vehicles, accidents and online fraud — full walkthroughs (checked 20 Oct 2026). */
export const transportGuides: Guide[] = [
  // ─────────────────────────────────────────── NEW VEHICLE REGISTRATION
  {
    id: 'new-vehicle-registration',
    category: 'transport',
    level: 'both',
    title: s('Buying a new bike or car — registration, number plate, life tax, insurance', 'కొత్త బైక్ లేదా కారు కొనడం — నమోదు, నంబర్ ప్లేట్, లైఫ్ ట్యాక్స్, బీమా'),
    summary: s(
      'When you buy a new vehicle in AP, the dealer registers it for you at the showroom: you pay the ex-showroom price, one-time life tax, registration fees and insurance, and the dealer fits the high-security number plate (HSRP). You get the RC card by post and a digital RC on DigiLocker / mParivahan. Know every line on the "on-road price" so you are not overcharged. Moving from another state, choosing a fancy number or getting a BH-series number has extra steps.',
      'APలో కొత్త వాహనం కొంటే, డీలర్ షోరూమ్‌లోనే నమోదు చేస్తారు: ఎక్స్-షోరూమ్ ధర, ఒకేసారి లైఫ్ ట్యాక్స్, నమోదు ఫీజులు, బీమా చెల్లిస్తారు, డీలర్ హై-సెక్యూరిటీ నంబర్ ప్లేట్ (HSRP) అమర్చుతారు. RC కార్డు పోస్ట్‌లో, డిజిటల్ RC డిజిలాకర్ / mParivahanలో వస్తుంది. ఎక్కువ వసూలు చేయకుండా "ఆన్-రోడ్ ధర"లో ప్రతి లైన్ తెలుసుకోండి. ఇతర రాష్ట్రం నుండి తేవడం, ఫ్యాన్సీ నంబర్, BH-సిరీస్ నంబర్‌కు అదనపు దశలు ఉంటాయి.',
    ),
    keywords: ['new vehicle', 'new bike', 'new car', 'vehicle registration', 'registration number', 'number plate', 'hsrp', 'life tax', 'road tax new', 'on road price', 'temporary registration', 'fancy number', 'choice number', 'bh series', 'other state vehicle', 'noc', 're-registration', 'కొత్త వాహనం', 'కొత్త బైక్', 'కొత్త కారు', 'నంబర్ ప్లేట్', 'లైఫ్ ట్యాక్స్', 'వాహన నమోదు'],
    whoCanApply: [s('Anyone buying a new vehicle (the dealer applies on your behalf)', 'కొత్త వాహనం కొనే ఎవరైనా (డీలర్ మీ తరఫున దరఖాస్తు చేస్తారు)')],
    documents: [
      s('Aadhaar with current address (or other address proof), PAN (for higher-value vehicles / loans)', 'ప్రస్తుత చిరునామాతో ఆధార్ (లేదా ఇతర చిరునామా రుజువు), PAN (ఎక్కువ విలువ వాహనాలు / రుణాలకు)'),
      s('Photo and signature; mobile linked to Aadhaar', 'ఫోటో, సంతకం; ఆధార్‌కు లింక్ అయిన మొబైల్'),
      s('Loan papers if financed (the bank\'s name is recorded on the RC)', 'రుణంపై కొంటే రుణ పత్రాలు (బ్యాంక్ పేరు RCపై నమోదవుతుంది)'),
    ],
    fees: [
      fee(s('Life tax (one time)', 'లైఫ్ ట్యాక్స్ (ఒకేసారి)'), s('A percentage of the vehicle price set by AP — higher for costlier vehicles; shown separately on the invoice / Vahan receipt', 'AP నిర్ణయించిన వాహన ధరలో శాతం — ఖరీదైన వాహనాలకు ఎక్కువ; ఇన్‌వాయిస్ / Vahan రసీదులో విడిగా చూపిస్తారు')),
      fee(s('Registration + smart card + HSRP', 'నమోదు + స్మార్ట్ కార్డు + HSRP'), s('Fixed government fees by vehicle type — ask for the Vahan receipt', 'వాహన రకం ప్రకారం స్థిర ప్రభుత్వ ఫీజులు — Vahan రసీదు అడగండి')),
      fee(s('Insurance', 'బీమా'), s('New vehicles need long-term third-party cover: 5 years (two-wheeler), 3 years (car)', 'కొత్త వాహనాలకు దీర్ఘకాల థర్డ్-పార్టీ కవర్: 5 సంవత్సరాలు (టూ-వీలర్), 3 సంవత్సరాలు (కారు)')),
    ],
    steps: [
      s('Get a written on-road price break-up and compare.', 'ఆన్-రోడ్ ధర విభజన రాతపూర్వకంగా తీసుకుని పోల్చండి.'),
      s('Pay; the dealer registers on Vahan and fits HSRP.', 'చెల్లించండి; డీలర్ Vahanలో నమోదు చేసి HSRP అమర్చుతారు.'),
      s('Collect the RC (post / DigiLocker) and keep insurance and invoice.', 'RC (పోస్ట్ / డిజిలాకర్) తీసుకుని బీమా, ఇన్‌వాయిస్ దాచుకోండి.'),
    ],
    stages: [
      {
        title: s('Before paying — check the price', 'చెల్లించే ముందు — ధర చూడండి'),
        steps: [
          s('Ask for the on-road price break-up in writing: ex-showroom, life tax, registration / HSRP, insurance, accessories, extended warranty.', 'ఆన్-రోడ్ ధర విభజన రాతపూర్వకంగా అడగండి: ఎక్స్-షోరూమ్, లైఫ్ ట్యాక్స్, నమోదు / HSRP, బీమా, యాక్సెసరీలు, ఎక్స్‌టెండెడ్ వారంటీ.'),
          s('Accessories, "handling charges", extended warranty and the dealer\'s insurance are optional — you can refuse or buy insurance elsewhere (compare the premium online).', 'యాక్సెసరీలు, "హ్యాండ్లింగ్ ఛార్జీలు", ఎక్స్‌టెండెడ్ వారంటీ, డీలర్ బీమా ఐచ్ఛికం — నిరాకరించవచ్చు లేదా బీమా వేరే చోట కొనవచ్చు (ఆన్‌లైన్‌లో ప్రీమియం పోల్చండి).'),
          s('Make sure the invoice is in the right name and address (as in Aadhaar) — the RC is printed from it.', 'ఇన్‌వాయిస్ సరైన పేరు, చిరునామాతో (ఆధార్‌లో ఉన్నట్లు) ఉందని చూడండి — RC దాని నుండే ముద్రిస్తారు.'),
        ],
      },
      {
        title: s('At delivery', 'డెలివరీ సమయంలో'),
        steps: [
          s('The dealer uploads your details on Vahan, pays the tax and fees, and gets the registration number. Ask for the Vahan fee / tax receipt.', 'డీలర్ మీ వివరాలు Vahanలో అప్‌లోడ్ చేసి, పన్ను, ఫీజులు చెల్లించి నమోదు నంబర్ పొందుతారు. Vahan ఫీజు / పన్ను రసీదు అడగండి.'),
          s('HSRP plates (with the chrome hologram and laser code) and the third registration sticker are fitted by the dealer before delivery.', 'HSRP ప్లేట్లు (క్రోమ్ హోలోగ్రామ్, లేజర్ కోడ్‌తో), మూడో నమోదు స్టిక్కర్ డెలివరీకి ముందు డీలర్ అమర్చుతారు.'),
          s('Take: tax invoice, insurance policy, Form 21 / 22 (sale and roadworthiness certificates), warranty / service book, two keys.', 'తీసుకోండి: ట్యాక్స్ ఇన్‌వాయిస్, బీమా పాలసీ, ఫారం 21 / 22 (అమ్మకం, రోడ్డుకు తగినదనే సర్టిఫికెట్లు), వారంటీ / సర్వీస్ పుస్తకం, రెండు తాళాలు.'),
          s('RC card arrives by speed post; meanwhile add the RC in DigiLocker / mParivahan (valid for police checks).', 'RC కార్డు స్పీడ్ పోస్ట్‌లో వస్తుంది; ఈలోగా డిజిలాకర్ / mParivahanలో RC చేర్చండి (పోలీసు తనిఖీకి చెల్లుతుంది).'),
        ],
      },
      {
        title: s('Fancy / choice number (optional)', 'ఫ్యాన్సీ / ఇష్టమైన నంబర్ (ఐచ్ఛికం)'),
        steps: [
          s('Before registration, apply on the AP transport / Vahan "choice number" service: pick an available number, pay the fee; popular numbers go to e-auction.', 'నమోదుకు ముందు AP రవాణా / Vahan "choice number" సేవలో దరఖాస్తు: అందుబాటులో ఉన్న నంబర్ ఎంచుకుని ఫీజు చెల్లించండి; ప్రముఖ నంబర్లు ఇ-వేలానికి వెళ్తాయి.'),
          s('Give the allotment letter to the dealer so it is used for your registration.', 'మీ నమోదుకు వాడేలా కేటాయింపు లేఖ డీలర్‌కు ఇవ్వండి.'),
        ],
      },
      {
        title: s('BH-series number (transferable jobs)', 'BH-సిరీస్ నంబర్ (బదిలీ ఉద్యోగాలు)'),
        steps: [
          s('Defence, central / state government and PSU employees, and private-company employees with offices in 4+ states can choose a "BH" number that works in every state.', 'రక్షణ, కేంద్ర / రాష్ట్ర ప్రభుత్వ, PSU ఉద్యోగులు, 4+ రాష్ట్రాల్లో కార్యాలయాలున్న ప్రైవేట్ కంపెనీ ఉద్యోగులు అన్ని రాష్ట్రాల్లో చెల్లే "BH" నంబర్ ఎంచుకోవచ్చు.'),
          s('Give the dealer your employer\'s working certificate (Form 60); tax is paid for 2 years at a time instead of life tax.', 'మీ యజమాని ఉద్యోగ సర్టిఫికెట్ (ఫారం 60) డీలర్‌కు ఇవ్వండి; లైఫ్ ట్యాక్స్ బదులు 2 సంవత్సరాలకు ఒకసారి పన్ను.'),
        ],
      },
      {
        title: s('Bringing a vehicle from another state', 'ఇతర రాష్ట్రం నుండి వాహనం తేవడం'),
        steps: [
          s('Get an NOC (Form 28) from the old state\'s RTO (online on Vahan).', 'పాత రాష్ట్ర RTO నుండి NOC (ఫారం 28) తీసుకోండి (Vahanలో ఆన్‌లైన్).'),
          s('Within 12 months of moving, apply on Vahan for "new registration — other state vehicle" in AP: pay AP tax for the remaining life, show the vehicle at the RTO, get a new AP number and HSRP.', 'మారిన 12 నెలల్లో APలో Vahanలో "new registration — other state vehicle"కి దరఖాస్తు: మిగిలిన కాలానికి AP పన్ను చెల్లించి, RTOలో వాహనం చూపించి, కొత్త AP నంబర్, HSRP పొందండి.'),
          s('Apply to the old state for a refund of unused life tax with the AP registration proof.', 'AP నమోదు రుజువుతో వాడని లైఫ్ ట్యాక్స్ రీఫండ్‌కు పాత రాష్ట్రానికి దరఖాస్తు చేయండి.'),
        ],
      },
    ],
    costExample: s('Example scooter: ex-showroom + AP life tax (a % of price) + registration / HSRP fees + 5-year third-party and 1-year own-damage insurance = on-road price. Anything else is optional.', 'ఉదాహరణ స్కూటర్: ఎక్స్-షోరూమ్ + AP లైఫ్ ట్యాక్స్ (ధరలో %) + నమోదు / HSRP ఫీజులు + 5 సంవత్సరాల థర్డ్-పార్టీ, 1 సంవత్సరం ఓన్-డ్యామేజ్ బీమా = ఆన్-రోడ్ ధర. మిగతావి ఐచ్ఛికం.'),
    problems: [
      P(['RC not received after a month.', 'నెల తర్వాత కూడా RC రాలేదు.'], ['Check status on Vahan with your number; ask the dealer for the speed-post tracking; meanwhile use the DigiLocker RC.', 'మీ నంబర్‌తో Vahanలో స్టేటస్ చూడండి; స్పీడ్ పోస్ట్ ట్రాకింగ్ డీలర్‌ను అడగండి; ఈలోగా డిజిలాకర్ RC వాడండి.']),
      P(['Dealer forcing accessories / charging "handling".', 'డీలర్ యాక్సెసరీలు బలవంతం చేస్తున్నారు / "హ్యాండ్లింగ్" వసూలు.'], ['Refuse in writing; complain to the manufacturer and on the National Consumer Helpline (1915).', 'రాతపూర్వకంగా నిరాకరించండి; తయారీదారుకు, జాతీయ వినియోగదారుల హెల్ప్‌లైన్ (1915)కు ఫిర్యాదు చేయండి.']),
    ],
    afterwards: [s('Bought on loan? After the last EMI, remove the bank\'s name from the RC (see RC services).', 'రుణంపై కొన్నారా? చివరి EMI తర్వాత RC నుండి బ్యాంక్ పేరు తొలగించండి (RC సేవలు చూడండి).')],
    whereToApply: [s('Authorised dealer (registers on Vahan)', 'అధీకృత డీలర్ (Vahanలో నమోదు చేస్తారు)'), s('vahan.parivahan.gov.in; your RTO', 'vahan.parivahan.gov.in; మీ RTO')],
    timeline: s('Number on delivery day; RC card by post in 1–3 weeks.', 'డెలివరీ రోజే నంబర్; RC కార్డు 1–3 వారాల్లో పోస్ట్‌లో.'),
    tips: [s('Never drive a new vehicle without a number / HSRP — fines apply and insurance can be disputed.', 'నంబర్ / HSRP లేకుండా కొత్త వాహనం ఎప్పుడూ నడపకండి — జరిమానాలు ఉంటాయి, బీమా వివాదం కావచ్చు.')],
    links: [{ label: 'Vahan — vehicle services', url: 'https://vahan.parivahan.gov.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── DL SERVICES
  {
    id: 'licence-renewal-services',
    category: 'transport',
    level: 'both',
    title: s('Driving licence renewal, duplicate, address change and international permit', 'డ్రైవింగ్ లైసెన్స్ రెన్యువల్, డూప్లికేట్, చిరునామా మార్పు, అంతర్జాతీయ పర్మిట్'),
    summary: s(
      'Your licence has an expiry date printed on it. Renew it online up to a year before it expires — no driving test if you renew within a year after expiry. Lost licence: get a duplicate. Moved house: change the address. Going abroad: get an International Driving Permit (IDP) from the RTO. All of these are on the Sarathi (Parivahan) site; you visit the RTO only if biometrics or documents need checking.',
      'మీ లైసెన్స్‌పై గడువు తేదీ ముద్రించి ఉంటుంది. గడువుకు ఏడాది ముందు నుండే ఆన్‌లైన్‌లో రెన్యువల్ చేయవచ్చు — గడువు ముగిసిన ఏడాదిలోపు చేస్తే డ్రైవింగ్ టెస్ట్ అక్కర్లేదు. లైసెన్స్ పోతే: డూప్లికేట్. ఇల్లు మారితే: చిరునామా మార్పు. విదేశాలకు: RTO నుండి అంతర్జాతీయ డ్రైవింగ్ పర్మిట్ (IDP). ఇవన్నీ సారథి (పరివాహన్) సైట్‌లో; బయోమెట్రిక్ లేదా పత్రాల తనిఖీ అవసరమైతేనే RTOకు వెళ్లాలి.',
    ),
    keywords: ['licence renewal', 'license renewal', 'dl renewal', 'dl expired', 'duplicate licence', 'duplicate license', 'lost licence', 'dl address change', 'international driving permit', 'idp', 'dl lost', 'లైసెన్స్ రెన్యువల్', 'లైసెన్స్ పోయింది', 'డూప్లికేట్ లైసెన్స్', 'అంతర్జాతీయ డ్రైవింగ్'],
    whoCanApply: [s('Holders of a driving licence issued in AP (or moving into AP)', 'APలో జారీ అయిన (లేదా APకి మారుతున్న) డ్రైవింగ్ లైసెన్స్ ఉన్నవారు')],
    documents: [
      s('Licence number and Aadhaar with linked mobile', 'లైసెన్స్ నంబర్, లింక్ మొబైల్‌తో ఆధార్'),
      s('Form 1A medical certificate if you are 40 or older (renewal) — signed by a registered doctor', '40 లేదా పైబడితే ఫారం 1A మెడికల్ సర్టిఫికెట్ (రెన్యువల్) — రిజిస్టర్డ్ డాక్టర్ సంతకం'),
      s('Duplicate: police lost report (or the damaged licence)', 'డూప్లికేట్: పోలీసు లాస్ట్ రిపోర్ట్ (లేదా దెబ్బతిన్న లైసెన్స్)'),
      s('IDP: passport, valid visa (where needed), air ticket, photo', 'IDP: పాస్‌పోర్ట్, చెల్లుబాటయ్యే వీసా (అవసరమైనచోట), విమాన టికెట్, ఫోటో'),
    ],
    fees: [
      fee(s('Renewal', 'రెన్యువల్'), s('₹200 + smart card / service charges; late fee extra after expiry', '₹200 + స్మార్ట్ కార్డు / సర్వీస్ ఛార్జీలు; గడువు తర్వాత ఆలస్య ఫీజు అదనం')),
      fee(s('Duplicate / address change', 'డూప్లికేట్ / చిరునామా మార్పు'), s('About ₹200 + card / service charges', 'సుమారు ₹200 + కార్డు / సర్వీస్ ఛార్జీలు')),
      fee(s('International Driving Permit', 'అంతర్జాతీయ డ్రైవింగ్ పర్మిట్'), s('₹1,000 (valid 1 year)', '₹1,000 (1 సంవత్సరం చెల్లుబాటు)')),
    ],
    steps: [
      s('parivahan.gov.in → Driving Licence Related Services → Andhra Pradesh.', 'parivahan.gov.in → Driving Licence Related Services → ఆంధ్రప్రదేశ్.'),
      s('Choose the service, fill, upload, pay; visit the RTO only if a slot is required.', 'సేవ ఎంచుకుని నింపి, అప్‌లోడ్ చేసి, చెల్లించండి; స్లాట్ అవసరమైతేనే RTOకు వెళ్లండి.'),
    ],
    stages: [
      {
        title: s('Know your validity', 'మీ చెల్లుబాటు తెలుసుకోండి'),
        steps: [
          s('Private (non-transport) licence: if issued before age 30 it is valid till 40; issued at 30–50 → 10 years; at 50–55 → till 60; after 55 → 5 years. Transport licences: 5 years.', 'ప్రైవేట్ (నాన్-ట్రాన్స్‌పోర్ట్) లైసెన్స్: 30 ఏళ్లలోపు జారీ అయితే 40 వరకు; 30–50లో → 10 సంవత్సరాలు; 50–55లో → 60 వరకు; 55 తర్వాత → 5 సంవత్సరాలు. ట్రాన్స్‌పోర్ట్ లైసెన్స్‌లు: 5 సంవత్సరాలు.'),
          s('Check it any time: parivahan.gov.in → "DL services" → "Driving licence status" or in DigiLocker / mParivahan.', 'ఎప్పుడైనా చూడండి: parivahan.gov.in → "DL services" → "Driving licence status" లేదా డిజిలాకర్ / mParivahanలో.'),
        ],
      },
      {
        title: s('Renew online', 'ఆన్‌లైన్ రెన్యువల్'),
        steps: [
          s('Sarathi → "Services on DL (Renewal / Duplicate / AEDL / IDP / Others)" → enter DL number and date of birth → confirm details.', 'సారథి → "Services on DL (Renewal / Duplicate / AEDL / IDP / Others)" → DL నంబర్, పుట్టిన తేదీ → వివరాలు నిర్ధారించండి.'),
          s('Tick "Renewal of DL"; if 40+, upload Form 1A; upload photo / signature if asked.', '"Renewal of DL" టిక్ చేయండి; 40+ అయితే ఫారం 1A అప్‌లోడ్; అడిగితే ఫోటో / సంతకం.'),
          s('Pay online; book an RTO slot only if the system asks for biometrics. The new card comes by post.', 'ఆన్‌లైన్‌లో చెల్లించండి; సిస్టమ్ బయోమెట్రిక్ అడిగితేనే RTO స్లాట్ బుక్. కొత్త కార్డు పోస్ట్‌లో.'),
        ],
        note: s('Expired more than a year ago? You may have to pass the driving test again. Driving with an expired licence is driving without a licence (₹5,000 fine).', 'గడువు ముగిసి ఏడాది దాటిందా? మళ్లీ డ్రైవింగ్ టెస్ట్ పాస్ కావాల్సి రావచ్చు. గడువు ముగిసిన లైసెన్స్‌తో నడపడం లైసెన్స్ లేకుండా నడపడమే (₹5,000 జరిమానా).'),
      },
      {
        title: s('Duplicate or address change', 'డూప్లికేట్ లేదా చిరునామా మార్పు'),
        steps: [
          s('Lost: get a lost report (AP Police citizen portal / station). Same Sarathi service → tick "Issue of duplicate DL" → upload the report → pay.', 'పోయితే: లాస్ట్ రిపోర్ట్ తీసుకోండి (AP పోలీస్ సిటిజన్ పోర్టల్ / స్టేషన్). అదే సారథి సేవ → "Issue of duplicate DL" టిక్ → రిపోర్ట్ అప్‌లోడ్ → చెల్లింపు.'),
          s('Address: tick "Change of address in DL" → upload Aadhaar with new address → pay.', 'చిరునామా: "Change of address in DL" టిక్ → కొత్త చిరునామాతో ఆధార్ అప్‌లోడ్ → చెల్లింపు.'),
          s('Meanwhile, the DigiLocker / mParivahan licence is valid for checking.', 'ఈలోగా డిజిలాకర్ / mParivahan లైసెన్స్ తనిఖీకి చెల్లుతుంది.'),
        ],
      },
      {
        title: s('International Driving Permit', 'అంతర్జాతీయ డ్రైవింగ్ పర్మిట్'),
        steps: [
          s('Same Sarathi service → tick "Issue of International Driving Permit" → enter passport, visa and travel details → upload copies → pay ₹1,000.', 'అదే సారథి సేవ → "Issue of International Driving Permit" టిక్ → పాస్‌పోర్ట్, వీసా, ప్రయాణ వివరాలు → కాపీలు అప్‌లోడ్ → ₹1,000 చెల్లింపు.'),
          s('Visit the RTO on the slot with originals; the IDP booklet is usually given the same day.', 'అసలు పత్రాలతో స్లాట్‌న RTOకు వెళ్లండి; IDP బుక్‌లెట్ సాధారణంగా అదే రోజు ఇస్తారు.'),
          s('Carry the IDP with your Indian licence abroad. Living abroad long-term usually needs a local licence there.', 'విదేశాల్లో భారత లైసెన్స్‌తో పాటు IDP తీసుకెళ్లండి. ఎక్కువ కాలం విదేశాల్లో ఉంటే అక్కడి స్థానిక లైసెన్స్ సాధారణంగా కావాలి.'),
        ],
      },
    ],
    costExample: s('Renewal at 40: ₹200 + card / service charges + doctor\'s fee for Form 1A.', '40 ఏళ్లకు రెన్యువల్: ₹200 + కార్డు / సర్వీస్ ఛార్జీలు + ఫారం 1Aకి డాక్టర్ ఫీజు.'),
    problems: [P(['Old handwritten / booklet licence not found online.', 'పాత చేతిరాత / బుక్‌లెట్ లైసెన్స్ ఆన్‌లైన్‌లో కనిపించడం లేదు.'], ['Visit the issuing RTO with the original to get it entered in the Sarathi database ("DL backlog entry"), then renew.', 'సారథి డేటాబేస్‌లో నమోదు ("DL backlog entry") చేయించడానికి అసలు లైసెన్స్‌తో జారీ చేసిన RTOకు వెళ్లండి, తర్వాత రెన్యువల్.'])],
    whereToApply: [s('parivahan.gov.in (Sarathi); your RTO', 'parivahan.gov.in (సారథి); మీ RTO')],
    timeline: s('Online application: 15 minutes. Card by post: 1–3 weeks. IDP: usually same day at RTO.', 'ఆన్‌లైన్ దరఖాస్తు: 15 నిమిషాలు. పోస్ట్‌లో కార్డు: 1–3 వారాలు. IDP: సాధారణంగా RTOలో అదే రోజు.'),
    tips: [s('New licence for a car or bike? See the "Driving licence — bike or car" guide.', 'కారు లేదా బైక్‌కు కొత్త లైసెన్స్? "డ్రైవింగ్ లైసెన్స్ — బైక్ లేదా కారు" గైడ్ చూడండి.')],
    links: [{ label: 'Parivahan Sarathi — licence services', url: 'https://sarathi.parivahan.gov.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── ROAD ACCIDENT
  {
    id: 'road-accident-help',
    category: 'transport',
    level: 'both',
    title: s('Road accident — what to do, free treatment and compensation (MACT, hit-and-run)', 'రోడ్డు ప్రమాదం — ఏం చేయాలి, ఉచిత చికిత్స, పరిహారం (MACT, హిట్ అండ్ రన్)'),
    summary: s(
      'At an accident, first call 108 / 112 and help the injured — the law protects helpers (Good Samaritans) from police questioning and hospital bills. Road accident victims get cashless treatment up to ₹1.5 lakh for 7 days at designated hospitals. Later, the injured or the family of the dead can claim compensation from the vehicle\'s insurer at the Motor Accident Claims Tribunal (MACT) — apply within 6 months. If the vehicle is unknown (hit-and-run), the government pays ₹2 lakh for death and ₹50,000 for grievous injury.',
      'ప్రమాదం జరిగితే ముందు 108 / 112కి కాల్ చేసి గాయపడినవారికి సహాయం చేయండి — సహాయకులను (గుడ్ సమారిటన్లు) పోలీసు విచారణ, ఆసుపత్రి బిల్లుల నుండి చట్టం రక్షిస్తుంది. రోడ్డు ప్రమాద బాధితులకు నిర్దేశిత ఆసుపత్రుల్లో 7 రోజులకు ₹1.5 లక్షల వరకు నగదు రహిత చికిత్స. తర్వాత గాయపడినవారు లేదా మరణించినవారి కుటుంబం మోటార్ యాక్సిడెంట్ క్లెయిమ్స్ ట్రిబ్యునల్ (MACT)లో వాహన బీమా సంస్థ నుండి పరిహారం కోరవచ్చు — 6 నెలల్లో దరఖాస్తు చేయాలి. వాహనం తెలియకపోతే (హిట్ అండ్ రన్), ప్రభుత్వం మరణానికి ₹2 లక్షలు, తీవ్ర గాయానికి ₹50,000 ఇస్తుంది.',
    ),
    keywords: ['accident', 'road accident', 'bike accident', 'car accident', 'hit and run', 'mact', 'accident claim', 'accident compensation', 'motor accident', 'good samaritan', 'cashless treatment accident', 'third party claim', 'ప్రమాదం', 'రోడ్డు ప్రమాదం', 'యాక్సిడెంట్', 'పరిహారం', 'హిట్ అండ్ రన్'],
    whoCanApply: [s('Injured persons; legal heirs of those who died; owners of damaged property', 'గాయపడినవారు; మరణించినవారి వారసులు; దెబ్బతిన్న ఆస్తి యజమానులు')],
    documents: [
      s('FIR copy and the police accident report (FAR / DAR)', 'FIR కాపీ, పోలీసు ప్రమాద నివేదిక (FAR / DAR)'),
      s('Medical records, bills, discharge summary; disability certificate if any', 'మెడికల్ రికార్డులు, బిల్లులు, డిశ్చార్జ్ సమ్మరీ; ఉంటే వైకల్య సర్టిఫికెట్'),
      s('Death: post-mortem report, death certificate, family member certificate, income proof of the deceased', 'మరణం: పోస్ట్‌మార్టం రిపోర్ట్, మరణ ధృవీకరణ, కుటుంబ సభ్యుల ధృవీకరణ, మరణించినవారి ఆదాయ రుజువు'),
      s('Offending vehicle number, its insurance details (police get these)', 'ప్రమాదానికి కారణమైన వాహన నంబర్, దాని బీమా వివరాలు (పోలీసులు సేకరిస్తారు)'),
    ],
    fees: [
      fee(s('Emergency treatment under the cashless scheme', 'నగదు రహిత పథకం కింద అత్యవసర చికిత్స'), s('Free up to ₹1.5 lakh per victim, for 7 days from the accident', 'ప్రమాదం నుండి 7 రోజులకు ప్రతి బాధితునికి ₹1.5 లక్షల వరకు ఉచితం')),
      fee(s('MACT claim', 'MACT క్లెయిమ్'), s('Nominal court fee; free legal aid available', 'నామమాత్ర కోర్టు ఫీజు; ఉచిత న్యాయ సహాయం అందుబాటులో')),
      fee(s('Hit-and-run compensation', 'హిట్ అండ్ రన్ పరిహారం'), s('₹2,00,000 death · ₹50,000 grievous injury (paid by government)', '₹2,00,000 మరణం · ₹50,000 తీవ్ర గాయం (ప్రభుత్వం చెల్లిస్తుంది)')),
    ],
    steps: [
      s('Call 108 / 112; take the injured to the nearest hospital.', '108 / 112కి కాల్ చేసి గాయపడినవారిని దగ్గరి ఆసుపత్రికి తీసుకెళ్లండి.'),
      s('Make sure police register the accident (FIR).', 'పోలీసులు ప్రమాదాన్ని నమోదు (FIR) చేశారని నిర్ధారించుకోండి.'),
      s('Claim compensation at MACT within 6 months (or hit-and-run claim at the RDO).', '6 నెలల్లో MACTలో పరిహారం కోరండి (లేదా RDO వద్ద హిట్ అండ్ రన్ క్లెయిమ్).'),
    ],
    stages: [
      {
        title: s('At the spot (first hour)', 'సంఘటన స్థలంలో (మొదటి గంట)'),
        steps: [
          s('Call 108 (ambulance) or 112. Give the exact place and number of injured.', '108 (అంబులెన్స్) లేదా 112కి కాల్. ఖచ్చితమైన స్థలం, గాయపడినవారి సంఖ్య చెప్పండి.'),
          s('Switch on hazard lights / place something to warn traffic. Don\'t move a person with a suspected neck / spine injury unless there is fire or danger.', 'హజార్డ్ లైట్లు వేయండి / ట్రాఫిక్‌ను హెచ్చరించడానికి ఏదైనా పెట్టండి. మెడ / వెన్నెముక గాయం అనుమానం ఉంటే మంటలు లేదా ప్రమాదం ఉంటే తప్ప కదపకండి.'),
          s('Note the other vehicle\'s number, take photos of vehicles, road and injuries, and names of witnesses.', 'ఎదుటి వాహన నంబర్ నోట్ చేయండి, వాహనాలు, రోడ్డు, గాయాల ఫోటోలు, సాక్షుల పేర్లు తీసుకోండి.'),
          s('Good Samaritans who help can\'t be forced to give their name, pay the hospital, or be harassed by police (Motor Vehicles Act 134A). The Rah-Veer scheme rewards those who take a victim to hospital in time.', 'సహాయం చేసే గుడ్ సమారిటన్లను పేరు చెప్పమని, ఆసుపత్రి బిల్లు కట్టమని బలవంతం చేయరాదు, పోలీసులు వేధించరాదు (మోటారు వాహనాల చట్టం 134A). బాధితుడిని సమయానికి ఆసుపత్రికి తీసుకెళ్లినవారికి రాహ్-వీర్ పథకం బహుమతి ఇస్తుంది.'),
        ],
      },
      {
        title: s('Treatment', 'చికిత్స'),
        steps: [
          s('Any hospital must give emergency first aid without asking for money first.', 'ఏ ఆసుపత్రి అయినా ముందుగా డబ్బు అడగకుండా అత్యవసర ప్రథమ చికిత్స ఇవ్వాలి.'),
          s('Cashless scheme: at a designated hospital, treatment up to ₹1.5 lakh per victim for 7 days from the accident is free — the hospital claims from the government fund. Tell the hospital it is a road accident; police confirmation is linked.', 'నగదు రహిత పథకం: నిర్దేశిత ఆసుపత్రిలో ప్రమాదం నుండి 7 రోజులు ప్రతి బాధితునికి ₹1.5 లక్షల వరకు చికిత్స ఉచితం — ఆసుపత్రి ప్రభుత్వ నిధి నుండి క్లెయిమ్ చేస్తుంది. రోడ్డు ప్రమాదమని ఆసుపత్రికి చెప్పండి; పోలీసు నిర్ధారణ లింక్ అవుతుంది.'),
          s('After that, NTR Vaidya Seva / Ayushman cover can continue for eligible families. Keep every bill.', 'తర్వాత అర్హ కుటుంబాలకు NTR వైద్య సేవ / ఆయుష్మాన్ కవర్ కొనసాగవచ్చు. ప్రతి బిల్లు దాచుకోండి.'),
        ],
      },
      {
        title: s('Police case', 'పోలీసు కేసు'),
        steps: [
          s('Police register an FIR (BNS 281 rash driving / 125 / 106 death by negligence). Get the FIR copy.', 'పోలీసులు FIR నమోదు చేస్తారు (BNS 281 నిర్లక్ష్య డ్రైవింగ్ / 125 / 106 నిర్లక్ష్యంతో మరణం). FIR కాపీ తీసుకోండి.'),
          s('Police must send the First Accident Report to the claims tribunal within 48 hours and the Detailed Accident Report within 90 days — this itself starts the claim process.', 'పోలీసులు 48 గంటల్లో మొదటి ప్రమాద నివేదికను, 90 రోజుల్లో వివరణాత్మక ప్రమాద నివేదికను క్లెయిమ్స్ ట్రిబ్యునల్‌కు పంపాలి — ఇదే క్లెయిమ్ ప్రక్రియను ప్రారంభిస్తుంది.'),
          s('Vehicles are inspected by the MVI; collect a copy of the inspection report later.', 'వాహనాలను MVI తనిఖీ చేస్తారు; తర్వాత తనిఖీ నివేదిక కాపీ తీసుకోండి.'),
        ],
      },
      {
        title: s('Compensation from insurance (MACT)', 'బీమా నుండి పరిహారం (MACT)'),
        steps: [
          s('Within 6 months of the accident, file a claim petition at the Motor Accident Claims Tribunal (district court complex) where the accident happened, where you live, or where the opposite party lives.', 'ప్రమాదం జరిగిన 6 నెలల్లో, ప్రమాదం జరిగిన చోట, మీరు నివసించే చోట లేదా ఎదుటి పక్షం నివసించే చోట మోటార్ యాక్సిడెంట్ క్లెయిమ్స్ ట్రిబ్యునల్‌లో (జిల్లా కోర్టు ఆవరణ) క్లెయిమ్ పిటిషన్ వేయండి.'),
          s('Two routes: fixed compensation without proving fault (Section 164: ₹5 lakh death, ₹2.5 lakh grievous hurt), or full compensation by proving negligence (Section 166) based on age, income, medical costs and loss.', 'రెండు మార్గాలు: తప్పు రుజువు చేయకుండా స్థిర పరిహారం (సెక్షన్ 164: మరణం ₹5 లక్షలు, తీవ్ర గాయం ₹2.5 లక్షలు), లేదా నిర్లక్ష్యం రుజువు చేసి వయస్సు, ఆదాయం, వైద్య ఖర్చులు, నష్టం ఆధారంగా పూర్తి పరిహారం (సెక్షన్ 166).'),
          s('The insurer may offer a settlement — compare with what the tribunal would give; Lok Adalats settle many claims quickly.', 'బీమా సంస్థ రాజీ ఆఫర్ చేయవచ్చు — ట్రిబ్యునల్ ఇచ్చేదానితో పోల్చండి; లోక్ అదాలత్‌లు చాలా క్లెయిమ్‌లను త్వరగా పరిష్కరిస్తాయి.'),
          s('Award is deposited by the insurer in the tribunal; it is released to your bank (part may be kept in fixed deposits for minors / widows).', 'బీమా సంస్థ అవార్డును ట్రిబ్యునల్‌లో జమ చేస్తుంది; మీ బ్యాంకుకు విడుదల (మైనర్లు / వితంతువులకు కొంత ఫిక్స్‌డ్ డిపాజిట్లలో ఉంచవచ్చు).'),
        ],
      },
      {
        title: s('Hit-and-run (vehicle not found)', 'హిట్ అండ్ రన్ (వాహనం దొరకలేదు)'),
        steps: [
          s('After police report the vehicle as untraced, apply in Form I to the Claims Enquiry Officer (RDO / Sub-Collector) with FIR, post-mortem / medical papers and ID.', 'వాహనం దొరకలేదని పోలీసులు నివేదించాక, FIR, పోస్ట్‌మార్టం / మెడికల్ పత్రాలు, ఐడీతో ఫారం Iలో క్లెయిమ్స్ ఎంక్వైరీ ఆఫీసర్ (RDO / సబ్-కలెక్టర్)కి దరఖాస్తు చేయండి.'),
          s('The officer verifies and forwards; ₹2 lakh (death) or ₹50,000 (grievous injury) is paid to the bank account.', 'అధికారి ధృవీకరించి పంపుతారు; ₹2 లక్షలు (మరణం) లేదా ₹50,000 (తీవ్ర గాయం) బ్యాంక్ ఖాతాకు.'),
        ],
      },
    ],
    costExample: s('Family of a 35-year-old earning ₹20,000 a month who died in a lorry accident: MACT compensation is calculated on lost income over the years, plus funeral and other heads — usually many times more than the fixed ₹5 lakh.', 'లారీ ప్రమాదంలో మరణించిన నెలకు ₹20,000 సంపాదించే 35 ఏళ్ల వ్యక్తి కుటుంబం: సంవత్సరాలుగా కోల్పోయిన ఆదాయం, అంత్యక్రియలు, ఇతర అంశాలపై MACT పరిహారం లెక్కిస్తారు — సాధారణంగా స్థిర ₹5 లక్షల కంటే చాలా రెట్లు ఎక్కువ.'),
    problems: [
      P(['Agents / lawyers approach the family at the hospital promising quick compensation for a big cut.', 'ఏజెంట్లు / న్యాయవాదులు పెద్ద కమీషన్‌కు త్వరిత పరిహారం అంటూ ఆసుపత్రిలోనే కుటుంబాన్ని సంప్రదిస్తున్నారు.'], ['Don\'t sign anything in a hurry. Free legal aid (15100) can file the MACT claim; the police report already reaches the tribunal.', 'హడావుడిలో ఏదీ సంతకం చేయకండి. ఉచిత న్యాయ సహాయం (15100) MACT క్లెయిమ్ వేయగలదు; పోలీసు నివేదిక ఇప్పటికే ట్రిబ్యునల్‌కు చేరుతుంది.']),
      P(['Offending vehicle had no insurance.', 'ప్రమాదానికి కారణమైన వాహనానికి బీమా లేదు.'], ['The owner and driver are personally liable; the tribunal can order recovery from them. Also ask about the Motor Vehicle Accident Fund.', 'యజమాని, డ్రైవర్ వ్యక్తిగతంగా బాధ్యులు; వారి నుండి వసూలు చేయమని ట్రిబ్యునల్ ఆదేశించగలదు. మోటార్ వెహికల్ యాక్సిడెంట్ ఫండ్ గురించి కూడా అడగండి.']),
    ],
    afterwards: [s('Your own vehicle damaged? Claim from your insurer (see Vehicle insurance claim).', 'మీ సొంత వాహనం దెబ్బతిందా? మీ బీమా సంస్థ నుండి క్లెయిమ్ చేయండి (వాహన బీమా క్లెయిమ్ చూడండి).')],
    whereToApply: [s('108 / 112; nearest hospital; police station', '108 / 112; దగ్గరి ఆసుపత్రి; పోలీస్ స్టేషన్'), s('Motor Accident Claims Tribunal (district court); RDO for hit-and-run', 'మోటార్ యాక్సిడెంట్ క్లెయిమ్స్ ట్రిబ్యునల్ (జిల్లా కోర్టు); హిట్ అండ్ రన్‌కు RDO')],
    timeline: s('MACT petition within 6 months; awards take months to years (Lok Adalat faster). Hit-and-run: a few months.', '6 నెలల్లో MACT పిటిషన్; అవార్డులకు నెలల నుండి సంవత్సరాలు (లోక్ అదాలత్ వేగం). హిట్ అండ్ రన్: కొన్ని నెలలు.'),
    tips: [s('Always keep valid insurance, licence and PUC — if you cause an accident without insurance, you pay the whole compensation yourself.', 'ఎప్పుడూ చెల్లుబాటయ్యే బీమా, లైసెన్స్, PUC ఉంచుకోండి — బీమా లేకుండా ప్రమాదం చేస్తే పూర్తి పరిహారం మీరే చెల్లించాలి.')],
    links: [{ label: 'Ministry of Road Transport — road safety', url: 'https://morth.nic.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── VEHICLE INSURANCE CLAIM
  {
    id: 'vehicle-insurance-claim',
    category: 'transport',
    level: 'central',
    title: s('Vehicle insurance — renew, claim for damage or theft', 'వాహన బీమా — రెన్యువల్, నష్టం లేదా దొంగతనానికి క్లెయిమ్'),
    summary: s(
      'Third-party insurance is compulsory for every vehicle; "comprehensive" also covers damage to your own vehicle and theft. For a damage claim, inform the insurer at once, don\'t repair before the surveyor sees it, and use a network garage for cashless repair. For theft, file an FIR immediately and inform the insurer; you get the insured value (IDV) after police give a "not traceable" report.',
      'ప్రతి వాహనానికి థర్డ్-పార్టీ బీమా తప్పనిసరి; "కాంప్రహెన్సివ్" మీ సొంత వాహన నష్టం, దొంగతనాన్ని కూడా కవర్ చేస్తుంది. నష్ట క్లెయిమ్‌కు వెంటనే బీమా సంస్థకు తెలియజేయండి, సర్వేయర్ చూసే ముందు రిపేర్ చేయకండి, నగదు రహిత రిపేర్‌కు నెట్‌వర్క్ గ్యారేజ్ వాడండి. దొంగతనానికి వెంటనే FIR వేసి బీమా సంస్థకు తెలియజేయండి; పోలీసులు "దొరకలేదు" నివేదిక ఇచ్చాక బీమా విలువ (IDV) వస్తుంది.',
    ),
    keywords: ['vehicle insurance', 'bike insurance', 'car insurance', 'insurance renewal', 'insurance claim', 'own damage', 'third party insurance', 'bike stolen', 'car stolen', 'vehicle theft', 'idv', 'ncb', 'వాహన బీమా', 'బైక్ దొంగతనం', 'కారు బీమా', 'బీమా క్లెయిమ్'],
    whoCanApply: [s('Vehicle owners', 'వాహన యజమానులు')],
    documents: [
      s('Policy number, RC, driving licence of the person driving', 'పాలసీ నంబర్, RC, నడిపిన వ్యక్తి డ్రైవింగ్ లైసెన్స్'),
      s('Photos of damage; FIR for theft, third-party injury or big accidents', 'నష్టం ఫోటోలు; దొంగతనం, థర్డ్-పార్టీ గాయం లేదా పెద్ద ప్రమాదాలకు FIR'),
      s('Theft: both keys, police "non-traceable" report, Form 28 / 29 / 30 and 35 (if loan) signed for transfer to the insurer', 'దొంగతనం: రెండు తాళాలు, పోలీసు "non-traceable" నివేదిక, బీమా సంస్థకు బదిలీకి సంతకం చేసిన ఫారం 28 / 29 / 30, 35 (రుణం ఉంటే)'),
    ],
    fees: [fee(s('Compulsory deductible', 'తప్పనిసరి డిడక్టిబుల్'), s('Small fixed amount you pay per claim (higher for cars); depreciation on parts unless you have zero-dep cover', 'ప్రతి క్లెయిమ్‌కు మీరు చెల్లించే చిన్న స్థిర మొత్తం (కార్లకు ఎక్కువ); జీరో-డెప్ కవర్ లేకపోతే విడిభాగాలపై తరుగుదల'))],
    steps: [
      s('Inform the insurer (app / helpline) with photos; get a claim number.', 'ఫోటోలతో బీమా సంస్థకు (యాప్ / హెల్ప్‌లైన్) తెలియజేసి క్లెయిమ్ నంబర్ పొందండి.'),
      s('Surveyor inspects; repair at a network garage.', 'సర్వేయర్ తనిఖీ; నెట్‌వర్క్ గ్యారేజ్‌లో రిపేర్.'),
      s('Pay your share; insurer pays the garage.', 'మీ వాటా చెల్లించండి; బీమా సంస్థ గ్యారేజ్‌కు చెల్లిస్తుంది.'),
    ],
    stages: [
      {
        title: s('Renew on time', 'సమయానికి రెన్యువల్'),
        steps: [
          s('Compare premiums online; check the IDV (insured value), add-ons (zero depreciation, engine protect, roadside assistance) and your No-Claim Bonus (NCB) carries over.', 'ఆన్‌లైన్‌లో ప్రీమియంలు పోల్చండి; IDV (బీమా విలువ), యాడ్-ఆన్‌లు (జీరో డిప్రిసియేషన్, ఇంజిన్ ప్రొటెక్ట్, రోడ్‌సైడ్ అసిస్టెన్స్), మీ నో-క్లెయిమ్ బోనస్ (NCB) కొనసాగుతుందో చూడండి.'),
          s('Renew before expiry — after a break, the car may need inspection and NCB can be lost after 90 days.', 'గడువుకు ముందే రెన్యువల్ — విరామం తర్వాత కారుకు తనిఖీ కావచ్చు, 90 రోజుల తర్వాత NCB పోవచ్చు.'),
          s('Save the policy in DigiLocker; it shows on Vahan automatically.', 'పాలసీని డిజిలాకర్‌లో సేవ్ చేయండి; Vahanలో ఆటోమేటిక్‌గా కనిపిస్తుంది.'),
        ],
      },
      {
        title: s('Damage claim', 'నష్ట క్లెయిమ్'),
        steps: [
          s('Inform the insurer within 24–48 hours through the app / toll-free number; note the claim number.', '24–48 గంటల్లో యాప్ / టోల్-ఫ్రీ నంబర్ ద్వారా బీమా సంస్థకు తెలియజేసి క్లెయిమ్ నంబర్ నోట్ చేయండి.'),
          s('Take the vehicle to a network garage for cashless repair (or any garage for reimbursement). Don\'t start repairs before the surveyor approves.', 'నగదు రహిత రిపేర్‌కు నెట్‌వర్క్ గ్యారేజ్‌కు (లేదా రీయింబర్స్‌మెంట్‌కు ఏ గ్యారేజైనా) తీసుకెళ్లండి. సర్వేయర్ ఆమోదించే ముందు రిపేర్ ప్రారంభించకండి.'),
          s('Surveyor inspects (often by video), approves the estimate; after repair, you pay the deductible and depreciation, the insurer pays the rest.', 'సర్వేయర్ తనిఖీ (తరచూ వీడియోలో), అంచనా ఆమోదం; రిపేర్ తర్వాత మీరు డిడక్టిబుల్, తరుగుదల చెల్లిస్తారు, మిగతాది బీమా సంస్థ.'),
        ],
      },
      {
        title: s('Theft claim', 'దొంగతనం క్లెయిమ్'),
        steps: [
          s('File an FIR immediately (AP Police citizen portal / station) and inform the insurer the same day.', 'వెంటనే FIR వేయండి (AP పోలీస్ సిటిజన్ పోర్టల్ / స్టేషన్), అదే రోజు బీమా సంస్థకు తెలియజేయండి.'),
          s('Inform the RTO in writing so the vehicle isn\'t transferred or misused.', 'వాహనం బదిలీ లేదా దుర్వినియోగం కాకుండా RTOకు రాతపూర్వకంగా తెలియజేయండి.'),
          s('After police issue the "non-traceable" (final) report, submit it with keys, RC and signed transfer forms; the insurer pays the IDV.', 'పోలీసులు "non-traceable" (తుది) నివేదిక ఇచ్చాక, తాళాలు, RC, సంతకం చేసిన బదిలీ ఫారాలతో సమర్పించండి; బీమా సంస్థ IDV చెల్లిస్తుంది.'),
        ],
      },
    ],
    costExample: s('Bike with IDV ₹60,000 stolen and not found: claim paid ≈ ₹60,000 (minus any deductible) after the police final report.', '₹60,000 IDV ఉన్న బైక్ దొంగతనం, దొరకలేదు: పోలీసు తుది నివేదిక తర్వాత క్లెయిమ్ ≈ ₹60,000 (డిడక్టిబుల్ మినహా).'),
    problems: [P(['Claim rejected unfairly.', 'క్లెయిమ్ అన్యాయంగా తిరస్కరించారు.'], ['Ask for the reason in writing; complain on Bima Bharosa (bimabharosa.irdai.gov.in) / insurer grievance cell, then the Insurance Ombudsman (cioins.co.in).', 'కారణం రాతపూర్వకంగా అడగండి; బీమా భరోసా (bimabharosa.irdai.gov.in) / బీమా సంస్థ ఫిర్యాదుల విభాగంలో, తర్వాత ఇన్సూరెన్స్ అంబుడ్స్‌మన్ (cioins.co.in)కు ఫిర్యాదు.'])],
    whereToApply: [s('Your insurer\'s app / helpline / branch', 'మీ బీమా సంస్థ యాప్ / హెల్ప్‌లైన్ / బ్రాంచ్')],
    timeline: s('Damage claims: days to weeks. Theft: after the police final report (often 2–3 months).', 'నష్ట క్లెయిమ్‌లు: రోజుల నుండి వారాలు. దొంగతనం: పోలీసు తుది నివేదిక తర్వాత (తరచూ 2–3 నెలలు).'),
    tips: [s('Driving without valid third-party insurance: ₹2,000 fine first time (₹4,000 next) — and full personal liability in an accident.', 'చెల్లుబాటయ్యే థర్డ్-పార్టీ బీమా లేకుండా నడిపితే: మొదటిసారి ₹2,000 జరిమానా (మళ్లీ ₹4,000) — ప్రమాదంలో పూర్తి వ్యక్తిగత బాధ్యత.')],
    links: [{ label: 'IRDAI Bima Bharosa — complaints', url: 'https://bimabharosa.irdai.gov.in' }, { label: 'Insurance Ombudsman', url: 'https://www.cioins.co.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── CYBER FRAUD
  {
    id: 'cyber-fraud',
    category: 'safety',
    level: 'central',
    title: s('Money lost online / UPI fraud / fake calls — step by step', 'ఆన్‌లైన్‌లో డబ్బు పోయింది / UPI మోసం / నకిలీ కాల్స్ — దశలవారీగా'),
    summary: s(
      'If money leaves your account through a fraud — fake KYC call, OTP shared, "digital arrest" video call, part-time job / investment app, fake customer care — act in the first hour: call 1930 so the money can be frozen in the fraudster\'s account, tell your bank to block the card / UPI, and file a complaint on cybercrime.gov.in. If you report an unauthorised transaction to your bank within 3 working days and it wasn\'t your fault, RBI rules say your liability is zero.',
      'మోసం ద్వారా మీ ఖాతా నుండి డబ్బు పోతే — నకిలీ KYC కాల్, OTP పంచుకోవడం, "డిజిటల్ అరెస్ట్" వీడియో కాల్, పార్ట్-టైమ్ ఉద్యోగం / పెట్టుబడి యాప్, నకిలీ కస్టమర్ కేర్ — మొదటి గంటలో చర్య తీసుకోండి: మోసగాడి ఖాతాలో డబ్బు ఫ్రీజ్ కావడానికి 1930కి కాల్ చేయండి, కార్డు / UPI బ్లాక్ చేయమని బ్యాంకుకు చెప్పండి, cybercrime.gov.inలో ఫిర్యాదు చేయండి. మీ తప్పు లేని అనధికార లావాదేవీని 3 పని రోజుల్లో బ్యాంకుకు తెలియజేస్తే RBI నియమాల ప్రకారం మీ బాధ్యత శూన్యం.',
    ),
    keywords: ['cyber fraud', 'online fraud', 'upi fraud', 'money lost', 'otp fraud', 'digital arrest', 'fake call', 'kyc fraud', 'investment scam', 'part time job scam', 'loan app harassment', 'sextortion', 'hacked', 'whatsapp hacked', '1930', 'cybercrime', 'సైబర్ మోసం', 'ఆన్‌లైన్ మోసం', 'డబ్బు పోయింది', 'UPI మోసం', 'డిజిటల్ అరెస్ట్', 'లోన్ యాప్'],
    whoCanApply: [s('Anyone who lost money or is being threatened / harassed online', 'డబ్బు పోగొట్టుకున్న లేదా ఆన్‌లైన్‌లో బెదిరింపులు / వేధింపులు ఎదుర్కొంటున్న ఎవరైనా')],
    documents: [
      s('Transaction ID / UTR, date and time, amount, your bank and account / UPI ID', 'లావాదేవీ ID / UTR, తేదీ, సమయం, మొత్తం, మీ బ్యాంక్, ఖాతా / UPI ID'),
      s('Fraudster\'s phone number, UPI ID, account number, website / app name', 'మోసగాడి ఫోన్ నంబర్, UPI ID, ఖాతా నంబర్, వెబ్‌సైట్ / యాప్ పేరు'),
      s('Screenshots of chats, call logs, SMS, payment screens', 'చాట్‌లు, కాల్ లాగ్‌లు, SMS, చెల్లింపు స్క్రీన్‌ల స్క్రీన్‌షాట్లు'),
    ],
    fees: [fee(s('1930 / cybercrime complaint', '1930 / సైబర్ క్రైమ్ ఫిర్యాదు'), s('Free', 'ఉచితం'))],
    steps: [
      s('Call 1930 immediately.', 'వెంటనే 1930కి కాల్ చేయండి.'),
      s('Block card / UPI with your bank; report in writing.', 'బ్యాంకుతో కార్డు / UPI బ్లాక్ చేయండి; రాతపూర్వకంగా తెలియజేయండి.'),
      s('File on cybercrime.gov.in and follow up.', 'cybercrime.gov.inలో ఫిర్యాదు చేసి ఫాలో-అప్.'),
    ],
    stages: [
      {
        title: s('First hour — stop the money', 'మొదటి గంట — డబ్బు ఆపడం'),
        steps: [
          s('Call 1930 (National Cyber Crime Helpline). Give: bank, account / UPI, each transaction ID and amount, fraudster details. Note the acknowledgement number.', '1930కి (జాతీయ సైబర్ క్రైమ్ హెల్ప్‌లైన్) కాల్ చేయండి. చెప్పండి: బ్యాంక్, ఖాతా / UPI, ప్రతి లావాదేవీ ID, మొత్తం, మోసగాడి వివరాలు. అక్నాలెడ్జ్‌మెంట్ నంబర్ నోట్ చేయండి.'),
          s('Call your bank\'s 24×7 number to block the debit card, UPI and net banking. Change passwords and UPI PIN from a safe phone.', 'డెబిట్ కార్డు, UPI, నెట్ బ్యాంకింగ్ బ్లాక్ చేయడానికి మీ బ్యాంక్ 24×7 నంబర్‌కు కాల్ చేయండి. సురక్షిత ఫోన్ నుండి పాస్‌వర్డ్‌లు, UPI PIN మార్చండి.'),
          s('If you installed an app the caller asked for (AnyDesk, TeamViewer, an APK file), uninstall it and switch off mobile data until the phone is checked.', 'కాలర్ చెప్పిన యాప్ (AnyDesk, TeamViewer, APK ఫైల్) ఇన్‌స్టాల్ చేసి ఉంటే, తొలగించి, ఫోన్ తనిఖీ అయ్యే వరకు మొబైల్ డేటా ఆపండి.'),
        ],
      },
      {
        title: s('Same day — written complaints', 'అదే రోజు — రాతపూర్వక ఫిర్యాదులు'),
        steps: [
          s('cybercrime.gov.in → "Report Financial Fraud" (or "Report other cyber crime") → mobile OTP → fill incident details, all transactions and fraudster details → upload screenshots → submit. If you called 1930, link the acknowledgement number.', 'cybercrime.gov.in → "Report Financial Fraud" (లేదా "Report other cyber crime") → మొబైల్ OTP → సంఘటన వివరాలు, అన్ని లావాదేవీలు, మోసగాడి వివరాలు → స్క్రీన్‌షాట్లు అప్‌లోడ్ → సబ్మిట్. 1930కి కాల్ చేస్తే అక్నాలెడ్జ్‌మెంట్ నంబర్ లింక్ చేయండి.'),
          s('Give a written complaint to your bank branch (email is fine) listing the unauthorised transactions — this starts the RBI 3-day clock and the bank\'s duty to investigate.', 'అనధికార లావాదేవీల జాబితాతో మీ బ్యాంక్ బ్రాంచ్‌కు రాతపూర్వక ఫిర్యాదు (ఇమెయిల్ సరిపోతుంది) — ఇది RBI 3 రోజుల గడువు, బ్యాంక్ దర్యాప్తు బాధ్యతను ప్రారంభిస్తుంది.'),
          s('Report the number / message as fraud on Sanchar Saathi → "Chakshu" so it is blocked for others.', 'ఇతరులకు బ్లాక్ అయ్యేలా సంచార్ సాథీ → "చక్షు"లో ఆ నంబర్ / మెసేజ్‌ను మోసంగా రిపోర్ట్ చేయండి.'),
        ],
      },
      {
        title: s('Getting money back', 'డబ్బు తిరిగి పొందడం'),
        steps: [
          s('Bank must credit the disputed amount (shadow credit) within 10 working days if you reported within the time and it was not your negligence; if you shared OTP / PIN, the bank may not be liable.', 'సమయానికి తెలియజేసి, మీ నిర్లక్ష్యం కాకపోతే వివాదాస్పద మొత్తాన్ని (షాడో క్రెడిట్) బ్యాంక్ 10 పని రోజుల్లో జమ చేయాలి; OTP / PIN పంచుకుంటే బ్యాంక్ బాధ్యత వహించకపోవచ్చు.'),
          s('Money frozen in the fraudster\'s account is returned after a court order: police / your lawyer apply to the magistrate (or Lok Adalat) with the cyber complaint — follow up with the cyber police station of your district.', 'మోసగాడి ఖాతాలో ఫ్రీజ్ అయిన డబ్బు కోర్టు ఉత్తర్వు తర్వాత తిరిగి వస్తుంది: సైబర్ ఫిర్యాదుతో పోలీసులు / మీ న్యాయవాది మేజిస్ట్రేట్ (లేదా లోక్ అదాలత్)కి దరఖాస్తు చేస్తారు — మీ జిల్లా సైబర్ పోలీస్ స్టేషన్‌తో ఫాలో-అప్ చేయండి.'),
          s('Bank not responding in 30 days: complain to the RBI Ombudsman on cms.rbi.org.in.', '30 రోజుల్లో బ్యాంక్ స్పందించకపోతే: cms.rbi.org.inలో RBI అంబుడ్స్‌మన్‌కు ఫిర్యాదు.'),
        ],
      },
      {
        title: s('Threats, morphed photos, loan apps', 'బెదిరింపులు, మార్ఫ్ ఫోటోలు, లోన్ యాప్‌లు'),
        steps: [
          s('Don\'t pay blackmailers — payments bring more demands. Keep evidence, block, and report on cybercrime.gov.in ("Report women / child related crime" for sexual content — can be anonymous).', 'బ్లాక్‌మెయిలర్లకు చెల్లించకండి — చెల్లిస్తే మరిన్ని డిమాండ్లు. రుజువులు దాచి, బ్లాక్ చేసి, cybercrime.gov.inలో రిపోర్ట్ చేయండి (లైంగిక కంటెంట్‌కు "Report women / child related crime" — అనామకంగా చేయవచ్చు).'),
          s('Ask the platform (WhatsApp, Instagram, Facebook) to remove the content using their report option; intimate images must be removed quickly under IT rules.', 'ప్లాట్‌ఫారం (వాట్సాప్, ఇన్‌స్టాగ్రామ్, ఫేస్‌బుక్) రిపోర్ట్ ఆప్షన్‌తో కంటెంట్ తొలగించమని కోరండి; IT నియమాల ప్రకారం ప్రైవేట్ చిత్రాలు త్వరగా తొలగించాలి.'),
          s('"Digital arrest": police, CBI, customs or courts never arrest or demand money on video calls. Hang up and call 1930.', '"డిజిటల్ అరెస్ట్": పోలీసులు, CBI, కస్టమ్స్ లేదా కోర్టులు వీడియో కాల్‌లో అరెస్ట్ చేయవు, డబ్బు అడగవు. కాల్ కట్ చేసి 1930కి కాల్ చేయండి.'),
        ],
      },
    ],
    costExample: s('₹48,000 taken by a fake "electricity bill" link: called 1930 in 20 minutes → ₹40,000 frozen in the fraud account → returned after the court order.', 'నకిలీ "కరెంట్ బిల్లు" లింక్‌తో ₹48,000 పోయింది: 20 నిమిషాల్లో 1930కి కాల్ → మోసగాడి ఖాతాలో ₹40,000 ఫ్రీజ్ → కోర్టు ఉత్తర్వు తర్వాత తిరిగి వచ్చింది.'),
    problems: [P(['Police station says "go to cyber police station".', '"సైబర్ పోలీస్ స్టేషన్‌కు వెళ్లండి" అని పోలీస్ స్టేషన్ అంటోంది.'], ['The online complaint is valid anywhere. Any police station must accept a complaint (Zero FIR); for amounts above the notified limit an FIR is registered.', 'ఆన్‌లైన్ ఫిర్యాదు ఎక్కడైనా చెల్లుతుంది. ఏ పోలీస్ స్టేషన్ అయినా ఫిర్యాదు స్వీకరించాలి (జీరో FIR); నోటిఫై చేసిన పరిమితికి మించిన మొత్తాలకు FIR నమోదు చేస్తారు.'])],
    afterwards: [s('Lock your Aadhaar biometrics, check SIMs in your name on Sanchar Saathi, and set a daily UPI limit in your bank app.', 'మీ ఆధార్ బయోమెట్రిక్స్ లాక్ చేయండి, సంచార్ సాథీలో మీ పేరుపై SIMలు చూడండి, బ్యాంక్ యాప్‌లో రోజువారీ UPI పరిమితి పెట్టండి.')],
    whereToApply: [s('1930; cybercrime.gov.in; your bank; district cyber police station', '1930; cybercrime.gov.in; మీ బ్యాంక్; జిల్లా సైబర్ పోలీస్ స్టేషన్')],
    timeline: s('Call within the first hour. Bank shadow credit: 10 working days. Court release of frozen money: weeks to months.', 'మొదటి గంటలో కాల్. బ్యాంక్ షాడో క్రెడిట్: 10 పని రోజులు. ఫ్రీజ్ డబ్బు కోర్టు విడుదల: వారాల నుండి నెలలు.'),
    tips: [
      s('No bank, police, courier, electricity board or government officer will ask for OTP, PIN, remote-access apps or "verification payment".', 'ఏ బ్యాంక్, పోలీసు, కొరియర్, విద్యుత్ బోర్డు లేదా ప్రభుత్వ అధికారి OTP, PIN, రిమోట్ యాక్సెస్ యాప్‌లు లేదా "వెరిఫికేషన్ చెల్లింపు" అడగరు.'),
      s('To receive money on UPI you never enter your PIN. If asked for a PIN to "receive", it is a fraud.', 'UPIలో డబ్బు అందుకోవడానికి PIN ఎప్పుడూ వేయనక్కర్లేదు. "అందుకోవడానికి" PIN అడిగితే అది మోసం.'),
    ],
    links: [{ label: 'National Cyber Crime Reporting Portal', url: 'https://cybercrime.gov.in' }, { label: 'RBI complaint portal', url: 'https://cms.rbi.org.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── SANCHAR SAATHI
  {
    id: 'sanchar-saathi',
    category: 'digital',
    level: 'central',
    title: s('SIMs in your name, lost phone block, fraud calls — Sanchar Saathi', 'మీ పేరుపై SIMలు, పోయిన ఫోన్ బ్లాక్, మోసపూరిత కాల్స్ — సంచార్ సాథీ'),
    summary: s(
      'The government\'s Sanchar Saathi portal and app let you see every mobile number taken in your name (and report the ones that aren\'t yours), block a lost or stolen phone so it can\'t be used anywhere in India, check if a second-hand phone is genuine or stolen, and report fraud calls and SMS (Chakshu).',
      'ప్రభుత్వ సంచార్ సాథీ పోర్టల్, యాప్ ద్వారా మీ పేరుపై తీసుకున్న ప్రతి మొబైల్ నంబర్ చూడవచ్చు (మీవి కాని వాటిని రిపోర్ట్ చేయవచ్చు), పోయిన లేదా దొంగిలించిన ఫోన్‌ను దేశంలో ఎక్కడా వాడలేకుండా బ్లాక్ చేయవచ్చు, సెకండ్-హ్యాండ్ ఫోన్ అసలైనదా దొంగిలించినదా తెలుసుకోవచ్చు, మోసపూరిత కాల్స్, SMS రిపోర్ట్ చేయవచ్చు (చక్షు).',
    ),
    keywords: ['sanchar saathi', 'sim in my name', 'how many sims', 'tafcop', 'ceir', 'lost phone', 'stolen phone', 'mobile stolen', 'block phone', 'imei', 'second hand phone', 'chakshu', 'fraud call report', 'spam call', 'సంచార్ సాథీ', 'ఫోన్ పోయింది', 'మొబైల్ దొంగతనం', 'SIM', 'IMEI'],
    whoCanApply: [s('Any mobile user', 'ఏ మొబైల్ వినియోగదారుడైనా')],
    documents: [s('Your mobile number (OTP); for a lost phone: IMEI number (box / bill or dial *#06#), police report, ID', 'మీ మొబైల్ నంబర్ (OTP); పోయిన ఫోన్‌కు: IMEI నంబర్ (బాక్స్ / బిల్లు లేదా *#06# డయల్), పోలీసు రిపోర్ట్, ఐడీ')],
    fees: [fee(s('All services', 'అన్ని సేవలు'), s('Free', 'ఉచితం'))],
    steps: [
      s('Open sancharsaathi.gov.in or the Sanchar Saathi app.', 'sancharsaathi.gov.in లేదా సంచార్ సాథీ యాప్ తెరవండి.'),
      s('Choose the service and verify with OTP.', 'సేవ ఎంచుకుని OTPతో ధృవీకరించండి.'),
    ],
    stages: [
      {
        title: s('Check SIMs in your name', 'మీ పేరుపై SIMలు చూడడం'),
        steps: [
          s('"Know your mobile connections" → enter your number → OTP. All numbers linked to your ID are listed.', '"Know your mobile connections" → మీ నంబర్ → OTP. మీ ఐడీకి లింక్ అయిన అన్ని నంబర్లు కనిపిస్తాయి.'),
          s('Mark unknown ones "Not my number" — they get re-verified / disconnected. (A person can have at most 9 connections.)', 'తెలియనివాటిని "Not my number"గా గుర్తించండి — తిరిగి ధృవీకరిస్తారు / కట్ చేస్తారు. (ఒక వ్యక్తికి గరిష్టంగా 9 కనెక్షన్లు.)'),
        ],
      },
      {
        title: s('Lost / stolen phone', 'పోయిన / దొంగిలించిన ఫోన్'),
        steps: [
          s('Report the loss to police (AP Police citizen portal / station) and get the report number.', 'పోలీసులకు నష్టం రిపోర్ట్ చేసి (AP పోలీస్ సిటిజన్ పోర్టల్ / స్టేషన్) రిపోర్ట్ నంబర్ పొందండి.'),
          s('Get a duplicate SIM of your number from the operator (needed for OTP).', 'ఆపరేటర్ నుండి మీ నంబర్ డూప్లికేట్ SIM తీసుకోండి (OTPకి అవసరం).'),
          s('"Block your lost / stolen mobile" → IMEI(s), brand, model, bill (optional), police report, your ID → OTP → submit. Keep the request ID.', '"Block your lost / stolen mobile" → IMEI(లు), బ్రాండ్, మోడల్, బిల్లు (ఐచ్ఛికం), పోలీసు రిపోర్ట్, మీ ఐడీ → OTP → సబ్మిట్. రిక్వెస్ట్ ID దాచుకోండి.'),
          s('If the phone is used with any SIM, police are alerted. Found it? Use "Unblock found mobile" with the request ID.', 'ఏ SIMతోనైనా ఫోన్ వాడితే పోలీసులకు సమాచారం. దొరికిందా? రిక్వెస్ట్ IDతో "Unblock found mobile" వాడండి.'),
        ],
      },
      {
        title: s('Before buying a used phone', 'వాడిన ఫోన్ కొనే ముందు'),
        steps: [
          s('"Know genuineness of your mobile" → enter the IMEI (dial *#06# on the phone). It shows if it is genuine, duplicate or blacklisted (stolen).', '"Know genuineness of your mobile" → IMEI నమోదు (ఫోన్‌లో *#06# డయల్). అసలైనదా, నకిలీదా, బ్లాక్‌లిస్ట్ (దొంగిలించినది)దా చూపిస్తుంది.'),
        ],
      },
      {
        title: s('Report fraud calls / SMS (Chakshu)', 'మోసపూరిత కాల్స్ / SMS రిపోర్ట్ (చక్షు)'),
        steps: [
          s('"Chakshu — report suspected fraud communication" → choose call / SMS / WhatsApp → the number, date, time, screenshot → OTP → submit.', '"Chakshu — report suspected fraud communication" → కాల్ / SMS / వాట్సాప్ ఎంచుకుని → నంబర్, తేదీ, సమయం, స్క్రీన్‌షాట్ → OTP → సబ్మిట్.'),
          s('Calls from abroad showing an Indian (+91) number pretending to be officials: report under "Report incoming international call with Indian number".', 'అధికారులుగా నటిస్తూ భారత (+91) నంబర్‌తో విదేశాల నుండి వచ్చే కాల్స్: "Report incoming international call with Indian number"లో రిపోర్ట్ చేయండి.'),
          s('Already lost money? Don\'t use Chakshu — call 1930.', 'ఇప్పటికే డబ్బు పోయిందా? చక్షు కాదు — 1930కి కాల్ చేయండి.'),
        ],
      },
    ],
    costExample: s('Free.', 'ఉచితం.'),
    whereToApply: [s('sancharsaathi.gov.in / Sanchar Saathi app', 'sancharsaathi.gov.in / సంచార్ సాథీ యాప్')],
    timeline: s('Checks: instant. Phone block: usually within a day.', 'తనిఖీలు: వెంటనే. ఫోన్ బ్లాక్: సాధారణంగా ఒక రోజులో.'),
    tips: [s('Write your phone\'s IMEI numbers somewhere safe today (dial *#06#).', 'ఈరోజే మీ ఫోన్ IMEI నంబర్లను సురక్షితంగా రాసుకోండి (*#06# డయల్).')],
    links: [{ label: 'Sanchar Saathi', url: 'https://sancharsaathi.gov.in' }],
    lastChecked: CHECKED,
  },
];

export const transportDir: XDir[] = [
  D('new-vehicle-registration', 'transport', ['Dealer registration, HSRP, life tax, fancy / BH number, other-state vehicle', 'డీలర్ నమోదు, HSRP, లైఫ్ ట్యాక్స్, ఫ్యాన్సీ / BH నంబర్, ఇతర రాష్ట్ర వాహనం'], ['Dealer; vahan.parivahan.gov.in', 'డీలర్; vahan.parivahan.gov.in']),
  D('licence-renewal-services', 'transport', ['Renew, duplicate, address change, international permit (₹1,000)', 'రెన్యువల్, డూప్లికేట్, చిరునామా మార్పు, అంతర్జాతీయ పర్మిట్ (₹1,000)'], ['sarathi.parivahan.gov.in → RTO', 'sarathi.parivahan.gov.in → RTO']),
  D('road-accident-help', 'transport', ['Cashless treatment ₹1.5 lakh; MACT claim in 6 months; hit-and-run ₹2 lakh', 'నగదు రహిత చికిత్స ₹1.5 లక్షలు; 6 నెలల్లో MACT క్లెయిమ్; హిట్ అండ్ రన్ ₹2 లక్షలు'], ['108 / 112; MACT; RDO', '108 / 112; MACT; RDO']),
  D('vehicle-insurance-claim', 'transport', ['Renew, damage claim, theft claim, complaints', 'రెన్యువల్, నష్ట క్లెయిమ్, దొంగతనం క్లెయిమ్, ఫిర్యాదులు'], ['Insurer; Bima Bharosa; Ombudsman', 'బీమా సంస్థ; బీమా భరోసా; అంబుడ్స్‌మన్']),
  D('cyber-fraud', 'police', ['Call 1930 in the first hour; bank zero liability if reported in 3 days', 'మొదటి గంటలో 1930; 3 రోజుల్లో తెలియజేస్తే బ్యాంక్ బాధ్యత శూన్యం'], ['1930; cybercrime.gov.in', '1930; cybercrime.gov.in']),
  D('sanchar-saathi', 'ids', ['SIMs in your name, block lost phone, check IMEI, report fraud calls', 'మీ పేరుపై SIMలు, పోయిన ఫోన్ బ్లాక్, IMEI తనిఖీ, మోసపూరిత కాల్స్ రిపోర్ట్'], ['sancharsaathi.gov.in', 'sancharsaathi.gov.in']),
];
