import { Guide } from '../types';
import { b, CHECKED, fee } from './bi';

/** Full walkthroughs, batch A part 2 (checked 19 Oct 2026): welfare, solar, taxes, vehicle, passport. */
export const deepA2: Record<string, Partial<Guide>> = {
  // ───────────────────────────────────────────── RICE CARD
  'rice-card': {
    stages: [
      {
        title: b('Check if your family qualifies', 'మీ కుటుంబం అర్హమో చూసుకోవడం'),
        steps: [
          b('The system runs a "six-step validation" on every member\'s Aadhaar: family income (about ₹10,000/month in villages, ₹12,000 in towns), land held, electricity use, four-wheeler (autos, taxis and tractors are allowed), government job, income-tax filing and big urban property.', 'ప్రతి సభ్యుని ఆధార్‌పై సిస్టమ్ "సిక్స్-స్టెప్ వాలిడేషన్" చేస్తుంది: కుటుంబ ఆదాయం (గ్రామాల్లో నెలకు సుమారు ₹10,000, పట్టణాల్లో ₹12,000), భూమి, విద్యుత్ వాడకం, నాలుగు చక్రాల వాహనం (ఆటోలు, టాక్సీలు, ట్రాక్టర్లకు అనుమతి), ప్రభుత్వ ఉద్యోగం, ఆదాయపు పన్ను, పెద్ద పట్టణ ఆస్తి.'),
          b('Ask the Secretariat staff to check your family\'s six-step status before applying — if one member is wrongly flagged (e.g. land sold long ago), you can fix that first with documents.', 'దరఖాస్తుకు ముందు మీ కుటుంబ సిక్స్-స్టెప్ స్టేటస్ చూడమని సచివాలయ సిబ్బందిని అడగండి — ఒక సభ్యుడు తప్పుగా ఫ్లాగ్ అయితే (ఉదా: ఎప్పుడో అమ్మేసిన భూమి), పత్రాలతో ముందుగా దాన్ని సరిచేయవచ్చు.'),
        ],
      },
      {
        title: b('Collect papers for your service', 'మీ సేవకు పత్రాలు సేకరించడం'),
        steps: [
          b('New card: Aadhaar of every member; for a widow, the husband\'s death certificate.', 'కొత్త కార్డు: ప్రతి సభ్యుని ఆధార్; వితంతువుకు భర్త మరణ ధృవీకరణ.'),
          b('Add a member: the existing card, Aadhaar of the new member, and birth certificate (child) or marriage certificate + photo (bride).', 'సభ్యుని చేర్పు: ప్రస్తుత కార్డు, కొత్త సభ్యుని ఆధార్, జనన ధృవీకరణ (పిల్లలు) లేదా వివాహ ధృవీకరణ + ఫోటో (వధువు).'),
          b('Split (newly married couple wants a separate card): marriage certificate and Aadhaar of both.', 'విభజన (కొత్త దంపతులకు వేరే కార్డు): వివాహ ధృవీకరణ, ఇద్దరి ఆధార్.'),
          b('Remove a member: death certificate (or the reason, e.g. married and moved).', 'సభ్యుని తొలగింపు: మరణ ధృవీకరణ (లేదా కారణం, ఉదా: పెళ్లై వెళ్లిపోవడం).'),
          b('Address change / Aadhaar correction / surrender: the card, Aadhaar and address proof.', 'చిరునామా మార్పు / ఆధార్ సవరణ / సరెండర్: కార్డు, ఆధార్, చిరునామా రుజువు.'),
        ],
      },
      {
        title: b('Apply at the Secretariat', 'సచివాలయంలో దరఖాస్తు'),
        steps: [
          b('Go to your Village / Ward Secretariat (Swarna Gramam / Swarna Ward). The Digital Assistant enters the request; MeeSeva and Mana Mitra WhatsApp also accept some rice card services.', 'మీ గ్రామ / వార్డు సచివాలయానికి (స్వర్ణ గ్రామం / స్వర్ణ వార్డు) వెళ్లండి. డిజిటల్ అసిస్టెంట్ నమోదు చేస్తారు; మీసేవ, మన మిత్ర వాట్సాప్ కూడా కొన్ని రైస్ కార్డు సేవలు తీసుకుంటాయి.'),
          b('Pay the small fee — you get a receipt with a "T" number. Keep it; this is how you track.', 'చిన్న ఫీజు చెల్లించండి — "T" నంబర్‌తో రసీదు వస్తుంది. దాచుకోండి; దీనితోనే ట్రాక్ చేస్తారు.'),
          b('Each member (or the new member) gives Aadhaar e-KYC (fingerprint) — at the Secretariat or when staff visit.', 'ప్రతి సభ్యుడు (లేదా కొత్త సభ్యుడు) ఆధార్ e-KYC (వేలిముద్ర) ఇవ్వాలి — సచివాలయంలో లేదా సిబ్బంది వచ్చినప్పుడు.'),
        ],
      },
      {
        title: b('Verification and approval', 'ధృవీకరణ, ఆమోదం'),
        steps: [
          b('The VRO verifies (may visit your house) and forwards to the Tahsildar, who approves.', 'VRO ధృవీకరిస్తారు (ఇంటికి రావచ్చు), తహసీల్దార్‌కు పంపుతారు, వారు ఆమోదిస్తారు.'),
          b('Track with the T-number on the AP Seva portal or at the Secretariat.', 'T-నంబర్‌తో AP సేవ పోర్టల్‌లో లేదా సచివాలయంలో ట్రాక్ చేయండి.'),
          b('Once approved, the card is active at your fair-price (ration) shop — collect ration with fingerprint. New smart QR rice cards are distributed by Secretariat staff.', 'ఆమోదం తర్వాత మీ చౌక ధరల (రేషన్) దుకాణంలో కార్డు యాక్టివ్ — వేలిముద్రతో రేషన్ తీసుకోండి. కొత్త స్మార్ట్ QR రైస్ కార్డులను సచివాలయ సిబ్బంది పంపిణీ చేస్తారు.'),
        ],
      },
    ],
    costExample: b('Secretariat fee only: around ₹24 for a new card and ₹48 for a split (as printed on the receipt). Ration itself is subsidised/free as per the scheme.', 'సచివాలయ ఫీజు మాత్రమే: కొత్త కార్డుకు సుమారు ₹24, విభజనకు ₹48 (రసీదుపై ముద్రించినట్లు). రేషన్ పథకం ప్రకారం సబ్సిడీ/ఉచితం.'),
    problems: [
      { problem: b('Rejected because a member "has more than 3 acres" or "pays income tax" — but it\'s not true.', 'ఒక సభ్యునికి "3 ఎకరాలకు పైగా ఉంది" లేదా "ఆదాయపు పన్ను కడుతున్నారు" అని తిరస్కరించారు — కానీ అది నిజం కాదు.'), fix: b('Give proof to the VRO (sale deed of land sold, current 1B, or a statement that no return is filed). The VRO can correct the flag; then reapply.', 'VROకు రుజువు ఇవ్వండి (అమ్మిన భూమి సేల్ డీడ్, ప్రస్తుత 1B, లేదా రిటర్న్ దాఖలు చేయలేదని ప్రకటన). VRO ఫ్లాగ్ సరిచేయగలరు; తర్వాత మళ్లీ దరఖాస్తు చేయండి.') },
      { problem: b('Card became inactive.', 'కార్డు ఇనాక్టివ్ అయింది.'), fix: b('Usually because e-KYC was not done or ration wasn\'t taken for months. Do e-KYC for all members at the ration shop or Secretariat and ask the VRO to reactivate.', 'సాధారణంగా e-KYC చేయకపోవడం లేదా నెలల తరబడి రేషన్ తీసుకోకపోవడం వల్ల. రేషన్ దుకాణం లేదా సచివాలయంలో సభ్యులందరికీ e-KYC చేయించి, తిరిగి యాక్టివ్ చేయమని VROను అడగండి.') },
      { problem: b('Fingerprint doesn\'t match at the ration shop.', 'రేషన్ దుకాణంలో వేలిముద్ర సరిపోవడం లేదు.'), fix: b('Another family member on the card can authenticate, or the dealer can use iris / OTP where available. Update biometrics at an Aadhaar centre.', 'కార్డులోని ఇంకో కుటుంబ సభ్యుడు ధృవీకరించవచ్చు, లేదా అందుబాటులో ఉంటే డీలర్ కనుపాప / OTP వాడవచ్చు. ఆధార్ కేంద్రంలో బయోమెట్రిక్స్ అప్‌డేట్ చేయించండి.') },
    ],
    afterwards: [
      b('Take ration regularly and keep e-KYC current — an unused card can be suspended, and many schemes check the card.', 'క్రమం తప్పకుండా రేషన్ తీసుకుని e-KYC తాజాగా ఉంచండి — వాడని కార్డు సస్పెండ్ కావచ్చు; చాలా పథకాలు కార్డును తనిఖీ చేస్తాయి.'),
      b('Working in another state? Under One Nation One Ration Card you can take your ration there with fingerprint.', 'ఇంకో రాష్ట్రంలో పనిచేస్తున్నారా? వన్ నేషన్ వన్ రేషన్ కార్డ్ కింద అక్కడే వేలిముద్రతో రేషన్ తీసుకోవచ్చు.'),
    ],
    lastChecked: CHECKED,
  },

  // ───────────────────────────────────────────── NTR BHAROSA PENSION
  'ntr-bharosa-pension': {
    stages: [
      {
        title: b('Check category and eligibility', 'వర్గం, అర్హత చూసుకోవడం'),
        steps: [
          b('Find your category: old age (60+), widow, single woman, person with disability (40%+ on SADAREM), weaver, fisherman, toddy tapper, cobbler, Dappu artist, transgender person, and others — about 28 categories.', 'మీ వర్గం కనుక్కోండి: వృద్ధాప్య (60+), వితంతు, ఒంటరి మహిళ, దివ్యాంగులు (SADAREMలో 40%+), చేనేత, మత్స్యకార, గీత కార్మికులు, చర్మకారులు, డప్పు కళాకారులు, ట్రాన్స్‌జెండర్ వ్యక్తులు మొదలైనవి — సుమారు 28 వర్గాలు.'),
          b('Your household must pass the six-step validation (low income, limited land, no government employee or income-tax payer, no four-wheeler except auto/taxi/tractor).', 'మీ కుటుంబం సిక్స్-స్టెప్ వాలిడేషన్ దాటాలి (తక్కువ ఆదాయం, పరిమిత భూమి, ప్రభుత్వ ఉద్యోగి లేదా ఆదాయపు పన్ను చెల్లింపుదారు లేకపోవడం, ఆటో/టాక్సీ/ట్రాక్టర్ తప్ప నాలుగు చక్రాల వాహనం లేకపోవడం).'),
          b('Disability pension: first get a SADAREM certificate — book the assessment on Mana Mitra WhatsApp (9552300009).', 'దివ్యాంగ పెన్షన్: ముందుగా SADAREM సర్టిఫికెట్ తీసుకోండి — మన మిత్ర వాట్సాప్ (9552300009)లో అసెస్‌మెంట్ బుక్ చేయండి.'),
        ],
      },
      {
        title: b('Prepare papers for your category', 'మీ వర్గానికి పత్రాలు సిద్ధం'),
        steps: [
          b('Everyone: Aadhaar (linked mobile), rice card or income certificate, bank passbook (Aadhaar-seeded account), photo.', 'అందరికీ: ఆధార్ (లింక్ మొబైల్), రైస్ కార్డు లేదా ఆదాయ ధృవీకరణ, బ్యాంక్ పాస్‌బుక్ (ఆధార్ సీడ్ అయిన ఖాతా), ఫోటో.'),
          b('Widow: husband\'s death certificate. Single woman: divorce decree, or an unmarried certificate from the Tahsildar.', 'వితంతువు: భర్త మరణ ధృవీకరణ. ఒంటరి మహిళ: విడాకుల డిక్రీ, లేదా తహసీల్దార్ నుండి అవివాహిత ధృవీకరణ.'),
          b('Disability: SADAREM certificate (40% or more). Occupation groups: certificate from the department (Handloom, Fisheries, Excise etc.). Transgender: District Medical Board certificate.', 'దివ్యాంగులు: SADAREM సర్టిఫికెట్ (40% లేదా ఎక్కువ). వృత్తి వర్గాలు: శాఖ సర్టిఫికెట్ (చేనేత, మత్స్య, ఎక్సైజ్ మొ.). ట్రాన్స్‌జెండర్: జిల్లా మెడికల్ బోర్డు సర్టిఫికెట్.'),
        ],
      },
      {
        title: b('Apply when the window is open', 'విండో తెరిచినప్పుడు దరఖాస్తు'),
        steps: [
          b('New applications are taken in announced windows (for example 7–16 September 2026). Ask the Welfare & Education Assistant at your Secretariat when the next window opens.', 'కొత్త దరఖాస్తులు ప్రకటించిన విండోల్లో తీసుకుంటారు (ఉదా: 7–16 సెప్టెంబర్ 2026). తదుపరి విండో ఎప్పుడో మీ సచివాలయంలోని సంక్షేమ & విద్యా సహాయకుడిని అడగండి.'),
          b('During the window, go to the Secretariat (Swarna Gramam / Swarna Ward). Your details are registered online and you give fingerprint e-KYC. Take the acknowledgement.', 'విండో సమయంలో సచివాలయానికి (స్వర్ణ గ్రామం / స్వర్ణ వార్డు) వెళ్లండి. మీ వివరాలు ఆన్‌లైన్‌లో నమోదు చేసి వేలిముద్ర e-KYC తీసుకుంటారు. అక్నాలెడ్జ్‌మెంట్ తీసుకోండి.'),
          b('Spouse of a pensioner who died: the spouse pension is sanctioned faster — inform the Secretariat with the death certificate as soon as possible.', 'చనిపోయిన పెన్షనర్ జీవిత భాగస్వామి: స్పౌజ్ పెన్షన్ త్వరగా మంజూరవుతుంది — మరణ ధృవీకరణతో వీలైనంత త్వరగా సచివాలయానికి తెలియజేయండి.'),
        ],
      },
      {
        title: b('Verification, sanction and payment', 'ధృవీకరణ, మంజూరు, చెల్లింపు'),
        steps: [
          b('Eligibility is checked online, then field verification; SERP sends the list for approval and sanctions are released in phases.', 'అర్హత ఆన్‌లైన్‌లో తనిఖీ, తర్వాత క్షేత్ర ధృవీకరణ; SERP ఆమోదానికి జాబితా పంపుతుంది, మంజూరులు దశలవారీగా విడుదల.'),
          b('Once sanctioned, the pension is handed over at your home by Secretariat staff on the 1st of each month (with fingerprint / face authentication).', 'మంజూరు తర్వాత, ప్రతి నెల 1వ తేదీన సచివాలయ సిబ్బంది ఇంటి వద్దే పెన్షన్ ఇస్తారు (వేలిముద్ర / ముఖ ధృవీకరణతో).'),
          b('Pensioners under the central NSAP part get the money in their Aadhaar-linked bank account from 1 October 2026 — keep that account active.', 'కేంద్ర NSAP భాగంలోని పెన్షనర్లకు 1 అక్టోబర్ 2026 నుండి ఆధార్ లింక్ బ్యాంక్ ఖాతాలో డబ్బు వస్తుంది — ఆ ఖాతా యాక్టివ్‌గా ఉంచండి.'),
        ],
      },
    ],
    costExample: b('Applying is free. Monthly amounts: ₹4,000 (most categories), ₹6,000 (disability), ₹15,000 (fully disabled / bedridden and some serious illnesses).', 'దరఖాస్తు ఉచితం. నెలవారీ మొత్తాలు: ₹4,000 (చాలా వర్గాలు), ₹6,000 (దివ్యాంగులు), ₹15,000 (పూర్తి వైకల్యం / మంచాన పడినవారు, కొన్ని తీవ్ర వ్యాధులు).'),
    problems: [
      { problem: b('"Not eligible" in six-step validation.', 'సిక్స్-స్టెప్ వాలిడేషన్‌లో "అనర్హులు".'), fix: b('Ask which step failed. If the data is wrong (land, electricity, vehicle, IT), give proof to the Secretariat for correction and apply in the next window.', 'ఏ దశ విఫలమైందో అడగండి. డేటా తప్పయితే (భూమి, విద్యుత్, వాహనం, IT), సవరణకు సచివాలయానికి రుజువు ఇచ్చి తదుపరి విండోలో దరఖాస్తు చేయండి.') },
      { problem: b('Pension stopped suddenly.', 'పెన్షన్ అకస్మాత్తుగా ఆగిపోయింది.'), fix: b('Common reasons: missed authentication for months, six-step flag, or bank not Aadhaar-seeded. Ask the Welfare Assistant for the reason and give the documents; raise a PGRS grievance if not fixed.', 'సాధారణ కారణాలు: నెలల తరబడి ధృవీకరణ మిస్, సిక్స్-స్టెప్ ఫ్లాగ్, బ్యాంక్ ఆధార్ సీడ్ కాకపోవడం. కారణం సంక్షేమ సహాయకుడిని అడిగి పత్రాలు ఇవ్వండి; సరి కాకపోతే PGRS ఫిర్యాదు చేయండి.') },
      { problem: b('Pensioner is bedridden and can\'t give fingerprint.', 'పెన్షనర్ మంచాన ఉన్నారు, వేలిముద్ర ఇవ్వలేరు.'), fix: b('Staff come home; face authentication or an authorised family member can be used — tell the Secretariat.', 'సిబ్బంది ఇంటికి వస్తారు; ముఖ ధృవీకరణ లేదా అధీకృత కుటుంబ సభ్యుని వాడవచ్చు — సచివాలయానికి చెప్పండి.') },
    ],
    afterwards: [b('Tell the Secretariat if you move house or change bank, so the pension follows you.', 'ఇల్లు మారినా, బ్యాంక్ మారినా సచివాలయానికి చెప్పండి — పెన్షన్ మీతో పాటు వస్తుంది.')],
    lastChecked: CHECKED,
  },

  // ───────────────────────────────────────────── PM SURYA GHAR
  'pm-surya-ghar': {
    stages: [
      {
        title: b('Decide the size and check your roof', 'సైజు నిర్ణయించి పైకప్పు చూడడం'),
        steps: [
          b('Look at your last 6 electricity bills. Up to 150 units a month → 1–2 kW; 150–300 → 2–3 kW; above 300 → 3 kW or more.', 'మీ చివరి 6 కరెంట్ బిల్లులు చూడండి. నెలకు 150 యూనిట్ల వరకు → 1–2 kW; 150–300 → 2–3 kW; 300 పైన → 3 kW లేదా ఎక్కువ.'),
          b('Each kW needs about 80–100 sq ft of shade-free roof (no water tank or tree shadow from 9 am to 4 pm).', 'ప్రతి kWకు సుమారు 80–100 చ.అ. నీడ లేని పైకప్పు కావాలి (ఉదయం 9 నుండి సాయంత్రం 4 వరకు వాటర్ ట్యాంక్ లేదా చెట్టు నీడ ఉండకూడదు).'),
          b('SC/ST household? AP pays the balance so a system up to 2 kW is free. BC household? AP adds ₹20,000. Ask your DISCOM / Secretariat energy assistant how to claim this before you pick a vendor.', 'SC/ST కుటుంబమా? 2 kW వరకు సిస్టమ్ ఉచితంగా అయ్యేలా మిగతాది AP చెల్లిస్తుంది. BC కుటుంబమా? AP ₹20,000 కలుపుతుంది. వెండర్‌ను ఎంచుకునే ముందు దీన్ని ఎలా పొందాలో మీ DISCOM / సచివాలయ ఎనర్జీ అసిస్టెంట్‌ను అడగండి.'),
        ],
      },
      {
        title: b('Register and apply on the portal', 'పోర్టల్‌లో నమోదు, దరఖాస్తు'),
        steps: [
          b('Open pmsuryaghar.gov.in (or the PM Surya Ghar app) → "Apply for Rooftop Solar".', 'pmsuryaghar.gov.in (లేదా PM Surya Ghar యాప్) తెరిచి → "Apply for Rooftop Solar".'),
          b('Register: state Andhra Pradesh → your DISCOM (APEPDCL north, APCPDCL central, APSPDCL south) → electricity consumer number (from the bill) → mobile OTP → email.', 'నమోదు: రాష్ట్రం ఆంధ్రప్రదేశ్ → మీ DISCOM (APEPDCL ఉత్తర, APCPDCL మధ్య, APSPDCL దక్షిణ) → కరెంట్ కన్స్యూమర్ నంబర్ (బిల్లు నుండి) → మొబైల్ OTP → ఈమెయిల్.'),
          b('Log in with the consumer number and mobile → fill the rooftop solar form (capacity, roof type) → submit.', 'కన్స్యూమర్ నంబర్, మొబైల్‌తో లాగిన్ → రూఫ్‌టాప్ సోలార్ ఫారం (సామర్థ్యం, పైకప్పు రకం) నింపి → సబ్మిట్.'),
          b('Wait for the DISCOM\'s "feasibility approval" (SMS / portal), usually within a couple of weeks.', 'DISCOM "ఫీజిబిలిటీ ఆమోదం" కోసం ఆగండి (SMS / పోర్టల్), సాధారణంగా రెండు వారాల్లో.'),
        ],
      },
      {
        title: b('Choose a vendor and install', 'వెండర్‌ను ఎంచుకుని అమర్చడం'),
        steps: [
          b('Pick a vendor from the registered vendor list for your district on the portal. Get 2–3 written quotes.', 'పోర్టల్‌లో మీ జిల్లా రిజిస్టర్డ్ వెండర్ల జాబితా నుండి వెండర్‌ను ఎంచుకోండి. 2–3 రాతపూర్వక కొటేషన్లు తీసుకోండి.'),
          b('The quote must say: panel make (made-in-India, ALMM / DCR approved), inverter make, structure, wiring, earthing, warranty years and who does service.', 'కొటేషన్‌లో ఉండాలి: ప్యానెల్ తయారీ (మేడ్-ఇన్-ఇండియా, ALMM / DCR ఆమోదిత), ఇన్వర్టర్ తయారీ, స్ట్రక్చర్, వైరింగ్, ఎర్తింగ్, వారంటీ సంవత్సరాలు, సర్వీస్ ఎవరు చేస్తారు.'),
          b('Need a loan? Apply for the low-interest, collateral-free solar loan from the same portal before installation.', 'రుణం కావాలా? అమర్చడానికి ముందే అదే పోర్టల్ నుండి తక్కువ వడ్డీ, హామీ లేని సోలార్ రుణానికి దరఖాస్తు చేయండి.'),
          b('After installation, upload the plant details and photos on the portal and apply for the net meter.', 'అమర్చిన తర్వాత పోర్టల్‌లో ప్లాంట్ వివరాలు, ఫోటోలు అప్‌లోడ్ చేసి నెట్ మీటర్‌కు దరఖాస్తు చేయండి.'),
        ],
      },
      {
        title: b('Net meter, commissioning and subsidy', 'నెట్ మీటర్, కమిషనింగ్, సబ్సిడీ'),
        steps: [
          b('The DISCOM inspects, fits the net meter and issues the commissioning certificate on the portal.', 'DISCOM తనిఖీ చేసి, నెట్ మీటర్ పెట్టి, పోర్టల్‌లో కమిషనింగ్ సర్టిఫికెట్ ఇస్తుంది.'),
          b('Log in and enter your bank account and upload a cancelled cheque / passbook page.', 'లాగిన్ అయి మీ బ్యాంక్ ఖాతా నమోదు చేసి, క్యాన్సిల్డ్ చెక్ / పాస్‌బుక్ పేజీ అప్‌లోడ్ చేయండి.'),
          b('The central subsidy is credited directly, usually within about 30 days.', 'కేంద్ర సబ్సిడీ నేరుగా జమ అవుతుంది, సాధారణంగా సుమారు 30 రోజుల్లో.'),
        ],
      },
    ],
    costExample: b(
      'A 3 kW system at about ₹1.8–2.1 lakh: central subsidy ₹78,000 → you pay about ₹1.0–1.3 lakh (or take the solar loan). It produces roughly 350–400 units a month in AP sunshine, so most homes pay almost nothing for electricity afterwards. SC/ST family, 2 kW: effectively free under the AP top-up.',
      'సుమారు ₹1.8–2.1 లక్షల 3 kW సిస్టమ్: కేంద్ర సబ్సిడీ ₹78,000 → మీరు సుమారు ₹1.0–1.3 లక్షలు చెల్లించాలి (లేదా సోలార్ రుణం). AP ఎండలో నెలకు సుమారు 350–400 యూనిట్లు ఉత్పత్తి — తర్వాత చాలా ఇళ్లకు కరెంట్ బిల్లు దాదాపు ఉండదు. SC/ST కుటుంబం, 2 kW: AP అదనపు సహాయంతో దాదాపు ఉచితం.',
    ),
    problems: [
      { problem: b('Subsidy not received after commissioning.', 'కమిషనింగ్ తర్వాత సబ్సిడీ రాలేదు.'), fix: b('Check on the portal that bank details are entered and verified and that the account name matches the electricity connection holder. Raise a grievance on the portal or call 15555.', 'బ్యాంక్ వివరాలు నమోదై ధృవీకరించబడ్డాయో, ఖాతా పేరు కరెంట్ కనెక్షన్ హోల్డర్‌తో సరిపోతుందో పోర్టల్‌లో చూడండి. పోర్టల్‌లో ఫిర్యాదు చేయండి లేదా 15555కి కాల్ చేయండి.') },
      { problem: b('The connection is in a dead parent\'s name.', 'కనెక్షన్ చనిపోయిన తల్లి/తండ్రి పేరు మీద ఉంది.'), fix: b('Change the electricity connection name first (see the New Electricity Connection guide), then apply.', 'ముందుగా కరెంట్ కనెక్షన్ పేరు మార్చండి (కొత్త విద్యుత్ కనెక్షన్ గైడ్ చూడండి), తర్వాత దరఖాస్తు చేయండి.') },
      { problem: b('Vendor demands money for "subsidy processing".', 'వెండర్ "సబ్సిడీ ప్రాసెసింగ్"కు డబ్బు అడుగుతున్నారు.'), fix: b('The application is free and the subsidy comes from the government to you. Refuse and report the vendor on the portal.', 'దరఖాస్తు ఉచితం, సబ్సిడీ ప్రభుత్వం నుండి మీకే వస్తుంది. ఒప్పుకోకండి, పోర్టల్‌లో వెండర్‌పై ఫిర్యాదు చేయండి.') },
    ],
    afterwards: [
      b('Clean the panels with plain water every 2–3 weeks (early morning) — dust can cut output a lot.', 'ప్రతి 2–3 వారాలకు (ఉదయాన్నే) సాదా నీటితో ప్యానెల్స్ శుభ్రం చేయండి — దుమ్ము ఉత్పత్తిని బాగా తగ్గిస్తుంది.'),
      b('Check the net-meter "export" reading on your bill every month; call the vendor if generation drops.', 'ప్రతి నెల బిల్లులో నెట్-మీటర్ "ఎక్స్‌పోర్ట్" రీడింగ్ చూడండి; ఉత్పత్తి తగ్గితే వెండర్‌కు కాల్ చేయండి.'),
    ],
    lastChecked: CHECKED,
  },

  // ───────────────────────────────────────────── PROPERTY TAX + WATER TAX
  'property-tax': {
    title: b('Pay house tax and water tax (town or village)', 'ఇంటి పన్ను, నీటి పన్ను చెల్లింపు (పట్టణం లేదా గ్రామం)'),
    keywords: ['property tax', 'house tax', 'water tax', 'water bill', 'water charges', 'assessment', 'municipal tax', 'panchayat tax', 'ఇంటి పన్ను', 'ఆస్తి పన్ను', 'నీటి పన్ను', 'నీటి బిల్లు', 'పన్ను'],
    fees: [
      fee(b('House / property tax', 'ఇంటి / ఆస్తి పన్ను'), b('Fixed by your municipality / panchayat from area, use and location; due in two half-year instalments', 'విస్తీర్ణం, వాడకం, ప్రాంతం ఆధారంగా మీ మున్సిపాలిటీ / పంచాయతీ నిర్ణయిస్తుంది; రెండు అర్ధ సంవత్సర వాయిదాల్లో')),
      fee(b('Water charges (tap connection)', 'నీటి ఛార్జీలు (కుళాయి కనెక్షన్)'), b('Monthly / half-yearly fixed or metered charge set by the local body', 'స్థానిక సంస్థ నిర్ణయించే నెలవారీ / అర్ధవార్షిక స్థిర లేదా మీటర్ ఛార్జీ')),
      fee(b('Late payment', 'ఆలస్య చెల్లింపు'), b('Interest on arrears — watch for one-time interest waiver offers', 'బకాయిలపై వడ్డీ — వన్-టైమ్ వడ్డీ మాఫీ ఆఫర్ల కోసం చూడండి')),
    ],
    stages: [
      {
        title: b('Find your numbers', 'మీ నంబర్లు కనుక్కోవడం'),
        steps: [
          b('House tax: the "assessment number" is printed on any old tax receipt or demand notice. No receipt? Ask at the Ward / Village Secretariat with your door number.', 'ఇంటి పన్ను: "అసెస్‌మెంట్ నంబర్" ఏ పాత పన్ను రసీదు లేదా డిమాండ్ నోటీసుపైనైనా ఉంటుంది. రసీదు లేదా? డోర్ నంబర్‌తో వార్డు / గ్రామ సచివాలయంలో అడగండి.'),
          b('Water tax: the "water connection number" (HSC / consumer number) is on the water bill or connection receipt.', 'నీటి పన్ను: "నీటి కనెక్షన్ నంబర్" (HSC / కన్స్యూమర్ నంబర్) నీటి బిల్లు లేదా కనెక్షన్ రసీదుపై ఉంటుంది.'),
        ],
      },
      {
        title: b('Town / city: pay online', 'పట్టణం / నగరం: ఆన్‌లైన్ చెల్లింపు'),
        steps: [
          b('Open cdma.ap.gov.in → "Online Payments" (or the PuraSeva app).', 'cdma.ap.gov.in → "Online Payments" (లేదా PuraSeva యాప్) తెరవండి.'),
          b('House tax: choose "Property Tax" → district → municipality → search by assessment number (or door number / owner name) → the dues appear.', 'ఇంటి పన్ను: "Property Tax" → జిల్లా → మున్సిపాలిటీ → అసెస్‌మెంట్ నంబర్ (లేదా డోర్ నంబర్ / యజమాని పేరు)తో వెతకండి → బకాయిలు కనిపిస్తాయి.'),
          b('Water: choose "Water Charges" → municipality → connection number.', 'నీరు: "Water Charges" → మున్సిపాలిటీ → కనెక్షన్ నంబర్.'),
          b('Check the owner name and the amount, pay by UPI / card / net banking, and download the receipt (keep the PDF).', 'యజమాని పేరు, మొత్తం సరిచూసి, UPI / కార్డు / నెట్ బ్యాంకింగ్‌తో చెల్లించి, రసీదు డౌన్‌లోడ్ చేయండి (PDF దాచుకోండి).'),
        ],
        note: b('Big cities like Visakhapatnam (GVMC) and Vijayawada (VMC) also have their own sites and apps — the receipt is equally valid.', 'విశాఖపట్నం (GVMC), విజయవాడ (VMC) వంటి పెద్ద నగరాలకు సొంత సైట్లు, యాప్‌లు కూడా ఉన్నాయి — రసీదు సమానంగా చెల్లుతుంది.'),
      },
      {
        title: b('Village: pay to the panchayat', 'గ్రామం: పంచాయతీకి చెల్లింపు'),
        steps: [
          b('Open digitalpanchayat.ap.gov.in (or the AP Digital Panchayat app) → house tax → district, mandal, panchayat → assessment number → pay.', 'digitalpanchayat.ap.gov.in (లేదా AP Digital Panchayat యాప్) తెరిచి → ఇంటి పన్ను → జిల్లా, మండలం, పంచాయతీ → అసెస్‌మెంట్ నంబర్ → చెల్లించండి.'),
          b('Or pay at the Panchayat Secretary / Village Secretariat counter and take a computer receipt — never pay without a receipt.', 'లేదా పంచాయతీ కార్యదర్శి / గ్రామ సచివాలయ కౌంటర్‌లో చెల్లించి కంప్యూటర్ రసీదు తీసుకోండి — రసీదు లేకుండా ఎప్పుడూ చెల్లించకండి.'),
          b('Water tax for a panchayat tap is collected the same way.', 'పంచాయతీ కుళాయి నీటి పన్ను కూడా ఇలాగే వసూలు చేస్తారు.'),
        ],
      },
      {
        title: b('New house, or change the owner\'s name', 'కొత్త ఇల్లు, లేదా యజమాని పేరు మార్పు'),
        steps: [
          b('New house: apply for "New Assessment" at the Ward / Village Secretariat or municipal office with the registered deed, building permission, Aadhaar and a photo of the house. An official measures it and fixes the tax.', 'కొత్త ఇల్లు: రిజిస్టర్డ్ డీడ్, బిల్డింగ్ అనుమతి, ఆధార్, ఇంటి ఫోటోతో వార్డు / గ్రామ సచివాలయం లేదా మున్సిపల్ ఆఫీసులో "New Assessment"కు దరఖాస్తు చేయండి. అధికారి కొలిచి పన్ను నిర్ణయిస్తారు.'),
          b('Bought a house or inherited it: apply for "Title Transfer / Mutation" with the sale deed, or death certificate + Family Member Certificate; pay the mutation fee shown.', 'ఇల్లు కొన్నా లేదా వారసత్వంగా వచ్చినా: సేల్ డీడ్, లేదా మరణ ధృవీకరణ + కుటుంబ సభ్యుల ధృవీకరణతో "Title Transfer / Mutation"కు దరఖాస్తు చేసి చూపిన మ్యుటేషన్ ఫీజు చెల్లించండి.'),
          b('After the change, the next receipt shows the new name — keep it; it\'s needed for loans and connections.', 'మార్పు తర్వాత తదుపరి రసీదులో కొత్త పేరు వస్తుంది — దాచుకోండి; రుణాలు, కనెక్షన్లకు కావాలి.'),
        ],
      },
    ],
    costExample: b('Example: a small 2-room house in a municipality might pay a few hundred to a couple of thousand rupees a year in house tax plus a fixed monthly water charge — your exact demand appears when you search the assessment number.', 'ఉదాహరణ: మున్సిపాలిటీలో చిన్న 2-గదుల ఇంటికి ఏడాదికి కొన్ని వందల నుండి రెండు వేల రూపాయల ఇంటి పన్ను, అదనంగా నెలవారీ స్థిర నీటి ఛార్జీ — అసెస్‌మెంట్ నంబర్‌తో వెతికినప్పుడు మీ ఖచ్చిత డిమాండ్ కనిపిస్తుంది.'),
    problems: [
      { problem: b('The tax amount looks far too high.', 'పన్ను మొత్తం చాలా ఎక్కువగా ఉంది.'), fix: b('Ask for the assessment details (area, use — residential vs commercial). If wrong, file a "revision petition" at the municipal office within the time given in the notice.', 'అసెస్‌మెంట్ వివరాలు అడగండి (విస్తీర్ణం, వాడకం — నివాస vs వాణిజ్య). తప్పయితే, నోటీసులో ఇచ్చిన గడువులోగా మున్సిపల్ ఆఫీసులో "రివిజన్ పిటిషన్" దాఖలు చేయండి.') },
      { problem: b('Paid online but it still shows as due.', 'ఆన్‌లైన్‌లో చెల్లించాను కానీ ఇంకా బకాయి చూపిస్తోంది.'), fix: b('Keep the bank transaction ID and receipt; wait 2–3 working days, then show them at the municipal / panchayat office.', 'బ్యాంక్ ట్రాన్సాక్షన్ ID, రసీదు దాచుకోండి; 2–3 పని దినాలు ఆగి, తర్వాత మున్సిపల్ / పంచాయతీ ఆఫీసులో చూపించండి.') },
      { problem: b('Water supply is poor but bills keep coming.', 'నీటి సరఫరా సరిగా లేదు కానీ బిల్లులు వస్తున్నాయి.'), fix: b('Raise a complaint at the Ward Secretariat (amenities secretary), on PuraSeva, or PGRS (see the Civic Complaints guide).', 'వార్డు సచివాలయం (సౌకర్యాల కార్యదర్శి), PuraSeva లేదా PGRSలో ఫిర్యాదు చేయండి (పౌర ఫిర్యాదుల గైడ్ చూడండి).') },
    ],
    afterwards: [
      b('Pay both halves on time each year (usually by 30 September and 31 March) to avoid interest.', 'వడ్డీ రాకుండా ప్రతి ఏటా రెండు భాగాలు సమయానికి చెల్లించండి (సాధారణంగా 30 సెప్టెంబర్, 31 మార్చి లోపు).'),
      b('Keep all receipts — selling the house, loans and new connections all ask for the latest one.', 'అన్ని రసీదులు దాచుకోండి — ఇల్లు అమ్మకం, రుణాలు, కొత్త కనెక్షన్లు అన్నీ తాజాది అడుగుతాయి.'),
    ],
    lastChecked: CHECKED,
  },

  // ───────────────────────────────────────────── RC TRANSFER
  'vehicle-transfer': {
    stages: [
      {
        title: b('Before the sale', 'అమ్మకానికి ముందు'),
        steps: [
          b('Clear pending challans: check on echallan.parivahan.gov.in with the vehicle number.', 'పెండింగ్ చలాన్లు క్లియర్ చేయండి: వాహన నంబర్‌తో echallan.parivahan.gov.inలో చూడండి.'),
          b('If there was a loan, get the bank\'s NOC and Form 35 so the hypothecation is removed.', 'రుణం ఉంటే, హైపోథెకేషన్ తొలగించడానికి బ్యాంక్ NOC, ఫారం 35 తీసుకోండి.'),
          b('Make sure insurance and pollution (PUC) certificates are valid.', 'బీమా, కాలుష్య (PUC) సర్టిఫికెట్లు చెల్లుబాటులో ఉన్నాయో చూసుకోండి.'),
          b('Write a simple sale letter with date, time, price, both names and signatures — the seller keeps a copy.', 'తేదీ, సమయం, ధర, ఇద్దరి పేర్లు, సంతకాలతో సాధారణ అమ్మకపు లేఖ రాయండి — అమ్మకందారు కాపీ ఉంచుకోవాలి.'),
        ],
      },
      {
        title: b('Apply online on Vahan', 'వాహన్‌లో ఆన్‌లైన్ దరఖాస్తు'),
        steps: [
          b('Open vahan.parivahan.gov.in/vahanservice (or parivahan.gov.in → Vehicle Related Services) → enter the vehicle registration number.', 'vahan.parivahan.gov.in/vahanservice (లేదా parivahan.gov.in → Vehicle Related Services) తెరిచి → వాహన రిజిస్ట్రేషన్ నంబర్ నమోదు చేయండి.'),
          b('Verify with the last 5 digits of the chassis number and an OTP to the mobile registered with the vehicle (the seller\'s).', 'చాసిస్ నంబర్ చివరి 5 అంకెలు, వాహనంతో నమోదైన మొబైల్‌కు (అమ్మకందారుది) వచ్చే OTPతో ధృవీకరించండి.'),
          b('Choose "Transfer of Ownership" → enter the buyer\'s details (name, Aadhaar, address, mobile) and insurance details.', '"Transfer of Ownership" ఎంచుకోండి → కొనుగోలుదారు వివరాలు (పేరు, ఆధార్, చిరునామా, మొబైల్), బీమా వివరాలు నమోదు చేయండి.'),
          b('Pay the fee shown and download the receipt and the filled Form 29 / Form 30.', 'చూపిన ఫీజు చెల్లించి రసీదు, నింపిన ఫారం 29 / ఫారం 30 డౌన్‌లోడ్ చేయండి.'),
          b('Upload documents if the portal asks (where the Aadhaar-based "faceless" option is offered, no RTO visit is needed).', 'పోర్టల్ అడిగితే పత్రాలు అప్‌లోడ్ చేయండి (ఆధార్ ఆధారిత "ఫేస్‌లెస్" ఆప్షన్ ఉన్నచోట RTOకు వెళ్లనక్కర్లేదు).'),
        ],
      },
      {
        title: b('Submit documents (if an RTO visit is needed)', 'పత్రాలు సమర్పించడం (RTOకు వెళ్లాల్సి వస్తే)'),
        steps: [
          b('Seller signs Form 29 (two copies); buyer and seller sign Form 30.', 'అమ్మకందారు ఫారం 29 (రెండు కాపీలు)పై సంతకం; కొనుగోలుదారు, అమ్మకందారు ఫారం 30పై సంతకం.'),
          b('Take to the RTO: original RC, Forms 29 & 30, receipt, insurance, PUC, buyer\'s Aadhaar and photo, Form 35 / NOC if there was a loan, and a chassis number pencil print if asked.', 'RTOకు తీసుకెళ్లండి: అసలు RC, ఫారాలు 29 & 30, రసీదు, బీమా, PUC, కొనుగోలుదారు ఆధార్, ఫోటో, రుణం ఉంటే ఫారం 35 / NOC, అడిగితే చాసిస్ నంబర్ పెన్సిల్ ప్రింట్.'),
          b('The RTO verifies and approves. Track status on Vahan with the application number.', 'RTO ధృవీకరించి ఆమోదిస్తుంది. అప్లికేషన్ నంబర్‌తో వాహన్‌లో స్టేటస్ చూడండి.'),
        ],
      },
      {
        title: b('After the transfer', 'బదిలీ తర్వాత'),
        steps: [
          b('The new RC (smart card) comes by post to the buyer; it also appears in DigiLocker / mParivahan.', 'కొత్త RC (స్మార్ట్ కార్డ్) కొనుగోలుదారుకు పోస్ట్‌లో వస్తుంది; DigiLocker / mParivahanలో కూడా కనిపిస్తుంది.'),
          b('Buyer: transfer the insurance policy to your name within 14 days (call the insurer with the new RC).', 'కొనుగోలుదారు: 14 రోజుల్లో బీమా పాలసీని మీ పేరుకు మార్చండి (కొత్త RCతో బీమా సంస్థకు కాల్ చేయండి).'),
          b('Seller: check on Vahan that the owner name has changed — until then, challans and accident cases still come to you.', 'అమ్మకందారు: యజమాని పేరు మారిందో వాహన్‌లో చూడండి — అప్పటి వరకు చలాన్లు, ప్రమాద కేసులు ఇంకా మీకే వస్తాయి.'),
        ],
      },
    ],
    costExample: b('Transfer fee: about ₹150 for a motorcycle and ₹300 for a car, plus smart-card (around ₹200) and service charges shown on Vahan. Late application can attract a penalty.', 'బదిలీ ఫీజు: మోటార్‌సైకిల్‌కు సుమారు ₹150, కారుకు ₹300, అదనంగా స్మార్ట్ కార్డ్ (సుమారు ₹200), వాహన్‌లో చూపే సర్వీస్ ఛార్జీలు. ఆలస్యమైతే జరిమానా పడవచ్చు.'),
    problems: [
      { problem: b('The seller\'s old mobile number is registered and OTP doesn\'t reach.', 'అమ్మకందారు పాత మొబైల్ నమోదై ఉంది, OTP రావడం లేదు.'), fix: b('Update the mobile number on the vehicle record first (Vahan → update mobile, with Aadhaar), or apply at the RTO in person.', 'ముందుగా వాహన రికార్డులో మొబైల్ నంబర్ అప్‌డేట్ చేయండి (వాహన్ → update mobile, ఆధార్‌తో), లేదా RTOలో స్వయంగా దరఖాస్తు చేయండి.') },
      { problem: b('The owner has died.', 'యజమాని చనిపోయారు.'), fix: b('Legal heir informs the RTO within 30 days and applies for transfer (Form 31) within 3 months with the death certificate and Family Member Certificate.', 'చట్టబద్ధ వారసుడు 30 రోజుల్లో RTOకు తెలియజేసి, మరణ ధృవీకరణ, కుటుంబ సభ్యుల ధృవీకరణతో 3 నెలల్లో బదిలీకి (ఫారం 31) దరఖాస్తు చేయాలి.') },
      { problem: b('Buying a vehicle registered in another state.', 'ఇంకో రాష్ట్రంలో నమోదైన వాహనం కొంటున్నారు.'), fix: b('The seller gets a Form 28 NOC from their RTO; you re-register in AP within the time allowed and pay AP road tax (less any refund due from the other state).', 'అమ్మకందారు వారి RTO నుండి ఫారం 28 NOC తీసుకోవాలి; మీరు అనుమతించిన గడువులో APలో మళ్లీ నమోదు చేసి AP రోడ్డు పన్ను చెల్లించాలి (ఇంకో రాష్ట్రం నుండి వచ్చే రీఫండ్ మినహా).') },
    ],
    afterwards: [b('Keep the new RC, insurance and PUC in DigiLocker / mParivahan — police accept the digital copies.', 'కొత్త RC, బీమా, PUCని DigiLocker / mParivahanలో ఉంచండి — పోలీసులు డిజిటల్ కాపీలను అంగీకరిస్తారు.')],
    lastChecked: CHECKED,
  },

  // ───────────────────────────────────────────── PASSPORT
  passport: {
    stages: [
      {
        title: b('Prepare (match your documents)', 'సిద్ధం కావడం (పత్రాలు సరిపోల్చడం)'),
        steps: [
          b('Make sure your name, date of birth and parents\' names are spelled the same on Aadhaar and your date-of-birth proof (birth certificate or SSC memo). Fix mismatches first — they are the most common reason for delays.', 'ఆధార్, పుట్టిన తేదీ రుజువు (జనన ధృవీకరణ లేదా SSC మెమో)లో మీ పేరు, పుట్టిన తేదీ, తల్లిదండ్రుల పేర్లు ఒకేలా ఉన్నాయో చూసుకోండి. తేడాలు ముందుగా సరిచేయండి — ఆలస్యానికి ఇవే ఎక్కువ కారణం.'),
          b('Married and adding spouse\'s name? Keep the marriage certificate ready.', 'పెళ్లైంది, జీవిత భాగస్వామి పేరు చేర్చాలా? వివాహ ధృవీకరణ సిద్ధంగా ఉంచండి.'),
          b('Renewal: keep the old passport (and its photocopies of first and last pages).', 'రెన్యువల్: పాత పాస్‌పోర్ట్ (మొదటి, చివరి పేజీల జిరాక్స్‌లు) ఉంచుకోండి.'),
        ],
      },
      {
        title: b('Apply online', 'ఆన్‌లైన్ దరఖాస్తు'),
        steps: [
          b('Open passportindia.gov.in (or the mPassport Seva app) → "New User Registration" → choose the nearest Passport Office (Visakhapatnam for most of AP) → create a login.', 'passportindia.gov.in (లేదా mPassport Seva యాప్) → "New User Registration" → దగ్గరి పాస్‌పోర్ట్ ఆఫీసు (AP చాలా ప్రాంతాలకు విశాఖపట్నం) ఎంచుకోండి → లాగిన్ తయారు చేయండి.'),
          b('Log in → "Apply for Fresh Passport / Re-issue of Passport" → fill the form online: personal details, family, present address, emergency contact, references if asked.', 'లాగిన్ → "Apply for Fresh Passport / Re-issue of Passport" → ఆన్‌లైన్‌లో ఫారం నింపండి: వ్యక్తిగత వివరాలు, కుటుంబం, ప్రస్తుత చిరునామా, అత్యవసర కాంటాక్ట్, అడిగితే రిఫరెన్సులు.'),
          b('Choose Normal or Tatkal, and 36 or 60 pages. Submit.', 'నార్మల్ లేదా తత్కాల్, 36 లేదా 60 పేజీలు ఎంచుకోండి. సబ్మిట్ చేయండి.'),
          b('"Pay and Schedule Appointment" → pay online → pick a PSK / Post Office PSK and a date → print or save the Application Receipt (ARN).', '"Pay and Schedule Appointment" → ఆన్‌లైన్‌లో చెల్లించి → PSK / పోస్టాఫీసు PSK, తేదీ ఎంచుకుని → అప్లికేషన్ రసీదు (ARN) ప్రింట్ లేదా సేవ్ చేయండి.'),
        ],
        note: b('Only passportindia.gov.in is official. Look-alike websites charge extra "service fees".', 'passportindia.gov.in మాత్రమే అధికారికం. అలాంటి నకిలీ వెబ్‌సైట్లు అదనపు "సర్వీస్ ఫీజు" తీసుకుంటాయి.'),
      },
      {
        title: b('Appointment day at the PSK', 'PSKలో అపాయింట్‌మెంట్ రోజు'),
        steps: [
          b('Reach 15–30 minutes before your slot with original documents and one set of self-attested photocopies, plus the appointment receipt.', 'అసలు పత్రాలు, ఒక సెట్ స్వయం ధృవీకరణ జిరాక్స్‌లు, అపాయింట్‌మెంట్ రసీదుతో స్లాట్‌కు 15–30 నిమిషాలు ముందే చేరుకోండి.'),
          b('Token counter → Counter A: documents scanned, photo and fingerprints taken (don\'t wear white; no photo needed from you).', 'టోకెన్ కౌంటర్ → కౌంటర్ A: పత్రాలు స్కాన్, ఫోటో, వేలిముద్రలు (తెల్ల దుస్తులు వద్దు; మీరు ఫోటో తేనక్కర్లేదు).'),
          b('Counter B: an officer verifies the originals. Counter C: the granting officer approves.', 'కౌంటర్ B: అధికారి అసలు పత్రాలు ధృవీకరిస్తారు. కౌంటర్ C: గ్రాంటింగ్ అధికారి ఆమోదిస్తారు.'),
          b('Collect the acknowledgement at the exit.', 'బయటకు వెళ్లేటప్పుడు అక్నాలెడ్జ్‌మెంట్ తీసుకోండి.'),
        ],
      },
      {
        title: b('Police verification and delivery', 'పోలీసు ధృవీకరణ, డెలివరీ'),
        steps: [
          b('Police from your local station visit or call you (usually within 1–3 weeks). Keep your Aadhaar and address proof ready; neighbours may be asked about you.', 'మీ స్థానిక స్టేషన్ పోలీసులు వచ్చి లేదా పిలుస్తారు (సాధారణంగా 1–3 వారాల్లో). ఆధార్, చిరునామా రుజువు సిద్ధంగా ఉంచండి; పొరుగువారిని అడగవచ్చు.'),
          b('Track on passportindia.gov.in or the mPassport Seva app with the file number.', 'ఫైల్ నంబర్‌తో passportindia.gov.in లేదా mPassport Seva యాప్‌లో ట్రాక్ చేయండి.'),
          b('The passport is sent by Speed Post; track it with the number in the SMS. Sign it on the signature page as soon as you get it.', 'పాస్‌పోర్ట్ స్పీడ్ పోస్ట్‌లో వస్తుంది; SMSలోని నంబర్‌తో ట్రాక్ చేయండి. రాగానే సంతకం పేజీలో సంతకం చేయండి.'),
        ],
      },
    ],
    costExample: b('Adult, 36 pages, normal: ₹2,500 (Tatkal ₹5,000). 60 pages: ₹3,500 (Tatkal ₹6,000). No other payment is needed; police verification is free.', 'పెద్దలు, 36 పేజీలు, నార్మల్: ₹2,500 (తత్కాల్ ₹5,000). 60 పేజీలు: ₹3,500 (తత్కాల్ ₹6,000). ఇంకేమీ చెల్లించనక్కర్లేదు; పోలీసు ధృవీకరణ ఉచితం.'),
    problems: [
      { problem: b('Application put "on hold" at the PSK.', 'PSKలో దరఖాస్తు "ఆన్ హోల్డ్" పెట్టారు.'), fix: b('Read the hold slip — usually a missing or mismatched document. Bring it to the PSK / Passport Office within the time given (no new fee).', 'హోల్డ్ స్లిప్ చదవండి — సాధారణంగా లేని లేదా సరిపోని పత్రం. ఇచ్చిన గడువులో PSK / పాస్‌పోర్ట్ ఆఫీసుకు తీసుకెళ్లండి (కొత్త ఫీజు లేదు).') },
      { problem: b('Police verification "adverse" or stuck.', 'పోలీసు ధృవీకరణ "ప్రతికూలం" లేదా ఆగిపోయింది.'), fix: b('Meet the local station / Special Branch with your file number and proofs. If it says adverse, the Passport Office will tell you what to submit.', 'ఫైల్ నంబర్, రుజువులతో స్థానిక స్టేషన్ / స్పెషల్ బ్రాంచ్‌ను కలవండి. ప్రతికూలం అంటే ఏం సమర్పించాలో పాస్‌పోర్ట్ ఆఫీసు చెబుతుంది.') },
      { problem: b('Lost passport.', 'పాస్‌పోర్ట్ పోయింది.'), fix: b('File a police report (FIR / lost document report) and apply for "Re-issue — lost" on the portal with the report.', 'పోలీసు రిపోర్ట్ (FIR / పోయిన పత్రం రిపోర్ట్) చేసి, ఆ రిపోర్ట్‌తో పోర్టల్‌లో "Re-issue — lost"కు దరఖాస్తు చేయండి.') },
    ],
    afterwards: [
      b('Adult passports are valid for 10 years; apply for re-issue about a year before expiry (many countries need 6 months\' validity left).', 'పెద్దల పాస్‌పోర్ట్ 10 ఏళ్లు చెల్లుతుంది; గడువుకు సుమారు ఏడాది ముందే రీ-ఇష్యూకు దరఖాస్తు చేయండి (చాలా దేశాలకు 6 నెలల చెల్లుబాటు మిగిలి ఉండాలి).'),
      b('Going abroad for a job? Read the "Going abroad for a job safely" guide before you sign with any agent.', 'ఉద్యోగానికి విదేశాలకు వెళ్తున్నారా? ఏ ఏజెంట్‌తోనైనా ఒప్పందానికి ముందు "సురక్షితంగా విదేశీ ఉద్యోగానికి" గైడ్ చదవండి.'),
    ],
    lastChecked: CHECKED,
  },
};
