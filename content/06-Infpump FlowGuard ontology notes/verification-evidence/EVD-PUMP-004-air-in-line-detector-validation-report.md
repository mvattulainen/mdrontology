---
{
  "id": "EVD-PUMP-004",
  "type": "verification-evidence",
  "title": "Air-in-line detector validation report",
  "aliases": [
    "EVD-PUMP-004",
    "EVD-PUMP-004-air-in-line-detector-validation-report",
    "18-ontology-notes/verification-evidence/EVD-PUMP-004-air-in-line-detector-validation-report",
    "03-Ontology notes/verification-evidence/EVD-PUMP-004-air-in-line-detector-validation-report"
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
  "technical_file_identifier": "EVD-PUMP-004",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]",
  "approved_at": "2026-08-15",
  "evidence_scope": "Air-in-line detector validation report",
  "applies_to_configuration": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
  ]
}
---

# Air-in-line detector validation report

## Semantic role

Describes what one approved evidence item demonstrates and which exact device configuration it covers.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `EVD-PUMP-004`
- **type:** `verification-evidence`
- **title:** `Air-in-line detector validation report`
- **aliases:** `EVD-PUMP-004`, `EVD-PUMP-004-air-in-line-detector-validation-report`, `18-ontology-notes/verification-evidence/EVD-PUMP-004-air-in-line-detector-validation-report`, `03-Ontology notes/verification-evidence/EVD-PUMP-004-air-in-line-detector-validation-report`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/verification-evidence`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-07 Verification and Validation/V&V Evidence Index.xlsx`
- **technical_file_identifier:** `EVD-PUMP-004`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]
- **approved_at:** `2026-08-15`
- **evidence_scope:** `Air-in-line detector validation report`
- **applies_to_configuration:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `supported_by` from [[06-Infpump FlowGuard ontology notes/classification-decision/CLD-PUMP-004-oncology-configuration-classification-decision|CLD-PUMP-004 — Oncology configuration classification decision]]; `satisfied_by` from [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-004-risk-control-verification|CRI-PUMP-004 — Risk-control verification]], [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-034-access-control|CRI-PUMP-034 — Access control]]; `verified_by` from [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-004-occlusion-pressure-monitoring|RCM-PUMP-004 — Occlusion pressure monitoring]], [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-034-clamp-load-verification|RCM-PUMP-034 — Clamp-load verification]]; `affected_evidence` from [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-004-touchscreen-controller-replacement|CHG-PUMP-004 — Touchscreen controller replacement]]; `includes` from [[06-Infpump FlowGuard ontology notes/technical-documentation-set/TD-PUMP-001-infpump-flowguard-mdr-technical-documentation-set|TD-PUMP-001 — Infpump FlowGuard MDR technical documentation set]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `applies_to_configuration` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004 — Infpump FlowGuard oncology configuration 1.1]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["EVD-PUMP-004<br/>Air-in-line detector validation report"]
  PREV0["CLD-PUMP-004<br/>Oncology configuration classification decision"]
  PREV0 -->|"supported_by"| CURRENT
  PREV1["CRI-PUMP-004<br/>Risk-control verification"]
  PREV1 -->|"satisfied_by"| CURRENT
  PREV2["CRI-PUMP-034<br/>Access control"]
  PREV2 -->|"satisfied_by"| CURRENT
  PREV3["RCM-PUMP-004<br/>Occlusion pressure monitoring"]
  PREV3 -->|"verified_by"| CURRENT
  PREV4["RCM-PUMP-034<br/>Clamp-load verification"]
  PREV4 -->|"verified_by"| CURRENT
  PREV_MORE["2 more previous dependencies"]
  PREV_MORE -->|"additional typed links"| CURRENT
  NEXT0["DEVC-PUMP-004<br/>Infpump FlowGuard oncology configuration 1.1"]
  CURRENT -->|"applies_to_configuration"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
