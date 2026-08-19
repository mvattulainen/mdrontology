---
{
  "title": "Battery signal to change assessment",
  "aliases": [
    "Ontology note connection — Battery signal to change assessment",
    "03-Ontology notes/connections/05-battery-signal-to-change-assessment",
    "18-ontology-notes/connections/05-battery-signal-to-change-assessment"
  ],
  "created": "2026-08-16",
  "modified": "2026-08-19",
  "tags": [
    "ontology-note/connection-diagram",
    "device/infpump-flowguard"
  ],
  "draft": false
}
---

# Battery signal to change assessment

Shows a post-market battery signal flowing through supplier and component context into a controlled change, its change-impact assessment, a newly drafted compliance-requirement instance and the evidence needed to reassess residual risk.

The arrows reproduce typed relationships in the linked ontology-note metadata. Select a diagram node, or use the links below, to open the underlying ontology note. Border colour indicates the note's current `status`; the deliberately thick borders remain distinguishable when the diagram is scaled.

```mermaid
flowchart TD
  N1["DEVC-PUMP-001<br/>Bedside configuration<br/>status: approved"]
  N2["SUP-PUMP-001<br/>Battery supplier<br/>status: approved"]
  N3["COMP-PUMP-004<br/>Battery pack<br/>status: approved"]
  N4["SIGNAL-PUMP-001<br/>Runtime reduction signal<br/>status: accepted"]
  N5["CHG-PUMP-001<br/>Supplier replacement<br/>status: under-assessment"]
  N6["RISK-PUMP-013<br/>Premature depletion risk<br/>status: accepted"]
  N7["RCM-PUMP-013<br/>State-of-charge estimation<br/>status: implemented"]
  N8["EVD-PUMP-007<br/>Battery endurance validation<br/>status: approved"]
  N9["CRI-PUMP-051<br/>Post-change endurance requirement<br/>status: draft"]
  N10["CIA-PUMP-001<br/>Battery change-impact assessment<br/>status: under-assessment"]
  N2 -->|supplied_component| N3
  N1 -->|includes_component| N3
  N1 -->|has_applicable_requirement| N9
  N4 -->|triggers| N5
  N5 -->|has_impact_assessment| N10
  N5 -->|impacts| N6
  N5 -->|affected_evidence| N8
  N10 -->|concerns| N1
  N10 -->|supported_by| N8
  N7 -->|mitigates| N6
  N7 -->|verified_by| N8
  N8 -->|applies_to_configuration| N1
  classDef draft fill:#ffffff,stroke:#64748b,stroke-width:4px,color:#334155
  classDef approved fill:#ffffff,stroke:#15803d,stroke-width:4px,color:#14532d
  classDef accepted fill:#ffffff,stroke:#2563eb,stroke-width:4px,color:#1e3a8a
  classDef under_assessment fill:#ffffff,stroke:#d97706,stroke-width:4px,color:#78350f
  classDef implemented fill:#ffffff,stroke:#7e22ce,stroke-width:4px,color:#581c87
  class N1,N2,N3,N8 approved
  class N4,N6 accepted
  class N5,N10 under_assessment
  class N7 implemented
  class N9 draft
  subgraph LEGEND["Status border legend"]
    direction LR
    L1["draft"]:::draft
    L2["approved"]:::approved
    L3["accepted"]:::accepted
    L4["under-assessment"]:::under_assessment
    L5["implemented"]:::implemented
  end
  N8 ~~~ L1
  style LEGEND fill:#f8fafc,stroke:#cbd5e1,stroke-width:1px
  click N1 "/06-infpump-flowguard-ontology-notes/device-configuration/devc-pump-001-infpump-flowguard-bedside-configuration-10" "Open DEVC-PUMP-001"
  click N2 "/06-infpump-flowguard-ontology-notes/supplier/sup-pump-001-battery-pack-critical-supplier" "Open SUP-PUMP-001"
  click N3 "/06-infpump-flowguard-ontology-notes/component/comp-pump-004-rechargeable-battery-pack" "Open COMP-PUMP-004"
  click N4 "/06-infpump-flowguard-ontology-notes/signal/signal-pump-001-unexpected-battery-runtime-reduction" "Open SIGNAL-PUMP-001"
  click N5 "/06-infpump-flowguard-ontology-notes/change/chg-pump-001-battery-cell-supplier-replacement" "Open CHG-PUMP-001"
  click N6 "/06-infpump-flowguard-ontology-notes/risk/risk-pump-013-clinical-injury-following-premature-battery-depletion" "Open RISK-PUMP-013"
  click N7 "/06-infpump-flowguard-ontology-notes/risk-control-measure/rcm-pump-013-battery-state-of-charge-estimation" "Open RCM-PUMP-013"
  click N8 "/06-infpump-flowguard-ontology-notes/verification-evidence/evd-pump-007-battery-endurance-validation-report" "Open EVD-PUMP-007"
  click N9 "/06-infpump-flowguard-ontology-notes/compliance-requirement-instance/cri-pump-051-battery-endurance-after-cell-supplier-change" "Open CRI-PUMP-051"
  click N10 "/06-infpump-flowguard-ontology-notes/change-impact-assessment/cia-pump-001-battery-cell-supplier-change-impact-assessment" "Open CIA-PUMP-001"
```

## Lifecycle reading

The statuses form a realistic technical-file snapshot rather than one universal state machine. The configuration, critical supplier, battery component and existing endurance evidence are `approved`; the post-market signal has been `accepted` as a confirmed input; the related change and impact assessment remain `under-assessment`; the post-change endurance requirement is still `draft`; the existing state-of-charge control is `implemented`; and the currently documented residual risk is `accepted`. Before the change can close, the draft requirement must be approved, the assessment completed and the evidence reconfirmed so the risk acceptance remains valid for the changed configuration.

## Linked ontology notes

- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Bedside configuration]]
- [[06-Infpump FlowGuard ontology notes/supplier/SUP-PUMP-001-battery-pack-critical-supplier|SUP-PUMP-001 — Battery supplier]]
- [[06-Infpump FlowGuard ontology notes/component/COMP-PUMP-004-rechargeable-battery-pack|COMP-PUMP-004 — Battery pack]]
- [[06-Infpump FlowGuard ontology notes/signal/SIGNAL-PUMP-001-unexpected-battery-runtime-reduction|SIGNAL-PUMP-001 — Runtime reduction signal]]
- [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-001-battery-cell-supplier-replacement|CHG-PUMP-001 — Supplier replacement]]
- [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-013-clinical-injury-following-premature-battery-depletion|RISK-PUMP-013 — Premature depletion risk]]
- [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-013-battery-state-of-charge-estimation|RCM-PUMP-013 — State-of-charge estimation]]
- [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-007-battery-endurance-validation-report|EVD-PUMP-007 — Battery endurance validation]]
- [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-051-battery-endurance-after-cell-supplier-change|CRI-PUMP-051 — Battery endurance after cell-supplier change]]
- [[06-Infpump FlowGuard ontology notes/change-impact-assessment/CIA-PUMP-001-battery-cell-supplier-change-impact-assessment|CIA-PUMP-001 — Battery cell-supplier change impact assessment]]

These connections are navigation and reasoning aids. The linked notes and their governed metadata remain the semantic source; the diagram does not create additional regulatory facts.
