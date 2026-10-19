import { L } from '../types';

/**
 * Words people actually type — English, Telugu and Telugu written in English letters
 * ("Tenglish") — mapped to the guides they usually mean. Matching is by word start,
 * so "pension" also catches "pensions", and "భూమి" catches "భూమికి".
 */
export type Concept = { words: string[]; guides: string[] };

export const concepts: Concept[] = [
  // Land & property
  { words: ['land', 'bhoomi', 'bhumi', 'polam', 'sthalam', 'plot', 'site', 'భూమి', 'పొలం', 'స్థలం', 'ప్లాట్'], guides: ['land-records', 'land-mutation', 'property-registration', 'encumbrance-certificate'] },
  { words: ['land records', 'bhu records', 'భూ రికార్డు', 'mutation', 'pattadar', 'passbook', '1b', 'adangal', 'అడంగల్', 'పట్టాదారు', 'పాస్‌బుక్', 'మ్యుటేషన్', 'pahani'], guides: ['land-mutation', 'land-records'] },
  { words: ['registration', 'register', 'sale deed', 'deed', 'document', 'dastavej', 'rijistration', 'రిజిస్ట్రేషన్', 'డీడ్', 'దస్తావేజు'], guides: ['property-registration', 'property-name-correction', 'certified-copy'] },
  { words: ['name wrong', 'name mistake', 'spelling', 'peru thappu', 'peru tappu', 'rectification', 'mismatch', 'పేరు తప్పు', 'తప్పుగా', 'సవరణ'], guides: ['property-name-correction', 'name-change-gazette', 'aadhaar-update'] },
  { words: ['ec', 'encumbrance', 'loan on land', 'ఎన్‌కంబరెన్స్'], guides: ['encumbrance-certificate'] },
  { words: ['survey', 'resurvey', 'boundary', 'haddu', 'sarihaddu', 'సర్వే', 'హద్దు', 'సరిహద్దు'], guides: ['land-resurvey', 'land-subdivision'] },
  { words: ['22a', 'prohibited', 'nishedha', 'assigned land', 'dotted', 'chukkala', 'నిషేధ', 'చుక్కల', 'అసైన్డ్'], guides: ['prohibited-land-22a'] },
  { words: ['veelunama', 'testament', 'gpa', 'power of attorney', 'mortgage', 'release deed', 'వీలునామా', 'తనఖా'], guides: ['will-gpa-deeds'] },
  { words: ['house tax', 'property tax', 'illu pannu', 'inti pannu', 'ఇంటి పన్ను', 'ఆస్తి పన్ను'], guides: ['property-tax'] },
  { words: ['building plan', 'house plan', 'permission to build', 'construction permission', 'illu kattali', 'ఇల్లు కట్ట', 'భవన అనుమతి', 'ప్లాన్'], guides: ['building-permission', 'lrs-bps-regularisation', 'free-sand'] },
  { words: ['sand', 'isuka', 'ఇసుక'], guides: ['free-sand'] },
  { words: ['lrs', 'bps', 'unapproved', 'regularise', 'regularize', 'క్రమబద్ధీకరణ'], guides: ['lrs-bps-regularisation'] },
  { words: ['conversion', 'nala', 'farm land to plot', 'మార్పిడి'], guides: ['land-conversion'] },
  // Death, family, marriage, birth
  { words: ['death', 'died', 'dead', 'expired', 'passed away', 'chanipoyaru', 'chanipoyindi', 'chanipoyadu', 'maranam', 'మరణ', 'చనిపోయ', 'మృతి'], guides: ['birth-death-certificate', 'family-member-certificate', 'land-mutation'] },
  { words: ['legal heir', 'family member certificate', 'varasudu', 'varasatvam', 'vaarasula', 'వారసు', 'కుటుంబ సభ్యుల'], guides: ['family-member-certificate'] },
  { words: ['birth', 'born', 'baby', 'puttina', 'janana', 'జనన', 'పుట్టిన', 'శిశువు', 'బిడ్డ'], guides: ['birth-death-certificate', 'ntr-baby-kit', 'aadhaar-child-biometric'] },
  { words: ['marriage', 'married', 'wedding', 'pelli', 'vivaham', 'పెళ్లి', 'వివాహ'], guides: ['marriage-registration'] },
  { words: ['pregnant', 'pregnancy', 'garbham', 'maternity', 'anganwadi', 'గర్భ', 'ప్రసూతి', 'అంగన్‌వాడీ'], guides: ['maternity-anganwadi', 'ntr-baby-kit'] },
  { words: ['name change', 'gazette', 'peru marchali', 'పేరు మార్పు', 'గెజిట్'], guides: ['name-change-gazette'] },
  // Certificates
  { words: ['caste', 'kulam', 'kula', 'community certificate', 'income certificate', 'aadayam', 'residence certificate', 'nativity', 'కుల', 'ఆదాయ', 'నివాస'], guides: ['caste-income-certificate', 'ews-certificate', 'obc-ncl-certificate'] },
  { words: ['ews'], guides: ['ews-certificate'] },
  { words: ['obc', 'non creamy', 'creamy layer', 'ncl'], guides: ['obc-ncl-certificate'] },
  { words: ['disability', 'disabled', 'handicapped', 'divyang', 'vikalanga', 'sadarem', 'వికలాంగ', 'దివ్యాంగ', 'సదరం'], guides: ['sadarem-certificate', 'disability-benefits', 'ntr-bharosa-pension'] },
  { words: ['certificate', 'certificates', 'dhruvikarana', 'సర్టిఫికెట్', 'ధృవీకరణ'], guides: ['caste-income-certificate', 'birth-death-certificate', 'family-member-certificate'] },
  // Pensions & welfare
  { words: ['pension', 'pinchan', 'penshan', 'old age', 'widow', 'vitantu', 'vidhava', 'పెన్షన్', 'పింఛన్', 'వితంతు', 'వృద్ధాప్య'], guides: ['ntr-bharosa-pension', 'senior-citizens', 'atal-pension'] },
  { words: ['old parents', 'senior citizen', 'vruddhulu', 'vayasu', 'elderly', 'వృద్ధులు', 'సీనియర్'], guides: ['senior-citizens', 'ayushman-vay-vandana', 'ntr-bharosa-pension'] },
  { words: ['mother', 'amma vodi', 'talliki', 'school child', 'thalliki', 'తల్లికి', 'అమ్మ ఒడి'], guides: ['talliki-vandanam'] },
  { words: ['free bus', 'bus free', 'stree shakti', 'women bus', 'ఉచిత బస్సు', 'స్త్రీ శక్తి'], guides: ['stree-shakti-free-bus', 'apsrtc-booking'] },
  { words: ['house', 'housing', 'illu', 'indlu', 'house site', 'pmay', 'ఇల్లు', 'ఇళ్లు', 'గృహ', 'ఇంటి స్థలం'], guides: ['housing-scheme', 'building-permission'] },
  { words: ['auto driver', 'cab driver', 'auto', 'taxi'], guides: ['auto-drivers-sevalo'] },
  { words: ['fisherman', 'fishermen', 'fishing', 'matsyakara', 'boat', 'మత్స్యకార', 'చేపల'], guides: ['fishermen-support'] },
  { words: ['weaver', 'handloom', 'nethanna', 'chenetha', 'చేనేత', 'నేతన్న'], guides: ['nethanna-sevalo'] },
  { words: ['construction worker', 'mason', 'labour card', 'building worker', 'భవన నిర్మాణ కార్మిక'], guides: ['construction-workers-board', 'e-shram'] },
  { words: ['labour', 'labor', 'daily wage', 'coolie', 'kuli', 'e shram', 'eshram', 'unorganised', 'కూలీ', 'కార్మిక'], guides: ['e-shram', 'rural-employment-guarantee', 'construction-workers-board'] },
  { words: ['job card', 'upadhi', 'nrega', 'mgnrega', 'employment guarantee', '100 days', '125 days', 'ఉపాధి హామీ', 'జాబ్ కార్డు'], guides: ['rural-employment-guarantee'] },
  { words: ['scheme money', 'money not credited', 'dabbulu raledu', 'dabbulu padaledu', 'not received', 'payment failed', 'dbt', 'npci', 'seeding', 'డబ్బులు రాలేదు', 'డబ్బు పడలేదు', 'జమ కాలేదు'], guides: ['aadhaar-bank-dbt'] },
  { words: ['new scheme', 'aadabidda', 'nirudyoga', 'unemployment allowance', 'announced', 'ఆడబిడ్డ', 'నిరుద్యోగ'], guides: ['announced-schemes'] },
  // Food & gas
  { words: ['ration', 'rice card', 'biyyam', 'ration card', 'రేషన్', 'బియ్యం', 'రైస్ కార్డు'], guides: ['rice-card'] },
  { words: ['gas', 'cylinder', 'lpg', 'deepam', 'ujjwala', 'గ్యాస్', 'సిలిండర్', 'దీపం'], guides: ['deepam-free-gas', 'ujjwala'] },
  // Health
  { words: ['hospital', 'treatment', 'operation', 'surgery', 'aasupatri', 'vaidyam', 'arogyasri', 'aarogyasri', 'vaidya seva', 'health card', 'ఆసుపత్రి', 'వైద్య', 'ఆరోగ్యశ్రీ', 'ఆపరేషన్'], guides: ['ntr-vaidya-seva', 'ayushman-vay-vandana', 'cm-relief-fund'] },
  { words: ['ayushman', 'pmjay', 'golden card', '70 years', 'vay vandana'], guides: ['ayushman-vay-vandana', 'ntr-vaidya-seva'] },
  { words: ['ambulance', '108', '104', '102', 'అంబులెన్స్'], guides: ['health-numbers', 'emergency-helplines'] },
  { words: ['cm relief', 'cmrf', 'relief fund', 'సహాయ నిధి'], guides: ['cm-relief-fund'] },
  { words: ['abha', 'health id', 'health record'], guides: ['abha-health-id'] },
  // Power & solar
  { words: ['solar', 'rooftop', 'surya ghar', 'సోలార్', 'సౌర'], guides: ['pm-surya-ghar'] },
  { words: ['current', 'electricity', 'power', 'meter', 'karent', 'విద్యుత్', 'కరెంట్', 'మీటర్'], guides: ['new-electricity-connection', 'electricity-bill-complaints', 'pm-surya-ghar', 'agri-power-connection'] },
  { words: ['borewell', 'bore', 'motor', 'agricultural power', 'agricultural connection', 'వ్యవసాయ విద్యుత్', 'వ్యవసాయ కనెక్షన్', 'agriculture power', 'farm power', 'బోరు', 'మోటార్'], guides: ['agri-power-connection'] },
  { words: ['water tax', 'water bill', 'water charges', 'neeti pannu', 'neeti bill', 'నీటి పన్ను', 'నీటి బిల్లు', 'నీటి ఛార్జీ'], guides: ['water-connection', 'property-tax'] },
  { words: ['water', 'tap', 'drainage', 'neeru', 'nallaa', 'నీరు', 'కుళాయి', 'డ్రైనేజీ'], guides: ['water-connection', 'civic-complaints'] },
  { words: ['garbage', 'streetlight', 'road', 'drain', 'mosquito', 'chetta', 'చెత్త', 'వీధి దీపం', 'రోడ్డు', 'దోమ'], guides: ['civic-complaints'] },
  // Farmers & animals
  { words: ['farmer', 'rythu', 'raitu', 'raithu', 'farming', 'vyavasayam', 'రైతు', 'వ్యవసాయ'], guides: ['annadata-sukhibhava', 'pm-kisan', 'crop-insurance', 'farm-subsidies'] },
  { words: ['annadata', 'sukhibhava', 'అన్నదాత'], guides: ['annadata-sukhibhava'] },
  { words: ['pm kisan', 'pmkisan', 'kisan', 'farmer id'], guides: ['pm-kisan', 'annadata-sukhibhava'] },
  { words: ['crop', 'panta', 'crop loss', 'insurance for crop', 'pmfby', 'పంట'], guides: ['crop-insurance', 'kisan-credit-card'] },
  { words: ['tenant', 'koulu', 'kaulu', 'ccrc', 'lease farmer', 'కౌలు'], guides: ['tenant-farmer-ccrc'] },
  { words: ['crop loan', 'kcc', 'kisan credit', 'pantaruna', 'పంట రుణ'], guides: ['kisan-credit-card'] },
  { words: ['paddy', 'dhanyam', 'vadlu', 'msp', 'grain', 'ధాన్యం', 'వడ్లు', 'మద్దతు ధర'], guides: ['paddy-procurement'] },
  { words: ['drip', 'sprinkler', 'tractor', 'machinery', 'seeds', 'vittanalu', 'విత్తనాలు', 'డ్రిప్'], guides: ['farm-subsidies'] },
  { words: ['cow', 'buffalo', 'cattle', 'animal', 'pasuvu', 'gedhe', 'gede', 'aavu', 'vet', 'veterinary', 'పశువు', 'పశువుల', 'గేదె', 'ఆవు', 'పశువైద్య'], guides: ['vet-ambulance-1962', 'livestock-insurance', 'gokulam-sheds'] },
  { words: ['sheep', 'goat', 'poultry', 'chicken', 'pig', 'gorre', 'meka', 'kodi', 'గొర్రె', 'మేక', 'కోళ్ల', 'కోడి'], guides: ['nlm-livestock-business', 'gokulam-sheds', 'livestock-insurance'] },
  { words: ['shed', 'gokulam', 'pashu shed', 'గోకులం', 'షెడ్'], guides: ['gokulam-sheds'] },
  // Education & jobs
  { words: ['scholarship', 'fee reimbursement', 'jnanabhumi', 'vidya deevena', 'college fee', 'స్కాలర్‌షిప్', 'ఫీజు రీయింబర్స్'], guides: ['scholarship-fee-reimbursement', 'national-scholarships'] },
  { words: ['eamcet', 'eapcet', 'engineering', 'btech', 'b tech', 'ఇంజనీరింగ్', 'ఎంసెట్'], guides: ['eapcet-admission'] },
  { words: ['icet', 'mba', 'mca'], guides: ['icet-admission'] },
  { words: ['polycet', 'polytechnic', 'diploma after 10th', 'పాలిటెక్నిక్'], guides: ['polycet-admission'] },
  { words: ['ecet', 'edcet', 'b ed', 'bed', 'lawcet', 'llb', 'law', 'pgecet', 'mtech', 'pgcet', 'pecet'], guides: ['other-cets'] },
  { words: ['neet', 'mbbs', 'bds', 'medical seat', 'doctor course', 'మెడికల్'], guides: ['neet-admission'] },
  { words: ['after 10th', 'after inter', 'admission', 'college seat', 'entrance', 'counselling', 'ప్రవేశ', 'కౌన్సెలింగ్'], guides: ['eapcet-admission', 'polycet-admission', 'other-cets'] },
  { words: ['ssc', 'inter certificate', 'duplicate', 'memo lost', 'marks memo', 'మార్కుల మెమో'], guides: ['duplicate-ssc-inter'] },
  { words: ['rte', 'free seat', 'private school', 'ప్రైవేట్ స్కూల్'], guides: ['rte-free-seats'] },
  { words: ['hostel', 'residential school', 'gurukul', 'హాస్టల్', 'వసతి గృహ', 'గురుకుల'], guides: ['welfare-hostels'] },
  { words: ['job', 'jobs', 'udyogam', 'employment', 'govt job', 'skill', 'training', 'ఉద్యోగ', 'శిక్షణ'], guides: ['govt-jobs-skills', 'pm-internship', 'apprenticeship'] },
  { words: ['internship', 'ఇంటర్న్‌షిప్'], guides: ['pm-internship'] },
  { words: ['apprentice', 'iti', 'nats', 'naps', 'అప్రెంటిస్'], guides: ['apprenticeship'] },
  // Business & money
  { words: ['business', 'vyaparam', 'shop', 'dukanam', 'self employment', 'swayam upadhi', 'వ్యాపార', 'దుకాణ', 'స్వయం ఉపాధి'], guides: ['start-small-business', 'mudra-loan', 'pmegp', 'corporation-loans'] },
  { words: ['loan', 'runam', 'appu', 'రుణ', 'అప్పు', 'లోన్'], guides: ['mudra-loan', 'corporation-loans', 'shg-loans', 'kisan-credit-card'] },
  { words: ['subsidy loan', 'bc corporation', 'sc corporation', 'st corporation', 'minority', 'kapu', 'corporation', 'obmms', 'కార్పొరేషన్', 'మైనారిటీ', 'కాపు'], guides: ['corporation-loans'] },
  { words: ['pmegp', 'factory', 'industry', 'parishrama', 'msme', 'udyam', 'పరిశ్రమ', 'ఫ్యాక్టరీ'], guides: ['pmegp', 'ap-industry-msme', 'start-small-business'] },
  { words: ['pickle', 'pachadi', 'flour mill', 'bakery', 'sweets', 'food processing', 'pmfme', 'పచ్చడి', 'పచ్చళ్లు', 'పిండి మిల్లు'], guides: ['pmfme-food-processing'] },
  { words: ['dwcra', 'dwakra', 'shg', 'self help group', 'podupu', 'sangham', 'streenidhi', 'stree nidhi', 'velugu', 'mepma', 'డ్వాక్రా', 'పొదుపు', 'సంఘం', 'స్త్రీనిధి', 'వెలుగు'], guides: ['shg-dwcra-join', 'shg-loans'] },
  { words: ['street vendor', 'bandi', 'tiffin cart', 'svanidhi', 'తోపుడు బండి'], guides: ['svanidhi'] },
  { words: ['artisan', 'carpenter', 'blacksmith', 'potter', 'tailor', 'barber', 'vishwakarma', 'వడ్రంగి', 'కుమ్మరి', 'దర్జీ'], guides: ['vishwakarma'] },
  { words: ['trade licence', 'trade license', 'shop licence', 'fssai', 'gst'], guides: ['trade-licence', 'start-small-business'] },
  { words: ['bank account', 'zero balance', 'jan dhan', 'బ్యాంక్ ఖాతా', 'జన్ ధన్'], guides: ['jan-dhan-account'] },
  { words: ['insurance', 'bima', 'beema', 'భీమా', 'బీమా'], guides: ['pmjjby-pmsby', 'livestock-insurance', 'crop-insurance', 'apnrts-insurance'] },
  { words: ['girl child', 'daughter', 'sukanya', 'ammayi', 'కూతురు', 'ఆడపిల్ల', 'సుకన్య'], guides: ['sukanya-samriddhi'] },
  { words: ['pf', 'epf', 'provident fund', 'uan', 'పీఎఫ్'], guides: ['epf-withdrawal'] },
  { words: ['life certificate', 'jeevan pramaan', 'pensioner'], guides: ['pensioner-life-certificate'] },
  // IDs
  { words: ['aadhaar', 'aadhar', 'adhar', 'aadar', 'uid', 'ఆధార్'], guides: ['aadhaar-update', 'aadhaar-lost-download', 'aadhaar-bank-dbt'] },
  { words: ['aadhaar lost', 'aadhar lost', 'lost aadhaar', 'pvc', 'download aadhaar', 'ఆధార్ పోయ'], guides: ['aadhaar-lost-download'] },
  { words: ['child aadhaar', 'children aadhaar', 'children s aadhaar', 'kids aadhaar', 'baby aadhaar', 'baal aadhaar', 'బాల ఆధార్', 'biometric update', 'పిల్లల ఆధార్'], guides: ['aadhaar-child-biometric'] },
  { words: ['fraud', 'misuse', 'aeps', 'cheated', 'mosam', 'మోసం', 'దుర్వినియోగ'], guides: ['aadhaar-misuse-lock', 'emergency-helplines', 'consumer-complaint'] },
  { words: ['pan', 'pan card', 'పాన్'], guides: ['pan-card'] },
  { words: ['passport', 'పాస్‌పోర్ట్'], guides: ['passport'] },
  { words: ['voter', 'vote', 'epic', 'ఓటర్', 'ఓటు'], guides: ['voter-id'] },
  { words: ['lorry', 'truck', 'tipper', 'tanker', 'heavy vehicle', 'heavy licence', 'heavy license', 'hgmv', 'hpmv', 'hmv', 'bus licence', 'bus license', 'transport licence', 'badge', 'లారీ', 'ట్రక్', 'భారీ వాహన'], guides: ['heavy-vehicle-licence', 'driving-licence'] },
  { words: ['licence', 'license', 'driving', 'll', 'learner', 'లైసెన్స్', 'డ్రైవింగ్'], guides: ['driving-licence'] },
  { words: ['permit', 'national permit', 'fitness', 'fitness certificate', 'road tax', 'vehicle tax', 'quarterly tax', 'commercial vehicle', 'transport vehicle', 'పర్మిట్', 'ఫిట్‌నెస్', 'రోడ్డు పన్ను', 'వాహన పన్ను'], guides: ['commercial-vehicle-papers'] },
  { words: ['hypothecation', 'loan removal', 'bank noc', 'form 35', 'duplicate rc', 'rc lost', 'rc address', 'bank name', 'remove bank', 'loan closed', 'loan close', 'rc services', 'rc service', 'హైపోథెకేషన్', 'డూప్లికేట్ rc'], guides: ['rc-services'] },
  { words: ['police verification', 'pcc', 'police clearance', 'character certificate', 'conduct certificate', 'పోలీస్ వెరిఫికేషన్'], guides: ['police-verification-certificate'] },
  { words: ['current bill', 'electricity bill', 'electricity problem', 'electricity problems', 'electricity complaint', 'power complaint', 'power bill', 'high bill', 'meter', 'power cut', 'no current', 'no power', 'transformer', 'voltage', '1912', 'కరెంట్ బిల్లు', 'విద్యుత్ బిల్లు', 'మీటర్', 'కరెంట్ లేదు', 'ట్రాన్స్‌ఫార్మర్'], guides: ['electricity-bill-complaints'] },
  { words: ['income tax', 'itr', 'tax return', 'tds', 'refund', 'form 16', 'ఆదాయపు పన్ను', 'ఇన్‌కమ్ ట్యాక్స్', 'రీఫండ్'], guides: ['income-tax-return'] },
  { words: ['digilocker', 'డిజిలాకర్'], guides: ['digilocker'] },
  { words: ['whatsapp', 'mana mitra', 'మన మిత్ర', 'వాట్సాప్'], guides: ['mana-mitra'] },
  // Transport
  { words: ['rc', 'vehicle transfer', 'bike transfer', 'car transfer', 'ownership transfer', 'బండి', 'వాహన'], guides: ['vehicle-transfer', 'rc-services'] },
  { words: ['challan', 'traffic fine', 'traffic', 'చలాన్', 'జరిమానా'], guides: ['traffic-challan'] },
  { words: ['bus ticket', 'apsrtc', 'bus pass', 'బస్ టికెట్', 'బస్ పాస్'], guides: ['apsrtc-booking'] },
  // Safety & complaints
  { words: ['police', 'fir', 'case', 'theft', 'stolen', 'dongathanam', 'పోలీస్', 'దొంగ', 'కేసు'], guides: ['police-complaint', 'emergency-helplines'] },
  { words: ['lost phone', 'lost document', 'missing', 'పోయింది', 'పోగొట్టుకున్న'], guides: ['police-complaint', 'certified-copy', 'aadhaar-lost-download'] },
  { words: ['emergency', 'danger', 'atyavasaram', 'అత్యవసర'], guides: ['emergency-helplines', 'health-numbers'] },
  { words: ['complaint', 'firyadu', 'phiryadu', 'grievance', 'spandana', 'meekosam', 'bribe', 'lanchham', 'lancham', 'delay', 'ఫిర్యాదు', 'లంచం', 'మీకోసం'], guides: ['pgrs-grievance', 'civic-complaints', 'consumer-complaint'] },
  { words: ['lawyer', 'advocate', 'court', 'legal', 'nyayam', 'న్యాయ', 'లాయర్', 'కోర్టు'], guides: ['free-legal-aid'] },
  { words: ['rti', 'information act', 'సమాచార హక్కు'], guides: ['rti-application'] },
  { words: ['consumer', 'refund', 'defective', 'builder', 'వినియోగదారు'], guides: ['consumer-complaint'] },
  { words: ['domestic violence', 'beating', 'beats me', 'hitting', 'abuse', 'abusing', 'torture', 'violence', 'kodutunnadu', 'kodtunnadu', 'kodutunnaru', 'kodutundi', 'వేధిస్తున్న', 'కొడుతున్న', 'హింస', 'harassment', 'dowry', 'katnam', 'gruha himsa', 'వేధింపు', 'గృహ హింస', 'కట్నం'], guides: ['women-protection', 'emergency-helplines'] },
  { words: ['women', 'woman', 'mahila', 'aadavaallu', 'మహిళ', 'స్త్రీ'], guides: ['women-protection', 'stree-shakti-free-bus', 'shg-dwcra-join'] },
  // Temples & abroad
  { words: ['ttd', 'tirumala', 'tirupati', 'srivari', 'venkateswara', 'balaji', 'తిరుమల', 'తిరుపతి', 'శ్రీవారి'], guides: ['ttd-darshan'] },
  { words: ['temple', 'gudi', 'darshan', 'darshanam', 'seva', 'srisailam', 'durga', 'simhachalam', 'annavaram', 'srikalahasti', 'kanipakam', 'ఆలయ', 'గుడి', 'దర్శన', 'శ్రీశైలం', 'దుర్గ', 'అన్నవరం'], guides: ['ap-temples-booking', 'ttd-darshan'] },
  { words: ['gulf', 'dubai', 'saudi', 'kuwait', 'oman', 'qatar', 'malaysia', 'abroad', 'foreign', 'videsham', 'agent', 'visa', 'emigrate', 'గల్ఫ్', 'దుబాయ్', 'విదేశ', 'ఏజెంట్', 'వీసా'], guides: ['overseas-jobs-safe', 'apnrts-insurance', 'nri-help-abroad'] },
  { words: ['nri', 'nris', 'apnrts', 'pravasi', 'ప్రవాస'], guides: ['nri-property', 'apnrts-insurance', 'nri-help-abroad'] },
  { words: ['body', 'dead body', 'died abroad', 'death abroad', 'stuck abroad', 'stranded', 'unpaid', 'salary not paid', 'embassy', 'madad', 'విదేశంలో చిక్కు', 'విదేశంలో మరణ', 'భౌతికకాయం', 'రాయబార'], guides: ['nri-help-abroad'] },
];

/** Life situations: one message that lists everything usually needed, in order. */
export type LifeEvent = { id: string; words: string[]; intro: L; guides: string[]; unless?: string[] };

export const lifeEvents: LifeEvent[] = [
  {
    id: 'death',
    words: ['death', 'died', 'passed away', 'expired', 'chanipoyaru', 'chanipoyadu', 'chanipoyindi', 'maranam', 'మరణ', 'చనిపోయ', 'మృతి'],
    intro: {
      en: 'I\'m sorry for your loss. After a death in the family, this is usually needed, in this order:',
      te: 'మీ కుటుంబంలో జరిగిన నష్టానికి చింతిస్తున్నాను. కుటుంబంలో మరణం తర్వాత సాధారణంగా ఈ క్రమంలో ఇవి అవసరం:',
    },
    guides: ['birth-death-certificate', 'family-member-certificate', 'land-mutation', 'ntr-bharosa-pension', 'pmjjby-pmsby', 'epf-withdrawal'],
    unless: ['abroad', 'gulf', 'dubai', 'saudi', 'kuwait', 'videsham', 'embassy', 'విదేశ', 'గల్ఫ్'],
  },
  {
    id: 'baby',
    words: ['new baby', 'baby born', 'delivery', 'pregnant', 'garbham', 'bidda puttindi', 'బిడ్డ పుట్ట', 'గర్భ', 'ప్రసవ'],
    intro: { en: 'Congratulations! For pregnancy and a new baby:', te: 'అభినందనలు! గర్భం, కొత్త బిడ్డ కోసం:' },
    guides: ['maternity-anganwadi', 'birth-death-certificate', 'ntr-baby-kit', 'aadhaar-child-biometric', 'sukanya-samriddhi'],
  },
  {
    id: 'marriage',
    words: ['marriage', 'married', 'wedding', 'pelli ayindi', 'pelli', 'పెళ్లి', 'వివాహ'],
    intro: { en: 'After a marriage, people usually need:', te: 'పెళ్లి తర్వాత సాధారణంగా ఇవి అవసరం:' },
    guides: ['marriage-registration', 'aadhaar-update', 'rice-card', 'name-change-gazette'],
  },
  {
    id: 'buy-land',
    words: ['buy land', 'buying land', 'buy plot', 'buying plot', 'buy house', 'bhoomi konali', 'polam konali', 'sthalam konali', 'కొనాలి', 'కొనుగోలు'],
    intro: { en: 'Before and after buying land or a house, check these in order:', te: 'భూమి లేదా ఇల్లు కొనే ముందు, తర్వాత ఈ క్రమంలో చూడండి:' },
    guides: ['encumbrance-certificate', 'prohibited-land-22a', 'land-records', 'property-registration', 'land-mutation', 'property-tax'],
  },
  {
    id: 'build-house',
    words: ['build house', 'building a house', 'construct house', 'illu kattali', 'illu kadutunna', 'ఇల్లు కట్ట', 'నిర్మాణం'],
    intro: { en: 'For building a house:', te: 'ఇల్లు కట్టడానికి:' },
    guides: ['building-permission', 'free-sand', 'new-electricity-connection', 'water-connection', 'housing-scheme', 'pm-surya-ghar'],
  },
  {
    id: 'abroad-job',
    words: ['gulf job', 'abroad job', 'job abroad', 'going abroad', 'going to gulf', 'dubai job', 'videsham velli', 'విదేశానికి', 'గల్ఫ్'],
    intro: { en: 'Going abroad to work — do these to stay safe:', te: 'పని కోసం విదేశాలకు — సురక్షితంగా ఉండటానికి ఇవి చేయండి:' },
    guides: ['passport', 'overseas-jobs-safe', 'apnrts-insurance', 'nri-help-abroad'],
  },
  {
    id: 'start-business',
    words: ['start business', 'starting business', 'new business', 'vyaparam pettali', 'business pettali', 'shop pettali', 'వ్యాపారం పెట్ట', 'వ్యాపారం ప్రారంభ'],
    intro: { en: 'To start a business, these help — registrations first, then loans and subsidies:', te: 'వ్యాపారం ప్రారంభించడానికి — ముందు నమోదు, తర్వాత రుణాలు, సబ్సిడీలు:' },
    guides: ['start-small-business', 'mudra-loan', 'pmegp', 'corporation-loans', 'pmfme-food-processing', 'shg-loans'],
  },
  {
    id: 'after-10th',
    words: ['after 10th', 'after tenth', 'after ssc', '10th tarvata', '10va taragati tarvata', 'పది తర్వాత', '10వ తరగతి తర్వాత'],
    intro: { en: 'After 10th class, the main routes are:', te: '10వ తరగతి తర్వాత ముఖ్య మార్గాలు:' },
    guides: ['polycet-admission', 'welfare-hostels', 'scholarship-fee-reimbursement', 'apprenticeship'],
  },
  {
    id: 'after-inter',
    words: ['after inter', 'after intermediate', 'after 12th', 'inter tarvata', 'ఇంటర్ తర్వాత'],
    intro: { en: 'After Intermediate, the main routes are:', te: 'ఇంటర్ తర్వాత ముఖ్య మార్గాలు:' },
    guides: ['eapcet-admission', 'neet-admission', 'scholarship-fee-reimbursement', 'national-scholarships', 'govt-jobs-skills'],
  },
  {
    id: 'senior',
    words: ['my parents are old', 'old parents', 'turned 60', 'age 60', 'age 70', 'retired', '60 years', '70 years', 'వృద్ధ తల్లిదండ్రులు'],
    intro: { en: 'For senior citizens, these are the main benefits:', te: 'వృద్ధుల కోసం ముఖ్య ప్రయోజనాలు:' },
    guides: ['ntr-bharosa-pension', 'senior-citizens', 'ayushman-vay-vandana', 'pensioner-life-certificate'],
  },
  {
    id: 'money-missing',
    words: ['money not credited', 'money not received', 'not credited', 'pension raledu', 'pension padaledu', 'pension not received', 'amount raledu', 'installment raledu', 'dabbulu raledu', 'పెన్షన్ రాలేదు', 'dabbulu padaledu', 'amount not credited', 'installment not received', 'డబ్బులు రాలేదు', 'డబ్బు పడలేదు', 'జమ కాలేదు'],
    intro: {
      en: 'Scheme money usually fails because the bank isn\'t linked to Aadhaar (NPCI). Check that first, then complain if needed:',
      te: 'చాలాసార్లు బ్యాంక్ ఆధార్‌తో (NPCI) లింక్ కాకపోవడం వల్ల పథకం డబ్బు ఆగుతుంది. ముందు అది చూడండి, అవసరమైతే ఫిర్యాదు చేయండి:',
    },
    guides: ['aadhaar-bank-dbt', 'pgrs-grievance'],
  },
  {
    id: 'lost-docs',
    words: ['lost my', 'documents lost', 'lost documents', 'lost certificate', 'lost deed', 'poyindi', 'pogottukunna', 'పోయింది', 'పోగొట్టుకున్న'],
    intro: { en: 'For lost documents:', te: 'పోయిన పత్రాల కోసం:' },
    guides: ['police-complaint', 'aadhaar-lost-download', 'certified-copy', 'duplicate-ssc-inter', 'digilocker'],
  },
];

/** Words that tell us which part of a guide the person wants. */
export type Section = 'who' | 'docs' | 'fees' | 'steps' | 'where' | 'time' | 'tips' | 'links';

export const sectionWords: Record<Section, string[]> = {
  fees: ['fee', 'fees', 'cost', 'charge', 'price', 'how much', 'entha', 'enta', 'amount', 'rupees', 'kharchu', 'ఫీజు', 'ఎంత', 'ఖర్చు', 'ధర', 'రుసుము', 'మొత్తం'],
  docs: ['document', 'documents', 'papers', 'proof', 'what to carry', 'patralu', 'documents enti', 'కావాల్సిన పత్ర', 'పత్రాలు', 'డాక్యుమెంట్'],
  who: ['eligible', 'eligibility', 'who can', 'can i', 'am i', 'arhata', 'arhulu', 'అర్హత', 'అర్హులు', 'ఎవరు'],
  where: ['where', 'which office', 'ekkada', 'ekkadiki', 'office', 'website', 'online', 'ఎక్కడ', 'ఆఫీసు', 'కార్యాలయం'],
  time: ['how long', 'how many days', 'time', 'days', 'enni rojulu', 'eppudu', 'when', 'ఎన్ని రోజులు', 'సమయం', 'ఎప్పుడు', 'ఎన్నాళ్లు'],
  steps: ['how to', 'process', 'procedure', 'steps', 'apply', 'ela', 'elaa', 'ఎలా', 'ప్రక్రియ', 'దరఖాస్తు', 'విధానం'],
  tips: ['tips', 'careful', 'mistake', 'jagratta', 'జాగ్రత్త', 'సలహా'],
  links: ['link', 'site', 'phone number', 'helpline', 'contact', 'call', 'number', 'లింక్', 'హెల్ప్‌లైన్', 'నంబర్'],
};

export const greetingWords = ['hi', 'hii', 'hello', 'hey', 'namaste', 'namaskaram', 'నమస్తే', 'నమస్కారం', 'హాయ్', 'హలో'];
export const thanksWords = ['thanks', 'thank you', 'thanku', 'tq', 'dhanyavadalu', 'ధన్యవాదాలు', 'థాంక్స్'];

/** Ignored when matching guide text. */
export const stopWords = new Set(
  'a an and are as at be by can do for from get got have how i in is it me my of on or the to what when where which who why will with you your this that need want please sir madam garu ela emi enti undi ledu naaku naa ki ku lo'.split(' '),
);
