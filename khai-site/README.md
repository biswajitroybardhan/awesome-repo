# Khai Tracker website

A small, self-contained static site for Khai Tracker. No framework, no build step, no server-side
code, no analytics and no network calls. Open `index.html` directly or serve the folder with any
static file host.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Landing page: the product, the closed loop, clinician sheet, download, FAQ |
| `demo.html` | Interactive browser demo — **clearly marked as a demo**, not for real clinical records |
| `blueprint.html` | The digital-transformation blueprint: what v1.0 does, what needs a server, roadmap |
| `functions.html` | Full capability map: every pattern function labelled Shipped, Demo or Roadmap with its honest limit |
| `hospital.html` | Hospital deployment blueprint: roles, coordinator console, review, medication, FHIR/HL7 integration and governance — a design, not a deployment |
| `assistant.html` | **Khai Guide** — text-only, grounded Q&A from the tool's own help text; no AI, no diagnosis, no advice |
| `security.html` | Encryption, PIN, sync, build notes, APK verification and known gaps |
| `privacy.html` | Participant-first privacy notice, with a separate warning about the demo |
| `404.html` | Not-found page |
| `styles/site.css`, `styles/demo.css` | Design systems for the marketing pages and the demo |
| `scripts/site.js` | Theme, mobile menu, copy buttons, footer year — no network |
| `scripts/translations.js`, `scripts/i18n.js` | Generated 26-language bundle and the embedded localisation runtime — no network |
| `scripts/demo/*.js` | The demo's data model, rules, screens and event handling |
| `scripts/assistant.js` | Deterministic help-text lookup for Khai Guide — fixed translated strings only; no model, no network; answers can be read aloud by the browser |
| `scripts/foods.js` | Generated 83-dish food library (`window.KHAI_FOODS`) |
| `assets/` | Mark, icon, social image |
| `files/` | Signed demo APK plus its `.sha256` checksum |
| `robots.txt`, `sitemap.xml`, `.well-known/security.txt` | Static host discovery files; no runtime behaviour |
| `DEPLOY.md`, `MAILBOXES.md` | Honest runbooks for publishing the site and establishing contact mailboxes — neither is complete yet |

## Languages

The site and the browser demo share one embedded translation bundle
(`scripts/translations.js`), generated from `tools/i18n/` in the Android repo. It carries **26
languages** and makes no network request to load them.

| Status | Languages | Use |
| --- | --- | --- |
| **Shipped** (human-reviewed) | `en` English, `hi` Hindi | Application copy and consent are reviewed; read-aloud still depends on the phone's installed voice |
| **Draft** (native review required) | `bn`, `ta`, `te`, `mr`, `gu`, `kn`, `ml`, `pa`, `ur`, `fr`, `de`, `pt`, `it`, `ru`, `zh`, `ja`, `ko`, `ar`, `tr`, `vi`, `id`, `th`, `sw`, `am` | UI preview only — **not for real clinical records** |

The 24 draft locales are machine-authored drafts, never presented as human-reviewed. Every draft
page shows a visible "draft translation" banner, and each draft option in the switcher is marked as
such. They must be reviewed by a native speaker for clinical and consent wording before any real
use. `ar` and `ur` switch the document to a right-to-left layout.

**What is translated:** all browser-demo chrome, consent text, caveat and demo banners, form labels,
navigation, buttons and the language picker; plus the page titles, navigation and footer of all
eight HTML pages. Dish names are deliberately kept in their familiar original form — only the UI
around them is translated.

**What is not translated:** the long-form article prose inside `blueprint.html`, `functions.html`,
`hospital.html`, `security.html` and `privacy.html` remains English. Titles, navigation, banners and
footers are localised, but the article body is not. In the demo, the 180-key translated dictionary
covers the core recording loop, consent, caveats, progress, exports and the hospital view; the
remaining minor demo labels (about 130 keys in the original demo dictionary) have no draft
translation and fall back to English in non-English locales. These are known gaps, stated plainly
rather than implying full-page or full-demo translation.

**Selecting a language:** use the header switcher, the language button in the demo, or `?lang=xx`
(for example `demo.html?lang=ta`). The choice persists in `localStorage` as `khai.lang`.

### Adding or reviewing a language

1. Add a row to `khai-tracker-android/tools/i18n/languages.json` (`code`, English name, native name,
   `shipped`/`draft`) and to `Languages.kt` in the Android app.
2. Translate `en-app.json` and `en-web.json` into
   `khai-tracker-android/tools/i18n/translations/<code>.json` and
   `khai-site/tools/i18n/translations/<code>.json`, preserving every key and placeholder. Check them
   with `py tools/i18n/validate.py`.
3. Add that locale's two label arrays (`age_bands`, `condition_options`) and the speech-unavailable
   string to `tools/i18n/extras.json`.
4. From the Android repo run `py tools/i18n/generate.py` and `py tools/i18n/generate_site.py`. These
   write the Android `values-<code>/` resources and regenerate `scripts/translations.js`.
5. Only after a native speaker has reviewed clinical and consent wording in **both** app and site
   may the locale's `status` be flipped to `shipped` and its draft banner removed.

## Running locally

```sh
cd khai-site
py -m http.server 8788 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8788/`. The demo also works from `file://` in most browsers, but a local
server is recommended so downloads and `localStorage` behave consistently.

## Hosting

Any static host works (GitHub Pages, Netlify, S3, nginx). Requirements:

- Serve `index.html` for `/` and map unknown paths to `404.html` if the host supports it.
- Serve `.html`, `.css`, `.js`, `.svg`, `.png` and `.apk` with their normal MIME types. For the APK,
  `application/vnd.android.package-archive` is ideal; `application/octet-stream` also works.
- No redirects are needed. Canonical URLs assume `https://khaifoods.in/`.
- HTTPS is recommended so the copy-to-clipboard button can use the modern Clipboard API. There is a
  `document.execCommand` fallback for other contexts.

## The demo promise

The browser demo mirrors the Kotlin `DayEntry` model and rules: offline storage in `localStorage`
under `khai.demo.v1`, 21-day completeness, ranged food estimates, medicine status, BP/pulse/glucose/
weight, EN/HI, CSV, JSON, FHIR R4 and a printable clinician sheet.

It deliberately has **no encryption, Android Keystore, PIN, sync, reminders, analytics or upload**.
Nothing leaves the browser. Do not enter real clinical records into it. The APK on this site is a
**development-signed technical preview**, not a Play Store release; verify its SHA-256 as described
on `security.html`.

The Progress tab also illustrates a **weekly plan draft** (deep link `demo.html#plan`). With at least
four days that have both food and a reading, it builds review points with the reasoning shown beside
each one, fixed-threshold escalation flags, a confidence note, and Accept / Edit / Reject decisions
stored locally under `khai.demo.v1` → `plan.decisions`. It is illustrative only: no advice, no
diagnosis, no prescription change, and no equivalent autonomous function in the Android app.
`functions.html` maps the same pattern to Shipped / Demo / Roadmap so a roadmap item is never mistaken
for a live feature.

The Progress tab also links to a **hospital control-room illustration** (deep link `demo.html#hospital`).
It is a role-switchable view — coordinator, clinician, pharmacist — with a synthetic cohort, a review
queue, a medication-discrepancy queue and an audit trail. Decisions are stored as local demo objects
under `khai.demo.v1` → `hospital.decisions`, with a rolling `hospital.audit` trail. It is explicitly a
design illustration: no real patients, no hospital connection, and nothing deployed. `hospital.html`
publishes the full reference architecture — roles, coordinator console, clinician review, closed-loop
medication, a FHIR R4 / HL7 v2 integration contract, identity mapping and governance — with each item
marked Shipped, Demo or Roadmap. The intended first context is an aspirational public-hospital setting
in India; no hospital is named as a partner or pilot, and no deployment is claimed. A real integration
scaffold is deliberately deferred until a partner provides a concrete target-system specification.

## Khai Guide (grounded helper, not an AI)

`assistant.html` and the app's Guide tab answer a small set of questions by looking up **fixed strings
that already ship as the tool's own translated help text**. There is no language model, no training,
no fine-tuning, no retrieval index over personal records and no network call, so the helper cannot
invent a claim: an answer is only ever a list of approved strings joined together. Questions it does
not recognise get the "no answer" string. Questions about readings, medicines, diagnosis or treatment
are redirected to a qualified clinician, and the non-medical-device footer is shown in the panel.
It does not interpret the participant's own data, prescribe, or replace a clinician.

The same intent table exists in `scripts/assistant.js` (site) and `AssistantScreen.kt` (app). Answers
are drawn only from the embedded locale bundle, so they follow the selected language; the 24 draft
locales remain machine drafts marked for native-speaker clinical/consent review.

**Voice is output-only.** Each Guide answer has a "Listen" control that reads the same fixed string
with the browser's or phone's own text-to-speech. There is no microphone input, no new permission,
no recording and no network request from the site; voice availability depends on the voices installed
on the device. Speech recognition remains deferred, and spoken wording in the 24 draft languages is
still machine-authored and requires native-speaker clinical/consent review before real use. The app's
consent read-aloud uses the same `TextToSpeech` helper.

## Attribution and claims

Built by Khai Foods Pvt Ltd, Jamshedpur. Product owner: Biswajit Roy Bardhan. No affiliation with
Zhongshan Hospital, HIMSS or any named health system is claimed. The app and site make no diagnosis,
treatment or outcome claims and are not a medical device.
