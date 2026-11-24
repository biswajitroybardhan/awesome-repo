# Data model — Khai Tracker 1.0.0

One page that answers "what is actually stored, in what shape, and what leaves the phone". If a
future change disagrees with this document, one of the two is wrong.

## 1. Where data lives

| Store | File | Contents | Protection |
| --- | --- | --- | --- |
| Record database | `databases/khai_records.db` | One encrypted row per participant-day | AES-256-GCM, key in Android Keystore |
| Settings | `shared_prefs/khai_settings.xml` | Language, reminder, PIN hash, sync URL, profile JSON | App sandbox; no readings or notes |
| Exports | `cache/exports/` | CSV, PDF, JSON, FHIR files, only when the user exports | App sandbox; served read-only through a non-exported provider |
| Keystore | system keystore | AES-256 key, alias `khai_record_key_v1` | Non-exportable |

Cloud backup and device transfer are disabled (`allowBackup=false` plus extraction rules), so none of
the above is copied off the device by the OS.

## 2. Record database

```sql
CREATE TABLE entries (
  code       TEXT NOT NULL,   -- participant code, e.g. K01
  date       TEXT NOT NULL,   -- ISO date, YYYY-MM-DD
  iv         BLOB NOT NULL,   -- 96-bit GCM IV
  ct         BLOB NOT NULL,   -- ciphertext + 128-bit tag
  updated_ms INTEGER NOT NULL,-- write time, for last-write-wins sync
  dirty      INTEGER NOT NULL DEFAULT 1,
  PRIMARY KEY (code, date)
);
```

- There is no plaintext column. `updated_ms` and `dirty` are metadata, not content.
- AAD is `code|date`, so a ciphertext row cannot be moved to another participant or another day.
- `dirty = 1` means "not yet acknowledged by the study server". A successful sync sets it to 0.
- Deleting the keystore alias is part of erase, so any residual bytes become undecryptable.

## 3. Encrypted record shape

The plaintext is JSON, serialised from `DayEntry`:

```json
{
  "v": 1,
  "code": "",
  "date": "2026-11-16",
  "meals": {
    "breakfast": [ { "id": "poha", "label": "Poha", "qty": 1.0, "unit": "katori",
                     "kcal": 180, "carb": 32, "protein": 4, "fat": 4, "sodium": 320 } ],
    "lunch": [], "dinner": [], "snacks": []
  },
  "meds": [ { "name": "Metformin", "dose": "500 mg", "status": "taken" } ],
  "sys": 128, "dia": 82, "pulse": 74,
  "glucose": 106.0, "glucoseType": "fasting",
  "weight": 68.4,
  "energy": 3, "mood": 4, "sleep": 7.0,
  "note": "",
  "updatedAt": 1763300000000
}
```

Notes:

- `v` is the record schema version. Readers must keep accepting older versions; bump it only with a
  migration, never as a silent break.
- `code` inside the record is empty on purpose — the participant code is the database key and the
  AAD, not content that can drift.
- `meals` always has all four slots, even when empty.
- `label` is a snapshot of the dish name in the language the participant used when logging. It is
  never rewritten. Every screen resolves the dish through `id` and the current language instead, so
  switching to Hindi mid-study shows Hindi names; the snapshot is only a fallback for a dish that
  has left the library.
- Food energy and macronutrients are **ranges collapsed to a representative value** for display. They
  are estimates from a home-portion library, not measurements, and are excluded from clinical export.
- `glucoseType` is `fasting` or `after_food`; it is part of the clinical meaning of the number.
- `status` is `taken`, `skipped` or `changed`. "Skipped" is data, not an error to be smoothed.

## 4. Profile (settings)

```json
{
  "code": "K01",
  "ageBandKey": "50_59",
  "conditionKeys": ["diabetes_t2", "hypertension"],
  "medicines": [ { "name": "Metformin", "dose": "500 mg" } ],
  "consentVersion": "1.0",
  "consentAt": 1763200000000,
  "deviceId": "9f0c…",
  "createdAt": 1763200000000
}
```

- Display values are **never** stored. `50_59` and `diabetes_t2` are stable keys mapped through
  `Labels.kt`, so switching language cannot rewrite the record.
- Profiles written by early builds contained display labels; `Profile.from` maps the known ones on
  read. Unknown keys survive as-is rather than being silently dropped.
- `conditionKeys` may contain `none_of_these`, which is mutually exclusive in the UI.
- The profile is encrypted at rest with the same Keystore-backed AES-256-GCM key as day records.
  Legacy plaintext profiles are migrated on read. It is inside the app sandbox and excluded from
  backup.

## 5. What leaves the phone

### Sync (`POST {base}/api/sync`)

```json
{
  "schema": "khai-sync-v2",
  "code": "K01",
  "device_id": "9f0c…",
  "days": { "2026-11-16": { …the record above… } }
}
```

- Only days whose local `dirty` flag is set are sent. Retries are keyed by `(code, date)`, so a
  dropped connection cannot duplicate a record.
- HTTPS only; the app refuses `http://` before opening a socket. A bearer token is unique to one
  device, and explicit consent must be recorded in Settings before any request is sent.
- The device is the source of truth. The server must apply an idempotent upsert on `(code, date)`
  and must never delete a day the device did not delete.
- A 2xx status alone is not success. The server must return `accepted_dates`, and the app clears
  `dirty` only for dates named in that response.
- The participant code is not an authentication secret. The token is per-device and revocable; see
  [`SECURE_SYNC.md`](SECURE_SYNC.md) and the reference server in
  [`../../khai-sync-server/README.md`](../../khai-sync-server/README.md).

### Exports

| File | Contents | Notes |
| --- | --- | --- |
| Food CSV | Date, slot, dish, quantity, unit, estimates | Dish names in English; the JSON backup keeps the original snapshot |
| Metrics CSV | Date, BP, pulse, glucose + context, weight, sleep, energy, mood, complete flag | Blanks preserved |
| Clinician PDF | One page: completeness, recent days, flags, food frequency, notes | Meant to be read in under a minute |
| Backup JSON | Profile + every day record + settings that matter | Complete copy; restores by re-import |
| FHIR R4 bundle | `Patient`, `Observation` (BP, glucose, weight), `Consent`, `Provenance` | See §6 |

Exports are plaintext by design, written to app cache, and handed to the app the user picks. Khai
does not upload them.

## 6. FHIR mapping

| Local field | FHIR R4 | Code system |
| --- | --- | --- |
| Participant code | `Patient.identifier` (`https://khaifoods.in/participant`) | local system |
| Systolic / diastolic | `Observation` 85354-9 with components 8480-6 / 8462-4 | LOINC |
| Glucose, fasting | `Observation` 1558-6, value in `mg/dL` | LOINC + UCUM |
| Glucose, after food | `Observation` 2339-0, with a note stating the sample context | LOINC + UCUM |
| Weight | `Observation` 29463-7, `kg` | LOINC + UCUM |
| Consent (version, timestamp) | `Consent` (scope `research`, category 59284-0, status `active`) | HL7 terminology + LOINC |
| Device authorship | `Provenance` targeting the patient and consent | — |
| Record date | `Observation.effectiveDateTime` as `YYYY-MM-DD` | — |
| Food, supplements, mood, sleep | **Not exported** | — |

Two deliberate choices:

1. **Day precision.** The participant recorded a day, not a time. `effectiveDateTime` is a date, not
   an invented `08:00:00+05:30`.
2. **No diet in the clinical bundle.** A home-portion estimate must never enter a clinical record
   looking like a measurement. Mood and sleep are self-reports with no agreed code here, so they
   stay in the participant's own record.

`MedicationStatement`, `MedicationRequest`, `MedicationDispense`, `CarePlan` and `Encounter` are the
next step, not present in 1.0.0.

## 7. Deletion

| Action | Effect |
| --- | --- |
| Erase in app | Deletes all rows, the Keystore alias, prefs (profile, PIN, sync URL, reminder), cancels the reminder |
| Uninstall | Removes database, prefs, cache and the Keystore alias with the app |
| Server deletion | Coordinator-run, by participant code, under the study's retention policy |

There is no soft delete and no tombstone in 1.0.0. A deletion is immediate and irreversible. That is
the honest behaviour for a personal record, and it means the server-side deletion path must be a
separate, explicit request.

## 8. Rules that must not be broken

1. No direct identifier in any record or export (no name, phone, address, Aadhaar).
2. No plaintext clinical value in SQLite, logs, filenames or notifications.
3. No estimate presented as a measurement in a clinical artefact.
4. No language change may mutate stored values.
5. No migration may drop ciphertext it cannot decrypt — fail visibly instead.
6. `dirty` is cleared only for dates named in an `accepted_dates` response, never optimistically.
