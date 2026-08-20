---
{
  "id": "EVD-PUMP-008",
  "type": "verification-evidence",
  "title": "Electrical safety test report",
  "aliases": [
    "EVD-PUMP-008",
    "EVD-PUMP-008-electrical-safety-test-report",
    "18-ontology-notes/verification-evidence/EVD-PUMP-008-electrical-safety-test-report",
    "03-Ontology notes/verification-evidence/EVD-PUMP-008-electrical-safety-test-report"
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
  "technical_file_identifier": "EVD-PUMP-008",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]",
  "approved_at": "2026-08-15",
  "evidence_scope": "Electrical safety test report",
  "topic": "electrical-safety",
  "applies_to_configuration": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]"
  ],
  "supports_certificate": [
    "[[06-Infpump FlowGuard ontology notes/certificate/CERT-PUMP-003-electrical-safety-cb-test-certificate|CERT-PUMP-003]]"
  ]
}
---

# Electrical safety test report

## Semantic role

Describes what one approved evidence item demonstrates and which exact device configuration it covers.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `EVD-PUMP-008`
- **type:** `verification-evidence`
- **title:** `Electrical safety test report`
- **aliases:** `EVD-PUMP-008`, `EVD-PUMP-008-electrical-safety-test-report`, `18-ontology-notes/verification-evidence/EVD-PUMP-008-electrical-safety-test-report`, `03-Ontology notes/verification-evidence/EVD-PUMP-008-electrical-safety-test-report`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/verification-evidence`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-07 Verification and Validation/V&V Evidence Index.xlsx`
- **technical_file_identifier:** `EVD-PUMP-008`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]
- **approved_at:** `2026-08-15`
- **evidence_scope:** `Electrical safety test report`
- **topic:** `electrical-safety`
- **applies_to_configuration:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]
- **supports_certificate:** [[06-Infpump FlowGuard ontology notes/certificate/CERT-PUMP-003-electrical-safety-cb-test-certificate|CERT-PUMP-003]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `satisfied_by` from [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-008-transport-and-storage-protection|CRI-PUMP-008 — Transport and storage protection]], [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-022-electrical-safety|CRI-PUMP-022 — Electrical safety]], [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-038-interoperability|CRI-PUMP-038 — Interoperability]]; `verified_by` from [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-008-anti-free-flow-clamp|RCM-PUMP-008 — Anti-free-flow clamp]], [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-016-medical-grade-isolation-barrier|RCM-PUMP-016 — Medical-grade isolation barrier]], [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-038-thermal-shutdown|RCM-PUMP-038 — Thermal shutdown]]; `impacts` from [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-008-pole-clamp-material-change|CHG-PUMP-008 — Pole-clamp material change]]; `includes` from [[06-Infpump FlowGuard ontology notes/technical-documentation-set/TD-PUMP-001-infpump-flowguard-mdr-technical-documentation-set|TD-PUMP-001 — Infpump FlowGuard MDR technical documentation set]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `applies_to_configuration` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003 — Infpump FlowGuard paediatric configuration 1.0]]; `supports_certificate` to [[06-Infpump FlowGuard ontology notes/certificate/CERT-PUMP-003-electrical-safety-cb-test-certificate|CERT-PUMP-003 — Electrical safety CB test certificate]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["EVD-PUMP-008<br/>Electrical safety test report"]
  PREV0["CRI-PUMP-008<br/>Transport and storage protection"]
  PREV0 -->|"satisfied_by"| CURRENT
  PREV1["CRI-PUMP-022<br/>Electrical safety"]
  PREV1 -->|"satisfied_by"| CURRENT
  PREV2["CRI-PUMP-038<br/>Interoperability"]
  PREV2 -->|"satisfied_by"| CURRENT
  PREV3["RCM-PUMP-008<br/>Anti-free-flow clamp"]
  PREV3 -->|"verified_by"| CURRENT
  PREV4["RCM-PUMP-016<br/>Medical-grade isolation barrier"]
  PREV4 -->|"verified_by"| CURRENT
  PREV_MORE["3 more previous dependencies"]
  PREV_MORE -->|"additional typed links"| CURRENT
  NEXT0["DEVC-PUMP-003<br/>Infpump FlowGuard paediatric configuration 1.0"]
  CURRENT -->|"applies_to_configuration"| NEXT0
  NEXT1["CERT-PUMP-003<br/>Electrical safety CB test certificate"]
  CURRENT -->|"supports_certificate"| NEXT1
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
