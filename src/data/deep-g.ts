import { Guide } from '../types';
import { b, CHECKED } from './bi';

const s = (en: string, te: string) => b(en, te);
const P = (problem: [string, string], fix: [string, string]) => ({ problem: s(...problem), fix: s(...fix) });

/** Full walkthroughs, batch G (checked 20 Oct 2026): farm, hostels, jobs, rights, PF, pension, business. */
export const deepG: Record<string, Partial<Guide>> = {
  'farm-subsidies': {
    stages: [
      {
        title: s('Drip / sprinkler (APMIP)', 'డ్రిప్ / స్ప్రింక్లర్ (APMIP)'),
        steps: [
          s('At the RSK or MeeSeva, register for micro irrigation with 1B, Aadhaar, bank, caste certificate and a water-source detail (borewell / well).', 'RSK లేదా మీసేవలో 1B, ఆధార్, బ్యాంక్, కుల ధృవీకరణ, నీటి వనరు వివరాలతో (బోరు / బావి) సూక్ష్మ సాగునీటికి నమోదు చేయండి.'),
          s('Choose an APMIP-approved company; their field engineer surveys and prepares the design and estimate.', 'APMIP ఆమోదిత కంపెనీని ఎంచుకోండి; వారి ఫీల్డ్ ఇంజినీర్ సర్వే చేసి డిజైన్, అంచనా తయారు చేస్తారు.'),
          s('APMIP officer inspects and sanctions; you pay only your farmer share (by DD / online as told).', 'APMIP అధికారి తనిఖీ చేసి మంజూరు చేస్తారు; మీరు మీ రైతు వాటా మాత్రమే చెల్లిస్తారు (చెప్పినట్లు DD / ఆన్‌లైన్).'),
          s('The company installs; officers verify; subsidy is paid to the company. Keep the warranty and service number.', 'కంపెనీ అమర్చుతుంది; అధికారులు ధృవీకరిస్తారు; సబ్సిడీ కంపెనీకి చెల్లిస్తారు. వారంటీ, సర్వీస్ నంబర్ దాచుకోండి.'),
        ],
      },
      {
        title: s('Machinery, drones, seeds', 'యంత్రాలు, డ్రోన్లు, విత్తనాలు'),
        steps: [
          s('Ask the Agriculture Assistant at the RSK which machines are under subsidy this year and the share you pay.', 'ఈ ఏడాది ఏ యంత్రాలకు సబ్సిడీ ఉంది, మీ వాటా ఎంత అని RSKలో వ్యవసాయ సహాయకుడిని అడగండి.'),
          s('Apply with 1B and Aadhaar; selection may be by lottery / seniority. Buy from the listed dealer after sanction.', '1B, ఆధార్‌తో దరఖాస్తు చేయండి; ఎంపిక లాటరీ / సీనియారిటీ ద్వారా ఉండవచ్చు. మంజూరైన తర్వాత జాబితాలోని డీలర్ నుండి కొనండి.'),
          s('Seeds / fertilisers: book at the RSK with Aadhaar (fingerprint) and collect on the date given.', 'విత్తనాలు / ఎరువులు: ఆధార్ (వేలిముద్ర)తో RSKలో బుక్ చేసి ఇచ్చిన తేదీన తీసుకోండి.'),
        ],
      },
    ],
    costExample: s('Drip for 2 acres costing about ₹1.2 lakh: a small SC/ST farmer may pay nothing; a large farmer pays about half.', 'సుమారు ₹1.2 లక్షల ఖర్చుతో 2 ఎకరాలకు డ్రిప్: చిన్న SC/ST రైతు ఏమీ చెల్లించకపోవచ్చు; పెద్ద రైతు సుమారు సగం.'),
    lastChecked: CHECKED,
  },

  'agri-power-connection': {
    stages: [
      {
        title: s('Register', 'నమోదు'),
        steps: [
          s('At the Village Secretariat / MeeSeva ask for "Agricultural new service connection". Give 1B, Aadhaar, photo, borewell / well details, pump HP.', 'గ్రామ సచివాలయం / మీసేవలో "వ్యవసాయ కొత్త సర్వీస్ కనెక్షన్" అడగండి. 1B, ఆధార్, ఫోటో, బోరు / బావి వివరాలు, పంపు HP ఇవ్వండి.'),
          s('Pay the registration / development charges; keep the registration number and date — that is your seniority.', 'నమోదు / అభివృద్ధి ఛార్జీలు చెల్లించండి; నమోదు నంబర్, తేదీ దాచుకోండి — అదే మీ సీనియారిటీ.'),
        ],
      },
      {
        title: s('Survey and release', 'సర్వే, విడుదల'),
        steps: [
          s('The DISCOM AE / lineman surveys: distance from the nearest pole / transformer, poles needed.', 'DISCOM AE / లైన్‌మెన్ సర్వే చేస్తారు: దగ్గరి స్తంభం / ట్రాన్స్‌ఫార్మర్ నుండి దూరం, అవసరమైన స్తంభాలు.'),
          s('Install ISI-marked pump, starter and capacitor; earthing must be proper.', 'ISI మార్క్ పంపు, స్టార్టర్, కెపాసిటర్ అమర్చండి; ఎర్తింగ్ సరిగ్గా ఉండాలి.'),
          s('When your turn comes, the line is drawn and the connection released with a service number. Supply is free.', 'మీ వంతు వచ్చినప్పుడు లైన్ వేసి సర్వీస్ నంబర్‌తో కనెక్షన్ విడుదల చేస్తారు. సరఫరా ఉచితం.'),
        ],
      },
    ],
    problems: [
      P(['Waiting for years.', 'ఏళ్లుగా వేచి ఉన్నారు.'], ['Ask the DISCOM section office for your position in the seniority list; file a PGRS grievance if skipped.', 'సీనియారిటీ జాబితాలో మీ స్థానం DISCOM సెక్షన్ కార్యాలయాన్ని అడగండి; దాటవేస్తే PGRSలో ఫిర్యాదు చేయండి.']),
      P(['Lineman asks money to release.', 'విడుదల కోసం లైన్‌మెన్ డబ్బు అడుగుతున్నారు.'], ['Don\'t pay. Call 1912 or ACB 14400.', 'చెల్లించకండి. 1912 లేదా ACB 14400కి కాల్ చేయండి.']),
    ],
    lastChecked: CHECKED,
  },

  'welfare-hostels': {
    stages: [
      {
        title: s('Welfare hostel (pre-matric / post-matric)', 'సంక్షేమ హాస్టల్ (ప్రీ-మెట్రిక్ / పోస్ట్-మెట్రిక్)'),
        steps: [
          s('In May–June, visit the nearest SC / BC / ST / minority welfare hostel and ask the warden for the application.', 'మే–జూన్‌లో దగ్గరి SC / BC / ST / మైనారిటీ సంక్షేమ హాస్టల్‌కు వెళ్లి వార్డెన్‌ను దరఖాస్తు అడగండి.'),
          s('Attach caste and income certificates, Aadhaar, rice card, photos, TC / study certificate and marks memo.', 'కుల, ఆదాయ ధృవీకరణలు, ఆధార్, రైస్ కార్డు, ఫోటోలు, TC / స్టడీ సర్టిఫికెట్, మార్కుల మెమో జతచేయండి.'),
          s('Selection list is displayed at the hostel; join with bedding and personal items.', 'ఎంపిక జాబితా హాస్టల్‌లో ప్రదర్శిస్తారు; పరుపు, వ్యక్తిగత వస్తువులతో చేరండి.'),
        ],
      },
      {
        title: s('Residential (Gurukulam) school', 'రెసిడెన్షియల్ (గురుకులం) పాఠశాల'),
        steps: [
          s('Watch for the admission notification (Feb–April) of APSWREIS (SC), APTWREIS (ST), MJPAPBCWREIS (BC), APREIS (general) or the minority society.', 'APSWREIS (SC), APTWREIS (ST), MJPAPBCWREIS (BC), APREIS (జనరల్) లేదా మైనారిటీ సొసైటీ ప్రవేశ నోటిఫికేషన్ (ఫిబ్రవరి–ఏప్రిల్) గమనించండి.'),
          s('Apply online on the society\'s site with child\'s details and certificates; download the hall ticket.', 'పిల్లల వివరాలు, సర్టిఫికెట్లతో సొసైటీ సైట్‌లో ఆన్‌లైన్ దరఖాస్తు చేసి హాల్ టికెట్ డౌన్‌లోడ్ చేయండి.'),
          s('Write the entrance test / attend the lottery; check the selection list and report with originals.', 'ప్రవేశ పరీక్ష రాయండి / లాటరీకి హాజరవ్వండి; ఎంపిక జాబితా చూసి అసలు పత్రాలతో చేరండి.'),
        ],
      },
    ],
    costExample: s('Free stay, food, books and uniforms.', 'ఉచిత వసతి, భోజనం, పుస్తకాలు, యూనిఫారాలు.'),
    lastChecked: CHECKED,
  },

  'govt-jobs-skills': {
    stages: [
      {
        title: s('Set up once', 'ఒకసారి సెటప్'),
        steps: [
          s('Scan and keep: SSC memo, all certificates, caste / EWS / disability, local (study) certificates 4th–10th, photo and signature (in the sizes asked).', 'స్కాన్ చేసి దాచుకోండి: SSC మెమో, అన్ని సర్టిఫికెట్లు, కుల / EWS / వైకల్యం, 4–10 తరగతుల స్థానిక (స్టడీ) సర్టిఫికెట్లు, ఫోటో, సంతకం (అడిగిన సైజుల్లో).'),
          s('APPSC: psc.ap.gov.in → OTPR → register with Aadhaar, mobile, email → note the OTPR ID.', 'APPSC: psc.ap.gov.in → OTPR → ఆధార్, మొబైల్, ఇమెయిల్‌తో నమోదు → OTPR ID నోట్ చేయండి.'),
          s('Register on ncs.gov.in and apssdc.in for job alerts and training.', 'ఉద్యోగ అలర్ట్‌లు, శిక్షణ కోసం ncs.gov.in, apssdc.inలో నమోదు చేయండి.'),
        ],
      },
      {
        title: s('Apply for a notification', 'నోటిఫికేషన్‌కు దరఖాస్తు'),
        steps: [
          s('Read the full notification PDF: posts, age, qualification, reservation, exam pattern, last date.', 'పూర్తి నోటిఫికేషన్ PDF చదవండి: పోస్టులు, వయస్సు, అర్హత, రిజర్వేషన్, పరీక్ష విధానం, చివరి తేదీ.'),
          s('Pay the fee and submit before the last day; download the application PDF.', 'చివరి రోజుకు ముందే ఫీజు చెల్లించి సమర్పించండి; అప్లికేషన్ PDF డౌన్‌లోడ్ చేయండి.'),
          s('Download the hall ticket, write the exam, check the key and results on the same site; attend certificate verification with originals.', 'హాల్ టికెట్ డౌన్‌లోడ్ చేసి పరీక్ష రాయండి, అదే సైట్‌లో కీ, ఫలితాలు చూడండి; అసలు పత్రాలతో సర్టిఫికెట్ వెరిఫికేషన్‌కు హాజరవ్వండి.'),
        ],
      },
      {
        title: s('Free training and job melas', 'ఉచిత శిక్షణ, జాబ్ మేళాలు'),
        steps: [
          s('On apssdc.in pick a course (computer, nursing assistant, electrician, driving…) near you; attend and get the certificate.', 'apssdc.inలో మీ దగ్గర కోర్సు ఎంచుకోండి (కంప్యూటర్, నర్సింగ్ అసిస్టెంట్, ఎలక్ట్రీషియన్, డ్రైవింగ్…); హాజరై సర్టిఫికెట్ పొందండి.'),
          s('Attend district job melas with several copies of your resume and certificates.', 'రెజ్యూమ్, సర్టిఫికెట్ల అనేక కాపీలతో జిల్లా జాబ్ మేళాలకు హాజరవ్వండి.'),
        ],
      },
    ],
    lastChecked: CHECKED,
  },

  'rti-application': {
    stages: [
      {
        title: s('Write the application', 'దరఖాస్తు రాయడం'),
        steps: [
          s('Heading: "Application under Section 6(1) of the RTI Act, 2005". To: "The Public Information Officer, [office name and address]".', 'శీర్షిక: "సమాచార హక్కు చట్టం 2005 సెక్షన్ 6(1) కింద దరఖాస్తు". వారికి: "పౌర సమాచార అధికారి, [కార్యాలయం పేరు, చిరునామా]".'),
          s('Your name, address, phone. Then numbered questions — e.g. "1. Certified copy of the file notings on my application no. __ dated __. 2. Name of the officer it is pending with and since when."', 'మీ పేరు, చిరునామా, ఫోన్. తర్వాత నంబర్ వేసిన ప్రశ్నలు — ఉదా: "1. నా దరఖాస్తు నం. __ తేదీ __పై ఫైల్ నోటింగ్స్ సర్టిఫైడ్ కాపీ. 2. ఏ అధికారి వద్ద, ఎప్పటి నుండి పెండింగ్‌లో ఉంది."'),
          s('Mention fee paid (₹10 — cash receipt / DD / postal order) or attach the rice card copy for BPL exemption. Sign with date.', 'చెల్లించిన ఫీజు (₹10 — నగదు రసీదు / DD / పోస్టల్ ఆర్డర్) పేర్కొనండి లేదా BPL మినహాయింపుకు రైస్ కార్డు కాపీ జతచేయండి. తేదీతో సంతకం.'),
        ],
      },
      {
        title: s('Submit', 'సమర్పణ'),
        steps: [
          s('Hand it to the office and take a stamped acknowledgement, or send by registered post with AD and keep the slip.', 'కార్యాలయంలో ఇచ్చి స్టాంప్ వేసిన అక్నాలెడ్జ్‌మెంట్ తీసుకోండి, లేదా రిజిస్టర్డ్ పోస్ట్ AD ద్వారా పంపి స్లిప్ దాచుకోండి.'),
          s('Central government offices (banks, railways, post, EPFO): file on rtionline.gov.in and pay ₹10 online.', 'కేంద్ర ప్రభుత్వ కార్యాలయాలు (బ్యాంకులు, రైల్వే, పోస్ట్, EPFO): rtionline.gov.inలో దాఖలు చేసి ₹10 ఆన్‌లైన్‌లో చెల్లించండి.'),
          s('Mark day 30 on your calendar.', 'మీ క్యాలెండర్‌లో 30వ రోజు గుర్తు పెట్టుకోండి.'),
        ],
      },
      {
        title: s('Appeal if needed', 'అవసరమైతే అప్పీల్'),
        steps: [
          s('No reply in 30 days or incomplete reply: write a First Appeal to the First Appellate Authority (senior officer in the same office) within 30 days, attaching your RTI copy and the reply.', '30 రోజుల్లో సమాధానం రాకపోతే లేదా అసంపూర్ణమైతే: 30 రోజుల్లోపు అదే కార్యాలయంలోని మొదటి అప్పిలేట్ అధికారికి మొదటి అప్పీల్ రాయండి, మీ RTI కాపీ, సమాధానం జతచేసి.'),
          s('Still unsatisfied: Second Appeal / complaint to the AP State Information Commission within 90 days.', 'అప్పటికీ సంతృప్తి లేకపోతే: 90 రోజుల్లోపు AP రాష్ట్ర సమాచార కమిషన్‌కు రెండో అప్పీల్ / ఫిర్యాదు.'),
        ],
      },
    ],
    costExample: s('₹10 application + about ₹2 per page for copies. BPL: free.', '₹10 దరఖాస్తు + కాపీలకు పేజీకి సుమారు ₹2. BPL: ఉచితం.'),
    lastChecked: CHECKED,
  },

  'consumer-complaint': {
    stages: [
      {
        title: s('Complain to the company first', 'ముందుగా కంపెనీకి ఫిర్యాదు'),
        steps: [
          s('Email / write to the seller and the company\'s customer care with order number, bill, problem, what you want (refund / replacement / repair). Keep the ticket number.', 'ఆర్డర్ నంబర్, బిల్లు, సమస్య, మీకు ఏం కావాలి (రీఫండ్ / రీప్లేస్‌మెంట్ / రిపేర్)తో అమ్మకందారు, కంపెనీ కస్టమర్ కేర్‌కు ఇమెయిల్ / లేఖ. టికెట్ నంబర్ దాచుకోండి.'),
          s('Give them 15 days.', 'వారికి 15 రోజులు ఇవ్వండి.'),
        ],
      },
      {
        title: s('National Consumer Helpline', 'జాతీయ వినియోగదారుల హెల్ప్‌లైన్'),
        steps: [
          s('Call 1915, WhatsApp 8800001915, or register on consumerhelpline.gov.in / NCH app with the details and attachments.', '1915కి కాల్, వాట్సాప్ 8800001915, లేదా వివరాలు, జతలతో consumerhelpline.gov.in / NCH యాప్‌లో నమోదు చేయండి.'),
          s('NCH sends it to the company; many cases settle here in a few weeks.', 'NCH కంపెనీకి పంపుతుంది; చాలా కేసులు ఇక్కడే కొన్ని వారాల్లో పరిష్కారమవుతాయి.'),
        ],
      },
      {
        title: s('Consumer Commission case', 'వినియోగదారుల కమిషన్ కేసు'),
        steps: [
          s('e-jagriti.gov.in → register → "File a case" → choose the District Commission (where you live or bought) → fill parties, facts, relief claimed.', 'e-jagriti.gov.in → నమోదు → "File a case" → జిల్లా కమిషన్ ఎంచుకోండి (మీరు ఉండే లేదా కొన్న చోట) → పక్షాలు, వాస్తవాలు, కోరిన పరిహారం నింపండి.'),
          s('Upload bill, correspondence, photos and an affidavit; pay the fee (nil up to ₹5 lakh).', 'బిల్లు, ఉత్తరప్రత్యుత్తరాలు, ఫోటోలు, అఫిడవిట్ అప్‌లోడ్ చేసి; ఫీజు చెల్లించండి (₹5 లక్షల వరకు లేదు).'),
          s('Attend hearings (in person or video). The order can give refund, compensation and costs.', 'విచారణలకు హాజరవ్వండి (నేరుగా లేదా వీడియో). ఉత్తర్వులో రీఫండ్, పరిహారం, ఖర్చులు ఇవ్వవచ్చు.'),
        ],
      },
    ],
    costExample: s('A ₹40,000 phone with a defect, refused under warranty: helpline free, commission case free (under ₹5 lakh).', 'లోపం ఉన్న ₹40,000 ఫోన్, వారంటీలో నిరాకరిస్తే: హెల్ప్‌లైన్ ఉచితం, కమిషన్ కేసు ఉచితం (₹5 లక్షల లోపు).'),
    lastChecked: CHECKED,
  },

  'women-protection': {
    stages: [
      {
        title: s('Get safe first', 'ముందు సురక్షితంగా ఉండడం'),
        steps: [
          s('Immediate danger: 112. Support / counselling / rescue: 181.', 'తక్షణ ప్రమాదం: 112. మద్దతు / కౌన్సెలింగ్ / రక్షణ: 181.'),
          s('One Stop Centre (Sakhi) at the district hospital / headquarters gives temporary shelter, medical help, police and legal help under one roof.', 'జిల్లా ఆసుపత్రి / ప్రధాన కేంద్రంలోని వన్ స్టాప్ సెంటర్ (సఖి) తాత్కాలిక ఆశ్రయం, వైద్య, పోలీసు, న్యాయ సహాయం ఒకే చోట ఇస్తుంది.'),
          s('If injured, get treated at a government hospital and ask for the medical record — it is evidence.', 'గాయపడితే ప్రభుత్వ ఆసుపత్రిలో చికిత్స పొంది మెడికల్ రికార్డు అడగండి — అది రుజువు.'),
        ],
      },
      {
        title: s('Domestic violence case', 'గృహ హింస కేసు'),
        steps: [
          s('Meet the Protection Officer (ICDS project / Women & Child Welfare office). Tell what happened; they write a Domestic Incident Report (DIR).', 'ప్రొటెక్షన్ ఆఫీసర్‌ను (ICDS ప్రాజెక్ట్ / మహిళా శిశు సంక్షేమ కార్యాలయం) కలవండి. జరిగింది చెప్పండి; వారు డొమెస్టిక్ ఇన్సిడెంట్ రిపోర్ట్ (DIR) రాస్తారు.'),
          s('The PO / free legal aid lawyer files an application before the Magistrate for protection, residence, maintenance, custody orders.', 'PO / ఉచిత న్యాయ సహాయ న్యాయవాది రక్షణ, నివాసం, భరణం, పిల్లల కస్టడీ ఉత్తర్వుల కోసం మేజిస్ట్రేట్ ముందు దరఖాస్తు వేస్తారు.'),
          s('The Magistrate can pass an interim order quickly; breaking it is a crime.', 'మేజిస్ట్రేట్ త్వరగా తాత్కాలిక ఉత్తర్వు ఇవ్వవచ్చు; దాన్ని ఉల్లంఘించడం నేరం.'),
        ],
      },
      {
        title: s('Criminal complaint', 'క్రిమినల్ ఫిర్యాదు'),
        steps: [
          s('Dowry harassment, assault, stalking, online abuse: complain at the police / women police station; take the FIR copy.', 'వరకట్న వేధింపులు, దాడి, వెంటాడడం, ఆన్‌లైన్ వేధింపులు: పోలీస్ / మహిళా పోలీస్ స్టేషన్‌లో ఫిర్యాదు చేసి FIR కాపీ తీసుకోండి.'),
          s('Online harassment / morphed photos: also report on cybercrime.gov.in.', 'ఆన్‌లైన్ వేధింపులు / మార్ఫ్ చేసిన ఫోటోలు: cybercrime.gov.inలో కూడా రిపోర్ట్ చేయండి.'),
          s('At work: written complaint to the Internal Committee within 3 months; if none, the District Local Committee.', 'పనిస్థలంలో: 3 నెలల్లో అంతర్గత కమిటీకి రాతపూర్వక ఫిర్యాదు; లేకపోతే జిల్లా లోకల్ కమిటీ.'),
        ],
      },
    ],
    costExample: s('All help, shelter and legal aid: free.', 'సహాయం, ఆశ్రయం, న్యాయ సహాయం అన్నీ ఉచితం.'),
    lastChecked: CHECKED,
  },

  'epf-withdrawal': {
    stages: [
      {
        title: s('Get your UAN ready', 'UAN సిద్ధం చేయడం'),
        steps: [
          s('Find UAN on your salary slip, or on the EPFO portal → "Know your UAN".', 'జీతం స్లిప్‌లో లేదా EPFO పోర్టల్ → "Know your UAN"లో UAN కనుగొనండి.'),
          s('Activate: unifiedportal-mem.epfindia.gov.in → "Activate UAN" → Aadhaar OTP (or UMANG app with face authentication).', 'యాక్టివేట్: unifiedportal-mem.epfindia.gov.in → "Activate UAN" → ఆధార్ OTP (లేదా ఫేస్ ధృవీకరణతో UMANG యాప్).'),
          s('Log in → Manage → KYC: check Aadhaar, PAN and bank (IFSC) are "verified".', 'లాగిన్ → Manage → KYC: ఆధార్, PAN, బ్యాంక్ (IFSC) "verified" అయి ఉన్నాయో చూడండి.'),
          s('Check the e-passbook for balances and that every employer\'s account is listed.', 'బ్యాలెన్స్‌లు, ప్రతి యజమాని ఖాతా ఉందో e-పాస్‌బుక్‌లో చూడండి.'),
        ],
      },
      {
        title: s('Make the claim', 'క్లెయిమ్ చేయడం'),
        steps: [
          s('Online Services → "Claim (Form-31, 19, 10C & 10D)" → verify last 4 digits of bank account.', 'Online Services → "Claim (Form-31, 19, 10C & 10D)" → బ్యాంక్ ఖాతా చివరి 4 అంకెలు ధృవీకరించండి.'),
          s('Choose: PF advance (Form 31 — illness, education, marriage, house), full PF settlement (Form 19) after leaving the job, or pension withdrawal (10C) if less than 10 years.', 'ఎంచుకోండి: PF అడ్వాన్స్ (ఫారం 31 — అనారోగ్యం, విద్య, వివాహం, ఇల్లు), ఉద్యోగం వదిలాక పూర్తి PF సెటిల్‌మెంట్ (ఫారం 19), లేదా 10 సంవత్సరాల లోపు అయితే పెన్షన్ ఉపసంహరణ (10C).'),
          s('Enter the amount and reason, upload a cheque photo if asked, submit with Aadhaar OTP.', 'మొత్తం, కారణం నమోదు చేసి, అడిగితే చెక్ ఫోటో అప్‌లోడ్ చేసి, ఆధార్ OTPతో సమర్పించండి.'),
          s('Track status; money arrives in the bank.', 'స్టేటస్ ట్రాక్ చేయండి; డబ్బు బ్యాంకుకు వస్తుంది.'),
        ],
      },
      {
        title: s('Changed jobs', 'ఉద్యోగం మారితే'),
        steps: [
          s('Online Services → "One Member – One EPF Account (Transfer Request)" → select old account → submit with OTP. Better than withdrawing.', 'Online Services → "One Member – One EPF Account (Transfer Request)" → పాత ఖాతా ఎంచుకుని → OTPతో సమర్పించండి. ఉపసంహరణ కంటే మేలు.'),
        ],
      },
    ],
    costExample: s('Free. Withdrawing before 5 years of service may attract TDS if PAN isn\'t linked.', 'ఉచితం. 5 సంవత్సరాల సర్వీసుకు ముందు ఉపసంహరిస్తే PAN లింక్ లేకపోతే TDS కట్ కావచ్చు.'),
    problems: [P(['Name / DOB mismatch blocks the claim.', 'పేరు / పుట్టిన తేదీ తేడాతో క్లెయిమ్ ఆగింది.'], ['Submit a "Joint Declaration" correction on the portal (Manage → Modify Basic Details); employer approves.', 'పోర్టల్‌లో "Joint Declaration" సవరణ సమర్పించండి (Manage → Modify Basic Details); యజమాని ఆమోదిస్తారు.'])],
    lastChecked: CHECKED,
  },

  'pensioner-life-certificate': {
    stages: [
      {
        title: s('From your phone (face)', 'మీ ఫోన్ నుండి (ముఖం)'),
        steps: [
          s('Install "AadhaarFaceRD" (UIDAI) and "Jeevan Pramaan Face App" from Play Store.', 'Play Store నుండి "AadhaarFaceRD" (UIDAI), "Jeevan Pramaan Face App" ఇన్‌స్టాల్ చేయండి.'),
          s('Open Jeevan Pramaan → operator authentication (scan your own face once) → enter pensioner\'s Aadhaar, mobile, email.', 'జీవన్ ప్రమాణ్ తెరిచి → ఆపరేటర్ ధృవీకరణ (మీ ముఖం ఒకసారి స్కాన్) → పెన్షనర్ ఆధార్, మొబైల్, ఇమెయిల్.'),
          s('Fill pensioner details: name, PPO number, type of pension, sanctioning / disbursing agency, bank account.', 'పెన్షనర్ వివరాలు నింపండి: పేరు, PPO నంబర్, పెన్షన్ రకం, మంజూరు / చెల్లింపు సంస్థ, బ్యాంక్ ఖాతా.'),
          s('Scan the pensioner\'s face (good light, blink when asked) → submit. SMS with Jeevan Pramaan ID confirms.', 'పెన్షనర్ ముఖం స్కాన్ చేయండి (మంచి వెలుతురు, అడిగినప్పుడు కళ్లు రెప్ప వేయండి) → సమర్పించండి. జీవన్ ప్రమాణ్ IDతో SMS నిర్ధారిస్తుంది.'),
        ],
      },
      {
        title: s('Other ways', 'ఇతర మార్గాలు'),
        steps: [
          s('At the pension bank branch: give PPO number and Aadhaar; fingerprint.', 'పెన్షన్ బ్యాంక్ బ్రాంచ్‌లో: PPO నంబర్, ఆధార్ ఇచ్చి వేలిముద్ర.'),
          s('Doorstep: request on the Postinfo app / IPPB; the postman comes with a device.', 'ఇంటి వద్దకే: Postinfo యాప్ / IPPBలో అభ్యర్థించండి; పోస్ట్‌మ్యాన్ పరికరంతో వస్తారు.'),
          s('Download the certificate from jeevanpramaan.gov.in with the ID if the office asks.', 'కార్యాలయం అడిగితే IDతో jeevanpramaan.gov.in నుండి సర్టిఫికెట్ డౌన్‌లోడ్ చేయండి.'),
        ],
      },
    ],
    costExample: s('Phone / bank: free. Postman doorstep: about ₹70.', 'ఫోన్ / బ్యాంక్: ఉచితం. పోస్ట్‌మ్యాన్ ఇంటి సేవ: సుమారు ₹70.'),
    problems: [P(['Face not matching.', 'ముఖం సరిపోలడం లేదు.'], ['Try in daylight without glasses; else use fingerprint at the bank / CSC.', 'కళ్లజోడు లేకుండా పగటి వెలుతురులో ప్రయత్నించండి; లేకపోతే బ్యాంక్ / CSCలో వేలిముద్ర వాడండి.'])],
    lastChecked: CHECKED,
  },

  'start-small-business': {
    stages: [
      {
        title: s('Day 1 — free registrations', 'మొదటి రోజు — ఉచిత నమోదులు'),
        steps: [
          s('Udyam: udyamregistration.gov.in → "For New Entrepreneurs" → Aadhaar OTP → PAN → business name, address, activity (NIC code), investment, bank → submit. Download the certificate.', 'ఉద్యమ్: udyamregistration.gov.in → "For New Entrepreneurs" → ఆధార్ OTP → PAN → వ్యాపార పేరు, చిరునామా, కార్యకలాపం (NIC కోడ్), పెట్టుబడి, బ్యాంక్ → సబ్మిట్. సర్టిఫికెట్ డౌన్‌లోడ్ చేయండి.'),
          s('Open a current account in the business name using the Udyam certificate.', 'ఉద్యమ్ సర్టిఫికెట్‌తో వ్యాపార పేరుపై కరెంట్ ఖాతా తెరవండి.'),
        ],
      },
      {
        title: s('Local licences', 'స్థానిక లైసెన్సులు'),
        steps: [
          s('Trade licence: apply at the ward secretariat / municipality (or panchayat) with rent agreement / tax receipt.', 'ట్రేడ్ లైసెన్స్: అద్దె ఒప్పందం / పన్ను రసీదుతో వార్డు సచివాలయం / మున్సిపాలిటీ (లేదా పంచాయతీ)లో దరఖాస్తు.'),
          s('Food business: foscos.fssai.gov.in → basic registration (small turnover) → Aadhaar, photo, address proof → pay fee → certificate in days.', 'ఆహార వ్యాపారం: foscos.fssai.gov.in → బేసిక్ రిజిస్ట్రేషన్ (చిన్న టర్నోవర్) → ఆధార్, ఫోటో, చిరునామా రుజువు → ఫీజు → కొన్ని రోజుల్లో సర్టిఫికెట్.'),
          s('Staff employed: register under the Shops & Establishments Act on the AP labour portal.', 'సిబ్బంది ఉంటే: AP కార్మిక పోర్టల్‌లో షాప్స్ & ఎస్టాబ్లిష్‌మెంట్స్ చట్టం కింద నమోదు.'),
        ],
      },
      {
        title: s('Tax and money', 'పన్ను, డబ్బు'),
        steps: [
          s('GST if your turnover crosses the limit or you sell online / to other states: gst.gov.in → Register Now → PAN, Aadhaar, address, bank → ARN → GSTIN.', 'టర్నోవర్ పరిమితి దాటితే లేదా ఆన్‌లైన్ / ఇతర రాష్ట్రాలకు అమ్మితే GST: gst.gov.in → Register Now → PAN, ఆధార్, చిరునామా, బ్యాంక్ → ARN → GSTIN.'),
          s('Loan: Mudra (no collateral), PMEGP (subsidy 15–35%), Stand-Up India (SC/ST/women, ₹10 lakh–1 crore).', 'రుణం: ముద్ర (హామీ లేకుండా), PMEGP (15–35% సబ్సిడీ), స్టాండ్-అప్ ఇండియా (SC/ST/మహిళలు, ₹10 లక్షలు–1 కోటి).'),
        ],
      },
    ],
    costExample: s('Tiffin centre: Udyam ₹0 + FSSAI basic ₹100 a year + trade licence (municipal rate).', 'టిఫిన్ సెంటర్: ఉద్యమ్ ₹0 + FSSAI బేసిక్ ఏడాదికి ₹100 + ట్రేడ్ లైసెన్స్ (మున్సిపల్ రేటు).'),
    lastChecked: CHECKED,
  },
};
