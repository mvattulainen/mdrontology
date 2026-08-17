---
{
  "title": "Cybersecurity control and feedback loop",
  "aliases": [
    "Ontology note connection — Cybersecurity control and feedback loop",
    "03-Ontology notes/connections/06-cybersecurity-control-and-feedback-loop",
    "18-ontology-notes/connections/06-cybersecurity-control-and-feedback-loop"
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

# Cybersecurity control and feedback loop

Connects software, cybersecurity hazard and risk, preventive controls, penetration evidence, post-market signal and security-patch change.

The arrows show the reasoning path used in this example. Select a diagram node, or use the links below, to open the underlying ontology note.

```mermaid
flowchart TD
  N1["SW-PUMP-001<br/>Control software"]
  N2["HAZ-PUMP-012<br/>Cybersecurity compromise"]
  N3["HS-PUMP-012<br/>Unauthorised configuration change"]
  N4["RISK-PUMP-023<br/>Cybersecurity injury risk"]
  N5["RCM-PUMP-025<br/>Role-based access"]
  N6["RCM-PUMP-026<br/>Signed updates"]
  N7["EVD-PUMP-012<br/>Penetration-test report"]
  N8["SIGNAL-PUMP-007<br/>Unauthorised login signal"]
  N9["CHG-PUMP-007<br/>Operating-system patch"]
  N1 -->|exposed to| N2
  N2 -->|creates situation| N3
  N3 -->|contributes to risk| N4
  N5 -->|mitigates| N4
  N6 -->|mitigates| N4
  N5 -->|verified by| N7
  N8 -->|concerns| N4
  N8 -->|triggers| N9
  N9 -->|updates| N1
  click N1 "/06-infpump-flowguard-ontology-notes/software-version/sw-pump-001-infpump-flowguard-control-software-420" "Open SW-PUMP-001"
  click N2 "/06-infpump-flowguard-ontology-notes/hazard/haz-pump-012-cybersecurity-compromise" "Open HAZ-PUMP-012"
  click N3 "/06-infpump-flowguard-ontology-notes/hazardous-situation/hs-pump-012-unauthorised-actor-changes-therapy-or-device-configuration" "Open HS-PUMP-012"
  click N4 "/06-infpump-flowguard-ontology-notes/risk/risk-pump-023-clinical-injury-following-cybersecurity-compromise" "Open RISK-PUMP-023"
  click N5 "/06-infpump-flowguard-ontology-notes/risk-control-measure/rcm-pump-025-role-based-access-control" "Open RCM-PUMP-025"
  click N6 "/06-infpump-flowguard-ontology-notes/risk-control-measure/rcm-pump-026-signed-software-update-packages" "Open RCM-PUMP-026"
  click N7 "/06-infpump-flowguard-ontology-notes/verification-evidence/evd-pump-012-cybersecurity-penetration-test-report" "Open EVD-PUMP-012"
  click N8 "/06-infpump-flowguard-ontology-notes/signal/signal-pump-007-repeated-unauthorised-login-attempts" "Open SIGNAL-PUMP-007"
  click N9 "/06-infpump-flowguard-ontology-notes/change/chg-pump-007-cybersecurity-operating-system-patch" "Open CHG-PUMP-007"
```

## Linked ontology notes

- [[06-Infpump FlowGuard ontology notes/software-version/SW-PUMP-001-infpump-flowguard-control-software-420|SW-PUMP-001 — Control software]]
- [[06-Infpump FlowGuard ontology notes/hazard/HAZ-PUMP-012-cybersecurity-compromise|HAZ-PUMP-012 — Cybersecurity compromise]]
- [[06-Infpump FlowGuard ontology notes/hazardous-situation/HS-PUMP-012-unauthorised-actor-changes-therapy-or-device-configuration|HS-PUMP-012 — Unauthorised configuration change]]
- [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-023-clinical-injury-following-cybersecurity-compromise|RISK-PUMP-023 — Cybersecurity injury risk]]
- [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-025-role-based-access-control|RCM-PUMP-025 — Role-based access]]
- [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-026-signed-software-update-packages|RCM-PUMP-026 — Signed updates]]
- [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-012-cybersecurity-penetration-test-report|EVD-PUMP-012 — Penetration-test report]]
- [[06-Infpump FlowGuard ontology notes/signal/SIGNAL-PUMP-007-repeated-unauthorised-login-attempts|SIGNAL-PUMP-007 — Unauthorised login signal]]
- [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-007-cybersecurity-operating-system-patch|CHG-PUMP-007 — Operating-system patch]]

These connections are navigation and reasoning aids. The linked notes and their governed metadata remain the semantic source; the diagram does not create additional regulatory facts.
