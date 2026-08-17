---
{
  "title": "Supplier and component change control",
  "aliases": [
    "Ontology note connection — Supplier and component change control",
    "03-Ontology notes/connections/10-supplier-component-change-control",
    "18-ontology-notes/connections/10-supplier-component-change-control"
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

# Supplier and component change control

Connects supplier control, an air-sensor component revision and its downstream risk, control, evidence and released baseline implications.

The arrows show the reasoning path used in this example. Select a diagram node, or use the links below, to open the underlying ontology note.

```mermaid
flowchart TD
  N1["SUP-PUMP-002<br/>Air-sensor supplier"]
  N2["COMP-PUMP-002<br/>Air-sensor assembly"]
  N3["CHG-PUMP-003<br/>Sensor component revision"]
  N4["HAZ-PUMP-004<br/>Air in infusion line"]
  N5["RISK-PUMP-007<br/>Air-introduction injury risk"]
  N6["RCM-PUMP-006<br/>Dual air sensors"]
  N7["EVD-PUMP-004<br/>Detector validation"]
  N8["PROC-PUMP-004<br/>Supplier-control process"]
  N9["BASE-PUMP-001<br/>Released design baseline"]
  N8 -->|qualifies| N1
  N1 -->|supplies| N2
  N3 -->|changes| N2
  N2 -->|detects| N4
  N4 -->|contributes to risk| N5
  N6 -->|mitigates| N5
  N6 -->|verified by| N7
  N3 -->|requires review| N7
  N3 -->|updates baseline| N9
  click N1 "/06-infpump-flowguard-ontology-notes/supplier/sup-pump-002-air-sensor-critical-supplier" "Open SUP-PUMP-002"
  click N2 "/06-infpump-flowguard-ontology-notes/component/comp-pump-002-air-in-line-sensor-assembly" "Open COMP-PUMP-002"
  click N3 "/06-infpump-flowguard-ontology-notes/change/chg-pump-003-air-sensor-component-revision" "Open CHG-PUMP-003"
  click N4 "/06-infpump-flowguard-ontology-notes/hazard/haz-pump-004-air-introduced-into-infusion-line" "Open HAZ-PUMP-004"
  click N5 "/06-infpump-flowguard-ontology-notes/risk/risk-pump-007-clinical-injury-following-air-introduced-into-infusion-line" "Open RISK-PUMP-007"
  click N6 "/06-infpump-flowguard-ontology-notes/risk-control-measure/rcm-pump-006-dual-air-in-line-sensors" "Open RCM-PUMP-006"
  click N7 "/06-infpump-flowguard-ontology-notes/verification-evidence/evd-pump-004-air-in-line-detector-validation-report" "Open EVD-PUMP-004"
  click N8 "/06-infpump-flowguard-ontology-notes/qms-process/proc-pump-004-infusion-pump-supplier-control-process" "Open PROC-PUMP-004"
  click N9 "/06-infpump-flowguard-ontology-notes/configuration-baseline/base-pump-001-infpump-flowguard-released-design-baseline-11" "Open BASE-PUMP-001"
```

## Linked ontology notes

- [[06-Infpump FlowGuard ontology notes/supplier/SUP-PUMP-002-air-sensor-critical-supplier|SUP-PUMP-002 — Air-sensor supplier]]
- [[06-Infpump FlowGuard ontology notes/component/COMP-PUMP-002-air-in-line-sensor-assembly|COMP-PUMP-002 — Air-sensor assembly]]
- [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-003-air-sensor-component-revision|CHG-PUMP-003 — Sensor component revision]]
- [[06-Infpump FlowGuard ontology notes/hazard/HAZ-PUMP-004-air-introduced-into-infusion-line|HAZ-PUMP-004 — Air in infusion line]]
- [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-007-clinical-injury-following-air-introduced-into-infusion-line|RISK-PUMP-007 — Air-introduction injury risk]]
- [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-006-dual-air-in-line-sensors|RCM-PUMP-006 — Dual air sensors]]
- [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-004-air-in-line-detector-validation-report|EVD-PUMP-004 — Detector validation]]
- [[06-Infpump FlowGuard ontology notes/qms-process/PROC-PUMP-004-infusion-pump-supplier-control-process|PROC-PUMP-004 — Supplier-control process]]
- [[06-Infpump FlowGuard ontology notes/configuration-baseline/BASE-PUMP-001-infpump-flowguard-released-design-baseline-11|BASE-PUMP-001 — Released design baseline]]

These connections are navigation and reasoning aids. The linked notes and their governed metadata remain the semantic source; the diagram does not create additional regulatory facts.
