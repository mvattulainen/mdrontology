---
{
  "id": "CIA-PUMP-001",
  "type": "change-impact-assessment",
  "title": "Battery cell-supplier change impact assessment",
  "aliases": [
    "CIA-PUMP-001",
    "CIA-PUMP-001-battery-cell-supplier-change-impact-assessment",
    "18-ontology-notes/change-impact-assessment/CIA-PUMP-001-battery-cell-supplier-change-impact-assessment",
    "03-Ontology notes/change-impact-assessment/CIA-PUMP-001-battery-cell-supplier-change-impact-assessment"
  ],
  "status": "under-assessment",
  "version": "1",
  "created": "2026-08-15",
  "modified": "2026-08-15",
  "tags": [
    "ontology-note/change-impact-assessment",
    "device/infpump-flowguard"
  ],
  "draft": false,
  "note_origin": "human-reviewed synthetic example",
  "technical_file": "TF-08 Change Control/Change Impact Assessments.xlsx",
  "technical_file_identifier": "CIA-PUMP-001",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]",
  "assessment_scope": "Battery endurance, supplier controls, residual risk and verification impact of CHG-PUMP-001",
  "assessment_state": "under-assessment",
  "concerns": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ],
  "supported_by": [
    "[[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-007-battery-endurance-validation-report|EVD-PUMP-007]]"
  ]
}
---

# Battery cell-supplier change impact assessment

## Semantic role

Documents the controlled assessment of how a proposed change affects requirements, configuration, risk, evidence and required follow-up actions.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `CIA-PUMP-001`
- **type:** `change-impact-assessment`
- **title:** `Battery cell-supplier change impact assessment`
- **aliases:** `CIA-PUMP-001`, `CIA-PUMP-001-battery-cell-supplier-change-impact-assessment`, `18-ontology-notes/change-impact-assessment/CIA-PUMP-001-battery-cell-supplier-change-impact-assessment`, `03-Ontology notes/change-impact-assessment/CIA-PUMP-001-battery-cell-supplier-change-impact-assessment`
- **status:** `under-assessment`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/change-impact-assessment`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-08 Change Control/Change Impact Assessments.xlsx`
- **technical_file_identifier:** `CIA-PUMP-001`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]
- **assessment_scope:** `Battery endurance, supplier controls, residual risk and verification impact of CHG-PUMP-001`
- **assessment_state:** `under-assessment`
- **concerns:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]
- **supported_by:** [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-007-battery-endurance-validation-report|EVD-PUMP-007]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `has_impact_assessment` from [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-001-battery-cell-supplier-replacement|CHG-PUMP-001 — Battery cell supplier replacement]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `concerns` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]; `supported_by` to [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-007-battery-endurance-validation-report|EVD-PUMP-007 — Battery endurance validation report]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["CIA-PUMP-001<br/>Battery cell-supplier change impact assessment"]
  PREV0["CHG-PUMP-001<br/>Battery cell supplier replacement"]
  PREV0 -->|"has_impact_assessment"| CURRENT
  NEXT0["DEVC-PUMP-001<br/>Infpump FlowGuard bedside configuration 1.0"]
  CURRENT -->|"concerns"| NEXT0
  NEXT1["EVD-PUMP-007<br/>Battery endurance validation report"]
  CURRENT -->|"supported_by"| NEXT1
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
