---
{
  "id": "HS-PUMP-003",
  "type": "hazardous-situation",
  "title": "Pressure rises while downstream occlusion is undetected",
  "aliases": [
    "HS-PUMP-003",
    "HS-PUMP-003-pressure-rises-while-downstream-occlusion-is-undetected",
    "18-ontology-notes/hazardous-situation/HS-PUMP-003-pressure-rises-while-downstream-occlusion-is-undetected",
    "03-Ontology notes/hazardous-situation/HS-PUMP-003-pressure-rises-while-downstream-occlusion-is-undetected"
  ],
  "status": "approved",
  "version": "1",
  "created": "2026-08-15",
  "modified": "2026-08-15",
  "tags": [
    "ontology-note/hazardous-situation",
    "device/infpump-flowguard"
  ],
  "draft": false,
  "note_origin": "human-reviewed synthetic example",
  "technical_file": "TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx",
  "technical_file_identifier": "HS-PUMP-003",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]",
  "may_cause": [
    "[[06-Infpump FlowGuard ontology notes/harm/HARM-PUMP-003-air-embolism|HARM-PUMP-003]]"
  ]
}
---

# Pressure rises while downstream occlusion is undetected

## Semantic role

Represents one circumstance in which a person, property or environment is exposed to an infusion-pump hazard.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `HS-PUMP-003`
- **type:** `hazardous-situation`
- **title:** `Pressure rises while downstream occlusion is undetected`
- **aliases:** `HS-PUMP-003`, `HS-PUMP-003-pressure-rises-while-downstream-occlusion-is-undetected`, `18-ontology-notes/hazardous-situation/HS-PUMP-003-pressure-rises-while-downstream-occlusion-is-undetected`, `03-Ontology notes/hazardous-situation/HS-PUMP-003-pressure-rises-while-downstream-occlusion-is-undetected`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/hazardous-situation`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx`
- **technical_file_identifier:** `HS-PUMP-003`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]
- **may_cause:** [[06-Infpump FlowGuard ontology notes/harm/HARM-PUMP-003-air-embolism|HARM-PUMP-003]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `can_lead_to` from [[06-Infpump FlowGuard ontology notes/hazard/HAZ-PUMP-003-occluded-infusion-pathway|HAZ-PUMP-003 — Occluded infusion pathway]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `may_cause` to [[06-Infpump FlowGuard ontology notes/harm/HARM-PUMP-003-air-embolism|HARM-PUMP-003 — Air embolism]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["HS-PUMP-003<br/>Pressure rises while downstream occlusion is undetected"]
  PREV0["HAZ-PUMP-003<br/>Occluded infusion pathway"]
  PREV0 -->|"can_lead_to"| CURRENT
  NEXT0["HARM-PUMP-003<br/>Air embolism"]
  CURRENT -->|"may_cause"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
