---
{
  "id": "EVD-PUMP-012",
  "type": "verification-evidence",
  "title": "Cybersecurity penetration test report",
  "aliases": [
    "EVD-PUMP-012",
    "EVD-PUMP-012-cybersecurity-penetration-test-report",
    "18-ontology-notes/verification-evidence/EVD-PUMP-012-cybersecurity-penetration-test-report",
    "03-Ontology notes/verification-evidence/EVD-PUMP-012-cybersecurity-penetration-test-report"
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
  "technical_file_identifier": "EVD-PUMP-012",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]",
  "approved_at": "2026-08-15",
  "evidence_scope": "Cybersecurity penetration test report",
  "applies_to_configuration": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
  ]
}
---

# Cybersecurity penetration test report

## Semantic role

Describes what one approved evidence item demonstrates and which exact device configuration it covers.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `EVD-PUMP-012`
- **type:** `verification-evidence`
- **title:** `Cybersecurity penetration test report`
- **aliases:** `EVD-PUMP-012`, `EVD-PUMP-012-cybersecurity-penetration-test-report`, `18-ontology-notes/verification-evidence/EVD-PUMP-012-cybersecurity-penetration-test-report`, `03-Ontology notes/verification-evidence/EVD-PUMP-012-cybersecurity-penetration-test-report`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/verification-evidence`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-07 Verification and Validation/V&V Evidence Index.xlsx`
- **technical_file_identifier:** `EVD-PUMP-012`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]
- **approved_at:** `2026-08-15`
- **evidence_scope:** `Cybersecurity penetration test report`
- **applies_to_configuration:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `satisfied_by` from [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-012-cleaning-and-disinfection-instructions|CRI-PUMP-012 — Cleaning and disinfection instructions]], [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-042-control-panel-usability|CRI-PUMP-042 — Control-panel usability]]; `verified_by` from [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-012-patient-weight-plausibility-check|RCM-PUMP-012 — Patient-weight plausibility check]], [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-042-cleaning-compatibility-controls|RCM-PUMP-042 — Cleaning compatibility controls]]; `affected_evidence` from [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-012-manufacturing-test-station-software-update|CHG-PUMP-012 — Manufacturing test-station software update]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `applies_to_configuration` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002 — Infpump FlowGuard transport configuration 1.0]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["EVD-PUMP-012<br/>Cybersecurity penetration test report"]
  PREV0["CRI-PUMP-012<br/>Cleaning and disinfection instructions"]
  PREV0 -->|"satisfied_by"| CURRENT
  PREV1["CRI-PUMP-042<br/>Control-panel usability"]
  PREV1 -->|"satisfied_by"| CURRENT
  PREV2["RCM-PUMP-012<br/>Patient-weight plausibility check"]
  PREV2 -->|"verified_by"| CURRENT
  PREV3["RCM-PUMP-042<br/>Cleaning compatibility controls"]
  PREV3 -->|"verified_by"| CURRENT
  PREV4["CHG-PUMP-012<br/>Manufacturing test-station software update"]
  PREV4 -->|"affected_evidence"| CURRENT
  NEXT0["DEVC-PUMP-002<br/>Infpump FlowGuard transport configuration 1.0"]
  CURRENT -->|"applies_to_configuration"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
