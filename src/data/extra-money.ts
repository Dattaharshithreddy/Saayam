import { Guide } from '../types';
import { fee, CHECKED } from './bi';
import { s, P, D, XDir } from './extra-helpers';

/** Banking, savings, work and housing — full walkthroughs (checked 20 Oct 2026). */
export const moneyGuides: Guide[] = [
  // ─────────────────────────────────────────── BANK COMPLAINTS
  {
    id: 'bank-complaints',
    category: 'money',
    level: 'central',
    title: s('Bank problems — complaints, RBI Ombudsman, recovery agents, CIBIL errors', 'బ్యాంక్ సమస్యలు — ఫిర్యాదులు, RBI అంబుడ్స్‌మన్, రికవరీ ఏజెంట్లు, CIBIL తప్పులు'),
    summary: s(
      'Wrong charges, failed transfers not reversed, account frozen, loan not closed, harassing recovery agents, a wrong entry in your credit (CIBIL) report — first complain to the bank in writing. If the bank doesn\'t solve it in 30 days, complain free to the RBI Ombudsman online; it can order the bank to fix it and pay compensation. Credit bureaus must correct errors within 30 days or pay you ₹100 a day.',
      'తప్పు ఛార్జీలు, విఫలమైన బదిలీలు తిరిగి రాకపోవడం, ఖాతా ఫ్రీజ్, రుణం మూసివేయకపోవడం, వేధించే రికవరీ ఏజెంట్లు, మీ క్రెడిట్ (CIBIL) నివేదికలో తప్పు ఎంట్రీ — ముందు బ్యాంకుకు రాతపూర్వకంగా ఫిర్యాదు చేయండి. 30 రోజుల్లో బ్యాంక్ పరిష్కరించకపోతే RBI అంబుడ్స్‌మన్‌కు ఆన్‌లైన్‌లో ఉచితంగా ఫిర్యాదు చేయండి; బ్యాంకుతో సరిచేయించి పరిహారం ఇప్పించగలదు. క్రెడిట్ బ్యూరోలు 30 రోజుల్లో తప్పులు సరిచేయాలి లేదా రోజుకు ₹100 చెల్లించాలి.',
    ),
    keywords: ['bank complaint', 'rbi ombudsman', 'banking ombudsman', 'cms rbi', 'bank charges', 'failed transaction', 'atm money not received', 'account frozen', 'account freeze', 'kyc update', 're-kyc', 'recovery agent', 'loan harassment', 'cibil', 'credit score', 'credit report', 'loan closure', 'బ్యాంక్ ఫిర్యాదు', 'రికవరీ ఏజెంట్', 'సిబిల్', 'ఖాతా ఫ్రీజ్', 'ATM డబ్బు రాలేదు'],
    whoCanApply: [s('Any bank / NBFC / payment app customer', 'ఏ బ్యాంక్ / NBFC / చెల్లింపు యాప్ కస్టమర్ అయినా')],
    documents: [s('Account / loan number, transaction details, statements, screenshots, your complaint and the bank\'s reply', 'ఖాతా / రుణ నంబర్, లావాదేవీ వివరాలు, స్టేట్‌మెంట్లు, స్క్రీన్‌షాట్లు, మీ ఫిర్యాదు, బ్యాంక్ సమాధానం')],
    fees: [fee(s('Bank / RBI / credit bureau complaints', 'బ్యాంక్ / RBI / క్రెడిట్ బ్యూరో ఫిర్యాదులు'), s('Free', 'ఉచితం'))],
    steps: [
      s('Complain to the bank in writing; keep the complaint number.', 'బ్యాంకుకు రాతపూర్వకంగా ఫిర్యాదు చేసి ఫిర్యాదు నంబర్ దాచుకోండి.'),
      s('No solution in 30 days → cms.rbi.org.in.', '30 రోజుల్లో పరిష్కారం లేకపోతే → cms.rbi.org.in.'),
    ],
    stages: [
      {
        title: s('Step 1 — complain to the bank', '1వ దశ — బ్యాంకుకు ఫిర్యాదు'),
        steps: [
          s('Use the bank\'s complaint form online, email, or a written letter at the branch (take an acknowledged copy). State facts, dates, amounts and what you want.', 'బ్యాంక్ ఆన్‌లైన్ ఫిర్యాదు ఫారం, ఇమెయిల్ లేదా బ్రాంచ్‌లో రాతపూర్వక లేఖ వాడండి (అక్నాలెడ్జ్ చేసిన కాపీ తీసుకోండి). వాస్తవాలు, తేదీలు, మొత్తాలు, మీకు ఏం కావాలో చెప్పండి.'),
          s('Failed ATM / UPI / IMPS debit not reversed: banks must reverse within fixed days (ATM: 5 days) or pay ₹100 per day of delay automatically.', 'విఫలమైన ATM / UPI / IMPS డెబిట్ తిరిగి రాకపోతే: బ్యాంకులు నిర్ణీత రోజుల్లో (ATM: 5 రోజులు) తిరిగి వేయాలి లేదా ఆలస్యానికి రోజుకు ₹100 ఆటోమేటిక్‌గా చెల్లించాలి.'),
          s('Escalate to the bank\'s Principal Nodal Officer (details on the bank website) if the branch doesn\'t respond.', 'బ్రాంచ్ స్పందించకపోతే బ్యాంక్ ప్రిన్సిపల్ నోడల్ ఆఫీసర్‌కు (వివరాలు బ్యాంక్ వెబ్‌సైట్‌లో) పంపండి.'),
        ],
      },
      {
        title: s('Step 2 — RBI Ombudsman (free)', '2వ దశ — RBI అంబుడ్స్‌మన్ (ఉచితం)'),
        steps: [
          s('If the bank rejects, gives no reply in 30 days, or you\'re unhappy with the reply: cms.rbi.org.in → "File a complaint" → choose the bank / NBFC → describe → upload documents → submit. Or call 14448.', 'బ్యాంక్ తిరస్కరిస్తే, 30 రోజుల్లో సమాధానం ఇవ్వకపోతే, లేదా సమాధానంతో సంతృప్తి లేకపోతే: cms.rbi.org.in → "File a complaint" → బ్యాంక్ / NBFC ఎంచుకుని → వివరించి → పత్రాలు అప్‌లోడ్ → సబ్మిట్. లేదా 14448కి కాల్.'),
          s('File within 1 year of the bank\'s reply (or of the 30 days ending without reply). Not allowed if the same matter is already in a court / consumer forum.', 'బ్యాంక్ సమాధానం (లేదా సమాధానం లేకుండా 30 రోజులు ముగిసిన) నుండి 1 సంవత్సరంలో దాఖలు చేయండి. అదే విషయం కోర్టు / వినియోగదారుల వేదికలో ఉంటే అనుమతించరు.'),
          s('The Ombudsman can order refund and compensation (up to ₹20 lakh for loss and up to ₹1 lakh for harassment / time).', 'అంబుడ్స్‌మన్ రీఫండ్, పరిహారం ఆదేశించగలదు (నష్టానికి ₹20 లక్షల వరకు, వేధింపు / సమయానికి ₹1 లక్ష వరకు).'),
        ],
      },
      {
        title: s('Recovery agents and loan apps', 'రికవరీ ఏజెంట్లు, లోన్ యాప్‌లు'),
        steps: [
          s('Agents may call only between 8 am and 7 pm, must show ID and the bank\'s authorisation, and can\'t threaten, abuse, contact your friends / relatives to shame you, or visit at odd hours.', 'ఏజెంట్లు ఉదయం 8 నుండి రాత్రి 7 మధ్య మాత్రమే కాల్ చేయాలి, ఐడీ, బ్యాంక్ అధికార పత్రం చూపాలి, బెదిరించకూడదు, తిట్టకూడదు, అవమానించడానికి మీ స్నేహితులు / బంధువులను సంప్రదించకూడదు, అసమయంలో రాకూడదు.'),
          s('Record calls, note names; complain to the lender and the RBI (cms.rbi.org.in). Threats or abuse are crimes — police complaint (BNS 351 intimidation).', 'కాల్స్ రికార్డ్ చేసి పేర్లు నోట్ చేయండి; రుణదాతకు, RBI (cms.rbi.org.in)కు ఫిర్యాదు. బెదిరింపులు, దుర్భాషలు నేరాలు — పోలీసు ఫిర్యాదు (BNS 351 బెదిరింపు).'),
          s('Loan app harassment with morphed photos: report on cybercrime.gov.in / 1930. Check if the app\'s lender is RBI-registered before borrowing.', 'మార్ఫ్ ఫోటోలతో లోన్ యాప్ వేధింపులు: cybercrime.gov.in / 1930లో రిపోర్ట్. రుణం తీసుకునే ముందు యాప్ రుణదాత RBI నమోదైనదా చూడండి.'),
        ],
      },
      {
        title: s('Fix your CIBIL / credit report', 'మీ CIBIL / క్రెడిట్ నివేదిక సరిచేయడం'),
        steps: [
          s('Get your free report once a year from each bureau: CIBIL, Experian, Equifax, CRIF High Mark (their own websites).', 'ప్రతి బ్యూరో నుండి ఏడాదికి ఒకసారి ఉచిత నివేదిక: CIBIL, Experian, Equifax, CRIF High Mark (వాటి వెబ్‌సైట్లలో).'),
          s('Wrong loan, closed loan shown open, wrong overdue? Raise a dispute on the bureau\'s site with proof (closure letter / NOC).', 'తప్పు రుణం, మూసిన రుణం తెరిచినట్లు, తప్పు బకాయి? రుజువుతో (ముగింపు లేఖ / NOC) బ్యూరో సైట్‌లో వివాదం లేవనెత్తండి.'),
          s('The bank and bureau must fix it within 30 days; after that you get ₹100 for each day of delay.', 'బ్యాంక్, బ్యూరో 30 రోజుల్లో సరిచేయాలి; తర్వాత ఆలస్యం ప్రతి రోజుకు ₹100 మీకు.'),
          s('Loan fully paid: ask for the NOC and the return of original documents — banks must return property documents within 30 days of closure or pay ₹5,000 per day.', 'రుణం పూర్తిగా చెల్లిస్తే: NOC, అసలు పత్రాలు తిరిగి అడగండి — ముగింపు నుండి 30 రోజుల్లో ఆస్తి పత్రాలు తిరిగి ఇవ్వాలి లేదా రోజుకు ₹5,000 చెల్లించాలి.'),
        ],
      },
      {
        title: s('Account frozen / KYC', 'ఖాతా ఫ్రీజ్ / KYC'),
        steps: [
          s('Inoperative (no transactions for 2 years): re-KYC at any branch, video KYC or through the bank app, then do one transaction. No charge for reactivation.', 'ఇన్‌ఆపరేటివ్ (2 సంవత్సరాలు లావాదేవీలు లేవు): ఏ బ్రాంచ్‌లోనైనా రీ-KYC, వీడియో KYC లేదా బ్యాంక్ యాప్ ద్వారా, తర్వాత ఒక లావాదేవీ. పునరుద్ధరణకు ఛార్జీ లేదు.'),
          s('Frozen by police (cyber complaint): ask the bank for the freezing authority\'s details and write to that police station with proof the money is legitimate.', 'పోలీసులు ఫ్రీజ్ చేస్తే (సైబర్ ఫిర్యాదు): ఫ్రీజ్ చేసిన అధికారి వివరాలు బ్యాంకును అడిగి, డబ్బు చట్టబద్ధమని రుజువుతో ఆ పోలీస్ స్టేషన్‌కు రాయండి.'),
        ],
      },
    ],
    costExample: s('ATM didn\'t give ₹5,000 but debited it: if not reversed in 5 working days, the bank owes ₹100 per day extra. RBI complaint: free.', 'ATM ₹5,000 ఇవ్వకుండా డెబిట్ చేసింది: 5 పని రోజుల్లో తిరిగి వేయకపోతే బ్యాంక్ రోజుకు ₹100 అదనంగా చెల్లించాలి. RBI ఫిర్యాదు: ఉచితం.'),
    problems: [P(['Bank asks me to close the complaint before solving.', 'పరిష్కరించకముందే ఫిర్యాదు మూసేయమని బ్యాంక్ అడుగుతోంది.'], ['Don\'t. Reply in writing that the issue is unresolved and go to cms.rbi.org.in.', 'ఒప్పుకోకండి. సమస్య పరిష్కారం కాలేదని రాతపూర్వకంగా సమాధానం ఇచ్చి cms.rbi.org.inకి వెళ్లండి.'])],
    whereToApply: [s('Your bank; cms.rbi.org.in / 14448; credit bureau websites', 'మీ బ్యాంక్; cms.rbi.org.in / 14448; క్రెడిట్ బ్యూరో వెబ్‌సైట్లు')],
    timeline: s('Bank: 30 days. Ombudsman: usually 1–3 months. Credit report correction: 30 days.', 'బ్యాంక్: 30 రోజులు. అంబుడ్స్‌మన్: సాధారణంగా 1–3 నెలలు. క్రెడిట్ నివేదిక సవరణ: 30 రోజులు.'),
    tips: [s('Money lost to fraud? See the "Money lost online" guide and call 1930 first.', 'మోసంలో డబ్బు పోయిందా? "ఆన్‌లైన్‌లో డబ్బు పోయింది" గైడ్ చూసి ముందు 1930కి కాల్ చేయండి.')],
    links: [{ label: 'RBI Complaint Management System', url: 'https://cms.rbi.org.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── UNCLAIMED MONEY
  {
    id: 'unclaimed-money',
    category: 'money',
    level: 'central',
    title: s('Find forgotten money — old bank deposits, insurance, PF, shares, mutual funds', 'మర్చిపోయిన డబ్బు కనుగొనండి — పాత బ్యాంక్ డిపాజిట్లు, బీమా, PF, షేర్లు, మ్యూచువల్ ఫండ్లు'),
    summary: s(
      'Lakhs of families have money lying unclaimed — old savings accounts, FDs, insurance maturity, PF from an old job, dividends and shares. Bank deposits untouched for 10 years go to an RBI fund but can always be claimed back with interest. Each type has an official search tool: RBI UDGAM for bank deposits, insurers\' sites for policies, EPFO for PF, IEPF for shares, and SEBI\'s MITRA for mutual funds.',
      'లక్షలాది కుటుంబాల డబ్బు క్లెయిమ్ చేయకుండా ఉంది — పాత పొదుపు ఖాతాలు, FDలు, బీమా మెచ్యూరిటీ, పాత ఉద్యోగ PF, డివిడెండ్లు, షేర్లు. 10 సంవత్సరాలు ముట్టని బ్యాంక్ డిపాజిట్లు RBI నిధికి వెళ్తాయి కానీ వడ్డీతో ఎప్పుడైనా తిరిగి క్లెయిమ్ చేయవచ్చు. ప్రతి రకానికి అధికారిక శోధన సాధనం: బ్యాంక్ డిపాజిట్లకు RBI UDGAM, పాలసీలకు బీమా సంస్థల సైట్లు, PFకు EPFO, షేర్లకు IEPF, మ్యూచువల్ ఫండ్లకు SEBI MITRA.',
    ),
    keywords: ['unclaimed', 'unclaimed deposit', 'udgam', 'dormant account', 'old account', 'old fd', 'unclaimed insurance', 'lic unclaimed', 'old pf', 'inoperative pf', 'iepf', 'unclaimed shares', 'unclaimed dividend', 'mitra mutual fund', 'forgotten money', 'పాత ఖాతా', 'క్లెయిమ్ చేయని', 'పాత PF', 'మర్చిపోయిన డబ్బు'],
    whoCanApply: [s('Account / policy holders, or their nominees / legal heirs', 'ఖాతా / పాలసీదారులు, లేదా వారి నామినీలు / వారసులు')],
    documents: [s('Aadhaar, PAN, old passbook / policy / folio if available; death certificate and heirship documents if claiming for a deceased person', 'ఆధార్, PAN, ఉంటే పాత పాస్‌బుక్ / పాలసీ / ఫోలియో; మరణించినవారి కోసం అయితే మరణ ధృవీకరణ, వారసత్వ పత్రాలు')],
    fees: [fee(s('Searching and claiming', 'వెతకడం, క్లెయిమ్ చేయడం'), s('Free — never pay "recovery agents"', 'ఉచితం — "రికవరీ ఏజెంట్లకు" ఎప్పుడూ చెల్లించకండి'))],
    steps: [
      s('Search each official portal with your name and details.', 'మీ పేరు, వివరాలతో ప్రతి అధికారిక పోర్టల్‌లో వెతకండి.'),
      s('Claim at the bank / insurer / EPFO / company with KYC.', 'KYCతో బ్యాంక్ / బీమా సంస్థ / EPFO / కంపెనీలో క్లెయిమ్ చేయండి.'),
    ],
    stages: [
      {
        title: s('Bank deposits — RBI UDGAM', 'బ్యాంక్ డిపాజిట్లు — RBI UDGAM'),
        steps: [
          s('Open udgam.rbi.org.in → register with mobile → search by name plus PAN / date of birth / other details, across all participating banks.', 'udgam.rbi.org.in → మొబైల్‌తో నమోదు → పేరుతో పాటు PAN / పుట్టిన తేదీ / ఇతర వివరాలతో అన్ని పాల్గొనే బ్యాంకుల్లో వెతకండి.'),
          s('Found one? Note the bank and the unclaimed reference, go to any branch of that bank with KYC (and heirship documents if the holder died) and fill the claim form.', 'దొరికిందా? బ్యాంక్, అన్‌క్లెయిమ్డ్ రిఫరెన్స్ నోట్ చేసి, KYCతో (హోల్డర్ మరణిస్తే వారసత్వ పత్రాలతో) ఆ బ్యాంక్ ఏ బ్రాంచ్‌కైనా వెళ్లి క్లెయిమ్ ఫారం నింపండి.'),
          s('The bank pays you (with interest where applicable) and claims it back from the RBI fund.', 'బ్యాంక్ మీకు చెల్లిస్తుంది (వర్తిస్తే వడ్డీతో), RBI నిధి నుండి తిరిగి క్లెయిమ్ చేసుకుంటుంది.'),
        ],
      },
      {
        title: s('Insurance policies', 'బీమా పాలసీలు'),
        steps: [
          s('Every life insurer has an "Unclaimed amounts" search on its website (e.g. LIC: licindia.in → Customer services → unclaimed amounts) — enter policy number or name, DOB and PAN.', 'ప్రతి జీవిత బీమా సంస్థ వెబ్‌సైట్‌లో "Unclaimed amounts" శోధన ఉంటుంది (ఉదా: LIC: licindia.in → Customer services → unclaimed amounts) — పాలసీ నంబర్ లేదా పేరు, పుట్టిన తేదీ, PAN నమోదు చేయండి.'),
          s('Claim at the servicing branch with the policy bond (or indemnity if lost) and KYC.', 'పాలసీ బాండ్ (పోతే ఇండెమ్నిటీ), KYCతో సర్వీసింగ్ బ్రాంచ్‌లో క్లెయిమ్ చేయండి.'),
        ],
      },
      {
        title: s('PF from old jobs', 'పాత ఉద్యోగాల PF'),
        steps: [
          s('Activate your UAN and check the passbook for all past employers (see PF guide). Old member IDs not linked? Use "One Member – One EPF Account" transfer.', 'మీ UAN యాక్టివేట్ చేసి అన్ని గత యజమానుల పాస్‌బుక్ చూడండి (PF గైడ్). పాత మెంబర్ IDలు లింక్ కాలేదా? "One Member – One EPF Account" బదిలీ వాడండి.'),
          s('Accounts with no contributions for 3+ years become "inoperative" but still belong to you — claim online after KYC or at the regional EPFO office.', '3+ సంవత్సరాలు చందా లేని ఖాతాలు "ఇన్‌ఆపరేటివ్" అవుతాయి కానీ మీవే — KYC తర్వాత ఆన్‌లైన్‌లో లేదా ప్రాంతీయ EPFO కార్యాలయంలో క్లెయిమ్ చేయండి.'),
        ],
      },
      {
        title: s('Shares, dividends and mutual funds', 'షేర్లు, డివిడెండ్లు, మ్యూచువల్ ఫండ్లు'),
        steps: [
          s('Dividends / shares unclaimed for 7 years go to the IEPF. Search on iepf.gov.in, then file Form IEPF-5 online and send the documents to the company; the IEPF Authority refunds.', '7 సంవత్సరాలు క్లెయిమ్ చేయని డివిడెండ్లు / షేర్లు IEPFకి వెళ్తాయి. iepf.gov.inలో వెతికి, ఆన్‌లైన్‌లో ఫారం IEPF-5 వేసి కంపెనీకి పత్రాలు పంపండి; IEPF అథారిటీ రీఫండ్ చేస్తుంది.'),
          s('Old physical share certificates: convert to demat through a broker (DP) first.', 'పాత భౌతిక షేర్ సర్టిఫికెట్లు: ముందు బ్రోకర్ (DP) ద్వారా డీమ్యాట్‌గా మార్చండి.'),
          s('Mutual funds: search forgotten folios on SEBI\'s MITRA platform (via CAMS / KFintech) or MF Central with PAN.', 'మ్యూచువల్ ఫండ్లు: PANతో SEBI MITRA ప్లాట్‌ఫారం (CAMS / KFintech ద్వారా) లేదా MF Centralలో మర్చిపోయిన ఫోలియోలు వెతకండి.'),
        ],
      },
    ],
    costExample: s('Grandfather\'s savings account found on UDGAM with ₹38,000: claimed at the branch with death certificate and heirs\' documents — no fee.', 'తాతగారి పొదుపు ఖాతా UDGAMలో ₹38,000తో దొరికింది: మరణ ధృవీకరణ, వారసుల పత్రాలతో బ్రాంచ్‌లో క్లెయిమ్ — ఫీజు లేదు.'),
    whereToApply: [s('udgam.rbi.org.in; insurer websites; EPFO portal; iepf.gov.in; MF Central / MITRA', 'udgam.rbi.org.in; బీమా సంస్థల వెబ్‌సైట్లు; EPFO పోర్టల్; iepf.gov.in; MF Central / MITRA')],
    timeline: s('Bank deposits: usually within a few weeks. IEPF refunds: a few months.', 'బ్యాంక్ డిపాజిట్లు: సాధారణంగా కొన్ని వారాల్లో. IEPF రీఫండ్‌లు: కొన్ని నెలలు.'),
    tips: [s('Keep a family list of all accounts, policies and investments with nominee names — and tell someone you trust where it is.', 'అన్ని ఖాతాలు, పాలసీలు, పెట్టుబడులు, నామినీ పేర్లతో కుటుంబ జాబితా ఉంచండి — ఎక్కడ ఉందో నమ్మకస్తులకు చెప్పండి.')],
    links: [{ label: 'RBI UDGAM', url: 'https://udgam.rbi.org.in' }, { label: 'IEPF', url: 'https://www.iepf.gov.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── POST OFFICE SAVINGS
  {
    id: 'post-office-savings',
    category: 'money',
    level: 'central',
    title: s('Post office savings — PPF, NSC, KVP, monthly income, RD (rates Oct–Dec 2026)', 'పోస్టాఫీసు పొదుపు — PPF, NSC, KVP, నెలవారీ ఆదాయం, RD (అక్టోబర్–డిసెంబర్ 2026 రేట్లు)'),
    summary: s(
      'Government small savings schemes are 100% safe and available at every post office (and many banks). Rates are fixed each quarter by the government. Pick by your goal: monthly income (MIS, SCSS for 60+), long-term tax-free saving (PPF), doubling money (KVP), daughter\'s future (Sukanya), or small monthly saving (RD).',
      'ప్రభుత్వ చిన్న పొదుపు పథకాలు 100% సురక్షితం, ప్రతి పోస్టాఫీసులో (చాలా బ్యాంకుల్లో కూడా) అందుబాటులో. రేట్లు ప్రతి త్రైమాసికం ప్రభుత్వం నిర్ణయిస్తుంది. లక్ష్యం బట్టి ఎంచుకోండి: నెలవారీ ఆదాయం (MIS, 60+కి SCSS), దీర్ఘకాల పన్ను రహిత పొదుపు (PPF), డబ్బు రెట్టింపు (KVP), కూతురి భవిష్యత్తు (సుకన్య), చిన్న నెలవారీ పొదుపు (RD).',
    ),
    keywords: ['post office', 'ppf', 'nsc', 'kvp', 'kisan vikas patra', 'mis', 'monthly income scheme', 'rd', 'recurring deposit', 'time deposit', 'post office fd', 'small savings', 'ippb', 'పోస్టాఫీసు', 'పొదుపు', 'PPF', 'కిసాన్ వికాస్ పత్ర', 'నెలవారీ ఆదాయం'],
    whoCanApply: [s('Any resident Indian (NRIs can\'t open new accounts in most schemes)', 'ఏ భారత నివాసి అయినా (చాలా పథకాల్లో NRIలు కొత్త ఖాతాలు తెరవలేరు)')],
    documents: [s('Aadhaar, PAN, 2 photos, nominee details, account opening form of the scheme', 'ఆధార్, PAN, 2 ఫోటోలు, నామినీ వివరాలు, పథక ఖాతా తెరిచే ఫారం')],
    fees: [
      fee(s('PPF', 'PPF'), s('7.1% · ₹500–₹1.5 lakh a year · 15 years · tax-free', '7.1% · ఏడాదికి ₹500–₹1.5 లక్షలు · 15 సంవత్సరాలు · పన్ను రహితం')),
      fee(s('NSC (5 years)', 'NSC (5 సంవత్సరాలు)'), s('7.7% · from ₹1,000', '7.7% · ₹1,000 నుండి')),
      fee(s('Kisan Vikas Patra', 'కిసాన్ వికాస్ పత్ర'), s('7.5% · money doubles in 115 months', '7.5% · 115 నెలల్లో డబ్బు రెట్టింపు')),
      fee(s('Monthly Income Scheme (5 years)', 'నెలవారీ ఆదాయ పథకం (5 సంవత్సరాలు)'), s('7.4% paid monthly · max ₹9 lakh single / ₹15 lakh joint', '7.4% నెలవారీ · గరిష్టం ₹9 లక్షలు ఒక్కరు / ₹15 లక్షలు ఉమ్మడి')),
      fee(s('Time deposit 1 / 2 / 3 / 5 years', 'టైమ్ డిపాజిట్ 1 / 2 / 3 / 5 సంవత్సరాలు'), s('6.9% / 7.0% / 7.1% / 7.5%', '6.9% / 7.0% / 7.1% / 7.5%')),
      fee(s('Recurring deposit (5 years)', 'రికరింగ్ డిపాజిట్ (5 సంవత్సరాలు)'), s('6.7% · from ₹100 a month', '6.7% · నెలకు ₹100 నుండి')),
      fee(s('SCSS (60+) / Sukanya Samriddhi', 'SCSS (60+) / సుకన్య సమృద్ధి'), s('8.2% / 8.2%', '8.2% / 8.2%')),
    ],
    steps: [
      s('Choose the scheme for your goal.', 'మీ లక్ష్యానికి పథకం ఎంచుకోండి.'),
      s('Open at the post office with KYC and the first deposit.', 'KYC, మొదటి డిపాజిట్‌తో పోస్టాఫీసులో తెరవండి.'),
    ],
    stages: [
      {
        title: s('Choose the scheme', 'పథకం ఎంచుకోవడం'),
        steps: [
          s('Need money every month (retired, homemaker)? MIS (7.4%), or SCSS if 60+ (8.2%, paid quarterly).', 'ప్రతి నెల డబ్బు కావాలా (విరమణ, గృహిణి)? MIS (7.4%), లేదా 60+ అయితే SCSS (8.2%, త్రైమాసికంగా).'),
          s('Long-term, tax-free, for retirement / children: PPF — deposit yearly, partial withdrawal from the 7th year, loan from the 3rd year.', 'దీర్ఘకాల, పన్ను రహిత, విరమణ / పిల్లలకు: PPF — ఏటా డిపాజిట్, 7వ సంవత్సరం నుండి పాక్షిక ఉపసంహరణ, 3వ సంవత్సరం నుండి రుణం.'),
          s('Lump sum to grow safely: NSC (5 years) or KVP (doubles in 115 months).', 'ఏకమొత్తం సురక్షితంగా పెరగడానికి: NSC (5 సంవత్సరాలు) లేదా KVP (115 నెలల్లో రెట్టింపు).'),
          s('Small monthly saving: RD from ₹100 a month for 5 years.', 'చిన్న నెలవారీ పొదుపు: 5 సంవత్సరాలు నెలకు ₹100 నుండి RD.'),
          s('Daughter below 10: Sukanya Samriddhi (see that guide).', '10 లోపు కూతురు: సుకన్య సమృద్ధి (ఆ గైడ్ చూడండి).'),
        ],
      },
      {
        title: s('Open the account', 'ఖాతా తెరవడం'),
        steps: [
          s('Visit any post office with Aadhaar, PAN, photos. First open a Post Office Savings Account (₹500 minimum) — it makes deposits and interest credit easy.', 'ఆధార్, PAN, ఫోటోలతో ఏ పోస్టాఫీసుకైనా వెళ్లండి. ముందు పోస్టాఫీసు సేవింగ్స్ ఖాతా (కనీసం ₹500) తెరవండి — డిపాజిట్లు, వడ్డీ జమ సులభం.'),
          s('Fill the scheme\'s form, add a nominee, pay by cash / cheque. Collect the passbook or certificate (e-certificate for NSC / KVP).', 'పథక ఫారం నింపి, నామినీని చేర్చి, నగదు / చెక్కుతో చెల్లించండి. పాస్‌బుక్ లేదా సర్టిఫికెట్ తీసుకోండి (NSC / KVPకి ఇ-సర్టిఫికెట్).'),
          s('Deposit later through the India Post Payments Bank (IPPB) app or post office net banking.', 'తర్వాత ఇండియా పోస్ట్ పేమెంట్స్ బ్యాంక్ (IPPB) యాప్ లేదా పోస్టాఫీసు నెట్ బ్యాంకింగ్ ద్వారా డిపాజిట్.'),
        ],
      },
      {
        title: s('At maturity', 'మెచ్యూరిటీ సమయంలో'),
        steps: [
          s('Submit the closure form with the passbook / certificate; money is credited to your savings account.', 'పాస్‌బుక్ / సర్టిఫికెట్‌తో మూసివేత ఫారం ఇవ్వండి; డబ్బు మీ సేవింగ్స్ ఖాతాకు జమ.'),
          s('PPF can be extended in 5-year blocks after 15 years.', '15 సంవత్సరాల తర్వాత PPFని 5 సంవత్సరాల బ్లాకుల్లో పొడిగించవచ్చు.'),
        ],
      },
    ],
    costExample: s('₹5 lakh in MIS at 7.4% = about ₹3,083 every month for 5 years; you get the ₹5 lakh back at the end.', 'MISలో 7.4% వద్ద ₹5 లక్షలు = 5 సంవత్సరాలు ప్రతి నెల సుమారు ₹3,083; చివరలో ₹5 లక్షలు తిరిగి.'),
    problems: [P(['Postman / agent took money but no entry in passbook.', 'పోస్ట్‌మ్యాన్ / ఏజెంట్ డబ్బు తీసుకున్నారు కానీ పాస్‌బుక్‌లో ఎంట్రీ లేదు.'], ['Always get the receipt and passbook entry; use the IPPB app to check balance. Complain to the Postmaster / Superintendent of Post Offices.', 'ఎప్పుడూ రసీదు, పాస్‌బుక్ ఎంట్రీ తీసుకోండి; బ్యాలెన్స్ చూడడానికి IPPB యాప్ వాడండి. పోస్ట్‌మాస్టర్ / సూపరింటెండెంట్ ఆఫ్ పోస్ట్ ఆఫీసెస్‌కు ఫిర్యాదు.'])],
    whereToApply: [s('Any post office; authorised banks for PPF / SCSS / SSY / NSC', 'ఏ పోస్టాఫీసైనా; PPF / SCSS / SSY / NSCకి అధీకృత బ్యాంకులు')],
    timeline: s('Account opens the same day.', 'అదే రోజు ఖాతా తెరుస్తారు.'),
    tips: [s('Interest on NSC, KVP, MIS and time deposits is taxable (5-year TD and NSC qualify for 80C under the old regime); PPF and SSY are fully tax-free.', 'NSC, KVP, MIS, టైమ్ డిపాజిట్ల వడ్డీపై పన్ను ఉంది (పాత విధానంలో 5 సంవత్సరాల TD, NSCకి 80C); PPF, SSY పూర్తిగా పన్ను రహితం.')],
    links: [{ label: 'India Post — savings schemes', url: 'https://www.indiapost.gov.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── EDUCATION LOAN
  {
    id: 'education-loan',
    category: 'education',
    level: 'central',
    title: s('Education loan — PM Vidyalaxmi, interest subsidy, no collateral up to ₹7.5 lakh', 'విద్యా రుణం — PM విద్యాలక్ష్మి, వడ్డీ సబ్సిడీ, ₹7.5 లక్షల వరకు హామీ లేకుండా'),
    summary: s(
      'Banks give education loans for college in India and abroad. Up to ₹7.5 lakh normally needs no collateral or third-party guarantee. Students admitted to top-ranked institutions can apply on the PM-Vidyalaxmi portal for collateral-free loans, with 3% interest subvention if family income is up to ₹8 lakh. Students from families earning up to ₹4.5 lakh in technical / professional courses get full interest subsidy during the study period (CSIS). You repay after the course plus one year.',
      'భారత్‌లో, విదేశాల్లో కళాశాల చదువులకు బ్యాంకులు విద్యా రుణాలు ఇస్తాయి. ₹7.5 లక్షల వరకు సాధారణంగా హామీ లేదా మూడో వ్యక్తి గ్యారంటీ అక్కర్లేదు. అగ్రశ్రేణి సంస్థల్లో ప్రవేశం పొందిన విద్యార్థులు PM-విద్యాలక్ష్మి పోర్టల్‌లో హామీ లేని రుణాలకు దరఖాస్తు చేయవచ్చు, కుటుంబ ఆదాయం ₹8 లక్షల వరకు అయితే 3% వడ్డీ రాయితీ. ₹4.5 లక్షల వరకు ఆదాయం ఉన్న కుటుంబాల విద్యార్థులకు సాంకేతిక / వృత్తి కోర్సుల్లో చదువు కాలంలో పూర్తి వడ్డీ సబ్సిడీ (CSIS). కోర్సు + ఒక సంవత్సరం తర్వాత తిరిగి చెల్లించాలి.',
    ),
    keywords: ['education loan', 'study loan', 'student loan', 'vidyalaxmi', 'vidya lakshmi', 'pm vidyalaxmi', 'csis', 'interest subsidy', 'study abroad loan', 'abroad education', 'విద్యా రుణం', 'ఎడ్యుకేషన్ లోన్', 'విద్యాలక్ష్మి', 'విదేశీ చదువు'],
    whoCanApply: [s('Indian students with admission to a recognised course (merit / entrance based), with a parent as co-borrower', 'గుర్తింపు కోర్సులో (మెరిట్ / ప్రవేశ పరీక్ష ఆధారంగా) ప్రవేశం పొందిన భారత విద్యార్థులు, తల్లి/తండ్రి సహ-రుణగ్రహీతగా')],
    documents: [
      s('Admission letter and fee structure from the college', 'కళాశాల నుండి ప్రవేశ లేఖ, ఫీజు వివరాలు'),
      s('Marks memos (10th, Inter, degree), entrance rank card', 'మార్కుల మెమోలు (10వ, ఇంటర్, డిగ్రీ), ప్రవేశ ర్యాంక్ కార్డు'),
      s('Aadhaar and PAN of student and parent; parent\'s income proof (income certificate / ITR / salary slips)', 'విద్యార్థి, తల్లి/తండ్రి ఆధార్, PAN; తల్లి/తండ్రి ఆదాయ రుజువు (ఆదాయ ధృవీకరణ / ITR / జీతం స్లిప్‌లు)'),
      s('For loans above ₹7.5 lakh: property documents for collateral', '₹7.5 లక్షలకు మించిన రుణాలకు: హామీగా ఆస్తి పత్రాలు'),
    ],
    fees: [
      fee(s('Interest', 'వడ్డీ'), s('Set by each bank (often 0.5% lower for girls); simple interest during study at many banks', 'ప్రతి బ్యాంక్ నిర్ణయిస్తుంది (అమ్మాయిలకు తరచూ 0.5% తక్కువ); చదువు కాలంలో చాలా బ్యాంకుల్లో సాధారణ వడ్డీ')),
      fee(s('Processing fee', 'ప్రాసెసింగ్ ఫీజు'), s('Usually nil at public-sector banks for education loans', 'ప్రభుత్వ బ్యాంకుల్లో విద్యా రుణాలకు సాధారణంగా లేదు')),
    ],
    steps: [
      s('Get the admission letter and fee structure.', 'ప్రవేశ లేఖ, ఫీజు వివరాలు తీసుకోండి.'),
      s('Apply on pmvidyalaxmi.co.in (or directly at a bank).', 'pmvidyalaxmi.co.inలో (లేదా నేరుగా బ్యాంకులో) దరఖాస్తు చేయండి.'),
      s('Bank sanctions; fees paid directly to the college.', 'బ్యాంక్ మంజూరు; ఫీజు నేరుగా కళాశాలకు.'),
    ],
    stages: [
      {
        title: s('Plan the amount', 'మొత్తం ప్రణాళిక'),
        steps: [
          s('Add up: tuition, hostel / mess, exam fees, books, laptop, travel (abroad: visa, tickets, insurance). Subtract scholarships / Vidya Deevena reimbursement.', 'కలపండి: ట్యూషన్, హాస్టల్ / మెస్, పరీక్ష ఫీజులు, పుస్తకాలు, ల్యాప్‌టాప్, ప్రయాణం (విదేశాలు: వీసా, టికెట్లు, బీమా). స్కాలర్‌షిప్‌లు / విద్యా దీవెన రీయింబర్స్‌మెంట్ తీసివేయండి.'),
          s('Borrow only the gap. Up to ₹7.5 lakh: no collateral needed at most banks (covered by a government credit guarantee fund).', 'లోటు మాత్రమే అప్పు తీసుకోండి. ₹7.5 లక్షల వరకు: చాలా బ్యాంకుల్లో హామీ అక్కర్లేదు (ప్రభుత్వ క్రెడిట్ గ్యారంటీ నిధి కవర్).'),
        ],
      },
      {
        title: s('Apply on PM-Vidyalaxmi', 'PM-విద్యాలక్ష్మిలో దరఖాస్తు'),
        steps: [
          s('Open pmvidyalaxmi.co.in → register with the student\'s mobile / email → fill the Common Education Loan Application Form (CELAF).', 'pmvidyalaxmi.co.in → విద్యార్థి మొబైల్ / ఇమెయిల్‌తో నమోదు → కామన్ ఎడ్యుకేషన్ లోన్ అప్లికేషన్ ఫారం (CELAF) నింపండి.'),
          s('Choose up to 3 banks; upload documents. Apply for the interest subvention on the same portal if eligible.', '3 బ్యాంకుల వరకు ఎంచుకోండి; పత్రాలు అప్‌లోడ్. అర్హులైతే అదే పోర్టల్‌లో వడ్డీ రాయితీకి దరఖాస్తు.'),
          s('Track status there; the bank may call the student and parent for a meeting.', 'అక్కడే స్టేటస్ ట్రాక్ చేయండి; బ్యాంక్ విద్యార్థి, తల్లి/తండ్రిని సమావేశానికి పిలవవచ్చు.'),
        ],
        note: s('Bank should decide within about 15 days of a complete application; a rejection must give reasons.', 'పూర్తి దరఖాస్తు అందిన సుమారు 15 రోజుల్లో బ్యాంక్ నిర్ణయించాలి; తిరస్కరణకు కారణాలు చెప్పాలి.'),
      },
      {
        title: s('After sanction', 'మంజూరు తర్వాత'),
        steps: [
          s('Sign the loan agreement (student + parent). Fees are paid in instalments directly to the college each semester / year.', 'రుణ ఒప్పందంపై సంతకం (విద్యార్థి + తల్లి/తండ్రి). ఫీజు ప్రతి సెమిస్టర్ / సంవత్సరం నేరుగా కళాశాలకు వాయిదాలుగా.'),
          s('Submit marks / bonafide each year for the next release; apply for CSIS subsidy through the bank with the income certificate (family income up to ₹4.5 lakh).', 'తదుపరి విడుదలకు ఏటా మార్కులు / బోనఫైడ్ ఇవ్వండి; ఆదాయ ధృవీకరణతో (కుటుంబ ఆదాయం ₹4.5 లక్షల వరకు) బ్యాంక్ ద్వారా CSIS సబ్సిడీకి దరఖాస్తు.'),
          s('Repayment starts after the course + 1 year (moratorium), usually over 10–15 years. Paying the interest during study reduces the burden a lot.', 'కోర్సు + 1 సంవత్సరం (మారటోరియం) తర్వాత తిరిగి చెల్లింపు, సాధారణంగా 10–15 సంవత్సరాల్లో. చదువు సమయంలో వడ్డీ చెల్లిస్తే భారం చాలా తగ్గుతుంది.'),
        ],
      },
    ],
    costExample: s('₹6 lakh loan for B.Tech, family income ₹3.5 lakh: no collateral; CSIS pays the interest during 4 years + 1 year moratorium; EMI starts on ₹6 lakh after that.', 'B.Techకు ₹6 లక్షల రుణం, కుటుంబ ఆదాయం ₹3.5 లక్షలు: హామీ లేదు; 4 సంవత్సరాలు + 1 సంవత్సరం మారటోరియంలో వడ్డీ CSIS చెల్లిస్తుంది; తర్వాత ₹6 లక్షలపై EMI ప్రారంభం.'),
    problems: [P(['Bank says "no service area" or refuses.', 'బ్యాంక్ "సర్వీస్ ఏరియా కాదు" అంటోంది లేదా నిరాకరిస్తోంది.'], ['Apply through PM-Vidyalaxmi to several banks; complain to the Lead District Manager or RBI (cms.rbi.org.in) if rejected without reason.', 'PM-విద్యాలక్ష్మి ద్వారా అనేక బ్యాంకులకు దరఖాస్తు చేయండి; కారణం లేకుండా తిరస్కరిస్తే లీడ్ డిస్ట్రిక్ట్ మేనేజర్ లేదా RBI (cms.rbi.org.in)కి ఫిర్యాదు.'])],
    whereToApply: [s('pmvidyalaxmi.co.in; any bank branch', 'pmvidyalaxmi.co.in; ఏ బ్యాంక్ బ్రాంచ్ అయినా')],
    timeline: s('Usually 2–4 weeks from a complete application.', 'పూర్తి దరఖాస్తు నుండి సాధారణంగా 2–4 వారాలు.'),
    tips: [s('Interest paid on an education loan can be deducted from income for 8 years under the old tax regime.', 'పాత పన్ను విధానంలో విద్యా రుణంపై చెల్లించిన వడ్డీని 8 సంవత్సరాలు ఆదాయం నుండి తగ్గించుకోవచ్చు.')],
    links: [{ label: 'PM-Vidyalaxmi portal', url: 'https://pmvidyalaxmi.co.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── LABOUR RIGHTS
  {
    id: 'labour-rights',
    category: 'money',
    level: 'both',
    title: s('Worker rights — salary not paid, minimum wages, PF / ESI, gratuity, complaints', 'కార్మిక హక్కులు — జీతం ఇవ్వలేదు, కనీస వేతనాలు, PF / ESI, గ్రాట్యుటీ, ఫిర్యాదులు'),
    summary: s(
      'India\'s four new labour codes have been in force since 21 November 2025. Every worker must get at least the minimum wage, salary on time with a payslip, and final dues within 2 working days of leaving. Employers must deposit PF and ESI for eligible workers. Gratuity is due after 5 years (1 year for fixed-term staff). If your employer doesn\'t pay, complain free to the labour department — no lawyer needed.',
      'భారత నాలుగు కొత్త కార్మిక కోడ్‌లు 21 నవంబర్ 2025 నుండి అమల్లో ఉన్నాయి. ప్రతి కార్మికునికి కనీసం కనీస వేతనం, పేస్లిప్‌తో సమయానికి జీతం, మానేసిన 2 పని రోజుల్లో తుది బకాయిలు అందాలి. అర్హ కార్మికులకు యజమానులు PF, ESI జమ చేయాలి. 5 సంవత్సరాల తర్వాత (ఫిక్స్‌డ్-టర్మ్ సిబ్బందికి 1 సంవత్సరం) గ్రాట్యుటీ. యజమాని చెల్లించకపోతే కార్మిక శాఖకు ఉచితంగా ఫిర్యాదు — న్యాయవాది అక్కర్లేదు.',
    ),
    keywords: ['salary not paid', 'wages not paid', 'unpaid salary', 'minimum wages', 'labour complaint', 'labour office', 'gratuity', 'esi', 'esic', 'pf not deposited', 'final settlement', 'maternity leave', 'overtime', 'labour code', 'samadhan', 'జీతం ఇవ్వలేదు', 'కనీస వేతనం', 'గ్రాట్యుటీ', 'కార్మిక శాఖ', 'ESI'],
    whoCanApply: [s('Any employee or worker — permanent, contract, daily-wage, fixed-term', 'ఏ ఉద్యోగి లేదా కార్మికుడైనా — శాశ్వత, కాంట్రాక్ట్, రోజువారీ, ఫిక్స్‌డ్-టర్మ్')],
    documents: [
      s('Appointment letter / ID card / payslips / bank statements showing salary', 'నియామక లేఖ / ఐడీ కార్డు / పేస్లిప్‌లు / జీతం చూపే బ్యాంక్ స్టేట్‌మెంట్లు'),
      s('Attendance proof, messages from the employer, resignation / termination letter', 'హాజరు రుజువు, యజమాని నుండి మెసేజ్‌లు, రాజీనామా / తొలగింపు లేఖ'),
      s('UAN (PF) and ESI IP number if any', 'ఉంటే UAN (PF), ESI IP నంబర్'),
    ],
    fees: [fee(s('Labour complaint', 'కార్మిక ఫిర్యాదు'), s('Free', 'ఉచితం')), fee(s('Gratuity', 'గ్రాట్యుటీ'), s('15 days\' wages × years of service (max ₹20 lakh)', '15 రోజుల వేతనం × సర్వీసు సంవత్సరాలు (గరిష్టం ₹20 లక్షలు)'))],
    steps: [
      s('Ask the employer in writing for the dues.', 'బకాయిలు రాతపూర్వకంగా యజమానిని అడగండి.'),
      s('Complain to the labour office (AP) or the central portal.', 'కార్మిక కార్యాలయం (AP) లేదా కేంద్ర పోర్టల్‌కు ఫిర్యాదు.'),
    ],
    stages: [
      {
        title: s('Know your basic rights', 'మీ ప్రాథమిక హక్కులు'),
        steps: [
          s('Minimum wage: fixed by the state for each type of work; no one can be paid less (contract and daily workers included). Overtime is paid at twice the normal rate.', 'కనీస వేతనం: ప్రతి రకం పనికి రాష్ట్రం నిర్ణయిస్తుంది; ఎవరికీ తక్కువ ఇవ్వకూడదు (కాంట్రాక్ట్, రోజువారీ కార్మికులతో సహా). ఓవర్‌టైమ్‌కు సాధారణ రేటుకు రెండింతలు.'),
          s('Salary by the 7th of the next month (monthly wages); equal pay for men and women for the same work.', 'తర్వాతి నెల 7వ తేదీలోపు జీతం (నెలవారీ వేతనం); ఒకే పనికి పురుషులు, మహిళలకు సమాన వేతనం.'),
          s('Leaving the job (resignation, dismissal, layoff): all wages due within 2 working days.', 'ఉద్యోగం వదిలితే (రాజీనామా, తొలగింపు, లేఆఫ్): అన్ని వేతనాలు 2 పని రోజుల్లో.'),
          s('Appointment letter is compulsory for every worker.', 'ప్రతి కార్మికునికి నియామక లేఖ తప్పనిసరి.'),
          s('Maternity: 26 weeks paid leave (first two children); crèche in larger establishments.', 'ప్రసూతి: 26 వారాల వేతన సెలవు (మొదటి ఇద్దరు పిల్లలు); పెద్ద సంస్థల్లో క్రెష్.'),
        ],
      },
      {
        title: s('PF, ESI and gratuity', 'PF, ESI, గ్రాట్యుటీ'),
        steps: [
          s('PF: check your UAN passbook monthly — employer\'s and your share should show. Not deposited? Complain on the EPFiGMS portal (epfigms.gov.in).', 'PF: ప్రతి నెల మీ UAN పాస్‌బుక్ చూడండి — యజమాని, మీ వాటా కనిపించాలి. జమ కాలేదా? EPFiGMS పోర్టల్ (epfigms.gov.in)లో ఫిర్యాదు.'),
          s('ESI (for wages up to ₹21,000 a month in covered units): free treatment at ESI hospitals for you and family, sickness pay, maternity benefit, disability / dependants\' pension. Get your e-Pehchan card from the employer.', 'ESI (కవర్ అయిన సంస్థల్లో నెలకు ₹21,000 వరకు వేతనం): మీకు, కుటుంబానికి ESI ఆసుపత్రుల్లో ఉచిత చికిత్స, అనారోగ్య వేతనం, ప్రసూతి ప్రయోజనం, వైకల్య / ఆధారితుల పెన్షన్. యజమాని నుండి e-పెహచాన్ కార్డు తీసుకోండి.'),
          s('Gratuity: after 5 years\' continuous service (1 year for fixed-term employees) — (last monthly wage ÷ 26) × 15 × years. Employer must pay within 30 days of leaving.', 'గ్రాట్యుటీ: 5 సంవత్సరాల నిరంతర సేవ తర్వాత (ఫిక్స్‌డ్-టర్మ్ ఉద్యోగులకు 1 సంవత్సరం) — (చివరి నెల వేతనం ÷ 26) × 15 × సంవత్సరాలు. మానేసిన 30 రోజుల్లో యజమాని చెల్లించాలి.'),
        ],
      },
      {
        title: s('Complain', 'ఫిర్యాదు'),
        steps: [
          s('Write to the employer (email / registered post) listing unpaid amounts and dates; give 7 days.', 'చెల్లించని మొత్తాలు, తేదీలతో యజమానికి రాయండి (ఇమెయిల్ / రిజిస్టర్డ్ పోస్ట్); 7 రోజులు ఇవ్వండి.'),
          s('State matters (shops, factories, construction, most private firms in AP): complain to the Assistant Commissioner of Labour / Labour Officer of your district (AP Labour department portal or in person).', 'రాష్ట్ర విషయాలు (దుకాణాలు, కర్మాగారాలు, నిర్మాణం, APలో చాలా ప్రైవేట్ సంస్థలు): మీ జిల్లా అసిస్టెంట్ కమిషనర్ ఆఫ్ లేబర్ / లేబర్ ఆఫీసర్‌కు ఫిర్యాదు (AP కార్మిక శాఖ పోర్టల్ లేదా నేరుగా).'),
          s('Central sphere (railways, banks, mines, central PSUs, ports, telecom): file on the Samadhan portal (samadhan.labour.gov.in).', 'కేంద్ర పరిధి (రైల్వే, బ్యాంకులు, గనులు, కేంద్ర PSUలు, ఓడరేవులు, టెలికాం): సమాధాన్ పోర్టల్ (samadhan.labour.gov.in)లో దాఖలు.'),
          s('The officer calls both sides, tries settlement, and can order payment with compensation. Gratuity disputes go to the Controlling Authority (labour officer).', 'అధికారి ఇరువైపులా పిలిచి రాజీ ప్రయత్నిస్తారు, పరిహారంతో చెల్లింపు ఆదేశించగలరు. గ్రాట్యుటీ వివాదాలు కంట్రోలింగ్ అథారిటీ (లేబర్ ఆఫీసర్)కి.'),
        ],
      },
    ],
    costExample: s('Worked 7 years, last salary ₹26,000: gratuity = (26,000 ÷ 26) × 15 × 7 = ₹1,05,000.', '7 సంవత్సరాలు పని, చివరి జీతం ₹26,000: గ్రాట్యుటీ = (26,000 ÷ 26) × 15 × 7 = ₹1,05,000.'),
    problems: [P(['Contractor ran away without paying.', 'కాంట్రాక్టర్ చెల్లించకుండా పారిపోయాడు.'], ['The principal employer (the company where you worked) is responsible for contract workers\' wages — name them in the complaint.', 'కాంట్రాక్ట్ కార్మికుల వేతనాలకు ప్రధాన యజమాని (మీరు పనిచేసిన కంపెనీ) బాధ్యుడు — ఫిర్యాదులో వారి పేరు చేర్చండి.'])],
    afterwards: [s('Unorganised workers: register on e-Shram; construction workers with the BOCW board.', 'అసంఘటిత కార్మికులు: e-Shramలో నమోదు; నిర్మాణ కార్మికులు BOCW బోర్డులో.')],
    whereToApply: [s('District labour office (AP Labour department); samadhan.labour.gov.in; epfigms.gov.in; ESIC 1800-11-2526', 'జిల్లా కార్మిక కార్యాలయం (AP కార్మిక శాఖ); samadhan.labour.gov.in; epfigms.gov.in; ESIC 1800-11-2526')],
    timeline: s('Many complaints settle at the first hearing; formal orders take weeks to months.', 'చాలా ఫిర్యాదులు మొదటి విచారణలోనే రాజీ; అధికారిక ఉత్తర్వులకు వారాల నుండి నెలలు.'),
    tips: [s('Keep a photo of every payslip and your attendance; ask for salary by bank transfer, not cash.', 'ప్రతి పేస్లిప్, మీ హాజరు ఫోటో దాచుకోండి; జీతం నగదు కాదు, బ్యాంక్ బదిలీలో అడగండి.')],
    links: [{ label: 'Samadhan — labour disputes', url: 'https://samadhan.labour.gov.in' }, { label: 'EPF grievance portal', url: 'https://epfigms.gov.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── RENT
  {
    id: 'rent-agreement',
    category: 'property',
    level: 'state',
    title: s('Renting a house — rent agreement, registration, tenant verification, deposits, eviction', 'ఇల్లు అద్దెకు — అద్దె ఒప్పందం, నమోదు, అద్దెదారు వెరిఫికేషన్, డిపాజిట్, ఖాళీ చేయించడం'),
    summary: s(
      'A written rent agreement protects both owner and tenant. Leases for 11 months are common because leases of a year or more must be registered at the Sub-Registrar; a registered agreement is the strongest proof and is needed for some address proofs and loans. The owner should do police verification of the tenant. Neither side can act by force — an owner can\'t cut water / power or throw out a tenant without legal process, and a tenant must pay rent and leave at the end of the term.',
      'రాతపూర్వక అద్దె ఒప్పందం యజమాని, అద్దెదారు ఇద్దరినీ రక్షిస్తుంది. ఒక సంవత్సరం లేదా ఎక్కువ లీజులు సబ్-రిజిస్ట్రార్ వద్ద నమోదు చేయాలి కాబట్టి 11 నెలల లీజులు సాధారణం; నమోదిత ఒప్పందం బలమైన రుజువు, కొన్ని చిరునామా రుజువులు, రుణాలకు అవసరం. యజమాని అద్దెదారుని పోలీసు వెరిఫికేషన్ చేయించాలి. ఎవరూ బలప్రయోగం చేయకూడదు — చట్ట ప్రక్రియ లేకుండా యజమాని నీరు / కరెంట్ కట్ చేయలేరు, అద్దెదారుని గెంటలేరు; అద్దెదారు అద్దె చెల్లించి గడువు ముగిశాక ఖాళీ చేయాలి.',
    ),
    keywords: ['rent', 'rent agreement', 'rental agreement', 'lease', 'tenant', 'landlord', 'house owner', 'tenant verification', 'advance', 'security deposit', 'eviction', 'vacate', 'అద్దె', 'అద్దె ఒప్పందం', 'అద్దెదారు', 'ఇంటి యజమాని', 'అడ్వాన్స్', 'ఖాళీ'],
    whoCanApply: [s('House owners and tenants', 'ఇంటి యజమానులు, అద్దెదారులు')],
    documents: [s('Aadhaar of owner and tenant, ownership proof (tax receipt / deed), photos, two witnesses', 'యజమాని, అద్దెదారు ఆధార్, యాజమాన్య రుజువు (పన్ను రసీదు / దస్తావేజు), ఫోటోలు, ఇద్దరు సాక్షులు')],
    fees: [fee(s('Stamp duty and registration', 'స్టాంప్ డ్యూటీ, నమోదు'), s('Based on rent, deposit and period — calculate on registration.ap.gov.in', 'అద్దె, డిపాజిట్, కాలం ఆధారంగా — registration.ap.gov.inలో లెక్కించండి'))],
    steps: [
      s('Agree terms; write the agreement on stamp paper.', 'షరతులు అంగీకరించి స్టాంప్ పేపర్‌పై ఒప్పందం రాయండి.'),
      s('Sign with two witnesses; register if 12 months or more.', 'ఇద్దరు సాక్షులతో సంతకం; 12 నెలలు లేదా ఎక్కువైతే నమోదు.'),
      s('Owner does tenant verification with police.', 'యజమాని పోలీసులతో అద్దెదారు వెరిఫికేషన్ చేయిస్తారు.'),
    ],
    stages: [
      {
        title: s('Write the agreement', 'ఒప్పందం రాయడం'),
        steps: [
          s('Include: names and addresses, property address, monthly rent and due date, security deposit and when it is returned, period and notice period, yearly increase, who pays electricity / water / maintenance, repairs, no sub-letting, condition of fittings.', 'చేర్చండి: పేర్లు, చిరునామాలు, ఆస్తి చిరునామా, నెలవారీ అద్దె, చెల్లింపు తేదీ, సెక్యూరిటీ డిపాజిట్, ఎప్పుడు తిరిగి ఇస్తారు, కాలం, నోటీసు కాలం, వార్షిక పెంపు, కరెంట్ / నీరు / మెయింటెనెన్స్ ఎవరు చెల్లిస్తారు, మరమ్మతులు, సబ్-లెట్ వద్దు, ఫిట్టింగ్‌ల స్థితి.'),
          s('Print on non-judicial stamp paper of the right value (or e-stamp), sign every page, two witnesses sign.', 'సరైన విలువ నాన్-జ్యుడీషియల్ స్టాంప్ పేపర్ (లేదా ఇ-స్టాంప్)పై ముద్రించి, ప్రతి పేజీపై సంతకం, ఇద్దరు సాక్షులు సంతకం.'),
          s('Take a photo / video of the house condition on the first day.', 'మొదటి రోజు ఇంటి స్థితి ఫోటో / వీడియో తీయండి.'),
        ],
      },
      {
        title: s('Register (for 12 months or more)', 'నమోదు (12 నెలలు లేదా ఎక్కువకు)'),
        steps: [
          s('registration.ap.gov.in → public data entry → "Lease" → enter details, calculate duty, pay online, book a slot.', 'registration.ap.gov.in → పబ్లిక్ డేటా ఎంట్రీ → "Lease" → వివరాలు, డ్యూటీ లెక్కించి, ఆన్‌లైన్ చెల్లింపు, స్లాట్ బుక్.'),
          s('Owner, tenant and witnesses go to the SRO with Aadhaar; registered the same day.', 'యజమాని, అద్దెదారు, సాక్షులు ఆధార్‌తో SROకు వెళ్తారు; అదే రోజు నమోదు.'),
        ],
      },
      {
        title: s('Tenant police verification', 'అద్దెదారు పోలీసు వెరిఫికేషన్'),
        steps: [
          s('Owner applies on the AP Police citizen portal / app (tenant verification) or gives the tenant details form at the local police station with the tenant\'s ID.', 'యజమాని AP పోలీస్ సిటిజన్ పోర్టల్ / యాప్‌లో (అద్దెదారు వెరిఫికేషన్) దరఖాస్తు చేస్తారు లేదా అద్దెదారు ఐడీతో స్థానిక పోలీస్ స్టేషన్‌లో వివరాల ఫారం ఇస్తారు.'),
        ],
      },
      {
        title: s('Disputes and leaving', 'వివాదాలు, ఖాళీ చేయడం'),
        steps: [
          s('Give / take written notice as per the agreement. At exit, inspect together, settle bills, and return the deposit minus agreed deductions (with a written account).', 'ఒప్పందం ప్రకారం రాతపూర్వక నోటీసు ఇవ్వండి / తీసుకోండి. ఖాళీ చేసేటప్పుడు కలిసి తనిఖీ, బిల్లులు సెటిల్, అంగీకరించిన కోతలు మినహా డిపాజిట్ తిరిగి (రాతపూర్వక లెక్కతో).'),
          s('Tenant not leaving / not paying: owner sends a legal notice and files an eviction case in civil court — no force, locks or power cuts.', 'అద్దెదారు ఖాళీ చేయకపోతే / చెల్లించకపోతే: యజమాని లీగల్ నోటీసు పంపి సివిల్ కోర్టులో ఖాళీ కేసు వేయాలి — బలప్రయోగం, తాళాలు, కరెంట్ కట్ కాదు.'),
          s('Deposit not returned: legal notice, then a consumer / civil case or Lok Adalat.', 'డిపాజిట్ తిరిగి ఇవ్వకపోతే: లీగల్ నోటీసు, తర్వాత వినియోగదారుల / సివిల్ కేసు లేదా లోక్ అదాలత్.'),
        ],
      },
    ],
    costExample: s('11-month agreement on stamp paper with notary: a few hundred rupees. A registered multi-year lease costs more in stamp duty — check the calculator.', 'నోటరీతో స్టాంప్ పేపర్‌పై 11 నెలల ఒప్పందం: కొన్ని వందల రూపాయలు. నమోదిత బహు-సంవత్సర లీజుకు స్టాంప్ డ్యూటీ ఎక్కువ — కాలిక్యులేటర్ చూడండి.'),
    problems: [P(['Need address proof as a tenant (Aadhaar update, gas).', 'అద్దెదారుగా చిరునామా రుజువు కావాలి (ఆధార్ అప్‌డేట్, గ్యాస్).'], ['A registered rent agreement is accepted as address proof by UIDAI and most services.', 'నమోదిత అద్దె ఒప్పందాన్ని UIDAI, చాలా సేవలు చిరునామా రుజువుగా అంగీకరిస్తాయి.'])],
    whereToApply: [s('registration.ap.gov.in / Sub-Registrar Office; AP Police citizen portal (verification)', 'registration.ap.gov.in / సబ్-రిజిస్ట్రార్ కార్యాలయం; AP పోలీస్ సిటిజన్ పోర్టల్ (వెరిఫికేషన్)')],
    timeline: s('Agreement: same day. Registration: same day as slot.', 'ఒప్పందం: అదే రోజు. నమోదు: స్లాట్ రోజే.'),
    tips: [s('Pay rent by bank transfer / UPI and keep receipts — salaried tenants can claim HRA with rent receipts (owner\'s PAN needed above ₹1 lakh a year).', 'అద్దె బ్యాంక్ బదిలీ / UPIలో చెల్లించి రసీదులు దాచుకోండి — జీతగాళ్లు అద్దె రసీదులతో HRA క్లెయిమ్ చేయవచ్చు (ఏడాదికి ₹1 లక్ష మించితే యజమాని PAN కావాలి).')],
    links: [{ label: 'AP Registration', url: 'https://registration.ap.gov.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── RERA
  {
    id: 'rera-flat-buying',
    category: 'property',
    level: 'state',
    title: s('Buying a flat or plot from a builder — RERA checks and complaints', 'బిల్డర్ నుండి ఫ్లాట్ లేదా ప్లాట్ కొనడం — RERA తనిఖీలు, ఫిర్యాదులు'),
    summary: s(
      'Projects with more than 500 sq m of land or more than 8 units must be registered with AP RERA before the builder advertises or sells. On the RERA site you can check approvals, the promised completion date, and complaints. The builder can\'t take more than 10% before a registered agreement for sale. If possession is delayed or the builder breaks promises, you can complain to AP RERA for refund with interest or interest for the delay.',
      '500 చ.మీ కంటే ఎక్కువ భూమి లేదా 8 కంటే ఎక్కువ యూనిట్లు ఉన్న ప్రాజెక్టులు బిల్డర్ ప్రకటించే లేదా అమ్మే ముందు AP RERAలో నమోదు కావాలి. RERA సైట్‌లో అనుమతులు, వాగ్దానం చేసిన పూర్తి తేదీ, ఫిర్యాదులు చూడవచ్చు. నమోదిత అమ్మకపు ఒప్పందానికి ముందు బిల్డర్ 10% కంటే ఎక్కువ తీసుకోకూడదు. స్వాధీనం ఆలస్యమైతే లేదా బిల్డర్ వాగ్దానాలు ఉల్లంఘిస్తే, వడ్డీతో రీఫండ్ లేదా ఆలస్యానికి వడ్డీ కోసం AP RERAకి ఫిర్యాదు చేయవచ్చు.',
    ),
    keywords: ['rera', 'ap rera', 'flat', 'apartment', 'builder', 'builder delay', 'possession delay', 'buy flat', 'villa', 'plot layout', 'agreement for sale', 'ఫ్లాట్', 'అపార్ట్‌మెంట్', 'బిల్డర్', 'రెరా'],
    whoCanApply: [s('Home buyers (allottees) and buyers\' associations', 'ఇల్లు కొనేవారు (అలాటీలు), కొనుగోలుదారుల సంఘాలు')],
    documents: [s('Booking receipt, allotment letter, agreement for sale, payment receipts, brochure / ads, builder\'s letters', 'బుకింగ్ రసీదు, కేటాయింపు లేఖ, అమ్మకపు ఒప్పందం, చెల్లింపు రసీదులు, బ్రోచర్ / ప్రకటనలు, బిల్డర్ లేఖలు')],
    fees: [fee(s('RERA complaint fee', 'RERA ఫిర్యాదు ఫీజు'), s('Small fee shown on the AP RERA portal', 'AP RERA పోర్టల్‌లో చూపిన చిన్న ఫీజు'))],
    steps: [
      s('Check the project on rera.ap.gov.in before paying.', 'చెల్లించే ముందు rera.ap.gov.inలో ప్రాజెక్ట్ చూడండి.'),
      s('Pay max 10% before a registered agreement for sale.', 'నమోదిత అమ్మకపు ఒప్పందానికి ముందు గరిష్టం 10% చెల్లించండి.'),
      s('Problems → complaint to AP RERA.', 'సమస్యలు → AP RERAకి ఫిర్యాదు.'),
    ],
    stages: [
      {
        title: s('Before booking — checks', 'బుకింగ్‌కు ముందు — తనిఖీలు'),
        steps: [
          s('rera.ap.gov.in → registered projects → search the project / builder. No RERA number on the ad = red flag.', 'rera.ap.gov.in → నమోదిత ప్రాజెక్టులు → ప్రాజెక్ట్ / బిల్డర్ వెతకండి. ప్రకటనపై RERA నంబర్ లేకపోతే = ప్రమాద సంకేతం.'),
          s('Open the project page: approved building plan / layout (LP number), land title, completion date, quarterly progress updates, and any complaints.', 'ప్రాజెక్ట్ పేజీ తెరవండి: ఆమోదిత భవన ప్లాన్ / లేఅవుట్ (LP నంబర్), భూమి టైటిల్, పూర్తి తేదీ, త్రైమాసిక పురోగతి అప్‌డేట్లు, ఫిర్యాదులు.'),
          s('Check the land EC and 22A list yourself; see which banks have approved the project for home loans.', 'భూమి EC, 22A జాబితా మీరే చూడండి; ఏ బ్యాంకులు గృహ రుణాలకు ప్రాజెక్ట్‌ను ఆమోదించాయో చూడండి.'),
          s('Price must be on carpet area; get car parking, amenities and specifications in writing.', 'ధర కార్పెట్ ఏరియాపై ఉండాలి; కార్ పార్కింగ్, సౌకర్యాలు, స్పెసిఫికేషన్లు రాతపూర్వకంగా తీసుకోండి.'),
        ],
      },
      {
        title: s('Agreement and payments', 'ఒప్పందం, చెల్లింపులు'),
        steps: [
          s('Pay no more than 10% as advance until a registered agreement for sale (RERA model format) is signed.', 'నమోదిత అమ్మకపు ఒప్పందం (RERA మోడల్ ఫార్మాట్)పై సంతకం అయ్యే వరకు 10% కంటే ఎక్కువ అడ్వాన్స్ చెల్లించకండి.'),
          s('Pay stage-wise as construction progresses, always by bank transfer to the project\'s RERA account; keep every receipt.', 'నిర్మాణ పురోగతి ప్రకారం దశలవారీగా, ఎప్పుడూ ప్రాజెక్ట్ RERA ఖాతాకు బ్యాంక్ బదిలీతో చెల్లించండి; ప్రతి రసీదు దాచుకోండి.'),
          s('At possession: occupancy certificate, sale deed registration, and the builder\'s 5-year liability for structural defects.', 'స్వాధీనం సమయంలో: ఆక్యుపెన్సీ సర్టిఫికెట్, సేల్ డీడ్ నమోదు, నిర్మాణ లోపాలకు బిల్డర్ 5 సంవత్సరాల బాధ్యత.'),
        ],
      },
      {
        title: s('Complain to AP RERA', 'AP RERAకి ఫిర్యాదు'),
        steps: [
          s('rera.ap.gov.in → complaint → register → fill the complaint form: project, RERA number, facts, relief (refund with interest / interest for delay / possession / fixing defects).', 'rera.ap.gov.in → ఫిర్యాదు → నమోదు → ఫిర్యాదు ఫారం: ప్రాజెక్ట్, RERA నంబర్, వాస్తవాలు, కోరే ఉపశమనం (వడ్డీతో రీఫండ్ / ఆలస్యానికి వడ్డీ / స్వాధీనం / లోపాల సరిచేత).'),
          s('Upload agreement and receipts; pay the fee; attend hearings (often online).', 'ఒప్పందం, రసీదులు అప్‌లోడ్; ఫీజు చెల్లింపు; విచారణలకు హాజరు (తరచూ ఆన్‌లైన్).'),
          s('Order not followed? Apply for execution; appeal to the Real Estate Appellate Tribunal.', 'ఉత్తర్వు పాటించకపోతే? ఎగ్జిక్యూషన్‌కు దరఖాస్తు; రియల్ ఎస్టేట్ అప్పిలేట్ ట్రిబ్యునల్‌కు అప్పీల్.'),
        ],
      },
    ],
    costExample: s('Flat price ₹50 lakh: max ₹5 lakh before the registered agreement. Possession delayed 1 year: RERA can order interest on your paid amount for each month of delay.', 'ఫ్లాట్ ధర ₹50 లక్షలు: నమోదిత ఒప్పందానికి ముందు గరిష్టం ₹5 లక్షలు. స్వాధీనం 1 సంవత్సరం ఆలస్యం: ఆలస్యం ప్రతి నెలకు మీరు చెల్లించిన మొత్తంపై వడ్డీ RERA ఆదేశించగలదు.'),
    whereToApply: [s('rera.ap.gov.in', 'rera.ap.gov.in')],
    timeline: s('RERA aims to decide complaints within 60 days; often longer.', 'RERA 60 రోజుల్లో ఫిర్యాదులు నిర్ణయించాలని లక్ష్యం; తరచూ ఎక్కువ.'),
    tips: [s('Open plots in an unapproved layout can\'t get building permission — see the LRS guide before buying.', 'అనుమతి లేని లేఅవుట్‌లో ఓపెన్ ప్లాట్లకు భవన అనుమతి రాదు — కొనే ముందు LRS గైడ్ చూడండి.')],
    links: [{ label: 'AP RERA', url: 'https://rera.ap.gov.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── LPG
  {
    id: 'lpg-connection',
    category: 'food',
    level: 'central',
    title: s('LPG gas — new connection, transfer, shifting, booking, safety and complaints', 'LPG గ్యాస్ — కొత్త కనెక్షన్, బదిలీ, మార్పు, బుకింగ్, భద్రత, ఫిర్యాదులు'),
    summary: s(
      'Anyone can get a regular LPG connection from Indane, Bharat Gas or HP Gas by applying online or at a distributor with Aadhaar and address proof. You pay a refundable cylinder deposit. Moving to another town? Get a transfer voucher and continue with a new distributor. Connection in a deceased parent\'s name can be transferred to a family member. Poor women without any connection should use Ujjwala instead (free).',
      'Indane, భారత్ గ్యాస్ లేదా HP గ్యాస్ నుండి ఆధార్, చిరునామా రుజువుతో ఆన్‌లైన్‌లో లేదా డిస్ట్రిబ్యూటర్ వద్ద దరఖాస్తు చేసి ఎవరైనా సాధారణ LPG కనెక్షన్ పొందవచ్చు. తిరిగి ఇచ్చే సిలిండర్ డిపాజిట్ చెల్లించాలి. వేరే పట్టణానికి మారుతున్నారా? ట్రాన్స్‌ఫర్ వోచర్ తీసుకుని కొత్త డిస్ట్రిబ్యూటర్‌తో కొనసాగించండి. మరణించిన తల్లి/తండ్రి పేరుపై ఉన్న కనెక్షన్‌ను కుటుంబ సభ్యునికి బదిలీ చేయవచ్చు. కనెక్షన్ లేని పేద మహిళలు ఉజ్వల వాడాలి (ఉచితం).',
    ),
    keywords: ['gas connection', 'lpg', 'new gas', 'gas transfer', 'gas booking', 'cylinder', 'indane', 'bharat gas', 'hp gas', 'gas subsidy', 'kyc gas', 'gas leak', '1906', 'transfer voucher', 'గ్యాస్ కనెక్షన్', 'సిలిండర్', 'గ్యాస్ బుకింగ్', 'గ్యాస్ లీక్'],
    whoCanApply: [s('Any household / adult with address proof', 'చిరునామా రుజువు ఉన్న ఏ కుటుంబం / వయోజనుడైనా')],
    documents: [s('Aadhaar, address proof (Aadhaar / rent agreement / electricity bill), photo, bank details for subsidy', 'ఆధార్, చిరునామా రుజువు (ఆధార్ / అద్దె ఒప్పందం / కరెంట్ బిల్లు), ఫోటో, సబ్సిడీకి బ్యాంక్ వివరాలు')],
    fees: [fee(s('Cylinder & regulator deposit, stove, installation', 'సిలిండర్ & రెగ్యులేటర్ డిపాజిట్, స్టవ్, ఇన్‌స్టాలేషన్'), s('As per the oil company\'s current rates — shown at booking; deposit is refundable on surrender', 'ఆయిల్ కంపెనీ ప్రస్తుత రేట్ల ప్రకారం — బుకింగ్‌లో చూపిస్తారు; సరెండర్ చేస్తే డిపాజిట్ తిరిగి'))],
    steps: [
      s('Apply online / at the distributor with KYC.', 'KYCతో ఆన్‌లైన్‌లో / డిస్ట్రిబ్యూటర్ వద్ద దరఖాస్తు.'),
      s('Pay deposit; get the Subscription Voucher and blue book.', 'డిపాజిట్ చెల్లించి సబ్‌స్క్రిప్షన్ వోచర్, బ్లూ బుక్ తీసుకోండి.'),
    ],
    stages: [
      {
        title: s('New connection', 'కొత్త కనెక్షన్'),
        steps: [
          s('Apply on the company app / site (IndianOil ONE, HP Pay / myhpgas, Hello BPCL) → "New connection" → choose a distributor → fill KYC → upload documents. Or visit the distributor.', 'కంపెనీ యాప్ / సైట్ (IndianOil ONE, HP Pay / myhpgas, Hello BPCL) → "New connection" → డిస్ట్రిబ్యూటర్ ఎంచుకుని → KYC నింపి → పత్రాలు అప్‌లోడ్. లేదా డిస్ట్రిబ్యూటర్ వద్దకు వెళ్లండి.'),
          s('After verification, pay the deposit and charges; collect the Subscription Voucher (SV) — keep it safe, it\'s needed for transfer / refund.', 'ధృవీకరణ తర్వాత డిపాజిట్, ఛార్జీలు చెల్లించండి; సబ్‌స్క్రిప్షన్ వోచర్ (SV) తీసుకోండి — భద్రంగా ఉంచండి, బదిలీ / రీఫండ్‌కు కావాలి.'),
          s('A mechanic installs and checks for leaks. Use an ISI stove and the company\'s Suraksha hose.', 'మెకానిక్ ఇన్‌స్టాల్ చేసి లీక్‌లు తనిఖీ చేస్తారు. ISI స్టవ్, కంపెనీ సురక్షా హోస్ వాడండి.'),
          s('Link Aadhaar and bank for subsidy (DBTL) — and for AP\'s Deepam free cylinders if eligible.', 'సబ్సిడీ (DBTL)కి ఆధార్, బ్యాంక్ లింక్ చేయండి — అర్హులైతే AP దీపం ఉచిత సిలిండర్లకు కూడా.'),
        ],
      },
      {
        title: s('Booking and delivery', 'బుకింగ్, డెలివరీ'),
        steps: [
          s('Book by IVRS / missed call / WhatsApp / app with your registered mobile. A delivery code (DAC / OTP) comes by SMS — give it to the delivery person only when you receive the cylinder.', 'నమోదిత మొబైల్‌తో IVRS / మిస్డ్ కాల్ / వాట్సాప్ / యాప్‌లో బుక్. SMSలో డెలివరీ కోడ్ (DAC / OTP) వస్తుంది — సిలిండర్ అందినప్పుడే డెలివరీ వ్యక్తికి ఇవ్వండి.'),
          s('Pay only the amount on the cash memo; check the seal and weight. Delivery charge is included — no extra tips required.', 'క్యాష్ మెమోలో ఉన్న మొత్తమే చెల్లించండి; సీల్, బరువు చూడండి. డెలివరీ ఛార్జీ కలిపే ఉంటుంది — అదనం అక్కర్లేదు.'),
        ],
      },
      {
        title: s('Transfer, shifting, surrender', 'బదిలీ, మార్పు, సరెండర్'),
        steps: [
          s('Shifting town: ask your distributor for a Transfer Termination Voucher (TTV), surrender the cylinder / regulator, then take the TTV to a distributor in the new town to re-start (you only pay any difference in deposit).', 'పట్టణం మారితే: మీ డిస్ట్రిబ్యూటర్‌ను ట్రాన్స్‌ఫర్ టెర్మినేషన్ వోచర్ (TTV) అడిగి, సిలిండర్ / రెగ్యులేటర్ సరెండర్ చేసి, కొత్త పట్టణంలో డిస్ట్రిబ్యూటర్‌కు TTV ఇచ్చి తిరిగి ప్రారంభించండి (డిపాజిట్ తేడా మాత్రమే చెల్లించాలి).'),
          s('Same town, new address: just update the address at the distributor (no TTV).', 'అదే పట్టణం, కొత్త చిరునామా: డిస్ట్రిబ్యూటర్ వద్ద చిరునామా అప్‌డేట్ చేస్తే చాలు (TTV అక్కర్లేదు).'),
          s('Holder died: family member applies with the death certificate, SV and an affidavit / no-objection from other heirs to transfer the connection.', 'హోల్డర్ మరణిస్తే: కనెక్షన్ బదిలీకి కుటుంబ సభ్యుడు మరణ ధృవీకరణ, SV, ఇతర వారసుల అఫిడవిట్ / నిరభ్యంతరంతో దరఖాస్తు.'),
          s('Surrender: return cylinder and regulator with the SV and get the deposit back.', 'సరెండర్: SVతో సిలిండర్, రెగ్యులేటర్ తిరిగి ఇచ్చి డిపాజిట్ తిరిగి పొందండి.'),
        ],
      },
    ],
    costExample: s('Refill price: market rate shown on the cash memo; subsidy (if any) credited to your bank.', 'రీఫిల్ ధర: క్యాష్ మెమోలో చూపిన మార్కెట్ రేటు; సబ్సిడీ (ఉంటే) మీ బ్యాంకుకు జమ.'),
    problems: [
      P(['Gas smell / leak.', 'గ్యాస్ వాసన / లీక్.'], ['Turn off the regulator, don\'t switch any electrical item on or off, open doors and windows, and call 1906 (24×7 LPG emergency).', 'రెగ్యులేటర్ ఆపండి, ఏ విద్యుత్ వస్తువునూ ఆన్ / ఆఫ్ చేయకండి, తలుపులు, కిటికీలు తెరిచి 1906కి (24×7 LPG అత్యవసరం) కాల్ చేయండి.']),
      P(['Delivery boy demands extra money / late delivery.', 'డెలివరీ బాయ్ అదనపు డబ్బు అడుగుతున్నాడు / ఆలస్య డెలివరీ.'], ['Complain on 1800-2333-555 (LPG helpline) or the company app; then pgportal.gov.in.', '1800-2333-555 (LPG హెల్ప్‌లైన్) లేదా కంపెనీ యాప్‌లో ఫిర్యాదు; తర్వాత pgportal.gov.in.']),
    ],
    whereToApply: [s('Company app / website; any LPG distributor', 'కంపెనీ యాప్ / వెబ్‌సైట్; ఏ LPG డిస్ట్రిబ్యూటర్ అయినా')],
    timeline: s('New connection: usually within a week. Refills: 1–3 days.', 'కొత్త కనెక్షన్: సాధారణంగా వారంలో. రీఫిల్స్: 1–3 రోజులు.'),
    tips: [s('Get the free / low-cost mandatory safety inspection done when the mechanic visits, and replace the rubber hose every 2 years (or use the Suraksha hose).', 'మెకానిక్ వచ్చినప్పుడు తప్పనిసరి భద్రతా తనిఖీ చేయించండి, రబ్బర్ హోస్‌ను ప్రతి 2 సంవత్సరాలకు మార్చండి (లేదా సురక్షా హోస్ వాడండి).')],
    links: [{ label: 'MyLPG — all companies', url: 'https://www.mylpg.in' }],
    lastChecked: CHECKED,
  },
];

export const moneyDir: XDir[] = [
  D('bank-complaints', 'money', ['Bank first, then RBI Ombudsman free; recovery agents 8 am–7 pm only; CIBIL fixes in 30 days', 'ముందు బ్యాంక్, తర్వాత ఉచిత RBI అంబుడ్స్‌మన్; రికవరీ ఏజెంట్లు ఉ.8–రా.7 మాత్రమే; CIBIL 30 రోజుల్లో సవరణ'], ['cms.rbi.org.in / 14448', 'cms.rbi.org.in / 14448']),
  D('unclaimed-money', 'money', ['Search old deposits (UDGAM), insurance, PF, shares (IEPF), mutual funds', 'పాత డిపాజిట్లు (UDGAM), బీమా, PF, షేర్లు (IEPF), మ్యూచువల్ ఫండ్లు వెతకండి'], ['udgam.rbi.org.in', 'udgam.rbi.org.in']),
  D('post-office-savings', 'money', ['PPF 7.1%, NSC 7.7%, KVP 7.5%, MIS 7.4%, RD 6.7% (Oct–Dec 2026)', 'PPF 7.1%, NSC 7.7%, KVP 7.5%, MIS 7.4%, RD 6.7% (అక్టో–డిసెం 2026)'], ['Any post office', 'ఏ పోస్టాఫీసైనా']),
  D('education-loan', 'education', ['Collateral-free up to ₹7.5 lakh; PM-Vidyalaxmi; interest subsidy', '₹7.5 లక్షల వరకు హామీ లేకుండా; PM-విద్యాలక్ష్మి; వడ్డీ సబ్సిడీ'], ['pmvidyalaxmi.co.in; banks', 'pmvidyalaxmi.co.in; బ్యాంకులు']),
  D('labour-rights', 'money', ['Unpaid salary, minimum wage, PF / ESI, gratuity — free complaint', 'జీతం ఇవ్వకపోవడం, కనీస వేతనం, PF / ESI, గ్రాట్యుటీ — ఉచిత ఫిర్యాదు'], ['District labour office; samadhan.labour.gov.in', 'జిల్లా కార్మిక కార్యాలయం; samadhan.labour.gov.in']),
  D('rent-agreement', 'land', ['Rent agreement, registration, tenant verification, deposit, eviction', 'అద్దె ఒప్పందం, నమోదు, అద్దెదారు వెరిఫికేషన్, డిపాజిట్, ఖాళీ'], ['Sub-Registrar; AP Police portal', 'సబ్-రిజిస్ట్రార్; AP పోలీస్ పోర్టల్']),
  D('rera-flat-buying', 'land', ['Check builder project on RERA; max 10% before agreement; delay complaints', 'RERAలో బిల్డర్ ప్రాజెక్ట్ చూడండి; ఒప్పందానికి ముందు గరిష్టం 10%; ఆలస్య ఫిర్యాదులు'], ['rera.ap.gov.in', 'rera.ap.gov.in']),
  D('lpg-connection', 'welfare', ['New LPG connection, transfer voucher, shifting, leak 1906', 'కొత్త LPG కనెక్షన్, ట్రాన్స్‌ఫర్ వోచర్, మార్పు, లీక్ 1906'], ['Company app; LPG distributor', 'కంపెనీ యాప్; LPG డిస్ట్రిబ్యూటర్']),
];
