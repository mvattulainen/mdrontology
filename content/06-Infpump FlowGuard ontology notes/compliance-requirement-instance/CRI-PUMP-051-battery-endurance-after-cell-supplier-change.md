---
{
  "id": "CRI-PUMP-051",
  "type": "compliance-requirement-instance",
  "title": "Battery endurance after cell-supplier change",
  "aliases": [
    "CRI-PUMP-051",
    "CRI-PUMP-051-battery-endurance-after-cell-supplier-change",
    "18-ontology-notes/compliance-requirement-instance/CRI-PUMP-051-battery-endurance-after-cell-supplier-change",
    "03-Ontology notes/compliance-requirement-instance/CRI-PUMP-051-battery-endurance-after-cell-supplier-change"
  ],
  "status": "draft",
  "version": "1",
  "created": "2026-08-15",
  "modified": "2026-08-15",
  "tags": [
    "ontology-note/compliance-requirement-instance",
    "device/infpump-flowguard"
  ],
  "draft": false,
  "note_origin": "human-reviewed synthetic example",
  "technical_file": "TF-04 GSPR/GSPR Checklist.xlsx",
  "technical_file_identifier": "CRI-PUMP-051",
  "valid_from": null,
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]",
  "applicable": true,
  "applicability_rationale": "Applicable to DEVC-PUMP-001 because CHG-PUMP-001 changes the safety-critical battery-cell supply and the released endurance claim must be reconfirmed before change closure.",
  "compliance_method": "Planned battery-endurance verification against the released acceptance criteria after CHG-PUMP-001",
  "compliance_status": "planned",
  "topic": "battery-power",
  "instantiates_requirement": [
    "[[01-Ontology instances/04-requirements/gspr/GSPR-0001-electrical-safety|GSPR-0001]]"
  ],
  "derived_from": [
    "[[02-Sources/legislation/PROV-MDR-ANNEX-I-mdr-annex-i-gsprs|PROV-MDR-ANNEX-I]]"
  ],
  "requires_evidence": [
    "[[01-Ontology instances/08-technical-documentation/evidence-types/EVTYPE-PUMP-001-post-change-battery-endurance-verification|EVTYPE-PUMP-001]]"
  ]
}
---

# Battery endurance after cell-supplier change

## Semantic role

Represents one generic obligation as applied to a specific infusion-pump configuration, with an explicit compliance method and evidence link.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `CRI-PUMP-051`
- **type:** `compliance-requirement-instance`
- **title:** `Battery endurance after cell-supplier change`
- **aliases:** `CRI-PUMP-051`, `CRI-PUMP-051-battery-endurance-after-cell-supplier-change`, `18-ontology-notes/compliance-requirement-instance/CRI-PUMP-051-battery-endurance-after-cell-supplier-change`, `03-Ontology notes/compliance-requirement-instance/CRI-PUMP-051-battery-endurance-after-cell-supplier-change`
- **status:** `draft`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/compliance-requirement-instance`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-04 GSPR/GSPR Checklist.xlsx`
- **technical_file_identifier:** `CRI-PUMP-051`
- **valid_from:** `null`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]
- **applicable:** `true`
- **applicability_rationale:** `Applicable to DEVC-PUMP-001 because CHG-PUMP-001 changes the safety-critical battery-cell supply and the released endurance claim must be reconfirmed before change closure.`
- **compliance_method:** `Planned battery-endurance verification against the released acceptance criteria after CHG-PUMP-001`
- **compliance_status:** `planned`
- **topic:** `battery-power`
- **instantiates_requirement:** [[01-Ontology instances/04-requirements/gspr/GSPR-0001-electrical-safety|GSPR-0001]]
- **derived_from:** [[02-Sources/legislation/PROV-MDR-ANNEX-I-mdr-annex-i-gsprs|PROV-MDR-ANNEX-I]]
- **requires_evidence:** [[01-Ontology instances/08-technical-documentation/evidence-types/EVTYPE-PUMP-001-post-change-battery-endurance-verification|EVTYPE-PUMP-001]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `has_applicable_requirement` from [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]. These incoming links show which product, decision, process or evidence records depend on the current note.

No succeeding ontology-note dependency is currently asserted for this record. It remains scoped to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]], and any future downstream dependency should be added as a typed relationship rather than inferred from prose.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["CRI-PUMP-051<br/>Battery endurance after cell-supplier change"]
  PREV0["DEVC-PUMP-001<br/>Infpump FlowGuard bedside configuration 1.0"]
  PREV0 -->|"has_applicable_requirement"| CURRENT
  NEXT_NONE["No asserted succeeding dependency"]
  CURRENT -.-> NEXT_NONE
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
