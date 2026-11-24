# Security notes — Khai Tracker 1.0.0

This file is for the people who operate and review the app, not for participants. It states what is
protected, what is not, and what must change before a production rollout.

## 1. What the app stores

Per participant, per day:

- food items (library id, label, quantity, unit, estimated energy and macronutrients);
- medicine name, dose, and the day's status (taken / skipped / changed);
- systolic, diastolic, pulse, glucose and context, weight, energy, mood, sleep, free-text note;
- a timestamp.

Profile: participant code, age band code, condition codes, medicine list, consent version and
timestamp, random device ID, creation time.

Settings: language, reminder on/off and time, PIN hash/salt with failure count, optional sync URL,
per-device bearer token, optional SPKI pin, explicit sync consent, last sync status, and the
"hide previews" flag.

None of this is a name, phone number, address or government identifier.

## 2. Encryption at rest

- Algorithm: AES-256-GCM, 128-bit tag, random 96-bit IV per record.
- Key: generated inside `AndroidKeyStore` under alias `khai_record_key_v1`, non-exportable,
  `setUserAuthenticationRequired(false)` so background sync can work while the screen is off.
- AAD: `code|date`. Moving a ciphertext row to another participant or date makes decryption fail.
- Storage: SQLite table `entries(code, date, iv, ct, updated_ms, dirty)`. There is no plaintext
  column.
- Profile: conditions, medicines, age band and consent metadata are encrypted with the same key
  under AAD `khai-profile-v1`; a legacy plaintext profile is migrated on first read.
- Erase: rows, encrypted profile, sync credentials and the Keystore alias are deleted, and export
  cache files are removed, so residual bytes are not left behind.

**Threat model consequence.** The encryption protects the database file, a stolen powered-off
phone, a backup, and forensic extraction of app storage. It does **not** protect against an attacker
who can run code as the app's user on an unlocked device, because the app can obtain the key. The
PIN is an interface gate, not a second key; it does not make the record cryptographically
unreadable. This is a deliberate trade-off to keep sync and reminders working. If a future version
requires PIN-derived encryption, sync must move to a foreground, unlocked-only model.

## 3. Device-level protections relied upon

- Android file-based encryption for the whole device.
- App sandbox (`/data/data/in.khaifoods.tracker` is not readable by other apps).
- `android:allowBackup="false"`, with extraction rules excluding database, prefs, files and
  external storage from cloud backup and device transfer.
- `FLAG_SECURE` is on by default ("hide previews"), stopping the recent-apps thumbnail and screenshots
  unless the participant deliberately turns it off.
- HTTPS-only network security config; cleartext is disabled at the manifest and the config.

## 4. PIN

- 4 digits, salted, PBKDF2-HMAC-SHA1, 120 000 iterations, 256-bit output, constant-time compare.
- A 4-digit PIN has 10 000 possibilities; the hash is a speed bump, not a defence against offline
  brute force if the salt and hash leak. Its real job is to keep a family member or a borrower out
  of the interface.
- Re-lock after 60 seconds in the background, so returning from the share sheet does not nag.
- Failed attempts apply exponential backoff from 5 seconds to 5 minutes; the gate is disabled while
  the wait runs. This slows shoulder-surfing but does not change the 10 000-code search space.
- Removing the PIN requires access to the unlocked app, which is the same trust boundary.

## 5. Network

- Sync is opt-in and requires an absolute `https://` URL, a per-device bearer token and explicit
  consent. Embedded credentials, query strings, fragments and redirects are rejected.
- Only days with `dirty=1` are sent: `{schema, code, device_id, days: {date: entry}}`. Retries are
  idempotent by `(code, date)`.
- An optional base64 SHA-256 SPKI pin is enforced in addition to system trust anchors. Rotation is
  an explicit coordinated change.
- A 2xx response alone is not accepted. The server must return `accepted_dates`; only those dates
  are marked synced. Partial acknowledgements stay queued.
- **Still required on the server:** token issue/revocation, strict per-participant authorisation,
  retention and erasure controls, audit logs without clinical values, DPIA and penetration testing.
  See `docs/SECURE_SYNC.md` for the full contract.
- Sync happens on a background thread with no visible progress; a future version should use a job
  scheduler with exponential backoff and a network constraint.

## 6. Exports and sharing

- Files are written to the app's private cache, then exposed through a non-exported
  `ContentProvider` with a one-shot read grant on the share intent.
- Every provider method validates the file name and serves only existing regular cache files.
- Exported files are plaintext by design: they are meant to be read by a clinician. The participant
  chooses the destination app. The app does not upload them.
- CSV cells beginning with `= + - @` or a control character are apostrophe-prefixed so notes cannot
  become spreadsheet formulas.
- Files older than 24 hours are removed on the next export, and "Erase my data" deletes the whole
  export cache.

## 7. Reminders

- Inexact repeating alarm, no exact-alarm permission, one channel, no badges, no vibration.
- Notification text contains no clinical values, only a prompt to record the day.
- The boot receiver only re-arms the reminder when the participant has enabled it.

## 8. Logging and third parties

- No third-party analytics, crash reporting, advertising or attribution libraries are linked.
  Institution-side trend analysis runs on the server under recorded consent, not in an SDK.
- No `Log.*` calls in the shipped source; exceptions are caught and ignored rather than printed
  with record content.
- The only network endpoint is the institution server the participant configures.

## 9. Build and supply chain

- The APK is built by `tools/build.py` from locally installed JDK 17, Android SDK 35, Kotlin 2.0.21
  and a SHA-256-pinned `tools/bundletool.jar`.
- Release signing uses the dedicated 4096-bit RSA upload key outside the repo. Set `KHAI_KEYSTORE`,
  `KHAI_KEY_ALIAS` and `KHAI_KEYSTORE_PASS_FILE` (preferred), or `KHAI_KEYSTORE_PASS` from a secret
  store. Passwords are read into an environment variable, redacted from output, and never placed on
  a command line; `bundletool` gets a short-lived, user-only password file.
- No dependency manager is used, so there is no transitive dependency surface. `bundletool.jar`'s
  SHA-256 is pinned in both `tools/build.py` and `tools/verify.py`.
- `tools/check.py` asserts source-level controls and `tools/verify.py` checks the artefacts; run both
  before every upload. Enrol in Play App Signing before distribution.

## 10. Incident response

1. Reproduce and scope: which participants, which days, which build.
2. Contain: disable sync URL server-side, rotate server credentials, revoke access tokens.
3. Notify: study clinical owner, data protection contact, affected participants, regulator as
   required.
4. Fix: ship a new versionCode; if the keystore key is suspected compromised, rotating it makes
   old ciphertext unreadable — plan the migration before rotating.
5. Review: add a regression check to `tools/check.py` where possible.

## 11. Reporting a vulnerability

Email **security@khaifoods.in** *(replace with the monitored mailbox before publishing)* with the
build version, device/Android version, steps, and impact. Please do not include participant data.
We aim to acknowledge within 7 days. Until the mailbox is provisioned and monitored, this is a
disclosure process to establish, not a live SLA.

## 12. Pre-production hardening checklist

- [ ] Enrol Play App Signing; back up the upload key in a vault; publish the Play signing fingerprint
      out of band.
- [ ] Provision the institution endpoint; test per-device token issue, rotation and revocation.
- [ ] Publish the SPKI pin with a documented rotation plan and test a refused wrong-certificate
      connection.
- [ ] Test full, partial and missing `accepted_dates` responses.
- [ ] Add a privacy-preserving crash reporter or explicitly accept its absence.
- [ ] Run a DPIA and a penetration test on the phone + server pair.
- [ ] Confirm the legal basis and consent text per jurisdiction.
- [ ] Set real, monitored security and privacy mailboxes.
