---
{
  "id": "HS-PUMP-018",
  "type": "hazardous-situation",
  "title": "Clinical review uses incomplete or incorrectly timed records",
  "aliases": [
    "HS-PUMP-018",
    "HS-PUMP-018-clinical-review-uses-incomplete-or-incorrectly-timed-records",
    "18-ontology-notes/hazardous-situation/HS-PUMP-018-clinical-review-uses-incomplete-or-incorrectly-timed-records",
    "03-Ontology notes/hazardous-situation/HS-PUMP-018-clinical-review-uses-incomplete-or-incorrectly-timed-records"
  ],
  "status": "approved",
  "version": "1",
  "created": "2026-08-15",
  "modified": "2026-08-15",
  "tags": [
    "ontology-note/hazardous-situation",
    "device/infpump-flowguard"
  ],
  "draft": false,
  "note_origin": "human-reviewed synthetic example",
  "technical_file": "TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx",
  "technical_file_identifier": "HS-PUMP-018",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]",
  "may_cause": [
    "[[06-Infpump FlowGuard ontology notes/harm/HARM-PUMP-008-infection|HARM-PUMP-008]]"
  ]
}
---

# Clinical review uses incomplete or incorrectly timed records

## Semantic role

Represents one circumstance in which a person, property or environment is exposed to an infusion-pump hazard.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `HS-PUMP-018`
- **type:** `hazardous-situation`
- **title:** `Clinical review uses incomplete or incorrectly timed records`
- **aliases:** `HS-PUMP-018`, `HS-PUMP-018-clinical-review-uses-incomplete-or-incorrectly-timed-records`, `18-ontology-notes/hazardous-situation/HS-PUMP-018-clinical-review-uses-incomplete-or-incorrectly-timed-records`, `03-Ontology notes/hazardous-situation/HS-PUMP-018-clinical-review-uses-incomplete-or-incorrectly-timed-records`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/hazardous-situation`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx`
- **technical_file_identifier:** `HS-PUMP-018`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]
- **may_cause:** [[06-Infpump FlowGuard ontology notes/harm/HARM-PUMP-008-infection|HARM-PUMP-008]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `can_lead_to` from [[06-Infpump FlowGuard ontology notes/hazard/HAZ-PUMP-018-loss-of-records-or-clock-drift|HAZ-PUMP-018 — Loss of records or clock drift]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `may_cause` to [[06-Infpump FlowGuard ontology notes/harm/HARM-PUMP-008-infection|HARM-PUMP-008 — Infection]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["HS-PUMP-018<br/>Clinical review uses incomplete or incorrectly timed records"]
  PREV0["HAZ-PUMP-018<br/>Loss of records or clock drift"]
  PREV0 -->|"can_lead_to"| CURRENT
  NEXT0["HARM-PUMP-008<br/>Infection"]
  CURRENT -->|"may_cause"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
