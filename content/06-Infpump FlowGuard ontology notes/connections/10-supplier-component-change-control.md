---
{
  "title": "Supplier and component change control",
  "aliases": [
    "Ontology note connection — Supplier and component change control",
    "03-Ontology notes/connections/10-supplier-component-change-control"
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

Every arrow reproduces a typed relation asserted in the linked ontology notes. Select a diagram node, or use the links below, to inspect the underlying semantic record.

```mermaid
%%{init: {"flowchart": {"curve": "linear"}}}%%
flowchart TD
  N1["PROC-PUMP-004<br/>Supplier-control process"]
  N2["SUP-PUMP-002<br/>Air-sensor supplier"]
  N3["COMP-PUMP-002<br/>Air-sensor assembly"]
  N4["DEVC-PUMP-002<br/>Transport configuration"]
  N5["CHG-PUMP-003<br/>Sensor component revision"]
  N6["RISK-PUMP-007<br/>Air-introduction injury risk"]
  N7["RCM-PUMP-006<br/>Dual air sensors"]
  N8["EVD-PUMP-004<br/>Detector validation"]
  N1 -->|qualifies_supplier| N2
  N2 -->|supplied_component| N3
  N4 -->|includes_component| N3
  N5 -->|impacts| N6
  N5 -->|impacts| N8
  N7 -->|mitigates| N6
  N7 -->|verified_by| N8
  click N1 "/06-infpump-flowguard-ontology-notes/qms-process/proc-pump-004-infusion-pump-supplier-control-process" "Open PROC-PUMP-004"
  click N2 "/06-infpump-flowguard-ontology-notes/supplier/sup-pump-002-air-sensor-critical-supplier" "Open SUP-PUMP-002"
  click N3 "/06-infpump-flowguard-ontology-notes/component/comp-pump-002-air-in-line-sensor-assembly" "Open COMP-PUMP-002"
  click N4 "/06-infpump-flowguard-ontology-notes/device-configuration/devc-pump-002-infpump-flowguard-transport-configuration-10" "Open DEVC-PUMP-002"
  click N5 "/06-infpump-flowguard-ontology-notes/change/chg-pump-003-air-sensor-component-revision" "Open CHG-PUMP-003"
  click N6 "/06-infpump-flowguard-ontology-notes/risk/risk-pump-007-clinical-injury-following-air-introduced-into-infusion-line" "Open RISK-PUMP-007"
  click N7 "/06-infpump-flowguard-ontology-notes/risk-control-measure/rcm-pump-006-dual-air-in-line-sensors" "Open RCM-PUMP-006"
  click N8 "/06-infpump-flowguard-ontology-notes/verification-evidence/evd-pump-004-air-in-line-detector-validation-report" "Open EVD-PUMP-004"
```

## Linked ontology notes

- [[06-Infpump FlowGuard ontology notes/qms-process/PROC-PUMP-004-infusion-pump-supplier-control-process|PROC-PUMP-004 — Supplier-control process]]
- [[06-Infpump FlowGuard ontology notes/supplier/SUP-PUMP-002-air-sensor-critical-supplier|SUP-PUMP-002 — Air-sensor supplier]]
- [[06-Infpump FlowGuard ontology notes/component/COMP-PUMP-002-air-in-line-sensor-assembly|COMP-PUMP-002 — Air-sensor assembly]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002 — Transport configuration]]
- [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-003-air-sensor-component-revision|CHG-PUMP-003 — Sensor component revision]]
- [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-007-clinical-injury-following-air-introduced-into-infusion-line|RISK-PUMP-007 — Air-introduction injury risk]]
- [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-006-dual-air-in-line-sensors|RCM-PUMP-006 — Dual air sensors]]
- [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-004-air-in-line-detector-validation-report|EVD-PUMP-004 — Detector validation]]

These connections are graph projections and navigation aids. The linked notes and their governed metadata remain the semantic source; the diagram does not create additional regulatory facts.
