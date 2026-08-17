---
{
  "id": "HS-PUMP-015",
  "type": "hazardous-situation",
  "title": "Pump detaches or changes position during therapy",
  "aliases": [
    "HS-PUMP-015",
    "HS-PUMP-015-pump-detaches-or-changes-position-during-therapy",
    "18-ontology-notes/hazardous-situation/HS-PUMP-015-pump-detaches-or-changes-position-during-therapy",
    "03-Ontology notes/hazardous-situation/HS-PUMP-015-pump-detaches-or-changes-position-during-therapy"
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
  "technical_file_identifier": "HS-PUMP-015",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]",
  "may_cause": [
    "[[06-Infpump FlowGuard ontology notes/harm/HARM-PUMP-005-medication-underdose|HARM-PUMP-005]]"
  ]
}
---

# Pump detaches or changes position during therapy

## Semantic role

Represents one circumstance in which a person, property or environment is exposed to an infusion-pump hazard.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `HS-PUMP-015`
- **type:** `hazardous-situation`
- **title:** `Pump detaches or changes position during therapy`
- **aliases:** `HS-PUMP-015`, `HS-PUMP-015-pump-detaches-or-changes-position-during-therapy`, `18-ontology-notes/hazardous-situation/HS-PUMP-015-pump-detaches-or-changes-position-during-therapy`, `03-Ontology notes/hazardous-situation/HS-PUMP-015-pump-detaches-or-changes-position-during-therapy`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/hazardous-situation`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx`
- **technical_file_identifier:** `HS-PUMP-015`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]
- **may_cause:** [[06-Infpump FlowGuard ontology notes/harm/HARM-PUMP-005-medication-underdose|HARM-PUMP-005]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `can_lead_to` from [[06-Infpump FlowGuard ontology notes/hazard/HAZ-PUMP-015-pole-clamp-mechanical-failure|HAZ-PUMP-015 — Pole-clamp mechanical failure]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `may_cause` to [[06-Infpump FlowGuard ontology notes/harm/HARM-PUMP-005-medication-underdose|HARM-PUMP-005 — Medication underdose]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["HS-PUMP-015<br/>Pump detaches or changes position during therapy"]
  PREV0["HAZ-PUMP-015<br/>Pole-clamp mechanical failure"]
  PREV0 -->|"can_lead_to"| CURRENT
  NEXT0["HARM-PUMP-005<br/>Medication underdose"]
  CURRENT -->|"may_cause"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
