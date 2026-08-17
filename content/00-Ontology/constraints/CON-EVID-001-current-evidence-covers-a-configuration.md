---
{
  "id": "CON-EVID-001",
  "type": "constraint",
  "title": "Current evidence covers a configuration",
  "aliases": [
    "CON-EVID-001",
    "01-ontology/constraints/CON-EVID-001-current-evidence-covers-a-configuration"
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
    "[[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-001-flow-accuracy-verification-report|EVD-PUMP-001]]"
  ],
  "assurance_level": "hard",
  "normative_basis": "regulatory-source",
  "confidence": "high",
  "human_review_required": true
}
---

# Current evidence covers a configuration

## Explanation

This constraint requires evidence treated as current to cover at least one identifiable device configuration. The relationship makes the evidence usable in configuration-specific compliance reasoning and exposes records whose validity or relevance cannot be tied to the device version under review.


```yaml ontology-constraint
{
  "target_type": "evidence-item",
  "when": {
    "all": [
      {
        "fact": "status",
        "in": [
          "current",
          "approved"
        ]
      }
    ]
  },
  "checks": [
    {
      "relation": "applies_to_configuration",
      "min": 1
    }
  ]
}
```

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-001-flow-accuracy-verification-report|EVD-PUMP-001 — Flow accuracy verification report]]

This constraint page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
