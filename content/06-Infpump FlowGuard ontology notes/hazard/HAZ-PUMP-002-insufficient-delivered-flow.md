---
{
  "id": "HAZ-PUMP-002",
  "type": "hazard",
  "title": "Insufficient delivered flow",
  "aliases": [
    "HAZ-PUMP-002",
    "HAZ-PUMP-002-insufficient-delivered-flow",
    "18-ontology-notes/hazard/HAZ-PUMP-002-insufficient-delivered-flow",
    "03-Ontology notes/hazard/HAZ-PUMP-002-insufficient-delivered-flow"
  ],
  "status": "approved",
  "version": "1",
  "created": "2026-08-15",
  "modified": "2026-08-15",
  "tags": [
    "ontology-note/hazard",
    "device/infpump-flowguard"
  ],
  "draft": false,
  "note_origin": "human-reviewed synthetic example",
  "technical_file": "TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx",
  "technical_file_identifier": "HAZ-PUMP-002",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]",
  "hazard_category": "therapy-delivery",
  "can_lead_to": [
    "[[06-Infpump FlowGuard ontology notes/hazardous-situation/HS-PUMP-002-patient-connected-while-therapy-is-interrupted|HS-PUMP-002]]"
  ]
}
---

# Insufficient delivered flow

## Semantic role

Identifies one potential source of harm that must remain traceable through hazardous situations, risks and controls.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `HAZ-PUMP-002`
- **type:** `hazard`
- **title:** `Insufficient delivered flow`
- **aliases:** `HAZ-PUMP-002`, `HAZ-PUMP-002-insufficient-delivered-flow`, `18-ontology-notes/hazard/HAZ-PUMP-002-insufficient-delivered-flow`, `03-Ontology notes/hazard/HAZ-PUMP-002-insufficient-delivered-flow`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/hazard`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx`
- **technical_file_identifier:** `HAZ-PUMP-002`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]
- **hazard_category:** `therapy-delivery`
- **can_lead_to:** [[06-Infpump FlowGuard ontology notes/hazardous-situation/HS-PUMP-002-patient-connected-while-therapy-is-interrupted|HS-PUMP-002]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `has_hazard` from [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `can_lead_to` to [[06-Infpump FlowGuard ontology notes/hazardous-situation/HS-PUMP-002-patient-connected-while-therapy-is-interrupted|HS-PUMP-002 — Patient connected while therapy is interrupted]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["HAZ-PUMP-002<br/>Insufficient delivered flow"]
  PREV0["DEVC-PUMP-001<br/>Infpump FlowGuard bedside configuration 1.0"]
  PREV0 -->|"has_hazard"| CURRENT
  NEXT0["HS-PUMP-002<br/>Patient connected while therapy is interrupted"]
  CURRENT -->|"can_lead_to"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
