---
{
  "id": "SIGNAL-PUMP-011",
  "type": "signal",
  "title": "Confirmed battery-endurance degradation trend",
  "aliases": [
    "SIGNAL-PUMP-011",
    "SIGNAL-PUMP-011-confirmed-battery-endurance-degradation-trend",
    "18-ontology-notes/signal/SIGNAL-PUMP-011-confirmed-battery-endurance-degradation-trend",
    "03-Ontology notes/signal/SIGNAL-PUMP-011-confirmed-battery-endurance-degradation-trend"
  ],
  "status": "accepted",
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
  "technical_file_identifier": "SIGNAL-PUMP-011",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]",
  "signal_state": "accepted-for-action",
  "detected_at": "2026-08-15",
  "topic": "completed-battery-endurance-lifecycle",
  "concerns": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ],
  "triggers": [
    "[[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-013-battery-energy-reserve-threshold-update|CHG-PUMP-013]]"
  ]
}
---

# Confirmed battery-endurance degradation trend

## Semantic role

Represents one post-market finding that requires assessment and can trigger a controlled change or other action.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `SIGNAL-PUMP-011`
- **type:** `signal`
- **title:** `Confirmed battery-endurance degradation trend`
- **aliases:** `SIGNAL-PUMP-011`, `SIGNAL-PUMP-011-confirmed-battery-endurance-degradation-trend`, `18-ontology-notes/signal/SIGNAL-PUMP-011-confirmed-battery-endurance-degradation-trend`, `03-Ontology notes/signal/SIGNAL-PUMP-011-confirmed-battery-endurance-degradation-trend`
- **status:** `accepted`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/signal`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-09 PMS/PMS Signal Register.xlsx`
- **technical_file_identifier:** `SIGNAL-PUMP-011`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]
- **signal_state:** `accepted-for-action`
- **detected_at:** `2026-08-15`
- **topic:** `completed-battery-endurance-lifecycle`
- **concerns:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]
- **triggers:** [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-013-battery-energy-reserve-threshold-update|CHG-PUMP-013]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `provides_detection_criteria_for` from [[06-Infpump FlowGuard ontology notes/pms-plan/PMS-PLAN-PUMP-002-bedside-battery-endurance-post-market-surveillance-plan|PMS-PLAN-PUMP-002 — Bedside battery-endurance post-market surveillance plan]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `concerns` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]; `triggers` to [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-013-battery-energy-reserve-threshold-update|CHG-PUMP-013 — Battery energy-reserve threshold update]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["SIGNAL-PUMP-011<br/>Confirmed battery-endurance degradation trend"]
  PREV0["PMS-PLAN-PUMP-002<br/>Bedside battery-endurance post-market surveillance plan"]
  PREV0 -->|"provides_detection_criteria_for"| CURRENT
  NEXT0["DEVC-PUMP-001<br/>Infpump FlowGuard bedside configuration 1.0"]
  CURRENT -->|"concerns"| NEXT0
  NEXT1["CHG-PUMP-013<br/>Battery energy-reserve threshold update"]
  CURRENT -->|"triggers"| NEXT1
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
