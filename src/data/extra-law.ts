import { Guide } from '../types';
import { fee, CHECKED } from './bi';
import { s, P, D, XDir } from './extra-helpers';

/** Law, courts and your rights — full walkthroughs (checked 20 Oct 2026). */
export const lawGuides: Guide[] = [
  // ─────────────────────────────────────────── BNS SECTIONS
  {
    id: 'bns-sections',
    category: 'law',
    level: 'central',
    title: s('Police sections explained — BNS (new IPC) in simple words', 'పోలీస్ సెక్షన్లు సులభంగా — BNS (కొత్త IPC)'),
    summary: s(
      'Since 1 July 2024 crimes are booked under the Bharatiya Nyaya Sanhita (BNS), which replaced the IPC. Police procedure is under the BNSS (replaced CrPC) and evidence under the BSA. Old cases filed before that date still use IPC numbers — so "420" is now "318(4)". This guide lists the sections common people meet most, what each means, the maximum punishment, and whether police can arrest without a warrant (cognizable) and whether bail is a right (bailable). Punishments are the maximum — the court decides the actual sentence.',
      '1 జూలై 2024 నుండి నేరాలు IPC స్థానంలో వచ్చిన భారతీయ న్యాయ సంహిత (BNS) కింద నమోదవుతాయి. పోలీసు విధానం BNSS (CrPC స్థానంలో), సాక్ష్యం BSA కింద. ఆ తేదీకి ముందు నమోదైన పాత కేసులు IPC నంబర్లనే వాడతాయి — కాబట్టి "420" ఇప్పుడు "318(4)". సామాన్యులు ఎక్కువగా ఎదుర్కొనే సెక్షన్లు, వాటి అర్థం, గరిష్ట శిక్ష, వారెంట్ లేకుండా పోలీసులు అరెస్ట్ చేయవచ్చా (కాగ్నిజబుల్), బెయిల్ హక్కా (బెయిలబుల్) ఈ గైడ్‌లో ఉన్నాయి. శిక్షలు గరిష్టం — అసలు శిక్ష కోర్టు నిర్ణయిస్తుంది.',
    ),
    keywords: ['bns', 'ipc', 'section', 'sections', 'police section', '420', '302', '307', '323', '354', '376', '379', '406', '498a', '506', '509', 'cheating case', 'theft case', 'bharatiya nyaya sanhita', 'bnss', 'crpc', 'cognizable', 'bailable', 'punishment', 'సెక్షన్', 'సెక్షన్లు', 'శిక్ష', 'ఐపీసీ', 'కేసు'],
    whoCanApply: [s('Anyone — to understand a complaint, FIR or police notice', 'ఎవరైనా — ఫిర్యాదు, FIR లేదా పోలీసు నోటీసు అర్థం చేసుకోవడానికి')],
    documents: [s('The FIR copy or notice that mentions the section numbers', 'సెక్షన్ నంబర్లు ఉన్న FIR కాపీ లేదా నోటీసు')],
    fees: [fee(s('Reading your FIR / getting a copy', 'మీ FIR చదవడం / కాపీ పొందడం'), s('Free for the complainant', 'ఫిర్యాదుదారుకు ఉచితం'))],
    steps: [
      s('Look at the FIR: it says BNS (new) or IPC (old) and the section numbers.', 'FIR చూడండి: BNS (కొత్త) లేదా IPC (పాత), సెక్షన్ నంబర్లు ఉంటాయి.'),
      s('Find each section below to see what it means and how serious it is.', 'ప్రతి సెక్షన్ అర్థం, తీవ్రత కింద చూడండి.'),
      s('For any case, take free legal advice on 15100 before going to court.', 'ఏ కేసుకైనా కోర్టుకు వెళ్లే ముందు 15100లో ఉచిత న్యాయ సలహా తీసుకోండి.'),
    ],
    stages: [
      {
        title: s('First understand four words', 'ముందుగా నాలుగు పదాలు'),
        steps: [
          s('Cognizable: serious offence — police must register an FIR and can arrest without a warrant (theft, assault, cheating, dowry cruelty).', 'కాగ్నిజబుల్: తీవ్రమైన నేరం — పోలీసులు FIR నమోదు చేయాలి, వారెంట్ లేకుండా అరెస్ట్ చేయవచ్చు (దొంగతనం, దాడి, మోసం, వరకట్న వేధింపు).'),
          s('Non-cognizable: minor offence — police note it in a register (NCR) and need a magistrate\'s order to investigate (simple hurt, defamation).', 'నాన్-కాగ్నిజబుల్: చిన్న నేరం — పోలీసులు రిజిస్టర్‌లో (NCR) నమోదు చేస్తారు, దర్యాప్తుకు మేజిస్ట్రేట్ ఆదేశం కావాలి (సాధారణ గాయం, పరువు నష్టం).'),
          s('Bailable: bail is your right — police station or court must release you on bail.', 'బెయిలబుల్: బెయిల్ మీ హక్కు — పోలీస్ స్టేషన్ లేదా కోర్టు బెయిల్‌పై విడుదల చేయాలి.'),
          s('Non-bailable: bail is decided by the court — it is not automatic, but it is still often granted.', 'నాన్-బెయిలబుల్: బెయిల్ కోర్టు నిర్ణయం — ఆటోమేటిక్ కాదు, కానీ తరచూ ఇస్తారు.'),
        ],
        note: s('Offences with punishment up to 7 years: police usually must send a notice to appear (BNSS 35(3)) instead of arresting, unless arrest is really needed.', '7 సంవత్సరాల వరకు శిక్ష ఉన్న నేరాలు: అరెస్ట్ నిజంగా అవసరమైతే తప్ప, పోలీసులు సాధారణంగా హాజరు కావాలని నోటీసు (BNSS 35(3)) ఇవ్వాలి.'),
      },
      {
        title: s('Theft, property and money', 'దొంగతనం, ఆస్తి, డబ్బు'),
        steps: [
          s('BNS 303 — Theft (old IPC 379): up to 3 years, or fine, or both. Cognizable.', 'BNS 303 — దొంగతనం (పాత IPC 379): 3 సంవత్సరాల వరకు, లేదా జరిమానా, లేదా రెండూ. కాగ్నిజబుల్.'),
          s('BNS 304 — Snatching (chain / phone snatching): up to 3 years and fine. Cognizable.', 'BNS 304 — స్నాచింగ్ (చైన్ / ఫోన్ లాక్కోవడం): 3 సంవత్సరాల వరకు, జరిమానా. కాగ్నిజబుల్.'),
          s('BNS 305 — Theft from a house, temple or vehicle (old 380): up to 7 years and fine. Non-bailable.', 'BNS 305 — ఇల్లు, ఆలయం లేదా వాహనం నుండి దొంగతనం (పాత 380): 7 సంవత్సరాల వరకు, జరిమానా. నాన్-బెయిలబుల్.'),
          s('BNS 309 — Robbery, theft with force (old 392): up to 10 years and fine. Non-bailable.', 'BNS 309 — బలవంతంగా దోపిడీ (పాత 392): 10 సంవత్సరాల వరకు, జరిమానా. నాన్-బెయిలబుల్.'),
          s('BNS 316 — Criminal breach of trust, misusing money or property given in trust (old 406): up to 5 years (more for employees, bankers, agents). Non-bailable.', 'BNS 316 — నమ్మక ద్రోహం, నమ్మి ఇచ్చిన డబ్బు / ఆస్తి దుర్వినియోగం (పాత 406): 5 సంవత్సరాల వరకు (ఉద్యోగులు, బ్యాంకర్లు, ఏజెంట్లకు ఎక్కువ). నాన్-బెయిలబుల్.'),
          s('BNS 318(4) — Cheating and making someone hand over money or property (old 420): up to 7 years and fine. Non-bailable. Plain cheating is 318(2): up to 3 years.', 'BNS 318(4) — మోసం చేసి డబ్బు లేదా ఆస్తి ఇప్పించుకోవడం (పాత 420): 7 సంవత్సరాల వరకు, జరిమానా. నాన్-బెయిలబుల్. సాధారణ మోసం 318(2): 3 సంవత్సరాల వరకు.'),
          s('BNS 319 — Cheating by pretending to be someone else (old 419): up to 5 years.', 'BNS 319 — వేరొకరిలా నటించి మోసం (పాత 419): 5 సంవత్సరాల వరకు.'),
          s('BNS 308 — Extortion, taking money by threats (old 384): up to 7 years.', 'BNS 308 — బెదిరించి డబ్బు వసూలు (పాత 384): 7 సంవత్సరాల వరకు.'),
          s('BNS 336 / 338 / 340 — Forgery, forged documents and using them (old 465–471): 2 years to life, depending on the document (wills and property deeds are the most serious).', 'BNS 336 / 338 / 340 — ఫోర్జరీ, నకిలీ పత్రాలు, వాటిని వాడడం (పాత 465–471): పత్రాన్ని బట్టి 2 సంవత్సరాల నుండి జీవిత ఖైదు (వీలునామాలు, ఆస్తి దస్తావేజులు అత్యంత తీవ్రం).'),
          s('BNS 329 — Criminal trespass, entering someone\'s land / house to annoy or commit a crime (old 447 / 448): up to 3 months (land) or 1 year (house).', 'BNS 329 — అక్రమ ప్రవేశం, ఇబ్బంది పెట్టడానికి లేదా నేరం చేయడానికి ఇతరుల భూమి / ఇంట్లోకి ప్రవేశం (పాత 447 / 448): 3 నెలల వరకు (భూమి) లేదా 1 సంవత్సరం (ఇల్లు).'),
          s('BNS 324 — Mischief, damaging property (old 427): up to 6 months to 2 years depending on the damage.', 'BNS 324 — ఆస్తి నష్టం (పాత 427): నష్టాన్ని బట్టి 6 నెలల నుండి 2 సంవత్సరాల వరకు.'),
        ],
      },
      {
        title: s('Hurt, threats and violence', 'గాయం, బెదిరింపులు, హింస'),
        steps: [
          s('BNS 115(2) — Voluntarily causing hurt (old 323): up to 1 year or ₹10,000 fine or both. Non-cognizable, bailable.', 'BNS 115(2) — ఉద్దేశపూర్వకంగా గాయపరచడం (పాత 323): 1 సంవత్సరం వరకు లేదా ₹10,000 జరిమానా లేదా రెండూ. నాన్-కాగ్నిజబుల్, బెయిలబుల్.'),
          s('BNS 117(2) — Grievous hurt: broken bone, loss of eye / hearing, serious injury (old 325): up to 7 years and fine. Cognizable.', 'BNS 117(2) — తీవ్ర గాయం: ఎముక విరగడం, కన్ను / వినికిడి పోవడం, తీవ్ర గాయం (పాత 325): 7 సంవత్సరాల వరకు, జరిమానా. కాగ్నిజబుల్.'),
          s('BNS 118 — Hurt using a weapon, acid or dangerous means (old 324 / 326): up to 3 years; grievous hurt with a weapon up to 10 years or life.', 'BNS 118 — ఆయుధం, యాసిడ్ లేదా ప్రమాదకర సాధనంతో గాయం (పాత 324 / 326): 3 సంవత్సరాల వరకు; ఆయుధంతో తీవ్ర గాయం 10 సంవత్సరాలు లేదా జీవిత ఖైదు వరకు.'),
          s('BNS 126 / 127 — Wrongful restraint (blocking someone\'s way, old 341) and wrongful confinement (locking someone in, old 342): 1 month and up to 1 year respectively.', 'BNS 126 / 127 — దారి అడ్డగించడం (పాత 341), నిర్బంధించడం (పాత 342): వరుసగా 1 నెల, 1 సంవత్సరం వరకు.'),
          s('BNS 351 — Criminal intimidation, threatening (old 506): up to 2 years; threat to kill or cause grievous hurt up to 7 years.', 'BNS 351 — బెదిరింపు (పాత 506): 2 సంవత్సరాల వరకు; చంపుతానని లేదా తీవ్ర గాయం చేస్తానని బెదిరిస్తే 7 సంవత్సరాల వరకు.'),
          s('BNS 352 — Intentional insult to provoke a fight (old 504): up to 2 years.', 'BNS 352 — గొడవ రేపడానికి ఉద్దేశపూర్వక అవమానం (పాత 504): 2 సంవత్సరాల వరకు.'),
          s('BNS 109 — Attempt to murder (old 307): up to 10 years; life if the person is hurt. Non-bailable.', 'BNS 109 — హత్యాయత్నం (పాత 307): 10 సంవత్సరాల వరకు; గాయపడితే జీవిత ఖైదు. నాన్-బెయిలబుల్.'),
          s('BNS 103 — Murder (old 302): death or life imprisonment and fine. Mob lynching is also covered here.', 'BNS 103 — హత్య (పాత 302): మరణ శిక్ష లేదా జీవిత ఖైదు, జరిమానా. మూక హత్య కూడా ఇందులోనే.'),
          s('BNS 108 — Abetment of suicide (old 306): up to 10 years and fine.', 'BNS 108 — ఆత్మహత్యకు ప్రేరేపించడం (పాత 306): 10 సంవత్సరాల వరకు, జరిమానా.'),
        ],
      },
      {
        title: s('Women, marriage and children', 'మహిళలు, వివాహం, పిల్లలు'),
        steps: [
          s('BNS 74 — Assault or force on a woman to outrage her modesty (old 354): 1 to 5 years and fine. Non-bailable.', 'BNS 74 — మహిళ గౌరవానికి భంగం కలిగించే దాడి (పాత 354): 1 నుండి 5 సంవత్సరాలు, జరిమానా. నాన్-బెయిలబుల్.'),
          s('BNS 75 — Sexual harassment: unwelcome touching, demands, showing pornography, sexual remarks (old 354A): up to 3 years (1 year for remarks).', 'BNS 75 — లైంగిక వేధింపు: ఇష్టం లేని తాకడం, డిమాండ్లు, అశ్లీలం చూపడం, అసభ్య వ్యాఖ్యలు (పాత 354A): 3 సంవత్సరాల వరకు (వ్యాఖ్యలకు 1 సంవత్సరం).'),
          s('BNS 77 — Voyeurism, secretly photographing / filming a woman (old 354C): 1–3 years first time.', 'BNS 77 — రహస్యంగా మహిళను ఫోటో / వీడియో తీయడం (పాత 354C): మొదటిసారి 1–3 సంవత్సరాలు.'),
          s('BNS 78 — Stalking, following or repeatedly contacting / monitoring online after she refuses (old 354D): up to 3 years first time, up to 5 years next.', 'BNS 78 — వెంటాడడం, నిరాకరించినా వెంబడించడం / పదే పదే సంప్రదించడం / ఆన్‌లైన్ నిఘా (పాత 354D): మొదటిసారి 3 సంవత్సరాల వరకు, మళ్లీ 5 సంవత్సరాల వరకు.'),
          s('BNS 79 — Words, gestures or acts to insult a woman\'s modesty (old 509): up to 3 years and fine.', 'BNS 79 — మహిళను అవమానించే మాటలు, సైగలు (పాత 509): 3 సంవత్సరాల వరకు, జరిమానా.'),
          s('BNS 85 / 86 — Cruelty by husband or his relatives, including dowry harassment (old 498A): up to 3 years and fine. Cognizable, non-bailable.', 'BNS 85 / 86 — భర్త లేదా అతని బంధువుల క్రూరత్వం, వరకట్న వేధింపులతో సహా (పాత 498A): 3 సంవత్సరాల వరకు, జరిమానా. కాగ్నిజబుల్, నాన్-బెయిలబుల్.'),
          s('BNS 80 — Dowry death within 7 years of marriage (old 304B): 7 years to life.', 'BNS 80 — వివాహమైన 7 సంవత్సరాల్లో వరకట్న మరణం (పాత 304B): 7 సంవత్సరాల నుండి జీవిత ఖైదు.'),
          s('Dowry Prohibition Act — giving or taking dowry: at least 5 years and ₹15,000 fine (or the dowry value, whichever is more).', 'వరకట్న నిషేధ చట్టం — కట్నం ఇవ్వడం లేదా తీసుకోవడం: కనీసం 5 సంవత్సరాలు, ₹15,000 జరిమానా (లేదా కట్నం విలువ, ఏది ఎక్కువైతే అది).'),
          s('BNS 64 — Rape (old 376): at least 10 years up to life. BNS 69 — sex by deceit, e.g. false promise of marriage: up to 10 years.', 'BNS 64 — అత్యాచారం (పాత 376): కనీసం 10 సంవత్సరాల నుండి జీవిత ఖైదు. BNS 69 — మోసంతో, ఉదా: పెళ్లి చేసుకుంటానని తప్పుడు వాగ్దానంతో లైంగిక సంబంధం: 10 సంవత్సరాల వరకు.'),
          s('BNS 82 — Second marriage while the first spouse is alive (bigamy, old 494): up to 7 years.', 'BNS 82 — మొదటి భార్య/భర్త బతికి ఉండగా రెండో పెళ్లి (పాత 494): 7 సంవత్సరాల వరకు.'),
          s('Children under 18: sexual offences are under the POCSO Act (strict, minimum sentences, special courts). Child marriage is a crime under the Prohibition of Child Marriage Act — call 1098.', '18 లోపు పిల్లలు: లైంగిక నేరాలు POCSO చట్టం కింద (కఠినం, కనీస శిక్షలు, ప్రత్యేక కోర్టులు). బాల్య వివాహం బాల్య వివాహ నిషేధ చట్టం కింద నేరం — 1098కి కాల్ చేయండి.'),
        ],
      },
      {
        title: s('Words, online and road', 'మాటలు, ఆన్‌లైన్, రోడ్డు'),
        steps: [
          s('BNS 356 — Defamation, false statements that harm reputation (old 499 / 500): up to 2 years simple imprisonment, fine, or community service. Non-cognizable — you file a complaint before the magistrate.', 'BNS 356 — పరువు నష్టం, ప్రతిష్టకు హాని చేసే తప్పుడు ప్రకటనలు (పాత 499 / 500): 2 సంవత్సరాల వరకు సాధారణ జైలు, జరిమానా లేదా సమాజ సేవ. నాన్-కాగ్నిజబుల్ — మేజిస్ట్రేట్ ముందు ఫిర్యాదు వేయాలి.'),
          s('IT Act 66C — Identity theft, misusing someone\'s password / OTP / Aadhaar online: up to 3 years and ₹1 lakh fine. 66D — cheating by impersonation online (fake calls, fake profiles): up to 3 years and ₹1 lakh.', 'IT చట్టం 66C — ఆన్‌లైన్‌లో ఇతరుల పాస్‌వర్డ్ / OTP / ఆధార్ దుర్వినియోగం: 3 సంవత్సరాల వరకు, ₹1 లక్ష జరిమానా. 66D — ఆన్‌లైన్‌లో వేరొకరిలా నటించి మోసం (నకిలీ కాల్స్, నకిలీ ప్రొఫైల్స్): 3 సంవత్సరాల వరకు, ₹1 లక్ష.'),
          s('IT Act 66E / 67 — Sharing private images without consent, publishing obscene material online: up to 3 years (5 years for sexually explicit content).', 'IT చట్టం 66E / 67 — అనుమతి లేకుండా ప్రైవేట్ చిత్రాలు పంచుకోవడం, ఆన్‌లైన్‌లో అశ్లీలం ప్రచురించడం: 3 సంవత్సరాల వరకు (లైంగిక స్పష్ట కంటెంట్‌కు 5 సంవత్సరాలు).'),
          s('BNS 281 — Rash or negligent driving on a public road (old 279): up to 6 months or ₹1,000 fine or both.', 'BNS 281 — పబ్లిక్ రోడ్డుపై నిర్లక్ష్యంగా డ్రైవింగ్ (పాత 279): 6 నెలల వరకు లేదా ₹1,000 జరిమానా లేదా రెండూ.'),
          s('BNS 106(1) — Causing death by negligence, e.g. road accident (old 304A): up to 5 years and fine.', 'BNS 106(1) — నిర్లక్ష్యంతో మరణానికి కారణం, ఉదా: రోడ్డు ప్రమాదం (పాత 304A): 5 సంవత్సరాల వరకు, జరిమానా.'),
          s('Motor Vehicles Act 185 — Drunk driving: up to 6 months and / or ₹10,000 first time; up to 2 years and ₹15,000 next time.', 'మోటారు వాహనాల చట్టం 185 — తాగి నడపడం: మొదటిసారి 6 నెలల వరకు మరియు / లేదా ₹10,000; మళ్లీ 2 సంవత్సరాల వరకు, ₹15,000.'),
          s('SC/ST (Prevention of Atrocities) Act — insulting, assaulting or boycotting SC/ST persons on caste grounds: special courts, no anticipatory bail, relief money for victims.', 'SC/ST (అత్యాచారాల నిరోధక) చట్టం — కుల కారణంగా SC/ST వ్యక్తులను అవమానించడం, దాడి, బహిష్కరణ: ప్రత్యేక కోర్టులు, ముందస్తు బెయిల్ లేదు, బాధితులకు సహాయ నిధి.'),
        ],
      },
    ],
    costExample: s('Example: a neighbour slaps you in a quarrel → BNS 115(2) (non-cognizable): police register an NCR; to proceed you apply to the magistrate. If he breaks your arm → BNS 117(2): cognizable, police must file an FIR.', 'ఉదాహరణ: గొడవలో పొరుగువాడు చెంపదెబ్బ కొడితే → BNS 115(2) (నాన్-కాగ్నిజబుల్): పోలీసులు NCR నమోదు చేస్తారు; ముందుకు వెళ్లాలంటే మేజిస్ట్రేట్‌కు దరఖాస్తు చేయాలి. చేయి విరగ్గొడితే → BNS 117(2): కాగ్నిజబుల్, పోలీసులు FIR నమోదు చేయాలి.'),
    problems: [
      P(['Police wrote a lighter section than what happened.', 'జరిగిన దానికంటే తేలికపాటి సెక్షన్ పోలీసులు రాశారు.'], ['Give a written statement with the facts and medical certificate to the investigating officer and SP; the section can be altered during investigation. The court can also add charges.', 'వాస్తవాలు, మెడికల్ సర్టిఫికెట్‌తో దర్యాప్తు అధికారికి, ఎస్పీకి రాతపూర్వక ప్రకటన ఇవ్వండి; దర్యాప్తులో సెక్షన్ మార్చవచ్చు. కోర్టు కూడా అభియోగాలు చేర్చగలదు.']),
      P(['A false case has been filed against me.', 'నాపై తప్పుడు కేసు పెట్టారు.'], ['Don\'t panic or run. Collect proof (location, messages, witnesses), take a lawyer (free on 15100), apply for anticipatory bail if the offence is non-bailable, and cooperate with notices. Courts can quash false FIRs and punish false complaints (BNS 248).', 'భయపడకండి, పారిపోకండి. రుజువులు సేకరించండి (లొకేషన్, మెసేజ్‌లు, సాక్షులు), న్యాయవాదిని తీసుకోండి (15100లో ఉచితం), నాన్-బెయిలబుల్ అయితే ముందస్తు బెయిల్‌కు దరఖాస్తు చేయండి, నోటీసులకు సహకరించండి. తప్పుడు FIRలను కోర్టులు రద్దు చేయగలవు, తప్పుడు ఫిర్యాదులను శిక్షించగలవు (BNS 248).']),
    ],
    afterwards: [s('See "Arrest, bail and your rights" and "What happens after an FIR" for the next steps.', 'తదుపరి దశలకు "అరెస్ట్, బెయిల్, మీ హక్కులు", "FIR తర్వాత ఏం జరుగుతుంది" గైడ్‌లు చూడండి.')],
    whereToApply: [s('Police station (FIR); Magistrate court (private complaint); free legal aid 15100', 'పోలీస్ స్టేషన్ (FIR); మేజిస్ట్రేట్ కోర్టు (ప్రైవేట్ ఫిర్యాదు); ఉచిత న్యాయ సహాయం 15100')],
    timeline: s('Depends on the case.', 'కేసును బట్టి.'),
    tips: [
      s('This is a simple summary for understanding — the exact wording of the law and a lawyer\'s advice decide your case.', 'ఇది అర్థం చేసుకోవడానికి సాధారణ సారాంశం — చట్టంలోని ఖచ్చితమైన పదాలు, న్యాయవాది సలహా మీ కేసును నిర్ణయిస్తాయి.'),
      s('Official text of BNS, BNSS and BSA is on indiacode.nic.in.', 'BNS, BNSS, BSA అధికారిక పాఠం indiacode.nic.inలో ఉంది.'),
    ],
    links: [{ label: 'India Code — official text of laws', url: 'https://www.indiacode.nic.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── ARREST & BAIL
  {
    id: 'arrest-bail-rights',
    category: 'law',
    level: 'central',
    title: s('Arrest, bail and your rights with the police', 'అరెస్ట్, బెయిల్, పోలీసుల వద్ద మీ హక్కులు'),
    summary: s(
      'If police call you, arrest you or a family member, you have clear rights under the BNSS: to know the reason, to inform a relative, to meet a lawyer, a medical check, and to be produced before a magistrate within 24 hours. For offences with punishment up to 7 years police should usually give a notice to appear instead of arresting. If the offence is bailable, bail is a right; if not, you apply to the court — and if you fear arrest you can apply for anticipatory bail in advance.',
      'పోలీసులు మిమ్మల్ని పిలిచినా, మిమ్మల్ని లేదా కుటుంబ సభ్యుడిని అరెస్ట్ చేసినా, BNSS కింద మీకు స్పష్టమైన హక్కులు ఉన్నాయి: కారణం తెలుసుకోవడం, బంధువుకు తెలియజేయడం, న్యాయవాదిని కలవడం, వైద్య పరీక్ష, 24 గంటల్లో మేజిస్ట్రేట్ ముందు హాజరు పరచడం. 7 సంవత్సరాల వరకు శిక్ష ఉన్న నేరాలకు పోలీసులు సాధారణంగా అరెస్ట్ బదులు హాజరు నోటీసు ఇవ్వాలి. బెయిలబుల్ నేరమైతే బెయిల్ హక్కు; కాకపోతే కోర్టుకు దరఖాస్తు — అరెస్ట్ భయం ఉంటే ముందుగానే ముందస్తు బెయిల్‌కు దరఖాస్తు చేయవచ్చు.',
    ),
    keywords: ['arrest', 'bail', 'anticipatory bail', 'regular bail', 'police custody', 'remand', 'judicial custody', 'notice 41a', '35(3)', 'surety', 'bail bond', 'police station call', 'అరెస్ట్', 'బెయిల్', 'ముందస్తు బెయిల్', 'రిమాండ్', 'జామీను'],
    whoCanApply: [s('Anyone arrested or called by police, and their family', 'పోలీసులు అరెస్ట్ చేసిన లేదా పిలిచిన ఎవరైనా, వారి కుటుంబం')],
    documents: [
      s('FIR copy / police notice (ask for it; also downloadable on the AP Police citizen portal for most FIRs)', 'FIR కాపీ / పోలీసు నోటీసు (అడగండి; చాలా FIRలు AP పోలీస్ సిటిజన్ పోర్టల్‌లో కూడా డౌన్‌లోడ్ అవుతాయి)'),
      s('For bail: ID and address proof of the accused and sureties, surety\'s property / salary proof if asked', 'బెయిల్‌కు: నిందితుడు, జామీనుదారుల ఐడీ, చిరునామా రుజువు; అడిగితే జామీనుదారుని ఆస్తి / జీతం రుజువు'),
    ],
    fees: [
      fee(s('Legal aid lawyer for bail', 'బెయిల్‌కు న్యాయ సహాయ న్యాయవాది'), s('Free — every police station and court must arrange one if you can\'t afford', 'ఉచితం — భరించలేకపోతే ప్రతి పోలీస్ స్టేషన్, కోర్టు ఏర్పాటు చేయాలి')),
      fee(s('Bail bond', 'బెయిల్ బాండ్'), s('Amount fixed by the court — usually a promise, not cash paid, backed by sureties', 'కోర్టు నిర్ణయించిన మొత్తం — సాధారణంగా నగదు కట్టడం కాదు, జామీనుదారుల హామీతో వాగ్దానం')),
    ],
    steps: [
      s('Ask the reason for arrest and the FIR number.', 'అరెస్ట్ కారణం, FIR నంబర్ అడగండి.'),
      s('Inform family and call a lawyer (or 15100).', 'కుటుంబానికి తెలియజేసి న్యాయవాదిని (లేదా 15100) పిలవండి.'),
      s('Apply for bail at the right court.', 'సరైన కోర్టులో బెయిల్‌కు దరఖాస్తు చేయండి.'),
    ],
    stages: [
      {
        title: s('If police call you for questioning or send a notice', 'పోలీసులు విచారణకు పిలిస్తే లేదా నోటీసు పంపితే'),
        steps: [
          s('Ask for the notice in writing (BNSS 35(3) notice or witness notice under 179). Note the date, time, officer name and FIR number.', 'నోటీసు రాతపూర్వకంగా అడగండి (BNSS 35(3) నోటీసు లేదా 179 కింద సాక్షి నోటీసు). తేదీ, సమయం, అధికారి పేరు, FIR నంబర్ నోట్ చేయండి.'),
          s('Go on the date with a family member or lawyer waiting outside. If you comply with the notice, police should not arrest you unless they record reasons.', 'తేదీన కుటుంబ సభ్యుడు లేదా న్యాయవాది బయట ఉండేలా వెళ్లండి. నోటీసును పాటిస్తే, కారణాలు నమోదు చేయకుండా పోలీసులు అరెస్ట్ చేయకూడదు.'),
          s('Women, men over 60, and people who are ill can\'t be forced to come to the station as a witness — they can be questioned at home.', 'మహిళలు, 60 పైబడిన పురుషులు, అనారోగ్యంతో ఉన్నవారిని సాక్షిగా స్టేషన్‌కు రమ్మని బలవంతం చేయలేరు — ఇంటి వద్దే విచారించవచ్చు.'),
          s('You can\'t be forced to confess. A confession to police is not evidence in court.', 'నేరం ఒప్పుకోమని బలవంతం చేయలేరు. పోలీసులకు ఇచ్చిన ఒప్పుకోలు కోర్టులో సాక్ష్యం కాదు.'),
        ],
      },
      {
        title: s('Your rights on arrest', 'అరెస్ట్ సమయంలో మీ హక్కులు'),
        steps: [
          s('Police must tell you the grounds of arrest and, for bailable offences, that you can get bail (BNSS 47).', 'అరెస్ట్ కారణాలు, బెయిలబుల్ నేరమైతే బెయిల్ పొందవచ్చని పోలీసులు చెప్పాలి (BNSS 47).'),
          s('An arrest memo is made with a witness (family member or local person) and your signature; the arrest must be informed to a relative or friend you name (BNSS 36, 48).', 'సాక్షి (కుటుంబ సభ్యుడు లేదా స్థానికుడు), మీ సంతకంతో అరెస్ట్ మెమో తయారు చేస్తారు; మీరు చెప్పిన బంధువు లేదా స్నేహితునికి అరెస్ట్ తెలియజేయాలి (BNSS 36, 48).'),
          s('You may meet your lawyer during questioning (BNSS 38).', 'విచారణ సమయంలో మీ న్యాయవాదిని కలవవచ్చు (BNSS 38).'),
          s('Medical examination after arrest (BNSS 53); injuries must be recorded.', 'అరెస్ట్ తర్వాత వైద్య పరీక్ష (BNSS 53); గాయాలు నమోదు చేయాలి.'),
          s('Must be produced before a magistrate within 24 hours (excluding travel time) (BNSS 58).', 'ప్రయాణ సమయం మినహా 24 గంటల్లో మేజిస్ట్రేట్ ముందు హాజరుపరచాలి (BNSS 58).'),
          s('A woman is arrested by / in presence of a woman officer, and not after sunset or before sunrise except in exceptional cases with a magistrate\'s permission (BNSS 43).', 'మహిళను మహిళా అధికారి / సమక్షంలోనే అరెస్ట్ చేయాలి, అసాధారణ సందర్భాల్లో మేజిస్ట్రేట్ అనుమతితో తప్ప సూర్యాస్తమయం తర్వాత లేదా సూర్యోదయానికి ముందు కాదు (BNSS 43).'),
          s('Handcuffs only for serious / repeat offenders as the law allows. Torture is a crime — tell the magistrate.', 'చట్టం అనుమతించిన తీవ్ర / పునరావృత నేరస్తులకే సంకెళ్లు. హింస నేరం — మేజిస్ట్రేట్‌కు చెప్పండి.'),
        ],
      },
      {
        title: s('Getting bail', 'బెయిల్ పొందడం'),
        steps: [
          s('Bailable offence: ask for bail at the police station itself (BNSS 478) — give a bond and surety. If refused, the magistrate must grant it.', 'బెయిలబుల్ నేరం: పోలీస్ స్టేషన్‌లోనే బెయిల్ అడగండి (BNSS 478) — బాండ్, జామీను ఇవ్వండి. నిరాకరిస్తే మేజిస్ట్రేట్ ఇవ్వాలి.'),
          s('Non-bailable offence: the lawyer files a bail petition before the magistrate (BNSS 480); for serious offences before the Sessions Court or High Court (BNSS 483).', 'నాన్-బెయిలబుల్ నేరం: న్యాయవాది మేజిస్ట్రేట్ ముందు బెయిల్ పిటిషన్ వేస్తారు (BNSS 480); తీవ్ర నేరాలకు సెషన్స్ కోర్టు లేదా హైకోర్టులో (BNSS 483).'),
          s('Court hears the public prosecutor; grants bail with conditions (appear on dates, don\'t contact witnesses, sometimes sign at the station).', 'కోర్టు పబ్లిక్ ప్రాసిక్యూటర్‌ను విని షరతులతో బెయిల్ ఇస్తుంది (తేదీలకు హాజరు, సాక్షులను సంప్రదించకూడదు, కొన్నిసార్లు స్టేషన్‌లో సంతకం).'),
          s('Sureties sign the bond and show ID / property proof; release order goes to the jail.', 'జామీనుదారులు బాండ్‌పై సంతకం చేసి ఐడీ / ఆస్తి రుజువు చూపిస్తారు; విడుదల ఉత్తర్వు జైలుకు వెళ్తుంది.'),
          s('Default bail: if police don\'t file the chargesheet in 60 days (90 days for offences punishable with 10+ years / life / death), the accused gets bail as a right on applying (BNSS 187).', 'డిఫాల్ట్ బెయిల్: 60 రోజుల్లో (10+ సంవత్సరాలు / జీవిత ఖైదు / మరణ శిక్ష నేరాలకు 90 రోజులు) పోలీసులు చార్జ్‌షీట్ వేయకపోతే, దరఖాస్తు చేస్తే హక్కుగా బెయిల్ (BNSS 187).'),
          s('Undertrial who has spent half the maximum sentence in jail (one-third for first-time offenders) must be released on bail (BNSS 479).', 'గరిష్ట శిక్షలో సగం (మొదటిసారి నేరస్తులకు మూడో వంతు) జైలులో గడిపిన విచారణ ఖైదీని బెయిల్‌పై విడుదల చేయాలి (BNSS 479).'),
        ],
      },
      {
        title: s('Anticipatory bail (before arrest)', 'ముందస్తు బెయిల్ (అరెస్ట్‌కు ముందు)'),
        steps: [
          s('If you fear arrest in a non-bailable case, your lawyer files an anticipatory bail petition in the Sessions Court or High Court (BNSS 482) with the FIR copy and your explanation.', 'నాన్-బెయిలబుల్ కేసులో అరెస్ట్ భయం ఉంటే, FIR కాపీ, మీ వివరణతో న్యాయవాది సెషన్స్ కోర్టు లేదా హైకోర్టులో ముందస్తు బెయిల్ పిటిషన్ వేస్తారు (BNSS 482).'),
          s('If granted, police must release you on bail if they arrest you; follow the conditions (join investigation when called).', 'మంజూరైతే, అరెస్ట్ చేసినా పోలీసులు బెయిల్‌పై విడుదల చేయాలి; షరతులు పాటించండి (పిలిచినప్పుడు దర్యాప్తుకు హాజరు).'),
          s('Not available for some offences (e.g. under the SC/ST Atrocities Act, and rape of a girl under 18).', 'కొన్ని నేరాలకు అందుబాటులో లేదు (ఉదా: SC/ST అత్యాచారాల చట్టం, 18 లోపు అమ్మాయిపై అత్యాచారం).'),
        ],
      },
    ],
    costExample: s('Legal aid lawyer: free. A private lawyer\'s bail fee varies widely — ask in advance, in writing.', 'న్యాయ సహాయ న్యాయవాది: ఉచితం. ప్రైవేట్ న్యాయవాది బెయిల్ ఫీజు చాలా తేడాగా ఉంటుంది — ముందే రాతపూర్వకంగా అడగండి.'),
    problems: [
      P(['Police are not telling where the person is.', 'వ్యక్తి ఎక్కడ ఉన్నారో పోలీసులు చెప్పడం లేదు.'], ['Every district has a police control room that must display names of arrested persons (BNSS 37). Call 112, write to the SP, and a lawyer can file a habeas corpus petition in the High Court.', 'అరెస్ట్ అయినవారి పేర్లు ప్రతి జిల్లా పోలీస్ కంట్రోల్ రూమ్ ప్రదర్శించాలి (BNSS 37). 112కి కాల్ చేయండి, ఎస్పీకి రాయండి, న్యాయవాది హైకోర్టులో హెబియస్ కార్పస్ పిటిషన్ వేయవచ్చు.']),
      P(['Police beat or demand money.', 'పోలీసులు కొడుతున్నారు లేదా డబ్బు అడుగుతున్నారు.'], ['Tell the magistrate at production, ask for medical exam; complain to the SP, ACB 14400, the AP State Human Rights Commission or the Police Complaints Authority.', 'హాజరు సమయంలో మేజిస్ట్రేట్‌కు చెప్పండి, వైద్య పరీక్ష అడగండి; ఎస్పీకి, ACB 14400కి, AP రాష్ట్ర మానవ హక్కుల కమిషన్ లేదా పోలీస్ ఫిర్యాదుల సంస్థకు ఫిర్యాదు చేయండి.']),
    ],
    whereToApply: [s('Magistrate court, Sessions Court or High Court (bail)', 'మేజిస్ట్రేట్ కోర్టు, సెషన్స్ కోర్టు లేదా హైకోర్టు (బెయిల్)'), s('District Legal Services Authority — call 15100', 'జిల్లా న్యాయ సేవాధికార సంస్థ — 15100కి కాల్')],
    timeline: s('Bailable: same day. Non-bailable: from a few days to weeks, depending on the offence and court.', 'బెయిలబుల్: అదే రోజు. నాన్-బెయిలబుల్: నేరం, కోర్టును బట్టి కొన్ని రోజుల నుండి వారాలు.'),
    tips: [s('Never sign blank papers at the station. Read (or have someone read) every statement before signing.', 'స్టేషన్‌లో ఖాళీ కాగితాలపై ఎప్పుడూ సంతకం చేయకండి. సంతకానికి ముందు ప్రతి వాంగ్మూలం చదవండి (లేదా ఎవరితోనైనా చదివించండి).')],
    links: [{ label: 'NALSA — free legal aid', url: 'https://nalsa.gov.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── AFTER FIR / COURT CASE
  {
    id: 'court-case-journey',
    category: 'law',
    level: 'both',
    title: s('After the FIR — investigation, chargesheet, court case and case status', 'FIR తర్వాత — దర్యాప్తు, చార్జ్‌షీట్, కోర్టు కేసు, కేసు స్టేటస్'),
    summary: s(
      'After an FIR, police investigate and file either a chargesheet (case goes to trial) or a closure report. The victim must be told about progress within 90 days, and if police close the case you can object in court. You can check any court case online with its CNR number on eCourts — hearing dates, orders and judgments — without depending on anyone.',
      'FIR తర్వాత పోలీసులు దర్యాప్తు చేసి చార్జ్‌షీట్ (కేసు విచారణకు) లేదా మూసివేత నివేదిక వేస్తారు. 90 రోజుల్లో బాధితునికి పురోగతి తెలియజేయాలి, పోలీసులు కేసు మూసేస్తే కోర్టులో అభ్యంతరం చెప్పవచ్చు. ఏ కోర్టు కేసునైనా CNR నంబర్‌తో eCourtsలో ఆన్‌లైన్‌లో చూడవచ్చు — విచారణ తేదీలు, ఉత్తర్వులు, తీర్పులు — ఎవరిపైనా ఆధారపడకుండా.',
    ),
    keywords: ['case status', 'court case', 'ecourts', 'cnr', 'chargesheet', 'charge sheet', 'final report', 'closure report', 'protest petition', 'summons', 'warrant', 'hearing date', 'next date', 'judgment copy', 'కేసు స్టేటస్', 'కోర్టు కేసు', 'చార్జ్‌షీట్', 'సమన్లు', 'వాయిదా'],
    whoCanApply: [s('Complainants, accused, witnesses and their families', 'ఫిర్యాదుదారులు, నిందితులు, సాక్షులు, వారి కుటుంబాలు')],
    documents: [s('FIR number and police station; or the court case number / CNR number', 'FIR నంబర్, పోలీస్ స్టేషన్; లేదా కోర్టు కేసు నంబర్ / CNR నంబర్')],
    fees: [fee(s('eCourts case status', 'eCourts కేసు స్టేటస్'), s('Free', 'ఉచితం')), fee(s('Certified copy of order / judgment', 'ఉత్తర్వు / తీర్పు సర్టిఫైడ్ కాపీ'), s('Small copying fee at the court', 'కోర్టులో చిన్న కాపీ ఫీజు'))],
    steps: [
      s('Keep the FIR copy and the investigating officer\'s number.', 'FIR కాపీ, దర్యాప్తు అధికారి నంబర్ దాచుకోండి.'),
      s('Track progress; after the chargesheet, track the court case on eCourts.', 'పురోగతి ట్రాక్ చేయండి; చార్జ్‌షీట్ తర్వాత eCourtsలో కోర్టు కేసు ట్రాక్ చేయండి.'),
    ],
    stages: [
      {
        title: s('Investigation', 'దర్యాప్తు'),
        steps: [
          s('Investigating officer (IO) visits the scene, records statements of you and witnesses, collects evidence (medical report, CCTV, phone records). In offences punishable with 7+ years, forensic experts must visit the scene.', 'దర్యాప్తు అధికారి (IO) సంఘటన స్థలానికి వెళ్లి, మీ, సాక్షుల వాంగ్మూలాలు నమోదు చేసి, రుజువులు సేకరిస్తారు (మెడికల్ రిపోర్ట్, CCTV, ఫోన్ రికార్డులు). 7+ సంవత్సరాల శిక్ష నేరాల్లో ఫోరెన్సిక్ నిపుణులు స్థలాన్ని సందర్శించాలి.'),
          s('Give the IO all proof in writing and keep a copy with their acknowledgement.', 'అన్ని రుజువులు IOకు రాతపూర్వకంగా ఇచ్చి వారి అక్నాలెడ్జ్‌మెంట్‌తో కాపీ దాచుకోండి.'),
          s('Within 90 days police must inform the victim of the progress (BNSS 193). Ask in writing if you hear nothing.', '90 రోజుల్లో పురోగతిని పోలీసులు బాధితునికి తెలియజేయాలి (BNSS 193). ఏమీ తెలియకపోతే రాతపూర్వకంగా అడగండి.'),
          s('Women victims of sexual offences: statement can be recorded by a woman officer, at home, and before a magistrate (BNSS 183). Medical exam free within 24 hours.', 'లైంగిక నేరాల బాధితులైన మహిళలు: వాంగ్మూలం మహిళా అధికారి, ఇంటి వద్ద, మేజిస్ట్రేట్ ముందు నమోదు చేయవచ్చు (BNSS 183). 24 గంటల్లో ఉచిత వైద్య పరీక్ష.'),
        ],
      },
      {
        title: s('Chargesheet or closure', 'చార్జ్‌షీట్ లేదా మూసివేత'),
        steps: [
          s('Chargesheet: police file the final report in court listing accused, evidence and witnesses; the court "takes cognizance" and issues summons.', 'చార్జ్‌షీట్: నిందితులు, రుజువులు, సాక్షుల జాబితాతో పోలీసులు కోర్టులో తుది నివేదిక వేస్తారు; కోర్టు "కాగ్నిజెన్స్" తీసుకుని సమన్లు జారీ చేస్తుంది.'),
          s('Closure ("false" / "no evidence"): the court must give you notice. File a protest petition with your evidence — the magistrate can order further investigation or proceed on your complaint.', 'మూసివేత ("తప్పుడు" / "రుజువు లేదు"): కోర్టు మీకు నోటీసు ఇవ్వాలి. మీ రుజువులతో ప్రొటెస్ట్ పిటిషన్ వేయండి — మేజిస్ట్రేట్ తదుపరి దర్యాప్తు ఆదేశించవచ్చు లేదా మీ ఫిర్యాదుపై కొనసాగవచ్చు.'),
          s('The court supplies free copies of the police report and documents to the accused and to the victim represented by a lawyer (BNSS 230).', 'పోలీసు నివేదిక, పత్రాల ఉచిత కాపీలను కోర్టు నిందితునికి, న్యాయవాది ద్వారా ప్రాతినిధ్యం వహించే బాధితునికి ఇస్తుంది (BNSS 230).'),
        ],
      },
      {
        title: s('Trial', 'విచారణ'),
        steps: [
          s('Charges are framed; the public prosecutor presents witnesses for the victim (you may also engage your own lawyer to assist).', 'అభియోగాలు నమోదు; బాధితుని తరఫున పబ్లిక్ ప్రాసిక్యూటర్ సాక్షులను హాజరుపరుస్తారు (సహాయానికి మీ సొంత న్యాయవాదిని కూడా పెట్టుకోవచ్చు).'),
          s('Witness summons: attend on the date — courts can issue warrants for repeated absence. Witness travel expenses can be claimed at court. Many hearings now allow video appearance.', 'సాక్షి సమన్లు: తేదీకి హాజరవ్వండి — పదే పదే గైర్హాజరైతే కోర్టులు వారెంట్ ఇవ్వగలవు. ప్రయాణ ఖర్చులు కోర్టులో క్లెయిమ్ చేయవచ్చు. చాలా విచారణలకు ఇప్పుడు వీడియో హాజరు అనుమతి.'),
          s('Judgment: conviction or acquittal. Victims can appeal against acquittal or inadequate compensation (BNSS 413). Victim compensation is available under the AP Victim Compensation Scheme through the DLSA.', 'తీర్పు: శిక్ష లేదా నిర్దోషి. నిర్దోషిగా విడుదల లేదా తగిన పరిహారం లేకపోతే బాధితులు అప్పీల్ చేయవచ్చు (BNSS 413). DLSA ద్వారా AP బాధితుల పరిహార పథకం కింద పరిహారం అందుబాటులో ఉంది.'),
        ],
      },
      {
        title: s('Check the case online (eCourts)', 'కేసు ఆన్‌లైన్‌లో చూడడం (eCourts)'),
        steps: [
          s('Install the "eCourts Services" app or open services.ecourts.gov.in.', '"eCourts Services" యాప్ ఇన్‌స్టాల్ చేయండి లేదా services.ecourts.gov.in తెరవండి.'),
          s('Search by CNR number (16 characters, on any court paper), or by party name / FIR number / case number after choosing State → District → Court complex.', 'CNR నంబర్ (16 అక్షరాలు, ఏ కోర్టు కాగితంపైనైనా) ద్వారా, లేదా రాష్ట్రం → జిల్లా → కోర్టు సముదాయం ఎంచుకుని పక్షం పేరు / FIR నంబర్ / కేసు నంబర్ ద్వారా వెతకండి.'),
          s('See next hearing date, stage, daily orders and the judgment PDF. Save the case in "My Cases" to get updates.', 'తదుపరి విచారణ తేదీ, దశ, రోజువారీ ఉత్తర్వులు, తీర్పు PDF చూడండి. అప్‌డేట్ల కోసం "My Cases"లో సేవ్ చేయండి.'),
          s('High Court cases: aphc.gov.in → case status.', 'హైకోర్టు కేసులు: aphc.gov.in → case status.'),
        ],
      },
    ],
    costExample: s('Case status online: free. Certified copy of a 10-page judgment: a small per-page fee at the copying section.', 'ఆన్‌లైన్ కేసు స్టేటస్: ఉచితం. 10 పేజీల తీర్పు సర్టిఫైడ్ కాపీ: కాపీయింగ్ విభాగంలో పేజీకి చిన్న ఫీజు.'),
    problems: [
      P(['Police not investigating.', 'పోలీసులు దర్యాప్తు చేయడం లేదు.'], ['Write to the SP / Commissioner; then apply to the magistrate (BNSS 175(3)) to direct investigation.', 'ఎస్పీ / కమిషనర్‌కు రాయండి; తర్వాత దర్యాప్తు ఆదేశించమని మేజిస్ట్రేట్‌కు (BNSS 175(3)) దరఖాస్తు చేయండి.']),
      P(['Case keeps getting adjourned.', 'కేసు పదే పదే వాయిదా పడుతోంది.'], ['Ask your lawyer to oppose unnecessary adjournments and request day-to-day hearing of witnesses. Compoundable cases can be settled in Lok Adalat.', 'అనవసర వాయిదాలను వ్యతిరేకించమని, సాక్షుల రోజువారీ విచారణ కోరమని మీ న్యాయవాదిని అడగండి. రాజీపడదగిన కేసులను లోక్ అదాలత్‌లో పరిష్కరించవచ్చు.']),
    ],
    whereToApply: [s('Investigating officer / SP office; jurisdictional court', 'దర్యాప్తు అధికారి / ఎస్పీ కార్యాలయం; సంబంధిత కోర్టు'), s('services.ecourts.gov.in, eCourts Services app', 'services.ecourts.gov.in, eCourts Services యాప్')],
    timeline: s('Investigation must be done without delay (within 2 months for rape cases); judgment within 45 days of arguments. Real trials often take longer.', 'దర్యాప్తు ఆలస్యం లేకుండా పూర్తి కావాలి (అత్యాచార కేసుల్లో 2 నెలల్లో); వాదనల తర్వాత 45 రోజుల్లో తీర్పు. అసలు విచారణలు తరచూ ఎక్కువ సమయం.'),
    tips: [s('Note every hearing date in a diary with what happened. Missing dates is the biggest reason cases drag.', 'ప్రతి విచారణ తేదీ, ఏం జరిగిందో డైరీలో రాయండి. తేదీలు మిస్ కావడమే కేసులు సాగడానికి పెద్ద కారణం.')],
    links: [{ label: 'eCourts services', url: 'https://services.ecourts.gov.in' }, { label: 'AP High Court', url: 'https://aphc.gov.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── CHEQUE BOUNCE
  {
    id: 'cheque-bounce',
    category: 'law',
    level: 'central',
    title: s('Cheque bounce case — Section 138 (step by step with deadlines)', 'చెక్ బౌన్స్ కేసు — సెక్షన్ 138 (గడువులతో దశలవారీగా)'),
    summary: s(
      'If someone pays you with a cheque and it bounces for "insufficient funds" or "payment stopped", it is a criminal offence under Section 138 of the Negotiable Instruments Act — punishable with up to 2 years and / or a fine up to twice the cheque amount. The deadlines are strict: legal notice within 30 days of the bank memo, wait 15 days, then file the complaint within the next 30 days.',
      'ఎవరైనా చెక్ ఇచ్చి అది "నిధులు లేవు" లేదా "చెల్లింపు ఆపారు" అని బౌన్స్ అయితే, అది నెగోషియబుల్ ఇన్‌స్ట్రుమెంట్స్ చట్టం సెక్షన్ 138 కింద క్రిమినల్ నేరం — 2 సంవత్సరాల వరకు జైలు మరియు / లేదా చెక్ మొత్తానికి రెండింతల వరకు జరిమానా. గడువులు కఠినం: బ్యాంక్ మెమో వచ్చిన 30 రోజుల్లో లీగల్ నోటీసు, 15 రోజులు వేచి, తర్వాతి 30 రోజుల్లో ఫిర్యాదు.',
    ),
    keywords: ['cheque bounce', 'check bounce', 'cheque return', 'section 138', '138', 'ni act', 'legal notice', 'dishonour', 'insufficient funds', 'చెక్ బౌన్స్', 'చెక్కు', 'లీగల్ నోటీసు'],
    whoCanApply: [s('The person / business in whose favour the cheque was written (payee)', 'ఎవరి పేరుపై చెక్ రాశారో ఆ వ్యక్తి / వ్యాపారం (పేయీ)')],
    documents: [
      s('Original bounced cheque and the bank\'s return memo', 'బౌన్స్ అయిన అసలు చెక్, బ్యాంక్ రిటర్న్ మెమో'),
      s('Proof of the debt (loan agreement, bills, messages)', 'అప్పు రుజువు (రుణ ఒప్పందం, బిల్లులు, మెసేజ్‌లు)'),
      s('Copy of legal notice, postal receipts and delivery proof', 'లీగల్ నోటీసు కాపీ, పోస్టల్ రసీదులు, డెలివరీ రుజువు'),
    ],
    fees: [fee(s('Court fee', 'కోర్టు ఫీజు'), s('Small, based on the cheque amount', 'చెక్ మొత్తాన్ని బట్టి చిన్నది')), fee(s('Lawyer for notice and case', 'నోటీసు, కేసుకు న్యాయవాది'), s('Private fee; free legal aid if eligible', 'ప్రైవేట్ ఫీజు; అర్హులకు ఉచిత న్యాయ సహాయం'))],
    steps: [
      s('Present the cheque within 3 months of its date.', 'చెక్ తేదీ నుండి 3 నెలల్లో బ్యాంకులో వేయండి.'),
      s('Send a legal notice within 30 days of the bounce memo.', 'బౌన్స్ మెమో వచ్చిన 30 రోజుల్లో లీగల్ నోటీసు పంపండి.'),
      s('If not paid in 15 days, file a complaint within the next 30 days.', '15 రోజుల్లో చెల్లించకపోతే, తర్వాతి 30 రోజుల్లో ఫిర్యాదు వేయండి.'),
    ],
    stages: [
      {
        title: s('Day 0 — cheque bounces', '0వ రోజు — చెక్ బౌన్స్'),
        steps: [
          s('Make sure the cheque was deposited within 3 months of the date written on it.', 'చెక్‌పై రాసిన తేదీ నుండి 3 నెలల్లో వేశారని నిర్ధారించుకోండి.'),
          s('Collect the original cheque and the bank return memo showing the reason ("funds insufficient", "exceeds arrangement", "payment stopped by drawer", "account closed").', 'కారణం చూపే బ్యాంక్ రిటర్న్ మెమో ("funds insufficient", "exceeds arrangement", "payment stopped by drawer", "account closed"), అసలు చెక్ తీసుకోండి.'),
          s('You may re-present the cheque within its 3-month validity; the 30-day notice clock runs from the memo you act on.', '3 నెలల చెల్లుబాటులో చెక్‌ను మళ్లీ వేయవచ్చు; మీరు చర్య తీసుకునే మెమో నుండి 30 రోజుల గడువు లెక్కిస్తారు.'),
        ],
      },
      {
        title: s('Within 30 days — legal notice', '30 రోజుల్లో — లీగల్ నోటీసు'),
        steps: [
          s('Send a written demand notice to the person who signed the cheque: cheque number, date, amount, bank, return reason, and a demand to pay within 15 days.', 'చెక్‌పై సంతకం చేసిన వ్యక్తికి రాతపూర్వక డిమాండ్ నోటీసు: చెక్ నంబర్, తేదీ, మొత్తం, బ్యాంక్, తిరిగి వచ్చిన కారణం, 15 రోజుల్లో చెల్లించాలని డిమాండ్.'),
          s('Send by registered post / speed post (and also email / WhatsApp). Keep receipts and the tracking / delivery proof.', 'రిజిస్టర్డ్ / స్పీడ్ పోస్ట్ ద్వారా పంపండి (ఇమెయిల్ / వాట్సాప్ కూడా). రసీదులు, ట్రాకింగ్ / డెలివరీ రుజువు దాచుకోండి.'),
        ],
      },
      {
        title: s('15 days to pay, then 30 days to file', 'చెల్లించడానికి 15 రోజులు, తర్వాత దాఖలుకు 30 రోజులు'),
        steps: [
          s('Count 15 days from the date the notice was received (or returned "refused" / "not claimed").', 'నోటీసు అందిన తేదీ (లేదా "refused" / "not claimed"గా తిరిగి వచ్చిన తేదీ) నుండి 15 రోజులు లెక్కించండి.'),
          s('If not paid, file the complaint within the next 30 days before the Magistrate where your (payee\'s) bank branch is.', 'చెల్లించకపోతే, తర్వాతి 30 రోజుల్లో మీ (పేయీ) బ్యాంక్ బ్రాంచ్ ఉన్న ప్రాంత మేజిస్ట్రేట్ ముందు ఫిర్యాదు వేయండి.'),
          s('Complaint with affidavit, original cheque, memo, notice, postal proofs and debt proof is filed by you or your lawyer.', 'అఫిడవిట్, అసలు చెక్, మెమో, నోటీసు, పోస్టల్ రుజువులు, అప్పు రుజువుతో మీరు లేదా న్యాయవాది ఫిర్యాదు వేస్తారు.'),
          s('Missed the 30 days? You can ask the court to condone the delay with good reasons — but do it on time.', '30 రోజులు మిస్సయ్యారా? మంచి కారణాలతో ఆలస్యం మన్నించమని కోర్టును కోరవచ్చు — కానీ సమయానికే చేయండి.'),
        ],
      },
      {
        title: s('Court', 'కోర్టు'),
        steps: [
          s('Court issues summons. At the first hearing, the court can order the accused to pay 20% of the cheque amount as interim compensation (Section 143A).', 'కోర్టు సమన్లు జారీ చేస్తుంది. మొదటి విచారణలో చెక్ మొత్తంలో 20% మధ్యంతర పరిహారం చెల్లించమని కోర్టు ఆదేశించవచ్చు (సెక్షన్ 143A).'),
          s('Many cases settle — the court or Lok Adalat records the settlement and the case is closed.', 'చాలా కేసులు రాజీ అవుతాయి — కోర్టు లేదా లోక్ అదాలత్ రాజీ నమోదు చేసి కేసు ముగిస్తుంది.'),
          s('On conviction: up to 2 years and / or fine up to twice the amount; compensation goes to you. On appeal, the accused usually must deposit at least 20% more.', 'శిక్ష పడితే: 2 సంవత్సరాల వరకు మరియు / లేదా రెండింతల వరకు జరిమానా; పరిహారం మీకు. అప్పీల్‌లో నిందితుడు సాధారణంగా కనీసం మరో 20% జమ చేయాలి.'),
        ],
      },
    ],
    costExample: s('Cheque of ₹2,00,000 bounced on 1 March: notice by 31 March; if received 5 April, payment due by 20 April; complaint by 20 May. Court can order ₹40,000 interim compensation.', '1 మార్చిన ₹2,00,000 చెక్ బౌన్స్: 31 మార్చిలోపు నోటీసు; 5 ఏప్రిల్‌న అందితే 20 ఏప్రిల్‌లోపు చెల్లించాలి; 20 మేలోపు ఫిర్యాదు. కోర్టు ₹40,000 మధ్యంతర పరిహారం ఆదేశించవచ్చు.'),
    problems: [P(['Cheque was given as "security", not for a debt.', 'అప్పుకు కాదు, "సెక్యూరిటీ"గా చెక్ ఇచ్చారు.'], ['If a debt was due when it was presented, courts generally treat it under Section 138 — get legal advice on your facts.', 'వేసినప్పుడు అప్పు బకాయి ఉంటే, కోర్టులు సాధారణంగా సెక్షన్ 138 కిందే పరిగణిస్తాయి — మీ వాస్తవాలపై న్యాయ సలహా తీసుకోండి.'])],
    whereToApply: [s('Magistrate court where the payee\'s bank branch is', 'పేయీ బ్యాంక్ బ్రాంచ్ ఉన్న ప్రాంత మేజిస్ట్రేట్ కోర్టు'), s('Lok Adalat for settlement', 'రాజీకి లోక్ అదాలత్')],
    timeline: s('Notice to filing: about 2–3 months. Trial: months to a few years; settlements are faster.', 'నోటీసు నుండి దాఖలు: సుమారు 2–3 నెలలు. విచారణ: నెలల నుండి కొన్ని సంవత్సరాలు; రాజీలు వేగం.'),
    tips: [s('Never give signed blank cheques. If you take a cheque, write down why it was given and keep messages.', 'సంతకం చేసిన ఖాళీ చెక్కులు ఎప్పుడూ ఇవ్వకండి. చెక్ తీసుకుంటే, ఎందుకు ఇచ్చారో రాసి మెసేజ్‌లు దాచుకోండి.')],
    links: [{ label: 'eCourts services', url: 'https://services.ecourts.gov.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── DIVORCE & MAINTENANCE
  {
    id: 'divorce-maintenance',
    category: 'law',
    level: 'central',
    title: s('Divorce, maintenance and child custody — Family Court', 'విడాకులు, భరణం, పిల్లల కస్టడీ — ఫ్యామిలీ కోర్టు'),
    summary: s(
      'Family disputes go to the Family Court (or the district court where there is none). A wife, children and parents who can\'t maintain themselves can claim monthly maintenance under BNSS 144 (old CrPC 125) — quickly and cheaply. Divorce by mutual consent takes about 6 months (the court can waive the wait); a contested divorce needs grounds such as cruelty or desertion. Custody is decided on the child\'s welfare. Free lawyers are available for women through Legal Services (15100).',
      'కుటుంబ వివాదాలు ఫ్యామిలీ కోర్టుకు (లేకపోతే జిల్లా కోర్టుకు) వెళ్తాయి. తమను తాము పోషించుకోలేని భార్య, పిల్లలు, తల్లిదండ్రులు BNSS 144 (పాత CrPC 125) కింద నెలవారీ భరణం కోరవచ్చు — త్వరగా, తక్కువ ఖర్చుతో. పరస్పర అంగీకార విడాకులు సుమారు 6 నెలలు (కోర్టు నిరీక్షణ మాఫీ చేయవచ్చు); వివాదాస్పద విడాకులకు క్రూరత్వం లేదా వదిలివేత వంటి కారణాలు కావాలి. పిల్లల సంక్షేమం ఆధారంగా కస్టడీ నిర్ణయిస్తారు. మహిళలకు న్యాయ సేవల (15100) ద్వారా ఉచిత న్యాయవాదులు.',
    ),
    keywords: ['divorce', 'mutual divorce', 'maintenance', 'alimony', '125', '144', 'custody', 'child custody', 'family court', 'separation', 'restitution', 'విడాకులు', 'భరణం', 'కస్టడీ', 'ఫ్యామిలీ కోర్టు'],
    whoCanApply: [s('Married persons; wives, children and parents for maintenance', 'వివాహితులు; భరణానికి భార్యలు, పిల్లలు, తల్లిదండ్రులు')],
    documents: [
      s('Marriage certificate or wedding photos / invitation', 'వివాహ ధృవీకరణ లేదా పెళ్లి ఫోటోలు / ఆహ్వాన పత్రిక'),
      s('Address and ID proof of both; children\'s birth certificates', 'ఇద్దరి చిరునామా, ఐడీ రుజువు; పిల్లల జనన ధృవీకరణలు'),
      s('Income proof of the husband if known (salary slip, property, business); your expenses list', 'తెలిస్తే భర్త ఆదాయ రుజువు (జీతం స్లిప్, ఆస్తి, వ్యాపారం); మీ ఖర్చుల జాబితా'),
      s('Evidence of cruelty / desertion if contested (medical records, complaints, messages)', 'వివాదాస్పదమైతే క్రూరత్వం / వదిలివేత రుజువులు (మెడికల్ రికార్డులు, ఫిర్యాదులు, మెసేజ్‌లు)'),
    ],
    fees: [fee(s('Family Court fee', 'ఫ్యామిలీ కోర్టు ఫీజు'), s('Very small; free lawyer for women via DLSA', 'చాలా తక్కువ; DLSA ద్వారా మహిళలకు ఉచిత న్యాయవాది'))],
    steps: [
      s('Try counselling / mediation first (Family Court has counsellors).', 'ముందుగా కౌన్సెలింగ్ / మధ్యవర్తిత్వం ప్రయత్నించండి (ఫ్యామిలీ కోర్టులో కౌన్సెలర్లు ఉంటారు).'),
      s('File the right petition: maintenance, mutual divorce, contested divorce or custody.', 'సరైన పిటిషన్ వేయండి: భరణం, పరస్పర విడాకులు, వివాదాస్పద విడాకులు లేదా కస్టడీ.'),
    ],
    stages: [
      {
        title: s('Maintenance (monthly money)', 'భరణం (నెలవారీ డబ్బు)'),
        steps: [
          s('File a petition under BNSS 144 before the Family Court / Magistrate where you live: who you are, why you can\'t maintain yourself, the husband\'s income, amount asked.', 'మీరు నివసించే ప్రాంత ఫ్యామిలీ కోర్టు / మేజిస్ట్రేట్ ముందు BNSS 144 కింద పిటిషన్: మీరెవరు, ఎందుకు పోషించుకోలేరు, భర్త ఆదాయం, కోరిన మొత్తం.'),
          s('Both sides file an affidavit of assets and liabilities (Supreme Court rule).', 'ఇరువైపులా ఆస్తులు, అప్పుల అఫిడవిట్ వేస్తారు (సుప్రీంకోర్టు నియమం).'),
          s('Ask for interim maintenance from the first hearing — the court can order it while the case runs.', 'మొదటి విచారణ నుండే మధ్యంతర భరణం అడగండి — కేసు జరుగుతుండగానే కోర్టు ఆదేశించవచ్చు.'),
          s('If not paid, file an execution petition — the court can attach salary or issue a warrant.', 'చెల్లించకపోతే ఎగ్జిక్యూషన్ పిటిషన్ వేయండి — కోర్టు జీతం జప్తు చేయవచ్చు లేదా వారెంట్ ఇవ్వవచ్చు.'),
        ],
        note: s('Also available: maintenance and residence orders under the Domestic Violence Act (see Women protection guide).', 'అలాగే: గృహ హింస చట్టం కింద భరణం, నివాస ఉత్తర్వులు (మహిళా రక్షణ గైడ్ చూడండి).'),
      },
      {
        title: s('Divorce by mutual consent', 'పరస్పర అంగీకార విడాకులు'),
        steps: [
          s('Both must have lived separately for at least 1 year and agree on everything: alimony, stridhan / jewellery, custody, visitation.', 'ఇద్దరూ కనీసం 1 సంవత్సరం విడిగా ఉండి అన్నింటిపై అంగీకరించాలి: భరణం, స్త్రీధనం / నగలు, కస్టడీ, చూసే హక్కు.'),
          s('First motion: joint petition (Hindu Marriage Act 13B / Special Marriage Act 28; other laws for other religions) filed together; both appear and record statements.', 'మొదటి మోషన్: ఉమ్మడి పిటిషన్ (హిందూ వివాహ చట్టం 13B / ప్రత్యేక వివాహ చట్టం 28; ఇతర మతాలకు ఇతర చట్టాలు) కలిసి వేస్తారు; ఇద్దరూ హాజరై వాంగ్మూలం.'),
          s('Wait 6 months (the court can waive it if all issues are settled), then second motion — both confirm; decree of divorce is granted.', '6 నెలలు వేచి (అన్ని సమస్యలు పరిష్కారమైతే కోర్టు మాఫీ చేయవచ్చు), తర్వాత రెండో మోషన్ — ఇద్దరూ నిర్ధారిస్తారు; విడాకుల డిక్రీ ఇస్తారు.'),
        ],
      },
      {
        title: s('Contested divorce', 'వివాదాస్పద విడాకులు'),
        steps: [
          s('Grounds include cruelty, desertion for 2+ years, adultery, conversion, serious mental illness. File with evidence.', 'కారణాలు: క్రూరత్వం, 2+ సంవత్సరాలు వదిలివేత, వ్యభిచారం, మత మార్పిడి, తీవ్ర మానసిక వ్యాధి. రుజువులతో వేయండి.'),
          s('Court sends to mediation; if it fails, evidence and arguments; decree. This can take a few years.', 'కోర్టు మధ్యవర్తిత్వానికి పంపుతుంది; విఫలమైతే సాక్ష్యం, వాదనలు; డిక్రీ. దీనికి కొన్ని సంవత్సరాలు పట్టవచ్చు.'),
        ],
      },
      {
        title: s('Child custody', 'పిల్లల కస్టడీ'),
        steps: [
          s('File a guardianship / custody petition (Guardians and Wards Act, or within the divorce case). Young children usually stay with the mother; the court looks at the child\'s welfare, schooling and wishes of older children.', 'గార్డియన్‌షిప్ / కస్టడీ పిటిషన్ వేయండి (గార్డియన్స్ అండ్ వార్డ్స్ చట్టం, లేదా విడాకుల కేసులోనే). చిన్న పిల్లలు సాధారణంగా తల్లి వద్ద; పిల్లల సంక్షేమం, చదువు, పెద్ద పిల్లల ఇష్టం కోర్టు చూస్తుంది.'),
          s('The other parent usually gets visitation rights.', 'మరో తల్లి/తండ్రికి సాధారణంగా చూసే హక్కు ఉంటుంది.'),
        ],
      },
    ],
    costExample: s('Maintenance petition with a legal-aid lawyer: almost no cost. Mutual divorce through a private lawyer: lawyer\'s fee + small court fee.', 'న్యాయ సహాయ న్యాయవాదితో భరణ పిటిషన్: దాదాపు ఖర్చు లేదు. ప్రైవేట్ న్యాయవాది ద్వారా పరస్పర విడాకులు: న్యాయవాది ఫీజు + చిన్న కోర్టు ఫీజు.'),
    problems: [P(['Husband hides income.', 'భర్త ఆదాయం దాస్తున్నాడు.'], ['Ask the court to summon his bank statements, salary records and IT returns; the asset affidavit is compulsory.', 'అతని బ్యాంక్ స్టేట్‌మెంట్లు, జీతం రికార్డులు, IT రిటర్న్‌లు తెప్పించమని కోర్టును కోరండి; ఆస్తి అఫిడవిట్ తప్పనిసరి.'])],
    afterwards: [s('After divorce, update your name / marital status in Aadhaar, bank and passport as needed, and register any settlement of property.', 'విడాకుల తర్వాత అవసరమైతే ఆధార్, బ్యాంక్, పాస్‌పోర్ట్‌లో పేరు / వైవాహిక స్థితి అప్‌డేట్ చేయండి, ఆస్తి సెటిల్‌మెంట్ నమోదు చేయండి.')],
    whereToApply: [s('Family Court of your district; DLSA (15100) for a free lawyer', 'మీ జిల్లా ఫ్యామిలీ కోర్టు; ఉచిత న్యాయవాదికి DLSA (15100)')],
    timeline: s('Maintenance: interim in weeks to months. Mutual divorce: ~6 months (less if waived). Contested: years.', 'భరణం: మధ్యంతరం వారాల నుండి నెలల్లో. పరస్పర విడాకులు: ~6 నెలలు (మాఫీ అయితే తక్కువ). వివాదాస్పదం: సంవత్సరాలు.'),
    tips: [s('Keep copies of every message, payment and medical record. Never leave the marital home without your documents and children\'s certificates.', 'ప్రతి మెసేజ్, చెల్లింపు, మెడికల్ రికార్డు కాపీలు దాచుకోండి. మీ పత్రాలు, పిల్లల సర్టిఫికెట్లు లేకుండా ఇల్లు వదలకండి.')],
    links: [{ label: 'NALSA — free legal aid', url: 'https://nalsa.gov.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── PROPERTY DISPUTES
  {
    id: 'property-disputes',
    category: 'law',
    level: 'state',
    title: s('Land / property disputes — encroachment, boundary, partition, fake documents', 'భూమి / ఆస్తి వివాదాలు — ఆక్రమణ, హద్దులు, పంపకం, నకిలీ పత్రాలు'),
    summary: s(
      'Most land fights are solved faster through revenue and survey offices than courts: get your records right, get the land measured, then complain. If someone encroaches or threatens to dispossess you, a civil court can give an injunction (stay). Family property is divided by a registered partition deed if everyone agrees, or a partition suit if not. Forged sale deeds are a crime — complain to police and file a civil suit to cancel the deed.',
      'చాలా భూ వివాదాలు కోర్టుల కంటే రెవెన్యూ, సర్వే కార్యాలయాల ద్వారా వేగంగా పరిష్కారమవుతాయి: మీ రికార్డులు సరిచేసుకోండి, భూమి కొలిపించండి, తర్వాత ఫిర్యాదు చేయండి. ఎవరైనా ఆక్రమించినా, బెదిరించినా సివిల్ కోర్టు ఇంజంక్షన్ (స్టే) ఇవ్వగలదు. అందరూ అంగీకరిస్తే నమోదిత పంపక దస్తావేజుతో, లేకపోతే పంపక దావాతో కుటుంబ ఆస్తి విభజిస్తారు. నకిలీ సేల్ డీడ్‌లు నేరం — పోలీసులకు ఫిర్యాదు చేసి డీడ్ రద్దుకు సివిల్ దావా వేయండి.',
    ),
    keywords: ['land dispute', 'property dispute', 'encroachment', 'boundary', 'boundary dispute', 'partition', 'family property', 'share', 'injunction', 'stay', 'civil suit', 'fake documents', 'forged deed', 'kabza', 'ఆక్రమణ', 'హద్దు', 'పంపకం', 'భూ వివాదం', 'ఆస్తి వివాదం', 'కబ్జా', 'వాటా'],
    whoCanApply: [s('Owners, co-owners and legal heirs', 'యజమానులు, సహ యజమానులు, చట్టపరమైన వారసులు')],
    documents: [
      s('Title deeds and link documents; EC for 30 years', 'టైటిల్ దస్తావేజులు, లింక్ పత్రాలు; 30 సంవత్సరాల EC'),
      s('1B / Adangal / passbook, FMB / survey sketch, tax receipts', '1B / అడంగల్ / పాస్‌బుక్, FMB / సర్వే స్కెచ్, పన్ను రసీదులు'),
      s('Photos of the site, any written threats / messages', 'స్థలం ఫోటోలు, రాతపూర్వక బెదిరింపులు / మెసేజ్‌లు'),
    ],
    fees: [
      fee(s('Survey / measurement application', 'సర్వే / కొలత దరఖాస్తు'), s('Small fee at the Secretariat / MeeSeva', 'సచివాలయం / మీసేవలో చిన్న ఫీజు')),
      fee(s('Civil suit court fee', 'సివిల్ దావా కోర్టు ఫీజు'), s('Based on the property value / relief claimed (AP Court Fees Act)', 'ఆస్తి విలువ / కోరిన ఉపశమనం ఆధారంగా (AP కోర్టు ఫీజుల చట్టం)')),
    ],
    steps: [
      s('Fix records, get the land measured, complain to revenue / police, then go to civil court if needed.', 'రికార్డులు సరిచేసి, భూమి కొలిపించి, రెవెన్యూ / పోలీసులకు ఫిర్యాదు చేసి, అవసరమైతే సివిల్ కోర్టుకు వెళ్లండి.'),
    ],
    stages: [
      {
        title: s('Step 1 — make your papers strong', '1వ దశ — పత్రాలు బలంగా చేయడం'),
        steps: [
          s('Check that 1B / Adangal shows your name and the right extent (see Land records guide). If not, apply for mutation / correction first.', '1B / అడంగల్‌లో మీ పేరు, సరైన విస్తీర్ణం ఉందో చూడండి (భూ రికార్డుల గైడ్). లేకపోతే ముందు మ్యుటేషన్ / సవరణకు దరఖాస్తు చేయండి.'),
          s('Get a 30-year EC and certified copies of all deeds from the SRO.', 'SRO నుండి 30 సంవత్సరాల EC, అన్ని దస్తావేజుల సర్టిఫైడ్ కాపీలు తీసుకోండి.'),
          s('Check the survey number isn\'t in the 22A prohibited list.', 'సర్వే నంబర్ 22A నిషేధిత జాబితాలో లేదని చూడండి.'),
        ],
      },
      {
        title: s('Step 2 — boundary / encroachment: get it measured', '2వ దశ — హద్దు / ఆక్రమణ: కొలిపించడం'),
        steps: [
          s('Apply for land survey / boundary fixing at the Village Secretariat or MeeSeva (F-line petition). Notices go to neighbours.', 'గ్రామ సచివాలయం లేదా మీసేవలో భూ సర్వే / హద్దు నిర్ధారణకు దరఖాస్తు (F-లైన్ పిటిషన్). పొరుగువారికి నోటీసులు వెళ్తాయి.'),
          s('The surveyor measures with the FMB sketch, fixes stones and gives a report / sketch — keep it.', 'సర్వేయర్ FMB స్కెచ్‌తో కొలిచి, రాళ్లు పాతి నివేదిక / స్కెచ్ ఇస్తారు — దాచుకోండి.'),
          s('Encroachment on your land confirmed: give a complaint with the survey report to the Tahsildar / police. Encroachment on government land: complain to the Tahsildar or on PGRS.', 'మీ భూమిలో ఆక్రమణ నిర్ధారణ అయితే: సర్వే నివేదికతో తహసీల్దార్ / పోలీసులకు ఫిర్యాదు. ప్రభుత్వ భూమి ఆక్రమణ: తహసీల్దార్‌కు లేదా PGRSలో ఫిర్యాదు.'),
          s('Land grabbing with threats or force: police complaint (criminal trespass BNS 329, intimidation 351) and request to the SP.', 'బెదిరింపులు లేదా బలప్రయోగంతో భూ కబ్జా: పోలీసు ఫిర్యాదు (అక్రమ ప్రవేశం BNS 329, బెదిరింపు 351), ఎస్పీకి అభ్యర్థన.'),
        ],
      },
      {
        title: s('Step 3 — civil court', '3వ దశ — సివిల్ కోర్టు'),
        steps: [
          s('Injunction: a lawyer files a suit for permanent injunction with an application for a temporary injunction — the court can quickly order the other side not to enter / build.', 'ఇంజంక్షన్: శాశ్వత ఇంజంక్షన్ దావాతో పాటు తాత్కాలిక ఇంజంక్షన్ దరఖాస్తు న్యాయవాది వేస్తారు — ఎదుటి పక్షం ప్రవేశించకూడదని / నిర్మించకూడదని కోర్టు త్వరగా ఆదేశించవచ్చు.'),
          s('Already dispossessed: suit for declaration of title and recovery of possession. Act early — delays weaken your case, and 12 years of open possession by another person can defeat your claim.', 'ఇప్పటికే బయటకు నెట్టేస్తే: టైటిల్ ప్రకటన, స్వాధీనం తిరిగి పొందడానికి దావా. త్వరగా చర్య తీసుకోండి — ఆలస్యం కేసును బలహీనపరుస్తుంది, మరొకరు 12 సంవత్సరాలు బహిరంగంగా అనుభవిస్తే మీ హక్కు పోవచ్చు.'),
          s('Forged deed against your land: police FIR for forgery / cheating, and a civil suit to cancel the deed; inform the SRO.', 'మీ భూమిపై నకిలీ దస్తావేజు: ఫోర్జరీ / మోసానికి పోలీసు FIR, దస్తావేజు రద్దుకు సివిల్ దావా; SROకు తెలియజేయండి.'),
        ],
      },
      {
        title: s('Family partition', 'కుటుంబ పంపకం'),
        steps: [
          s('Agreed: write a partition deed listing each share with survey numbers and register it at the SRO (stamp duty is low between family members). Then apply for mutation of each share.', 'అంగీకారంతో: సర్వే నంబర్లతో ప్రతి వాటాను చూపే పంపక దస్తావేజు రాసి SROలో నమోదు చేయండి (కుటుంబ సభ్యుల మధ్య స్టాంప్ డ్యూటీ తక్కువ). తర్వాత ప్రతి వాటా మ్యుటేషన్‌కు దరఖాస్తు.'),
          s('Not agreed: suit for partition in civil court. Daughters have equal rights in Hindu ancestral property (since 2005, even if the father died earlier, per Supreme Court 2020).', 'అంగీకారం లేకపోతే: సివిల్ కోర్టులో పంపక దావా. హిందూ పూర్వీకుల ఆస్తిలో కుమార్తెలకు సమాన హక్కు (2005 నుండి, తండ్రి ముందే మరణించినా, సుప్రీంకోర్టు 2020 ప్రకారం).'),
          s('Lok Adalat / mediation can settle partition quickly with a binding award.', 'లోక్ అదాలత్ / మధ్యవర్తిత్వం కట్టుబడి ఉండే అవార్డుతో పంపకాన్ని త్వరగా పరిష్కరించగలదు.'),
        ],
      },
    ],
    costExample: s('Boundary dispute with a neighbour: survey application (small fee) → surveyor\'s report usually ends it without any court case.', 'పొరుగువారితో హద్దు వివాదం: సర్వే దరఖాస్తు (చిన్న ఫీజు) → సర్వేయర్ నివేదికతో సాధారణంగా కోర్టు కేసు లేకుండానే ముగుస్తుంది.'),
    problems: [P(['Someone is selling my land using fake papers right now.', 'ఎవరో ఇప్పుడే నకిలీ పత్రాలతో నా భూమి అమ్ముతున్నారు.'], ['Write immediately to the Sub-Registrar and District Registrar with your documents asking them not to register; file a police complaint; publish a public notice in newspapers.', 'నమోదు చేయవద్దని మీ పత్రాలతో వెంటనే సబ్-రిజిస్ట్రార్, జిల్లా రిజిస్ట్రార్‌కు రాయండి; పోలీసు ఫిర్యాదు చేయండి; పత్రికల్లో పబ్లిక్ నోటీసు ఇవ్వండి.'])],
    whereToApply: [s('Village Secretariat / Tahsildar (records, survey); police station; Junior / Senior Civil Judge court', 'గ్రామ సచివాలయం / తహసీల్దార్ (రికార్డులు, సర్వే); పోలీస్ స్టేషన్; జూనియర్ / సీనియర్ సివిల్ జడ్జి కోర్టు')],
    timeline: s('Survey: weeks. Temporary injunction: often within weeks. Full civil suit: years — so settle when possible.', 'సర్వే: వారాలు. తాత్కాలిక ఇంజంక్షన్: తరచూ వారాల్లో. పూర్తి సివిల్ దావా: సంవత్సరాలు — వీలైతే రాజీ చేసుకోండి.'),
    tips: [s('Visit your land regularly, keep the boundary stones visible, and check the EC once a year for any fraudulent registration.', 'మీ భూమిని క్రమంగా చూడండి, హద్దు రాళ్లు కనిపించేలా ఉంచండి, మోసపూరిత నమోదు కోసం ఏడాదికి ఒకసారి EC చూడండి.')],
    links: [{ label: 'AP Registration — EC & deeds', url: 'https://registration.ap.gov.in' }, { label: 'Meebhoomi — land records', url: 'https://meebhoomi.ap.gov.in' }],
    lastChecked: CHECKED,
  },

  // ─────────────────────────────────────────── DECEASED CLAIMS
  {
    id: 'death-claims-money',
    category: 'law',
    level: 'both',
    title: s('After a death — claim bank money, insurance, PF, pension and shares', 'మరణం తర్వాత — బ్యాంక్ డబ్బు, బీమా, PF, పెన్షన్, షేర్ల క్లెయిమ్'),
    summary: s(
      'When a family member dies, their money doesn\'t automatically come to the family — the nominee or legal heirs must claim it. With a nominee it is simple. Without a nominee, banks now follow RBI\'s simplified procedure for amounts up to ₹15 lakh (₹5 lakh in co-operative banks) and must settle within 15 days of complete documents. For larger amounts or disputes, a succession certificate from the civil court is needed.',
      'కుటుంబ సభ్యుడు మరణిస్తే వారి డబ్బు ఆటోమేటిక్‌గా కుటుంబానికి రాదు — నామినీ లేదా చట్టపరమైన వారసులు క్లెయిమ్ చేయాలి. నామినీ ఉంటే సులభం. నామినీ లేకపోతే ₹15 లక్షల వరకు (సహకార బ్యాంకుల్లో ₹5 లక్షలు) బ్యాంకులు ఇప్పుడు RBI సరళ విధానం పాటిస్తాయి, పూర్తి పత్రాలు అందిన 15 రోజుల్లో సెటిల్ చేయాలి. పెద్ద మొత్తాలకు లేదా వివాదాలకు సివిల్ కోర్టు నుండి సక్సెషన్ సర్టిఫికెట్ కావాలి.',
    ),
    keywords: ['death claim', 'deceased account', 'nominee', 'legal heir', 'succession certificate', 'bank claim', 'insurance claim death', 'pf death claim', 'family pension', 'locker', 'shares transmission', 'demat', 'మరణ క్లెయిమ్', 'నామినీ', 'వారసులు', 'సక్సెషన్ సర్టిఫికెట్', 'కుటుంబ పెన్షన్'],
    whoCanApply: [s('Nominee, or legal heirs (spouse, children, parents as per succession law)', 'నామినీ, లేదా చట్టపరమైన వారసులు (వారసత్వ చట్టం ప్రకారం భార్య/భర్త, పిల్లలు, తల్లిదండ్రులు)')],
    documents: [
      s('Death certificate (several attested copies)', 'మరణ ధృవీకరణ (అనేక ధృవీకృత కాపీలు)'),
      s('Claimant\'s Aadhaar, PAN, bank passbook; relationship proof', 'క్లెయిమ్ చేసేవారి ఆధార్, PAN, బ్యాంక్ పాస్‌బుక్; సంబంధ రుజువు'),
      s('Without nominee: Family Member (legal heir) certificate, indemnity and affidavits / no-objection from other heirs, as the bank\'s standard form asks', 'నామినీ లేకపోతే: కుటుంబ సభ్యుల (వారసుల) ధృవీకరణ, బ్యాంక్ ప్రామాణిక ఫారం అడిగినట్లు ఇండెమ్నిటీ, అఫిడవిట్లు / ఇతర వారసుల నిరభ్యంతరం'),
      s('Passbooks, policy bonds, PPO, share / demat statements of the deceased', 'మరణించినవారి పాస్‌బుక్‌లు, పాలసీ బాండ్లు, PPO, షేర్ / డీమ్యాట్ స్టేట్‌మెంట్లు'),
    ],
    fees: [
      fee(s('Bank / insurance / EPF claims', 'బ్యాంక్ / బీమా / EPF క్లెయిమ్‌లు'), s('Free', 'ఉచితం')),
      fee(s('Succession certificate', 'సక్సెషన్ సర్టిఫికెట్'), s('Court fee as a percentage of the debts / securities claimed + lawyer', 'క్లెయిమ్ చేసిన మొత్తాలపై శాతంగా కోర్టు ఫీజు + న్యాయవాది')),
    ],
    steps: [
      s('Get the death certificate and family member certificate.', 'మరణ ధృవీకరణ, కుటుంబ సభ్యుల ధృవీకరణ తీసుకోండి.'),
      s('List all accounts, policies, PF, pension and investments.', 'అన్ని ఖాతాలు, పాలసీలు, PF, పెన్షన్, పెట్టుబడుల జాబితా తయారు చేయండి.'),
      s('Claim each one with the standard claim form.', 'ప్రతిదాన్ని ప్రామాణిక క్లెయిమ్ ఫారంతో క్లెయిమ్ చేయండి.'),
    ],
    stages: [
      {
        title: s('First 30 days', 'మొదటి 30 రోజులు'),
        steps: [
          s('Register the death and get 5–10 copies of the death certificate (see Birth & death guide).', 'మరణం నమోదు చేసి మరణ ధృవీకరణ 5–10 కాపీలు తీసుకోండి (జనన & మరణ గైడ్).'),
          s('Apply for the Family Member certificate at the Secretariat / MeeSeva.', 'సచివాలయం / మీసేవలో కుటుంబ సభ్యుల ధృవీకరణకు దరఖాస్తు.'),
          s('Make a list: bank accounts, FDs, lockers, LIC / other policies, PMJJBY / PMSBY / Jan Dhan RuPay cover, EPF, pension, post office, shares / mutual funds, vehicle, land.', 'జాబితా తయారు చేయండి: బ్యాంక్ ఖాతాలు, FDలు, లాకర్లు, LIC / ఇతర పాలసీలు, PMJJBY / PMSBY / జన్ ధన్ RuPay కవర్, EPF, పెన్షన్, పోస్టాఫీసు, షేర్లు / మ్యూచువల్ ఫండ్లు, వాహనం, భూమి.'),
          s('Inform each bank in writing so the account is frozen against misuse; stop pension to avoid recovery later.', 'దుర్వినియోగం జరగకుండా ఖాతా ఫ్రీజ్ చేయడానికి ప్రతి బ్యాంకుకు రాతపూర్వకంగా తెలియజేయండి; తర్వాత రికవరీ రాకుండా పెన్షన్ ఆపించండి.'),
        ],
      },
      {
        title: s('Bank accounts and lockers', 'బ్యాంక్ ఖాతాలు, లాకర్లు'),
        steps: [
          s('Ask the branch for its standard deceased claim form (RBI requires standard forms on every bank\'s website).', 'బ్రాంచ్‌ను దాని ప్రామాణిక మరణ క్లెయిమ్ ఫారం అడగండి (ప్రతి బ్యాంక్ వెబ్‌సైట్‌లో ప్రామాణిక ఫారాలు ఉండాలని RBI నియమం).'),
          s('Nominee / joint holder: claim form + death certificate + KYC — that\'s all.', 'నామినీ / ఉమ్మడి ఖాతాదారు: క్లెయిమ్ ఫారం + మరణ ధృవీకరణ + KYC — అంతే.'),
          s('No nominee, total up to ₹15 lakh (₹5 lakh co-op bank): claim form, death certificate, KYC of heirs, indemnity, affidavit and no-objection of other heirs — no succession certificate needed.', 'నామినీ లేకుండా, మొత్తం ₹15 లక్షల వరకు (సహకార బ్యాంక్ ₹5 లక్షలు): క్లెయిమ్ ఫారం, మరణ ధృవీకరణ, వారసుల KYC, ఇండెమ్నిటీ, అఫిడవిట్, ఇతర వారసుల నిరభ్యంతరం — సక్సెషన్ సర్టిఫికెట్ అక్కర్లేదు.'),
          s('Bank must settle within 15 days of complete documents, or pay interest for the delay. Lockers: inventory with claimants, 15 days, ₹5,000 a day compensation for bank delay.', 'పూర్తి పత్రాలు అందిన 15 రోజుల్లో బ్యాంక్ సెటిల్ చేయాలి, లేకపోతే ఆలస్యానికి వడ్డీ చెల్లించాలి. లాకర్లు: క్లెయిమ్‌దారులతో ఇన్వెంటరీ, 15 రోజులు, బ్యాంక్ ఆలస్యానికి రోజుకు ₹5,000 పరిహారం.'),
        ],
      },
      {
        title: s('Insurance, PF and pension', 'బీమా, PF, పెన్షన్'),
        steps: [
          s('Life insurance: nominee submits claim form, policy bond, death certificate, ID, bank details (and FIR / post-mortem for accidents) to the insurer\'s branch or online.', 'జీవిత బీమా: నామినీ క్లెయిమ్ ఫారం, పాలసీ బాండ్, మరణ ధృవీకరణ, ఐడీ, బ్యాంక్ వివరాలు (ప్రమాదాలకు FIR / పోస్ట్‌మార్టం) బీమా సంస్థ బ్రాంచ్‌లో లేదా ఆన్‌లైన్‌లో సమర్పిస్తారు.'),
          s('PMJJBY / PMSBY / Jan Dhan RuPay accident cover: claim at the bank where the account was (see PMJJBY guide).', 'PMJJBY / PMSBY / జన్ ధన్ RuPay ప్రమాద కవర్: ఖాతా ఉన్న బ్యాంకులో క్లెయిమ్ (PMJJBY గైడ్).'),
          s('EPF: nominee files Form 20 (PF), Form 10D (family pension under EPS) and Form 5(IF) (EDLI insurance up to ₹7 lakh) — online on the EPFO portal with the member\'s UAN or through the employer.', 'EPF: నామినీ ఫారం 20 (PF), ఫారం 10D (EPS కింద కుటుంబ పెన్షన్), ఫారం 5(IF) (₹7 లక్షల వరకు EDLI బీమా) — సభ్యుని UANతో EPFO పోర్టల్‌లో ఆన్‌లైన్‌లో లేదా యజమాని ద్వారా.'),
          s('Government pensioner: spouse applies to the pension office / treasury with death certificate and PPO for family pension.', 'ప్రభుత్వ పెన్షనర్: కుటుంబ పెన్షన్ కోసం మరణ ధృవీకరణ, PPOతో భార్య/భర్త పెన్షన్ కార్యాలయం / ట్రెజరీకి దరఖాస్తు.'),
          s('NTR Bharosa pension: the spouse may be eligible for a widow pension — apply at the Secretariat.', 'NTR భరోసా పెన్షన్: భార్య వితంతు పెన్షన్‌కు అర్హురాలు కావచ్చు — సచివాలయంలో దరఖాస్తు.'),
        ],
      },
      {
        title: s('Shares, mutual funds, vehicle, land', 'షేర్లు, మ్యూచువల్ ఫండ్లు, వాహనం, భూమి'),
        steps: [
          s('Demat shares: nominee submits transmission request form + death certificate to the depository participant (broker / bank).', 'డీమ్యాట్ షేర్లు: నామినీ ట్రాన్స్‌మిషన్ రిక్వెస్ట్ ఫారం + మరణ ధృవీకరణ డిపాజిటరీ పార్టిసిపెంట్‌కు (బ్రోకర్ / బ్యాంక్) సమర్పిస్తారు.'),
          s('Mutual funds: transmission request to the AMC / registrar (CAMS / KFintech).', 'మ్యూచువల్ ఫండ్లు: AMC / రిజిస్ట్రార్‌కు (CAMS / KFintech) ట్రాన్స్‌మిషన్ అభ్యర్థన.'),
          s('Vehicle: transfer to the legal heir on Vahan ("transfer of ownership on death", Form 31) within 3 months.', 'వాహనం: 3 నెలల్లో Vahanలో వారసుని పేరుపైకి బదిలీ ("transfer of ownership on death", ఫారం 31).'),
          s('Land: mutation to heirs at the Secretariat (see Land mutation guide).', 'భూమి: సచివాలయంలో వారసుల పేరుపై మ్యుటేషన్ (భూ మ్యుటేషన్ గైడ్).'),
        ],
      },
      {
        title: s('If a succession certificate is needed', 'సక్సెషన్ సర్టిఫికెట్ అవసరమైతే'),
        steps: [
          s('File a petition in the District / Senior Civil Judge court listing the deceased\'s debts and securities and all legal heirs.', 'మరణించినవారి డబ్బులు, సెక్యూరిటీలు, అన్ని వారసుల జాబితాతో జిల్లా / సీనియర్ సివిల్ జడ్జి కోర్టులో పిటిషన్ వేయండి.'),
          s('Court publishes a notice; if no objection, the certificate is granted (often 3–6 months). Pay court fee on the amount.', 'కోర్టు నోటీసు ప్రచురిస్తుంది; అభ్యంతరం లేకపోతే సర్టిఫికెట్ ఇస్తారు (తరచూ 3–6 నెలలు). మొత్తంపై కోర్టు ఫీజు చెల్లించండి.'),
        ],
      },
    ],
    costExample: s('Father\'s savings ₹6 lakh, no nominee, three heirs: bank\'s simplified process with affidavits and no-objection from siblings — no court case; settled within 15 days of documents.', 'తండ్రి పొదుపు ₹6 లక్షలు, నామినీ లేరు, ముగ్గురు వారసులు: సోదరుల అఫిడవిట్లు, నిరభ్యంతరంతో బ్యాంక్ సరళ విధానం — కోర్టు కేసు లేదు; పత్రాలు అందిన 15 రోజుల్లో సెటిల్.'),
    problems: [
      P(['Bank insists on a succession certificate for a small amount.', 'చిన్న మొత్తానికి సక్సెషన్ సర్టిఫికెట్ కావాలని బ్యాంక్ పట్టుబడుతోంది.'], ['Point to RBI\'s simplified claim directions; complain to the bank\'s grievance cell and then the RBI Ombudsman (cms.rbi.org.in).', 'RBI సరళ క్లెయిమ్ ఆదేశాలను చూపండి; బ్యాంక్ ఫిర్యాదుల విభాగానికి, తర్వాత RBI అంబుడ్స్‌మన్‌కు (cms.rbi.org.in) ఫిర్యాదు చేయండి.']),
      P(['Don\'t know where the deceased had accounts.', 'మరణించినవారికి ఎక్కడ ఖాతాలు ఉన్నాయో తెలియదు.'], ['Search the RBI UDGAM portal for unclaimed deposits, check old SMS / emails, IT returns (AIS shows interest-paying banks), and ask nearby banks.', 'క్లెయిమ్ చేయని డిపాజిట్ల కోసం RBI UDGAM పోర్టల్‌లో వెతకండి, పాత SMS / ఇమెయిల్‌లు, IT రిటర్న్‌లు (AISలో వడ్డీ చెల్లించే బ్యాంకులు) చూడండి, దగ్గరి బ్యాంకులను అడగండి.']),
    ],
    afterwards: [s('Add nominees to all your own accounts, policies, PF and demat today — it saves your family months.', 'ఈరోజే మీ అన్ని ఖాతాలు, పాలసీలు, PF, డీమ్యాట్‌కు నామినీలను చేర్చండి — మీ కుటుంబానికి నెలల సమయం ఆదా.')],
    whereToApply: [s('Each bank / insurer / EPFO / depository; civil court for succession certificate', 'ప్రతి బ్యాంక్ / బీమా సంస్థ / EPFO / డిపాజిటరీ; సక్సెషన్ సర్టిఫికెట్‌కు సివిల్ కోర్టు')],
    timeline: s('Bank claims: 15 days after complete documents. Insurance: usually within 30 days. EPF: weeks. Succession certificate: months.', 'బ్యాంక్ క్లెయిమ్‌లు: పూర్తి పత్రాల తర్వాత 15 రోజులు. బీమా: సాధారణంగా 30 రోజుల్లో. EPF: వారాలు. సక్సెషన్ సర్టిఫికెట్: నెలలు.'),
    tips: [s('Don\'t use the deceased\'s ATM card or UPI after death — it can cause legal trouble. Claim properly.', 'మరణం తర్వాత మరణించినవారి ATM కార్డు లేదా UPI వాడకండి — చట్టపరమైన ఇబ్బంది కావచ్చు. సరిగ్గా క్లెయిమ్ చేయండి.')],
    links: [{ label: 'RBI UDGAM — unclaimed deposits', url: 'https://udgam.rbi.org.in' }, { label: 'EPFO member portal', url: 'https://unifiedportal-mem.epfindia.gov.in' }],
    lastChecked: CHECKED,
  },
];

export const lawDir: XDir[] = [
  D('bns-sections', 'police', ['What each BNS / old IPC section means and its punishment', 'ప్రతి BNS / పాత IPC సెక్షన్ అర్థం, శిక్ష'], ['Police station; free legal aid 15100', 'పోలీస్ స్టేషన్; ఉచిత న్యాయ సహాయం 15100']),
  D('arrest-bail-rights', 'police', ['Rights on arrest, bail, anticipatory bail (BNSS)', 'అరెస్ట్ హక్కులు, బెయిల్, ముందస్తు బెయిల్ (BNSS)'], ['Magistrate / Sessions court; 15100', 'మేజిస్ట్రేట్ / సెషన్స్ కోర్టు; 15100']),
  D('court-case-journey', 'police', ['Investigation, chargesheet, trial; check case on eCourts', 'దర్యాప్తు, చార్జ్‌షీట్, విచారణ; eCourtsలో కేసు చూడడం'], ['services.ecourts.gov.in', 'services.ecourts.gov.in']),
  D('cheque-bounce', 'police', ['Notice in 30 days, wait 15, complaint in next 30', '30 రోజుల్లో నోటీసు, 15 రోజులు వేచి, తర్వాతి 30లో ఫిర్యాదు'], ['Magistrate court (payee\'s bank area)', 'మేజిస్ట్రేట్ కోర్టు (పేయీ బ్యాంక్ ప్రాంతం)']),
  D('divorce-maintenance', 'police', ['Maintenance (BNSS 144), mutual / contested divorce, custody', 'భరణం (BNSS 144), పరస్పర / వివాదాస్పద విడాకులు, కస్టడీ'], ['Family Court; free lawyer via 15100', 'ఫ్యామిలీ కోర్టు; 15100 ద్వారా ఉచిత న్యాయవాది']),
  D('property-disputes', 'land', ['Encroachment, boundary survey, partition, forged deeds', 'ఆక్రమణ, హద్దు సర్వే, పంపకం, నకిలీ దస్తావేజులు'], ['Secretariat / Tahsildar, police, civil court', 'సచివాలయం / తహసీల్దార్, పోలీసులు, సివిల్ కోర్టు']),
  D('death-claims-money', 'money', ['Claim a deceased person\'s bank, insurance, PF, pension, shares', 'మరణించినవారి బ్యాంక్, బీమా, PF, పెన్షన్, షేర్లు క్లెయిమ్'], ['Each bank / insurer / EPFO', 'ప్రతి బ్యాంక్ / బీమా సంస్థ / EPFO']),
];
