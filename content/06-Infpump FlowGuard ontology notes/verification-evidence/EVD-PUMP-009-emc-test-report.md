---
{
  "id": "EVD-PUMP-009",
  "type": "verification-evidence",
  "title": "EMC test report",
  "aliases": [
    "EVD-PUMP-009",
    "EVD-PUMP-009-emc-test-report",
    "18-ontology-notes/verification-evidence/EVD-PUMP-009-emc-test-report",
    "03-Ontology notes/verification-evidence/EVD-PUMP-009-emc-test-report"
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
  "technical_file_identifier": "EVD-PUMP-009",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]",
  "approved_at": "2026-08-15",
  "evidence_scope": "EMC test report",
  "applies_to_configuration": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
  ]
}
---

# EMC test report

## Semantic role

Describes what one approved evidence item demonstrates and which exact device configuration it covers.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `EVD-PUMP-009`
- **type:** `verification-evidence`
- **title:** `EMC test report`
- **aliases:** `EVD-PUMP-009`, `EVD-PUMP-009-emc-test-report`, `18-ontology-notes/verification-evidence/EVD-PUMP-009-emc-test-report`, `03-Ontology notes/verification-evidence/EVD-PUMP-009-emc-test-report`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/verification-evidence`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-07 Verification and Validation/V&V Evidence Index.xlsx`
- **technical_file_identifier:** `EVD-PUMP-009`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]
- **approved_at:** `2026-08-15`
- **evidence_scope:** `EMC test report`
- **applies_to_configuration:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `satisfied_by` from [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-009-compatibility-with-medicinal-products|CRI-PUMP-009 — Compatibility with medicinal products]], [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-039-network-disconnection-behaviour|CRI-PUMP-039 — Network-disconnection behaviour]]; `verified_by` from [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-009-door-open-flow-interruption|RCM-PUMP-009 — Door-open flow interruption]], [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-039-monotonic-event-time-source|RCM-PUMP-039 — Monotonic event time source]]; `affected_evidence` from [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-009-ingress-seal-geometry-update|CHG-PUMP-009 — Ingress seal geometry update]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `applies_to_configuration` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004 — Infpump FlowGuard oncology configuration 1.1]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["EVD-PUMP-009<br/>EMC test report"]
  PREV0["CRI-PUMP-009<br/>Compatibility with medicinal products"]
  PREV0 -->|"satisfied_by"| CURRENT
  PREV1["CRI-PUMP-039<br/>Network-disconnection behaviour"]
  PREV1 -->|"satisfied_by"| CURRENT
  PREV2["RCM-PUMP-009<br/>Door-open flow interruption"]
  PREV2 -->|"verified_by"| CURRENT
  PREV3["RCM-PUMP-039<br/>Monotonic event time source"]
  PREV3 -->|"verified_by"| CURRENT
  PREV4["CHG-PUMP-009<br/>Ingress seal geometry update"]
  PREV4 -->|"affected_evidence"| CURRENT
  NEXT0["DEVC-PUMP-004<br/>Infpump FlowGuard oncology configuration 1.1"]
  CURRENT -->|"applies_to_configuration"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
