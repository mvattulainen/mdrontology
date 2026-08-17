---
{
  "id": "CHG-PUMP-002",
  "type": "change",
  "title": "Occlusion algorithm threshold update",
  "aliases": [
    "CHG-PUMP-002",
    "CHG-PUMP-002-occlusion-algorithm-threshold-update",
    "18-ontology-notes/change/CHG-PUMP-002-occlusion-algorithm-threshold-update",
    "03-Ontology notes/change/CHG-PUMP-002-occlusion-algorithm-threshold-update"
  ],
  "status": "under-assessment",
  "version": "1",
  "created": "2026-08-15",
  "modified": "2026-08-15",
  "tags": [
    "ontology-note/change",
    "device/infpump-flowguard"
  ],
  "draft": false,
  "note_origin": "human-reviewed synthetic example",
  "technical_file": "TF-08 Change Control/Design Change Register.xlsx",
  "technical_file_identifier": "CHG-PUMP-002",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]",
  "impact_level": "medium",
  "change_state": "under-assessment",
  "concerns": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
  ],
  "impacts": [
    "[[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-003-clinical-injury-following-insufficient-delivered-flow|RISK-PUMP-003]]"
  ],
  "affected_evidence": [
    "[[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-002-bolus-volume-verification-report|EVD-PUMP-002]]"
  ]
}
---

# Occlusion algorithm threshold update

## Semantic role

Represents one proposed product or process change whose regulatory impact must be assessed before implementation.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `CHG-PUMP-002`
- **type:** `change`
- **title:** `Occlusion algorithm threshold update`
- **aliases:** `CHG-PUMP-002`, `CHG-PUMP-002-occlusion-algorithm-threshold-update`, `18-ontology-notes/change/CHG-PUMP-002-occlusion-algorithm-threshold-update`, `03-Ontology notes/change/CHG-PUMP-002-occlusion-algorithm-threshold-update`
- **status:** `under-assessment`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/change`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-08 Change Control/Design Change Register.xlsx`
- **technical_file_identifier:** `CHG-PUMP-002`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]
- **impact_level:** `medium`
- **change_state:** `under-assessment`
- **concerns:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]
- **impacts:** [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-003-clinical-injury-following-insufficient-delivered-flow|RISK-PUMP-003]]
- **affected_evidence:** [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-002-bolus-volume-verification-report|EVD-PUMP-002]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `triggers` from [[06-Infpump FlowGuard ontology notes/signal/SIGNAL-PUMP-002-delayed-occlusion-alarm-trend|SIGNAL-PUMP-002 — Delayed occlusion alarm trend]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `concerns` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002 — Infpump FlowGuard transport configuration 1.0]]; `impacts` to [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-003-clinical-injury-following-insufficient-delivered-flow|RISK-PUMP-003 — Clinical injury following insufficient delivered flow]]; `affected_evidence` to [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-002-bolus-volume-verification-report|EVD-PUMP-002 — Bolus volume verification report]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["CHG-PUMP-002<br/>Occlusion algorithm threshold update"]
  PREV0["SIGNAL-PUMP-002<br/>Delayed occlusion alarm trend"]
  PREV0 -->|"triggers"| CURRENT
  NEXT0["DEVC-PUMP-002<br/>Infpump FlowGuard transport configuration 1.0"]
  CURRENT -->|"concerns"| NEXT0
  NEXT1["RISK-PUMP-003<br/>Clinical injury following insufficient delivered flow"]
  CURRENT -->|"impacts"| NEXT1
  NEXT2["EVD-PUMP-002<br/>Bolus volume verification report"]
  CURRENT -->|"affected_evidence"| NEXT2
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
