---
{
  "id": "EVD-PUMP-019",
  "type": "verification-evidence",
  "title": "Thermal safety test report",
  "aliases": [
    "EVD-PUMP-019",
    "EVD-PUMP-019-thermal-safety-test-report",
    "18-ontology-notes/verification-evidence/EVD-PUMP-019-thermal-safety-test-report",
    "03-Ontology notes/verification-evidence/EVD-PUMP-019-thermal-safety-test-report"
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
  "technical_file_identifier": "EVD-PUMP-019",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]",
  "approved_at": "2026-08-15",
  "evidence_scope": "Thermal safety test report",
  "applies_to_configuration": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
  ]
}
---

# Thermal safety test report

## Semantic role

Describes what one approved evidence item demonstrates and which exact device configuration it covers.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `EVD-PUMP-019`
- **type:** `verification-evidence`
- **title:** `Thermal safety test report`
- **aliases:** `EVD-PUMP-019`, `EVD-PUMP-019-thermal-safety-test-report`, `18-ontology-notes/verification-evidence/EVD-PUMP-019-thermal-safety-test-report`, `03-Ontology notes/verification-evidence/EVD-PUMP-019-thermal-safety-test-report`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/verification-evidence`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-07 Verification and Validation/V&V Evidence Index.xlsx`
- **technical_file_identifier:** `EVD-PUMP-019`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]
- **approved_at:** `2026-08-15`
- **evidence_scope:** `Thermal safety test report`
- **applies_to_configuration:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `satisfied_by` from [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-019-free-flow-prevention|CRI-PUMP-019 — Free-flow prevention]], [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-049-production-release-controls|CRI-PUMP-049 — Production release controls]]; `verified_by` from [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-019-independent-calculation-cross-check|RCM-PUMP-019 — Independent calculation cross-check]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `applies_to_configuration` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004 — Infpump FlowGuard oncology configuration 1.1]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["EVD-PUMP-019<br/>Thermal safety test report"]
  PREV0["CRI-PUMP-019<br/>Free-flow prevention"]
  PREV0 -->|"satisfied_by"| CURRENT
  PREV1["CRI-PUMP-049<br/>Production release controls"]
  PREV1 -->|"satisfied_by"| CURRENT
  PREV2["RCM-PUMP-019<br/>Independent calculation cross-check"]
  PREV2 -->|"verified_by"| CURRENT
  NEXT0["DEVC-PUMP-004<br/>Infpump FlowGuard oncology configuration 1.1"]
  CURRENT -->|"applies_to_configuration"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
