# Device test plan — Khai Tracker 1.0.0

## Status: NOT EXECUTED

No item in this document has been run. The build machine has no hypervisor
(`HypervisorPresent = False`) and no attached physical phone, so the APK has never been executed.

The binary is real: it compiles, passes `tools/check.py`, is signed with v2 + v3, and the AAB
validates with `bundletool`. That proves it is well-formed, **not** that it works. Treat every screen
as unverified until someone signs the tables below.

A release is only "tested" when:

- every row in §3–§9 has a tick or a filed bug,
- it has run on **at least one Android 7–9 device and one Android 13+ device**,
- the signing certificate on the installed APK matches the release certificate.

---

## 1. Install

```powershell
# build and verify (from the repository root of khai-tracker-android)
py tools\check.py
py tools\build.py
py tools\verify.py

# install: either the version APK or the universal APK built from the AAB
adb install -r build\khai-tracker-1.0.0.apk
adb install -r build\apks-out\universal.apk

# confirm what actually got installed
adb shell dumpsys package in.khaifoods.tracker | Select-String versionName,versionCode
adb shell cmd package resolve-activity --brief in.khaifoods.tracker

# watch logs while using the app (never paste real participant data into a bug report)
adb logcat -c
adb logcat *:E AndroidRuntime:E KhaiTracker:V
```

If install fails:

| Error | Meaning |
| --- | --- |
| `INSTALL_FAILED_UPDATE_INCOMPATIBLE` | Old build signed with a different key — `adb uninstall in.khaifoods.tracker` first |
| `INSTALL_FAILED_OLDER_SDK` | Device below Android 7.0; not supported |
| `INSTALL_PARSE_FAILED_NO_CERTIFICATES` | APK not signed — rebuild, do not hand-patch |

Also test the Play path, not only sideload: upload the AAB to **Internal testing**, install through
the Play Store, and confirm the app starts. Play-signed builds differ from local ones.

---

## 2. Test matrix

Minimum coverage. A "device" may be a borrowed phone; record the model and Android build in §11.

| # | Device class | Android | Why it matters |
| --- | --- | --- | --- |
| A | Low-end, 2 GB RAM, 720p | 7.0–8.1 | minSdk floor; old WebView/TTS; small screen; no notification runtime permission |
| B | Mid-range, common in the pilot | 10–12 | The realistic majority |
| C | Modern | 13–15 | Notification permission flow, edge-to-edge opt-out, photo picker era, predictive back |
| D | Anything with a notch/large font | 12+ | Layout and font-scale resilience |

Language combinations to run on each device:

1. Phone in English, app in English.
2. Phone in Hindi, app in Hindi.
3. **Phone in English, app in Hindi** and the reverse — this is the combination that usually breaks.

---

## 3. First run and onboarding

| Test | Expected | Pass |
| --- | --- | --- |
| Fresh install, first launch | Onboarding, no crash, no permission dialog | ☐ |
| Empty participant code → Start | Inline error, stays on onboarding | ☐ |
| Code with spaces/emoji | Rejected or filtered; stored code is `[A-Za-z0-9_-]`, max 12, uppercase | ☐ |
| No age band → Start | Inline error | ☐ |
| No consent tick → Start | Inline error | ☐ |
| Tick "None of these" in conditions | All other condition ticks clear | ☐ |
| Tick another condition after "None" | "None" clears | ☐ |
| Add two medicines, then remove one | Correct row removed, first row keeps its text | ☐ |
| "Listen in Hindi" on a phone with Hindi TTS | Consent is read aloud | ☐ |
| Same on a phone without Hindi TTS | Clear "not installed" message, no crash | ☐ |
| Kill the app mid-onboarding, relaunch | Onboarding restarts cleanly; no half-profile | ☐ |
| Complete onboarding | Lands on Today | ☐ |
| Rotate device during onboarding | Portrait-locked; no restart, no lost text | ☐ |

---

## 4. Daily entry (Today)

| Test | Expected | Pass |
| --- | --- | --- |
| Add a dish from the library | Appears under the right meal with portion and range | ☐ |
| Search in English and in Hindi | Matches both scripts; no results state is readable | ☐ |
| Change portion | Estimate range updates | ☐ |
| Remove an item | Confirmation, then item disappears | ☐ |
| Add the same dish twice | Allowed as two rows (two servings), does not silently merge | ☐ |
| Tick a medicine Taken / Skipped / Changed | Selection is exclusive per medicine; summary count updates | ☐ |
| Participant with no medicines | Copy explains it and does not block completion | ☐ |
| Enter BP 120/80, pulse, glucose fasting, weight | Accepted; units visible | ☐ |
| Enter glucose after food then switch to fasting | Context follows the selection, value kept | ☐ |
| Enter non-numeric text in a numeric field | Rejected or ignored, no crash | ☐ |
| Enter absurd values (BP 0, weight 999) | Either rejected or stored as entered without a false clinical claim | ☐ |
| Set energy/mood ratings | Selected state is visible, not colour-only | ☐ |
| Type a note, background the app, return | Note is still there | ☐ |
| Type, then force-stop from recents, relaunch | Typed values that were flushed are present; nothing is corrupted | ☐ |
| Save | "Saved on this device. Encrypted." | ☐ |
| Save twice | Second save updates, does not duplicate the day | ☐ |
| Airplane mode, save | Saves locally; no sync error dialog | ☐ |
| Change language after saving | Values unchanged, labels switch | ☐ |

---

## 5. History and editing

| Test | Expected | Pass |
| --- | --- | --- |
| Grid after 1 day of data | Only that day filled; no phantom days | ☐ |
| Tap a filled day | Detail shows meals, meds, readings, note | ☐ |
| Tap an empty past day | "No entry for this day", with an edit path | ☐ |
| Tap tomorrow | Blocked; future dates cannot be filled | ☐ |
| Edit a past day and save | Today's entry unaffected; day detail updates | ☐ |
| Edit a day, change language, reopen | Values intact | ☐ |
| 21 days later | Oldest day drops off the grid, still present in exports | ☐ |

---

## 6. Progress, exports and sharing

| Test | Expected | Pass |
| --- | --- | --- |
| Completeness with 0 days | 0%, no divide-by-zero, no crash | ☐ |
| Completeness with partial days | Matches the documented rule (food + reading + meds-or-none) | ☐ |
| Streak across a missed day | Breaks correctly; "this week" counts the last 7 days | ☐ |
| Insights with <5 readings | Empty state, no invented pattern | ☐ |
| Insights with enough readings | Descriptive wording, caveat visible, strength label localised | ☐ |
| Food CSV | Opens in a spreadsheet; headers and Hindi dish names intact | ☐ |
| Metrics CSV | One row per day; blanks stay blank | ☐ |
| Clinician PDF, 1 day | One page, no clipped footer | ☐ |
| Clinician PDF, 21 full days | Still one page; rows capped, footer wrapped, nothing cut off | ☐ |
| JSON backup | Valid JSON; can be re-read by the team's tooling | ☐ |
| FHIR bundle | Parses; observations have LOINC codes and UCUM units; **no diet entries** | ☐ |
| Share to Gmail / WhatsApp / Drive / printer | File arrives intact and opens | ☐ |
| Phone with no share target | "No app can receive the file" message, no crash | ☐ |
| Cancel the share sheet | App resumes without losing state | ☐ |
| Open an export from another app | Provider refuses; no path traversal | ☐ |

---

## 7. App lock and privacy

| Test | Expected | Pass |
| --- | --- | --- |
| Set a PIN | Asked on next launch | ☐ |
| Wrong PIN | "Wrong PIN", stays locked | ☐ |
| 3-digit or 5-digit PIN attempted | Rejected with "must be exactly 4 digits" | ☐ |
| Correct PIN | Unlocks | ☐ |
| Background for <60 s, return | Still unlocked | ☐ |
| Background for >60 s, return | Locked again | ☐ |
| Return from the share sheet | Should not re-lock within 60 s; note actual behaviour | ☐ |
| Remove PIN with correct PIN | "PIN removed", no lock on next launch | ☐ |
| Enable "hide in recent apps", open recents | No thumbnail; screenshot blocked | ☐ |
| Disable it | Thumbnail returns | ☐ |
| Erase my data → cancel | Nothing deleted | ☐ |
| Erase my data → confirm | Back to onboarding; relaunch shows no old data | ☐ |
| After erase, check storage | Database empty, Keystore alias gone, exports not restorable from app | ☐ |
| `adb backup` attempt | Backup is refused or excludes app data | ☐ |

---

## 8. Reminder and reboot

| Test | Expected | Pass |
| --- | --- | --- |
| Turn reminder on, Android 13+ | Notification permission requested once | ☐ |
| Deny permission | Reminder stays off or shows a clear explanation; no crash | ☐ |
| Allow permission, wait for the time | One quiet notification, no clinical values in the text | ☐ |
| Tap notification | Opens the app on Today | ☐ |
| Reboot the phone with reminder on | Reminder re-arms; fires the next day | ☐ |
| Reboot with reminder off | No notification | ☐ |
| Change app language | Channel name/description follow the new language | ☐ |
| Turn reminder off | No further notifications | ☐ |
| Battery saver / Doze overnight | Note whether the reminder slipped; inexact alarm is expected | ☐ |

---

## 9. Sync

Use the reference v2 server in [`../../khai-sync-server`](../../khai-sync-server/README.md) on a test
host with a certificate the device trusts. Never point a test device at production data. The legacy
`khai-backend` cannot produce `accepted_dates` and cannot mark Android days synced; do not use it
for this section.

First run the automated server contract suite on the workstation:

```powershell
py khai-sync-server/test_sync.py
# expected: 10 tests, OK
```

| Test | Expected | Pass |
| --- | --- | --- |
| No server address set | "Not synced yet", no network calls (verify in a proxy) | ☐ |
| `http://` address | Rejected: "Use an HTTPS address" | ☐ |
| Malformed address | "Not a valid address" | ☐ |
| Missing bearer token | Failure message; no request reaches `/api/sync` | ☐ |
| Valid HTTPS + token + consent, tap Sync now | Success message; server `days` count increases by the expected dates | ☐ |
| Sync twice | Idempotent; server still has one row per participant-day | ☐ |
| Revoke the device token, tap Sync now | 401; failure message; data still local | ☐ |
| Change participant code on server side | 403 `cross_participant_denied`; no silent merge | ☐ |
| Two device tokens, same participant code | Each token writes only its bound device ID; day upserts remain keyed by `(code, date)` | ☐ |
| Configure an SPKI pin from a different certificate | TLS failure; no record is acknowledged | ☐ |
| Airplane mode, tap Sync now | Offline message, entries remain pending, no data loss | ☐ |
| Server returns 500 (mock proxy) | Failure message; data still local; retry later works | ☐ |
| Self-signed certificate without installed CA | Rejected (expected); document it for coordinators | ☐ |

Server-side check with the v2 test database:

```powershell
# inspect metadata only; day payloads are encrypted and must not be logged
py -c "import sqlite3;c=sqlite3.connect('khai-sync-server/local/sync.db');print(c.execute('select code,date,updated_at from days order by updated_at desc limit 5').fetchall())"
py -c "import sqlite3;c=sqlite3.connect('khai-sync-server/local/sync.db');print(c.execute('select at,event,token_id,code,detail from audit order by id desc limit 5').fetchall())"
```

---

## 10. Accessibility, layout and resilience

| Test | Expected | Pass |
| --- | --- | --- |
| Font size 200% | No clipped buttons, no overlapping labels, scroll still reaches Save | ☐ |
| Display size 200% | Same | ☐ |
| TalkBack through onboarding and Today | Every control announces a label; no "unlabelled button" | ☐ |
| TalkBack on the 21-day grid | Each square announces its date and state | ☐ |
| High contrast / dark mode | Text remains readable on both themes | ☐ |
| Small screen (5", 720p) | Everything reachable; keyboard does not cover the active field | ☐ |
| Keyboard open on the note field | Layout resizes (`adjustResize`), Save reachable | ☐ |
| Process death while backgrounded | App restores to a sane screen; no crash | ☐ |
| No network, no SIM, no account | Full functionality except optional sync | ☐ |
| Storage nearly full | Save failure is reported cleanly ("Could not save"), no corruption | ☐ |
| Clock changed backwards / timezone change | Dates do not shift existing entries | ☐ |
| Charge-only USB, developer options off | Nothing breaks; app does not require debugging | ☐ |
| Back button on Today | Exits (or prompts), does not corrupt state | ☐ |
| Predictive back gesture / button on Android 13+ | Same behaviour as above; no double-handling, no crash | ☐ |
| Back button during onboarding | Exits onboarding-with-edit or returns to a valid step, no half-save | ☐ |

---

## 11. Sign-off

Copy this block into the release ticket and fill it in per device.

```
Device:            (make / model)
Android version:   (e.g. 13, build TQ3A.230805.001)
Screen:            (px, density, font scale)
App version:       1.0.0 (versionCode 1)
APK installed:     sideload | internal-testing
Signer SHA-256:    (apksigner verify --print-certs)
Tester:            (name)
Date:              (YYYY-MM-DD)

§3 onboarding        PASS / FAIL  notes:
§4 daily entry       PASS / FAIL  notes:
§5 history           PASS / FAIL  notes:
§6 exports           PASS / FAIL  notes:
§7 lock/privacy      PASS / FAIL  notes:
§8 reminders         PASS / FAIL  notes:
§9 sync              PASS / FAIL  notes:
§10 accessibility    PASS / FAIL  notes:

Bugs filed:        (ids)
Release decision:  GO / NO-GO
```

A release is **NO-GO** if any of these is true: a crash on launch, data loss after save, an export
that cannot be opened, unsaved typing after backgrounding, a lock bypass that survives a restart, or
any screen that fails at 200% font scale.

---

## 12. What static checks already cover (and what they do not)

`tools/check.py` proves:

- every string key exists in both `values/` and `values-hi/`, with matching placeholders;
- every `R.*` reference resolves;
- all launcher icon densities exist;
- `assets/foods.json` matches its schema;
- the manifest declares the expected package, version and permissions;
- versions agree between manifest, build script and strings.

`tools/verify.py` proves about the artefact that would be uploaded:

- the APK verifies under v2 and v3, is signed by Khai Foods with a 4096-bit key, and matches an
  expected certificate fingerprint if one is supplied;
- badging agrees with the manifest (package, versions, SDK levels, permissions, label, launcher);
- the food library, dex payload and Hindi resources are actually inside the APK;
- the AAB validates and contains a base module;
- the universal APK is not stale and carries the same signature.

Neither script can prove that anything renders, that a keystroke is saved, that a notification fires,
that a PDF fits, or that the app is usable by a 60-year-old on a ₹8 000 phone. Only §3–§11 can.
