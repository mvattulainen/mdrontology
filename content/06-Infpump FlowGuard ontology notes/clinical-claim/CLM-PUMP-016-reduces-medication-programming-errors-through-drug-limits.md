---
{
  "id": "CLM-PUMP-016",
  "type": "clinical-claim",
  "title": "Reduces medication-programming errors through drug limits",
  "aliases": [
    "CLM-PUMP-016",
    "CLM-PUMP-016-reduces-medication-programming-errors-through-drug-limits",
    "18-ontology-notes/clinical-claim/CLM-PUMP-016-reduces-medication-programming-errors-through-drug-limits",
    "03-Ontology notes/clinical-claim/CLM-PUMP-016-reduces-medication-programming-errors-through-drug-limits"
  ],
  "status": "approved",
  "version": "1",
  "created": "2026-08-15",
  "modified": "2026-08-15",
  "tags": [
    "ontology-note/clinical-claim",
    "device/infpump-flowguard"
  ],
  "draft": false,
  "note_origin": "human-reviewed synthetic example",
  "technical_file": "TF-06 Clinical Evaluation/Clinical Claims Matrix.xlsx",
  "technical_file_identifier": "CLM-PUMP-016",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]",
  "claim_status": "supported",
  "claim_scope": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
}
---

# Reduces medication-programming errors through drug limits

## Semantic role

Defines one device-performance or clinical-use claim that requires controlled clinical support.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `CLM-PUMP-016`
- **type:** `clinical-claim`
- **title:** `Reduces medication-programming errors through drug limits`
- **aliases:** `CLM-PUMP-016`, `CLM-PUMP-016-reduces-medication-programming-errors-through-drug-limits`, `18-ontology-notes/clinical-claim/CLM-PUMP-016-reduces-medication-programming-errors-through-drug-limits`, `03-Ontology notes/clinical-claim/CLM-PUMP-016-reduces-medication-programming-errors-through-drug-limits`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/clinical-claim`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-06 Clinical Evaluation/Clinical Claims Matrix.xlsx`
- **technical_file_identifier:** `CLM-PUMP-016`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]
- **claim_status:** `supported`
- **claim_scope:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `makes_clinical_claim` from [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004 — Infpump FlowGuard oncology configuration 1.1]]; `supports_claim` from [[06-Infpump FlowGuard ontology notes/clinical-evidence/CEVD-PUMP-001-infpump-flowguard-clinical-evidence-set|CEVD-PUMP-001 — Infpump FlowGuard clinical evidence set]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `claim_scope` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["CLM-PUMP-016<br/>Reduces medication-programming errors through drug limits"]
  PREV0["DEVC-PUMP-004<br/>Infpump FlowGuard oncology configuration 1.1"]
  PREV0 -->|"makes_clinical_claim"| CURRENT
  PREV1["CEVD-PUMP-001<br/>Infpump FlowGuard clinical evidence set"]
  PREV1 -->|"supports_claim"| CURRENT
  NEXT0["DEVC-PUMP-001<br/>Infpump FlowGuard bedside configuration 1.0"]
  CURRENT -->|"claim_scope"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
