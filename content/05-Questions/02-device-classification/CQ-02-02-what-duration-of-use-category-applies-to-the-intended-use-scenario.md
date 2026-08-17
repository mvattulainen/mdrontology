---
{
  "id": "CQ-02-02",
  "type": "competency-question",
  "title": "What duration-of-use category applies to the intended use scenario?",
  "aliases": [
    "CQ-02-02",
    "15-questions/02-device-classification/CQ-02-02-what-duration-of-use-category-applies-to-the-intended-use-scenario"
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
  "ontology_path": "IntendedUseScenario → UseEpisode/ContinuousUse → DurationCategory → ClassificationRule",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/classification-decision/CLD-PUMP-002-transport-configuration-classification-decision|CLD-PUMP-002]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
}
---

# What duration-of-use category applies to the intended use scenario?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `intended_purpose`
- `duration`
- `invasiveness`
- `active_characteristic`
- `software_function`

## Ontology path

`IntendedUseScenario → UseEpisode/ContinuousUse → DurationCategory → ClassificationRule`


## Answer

The duration category is determined for the intended continuous-use episode: transient is normally less than 60 minutes, short term normally 60 minutes to 30 days, and long term normally more than 30 days. The ontology models the use scenario and continuity of use first, assigns the duration category, and then supplies it to the applicable classification rule.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/classification-decision/CLD-PUMP-002-transport-configuration-classification-decision|CLD-PUMP-002 — Transport configuration classification decision]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002 — Infpump FlowGuard transport configuration 1.0]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ANNEX-VIII-mdr-annex-viii-classification|PROV-MDR-ANNEX-VIII]]
