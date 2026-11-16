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

Settings: language, reminder on/off and time, PIN hash and salt, optional sync URL, last sync
status, "hide previews" flag.

None of this is a name, phone number, address or government identifier.

## 2. Encryption at rest

- Algorithm: AES-256-GCM, 128-bit tag, random 96-bit IV per record.
- Key: generated inside `AndroidKeyStore` under alias `khai_record_key_v1`, non-exportable,
  `setUserAuthenticationRequired(false)` so background sync can work while the screen is off.
- AAD: `code|date`. Moving a ciphertext row to another participant or date makes decryption fail.
- Storage: SQLite table `entries(code, date, iv, ct, updated_ms, dirty)`. There is no plaintext
  column.
- Erase: rows are deleted and the Keystore alias is deleted, so any residual bytes are undecryptable.

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
- `FLAG_SECURE` when "hide previews" is on, which stops the recent-apps thumbnail and screenshots.
- HTTPS-only network security config; cleartext is disabled at the manifest and the config.

## 4. PIN

- 4 digits, salted, PBKDF2-HMAC-SHA1, 120 000 iterations, 256-bit output, constant-time compare.
- A 4-digit PIN has 10 000 possibilities; the hash is a speed bump, not a defence against offline
  brute force if the salt and hash leak. Its real job is to keep a family member or a borrower out
  of the interface.
- Re-lock after 60 seconds in the background, so returning from the share sheet does not nag.
- Removing the PIN requires access to the unlocked app, which is the same trust boundary.

## 5. Network

- Sync is opt-in and requires an `https://` base URL. The app retries once on transport failure,
  does not follow redirects, and rejects non-2xx responses without retry on 4xx.
- Payload: full upsert of all local days for one participant:
  `{code, device_id, days: {date: entry}}`.
- **Known gaps before production:**
  - No certificate pinning.
  - No per-device authentication token; the server must add one, and the app must send it.
  - No request signing or replay protection beyond idempotent upsert.
  - The participant code is the only subject identifier, so server-side authorisation must be
    strict.
  - Sync happens on a background thread with no visible progress and no backoff schedule; a future
    version should use a job scheduler with exponential backoff and a network constraint.

## 6. Exports and sharing

- Files are written to the app's private cache, then exposed through a non-exported
  `ContentProvider` with a one-shot read grant on the share intent.
- The provider rejects path traversal in the file name and serves only existing cache files.
- Exported files are plaintext by design: they are meant to be read by a clinician. The participant
  chooses the destination app. The app does not upload them.
- The cache is not cleared automatically; a future version should expire exports after sharing.

## 7. Reminders

- Inexact repeating alarm, no exact-alarm permission, one channel, no badges, no vibration.
- Notification text contains no clinical values, only a prompt to record the day.
- The boot receiver only re-arms the reminder when the participant has enabled it.

## 8. Logging and third parties

- No analytics, crash reporting, advertising or attribution libraries are linked.
- No `Log.*` calls in the shipped source; exceptions are caught and ignored rather than printed
  with record content.
- The only network endpoint is the study server the participant configures.

## 9. Build and supply chain

- The APK is built by `tools/build.py` from locally installed JDK 17, Android SDK 35, Kotlin 2.0.21
  and `tools/bundletool.jar`.
- Release signing uses a 4096-bit RSA key. The keystore currently in `keystore/` is a generated
  development key; replace it and enrol in Play App Signing before production.
- No dependency manager is used, so there is no transitive dependency surface. `bundletool.jar`
  should be pinned by SHA-256 in CI when a CI exists.
- `tools/check.py` is the release gate and should run before every upload.

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
We aim to acknowledge within 7 days.

## 12. Pre-production hardening checklist

- [ ] Replace the development keystore; enrol Play App Signing; store the upload key in a vault.
- [ ] Add server authentication and per-device credentials; document key rotation.
- [ ] Decide on certificate pinning with a documented rotation plan.
- [ ] Add export cache expiry.
- [ ] Add a privacy-preserving crash reporter or explicitly accept its absence.
- [ ] Run a DPIA and a penetration test on the phone + server pair.
- [ ] Confirm the legal basis and consent text per jurisdiction.
- [ ] Set real, monitored security and privacy mailboxes.
