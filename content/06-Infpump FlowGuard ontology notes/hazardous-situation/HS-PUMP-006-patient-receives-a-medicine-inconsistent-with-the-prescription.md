---
{
  "id": "HS-PUMP-006",
  "type": "hazardous-situation",
  "title": "Patient receives a medicine inconsistent with the prescription",
  "aliases": [
    "HS-PUMP-006",
    "HS-PUMP-006-patient-receives-a-medicine-inconsistent-with-the-prescription",
    "18-ontology-notes/hazardous-situation/HS-PUMP-006-patient-receives-a-medicine-inconsistent-with-the-prescription",
    "03-Ontology notes/hazardous-situation/HS-PUMP-006-patient-receives-a-medicine-inconsistent-with-the-prescription"
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
  "technical_file_identifier": "HS-PUMP-006",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]",
  "may_cause": [
    "[[06-Infpump FlowGuard ontology notes/harm/HARM-PUMP-006-electric-shock|HARM-PUMP-006]]"
  ]
}
---

# Patient receives a medicine inconsistent with the prescription

## Semantic role

Represents one circumstance in which a person, property or environment is exposed to an infusion-pump hazard.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `HS-PUMP-006`
- **type:** `hazardous-situation`
- **title:** `Patient receives a medicine inconsistent with the prescription`
- **aliases:** `HS-PUMP-006`, `HS-PUMP-006-patient-receives-a-medicine-inconsistent-with-the-prescription`, `18-ontology-notes/hazardous-situation/HS-PUMP-006-patient-receives-a-medicine-inconsistent-with-the-prescription`, `03-Ontology notes/hazardous-situation/HS-PUMP-006-patient-receives-a-medicine-inconsistent-with-the-prescription`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/hazardous-situation`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx`
- **technical_file_identifier:** `HS-PUMP-006`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]
- **may_cause:** [[06-Infpump FlowGuard ontology notes/harm/HARM-PUMP-006-electric-shock|HARM-PUMP-006]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `can_lead_to` from [[06-Infpump FlowGuard ontology notes/hazard/HAZ-PUMP-006-incorrect-drug-or-concentration-selection|HAZ-PUMP-006 — Incorrect drug or concentration selection]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `may_cause` to [[06-Infpump FlowGuard ontology notes/harm/HARM-PUMP-006-electric-shock|HARM-PUMP-006 — Electric shock]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["HS-PUMP-006<br/>Patient receives a medicine inconsistent with the prescription"]
  PREV0["HAZ-PUMP-006<br/>Incorrect drug or concentration selection"]
  PREV0 -->|"can_lead_to"| CURRENT
  NEXT0["HARM-PUMP-006<br/>Electric shock"]
  CURRENT -->|"may_cause"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
