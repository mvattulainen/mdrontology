---
{
  "id": "CQ-05-10",
  "type": "competency-question",
  "title": "Does this device require an SSCP and what evidence must it trace to?",
  "aliases": [
    "CQ-05-10",
    "15-questions/05-clinical-evidence/CQ-05-10-does-this-device-require-an-sscp-and-what-evidence-must-it-trace-to"
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
  "ontology_path": "DeviceClass/ImplantableStatus → SSCPRequirement → SSCP → ClinicalEvidence/Risk/PMS → Validation/PublicationState",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-020-administration-set-compatibility-report|EVD-PUMP-020]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]"
}
---

# Does this device require an SSCP and what evidence must it trace to?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `intended_purpose`
- `clinical_claims`
- `risk_class`
- `clinical_evidence`

## Ontology path

`DeviceClass/ImplantableStatus → SSCPRequirement → SSCP → ClinicalEvidence/Risk/PMS → Validation/PublicationState`


## Answer

An SSCP is required for implantable devices and class III devices, subject to the MDR’s stated exceptions, and must be validated by the notified body and made publicly available through the applicable process. The ontology derives applicability from class and implantable status and traces the SSCP to current clinical evidence, risks and PMS information, including validation and publication state.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-020-administration-set-compatibility-report|EVD-PUMP-020 — Administration-set compatibility report]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005 — Infpump FlowGuard critical-care configuration 1.1]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-61-mdr-article-61-clinical-evaluation|PROV-MDR-ARTICLE-61]]
