---
{
  "id": "CQ-05-04",
  "type": "competency-question",
  "title": "When may another device be used as an equivalent device in the clinical evaluation?",
  "aliases": [
    "CQ-05-04",
    "15-questions/05-clinical-evidence/CQ-05-04-when-may-another-device-be-used-as-an-equivalent-device-in-the-clinical-evaluation"
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
  "ontology_path": "SubjectDevice ↔ CandidateEquivalentDevice → Technical/Biological/ClinicalCharacteristics → EquivalenceAssessment → DataAccess",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/clinical-claim/CLM-PUMP-004-reduces-unintended-free-flow-exposure|CLM-PUMP-004]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
}
---

# When may another device be used as an equivalent device in the clinical evaluation?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `intended_purpose`
- `clinical_claims`
- `risk_class`
- `clinical_evidence`

## Ontology path

`SubjectDevice ↔ CandidateEquivalentDevice → Technical/Biological/ClinicalCharacteristics → EquivalenceAssessment → DataAccess`


## Answer

Another device may support an equivalence claim only when technical, biological and clinical characteristics are sufficiently similar that no clinically significant difference is expected, and the manufacturer has adequate access to the data needed for a robust assessment. The ontology compares the subject and candidate devices across all three characteristic groups and records both the equivalence assessment and data-access basis.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/clinical-claim/CLM-PUMP-004-reduces-unintended-free-flow-exposure|CLM-PUMP-004 — Reduces unintended free-flow exposure]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004 — Infpump FlowGuard oncology configuration 1.1]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-61-mdr-article-61-clinical-evaluation|PROV-MDR-ARTICLE-61]]
