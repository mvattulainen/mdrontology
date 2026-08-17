---
{
  "id": "CHG-PUMP-008",
  "type": "change",
  "title": "Pole-clamp material change",
  "aliases": [
    "CHG-PUMP-008",
    "CHG-PUMP-008-pole-clamp-material-change",
    "18-ontology-notes/change/CHG-PUMP-008-pole-clamp-material-change",
    "03-Ontology notes/change/CHG-PUMP-008-pole-clamp-material-change"
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
  "technical_file_identifier": "CHG-PUMP-008",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]",
  "impact_level": "medium",
  "change_state": "under-assessment",
  "concerns": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]"
  ],
  "impacts": [
    "[[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-015-clinical-injury-following-electrical-isolation-failure|RISK-PUMP-015]]"
  ],
  "affected_evidence": [
    "[[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-008-electrical-safety-test-report|EVD-PUMP-008]]"
  ]
}
---

# Pole-clamp material change

## Semantic role

Represents one proposed product or process change whose regulatory impact must be assessed before implementation.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `CHG-PUMP-008`
- **type:** `change`
- **title:** `Pole-clamp material change`
- **aliases:** `CHG-PUMP-008`, `CHG-PUMP-008-pole-clamp-material-change`, `18-ontology-notes/change/CHG-PUMP-008-pole-clamp-material-change`, `03-Ontology notes/change/CHG-PUMP-008-pole-clamp-material-change`
- **status:** `under-assessment`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/change`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-08 Change Control/Design Change Register.xlsx`
- **technical_file_identifier:** `CHG-PUMP-008`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]
- **impact_level:** `medium`
- **change_state:** `under-assessment`
- **concerns:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]
- **impacts:** [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-015-clinical-injury-following-electrical-isolation-failure|RISK-PUMP-015]]
- **affected_evidence:** [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-008-electrical-safety-test-report|EVD-PUMP-008]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `triggers` from [[06-Infpump FlowGuard ontology notes/signal/SIGNAL-PUMP-008-pole-clamp-slippage-complaints|SIGNAL-PUMP-008 — Pole-clamp slippage complaints]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `concerns` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003 — Infpump FlowGuard paediatric configuration 1.0]]; `impacts` to [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-015-clinical-injury-following-electrical-isolation-failure|RISK-PUMP-015 — Clinical injury following electrical isolation failure]]; `affected_evidence` to [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-008-electrical-safety-test-report|EVD-PUMP-008 — Electrical safety test report]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["CHG-PUMP-008<br/>Pole-clamp material change"]
  PREV0["SIGNAL-PUMP-008<br/>Pole-clamp slippage complaints"]
  PREV0 -->|"triggers"| CURRENT
  NEXT0["DEVC-PUMP-003<br/>Infpump FlowGuard paediatric configuration 1.0"]
  CURRENT -->|"concerns"| NEXT0
  NEXT1["RISK-PUMP-015<br/>Clinical injury following electrical isolation failure"]
  CURRENT -->|"impacts"| NEXT1
  NEXT2["EVD-PUMP-008<br/>Electrical safety test report"]
  CURRENT -->|"affected_evidence"| NEXT2
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
