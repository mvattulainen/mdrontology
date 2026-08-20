---
{
  "id": "CHG-PUMP-011",
  "type": "change",
  "title": "Network protocol revision",
  "aliases": [
    "CHG-PUMP-011",
    "CHG-PUMP-011-network-protocol-revision",
    "18-ontology-notes/change/CHG-PUMP-011-network-protocol-revision",
    "03-Ontology notes/change/CHG-PUMP-011-network-protocol-revision"
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
  "technical_file_identifier": "CHG-PUMP-011",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]",
  "impact_level": "medium",
  "change_state": "under-assessment",
  "concerns": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ],
  "impacts": [
    "[[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-021-clinical-injury-following-incorrect-touch-interface-input|RISK-PUMP-021]]",
    "[[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-011-software-unit-verification-summary|EVD-PUMP-011]]"
  ]
}
---

# Network protocol revision

## Semantic role

Represents one proposed product or process change whose regulatory impact must be assessed before implementation.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `CHG-PUMP-011`
- **type:** `change`
- **title:** `Network protocol revision`
- **aliases:** `CHG-PUMP-011`, `CHG-PUMP-011-network-protocol-revision`, `18-ontology-notes/change/CHG-PUMP-011-network-protocol-revision`, `03-Ontology notes/change/CHG-PUMP-011-network-protocol-revision`
- **status:** `under-assessment`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/change`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-08 Change Control/Design Change Register.xlsx`
- **technical_file_identifier:** `CHG-PUMP-011`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]
- **impact_level:** `medium`
- **change_state:** `under-assessment`
- **concerns:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]
- **impacts:** [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-021-clinical-injury-following-incorrect-touch-interface-input|RISK-PUMP-021]], [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-011-software-unit-verification-summary|EVD-PUMP-011]]

## Traceability

No previous ontology-note dependency is currently asserted for this record. Its nearest governed context is [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]], which identifies the device configuration in which the note is interpreted.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `concerns` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]; `impacts` to [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-021-clinical-injury-following-incorrect-touch-interface-input|RISK-PUMP-021 — Clinical injury following incorrect touch-interface input]], [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-011-software-unit-verification-summary|EVD-PUMP-011 — Software unit verification summary]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["CHG-PUMP-011<br/>Network protocol revision"]
  PREV_NONE["No asserted previous dependency"]
  PREV_NONE -.-> CURRENT
  NEXT0["DEVC-PUMP-001<br/>Infpump FlowGuard bedside configuration 1.0"]
  CURRENT -->|"concerns"| NEXT0
  NEXT1["RISK-PUMP-021<br/>Clinical injury following incorrect touch-interface input"]
  CURRENT -->|"impacts"| NEXT1
  NEXT2["EVD-PUMP-011<br/>Software unit verification summary"]
  CURRENT -->|"impacts"| NEXT2
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
