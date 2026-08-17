---
{
  "id": "HARM-PUMP-004",
  "type": "harm",
  "title": "Medication overdose",
  "aliases": [
    "HARM-PUMP-004",
    "HARM-PUMP-004-medication-overdose",
    "18-ontology-notes/harm/HARM-PUMP-004-medication-overdose",
    "03-Ontology notes/harm/HARM-PUMP-004-medication-overdose"
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
  "technical_file_identifier": "HARM-PUMP-004",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
}
---

# Medication overdose

## Semantic role

Defines one clinically or physically meaningful consequence used by the risk analysis and benefit-risk evaluation.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `HARM-PUMP-004`
- **type:** `harm`
- **title:** `Medication overdose`
- **aliases:** `HARM-PUMP-004`, `HARM-PUMP-004-medication-overdose`, `18-ontology-notes/harm/HARM-PUMP-004-medication-overdose`, `03-Ontology notes/harm/HARM-PUMP-004-medication-overdose`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/harm`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx`
- **technical_file_identifier:** `HARM-PUMP-004`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `may_cause` from [[06-Infpump FlowGuard ontology notes/hazardous-situation/HS-PUMP-004-air-reaches-the-patient-line|HS-PUMP-004 — Air reaches the patient line]], [[06-Infpump FlowGuard ontology notes/hazardous-situation/HS-PUMP-014-liquid-reaches-safety-critical-electronics|HS-PUMP-014 — Liquid reaches safety-critical electronics]]. These incoming links show which product, decision, process or evidence records depend on the current note.

No succeeding ontology-note dependency is currently asserted for this record. It remains scoped to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004 — Infpump FlowGuard oncology configuration 1.1]], and any future downstream dependency should be added as a typed relationship rather than inferred from prose.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["HARM-PUMP-004<br/>Medication overdose"]
  PREV0["HS-PUMP-004<br/>Air reaches the patient line"]
  PREV0 -->|"may_cause"| CURRENT
  PREV1["HS-PUMP-014<br/>Liquid reaches safety-critical electronics"]
  PREV1 -->|"may_cause"| CURRENT
  NEXT_NONE["No asserted succeeding dependency"]
  CURRENT -.-> NEXT_NONE
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
