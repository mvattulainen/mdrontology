---
{
  "id": "EVD-PUMP-002",
  "type": "verification-evidence",
  "title": "Bolus volume verification report",
  "aliases": [
    "EVD-PUMP-002",
    "EVD-PUMP-002-bolus-volume-verification-report",
    "18-ontology-notes/verification-evidence/EVD-PUMP-002-bolus-volume-verification-report",
    "03-Ontology notes/verification-evidence/EVD-PUMP-002-bolus-volume-verification-report"
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
  "technical_file_identifier": "EVD-PUMP-002",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]",
  "approved_at": "2026-08-15",
  "evidence_scope": "Bolus volume verification report",
  "applies_to_configuration": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
  ]
}
---

# Bolus volume verification report

## Semantic role

Describes what one approved evidence item demonstrates and which exact device configuration it covers.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `EVD-PUMP-002`
- **type:** `verification-evidence`
- **title:** `Bolus volume verification report`
- **aliases:** `EVD-PUMP-002`, `EVD-PUMP-002-bolus-volume-verification-report`, `18-ontology-notes/verification-evidence/EVD-PUMP-002-bolus-volume-verification-report`, `03-Ontology notes/verification-evidence/EVD-PUMP-002-bolus-volume-verification-report`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/verification-evidence`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-07 Verification and Validation/V&V Evidence Index.xlsx`
- **technical_file_identifier:** `EVD-PUMP-002`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]
- **approved_at:** `2026-08-15`
- **evidence_scope:** `Bolus volume verification report`
- **applies_to_configuration:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `supported_by` from [[06-Infpump FlowGuard ontology notes/classification-decision/CLD-PUMP-002-transport-configuration-classification-decision|CLD-PUMP-002 — Transport configuration classification decision]]; `satisfied_by` from [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-002-known-and-foreseeable-hazard-control|CRI-PUMP-002 — Known and foreseeable hazard control]], [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-032-software-verification|CRI-PUMP-032 — Software verification]]; `verified_by` from [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-002-hard-upper-flow-rate-limit|RCM-PUMP-002 — Hard upper flow-rate limit]], [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-032-fluid-channel-drainage-path|RCM-PUMP-032 — Fluid-channel drainage path]]; `affected_evidence` from [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-002-occlusion-algorithm-threshold-update|CHG-PUMP-002 — Occlusion algorithm threshold update]]; `includes` from [[06-Infpump FlowGuard ontology notes/technical-documentation-set/TD-PUMP-001-infpump-flowguard-mdr-technical-documentation-set|TD-PUMP-001 — Infpump FlowGuard MDR technical documentation set]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `applies_to_configuration` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002 — Infpump FlowGuard transport configuration 1.0]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["EVD-PUMP-002<br/>Bolus volume verification report"]
  PREV0["CLD-PUMP-002<br/>Transport configuration classification decision"]
  PREV0 -->|"supported_by"| CURRENT
  PREV1["CRI-PUMP-002<br/>Known and foreseeable hazard control"]
  PREV1 -->|"satisfied_by"| CURRENT
  PREV2["CRI-PUMP-032<br/>Software verification"]
  PREV2 -->|"satisfied_by"| CURRENT
  PREV3["RCM-PUMP-002<br/>Hard upper flow-rate limit"]
  PREV3 -->|"verified_by"| CURRENT
  PREV4["RCM-PUMP-032<br/>Fluid-channel drainage path"]
  PREV4 -->|"verified_by"| CURRENT
  PREV_MORE["2 more previous dependencies"]
  PREV_MORE -->|"additional typed links"| CURRENT
  NEXT0["DEVC-PUMP-002<br/>Infpump FlowGuard transport configuration 1.0"]
  CURRENT -->|"applies_to_configuration"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
