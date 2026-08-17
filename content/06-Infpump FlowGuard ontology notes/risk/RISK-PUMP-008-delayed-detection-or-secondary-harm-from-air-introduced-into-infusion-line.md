---
{
  "id": "RISK-PUMP-008",
  "type": "risk",
  "title": "Delayed detection or secondary harm from air introduced into infusion line",
  "aliases": [
    "RISK-PUMP-008",
    "RISK-PUMP-008-delayed-detection-or-secondary-harm-from-air-introduced-into-infusion-line",
    "18-ontology-notes/risk/RISK-PUMP-008-delayed-detection-or-secondary-harm-from-air-introduced-into-infusion-line",
    "03-Ontology notes/risk/RISK-PUMP-008-delayed-detection-or-secondary-harm-from-air-introduced-into-infusion-line"
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
  "technical_file_identifier": "RISK-PUMP-008",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]",
  "risk_matrix_identifier": "RISK-PUMP-008",
  "initial_risk": "medium",
  "residual_risk": "low",
  "concerns": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]"
  ]
}
---

# Delayed detection or secondary harm from air introduced into infusion line

## Semantic role

Represents one independently assessed infusion-pump risk with a stable risk-matrix identifier and configuration scope.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `RISK-PUMP-008`
- **type:** `risk`
- **title:** `Delayed detection or secondary harm from air introduced into infusion line`
- **aliases:** `RISK-PUMP-008`, `RISK-PUMP-008-delayed-detection-or-secondary-harm-from-air-introduced-into-infusion-line`, `18-ontology-notes/risk/RISK-PUMP-008-delayed-detection-or-secondary-harm-from-air-introduced-into-infusion-line`, `03-Ontology notes/risk/RISK-PUMP-008-delayed-detection-or-secondary-harm-from-air-introduced-into-infusion-line`
- **status:** `accepted`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/risk`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx`
- **technical_file_identifier:** `RISK-PUMP-008`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]
- **risk_matrix_identifier:** `RISK-PUMP-008`
- **initial_risk:** `medium`
- **residual_risk:** `low`
- **concerns:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `has_risk` from [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]; `mitigates` from [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-008-anti-free-flow-clamp|RCM-PUMP-008 — Anti-free-flow clamp]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `concerns` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003 — Infpump FlowGuard paediatric configuration 1.0]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["RISK-PUMP-008<br/>Delayed detection or secondary harm from air introduced into infusion line"]
  PREV0["DEVC-PUMP-001<br/>Infpump FlowGuard bedside configuration 1.0"]
  PREV0 -->|"has_risk"| CURRENT
  PREV1["RCM-PUMP-008<br/>Anti-free-flow clamp"]
  PREV1 -->|"mitigates"| CURRENT
  NEXT0["DEVC-PUMP-003<br/>Infpump FlowGuard paediatric configuration 1.0"]
  CURRENT -->|"concerns"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
