---
{
  "id": "CQ-05-07",
  "type": "competency-question",
  "title": "When is PMCF required, and how is a justification for reduced or no PMCF represented?",
  "aliases": [
    "CQ-05-07",
    "15-questions/05-clinical-evidence/CQ-05-07-when-is-pmcf-required-and-how-is-a-justification-for-reduced-or-no-pmcf-represented"
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
  "ontology_path": "DeviceConfiguration → ResidualRisk/EvidenceGap/PMSHistory → PMCFRequirement → PMCFPlan/Justification",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/clinical-evidence/CEVD-PUMP-001-infpump-flowguard-clinical-evidence-set|CEVD-PUMP-001]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
}
---

# When is PMCF required, and how is a justification for reduced or no PMCF represented?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `intended_purpose`
- `clinical_claims`
- `risk_class`
- `clinical_evidence`

## Ontology path

`DeviceConfiguration → ResidualRisk/EvidenceGap/PMSHistory → PMCFRequirement → PMCFPlan/Justification`


## Answer

PMCF is the continuing process used to proactively collect and evaluate clinical data for a marketed device and should be planned unless a device-specific justification shows that the relevant residual risks and evidence questions are adequately addressed by other means. The ontology assesses configuration, residual risks, evidence gaps and PMS history, then records either a proportionate PMCF plan or a reviewed justification rather than a generic exemption.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/clinical-evidence/CEVD-PUMP-001-infpump-flowguard-clinical-evidence-set|CEVD-PUMP-001 — Infpump FlowGuard clinical evidence set]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002 — Infpump FlowGuard transport configuration 1.0]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-61-mdr-article-61-clinical-evaluation|PROV-MDR-ARTICLE-61]]
