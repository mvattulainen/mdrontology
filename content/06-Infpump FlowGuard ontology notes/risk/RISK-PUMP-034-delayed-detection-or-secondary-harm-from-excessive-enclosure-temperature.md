---
{
  "id": "RISK-PUMP-034",
  "type": "risk",
  "title": "Delayed detection or secondary harm from excessive enclosure temperature",
  "aliases": [
    "RISK-PUMP-034",
    "RISK-PUMP-034-delayed-detection-or-secondary-harm-from-excessive-enclosure-temperature",
    "18-ontology-notes/risk/RISK-PUMP-034-delayed-detection-or-secondary-harm-from-excessive-enclosure-temperature",
    "03-Ontology notes/risk/RISK-PUMP-034-delayed-detection-or-secondary-harm-from-excessive-enclosure-temperature"
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
  "technical_file_identifier": "RISK-PUMP-034",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]",
  "risk_matrix_identifier": "RISK-PUMP-034",
  "initial_risk": "high",
  "residual_risk": "low",
  "concerns": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
  ]
}
---

# Delayed detection or secondary harm from excessive enclosure temperature

## Semantic role

Represents one independently assessed infusion-pump risk with a stable risk-matrix identifier and configuration scope.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `RISK-PUMP-034`
- **type:** `risk`
- **title:** `Delayed detection or secondary harm from excessive enclosure temperature`
- **aliases:** `RISK-PUMP-034`, `RISK-PUMP-034-delayed-detection-or-secondary-harm-from-excessive-enclosure-temperature`, `18-ontology-notes/risk/RISK-PUMP-034-delayed-detection-or-secondary-harm-from-excessive-enclosure-temperature`, `03-Ontology notes/risk/RISK-PUMP-034-delayed-detection-or-secondary-harm-from-excessive-enclosure-temperature`
- **status:** `accepted`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/risk`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx`
- **technical_file_identifier:** `RISK-PUMP-034`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]
- **risk_matrix_identifier:** `RISK-PUMP-034`
- **initial_risk:** `high`
- **residual_risk:** `low`
- **concerns:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `has_risk` from [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005 — Infpump FlowGuard critical-care configuration 1.1]]; `mitigates` from [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-034-clamp-load-verification|RCM-PUMP-034 — Clamp-load verification]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `concerns` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004 — Infpump FlowGuard oncology configuration 1.1]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["RISK-PUMP-034<br/>Delayed detection or secondary harm from excessive enclosure temperature"]
  PREV0["DEVC-PUMP-005<br/>Infpump FlowGuard critical-care configuration 1.1"]
  PREV0 -->|"has_risk"| CURRENT
  PREV1["RCM-PUMP-034<br/>Clamp-load verification"]
  PREV1 -->|"mitigates"| CURRENT
  NEXT0["DEVC-PUMP-004<br/>Infpump FlowGuard oncology configuration 1.1"]
  CURRENT -->|"concerns"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
