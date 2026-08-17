---
{
  "id": "CQ-02-10",
  "type": "competency-question",
  "title": "What evidence and rationale must support the final classification conclusion?",
  "aliases": [
    "CQ-02-10",
    "15-questions/02-device-classification/CQ-02-10-what-evidence-and-rationale-must-support-the-final-classification-conclusion"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/competency-question"
  ],
  "draft": false,
  "requirement_class": "02-device-classification",
  "answer_pattern": "[[AP-CLASS-ap-class-answer-pattern|AP-CLASS]]",
  "starts_from": [
    "device-configuration"
  ],
  "requires_context": [
    "intended_purpose",
    "duration",
    "invasiveness",
    "active_characteristic",
    "software_function"
  ],
  "traverses": [
    "classified_by",
    "considers_rule",
    "concludes_class",
    "based_on_characteristic"
  ],
  "applies_rule_families": [
    "02-device-classification"
  ],
  "checks_constraint": [
    "[[CON-CLASS-001-market-release-candidates-have-one-classification-decision|CON-CLASS-001]]"
  ],
  "uses_source": [
    "[[PROV-MDR-ANNEX-VIII-mdr-annex-viii-classification|PROV-MDR-ANNEX-VIII]]"
  ],
  "ontology_path": "ClassificationDecision → basedOn facts/rules → supportedBy EvidenceItem → approvedBy Role → sourceProvision",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/classification-decision/CLD-PUMP-005-critical-care-configuration-classification-decision|CLD-PUMP-005]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]"
}
---

# What evidence and rationale must support the final classification conclusion?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `intended_purpose`
- `duration`
- `invasiveness`
- `active_characteristic`
- `software_function`

## Ontology path

`ClassificationDecision → basedOn facts/rules → supportedBy EvidenceItem → approvedBy Role → sourceProvision`


## Answer

The final conclusion must state the device and configuration assessed, the classification facts, each considered Annex VIII rule or sub-rule, the evaluations and rejected alternatives, and the resulting class, with traceable evidence, source provisions and accountable approval. The ontology connects those facts and rules to evidence items and the approving role so the classification decision can be reproduced and reviewed.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/classification-decision/CLD-PUMP-005-critical-care-configuration-classification-decision|CLD-PUMP-005 — Critical-care configuration classification decision]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005 — Infpump FlowGuard critical-care configuration 1.1]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ANNEX-VIII-mdr-annex-viii-classification|PROV-MDR-ANNEX-VIII]]
