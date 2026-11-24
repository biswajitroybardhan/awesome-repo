# Privacy Policy — Khai Tracker (Android)

**App:** Khai Tracker (`in.khaifoods.tracker`)
**Owner:** Khai Foods Pvt Ltd, Jamshedpur, Jharkhand, India
**Contact:** Privacy@KHAI.com *(replace with the monitored mailbox before publishing)*
**Effective date:** on first public release

This policy describes the Android app. It does not describe the separate web app or the study
server, each of which has its own notice.

## 1. What this app is

Khai Tracker is a measurement and record-keeping tool for participants in a Khai Foods
observational pilot. It is **not a medical device**, does not provide medical advice, diagnosis,
treatment, cure or prevention of disease, and never changes a prescription. Decisions about care
belong to a qualified clinician.

## 2. What you enter

Only what you choose to type or tap:

- a participant code assigned by your study coordinator (not your name, phone number or address);
- age band and health conditions you select;
- medicines you list, and whether you took, skipped or changed them each day;
- food items and portions from the app's food library;
- blood pressure, pulse, blood glucose (with fasting/post-food context), weight;
- energy, mood, sleep and a free-text note.

The app does not read your contacts, photos, location, calendars, SMS, call logs, microphone or
camera. It has no advertising identifier and no analytics SDK.

## 3. How it is stored

- Each day's record is encrypted on the phone with **AES-256-GCM**. The key is generated inside the
  phone's hardware-backed Android Keystore, is not exportable, and is not sent anywhere.
- The database file contains ciphertext only.
- The app is excluded from Android cloud backup and device-to-device transfer, so your record is not
  copied to Google Drive or to a new phone by the operating system.
- An optional 4-digit PIN gates the app interface. The PIN is stored only as a salted PBKDF2 hash.

## 4. When data leaves the phone

Only in three situations, each initiated by you or your coordinator:

1. **Study sync (optional).** If your coordinator gives you a server address, the app sends your
   records over HTTPS to that server, keyed by your participant code and a random device ID. Without
   a server address, nothing is transmitted.
2. **Export or share.** When you tap an export, the app writes a file to its private cache and hands
   it to the app you pick in the system share sheet (mail, chat, Drive, printer). Khai never uploads
   it itself.
3. **Study operations.** Your coordinator or clinician may review records on the study server under
   the consent you accepted. Server access is limited to named study staff.

## 5. What we do not do

No advertising. No marketing. No sale or rental of data. No third-party analytics, crash-reporting
or attribution SDK. No profiling for decisions about your care. No collection of names, addresses,
government identifiers or contact lists.

## 6. Permissions and why

| Permission | Why | When |
| --- | --- | --- |
| `INTERNET` | Optional study sync and export hand-off | Only if you configure a server or share a file |
| `ACCESS_NETWORK_STATE` | Avoid attempting sync with no connection | During optional sync |
| `POST_NOTIFICATIONS` | The single daily reminder you can switch on | Only if you enable the reminder (Android 13+) |
| `RECEIVE_BOOT_COMPLETED` | Re-arm the reminder after a phone restart | Only if the reminder is on |

The app requests nothing at first launch.

## 7. Retention and deletion

- **On the phone:** data stays until you erase it. *Settings → Progress → Privacy → Erase my data*
  deletes the records, the encryption key, the profile, settings and the PIN, irreversibly.
- **On the institution server:** retained for the configured study period and statutory audit
  requirements, then anonymised or deleted. An erasure request is handled under the institution's
  documented process; the deletion timeline must be published and tested before real data is
  accepted. No hosted server or monitored mailbox is live yet.
- Uninstalling the app removes the local database and the Keystore key. Exported files you already
  saved or shared are outside the app's control.

## 8. Children

The app is intended for adults (18+) participating in the pilot. It is not directed at children
and does not knowingly collect data from children.

## 9. International transfers

If your study server is hosted outside your country, records are transferred over HTTPS to that
server under the study's data-processing agreement. The app itself does not choose a location; your
coordinator does.

## 10. Your choices

You can decline consent at onboarding and not use the app. You can use the app without sync. You
can disable the reminder. You can erase everything at any time. You can export a complete copy of
your data in JSON before erasing.

## 11. Security incidents

If a breach affecting your records is confirmed, the study team will notify affected participants
and the relevant authority as required by applicable law. Security reports are welcome at the
contact address above.

## 12. Changes

Material changes will be presented in the app before further sync. Continued use after notice means
acceptance. The current version of this policy is linkable from the Play Store listing.

## 13. Contact

Privacy questions, access requests and deletion requests: **Privacy@KHAI.com**

Khai Foods Pvt Ltd, Jamshedpur, Jharkhand, India.
