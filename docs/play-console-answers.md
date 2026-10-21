# Play Console forms — answers for Saayam

Answers below match how the app and `server/` actually behave (checked 21 Oct 2026, v1.3.0).
If you add analytics, ads, crash reporting or accounts later, these answers must change.

## App content → Data safety

Version 1 has no server: the Saayam helper runs on the phone, and reports open the user's own
email app. So the app itself collects and shares nothing.

**Does your app collect or share any of the required user data types?** No

Why this is accurate:
- Saved guides, checklist ticks, language, text size, "What can we get?" answers and reminders are stored only on the device — never sent.
- Reminders use local notifications scheduled on the phone (no push service, no server).
- Guide updates are a plain download of a public JSON file from GitHub Pages; no user data is sent with it.
- The Saayam helper is offline; what users type to it never leaves the phone.
- "Report wrong information" / "Request a guide" only open the user's email app (a `mailto:` link). The user sends the email themselves from their own email account; the app doesn't transmit anything.
- Read aloud uses the phone's own text-to-speech. Links open in the browser.
- No analytics, crash reporting, ads or accounts.

**If you later turn on the AI server** (`EXPO_PUBLIC_API_URL`), change this answer to **Yes** and declare:
App activity → Other user-generated content · Collected · Not shared · Optional · App functionality
(questions are sent to the server and to Anthropic as a service provider), plus encryption in transit = Yes
and a deletion route by email. Update the privacy policy at the same time.

## App content → Government apps

**Does your app provide government information or services?** It provides government *information*.
**Is the app developed by or on behalf of a government?** No.
Proof the policy asks for (already in place):
- Store listing description starts with the "NOT an official government app" disclaimer and lists official .gov.in sources.
- In the app: the About screen (linked at the bottom of the home screen) shows the disclaimer and official sources; every guide ends with official links and a "rules change — confirm at the office" warning.
- The icon and screenshots use no government emblem, logo or flag.

## App content → Other declarations

| Form | Answer |
|---|---|
| Privacy policy | URL of hosted `docs/privacy-policy.html` |
| Ads | No, the app does not contain ads |
| App access | All functionality is available without special access (no login) |
| Content rating (IARC questionnaire) | Category: Reference, news or educational. Answer **No** to violence, sexual content, profanity, drugs, gambling. User-generated content shared with other users: **No**. Expected rating: Everyone / 3+ |
| Target audience | 18 and over (also fine for 13+); **not** designed for children |
| News app | No |
| Health apps | No (gives information about government health schemes, not medical advice) |
| Financial features | None (explains schemes and loans; no lending, payments or trading) |
| Data safety | As above |

## App signing

Use **Play App Signing** (default for new apps). The `.aab` from GitHub Actions is signed with your private **upload key**
(`saayam-upload.keystore`, alias `saayam-upload`); Google re-signs the app with its own app-signing key.
Keep the keystore file and password backed up — if lost, ask Google to reset the upload key (Play Console → Setup → App signing).

## Releasing with a new personal developer account

New personal accounts must run a **closed test with at least 12 testers opted in for 14 days in a row** before "Apply for production" unlocks. Internal testing does not count.

Plan:
1. Play Console → Testing → Closed testing → create track → upload the `.aab` from the GitHub release (`saayam-v…-playstore.aab`, built by the Actions workflow and signed with your upload key).
2. Add 12+ testers by email list or Google Group (family and friends with Android phones work well — ask them to keep the app installed for the full 14 days).
3. Share the opt-in link; check the tester count in the console.
4. After 14 days: Dashboard → Apply for production → answer the questions about what testers found and what you fixed.
