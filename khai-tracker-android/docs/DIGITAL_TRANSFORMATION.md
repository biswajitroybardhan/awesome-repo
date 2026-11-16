# From one hospital's loop to the world's: the Khai digital-transformation blueprint

*Khai Foods Pvt Ltd · product owner Biswajit Roy Bardhan · companion to Khai Tracker 1.0.0*

This document is deliberately two things at once: a description of what the shipped app **already
does**, and a staged plan for the rest. It does not pretend v1.0 is a hospital information system.
It shows how the same operating pattern — a closed loop around the patient, with a clinician
holding the pen — can be rebuilt for places that will never get a hospital-wide rollout.

No claim is made about any other organisation's internal systems, contracts or results. Zhongshan
is used here the way an engineer uses a reference design: a publicly described pattern of what a
serious digital hospital does when it connects medication, records, follow-up and review into one
loop.

---

## 1. The pattern worth copying

A hospital that has genuinely digitised is not one that bought an EHR. It is one where the
following five things are true at the same time.

1. **Every order and every dose is identified.** Prescribing, dispensing and administration each
   carry the same identifier, and a mismatch is caught before it reaches the patient, not after.
2. **The record is longitudinal, not episodic.** A clinician sees the last months, not the last
   visit, and sees what happened between visits — including what the patient did not do.
3. **Follow-up does not require travel.** Routine review, results discussion, prescription renewal
   and escalation happen through a channel that reaches the patient where they live.
4. **Software reads first, humans decide.** Imaging, labs, risk scores and alerts are triaged by
   machines, but a named clinician remains accountable for every clinical decision.
5. **The system is operated, not installed.** There are owners, metrics, audit trails, incident
   reviews and a loop that improves itself.

Zhongshan Hospital (Fudan University, Shanghai) is a widely cited example of this pattern at
hospital scale: closed-loop medication management, an integrated data platform, internet-hospital
follow-up, and AI used as a second reader under clinician authority. Khai's contribution is not to
copy a Chinese hospital's software. It is to ask: **what is the minimum viable version of that
loop for a participant with a mid-range Android phone, intermittent connectivity, a shared family
device, and a clinician who has four minutes?**

## 2. Why the phone is the right first node

Hospitals digitise what happens inside their walls. Chronic disease happens outside them. The
measurements that matter — food, adherence, home BP, weight, sleep, wellbeing — are produced
daily by the patient and are invisible to the hospital until the next appointment.

Khai Tracker starts at that end of the loop:

- the **unit of entry** is a real plate in a real kitchen, not a barcode or a 100 g reference
  portion;
- the **range** is honest (a katori of dal varies by household), so the record says "estimate"
  where it is estimating;
- the **record survives** language changes, SIM swaps, app restarts and flat batteries, because it
  is encrypted locally first and synced later;
- the **clinician artefact** is a one-page PDF designed to be read in under a minute, not a data
  dump.

The hospital-grade loop is then rebuilt in the only order that works outside a hospital: capture,
then trust, then share, then act.

## 3. The Khai loop

```
        ┌────────────────────────────── capture ──────────────────────────────┐
        │  food (ranged, regional) · medicines (taken/skipped/changed)        │
        │  BP · pulse · glucose (fasting/post-food) · weight · sleep · mood   │
        └──────────────────────────────────┬──────────────────────────────────┘
                                           │ encrypted locally, offline-first
                                           ▼
        ┌──────────────────────── verified record ────────────────────────────┐
        │  AES-256-GCM at rest · per-record AAD · stable clinical codes       │
        │  completeness, missingness and uncertainty kept visible             │
        └──────────────────────────────────┬──────────────────────────────────┘
                                           │ optional HTTPS upsert
                                           ▼
        ┌────────────────────── longitudinal record ──────────────────────────┐
        │  participant timeline · clinician PDF · CSV · FHIR R4 bundle        │
        └──────────────────────────────────┬──────────────────────────────────┘
                                           │ review, not automation
                                           ▼
        ┌──────────────────── clinician review ───────────────────────────────┐
        │  one page: what was measured, what was missed, what is only         │
        │  self-reported · flags are prompts for a conversation               │
        └──────────────────────────────────┬──────────────────────────────────┘
                                           │ decision stays human
                                           ▼
        ┌──────────────── closed-loop medication reconciliation ──────────────┐
        │  what was prescribed ↔ what was dispensed ↔ what was actually taken │
        │  discrepancy is surfaced, never auto-corrected                      │
        └──────────────────────────────────┬──────────────────────────────────┘
                                           │ follow-up without travel
                                           ▼
        ┌──────────────────── internet-hospital follow-up ────────────────────┐
        │  scheduled review · results conversation · renewal · escalation     │
        └──────────────────────────────────┬──────────────────────────────────┘
                                           │ audit and learn
                                           ▼
        ┌────────────────────────── operating loop ───────────────────────────┐
        │  consent receipts · audit trail · completeness metrics · incidents  │
        └──────────────────────────────────────────────────────────────────────┘
```

## 4. Maturity model

| Level | Name | Definition | Where Khai is |
| --- | --- | --- | --- |
| L0 | Paper / memory | No reliable record between visits | — |
| L1 | Capture | Patient-generated record exists, offline, on their own device | **v1.0** |
| L2 | Portable record | Record is encrypted, exportable in clinical formats, and reviewable by a clinician | **v1.0** |
| L3 | Connected review | Records reach a coordinator/clinician system, with reconciliation and follow-up scheduling | v1.1–1.2 |
| L4 | Closed loop | Medication loop, internet-hospital follow-up, audit and outcome metrics run continuously | v2.x |

v1.0 is honestly L2. It earns that level because the record is encrypted, coded, exportable as FHIR
R4 and legible on one page. It does not earn L3 because there is no coordinator console in this
repository, no appointment workflow and no dispense data.

## 5. What v1.0 ships, mapped to the pattern

| Pattern element | v1.0 implementation | Honest limitation |
| --- | --- | --- |
| Identity without names | Participant code assigned by coordinator; random device ID | Code collisions are a coordinator responsibility |
| Medication loop | Per-medicine status each day; skipped/changed is first-class data | No prescription, dispense or pharmacy event yet |
| Longitudinal record | Encrypted day records, 21-day grid, full history in exports | Local to one phone until sync is configured |
| Clinician review | One-page PDF with completeness, flags, food frequency, notes | Static document; no reply channel |
| Interoperability | FHIR R4 `Bundle` (Patient, Observation for BP/glucose/weight, Consent, Provenance) | No server, no terminology server, no `MedicationStatement` yet |
| Follow-up | Daily reminder; record ready to share at an appointment | No scheduling, no teleconsultation |
| AI | None in the clinical path | Deliberate; see §9 |
| Audit | Consent timestamp; local sync state; export is user-initiated | No server-side audit trail in this repo |
| Language | Full EN/HI UI and consent audio via system TTS | No other languages yet; TTS availability varies by phone |
| Low-resource design | Offline-first, no AndroidX, ~0.9 MB, minSdk 24 | Untested on real hardware as of this build |

## 6. Roadmap

Each step names its precondition, so it cannot be "announced" without being operable.

### v1.1 — Coordinator console and a real FHIR endpoint (L3 begins)

- Server-side participant timeline, completeness dashboard, and a clinician inbox.
- FHIR R4 facade over the existing `/api/sync` store; `$everything` per participant.
- Terminology: LOINC for observations, UCUM for units, SNOMED CT where licensed, ICD-11 mapping
  for conditions.
- Consent receipts and revocation propagated to the server.
- **Precondition:** data-processing agreement, named clinical owner, retention policy, audit log
  with access review.

### v1.2 — Closed-loop medication reconciliation

- `MedicationRequest` → `MedicationDispense` → `MedicationStatement` as three linked resources.
- Pharmacy or coordinator records dispense events; the app records what was actually taken.
- Discrepancy queue: prescribed but not dispensed, dispensed but not taken, changed without a new
  order. Every discrepancy is a task for a human, never an automatic correction.
- Barcode/QR on the dispense label tied to the same identifier, so the loop is verifiable at the
  counter as well as on the phone.
- **Precondition:** a pharmacy or dispensing partner, a named pharmacist, and an escalation policy.

### v2.0 — Internet-hospital follow-up

- Appointment scheduling, pre-visit questionnaire, results conversation, renewal workflow.
- Escalation rules written by clinicians, not by product: what triggers a call, within what time.
- Asynchronous messaging with read receipts and a clinician roster; no open-ended chat.
- Device ingestion: BLE home BP monitor and glucometer, with device identity and timestamp
  integrity, falling back to manual entry.
- **Precondition:** clinical governance, licensing/telemedicine rules in each jurisdiction,
  indemnity, and a real clinic operations team.

### v2.1 — Clinician-in-the-loop assistance

- Triage and prioritisation of the review queue (who is deteriorating, who has gone quiet).
- Anomaly detection on home readings, with explanation and a link to the raw days.
- Translation and read-aloud for consent and instructions.
- No diagnosis, no dose suggestion, no autonomous action; every model has a version, a validation
  set, a false-positive review and an audit trail.
- **Precondition:** prospective evaluation, model cards, clinician override measured and published.

### v3.0 — Multi-country operating model

- Per-country data residency, consent text and legal basis; same clinical core, local adapters.
- Bulk FHIR export for research; federated analytics so cohorts can be studied without moving
  identified records.
- Offline-first reference implementation for other LMIC sites: same app, local food library,
  local language pack, local formulary.
- **Precondition:** local partners, ethics approvals, and the discipline to say no to markets where
  the follow-up loop cannot actually be staffed.

## 7. Interoperability position

**Now.** FHIR R4 collection bundle; LOINC-coded observations; UCUM units; `Consent` and
`Provenance` present; diet estimates deliberately excluded so an estimate never enters a clinical
record disguised as a measurement.

**Next.** `MedicationRequest`, `MedicationStatement`, `MedicationDispense`, `CarePlan`,
`QuestionnaireResponse`, `DiagnosticReport`, `Encounter`; SMART on FHIR launch for clinician apps;
Bulk FHIR for research; `$everything` patient access.

**National and regional rails.** India: ABDM/ABHA identifiers and health-information exchange
where consent permits. EU: EHDS-compatible export and data residency. US: USCDI-aligned resources
and TEFCA-capable exchange. The app keeps its own stable participant code as the source identity
and maps to national identifiers only with explicit consent.

**Rule.** No proprietary format is the system of record. JSON backup exists so a participant can
leave with everything even if Khai disappears.

## 8. Closed-loop medication, concretely

The loop has five checkpoints, and each one needs an owner:

| Checkpoint | Question | v1.0 | Target |
| --- | --- | --- | --- |
| Order | What was prescribed, by whom, when? | Profile list only | Signed `MedicationRequest` |
| Dispense | What left the pharmacy? | Nothing | `MedicationDispense` + label identifier |
| Handover | What did the patient receive? | Nothing | Scan/confirm at counter or on phone |
| Administration | What was actually taken? | Daily status per medicine | Same, plus timing and reason for change |
| Review | Is the discrepancy understood? | Clinician reads PDF | Task queue with resolution and audit |

The design principle is that **the loop is allowed to be incomplete, but not allowed to lie**. A
missing dispense event is shown as missing. A skipped dose is a skipped dose, not adherence
failure to be smoothed over.

## 9. Clinician-in-the-loop AI: what it may and may not do

**May:** prioritise the review queue; detect a pattern worth a conversation; transcribe and
translate; summarise a long record with links to source days; flag a missing measurement.

**May not:** diagnose; recommend or alter a dose; triage to "no action" without human sign-off;
train on participant data without consent; hide its uncertainty.

**Evaluation contract.** Every model ships with: intended use, population, validation data,
sensitivity/specificity at the chosen threshold, known failure modes, a human-override path, and a
monthly review of overrides. If a model cannot be evaluated, it does not enter the clinical path.

## 10. Operating model for "the whole world"

Global does not mean launching everywhere. It means the same core can be operated locally without
rewriting it.

### Phase A — one district, done properly

- 50–200 participants, one clinic, one coordinator, one clinician owner.
- Success is measured by completeness and by whether the clinician actually uses the one-pager.
- Everything manual that can be manual stays manual; only the loop is automated.

### Phase B — one state, several clinics

- Coordinator console, discrepancy queue, follow-up scheduling.
- Language packs and food libraries per region.
- Weekly operating review: completeness, missingness, escalations, incidents.

### Phase C — multi-country pilots

- Data residency and consent per country; local clinical owner and local formulary.
- Interoperability adapters per national rail.
- One clinical core, many local edges.

### Phase D — reference implementation

- Publish the offline-first client, the FHIR profile and the operating manual.
- Let other LMIC sites run the loop with their own food library and language pack.
- Keep the brand on the standard, not on the data.

### Metrics that decide whether this is real

- Record completeness per participant-week, and missingness by field.
- Time from record to clinician review.
- Medication discrepancies found and resolved.
- Follow-up kept without travel.
- Escalations with a documented outcome.
- Participant-reported trust and burden (two questions, every month).

### Failure modes to design against

- **Pilot theatre:** dashboards nobody opens. Mitigation: one clinician-facing artefact, measured.
- **Data graveyards:** records accumulate, nobody acts. Mitigation: review queue with ageing.
- **Consent drift:** data used beyond what was agreed. Mitigation: consent receipts and revocation.
- **Automation overreach:** an alert becomes a diagnosis. Mitigation: language rules and audit.
- **Toolchain fragility:** a bespoke build only one person can run. Mitigation: this repo's
  scripted, dependency-light pipeline and static gate.

## 11. Governance and safety

- **DPIA before scale.** Health data, vulnerable participants, shared devices. Document risks and
  mitigations, not intentions.
- **Ethics and consent.** Timestamped consent in the app, read aloud in Hindi, revocable by erasing
  data; server-side revocation propagated in v1.1.
- **Regulatory posture.** v1.0 makes no diagnostic or treatment claim and is not presented as a
  medical device. If v2.1 assistance influences clinical decisions, the applicable software-as-a-
  medical-device regime in each market must be assessed *before* release, not after.
- **Security operations.** Key management, certificate pinning decision, incident response,
  vulnerability disclosure, dependency review. See `SECURITY.md`.
- **Accessibility.** Font scaling, TalkBack labels, 44–48 dp targets, contrast. Test with a real
  low-vision user, not only a checklist.
- **Language QA.** Hindi is reviewed by a native speaker for clinical and consent wording; machine
  translation is not acceptable for consent.

## 12. What is deliberately absent from v1.0

Saying this plainly is part of the product:

- No AI in the clinical path.
- No server in this repository, no coordinator console, no appointment workflow.
- No prescription, dispense or pharmacy integration.
- No wearable or BLE device ingestion.
- No account system and no cloud identity.
- No claims about outcomes, and no comparison to any hospital's published results.

Those are the roadmap, not the launch copy.

## 13. Attribution

The digital-transformation pattern described here is public knowledge in digital health. Khai's
implementation is its own: an offline-first, encrypted, bilingual measurement instrument built by
**Khai Foods Pvt Ltd** under product owner **Biswajit Roy Bardhan**, designed for participants who
are usually left out of "hospital-grade" digital programmes. No affiliation with, endorsement by, or
derivation from Zhongshan Hospital, HIMSS, or any named health system is claimed.
