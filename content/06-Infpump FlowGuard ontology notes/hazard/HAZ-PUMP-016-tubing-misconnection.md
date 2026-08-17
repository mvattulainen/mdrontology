---
{
  "id": "HAZ-PUMP-016",
  "type": "hazard",
  "title": "Tubing misconnection",
  "aliases": [
    "HAZ-PUMP-016",
    "HAZ-PUMP-016-tubing-misconnection",
    "18-ontology-notes/hazard/HAZ-PUMP-016-tubing-misconnection",
    "03-Ontology notes/hazard/HAZ-PUMP-016-tubing-misconnection"
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
  "technical_file_identifier": "HAZ-PUMP-016",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]",
  "hazard_category": "mechanical-use-environment",
  "can_lead_to": [
    "[[06-Infpump FlowGuard ontology notes/hazardous-situation/HS-PUMP-016-incompatible-tubing-is-connected-to-the-fluid-path|HS-PUMP-016]]"
  ]
}
---

# Tubing misconnection

## Semantic role

Identifies one potential source of harm that must remain traceable through hazardous situations, risks and controls.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `HAZ-PUMP-016`
- **type:** `hazard`
- **title:** `Tubing misconnection`
- **aliases:** `HAZ-PUMP-016`, `HAZ-PUMP-016-tubing-misconnection`, `18-ontology-notes/hazard/HAZ-PUMP-016-tubing-misconnection`, `03-Ontology notes/hazard/HAZ-PUMP-016-tubing-misconnection`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/hazard`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx`
- **technical_file_identifier:** `HAZ-PUMP-016`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]
- **hazard_category:** `mechanical-use-environment`
- **can_lead_to:** [[06-Infpump FlowGuard ontology notes/hazardous-situation/HS-PUMP-016-incompatible-tubing-is-connected-to-the-fluid-path|HS-PUMP-016]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `has_hazard` from [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004 — Infpump FlowGuard oncology configuration 1.1]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `can_lead_to` to [[06-Infpump FlowGuard ontology notes/hazardous-situation/HS-PUMP-016-incompatible-tubing-is-connected-to-the-fluid-path|HS-PUMP-016 — Incompatible tubing is connected to the fluid path]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["HAZ-PUMP-016<br/>Tubing misconnection"]
  PREV0["DEVC-PUMP-004<br/>Infpump FlowGuard oncology configuration 1.1"]
  PREV0 -->|"has_hazard"| CURRENT
  NEXT0["HS-PUMP-016<br/>Incompatible tubing is connected to the fluid path"]
  CURRENT -->|"can_lead_to"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
