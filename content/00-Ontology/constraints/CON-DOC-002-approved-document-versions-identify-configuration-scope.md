---
{
  "id": "CON-DOC-002",
  "type": "constraint",
  "title": "Approved document versions identify configuration scope",
  "aliases": [
    "CON-DOC-002",
    "01-ontology/constraints/CON-DOC-002-approved-document-versions-identify-configuration-scope"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-16",
  "modified": "2026-08-16",
  "tags": [
    "ontology/constraint"
  ],
  "draft": false,
  "constraint_kind": "configuration",
  "assurance_level": "advisory",
  "normative_basis": "ontology-governance",
  "confidence": "medium",
  "human_review_required": true,
  "severity": "warning",
  "source_provisions": [
    "[[PROV-MDR-ANNEX-II]]"
  ],
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ]
}
---

# Approved document versions identify configuration scope

## Explanation

This constraint checks that an approved document version identifies the device configuration or configurations to which it applies. Explicit scope allows reviewers to distinguish reusable documentation from configuration-specific evidence and reduces the risk of applying an approved document to the wrong product version.

## Assurance

- Level: `advisory`
- Normative basis: `ontology-governance`
- Failure effect: non-blocking advisory finding requiring review

```yaml ontology-constraint
{
  "target_type": "document-version",
  "when": {
    "all": [
      {
        "fact": "status",
        "equals": "approved"
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

- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

This constraint page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
