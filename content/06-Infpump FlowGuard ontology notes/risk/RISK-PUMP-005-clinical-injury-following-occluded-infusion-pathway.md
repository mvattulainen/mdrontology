---
{
  "id": "RISK-PUMP-005",
  "type": "risk",
  "title": "Clinical injury following occluded infusion pathway",
  "aliases": [
    "RISK-PUMP-005",
    "RISK-PUMP-005-clinical-injury-following-occluded-infusion-pathway",
    "18-ontology-notes/risk/RISK-PUMP-005-clinical-injury-following-occluded-infusion-pathway",
    "03-Ontology notes/risk/RISK-PUMP-005-clinical-injury-following-occluded-infusion-pathway"
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
  "technical_file_identifier": "RISK-PUMP-005",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]",
  "risk_matrix_identifier": "RISK-PUMP-005",
  "initial_risk": "medium",
  "residual_risk": "low",
  "topic": "occlusion",
  "concerns": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
  ]
}
---

# Clinical injury following occluded infusion pathway

## Semantic role

Represents one independently assessed infusion-pump risk with a stable risk-matrix identifier and configuration scope.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `RISK-PUMP-005`
- **type:** `risk`
- **title:** `Clinical injury following occluded infusion pathway`
- **aliases:** `RISK-PUMP-005`, `RISK-PUMP-005-clinical-injury-following-occluded-infusion-pathway`, `18-ontology-notes/risk/RISK-PUMP-005-clinical-injury-following-occluded-infusion-pathway`, `03-Ontology notes/risk/RISK-PUMP-005-clinical-injury-following-occluded-infusion-pathway`
- **status:** `accepted`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/risk`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx`
- **technical_file_identifier:** `RISK-PUMP-005`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]
- **risk_matrix_identifier:** `RISK-PUMP-005`
- **initial_risk:** `medium`
- **residual_risk:** `low`
- **topic:** `occlusion`
- **concerns:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `has_risk` from [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002 — Infpump FlowGuard transport configuration 1.0]]; `mitigates` from [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-004-occlusion-pressure-monitoring|RCM-PUMP-004 — Occlusion pressure monitoring]], [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-005-occlusion-alarm-escalation|RCM-PUMP-005 — Occlusion alarm escalation]], [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-045-independent-release-inspection|RCM-PUMP-045 — Independent release inspection]]; `impacts` from [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-002-occlusion-algorithm-threshold-update|CHG-PUMP-002 — Occlusion algorithm threshold update]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `concerns` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002 — Infpump FlowGuard transport configuration 1.0]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["RISK-PUMP-005<br/>Clinical injury following occluded infusion pathway"]
  PREV0["DEVC-PUMP-002<br/>Infpump FlowGuard transport configuration 1.0"]
  PREV0 -->|"has_risk"| CURRENT
  PREV1["RCM-PUMP-004<br/>Occlusion pressure monitoring"]
  PREV1 -->|"mitigates"| CURRENT
  PREV2["RCM-PUMP-005<br/>Occlusion alarm escalation"]
  PREV2 -->|"mitigates"| CURRENT
  PREV3["RCM-PUMP-045<br/>Independent release inspection"]
  PREV3 -->|"mitigates"| CURRENT
  PREV4["CHG-PUMP-002<br/>Occlusion algorithm threshold update"]
  PREV4 -->|"impacts"| CURRENT
  NEXT0["DEVC-PUMP-002<br/>Infpump FlowGuard transport configuration 1.0"]
  CURRENT -->|"concerns"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
