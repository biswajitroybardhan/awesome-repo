# Khai Tracker — store listing copy (copy-paste ready)

## Google Play / App Store basics
- **App name:** Khai Tracker
- **Short description (80 chars):** Food & health tracking for the Khai study — meals, supplements, energy, in English & हिन्दी.
- **Full description (EN):**

```

Khai Tracker is the study app for participants of the Khai Foods Phase-0 pilot.

Track what you eat (breakfast, lunch, dinner, snacks), your supplements, and
how you feel — energy, mood, sleep — every day in under two minutes.

- 14-day history with a simple calendar
- Weekly completion and streak tracking
- Works fully offline (mobile-only data stays on the device)
- English and हिन्दी
- Export your own data as CSV or JSON anytime
- No accounts, no adverts, no marketing. Study-only tool.

Khai Tracker is a tracking tool for a research pilot, not a medical device and
not medical advice. It does not diagnose, treat, cure, or prevent any disease.
Always consult your doctor or dietitian before changing medication or diet.

For study insights, the coordinator may review your anonymised data under the
informed-consent terms you accepted when joining the study.

Built by Khai Foods Pvt Ltd, India.
```

- **Full description (हिन्दी):**

```

Khai Tracker, खाई फूड्स फेज़-0 पायलट के प्रतिभागियों के लिए अध्ययन ऐप है।

हर दिन दो मिनट में लिखें: नाश्ता, दोपहर, रात, स्नैक्स, सप्लीमेंट्स, ऊर्जा,
मूड और नींद।

- 14 दिन का इतिहास और कैलेंडर
- साप्ताहिक पूर्णता और स्ट्रीक ट्रैकिंग
- बिना इंटरनेट के भी चलता है (डेटा आपके डिवाइस पर रहता है)
- अंग्रेज़ी और हिन्दी
- अपना डेटा कभी भी CSV या JSON में निकालें
- कोई खाता, कोई विज्ञापन, कोई मार्केटिंग नहीं। केवल अध्ययन उपकरण।

Khai Tracker एक रिसर्च पायलट का ट्रैकिंग टूल है, न कि मेडिकल डिवाइस या चिकित्सा
सलाह। यह किसी बीमारी का निदान, इलाज, उपचार या रोकथाम नहीं करता। दवा या आहार
बदलने से पहले हमेशा अपने डॉक्टर या आहार विशेषज्ञ से परामर्श करें।

खाई फूड्स प्राइवेट लिमिटेड, भारत।
```

- **Category:** Health & Fitness; **sub-category:** Health
- **Keywords (iOS only):** health, food, diet, tracking, diabetes, nutrition, hindi
- **Content rating / audience:** Teen (contains basic health info only; no violence, no sexual content)

## Store assets to upload
- Play icon: `khai-store/assets/play-icon-512.png`
- Feature graphic: `khai-store/assets/play-feature-graphic-1024x500.png`
- Screenshots: **replace placeholders with real device captures** — iOS requires true iPhone/iPad shots (do not submit `shot-*.png` placeholders). Play data-safety screenshots keep 9:16 phone-frame layout of `shot-1/2/3`.

## Data safety & permissions
- **Permissions requested: NONE** — offline-only app requests nothing at runtime.
- Data safety (Play form): user-provided health input; collected for study analytics only; **not shared with third parties; not sold; never used for ads**; encrypted in transit (TLS).
- Deletion request: in-app "Reset / Clear my data" removes device data; coordinator can purge server rows on request (email in `PRIVACY.md`).
- App tracking: none. No advertising IDs, no trackers.

## Legal to link
- Privacy Policy: host `PRIVACY.md` content at the app's `/privacy` page (or on the Render site) and link it in both consoles.
- On App Store Connect: declarations = Health & Fitness (user input), Identifiers (device ID), Contacts (participant code) — all as "Collected". Export compliance: exempt (TLS only, no crypto restrictions).

## Release notes (v1.0.0)
"First public release. Daily food & supplement logging, 14-day history, offline mode, English/Hindi, CSV/JSON export."