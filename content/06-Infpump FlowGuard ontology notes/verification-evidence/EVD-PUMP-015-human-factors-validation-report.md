---
{
  "id": "EVD-PUMP-015",
  "type": "verification-evidence",
  "title": "Human factors validation report",
  "aliases": [
    "EVD-PUMP-015",
    "EVD-PUMP-015-human-factors-validation-report",
    "18-ontology-notes/verification-evidence/EVD-PUMP-015-human-factors-validation-report",
    "03-Ontology notes/verification-evidence/EVD-PUMP-015-human-factors-validation-report"
  ],
  "status": "approved",
  "version": "1",
  "created": "2026-08-15",
  "modified": "2026-08-15",
  "tags": [
    "ontology-note/verification-evidence",
    "device/infpump-flowguard"
  ],
  "draft": false,
  "note_origin": "human-reviewed synthetic example",
  "technical_file": "TF-07 Verification and Validation/V&V Evidence Index.xlsx",
  "technical_file_identifier": "EVD-PUMP-015",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]",
  "approved_at": "2026-08-15",
  "evidence_scope": "Human factors validation report",
  "applies_to_configuration": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]"
  ]
}
---

# Human factors validation report

## Semantic role

Describes what one approved evidence item demonstrates and which exact device configuration it covers.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `EVD-PUMP-015`
- **type:** `verification-evidence`
- **title:** `Human factors validation report`
- **aliases:** `EVD-PUMP-015`, `EVD-PUMP-015-human-factors-validation-report`, `18-ontology-notes/verification-evidence/EVD-PUMP-015-human-factors-validation-report`, `03-Ontology notes/verification-evidence/EVD-PUMP-015-human-factors-validation-report`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/verification-evidence`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-07 Verification and Validation/V&V Evidence Index.xlsx`
- **technical_file_identifier:** `EVD-PUMP-015`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]
- **approved_at:** `2026-08-15`
- **evidence_scope:** `Human factors validation report`
- **applies_to_configuration:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `satisfied_by` from [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-015-flow-rate-accuracy|CRI-PUMP-015 — Flow-rate accuracy]], [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-045-udi-traceability|CRI-PUMP-045 — UDI traceability]]; `verified_by` from [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-015-critical-battery-controlled-shutdown|RCM-PUMP-015 — Critical-battery controlled shutdown]], [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-045-independent-release-inspection|RCM-PUMP-045 — Independent release inspection]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `applies_to_configuration` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005 — Infpump FlowGuard critical-care configuration 1.1]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["EVD-PUMP-015<br/>Human factors validation report"]
  PREV0["CRI-PUMP-015<br/>Flow-rate accuracy"]
  PREV0 -->|"satisfied_by"| CURRENT
  PREV1["CRI-PUMP-045<br/>UDI traceability"]
  PREV1 -->|"satisfied_by"| CURRENT
  PREV2["RCM-PUMP-015<br/>Critical-battery controlled shutdown"]
  PREV2 -->|"verified_by"| CURRENT
  PREV3["RCM-PUMP-045<br/>Independent release inspection"]
  PREV3 -->|"verified_by"| CURRENT
  NEXT0["DEVC-PUMP-005<br/>Infpump FlowGuard critical-care configuration 1.1"]
  CURRENT -->|"applies_to_configuration"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
