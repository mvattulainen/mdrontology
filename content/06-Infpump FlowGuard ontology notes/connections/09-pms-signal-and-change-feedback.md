---
{
  "title": "PMS signal and change feedback",
  "aliases": [
    "Ontology note connection — PMS signal and change feedback",
    "03-Ontology notes/connections/09-pms-signal-and-change-feedback"
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

Every arrow reproduces a typed relation asserted in the linked ontology notes. Select a diagram node, or use the links below, to inspect the underlying semantic record.

```mermaid
%%{init: {"flowchart": {"curve": "linear"}}}%%
flowchart TD
  N1["DEVC-PUMP-002<br/>Transport configuration"]
  N2["PMS-PLAN-PUMP-001<br/>Post-market surveillance plan"]
  N3["SIGNAL-PUMP-002<br/>Delayed alarm trend"]
  N4["CHG-PUMP-002<br/>Occlusion threshold update"]
  N5["HAZ-PUMP-003<br/>Occluded infusion pathway"]
  N6["RISK-PUMP-005<br/>Occlusion injury risk"]
  N7["RCM-PUMP-004<br/>Pressure monitoring"]
  N8["EVD-PUMP-003<br/>Occlusion validation"]
  N9["HS-PUMP-003<br/>Undetected pressure rise"]
  N10["HARM-PUMP-002<br/>Underdose or loss of therapy"]
  N1 -->|covered_by_pms_plan| N2
  N3 -->|triggers| N4
  N4 -->|impacts| N6
  N4 -->|impacts| N8
  N7 -->|mitigates| N6
  N7 -->|verified_by| N8
  N5 -->|can_lead_to| N9
  N9 -->|may_cause| N10
  click N1 "/06-infpump-flowguard-ontology-notes/device-configuration/devc-pump-002-infpump-flowguard-transport-configuration-10" "Open DEVC-PUMP-002"
  click N2 "/06-infpump-flowguard-ontology-notes/pms-plan/pms-plan-pump-001-infpump-flowguard-post-market-surveillance-plan" "Open PMS-PLAN-PUMP-001"
  click N3 "/06-infpump-flowguard-ontology-notes/signal/signal-pump-002-delayed-occlusion-alarm-trend" "Open SIGNAL-PUMP-002"
  click N4 "/06-infpump-flowguard-ontology-notes/change/chg-pump-002-occlusion-algorithm-threshold-update" "Open CHG-PUMP-002"
  click N5 "/06-infpump-flowguard-ontology-notes/hazard/haz-pump-003-occluded-infusion-pathway" "Open HAZ-PUMP-003"
  click N6 "/06-infpump-flowguard-ontology-notes/risk/risk-pump-005-clinical-injury-following-occluded-infusion-pathway" "Open RISK-PUMP-005"
  click N7 "/06-infpump-flowguard-ontology-notes/risk-control-measure/rcm-pump-004-occlusion-pressure-monitoring" "Open RCM-PUMP-004"
  click N8 "/06-infpump-flowguard-ontology-notes/verification-evidence/evd-pump-003-occlusion-detection-validation-report" "Open EVD-PUMP-003"
  click N9 "/06-infpump-flowguard-ontology-notes/hazardous-situation/hs-pump-003-pressure-rises-while-downstream-occlusion-is-undetected" "Open HS-PUMP-003"
  click N10 "/06-infpump-flowguard-ontology-notes/harm/harm-pump-002-underdose-or-loss-of-therapy" "Open HARM-PUMP-002"
```

## Linked ontology notes

- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002 — Transport configuration]]
- [[06-Infpump FlowGuard ontology notes/pms-plan/PMS-PLAN-PUMP-001-infpump-flowguard-post-market-surveillance-plan|PMS-PLAN-PUMP-001 — Post-market surveillance plan]]
- [[06-Infpump FlowGuard ontology notes/signal/SIGNAL-PUMP-002-delayed-occlusion-alarm-trend|SIGNAL-PUMP-002 — Delayed alarm trend]]
- [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-002-occlusion-algorithm-threshold-update|CHG-PUMP-002 — Occlusion threshold update]]
- [[06-Infpump FlowGuard ontology notes/hazard/HAZ-PUMP-003-occluded-infusion-pathway|HAZ-PUMP-003 — Occluded infusion pathway]]
- [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-005-clinical-injury-following-occluded-infusion-pathway|RISK-PUMP-005 — Occlusion injury risk]]
- [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-004-occlusion-pressure-monitoring|RCM-PUMP-004 — Pressure monitoring]]
- [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-003-occlusion-detection-validation-report|EVD-PUMP-003 — Occlusion validation]]
- [[06-Infpump FlowGuard ontology notes/hazardous-situation/HS-PUMP-003-pressure-rises-while-downstream-occlusion-is-undetected|HS-PUMP-003 — Undetected pressure rise]]
- [[06-Infpump FlowGuard ontology notes/harm/HARM-PUMP-002-underdose-or-loss-of-therapy|HARM-PUMP-002 — Underdose or loss of therapy]]

These connections are graph projections and navigation aids. The linked notes and their governed metadata remain the semantic source; the diagram does not create additional regulatory facts.
