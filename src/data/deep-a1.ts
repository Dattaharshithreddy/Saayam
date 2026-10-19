import { Guide } from '../types';
import { b, CHECKED } from './bi';

/** Full walkthroughs, batch A part 1 (checked 19 Oct 2026): land & certificates. */
export const deepA1: Record<string, Partial<Guide>> = {
  // ───────────────────────────────────────────── NAME WRONG IN DEED (RECTIFICATION)
  'property-name-correction': {
    stages: [
      {
        title: b('Find exactly what is wrong', 'ఖచ్చితంగా ఏది తప్పో కనుక్కోవడం'),
        steps: [
          b('Take the original registered deed and mark every place the wrong name or detail appears: first page, party details, schedule, signatures page.', 'అసలు రిజిస్టర్డ్ డీడ్ తీసుకుని తప్పు పేరు లేదా వివరం ఉన్న ప్రతి చోటా గుర్తు పెట్టండి: మొదటి పేజీ, పార్టీల వివరాలు, షెడ్యూల్, సంతకాల పేజీ.'),
          b('Download the free EC (registration.ap.gov.in → "EC, CC & MV Assistance" → "EC For Information Only") and see how the name appears there too.', 'ఉచిత EC డౌన్‌లోడ్ చేయండి (registration.ap.gov.in → "EC, CC & MV Assistance" → "EC For Information Only"), అక్కడ పేరు ఎలా ఉందో కూడా చూడండి.'),
          b('Decide the ONE correct spelling — it should match your Aadhaar and PAN exactly. If Aadhaar itself is wrong, correct Aadhaar first.', 'ఒకే సరైన స్పెల్లింగ్ నిర్ణయించుకోండి — మీ ఆధార్, PANతో ఖచ్చితంగా సరిపోవాలి. ఆధార్‌లోనే తప్పుంటే ముందు ఆధార్ సరిచేయండి.'),
          b('Check whether only your own detail is wrong (buyer\'s name, age, address) or something about the property or the seller. This decides who must sign.', 'మీ వివరమే (కొనుగోలుదారు పేరు, వయస్సు, చిరునామా) తప్పా లేక ఆస్తి లేదా అమ్మకందారు గురించిన వివరమా చూడండి. ఎవరు సంతకం చేయాలో ఇది నిర్ణయిస్తుంది.'),
        ],
      },
      {
        title: b('Talk to the Sub-Registrar first', 'ముందుగా సబ్-రిజిస్ట్రార్‌తో మాట్లాడండి'),
        steps: [
          b('Go to the SRO where the deed was registered with the original deed and your Aadhaar. Ask: "Can this be fixed by a rectification deed, and must the seller sign?"', 'డీడ్ రిజిస్టర్ అయిన SROకు అసలు డీడ్, ఆధార్‌తో వెళ్లండి. "రెక్టిఫికేషన్ డీడ్‌తో సరిచేయవచ్చా, అమ్మకందారు సంతకం అవసరమా?" అని అడగండి.'),
          b('Ask for the exact stamp duty and fee for your case and write it down. A pure spelling fix is cheap; anything that changes what was sold is charged like a new sale.', 'మీ కేసుకు ఖచ్చితమైన స్టాంప్ డ్యూటీ, ఫీజు అడిగి రాసుకోండి. కేవలం స్పెల్లింగ్ సవరణ చౌక; అమ్మిన దాన్ని మార్చేది ఏదైనా కొత్త అమ్మకంలా ఛార్జ్ చేస్తారు.'),
          b('If the seller must sign, contact them now. If the seller has died, their legal heirs sign instead (they need the Family Member Certificate).', 'అమ్మకందారు సంతకం అవసరమైతే ఇప్పుడే సంప్రదించండి. అమ్మకందారు చనిపోతే వారి చట్టబద్ధ వారసులు సంతకం చేస్తారు (వారికి కుటుంబ సభ్యుల ధృవీకరణ పత్రం కావాలి).'),
        ],
      },
      {
        title: b('Prepare the rectification deed online', 'రెక్టిఫికేషన్ డీడ్‌ను ఆన్‌లైన్‌లో తయారు చేయడం'),
        steps: [
          b('registration.ap.gov.in → log in with mobile OTP → document preparation → nature of document "Rectification" → select the same SRO.', 'registration.ap.gov.in → మొబైల్ OTPతో లాగిన్ → డాక్యుమెంట్ తయారీ → nature "Rectification" → అదే SRO ఎంచుకోండి.'),
          b('Enter the original document number and year, and the parties (the same buyer and seller, or heirs).', 'అసలు డాక్యుమెంట్ నంబర్, సంవత్సరం, పార్టీలను (అదే కొనుగోలుదారు, అమ్మకందారు, లేదా వారసులు) నమోదు చేయండి.'),
          b('In the deed text write clearly: "In document no. ___ of ___, the name was wrongly written as ___ at page __; the correct name is ___. All other terms remain the same."', 'డీడ్ పాఠంలో స్పష్టంగా రాయండి: "___ సంవత్సరపు ___ నంబర్ డాక్యుమెంట్‌లో, పేజీ __లో పేరు తప్పుగా ___ అని రాశారు; సరైన పేరు ___. మిగతా నిబంధనలన్నీ అలాగే ఉంటాయి."'),
          b('Add two witnesses. Submit and note the application ID. Read the draft once more before paying.', 'ఇద్దరు సాక్షులను చేర్చండి. సబ్మిట్ చేసి అప్లికేషన్ ID నోట్ చేయండి. చెల్లించే ముందు డ్రాఫ్ట్ మళ్లీ చదవండి.'),
        ],
        note: b('A document writer near the SRO can draft this for a fee; still check every spelling yourself.', 'SRO దగ్గర డాక్యుమెంట్ రైటర్ ఫీజుకు ఇది తయారు చేస్తారు; అయినా ప్రతి స్పెల్లింగ్ మీరే సరిచూడండి.'),
      },
      {
        title: b('Pay, book a slot and register', 'చెల్లించి, స్లాట్ బుక్ చేసి, రిజిస్టర్ చేయడం'),
        steps: [
          b('Pay the stamp duty and fee online for the application ID; download the receipt.', 'అప్లికేషన్ IDకు స్టాంప్ డ్యూటీ, ఫీజు ఆన్‌లైన్‌లో చెల్లించి రసీదు డౌన్‌లోడ్ చేయండి.'),
          b('Book a slot when all signers and both witnesses can come.', 'సంతకం చేసేవారందరూ, ఇద్దరు సాక్షులు రాగలిగే సమయానికి స్లాట్ బుక్ చేయండి.'),
          b('At the SRO: bring the original deed, Aadhaar and PAN of everyone, and proof of the correct name. Aadhaar biometrics and photos are taken, everyone signs, and the rectification deed gets its own document number.', 'SROలో: అసలు డీడ్, అందరి ఆధార్, PAN, సరైన పేరు రుజువు తీసుకెళ్లండి. ఆధార్ బయోమెట్రిక్స్, ఫోటోలు తీసుకుంటారు, అందరూ సంతకం చేస్తారు, రెక్టిఫికేషన్ డీడ్‌కు సొంత డాక్యుమెంట్ నంబర్ వస్తుంది.'),
          b('Keep the rectification deed together with the original deed always — together they prove your title.', 'రెక్టిఫికేషన్ డీడ్‌ను ఎప్పుడూ అసలు డీడ్‌తో కలిపి ఉంచండి — రెండూ కలిసి మీ హక్కును రుజువు చేస్తాయి.'),
        ],
      },
      {
        title: b('Correct the other records', 'ఇతర రికార్డులు సరిచేయడం'),
        steps: [
          b('Land: apply at your Village Secretariat for "Mutation for Correction" with both deeds so 1B / Adangal show the right name (see the Land Mutation guide).', 'భూమి: 1B / అడంగల్‌లో సరైన పేరు రావడానికి రెండు డీడ్‌లతో గ్రామ సచివాలయంలో "Mutation for Correction"కు దరఖాస్తు చేయండి (భూమి మ్యుటేషన్ గైడ్ చూడండి).'),
          b('House: apply to the municipality / panchayat to correct the property tax name; then correct the electricity and water connection names.', 'ఇల్లు: ఆస్తి పన్ను పేరు సరిచేయడానికి మున్సిపాలిటీ / పంచాయతీకి దరఖాస్తు చేయండి; తర్వాత కరెంట్, నీటి కనెక్షన్ పేర్లు సరిచేయండి.'),
          b('After a month, download a fresh EC — the rectification deed should appear against the original document.', 'నెల తర్వాత కొత్త EC డౌన్‌లోడ్ చేయండి — అసలు డాక్యుమెంట్‌కు ఎదురుగా రెక్టిఫికేషన్ డీడ్ కనిపించాలి.'),
        ],
      },
    ],
    costExample: b(
      'Simple spelling correction signed by buyer and seller: usually a few hundred rupees in stamp duty and fee, plus a document writer\'s charge if you use one. If the SRO treats the change as a new transfer, it costs like a sale (about 7.5% of market value) — that is why you ask the SRO first.',
      'కొనుగోలుదారు, అమ్మకందారు సంతకం చేసే సాధారణ స్పెల్లింగ్ సవరణ: సాధారణంగా స్టాంప్ డ్యూటీ, ఫీజు కొన్ని వందల రూపాయలు, డాక్యుమెంట్ రైటర్‌ను పెట్టుకుంటే వారి ఛార్జీ. మార్పును SRO కొత్త బదిలీగా పరిగణిస్తే అమ్మకంలాగే ఖర్చు (మార్కెట్ విలువపై సుమారు 7.5%) — అందుకే ముందు SROను అడగాలి.',
    ),
    problems: [
      { problem: b('The seller refuses to come or can\'t be found.', 'అమ్మకందారు రావడానికి నిరాకరిస్తున్నారు లేదా దొరకడం లేదు.'), fix: b('If only your own details are wrong, ask the SRO about a self-rectification by the buyer. Otherwise you may need a civil court declaration — get free advice from the District Legal Services Authority (15100).', 'మీ వివరాలే తప్పయితే, కొనుగోలుదారు స్వయం-రెక్టిఫికేషన్ గురించి SROను అడగండి. లేకపోతే సివిల్ కోర్టు డిక్లరేషన్ అవసరం కావచ్చు — జిల్లా న్యాయ సేవల సంస్థ (15100) నుండి ఉచిత సలహా తీసుకోండి.') },
      { problem: b('The survey number or extent itself is wrong.', 'సర్వే నంబర్ లేదా విస్తీర్ణమే తప్పు.'), fix: b('Both parties must sign, and the SRO checks it against revenue records. If the change adds land, duty is charged on the extra.', 'ఇరుపక్షాలు సంతకం చేయాలి, SRO రెవెన్యూ రికార్డులతో సరిచూస్తుంది. మార్పుతో భూమి పెరిగితే అదనపు దానిపై డ్యూటీ.') },
      { problem: b('The mistake is only in 1B / Meebhoomi, not in the deed.', 'తప్పు 1B / మీభూమిలో మాత్రమే, డీడ్‌లో కాదు.'), fix: b('No rectification deed needed — apply for "Mutation for Correction" at the Village Secretariat with the deed.', 'రెక్టిఫికేషన్ డీడ్ అవసరం లేదు — డీడ్‌తో గ్రామ సచివాలయంలో "Mutation for Correction"కు దరఖాస్తు చేయండి.') },
    ],
    afterwards: [
      b('Use the corrected spelling everywhere from now on — bank, tax, electricity — so records never disagree again.', 'ఇకపై ప్రతిచోటా సరైన స్పెల్లింగ్‌నే వాడండి — బ్యాంక్, పన్ను, కరెంట్ — రికార్డులు మళ్లీ తేడా రాకుండా.'),
      b('Take a certified copy of the rectification deed (registration portal → CC) and keep it with the original.', 'రెక్టిఫికేషన్ డీడ్ సర్టిఫైడ్ కాపీ తీసుకుని (రిజిస్ట్రేషన్ పోర్టల్ → CC) అసలుతో పాటు ఉంచండి.'),
    ],
    lastChecked: CHECKED,
  },

  // ───────────────────────────────────────────── LAND MUTATION
  'land-mutation': {
    stages: [
      {
        title: b('Know which kind of mutation you need', 'మీకు ఏ రకం మ్యుటేషన్ కావాలో తెలుసుకోవడం'),
        steps: [
          b('Bought land with a registered sale deed → automatic (auto-mutation). You usually don\'t apply; you just check.', 'రిజిస్టర్డ్ సేల్ డీడ్‌తో భూమి కొన్నారు → ఆటోమేటిక్ (ఆటో-మ్యుటేషన్). సాధారణంగా దరఖాస్తు అక్కర్లేదు; తనిఖీ చేస్తే చాలు.'),
          b('Owner died and heirs need the land → "Mutation for Transactions" (succession) — you apply.', 'యజమాని చనిపోయారు, వారసులకు భూమి కావాలి → "Mutation for Transactions" (వారసత్వం) — మీరు దరఖాస్తు చేయాలి.'),
          b('Your name, father\'s name or extent is wrong in 1B / Adangal → "Mutation for Correction" — you apply.', '1B / అడంగల్‌లో మీ పేరు, తండ్రి పేరు లేదా విస్తీర్ణం తప్పు → "Mutation for Correction" — మీరు దరఖాస్తు చేయాలి.'),
        ],
      },
      {
        title: b('After buying: check the automatic update', 'కొన్న తర్వాత: ఆటోమేటిక్ అప్‌డేట్ తనిఖీ'),
        steps: [
          b('Wait about 2–3 weeks after registration.', 'రిజిస్ట్రేషన్ తర్వాత సుమారు 2–3 వారాలు ఆగండి.'),
          b('Open meebhoomi.ap.gov.in → "1B" → choose district, mandal, village → search by survey number or your name. Check your name, father\'s name and extent.', 'meebhoomi.ap.gov.in → "1B" → జిల్లా, మండలం, గ్రామం → సర్వే నంబర్ లేదా మీ పేరుతో వెతకండి. మీ పేరు, తండ్రి పేరు, విస్తీర్ణం చూడండి.'),
          b('Then open "Adangal" for the same survey number — it should also show you.', 'తర్వాత అదే సర్వే నంబర్‌కు "Adangal" తెరవండి — అందులో కూడా మీరే కనిపించాలి.'),
          b('Not updated after a month? Go to the Village Revenue Officer (VRO) at the Village Secretariat with the deed copy and document number and ask them to check the auto-mutation status with the Tahsildar.', 'నెల దాటినా అప్‌డేట్ కాలేదా? డీడ్ కాపీ, డాక్యుమెంట్ నంబర్‌తో గ్రామ సచివాలయంలో VROను కలిసి తహసీల్దార్ వద్ద ఆటో-మ్యుటేషన్ స్టేటస్ చూడమని అడగండి.'),
        ],
      },
      {
        title: b('Heirs or corrections: apply at the Secretariat', 'వారసులు లేదా సవరణలు: సచివాలయంలో దరఖాస్తు'),
        steps: [
          b('Collect: death certificate and Family Member Certificate (for heirs), or proof of the correct entry (deed, Aadhaar) for corrections; current 1B copy; pattadar passbook if any; Aadhaar of the applicant.', 'సేకరించండి: మరణ ధృవీకరణ, కుటుంబ సభ్యుల ధృవీకరణ (వారసులకు), లేదా సవరణకు సరైన వివరం రుజువు (డీడ్, ఆధార్); ప్రస్తుత 1B కాపీ; పట్టాదారు పాస్‌బుక్ ఉంటే; దరఖాస్తుదారు ఆధార్.'),
          b('Heirs: all heirs should agree on how the land is shared. Write a simple consent letter signed by all heirs saying whose name each part goes into.', 'వారసులు: భూమి ఎలా పంచుకోవాలో వారసులందరూ ఒప్పుకోవాలి. ఏ భాగం ఎవరి పేరుకో చెప్పే, వారసులందరూ సంతకం చేసిన సాధారణ అంగీకార లేఖ రాయండి.'),
          b('At the Village Secretariat (also called Swarna Gramam) or MeeSeva, ask for "Mutation for Transactions" or "Mutation for Correction". The staff enter it, take your biometric, and give a receipt with an application number.', 'గ్రామ సచివాలయం (స్వర్ణ గ్రామం అని కూడా) లేదా మీసేవలో "Mutation for Transactions" లేదా "Mutation for Correction" అడగండి. సిబ్బంది నమోదు చేసి, బయోమెట్రిక్ తీసుకుని, అప్లికేషన్ నంబర్‌తో రసీదు ఇస్తారు.'),
          b('Pay only the fee printed on the receipt.', 'రసీదుపై ముద్రించిన ఫీజు మాత్రమే చెల్లించండి.'),
        ],
      },
      {
        title: b('Enquiry and decision', 'విచారణ, నిర్ణయం'),
        steps: [
          b('The VRO checks records and may visit the land and ask neighbours. A notice may be issued so anyone with an objection can come forward.', 'VRO రికార్డులు తనిఖీ చేసి, భూమిని సందర్శించి పొరుగువారిని అడగవచ్చు. అభ్యంతరం ఉన్నవారు ముందుకు రావడానికి నోటీసు ఇవ్వవచ్చు.'),
          b('The Revenue Inspector verifies and the Tahsildar (MRO) approves or rejects.', 'రెవెన్యూ ఇన్‌స్పెక్టర్ ధృవీకరిస్తారు, తహసీల్దార్ (MRO) ఆమోదిస్తారు లేదా తిరస్కరిస్తారు.'),
          b('Track it on meebhoomi.ap.gov.in (mutation status) or at the Secretariat with the application number.', 'meebhoomi.ap.gov.in (మ్యుటేషన్ స్టేటస్)లో లేదా అప్లికేషన్ నంబర్‌తో సచివాలయంలో ట్రాక్ చేయండి.'),
          b('Once approved, download the new 1B and Adangal, and apply for a new e-pattadar passbook if you need one for bank loans.', 'ఆమోదం తర్వాత కొత్త 1B, అడంగల్ డౌన్‌లోడ్ చేయండి; బ్యాంక్ రుణాలకు కావాలంటే కొత్త ఇ-పట్టాదారు పాస్‌బుక్‌కు దరఖాస్తు చేయండి.'),
        ],
      },
    ],
    costExample: b(
      'Auto-mutation after a sale: ₹0. Heirs or correction at the Secretariat / MeeSeva: only the small user charge on the receipt. Certified copies of 1B / Adangal from MeeSeva cost a few tens of rupees each. Nobody needs to be paid extra.',
      'అమ్మకం తర్వాత ఆటో-మ్యుటేషన్: ₹0. వారసులు లేదా సవరణ సచివాలయం / మీసేవలో: రసీదులోని చిన్న యూజర్ ఛార్జీ మాత్రమే. మీసేవ నుండి 1B / అడంగల్ సర్టిఫైడ్ కాపీలు ఒక్కోటి కొన్ని పదుల రూపాయలు. ఎవరికీ అదనంగా ఇవ్వనక్కర్లేదు.',
    ),
    problems: [
      { problem: b('Application rejected.', 'దరఖాస్తు తిరస్కరించారు.'), fix: b('Ask for the rejection order in writing and read the reason. Fix it (missing heir, document) and reapply, or appeal to the Revenue Divisional Officer (RDO) quickly — appeal time limits are short.', 'తిరస్కరణ ఉత్తర్వు రాతపూర్వకంగా అడిగి కారణం చదవండి. దాన్ని సరిచేసి (వదిలేసిన వారసుడు, పత్రం) మళ్లీ దరఖాస్తు చేయండి, లేదా త్వరగా రెవెన్యూ డివిజనల్ ఆఫీసర్ (RDO)కు అప్పీల్ చేయండి — అప్పీల్ గడువులు తక్కువ.') },
      { problem: b('The update went to the wrong sub-division or shows the wrong extent.', 'అప్‌డేట్ తప్పు సబ్-డివిజన్‌కు వెళ్లింది లేదా తప్పు విస్తీర్ణం చూపిస్తోంది.'), fix: b('Apply for "Mutation for Correction" with your deed and the earlier 1B; if the survey sub-division itself needs splitting, see the Land Subdivision guide.', 'మీ డీడ్, మునుపటి 1Bతో "Mutation for Correction"కు దరఖాస్తు చేయండి; సర్వే సబ్-డివిజన్‌నే విభజించాలంటే భూమి సబ్‌డివిజన్ గైడ్ చూడండి.') },
      { problem: b('One heir objects.', 'ఒక వారసుడు అభ్యంతరం చెబుతున్నారు.'), fix: b('The Tahsildar cannot decide a family property dispute. Settle it by a registered partition deed, or take free legal advice from DLSA (15100) about a civil suit.', 'కుటుంబ ఆస్తి వివాదాన్ని తహసీల్దార్ నిర్ణయించలేరు. రిజిస్టర్డ్ భాగపంపక డీడ్‌తో పరిష్కరించుకోండి, లేదా సివిల్ దావా గురించి DLSA (15100) నుండి ఉచిత న్యాయ సలహా తీసుకోండి.') },
      { problem: b('Someone asks for money to "speed up" the mutation.', 'మ్యుటేషన్ "వేగంగా" చేయడానికి ఎవరైనా డబ్బు అడుగుతున్నారు.'), fix: b('Refuse. Raise a PGRS grievance with your application number, or report bribes to ACB 14400.', 'ఒప్పుకోకండి. అప్లికేషన్ నంబర్‌తో PGRS ఫిర్యాదు చేయండి, లేదా లంచం గురించి ACB 14400కు తెలియజేయండి.') },
    ],
    afterwards: [
      b('Farmers: once 1B is in your name, register for Annadata Sukhibhava / PM-KISAN and crop insurance in your own name.', 'రైతులు: 1B మీ పేరుకు వచ్చాక, అన్నదాత సుఖీభవ / PM-KISAN, పంట బీమాకు మీ పేరుపై నమోదు చేసుకోండి.'),
      b('Check your 1B on Meebhoomi once a year — it is the fastest way to catch fraudulent changes.', 'ఏడాదికి ఒకసారి మీభూమిలో మీ 1B చూడండి — మోసపూరిత మార్పులను పట్టుకోవడానికి ఇదే వేగవంతమైన మార్గం.'),
    ],
    lastChecked: CHECKED,
  },

  // ───────────────────────────────────────────── ENCUMBRANCE CERTIFICATE
  'encumbrance-certificate': {
    stages: [
      {
        title: b('Free EC on your phone (for checking)', 'మీ ఫోన్‌లో ఉచిత EC (తనిఖీ కోసం)'),
        steps: [
          b('Open registration.ap.gov.in → "EC, CC & MV Assistance" → "EC For Information Only". No login needed.', 'registration.ap.gov.in → "EC, CC & MV Assistance" → "EC For Information Only" తెరవండి. లాగిన్ అక్కర్లేదు.'),
          b('Search by document number and year if you have it (most accurate). Otherwise choose "None" and enter district, mandal, village and survey number (land) or ward / block / door number (town).', 'డాక్యుమెంట్ నంబర్, సంవత్సరం ఉంటే దానితో వెతకండి (అత్యంత ఖచ్చితం). లేకపోతే "None" ఎంచుకుని జిల్లా, మండలం, గ్రామం, సర్వే నంబర్ (భూమి) లేదా వార్డు / బ్లాక్ / డోర్ నంబర్ (పట్టణం) నమోదు చేయండి.'),
          b('Choose the period — at least 30 years when buying. Enter the captcha and submit.', 'కాలం ఎంచుకోండి — కొనేటప్పుడు కనీసం 30 ఏళ్లు. క్యాప్చా నమోదు చేసి సబ్మిట్ చేయండి.'),
          b('Download the PDF and save it with today\'s date.', 'PDF డౌన్‌లోడ్ చేసి నేటి తేదీతో సేవ్ చేయండి.'),
        ],
        note: b('Records before 1983 are not online — for older years ask at the SRO.', '1983కి ముందటి రికార్డులు ఆన్‌లైన్‌లో లేవు — పాత సంవత్సరాలకు SROలో అడగండి.'),
      },
      {
        title: b('How to read the EC', 'ECను ఎలా చదవాలి'),
        steps: [
          b('Each row is one registered deal: date, document number, type (sale, gift, mortgage, release…), who executed it and in whose favour.', 'ప్రతి వరుస ఒక రిజిస్టర్డ్ వ్యవహారం: తేదీ, డాక్యుమెంట్ నంబర్, రకం (అమ్మకం, గిఫ్ట్, తనఖా, విడుదల…), ఎవరు చేశారు, ఎవరి పేరుకు.'),
          b('Follow the chain: each seller should be the buyer of the previous row. The last buyer must be the person selling to you.', 'గొలుసును అనుసరించండి: ప్రతి అమ్మకందారు ముందటి వరుసలోని కొనుగోలుదారు అయి ఉండాలి. చివరి కొనుగోలుదారే మీకు అమ్ముతున్న వ్యక్తి అయి ఉండాలి.'),
          b('Every "mortgage" must have a later "release" — otherwise a loan is still on the property.', 'ప్రతి "తనఖా"కు తర్వాత "విడుదల" ఉండాలి — లేకపోతే ఆస్తిపై ఇంకా రుణం ఉంది.'),
          b('A sale AFTER the seller\'s purchase to someone else means they already sold it — do not buy.', 'అమ్మకందారు కొన్న తర్వాత వేరొకరికి అమ్మకం కనిపిస్తే వారు ఇప్పటికే అమ్మేశారు — కొనకండి.'),
          b('"Nil encumbrance" for the period means no registered deal at all — fine for a plot that never changed hands, suspicious if the seller claims to have bought it then.', 'ఆ కాలానికి "Nil encumbrance" అంటే రిజిస్టర్డ్ వ్యవహారమే లేదు — ఎప్పుడూ చేతులు మారని ప్లాట్‌కు సరే, అప్పుడే కొన్నానని అమ్మకందారు చెబితే అనుమానం.'),
        ],
      },
      {
        title: b('Signed or certified EC (for banks and courts)', 'సంతకం చేసిన లేదా సర్టిఫైడ్ EC (బ్యాంకులు, కోర్టుల కోసం)'),
        steps: [
          b('Online signed EC: same menu → "Signed EC" → log in (registration portal citizen account) → search → pay the small fee → download a digitally signed PDF.', 'ఆన్‌లైన్ సంతకం EC: అదే మెనూ → "Signed EC" → లాగిన్ (రిజిస్ట్రేషన్ పోర్టల్ సిటిజన్ ఖాతా) → వెతకండి → చిన్న ఫీజు చెల్లించండి → డిజిటల్ సంతకం PDF డౌన్‌లోడ్.'),
          b('Or apply at the SRO or MeeSeva with property details; pay the fee and collect it on the date on your slip.', 'లేదా ఆస్తి వివరాలతో SRO లేదా మీసేవలో దరఖాస్తు చేయండి; ఫీజు చెల్లించి స్లిప్‌లోని తేదీకి తీసుకోండి.'),
        ],
      },
    ],
    costExample: b('Free information EC: ₹0. Certified EC at the SRO: about ₹200 for up to 30 years (₹500 for longer). Online signed EC: a small fee shown before payment.', 'ఉచిత సమాచార EC: ₹0. SROలో సర్టిఫైడ్ EC: 30 ఏళ్ల వరకు సుమారు ₹200 (ఎక్కువ కాలానికి ₹500). ఆన్‌లైన్ సంతకం EC: చెల్లించే ముందు చిన్న ఫీజు చూపిస్తారు.'),
    problems: [
      { problem: b('Search by survey number shows nothing.', 'సర్వే నంబర్‌తో వెతికితే ఏమీ రావడం లేదు.'), fix: b('Try the sub-division forms (e.g. 45/2A and 45-2A), the parent survey number, or search by document number from the seller\'s deed. Old records may need an SRO search.', 'సబ్-డివిజన్ రూపాలు (ఉదా: 45/2A, 45-2A), మాతృ సర్వే నంబర్ ప్రయత్నించండి, లేదా అమ్మకందారు డీడ్‌లోని డాక్యుమెంట్ నంబర్‌తో వెతకండి. పాత రికార్డులకు SRO సెర్చ్ అవసరం కావచ్చు.') },
      { problem: b('EC shows a mortgage with no release.', 'ECలో విడుదల లేని తనఖా కనిపిస్తోంది.'), fix: b('Ask the seller for the bank\'s loan closure letter and to register the release deed before you pay.', 'మీరు చెల్లించే ముందు బ్యాంక్ రుణ ముగింపు లేఖ ఇవ్వమని, విడుదల డీడ్ రిజిస్టర్ చేయమని అమ్మకందారుని అడగండి.') },
    ],
    afterwards: [b('EC does not show court cases, unregistered agreements or who lives there — also check 1B on Meebhoomi, visit the property and ask neighbours.', 'EC కోర్టు కేసులు, రిజిస్టర్ కాని ఒప్పందాలు, ఎవరు ఉంటున్నారో చూపదు — మీభూమిలో 1B కూడా చూడండి, ఆస్తిని సందర్శించి పొరుగువారిని అడగండి.')],
    lastChecked: CHECKED,
  },

  // ───────────────────────────────────────────── CASTE / INCOME / RESIDENCE
  'caste-income-certificate': {
    stages: [
      {
        title: b('Collect the papers', 'పత్రాలు సేకరించడం'),
        steps: [
          b('Applicant\'s Aadhaar (and the parent\'s Aadhaar for a child), and the rice card if you have one.', 'దరఖాస్తుదారు ఆధార్ (పిల్లలకు తల్లి/తండ్రి ఆధార్), ఉంటే రైస్ కార్డు.'),
          b('Caste certificate of the father, mother or a sibling — this is the single most useful paper; without it an enquiry is needed.', 'తండ్రి, తల్లి లేదా తోబుట్టువు కుల ధృవీకరణ — ఇదే అత్యంత ఉపయోగకరమైన పత్రం; లేకపోతే విచారణ అవసరం.'),
          b('Date of birth proof: SSC memo, transfer certificate or birth certificate.', 'పుట్టిన తేదీ రుజువు: SSC మెమో, TC లేదా జనన ధృవీకరణ.'),
          b('Study certificates (Class 1–10) showing where you studied — proves nativity.', 'మీరు ఎక్కడ చదివారో చూపే స్టడీ సర్టిఫికెట్లు (1–10 తరగతులు) — స్థానికతను రుజువు చేస్తాయి.'),
          b('For income: salary certificate / pay slip, or a self-declaration of family income from all sources; land details if you own land.', 'ఆదాయానికి: జీతం సర్టిఫికెట్ / పే స్లిప్, లేదా అన్ని మార్గాల నుండి కుటుంబ ఆదాయ స్వీయ ప్రకటన; భూమి ఉంటే వివరాలు.'),
        ],
      },
      {
        title: b('Apply at the Secretariat or MeeSeva', 'సచివాలయం లేదా మీసేవలో దరఖాస్తు'),
        steps: [
          b('Go to your Village / Ward Secretariat (also called Swarna Gramam / Swarna Ward) — the Digital Assistant handles it — or any MeeSeva centre.', 'మీ గ్రామ / వార్డు సచివాలయానికి (స్వర్ణ గ్రామం / స్వర్ణ వార్డు అని కూడా) వెళ్లండి — డిజిటల్ అసిస్టెంట్ చూస్తారు — లేదా ఏ మీసేవ కేంద్రమైనా.'),
          b('Say exactly which one you need: "Integrated Certificate" (caste + nativity + date of birth) and/or "Income Certificate". For central jobs/colleges ask separately for EWS or OBC (Non-Creamy Layer).', 'మీకు ఏది కావాలో ఖచ్చితంగా చెప్పండి: "ఇంటిగ్రేటెడ్ సర్టిఫికెట్" (కులం + స్థానికత + పుట్టిన తేదీ) మరియు/లేదా "ఆదాయ ధృవీకరణ". కేంద్ర ఉద్యోగాలు/కాలేజీలకు EWS లేదా OBC (నాన్-క్రీమీ లేయర్) వేరుగా అడగండి.'),
          b('Check every spelling on the screen before submission — name, father\'s name, caste and sub-caste exactly as in the parent\'s certificate.', 'సబ్మిట్ చేసే ముందు స్క్రీన్‌పై ప్రతి స్పెల్లింగ్ చూడండి — పేరు, తండ్రి పేరు, కులం, ఉపకులం తల్లి/తండ్రి సర్టిఫికెట్‌లో ఉన్నట్లే.'),
          b('Pay the small fee and take the printed receipt with the application number. Pay nothing extra.', 'చిన్న ఫీజు చెల్లించి అప్లికేషన్ నంబర్‌తో ముద్రిత రసీదు తీసుకోండి. అదనంగా ఏమీ ఇవ్వకండి.'),
        ],
      },
      {
        title: b('Verification', 'ధృవీకరణ'),
        steps: [
          b('The Village Revenue Officer checks your papers; if no family member has a certificate, they enquire with neighbours and village elders.', 'VRO మీ పత్రాలు తనిఖీ చేస్తారు; కుటుంబంలో ఎవరికీ సర్టిఫికెట్ లేకపోతే పొరుగువారిని, గ్రామ పెద్దలను విచారిస్తారు.'),
          b('The Revenue Inspector recommends and the Tahsildar (MRO) signs digitally.', 'రెవెన్యూ ఇన్‌స్పెక్టర్ సిఫారసు చేస్తారు, తహసీల్దార్ (MRO) డిజిటల్ సంతకం చేస్తారు.'),
          b('Track status with the application number at the Secretariat, on the AP Seva / MeeSeva site, or on Mana Mitra WhatsApp (9552300009).', 'అప్లికేషన్ నంబర్‌తో సచివాలయంలో, AP సేవ / మీసేవ సైట్‌లో లేదా మన మిత్ర వాట్సాప్ (9552300009)లో స్టేటస్ చూడండి.'),
        ],
      },
      {
        title: b('Get the certificate', 'సర్టిఫికెట్ పొందడం'),
        steps: [
          b('Download it free on Mana Mitra WhatsApp: send "Hi" → certificates → enter the application number, or collect a print at the Secretariat.', 'మన మిత్ర వాట్సాప్‌లో ఉచితంగా డౌన్‌లోడ్ చేయండి: "Hi" పంపండి → సర్టిఫికెట్లు → అప్లికేషన్ నంబర్ నమోదు చేయండి, లేదా సచివాలయంలో ప్రింట్ తీసుకోండి.'),
          b('Check it immediately. If anything is wrong, apply for correction at once — don\'t use a wrong certificate for admission.', 'వెంటనే తనిఖీ చేయండి. ఏదైనా తప్పుంటే వెంటనే సవరణకు దరఖాస్తు చేయండి — తప్పు సర్టిఫికెట్‌తో ప్రవేశానికి వెళ్లకండి.'),
          b('Save the PDF in DigiLocker and keep 2–3 printed copies.', 'PDFను డిజిలాకర్‌లో సేవ్ చేసి 2–3 ప్రింట్ కాపీలు ఉంచుకోండి.'),
        ],
      },
    ],
    costExample: b('Usually a small service fee of a few tens of rupees per certificate at the Secretariat / MeeSeva, as printed on the receipt. Download on WhatsApp is free.', 'సచివాలయం / మీసేవలో సాధారణంగా ఒక్కో సర్టిఫికెట్‌కు కొన్ని పదుల రూపాయల సేవా ఫీజు — రసీదుపై ముద్రించినట్లు. వాట్సాప్‌లో డౌన్‌లోడ్ ఉచితం.'),
    problems: [
      { problem: b('Rejected: "caste not proved".', 'తిరస్కరణ: "కులం రుజువు కాలేదు".'), fix: b('Reapply with more proof: a relative\'s certificate, old school records showing caste, or a community elder\'s statement. You can also raise a PGRS grievance with the rejection number.', 'మరిన్ని రుజువులతో మళ్లీ దరఖాస్తు చేయండి: బంధువు సర్టిఫికెట్, కులం చూపే పాత స్కూల్ రికార్డులు, లేదా కుల పెద్ద ప్రకటన. తిరస్కరణ నంబర్‌తో PGRS ఫిర్యాదు కూడా చేయవచ్చు.') },
      { problem: b('Taking too long, admission deadline near.', 'చాలా ఆలస్యం, ప్రవేశ గడువు దగ్గరపడింది.'), fix: b('Show the application receipt to the college — many accept it provisionally. Meet the Tahsildar with the receipt and the admission deadline proof.', 'కాలేజీకి అప్లికేషన్ రసీదు చూపించండి — చాలా తాత్కాలికంగా అంగీకరిస్తాయి. రసీదు, ప్రవేశ గడువు రుజువుతో తహసీల్దార్‌ను కలవండి.') },
      { problem: b('Spelling on the certificate differs from Aadhaar.', 'సర్టిఫికెట్‌లో స్పెల్లింగ్ ఆధార్‌కు భిన్నంగా ఉంది.'), fix: b('Apply for correction of the certificate at the Secretariat with Aadhaar and SSC memo.', 'ఆధార్, SSC మెమోతో సచివాలయంలో సర్టిఫికెట్ సవరణకు దరఖాస్తు చేయండి.') },
    ],
    afterwards: [
      b('The integrated (caste) certificate is generally valid for life; income certificates must usually be recent (often this financial year) — apply fresh when a scheme asks.', 'ఇంటిగ్రేటెడ్ (కుల) సర్టిఫికెట్ సాధారణంగా జీవితకాలం చెల్లుతుంది; ఆదాయ సర్టిఫికెట్లు సాధారణంగా ఇటీవలివే కావాలి (తరచుగా ఈ ఆర్థిక సంవత్సరం) — పథకం అడిగినప్పుడు కొత్తగా దరఖాస్తు చేయండి.'),
      b('Apply in March–April, before the admission rush of May–July.', 'మే–జూలై ప్రవేశాల రద్దీకి ముందే మార్చి–ఏప్రిల్‌లో దరఖాస్తు చేయండి.'),
    ],
    lastChecked: CHECKED,
  },

  // ───────────────────────────────────────────── BIRTH & DEATH
  'birth-death-certificate': {
    stages: [
      {
        title: b('Register within 21 days (free)', '21 రోజుల్లో నమోదు (ఉచితం)'),
        steps: [
          b('Hospital birth or death: before discharge, ask the hospital "Has it been registered? What is the registration number?" Write the number down.', 'ఆసుపత్రిలో జననం లేదా మరణం: డిశ్చార్జ్‌కు ముందు "నమోదు చేశారా? రిజిస్ట్రేషన్ నంబర్ ఏమిటి?" అని ఆసుపత్రిని అడగండి. నంబర్ రాసుకోండి.'),
          b('Home birth or death: inform the Panchayat Secretary (village) or the municipal office / Ward Secretariat (town) within 21 days. Give names, date, time, place, parents\' / deceased\'s Aadhaar and address.', 'ఇంట్లో జననం లేదా మరణం: 21 రోజుల్లో పంచాయతీ కార్యదర్శికి (గ్రామం) లేదా మున్సిపల్ ఆఫీసు / వార్డు సచివాలయానికి (పట్టణం) తెలియజేయండి. పేర్లు, తేదీ, సమయం, స్థలం, తల్లిదండ్రుల / మృతుని ఆధార్, చిరునామా ఇవ్వండి.'),
          b('Check the spellings on the form before it is submitted — the certificate will carry exactly what is written.', 'ఫారం సమర్పించే ముందు స్పెల్లింగ్‌లు సరిచూడండి — రాసినదే సర్టిఫికెట్‌లో వస్తుంది.'),
        ],
        note: b('Between 21 days and 1 year: a small late fee and an affidavit. After 1 year: an order from the RDO / Executive Magistrate is also needed — avoid this by registering on time.', '21 రోజుల నుండి 1 ఏడాది మధ్య: చిన్న ఆలస్య రుసుము, అఫిడవిట్. 1 ఏడాది తర్వాత: RDO / ఎగ్జిక్యూటివ్ మేజిస్ట్రేట్ ఉత్తర్వు కూడా కావాలి — సమయానికి నమోదు చేసి దీన్ని నివారించండి.'),
      },
      {
        title: b('Download the certificate', 'సర్టిఫికెట్ డౌన్‌లోడ్'),
        steps: [
          b('Mana Mitra WhatsApp: send "Hi" to 9552300009 → certificates → birth / death → enter details → PDF comes in the chat.', 'మన మిత్ర వాట్సాప్: 9552300009కి "Hi" పంపండి → సర్టిఫికెట్లు → జనన / మరణ → వివరాలు నమోదు → చాట్‌లో PDF వస్తుంది.'),
          b('Or the national CRS portal (dc.crsorgi.gov.in) with the registration number, or MeeSeva.', 'లేదా రిజిస్ట్రేషన్ నంబర్‌తో జాతీయ CRS పోర్టల్ (dc.crsorgi.gov.in), లేదా మీసేవ.'),
          b('Check: name, parents\' names, date and place. For a death certificate, take several copies — pensions, insurance, banks and land mutation each need one.', 'చూడండి: పేరు, తల్లిదండ్రుల పేర్లు, తేదీ, స్థలం. మరణ ధృవీకరణకు చాలా కాపీలు తీసుకోండి — పెన్షన్లు, బీమా, బ్యాంకులు, భూమి మ్యుటేషన్ ఒక్కొక్కటికీ కావాలి.'),
        ],
      },
      {
        title: b('Add the child\'s name (if issued without a name)', 'పిల్లల పేరు చేర్చడం (పేరు లేకుండా జారీ అయితే)'),
        steps: [
          b('Choose the name and spell it exactly as you will use it in school and Aadhaar.', 'పేరు ఎంచుకుని, పాఠశాల, ఆధార్‌లో వాడే విధంగానే స్పెల్లింగ్ నిర్ణయించండి.'),
          b('Make a notarised affidavit by the parents stating the child\'s name.', 'పిల్లల పేరు తెలిపే తల్లిదండ్రుల నోటరీ అఫిడవిట్ చేయించండి.'),
          b('Apply at MeeSeva or the Secretariat for "Child name inclusion" with the certificate, affidavit and parents\' Aadhaar. Within 1 year it is simple and cheap.', 'సర్టిఫికెట్, అఫిడవిట్, తల్లిదండ్రుల ఆధార్‌తో మీసేవ లేదా సచివాలయంలో "Child name inclusion"కు దరఖాస్తు చేయండి. 1 ఏడాది లోపు సులభం, చౌక.'),
          b('Download the new certificate with the name after approval (about 3 weeks).', 'ఆమోదం తర్వాత (సుమారు 3 వారాలు) పేరుతో కొత్త సర్టిఫికెట్ డౌన్‌లోడ్ చేయండి.'),
        ],
      },
      {
        title: b('Correct a mistake', 'తప్పు సరిచేయడం'),
        steps: [
          b('Apply to the same registrar (panchayat / municipality) through the Secretariat or MeeSeva for "Correction".', 'అదే రిజిస్ట్రార్‌కు (పంచాయతీ / మున్సిపాలిటీ) సచివాలయం లేదా మీసేవ ద్వారా "Correction"కు దరఖాస్తు చేయండి.'),
          b('Attach proof of the correct detail: hospital record, school certificate, Aadhaar; an affidavit if asked.', 'సరైన వివరం రుజువు జత చేయండి: ఆసుపత్రి రికార్డు, స్కూల్ సర్టిఫికెట్, ఆధార్; అడిగితే అఫిడవిట్.'),
          b('After approval, download the corrected certificate.', 'ఆమోదం తర్వాత సవరించిన సర్టిఫికెట్ డౌన్‌లోడ్ చేయండి.'),
        ],
      },
    ],
    costExample: b('Registration within 21 days: free. Adding the child\'s name within 1 year: about ₹30 at MeeSeva + notary charges for the affidavit. Late registration: small late fee + affidavit (+ magistrate order after 1 year).', '21 రోజుల్లో నమోదు: ఉచితం. 1 ఏడాది లోపు పిల్లల పేరు చేర్పు: మీసేవలో సుమారు ₹30 + అఫిడవిట్‌కు నోటరీ ఛార్జీలు. ఆలస్య నమోదు: చిన్న ఆలస్య రుసుము + అఫిడవిట్ (+ 1 ఏడాది తర్వాత మేజిస్ట్రేట్ ఉత్తర్వు).'),
    problems: [
      { problem: b('Hospital says it registered but the certificate can\'t be found online.', 'ఆసుపత్రి నమోదు చేశామంటోంది కానీ ఆన్‌లైన్‌లో సర్టిఫికెట్ దొరకడం లేదు.'), fix: b('Ask the hospital for the registration number and the registrar (panchayat / municipality) it was sent to; visit that office with the discharge summary.', 'రిజిస్ట్రేషన్ నంబర్, ఏ రిజిస్ట్రార్‌కు (పంచాయతీ / మున్సిపాలిటీ) పంపారో ఆసుపత్రిని అడగండి; డిశ్చార్జ్ సమ్మరీతో ఆ ఆఫీసుకు వెళ్లండి.') },
      { problem: b('Birth was never registered and the person is now an adult.', 'జననం ఎప్పుడూ నమోదు కాలేదు, ఆ వ్యక్తి ఇప్పుడు పెద్దవారు.'), fix: b('Get a Non-Availability Certificate from the local body, make an affidavit with school/hospital proof, and apply to the RDO for a late-registration order; then register.', 'స్థానిక సంస్థ నుండి నాన్-అవైలబిలిటీ సర్టిఫికెట్ తీసుకుని, స్కూల్/ఆసుపత్రి రుజువుతో అఫిడవిట్ చేయించి, ఆలస్య నమోదు ఉత్తర్వుకు RDOకు దరఖాస్తు చేయండి; తర్వాత నమోదు చేయండి.') },
    ],
    afterwards: [
      b('Birth certificate is the main date-of-birth proof for school, Aadhaar and passport — keep it safe in DigiLocker.', 'పాఠశాల, ఆధార్, పాస్‌పోర్ట్‌కు జనన ధృవీకరణే ముఖ్య పుట్టిన తేదీ రుజువు — డిజిలాకర్‌లో భద్రంగా ఉంచండి.'),
      b('After a death: next get the Family Member Certificate, then claim pension, insurance and bank money, and apply for land mutation.', 'మరణం తర్వాత: తర్వాత కుటుంబ సభ్యుల ధృవీకరణ తీసుకుని, పెన్షన్, బీమా, బ్యాంక్ డబ్బు క్లెయిమ్ చేసి, భూమి మ్యుటేషన్‌కు దరఖాస్తు చేయండి.'),
    ],
    lastChecked: CHECKED,
  },

  // ───────────────────────────────────────────── FAMILY MEMBER CERTIFICATE
  'family-member-certificate': {
    stages: [
      {
        title: b('Before you apply', 'దరఖాస్తుకు ముందు'),
        steps: [
          b('Get the death certificate (see the Birth & Death guide).', 'మరణ ధృవీకరణ తీసుకోండి (జనన & మరణ గైడ్ చూడండి).'),
          b('Make a list of ALL family members of the deceased: spouse, sons, daughters (married or not), and parents if alive — with age, relationship and Aadhaar.', 'మృతుని కుటుంబ సభ్యులందరి జాబితా తయారు చేయండి: జీవిత భాగస్వామి, కుమారులు, కుమార్తెలు (వివాహితులైనా కాకపోయినా), తల్లిదండ్రులు బతికి ఉంటే — వయస్సు, సంబంధం, ఆధార్‌తో.'),
          b('Know the purpose: for a government employee\'s benefits (pension, gratuity) or for other uses (bank, insurance, land, relief). The form asks this.', 'ఉద్దేశం తెలుసుకోండి: ప్రభుత్వ ఉద్యోగి ప్రయోజనాలకు (పెన్షన్, గ్రాట్యుటీ) లేదా ఇతర వాటికి (బ్యాంక్, బీమా, భూమి, సహాయం). ఫారం ఇది అడుగుతుంది.'),
          b('Prepare a self-declaration (affidavit if asked) listing the family members, signed by the applicant.', 'కుటుంబ సభ్యుల జాబితాతో దరఖాస్తుదారు సంతకం చేసిన స్వీయ ప్రకటన (అడిగితే అఫిడవిట్) సిద్ధం చేయండి.'),
        ],
      },
      {
        title: b('Apply', 'దరఖాస్తు'),
        steps: [
          b('At the Village / Ward Secretariat or MeeSeva, ask for "Family Member Certificate".', 'గ్రామ / వార్డు సచివాలయం లేదా మీసేవలో "Family Member Certificate" అడగండి.'),
          b('Give the death certificate, your Aadhaar and rice card / voter ID, the family list and IDs. Biometric is taken.', 'మరణ ధృవీకరణ, మీ ఆధార్, రైస్ కార్డు / ఓటర్ ID, కుటుంబ జాబితా, IDలు ఇవ్వండి. బయోమెట్రిక్ తీసుకుంటారు.'),
          b('Check that every name and relationship on the screen is right, pay the fee, keep the receipt.', 'స్క్రీన్‌పై ప్రతి పేరు, సంబంధం సరిగా ఉందో చూసి, ఫీజు చెల్లించి రసీదు ఉంచుకోండి.'),
        ],
      },
      {
        title: b('Enquiry and issue', 'విచారణ, జారీ'),
        steps: [
          b('The VRO / Revenue Inspector visits or calls neighbours and family to confirm the members.', 'సభ్యులను ధృవీకరించడానికి VRO / రెవెన్యూ ఇన్‌స్పెక్టర్ పొరుగువారిని, కుటుంబాన్ని సందర్శిస్తారు లేదా పిలుస్తారు.'),
          b('The Tahsildar signs. Download it on Mana Mitra WhatsApp (9552300009) or collect it at the Secretariat.', 'తహసీల్దార్ సంతకం చేస్తారు. మన మిత్ర వాట్సాప్ (9552300009)లో డౌన్‌లోడ్ చేయండి లేదా సచివాలయంలో తీసుకోండి.'),
        ],
      },
      {
        title: b('Use it', 'దాన్ని ఉపయోగించడం'),
        steps: [
          b('Pension: the spouse applies for family pension / NTR Bharosa spouse pension at the Secretariat.', 'పెన్షన్: జీవిత భాగస్వామి సచివాలయంలో ఫ్యామిలీ పెన్షన్ / NTR భరోసా స్పౌజ్ పెన్షన్‌కు దరఖాస్తు చేస్తారు.'),
          b('Bank / post office / insurance: submit with the death certificate and the nominee\'s ID for the claim.', 'బ్యాంక్ / పోస్టాఫీసు / బీమా: క్లెయిమ్‌కు మరణ ధృవీకరణ, నామినీ IDతో సమర్పించండి.'),
          b('Land: apply for "Mutation for Transactions" (succession) with all heirs\' consent (see Land Mutation guide).', 'భూమి: వారసులందరి అంగీకారంతో "Mutation for Transactions" (వారసత్వం)కు దరఖాస్తు చేయండి (భూమి మ్యుటేషన్ గైడ్ చూడండి).'),
          b('PF / EPF of the deceased: file a death claim on the EPFO portal with this certificate.', 'మృతుని PF / EPF: ఈ సర్టిఫికెట్‌తో EPFO పోర్టల్‌లో డెత్ క్లెయిమ్ చేయండి.'),
        ],
      },
    ],
    costExample: b('Only the small service fee printed on the Secretariat / MeeSeva receipt. Affidavit (if asked): notary charges.', 'సచివాలయం / మీసేవ రసీదుపై ముద్రించిన చిన్న సేవా ఫీజు మాత్రమే. అఫిడవిట్ (అడిగితే): నోటరీ ఛార్జీలు.'),
    problems: [
      { problem: b('A family member was left out.', 'ఒక కుటుంబ సభ్యుడిని వదిలేశారు.'), fix: b('Apply for correction immediately. A certificate that hides an heir can be cancelled, and claims made with it can be recovered.', 'వెంటనే సవరణకు దరఖాస్తు చేయండి. వారసుడిని దాచిన సర్టిఫికెట్ రద్దు కావచ్చు, దానితో పొందిన క్లెయిమ్‌లు వసూలు చేయవచ్చు.') },
      { problem: b('The bank asks for a "succession certificate" instead.', 'బ్యాంక్ బదులుగా "సక్సెషన్ సర్టిఫికెట్" అడుగుతోంది.'), fix: b('For large amounts or disputes, banks may need a civil-court succession certificate. Get free help from DLSA (15100).', 'పెద్ద మొత్తాలకు లేదా వివాదాలకు బ్యాంకులు సివిల్ కోర్టు సక్సెషన్ సర్టిఫికెట్ అడగవచ్చు. DLSA (15100) నుండి ఉచిత సహాయం పొందండి.') },
    ],
    afterwards: [b('Keep several copies — each claim (bank, insurance, PF, land, pension) needs one.', 'చాలా కాపీలు ఉంచుకోండి — ప్రతి క్లెయిమ్‌కు (బ్యాంక్, బీమా, PF, భూమి, పెన్షన్) ఒకటి కావాలి.')],
    lastChecked: CHECKED,
  },
};
