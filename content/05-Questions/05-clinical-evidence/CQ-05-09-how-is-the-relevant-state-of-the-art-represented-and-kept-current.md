---
{
  "id": "CQ-05-09",
  "type": "competency-question",
  "title": "How is the relevant state of the art represented and kept current?",
  "aliases": [
    "CQ-05-09",
    "15-questions/05-clinical-evidence/CQ-05-09-how-is-the-relevant-state-of-the-art-represented-and-kept-current"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/competency-question"
  ],
  "draft": false,
  "requirement_class": "05-clinical-evidence",
  "answer_pattern": "[[AP-EVID-ap-evid-answer-pattern|AP-EVID]]",
  "starts_from": [
    "device-configuration"
  ],
  "requires_context": [
    "intended_purpose",
    "clinical_claims",
    "risk_class",
    "clinical_evidence"
  ],
  "traverses": [
    "evaluates",
    "uses_evidence",
    "supports_claim",
    "updated_by"
  ],
  "applies_rule_families": [
    "05-clinical-evidence"
  ],
  "checks_constraint": [
    "[[CON-EVID-001-current-evidence-covers-a-configuration|CON-EVID-001]]"
  ],
  "uses_source": [
    "[[PROV-MDR-ARTICLE-61-mdr-article-61-clinical-evaluation|PROV-MDR-ARTICLE-61]]"
  ],
  "ontology_path": "ClinicalQuestion → StateOfTheArtSource → Benchmark/Alternative → BenefitRiskContext → ReviewDate",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/clinical-claim/CLM-PUMP-009-supports-weight-based-dose-programming|CLM-PUMP-009]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
}
---

# How is the relevant state of the art represented and kept current?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `intended_purpose`
- `clinical_claims`
- `risk_class`
- `clinical_evidence`

## Ontology path

`ClinicalQuestion → StateOfTheArtSource → Benchmark/Alternative → BenefitRiskContext → ReviewDate`


## Answer

The state of the art is represented as dated, question-specific sources and benchmarks covering accepted clinical practice, available alternatives, relevant technologies and safety or performance expectations. The ontology links each clinical question to those sources and alternatives, uses them in benefit-risk context, and requires a review date so obsolete benchmarks are visible.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/clinical-claim/CLM-PUMP-009-supports-weight-based-dose-programming|CLM-PUMP-009 — Supports weight-based dose programming]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004 — Infpump FlowGuard oncology configuration 1.1]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-61-mdr-article-61-clinical-evaluation|PROV-MDR-ARTICLE-61]]
