---
{
  "id": "UC-ASSESS-001",
  "type": "meta-page",
  "title": "Use-case impact assessment",
  "aliases": [
    "UC-ASSESS-001",
    "17-use-cases/UC-ASSESS-001-use-case-impact-assessment",
    "06-Use case demonstrations/UC-ASSESS-001-use-case-impact-assessment"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "use-cases",
    "assessment"
  ],
  "draft": false,
  "source_document": "eu-mdr-manufacturer-ontology-use-cases-1-19.md",
  "selected_use_cases": [
    2,
    3,
    5,
    8,
    18
  ]
}
---

# Use-case impact assessment

This assessment compares all 19 use cases in `eu-mdr-manufacturer-ontology-use-cases-1-19.md`. Each criterion is scored from 1 (low) to 5 (high): manufacturer impact, regulatory or safety criticality, cross-domain leverage, and how convincingly the current executable seed can demonstrate it.

## Result

The five selected cases are **UC2, UC3, UC5, UC8 and UC18**. They form a coherent lifecycle story: identify a gap, block an unsafe or incomplete release, evaluate a change, feed post-market learning back into controlled action, and deliver the result in a grounded answer packet.

| Use case | Manufacturer impact | Regulatory / safety | Cross-domain leverage | Demonstrability | Total | Decision |
|---|---:|---:|---:|---:|---:|---|
| UC1 Device-specific regulatory decision support | 5 | 5 | 4 | 4 | 18 | Embedded foundation |
| UC2 Regulatory compliance gap assessment | 5 | 5 | 5 | 5 | 20 | **Selected** |
| UC3 Market-release readiness | 5 | 5 | 5 | 5 | 20 | **Selected** |
| UC4 Technical-documentation traceability | 4 | 4 | 4 | 5 | 17 | Strong follow-on |
| UC5 Change-impact analysis | 5 | 5 | 5 | 5 | 20 | **Selected** |
| UC6 Risk-management traceability | 5 | 5 | 4 | 4 | 18 | Strong follow-on |
| UC7 Clinical-evidence sufficiency | 5 | 5 | 4 | 3 | 17 | Needs richer evidence corpus |
| UC8 PMS and vigilance closed loop | 5 | 5 | 5 | 4 | 19 | **Selected** |
| UC9 PSUR and recurring-obligation scheduling | 4 | 4 | 4 | 4 | 16 | Demonstrated inside UC8 |
| UC10 Audit and notified-body support | 4 | 4 | 4 | 3 | 15 | Needs audit-request scenarios |
| UC11 Regulatory-source impact analysis | 4 | 4 | 5 | 2 | 15 | Needs source-version deltas |
| UC12 Portfolio-level compliance oversight | 4 | 4 | 5 | 2 | 15 | Needs multiple device families |
| UC13 Responsibility and accountability mapping | 4 | 4 | 3 | 3 | 14 | Useful supporting view |
| UC14 Supplier-control impact | 4 | 4 | 4 | 2 | 14 | Needs supplier-event data |
| UC15 UDI and EUDAMED readiness | 4 | 4 | 4 | 2 | 14 | Needs registration-state data |
| UC16 Role-based training and onboarding | 3 | 2 | 3 | 5 | 13 | Delivery use case |
| UC17 Regulatory onboarding for new team members | 3 | 2 | 4 | 4 | 13 | Delivery use case |
| UC18 Grounded LLM regulatory assistant | 5 | 5 | 5 | 5 | 20 | **Selected** |
| UC19 Explainable AI for regulatory decisions | 5 | 5 | 5 | 4 | 19 | Embedded in UC18 |

## Selection rationale

- **UC2** converts traceability into actionable work by finding unmet constraints and the exact missing relation.
- **UC3** has immediate business and patient-safety impact because it prevents release when prerequisites are incomplete.
- **UC5** demonstrates ontology-wide propagation across software, risk, clinical evidence and conformity decisions.
- **UC8** closes the lifecycle loop from market data back to risk, change and reporting obligations.
- **UC18** makes the graph consumable while preserving provenance, missing facts and human-review requirements.

UC1 is the common decision-support foundation used throughout. UC19 is treated as a mandatory quality property of UC18 rather than a duplicate demonstration. UC4, UC6 and UC9 are also partly exercised by the selected scenarios.

## Scope and limitations

The score measures value and demonstrability in this solution, not a universal implementation priority. Use cases involving portfolios, suppliers, EUDAMED submissions or source-version deltas score lower mainly because the current seed contains only one compact manufacturer/device scenario.
