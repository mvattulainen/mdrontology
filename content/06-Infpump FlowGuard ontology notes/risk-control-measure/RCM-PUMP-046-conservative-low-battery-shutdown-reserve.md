---
{
  "id": "RCM-PUMP-046",
  "type": "risk-control-measure",
  "title": "Conservative low-battery shutdown reserve",
  "aliases": [
    "RCM-PUMP-046",
    "RCM-PUMP-046-conservative-low-battery-shutdown-reserve",
    "18-ontology-notes/risk-control-measure/RCM-PUMP-046-conservative-low-battery-shutdown-reserve",
    "03-Ontology notes/risk-control-measure/RCM-PUMP-046-conservative-low-battery-shutdown-reserve"
  ],
  "status": "implemented",
  "version": "1",
  "created": "2026-08-15",
  "modified": "2026-08-15",
  "tags": [
    "ontology-note/risk-control-measure",
    "device/infpump-flowguard"
  ],
  "draft": false,
  "note_origin": "human-reviewed synthetic example",
  "technical_file": "TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx",
  "technical_file_identifier": "RCM-PUMP-046",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]",
  "control_priority": "information-for-safety-or-production-control",
  "topic": "completed-battery-endurance-lifecycle",
  "implementation_state": "implemented",
  "mitigates": [
    "[[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-041-therapy-interruption-after-battery-endurance-degradation|RISK-PUMP-041]]"
  ],
  "verified_by": [
    "[[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-032-post-change-battery-endurance-verification-report|EVD-PUMP-032]]"
  ]
}
---

# Conservative low-battery shutdown reserve

## Semantic role

Defines one control that reduces a specific risk and remains traceable to verification evidence.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `RCM-PUMP-046`
- **type:** `risk-control-measure`
- **title:** `Conservative low-battery shutdown reserve`
- **aliases:** `RCM-PUMP-046`, `RCM-PUMP-046-conservative-low-battery-shutdown-reserve`, `18-ontology-notes/risk-control-measure/RCM-PUMP-046-conservative-low-battery-shutdown-reserve`, `03-Ontology notes/risk-control-measure/RCM-PUMP-046-conservative-low-battery-shutdown-reserve`
- **status:** `implemented`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/risk-control-measure`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx`
- **technical_file_identifier:** `RCM-PUMP-046`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]
- **control_priority:** `information-for-safety-or-production-control`
- **topic:** `completed-battery-endurance-lifecycle`
- **implementation_state:** `implemented`
- **mitigates:** [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-041-therapy-interruption-after-battery-endurance-degradation|RISK-PUMP-041]]
- **verified_by:** [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-032-post-change-battery-endurance-verification-report|EVD-PUMP-032]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `implemented_by_control` from [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-052-minimum-post-change-battery-endurance|CRI-PUMP-052 — Minimum post-change battery endurance]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `mitigates` to [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-041-therapy-interruption-after-battery-endurance-degradation|RISK-PUMP-041 — Therapy interruption after battery-endurance degradation]]; `verified_by` to [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-032-post-change-battery-endurance-verification-report|EVD-PUMP-032 — Post-change battery-endurance verification report]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["RCM-PUMP-046<br/>Conservative low-battery shutdown reserve"]
  PREV0["CRI-PUMP-052<br/>Minimum post-change battery endurance"]
  PREV0 -->|"implemented_by_control"| CURRENT
  NEXT0["RISK-PUMP-041<br/>Therapy interruption after battery-endurance degradation"]
  CURRENT -->|"mitigates"| NEXT0
  NEXT1["EVD-PUMP-032<br/>Post-change battery-endurance verification report"]
  CURRENT -->|"verified_by"| NEXT1
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
