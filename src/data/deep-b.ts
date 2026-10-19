import { Guide } from '../types';
import { b, CHECKED } from './bi';

const s = (en: string, te: string) => b(en, te);

/** Full walkthroughs, batch B (checked 20 Oct 2026): IDs, home, health, farmer & family schemes. */
export const deepB: Record<string, Partial<Guide>> = {
  // ───────────────────────────────────────────── AADHAAR UPDATE
  'aadhaar-update': {
    stages: [
      {
        title: s('Decide: online or at a centre', 'నిర్ణయం: ఆన్‌లైన్ లేదా కేంద్రంలో'),
        steps: [
          s('Online (free until 14 June 2027): address change and "document update" (refreshing your proof of identity and address). You need the mobile linked to Aadhaar.', 'ఆన్‌లైన్ (14 జూన్ 2027 వరకు ఉచితం): చిరునామా మార్పు, "డాక్యుమెంట్ అప్‌డేట్" (గుర్తింపు, చిరునామా రుజువు తాజా చేయడం). ఆధార్‌కు లింక్ అయిన మొబైల్ కావాలి.'),
          s('At a centre only: mobile number, name, date of birth, gender, photo, fingerprints, iris, email.', 'కేంద్రంలో మాత్రమే: మొబైల్ నంబర్, పేరు, పుట్టిన తేదీ, లింగం, ఫోటో, వేలిముద్రలు, కనుపాప, ఈమెయిల్.'),
          s('Name can be changed only twice and date of birth only once in a lifetime (more only with special approval) — get it right.', 'పేరు జీవితంలో రెండుసార్లు, పుట్టిన తేదీ ఒక్కసారి మాత్రమే మార్చగలరు (ప్రత్యేక ఆమోదంతోనే ఎక్కువ) — సరిగ్గా చేయండి.'),
        ],
      },
      {
        title: s('Online address / document update', 'ఆన్‌లైన్ చిరునామా / డాక్యుమెంట్ అప్‌డేట్'),
        steps: [
          s('Open myaadhaar.uidai.gov.in → "Login" → Aadhaar number + captcha → OTP.', 'myaadhaar.uidai.gov.in → "Login" → ఆధార్ నంబర్ + క్యాప్చా → OTP.'),
          s('Choose "Address Update" (or "Document Update").', '"Address Update" (లేదా "Document Update") ఎంచుకోండి.'),
          s('Type the new address exactly as on your proof (house number, street, village, mandal, district, PIN).', 'మీ రుజువులో ఉన్నట్లే కొత్త చిరునామా టైప్ చేయండి (ఇంటి నంబర్, వీధి, గ్రామం, మండలం, జిల్లా, PIN).'),
          s('Upload a clear scan/photo of the proof in your name: bank passbook, electricity bill, rice card, rent agreement, passport etc.', 'మీ పేరుపై ఉన్న రుజువు స్పష్టమైన స్కాన్/ఫోటో అప్‌లోడ్ చేయండి: బ్యాంక్ పాస్‌బుక్, కరెంట్ బిల్లు, రైస్ కార్డు, అద్దె ఒప్పందం, పాస్‌పోర్ట్ మొ.'),
          s('Submit and note the SRN / URN. Track with it on the same site; download the updated e-Aadhaar after approval.', 'సబ్మిట్ చేసి SRN / URN నోట్ చేయండి. అదే సైట్‌లో ట్రాక్ చేసి, ఆమోదం తర్వాత అప్‌డేట్ అయిన e-ఆధార్ డౌన్‌లోడ్ చేయండి.'),
        ],
        note: s('No proof in your own name? Use "Head of Family" address update — the family head approves it with an OTP.', 'మీ పేరుపై రుజువు లేదా? "Head of Family" చిరునామా అప్‌డేట్ వాడండి — కుటుంబ పెద్ద OTPతో ఆమోదిస్తారు.'),
      },
      {
        title: s('At an Aadhaar centre', 'ఆధార్ కేంద్రంలో'),
        steps: [
          s('Find a centre (bank, post office, Aadhaar Seva Kendra) on the UIDAI site and book an appointment at appointments.uidai.gov.in, or walk in early.', 'UIDAI సైట్‌లో కేంద్రాన్ని (బ్యాంక్, పోస్టాఫీసు, ఆధార్ సేవా కేంద్రం) కనుక్కుని appointments.uidai.gov.inలో అపాయింట్‌మెంట్ బుక్ చేయండి, లేదా ఉదయాన్నే వెళ్లండి.'),
          s('Carry the original proof for the change (birth certificate / SSC for date of birth; gazette or marriage certificate for name).', 'మార్పుకు అసలు రుజువు తీసుకెళ్లండి (పుట్టిన తేదీకి జనన ధృవీకరణ / SSC; పేరుకు గెజిట్ లేదా వివాహ ధృవీకరణ).'),
          s('The operator enters the change, takes your fingerprint to confirm, and gives an acknowledgement slip with the URN. Check the printed details before leaving.', 'ఆపరేటర్ మార్పు నమోదు చేసి, ధృవీకరణకు వేలిముద్ర తీసుకుని, URNతో రసీదు ఇస్తారు. వెళ్లే ముందు ముద్రించిన వివరాలు సరిచూడండి.'),
          s('Pay only the official fee and get it printed on the slip.', 'అధికారిక ఫీజు మాత్రమే చెల్లించి స్లిప్‌పై ముద్రింపజేయండి.'),
        ],
      },
      {
        title: s('After the update', 'అప్‌డేట్ తర్వాత'),
        steps: [
          s('Download the new e-Aadhaar (free) or order a PVC card (₹75).', 'కొత్త e-ఆధార్ డౌన్‌లోడ్ చేయండి (ఉచితం) లేదా PVC కార్డు ఆర్డర్ చేయండి (₹75).'),
          s('Update the same details at your bank, gas agency, rice card and schemes so payments don\'t fail.', 'చెల్లింపులు ఆగకుండా అవే వివరాలు బ్యాంక్, గ్యాస్ ఏజెన్సీ, రైస్ కార్డు, పథకాల్లో అప్‌డేట్ చేయండి.'),
        ],
      },
    ],
    costExample: s('Online address/document update: free (till 14 June 2027). At a centre: ₹75 for name/DOB/address/mobile; ₹125 for photo/fingerprints. Children\'s updates at 5–7 and 15–17: free.', 'ఆన్‌లైన్ చిరునామా/డాక్యుమెంట్ అప్‌డేట్: ఉచితం (14 జూన్ 2027 వరకు). కేంద్రంలో: పేరు/పుట్టిన తేదీ/చిరునామా/మొబైల్‌కు ₹75; ఫోటో/వేలిముద్రలకు ₹125. 5–7, 15–17 వయస్సు పిల్లల అప్‌డేట్లు: ఉచితం.'),
    problems: [
      { problem: s('Update rejected.', 'అప్‌డేట్ తిరస్కరించారు.'), fix: s('Check the reason on the status page — usually an unclear or mismatched document. Reapply with a clear document in exactly the same name.', 'స్టేటస్ పేజీలో కారణం చూడండి — సాధారణంగా అస్పష్టమైన లేదా సరిపోని పత్రం. అదే పేరుతో స్పష్టమైన పత్రంతో మళ్లీ దరఖాస్తు చేయండి.') },
      { problem: s('Name/DOB change limit already used.', 'పేరు/పుట్టిన తేదీ మార్పు పరిమితి అయిపోయింది.'), fix: s('Visit an Aadhaar Seva Kendra with proofs; it goes for special approval by UIDAI regional office. Call 1947 for guidance.', 'రుజువులతో ఆధార్ సేవా కేంద్రానికి వెళ్లండి; UIDAI ప్రాంతీయ కార్యాలయ ప్రత్యేక ఆమోదానికి వెళ్తుంది. మార్గదర్శనానికి 1947కి కాల్ చేయండి.') },
    ],
    afterwards: [s('Lock your biometrics on myAadhaar if you don\'t use fingerprint services often (see the Aadhaar misuse guide).', 'వేలిముద్ర సేవలు తరచూ వాడకపోతే myAadhaarలో బయోమెట్రిక్స్ లాక్ చేయండి (ఆధార్ దుర్వినియోగం గైడ్ చూడండి).')],
    lastChecked: CHECKED,
  },

  // ───────────────────────────────────────────── PAN
  'pan-card': {
    stages: [
      {
        title: s('Never had a PAN: free instant e-PAN', 'ఎప్పుడూ PAN లేదు: ఉచిత తక్షణ e-PAN'),
        steps: [
          s('Open incometax.gov.in → "Instant e-PAN" → "Get New e-PAN".', 'incometax.gov.in → "Instant e-PAN" → "Get New e-PAN" తెరవండి.'),
          s('Enter Aadhaar, tick the declaration, and enter the OTP sent to the Aadhaar-linked mobile.', 'ఆధార్ నమోదు చేసి, డిక్లరేషన్ టిక్ చేసి, ఆధార్ లింక్ మొబైల్‌కు వచ్చిన OTP నమోదు చేయండి.'),
          s('Confirm your Aadhaar details (name, DOB, photo are taken from Aadhaar) and add an email if you like.', 'మీ ఆధార్ వివరాలు నిర్ధారించండి (పేరు, పుట్టిన తేదీ, ఫోటో ఆధార్ నుండి) — కావాలంటే ఈమెయిల్ చేర్చండి.'),
          s('PAN is allotted in minutes. Come back to "Check Status / Download e-PAN" with Aadhaar to download the PDF.', 'నిమిషాల్లో PAN వస్తుంది. ఆధార్‌తో "Check Status / Download e-PAN"లో PDF డౌన్‌లోడ్ చేయండి.'),
        ],
        note: s('The e-PAN PDF is valid everywhere — a plastic card is optional.', 'e-PAN PDF ప్రతిచోటా చెల్లుతుంది — ప్లాస్టిక్ కార్డు ఐచ్ఛికం.'),
      },
      {
        title: s('Plastic card, corrections or reprint', 'ప్లాస్టిక్ కార్డు, సవరణలు, రీప్రింట్'),
        steps: [
          s('Look at the back of your old card (or your e-PAN) to see who issued it: Protean (NSDL) or UTIITSL — use that website.', 'మీ పాత కార్డు వెనుక (లేదా e-PAN) చూసి ఎవరు జారీ చేశారో తెలుసుకోండి: Protean (NSDL) లేదా UTIITSL — ఆ వెబ్‌సైట్ వాడండి.'),
          s('Choose "Changes or Correction in PAN data" (or "Reprint of PAN card"), fill the form, and verify with Aadhaar OTP (paperless e-KYC).', '"Changes or Correction in PAN data" (లేదా "Reprint of PAN card") ఎంచుకుని, ఫారం నింపి, ఆధార్ OTPతో ధృవీకరించండి (పేపర్‌లెస్ e-KYC).'),
          s('Upload proof for the change (Aadhaar showing the correct name/DOB), pay the small fee, and note the acknowledgement number.', 'మార్పుకు రుజువు (సరైన పేరు/పుట్టిన తేదీ ఉన్న ఆధార్) అప్‌లోడ్ చేసి, చిన్న ఫీజు చెల్లించి, అక్నాలెడ్జ్‌మెంట్ నంబర్ నోట్ చేయండి.'),
          s('The new card comes by post in about 2 weeks; the updated e-PAN is emailed earlier.', 'కొత్త కార్డు సుమారు 2 వారాల్లో పోస్ట్‌లో వస్తుంది; అప్‌డేట్ అయిన e-PAN ముందే ఈమెయిల్‌కు వస్తుంది.'),
        ],
      },
      {
        title: s('Link PAN with Aadhaar', 'PANను ఆధార్‌తో లింక్ చేయడం'),
        steps: [
          s('incometax.gov.in → "Link Aadhaar" → PAN + Aadhaar → OTP. If a late fee applies, the site tells you and lets you pay first.', 'incometax.gov.in → "Link Aadhaar" → PAN + ఆధార్ → OTP. ఆలస్య రుసుము ఉంటే సైట్ చెప్పి ముందుగా చెల్లించనిస్తుంది.'),
          s('Check "Link Aadhaar Status" after a few days. An unlinked PAN becomes inoperative (bank, tax refunds can be blocked).', 'కొన్ని రోజుల తర్వాత "Link Aadhaar Status" చూడండి. లింక్ కాని PAN పనిచేయదు (బ్యాంక్, పన్ను రీఫండ్‌లు ఆగవచ్చు).'),
        ],
      },
    ],
    costExample: s('Instant e-PAN: free. Physical card / reprint / correction: a small fee (about ₹50–₹110 in India) shown before payment.', 'తక్షణ e-PAN: ఉచితం. ఫిజికల్ కార్డు / రీప్రింట్ / సవరణ: చెల్లించే ముందు చూపే చిన్న ఫీజు (భారతదేశంలో సుమారు ₹50–₹110).'),
    problems: [
      { problem: s('"PAN already exists for this Aadhaar".', '"ఈ ఆధార్‌కు ఇప్పటికే PAN ఉంది".'), fix: s('You already have a PAN — use "Know your PAN" / download e-PAN instead. Never apply for a second PAN (penalty).', 'మీకు ఇప్పటికే PAN ఉంది — "Know your PAN" / e-PAN డౌన్‌లోడ్ వాడండి. రెండో PANకు ఎప్పుడూ దరఖాస్తు చేయకండి (జరిమానా).') },
      { problem: s('Name on PAN and Aadhaar don\'t match, so linking fails.', 'PAN, ఆధార్‌లో పేరు సరిపోక లింకింగ్ విఫలమవుతోంది.'), fix: s('Correct whichever is wrong first (PAN correction or Aadhaar update), then link.', 'ఏది తప్పో దాన్ని ముందు సరిచేయండి (PAN సవరణ లేదా ఆధార్ అప్‌డేట్), తర్వాత లింక్ చేయండి.') },
    ],
    afterwards: [s('Keep the e-PAN PDF in DigiLocker.', 'e-PAN PDFను డిజిలాకర్‌లో ఉంచండి.')],
    lastChecked: CHECKED,
  },

  // ───────────────────────────────────────────── VOTER ID
  'voter-id': {
    stages: [
      {
        title: s('Check first', 'ముందుగా తనిఖీ'),
        steps: [
          s('On voters.eci.gov.in → "Search in Electoral Roll" check whether your name is already listed (search by EPIC number, or by name and details).', 'voters.eci.gov.in → "Search in Electoral Roll"లో మీ పేరు ఇప్పటికే ఉందో చూడండి (EPIC నంబర్‌తో, లేదా పేరు, వివరాలతో).'),
          s('Listed already? You need Form 8 (correction / shift), not a new registration.', 'ఇప్పటికే ఉందా? కొత్త నమోదు కాదు, ఫారం 8 (సవరణ / మార్పు) కావాలి.'),
        ],
      },
      {
        title: s('Apply online', 'ఆన్‌లైన్ దరఖాస్తు'),
        steps: [
          s('Open voters.eci.gov.in or the Voter Helpline app → sign up with mobile → log in with OTP.', 'voters.eci.gov.in లేదా Voter Helpline యాప్ → మొబైల్‌తో సైన్ అప్ → OTPతో లాగిన్.'),
          s('New voter: "Form 6". Fill name, relative\'s name, DOB, address, assembly constituency; upload photo, age proof (birth certificate / SSC / Aadhaar) and address proof.', 'కొత్త ఓటరు: "ఫారం 6". పేరు, బంధువు పేరు, పుట్టిన తేదీ, చిరునామా, అసెంబ్లీ నియోజకవర్గం నింపి; ఫోటో, వయస్సు రుజువు (జనన ధృవీకరణ / SSC / ఆధార్), చిరునామా రుజువు అప్‌లోడ్ చేయండి.'),
          s('Correction, moved house, or a replacement card: "Form 8" — tick what you want and upload proof.', 'సవరణ, ఇల్లు మారడం, లేదా కొత్త కార్డు: "ఫారం 8" — కావాల్సింది టిక్ చేసి రుజువు అప్‌లోడ్ చేయండి.'),
          s('Submit and note the reference number; track with it on the same site.', 'సబ్మిట్ చేసి రిఫరెన్స్ నంబర్ నోట్ చేయండి; దానితో అదే సైట్‌లో ట్రాక్ చేయండి.'),
        ],
      },
      {
        title: s('Verification and card', 'ధృవీకరణ, కార్డు'),
        steps: [
          s('The Booth Level Officer (BLO) may visit your house to confirm.', 'బూత్ లెవల్ ఆఫీసర్ (BLO) నిర్ధారించడానికి మీ ఇంటికి రావచ్చు.'),
          s('After approval, download the e-EPIC (digital voter ID) from the same portal; the PVC card comes by post.', 'ఆమోదం తర్వాత అదే పోర్టల్ నుండి e-EPIC (డిజిటల్ ఓటర్ ID) డౌన్‌లోడ్ చేయండి; PVC కార్డు పోస్ట్‌లో వస్తుంది.'),
        ],
      },
    ],
    costExample: s('Everything is free: registration, correction, shifting, e-EPIC and the posted card.', 'అన్నీ ఉచితం: నమోదు, సవరణ, మార్పు, e-EPIC, పోస్ట్‌లో వచ్చే కార్డు.'),
    problems: [
      { problem: s('Name missing from the roll close to an election.', 'ఎన్నికల ముందు జాబితాలో పేరు లేదు.'), fix: s('Applications are accepted until the roll freezes for that election — apply immediately and call 1950. Next time check months before.', 'ఆ ఎన్నికకు జాబితా ఫ్రీజ్ అయ్యే వరకు దరఖాస్తులు తీసుకుంటారు — వెంటనే దరఖాస్తు చేసి 1950కి కాల్ చేయండి. తదుపరిసారి నెలల ముందే చూడండి.') },
    ],
    afterwards: [s('If you shift house, file Form 8 so your vote moves to the new booth.', 'ఇల్లు మారితే, మీ ఓటు కొత్త బూత్‌కు మారేలా ఫారం 8 దాఖలు చేయండి.')],
    lastChecked: CHECKED,
  },

  // ───────────────────────────────────────────── NEW ELECTRICITY CONNECTION
  'new-electricity-connection': {
    stages: [
      {
        title: s('Get ready', 'సిద్ధం కావడం'),
        steps: [
          s('Find your DISCOM: north coastal (Srikakulam–East Godavari) APEPDCL; central (Krishna, Guntur, Prakasam area) APCPDCL; south & Rayalaseema APSPDCL.', 'మీ DISCOM కనుక్కోండి: ఉత్తర కోస్తా (శ్రీకాకుళం–తూర్పు గోదావరి) APEPDCL; మధ్య (కృష్ణా, గుంటూరు, ప్రకాశం ప్రాంతం) APCPDCL; దక్షిణ & రాయలసీమ APSPDCL.'),
          s('Ask a licensed electrician what load (kW) you need — count fans, lights, fridge, motor, AC.', 'మీకు ఎంత లోడ్ (kW) కావాలో లైసెన్స్ ఎలక్ట్రీషియన్‌ను అడగండి — ఫ్యాన్లు, లైట్లు, ఫ్రిజ్, మోటార్, AC లెక్కించండి.'),
          s('Documents: ownership proof (deed / tax receipt / allotment letter), Aadhaar, mobile, photo; building permission for new buildings or apartments. No ownership proof? An indemnity bond on ₹100 stamp paper is accepted with a higher deposit.', 'పత్రాలు: యాజమాన్య రుజువు (డీడ్ / పన్ను రసీదు / కేటాయింపు లేఖ), ఆధార్, మొబైల్, ఫోటో; కొత్త భవనాలు, అపార్ట్‌మెంట్లకు బిల్డింగ్ అనుమతి. యాజమాన్య రుజువు లేదా? ఎక్కువ డిపాజిట్‌తో ₹100 స్టాంప్ పేపర్‌పై ఇండెమ్నిటీ బాండ్ అంగీకరిస్తారు.'),
        ],
      },
      {
        title: s('Apply', 'దరఖాస్తు'),
        steps: [
          s('At the Village / Ward Secretariat (energy assistant) or MeeSeva: ask for "New LT service connection", give documents, pay the registration fee and get a receipt with the application number.', 'గ్రామ / వార్డు సచివాలయం (ఎనర్జీ అసిస్టెంట్) లేదా మీసేవలో: "New LT service connection" అడిగి, పత్రాలు ఇచ్చి, రిజిస్ట్రేషన్ ఫీజు చెల్లించి అప్లికేషన్ నంబర్‌తో రసీదు తీసుకోండి.'),
          s('Or online on your DISCOM website → "New Connection", or APSPDCL WhatsApp 9133331912 (send "Hi").', 'లేదా మీ DISCOM వెబ్‌సైట్ → "New Connection" లేదా APSPDCL వాట్సాప్ 9133331912 ("Hi" పంపండి)లో ఆన్‌లైన్‌లో.'),
          s('DISCOM staff inspect; you are told the development charges and security deposit — pay them (online / counter).', 'DISCOM సిబ్బంది తనిఖీ చేస్తారు; డెవలప్‌మెంట్ ఛార్జీలు, సెక్యూరిటీ డిపాజిట్ చెబుతారు — చెల్లించండి (ఆన్‌లైన్ / కౌంటర్).'),
        ],
      },
      {
        title: s('Wiring and meter', 'వైరింగ్, మీటర్'),
        steps: [
          s('Get the internal wiring done by a licensed electrical contractor and take the wiring test report.', 'లైసెన్స్ ఎలక్ట్రికల్ కాంట్రాక్టర్‌తో లోపలి వైరింగ్ చేయించి వైరింగ్ టెస్ట్ రిపోర్ట్ తీసుకోండి.'),
          s('DISCOM fixes the meter and releases the connection. Your service (consumer) number appears on the first bill.', 'DISCOM మీటర్ పెట్టి కనెక్షన్ ఇస్తుంది. మొదటి బిల్లులో మీ సర్వీస్ (కన్స్యూమర్) నంబర్ వస్తుంది.'),
        ],
      },
      {
        title: s('Name change, load change, category change', 'పేరు మార్పు, లోడ్ మార్పు, కేటగిరీ మార్పు'),
        steps: [
          s('Same counters / website: "Title transfer" with the new deed, or death certificate + Family Member Certificate; "Additional load" with the new kW; "Category change" (e.g. domestic to commercial).', 'అవే కౌంటర్లు / వెబ్‌సైట్: కొత్త డీడ్, లేదా మరణ ధృవీకరణ + కుటుంబ సభ్యుల ధృవీకరణతో "Title transfer"; కొత్త kWతో "Additional load"; "Category change" (ఉదా: గృహ నుండి వాణిజ్య).'),
          s('Pay the charges shown; the change appears on the next bill.', 'చూపిన ఛార్జీలు చెల్లించండి; మార్పు తదుపరి బిల్లులో కనిపిస్తుంది.'),
        ],
      },
    ],
    costExample: s('Small application/registration fee (MeeSeva user charge about ₹35) + development charges and security deposit that depend on kW — told to you before payment. SC/ST households get concessions where applicable.', 'చిన్న దరఖాస్తు/రిజిస్ట్రేషన్ ఫీజు (మీసేవ యూజర్ ఛార్జీ సుమారు ₹35) + kW ఆధారంగా డెవలప్‌మెంట్ ఛార్జీలు, సెక్యూరిటీ డిపాజిట్ — చెల్లించే ముందు చెబుతారు. వర్తించే చోట SC/ST కుటుంబాలకు రాయితీలు.'),
    problems: [
      { problem: s('Delayed beyond the promised date.', 'చెప్పిన తేదీ దాటి ఆలస్యం.'), fix: s('Complain on 1912 with the application number; DISCOMs have service standards and compensation rules — ask for them in writing.', 'అప్లికేషన్ నంబర్‌తో 1912కి ఫిర్యాదు చేయండి; DISCOMలకు సేవా ప్రమాణాలు, పరిహార నియమాలు ఉన్నాయి — రాతపూర్వకంగా అడగండి.') },
      { problem: s('A new pole / transformer is needed.', 'కొత్త స్తంభం / ట్రాన్స్‌ఫార్మర్ అవసరం.'), fix: s('It takes longer and may need an estimate payment; ask the section AE for the estimate and timeline.', 'ఎక్కువ సమయం పడుతుంది, అంచనా చెల్లింపు అవసరం కావచ్చు; సెక్షన్ AEని అంచనా, సమయం అడగండి.') },
    ],
    afterwards: [s('Pay bills on the DISCOM app, UPI apps or Mana Mitra WhatsApp; report outages on 1912. Consider rooftop solar (see PM Surya Ghar).', 'బిల్లులు DISCOM యాప్, UPI యాప్‌లు లేదా మన మిత్ర వాట్సాప్‌లో చెల్లించండి; కరెంట్ పోతే 1912కి తెలియజేయండి. రూఫ్‌టాప్ సోలార్ ఆలోచించండి (PM సూర్య ఘర్ చూడండి).')],
    lastChecked: CHECKED,
  },

  // ───────────────────────────────────────────── BUILDING PERMISSION
  'building-permission': {
    stages: [
      {
        title: s('Check your plot can be approved', 'మీ ప్లాట్‌కు ఆమోదం వస్తుందో చూడడం'),
        steps: [
          s('The plot must be in an approved layout (LP number), an LRS-regularised layout, or a village site / old approved building.', 'ప్లాట్ ఆమోదిత లేఅవుట్‌లో (LP నంబర్), LRS క్రమబద్ధీకరించిన లేఅవుట్‌లో, లేదా గ్రామ స్థలం / పాత ఆమోదిత భవనంగా ఉండాలి.'),
          s('Your name must be on the registered deed and tax / revenue records; the plot must not be in the 22A list or a road/lake buffer.', 'రిజిస్టర్డ్ డీడ్, పన్ను / రెవెన్యూ రికార్డుల్లో మీ పేరు ఉండాలి; ప్లాట్ 22A జాబితాలో లేదా రోడ్డు/చెరువు బఫర్‌లో ఉండకూడదు.'),
        ],
      },
      {
        title: s('Hire a licensed technical person (LTP)', 'లైసెన్స్ టెక్నికల్ వ్యక్తిని (LTP) పెట్టుకోవడం'),
        steps: [
          s('Choose an engineer / architect licensed on the AP online building permission system (APDPMS / OBPS). Ask to see their licence number.', 'AP ఆన్‌లైన్ బిల్డింగ్ అనుమతి వ్యవస్థ (APDPMS / OBPS)లో లైసెన్స్ ఉన్న ఇంజనీర్ / ఆర్కిటెక్ట్‌ను ఎంచుకోండి. వారి లైసెన్స్ నంబర్ చూపమనండి.'),
          s('Give them: deed and link documents, EC, tax receipt / 1B, layout copy, Aadhaar, photos of the site.', 'వారికి ఇవ్వండి: డీడ్, లింక్ డాక్యుమెంట్లు, EC, పన్ను రసీదు / 1B, లేఅవుట్ కాపీ, ఆధార్, స్థలం ఫోటోలు.'),
          s('They draw the plan following setbacks, height and floor-area rules for your plot and road width.', 'మీ ప్లాట్, రోడ్డు వెడల్పుకు సెట్‌బ్యాక్, ఎత్తు, ఫ్లోర్ ఏరియా నియమాల ప్రకారం వారు ప్లాన్ గీస్తారు.'),
        ],
      },
      {
        title: s('Apply and pay online', 'ఆన్‌లైన్ దరఖాస్తు, చెల్లింపు'),
        steps: [
          s('The LTP uploads the plan and documents on apdpms.ap.gov.in. The portal calculates all fees — check the amount with them.', 'LTP apdpms.ap.gov.inలో ప్లాన్, పత్రాలు అప్‌లోడ్ చేస్తారు. పోర్టల్ అన్ని ఫీజులు లెక్కిస్తుంది — మొత్తం వారితో సరిచూడండి.'),
          s('Self-certification (most non-high-rise homes on plots up to 4,000 sq m in approved layouts): you and the LTP sign the self-certification form; permission is issued instantly after payment.', 'స్వీయ ధృవీకరణ (ఆమోదిత లేఅవుట్లలో 4,000 చ.మీ. వరకు ప్లాట్లపై చాలా హై-రైజ్ కాని ఇళ్లు): మీరు, LTP స్వీయ ధృవీకరణ ఫారంపై సంతకం చేస్తారు; చెల్లింపు తర్వాత వెంటనే అనుమతి.'),
          s('Other cases go for scrutiny and site inspection before approval.', 'ఇతర కేసులు ఆమోదానికి ముందు పరిశీలన, స్థల తనిఖీకి వెళ్తాయి.'),
          s('Download the approved plan and permit; display the permit board at the site.', 'ఆమోదిత ప్లాన్, అనుమతి డౌన్‌లోడ్ చేసి; స్థలంలో అనుమతి బోర్డు ప్రదర్శించండి.'),
        ],
      },
      {
        title: s('Build and finish correctly', 'సరిగ్గా నిర్మించి పూర్తి చేయడం'),
        steps: [
          s('Mark setbacks exactly as on the plan before digging.', 'తవ్వే ముందు ప్లాన్ ప్రకారమే సెట్‌బ్యాక్‌లు గుర్తించండి.'),
          s('After the plinth beam, the LTP must upload the plinth inspection report within 7 days.', 'ప్లింత్ బీమ్ తర్వాత 7 రోజుల్లో LTP ప్లింత్ తనిఖీ నివేదిక అప్‌లోడ్ చేయాలి.'),
          s('On completion, apply online for the Occupancy Certificate — needed for loans, electricity/water connections and sale.', 'పూర్తయ్యాక ఆక్యుపెన్సీ సర్టిఫికెట్‌కు ఆన్‌లైన్‌లో దరఖాస్తు చేయండి — రుణాలు, కరెంట్/నీటి కనెక్షన్లు, అమ్మకానికి అవసరం.'),
        ],
      },
    ],
    costExample: s('Government fees are calculated by the portal from plot and built-up area (you see the exact amount before paying). The LTP\'s fee is private — agree it in writing.', 'ప్లాట్, నిర్మిత విస్తీర్ణం ఆధారంగా ప్రభుత్వ ఫీజులను పోర్టల్ లెక్కిస్తుంది (చెల్లించే ముందు ఖచ్చిత మొత్తం చూస్తారు). LTP ఫీజు ప్రైవేట్ — రాతపూర్వకంగా ఒప్పుకోండి.'),
    problems: [
      { problem: s('Plot is in an unapproved layout.', 'ప్లాట్ అనధికార లేఅవుట్‌లో ఉంది.'), fix: s('Regularise under LRS when a window is open (see LRS/BPS guide), then apply.', 'అవకాశం తెరిచినప్పుడు LRS కింద క్రమబద్ధీకరించండి (LRS/BPS గైడ్ చూడండి), తర్వాత దరఖాస్తు చేయండి.') },
      { problem: s('Built a little differently from the plan.', 'ప్లాన్‌కు కొంచెం భిన్నంగా కట్టారు.'), fix: s('Small permissible deviations can be paid for before the occupancy application; big ones risk penalty or demolition. Don\'t deviate.', 'చిన్న అనుమతించదగిన తేడాలకు ఆక్యుపెన్సీ దరఖాస్తుకు ముందు చెల్లించవచ్చు; పెద్దవాటికి జరిమానా లేదా కూల్చివేత ప్రమాదం. తేడా చేయకండి.') },
    ],
    afterwards: [s('Apply for property tax assessment, water and electricity connections with the occupancy certificate.', 'ఆక్యుపెన్సీ సర్టిఫికెట్‌తో ఆస్తి పన్ను అసెస్‌మెంట్, నీటి, కరెంట్ కనెక్షన్లకు దరఖాస్తు చేయండి.')],
    lastChecked: CHECKED,
  },

  // ───────────────────────────────────────────── MARRIAGE REGISTRATION
  'marriage-registration': {
    stages: [
      {
        title: s('Choose the law and collect papers', 'చట్టం ఎంచుకుని పత్రాలు సేకరించడం'),
        steps: [
          s('Both Hindu (incl. Sikh, Jain, Buddhist): Hindu Marriage Act — registered after the wedding. Different religions or a civil marriage: Special Marriage Act — needs a 30-day notice.', 'ఇద్దరూ హిందువులు (సిక్కు, జైన, బౌద్ధ సహా): హిందూ వివాహ చట్టం — పెళ్లి తర్వాత నమోదు. వేర్వేరు మతాలు లేదా సివిల్ వివాహం: ప్రత్యేక వివాహ చట్టం — 30 రోజుల నోటీసు అవసరం.'),
          s('Age proof of both (birth certificate / SSC / passport), Aadhaar and address proof, wedding invitation, wedding photos, passport photos and a joint photo.', 'ఇద్దరి వయస్సు రుజువు (జనన ధృవీకరణ / SSC / పాస్‌పోర్ట్), ఆధార్, చిరునామా రుజువు, పెళ్లి పత్రిక, పెళ్లి ఫోటోలు, పాస్‌పోర్ట్ ఫోటోలు, జంట ఫోటో.'),
          s('Two witnesses with ID. Earlier marriage? Divorce decree or the spouse\'s death certificate.', 'IDతో ఇద్దరు సాక్షులు. ముందు వివాహం జరిగిందా? విడాకుల డిక్రీ లేదా జీవిత భాగస్వామి మరణ ధృవీకరణ.'),
        ],
      },
      {
        title: s('Apply and book', 'దరఖాస్తు, బుకింగ్'),
        steps: [
          s('On registration.ap.gov.in choose the marriage registration service, fill both partners\' and witnesses\' details, upload documents, pay the fee and book a slot at the SRO (where the wedding happened or where either of you lives).', 'registration.ap.gov.inలో వివాహ నమోదు సేవ ఎంచుకుని, ఇద్దరి, సాక్షుల వివరాలు నింపి, పత్రాలు అప్‌లోడ్ చేసి, ఫీజు చెల్లించి SROలో (పెళ్లి జరిగిన చోట లేదా మీలో ఎవరైనా ఉండే చోట) స్లాట్ బుక్ చేయండి.'),
          s('Special Marriage Act: give the notice first; it is displayed for 30 days, then you book the registration.', 'ప్రత్యేక వివాహ చట్టం: ముందుగా నోటీసు ఇవ్వండి; 30 రోజులు ప్రదర్శిస్తారు, తర్వాత నమోదు బుక్ చేయండి.'),
        ],
      },
      {
        title: s('At the SRO', 'SROలో'),
        steps: [
          s('Both partners and the witnesses come with originals. Identity is verified with Aadhaar, photos taken, and you sign the register.', 'ఇద్దరూ, సాక్షులు అసలు పత్రాలతో రావాలి. ఆధార్‌తో గుర్తింపు ధృవీకరణ, ఫోటోలు, మీరు రిజిస్టర్‌లో సంతకం.'),
          s('The marriage certificate is issued (often the same day under the Hindu Marriage Act). Check spellings before leaving.', 'వివాహ ధృవీకరణ జారీ (హిందూ వివాహ చట్టం కింద తరచుగా అదే రోజు). వెళ్లే ముందు స్పెల్లింగ్‌లు సరిచూడండి.'),
        ],
      },
    ],
    costExample: s('Registration fee is small — about ₹100 (Hindu Marriage Act) or ₹150 (Special Marriage Act) plus user charges; late registration costs a little more.', 'నమోదు ఫీజు చిన్నది — సుమారు ₹100 (హిందూ వివాహ చట్టం) లేదా ₹150 (ప్రత్యేక వివాహ చట్టం) + యూజర్ ఛార్జీలు; ఆలస్యమైతే కొంచెం ఎక్కువ.'),
    problems: [
      { problem: s('No wedding invitation or photos (simple temple wedding).', 'పెళ్లి పత్రిక, ఫోటోలు లేవు (సాధారణ గుడి పెళ్లి).'), fix: s('Bring the temple\'s certificate and an affidavit about the wedding; witnesses who attended help.', 'గుడి సర్టిఫికెట్, పెళ్లి గురించి అఫిడవిట్ తీసుకురండి; హాజరైన సాక్షులు ఉపయోగపడతారు.') },
    ],
    afterwards: [
      s('Use it to: add the wife\'s name on the rice card or split the card, update Aadhaar / passport, add nominees in bank and insurance.', 'దీనితో: రైస్ కార్డులో భార్య పేరు చేర్చడం లేదా కార్డు విభజన, ఆధార్ / పాస్‌పోర్ట్ అప్‌డేట్, బ్యాంక్, బీమాలో నామినీలు చేర్చడం.'),
    ],
    lastChecked: CHECKED,
  },

  // ───────────────────────────────────────────── NTR VAIDYA SEVA
  'ntr-vaidya-seva': {
    stages: [
      {
        title: s('Before you need it', 'అవసరం రాకముందే'),
        steps: [
          s('Check your family is covered: ask at the Secretariat, call 104, or look up your Ayushman card on beneficiary.nha.gov.in (Aadhaar OTP).', 'మీ కుటుంబానికి కవర్ ఉందో చూడండి: సచివాలయంలో అడగండి, 104కి కాల్ చేయండి, లేదా beneficiary.nha.gov.in (ఆధార్ OTP)లో మీ ఆయుష్మాన్ కార్డు చూడండి.'),
          s('Download the Ayushman / health card for each member and keep it on the phone; keep Aadhaar and rice card copies ready.', 'ప్రతి సభ్యునికి ఆయుష్మాన్ / హెల్త్ కార్డు డౌన్‌లోడ్ చేసి ఫోన్‌లో ఉంచుకోండి; ఆధార్, రైస్ కార్డు కాపీలు సిద్ధంగా ఉంచండి.'),
          s('Note 2–3 network hospitals near you (ask 104 or the Secretariat).', 'మీకు దగ్గరలోని 2–3 నెట్‌వర్క్ ఆసుపత్రులు నోట్ చేసుకోండి (104 లేదా సచివాలయాన్ని అడగండి).'),
        ],
      },
      {
        title: s('At the hospital', 'ఆసుపత్రిలో'),
        steps: [
          s('Go first to the Aarogya Mithra desk (near reception) — BEFORE paying anything.', 'ముందుగా ఆరోగ్య మిత్ర డెస్క్‌కు (రిసెప్షన్ దగ్గర) వెళ్లండి — ఏదైనా చెల్లించే ముందే.'),
          s('Show the card or Aadhaar + rice card. The Aarogya Mithra registers the patient and takes a photo.', 'కార్డు లేదా ఆధార్ + రైస్ కార్డు చూపించండి. ఆరోగ్య మిత్ర రోగిని నమోదు చేసి ఫోటో తీస్తారు.'),
          s('Emergency: treatment starts immediately; registration is done alongside.', 'అత్యవసరం: వెంటనే చికిత్స మొదలవుతుంది; నమోదు అదే సమయంలో.'),
          s('Planned surgery: the doctor sends a pre-authorisation to the Trust, usually approved within hours to a day. You are told when it is approved.', 'ప్రణాళికాబద్ధ శస్త్రచికిత్స: డాక్టర్ ట్రస్ట్‌కు ప్రీ-ఆథరైజేషన్ పంపుతారు, సాధారణంగా గంటల నుండి ఒక రోజులో ఆమోదం. ఆమోదమైనప్పుడు చెబుతారు.'),
        ],
      },
      {
        title: s('Treatment and discharge', 'చికిత్స, డిశ్చార్జ్'),
        steps: [
          s('Tests, surgery, stay, food and medicines for the covered procedure are free.', 'కవర్ అయిన ప్రక్రియకు పరీక్షలు, శస్త్రచికిత్స, బస, భోజనం, మందులు ఉచితం.'),
          s('At discharge you sign a satisfaction form; take the discharge summary and free follow-up medicines.', 'డిశ్చార్జ్ సమయంలో సంతృప్తి ఫారంపై సంతకం చేస్తారు; డిశ్చార్జ్ సమ్మరీ, ఉచిత ఫాలో-అప్ మందులు తీసుకోండి.'),
          s('Come back for follow-up visits on the dates given — they are covered.', 'ఇచ్చిన తేదీల్లో ఫాలో-అప్‌కు రండి — అవి కవర్ అవుతాయి.'),
        ],
      },
    ],
    costExample: s('Covered procedures: ₹0 to you, up to ₹25 lakh per family per year. Not covered: normal outpatient visits and routine medicines.', 'కవర్ అయిన ప్రక్రియలు: మీకు ₹0, కుటుంబానికి ఏడాదికి ₹25 లక్షల వరకు. కవర్ కానివి: సాధారణ OP సందర్శనలు, రొటీన్ మందులు.'),
    problems: [
      { problem: s('Hospital asks for a deposit or money for a covered treatment.', 'కవర్ అయిన చికిత్సకు ఆసుపత్రి డిపాజిట్ లేదా డబ్బు అడుగుతోంది.'), fix: s('Refuse and call 104 immediately with the hospital name; keep any receipts — money taken wrongly can be refunded.', 'ఒప్పుకోకండి, ఆసుపత్రి పేరుతో వెంటనే 104కి కాల్ చేయండి; రసీదులు దాచుకోండి — తప్పుగా తీసుకున్న డబ్బు తిరిగి రావచ్చు.') },
      { problem: s('Name not found in the scheme.', 'పథకంలో పేరు లేదు.'), fix: s('Ask the Aarogya Mithra to check with Aadhaar; if still missing, the Secretariat can help enrol (universal coverage is being rolled out).', 'ఆధార్‌తో చూడమని ఆరోగ్య మిత్రను అడగండి; అయినా లేకపోతే సచివాలయం నమోదుకు సహాయం చేస్తుంది (సార్వత్రిక కవరేజ్ అమలవుతోంది).') },
    ],
    afterwards: [s('People aged 70+ can also get the separate Ayushman Vay Vandana card (₹5 lakh extra) — see that guide.', '70+ వయస్సు వారు వేరే ఆయుష్మాన్ వయ వందన కార్డు (అదనంగా ₹5 లక్షలు) కూడా పొందవచ్చు — ఆ గైడ్ చూడండి.')],
    lastChecked: CHECKED,
  },

  // ───────────────────────────────────────────── ANNADATA SUKHIBHAVA
  'annadata-sukhibhava': {
    stages: [
      {
        title: s('Check your status', 'మీ స్టేటస్ చూడడం'),
        steps: [
          s('Open annadathasukhibhava.ap.gov.in → "Know Your Status" → enter Aadhaar → captcha. It shows eligible / not eligible and payment status for each instalment.', 'annadathasukhibhava.ap.gov.in → "Know Your Status" → ఆధార్ → క్యాప్చా. అర్హత / అనర్హత, ప్రతి విడత చెల్లింపు స్టేటస్ చూపిస్తుంది.'),
          s('Also check PM-KISAN status on pmkisan.gov.in → "Know Your Status" (the ₹6,000 central part comes from there).', 'pmkisan.gov.in → "Know Your Status"లో PM-KISAN స్టేటస్ కూడా చూడండి (₹6,000 కేంద్ర భాగం అక్కడి నుండే).'),
        ],
      },
      {
        title: s('Fix what is blocking payment', 'చెల్లింపును ఆపుతున్నది సరిచేయడం'),
        steps: [
          s('e-KYC pending → go to your Rythu Seva Kendra (RSK) with Aadhaar and finish fingerprint e-KYC.', 'e-KYC పెండింగ్ → ఆధార్‌తో మీ రైతు సేవా కేంద్రానికి (RSK) వెళ్లి వేలిముద్ర e-KYC పూర్తి చేయండి.'),
          s('"Payment failed / account not seeded" → at your bank, link Aadhaar for DBT (NPCI mapping); check on myAadhaar → Bank Seeding Status.', '"చెల్లింపు విఫలం / ఖాతా సీడ్ కాలేదు" → మీ బ్యాంకులో DBT కోసం ఆధార్ లింక్ (NPCI మ్యాపింగ్) చేయించండి; myAadhaar → Bank Seeding Statusలో చూడండి.'),
          s('Land not in your name / wrong extent → fix it through mutation at the Village Secretariat first.', 'భూమి మీ పేరుపై లేదు / తప్పు విస్తీర్ణం → ముందుగా గ్రామ సచివాలయంలో మ్యుటేషన్ ద్వారా సరిచేయండి.'),
          s('Tenant farmer → get the CCRC card and ask the RSK about eligibility.', 'కౌలు రైతు → CCRC కార్డు తీసుకుని అర్హత గురించి RSKను అడగండి.'),
        ],
      },
      {
        title: s('If you are left out', 'మిమ్మల్ని వదిలేస్తే'),
        steps: [
          s('At the RSK, give a written grievance with Aadhaar, 1B / passbook and bank passbook copies; get the grievance number.', 'RSKలో ఆధార్, 1B / పాస్‌బుక్, బ్యాంక్ పాస్‌బుక్ కాపీలతో రాతపూర్వక ఫిర్యాదు ఇచ్చి ఫిర్యాదు నంబర్ తీసుకోండి.'),
          s('Track it with the Agriculture Assistant; if not solved, raise a PGRS grievance.', 'వ్యవసాయ సహాయకుడితో ట్రాక్ చేయండి; పరిష్కారం కాకపోతే PGRS ఫిర్యాదు చేయండి.'),
        ],
      },
    ],
    costExample: s('₹20,000 a year = ₹14,000 State + ₹6,000 PM-KISAN, in 3 instalments (2026-27 first instalment ₹7,000). Nothing to pay to get it.', 'ఏడాదికి ₹20,000 = ₹14,000 రాష్ట్రం + ₹6,000 PM-KISAN, 3 విడతల్లో (2026-27 మొదటి విడత ₹7,000). పొందడానికి ఏమీ చెల్లించనక్కర్లేదు.'),
    problems: [
      { problem: s('State part came but PM-KISAN didn\'t.', 'రాష్ట్ర భాగం వచ్చింది కానీ PM-KISAN రాలేదు.'), fix: s('Do e-KYC on pmkisan.gov.in (OTP or face app) and check land seeding there; ask the RSK to update.', 'pmkisan.gov.inలో e-KYC (OTP లేదా ఫేస్ యాప్) చేసి, అక్కడ భూమి సీడింగ్ చూడండి; అప్‌డేట్ చేయమని RSKను అడగండి.') },
    ],
    afterwards: [s('Enrol for crop insurance each season and register your crop (e-Crop) at the RSK.', 'ప్రతి సీజన్ పంట బీమాకు నమోదు చేసి, RSKలో మీ పంట (e-Crop) నమోదు చేయండి.')],
    lastChecked: CHECKED,
  },

  // ───────────────────────────────────────────── TALLIKI VANDANAM
  'talliki-vandanam': {
    stages: [
      {
        title: s('Make sure the data is right (no form)', 'డేటా సరిగ్గా ఉందో చూడడం (ఫారం లేదు)'),
        steps: [
          s('At school: confirm the child\'s Aadhaar and the mother\'s details are entered correctly in the school records (UDISE).', 'పాఠశాలలో: పిల్లల ఆధార్, తల్లి వివరాలు స్కూల్ రికార్డుల్లో (UDISE) సరిగ్గా ఉన్నాయో నిర్ధారించుకోండి.'),
          s('Keep attendance at 75% or more.', 'హాజరు 75% లేదా ఎక్కువ ఉంచండి.'),
          s('Mother\'s bank account must be Aadhaar-seeded for DBT (NPCI-mapped) — check myAadhaar → Bank Seeding Status.', 'తల్లి బ్యాంక్ ఖాతా DBT కోసం ఆధార్ సీడ్ (NPCI మ్యాప్) అయి ఉండాలి — myAadhaar → Bank Seeding Statusలో చూడండి.'),
          s('Finish e-KYC at the Village / Ward Secretariat when asked.', 'అడిగినప్పుడు గ్రామ / వార్డు సచివాలయంలో e-KYC పూర్తి చేయండి.'),
        ],
      },
      {
        title: s('Check eligibility and payment', 'అర్హత, చెల్లింపు చూడడం'),
        steps: [
          s('Before payment, eligible and ineligible lists are displayed at the Secretariat and on gsws-nbm.ap.gov.in — check your name.', 'చెల్లింపుకు ముందు అర్హుల, అనర్హుల జాబితాలను సచివాలయంలో, gsws-nbm.ap.gov.inలో ప్రదర్శిస్తారు — మీ పేరు చూడండి.'),
          s('Not in the eligible list? File a grievance at the Secretariat within the objection period with documents.', 'అర్హుల జాబితాలో లేదా? అభ్యంతర గడువులో పత్రాలతో సచివాలయంలో ఫిర్యాదు చేయండి.'),
          s('After payment (2026-27 began 22 July 2026) check your bank SMS / passbook for ₹13,000 per child.', 'చెల్లింపు తర్వాత (2026-27 22 జూలై 2026న మొదలైంది) ఒక్కో పిల్లవాడికి ₹13,000 కోసం బ్యాంక్ SMS / పాస్‌బుక్ చూడండి.'),
        ],
      },
    ],
    costExample: s('Two school children: 2 × ₹15,000 = ₹30,000 a year — ₹26,000 to the mother and ₹4,000 to the schools.', 'ఇద్దరు బడి పిల్లలు: 2 × ₹15,000 = ఏడాదికి ₹30,000 — తల్లికి ₹26,000, పాఠశాలలకు ₹4,000.'),
    problems: [
      { problem: s('Listed eligible but money not received.', 'అర్హుల జాబితాలో ఉంది కానీ డబ్బు రాలేదు.'), fix: s('Almost always the bank isn\'t NPCI-mapped. Fix it at the bank, then tell the Secretariat so the payment is retried.', 'దాదాపు ఎప్పుడూ బ్యాంక్ NPCI మ్యాప్ కాకపోవడమే. బ్యాంకులో సరిచేసి, చెల్లింపు మళ్లీ ప్రయత్నించేలా సచివాలయానికి చెప్పండి.') },
      { problem: s('Marked ineligible for "4-wheeler / electricity / IT".', '"నాలుగు చక్రాల వాహనం / విద్యుత్ / IT" కారణంగా అనర్హులుగా చూపించారు.'), fix: s('Give proof at the Secretariat during the grievance window (e.g. vehicle sold, wrong electricity meter).', 'ఫిర్యాదు గడువులో సచివాలయంలో రుజువు ఇవ్వండి (ఉదా: వాహనం అమ్మేశారు, తప్పు కరెంట్ మీటర్).') },
    ],
    afterwards: [s('Keep the child\'s Aadhaar biometrics updated at 5 and 15 — school data depends on it.', 'పిల్లల ఆధార్ బయోమెట్రిక్స్ 5, 15 ఏళ్లకు అప్‌డేట్ చేయండి — స్కూల్ డేటా దానిపై ఆధారపడుతుంది.')],
    lastChecked: CHECKED,
  },

  // ───────────────────────────────────────────── FEE REIMBURSEMENT
  'scholarship-fee-reimbursement': {
    stages: [
      {
        title: s('Before admission', 'ప్రవేశానికి ముందు'),
        steps: [
          s('Get the current-year income certificate and your caste (integrated) certificate.', 'ప్రస్తుత సంవత్సర ఆదాయ ధృవీకరణ, కుల (ఇంటిగ్రేటెడ్) ధృవీకరణ తీసుకోండి.'),
          s('Make sure the mother\'s bank account is Aadhaar-seeded (maintenance money goes there) and your Aadhaar has a linked mobile.', 'తల్లి బ్యాంక్ ఖాతా ఆధార్ సీడ్ అయిందో చూడండి (మెయింటెనెన్స్ డబ్బు అక్కడికే), మీ ఆధార్‌కు మొబైల్ లింక్ అయిందో చూడండి.'),
          s('Join through counselling (convener quota) where possible — management-quota seats usually don\'t get reimbursement.', 'వీలైనచోట కౌన్సెలింగ్ (కన్వీనర్ కోటా) ద్వారా చేరండి — మేనేజ్‌మెంట్ కోటా సీట్లకు సాధారణంగా రీయింబర్స్‌మెంట్ రాదు.'),
        ],
      },
      {
        title: s('Apply through the college', 'కాలేజీ ద్వారా దరఖాస్తు'),
        steps: [
          s('When the window opens (2026-27 expected around November–December), collect the Jnanabhumi application form (JSAF) at your college.', 'విండో తెరిచినప్పుడు (2026-27 సుమారు నవంబర్–డిసెంబర్‌లో) మీ కాలేజీలో జ్ఞానభూమి దరఖాస్తు ఫారం (JSAF) తీసుకోండి.'),
          s('Fill it with Aadhaar, caste, income, previous marks, bank details; attach copies; give it to the principal\'s office.', 'ఆధార్, కులం, ఆదాయం, మునుపటి మార్కులు, బ్యాంక్ వివరాలతో నింపి; కాపీలు జత చేసి; ప్రిన్సిపాల్ కార్యాలయానికి ఇవ్వండి.'),
          s('The college verifies and uploads it on jnanabhumi.ap.gov.in — you get an SMS with the application ID.', 'కాలేజీ ధృవీకరించి jnanabhumi.ap.gov.inలో అప్‌లోడ్ చేస్తుంది — అప్లికేషన్ IDతో SMS వస్తుంది.'),
          s('Give biometric authentication when told (college / Secretariat), then the Welfare officer and Secretariat staff verify.', 'చెప్పినప్పుడు బయోమెట్రిక్ ధృవీకరణ ఇవ్వండి (కాలేజీ / సచివాలయం), తర్వాత సంక్షేమ అధికారి, సచివాలయ సిబ్బంది ధృవీకరిస్తారు.'),
        ],
      },
      {
        title: s('Payment and renewal', 'చెల్లింపు, రెన్యువల్'),
        steps: [
          s('Tuition fee goes to the college; maintenance (₹10,000–₹20,000 a year) to the mother\'s account in instalments.', 'ట్యూషన్ ఫీజు కాలేజీకి; మెయింటెనెన్స్ (ఏడాదికి ₹10,000–₹20,000) తల్లి ఖాతాకు విడతల్లో.'),
          s('Track on jnanabhumi.ap.gov.in → student status with the application ID.', 'అప్లికేషన్ IDతో jnanabhumi.ap.gov.in → విద్యార్థి స్టేటస్‌లో ట్రాక్ చేయండి.'),
          s('Renew every year through the college; keep attendance above 75% and pass your exams.', 'ప్రతి ఏటా కాలేజీ ద్వారా రెన్యువల్ చేయండి; హాజరు 75% పైగా ఉంచి పరీక్షలు పాసవ్వండి.'),
        ],
      },
    ],
    costExample: s('Engineering student (eligible BC family): full tuition paid to the college + ₹20,000 a year maintenance to the mother.', 'ఇంజనీరింగ్ విద్యార్థి (అర్హ BC కుటుంబం): పూర్తి ట్యూషన్ కాలేజీకి + తల్లికి ఏడాదికి ₹20,000 మెయింటెనెన్స్.'),
    problems: [
      { problem: s('College demands the fee from the student while reimbursement is pending.', 'రీయింబర్స్‌మెంట్ పెండింగ్‌లో ఉండగా కాలేజీ విద్యార్థి నుండి ఫీజు అడుగుతోంది.'), fix: s('Colleges should not withhold certificates for reimbursable fees — complain to the district Social / BC Welfare officer or PGRS.', 'రీయింబర్స్ అయ్యే ఫీజులకు కాలేజీలు సర్టిఫికెట్లు ఆపకూడదు — జిల్లా సాంఘిక / BC సంక్షేమ అధికారికి లేదా PGRSకు ఫిర్యాదు చేయండి.') },
    ],
    afterwards: [s('Also apply for central scholarships on the National Scholarship Portal where eligible (see that guide).', 'అర్హత ఉంటే జాతీయ స్కాలర్‌షిప్ పోర్టల్‌లో కేంద్ర స్కాలర్‌షిప్‌లకు కూడా దరఖాస్తు చేయండి (ఆ గైడ్ చూడండి).')],
    lastChecked: CHECKED,
  },

  // ───────────────────────────────────────────── HOUSING
  'housing-scheme': {
    stages: [
      {
        title: s('Register your need', 'మీ అవసరం నమోదు చేయడం'),
        steps: [
          s('Meet the Housing / Welfare assistant at your Village / Ward Secretariat with Aadhaar of family members, rice card and bank passbook.', 'కుటుంబ సభ్యుల ఆధార్, రైస్ కార్డు, బ్యాంక్ పాస్‌బుక్‌తో మీ గ్రామ / వార్డు సచివాలయంలో గృహ / సంక్షేమ సహాయకుడిని కలవండి.'),
          s('Say whether you have your own site (only construction help needed) or need a house site too.', 'మీకు సొంత స్థలం ఉందా (నిర్మాణ సహాయం మాత్రమే) లేక స్థలం కూడా కావాలా చెప్పండి.'),
          s('Town residents can also apply under PMAY-Urban 2.0 on pmaymis.gov.in (Aadhaar OTP).', 'పట్టణవాసులు pmaymis.gov.inలో (ఆధార్ OTP) PMAY-అర్బన్ 2.0 కింద కూడా దరఖాస్తు చేయవచ్చు.'),
        ],
      },
      {
        title: s('Survey and sanction', 'సర్వే, మంజూరు'),
        steps: [
          s('The assistant photographs your present house and geo-tags the site; your eligibility (no pucca house, no earlier benefit) is checked.', 'సహాయకుడు మీ ప్రస్తుత ఇంటిని ఫోటో తీసి స్థలాన్ని జియో-ట్యాగ్ చేస్తారు; మీ అర్హత (పక్కా ఇల్లు లేకపోవడం, ముందు లబ్ధి లేకపోవడం) తనిఖీ.'),
          s('Sanctions are released in rounds; the list is displayed at the Secretariat.', 'మంజూరులు రౌండ్లలో విడుదల; జాబితా సచివాలయంలో ప్రదర్శిస్తారు.'),
        ],
      },
      {
        title: s('Build in stages and get paid', 'దశలవారీగా కట్టి చెల్లింపు పొందడం'),
        steps: [
          s('Start construction with the approved design. At each stage (basement, lintel/roof, completion) the assistant photographs it on the app.', 'ఆమోదిత డిజైన్‌తో నిర్మాణం మొదలుపెట్టండి. ప్రతి దశలో (బేస్‌మెంట్, లింటెల్/పైకప్పు, పూర్తి) సహాయకుడు యాప్‌లో ఫోటో తీస్తారు.'),
          s('The instalment for that stage is credited to your Aadhaar-linked bank account.', 'ఆ దశ విడత మీ ఆధార్ లింక్ బ్యాంక్ ఖాతాకు జమ అవుతుంది.'),
          s('Ask about cheap cement/steel arranged through the Housing department and SHG loans to fill gaps.', 'గృహ శాఖ ద్వారా చౌక సిమెంట్/స్టీల్, లోటు పూడ్చడానికి SHG రుణాల గురించి అడగండి.'),
        ],
      },
    ],
    costExample: s('Assistance amount depends on the scheme, area and category (SC/ST get more) — the assistant tells you the stage-wise amounts at sanction. Selection is free.', 'సహాయ మొత్తం పథకం, ప్రాంతం, వర్గాన్ని బట్టి (SC/STకి ఎక్కువ) — మంజూరు సమయంలో దశలవారీ మొత్తాలను సహాయకుడు చెబుతారు. ఎంపిక ఉచితం.'),
    problems: [
      { problem: s('Someone asks money to put your name on the list.', 'జాబితాలో పేరు పెట్టడానికి ఎవరైనా డబ్బు అడుగుతున్నారు.'), fix: s('Selection is free and survey-based. Refuse and report to PGRS or ACB 14400.', 'ఎంపిక ఉచితం, సర్వే ఆధారితం. ఒప్పుకోకండి, PGRS లేదా ACB 14400కు ఫిర్యాదు చేయండి.') },
      { problem: s('Stage photographed but money not received.', 'దశ ఫోటో తీశారు కానీ డబ్బు రాలేదు.'), fix: s('Check bank NPCI seeding, then ask the assistant to check the bill status in the Housing app.', 'బ్యాంక్ NPCI సీడింగ్ చూసి, హౌసింగ్ యాప్‌లో బిల్లు స్టేటస్ చూడమని సహాయకుడిని అడగండి.') },
    ],
    afterwards: [s('After completion, get the house assessed for property tax and apply for electricity and water connections.', 'పూర్తయ్యాక ఆస్తి పన్ను అసెస్‌మెంట్ చేయించి కరెంట్, నీటి కనెక్షన్లకు దరఖాస్తు చేయండి.')],
    lastChecked: CHECKED,
  },

  // ───────────────────────────────────────────── DEEPAM FREE GAS
  'deepam-free-gas': {
    stages: [
      {
        title: s('Make sure you are linked', 'లింక్ అయ్యారో చూసుకోవడం'),
        steps: [
          s('The gas connection must be in the name of a member of your rice-card family, with e-KYC done at the gas agency (or by the delivery person\'s app).', 'గ్యాస్ కనెక్షన్ మీ రైస్ కార్డు కుటుంబ సభ్యుని పేరుపై ఉండాలి, గ్యాస్ ఏజెన్సీలో (లేదా డెలివరీ వ్యక్తి యాప్‌తో) e-KYC పూర్తై ఉండాలి.'),
          s('The bank account of that member must be Aadhaar-seeded for DBT.', 'ఆ సభ్యుని బ్యాంక్ ఖాతా DBT కోసం ఆధార్ సీడ్ అయి ఉండాలి.'),
        ],
      },
      {
        title: s('Book and get the money', 'బుక్ చేసి డబ్బు పొందడం'),
        steps: [
          s('Book a refill the normal way — IVRS call, company app or WhatsApp of Indane / HP / Bharat Gas.', 'సాధారణ పద్ధతిలో రీఫిల్ బుక్ చేయండి — IVRS కాల్, కంపెనీ యాప్ లేదా ఇండేన్ / HP / భారత్ గ్యాస్ వాట్సాప్.'),
          s('Pay at delivery if asked; the State credits the cylinder amount to your bank (in some phases it was paid in advance).', 'అడిగితే డెలివరీ సమయంలో చెల్లించండి; సిలిండర్ మొత్తాన్ని రాష్ట్రం మీ బ్యాంకుకు జమ చేస్తుంది (కొన్ని దశల్లో ముందుగానే చెల్లించారు).'),
          s('One free cylinder in each period: April–July, August–November, December–March. Book before the period ends.', 'ప్రతి కాలంలో ఒక ఉచిత సిలిండర్: ఏప్రిల్–జూలై, ఆగస్టు–నవంబర్, డిసెంబర్–మార్చి. కాలం ముగిసేలోపే బుక్ చేయండి.'),
        ],
      },
    ],
    costExample: s('3 cylinders a year at the full market price each — credited back to you (roughly ₹2,500+ a year depending on the cylinder price).', 'ఏడాదికి 3 సిలిండర్లు, ఒక్కోటి పూర్తి మార్కెట్ ధరకు — మీకు తిరిగి జమ (సిలిండర్ ధరను బట్టి ఏడాదికి సుమారు ₹2,500+).'),
    problems: [
      { problem: s('Money not credited after delivery.', 'డెలివరీ తర్వాత డబ్బు జమ కాలేదు.'), fix: s('Check bank NPCI seeding and gas e-KYC, then call 1967 with your LPG consumer number.', 'బ్యాంక్ NPCI సీడింగ్, గ్యాస్ e-KYC చూసి, LPG కన్స్యూమర్ నంబర్‌తో 1967కి కాల్ చేయండి.') },
      { problem: s('Connection is in a relative\'s name outside the rice card.', 'కనెక్షన్ రైస్ కార్డు బయటి బంధువు పేరుపై ఉంది.'), fix: s('Transfer the connection to a card member at the gas agency (name transfer), then you become eligible.', 'గ్యాస్ ఏజెన్సీలో కనెక్షన్‌ను కార్డు సభ్యునికి బదిలీ చేయండి (పేరు బదిలీ), తర్వాత అర్హులవుతారు.') },
    ],
    afterwards: [s('No gas connection at all? See the PM Ujjwala guide for a free connection.', 'గ్యాస్ కనెక్షనే లేదా? ఉచిత కనెక్షన్ కోసం PM ఉజ్వల గైడ్ చూడండి.')],
    lastChecked: CHECKED,
  },
};
