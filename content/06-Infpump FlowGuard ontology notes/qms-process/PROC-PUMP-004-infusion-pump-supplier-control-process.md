---
{
  "id": "PROC-PUMP-004",
  "type": "qms-process",
  "title": "Infusion-pump supplier-control process",
  "aliases": [
    "PROC-PUMP-004",
    "PROC-PUMP-004-infusion-pump-supplier-control-process",
    "18-ontology-notes/qms-process/PROC-PUMP-004-infusion-pump-supplier-control-process",
    "03-Ontology notes/qms-process/PROC-PUMP-004-infusion-pump-supplier-control-process"
  ],
  "status": "approved",
  "version": "1",
  "created": "2026-08-15",
  "modified": "2026-08-15",
  "tags": [
    "ontology-note/qms-process",
    "device/infpump-flowguard"
  ],
  "draft": false,
  "note_origin": "human-reviewed synthetic example",
  "technical_file": "TF-12 QMS/QMS Process Matrix.xlsx",
  "technical_file_identifier": "PROC-PUMP-004",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]",
  "process_state": "effective",
  "owned_by": [
    "[[01-Ontology instances/02-organisations/roles/ROLE-REGULATORY-AFFAIRS-regulatory-affairs|ROLE-REGULATORY-AFFAIRS]]"
  ],
  "outsourced_to": [
    "[[06-Infpump FlowGuard ontology notes/supplier/SUP-PUMP-004-alarm-speaker-critical-supplier|SUP-PUMP-004]]"
  ]
}
---

# Infusion-pump supplier-control process

## Semantic role

Defines one controlled manufacturer process, its owner and its role in maintaining the infusion-pump compliance state.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `PROC-PUMP-004`
- **type:** `qms-process`
- **title:** `Infusion-pump supplier-control process`
- **aliases:** `PROC-PUMP-004`, `PROC-PUMP-004-infusion-pump-supplier-control-process`, `18-ontology-notes/qms-process/PROC-PUMP-004-infusion-pump-supplier-control-process`, `03-Ontology notes/qms-process/PROC-PUMP-004-infusion-pump-supplier-control-process`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/qms-process`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-12 QMS/QMS Process Matrix.xlsx`
- **technical_file_identifier:** `PROC-PUMP-004`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]
- **process_state:** `effective`
- **owned_by:** [[01-Ontology instances/02-organisations/roles/ROLE-REGULATORY-AFFAIRS-regulatory-affairs|ROLE-REGULATORY-AFFAIRS]]
- **outsourced_to:** [[06-Infpump FlowGuard ontology notes/supplier/SUP-PUMP-004-alarm-speaker-critical-supplier|SUP-PUMP-004]]

## Traceability

No previous ontology-note dependency is currently asserted for this record. Its nearest governed context is [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004 — Infpump FlowGuard oncology configuration 1.1]], which identifies the device configuration in which the note is interpreted.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `outsourced_to` to [[06-Infpump FlowGuard ontology notes/supplier/SUP-PUMP-004-alarm-speaker-critical-supplier|SUP-PUMP-004 — Alarm speaker critical supplier]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["PROC-PUMP-004<br/>Infusion-pump supplier-control process"]
  PREV_NONE["No asserted previous dependency"]
  PREV_NONE -.-> CURRENT
  NEXT0["SUP-PUMP-004<br/>Alarm speaker critical supplier"]
  CURRENT -->|"outsourced_to"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
