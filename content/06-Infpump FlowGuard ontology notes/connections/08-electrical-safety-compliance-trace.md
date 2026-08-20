---
{
  "title": "Electrical-safety compliance trace",
  "aliases": [
    "Ontology note connection — Electrical-safety compliance trace",
    "03-Ontology notes/connections/08-electrical-safety-compliance-trace"
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

# Electrical-safety compliance trace

Connects the current device configuration to its electrical-safety requirement, hazard, risk, isolation control, test evidence, certificate and technical-documentation set.

Every arrow reproduces a typed relation asserted in the linked ontology notes. Select a diagram node, or use the links below, to inspect the underlying semantic record.

```mermaid
%%{init: {"flowchart": {"curve": "linear"}}}%%
flowchart TD
  N1["DEVC-PUMP-003<br/>Paediatric configuration"]
  N2["CRI-PUMP-022<br/>Electrical-safety requirement"]
  N3["HAZ-PUMP-008<br/>Electrical isolation failure"]
  N4["RISK-PUMP-015<br/>Electrical injury risk"]
  N5["RCM-PUMP-016<br/>Medical-grade isolation"]
  N6["EVD-PUMP-008<br/>Electrical-safety test report"]
  N7["CERT-PUMP-003<br/>CB test certificate"]
  N8["TD-PUMP-001<br/>MDR technical-documentation set"]
  N1 -->|has_applicable_requirement| N2
  N1 -->|has_hazard| N3
  N1 -->|has_risk| N4
  N1 -->|has_certificate| N7
  N5 -->|mitigates| N4
  N5 -->|verified_by| N6
  N2 -->|satisfied_by| N6
  N6 -->|supports_certificate| N7
  N8 -->|includes| N6
  click N1 "/06-infpump-flowguard-ontology-notes/device-configuration/devc-pump-003-infpump-flowguard-paediatric-configuration-10" "Open DEVC-PUMP-003"
  click N2 "/06-infpump-flowguard-ontology-notes/compliance-requirement-instance/cri-pump-022-electrical-safety" "Open CRI-PUMP-022"
  click N3 "/06-infpump-flowguard-ontology-notes/hazard/haz-pump-008-electrical-isolation-failure" "Open HAZ-PUMP-008"
  click N4 "/06-infpump-flowguard-ontology-notes/risk/risk-pump-015-clinical-injury-following-electrical-isolation-failure" "Open RISK-PUMP-015"
  click N5 "/06-infpump-flowguard-ontology-notes/risk-control-measure/rcm-pump-016-medical-grade-isolation-barrier" "Open RCM-PUMP-016"
  click N6 "/06-infpump-flowguard-ontology-notes/verification-evidence/evd-pump-008-electrical-safety-test-report" "Open EVD-PUMP-008"
  click N7 "/06-infpump-flowguard-ontology-notes/certificate/cert-pump-003-electrical-safety-cb-test-certificate" "Open CERT-PUMP-003"
  click N8 "/06-infpump-flowguard-ontology-notes/technical-documentation-set/td-pump-001-infpump-flowguard-mdr-technical-documentation-set" "Open TD-PUMP-001"
```

## Linked ontology notes

- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003 — Paediatric configuration]]
- [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-022-electrical-safety|CRI-PUMP-022 — Electrical-safety requirement]]
- [[06-Infpump FlowGuard ontology notes/hazard/HAZ-PUMP-008-electrical-isolation-failure|HAZ-PUMP-008 — Electrical isolation failure]]
- [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-015-clinical-injury-following-electrical-isolation-failure|RISK-PUMP-015 — Electrical injury risk]]
- [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-016-medical-grade-isolation-barrier|RCM-PUMP-016 — Medical-grade isolation]]
- [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-008-electrical-safety-test-report|EVD-PUMP-008 — Electrical-safety test report]]
- [[06-Infpump FlowGuard ontology notes/certificate/CERT-PUMP-003-electrical-safety-cb-test-certificate|CERT-PUMP-003 — CB test certificate]]
- [[06-Infpump FlowGuard ontology notes/technical-documentation-set/TD-PUMP-001-infpump-flowguard-mdr-technical-documentation-set|TD-PUMP-001 — MDR technical-documentation set]]

These connections are graph projections and navigation aids. The linked notes and their governed metadata remain the semantic source; the diagram does not create additional regulatory facts.
