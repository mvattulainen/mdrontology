---
{
  "id": "DEVF-PUMP-001",
  "type": "device-family",
  "title": "Infpump FlowGuard infusion-pump family",
  "aliases": [
    "DEVF-PUMP-001",
    "DEVF-PUMP-001-infpump-flowguard-infusion-pump-family",
    "18-ontology-notes/device-family/DEVF-PUMP-001-infpump-flowguard-infusion-pump-family",
    "03-Ontology notes/device-family/DEVF-PUMP-001-infpump-flowguard-infusion-pump-family"
  ],
  "status": "approved",
  "version": "1",
  "created": "2026-08-15",
  "modified": "2026-08-15",
  "tags": [
    "ontology-note/device-family",
    "device/infpump-flowguard"
  ],
  "draft": false,
  "note_origin": "human-reviewed synthetic example",
  "technical_file": "TF-01 Device Description/Product Hierarchy.xlsx",
  "technical_file_identifier": "DEVF-PUMP-001",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]",
  "manufactured_by": [
    "[[01-Ontology instances/02-organisations/manufacturers/ORG-MFR-0001-example-medical-oy|ORG-MFR-0001]]"
  ],
  "has_model": [
    "[[06-Infpump FlowGuard ontology notes/device-model/DEVM-PUMP-001-infpump-flowguard-fg-100-model|DEVM-PUMP-001]]"
  ],
  "source_provisions": [
    "[[02-Sources/standards/SRC-EMDN-european-medical-devices-nomenclature|SRC-EMDN]]"
  ]
}
---

# Infpump FlowGuard infusion-pump family

## Semantic role

Defines the governed product family above models, variants and configurations without treating the grouping as a regulatory identifier.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `DEVF-PUMP-001`
- **type:** `device-family`
- **title:** `Infpump FlowGuard infusion-pump family`
- **aliases:** `DEVF-PUMP-001`, `DEVF-PUMP-001-infpump-flowguard-infusion-pump-family`, `18-ontology-notes/device-family/DEVF-PUMP-001-infpump-flowguard-infusion-pump-family`, `03-Ontology notes/device-family/DEVF-PUMP-001-infpump-flowguard-infusion-pump-family`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/device-family`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-01 Device Description/Product Hierarchy.xlsx`
- **technical_file_identifier:** `DEVF-PUMP-001`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]
- **manufactured_by:** [[01-Ontology instances/02-organisations/manufacturers/ORG-MFR-0001-example-medical-oy|ORG-MFR-0001]]
- **has_model:** [[06-Infpump FlowGuard ontology notes/device-model/DEVM-PUMP-001-infpump-flowguard-fg-100-model|DEVM-PUMP-001]]
- **source_provisions:** [[02-Sources/standards/SRC-EMDN-european-medical-devices-nomenclature|SRC-EMDN]]

## Traceability

No previous ontology-note dependency is currently asserted for this record. Its nearest governed context is [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]], which identifies the device configuration in which the note is interpreted.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `has_model` to [[06-Infpump FlowGuard ontology notes/device-model/DEVM-PUMP-001-infpump-flowguard-fg-100-model|DEVM-PUMP-001 — Infpump FlowGuard FG-100 model]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["DEVF-PUMP-001<br/>Infpump FlowGuard infusion-pump family"]
  PREV_NONE["No asserted previous dependency"]
  PREV_NONE -.-> CURRENT
  NEXT0["DEVM-PUMP-001<br/>Infpump FlowGuard FG-100 model"]
  CURRENT -->|"has_model"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
