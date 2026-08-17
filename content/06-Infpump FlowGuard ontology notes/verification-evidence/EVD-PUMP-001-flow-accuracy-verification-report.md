---
{
  "id": "EVD-PUMP-001",
  "type": "verification-evidence",
  "title": "Flow accuracy verification report",
  "aliases": [
    "EVD-PUMP-001",
    "EVD-PUMP-001-flow-accuracy-verification-report",
    "18-ontology-notes/verification-evidence/EVD-PUMP-001-flow-accuracy-verification-report",
    "03-Ontology notes/verification-evidence/EVD-PUMP-001-flow-accuracy-verification-report"
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
  "technical_file_identifier": "EVD-PUMP-001",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]",
  "approved_at": "2026-08-15",
  "evidence_scope": "Flow accuracy verification report",
  "applies_to_configuration": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ]
}
---

# Flow accuracy verification report

## Semantic role

Describes what one approved evidence item demonstrates and which exact device configuration it covers.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `EVD-PUMP-001`
- **type:** `verification-evidence`
- **title:** `Flow accuracy verification report`
- **aliases:** `EVD-PUMP-001`, `EVD-PUMP-001-flow-accuracy-verification-report`, `18-ontology-notes/verification-evidence/EVD-PUMP-001-flow-accuracy-verification-report`, `03-Ontology notes/verification-evidence/EVD-PUMP-001-flow-accuracy-verification-report`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/verification-evidence`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-07 Verification and Validation/V&V Evidence Index.xlsx`
- **technical_file_identifier:** `EVD-PUMP-001`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]
- **approved_at:** `2026-08-15`
- **evidence_scope:** `Flow accuracy verification report`
- **applies_to_configuration:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `supported_by` from [[06-Infpump FlowGuard ontology notes/classification-decision/CLD-PUMP-001-bedside-configuration-classification-decision|CLD-PUMP-001 — Bedside configuration classification decision]]; `satisfied_by` from [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-001-risk-reduction-and-acceptable-residual-risk|CRI-PUMP-001 — Risk reduction and acceptable residual risk]], [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-031-software-requirements-traceability|CRI-PUMP-031 — Software requirements traceability]]; `verified_by` from [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-001-independent-flow-monitoring|RCM-PUMP-001 — Independent flow monitoring]], [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-031-ingress-resistant-enclosure-seals|RCM-PUMP-031 — Ingress-resistant enclosure seals]]; `affected_evidence` from [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-001-battery-cell-supplier-replacement|CHG-PUMP-001 — Battery cell supplier replacement]]; `includes` from [[06-Infpump FlowGuard ontology notes/configuration-baseline/BASE-PUMP-001-infpump-flowguard-released-design-baseline-11|BASE-PUMP-001 — Infpump FlowGuard released design baseline 1.1]], [[06-Infpump FlowGuard ontology notes/technical-documentation-set/TD-PUMP-001-infpump-flowguard-mdr-technical-documentation-set|TD-PUMP-001 — Infpump FlowGuard MDR technical documentation set]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `applies_to_configuration` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["EVD-PUMP-001<br/>Flow accuracy verification report"]
  PREV0["CLD-PUMP-001<br/>Bedside configuration classification decision"]
  PREV0 -->|"supported_by"| CURRENT
  PREV1["CRI-PUMP-001<br/>Risk reduction and acceptable residual risk"]
  PREV1 -->|"satisfied_by"| CURRENT
  PREV2["CRI-PUMP-031<br/>Software requirements traceability"]
  PREV2 -->|"satisfied_by"| CURRENT
  PREV3["RCM-PUMP-001<br/>Independent flow monitoring"]
  PREV3 -->|"verified_by"| CURRENT
  PREV4["RCM-PUMP-031<br/>Ingress-resistant enclosure seals"]
  PREV4 -->|"verified_by"| CURRENT
  PREV_MORE["3 more previous dependencies"]
  PREV_MORE -->|"additional typed links"| CURRENT
  NEXT0["DEVC-PUMP-001<br/>Infpump FlowGuard bedside configuration 1.0"]
  CURRENT -->|"applies_to_configuration"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
