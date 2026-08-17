---
{
  "id": "COMP-PUMP-007",
  "type": "component",
  "title": "Main control board",
  "aliases": [
    "COMP-PUMP-007",
    "COMP-PUMP-007-main-control-board",
    "18-ontology-notes/component/COMP-PUMP-007-main-control-board",
    "03-Ontology notes/component/COMP-PUMP-007-main-control-board"
  ],
  "status": "approved",
  "version": "1",
  "created": "2026-08-15",
  "modified": "2026-08-15",
  "tags": [
    "ontology-note/component",
    "device/infpump-flowguard"
  ],
  "draft": false,
  "note_origin": "human-reviewed synthetic example",
  "technical_file": "TF-01 Device Description/Bill of Materials.xlsx",
  "technical_file_identifier": "COMP-PUMP-007",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]",
  "component_criticality": "safety-critical",
  "part_number": "FG-1007"
}
---

# Main control board

## Semantic role

Gives a safety-relevant physical or software component an identity that can be referenced by configurations, suppliers, risks and changes.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `COMP-PUMP-007`
- **type:** `component`
- **title:** `Main control board`
- **aliases:** `COMP-PUMP-007`, `COMP-PUMP-007-main-control-board`, `18-ontology-notes/component/COMP-PUMP-007-main-control-board`, `03-Ontology notes/component/COMP-PUMP-007-main-control-board`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/component`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-01 Device Description/Bill of Materials.xlsx`
- **technical_file_identifier:** `COMP-PUMP-007`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]
- **component_criticality:** `safety-critical`
- **part_number:** `FG-1007`

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `includes_component` from [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004 — Infpump FlowGuard oncology configuration 1.1]]. These incoming links show which product, decision, process or evidence records depend on the current note.

No succeeding ontology-note dependency is currently asserted for this record. It remains scoped to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002 — Infpump FlowGuard transport configuration 1.0]], and any future downstream dependency should be added as a typed relationship rather than inferred from prose.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["COMP-PUMP-007<br/>Main control board"]
  PREV0["DEVC-PUMP-004<br/>Infpump FlowGuard oncology configuration 1.1"]
  PREV0 -->|"includes_component"| CURRENT
  NEXT_NONE["No asserted succeeding dependency"]
  CURRENT -.-> NEXT_NONE
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
