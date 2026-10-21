# Putting Saayam on Google Play

Version 1 needs **no server and no API key**: the guides and the Saayam helper work offline on the
phone, and "Report wrong information" opens the user's email app. Three steps:
**(1)** privacy policy page, **(2)** Android build, **(3)** Google Play.

## 1. Contact email & privacy policy page

Play needs a public URL.
1. Pick the email that should receive reports and guide requests (a new Gmail like saayam.app@… is fine). Replace every `dattaharshithreddy@gmail.com` in `docs/privacy-policy.html` with it.
2. Host it — easiest: GitHub repo → Settings → Pages → deploy from branch, folder `/docs`. URL becomes `https://<user>.github.io/<repo>/privacy-policy.html`.
3. Put that URL in `eas.json` (`EXPO_PUBLIC_PRIVACY_URL`) and in Play Console → App content → Privacy policy.

## 2. Build the Android app

```bash
npm install -g eas-cli
eas login                      # free Expo account
eas init                       # links the project, adds projectId to app.json
# eas.json already has your privacy URL and contact email
eas build -p android --profile preview      # .apk to install on your own phone and test
eas build -p android --profile production   # .aab for Google Play
```

Test the preview APK on a real phone: Telugu text, read aloud, share to WhatsApp, the Saayam helper (try Telugu and Tenglish), and that "Report" opens your email app. Turn on airplane mode — everything except links should still work.

## 2b. Signed builds without Expo (GitHub Actions)

The workflow in `.github/workflows/android-apk.yml` signs with your private upload key when these
repository secrets exist (Settings → Secrets and variables → Actions):
`ANDROID_KEYSTORE_BASE64`, `ANDROID_KEYSTORE_PASSWORD`, `ANDROID_KEY_ALIAS`, `ANDROID_KEY_PASSWORD`.
Each GitHub Release then has a signed `.apk` and a `…-playstore.aab` to upload to Google Play.
Raise `expo.android.versionCode` in `app.json` for every Play upload.

## 3. Google Play

1. https://play.google.com/console — one-time US$25 developer registration (identity verification takes a few days).
2. Create app → name from `docs/store-listing.md`, default language Telugu or English, App, Free.
3. Store listing: paste text from `docs/store-listing.md`; upload `store/icon-512.png`, `store/feature-graphic.png` and the phone screenshots from `store/`.
4. App content: answer every form using `docs/play-console-answers.md`.
5. New personal accounts: closed test with **12+ testers for 14 days** before production (plan in `docs/play-console-answers.md`).
6. Each later update: bump `version` in `app.json` (e.g. 1.0.1); `versionCode` is bumped automatically by the production profile.

## Updating guides without a new APK

Phones download newer guides from GitHub Pages by themselves (at most every 6 hours, when online).
**GitHub Pages must be on:** repo Settings → Pages → Source: *Deploy from a branch* → `main` / `docs`.

To publish a correction or new guide:

1. Edit the guide in `src/data/…`.
2. In `src/data/version.ts`, raise `CONTENT_VERSION` (e.g. `2026102101` → `2026102501`) and set `CONTENT_DATE`.
3. Run `npx tsc --noEmit && npx tsx scripts/build-content.ts` — it validates everything and writes `docs/content/`.
4. Commit and push with `[skip ci]` in the message (no new APK needed). Within a few minutes Pages serves it and phones pick it up.

The script refuses to publish content that fails validation, and the app checks it again before using it, so a bad file can't break the app. If you change the *shape* of the data (new fields the old app can't show), raise `MIN_APP` in the script — older apps will then ignore the update.

## Later: turn on AI answers (optional)

Not needed for version 1. When you want AI answers in addition to the offline helper:


1. Get an API key at https://console.anthropic.com → API keys. Add a few dollars of credit and set a **monthly spend limit** (Settings → Limits) so costs can't run away.
2. Put this project on GitHub (private repo is fine).
3. https://render.com → New → **Blueprint** → choose the repo. Render reads `render.yaml`.
4. When asked, paste `ANTHROPIC_API_KEY`. Click Apply.
5. When it's live, open `https://<your-service>.onrender.com/health` — it must show `ok`.
6. Copy that base URL (no trailing slash) into `eas.json` as `EXPO_PUBLIC_API_URL`, wire `ask()` from `src/api.ts` into the helper as an "Ask AI" option, and update the privacy policy and Data safety form (see `docs/play-console-answers.md`).

Notes
- Free Render services sleep after ~15 minutes idle; the first question after that takes ~30–60 s. The $7/month plan stays awake.
- "Report wrong information" messages appear in Render → Logs as lines starting with `FEEDBACK`. (The free disk is wiped on restart, so read the logs; `feedback.jsonl` is only kept on paid plans with a disk.)
- The API key lives **only** on the server. Never put it in the app or `eas.json`.
- Any other host works too: `server/Dockerfile` runs anywhere (Railway, Fly.io, a VPS). Needs env `ANTHROPIC_API_KEY`; listens on `PORT` (default 8787).
