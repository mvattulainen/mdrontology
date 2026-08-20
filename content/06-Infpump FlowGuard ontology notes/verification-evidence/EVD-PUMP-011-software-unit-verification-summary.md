---
{
  "id": "EVD-PUMP-011",
  "type": "verification-evidence",
  "title": "Software unit verification summary",
  "aliases": [
    "EVD-PUMP-011",
    "EVD-PUMP-011-software-unit-verification-summary",
    "18-ontology-notes/verification-evidence/EVD-PUMP-011-software-unit-verification-summary",
    "03-Ontology notes/verification-evidence/EVD-PUMP-011-software-unit-verification-summary"
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
  "technical_file_identifier": "EVD-PUMP-011",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]",
  "approved_at": "2026-08-15",
  "evidence_scope": "Software unit verification summary",
  "applies_to_configuration": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ]
}
---

# Software unit verification summary

## Semantic role

Describes what one approved evidence item demonstrates and which exact device configuration it covers.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `EVD-PUMP-011`
- **type:** `verification-evidence`
- **title:** `Software unit verification summary`
- **aliases:** `EVD-PUMP-011`, `EVD-PUMP-011-software-unit-verification-summary`, `18-ontology-notes/verification-evidence/EVD-PUMP-011-software-unit-verification-summary`, `03-Ontology notes/verification-evidence/EVD-PUMP-011-software-unit-verification-summary`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/verification-evidence`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-07 Verification and Validation/V&V Evidence Index.xlsx`
- **technical_file_identifier:** `EVD-PUMP-011`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]
- **approved_at:** `2026-08-15`
- **evidence_scope:** `Software unit verification summary`
- **applies_to_configuration:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `satisfied_by` from [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-011-infection-and-microbial-contamination-control|CRI-PUMP-011 — Infection and microbial contamination control]], [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-041-display-readability|CRI-PUMP-041 — Display readability]]; `verified_by` from [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-011-concentration-range-validation|RCM-PUMP-011 — Concentration-range validation]], [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-041-sterile-single-use-administration-set|RCM-PUMP-041 — Sterile single-use administration set]]; `impacts` from [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-011-network-protocol-revision|CHG-PUMP-011 — Network protocol revision]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `applies_to_configuration` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["EVD-PUMP-011<br/>Software unit verification summary"]
  PREV0["CRI-PUMP-011<br/>Infection and microbial contamination control"]
  PREV0 -->|"satisfied_by"| CURRENT
  PREV1["CRI-PUMP-041<br/>Display readability"]
  PREV1 -->|"satisfied_by"| CURRENT
  PREV2["RCM-PUMP-011<br/>Concentration-range validation"]
  PREV2 -->|"verified_by"| CURRENT
  PREV3["RCM-PUMP-041<br/>Sterile single-use administration set"]
  PREV3 -->|"verified_by"| CURRENT
  PREV4["CHG-PUMP-011<br/>Network protocol revision"]
  PREV4 -->|"impacts"| CURRENT
  NEXT0["DEVC-PUMP-001<br/>Infpump FlowGuard bedside configuration 1.0"]
  CURRENT -->|"applies_to_configuration"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
