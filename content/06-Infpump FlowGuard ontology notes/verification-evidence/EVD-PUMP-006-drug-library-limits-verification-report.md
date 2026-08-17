---
{
  "id": "EVD-PUMP-006",
  "type": "verification-evidence",
  "title": "Drug-library limits verification report",
  "aliases": [
    "EVD-PUMP-006",
    "EVD-PUMP-006-drug-library-limits-verification-report",
    "18-ontology-notes/verification-evidence/EVD-PUMP-006-drug-library-limits-verification-report",
    "03-Ontology notes/verification-evidence/EVD-PUMP-006-drug-library-limits-verification-report"
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
  "technical_file_identifier": "EVD-PUMP-006",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]",
  "approved_at": "2026-08-15",
  "evidence_scope": "Drug-library limits verification report",
  "applies_to_configuration": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ]
}
---

# Drug-library limits verification report

## Semantic role

Describes what one approved evidence item demonstrates and which exact device configuration it covers.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `EVD-PUMP-006`
- **type:** `verification-evidence`
- **title:** `Drug-library limits verification report`
- **aliases:** `EVD-PUMP-006`, `EVD-PUMP-006-drug-library-limits-verification-report`, `18-ontology-notes/verification-evidence/EVD-PUMP-006-drug-library-limits-verification-report`, `03-Ontology notes/verification-evidence/EVD-PUMP-006-drug-library-limits-verification-report`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/verification-evidence`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-07 Verification and Validation/V&V Evidence Index.xlsx`
- **technical_file_identifier:** `EVD-PUMP-006`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]
- **approved_at:** `2026-08-15`
- **evidence_scope:** `Drug-library limits verification report`
- **applies_to_configuration:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `satisfied_by` from [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-006-performance-under-normal-conditions|CRI-PUMP-006 — Performance under normal conditions]], [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-036-data-integrity|CRI-PUMP-036 — Data integrity]]; `verified_by` from [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-006-dual-air-in-line-sensors|RCM-PUMP-006 — Dual air-in-line sensors]], [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-036-connection-compatibility-labelling|RCM-PUMP-036 — Connection compatibility labelling]]; `affected_evidence` from [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-006-drug-library-schema-update|CHG-PUMP-006 — Drug-library schema update]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `applies_to_configuration` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["EVD-PUMP-006<br/>Drug-library limits verification report"]
  PREV0["CRI-PUMP-006<br/>Performance under normal conditions"]
  PREV0 -->|"satisfied_by"| CURRENT
  PREV1["CRI-PUMP-036<br/>Data integrity"]
  PREV1 -->|"satisfied_by"| CURRENT
  PREV2["RCM-PUMP-006<br/>Dual air-in-line sensors"]
  PREV2 -->|"verified_by"| CURRENT
  PREV3["RCM-PUMP-036<br/>Connection compatibility labelling"]
  PREV3 -->|"verified_by"| CURRENT
  PREV4["CHG-PUMP-006<br/>Drug-library schema update"]
  PREV4 -->|"affected_evidence"| CURRENT
  NEXT0["DEVC-PUMP-001<br/>Infpump FlowGuard bedside configuration 1.0"]
  CURRENT -->|"applies_to_configuration"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
