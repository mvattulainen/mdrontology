---
{
  "id": "RCM-PUMP-025",
  "type": "risk-control-measure",
  "title": "Role-based access control",
  "aliases": [
    "RCM-PUMP-025",
    "RCM-PUMP-025-role-based-access-control",
    "18-ontology-notes/risk-control-measure/RCM-PUMP-025-role-based-access-control",
    "03-Ontology notes/risk-control-measure/RCM-PUMP-025-role-based-access-control"
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
  "technical_file_identifier": "RCM-PUMP-025",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]",
  "control_priority": "inherent-safety-or-protective-measure",
  "mitigates": [
    "[[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-025-clinical-injury-following-electromagnetic-disturbance|RISK-PUMP-025]]"
  ],
  "verified_by": [
    "[[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-025-communication-loss-safe-state-test-report|EVD-PUMP-025]]"
  ]
}
---

# Role-based access control

## Semantic role

Defines one control that reduces a specific risk and remains traceable to verification evidence.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `RCM-PUMP-025`
- **type:** `risk-control-measure`
- **title:** `Role-based access control`
- **aliases:** `RCM-PUMP-025`, `RCM-PUMP-025-role-based-access-control`, `18-ontology-notes/risk-control-measure/RCM-PUMP-025-role-based-access-control`, `03-Ontology notes/risk-control-measure/RCM-PUMP-025-role-based-access-control`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/risk-control-measure`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx`
- **technical_file_identifier:** `RCM-PUMP-025`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]
- **control_priority:** `inherent-safety-or-protective-measure`
- **mitigates:** [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-025-clinical-injury-following-electromagnetic-disturbance|RISK-PUMP-025]]
- **verified_by:** [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-025-communication-loss-safe-state-test-report|EVD-PUMP-025]]

## Traceability

No previous ontology-note dependency is currently asserted for this record. Its nearest governed context is [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005 — Infpump FlowGuard critical-care configuration 1.1]], which identifies the device configuration in which the note is interpreted.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `mitigates` to [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-025-clinical-injury-following-electromagnetic-disturbance|RISK-PUMP-025 — Clinical injury following electromagnetic disturbance]]; `verified_by` to [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-025-communication-loss-safe-state-test-report|EVD-PUMP-025 — Communication-loss safe-state test report]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["RCM-PUMP-025<br/>Role-based access control"]
  PREV_NONE["No asserted previous dependency"]
  PREV_NONE -.-> CURRENT
  NEXT0["RISK-PUMP-025<br/>Clinical injury following electromagnetic disturbance"]
  CURRENT -->|"mitigates"| NEXT0
  NEXT1["EVD-PUMP-025<br/>Communication-loss safe-state test report"]
  CURRENT -->|"verified_by"| NEXT1
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
