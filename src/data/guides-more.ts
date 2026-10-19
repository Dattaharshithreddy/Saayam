import { Guide } from '../types';

/** Second batch of guides (checked 19 Oct 2026). Same rules as guides.ts. */
export const moreGuides: Guide[] = [
  // ─────────────────────────────────────────── CERTIFICATES ──
  {
    id: 'caste-income-certificate',
    category: 'certificates',
    level: 'state',
    title: {
      en: 'Caste, income and residence certificates',
      te: 'కుల, ఆదాయ మరియు నివాస ధృవీకరణ పత్రాలు',
    },
    summary: {
      en: 'Needed for school and college admission, scholarships, jobs, reservations and most welfare schemes. In AP, caste, nativity (residence) and date of birth come together in one "Integrated Certificate". Income certificate is a separate application. Apply at your Village/Ward Secretariat or MeeSeva.',
      te: 'బడి, కాలేజీ అడ్మిషన్లు, స్కాలర్‌షిప్‌లు, ఉద్యోగాలు, రిజర్వేషన్లు మరియు చాలా సంక్షేమ పథకాలకు ఇవి అవసరం. APలో కులం, స్థానికత (నివాసం), పుట్టిన తేదీ — మూడూ కలిపి ఒకే "ఇంటిగ్రేటెడ్ సర్టిఫికెట్"గా ఇస్తారు. ఆదాయ ధృవీకరణ పత్రానికి వేరే దరఖాస్తు. గ్రామ/వార్డు సచివాలయం లేదా మీసేవలో దరఖాస్తు చేయండి.',
    },
    keywords: ['caste', 'income', 'integrated', 'nativity', 'residence', 'EWS', 'OBC', 'scholarship', 'కుల', 'ఆదాయ', 'నివాస', 'ధృవీకరణ'],
    whoCanApply: [
      { en: 'Any resident of AP (SC, ST, BC or OC) — the certificate is issued in the applicant\'s own name, including students', te: 'APలో నివసించే ఎవరైనా (SC, ST, BC లేదా OC) — విద్యార్థులతో సహా దరఖాస్తుదారుని సొంత పేరుపై ఇస్తారు' },
      { en: 'Parents can apply for their minor children', te: 'మైనర్ పిల్లల కోసం తల్లిదండ్రులు దరఖాస్తు చేయవచ్చు' },
    ],
    documents: [
      { en: 'Aadhaar, rice card or voter ID', te: 'ఆధార్, రైస్ కార్డు లేదా ఓటర్ ID' },
      { en: 'Caste certificate of a parent or close family member (makes the enquiry much faster)', te: 'తల్లిదండ్రులు లేదా దగ్గరి కుటుంబ సభ్యుని కుల ధృవీకరణ పత్రం (విచారణ చాలా త్వరగా అవుతుంది)' },
      { en: 'Date of birth proof: SSC memo, transfer certificate (TC) or birth certificate', te: 'పుట్టిన తేదీ రుజువు: SSC మెమో, ట్రాన్స్‌ఫర్ సర్టిఫికెట్ (TC) లేదా జనన ధృవీకరణ పత్రం' },
      { en: 'Study certificates for Class 1–10 (shows where you lived)', te: '1–10 తరగతుల స్టడీ సర్టిఫికెట్లు (మీరు ఎక్కడ నివసించారో చూపిస్తాయి)' },
      { en: 'For income: salary slip or self-declaration of family income, and land details if any', te: 'ఆదాయానికి: జీతం స్లిప్ లేదా కుటుంబ ఆదాయ స్వీయ ధృవీకరణ, భూమి ఉంటే వివరాలు' },
    ],
    fees: [
      {
        item: { en: 'Application at Secretariat or MeeSeva', te: 'సచివాలయం లేదా మీసేవలో దరఖాస్తు' },
        amount: { en: 'A small fixed service fee — ask for the printed receipt and pay nothing extra', te: 'చిన్న నిర్ణీత సర్వీస్ ఫీజు — ప్రింటెడ్ రసీదు అడగండి, అదనంగా ఏమీ ఇవ్వకండి' },
      },
      {
        item: { en: 'Downloading an issued certificate on Mana Mitra WhatsApp', te: 'జారీ అయిన సర్టిఫికెట్‌ను మన మిత్ర వాట్సాప్‌లో డౌన్‌లోడ్' },
        amount: { en: 'Free', te: 'ఉచితం' },
      },
    ],
    steps: [
      { en: 'Go to your Village/Ward Secretariat (or MeeSeva) and ask for "Integrated Certificate" (caste + nativity + date of birth) or "Income Certificate".', te: 'మీ గ్రామ/వార్డు సచివాలయం (లేదా మీసేవ)కి వెళ్లి "ఇంటిగ్రేటెడ్ సర్టిఫికెట్" (కులం + స్థానికత + పుట్టిన తేదీ) లేదా "ఆదాయ ధృవీకరణ పత్రం" అడగండి.' },
      { en: 'Fill the form, attach copies of the documents, and keep the application number from the receipt.', te: 'ఫారం నింపి, పత్రాల కాపీలు జత చేసి, రసీదుపై ఉన్న అప్లికేషన్ నంబర్ దాచుకోండి.' },
      { en: 'The Village Revenue Officer (VRO) / Revenue Inspector checks the details; the Tahsildar (MRO) approves.', te: 'గ్రామ రెవెన్యూ అధికారి (VRO) / రెవెన్యూ ఇన్‌స్పెక్టర్ వివరాలు తనిఖీ చేస్తారు; తహసీల్దార్ (MRO) ఆమోదిస్తారు.' },
      { en: 'Once approved, collect it at the secretariat or download it on Mana Mitra WhatsApp (9552300009).', te: 'ఆమోదం వచ్చాక సచివాలయంలో తీసుకోండి లేదా మన మిత్ర వాట్సాప్ (9552300009)లో డౌన్‌లోడ్ చేసుకోండి.' },
    ],
    whereToApply: [
      { en: 'Village / Ward Secretariat', te: 'గ్రామ / వార్డు సచివాలయం' },
      { en: 'MeeSeva centre or ap.meeseva.gov.in', te: 'మీసేవ కేంద్రం లేదా ap.meeseva.gov.in' },
    ],
    timeline: {
      en: 'Usually a few days to a few weeks. Caste certificates take longer when no family member already has one, because an enquiry is needed.',
      te: 'సాధారణంగా కొన్ని రోజుల నుండి కొన్ని వారాలు. కుటుంబంలో ఎవరికీ కుల ధృవీకరణ లేకపోతే విచారణ అవసరం కాబట్టి ఎక్కువ సమయం పడుతుంది.',
    },
    tips: [
      { en: 'AP integrated (caste) certificates are generally valid for life. Income certificates are usually asked to be recent — check what the college or scheme requires.', te: 'AP ఇంటిగ్రేటెడ్ (కుల) సర్టిఫికెట్ సాధారణంగా జీవితకాలం చెల్లుతుంది. ఆదాయ ధృవీకరణ తాజాగా ఉండాలని అడుగుతారు — కాలేజీ లేదా పథకం ఏం అడుగుతుందో చూడండి.' },
      { en: 'For central government jobs or central colleges, OBC needs a separate "OBC (Non-Creamy Layer)" certificate and EWS needs an "EWS certificate" — ask for those by name.', te: 'కేంద్ర ఉద్యోగాలు లేదా కేంద్ర కాలేజీలకు, OBCలకు వేరుగా "OBC (నాన్-క్రీమీ లేయర్)" సర్టిఫికెట్, EWSకు "EWS సర్టిఫికెట్" కావాలి — పేరుతో అడగండి.' },
      { en: 'Apply a month before admission season; offices get crowded in May–July.', te: 'అడ్మిషన్ సీజన్‌కు నెల ముందే దరఖాస్తు చేయండి; మే–జూలైలో ఆఫీసులు రద్దీగా ఉంటాయి.' },
    ],
    links: [
      { label: 'AP MeeSeva', url: 'https://ap.meeseva.gov.in' },
      { label: 'Download on Mana Mitra WhatsApp', url: 'https://wa.me/919552300009?text=Hi' },
    ],
    lastChecked: '2026-10-19',
  },
  {
    id: 'birth-death-certificate',
    category: 'certificates',
    level: 'both',
    title: {
      en: 'Birth and death certificates — register, add child\'s name, download',
      te: 'జనన, మరణ ధృవీకరణ పత్రాలు — నమోదు, పిల్లల పేరు చేర్పు, డౌన్‌లోడ్',
    },
    summary: {
      en: 'Every birth and death must be registered with the local body (gram panchayat or municipality). Hospital births are usually registered by the hospital. Register within 21 days to avoid extra steps. If the birth certificate was issued without the child\'s name, add the name later.',
      te: 'ప్రతి జననం, మరణం స్థానిక సంస్థ (గ్రామ పంచాయతీ లేదా మున్సిపాలిటీ)లో నమోదు కావాలి. ఆసుపత్రిలో పుట్టిన పిల్లలను సాధారణంగా ఆసుపత్రే నమోదు చేస్తుంది. అదనపు పనులు లేకుండా ఉండాలంటే 21 రోజుల్లో నమోదు చేయండి. పిల్లల పేరు లేకుండా సర్టిఫికెట్ వస్తే, తర్వాత పేరు చేర్చవచ్చు.',
    },
    keywords: ['birth', 'death', 'certificate', 'name inclusion', 'CRS', 'late registration', 'జనన', 'మరణ', 'పేరు చేర్పు'],
    whoCanApply: [
      { en: 'Parents (birth), family members (death), or the hospital where it happened', te: 'తల్లిదండ్రులు (జననం), కుటుంబ సభ్యులు (మరణం), లేదా జరిగిన ఆసుపత్రి' },
    ],
    documents: [
      { en: 'Hospital discharge summary or delivery record (birth); hospital record or doctor\'s certificate (death)', te: 'ఆసుపత్రి డిశ్చార్జ్ సమ్మరీ లేదా ప్రసవ రికార్డు (జననం); ఆసుపత్రి రికార్డు లేదా డాక్టర్ సర్టిఫికెట్ (మరణం)' },
      { en: 'Aadhaar of both parents / of the informant', te: 'తల్లిదండ్రులిద్దరి / సమాచారం ఇచ్చేవారి ఆధార్' },
      { en: 'To add a child\'s name: the certificate without the name and a notarised affidavit with the name', te: 'పిల్లల పేరు చేర్చడానికి: పేరు లేని సర్టిఫికెట్ మరియు పేరుతో నోటరీ అఫిడవిట్' },
      { en: 'For late registration: Non-Availability Certificate (NAC) from the local body and an affidavit', te: 'ఆలస్య నమోదుకు: స్థానిక సంస్థ నుండి నాన్-అవైలబిలిటీ సర్టిఫికెట్ (NAC) మరియు అఫిడవిట్' },
    ],
    fees: [
      {
        item: { en: 'Registration within 21 days', te: '21 రోజుల్లో నమోదు' },
        amount: { en: 'Free', te: 'ఉచితం' },
      },
      {
        item: { en: 'Adding child\'s name within 1 year', te: '1 సంవత్సరం లోపు పిల్లల పేరు చేర్పు' },
        amount: { en: 'About ₹30 service charge at MeeSeva', te: 'మీసేవలో సుమారు ₹30 సర్వీస్ ఛార్జీ' },
      },
      {
        item: { en: 'Late registration / name after 1 year', te: 'ఆలస్య నమోదు / 1 సంవత్సరం తర్వాత పేరు' },
        amount: { en: 'Small late fee plus extra papers; after 1 year an order from the Revenue Divisional Officer / Executive Magistrate is needed', te: 'చిన్న ఆలస్య రుసుము మరియు అదనపు పత్రాలు; 1 సంవత్సరం దాటితే రెవెన్యూ డివిజనల్ అధికారి / ఎగ్జిక్యూటివ్ మేజిస్ట్రేట్ ఆర్డర్ అవసరం' },
      },
    ],
    steps: [
      { en: 'Hospital birth: ask the hospital for the registration number before discharge. Home birth or death: inform the panchayat secretary or municipal office within 21 days.', te: 'ఆసుపత్రి జననం: డిశ్చార్జ్ ముందే ఆసుపత్రిని రిజిస్ట్రేషన్ నంబర్ అడగండి. ఇంటి వద్ద జననం లేదా మరణం: 21 రోజుల్లో పంచాయతీ కార్యదర్శి లేదా మున్సిపల్ ఆఫీసుకు తెలియజేయండి.' },
      { en: 'Download the certificate: on Mana Mitra WhatsApp (9552300009), on ap.meeseva.gov.in, or for recent hospital births on the CRS portal (dc.crsorgi.gov.in) with the hospital registration number.', te: 'సర్టిఫికెట్ డౌన్‌లోడ్: మన మిత్ర వాట్సాప్ (9552300009), ap.meeseva.gov.in, లేదా ఇటీవలి ఆసుపత్రి జననాలకు ఆసుపత్రి రిజిస్ట్రేషన్ నంబర్‌తో CRS పోర్టల్ (dc.crsorgi.gov.in).' },
      { en: 'To add the child\'s name: apply at MeeSeva or the secretariat with the affidavit and parents\' Aadhaar.', te: 'పిల్లల పేరు చేర్చడానికి: అఫిడవిట్, తల్లిదండ్రుల ఆధార్‌తో మీసేవ లేదా సచివాలయంలో దరఖాస్తు చేయండి.' },
      { en: 'To correct a mistake (spelling, date): apply to the same registrar with proof such as the hospital record or school certificate.', te: 'తప్పు సరిచేయడానికి (స్పెల్లింగ్, తేదీ): ఆసుపత్రి రికార్డు లేదా స్కూల్ సర్టిఫికెట్ వంటి రుజువుతో అదే రిజిస్ట్రార్‌కు దరఖాస్తు చేయండి.' },
    ],
    whereToApply: [
      { en: 'Gram panchayat office or municipal office (Registrar of Births & Deaths)', te: 'గ్రామ పంచాయతీ ఆఫీసు లేదా మున్సిపల్ ఆఫీసు (జనన మరణాల రిజిస్ట్రార్)' },
      { en: 'Village / Ward Secretariat or MeeSeva', te: 'గ్రామ / వార్డు సచివాలయం లేదా మీసేవ' },
    ],
    timeline: {
      en: 'Downloads are instant once registered. Adding a name takes around 3 weeks. Late registration after 1 year can take longer because of the magistrate\'s order.',
      te: 'నమోదు అయ్యాక డౌన్‌లోడ్ వెంటనే. పేరు చేర్చడానికి సుమారు 3 వారాలు. 1 సంవత్సరం తర్వాత ఆలస్య నమోదుకు మేజిస్ట్రేట్ ఆర్డర్ కారణంగా ఎక్కువ సమయం పడుతుంది.',
    },
    tips: [
      { en: 'Add the child\'s name within the first year — it is cheapest and simplest then.', te: 'పిల్లల పేరును మొదటి సంవత్సరంలోనే చేర్చండి — అప్పుడే చౌక, సులభం.' },
      { en: 'Birth certificates are now used as the main date-of-birth proof for school admission, Aadhaar and passport, so check spellings carefully.', te: 'బడి అడ్మిషన్, ఆధార్, పాస్‌పోర్ట్‌కు ఇప్పుడు జనన ధృవీకరణనే ప్రధాన పుట్టిన తేదీ రుజువుగా వాడుతున్నారు, కాబట్టి స్పెల్లింగ్‌లు జాగ్రత్తగా చూడండి.' },
      { en: 'A death certificate is needed for pensions, insurance, bank claims and land mutation by heirs — get several copies.', te: 'పెన్షన్, ఇన్సూరెన్స్, బ్యాంక్ క్లెయిమ్‌లు, వారసుల భూమి మ్యుటేషన్‌కు మరణ ధృవీకరణ అవసరం — కొన్ని కాపీలు తీసుకోండి.' },
    ],
    links: [
      { label: 'AP MeeSeva', url: 'https://ap.meeseva.gov.in' },
      { label: 'Civil Registration System (CRS)', url: 'https://dc.crsorgi.gov.in' },
    ],
    lastChecked: '2026-10-19',
  },

  // ─────────────────────────────────────────── PROPERTY ──
  {
    id: 'encumbrance-certificate',
    category: 'property',
    level: 'state',
    title: {
      en: 'Encumbrance Certificate (EC) — check a property before buying',
      te: 'ఎన్‌కంబరెన్స్ సర్టిఫికెట్ (EC) — కొనే ముందు ఆస్తిని తనిఖీ చేయండి',
    },
    summary: {
      en: 'The EC lists every registered deal on a property over the years you choose: sales, gifts, mortgages and loan releases. Check it before buying, for a home loan, or to confirm a correction was registered. You can search it online on the AP registration portal.',
      te: 'మీరు ఎంచుకున్న సంవత్సరాల్లో ఒక ఆస్తిపై జరిగిన ప్రతి రిజిస్టర్డ్ వ్యవహారాన్ని EC చూపిస్తుంది: అమ్మకాలు, గిఫ్ట్‌లు, తనఖాలు, రుణ విడుదలలు. కొనే ముందు, హోమ్ లోన్‌కు, లేదా సవరణ రిజిస్టర్ అయిందో నిర్ధారించడానికి చూడండి. AP రిజిస్ట్రేషన్ పోర్టల్‌లో ఆన్‌లైన్‌లో వెతకవచ్చు.',
    },
    keywords: ['EC', 'encumbrance', 'mortgage', 'loan', 'property check', 'buying', 'ఈసీ', 'తనఖా', 'కొనుగోలు'],
    whoCanApply: [
      { en: 'Anyone — you do not need to be the owner to search', te: 'ఎవరైనా — వెతకడానికి యజమాని కానవసరం లేదు' },
    ],
    documents: [
      { en: 'Document number and year of the last registered deal, if you have it', te: 'చివరి రిజిస్టర్డ్ వ్యవహారపు డాక్యుమెంట్ నంబర్ మరియు సంవత్సరం (ఉంటే)' },
      { en: 'Otherwise: survey number (village land) or door number (town property), village and SRO name', te: 'లేకపోతే: సర్వే నంబర్ (గ్రామ భూమి) లేదా డోర్ నంబర్ (పట్టణ ఆస్తి), గ్రామం మరియు SRO పేరు' },
    ],
    fees: [
      {
        item: { en: 'Online EC search', te: 'ఆన్‌లైన్ EC సెర్చ్' },
        amount: { en: 'Free or nominal', te: 'ఉచితం లేదా నామమాత్రం' },
      },
      {
        item: { en: 'Certified EC (for banks / court)', te: 'సర్టిఫైడ్ EC (బ్యాంకులు / కోర్టుకు)' },
        amount: { en: 'A small fee at the SRO or MeeSeva; depends on the number of years', te: 'SRO లేదా మీసేవలో చిన్న ఫీజు; సంవత్సరాల సంఖ్యపై ఆధారపడుతుంది' },
      },
    ],
    steps: [
      { en: 'Open registration.ap.gov.in and choose the Encumbrance (EC) search service.', te: 'registration.ap.gov.in తెరిచి Encumbrance (EC) సెర్చ్ సేవ ఎంచుకోండి.' },
      { en: 'Search by document number and year, or by survey / door number and village.', te: 'డాక్యుమెంట్ నంబర్ మరియు సంవత్సరం, లేదా సర్వే / డోర్ నంబర్ మరియు గ్రామంతో వెతకండి.' },
      { en: 'Pick the period. When buying, check at least 30 years.', te: 'కాలవ్యవధి ఎంచుకోండి. కొనేటప్పుడు కనీసం 30 సంవత్సరాలు చూడండి.' },
      { en: 'Read each entry: who sold to whom, any mortgage, and whether every loan has a "release" entry after it.', te: 'ప్రతి ఎంట్రీ చదవండి: ఎవరు ఎవరికి అమ్మారు, తనఖా ఉందా, ప్రతి రుణం తర్వాత "రిలీజ్" ఎంట్రీ ఉందా.' },
      { en: 'If a bank needs it, get the certified EC from the SRO or MeeSeva.', te: 'బ్యాంక్ అడిగితే, SRO లేదా మీసేవ నుండి సర్టిఫైడ్ EC తీసుకోండి.' },
    ],
    whereToApply: [
      { en: 'Online: registration.ap.gov.in', te: 'ఆన్‌లైన్: registration.ap.gov.in' },
      { en: 'Certified copy: Sub-Registrar Office or MeeSeva', te: 'సర్టిఫైడ్ కాపీ: సబ్-రిజిస్ట్రార్ ఆఫీసు లేదా మీసేవ' },
    ],
    timeline: {
      en: 'Online search takes minutes. A certified EC is usually ready the same day or within a few days.',
      te: 'ఆన్‌లైన్ సెర్చ్ నిమిషాల్లో. సర్టిఫైడ్ EC సాధారణంగా అదే రోజు లేదా కొన్ని రోజుల్లో.',
    },
    tips: [
      { en: 'EC is on the registration portal, not on Meebhoomi. Meebhoomi shows revenue records (1B/Adangal) — check both before buying land.', te: 'EC రిజిస్ట్రేషన్ పోర్టల్‌లో ఉంటుంది, మీభూమిలో కాదు. మీభూమి రెవెన్యూ రికార్డులు (1B/అడంగల్) చూపిస్తుంది — భూమి కొనే ముందు రెండూ చూడండి.' },
      { en: 'EC does not show unregistered agreements, court cases or who is living there — visit the property and ask neighbours too.', te: 'రిజిస్టర్ కాని ఒప్పందాలు, కోర్టు కేసులు, అక్కడ ఎవరు ఉంటున్నారో EC చూపదు — ఆస్తిని చూసి, పక్కవాళ్లను కూడా అడగండి.' },
    ],
    links: [
      { label: 'AP Registration & Stamps (IGRS)', url: 'https://registration.ap.gov.in' },
    ],
    lastChecked: '2026-10-19',
  },

  // ─────────────────────────────────────────── HEALTH ──
  {
    id: 'ntr-vaidya-seva',
    category: 'health',
    level: 'both',
    title: {
      en: 'Free hospital treatment — Dr NTR Vaidya Seva & Ayushman Bharat',
      te: 'ఉచిత ఆసుపత్రి వైద్యం — డా. NTR వైద్య సేవ & ఆయుష్మాన్ భారత్',
    },
    summary: {
      en: 'Eligible AP families get cashless treatment up to ₹25 lakh a year for more than 3,000 procedures (surgeries, cancer, heart, kidney and more) at listed government and private hospitals. It works together with the central Ayushman Bharat (PM-JAY) scheme. You show your card or Aadhaar at the hospital\'s Aarogya Mithra desk.',
      te: 'అర్హత ఉన్న AP కుటుంబాలకు జాబితాలోని ప్రభుత్వ, ప్రైవేట్ ఆసుపత్రుల్లో 3,000కు పైగా చికిత్సలకు (ఆపరేషన్లు, క్యాన్సర్, గుండె, కిడ్నీ మొదలైనవి) ఏడాదికి ₹25 లక్షల వరకు నగదు రహిత వైద్యం. ఇది కేంద్ర ఆయుష్మాన్ భారత్ (PM-JAY)తో కలిసి పనిచేస్తుంది. ఆసుపత్రిలోని ఆరోగ్య మిత్ర డెస్క్ వద్ద మీ కార్డు లేదా ఆధార్ చూపించాలి.',
    },
    keywords: ['health', 'hospital', 'aarogyasri', 'vaidya seva', 'ayushman', 'PMJAY', 'surgery', 'free treatment', 'ఆరోగ్యశ్రీ', 'వైద్య సేవ', 'ఆసుపత్రి', 'ఆపరేషన్'],
    whoCanApply: [
      { en: 'Families with a rice card are covered', te: 'రైస్ కార్డు ఉన్న కుటుంబాలు కవర్ అవుతాయి' },
      { en: 'Other families within the income limit (about ₹5 lakh a year) and land limits may also qualify', te: 'ఆదాయ పరిమితి (ఏడాదికి సుమారు ₹5 లక్షలు) మరియు భూమి పరిమితిలోపు ఉన్న ఇతర కుటుంబాలు కూడా అర్హులు కావచ్చు' },
      { en: 'The government approved extending cover to all families (Universal Health Policy). Ask at the Aarogya Mithra desk or call 104 whether it applies to you yet', te: 'అన్ని కుటుంబాలకూ కవర్ విస్తరించడానికి ప్రభుత్వం ఆమోదించింది (యూనివర్సల్ హెల్త్ పాలసీ). మీకు ఇప్పటికే వర్తిస్తుందో ఆరోగ్య మిత్ర డెస్క్‌లో అడగండి లేదా 104కు కాల్ చేయండి' },
      { en: 'Government employees and pensioners use the separate Employee Health Scheme (EHS)', te: 'ప్రభుత్వ ఉద్యోగులు, పెన్షనర్లు వేరే ఎంప్లాయీ హెల్త్ స్కీమ్ (EHS) వాడతారు' },
    ],
    documents: [
      { en: 'Health card or card number (if you have one)', te: 'హెల్త్ కార్డు లేదా కార్డు నంబర్ (ఉంటే)' },
      { en: 'Aadhaar of the patient', te: 'రోగి ఆధార్' },
      { en: 'Rice card', te: 'రైస్ కార్డు' },
      { en: 'Doctor\'s referral and test reports, if any', te: 'డాక్టర్ రిఫరల్ మరియు టెస్ట్ రిపోర్టులు (ఉంటే)' },
    ],
    fees: [
      {
        item: { en: 'Treatment of listed procedures at network hospitals', te: 'నెట్‌వర్క్ ఆసుపత్రుల్లో జాబితాలోని చికిత్సలు' },
        amount: { en: 'Free (cashless) up to ₹25 lakh per family per year', te: 'కుటుంబానికి ఏడాదికి ₹25 లక్షల వరకు ఉచితం (నగదు రహితం)' },
      },
      {
        item: { en: 'Medicines and follow-up after discharge', te: 'డిశ్చార్జ్ తర్వాత మందులు, ఫాలో-అప్' },
        amount: { en: 'Covered for the follow-up period of the procedure', te: 'చికిత్స ఫాలో-అప్ కాలానికి కవర్ అవుతుంది' },
      },
    ],
    steps: [
      { en: 'Find a network hospital: ask at your secretariat or call 104.', te: 'నెట్‌వర్క్ ఆసుపత్రి కనుక్కోండి: సచివాలయంలో అడగండి లేదా 104కు కాల్ చేయండి.' },
      { en: 'At the hospital, go first to the Aarogya Mithra desk — before paying anything.', te: 'ఆసుపత్రిలో ఏమీ చెల్లించే ముందే, మొదట ఆరోగ్య మిత్ర డెస్క్‌కు వెళ్లండి.' },
      { en: 'Show the health card, or Aadhaar and rice card. They check eligibility and register the patient.', te: 'హెల్త్ కార్డు, లేదా ఆధార్ మరియు రైస్ కార్డు చూపించండి. అర్హత తనిఖీ చేసి రోగిని నమోదు చేస్తారు.' },
      { en: 'For planned surgery, the hospital gets pre-approval from the Trust. Emergency treatment starts immediately.', te: 'ముందుగా నిర్ణయించిన ఆపరేషన్‌కు ఆసుపత్రి ట్రస్ట్ నుండి ముందస్తు ఆమోదం తీసుకుంటుంది. అత్యవసర చికిత్స వెంటనే మొదలవుతుంది.' },
      { en: 'Get treatment, discharge papers and follow-up medicines without paying.', te: 'డబ్బు చెల్లించకుండానే చికిత్స, డిశ్చార్జ్ పత్రాలు, ఫాలో-అప్ మందులు తీసుకోండి.' },
    ],
    whereToApply: [
      { en: 'Aarogya Mithra desk at any network hospital', te: 'ఏ నెట్‌వర్క్ ఆసుపత్రిలోనైనా ఆరోగ్య మిత్ర డెస్క్' },
      { en: 'Health card help: Village / Ward Secretariat', te: 'హెల్త్ కార్డు సహాయం: గ్రామ / వార్డు సచివాలయం' },
      { en: 'Ayushman card: beneficiary.nha.gov.in or the Ayushman app', te: 'ఆయుష్మాన్ కార్డు: beneficiary.nha.gov.in లేదా ఆయుష్మాన్ యాప్' },
    ],
    timeline: {
      en: 'Emergency care starts at once. Pre-approval for planned surgery usually comes within hours to a day.',
      te: 'అత్యవసర వైద్యం వెంటనే. ముందస్తు ఆపరేషన్ ఆమోదం సాధారణంగా కొన్ని గంటల నుండి ఒక రోజులో వస్తుంది.',
    },
    tips: [
      { en: 'If a network hospital asks you for money for a covered treatment, refuse and complain on 104.', te: 'కవర్ అయ్యే చికిత్సకు నెట్‌వర్క్ ఆసుపత్రి డబ్బు అడిగితే, ఇవ్వకుండా 104కు ఫిర్యాదు చేయండి.' },
      { en: 'This scheme was earlier called Aarogyasri.', te: 'ఈ పథకాన్ని ఇంతకుముందు ఆరోగ్యశ్రీ అనేవారు.' },
      { en: 'Outpatient visits (OP) and normal medicines are not covered — only listed procedures and admissions.', te: 'ఔట్‌పేషెంట్ (OP) చూపించుకోవడం, సాధారణ మందులు కవర్ కావు — జాబితాలోని చికిత్సలు, అడ్మిషన్లు మాత్రమే.' },
    ],
    links: [
      { label: 'Ayushman Bharat card (PM-JAY)', url: 'https://beneficiary.nha.gov.in' },
    ],
    helpline: { label: { en: 'Health helpline', te: 'ఆరోగ్య హెల్ప్‌లైన్' }, number: '104' },
    lastChecked: '2026-10-19',
  },

  // ─────────────────────────────────────────── FOOD & GAS ──
  {
    id: 'deepam-free-gas',
    category: 'food',
    level: 'state',
    title: {
      en: 'Deepam-2 — three free gas cylinders a year',
      te: 'దీపం-2 — ఏడాదికి మూడు ఉచిత గ్యాస్ సిలిండర్లు',
    },
    summary: {
      en: 'Families with a rice card and an LPG connection get the cost of three cooking-gas cylinders a year back from the AP government — one in each four-month period. You book through your gas agency as usual, and the money is credited to your bank account.',
      te: 'రైస్ కార్డు మరియు LPG కనెక్షన్ ఉన్న కుటుంబాలకు ఏడాదికి మూడు వంట గ్యాస్ సిలిండర్ల ఖర్చును AP ప్రభుత్వం తిరిగి ఇస్తుంది — ప్రతి నాలుగు నెలలకు ఒకటి. మామూలుగానే మీ గ్యాస్ ఏజెన్సీ ద్వారా బుక్ చేయాలి, డబ్బు మీ బ్యాంక్ ఖాతాకు జమ అవుతుంది.',
    },
    keywords: ['gas', 'LPG', 'cylinder', 'deepam', 'free', 'subsidy', 'గ్యాస్', 'సిలిండర్', 'దీపం'],
    whoCanApply: [
      { en: 'Households with an active rice card', te: 'యాక్టివ్ రైస్ కార్డు ఉన్న కుటుంబాలు' },
      { en: 'An LPG connection (any company) in a family member\'s name, with e-KYC done', te: 'కుటుంబ సభ్యుని పేరిట LPG కనెక్షన్ (ఏ కంపెనీదైనా), ఈ-KYC పూర్తి చేసి ఉండాలి' },
    ],
    documents: [
      { en: 'Rice card and Aadhaar', te: 'రైస్ కార్డు మరియు ఆధార్' },
      { en: 'LPG consumer number', te: 'LPG కన్స్యూమర్ నంబర్' },
      { en: 'Bank account linked to Aadhaar', te: 'ఆధార్‌తో లింక్ అయిన బ్యాంక్ ఖాతా' },
    ],
    fees: [
      {
        item: { en: 'Benefit', te: 'లబ్ధి' },
        amount: { en: 'Full price of 3 cylinders a year, credited to your bank', te: 'ఏడాదికి 3 సిలిండర్ల పూర్తి ధర, బ్యాంక్ ఖాతాకు జమ' },
      },
    ],
    steps: [
      { en: 'Make sure your gas connection has e-KYC done (ask your gas agency or delivery person) and is linked to Aadhaar.', te: 'మీ గ్యాస్ కనెక్షన్‌కు ఈ-KYC అయిందో, ఆధార్‌తో లింక్ అయిందో చూసుకోండి (గ్యాస్ ఏజెన్సీ లేదా డెలివరీ వ్యక్తిని అడగండి).' },
      { en: 'Book a cylinder in the normal way (IVRS call, app or WhatsApp of your gas company).', te: 'మామూలుగా సిలిండర్ బుక్ చేయండి (మీ గ్యాస్ కంపెనీ IVRS కాల్, యాప్ లేదా వాట్సాప్).' },
      { en: 'Pay at delivery if asked. The state credits the amount to your Aadhaar-linked bank account — in recent phases it has also been paid in advance.', te: 'డెలివరీ సమయంలో అడిగితే చెల్లించండి. రాష్ట్ర ప్రభుత్వం మొత్తాన్ని మీ ఆధార్ లింక్ బ్యాంక్ ఖాతాకు జమ చేస్తుంది — ఇటీవలి విడతల్లో ముందుగానే కూడా ఇచ్చారు.' },
      { en: 'Book one cylinder in each period: April–July, August–November and December–March. An unused period does not carry over.', te: 'ప్రతి కాలంలో ఒక సిలిండర్ బుక్ చేయండి: ఏప్రిల్–జూలై, ఆగస్టు–నవంబర్, డిసెంబర్–మార్చి. వాడని కాలం తర్వాతికి రాదు.' },
    ],
    whereToApply: [
      { en: 'No separate application — your gas agency and the secretariat handle it', te: 'ప్రత్యేక దరఖాస్తు లేదు — మీ గ్యాస్ ఏజెన్సీ మరియు సచివాలయం చూసుకుంటాయి' },
      { en: 'Complaints: toll-free 1967', te: 'ఫిర్యాదులు: టోల్ ఫ్రీ 1967' },
    ],
    timeline: {
      en: 'The refund has usually been credited within about 2 days of delivery.',
      te: 'డెలివరీ తర్వాత సాధారణంగా సుమారు 2 రోజుల్లో డబ్బు జమ అవుతోంది.',
    },
    tips: [
      { en: 'Book before the period ends — the current period ends 30 November.', te: 'కాలం ముగిసేలోపే బుక్ చేయండి — ప్రస్తుత కాలం నవంబర్ 30తో ముగుస్తుంది.' },
      { en: 'If the money doesn\'t come, check that your bank account is Aadhaar-seeded for DBT, then call 1967.', te: 'డబ్బు రాకపోతే, DBT కోసం బ్యాంక్ ఖాతా ఆధార్‌తో సీడ్ అయిందో చూసి, 1967కు కాల్ చేయండి.' },
    ],
    links: [],
    helpline: { label: { en: 'Civil Supplies toll-free', te: 'పౌర సరఫరాల టోల్ ఫ్రీ' }, number: '1967' },
    lastChecked: '2026-10-19',
  },

  // ─────────────────────────────────────────── WELFARE ──
  {
    id: 'stree-shakti-free-bus',
    category: 'welfare',
    level: 'state',
    title: {
      en: 'Stree Shakti — free APSRTC bus travel for women',
      te: 'స్త్రీ శక్తి — మహిళలకు APSRTC బస్సుల్లో ఉచిత ప్రయాణం',
    },
    summary: {
      en: 'Since 15 August 2025, women, girls and transgender persons who live in AP travel free on most APSRTC buses within the state. Show an ID to the conductor and take a zero-fare ticket.',
      te: '15 ఆగస్టు 2025 నుండి, APలో నివసించే మహిళలు, బాలికలు, ట్రాన్స్‌జెండర్ వ్యక్తులు రాష్ట్రంలోపల చాలా APSRTC బస్సుల్లో ఉచితంగా ప్రయాణించవచ్చు. కండక్టర్‌కు ID చూపించి జీరో-ఫేర్ టికెట్ తీసుకోండి.',
    },
    keywords: ['bus', 'free bus', 'APSRTC', 'women', 'stree shakti', 'zero fare', 'బస్సు', 'ఉచిత బస్సు', 'మహిళలు', 'స్త్రీ శక్తి'],
    whoCanApply: [
      { en: 'Women, girls and transgender persons who are residents of AP', te: 'AP నివాసులైన మహిళలు, బాలికలు, ట్రాన్స్‌జెండర్ వ్యక్తులు' },
    ],
    documents: [
      { en: 'Any one ID with an AP address: Aadhaar, voter ID, rice card or driving licence', te: 'AP చిరునామా ఉన్న ఏదైనా ఒక ID: ఆధార్, ఓటర్ ID, రైస్ కార్డు లేదా డ్రైవింగ్ లైసెన్స్' },
    ],
    fees: [
      {
        item: { en: 'Pallevelugu, Ultra Pallevelugu, City Ordinary, Metro Express, Express', te: 'పల్లెవెలుగు, అల్ట్రా పల్లెవెలుగు, సిటీ ఆర్డినరీ, మెట్రో ఎక్స్‌ప్రెస్, ఎక్స్‌ప్రెస్' },
        amount: { en: 'Free', te: 'ఉచితం' },
      },
      {
        item: { en: 'Non-stop, Super Luxury, AC buses, inter-state, chartered and package tours', te: 'నాన్-స్టాప్, సూపర్ లగ్జరీ, AC బస్సులు, అంతర్రాష్ట్ర, చార్టర్డ్, ప్యాకేజీ టూర్లు' },
        amount: { en: 'Normal fare (not covered)', te: 'సాధారణ ఛార్జీ (వర్తించదు)' },
      },
    ],
    steps: [
      { en: 'Board an eligible bus (check the board on the bus).', te: 'అర్హత ఉన్న బస్సు ఎక్కండి (బస్సుపై బోర్డు చూడండి).' },
      { en: 'Show your ID to the conductor.', te: 'కండక్టర్‌కు మీ ID చూపించండి.' },
      { en: 'Take the zero-fare ticket and keep it until you get off.', te: 'జీరో-ఫేర్ టికెట్ తీసుకుని దిగే వరకు దాచుకోండి.' },
    ],
    whereToApply: [
      { en: 'Nothing to apply for — it works on the bus', te: 'దరఖాస్తు అవసరం లేదు — బస్సులోనే పనిచేస్తుంది' },
    ],
    timeline: {
      en: 'Immediate.',
      te: 'వెంటనే.',
    },
    tips: [
      { en: 'Travel must start and end inside AP.', te: 'ప్రయాణం APలోనే మొదలై APలోనే ముగియాలి.' },
      { en: 'Some ghat-road services were excluded at launch; the government later extended free travel to Tirumala buses — ask at the depot for your route.', te: 'ప్రారంభంలో కొన్ని ఘాట్ రోడ్ సర్వీసులు మినహాయించారు; తర్వాత తిరుమల బస్సులకు ఉచిత ప్రయాణం విస్తరించారు — మీ రూట్ గురించి డిపోలో అడగండి.' },
    ],
    links: [
      { label: 'APSRTC', url: 'https://www.apsrtconline.in' },
    ],
    lastChecked: '2026-10-19',
  },
];
