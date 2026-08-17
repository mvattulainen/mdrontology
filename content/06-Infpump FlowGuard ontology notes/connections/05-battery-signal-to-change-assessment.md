---
{
  "title": "Battery signal to change assessment",
  "aliases": [
    "Ontology note connection — Battery signal to change assessment",
    "03-Ontology notes/connections/05-battery-signal-to-change-assessment",
    "18-ontology-notes/connections/05-battery-signal-to-change-assessment"
  ],
  "created": "2026-08-16",
  "modified": "2026-08-16",
  "tags": [
    "ontology-note/connection-diagram",
    "device/infpump-flowguard"
  ],
  "draft": false
}
---

# Battery signal to change assessment

Shows a post-market battery signal flowing through supplier and component context into a change, affected risk control and renewed endurance evidence.

The arrows show the reasoning path used in this example. Select a diagram node, or use the links below, to open the underlying ontology note.

```mermaid
flowchart TD
  N1["DEVC-PUMP-001<br/>Bedside configuration"]
  N2["SUP-PUMP-001<br/>Battery supplier"]
  N3["COMP-PUMP-004<br/>Battery pack"]
  N4["SIGNAL-PUMP-001<br/>Runtime reduction signal"]
  N5["CHG-PUMP-001<br/>Supplier replacement"]
  N6["RISK-PUMP-013<br/>Premature depletion risk"]
  N7["RCM-PUMP-013<br/>State-of-charge estimation"]
  N8["EVD-PUMP-007<br/>Battery endurance validation"]
  N2 -->|supplies| N3
  N3 -->|included in| N1
  N4 -->|triggers assessment| N5
  N5 -->|changes supplier| N2
  N5 -->|affects component| N3
  N5 -->|reassesses| N6
  N7 -->|mitigates| N6
  N7 -->|verified by| N8
  click N1 "/06-infpump-flowguard-ontology-notes/device-configuration/devc-pump-001-infpump-flowguard-bedside-configuration-10" "Open DEVC-PUMP-001"
  click N2 "/06-infpump-flowguard-ontology-notes/supplier/sup-pump-001-battery-pack-critical-supplier" "Open SUP-PUMP-001"
  click N3 "/06-infpump-flowguard-ontology-notes/component/comp-pump-004-rechargeable-battery-pack" "Open COMP-PUMP-004"
  click N4 "/06-infpump-flowguard-ontology-notes/signal/signal-pump-001-unexpected-battery-runtime-reduction" "Open SIGNAL-PUMP-001"
  click N5 "/06-infpump-flowguard-ontology-notes/change/chg-pump-001-battery-cell-supplier-replacement" "Open CHG-PUMP-001"
  click N6 "/06-infpump-flowguard-ontology-notes/risk/risk-pump-013-clinical-injury-following-premature-battery-depletion" "Open RISK-PUMP-013"
  click N7 "/06-infpump-flowguard-ontology-notes/risk-control-measure/rcm-pump-013-battery-state-of-charge-estimation" "Open RCM-PUMP-013"
  click N8 "/06-infpump-flowguard-ontology-notes/verification-evidence/evd-pump-007-battery-endurance-validation-report" "Open EVD-PUMP-007"
```

## Linked ontology notes

- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Bedside configuration]]
- [[06-Infpump FlowGuard ontology notes/supplier/SUP-PUMP-001-battery-pack-critical-supplier|SUP-PUMP-001 — Battery supplier]]
- [[06-Infpump FlowGuard ontology notes/component/COMP-PUMP-004-rechargeable-battery-pack|COMP-PUMP-004 — Battery pack]]
- [[06-Infpump FlowGuard ontology notes/signal/SIGNAL-PUMP-001-unexpected-battery-runtime-reduction|SIGNAL-PUMP-001 — Runtime reduction signal]]
- [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-001-battery-cell-supplier-replacement|CHG-PUMP-001 — Supplier replacement]]
- [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-013-clinical-injury-following-premature-battery-depletion|RISK-PUMP-013 — Premature depletion risk]]
- [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-013-battery-state-of-charge-estimation|RCM-PUMP-013 — State-of-charge estimation]]
- [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-007-battery-endurance-validation-report|EVD-PUMP-007 — Battery endurance validation]]

These connections are navigation and reasoning aids. The linked notes and their governed metadata remain the semantic source; the diagram does not create additional regulatory facts.
