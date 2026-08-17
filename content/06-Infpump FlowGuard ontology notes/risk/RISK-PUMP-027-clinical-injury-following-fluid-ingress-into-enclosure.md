---
{
  "id": "RISK-PUMP-027",
  "type": "risk",
  "title": "Clinical injury following fluid ingress into enclosure",
  "aliases": [
    "RISK-PUMP-027",
    "RISK-PUMP-027-clinical-injury-following-fluid-ingress-into-enclosure",
    "18-ontology-notes/risk/RISK-PUMP-027-clinical-injury-following-fluid-ingress-into-enclosure",
    "03-Ontology notes/risk/RISK-PUMP-027-clinical-injury-following-fluid-ingress-into-enclosure"
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
  "technical_file_identifier": "RISK-PUMP-027",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]",
  "risk_matrix_identifier": "RISK-PUMP-027",
  "initial_risk": "medium",
  "residual_risk": "low",
  "concerns": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
  ]
}
---

# Clinical injury following fluid ingress into enclosure

## Semantic role

Represents one independently assessed infusion-pump risk with a stable risk-matrix identifier and configuration scope.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `RISK-PUMP-027`
- **type:** `risk`
- **title:** `Clinical injury following fluid ingress into enclosure`
- **aliases:** `RISK-PUMP-027`, `RISK-PUMP-027-clinical-injury-following-fluid-ingress-into-enclosure`, `18-ontology-notes/risk/RISK-PUMP-027-clinical-injury-following-fluid-ingress-into-enclosure`, `03-Ontology notes/risk/RISK-PUMP-027-clinical-injury-following-fluid-ingress-into-enclosure`
- **status:** `accepted`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/risk`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx`
- **technical_file_identifier:** `RISK-PUMP-027`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]
- **risk_matrix_identifier:** `RISK-PUMP-027`
- **initial_risk:** `medium`
- **residual_risk:** `low`
- **concerns:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `has_risk` from [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004 — Infpump FlowGuard oncology configuration 1.1]]; `mitigates` from [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-027-security-event-logging|RCM-PUMP-027 — Security event logging]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `concerns` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002 — Infpump FlowGuard transport configuration 1.0]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["RISK-PUMP-027<br/>Clinical injury following fluid ingress into enclosure"]
  PREV0["DEVC-PUMP-004<br/>Infpump FlowGuard oncology configuration 1.1"]
  PREV0 -->|"has_risk"| CURRENT
  PREV1["RCM-PUMP-027<br/>Security event logging"]
  PREV1 -->|"mitigates"| CURRENT
  NEXT0["DEVC-PUMP-002<br/>Infpump FlowGuard transport configuration 1.0"]
  CURRENT -->|"concerns"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
