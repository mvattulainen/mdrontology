---
{
  "id": "EVD-PUMP-003",
  "type": "verification-evidence",
  "title": "Occlusion detection validation report",
  "aliases": [
    "EVD-PUMP-003",
    "EVD-PUMP-003-occlusion-detection-validation-report",
    "18-ontology-notes/verification-evidence/EVD-PUMP-003-occlusion-detection-validation-report",
    "03-Ontology notes/verification-evidence/EVD-PUMP-003-occlusion-detection-validation-report"
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
  "technical_file_identifier": "EVD-PUMP-003",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]",
  "approved_at": "2026-08-15",
  "evidence_scope": "Occlusion detection validation report",
  "applies_to_configuration": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]"
  ]
}
---

# Occlusion detection validation report

## Semantic role

Describes what one approved evidence item demonstrates and which exact device configuration it covers.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `EVD-PUMP-003`
- **type:** `verification-evidence`
- **title:** `Occlusion detection validation report`
- **aliases:** `EVD-PUMP-003`, `EVD-PUMP-003-occlusion-detection-validation-report`, `18-ontology-notes/verification-evidence/EVD-PUMP-003-occlusion-detection-validation-report`, `03-Ontology notes/verification-evidence/EVD-PUMP-003-occlusion-detection-validation-report`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/verification-evidence`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-07 Verification and Validation/V&V Evidence Index.xlsx`
- **technical_file_identifier:** `EVD-PUMP-003`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]
- **approved_at:** `2026-08-15`
- **evidence_scope:** `Occlusion detection validation report`
- **applies_to_configuration:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `supported_by` from [[06-Infpump FlowGuard ontology notes/classification-decision/CLD-PUMP-003-paediatric-configuration-classification-decision|CLD-PUMP-003 — Paediatric configuration classification decision]]; `satisfied_by` from [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-003-benefit-risk-acceptability|CRI-PUMP-003 — Benefit-risk acceptability]], [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-033-cybersecurity-risk-control|CRI-PUMP-033 — Cybersecurity risk control]]; `verified_by` from [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-003-dose-error-reduction-library|RCM-PUMP-003 — Dose-error reduction library]], [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-033-locking-pole-clamp|RCM-PUMP-033 — Locking pole clamp]]; `affected_evidence` from [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-003-air-sensor-component-revision|CHG-PUMP-003 — Air-sensor component revision]]; `includes` from [[06-Infpump FlowGuard ontology notes/technical-documentation-set/TD-PUMP-001-infpump-flowguard-mdr-technical-documentation-set|TD-PUMP-001 — Infpump FlowGuard MDR technical documentation set]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `applies_to_configuration` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003 — Infpump FlowGuard paediatric configuration 1.0]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["EVD-PUMP-003<br/>Occlusion detection validation report"]
  PREV0["CLD-PUMP-003<br/>Paediatric configuration classification decision"]
  PREV0 -->|"supported_by"| CURRENT
  PREV1["CRI-PUMP-003<br/>Benefit-risk acceptability"]
  PREV1 -->|"satisfied_by"| CURRENT
  PREV2["CRI-PUMP-033<br/>Cybersecurity risk control"]
  PREV2 -->|"satisfied_by"| CURRENT
  PREV3["RCM-PUMP-003<br/>Dose-error reduction library"]
  PREV3 -->|"verified_by"| CURRENT
  PREV4["RCM-PUMP-033<br/>Locking pole clamp"]
  PREV4 -->|"verified_by"| CURRENT
  PREV_MORE["2 more previous dependencies"]
  PREV_MORE -->|"additional typed links"| CURRENT
  NEXT0["DEVC-PUMP-003<br/>Infpump FlowGuard paediatric configuration 1.0"]
  CURRENT -->|"applies_to_configuration"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
