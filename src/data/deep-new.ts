import { Guide } from '../types';
import { b, fee, CHECKED } from './bi';

const s = (en: string, te: string) => b(en, te);
const P = (problem: [string, string], fix: [string, string]) => ({ problem: s(...problem), fix: s(...fix) });

/** New services added with full walkthroughs (checked 20 Oct 2026). */
export const newGuides: Guide[] = [
  {
    id: 'commercial-vehicle-papers',
    category: 'transport',
    level: 'both',
    title: s('Lorry, auto, taxi papers — permit, fitness and road tax', 'లారీ, ఆటో, ట్యాక్సీ పత్రాలు — పర్మిట్, ఫిట్‌నెస్, రోడ్డు పన్ను'),
    summary: s(
      'A vehicle used to earn money (lorry, tipper, goods auto, passenger auto, taxi, bus) is a "transport vehicle". Besides RC and insurance it needs three things kept valid: a permit (where it may run), a fitness certificate (tested roadworthy), and quarterly road tax. All three are applied and paid on the Vahan / Parivahan portal; fitness needs the vehicle to be tested. Expired papers mean heavy fines, seizure and insurance claims being rejected.',
      'డబ్బు సంపాదించడానికి వాడే వాహనం (లారీ, టిప్పర్, గూడ్స్ ఆటో, ప్యాసింజర్ ఆటో, ట్యాక్సీ, బస్సు) "రవాణా వాహనం". RC, బీమాతో పాటు మూడు చెల్లుబాటులో ఉండాలి: పర్మిట్ (ఎక్కడ నడపవచ్చు), ఫిట్‌నెస్ సర్టిఫికెట్ (రోడ్డుకు తగినదని పరీక్ష), త్రైమాసిక రోడ్డు పన్ను. మూడూ Vahan / Parivahan పోర్టల్‌లో దరఖాస్తు, చెల్లింపు; ఫిట్‌నెస్‌కు వాహన పరీక్ష కావాలి. గడువు ముగిసిన పత్రాలు అంటే భారీ జరిమానాలు, వాహన స్వాధీనం, బీమా క్లెయిమ్ తిరస్కరణ.',
    ),
    keywords: ['permit', 'national permit', 'goods permit', 'fitness', 'fitness certificate', 'FC', 'road tax', 'quarterly tax', 'vehicle tax', 'transport vehicle', 'commercial vehicle', 'lorry permit', 'auto permit', 'taxi permit', 'tax pay', 'పర్మిట్', 'ఫిట్‌నెస్', 'రోడ్డు పన్ను', 'వాహన పన్ను', 'త్రైమాసిక పన్ను'],
    whoCanApply: [
      s('Owner of a goods or passenger transport vehicle registered in AP', 'APలో నమోదైన సరుకు లేదా ప్రయాణికుల రవాణా వాహన యజమాని'),
    ],
    documents: [
      s('RC (vehicle registration), valid insurance and pollution (PUC) certificate', 'RC (వాహన నమోదు), చెల్లుబాటయ్యే బీమా, కాలుష్య (PUC) సర్టిఫికెట్'),
      s('Owner\'s Aadhaar with linked mobile; PAN for national permit', 'లింక్ మొబైల్‌తో యజమాని ఆధార్; నేషనల్ పర్మిట్‌కు PAN'),
      s('Tax paid up to date (fitness and permit are refused if tax is pending)', 'తాజా వరకు పన్ను చెల్లింపు (పన్ను బకాయి ఉంటే ఫిట్‌నెస్, పర్మిట్ ఇవ్వరు)'),
      s('For fitness: reflective tape, speed governor (where required), VLTD / GPS device and fire extinguisher fitted as per class', 'ఫిట్‌నెస్‌కు: తరగతి ప్రకారం రిఫ్లెక్టివ్ టేప్, స్పీడ్ గవర్నర్ (అవసరమైనచోట), VLTD / GPS పరికరం, అగ్నిమాపక యంత్రం అమర్చి ఉండాలి'),
    ],
    fees: [
      fee(s('Quarterly road tax', 'త్రైమాసిక రోడ్డు పన్ను'), s('By vehicle type and weight / seats — Vahan shows the exact amount; pay before the quarter starts', 'వాహన రకం, బరువు / సీట్లను బట్టి — Vahan ఖచ్చితమైన మొత్తం చూపిస్తుంది; త్రైమాసికం మొదలయ్యే ముందే చెల్లించండి')),
      fee(s('Fitness test', 'ఫిట్‌నెస్ పరీక్ష'), s('By vehicle class, shown at booking; ₹50 per day extra once fitness has expired', 'వాహన తరగతిని బట్టి, బుకింగ్‌లో చూపిస్తారు; ఫిట్‌నెస్ గడువు ముగిశాక రోజుకు ₹50 అదనం')),
      fee(s('National permit authorisation', 'నేషనల్ పర్మిట్ అథరైజేషన్'), s('₹16,500 a year (paid online), plus the home-state permit fee', 'ఏడాదికి ₹16,500 (ఆన్‌లైన్), అదనంగా సొంత రాష్ట్ర పర్మిట్ ఫీజు')),
    ],
    steps: [
      s('Pay quarterly tax on Vahan before each quarter.', 'ప్రతి త్రైమాసికానికి ముందు Vahanలో పన్ను చెల్లించండి.'),
      s('Book and pass the fitness test before the FC expires.', 'FC గడువుకు ముందే ఫిట్‌నెస్ పరీక్ష బుక్ చేసి పాస్ అవ్వండి.'),
      s('Apply / renew the permit on Vahan before it expires.', 'గడువుకు ముందే Vahanలో పర్మిట్ దరఖాస్తు / రెన్యువల్ చేయండి.'),
    ],
    stages: [
      {
        title: s('Pay road tax (every quarter)', 'రోడ్డు పన్ను చెల్లింపు (ప్రతి త్రైమాసికం)'),
        steps: [
          s('Open vahan.parivahan.gov.in → "Online Services" → "Vehicle Related Services" → choose Andhra Pradesh → enter vehicle number.', 'vahan.parivahan.gov.in → "Online Services" → "Vehicle Related Services" → ఆంధ్రప్రదేశ్ ఎంచుకుని → వాహన నంబర్.'),
          s('Choose "Pay your tax" → enter the last 5 characters of the chassis number → mobile OTP.', '"Pay your tax" ఎంచుకుని → ఛాసిస్ నంబర్ చివరి 5 అక్షరాలు → మొబైల్ OTP.'),
          s('Select the tax mode (quarterly / half-yearly / yearly where allowed); the amount and any penalty are shown.', 'పన్ను విధానం ఎంచుకోండి (త్రైమాసిక / అర్ధ వార్షిక / వార్షిక అనుమతి ఉన్నచోట); మొత్తం, ఏదైనా జరిమానా చూపిస్తుంది.'),
          s('Pay by UPI / net banking; download the tax receipt and keep it in the vehicle (or in DigiLocker / mParivahan).', 'UPI / నెట్ బ్యాంకింగ్‌తో చెల్లించండి; పన్ను రసీదు డౌన్‌లోడ్ చేసి వాహనంలో ఉంచండి (లేదా డిజిలాకర్ / mParivahanలో).'),
        ],
        note: s('Vehicle not used for a quarter (repair, no work)? Apply for "non-use" to the RTO BEFORE the quarter, and surrender the RC — otherwise tax is due.', 'త్రైమాసికం వాహనం వాడకపోతే (మరమ్మత్తు, పని లేదు)? త్రైమాసికానికి ముందే RTOకు "non-use" దరఖాస్తు చేసి RC సరెండర్ చేయండి — లేకపోతే పన్ను కట్టాలి.'),
      },
      {
        title: s('Fitness certificate (FC)', 'ఫిట్‌నెస్ సర్టిఫికెట్ (FC)'),
        steps: [
          s('Check the FC expiry on your RC / mParivahan. New transport vehicles get 2 years; up to 8 years old it is renewed for 2 years, after that every year.', 'మీ RC / mParivahanలో FC గడువు చూడండి. కొత్త రవాణా వాహనాలకు 2 సంవత్సరాలు; 8 ఏళ్ల వరకు 2 సంవత్సరాలకు, తర్వాత ప్రతి ఏడాది రెన్యువల్.'),
          s('Vahan → "Fitness related services" → "Renewal of fitness" → OTP → pay the fee → book a slot at the RTO / MVI ground or the automated testing station for your area.', 'Vahan → "Fitness related services" → "Renewal of fitness" → OTP → ఫీజు → మీ ప్రాంత RTO / MVI గ్రౌండ్ లేదా ఆటోమేటెడ్ టెస్టింగ్ స్టేషన్‌లో స్లాట్ బుక్ చేయండి.'),
          s('Before the test, fix: brakes, lights and indicators, horn, tyres, wipers, reflectors / reflective tape, speed governor and GPS device (if required), no oil leaks, clean number plates (HSRP).', 'పరీక్షకు ముందు సరిచేయండి: బ్రేకులు, లైట్లు, ఇండికేటర్లు, హారన్, టైర్లు, వైపర్లు, రిఫ్లెక్టర్లు / రిఫ్లెక్టివ్ టేప్, స్పీడ్ గవర్నర్, GPS పరికరం (అవసరమైతే), ఆయిల్ లీక్‌లు లేకుండా, శుభ్రమైన నంబర్ ప్లేట్లు (HSRP).'),
          s('Take the vehicle with RC, insurance, PUC and tax receipt. The inspector / machines test it.', 'RC, బీమా, PUC, పన్ను రసీదుతో వాహనాన్ని తీసుకెళ్లండి. ఇన్‌స్పెక్టర్ / యంత్రాలు పరీక్షిస్తాయి.'),
          s('Passed: the new FC is updated on Vahan — download it. Failed: repair the listed defects and re-test.', 'పాసైతే: కొత్త FC Vahanలో అప్‌డేట్ — డౌన్‌లోడ్ చేయండి. ఫెయిలైతే: చెప్పిన లోపాలు సరిచేసి మళ్లీ పరీక్ష.'),
        ],
      },
      {
        title: s('Permit', 'పర్మిట్'),
        steps: [
          s('Know the type: goods permit (state), national permit (lorries across India), contract carriage (taxi / auto / tourist bus), stage carriage (route buses).', 'రకం తెలుసుకోండి: గూడ్స్ పర్మిట్ (రాష్ట్రం), నేషనల్ పర్మిట్ (దేశమంతా లారీలు), కాంట్రాక్ట్ క్యారేజ్ (ట్యాక్సీ / ఆటో / టూరిస్ట్ బస్సు), స్టేజ్ క్యారేజ్ (రూట్ బస్సులు).'),
          s('Vahan → "Permit related services" → new permit / renewal → fill details → upload RC, insurance, FC, tax receipt → pay → submit to the RTA.', 'Vahan → "Permit related services" → కొత్త పర్మిట్ / రెన్యువల్ → వివరాలు నింపి → RC, బీమా, FC, పన్ను రసీదు అప్‌లోడ్ → చెల్లింపు → RTAకు సమర్పణ.'),
          s('National permit: after the home-state permit, pay the yearly authorisation (₹16,500) online on the national permit portal; print the authorisation.', 'నేషనల్ పర్మిట్: సొంత రాష్ట్ర పర్మిట్ తర్వాత వార్షిక అథరైజేషన్ (₹16,500) నేషనల్ పర్మిట్ పోర్టల్‌లో ఆన్‌లైన్ చెల్లించి ప్రింట్ తీసుకోండి.'),
          s('Renew before expiry; going to another state on a temporary trip needs a temporary / special permit and that state\'s entry tax where applicable.', 'గడువుకు ముందే రెన్యువల్; తాత్కాలిక ప్రయాణంపై ఇంకో రాష్ట్రానికి వెళ్తే తాత్కాలిక / ప్రత్యేక పర్మిట్, వర్తిస్తే ఆ రాష్ట్ర ప్రవేశ పన్ను కావాలి.'),
        ],
      },
    ],
    costExample: s(
      'A goods auto: pay the quarterly tax shown on Vahan four times a year + fitness test fee every 2 years (yearly after 8 years) + permit renewal when due. Missing fitness by one month = ₹1,500 extra late fee (₹50 × 30 days).',
      'ఒక గూడ్స్ ఆటో: Vahanలో చూపిన త్రైమాసిక పన్ను ఏడాదికి నాలుగుసార్లు + ప్రతి 2 సంవత్సరాలకు (8 ఏళ్ల తర్వాత ప్రతి ఏడాది) ఫిట్‌నెస్ ఫీజు + గడువుకు పర్మిట్ రెన్యువల్. ఫిట్‌నెస్ ఒక నెల ఆలస్యం = ₹1,500 అదనపు ఆలస్య ఫీజు (₹50 × 30 రోజులు).',
    ),
    problems: [
      P(['Tax payment shows old pending challans or penalty.', 'పన్ను చెల్లింపులో పాత పెండింగ్ చలాన్లు లేదా జరిమానా చూపిస్తోంది.'], ['Clear e-challans on echallan.parivahan.gov.in first; for a wrong penalty, meet the RTO with receipts.', 'ముందు echallan.parivahan.gov.inలో e-చలాన్లు క్లియర్ చేయండి; తప్పు జరిమానాకు రసీదులతో RTOను కలవండి.']),
      P(['Vehicle failed fitness again and again.', 'వాహనం మళ్లీ మళ్లీ ఫిట్‌నెస్‌లో ఫెయిల్ అవుతోంది.'], ['Ask for the written defect list; get it repaired at a proper garage. Very old vehicles may be better scrapped — a scrapping certificate gives a discount on a new vehicle\'s tax.', 'లోపాల జాబితా రాతపూర్వకంగా అడగండి; సరైన గ్యారేజీలో రిపేర్ చేయించండి. బాగా పాత వాహనాలను స్క్రాప్ చేయడం మేలు — స్క్రాపింగ్ సర్టిఫికెట్ కొత్త వాహన పన్నులో రాయితీ ఇస్తుంది.']),
      P(['Agent asks extra to "pass" fitness.', 'ఫిట్‌నెస్ "పాస్" చేయిస్తామని ఏజెంట్ అదనం అడుగుతున్నారు.'], ['Don\'t pay. Book and pay online yourself; report bribe demands to ACB 14400.', 'చెల్లించకండి. మీరే ఆన్‌లైన్‌లో బుక్ చేసి చెల్లించండి; లంచం అడిగితే ACB 14400కి తెలియజేయండి.']),
    ],
    afterwards: [
      s('Set phone reminders: tax 1 week before each quarter (Jan, Apr, Jul, Oct), FC and permit 1 month before expiry.', 'ఫోన్ రిమైండర్లు పెట్టుకోండి: ప్రతి త్రైమాసికానికి (జనవరి, ఏప్రిల్, జూలై, అక్టోబర్) 1 వారం ముందు పన్ను, గడువుకు 1 నెల ముందు FC, పర్మిట్.'),
      s('Auto / taxi drivers who own their vehicle: check the Auto Drivers Sevalo guide for yearly support.', 'సొంత వాహనం ఉన్న ఆటో / ట్యాక్సీ డ్రైవర్లు: వార్షిక సహాయం కోసం ఆటో డ్రైవర్ల సేవలో గైడ్ చూడండి.'),
    ],
    whereToApply: [s('vahan.parivahan.gov.in (tax, fitness, permit)', 'vahan.parivahan.gov.in (పన్ను, ఫిట్‌నెస్, పర్మిట్)'), s('RTO / MVI office or automated testing station for the fitness test', 'ఫిట్‌నెస్ పరీక్షకు RTO / MVI కార్యాలయం లేదా ఆటోమేటెడ్ టెస్టింగ్ స్టేషన్')],
    timeline: s('Tax: instant. Fitness: on the test day if passed. Permit: usually a few days to weeks.', 'పన్ను: వెంటనే. ఫిట్‌నెస్: పాసైతే పరీక్ష రోజే. పర్మిట్: సాధారణంగా కొన్ని రోజుల నుండి వారాలు.'),
    tips: [
      s('Driving with expired fitness or permit voids insurance for many claims — never risk it.', 'గడువు ముగిసిన ఫిట్‌నెస్ లేదా పర్మిట్‌తో నడిపితే చాలా క్లెయిమ్‌లకు బీమా చెల్లదు — ఎప్పుడూ రిస్క్ తీసుకోకండి.'),
      s('Small goods vehicles up to 7,500 kg can be driven on an LMV licence, but the vehicle still needs permit, fitness and tax.', '7,500 కిలోల వరకు చిన్న సరుకు వాహనాలను LMV లైసెన్స్‌తో నడపవచ్చు, కానీ వాహనానికి పర్మిట్, ఫిట్‌నెస్, పన్ను తప్పనిసరి.'),
    ],
    links: [{ label: 'Vahan — vehicle services', url: 'https://vahan.parivahan.gov.in' }],
    lastChecked: CHECKED,
  },

  {
    id: 'rc-services',
    category: 'transport',
    level: 'both',
    title: s('RC services — remove bank loan, duplicate RC, address change', 'RC సేవలు — బ్యాంక్ రుణం తొలగింపు, డూప్లికేట్ RC, చిరునామా మార్పు'),
    summary: s(
      'After you finish a vehicle loan, the bank\'s name ("hypothecation") stays on your RC until you get it removed — you need this to sell the vehicle or claim insurance in your own name. If the RC is lost you can get a duplicate, and if you move you should change the address. All are online on Vahan with small fees.',
      'వాహన రుణం పూర్తయ్యాక కూడా మీరు తొలగించే వరకు బ్యాంక్ పేరు ("హైపోథెకేషన్") మీ RCపై ఉంటుంది — వాహనం అమ్మడానికి లేదా మీ పేరుపై బీమా క్లెయిమ్ చేయడానికి దీన్ని తొలగించాలి. RC పోతే డూప్లికేట్ పొందవచ్చు, ఇల్లు మారితే చిరునామా మార్చాలి. అన్నీ Vahanలో ఆన్‌లైన్, చిన్న ఫీజులతో.',
    ),
    keywords: ['hypothecation', 'loan removal rc', 'hp termination', 'form 35', 'bank noc', 'duplicate rc', 'rc lost', 'form 26', 'address change rc', 'form 33', 'rc card', 'hsrp', 'number plate', 'హైపోథెకేషన్', 'డూప్లికేట్ RC', 'RC పోయింది', 'నంబర్ ప్లేట్'],
    whoCanApply: [s('Registered owner of the vehicle', 'వాహనం నమోదిత యజమాని')],
    documents: [
      s('Remove loan: bank\'s NOC and Form 35 signed by owner and bank (both copies), insurance and PUC', 'రుణం తొలగింపు: బ్యాంక్ NOC, యజమాని, బ్యాంక్ సంతకం చేసిన ఫారం 35 (రెండు కాపీలు), బీమా, PUC'),
      s('Duplicate RC: police lost report (or the damaged RC), Form 26, insurance, PUC', 'డూప్లికేట్ RC: పోలీసు లాస్ట్ రిపోర్ట్ (లేదా దెబ్బతిన్న RC), ఫారం 26, బీమా, PUC'),
      s('Address change: new address proof (Aadhaar), Form 33, insurance, PUC', 'చిరునామా మార్పు: కొత్త చిరునామా రుజువు (ఆధార్), ఫారం 33, బీమా, PUC'),
    ],
    fees: [
      fee(s('Each service', 'ప్రతి సేవ'), s('Small fixed fee by vehicle type + card / postal charges — shown on Vahan before payment', 'వాహన రకం ప్రకారం చిన్న స్థిర ఫీజు + కార్డు / పోస్టల్ ఛార్జీలు — చెల్లింపుకు ముందు Vahanలో చూపిస్తుంది')),
    ],
    steps: [
      s('Collect the bank NOC / police report / address proof.', 'బ్యాంక్ NOC / పోలీసు రిపోర్ట్ / చిరునామా రుజువు తీసుకోండి.'),
      s('Apply on Vahan → Vehicle Related Services, pay and upload.', 'Vahan → Vehicle Related Servicesలో దరఖాస్తు, చెల్లింపు, అప్‌లోడ్.'),
      s('Download the updated RC; the card comes by post.', 'అప్‌డేట్ అయిన RC డౌన్‌లోడ్; కార్డు పోస్ట్‌లో వస్తుంది.'),
    ],
    stages: [
      {
        title: s('Remove the bank loan (hypothecation)', 'బ్యాంక్ రుణం (హైపోథెకేషన్) తొలగింపు'),
        steps: [
          s('After the last EMI, ask the bank for the loan closure letter, NOC addressed to the RTO, and Form 35 signed and stamped by the bank (valid about 90 days — use it quickly).', 'చివరి EMI తర్వాత బ్యాంక్‌ను రుణ ముగింపు లేఖ, RTOకు రాసిన NOC, బ్యాంక్ సంతకం, స్టాంప్‌తో ఫారం 35 అడగండి (సుమారు 90 రోజులు చెల్లుతుంది — త్వరగా వాడండి).'),
          s('Many banks now send the closure electronically to Vahan — check first whether "Hypothecation termination" is already pending / done for your number.', 'చాలా బ్యాంకులు ఇప్పుడు ముగింపును ఎలక్ట్రానిక్‌గా Vahanకి పంపుతాయి — మీ నంబర్‌కు "Hypothecation termination" ఇప్పటికే పెండింగ్ / పూర్తైందో ముందు చూడండి.'),
          s('Vahan → Vehicle Related Services → Andhra Pradesh → vehicle number → "Hypothecation Termination" → chassis last 5 + OTP → fill bank details → pay → upload NOC and Form 35.', 'Vahan → Vehicle Related Services → ఆంధ్రప్రదేశ్ → వాహన నంబర్ → "Hypothecation Termination" → ఛాసిస్ చివరి 5 + OTP → బ్యాంక్ వివరాలు → చెల్లింపు → NOC, ఫారం 35 అప్‌లోడ్.'),
          s('Submit the physical documents at the RTO if asked. After approval, the new RC without the bank\'s name is posted / downloadable.', 'అడిగితే భౌతిక పత్రాలు RTOలో ఇవ్వండి. ఆమోదం తర్వాత బ్యాంక్ పేరు లేని కొత్త RC పోస్ట్‌లో / డౌన్‌లోడ్‌కు.'),
          s('Tell your insurance company so the bank is removed from the policy too.', 'పాలసీ నుండి కూడా బ్యాంక్ తొలగించేలా మీ బీమా కంపెనీకి చెప్పండి.'),
        ],
      },
      {
        title: s('Duplicate RC', 'డూప్లికేట్ RC'),
        steps: [
          s('RC lost / stolen: get a lost report from the police (AP Police citizen portal / station).', 'RC పోయినా / దొంగిలించినా: పోలీసుల నుండి లాస్ట్ రిపోర్ట్ తీసుకోండి (AP పోలీస్ సిటిజన్ పోర్టల్ / స్టేషన్).'),
          s('Vahan → "Issue of Duplicate RC" → OTP → reason → pay → upload Form 26, police report, insurance, PUC.', 'Vahan → "Issue of Duplicate RC" → OTP → కారణం → చెల్లింపు → ఫారం 26, పోలీసు రిపోర్ట్, బీమా, PUC అప్‌లోడ్.'),
          s('Meanwhile, the digital RC in DigiLocker / mParivahan is valid for checking.', 'ఈలోగా, డిజిలాకర్ / mParivahanలోని డిజిటల్ RC తనిఖీకి చెల్లుతుంది.'),
        ],
      },
      {
        title: s('Change address on RC', 'RCపై చిరునామా మార్పు'),
        steps: [
          s('Within 30 days of moving: Vahan → "Change of Address" → OTP → new address → pay → upload Form 33 and Aadhaar.', 'ఇల్లు మారిన 30 రోజుల్లో: Vahan → "Change of Address" → OTP → కొత్త చిరునామా → చెల్లింపు → ఫారం 33, ఆధార్ అప్‌లోడ్.'),
          s('Moved to another RTO area in AP: choose the new RTO; you may need to show the vehicle there.', 'APలో ఇంకో RTO ప్రాంతానికి మారితే: కొత్త RTO ఎంచుకోండి; అక్కడ వాహనం చూపించాల్సి రావచ్చు.'),
        ],
      },
    ],
    costExample: s('Each service: a small fee + post charges, all shown before payment — far less than an agent\'s charge.', 'ప్రతి సేవ: చిన్న ఫీజు + పోస్టల్ ఛార్జీలు, చెల్లింపుకు ముందు అన్నీ చూపిస్తారు — ఏజెంట్ ఛార్జీ కంటే చాలా తక్కువ.'),
    problems: [
      P(['Mobile number on RC is old / wrong, OTP doesn\'t come.', 'RCపై మొబైల్ నంబర్ పాతది / తప్పు, OTP రావడం లేదు.'], ['Use "Update mobile number" on Vahan with Aadhaar authentication, or visit the RTO.', 'ఆధార్ ధృవీకరణతో Vahanలో "Update mobile number" వాడండి, లేదా RTOకు వెళ్లండి.']),
      P(['Bank NOC expired.', 'బ్యాంక్ NOC గడువు ముగిసింది.'], ['Ask the bank for a fresh NOC and Form 35.', 'బ్యాంక్‌ను కొత్త NOC, ఫారం 35 అడగండి.']),
    ],
    whereToApply: [s('vahan.parivahan.gov.in', 'vahan.parivahan.gov.in'), s('Your RTO office', 'మీ RTO కార్యాలయం')],
    timeline: s('Usually 1–3 weeks; the card comes by speed post.', 'సాధారణంగా 1–3 వారాలు; కార్డు స్పీడ్ పోస్ట్‌లో వస్తుంది.'),
    tips: [
      s('Remove hypothecation soon after closing the loan — selling later becomes a headache if the bank branch has merged or moved.', 'రుణం ముగిసిన వెంటనే హైపోథెకేషన్ తొలగించండి — బ్యాంక్ బ్రాంచ్ విలీనమైతే లేదా మారితే తర్వాత అమ్మడం కష్టమవుతుంది.'),
      s('Selling the vehicle? See the "Vehicle ownership transfer" guide.', 'వాహనం అమ్ముతున్నారా? "వాహన యాజమాన్య బదిలీ" గైడ్ చూడండి.'),
    ],
    links: [{ label: 'Vahan — vehicle services', url: 'https://vahan.parivahan.gov.in' }],
    lastChecked: CHECKED,
  },

  {
    id: 'police-verification-certificate',
    category: 'safety',
    level: 'both',
    title: s('Police verification / clearance certificate (for jobs and going abroad)', 'పోలీస్ వెరిఫికేషన్ / క్లియరెన్స్ సర్టిఫికెట్ (ఉద్యోగాలకు, విదేశాలకు)'),
    summary: s(
      'Employers, landlords and foreign visas often ask for proof that you have no criminal case. For a job, rental or other use within India, apply to AP Police for a police verification certificate online. For a job or visa abroad, apply for a Police Clearance Certificate (PCC) on Passport Seva — it is issued by the Passport Office after police checks.',
      'యజమానులు, ఇంటి యజమానులు, విదేశీ వీసాలు మీపై క్రిమినల్ కేసు లేదని రుజువు అడుగుతుంటాయి. భారత్‌లో ఉద్యోగం, అద్దె లేదా ఇతర అవసరాలకు AP పోలీసులకు ఆన్‌లైన్‌లో పోలీస్ వెరిఫికేషన్ సర్టిఫికెట్‌కు దరఖాస్తు చేయండి. విదేశాల్లో ఉద్యోగం లేదా వీసాకు పాస్‌పోర్ట్ సేవలో పోలీస్ క్లియరెన్స్ సర్టిఫికెట్ (PCC)కు దరఖాస్తు చేయండి — పోలీసు తనిఖీ తర్వాత పాస్‌పోర్ట్ కార్యాలయం ఇస్తుంది.',
    ),
    keywords: ['police verification', 'pcc', 'police clearance', 'character certificate', 'verification certificate', 'conduct certificate', 'antecedent', 'police certificate', 'tenant verification', 'పోలీస్ వెరిఫికేషన్', 'క్లియరెన్స్', 'ప్రవర్తన సర్టిఫికెట్'],
    whoCanApply: [s('Any person living in AP (for the India certificate)', 'APలో నివసించే ఎవరైనా (భారత్ సర్టిఫికెట్‌కు)'), s('Passport holders (for a PCC to go abroad)', 'పాస్‌పోర్ట్ ఉన్నవారు (విదేశాలకు PCC)')],
    documents: [
      s('Aadhaar and address proof; photo', 'ఆధార్, చిరునామా రుజువు; ఫోటో'),
      s('Purpose letter (job offer / employer request) if you have one', 'ఉంటే ప్రయోజన లేఖ (ఉద్యోగ ఆఫర్ / యజమాని అభ్యర్థన)'),
      s('For PCC: passport, and the visa / job offer if asked', 'PCCకు: పాస్‌పోర్ట్, అడిగితే వీసా / ఉద్యోగ ఆఫర్'),
    ],
    fees: [
      fee(s('AP Police verification certificate', 'AP పోలీస్ వెరిఫికేషన్ సర్టిఫికెట్'), s('Shown on the AP Police portal at payment', 'చెల్లింపు సమయంలో AP పోలీస్ పోర్టల్‌లో చూపిస్తారు')),
      fee(s('Passport Seva PCC', 'పాస్‌పోర్ట్ సేవ PCC'), s('₹500', '₹500')),
    ],
    steps: [
      s('India use: apply on the AP Police citizen portal / app.', 'భారత్‌లో వాడకానికి: AP పోలీస్ సిటిజన్ పోర్టల్ / యాప్‌లో దరఖాస్తు.'),
      s('Abroad: apply for PCC on passportindia.gov.in and visit the PSK / POPSK.', 'విదేశాలకు: passportindia.gov.inలో PCCకు దరఖాస్తు చేసి PSK / POPSKకు వెళ్లండి.'),
    ],
    stages: [
      {
        title: s('For use in India (AP Police)', 'భారత్‌లో వాడకానికి (AP పోలీస్)'),
        steps: [
          s('Open citizen.appolice.gov.in (or the AP Police Seva app) → register with mobile OTP.', 'citizen.appolice.gov.in (లేదా AP పోలీస్ సేవ యాప్) తెరిచి → మొబైల్ OTPతో నమోదు.'),
          s('Choose the verification service (e.g. "Police Verification Certificate" / employee or tenant verification) → fill your details, addresses for the last few years, and purpose.', 'వెరిఫికేషన్ సేవ ఎంచుకోండి (ఉదా: "Police Verification Certificate" / ఉద్యోగి లేదా అద్దెదారు వెరిఫికేషన్) → మీ వివరాలు, గత కొన్ని సంవత్సరాల చిరునామాలు, ప్రయోజనం నింపండి.'),
          s('Upload Aadhaar, photo and the purpose letter; pay the fee online; note the application number.', 'ఆధార్, ఫోటో, ప్రయోజన లేఖ అప్‌లోడ్ చేసి; ఫీజు ఆన్‌లైన్‌లో చెల్లించి; అప్లికేషన్ నంబర్ నోట్ చేయండి.'),
          s('The local police station verifies (may call or visit). Download the certificate from the portal when issued.', 'స్థానిక పోలీస్ స్టేషన్ ధృవీకరిస్తుంది (కాల్ చేయవచ్చు లేదా సందర్శించవచ్చు). జారీ అయినప్పుడు పోర్టల్ నుండి సర్టిఫికెట్ డౌన్‌లోడ్ చేయండి.'),
        ],
        note: s('If the online option isn\'t shown for your purpose, give a written request at your police station with the same documents.', 'మీ ప్రయోజనానికి ఆన్‌లైన్ ఆప్షన్ కనిపించకపోతే, అవే పత్రాలతో మీ పోలీస్ స్టేషన్‌లో రాతపూర్వక అభ్యర్థన ఇవ్వండి.'),
      },
      {
        title: s('For going abroad (Passport Seva PCC)', 'విదేశాలకు (పాస్‌పోర్ట్ సేవ PCC)'),
        steps: [
          s('passportindia.gov.in (or mPassport Seva app) → log in → "Apply for Police Clearance Certificate" → fill the form with your present address.', 'passportindia.gov.in (లేదా mPassport Seva యాప్) → లాగిన్ → "Apply for Police Clearance Certificate" → ప్రస్తుత చిరునామాతో ఫారం.'),
          s('Pay ₹500 and book an appointment at the nearest Passport Seva Kendra / Post Office PSK.', '₹500 చెల్లించి దగ్గరి పాస్‌పోర్ట్ సేవా కేంద్రం / పోస్టాఫీసు PSKలో అపాయింట్‌మెంట్ బుక్ చేయండి.'),
          s('Visit with your original passport and address proof. If your police verification is recent and clear, the PCC may be given the same day; otherwise after police verification.', 'అసలు పాస్‌పోర్ట్, చిరునామా రుజువుతో వెళ్లండి. ఇటీవలి పోలీసు వెరిఫికేషన్ క్లియర్‌గా ఉంటే అదే రోజు PCC ఇవ్వవచ్చు; లేకపోతే పోలీసు వెరిఫికేషన్ తర్వాత.'),
          s('Track on the portal; collect the PCC from the PSK or by post as instructed.', 'పోర్టల్‌లో ట్రాక్ చేయండి; సూచించినట్లు PSK నుండి లేదా పోస్ట్‌లో PCC పొందండి.'),
        ],
      },
    ],
    costExample: s('PCC for a Gulf job: ₹500 at Passport Seva. The AP Police certificate fee is shown online.', 'గల్ఫ్ ఉద్యోగానికి PCC: పాస్‌పోర్ట్ సేవలో ₹500. AP పోలీస్ సర్టిఫికెట్ ఫీజు ఆన్‌లైన్‌లో చూపిస్తారు.'),
    problems: [
      P(['Verification pending for weeks.', 'వారాలుగా వెరిఫికేషన్ పెండింగ్.'], ['Visit the police station with the application number; if still stuck, raise it on PGRS or to the SP office.', 'అప్లికేషన్ నంబర్‌తో పోలీస్ స్టేషన్‌కు వెళ్లండి; అప్పటికీ ఆగితే PGRSలో లేదా SP కార్యాలయానికి తెలియజేయండి.']),
      P(['Constable asks money for verification.', 'వెరిఫికేషన్‌కు కానిస్టేబుల్ డబ్బు అడుగుతున్నారు.'], ['It is free beyond the official fee. Refuse and report to ACB 14400.', 'అధికారిక ఫీజు తప్ప ఉచితం. ఒప్పుకోకండి, ACB 14400కి తెలియజేయండి.']),
    ],
    whereToApply: [s('citizen.appolice.gov.in / AP Police Seva app; your police station', 'citizen.appolice.gov.in / AP పోలీస్ సేవ యాప్; మీ పోలీస్ స్టేషన్'), s('passportindia.gov.in and Passport Seva Kendras (PCC)', 'passportindia.gov.in, పాస్‌పోర్ట్ సేవా కేంద్రాలు (PCC)')],
    timeline: s('Usually 1–3 weeks; PCC can be same-day if your records are clear and recent.', 'సాధారణంగా 1–3 వారాలు; రికార్డులు క్లియర్‌గా, ఇటీవలివిగా ఉంటే PCC అదే రోజు రావచ్చు.'),
    tips: [s('Many countries accept a PCC only if it is less than 6 months old — apply close to your visa date.', 'చాలా దేశాలు 6 నెలల లోపు PCCనే అంగీకరిస్తాయి — వీసా తేదీకి దగ్గరలో దరఖాస్తు చేయండి.')],
    links: [{ label: 'AP Police citizen services', url: 'https://citizen.appolice.gov.in' }, { label: 'Passport Seva', url: 'https://www.passportindia.gov.in' }],
    lastChecked: CHECKED,
  },

  {
    id: 'electricity-bill-complaints',
    category: 'power',
    level: 'both',
    title: s('Electricity problems — high bill, faulty meter, no power, name change', 'విద్యుత్ సమస్యలు — ఎక్కువ బిల్లు, మీటర్ లోపం, కరెంట్ లేదు, పేరు మార్పు'),
    summary: s(
      'For any power problem call 1912 (free, 24 hours) or use your DISCOM\'s app / website: APEPDCL (north coastal), APCPDCL (central) or APSPDCL (south). A wrong bill can be corrected and a doubtful meter tested. If the DISCOM doesn\'t solve it, complain to the Consumer Grievance Redressal Forum (CGRF) for free, and then to the Vidyut Ombudsman.',
      'ఏ విద్యుత్ సమస్యకైనా 1912కి కాల్ చేయండి (ఉచితం, 24 గంటలు) లేదా మీ DISCOM యాప్ / వెబ్‌సైట్ వాడండి: APEPDCL (ఉత్తర కోస్తా), APCPDCL (మధ్య), APSPDCL (దక్షిణ). తప్పు బిల్లు సరిచేయవచ్చు, అనుమానాస్పద మీటర్ పరీక్షించవచ్చు. DISCOM పరిష్కరించకపోతే వినియోగదారుల ఫిర్యాదుల పరిష్కార వేదిక (CGRF)కి ఉచితంగా, తర్వాత విద్యుత్ అంబుడ్స్‌మన్‌కు ఫిర్యాదు చేయండి.',
    ),
    keywords: ['current bill', 'electricity bill', 'power bill', 'high bill', 'excess bill', 'meter', 'meter fault', 'meter burnt', 'power cut', 'no current', 'transformer', 'voltage', '1912', 'cgrf', 'ombudsman', 'name change electricity', 'load increase', 'కరెంట్ బిల్లు', 'విద్యుత్ బిల్లు', 'ఎక్కువ బిల్లు', 'మీటర్', 'కరెంట్ లేదు', 'ట్రాన్స్‌ఫార్మర్', 'కరెంట్ పేరు మార్పు'],
    whoCanApply: [s('Any electricity consumer (or occupant)', 'ఏ విద్యుత్ వినియోగదారుడైనా (లేదా నివాసి)')],
    documents: [
      s('Service number (USC / consumer number) from your bill', 'మీ బిల్లు నుండి సర్వీస్ నంబర్ (USC / కన్స్యూమర్ నంబర్)'),
      s('The disputed bill and a photo of the meter reading', 'వివాదాస్పద బిల్లు, మీటర్ రీడింగ్ ఫోటో'),
      s('Name change: sale deed / gift deed / legal heir certificate, Aadhaar, NOC from old owner if available', 'పేరు మార్పు: సేల్ డీడ్ / గిఫ్ట్ డీడ్ / వారసుల సర్టిఫికెట్, ఆధార్, ఉంటే పాత యజమాని NOC'),
    ],
    fees: [
      fee(s('Complaint on 1912, CGRF case', '1912 ఫిర్యాదు, CGRF కేసు'), s('Free', 'ఉచితం')),
      fee(s('Meter testing, name change, load change', 'మీటర్ పరీక్ష, పేరు మార్పు, లోడ్ మార్పు'), s('Small fees as per the DISCOM schedule — shown on the receipt', 'DISCOM షెడ్యూల్ ప్రకారం చిన్న ఫీజులు — రసీదుపై చూపిస్తారు')),
    ],
    steps: [
      s('Call 1912 with your service number; note the complaint number.', 'సర్వీస్ నంబర్‌తో 1912కి కాల్ చేసి ఫిర్యాదు నంబర్ నోట్ చేయండి.'),
      s('Not solved: give a written complaint at the section office (AE).', 'పరిష్కరించకపోతే: సెక్షన్ కార్యాలయం (AE)లో రాతపూర్వక ఫిర్యాదు ఇవ్వండి.'),
      s('Still not solved: complain to the CGRF of your DISCOM.', 'అప్పటికీ కాకపోతే: మీ DISCOM CGRFకి ఫిర్యాదు చేయండి.'),
    ],
    stages: [
      {
        title: s('No power / voltage / transformer', 'కరెంట్ లేదు / వోల్టేజ్ / ట్రాన్స్‌ఫార్మర్'),
        steps: [
          s('Check whether only your house is off (your main switch / MCB) or the whole street.', 'మీ ఇల్లు మాత్రమే (మీ మెయిన్ స్విచ్ / MCB) లేదా వీధి మొత్తం ఆగిపోయిందో చూడండి.'),
          s('Call 1912 (or use the DISCOM app / WhatsApp if available) → give the service number and landmark → note the complaint number.', '1912కి కాల్ చేయండి (లేదా ఉంటే DISCOM యాప్ / వాట్సాప్) → సర్వీస్ నంబర్, ల్యాండ్‌మార్క్ చెప్పి → ఫిర్యాదు నంబర్ నోట్ చేయండి.'),
          s('Live wire fallen / sparking: keep everyone away and call 1912 at once — never touch it.', 'లైవ్ వైర్ పడితే / నిప్పురవ్వలు: అందరినీ దూరంగా ఉంచి వెంటనే 1912కి కాల్ చేయండి — ఎప్పుడూ తాకకండి.'),
        ],
      },
      {
        title: s('Bill looks too high', 'బిల్లు చాలా ఎక్కువగా ఉంది'),
        steps: [
          s('Compare the "present reading" on the bill with the reading on your meter now (take a photo). Check units vs last months.', 'బిల్లుపై "ప్రస్తుత రీడింగ్"ను ఇప్పుడు మీ మీటర్ రీడింగ్‌తో పోల్చండి (ఫోటో తీయండి). గత నెలలతో యూనిట్లు పోల్చండి.'),
          s('Wrong reading / estimated bill: complain on 1912 or at the section office with the photo; ask for a revised bill.', 'తప్పు రీడింగ్ / అంచనా బిల్లు: ఫోటోతో 1912లో లేదా సెక్షన్ కార్యాలయంలో ఫిర్యాదు చేసి సవరించిన బిల్లు అడగండి.'),
          s('Meter seems fast: apply for a meter test (small fee). If the meter is found faulty, the bill is corrected and the meter replaced.', 'మీటర్ వేగంగా తిరుగుతున్నట్లు అనిపిస్తే: మీటర్ పరీక్షకు దరఖాస్తు చేయండి (చిన్న ఫీజు). లోపం ఉంటే బిల్లు సరిచేసి మీటర్ మారుస్తారు.'),
          s('Pay the undisputed part to avoid disconnection while the complaint is decided.', 'ఫిర్యాదు తేలే వరకు కనెక్షన్ కట్ కాకుండా వివాదం లేని భాగం చెల్లించండి.'),
        ],
        note: s('Families eligible for free power (e.g. SC/ST up to the notified units) — check the subsidy is applied on your bill; if not, ask at the Secretariat.', 'ఉచిత విద్యుత్‌కు అర్హ కుటుంబాలు (ఉదా: నోటిఫై చేసిన యూనిట్ల వరకు SC/ST) — మీ బిల్లుపై సబ్సిడీ వర్తిస్తుందో చూడండి; లేకపోతే సచివాలయంలో అడగండి.'),
      },
      {
        title: s('Name change / load change', 'పేరు మార్పు / లోడ్ మార్పు'),
        steps: [
          s('Apply at the Village / Ward Secretariat, MeeSeva or the DISCOM website: "Title transfer" with the sale / gift deed or legal heir certificate and Aadhaar; or "Additional load" for more kW.', 'గ్రామ / వార్డు సచివాలయం, మీసేవ లేదా DISCOM వెబ్‌సైట్‌లో దరఖాస్తు: సేల్ / గిఫ్ట్ డీడ్ లేదా వారసుల సర్టిఫికెట్, ఆధార్‌తో "Title transfer"; లేదా ఎక్కువ kWకి "Additional load".'),
          s('Clear any dues first; pay the fee and development charges shown; keep the registration number.', 'ముందు బకాయిలు క్లియర్ చేయండి; చూపిన ఫీజు, అభివృద్ధి ఛార్జీలు చెల్లించి నమోదు నంబర్ దాచుకోండి.'),
        ],
      },
      {
        title: s('Escalate — CGRF and Ombudsman', 'పై స్థాయికి — CGRF, అంబుడ్స్‌మన్'),
        steps: [
          s('Not solved by the DISCOM: write to the Consumer Grievance Redressal Forum (CGRF) of your DISCOM (address on the DISCOM website / bill) with service number, complaint numbers, copies of bills and letters. Free, no lawyer needed.', 'DISCOM పరిష్కరించకపోతే: సర్వీస్ నంబర్, ఫిర్యాదు నంబర్లు, బిల్లులు, లేఖల కాపీలతో మీ DISCOM వినియోగదారుల ఫిర్యాదుల పరిష్కార వేదిక (CGRF)కి రాయండి (చిరునామా DISCOM వెబ్‌సైట్ / బిల్లుపై). ఉచితం, న్యాయవాది అక్కర్లేదు.'),
          s('CGRF holds hearings (often in your circle / district) and passes an order the DISCOM must follow.', 'CGRF విచారణలు జరుపుతుంది (తరచూ మీ సర్కిల్ / జిల్లాలో), DISCOM పాటించాల్సిన ఉత్తర్వు ఇస్తుంది.'),
          s('Unhappy with the CGRF order: appeal to the Vidyut Ombudsman (under APERC) within the time stated in the order.', 'CGRF ఉత్తర్వుతో సంతృప్తి లేకపోతే: ఉత్తర్వులో చెప్పిన గడువులోగా విద్యుత్ అంబుడ్స్‌మన్ (APERC కింద)కి అప్పీల్ చేయండి.'),
        ],
      },
    ],
    costExample: s('Complaint and CGRF case: free. Meter test and title transfer: small fees on the DISCOM schedule.', 'ఫిర్యాదు, CGRF కేసు: ఉచితం. మీటర్ పరీక్ష, టైటిల్ బదిలీ: DISCOM షెడ్యూల్ ప్రకారం చిన్న ఫీజులు.'),
    problems: [
      P(['Lineman asks money to replace a burnt meter or fix a line.', 'కాలిపోయిన మీటర్ మార్చడానికి లేదా లైన్ సరిచేయడానికి లైన్‌మెన్ డబ్బు అడుగుతున్నారు.'], ['Burnt meters due to DISCOM fault are replaced under the rules; pay only receipted fees. Report bribes to ACB 14400.', 'DISCOM లోపంతో కాలిన మీటర్లు నియమాల ప్రకారం మారుస్తారు; రసీదు ఉన్న ఫీజులే చెల్లించండి. లంచం అడిగితే ACB 14400.']),
    ],
    whereToApply: [s('1912 (24×7); DISCOM app / website (APEPDCL, APCPDCL, APSPDCL)', '1912 (24×7); DISCOM యాప్ / వెబ్‌సైట్ (APEPDCL, APCPDCL, APSPDCL)'), s('Section office (AE); Village / Ward Secretariat; CGRF of your DISCOM', 'సెక్షన్ కార్యాలయం (AE); గ్రామ / వార్డు సచివాలయం; మీ DISCOM CGRF')],
    timeline: s('Supply complaints: hours. Bill correction / meter test: days to weeks. CGRF: usually decided within about 45 days.', 'సరఫరా ఫిర్యాదులు: గంటల్లో. బిల్లు సవరణ / మీటర్ పరీక్ష: రోజుల నుండి వారాలు. CGRF: సాధారణంగా సుమారు 45 రోజుల్లో నిర్ణయం.'),
    tips: [s('Pay bills only on the DISCOM site / app or trusted UPI apps. "Your power will be cut tonight, call this number" SMS messages are scams.', 'బిల్లులు DISCOM సైట్ / యాప్ లేదా నమ్మకమైన UPI యాప్‌లలోనే చెల్లించండి. "ఈ రాత్రి మీ కరెంట్ కట్ అవుతుంది, ఈ నంబర్‌కు కాల్ చేయండి" అనే SMSలు మోసాలు.')],
    links: [{ label: 'APSPDCL', url: 'https://www.apspdcl.in' }, { label: 'APEPDCL', url: 'https://www.apeasternpower.com' }, { label: 'APCPDCL', url: 'https://apcpdcl.in' }],
    lastChecked: CHECKED,
  },

  {
    id: 'income-tax-return',
    category: 'money',
    level: 'central',
    title: s('File your income tax return (ITR) and get your TDS refund', 'ఆదాయపు పన్ను రిటర్న్ (ITR) వేసి TDS రీఫండ్ పొందండి'),
    summary: s(
      'If tax was cut from your salary, interest, rent or a property sale (TDS) but your total income is below the taxable level, you get it back only by filing an ITR. Most salaried people can file ITR-1 themselves in about 30 minutes on the income tax portal — data is pre-filled. Under the new tax regime, income up to ₹12 lakh (₹12.75 lakh for salaried) has no tax due to the rebate. For FY 2025-26 the late (belated) return can still be filed until 31 December 2026.',
      'మీ జీతం, వడ్డీ, అద్దె లేదా ఆస్తి అమ్మకంపై పన్ను కోసినా (TDS) మీ మొత్తం ఆదాయం పన్ను స్థాయికి తక్కువగా ఉంటే, ITR వేస్తేనే అది తిరిగి వస్తుంది. చాలా మంది జీతగాళ్లు ఆదాయపు పన్ను పోర్టల్‌లో సుమారు 30 నిమిషాల్లో ITR-1 స్వయంగా వేయవచ్చు — డేటా ముందే నిండి ఉంటుంది. కొత్త పన్ను విధానంలో ₹12 లక్షల వరకు (జీతగాళ్లకు ₹12.75 లక్షలు) రిబేట్ వల్ల పన్ను లేదు. FY 2025-26కి ఆలస్య (బిలేటెడ్) రిటర్న్ 31 డిసెంబర్ 2026 వరకు ఇంకా వేయవచ్చు.',
    ),
    keywords: ['income tax', 'itr', 'tax return', 'tds refund', 'refund', 'form 16', '26as', 'ais', 'tax filing', 'belated return', 'ఆదాయపు పన్ను', 'ఇన్‌కమ్ ట్యాక్స్', 'రిటర్న్', 'రీఫండ్', 'TDS'],
    whoCanApply: [
      s('Anyone with income above the basic exemption, or who wants a TDS refund', 'ప్రాథమిక మినహాయింపు కంటే ఎక్కువ ఆదాయం ఉన్నవారు, లేదా TDS రీఫండ్ కావాల్సినవారు'),
      s('ITR-1: resident with salary / pension, one house, interest, total up to ₹50 lakh. Others: ITR-2 / 3 / 4', 'ITR-1: జీతం / పెన్షన్, ఒక ఇల్లు, వడ్డీ, మొత్తం ₹50 లక్షల వరకు ఉన్న నివాసి. ఇతరులు: ITR-2 / 3 / 4'),
    ],
    documents: [
      s('PAN linked with Aadhaar; mobile linked to Aadhaar', 'ఆధార్‌తో లింక్ అయిన PAN; ఆధార్‌కు లింక్ అయిన మొబైల్'),
      s('Form 16 from employer; bank interest certificates', 'యజమాని నుండి ఫారం 16; బ్యాంక్ వడ్డీ సర్టిఫికెట్లు'),
      s('Bank account (pre-validated on the portal) for the refund', 'రీఫండ్ కోసం బ్యాంక్ ఖాతా (పోర్టల్‌లో ప్రీ-వాలిడేట్)'),
    ],
    fees: [
      fee(s('Filing on the portal', 'పోర్టల్‌లో దాఖలు'), s('Free', 'ఉచితం')),
      fee(s('Late fee (belated return)', 'ఆలస్య ఫీజు (బిలేటెడ్ రిటర్న్)'), s('Up to ₹1,000 if income ≤ ₹5 lakh; up to ₹5,000 above that', 'ఆదాయం ≤ ₹5 లక్షలైతే ₹1,000 వరకు; అంతకు మించితే ₹5,000 వరకు')),
    ],
    steps: [
      s('Log in to incometax.gov.in with PAN.', 'PANతో incometax.gov.inలో లాగిన్.'),
      s('Check AIS / Form 26AS, file the pre-filled ITR, e-verify with Aadhaar OTP.', 'AIS / ఫారం 26AS చూసి, ముందే నిండిన ITR వేసి, ఆధార్ OTPతో e-వెరిఫై చేయండి.'),
    ],
    stages: [
      {
        title: s('Get ready (one time)', 'సిద్ధం (ఒకసారి)'),
        steps: [
          s('incometax.gov.in → "Register" → PAN → OTP to Aadhaar mobile → set password.', 'incometax.gov.in → "Register" → PAN → ఆధార్ మొబైల్‌కు OTP → పాస్‌వర్డ్ సెట్.'),
          s('Profile → "My Bank Account" → add and pre-validate the account where you want the refund.', 'Profile → "My Bank Account" → రీఫండ్ కావాల్సిన ఖాతా చేర్చి ప్రీ-వాలిడేట్ చేయండి.'),
          s('Check PAN–Aadhaar link status (an inoperative PAN can stop refunds).', 'PAN–ఆధార్ లింక్ స్టేటస్ చూడండి (ఇన్‌ఆపరేటివ్ PAN రీఫండ్‌లను ఆపవచ్చు).'),
        ],
      },
      {
        title: s('Check what the department already knows', 'శాఖ వద్ద ఏముందో చూడడం'),
        steps: [
          s('e-File → Income Tax Return → View AIS (Annual Information Statement): salary, interest, TDS, property deals. Also Form 26AS for TDS credits.', 'e-File → Income Tax Return → View AIS (వార్షిక సమాచార నివేదిక): జీతం, వడ్డీ, TDS, ఆస్తి లావాదేవీలు. TDS క్రెడిట్‌లకు ఫారం 26AS కూడా.'),
          s('Wrong entry in AIS? Give feedback there before filing.', 'AISలో తప్పు ఎంట్రీ? దాఖలుకు ముందు అక్కడే ఫీడ్‌బ్యాక్ ఇవ్వండి.'),
        ],
      },
      {
        title: s('File the return', 'రిటర్న్ దాఖలు'),
        steps: [
          s('e-File → Income Tax Returns → File → Assessment Year 2026-27 (for income of April 2025–March 2026) → Online → choose ITR-1 (or the form the portal suggests).', 'e-File → Income Tax Returns → File → అసెస్‌మెంట్ ఇయర్ 2026-27 (ఏప్రిల్ 2025–మార్చి 2026 ఆదాయానికి) → Online → ITR-1 (లేదా పోర్టల్ సూచించే ఫారం) ఎంచుకోండి.'),
          s('Filing after the due date? Choose section "139(4) — belated".', 'గడువు తర్వాత వేస్తున్నారా? సెక్షన్ "139(4) — belated" ఎంచుకోండి.'),
          s('Pick the tax regime (new is default and usually better unless you have large deductions like home-loan interest).', 'పన్ను విధానం ఎంచుకోండి (కొత్తది డిఫాల్ట్, ఇంటి రుణ వడ్డీ వంటి పెద్ద మినహాయింపులు లేకపోతే సాధారణంగా మేలు).'),
          s('Check the pre-filled salary, interest and TDS against Form 16 / bank certificates; correct if needed.', 'ముందే నిండిన జీతం, వడ్డీ, TDSను ఫారం 16 / బ్యాంక్ సర్టిఫికెట్లతో పోల్చి అవసరమైతే సరిచేయండి.'),
          s('See the summary: "Refund" or "Tax payable". If payable, pay through e-Pay Tax first, then submit.', 'సారాంశం చూడండి: "Refund" లేదా "Tax payable". చెల్లించాల్సి ఉంటే ముందు e-Pay Tax ద్వారా చెల్లించి సమర్పించండి.'),
        ],
      },
      {
        title: s('Verify and track', 'ధృవీకరణ, ట్రాకింగ్'),
        steps: [
          s('e-Verify immediately with Aadhaar OTP — the return is not complete until verified (must be within 30 days).', 'వెంటనే ఆధార్ OTPతో e-వెరిఫై చేయండి — ధృవీకరించే వరకు రిటర్న్ పూర్తి కాదు (30 రోజుల్లో తప్పనిసరి).'),
          s('Download the ITR-V acknowledgement. Track refund under "e-File → View filed returns".', 'ITR-V అక్నాలెడ్జ్‌మెంట్ డౌన్‌లోడ్ చేయండి. "e-File → View filed returns"లో రీఫండ్ ట్రాక్ చేయండి.'),
          s('Answer any notice / email from the department on the portal in time.', 'శాఖ నుండి ఏదైనా నోటీసు / ఇమెయిల్‌కు సమయానికి పోర్టల్‌లో సమాధానం ఇవ్వండి.'),
        ],
      },
    ],
    costExample: s('Pensioner with ₹6 lakh income whose bank cut ₹8,000 TDS on FD interest: files ITR-1 (no tax under the new regime) → ₹8,000 refund to the bank account.', '₹6 లక్షల ఆదాయం ఉన్న పెన్షనర్, FD వడ్డీపై బ్యాంక్ ₹8,000 TDS కోసింది: ITR-1 వేస్తే (కొత్త విధానంలో పన్ను లేదు) → బ్యాంక్ ఖాతాకు ₹8,000 రీఫండ్.'),
    problems: [
      P(['Refund "failed".', 'రీఫండ్ "failed".'], ['Re-validate the bank account (name must match PAN), then use "Refund reissue" on the portal.', 'బ్యాంక్ ఖాతా మళ్లీ వాలిడేట్ చేయండి (పేరు PANతో సరిపోలాలి), తర్వాత పోర్టల్‌లో "Refund reissue" వాడండి.']),
      P(['Missed even the 31 December date.', '31 డిసెంబర్ గడువు కూడా దాటింది.'], ['You can file an "updated return" (ITR-U) later to pay tax, but it can\'t be used to claim a refund — file on time.', 'పన్ను చెల్లించడానికి తర్వాత "అప్‌డేటెడ్ రిటర్న్" (ITR-U) వేయవచ్చు, కానీ దానితో రీఫండ్ కోరలేరు — సమయానికి వేయండి.']),
    ],
    afterwards: [s('Senior citizens with no taxable income can give Form 15H (others 15G) to the bank each April so TDS isn\'t cut on interest.', 'పన్ను ఆదాయం లేని వృద్ధులు ప్రతి ఏప్రిల్‌లో బ్యాంకుకు ఫారం 15H (ఇతరులు 15G) ఇస్తే వడ్డీపై TDS కోయరు.')],
    whereToApply: [s('incometax.gov.in (e-filing portal); help desk 1800 103 0025', 'incometax.gov.in (e-ఫైలింగ్ పోర్టల్); హెల్ప్ డెస్క్ 1800 103 0025')],
    timeline: s('Due dates for income of 2025-26: 31 July 2026 (ITR-1/2), 31 August 2026 (ITR-3/4 without audit); belated until 31 December 2026. Refunds usually come in a few weeks after e-verification.', '2025-26 ఆదాయానికి గడువులు: 31 జూలై 2026 (ITR-1/2), 31 ఆగస్టు 2026 (ఆడిట్ లేని ITR-3/4); బిలేటెడ్ 31 డిసెంబర్ 2026 వరకు. e-వెరిఫికేషన్ తర్వాత రీఫండ్ సాధారణంగా కొన్ని వారాల్లో.'),
    tips: [
      s('The Income-tax Act, 2025 started on 1 April 2026 and uses "tax year" instead of assessment year — returns for income from April 2026 follow the new forms. Income of 2025-26 is filed under the old Act as above.', 'ఆదాయపు పన్ను చట్టం 2025 1 ఏప్రిల్ 2026 నుండి అమల్లోకి వచ్చింది, అసెస్‌మెంట్ ఇయర్ బదులు "టాక్స్ ఇయర్" వాడుతుంది — ఏప్రిల్ 2026 నుండి ఆదాయానికి కొత్త ఫారాలు. 2025-26 ఆదాయం పైన చెప్పినట్లు పాత చట్టం కిందే.'),
      s('"Your refund is approved, click to update bank details" SMS / emails are scams — the department never asks for card / OTP details.', '"మీ రీఫండ్ ఆమోదించబడింది, బ్యాంక్ వివరాలు అప్‌డేట్ చేయడానికి క్లిక్ చేయండి" అనే SMS / ఇమెయిల్‌లు మోసాలు — శాఖ కార్డు / OTP వివరాలు ఎప్పుడూ అడగదు.'),
    ],
    links: [{ label: 'Income Tax e-filing', url: 'https://www.incometax.gov.in' }],
    lastChecked: CHECKED,
  },
];
