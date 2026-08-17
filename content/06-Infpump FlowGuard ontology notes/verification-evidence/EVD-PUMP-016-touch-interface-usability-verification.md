---
{
  "id": "EVD-PUMP-016",
  "type": "verification-evidence",
  "title": "Touch-interface usability verification",
  "aliases": [
    "EVD-PUMP-016",
    "EVD-PUMP-016-touch-interface-usability-verification",
    "18-ontology-notes/verification-evidence/EVD-PUMP-016-touch-interface-usability-verification",
    "03-Ontology notes/verification-evidence/EVD-PUMP-016-touch-interface-usability-verification"
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
  "technical_file_identifier": "EVD-PUMP-016",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]",
  "approved_at": "2026-08-15",
  "evidence_scope": "Touch-interface usability verification",
  "applies_to_configuration": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ]
}
---

# Touch-interface usability verification

## Semantic role

Describes what one approved evidence item demonstrates and which exact device configuration it covers.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `EVD-PUMP-016`
- **type:** `verification-evidence`
- **title:** `Touch-interface usability verification`
- **aliases:** `EVD-PUMP-016`, `EVD-PUMP-016-touch-interface-usability-verification`, `18-ontology-notes/verification-evidence/EVD-PUMP-016-touch-interface-usability-verification`, `03-Ontology notes/verification-evidence/EVD-PUMP-016-touch-interface-usability-verification`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/verification-evidence`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-07 Verification and Validation/V&V Evidence Index.xlsx`
- **technical_file_identifier:** `EVD-PUMP-016`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]
- **approved_at:** `2026-08-15`
- **evidence_scope:** `Touch-interface usability verification`
- **applies_to_configuration:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `satisfied_by` from [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-016-protection-against-unintended-bolus|CRI-PUMP-016 — Protection against unintended bolus]], [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-046-clinical-evaluation-support|CRI-PUMP-046 — Clinical evaluation support]]; `verified_by` from [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-016-medical-grade-isolation-barrier|RCM-PUMP-016 — Medical-grade isolation barrier]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `applies_to_configuration` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["EVD-PUMP-016<br/>Touch-interface usability verification"]
  PREV0["CRI-PUMP-016<br/>Protection against unintended bolus"]
  PREV0 -->|"satisfied_by"| CURRENT
  PREV1["CRI-PUMP-046<br/>Clinical evaluation support"]
  PREV1 -->|"satisfied_by"| CURRENT
  PREV2["RCM-PUMP-016<br/>Medical-grade isolation barrier"]
  PREV2 -->|"verified_by"| CURRENT
  NEXT0["DEVC-PUMP-001<br/>Infpump FlowGuard bedside configuration 1.0"]
  CURRENT -->|"applies_to_configuration"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
