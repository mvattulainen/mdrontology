---
{
  "id": "CON-GSPR-001",
  "type": "constraint",
  "title": "Applicable requirements have compliance traceability",
  "aliases": [
    "CON-GSPR-001",
    "01-ontology/constraints/CON-GSPR-001-applicable-requirements-have-compliance-traceability"
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
    "[[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-001-risk-reduction-and-acceptable-residual-risk|CRI-PUMP-001]]"
  ],
  "assurance_level": "hard",
  "normative_basis": "regulatory-source",
  "confidence": "high",
  "human_review_required": true
}
---

# Applicable requirements have compliance traceability

## Explanation

This constraint requires each applicable device-specific requirement to have traceability showing how compliance is addressed. It turns an applicability decision into an auditable path through methods, evidence and conclusions, so an applicable GSPR cannot remain only an unsubstantiated status value.


```yaml ontology-constraint
{
  "target_type": "compliance-requirement-instance",
  "when": {
    "all": [
      {
        "fact": "applicable",
        "equals": true
      }
    ]
  },
  "checks": [
    {
      "field": "applicability_rationale",
      "present": true
    },
    {
      "field": "compliance_method",
      "present": true
    },
    {
      "field": "compliance_status",
      "present": true
    },
    {
      "relation": "derived_from",
      "min": 1
    },
    {
      "relation": "satisfied_by",
      "min": 1
    }
  ]
}
```

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-001-risk-reduction-and-acceptable-residual-risk|CRI-PUMP-001 — Risk reduction and acceptable residual risk]]

This constraint page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
