---
{
  "id": "RCM-PUMP-011",
  "type": "risk-control-measure",
  "title": "Concentration-range validation",
  "aliases": [
    "RCM-PUMP-011",
    "RCM-PUMP-011-concentration-range-validation",
    "18-ontology-notes/risk-control-measure/RCM-PUMP-011-concentration-range-validation",
    "03-Ontology notes/risk-control-measure/RCM-PUMP-011-concentration-range-validation"
  ],
  "status": "approved",
  "version": "1",
  "created": "2026-08-15",
  "modified": "2026-08-15",
  "tags": [
    "ontology-note/risk-control-measure",
    "device/infpump-flowguard"
  ],
  "draft": false,
  "note_origin": "human-reviewed synthetic example",
  "technical_file": "TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx",
  "technical_file_identifier": "RCM-PUMP-011",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]",
  "control_priority": "inherent-safety-or-protective-measure",
  "mitigates": [
    "[[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-011-clinical-injury-following-incorrect-drug-or-concentration-selection|RISK-PUMP-011]]"
  ],
  "verified_by": [
    "[[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-011-software-unit-verification-summary|EVD-PUMP-011]]"
  ]
}
---

# Concentration-range validation

## Semantic role

Defines one control that reduces a specific risk and remains traceable to verification evidence.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `RCM-PUMP-011`
- **type:** `risk-control-measure`
- **title:** `Concentration-range validation`
- **aliases:** `RCM-PUMP-011`, `RCM-PUMP-011-concentration-range-validation`, `18-ontology-notes/risk-control-measure/RCM-PUMP-011-concentration-range-validation`, `03-Ontology notes/risk-control-measure/RCM-PUMP-011-concentration-range-validation`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/risk-control-measure`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx`
- **technical_file_identifier:** `RCM-PUMP-011`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]
- **control_priority:** `inherent-safety-or-protective-measure`
- **mitigates:** [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-011-clinical-injury-following-incorrect-drug-or-concentration-selection|RISK-PUMP-011]]
- **verified_by:** [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-011-software-unit-verification-summary|EVD-PUMP-011]]

## Traceability

No previous ontology-note dependency is currently asserted for this record. Its nearest governed context is [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]], which identifies the device configuration in which the note is interpreted.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `mitigates` to [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-011-clinical-injury-following-incorrect-drug-or-concentration-selection|RISK-PUMP-011 — Clinical injury following incorrect drug or concentration selection]]; `verified_by` to [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-011-software-unit-verification-summary|EVD-PUMP-011 — Software unit verification summary]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["RCM-PUMP-011<br/>Concentration-range validation"]
  PREV_NONE["No asserted previous dependency"]
  PREV_NONE -.-> CURRENT
  NEXT0["RISK-PUMP-011<br/>Clinical injury following incorrect drug or concentration selection"]
  CURRENT -->|"mitigates"| NEXT0
  NEXT1["EVD-PUMP-011<br/>Software unit verification summary"]
  CURRENT -->|"verified_by"| NEXT1
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
