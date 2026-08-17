---
{
  "title": "PMS signal and change feedback",
  "aliases": [
    "Ontology note connection — PMS signal and change feedback",
    "03-Ontology notes/connections/09-pms-signal-and-change-feedback",
    "18-ontology-notes/connections/09-pms-signal-and-change-feedback"
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

# PMS signal and change feedback

Shows how the PMS plan receives an occlusion signal, initiates change assessment and feeds updated controls and evidence back into risk management.

The arrows show the reasoning path used in this example. Select a diagram node, or use the links below, to open the underlying ontology note.

```mermaid
flowchart TD
  N1["PMS-PLAN-PUMP-001<br/>Post-market surveillance plan"]
  N2["SIGNAL-PUMP-002<br/>Delayed alarm trend"]
  N3["CHG-PUMP-002<br/>Occlusion threshold update"]
  N4["HAZ-PUMP-003<br/>Occluded infusion pathway"]
  N5["RISK-PUMP-005<br/>Occlusion injury risk"]
  N6["RCM-PUMP-004<br/>Pressure monitoring"]
  N7["EVD-PUMP-003<br/>Occlusion validation"]
  N8["PROC-PUMP-002<br/>Risk-management process"]
  N1 -->|collects signal| N2
  N2 -->|triggers| N3
  N2 -->|concerns| N5
  N4 -->|contributes to risk| N5
  N3 -->|updates| N6
  N6 -->|mitigates| N5
  N6 -->|verified by| N7
  N8 -->|governs reassessment| N5
  click N1 "/06-infpump-flowguard-ontology-notes/pms-plan/pms-plan-pump-001-infpump-flowguard-post-market-surveillance-plan" "Open PMS-PLAN-PUMP-001"
  click N2 "/06-infpump-flowguard-ontology-notes/signal/signal-pump-002-delayed-occlusion-alarm-trend" "Open SIGNAL-PUMP-002"
  click N3 "/06-infpump-flowguard-ontology-notes/change/chg-pump-002-occlusion-algorithm-threshold-update" "Open CHG-PUMP-002"
  click N4 "/06-infpump-flowguard-ontology-notes/hazard/haz-pump-003-occluded-infusion-pathway" "Open HAZ-PUMP-003"
  click N5 "/06-infpump-flowguard-ontology-notes/risk/risk-pump-005-clinical-injury-following-occluded-infusion-pathway" "Open RISK-PUMP-005"
  click N6 "/06-infpump-flowguard-ontology-notes/risk-control-measure/rcm-pump-004-occlusion-pressure-monitoring" "Open RCM-PUMP-004"
  click N7 "/06-infpump-flowguard-ontology-notes/verification-evidence/evd-pump-003-occlusion-detection-validation-report" "Open EVD-PUMP-003"
  click N8 "/06-infpump-flowguard-ontology-notes/qms-process/proc-pump-002-infusion-pump-risk-management-process" "Open PROC-PUMP-002"
```

## Linked ontology notes

- [[06-Infpump FlowGuard ontology notes/pms-plan/PMS-PLAN-PUMP-001-infpump-flowguard-post-market-surveillance-plan|PMS-PLAN-PUMP-001 — Post-market surveillance plan]]
- [[06-Infpump FlowGuard ontology notes/signal/SIGNAL-PUMP-002-delayed-occlusion-alarm-trend|SIGNAL-PUMP-002 — Delayed alarm trend]]
- [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-002-occlusion-algorithm-threshold-update|CHG-PUMP-002 — Occlusion threshold update]]
- [[06-Infpump FlowGuard ontology notes/hazard/HAZ-PUMP-003-occluded-infusion-pathway|HAZ-PUMP-003 — Occluded infusion pathway]]
- [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-005-clinical-injury-following-occluded-infusion-pathway|RISK-PUMP-005 — Occlusion injury risk]]
- [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-004-occlusion-pressure-monitoring|RCM-PUMP-004 — Pressure monitoring]]
- [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-003-occlusion-detection-validation-report|EVD-PUMP-003 — Occlusion validation]]
- [[06-Infpump FlowGuard ontology notes/qms-process/PROC-PUMP-002-infusion-pump-risk-management-process|PROC-PUMP-002 — Risk-management process]]

These connections are navigation and reasoning aids. The linked notes and their governed metadata remain the semantic source; the diagram does not create additional regulatory facts.
