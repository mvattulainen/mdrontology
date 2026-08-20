---
{
  "title": "Battery signal to change assessment",
  "aliases": [
    "Ontology note connection — Battery signal to change assessment",
    "03-Ontology notes/connections/05-battery-signal-to-change-assessment"
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

Separates the approved battery baseline from the accepted signal, the change assessment it triggers, and the new evidence type required before release.

Every arrow reproduces a typed relation asserted in the linked ontology notes. Select a diagram node, or use the links below, to inspect the underlying semantic record.

```mermaid
%%{init: {"flowchart": {"curve": "linear"}}}%%
flowchart TD
  N1["RCM-PUMP-013<br/>State-of-charge estimation<br/>implementation: implemented"]
  N2["EVD-PUMP-007<br/>Battery endurance validation<br/>evidence: approved baseline"]
  N3["RISK-PUMP-013<br/>Premature depletion risk<br/>baseline reference"]
  N4["SIGNAL-PUMP-001<br/>Runtime reduction signal<br/>signal: accepted"]
  N5["CHG-PUMP-001<br/>Supplier replacement<br/>change: under assessment"]
  N6["CIA-PUMP-001<br/>Change-impact assessment<br/>assessment: under assessment"]
  N7["CRI-PUMP-051<br/>Post-change endurance requirement<br/>requirement: draft"]
  N8["EVTYPE-PUMP-001<br/>Required post-change evidence type"]
  N9["RISK-PUMP-013<br/>Premature depletion risk<br/>change-impact target"]
  N10["EVD-PUMP-007<br/>Approved evidence<br/>change-impact target"]
  N1 -->|mitigates| N3
  N1 -->|verified_by| N2
  N4 -->|triggers| N5
  N5 -->|impacts| N9
  N5 -->|impacts| N10
  N5 -->|has_impact_assessment| N6
  N7 -->|requires_evidence| N8
  click N1 "/06-infpump-flowguard-ontology-notes/risk-control-measure/rcm-pump-013-battery-state-of-charge-estimation" "Open RCM-PUMP-013"
  click N2 "/06-infpump-flowguard-ontology-notes/verification-evidence/evd-pump-007-battery-endurance-validation-report" "Open EVD-PUMP-007"
  click N3 "/06-infpump-flowguard-ontology-notes/risk/risk-pump-013-clinical-injury-following-premature-battery-depletion" "Open RISK-PUMP-013"
  click N4 "/06-infpump-flowguard-ontology-notes/signal/signal-pump-001-unexpected-battery-runtime-reduction" "Open SIGNAL-PUMP-001"
  click N5 "/06-infpump-flowguard-ontology-notes/change/chg-pump-001-battery-cell-supplier-replacement" "Open CHG-PUMP-001"
  click N6 "/06-infpump-flowguard-ontology-notes/change-impact-assessment/cia-pump-001-battery-cell-supplier-change-impact-assessment" "Open CIA-PUMP-001"
  click N7 "/06-infpump-flowguard-ontology-notes/compliance-requirement-instance/cri-pump-051-battery-endurance-after-cell-supplier-change" "Open CRI-PUMP-051"
  click N8 "/01-ontology-instances/08-technical-documentation/evidence-types/evtype-pump-001-post-change-battery-endurance-verification" "Open EVTYPE-PUMP-001"
  click N9 "/06-infpump-flowguard-ontology-notes/risk/risk-pump-013-clinical-injury-following-premature-battery-depletion" "Open RISK-PUMP-013"
  click N10 "/06-infpump-flowguard-ontology-notes/verification-evidence/evd-pump-007-battery-endurance-validation-report" "Open EVD-PUMP-007"
```

## Lifecycle reading

This is a regulatory lifecycle view, not a universal status state machine. The implemented control and approved evidence describe the released baseline, while the accepted post-market signal triggers a change that remains under assessment. The draft compliance requirement identifies the evidence type needed for the changed configuration; it is deliberately not shown as satisfied by planned evidence. Release remains blocked until actual evidence is generated and approved, the impact assessment is completed, and the affected risk is reassessed and accepted.

## Linked ontology notes

- [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-013-battery-state-of-charge-estimation|RCM-PUMP-013 — State-of-charge estimation<br/>implementation: implemented]]
- [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-007-battery-endurance-validation-report|EVD-PUMP-007 — Battery endurance validation<br/>evidence: approved baseline]]
- [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-013-clinical-injury-following-premature-battery-depletion|RISK-PUMP-013 — Premature depletion risk<br/>acceptance: baseline accepted<br/>reassessment: required]]
- [[06-Infpump FlowGuard ontology notes/signal/SIGNAL-PUMP-001-unexpected-battery-runtime-reduction|SIGNAL-PUMP-001 — Runtime reduction signal<br/>signal: accepted]]
- [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-001-battery-cell-supplier-replacement|CHG-PUMP-001 — Supplier replacement<br/>change: under assessment]]
- [[06-Infpump FlowGuard ontology notes/change-impact-assessment/CIA-PUMP-001-battery-cell-supplier-change-impact-assessment|CIA-PUMP-001 — Change-impact assessment<br/>assessment: under assessment]]
- [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-051-battery-endurance-after-cell-supplier-change|CRI-PUMP-051 — Post-change endurance requirement<br/>requirement: draft<br/>compliance: planned]]
- [[01-Ontology instances/08-technical-documentation/evidence-types/EVTYPE-PUMP-001-post-change-battery-endurance-verification|EVTYPE-PUMP-001 — Required post-change evidence type]]

These connections are graph projections and navigation aids. The linked notes and their governed metadata remain the semantic source; the diagram does not create additional regulatory facts.
