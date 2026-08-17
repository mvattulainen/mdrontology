---
{
  "title": "Occlusion-detection safety case",
  "aliases": [
    "Ontology note connection — Occlusion-detection safety case",
    "03-Ontology notes/connections/03-occlusion-detection-safety-case",
    "18-ontology-notes/connections/03-occlusion-detection-safety-case"
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

# Occlusion-detection safety case

Shows how an occlusion hazard is connected to its clinical claim, device-specific requirement, controls and validation evidence.

The arrows show the reasoning path used in this example. Select a diagram node, or use the links below, to open the underlying ontology note.

```mermaid
flowchart TD
  N1["HAZ-PUMP-003<br/>Occluded infusion pathway"]
  N2["HS-PUMP-003<br/>Undetected pressure rise"]
  N3["RISK-PUMP-005<br/>Occlusion injury risk"]
  N4["RCM-PUMP-004<br/>Pressure monitoring"]
  N5["RCM-PUMP-005<br/>Alarm escalation"]
  N6["EVD-PUMP-003<br/>Occlusion validation"]
  N7["CRI-PUMP-017<br/>Occlusion-detection requirement"]
  N8["CLM-PUMP-005<br/>Timely detection claim"]
  N1 -->|creates situation| N2
  N2 -->|contributes to risk| N3
  N4 -->|mitigates| N3
  N5 -->|mitigates| N3
  N4 -->|verified by| N6
  N5 -->|verified by| N6
  N7 -->|satisfied by| N6
  N6 -->|supports| N8
  click N1 "/06-infpump-flowguard-ontology-notes/hazard/haz-pump-003-occluded-infusion-pathway" "Open HAZ-PUMP-003"
  click N2 "/06-infpump-flowguard-ontology-notes/hazardous-situation/hs-pump-003-pressure-rises-while-downstream-occlusion-is-undetected" "Open HS-PUMP-003"
  click N3 "/06-infpump-flowguard-ontology-notes/risk/risk-pump-005-clinical-injury-following-occluded-infusion-pathway" "Open RISK-PUMP-005"
  click N4 "/06-infpump-flowguard-ontology-notes/risk-control-measure/rcm-pump-004-occlusion-pressure-monitoring" "Open RCM-PUMP-004"
  click N5 "/06-infpump-flowguard-ontology-notes/risk-control-measure/rcm-pump-005-occlusion-alarm-escalation" "Open RCM-PUMP-005"
  click N6 "/06-infpump-flowguard-ontology-notes/verification-evidence/evd-pump-003-occlusion-detection-validation-report" "Open EVD-PUMP-003"
  click N7 "/06-infpump-flowguard-ontology-notes/compliance-requirement-instance/cri-pump-017-occlusion-detection" "Open CRI-PUMP-017"
  click N8 "/06-infpump-flowguard-ontology-notes/clinical-claim/clm-pump-005-detects-downstream-occlusion-before-prolonged-therapy-interruption" "Open CLM-PUMP-005"
```

## Linked ontology notes

- [[06-Infpump FlowGuard ontology notes/hazard/HAZ-PUMP-003-occluded-infusion-pathway|HAZ-PUMP-003 — Occluded infusion pathway]]
- [[06-Infpump FlowGuard ontology notes/hazardous-situation/HS-PUMP-003-pressure-rises-while-downstream-occlusion-is-undetected|HS-PUMP-003 — Undetected pressure rise]]
- [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-005-clinical-injury-following-occluded-infusion-pathway|RISK-PUMP-005 — Occlusion injury risk]]
- [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-004-occlusion-pressure-monitoring|RCM-PUMP-004 — Pressure monitoring]]
- [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-005-occlusion-alarm-escalation|RCM-PUMP-005 — Alarm escalation]]
- [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-003-occlusion-detection-validation-report|EVD-PUMP-003 — Occlusion validation]]
- [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-017-occlusion-detection|CRI-PUMP-017 — Occlusion-detection requirement]]
- [[06-Infpump FlowGuard ontology notes/clinical-claim/CLM-PUMP-005-detects-downstream-occlusion-before-prolonged-therapy-interruption|CLM-PUMP-005 — Timely detection claim]]

These connections are navigation and reasoning aids. The linked notes and their governed metadata remain the semantic source; the diagram does not create additional regulatory facts.
