---
{
  "id": "RISK-PUMP-035",
  "type": "risk",
  "title": "Clinical injury following loss of records or clock drift",
  "aliases": [
    "RISK-PUMP-035",
    "RISK-PUMP-035-clinical-injury-following-loss-of-records-or-clock-drift",
    "18-ontology-notes/risk/RISK-PUMP-035-clinical-injury-following-loss-of-records-or-clock-drift",
    "03-Ontology notes/risk/RISK-PUMP-035-clinical-injury-following-loss-of-records-or-clock-drift"
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
  "technical_file_identifier": "RISK-PUMP-035",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]",
  "risk_matrix_identifier": "RISK-PUMP-035",
  "initial_risk": "medium",
  "residual_risk": "low",
  "concerns": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]"
  ]
}
---

# Clinical injury following loss of records or clock drift

## Semantic role

Represents one independently assessed infusion-pump risk with a stable risk-matrix identifier and configuration scope.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `RISK-PUMP-035`
- **type:** `risk`
- **title:** `Clinical injury following loss of records or clock drift`
- **aliases:** `RISK-PUMP-035`, `RISK-PUMP-035-clinical-injury-following-loss-of-records-or-clock-drift`, `18-ontology-notes/risk/RISK-PUMP-035-clinical-injury-following-loss-of-records-or-clock-drift`, `03-Ontology notes/risk/RISK-PUMP-035-clinical-injury-following-loss-of-records-or-clock-drift`
- **status:** `accepted`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/risk`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx`
- **technical_file_identifier:** `RISK-PUMP-035`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]
- **risk_matrix_identifier:** `RISK-PUMP-035`
- **initial_risk:** `medium`
- **residual_risk:** `low`
- **concerns:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `has_risk` from [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005 — Infpump FlowGuard critical-care configuration 1.1]]; `mitigates` from [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-035-keyed-tubing-connector|RCM-PUMP-035 — Keyed tubing connector]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `concerns` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005 — Infpump FlowGuard critical-care configuration 1.1]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["RISK-PUMP-035<br/>Clinical injury following loss of records or clock drift"]
  PREV0["DEVC-PUMP-005<br/>Infpump FlowGuard critical-care configuration 1.1"]
  PREV0 -->|"has_risk"| CURRENT
  PREV1["RCM-PUMP-035<br/>Keyed tubing connector"]
  PREV1 -->|"mitigates"| CURRENT
  NEXT0["DEVC-PUMP-005<br/>Infpump FlowGuard critical-care configuration 1.1"]
  CURRENT -->|"concerns"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
