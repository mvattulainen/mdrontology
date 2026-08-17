---
{
  "id": "CON-CLIN-001",
  "type": "constraint",
  "title": "Clinical evaluations identify evidence and report",
  "aliases": [
    "CON-CLIN-001",
    "01-ontology/constraints/CON-CLIN-001-clinical-evaluations-identify-evidence-and-report"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-16",
  "modified": "2026-08-16",
  "tags": [
    "ontology/constraint"
  ],
  "draft": false,
  "constraint_kind": "completeness",
  "assurance_level": "advisory",
  "normative_basis": "ontology-governance",
  "confidence": "medium",
  "human_review_required": true,
  "severity": "warning",
  "source_provisions": [
    "[[PROV-MDR-ARTICLE-61]]"
  ],
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ]
}
---

# Clinical evaluations identify evidence and report

## Explanation

This constraint checks that a clinical evaluation identifies at least one evidence item and the controlled report in which the evaluation is documented. Together, these links allow a reviewer to trace clinical conclusions back to their evidence base and to the approved technical-file record that contains the assessment.

## Assurance

- Level: `advisory`
- Normative basis: `ontology-governance`
- Failure effect: non-blocking advisory finding requiring review

```yaml ontology-constraint
{
  "target_type": "clinical-evaluation",
  "checks": [
    {
      "relation": "uses_evidence",
      "min": 1
    },
    {
      "relation": "documented_by",
      "min": 1
    }
  ]
}
```

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

This constraint page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
