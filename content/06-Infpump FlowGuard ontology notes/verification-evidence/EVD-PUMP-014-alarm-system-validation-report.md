---
{
  "id": "EVD-PUMP-014",
  "type": "verification-evidence",
  "title": "Alarm-system validation report",
  "aliases": [
    "EVD-PUMP-014",
    "EVD-PUMP-014-alarm-system-validation-report",
    "18-ontology-notes/verification-evidence/EVD-PUMP-014-alarm-system-validation-report",
    "03-Ontology notes/verification-evidence/EVD-PUMP-014-alarm-system-validation-report"
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
  "technical_file_identifier": "EVD-PUMP-014",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]",
  "approved_at": "2026-08-15",
  "evidence_scope": "Alarm-system validation report",
  "applies_to_configuration": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
  ]
}
---

# Alarm-system validation report

## Semantic role

Describes what one approved evidence item demonstrates and which exact device configuration it covers.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `EVD-PUMP-014`
- **type:** `verification-evidence`
- **title:** `Alarm-system validation report`
- **aliases:** `EVD-PUMP-014`, `EVD-PUMP-014-alarm-system-validation-report`, `18-ontology-notes/verification-evidence/EVD-PUMP-014-alarm-system-validation-report`, `03-Ontology notes/verification-evidence/EVD-PUMP-014-alarm-system-validation-report`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/verification-evidence`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-07 Verification and Validation/V&V Evidence Index.xlsx`
- **technical_file_identifier:** `EVD-PUMP-014`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]
- **approved_at:** `2026-08-15`
- **evidence_scope:** `Alarm-system validation report`
- **applies_to_configuration:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `satisfied_by` from [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-014-delivered-volume-accuracy|CRI-PUMP-014 — Delivered-volume accuracy]], [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-044-instructions-for-use-completeness|CRI-PUMP-044 — Instructions-for-use completeness]]; `verified_by` from [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-014-low-battery-advance-warning|RCM-PUMP-014 — Low-battery advance warning]], [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-044-priming-confirmation|RCM-PUMP-044 — Priming confirmation]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `applies_to_configuration` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004 — Infpump FlowGuard oncology configuration 1.1]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["EVD-PUMP-014<br/>Alarm-system validation report"]
  PREV0["CRI-PUMP-014<br/>Delivered-volume accuracy"]
  PREV0 -->|"satisfied_by"| CURRENT
  PREV1["CRI-PUMP-044<br/>Instructions-for-use completeness"]
  PREV1 -->|"satisfied_by"| CURRENT
  PREV2["RCM-PUMP-014<br/>Low-battery advance warning"]
  PREV2 -->|"verified_by"| CURRENT
  PREV3["RCM-PUMP-044<br/>Priming confirmation"]
  PREV3 -->|"verified_by"| CURRENT
  NEXT0["DEVC-PUMP-004<br/>Infpump FlowGuard oncology configuration 1.1"]
  CURRENT -->|"applies_to_configuration"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
