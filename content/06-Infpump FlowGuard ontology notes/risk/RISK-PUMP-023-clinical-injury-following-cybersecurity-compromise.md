---
{
  "id": "RISK-PUMP-023",
  "type": "risk",
  "title": "Clinical injury following cybersecurity compromise",
  "aliases": [
    "RISK-PUMP-023",
    "RISK-PUMP-023-clinical-injury-following-cybersecurity-compromise",
    "18-ontology-notes/risk/RISK-PUMP-023-clinical-injury-following-cybersecurity-compromise",
    "03-Ontology notes/risk/RISK-PUMP-023-clinical-injury-following-cybersecurity-compromise"
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
  "technical_file_identifier": "RISK-PUMP-023",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]",
  "risk_matrix_identifier": "RISK-PUMP-023",
  "initial_risk": "medium",
  "residual_risk": "low",
  "topic": "cybersecurity",
  "concerns": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
  ]
}
---

# Clinical injury following cybersecurity compromise

## Semantic role

Represents one independently assessed infusion-pump risk with a stable risk-matrix identifier and configuration scope.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `RISK-PUMP-023`
- **type:** `risk`
- **title:** `Clinical injury following cybersecurity compromise`
- **aliases:** `RISK-PUMP-023`, `RISK-PUMP-023-clinical-injury-following-cybersecurity-compromise`, `18-ontology-notes/risk/RISK-PUMP-023-clinical-injury-following-cybersecurity-compromise`, `03-Ontology notes/risk/RISK-PUMP-023-clinical-injury-following-cybersecurity-compromise`
- **status:** `accepted`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/risk`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx`
- **technical_file_identifier:** `RISK-PUMP-023`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]
- **risk_matrix_identifier:** `RISK-PUMP-023`
- **initial_risk:** `medium`
- **residual_risk:** `low`
- **topic:** `cybersecurity`
- **concerns:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `has_risk` from [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002 — Infpump FlowGuard transport configuration 1.0]]; `mitigates` from [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-023-touch-confirmation-for-critical-settings|RCM-PUMP-023 — Touch confirmation for critical settings]], [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-025-role-based-access-control|RCM-PUMP-025 — Role-based access control]], [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-026-signed-software-update-packages|RCM-PUMP-026 — Signed software update packages]]; `impacts` from [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-007-cybersecurity-operating-system-patch|CHG-PUMP-007 — Cybersecurity operating-system patch]], [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-012-manufacturing-test-station-software-update|CHG-PUMP-012 — Manufacturing test-station software update]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `concerns` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002 — Infpump FlowGuard transport configuration 1.0]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["RISK-PUMP-023<br/>Clinical injury following cybersecurity compromise"]
  PREV0["DEVC-PUMP-002<br/>Infpump FlowGuard transport configuration 1.0"]
  PREV0 -->|"has_risk"| CURRENT
  PREV1["RCM-PUMP-023<br/>Touch confirmation for critical settings"]
  PREV1 -->|"mitigates"| CURRENT
  PREV2["RCM-PUMP-025<br/>Role-based access control"]
  PREV2 -->|"mitigates"| CURRENT
  PREV3["RCM-PUMP-026<br/>Signed software update packages"]
  PREV3 -->|"mitigates"| CURRENT
  PREV4["CHG-PUMP-007<br/>Cybersecurity operating-system patch"]
  PREV4 -->|"impacts"| CURRENT
  PREV_MORE["1 more previous dependencies"]
  PREV_MORE -->|"additional typed links"| CURRENT
  NEXT0["DEVC-PUMP-002<br/>Infpump FlowGuard transport configuration 1.0"]
  CURRENT -->|"concerns"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
