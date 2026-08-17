---
{
  "id": "HARM-PUMP-008",
  "type": "harm",
  "title": "Infection",
  "aliases": [
    "HARM-PUMP-008",
    "HARM-PUMP-008-infection",
    "18-ontology-notes/harm/HARM-PUMP-008-infection",
    "03-Ontology notes/harm/HARM-PUMP-008-infection"
  ],
  "status": "approved",
  "version": "1",
  "created": "2026-08-15",
  "modified": "2026-08-15",
  "tags": [
    "ontology-note/harm",
    "device/infpump-flowguard"
  ],
  "draft": false,
  "note_origin": "human-reviewed synthetic example",
  "technical_file": "TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx",
  "technical_file_identifier": "HARM-PUMP-008",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]"
}
---

# Infection

## Semantic role

Defines one clinically or physically meaningful consequence used by the risk analysis and benefit-risk evaluation.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `HARM-PUMP-008`
- **type:** `harm`
- **title:** `Infection`
- **aliases:** `HARM-PUMP-008`, `HARM-PUMP-008-infection`, `18-ontology-notes/harm/HARM-PUMP-008-infection`, `03-Ontology notes/harm/HARM-PUMP-008-infection`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/harm`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx`
- **technical_file_identifier:** `HARM-PUMP-008`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `may_cause` from [[06-Infpump FlowGuard ontology notes/hazardous-situation/HS-PUMP-008-user-or-patient-is-exposed-to-hazardous-leakage-current|HS-PUMP-008 — User or patient is exposed to hazardous leakage current]], [[06-Infpump FlowGuard ontology notes/hazardous-situation/HS-PUMP-018-clinical-review-uses-incomplete-or-incorrectly-timed-records|HS-PUMP-018 — Clinical review uses incomplete or incorrectly timed records]]. These incoming links show which product, decision, process or evidence records depend on the current note.

No succeeding ontology-note dependency is currently asserted for this record. It remains scoped to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003 — Infpump FlowGuard paediatric configuration 1.0]], and any future downstream dependency should be added as a typed relationship rather than inferred from prose.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["HARM-PUMP-008<br/>Infection"]
  PREV0["HS-PUMP-008<br/>User or patient is exposed to hazardous leakage current"]
  PREV0 -->|"may_cause"| CURRENT
  PREV1["HS-PUMP-018<br/>Clinical review uses incomplete or incorrectly timed records"]
  PREV1 -->|"may_cause"| CURRENT
  NEXT_NONE["No asserted succeeding dependency"]
  CURRENT -.-> NEXT_NONE
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
