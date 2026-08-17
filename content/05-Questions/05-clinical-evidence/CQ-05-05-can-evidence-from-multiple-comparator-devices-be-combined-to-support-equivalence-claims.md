---
{
  "id": "CQ-05-05",
  "type": "competency-question",
  "title": "Can evidence from multiple comparator devices be combined to support equivalence claims?",
  "aliases": [
    "CQ-05-05",
    "15-questions/05-clinical-evidence/CQ-05-05-can-evidence-from-multiple-comparator-devices-be-combined-to-support-equivalence-claims"
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
  "ontology_path": "SubjectDevice → ComparatorDevice[] → EquivalenceCharacteristic[] → EvidenceAggregationRule → SufficiencyAssessment",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-015-human-factors-validation-report|EVD-PUMP-015]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]"
}
---

# Can evidence from multiple comparator devices be combined to support equivalence claims?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `intended_purpose`
- `clinical_claims`
- `risk_class`
- `clinical_evidence`

## Ontology path

`SubjectDevice → ComparatorDevice[] → EquivalenceCharacteristic[] → EvidenceAggregationRule → SufficiencyAssessment`


## Answer

Evidence from multiple comparator devices cannot be assembled as a patchwork substitute for demonstrating equivalence to a single device unless the governed assessment shows how the complete technical, biological and clinical equivalence requirements are satisfied. The ontology keeps each comparator and characteristic comparison distinct, applies an explicit aggregation rule, and accepts the combined set only if the sufficiency assessment supports the claimed inference.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-015-human-factors-validation-report|EVD-PUMP-015 — Human factors validation report]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005 — Infpump FlowGuard critical-care configuration 1.1]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-61-mdr-article-61-clinical-evaluation|PROV-MDR-ARTICLE-61]]
