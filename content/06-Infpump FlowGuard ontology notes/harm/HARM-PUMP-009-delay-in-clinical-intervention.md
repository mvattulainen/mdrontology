---
{
  "id": "HARM-PUMP-009",
  "type": "harm",
  "title": "Delay in clinical intervention",
  "aliases": [
    "HARM-PUMP-009",
    "HARM-PUMP-009-delay-in-clinical-intervention",
    "18-ontology-notes/harm/HARM-PUMP-009-delay-in-clinical-intervention",
    "03-Ontology notes/harm/HARM-PUMP-009-delay-in-clinical-intervention"
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
  "technical_file_identifier": "HARM-PUMP-009",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
}
---

# Delay in clinical intervention

## Semantic role

Defines one clinically or physically meaningful consequence used by the risk analysis and benefit-risk evaluation.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `HARM-PUMP-009`
- **type:** `harm`
- **title:** `Delay in clinical intervention`
- **aliases:** `HARM-PUMP-009`, `HARM-PUMP-009-delay-in-clinical-intervention`, `18-ontology-notes/harm/HARM-PUMP-009-delay-in-clinical-intervention`, `03-Ontology notes/harm/HARM-PUMP-009-delay-in-clinical-intervention`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/harm`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx`
- **technical_file_identifier:** `HARM-PUMP-009`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `may_cause` from [[06-Infpump FlowGuard ontology notes/hazardous-situation/HS-PUMP-009-calculated-delivery-parameters-differ-from-the-prescription|HS-PUMP-009 — Calculated delivery parameters differ from the prescription]], [[06-Infpump FlowGuard ontology notes/hazardous-situation/HS-PUMP-019-contaminated-fluid-path-contacts-the-patient|HS-PUMP-019 — Contaminated fluid path contacts the patient]]. These incoming links show which product, decision, process or evidence records depend on the current note.

No succeeding ontology-note dependency is currently asserted for this record. It remains scoped to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004 — Infpump FlowGuard oncology configuration 1.1]], and any future downstream dependency should be added as a typed relationship rather than inferred from prose.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["HARM-PUMP-009<br/>Delay in clinical intervention"]
  PREV0["HS-PUMP-009<br/>Calculated delivery parameters differ from the prescription"]
  PREV0 -->|"may_cause"| CURRENT
  PREV1["HS-PUMP-019<br/>Contaminated fluid path contacts the patient"]
  PREV1 -->|"may_cause"| CURRENT
  NEXT_NONE["No asserted succeeding dependency"]
  CURRENT -.-> NEXT_NONE
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
