---
{
  "id": "CON-DOC-001",
  "type": "constraint",
  "title": "Current evidence is not superseded",
  "aliases": [
    "CON-DOC-001",
    "01-ontology/constraints/CON-DOC-001-current-evidence-is-not-superseded"
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

# Current evidence is not superseded

## Explanation

This constraint prevents evidence marked as current from relying on a document version that has been superseded. It supports version-controlled reasoning by ensuring that compliance claims and reviews use the presently applicable record rather than an obsolete version whose content may no longer describe the released device.


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
      "relation": "superseded_by",
      "max": 0
    }
  ]
}
```

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

This constraint page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
