---
{
  "title": "Cybersecurity control and feedback loop",
  "aliases": [
    "Ontology note connection — Cybersecurity control and feedback loop",
    "03-Ontology notes/connections/06-cybersecurity-control-and-feedback-loop"
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

Every arrow reproduces a typed relation asserted in the linked ontology notes. Select a diagram node, or use the links below, to inspect the underlying semantic record.

```mermaid
%%{init: {"flowchart": {"curve": "linear"}}}%%
flowchart TD
  N1["SW-PUMP-001<br/>Control software"]
  N2["HAZ-PUMP-012<br/>Cybersecurity compromise"]
  N3["HS-PUMP-012<br/>Unauthorised configuration change"]
  N4["HARM-PUMP-010<br/>Serious deterioration or death"]
  N5["RISK-PUMP-023<br/>Cybersecurity injury risk"]
  N6["RCM-PUMP-025<br/>Role-based access"]
  N7["RCM-PUMP-026<br/>Signed updates"]
  N8["EVD-PUMP-012<br/>Penetration-test report"]
  N9["SIGNAL-PUMP-007<br/>Unauthorised login signal"]
  N10["CHG-PUMP-007<br/>Operating-system patch"]
  N2 -->|can_lead_to| N3
  N3 -->|may_cause| N4
  N6 -->|mitigates| N5
  N7 -->|mitigates| N5
  N6 -->|verified_by| N8
  N7 -->|verified_by| N8
  N9 -->|triggers| N10
  N10 -->|impacts| N5
  N10 -->|impacts| N1
  N10 -->|impacts| N8
  click N1 "/06-infpump-flowguard-ontology-notes/software-version/sw-pump-001-infpump-flowguard-control-software-420" "Open SW-PUMP-001"
  click N2 "/06-infpump-flowguard-ontology-notes/hazard/haz-pump-012-cybersecurity-compromise" "Open HAZ-PUMP-012"
  click N3 "/06-infpump-flowguard-ontology-notes/hazardous-situation/hs-pump-012-unauthorised-actor-changes-therapy-or-device-configuration" "Open HS-PUMP-012"
  click N4 "/06-infpump-flowguard-ontology-notes/harm/harm-pump-010-serious-deterioration-or-death" "Open HARM-PUMP-010"
  click N5 "/06-infpump-flowguard-ontology-notes/risk/risk-pump-023-clinical-injury-following-cybersecurity-compromise" "Open RISK-PUMP-023"
  click N6 "/06-infpump-flowguard-ontology-notes/risk-control-measure/rcm-pump-025-role-based-access-control" "Open RCM-PUMP-025"
  click N7 "/06-infpump-flowguard-ontology-notes/risk-control-measure/rcm-pump-026-signed-software-update-packages" "Open RCM-PUMP-026"
  click N8 "/06-infpump-flowguard-ontology-notes/verification-evidence/evd-pump-012-cybersecurity-penetration-test-report" "Open EVD-PUMP-012"
  click N9 "/06-infpump-flowguard-ontology-notes/signal/signal-pump-007-repeated-unauthorised-login-attempts" "Open SIGNAL-PUMP-007"
  click N10 "/06-infpump-flowguard-ontology-notes/change/chg-pump-007-cybersecurity-operating-system-patch" "Open CHG-PUMP-007"
```

## Linked ontology notes

- [[06-Infpump FlowGuard ontology notes/software-version/SW-PUMP-001-infpump-flowguard-control-software-420|SW-PUMP-001 — Control software]]
- [[06-Infpump FlowGuard ontology notes/hazard/HAZ-PUMP-012-cybersecurity-compromise|HAZ-PUMP-012 — Cybersecurity compromise]]
- [[06-Infpump FlowGuard ontology notes/hazardous-situation/HS-PUMP-012-unauthorised-actor-changes-therapy-or-device-configuration|HS-PUMP-012 — Unauthorised configuration change]]
- [[06-Infpump FlowGuard ontology notes/harm/HARM-PUMP-010-serious-deterioration-or-death|HARM-PUMP-010 — Serious deterioration or death]]
- [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-023-clinical-injury-following-cybersecurity-compromise|RISK-PUMP-023 — Cybersecurity injury risk]]
- [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-025-role-based-access-control|RCM-PUMP-025 — Role-based access]]
- [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-026-signed-software-update-packages|RCM-PUMP-026 — Signed updates]]
- [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-012-cybersecurity-penetration-test-report|EVD-PUMP-012 — Penetration-test report]]
- [[06-Infpump FlowGuard ontology notes/signal/SIGNAL-PUMP-007-repeated-unauthorised-login-attempts|SIGNAL-PUMP-007 — Unauthorised login signal]]
- [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-007-cybersecurity-operating-system-patch|CHG-PUMP-007 — Operating-system patch]]

These connections are graph projections and navigation aids. The linked notes and their governed metadata remain the semantic source; the diagram does not create additional regulatory facts.
