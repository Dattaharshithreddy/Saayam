import { Guide } from '../types';
import { b, CHECKED } from './bi';

const s = (en: string, te: string) => b(en, te);
const P = (problem: [string, string], fix: [string, string]) => ({ problem: s(...problem), fix: s(...fix) });

/** Full walkthroughs, batch F (checked 20 Oct 2026): land problems, deeds, name change, relief, mothers, work, disability, seniors, paddy. */
export const deepF: Record<string, Partial<Guide>> = {
  'prohibited-land-22a': {
    stages: [
      {
        title: s('Check the list', 'జాబితా చూడడం'),
        steps: [
          s('Open registration.ap.gov.in → "Prohibited Properties (22A)".', 'registration.ap.gov.in → "Prohibited Properties (22A)" తెరవండి.'),
          s('Choose Rural (survey number) or Urban (door number) → district → mandal → village → enter the number → Search.', 'గ్రామీణం (సర్వే నంబర్) లేదా పట్టణం (డోర్ నంబర్) ఎంచుకుని → జిల్లా → మండలం → గ్రామం → నంబర్ → Search.'),
          s('Also search the parent survey number (e.g. for 45/2A also check 45). Note the category shown (assigned, endowment, government, ceiling…).', 'మూల సర్వే నంబర్ కూడా వెతకండి (ఉదా: 45/2A కోసం 45 కూడా). చూపిన వర్గం నోట్ చేయండి (అసైన్డ్, దేవాదాయ, ప్రభుత్వ, సీలింగ్…).'),
          s('Take a dated screenshot.', 'తేదీతో స్క్రీన్‌షాట్ తీయండి.'),
        ],
        note: s('Buying land? Don\'t pay any advance until the survey number is clean. Check again on the registration day.', 'భూమి కొంటున్నారా? సర్వే నంబర్ క్లీన్ అయ్యే వరకు అడ్వాన్స్ ఇవ్వకండి. రిజిస్ట్రేషన్ రోజు మళ్లీ చూడండి.'),
      },
      {
        title: s('Collect proof it is private land', 'ప్రైవేట్ భూమి అని రుజువు సేకరణ'),
        steps: [
          s('Get your sale deed and all link documents (30+ years if possible).', 'మీ సేల్ డీడ్, అన్ని లింక్ పత్రాలు (వీలైతే 30+ సంవత్సరాలు) తీసుకోండి.'),
          s('Get certified copies of old revenue records from the Tahsildar office: RSR / SFA, old pahani / adangal showing "patta" and the owner\'s name.', 'తహసీల్దార్ కార్యాలయం నుండి పాత రెవెన్యూ రికార్డుల సర్టిఫైడ్ కాపీలు: "పట్టా", యజమాని పేరు చూపే RSR / SFA, పాత పహాణీ / అడంగల్.'),
          s('EC for 30 years, current 1B / passbook.', '30 సంవత్సరాల EC, ప్రస్తుత 1B / పాస్‌బుక్.'),
        ],
      },
      {
        title: s('Apply for deletion', 'తొలగింపు దరఖాస్తు'),
        steps: [
          s('Write to the District Collector: survey number, extent, why it is private, list of documents. Submit at the Tahsildar / RDO office, or at Monday PGRS — take an acknowledgement.', 'జిల్లా కలెక్టర్‌కు రాయండి: సర్వే నంబర్, విస్తీర్ణం, ఎందుకు ప్రైవేట్, పత్రాల జాబితా. తహసీల్దార్ / RDO కార్యాలయంలో లేదా సోమవారం PGRSలో ఇచ్చి అక్నాలెడ్జ్‌మెంట్ తీసుకోండి.'),
          s('VRO / Surveyor / Tahsildar verify on the field and in records; RDO reports to the Collector.', 'VRO / సర్వేయర్ / తహసీల్దార్ క్షేత్రంలో, రికార్డుల్లో ధృవీకరిస్తారు; RDO కలెక్టర్‌కు నివేదిస్తారు.'),
          s('Collector issues the deletion order; registration department updates the list.', 'కలెక్టర్ తొలగింపు ఉత్తర్వు ఇస్తారు; రిజిస్ట్రేషన్ శాఖ జాబితా అప్‌డేట్ చేస్తుంది.'),
          s('Re-check the portal and save a screenshot plus a copy of the order.', 'పోర్టల్ మళ్లీ చూసి స్క్రీన్‌షాట్, ఉత్తర్వు కాపీ దాచుకోండి.'),
        ],
      },
    ],
    costExample: s('No government fee for the deletion application. Certified copies of old records cost a small fee each.', 'తొలగింపు దరఖాస్తుకు ప్రభుత్వ ఫీజు లేదు. పాత రికార్డుల సర్టిఫైడ్ కాపీలకు ఒక్కోదానికి చిన్న ఫీజు.'),
    problems: [P(['Land is genuinely assigned land (D-patta).', 'భూమి నిజంగా అసైన్డ్ (D-పట్టా) భూమి.'], ['It can\'t be sold normally. Ask at the Collectorate whether your case fits any freehold / removal order issued by government.', 'సాధారణంగా అమ్మలేరు. ప్రభుత్వం ఇచ్చిన ఫ్రీహోల్డ్ / తొలగింపు ఉత్తర్వుల్లో మీ కేసు వస్తుందేమో కలెక్టరేట్‌లో అడగండి.'])],
    lastChecked: CHECKED,
  },

  'lrs-bps-regularisation': {
    stages: [
      {
        title: s('Find out if a window is open', 'విండో తెరిచి ఉందో తెలుసుకోవడం'),
        steps: [
          s('Ask the town planning section of your municipality / development authority (VMRDA, CRDA, etc.) or the ward planning secretary.', 'మీ మున్సిపాలిటీ / అభివృద్ధి సంస్థ (VMRDA, CRDA మొదలైనవి) టౌన్ ప్లానింగ్ విభాగం లేదా వార్డు ప్లానింగ్ కార్యదర్శిని అడగండి.'),
          s('Check your plot/building is within the cut-off date and not on a lake, canal, road or 22A land.', 'మీ ప్లాట్/భవనం కట్-ఆఫ్ తేదీలోపు ఉందో, చెరువు, కాలువ, రోడ్డు లేదా 22A భూమిపై లేదో చూడండి.'),
        ],
      },
      {
        title: s('Apply', 'దరఖాస్తు'),
        steps: [
          s('LRS: on the LRS portal enter plot details, upload the sale deed, link documents, EC and plot location sketch; pay the initial fee.', 'LRS: LRS పోర్టల్‌లో ప్లాట్ వివరాలు, సేల్ డీడ్, లింక్ పత్రాలు, EC, ప్లాట్ లొకేషన్ స్కెచ్ అప్‌లోడ్ చేసి; ప్రారంభ ఫీజు చెల్లించండి.'),
          s('BPS: a licensed engineer / architect measures the building, draws the as-built plan and uploads with photos.', 'BPS: లైసెన్స్డ్ ఇంజినీర్ / ఆర్కిటెక్ట్ భవనాన్ని కొలిచి, యాజ్-బిల్ట్ ప్లాన్ గీసి ఫోటోలతో అప్‌లోడ్ చేస్తారు.'),
          s('Note the application number.', 'అప్లికేషన్ నంబర్ నోట్ చేయండి.'),
        ],
      },
      {
        title: s('Scrutiny and final payment', 'పరిశీలన, తుది చెల్లింపు'),
        steps: [
          s('Officials inspect and may raise shortfalls — reply within the time given.', 'అధికారులు తనిఖీ చేసి లోపాలు అడగవచ్చు — ఇచ్చిన సమయంలో సమాధానం ఇవ్వండి.'),
          s('Pay the final regularisation + open-space charges shown on the portal.', 'పోర్టల్‌లో చూపిన తుది క్రమబద్ధీకరణ + ఓపెన్-స్పేస్ ఛార్జీలు చెల్లించండి.'),
          s('Download the LRS / BPS proceedings and keep with your property papers.', 'LRS / BPS ప్రొసీడింగ్స్ డౌన్‌లోడ్ చేసి ఆస్తి పత్రాలతో దాచుకోండి.'),
        ],
      },
    ],
    problems: [P(['Missed the last window.', 'చివరి విండో మిస్సయ్యారు.'], ['Wait for the next government order; keep documents ready. Meanwhile, don\'t build on an unapproved plot.', 'తదుపరి ప్రభుత్వ ఉత్తర్వు కోసం వేచి ఉండండి; పత్రాలు సిద్ధంగా ఉంచండి. ఈలోగా అనుమతి లేని ప్లాట్‌పై నిర్మించకండి.'])],
    afterwards: [s('With LRS proceedings you can apply for building permission; with BPS you can get property tax, water and electricity regularly.', 'LRS ప్రొసీడింగ్స్‌తో భవన అనుమతికి దరఖాస్తు చేయవచ్చు; BPSతో ఆస్తి పన్ను, నీరు, విద్యుత్ సక్రమంగా పొందవచ్చు.')],
    lastChecked: CHECKED,
  },

  'will-gpa-deeds': {
    stages: [
      {
        title: s('Write a Will', 'వీలునామా రాయడం'),
        steps: [
          s('Write (or get drafted): your full name and address, "this is my last Will", list each property with survey / door number, and who gets what. Name an executor if you wish.', 'రాయండి (లేదా డ్రాఫ్ట్ చేయించండి): మీ పూర్తి పేరు, చిరునామా, "ఇది నా చివరి వీలునామా", ప్రతి ఆస్తి సర్వే / డోర్ నంబర్‌తో, ఎవరికి ఏమి. కావాలంటే ఎగ్జిక్యూటర్ పేరు.'),
          s('Sign on every page in front of two witnesses, who also sign (they should not be beneficiaries).', 'ఇద్దరు సాక్షుల ముందు ప్రతి పేజీపై సంతకం చేయండి, వారూ సంతకం చేయాలి (వారు లబ్ధిదారులు కాకూడదు).'),
          s('To register: book a slot on registration.ap.gov.in, go to the SRO with Aadhaar, the Will and witnesses. No stamp duty.', 'నమోదుకు: registration.ap.gov.inలో స్లాట్ బుక్ చేసి ఆధార్, వీలునామా, సాక్షులతో SROకు వెళ్లండి. స్టాంప్ డ్యూటీ లేదు.'),
          s('Older person? A doctor\'s note on sound mind at the time of signing helps avoid later disputes.', 'వయసు పైబడినవారా? సంతకం సమయంలో మానసిక స్థితి బాగుందని డాక్టర్ నోట్ తర్వాత వివాదాలు నివారిస్తుంది.'),
        ],
      },
      {
        title: s('Give a power of attorney (GPA / SPA)', 'పవర్ ఆఫ్ అటార్నీ (GPA / SPA) ఇవ్వడం'),
        steps: [
          s('Decide the powers: only for a specific task (SPA — e.g. register one sale) or general (GPA).', 'అధికారాలు నిర్ణయించండి: ఒక నిర్దిష్ట పనికి మాత్రమే (SPA — ఉదా: ఒక అమ్మకం నమోదు) లేదా సాధారణ (GPA).'),
          s('In India: draft, pay stamp duty, register at the SRO with executant, attorney and witnesses.', 'భారత్‌లో: డ్రాఫ్ట్ చేసి, స్టాంప్ డ్యూటీ చెల్లించి, ఇచ్చేవారు, అటార్నీ, సాక్షులతో SROలో నమోదు.'),
          s('Abroad: sign before the Indian embassy / consulate (or notary + apostille); send the original home. Within 3 months, get it adjudicated (stamp duty paid) at the District Registrar / SRO.', 'విదేశాల్లో: భారత రాయబార కార్యాలయం / కాన్సులేట్ ముందు (లేదా నోటరీ + అపోస్టిల్) సంతకం చేసి అసలు ఇంటికి పంపండి. 3 నెలల్లో జిల్లా రిజిస్ట్రార్ / SROలో అడ్జుడికేట్ (స్టాంప్ డ్యూటీ చెల్లింపు) చేయించండి.'),
        ],
      },
      {
        title: s('Close a loan on property (release)', 'ఆస్తిపై రుణం ముగింపు (విడుదల)'),
        steps: [
          s('After the last EMI, get the loan closure letter and all original documents back from the bank (check every page).', 'చివరి EMI తర్వాత బ్యాంక్ నుండి రుణ ముగింపు లేఖ, అన్ని అసలు పత్రాలు తీసుకోండి (ప్రతి పేజీ చూడండి).'),
          s('If a mortgage deed was registered, get the bank to execute a release / reconveyance deed at the SRO.', 'మార్ట్‌గేజ్ డీడ్ నమోదై ఉంటే, బ్యాంక్‌తో SROలో రిలీజ్ / రీకన్వేయన్స్ డీడ్ చేయించండి.'),
          s('Take a fresh EC after a few weeks to confirm the charge is cleared.', 'కొన్ని వారాల తర్వాత కొత్త EC తీసుకుని చార్జ్ తొలగిందో నిర్ధారించుకోండి.'),
        ],
      },
    ],
    costExample: s('Will: no stamp duty, only a small registration fee. GPA to a family member: small fixed duty; GPA to sell to an outsider: duty close to a sale.', 'వీలునామా: స్టాంప్ డ్యూటీ లేదు, చిన్న నమోదు ఫీజు మాత్రమే. కుటుంబ సభ్యునికి GPA: చిన్న స్థిర డ్యూటీ; బయటివారికి అమ్మే GPA: అమ్మకానికి దగ్గర డ్యూటీ.'),
    lastChecked: CHECKED,
  },

  'name-change-gazette': {
    stages: [
      {
        title: s('Affidavit', 'అఫిడవిట్'),
        steps: [
          s('On non-judicial stamp paper, write: old name, new name, reason, date of birth, address, and that you will be known by the new name. Sign in the OLD name.', 'నాన్-జ్యుడీషియల్ స్టాంప్ పేపర్‌పై రాయండి: పాత పేరు, కొత్త పేరు, కారణం, పుట్టిన తేదీ, చిరునామా, ఇకపై కొత్త పేరుతో పిలవబడతారని. పాత పేరుతో సంతకం చేయండి.'),
          s('Sign before a notary with two witnesses; get it notarised.', 'ఇద్దరు సాక్షులతో నోటరీ ముందు సంతకం చేసి నోటరీ చేయించండి.'),
        ],
      },
      {
        title: s('Newspaper advertisement', 'పత్రికా ప్రకటన'),
        steps: [
          s('Give a small classified ad in one Telugu and one English daily: "I, [old name], S/o / D/o / W/o …, residing at …, have changed my name to [new name]".', 'ఒక తెలుగు, ఒక ఇంగ్లీష్ దినపత్రికలో చిన్న క్లాసిఫైడ్ ప్రకటన: "నేను, [పాత పేరు], S/o / D/o / W/o …, … నివాసి, నా పేరును [కొత్త పేరు]గా మార్చుకున్నాను".'),
          s('Keep the full original newspaper pages.', 'పూర్తి అసలు పత్రిక పేజీలు దాచుకోండి.'),
        ],
      },
      {
        title: s('Apply for the AP Gazette', 'AP గెజిట్ దరఖాస్తు'),
        steps: [
          s('Get the application form (MeeSeva or the Commissioner of Printing office, Vijayawada). Fill and sign in the old name.', 'దరఖాస్తు ఫారం తీసుకోండి (మీసేవ లేదా విజయవాడ ప్రింటింగ్ కమిషనర్ కార్యాలయం). పాత పేరుతో నింపి సంతకం చేయండి.'),
          s('Attach affidavit, newspaper pages, ID / address proof, old-name proof, photos, and the reason document (marriage certificate etc.). Pay the gazette fee.', 'అఫిడవిట్, పత్రిక పేజీలు, ఐడీ / చిరునామా రుజువు, పాత పేరు రుజువు, ఫోటోలు, కారణ పత్రం (వివాహ ధృవీకరణ మొ.) జతచేసి గెజిట్ ఫీజు చెల్లించండి.'),
          s('Submit through MeeSeva / in person / by post; keep the receipt.', 'మీసేవ / నేరుగా / పోస్ట్ ద్వారా సమర్పించి రసీదు దాచుకోండి.'),
          s('Once published, collect / download the gazette copy.', 'ప్రచురించాక గెజిట్ కాపీ తీసుకోండి / డౌన్‌లోడ్ చేయండి.'),
        ],
      },
      {
        title: s('Update everywhere', 'అన్నిచోట్లా అప్‌డేట్'),
        steps: [
          s('Aadhaar first (enrolment centre), then PAN, bank, voter ID, passport, certificates — each with the gazette copy.', 'ముందు ఆధార్ (నమోదు కేంద్రం), తర్వాత PAN, బ్యాంక్, ఓటర్ ఐడీ, పాస్‌పోర్ట్, సర్టిఫికెట్లు — ప్రతిదానికి గెజిట్ కాపీతో.'),
        ],
      },
    ],
    costExample: s('Stamp paper + notary ₹200–500, two newspaper ads ₹1,000–3,000, gazette fee as fixed by the department.', 'స్టాంప్ పేపర్ + నోటరీ ₹200–500, రెండు పత్రికా ప్రకటనలు ₹1,000–3,000, శాఖ నిర్ణయించిన గెజిట్ ఫీజు.'),
    lastChecked: CHECKED,
  },

  'cm-relief-fund': {
    stages: [
      {
        title: s('First check NTR Vaidya Seva', 'ముందుగా NTR వైద్య సేవ చూడండి'),
        steps: [
          s('At the hospital\'s Aarogya Mithra desk ask: "Is this treatment covered?" If yes, it is cashless — no CMRF needed.', 'ఆసుపత్రి ఆరోగ్య మిత్ర డెస్క్‌లో అడగండి: "ఈ చికిత్స కవర్ అవుతుందా?" అయితే నగదు రహితం — CMRF అక్కర్లేదు.'),
        ],
      },
      {
        title: s('Before treatment — Letter of Credit (LOC)', 'చికిత్సకు ముందు — లెటర్ ఆఫ్ క్రెడిట్ (LOC)'),
        steps: [
          s('Get a detailed cost estimate on hospital letterhead, signed and stamped by the treating doctor, with diagnosis reports.', 'చికిత్స చేసే డాక్టర్ సంతకం, స్టాంప్‌తో ఆసుపత్రి లెటర్‌హెడ్‌పై వివరణాత్మక ఖర్చు అంచనా, రోగ నిర్ధారణ రిపోర్టులు తీసుకోండి.'),
          s('Fill the LOC form (apcmrf.ap.gov.in); attach Aadhaar, rice card / income certificate, photo, hospital registration copy.', 'LOC ఫారం నింపండి (apcmrf.ap.gov.in); ఆధార్, రైస్ కార్డు / ఆదాయ ధృవీకరణ, ఫోటో, ఆసుపత్రి నమోదు కాపీ జతచేయండి.'),
          s('Submit through your MLA / MP office (they forward a recommendation letter) or as the portal directs; note the application number.', 'మీ MLA / MP కార్యాలయం ద్వారా (వారు సిఫారసు లేఖ పంపుతారు) లేదా పోర్టల్ సూచించినట్లు సమర్పించండి; అప్లికేషన్ నంబర్ నోట్ చేయండి.'),
          s('Sanctioned amount goes to the hospital.', 'మంజూరైన మొత్తం ఆసుపత్రికి వెళ్తుంది.'),
        ],
      },
      {
        title: s('After treatment — reimbursement', 'చికిత్స తర్వాత — రీయింబర్స్‌మెంట్'),
        steps: [
          s('Collect all original bills (signed and stamped), discharge summary, case sheet, reports, on-bed photo.', 'అన్ని అసలు బిల్లులు (సంతకం, స్టాంప్‌తో), డిశ్చార్జ్ సమ్మరీ, కేస్ షీట్, రిపోర్టులు, ఆన్-బెడ్ ఫోటో సేకరించండి.'),
          s('Fill the reimbursement form; get the hospital part signed. Submit soon after discharge with bank passbook copy.', 'రీయింబర్స్‌మెంట్ ఫారం నింపి ఆసుపత్రి భాగం సంతకం చేయించండి. డిశ్చార్జ్ తర్వాత త్వరగా బ్యాంక్ పాస్‌బుక్ కాపీతో సమర్పించండి.'),
          s('Track on apcmrf.ap.gov.in; money comes to your bank account (sometimes as a cheque through the MLA).', 'apcmrf.ap.gov.inలో ట్రాక్ చేయండి; డబ్బు మీ బ్యాంక్ ఖాతాకు (కొన్నిసార్లు MLA ద్వారా చెక్కుగా).'),
        ],
      },
    ],
    costExample: s('Free to apply. The amount sanctioned depends on the case — it may not cover the whole bill.', 'దరఖాస్తు ఉచితం. మంజూరు మొత్తం కేసును బట్టి — పూర్తి బిల్లు కవర్ కాకపోవచ్చు.'),
    problems: [P(['An agent asks for a cut to "get CMRF sanctioned".', '"CMRF మంజూరు చేయిస్తా" అని ఏజెంట్ కమీషన్ అడుగుతున్నారు.'], ['Refuse. Apply directly; report to ACB 14400.', 'ఒప్పుకోకండి. నేరుగా దరఖాస్తు చేయండి; ACB 14400కి తెలియజేయండి.'])],
    lastChecked: CHECKED,
  },

  'maternity-anganwadi': {
    stages: [
      {
        title: s('As soon as you are pregnant', 'గర్భం నిర్ధారణ కాగానే'),
        steps: [
          s('Tell your ASHA / ANM / Anganwadi worker; register the pregnancy and get the MCP card.', 'మీ ఆశా / ANM / అంగన్‌వాడీ కార్యకర్తకు చెప్పండి; గర్భం నమోదు చేయించి MCP కార్డు తీసుకోండి.'),
          s('Give your Aadhaar and Aadhaar-linked bank details for PMMVY; the worker fills the form online.', 'PMMVY కోసం మీ ఆధార్, ఆధార్ లింక్ బ్యాంక్ వివరాలు ఇవ్వండి; కార్యకర్త ఆన్‌లైన్‌లో ఫారం నింపుతారు.'),
          s('Go for antenatal check-ups (at least 4) at the PHC; take iron-folic acid tablets given free.', 'PHCలో గర్భధారణ చెకప్‌లకు (కనీసం 4) వెళ్లండి; ఉచితంగా ఇచ్చే ఐరన్-ఫోలిక్ యాసిడ్ మాత్రలు వేసుకోండి.'),
          s('Collect take-home ration from the Anganwadi every month.', 'ప్రతి నెల అంగన్‌వాడీ నుండి టేక్-హోమ్ రేషన్ తీసుకోండి.'),
        ],
      },
      {
        title: s('Delivery and after', 'ప్రసవం, తర్వాత'),
        steps: [
          s('Deliver at a government hospital (102 ambulance free); collect the NTR Baby Kit.', 'ప్రభుత్వ ఆసుపత్రిలో ప్రసవం (102 అంబులెన్స్ ఉచితం); NTR బేబీ కిట్ తీసుకోండి.'),
          s('Register the birth; complete the baby\'s first vaccines (BCG, OPV, Hep-B, then 6/10/14-week doses).', 'జననం నమోదు చేయండి; బిడ్డ మొదటి టీకాలు (BCG, OPV, Hep-B, తర్వాత 6/10/14 వారాల డోసులు) పూర్తి చేయండి.'),
          s('Tell the Anganwadi worker so the second PMMVY instalment is processed.', 'రెండో PMMVY వాయిదా ప్రాసెస్ అయ్యేలా అంగన్‌వాడీ కార్యకర్తకు చెప్పండి.'),
        ],
      },
      {
        title: s('Child under 6', '6 ఏళ్లలోపు పిల్లలు'),
        steps: [
          s('Monthly weight check and food at the Anganwadi; pre-school from age 3.', 'అంగన్‌వాడీలో నెలవారీ బరువు తనిఖీ, ఆహారం; 3 ఏళ్ల నుండి ప్రీ-స్కూల్.'),
        ],
      },
    ],
    costExample: s('First child: ₹5,000 in two instalments. Second child a girl: ₹6,000. All care free.', 'మొదటి బిడ్డ: రెండు వాయిదాల్లో ₹5,000. రెండో బిడ్డ అమ్మాయి అయితే: ₹6,000. సంరక్షణ అంతా ఉచితం.'),
    problems: [P(['PMMVY money not received.', 'PMMVY డబ్బు రాలేదు.'], ['Check the account is Aadhaar-seeded (NPCI); ask the Anganwadi supervisor / CDPO office for the status.', 'ఖాతా ఆధార్ సీడ్ (NPCI) అయిందో చూడండి; స్టేటస్ కోసం అంగన్‌వాడీ సూపర్‌వైజర్ / CDPO కార్యాలయాన్ని అడగండి.'])],
    lastChecked: CHECKED,
  },

  'rural-employment-guarantee': {
    stages: [
      {
        title: s('Get a job card', 'జాబ్ కార్డు పొందడం'),
        steps: [
          s('At the Village Secretariat / panchayat, ask the Field Assistant for registration. Give Aadhaar of each adult, photos, rice card and bank details.', 'గ్రామ సచివాలయం / పంచాయతీలో ఫీల్డ్ అసిస్టెంట్‌ను నమోదు అడగండి. ప్రతి పెద్దవారి ఆధార్, ఫోటోలు, రైస్ కార్డు, బ్యాంక్ వివరాలు ఇవ్వండి.'),
          s('Job card is issued within 15 days, free. Check names and photos on it.', '15 రోజుల్లో ఉచితంగా జాబ్ కార్డు ఇస్తారు. అందులో పేర్లు, ఫోటోలు చూడండి.'),
        ],
      },
      {
        title: s('Ask for work', 'పని అడగడం'),
        steps: [
          s('Give a written application to the Field Assistant / panchayat: names, job card number, how many days, from which date. Take a dated receipt.', 'ఫీల్డ్ అసిస్టెంట్ / పంచాయతీకి రాతపూర్వక దరఖాస్తు: పేర్లు, జాబ్ కార్డు నంబర్, ఎన్ని రోజులు, ఏ తేదీ నుండి. తేదీతో రసీదు తీసుకోండి.'),
          s('Work must be given within 15 days, normally within 5 km (extra wage if farther).', '15 రోజుల్లో పని ఇవ్వాలి, సాధారణంగా 5 కి.మీ లోపు (దూరమైతే అదనపు వేతనం).'),
        ],
      },
      {
        title: s('At work and payment', 'పనిలో, చెల్లింపు'),
        steps: [
          s('Mark attendance daily (app / biometric). Worksite must have drinking water, shade and first aid.', 'ప్రతిరోజూ హాజరు వేయండి (యాప్ / బయోమెట్రిక్). పని స్థలంలో తాగునీరు, నీడ, ప్రథమ చికిత్స ఉండాలి.'),
          s('Wages come to your bank account, normally within 15 days of the week\'s muster closing.', 'వారం మస్టర్ ముగిసిన 15 రోజుల్లో సాధారణంగా వేతనాలు మీ బ్యాంక్ ఖాతాకు.'),
          s('Check your days and payments with the job card number on the scheme portal.', 'పథకం పోర్టల్‌లో జాబ్ కార్డు నంబర్‌తో మీ రోజులు, చెల్లింపులు చూడండి.'),
        ],
      },
    ],
    costExample: s('25 days of work at ₹312 = ₹7,800 to your bank.', '₹312 చొప్పున 25 రోజుల పని = మీ బ్యాంకుకు ₹7,800.'),
    problems: [P(['Wages delayed or less than days worked.', 'వేతనాలు ఆలస్యం లేదా పని చేసిన రోజుల కంటే తక్కువ.'], ['Complain to the MPDO / APO with your job card, or on PGRS; social audit meetings in the village are also a place to raise it.', 'జాబ్ కార్డుతో MPDO / APOకి లేదా PGRSలో ఫిర్యాదు చేయండి; గ్రామ సోషల్ ఆడిట్ సమావేశాల్లో కూడా లేవనెత్తవచ్చు.'])],
    lastChecked: CHECKED,
  },

  'disability-benefits': {
    stages: [
      {
        title: s('Certificate first', 'ముందుగా సర్టిఫికెట్'),
        steps: [
          s('Get the SADAREM assessment at the government hospital camp (book slot at the Secretariat) — see the SADAREM guide.', 'ప్రభుత్వ ఆసుపత్రి క్యాంప్‌లో SADAREM అంచనా చేయించండి (సచివాలయంలో స్లాట్ బుక్) — SADAREM గైడ్ చూడండి.'),
          s('Apply for the UDID card on swavlambancard.gov.in with Aadhaar, photo and the certificate — the card is accepted all over India.', 'ఆధార్, ఫోటో, సర్టిఫికెట్‌తో swavlambancard.gov.inలో UDID కార్డుకు దరఖాస్తు చేయండి — దేశమంతా చెల్లుతుంది.'),
        ],
      },
      {
        title: s('Pension', 'పెన్షన్'),
        steps: [
          s('At the Village / Ward Secretariat, apply for the disability pension with SADAREM, Aadhaar, rice card, bank details.', 'గ్రామ / వార్డు సచివాలయంలో SADAREM, ఆధార్, రైస్ కార్డు, బ్యాంక్ వివరాలతో వికలాంగ పెన్షన్‌కు దరఖాస్తు చేయండి.'),
          s('Fully bedridden? Mention it so the higher ₹15,000 category is assessed.', 'పూర్తిగా మంచాన పడ్డారా? ఎక్కువ ₹15,000 వర్గం అంచనా వేయడానికి చెప్పండి.'),
        ],
      },
      {
        title: s('Aids and concessions', 'సహాయ పరికరాలు, రాయితీలు'),
        steps: [
          s('Aids: apply at the district Welfare of Differently Abled office or at assessment / ALIMCO camps (watch for camp announcements at the Secretariat).', 'పరికరాలు: జిల్లా వికలాంగుల సంక్షేమ కార్యాలయంలో లేదా అంచనా / ALIMCO క్యాంపుల్లో దరఖాస్తు చేయండి (సచివాలయంలో క్యాంప్ ప్రకటనలు గమనించండి).'),
          s('Bus pass: apply at the APSRTC depot with the certificate and photo.', 'బస్ పాస్: సర్టిఫికెట్, ఫోటోతో APSRTC డిపోలో దరఖాస్తు చేయండి.'),
          s('Railway concession: get the concession certificate signed by a government doctor, then register for the photo ID card on the railway divyangjan portal.', 'రైల్వే రాయితీ: ప్రభుత్వ డాక్టర్ సంతకంతో రాయితీ సర్టిఫికెట్ తీసుకుని, రైల్వే దివ్యాంగజన్ పోర్టల్‌లో ఫోటో ఐడీ కార్డుకు నమోదు చేయండి.'),
        ],
      },
    ],
    costExample: s('Pension ₹6,000 a month (₹15,000 fully disabled). Certificate, UDID and aids free.', 'పెన్షన్ నెలకు ₹6,000 (పూర్తి వైకల్యం ₹15,000). సర్టిఫికెట్, UDID, పరికరాలు ఉచితం.'),
    lastChecked: CHECKED,
  },

  'senior-citizens': {
    stages: [
      {
        title: s('Claim maintenance from children', 'పిల్లల నుండి భరణం కోరడం'),
        steps: [
          s('Write a simple application to the Maintenance Tribunal (RDO): your name, age, children\'s names and addresses, your monthly needs, their income if known.', 'మెయింటెనెన్స్ ట్రిబ్యునల్ (RDO)కి సాధారణ దరఖాస్తు రాయండి: మీ పేరు, వయస్సు, పిల్లల పేర్లు, చిరునామాలు, మీ నెలవారీ అవసరాలు, తెలిస్తే వారి ఆదాయం.'),
          s('Submit at the RDO office (someone or an NGO can file it for you). No lawyer needed.', 'RDO కార్యాలయంలో సమర్పించండి (ఎవరైనా లేదా NGO మీ తరఫున వేయవచ్చు). న్యాయవాది అక్కర్లేదు.'),
          s('Tribunal sends notice to the children, hears both sides, may first try conciliation, then orders a monthly amount (up to ₹10,000).', 'ట్రిబ్యునల్ పిల్లలకు నోటీసు పంపి ఇరువైపులా విని, ముందు రాజీ ప్రయత్నించి, తర్వాత నెలవారీ మొత్తం (₹10,000 వరకు) ఆదేశిస్తుంది.'),
          s('If not paid, the tribunal can issue a warrant / recover it.', 'చెల్లించకపోతే ట్రిబ్యునల్ వారెంట్ ఇవ్వవచ్చు / వసూలు చేయవచ్చు.'),
        ],
      },
      {
        title: s('Get back a gifted property', 'బహుమతిగా ఇచ్చిన ఆస్తి తిరిగి పొందడం'),
        steps: [
          s('If you gifted / transferred property on the condition of being cared for and the child neglects you, ask the tribunal to declare the transfer void (Section 23). Attach the gift deed copy.', 'సంరక్షణ షరతుతో ఆస్తి బహుమతి / బదిలీ చేసి పిల్లలు నిర్లక్ష్యం చేస్తే, ఆ బదిలీ రద్దు (సెక్షన్ 23) చేయమని ట్రిబ్యునల్‌ను కోరండి. గిఫ్ట్ డీడ్ కాపీ జతచేయండి.'),
        ],
      },
      {
        title: s('Money and health', 'డబ్బు, ఆరోగ్యం'),
        steps: [
          s('Pension 60+: apply at the Secretariat (NTR Bharosa).', '60+ పెన్షన్: సచివాలయంలో దరఖాస్తు (NTR భరోసా).'),
          s('Health 70+: Ayushman Vay Vandana card (free, ₹5 lakh).', '70+ ఆరోగ్యం: ఆయుష్మాన్ వయ వందన కార్డు (ఉచితం, ₹5 లక్షలు).'),
          s('Savings: Senior Citizens Savings Scheme at post office / bank — up to ₹30 lakh, interest every quarter.', 'పొదుపు: పోస్టాఫీసు / బ్యాంకులో సీనియర్ సిటిజన్స్ సేవింగ్స్ స్కీమ్ — ₹30 లక్షల వరకు, ప్రతి త్రైమాసికం వడ్డీ.'),
        ],
      },
    ],
    costExample: s('SCSS: ₹5 lakh at 8.2% gives ₹10,250 every quarter. Tribunal case: free.', 'SCSS: ₹5 లక్షలు 8.2% వద్ద ప్రతి త్రైమాసికం ₹10,250. ట్రిబ్యునల్ కేసు: ఉచితం.'),
    problems: [P(['Being abused or thrown out.', 'వేధింపులు లేదా ఇంటి నుండి బయటకు గెంటారు.'], ['Call 14567 (Elder Line) or 112 for immediate help.', 'వెంటనే సహాయం కోసం 14567 (ఎల్డర్ లైన్) లేదా 112కి కాల్ చేయండి.'])],
    lastChecked: CHECKED,
  },

  'paddy-procurement': {
    stages: [
      {
        title: s('During the season', 'సీజన్‌లో'),
        steps: [
          s('Book your paddy in e-Crop at the RSK and complete e-KYC (fingerprint). Without this you can\'t sell at MSP.', 'RSKలో e-Cropలో మీ వరి నమోదు చేసి e-KYC (వేలిముద్ర) పూర్తి చేయండి. ఇది లేకపోతే MSPకి అమ్మలేరు.'),
          s('Check your Aadhaar-linked bank account is active.', 'మీ ఆధార్ లింక్ బ్యాంక్ ఖాతా యాక్టివ్‌గా ఉందో చూడండి.'),
        ],
      },
      {
        title: s('After harvest', 'కోత తర్వాత'),
        steps: [
          s('Dry the paddy to about 17% moisture and clean out chaff / stones.', 'వరిని సుమారు 17% తేమకు ఆరబెట్టి, పొట్టు / రాళ్లు శుభ్రం చేయండి.'),
          s('Contact the RSK / procurement centre (or the WhatsApp / app booking if announced) for a date and gunny bags.', 'తేదీ, గోనె సంచుల కోసం RSK / కొనుగోలు కేంద్రాన్ని (లేదా ప్రకటిస్తే వాట్సాప్ / యాప్ బుకింగ్) సంప్రదించండి.'),
          s('Staff test moisture and quality and enter the quantity; a truck sheet is generated to the allotted mill.', 'సిబ్బంది తేమ, నాణ్యత పరీక్షించి పరిమాణం నమోదు చేస్తారు; కేటాయించిన మిల్లుకు ట్రక్ షీట్ తయారవుతుంది.'),
          s('Paddy is weighed at the mill; keep the acknowledgement. Payment comes to your bank, usually within 24–48 hours.', 'మిల్లులో వరి తూకం; అక్నాలెడ్జ్‌మెంట్ దాచుకోండి. చెల్లింపు సాధారణంగా 24–48 గంటల్లో బ్యాంకుకు.'),
        ],
      },
    ],
    costExample: s('40 quintals (about 1 acre\'s good yield) × ₹2,441 = ₹97,640 for common paddy.', '40 క్వింటాళ్లు (సుమారు ఒక ఎకరం మంచి దిగుబడి) × ₹2,441 = సాధారణ వరికి ₹97,640.'),
    problems: [P(['Mill deducts extra weight / "tharugu".', 'మిల్లు అదనపు తూకం / "తరుగు" కోస్తోంది.'], ['Don\'t accept. Call the district procurement control room or complain on PGRS with the truck sheet.', 'ఒప్పుకోకండి. ట్రక్ షీట్‌తో జిల్లా కొనుగోలు కంట్రోల్ రూమ్‌కు కాల్ చేయండి లేదా PGRSలో ఫిర్యాదు చేయండి.'])],
    lastChecked: CHECKED,
  },
};
