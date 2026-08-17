---
{
  "id": "CON-CHANGE-001",
  "type": "constraint",
  "title": "Released changes have an impact assessment",
  "aliases": [
    "CON-CHANGE-001",
    "01-ontology/constraints/CON-CHANGE-001-released-changes-have-an-impact-assessment"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-16",
  "tags": [
    "ontology/constraint"
  ],
  "draft": false,
  "constraint_kind": "integrity",
  "severity": "major",
  "source_provisions": [
    "[[PROV-MDR-ARTICLE-10-mdr-article-10-manufacturer-obligations|PROV-MDR-ARTICLE-10]]"
  ],
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-001-battery-cell-supplier-replacement|CHG-PUMP-001]]"
  ],
  "assurance_level": "hard",
  "normative_basis": "regulatory-source",
  "confidence": "high",
  "human_review_required": true
}
---

# Released changes have an impact assessment

## Explanation

This constraint requires a released change to have a recorded impact assessment before it can be treated as controlled. The assessment provides the traceable basis for deciding which regulatory, clinical, risk, design, verification, documentation and post-market activities are affected by the change.


```yaml ontology-constraint
{
  "target_type": "change",
  "when": {
    "all": [
      {
        "fact": "status",
        "equals": "released"
      }
    ]
  },
  "checks": [
    {
      "relation": "has_impact_assessment",
      "min": 1
    },
    {
      "field": "impact_domains",
      "present": true
    }
  ]
}
```

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-001-battery-cell-supplier-replacement|CHG-PUMP-001 — Battery cell supplier replacement]]

This constraint page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
