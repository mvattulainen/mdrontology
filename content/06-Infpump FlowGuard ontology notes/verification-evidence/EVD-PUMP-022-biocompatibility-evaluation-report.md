---
{
  "id": "EVD-PUMP-022",
  "type": "verification-evidence",
  "title": "Biocompatibility evaluation report",
  "aliases": [
    "EVD-PUMP-022",
    "EVD-PUMP-022-biocompatibility-evaluation-report",
    "18-ontology-notes/verification-evidence/EVD-PUMP-022-biocompatibility-evaluation-report",
    "03-Ontology notes/verification-evidence/EVD-PUMP-022-biocompatibility-evaluation-report"
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
  "technical_file_identifier": "EVD-PUMP-022",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]",
  "approved_at": "2026-08-15",
  "evidence_scope": "Biocompatibility evaluation report",
  "applies_to_configuration": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
  ]
}
---

# Biocompatibility evaluation report

## Semantic role

Describes what one approved evidence item demonstrates and which exact device configuration it covers.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `EVD-PUMP-022`
- **type:** `verification-evidence`
- **title:** `Biocompatibility evaluation report`
- **aliases:** `EVD-PUMP-022`, `EVD-PUMP-022-biocompatibility-evaluation-report`, `18-ontology-notes/verification-evidence/EVD-PUMP-022-biocompatibility-evaluation-report`, `03-Ontology notes/verification-evidence/EVD-PUMP-022-biocompatibility-evaluation-report`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/verification-evidence`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-07 Verification and Validation/V&V Evidence Index.xlsx`
- **technical_file_identifier:** `EVD-PUMP-022`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]
- **approved_at:** `2026-08-15`
- **evidence_scope:** `Biocompatibility evaluation report`
- **applies_to_configuration:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `satisfied_by` from [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-022-electrical-safety|CRI-PUMP-022 — Electrical safety]]; `verified_by` from [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-022-alarm-self-test-at-startup|RCM-PUMP-022 — Alarm self-test at startup]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `applies_to_configuration` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002 — Infpump FlowGuard transport configuration 1.0]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["EVD-PUMP-022<br/>Biocompatibility evaluation report"]
  PREV0["CRI-PUMP-022<br/>Electrical safety"]
  PREV0 -->|"satisfied_by"| CURRENT
  PREV1["RCM-PUMP-022<br/>Alarm self-test at startup"]
  PREV1 -->|"verified_by"| CURRENT
  NEXT0["DEVC-PUMP-002<br/>Infpump FlowGuard transport configuration 1.0"]
  CURRENT -->|"applies_to_configuration"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
