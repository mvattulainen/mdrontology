---
{
  "id": "HAZ-PUMP-017",
  "type": "hazard",
  "title": "Excessive enclosure temperature",
  "aliases": [
    "HAZ-PUMP-017",
    "HAZ-PUMP-017-excessive-enclosure-temperature",
    "18-ontology-notes/hazard/HAZ-PUMP-017-excessive-enclosure-temperature",
    "03-Ontology notes/hazard/HAZ-PUMP-017-excessive-enclosure-temperature"
  ],
  "status": "approved",
  "version": "1",
  "created": "2026-08-15",
  "modified": "2026-08-15",
  "tags": [
    "ontology-note/hazard",
    "device/infpump-flowguard"
  ],
  "draft": false,
  "note_origin": "human-reviewed synthetic example",
  "technical_file": "TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx",
  "technical_file_identifier": "HAZ-PUMP-017",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]",
  "hazard_category": "mechanical-use-environment",
  "can_lead_to": [
    "[[06-Infpump FlowGuard ontology notes/hazardous-situation/HS-PUMP-017-accessible-surface-or-internal-component-overheats|HS-PUMP-017]]"
  ]
}
---

# Excessive enclosure temperature

## Semantic role

Identifies one potential source of harm that must remain traceable through hazardous situations, risks and controls.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `HAZ-PUMP-017`
- **type:** `hazard`
- **title:** `Excessive enclosure temperature`
- **aliases:** `HAZ-PUMP-017`, `HAZ-PUMP-017-excessive-enclosure-temperature`, `18-ontology-notes/hazard/HAZ-PUMP-017-excessive-enclosure-temperature`, `03-Ontology notes/hazard/HAZ-PUMP-017-excessive-enclosure-temperature`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/hazard`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx`
- **technical_file_identifier:** `HAZ-PUMP-017`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]
- **hazard_category:** `mechanical-use-environment`
- **can_lead_to:** [[06-Infpump FlowGuard ontology notes/hazardous-situation/HS-PUMP-017-accessible-surface-or-internal-component-overheats|HS-PUMP-017]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `has_hazard` from [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005 — Infpump FlowGuard critical-care configuration 1.1]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `can_lead_to` to [[06-Infpump FlowGuard ontology notes/hazardous-situation/HS-PUMP-017-accessible-surface-or-internal-component-overheats|HS-PUMP-017 — Accessible surface or internal component overheats]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["HAZ-PUMP-017<br/>Excessive enclosure temperature"]
  PREV0["DEVC-PUMP-005<br/>Infpump FlowGuard critical-care configuration 1.1"]
  PREV0 -->|"has_hazard"| CURRENT
  NEXT0["HS-PUMP-017<br/>Accessible surface or internal component overheats"]
  CURRENT -->|"can_lead_to"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
