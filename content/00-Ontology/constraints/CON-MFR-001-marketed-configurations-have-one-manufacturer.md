---
{
  "id": "CON-MFR-001",
  "type": "constraint",
  "title": "Marketed configurations have one manufacturer",
  "aliases": [
    "CON-MFR-001",
    "01-ontology/constraints/CON-MFR-001-marketed-configurations-have-one-manufacturer"
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
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ],
  "assurance_level": "hard",
  "normative_basis": "regulatory-source",
  "confidence": "high",
  "human_review_required": true
}
---

# Marketed configurations have one manufacturer

## Explanation

This constraint requires every marketed device configuration to identify exactly one legal manufacturer. The relationship establishes who holds the manufacturer obligations for that configuration and prevents responsibility from being absent or ambiguously assigned to multiple organisations.


```yaml ontology-constraint
{
  "target_type": "device-configuration",
  "when": {
    "all": [
      {
        "fact": "market_status",
        "equals": "marketed"
      }
    ]
  },
  "checks": [
    {
      "relation": "manufactured_by",
      "min": 1,
      "max": 1
    }
  ]
}
```

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

This constraint page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
