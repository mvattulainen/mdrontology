---
{
  "title": "Air-in-line protection chain",
  "aliases": [
    "Ontology note connection — Air-in-line protection chain",
    "03-Ontology notes/connections/04-air-in-line-protection-chain"
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

# Air-in-line protection chain

Connects the air-in-line hazard to patient exposure, harm, device-specific compliance, complementary controls and their validation evidence.

Every arrow reproduces a typed relation asserted in the linked ontology notes. Select a diagram node, or use the links below, to inspect the underlying semantic record.

```mermaid
%%{init: {"flowchart": {"curve": "linear"}}}%%
flowchart TD
  N1["HAZ-PUMP-004<br/>Air in infusion line"]
  N2["HS-PUMP-004<br/>Air reaches patient line"]
  N3["RISK-PUMP-007<br/>Air-introduction injury risk"]
  N4["HARM-PUMP-003<br/>Air embolism"]
  N5["RCM-PUMP-006<br/>Dual air sensors"]
  N6["RCM-PUMP-007<br/>Automatic stop"]
  N7["EVD-PUMP-004<br/>Detector validation"]
  N8["CRI-PUMP-018<br/>Air-detection requirement"]
  N1 -->|can_lead_to| N2
  N2 -->|may_cause| N4
  N5 -->|mitigates| N3
  N6 -->|mitigates| N3
  N5 -->|verified_by| N7
  N6 -->|verified_by| N7
  N8 -->|satisfied_by| N7
  click N1 "/06-infpump-flowguard-ontology-notes/hazard/haz-pump-004-air-introduced-into-infusion-line" "Open HAZ-PUMP-004"
  click N2 "/06-infpump-flowguard-ontology-notes/hazardous-situation/hs-pump-004-air-reaches-the-patient-line" "Open HS-PUMP-004"
  click N3 "/06-infpump-flowguard-ontology-notes/risk/risk-pump-007-clinical-injury-following-air-introduced-into-infusion-line" "Open RISK-PUMP-007"
  click N4 "/06-infpump-flowguard-ontology-notes/harm/harm-pump-003-air-embolism" "Open HARM-PUMP-003"
  click N5 "/06-infpump-flowguard-ontology-notes/risk-control-measure/rcm-pump-006-dual-air-in-line-sensors" "Open RCM-PUMP-006"
  click N6 "/06-infpump-flowguard-ontology-notes/risk-control-measure/rcm-pump-007-air-in-line-automatic-stop" "Open RCM-PUMP-007"
  click N7 "/06-infpump-flowguard-ontology-notes/verification-evidence/evd-pump-004-air-in-line-detector-validation-report" "Open EVD-PUMP-004"
  click N8 "/06-infpump-flowguard-ontology-notes/compliance-requirement-instance/cri-pump-018-air-in-line-detection" "Open CRI-PUMP-018"
```

## Linked ontology notes

- [[06-Infpump FlowGuard ontology notes/hazard/HAZ-PUMP-004-air-introduced-into-infusion-line|HAZ-PUMP-004 — Air in infusion line]]
- [[06-Infpump FlowGuard ontology notes/hazardous-situation/HS-PUMP-004-air-reaches-the-patient-line|HS-PUMP-004 — Air reaches patient line]]
- [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-007-clinical-injury-following-air-introduced-into-infusion-line|RISK-PUMP-007 — Air-introduction injury risk]]
- [[06-Infpump FlowGuard ontology notes/harm/HARM-PUMP-003-air-embolism|HARM-PUMP-003 — Air embolism]]
- [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-006-dual-air-in-line-sensors|RCM-PUMP-006 — Dual air sensors]]
- [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-007-air-in-line-automatic-stop|RCM-PUMP-007 — Automatic stop]]
- [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-004-air-in-line-detector-validation-report|EVD-PUMP-004 — Detector validation]]
- [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-018-air-in-line-detection|CRI-PUMP-018 — Air-detection requirement]]

These connections are graph projections and navigation aids. The linked notes and their governed metadata remain the semantic source; the diagram does not create additional regulatory facts.
