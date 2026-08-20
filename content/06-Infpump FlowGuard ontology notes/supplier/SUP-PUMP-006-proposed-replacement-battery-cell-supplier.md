---
{
  "id": "SUP-PUMP-006",
  "type": "supplier",
  "title": "Proposed replacement battery-cell supplier",
  "aliases": [
    "SUP-PUMP-006",
    "SUP-PUMP-006-proposed-replacement-battery-cell-supplier",
    "18-ontology-notes/supplier/SUP-PUMP-006-proposed-replacement-battery-cell-supplier",
    "03-Ontology notes/supplier/SUP-PUMP-006-proposed-replacement-battery-cell-supplier"
  ],
  "status": "under-assessment",
  "version": "1",
  "created": "2026-08-15",
  "modified": "2026-08-15",
  "tags": [
    "ontology-note/supplier",
    "device/infpump-flowguard"
  ],
  "draft": false,
  "note_origin": "human-reviewed synthetic example",
  "technical_file": "TF-11 Supplier Controls/Supplier Qualification Register.xlsx",
  "technical_file_identifier": "SUP-PUMP-006",
  "valid_from": null,
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]",
  "supplied_component": "[[06-Infpump FlowGuard ontology notes/component/COMP-PUMP-004-rechargeable-battery-pack|COMP-PUMP-004]]",
  "supplier_criticality": "critical",
  "approval_state": "qualification-in-progress",
  "qualification_scope": "Replacement battery cells proposed under CHG-PUMP-001"
}
---

# Proposed replacement battery-cell supplier

## Semantic role

Represents one critical supplier whose approval and supplied component can be assessed independently.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `SUP-PUMP-006`
- **type:** `supplier`
- **title:** `Proposed replacement battery-cell supplier`
- **aliases:** `SUP-PUMP-006`, `SUP-PUMP-006-proposed-replacement-battery-cell-supplier`, `18-ontology-notes/supplier/SUP-PUMP-006-proposed-replacement-battery-cell-supplier`, `03-Ontology notes/supplier/SUP-PUMP-006-proposed-replacement-battery-cell-supplier`
- **status:** `under-assessment`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/supplier`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-11 Supplier Controls/Supplier Qualification Register.xlsx`
- **technical_file_identifier:** `SUP-PUMP-006`
- **valid_from:** `null`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]
- **supplied_component:** [[06-Infpump FlowGuard ontology notes/component/COMP-PUMP-004-rechargeable-battery-pack|COMP-PUMP-004]]
- **supplier_criticality:** `critical`
- **approval_state:** `qualification-in-progress`
- **qualification_scope:** `Replacement battery cells proposed under CHG-PUMP-001`

## Traceability

No previous ontology-note dependency is currently asserted for this record. Its nearest governed context is [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]], which identifies the device configuration in which the note is interpreted.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `supplied_component` to [[06-Infpump FlowGuard ontology notes/component/COMP-PUMP-004-rechargeable-battery-pack|COMP-PUMP-004 — Rechargeable battery pack]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["SUP-PUMP-006<br/>Proposed replacement battery-cell supplier"]
  PREV_NONE["No asserted previous dependency"]
  PREV_NONE -.-> CURRENT
  NEXT0["COMP-PUMP-004<br/>Rechargeable battery pack"]
  CURRENT -->|"supplied_component"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
