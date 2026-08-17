---
{
  "id": "SIGNAL-PUMP-009",
  "type": "signal",
  "title": "Fluid-ingress service findings",
  "aliases": [
    "SIGNAL-PUMP-009",
    "SIGNAL-PUMP-009-fluid-ingress-service-findings",
    "18-ontology-notes/signal/SIGNAL-PUMP-009-fluid-ingress-service-findings",
    "03-Ontology notes/signal/SIGNAL-PUMP-009-fluid-ingress-service-findings"
  ],
  "status": "under-assessment",
  "version": "1",
  "created": "2026-08-15",
  "modified": "2026-08-15",
  "tags": [
    "ontology-note/signal",
    "device/infpump-flowguard"
  ],
  "draft": false,
  "note_origin": "human-reviewed synthetic example",
  "technical_file": "TF-09 PMS/PMS Signal Register.xlsx",
  "technical_file_identifier": "SIGNAL-PUMP-009",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]",
  "signal_state": "under-assessment",
  "detected_at": "2026-08-15",
  "concerns": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
  ],
  "triggers": [
    "[[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-009-ingress-seal-geometry-update|CHG-PUMP-009]]"
  ]
}
---

# Fluid-ingress service findings

## Semantic role

Represents one post-market finding that requires assessment and can trigger a controlled change or other action.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `SIGNAL-PUMP-009`
- **type:** `signal`
- **title:** `Fluid-ingress service findings`
- **aliases:** `SIGNAL-PUMP-009`, `SIGNAL-PUMP-009-fluid-ingress-service-findings`, `18-ontology-notes/signal/SIGNAL-PUMP-009-fluid-ingress-service-findings`, `03-Ontology notes/signal/SIGNAL-PUMP-009-fluid-ingress-service-findings`
- **status:** `under-assessment`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/signal`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-09 PMS/PMS Signal Register.xlsx`
- **technical_file_identifier:** `SIGNAL-PUMP-009`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]
- **signal_state:** `under-assessment`
- **detected_at:** `2026-08-15`
- **concerns:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]
- **triggers:** [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-009-ingress-seal-geometry-update|CHG-PUMP-009]]

## Traceability

No previous ontology-note dependency is currently asserted for this record. Its nearest governed context is [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004 — Infpump FlowGuard oncology configuration 1.1]], which identifies the device configuration in which the note is interpreted.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `concerns` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004 — Infpump FlowGuard oncology configuration 1.1]]; `triggers` to [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-009-ingress-seal-geometry-update|CHG-PUMP-009 — Ingress seal geometry update]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["SIGNAL-PUMP-009<br/>Fluid-ingress service findings"]
  PREV_NONE["No asserted previous dependency"]
  PREV_NONE -.-> CURRENT
  NEXT0["DEVC-PUMP-004<br/>Infpump FlowGuard oncology configuration 1.1"]
  CURRENT -->|"concerns"| NEXT0
  NEXT1["CHG-PUMP-009<br/>Ingress seal geometry update"]
  CURRENT -->|"triggers"| NEXT1
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
