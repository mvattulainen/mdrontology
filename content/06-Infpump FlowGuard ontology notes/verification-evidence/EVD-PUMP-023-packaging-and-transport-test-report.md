---
{
  "id": "EVD-PUMP-023",
  "type": "verification-evidence",
  "title": "Packaging and transport test report",
  "aliases": [
    "EVD-PUMP-023",
    "EVD-PUMP-023-packaging-and-transport-test-report",
    "18-ontology-notes/verification-evidence/EVD-PUMP-023-packaging-and-transport-test-report",
    "03-Ontology notes/verification-evidence/EVD-PUMP-023-packaging-and-transport-test-report"
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
  "technical_file_identifier": "EVD-PUMP-023",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]",
  "approved_at": "2026-08-15",
  "evidence_scope": "Packaging and transport test report",
  "applies_to_configuration": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]"
  ]
}
---

# Packaging and transport test report

## Semantic role

Describes what one approved evidence item demonstrates and which exact device configuration it covers.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `EVD-PUMP-023`
- **type:** `verification-evidence`
- **title:** `Packaging and transport test report`
- **aliases:** `EVD-PUMP-023`, `EVD-PUMP-023-packaging-and-transport-test-report`, `18-ontology-notes/verification-evidence/EVD-PUMP-023-packaging-and-transport-test-report`, `03-Ontology notes/verification-evidence/EVD-PUMP-023-packaging-and-transport-test-report`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/verification-evidence`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-07 Verification and Validation/V&V Evidence Index.xlsx`
- **technical_file_identifier:** `EVD-PUMP-023`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]
- **approved_at:** `2026-08-15`
- **evidence_scope:** `Packaging and transport test report`
- **applies_to_configuration:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `satisfied_by` from [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-023-electromagnetic-compatibility|CRI-PUMP-023 — Electromagnetic compatibility]]; `verified_by` from [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-023-touch-confirmation-for-critical-settings|RCM-PUMP-023 — Touch confirmation for critical settings]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `applies_to_configuration` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003 — Infpump FlowGuard paediatric configuration 1.0]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["EVD-PUMP-023<br/>Packaging and transport test report"]
  PREV0["CRI-PUMP-023<br/>Electromagnetic compatibility"]
  PREV0 -->|"satisfied_by"| CURRENT
  PREV1["RCM-PUMP-023<br/>Touch confirmation for critical settings"]
  PREV1 -->|"verified_by"| CURRENT
  NEXT0["DEVC-PUMP-003<br/>Infpump FlowGuard paediatric configuration 1.0"]
  CURRENT -->|"applies_to_configuration"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
