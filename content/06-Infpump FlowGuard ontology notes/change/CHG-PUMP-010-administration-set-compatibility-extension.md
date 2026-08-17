---
{
  "id": "CHG-PUMP-010",
  "type": "change",
  "title": "Administration-set compatibility extension",
  "aliases": [
    "CHG-PUMP-010",
    "CHG-PUMP-010-administration-set-compatibility-extension",
    "18-ontology-notes/change/CHG-PUMP-010-administration-set-compatibility-extension",
    "03-Ontology notes/change/CHG-PUMP-010-administration-set-compatibility-extension"
  ],
  "status": "under-assessment",
  "version": "1",
  "created": "2026-08-15",
  "modified": "2026-08-15",
  "tags": [
    "ontology-note/change",
    "device/infpump-flowguard"
  ],
  "draft": false,
  "note_origin": "human-reviewed synthetic example",
  "technical_file": "TF-08 Change Control/Design Change Register.xlsx",
  "technical_file_identifier": "CHG-PUMP-010",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]",
  "impact_level": "high",
  "change_state": "under-assessment",
  "concerns": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]"
  ],
  "impacts": [
    "[[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-019-clinical-injury-following-suppressed-or-missed-alarm|RISK-PUMP-019]]"
  ],
  "affected_evidence": [
    "[[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-010-software-system-test-report|EVD-PUMP-010]]"
  ]
}
---

# Administration-set compatibility extension

## Semantic role

Represents one proposed product or process change whose regulatory impact must be assessed before implementation.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `CHG-PUMP-010`
- **type:** `change`
- **title:** `Administration-set compatibility extension`
- **aliases:** `CHG-PUMP-010`, `CHG-PUMP-010-administration-set-compatibility-extension`, `18-ontology-notes/change/CHG-PUMP-010-administration-set-compatibility-extension`, `03-Ontology notes/change/CHG-PUMP-010-administration-set-compatibility-extension`
- **status:** `under-assessment`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/change`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-08 Change Control/Design Change Register.xlsx`
- **technical_file_identifier:** `CHG-PUMP-010`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]
- **impact_level:** `high`
- **change_state:** `under-assessment`
- **concerns:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]
- **impacts:** [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-019-clinical-injury-following-suppressed-or-missed-alarm|RISK-PUMP-019]]
- **affected_evidence:** [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-010-software-system-test-report|EVD-PUMP-010]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `triggers` from [[06-Infpump FlowGuard ontology notes/signal/SIGNAL-PUMP-010-therapy-log-timestamp-discrepancies|SIGNAL-PUMP-010 — Therapy-log timestamp discrepancies]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `concerns` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005 — Infpump FlowGuard critical-care configuration 1.1]]; `impacts` to [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-019-clinical-injury-following-suppressed-or-missed-alarm|RISK-PUMP-019 — Clinical injury following suppressed or missed alarm]]; `affected_evidence` to [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-010-software-system-test-report|EVD-PUMP-010 — Software system test report]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["CHG-PUMP-010<br/>Administration-set compatibility extension"]
  PREV0["SIGNAL-PUMP-010<br/>Therapy-log timestamp discrepancies"]
  PREV0 -->|"triggers"| CURRENT
  NEXT0["DEVC-PUMP-005<br/>Infpump FlowGuard critical-care configuration 1.1"]
  CURRENT -->|"concerns"| NEXT0
  NEXT1["RISK-PUMP-019<br/>Clinical injury following suppressed or missed alarm"]
  CURRENT -->|"impacts"| NEXT1
  NEXT2["EVD-PUMP-010<br/>Software system test report"]
  CURRENT -->|"affected_evidence"| NEXT2
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
