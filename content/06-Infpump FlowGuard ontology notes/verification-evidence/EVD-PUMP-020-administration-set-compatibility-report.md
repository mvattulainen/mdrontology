---
{
  "id": "EVD-PUMP-020",
  "type": "verification-evidence",
  "title": "Administration-set compatibility report",
  "aliases": [
    "EVD-PUMP-020",
    "EVD-PUMP-020-administration-set-compatibility-report",
    "18-ontology-notes/verification-evidence/EVD-PUMP-020-administration-set-compatibility-report",
    "03-Ontology notes/verification-evidence/EVD-PUMP-020-administration-set-compatibility-report"
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
  "technical_file_identifier": "EVD-PUMP-020",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]",
  "approved_at": "2026-08-15",
  "evidence_scope": "Administration-set compatibility report",
  "applies_to_configuration": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]"
  ]
}
---

# Administration-set compatibility report

## Semantic role

Describes what one approved evidence item demonstrates and which exact device configuration it covers.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `EVD-PUMP-020`
- **type:** `verification-evidence`
- **title:** `Administration-set compatibility report`
- **aliases:** `EVD-PUMP-020`, `EVD-PUMP-020-administration-set-compatibility-report`, `18-ontology-notes/verification-evidence/EVD-PUMP-020-administration-set-compatibility-report`, `03-Ontology notes/verification-evidence/EVD-PUMP-020-administration-set-compatibility-report`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/verification-evidence`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-07 Verification and Validation/V&V Evidence Index.xlsx`
- **technical_file_identifier:** `EVD-PUMP-020`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]
- **approved_at:** `2026-08-15`
- **evidence_scope:** `Administration-set compatibility report`
- **applies_to_configuration:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `satisfied_by` from [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-020-alarm-priority-and-intelligibility|CRI-PUMP-020 — Alarm priority and intelligibility]], [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-050-configuration-and-change-control|CRI-PUMP-050 — Configuration and change control]]; `verified_by` from [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-020-alarm-priority-coding|RCM-PUMP-020 — Alarm priority coding]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `applies_to_configuration` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005 — Infpump FlowGuard critical-care configuration 1.1]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["EVD-PUMP-020<br/>Administration-set compatibility report"]
  PREV0["CRI-PUMP-020<br/>Alarm priority and intelligibility"]
  PREV0 -->|"satisfied_by"| CURRENT
  PREV1["CRI-PUMP-050<br/>Configuration and change control"]
  PREV1 -->|"satisfied_by"| CURRENT
  PREV2["RCM-PUMP-020<br/>Alarm priority coding"]
  PREV2 -->|"verified_by"| CURRENT
  NEXT0["DEVC-PUMP-005<br/>Infpump FlowGuard critical-care configuration 1.1"]
  CURRENT -->|"applies_to_configuration"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
