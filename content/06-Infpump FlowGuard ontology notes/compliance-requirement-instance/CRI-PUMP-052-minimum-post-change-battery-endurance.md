---
{
  "id": "CRI-PUMP-052",
  "type": "compliance-requirement-instance",
  "title": "Minimum post-change battery endurance",
  "aliases": [
    "CRI-PUMP-052",
    "CRI-PUMP-052-minimum-post-change-battery-endurance",
    "18-ontology-notes/compliance-requirement-instance/CRI-PUMP-052-minimum-post-change-battery-endurance",
    "03-Ontology notes/compliance-requirement-instance/CRI-PUMP-052-minimum-post-change-battery-endurance"
  ],
  "status": "approved",
  "version": "1",
  "created": "2026-08-15",
  "modified": "2026-08-15",
  "tags": [
    "ontology-note/compliance-requirement-instance",
    "device/infpump-flowguard"
  ],
  "draft": false,
  "note_origin": "human-reviewed synthetic example",
  "technical_file": "TF-04 GSPR/GSPR Checklist.xlsx",
  "technical_file_identifier": "CRI-PUMP-052",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]",
  "applicable": true,
  "applicability_rationale": "Applicable to DEVC-PUMP-002 because the configured function or lifecycle control is within the requirement scope.",
  "compliance_method": "Verification and controlled-document review for CRI-PUMP-052",
  "compliance_status": "satisfied",
  "topic": "completed-battery-endurance-lifecycle",
  "instantiates_requirement": [
    "[[01-Ontology instances/04-requirements/gspr/GSPR-0003-therapy-delivery-protection|GSPR-0003]]"
  ],
  "derived_from": [
    "[[02-Sources/legislation/PROV-MDR-ANNEX-I-mdr-annex-i-gsprs|PROV-MDR-ANNEX-I]]"
  ],
  "satisfied_by": [
    "[[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-032-post-change-battery-endurance-verification-report|EVD-PUMP-032]]"
  ],
  "implemented_by_control": [
    "[[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-046-conservative-low-battery-shutdown-reserve|RCM-PUMP-046]]"
  ]
}
---

# Minimum post-change battery endurance

## Semantic role

Represents one generic obligation as applied to a specific infusion-pump configuration, with an explicit compliance method and evidence link.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `CRI-PUMP-052`
- **type:** `compliance-requirement-instance`
- **title:** `Minimum post-change battery endurance`
- **aliases:** `CRI-PUMP-052`, `CRI-PUMP-052-minimum-post-change-battery-endurance`, `18-ontology-notes/compliance-requirement-instance/CRI-PUMP-052-minimum-post-change-battery-endurance`, `03-Ontology notes/compliance-requirement-instance/CRI-PUMP-052-minimum-post-change-battery-endurance`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/compliance-requirement-instance`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-04 GSPR/GSPR Checklist.xlsx`
- **technical_file_identifier:** `CRI-PUMP-052`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]
- **applicable:** `true`
- **applicability_rationale:** `Applicable to DEVC-PUMP-002 because the configured function or lifecycle control is within the requirement scope.`
- **compliance_method:** `Verification and controlled-document review for CRI-PUMP-052`
- **compliance_status:** `satisfied`
- **topic:** `completed-battery-endurance-lifecycle`
- **instantiates_requirement:** [[01-Ontology instances/04-requirements/gspr/GSPR-0003-therapy-delivery-protection|GSPR-0003]]
- **derived_from:** [[02-Sources/legislation/PROV-MDR-ANNEX-I-mdr-annex-i-gsprs|PROV-MDR-ANNEX-I]]
- **satisfied_by:** [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-032-post-change-battery-endurance-verification-report|EVD-PUMP-032]]
- **implemented_by_control:** [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-046-conservative-low-battery-shutdown-reserve|RCM-PUMP-046]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `has_applicable_requirement` from [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]; `informs_requirement` from [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-041-therapy-interruption-after-battery-endurance-degradation|RISK-PUMP-041 — Therapy interruption after battery-endurance degradation]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `satisfied_by` to [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-032-post-change-battery-endurance-verification-report|EVD-PUMP-032 — Post-change battery-endurance verification report]]; `implemented_by_control` to [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-046-conservative-low-battery-shutdown-reserve|RCM-PUMP-046 — Conservative low-battery shutdown reserve]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["CRI-PUMP-052<br/>Minimum post-change battery endurance"]
  PREV0["DEVC-PUMP-001<br/>Infpump FlowGuard bedside configuration 1.0"]
  PREV0 -->|"has_applicable_requirement"| CURRENT
  PREV1["RISK-PUMP-041<br/>Therapy interruption after battery-endurance degradation"]
  PREV1 -->|"informs_requirement"| CURRENT
  NEXT0["EVD-PUMP-032<br/>Post-change battery-endurance verification report"]
  CURRENT -->|"satisfied_by"| NEXT0
  NEXT1["RCM-PUMP-046<br/>Conservative low-battery shutdown reserve"]
  CURRENT -->|"implemented_by_control"| NEXT1
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
