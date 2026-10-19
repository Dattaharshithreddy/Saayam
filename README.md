# Saayam (సాయం)

AP and central government processes explained for ordinary people, in Telugu and English.
Expo / React Native app (expo-router). Works fully offline — no server or API key needed for version 1.
`server/` holds an optional AI assistant for later.

## How it works

- **Verified guides** (`src/data/guides*.ts`): each process has who can apply, documents,
  fees, numbered steps, where to go, timeline, tips, official links and a `lastChecked` date.
  Every string is bilingual (`{ en, te }`).
- **Saayam helper** (`app/ask.tsx`, engine in `src/bot/`): an offline chat that understands
  English, Telugu and Tenglish ("naa father chanipoyaru, land transfer"). It matches what people
  type against the guides and answers from them — overview, documents, fees, steps, where, time,
  links — with tap buttons for follow-ups ("fee entha?" refers to the guide being discussed).
  - `src/bot/vocab.ts` — everyday words → guides, life situations (a death in the family, new
    baby, buying land, going to the Gulf, starting a business, after 10th/Inter, scheme money not
    received, lost documents) and section words (fees, documents, where…). **Add words here**
    when users search for something the helper misses.
  - `src/bot/engine.ts` — ranking and reply building. No network, no AI, no cost.
  - When nothing matches it suggests topics, Mana Mitra WhatsApp and "Request a guide".

On every guide page:
- **🔊 Read aloud** in Telugu or English (`expo-speech`, uses the phone's text-to-speech voice;
  if the phone has no Telugu voice, the app tells the user how to install it).
- **📤 Share** the whole guide as clean text — works well in WhatsApp.
- **☆ Save** — saved guides appear under "My saved guides" on the home screen.
- **Documents checklist** — tap each document as it's ready; ticks are remembered.
- **A+ Bigger text** for easier reading (remembered).
- **🚩 Report wrong information** — opens the user's email app addressed to
  `EXPO_PUBLIC_CONTACT_EMAIL` (if a server URL is set instead, it's posted to `/feedback`).

**126 full step-by-step guides** across 15 topics — every one a complete walkthrough (stages from start to finish, a worked cost example, common problems and fixes, what to do afterwards) — plus an **A–Z directory of 136 services**
where every entry opens its full guide (checked 19 Oct 2026). Each guide has: who can apply,
documents checklist, fees, numbered steps, where to go, timeline, tips, official links and
helplines — all in English and Telugu.

| Topic | Guides |
|---|---|
| Land & Property | Property registration · Name mistake (rectification) · Certified copy · Mutation · Land records & passbook · Resurvey · Subdivision · Land conversion · EC · 22A prohibited land · Will / GPA / mortgage / release |
| Municipality & Panchayat | Property tax · Building permission · Water/drainage · Trade licence · Civic complaints · LRS / BPS regularisation · Free sand |
| Certificates | Caste/income/residence · EWS · OBC non-creamy layer · SADAREM disability · Farmer certificate · Birth & death · Family member (legal heir) · Marriage · Name change (gazette) |
| Health | NTR Vaidya Seva & Ayushman · Vay Vandana (70+) · ABHA · 108/102/104 · CM Relief Fund · Pregnancy benefit & Anganwadi |
| Electricity & Solar | PM Surya Ghar · New connection · Borewell / farm power connection |
| Farmers | Annadata Sukhibhava · PM-KISAN · Crop insurance · Tenant farmer (CCRC) · Kisan Credit Card · Paddy sale at MSP · Drip / machinery subsidies · 1962 vet ambulance · Livestock insurance · Gokulam sheds · NLM livestock farms |
| Pensions, Women & Family | NTR Bharosa · Talliki Vandanam · Stree Shakti · Housing · Auto drivers · Fishermen · Weavers · Baby kit · Construction workers board · e-Shram · Announced-but-not-started schemes · Rural job guarantee (VB-G RAM G) · Disability benefits · Senior citizens |
| Education | Fee reimbursement (Jnanabhumi) · National Scholarship Portal · RTE free seats · Duplicate SSC/Inter · Welfare hostels · Government jobs & skill training · EAPCET · ICET · POLYCET · ECET/EdCET/LAWCET/PGCET · NEET (MBBS) · PM Internship · Apprenticeships |
| Rice Card & Gas | Rice card · Deepam-2 · Ujjwala |
| Vehicles & Transport | Driving licence · RC transfer · Challans · APSRTC |
| Police, Safety & Complaints | Emergency numbers (112/181/1930/1098) · FIR & lost documents · PGRS · Free legal aid · RTI · Consumer complaints · Women's protection |
| Banking, Savings & Insurance | Jan Dhan · PMJJBY/PMSBY · Atal Pension · Sukanya Samriddhi · PF withdrawal · Pensioner life certificate |
| Self-Employment & Business | Mudra · SVANidhi · Vishwakarma · Starting a small business · PMEGP · PMFME food processing · AP MSME approvals & incentives · BC/SC/ST/minority/Kapu/EWS corporation loans · Join an SHG (DWCRA) · SHG loans & Streenidhi |
| Temples, NRIs & Abroad | TTD darshan · AP temple bookings · Pravasandhra Bharosa insurance · Safe overseas jobs · Help for family stuck abroad · NRI property |
| ID Cards & Online | Mana Mitra · Aadhaar update · Lost Aadhaar / PVC · Aadhaar bank seeding (DBT) · Children's Aadhaar · Aadhaar misuse lock · PAN · Passport · Voter ID · DigiLocker |

## Run the app

```bash
npm install
npx expo start          # scan the QR with Expo Go
```

Language defaults to Telugu; the toggle is top-right and is remembered.

## Optional later: the AI assistant server

Not used in version 1. `src/api.ts` (`ask`) and `server/` are kept ready for when you add AI answers.

```bash
cd server
npm install
ANTHROPIC_API_KEY=sk-ant-... npm start      # listens on :8787
```

Then start the app pointing at it:

```bash
EXPO_PUBLIC_API_URL=http://<your-laptop-LAN-ip>:8787 npx expo start
```

For a real release, deploy `server/` to any Node host (Render, Railway, Fly.io, a small VM),
set `ANTHROPIC_API_KEY` there, and build the app with `EXPO_PUBLIC_API_URL=https://your-server`.
Optional: `SAAYAM_MODEL` to change the model (default `claude-sonnet-5-5`).

The server has basic protections: 10 requests/minute per IP, request size limits, input
validation, and the web search tool is capped at 3 searches per question. Add real auth
(or app attestation) before a wide public launch so the endpoint can't be abused.

## Add a new guide

1. Copy any entry in `src/data/guides-6.ts` (it uses the short `b('English', 'తెలుగు')` helper from `bi.ts`).
2. Fill every field in both languages. Keep sentences short; explain any official term.
3. Use only official or well-sourced facts; if a fee varies, say who to ask instead of guessing.
4. Set `lastChecked` to today and pick a `category` from `src/data/categories.ts`.
5. Add a directory entry in `src/data/directory.ts` with its `guideId`.

Guides live in `src/data/guides.ts`, `guides-more.ts` and `guides-3.ts` … `guides-9.ts`.
Also add a few everyday words for it in `src/bot/vocab.ts` so the Saayam helper finds it.

## Icon & splash

`assets/` holds the app icon (a cream document with a folded corner, Telugu "సా" and a saffron line, on teal — "government papers made simple"), the
Android adaptive icon layers (foreground, background, monochrome for themed icons), the splash
image (shown on cream `#FBF7F0`) and the web favicon. `expo prebuild` generates every Android
launcher size from these.

## Publishing

Full step-by-step: **[DEPLOY.md](DEPLOY.md)** (privacy page → `eas build` → Play Console).

| File | What it is |
|---|---|
| `eas.json` | build profiles: `preview` (.apk to test), `production` (.aab for Play) |
| `render.yaml`, `server/Dockerfile` | for later, when you add the AI server |
| `docs/privacy-policy.html` | bilingual privacy policy to host publicly |
| `docs/store-listing.md` | Play title, short and full description in EN + TE |
| `docs/play-console-answers.md` | Data safety, Government apps, content rating answers |
| `store/` | 512 icon, 1024×500 feature graphic, 6 Telugu + 6 English phone screenshots |

App environment variables (set in `eas.json`):

| Variable | Purpose |
|---|---|
| `EXPO_PUBLIC_API_URL` | optional, later: AI server URL (leave unset for v1) |
| `EXPO_PUBLIC_PRIVACY_URL` | shown on the About screen |
| `EXPO_PUBLIC_CONTACT_EMAIL` | About screen + where reports and guide requests are emailed |

Android permissions: only `INTERNET` (the rest are blocked in `app.json`).

## Project layout

```
app/              screens (home, category/[id], guide/[id], directory, ask, about)
src/data/         guides, categories and the A–Z directory (the content)
src/i18n.ts       fixed UI text in both languages
src/bot/          Saayam offline helper (vocab + engine)
src/feedback.ts   reports / guide requests (email, or server if configured)
src/api.ts        client for the optional AI server (later)
src/prefs.tsx     saved guides, checklist ticks, text size (AsyncStorage)
src/guideText.ts  plain-text versions of guides for read-aloud and sharing
server/           Node proxy to the Claude API
```
