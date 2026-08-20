---
{
  "id": "RISK-PUMP-041",
  "type": "risk",
  "title": "Therapy interruption after battery-endurance degradation",
  "aliases": [
    "RISK-PUMP-041",
    "RISK-PUMP-041-therapy-interruption-after-battery-endurance-degradation",
    "18-ontology-notes/risk/RISK-PUMP-041-therapy-interruption-after-battery-endurance-degradation",
    "03-Ontology notes/risk/RISK-PUMP-041-therapy-interruption-after-battery-endurance-degradation"
  ],
  "status": "accepted",
  "version": "1",
  "created": "2026-08-15",
  "modified": "2026-08-15",
  "tags": [
    "ontology-note/risk",
    "device/infpump-flowguard"
  ],
  "draft": false,
  "note_origin": "human-reviewed synthetic example",
  "technical_file": "TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx",
  "technical_file_identifier": "RISK-PUMP-041",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]",
  "risk_matrix_identifier": "RISK-PUMP-041",
  "initial_risk": "medium",
  "residual_risk": "medium",
  "topic": "completed-battery-endurance-lifecycle",
  "risk_acceptance_state": "accepted-after-reassessment",
  "concerns": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ],
  "informs_requirement": [
    "[[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-052-minimum-post-change-battery-endurance|CRI-PUMP-052]]"
  ]
}
---

# Therapy interruption after battery-endurance degradation

## Semantic role

Represents one independently assessed infusion-pump risk with a stable risk-matrix identifier and configuration scope.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `RISK-PUMP-041`
- **type:** `risk`
- **title:** `Therapy interruption after battery-endurance degradation`
- **aliases:** `RISK-PUMP-041`, `RISK-PUMP-041-therapy-interruption-after-battery-endurance-degradation`, `18-ontology-notes/risk/RISK-PUMP-041-therapy-interruption-after-battery-endurance-degradation`, `03-Ontology notes/risk/RISK-PUMP-041-therapy-interruption-after-battery-endurance-degradation`
- **status:** `accepted`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/risk`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx`
- **technical_file_identifier:** `RISK-PUMP-041`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]
- **risk_matrix_identifier:** `RISK-PUMP-041`
- **initial_risk:** `medium`
- **residual_risk:** `medium`
- **topic:** `completed-battery-endurance-lifecycle`
- **risk_acceptance_state:** `accepted-after-reassessment`
- **concerns:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]
- **informs_requirement:** [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-052-minimum-post-change-battery-endurance|CRI-PUMP-052]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `has_risk` from [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]; `impacts` from [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-013-battery-energy-reserve-threshold-update|CHG-PUMP-013 — Battery energy-reserve threshold update]]; `requires_reassessment_of` from [[06-Infpump FlowGuard ontology notes/change-impact-assessment/CIA-PUMP-002-battery-endurance-signal-change-impact-assessment|CIA-PUMP-002 — Battery-endurance signal change-impact assessment]]; `mitigates` from [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-046-conservative-low-battery-shutdown-reserve|RCM-PUMP-046 — Conservative low-battery shutdown reserve]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `concerns` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]; `informs_requirement` to [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-052-minimum-post-change-battery-endurance|CRI-PUMP-052 — Minimum post-change battery endurance]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["RISK-PUMP-041<br/>Therapy interruption after battery-endurance degradation"]
  PREV0["DEVC-PUMP-001<br/>Infpump FlowGuard bedside configuration 1.0"]
  PREV0 -->|"has_risk"| CURRENT
  PREV1["CHG-PUMP-013<br/>Battery energy-reserve threshold update"]
  PREV1 -->|"impacts"| CURRENT
  PREV2["CIA-PUMP-002<br/>Battery-endurance signal change-impact assessment"]
  PREV2 -->|"requires_reassessment_of"| CURRENT
  PREV3["RCM-PUMP-046<br/>Conservative low-battery shutdown reserve"]
  PREV3 -->|"mitigates"| CURRENT
  NEXT0["DEVC-PUMP-001<br/>Infpump FlowGuard bedside configuration 1.0"]
  CURRENT -->|"concerns"| NEXT0
  NEXT1["CRI-PUMP-052<br/>Minimum post-change battery endurance"]
  CURRENT -->|"informs_requirement"| NEXT1
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
