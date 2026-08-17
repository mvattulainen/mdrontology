---
{
  "id": "RISK-PUMP-019",
  "type": "risk",
  "title": "Clinical injury following suppressed or missed alarm",
  "aliases": [
    "RISK-PUMP-019",
    "RISK-PUMP-019-clinical-injury-following-suppressed-or-missed-alarm",
    "18-ontology-notes/risk/RISK-PUMP-019-clinical-injury-following-suppressed-or-missed-alarm",
    "03-Ontology notes/risk/RISK-PUMP-019-clinical-injury-following-suppressed-or-missed-alarm"
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
  "technical_file_identifier": "RISK-PUMP-019",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]",
  "risk_matrix_identifier": "RISK-PUMP-019",
  "initial_risk": "high",
  "residual_risk": "low",
  "concerns": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
  ]
}
---

# Clinical injury following suppressed or missed alarm

## Semantic role

Represents one independently assessed infusion-pump risk with a stable risk-matrix identifier and configuration scope.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `RISK-PUMP-019`
- **type:** `risk`
- **title:** `Clinical injury following suppressed or missed alarm`
- **aliases:** `RISK-PUMP-019`, `RISK-PUMP-019-clinical-injury-following-suppressed-or-missed-alarm`, `18-ontology-notes/risk/RISK-PUMP-019-clinical-injury-following-suppressed-or-missed-alarm`, `03-Ontology notes/risk/RISK-PUMP-019-clinical-injury-following-suppressed-or-missed-alarm`
- **status:** `accepted`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/risk`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx`
- **technical_file_identifier:** `RISK-PUMP-019`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]
- **risk_matrix_identifier:** `RISK-PUMP-019`
- **initial_risk:** `high`
- **residual_risk:** `low`
- **concerns:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `has_risk` from [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003 — Infpump FlowGuard paediatric configuration 1.0]]; `mitigates` from [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-019-independent-calculation-cross-check|RCM-PUMP-019 — Independent calculation cross-check]]; `impacts` from [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-010-administration-set-compatibility-extension|CHG-PUMP-010 — Administration-set compatibility extension]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `concerns` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004 — Infpump FlowGuard oncology configuration 1.1]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["RISK-PUMP-019<br/>Clinical injury following suppressed or missed alarm"]
  PREV0["DEVC-PUMP-003<br/>Infpump FlowGuard paediatric configuration 1.0"]
  PREV0 -->|"has_risk"| CURRENT
  PREV1["RCM-PUMP-019<br/>Independent calculation cross-check"]
  PREV1 -->|"mitigates"| CURRENT
  PREV2["CHG-PUMP-010<br/>Administration-set compatibility extension"]
  PREV2 -->|"impacts"| CURRENT
  NEXT0["DEVC-PUMP-004<br/>Infpump FlowGuard oncology configuration 1.1"]
  CURRENT -->|"concerns"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
