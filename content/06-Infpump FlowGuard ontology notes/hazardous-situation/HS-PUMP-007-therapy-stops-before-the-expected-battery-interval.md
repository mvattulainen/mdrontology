---
{
  "id": "HS-PUMP-007",
  "type": "hazardous-situation",
  "title": "Therapy stops before the expected battery interval",
  "aliases": [
    "HS-PUMP-007",
    "HS-PUMP-007-therapy-stops-before-the-expected-battery-interval",
    "18-ontology-notes/hazardous-situation/HS-PUMP-007-therapy-stops-before-the-expected-battery-interval",
    "03-Ontology notes/hazardous-situation/HS-PUMP-007-therapy-stops-before-the-expected-battery-interval"
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
  "technical_file_identifier": "HS-PUMP-007",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]",
  "may_cause": [
    "[[06-Infpump FlowGuard ontology notes/harm/HARM-PUMP-007-thermal-injury|HARM-PUMP-007]]"
  ]
}
---

# Therapy stops before the expected battery interval

## Semantic role

Represents one circumstance in which a person, property or environment is exposed to an infusion-pump hazard.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `HS-PUMP-007`
- **type:** `hazardous-situation`
- **title:** `Therapy stops before the expected battery interval`
- **aliases:** `HS-PUMP-007`, `HS-PUMP-007-therapy-stops-before-the-expected-battery-interval`, `18-ontology-notes/hazardous-situation/HS-PUMP-007-therapy-stops-before-the-expected-battery-interval`, `03-Ontology notes/hazardous-situation/HS-PUMP-007-therapy-stops-before-the-expected-battery-interval`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/hazardous-situation`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx`
- **technical_file_identifier:** `HS-PUMP-007`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]
- **may_cause:** [[06-Infpump FlowGuard ontology notes/harm/HARM-PUMP-007-thermal-injury|HARM-PUMP-007]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `can_lead_to` from [[06-Infpump FlowGuard ontology notes/hazard/HAZ-PUMP-007-premature-battery-depletion|HAZ-PUMP-007 — Premature battery depletion]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `may_cause` to [[06-Infpump FlowGuard ontology notes/harm/HARM-PUMP-007-thermal-injury|HARM-PUMP-007 — Thermal injury]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["HS-PUMP-007<br/>Therapy stops before the expected battery interval"]
  PREV0["HAZ-PUMP-007<br/>Premature battery depletion"]
  PREV0 -->|"can_lead_to"| CURRENT
  NEXT0["HARM-PUMP-007<br/>Thermal injury"]
  CURRENT -->|"may_cause"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
