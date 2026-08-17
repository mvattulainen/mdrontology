---
{
  "id": "EVD-PUMP-005",
  "type": "verification-evidence",
  "title": "Free-flow protection verification report",
  "aliases": [
    "EVD-PUMP-005",
    "EVD-PUMP-005-free-flow-protection-verification-report",
    "18-ontology-notes/verification-evidence/EVD-PUMP-005-free-flow-protection-verification-report",
    "03-Ontology notes/verification-evidence/EVD-PUMP-005-free-flow-protection-verification-report"
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
  "technical_file_identifier": "EVD-PUMP-005",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]",
  "approved_at": "2026-08-15",
  "evidence_scope": "Free-flow protection verification report",
  "applies_to_configuration": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]"
  ]
}
---

# Free-flow protection verification report

## Semantic role

Describes what one approved evidence item demonstrates and which exact device configuration it covers.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `EVD-PUMP-005`
- **type:** `verification-evidence`
- **title:** `Free-flow protection verification report`
- **aliases:** `EVD-PUMP-005`, `EVD-PUMP-005-free-flow-protection-verification-report`, `18-ontology-notes/verification-evidence/EVD-PUMP-005-free-flow-protection-verification-report`, `03-Ontology notes/verification-evidence/EVD-PUMP-005-free-flow-protection-verification-report`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/verification-evidence`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-07 Verification and Validation/V&V Evidence Index.xlsx`
- **technical_file_identifier:** `EVD-PUMP-005`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]
- **approved_at:** `2026-08-15`
- **evidence_scope:** `Free-flow protection verification report`
- **applies_to_configuration:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `supported_by` from [[06-Infpump FlowGuard ontology notes/classification-decision/CLD-PUMP-005-critical-care-configuration-classification-decision|CLD-PUMP-005 — Critical-care configuration classification decision]]; `satisfied_by` from [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-005-use-error-reduction|CRI-PUMP-005 — Use-error reduction]], [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-035-security-logging|CRI-PUMP-035 — Security logging]]; `verified_by` from [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-005-occlusion-alarm-escalation|RCM-PUMP-005 — Occlusion alarm escalation]], [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-035-keyed-tubing-connector|RCM-PUMP-035 — Keyed tubing connector]]; `affected_evidence` from [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-005-alarm-speaker-supplier-change|CHG-PUMP-005 — Alarm speaker supplier change]]; `includes` from [[06-Infpump FlowGuard ontology notes/technical-documentation-set/TD-PUMP-001-infpump-flowguard-mdr-technical-documentation-set|TD-PUMP-001 — Infpump FlowGuard MDR technical documentation set]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `applies_to_configuration` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005 — Infpump FlowGuard critical-care configuration 1.1]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["EVD-PUMP-005<br/>Free-flow protection verification report"]
  PREV0["CLD-PUMP-005<br/>Critical-care configuration classification decision"]
  PREV0 -->|"supported_by"| CURRENT
  PREV1["CRI-PUMP-005<br/>Use-error reduction"]
  PREV1 -->|"satisfied_by"| CURRENT
  PREV2["CRI-PUMP-035<br/>Security logging"]
  PREV2 -->|"satisfied_by"| CURRENT
  PREV3["RCM-PUMP-005<br/>Occlusion alarm escalation"]
  PREV3 -->|"verified_by"| CURRENT
  PREV4["RCM-PUMP-035<br/>Keyed tubing connector"]
  PREV4 -->|"verified_by"| CURRENT
  PREV_MORE["2 more previous dependencies"]
  PREV_MORE -->|"additional typed links"| CURRENT
  NEXT0["DEVC-PUMP-005<br/>Infpump FlowGuard critical-care configuration 1.1"]
  CURRENT -->|"applies_to_configuration"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
