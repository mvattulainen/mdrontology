---
id: DOC-MDR-ONTOLOGY-NOTES-LLM-001
type: architecture-note
title: Ontology Notes and LLM Reasoning in the EU MDR Manufacturer-Centric Vault
version: 1.0
status: draft
tags:
  - eu-mdr
  - ontology
  - llm
  - obsidian
  - quartz
  - regulatory-knowledge-graph
---

# Ontology Notes and LLM Reasoning in the EU MDR Manufacturer-Centric Vault

## 1. Purpose of ontology notes

Ontology notes are the **semantic building blocks of the vault**. Their purpose is not primarily to store prose documentation. Their purpose is to give important regulatory concepts a stable identity, explicit meaning, typed relationships, provenance, lifecycle state, and enough structured information that humans, validation logic, and an LLM can reason about them consistently.

> A technical-file document says **what was documented**.  
> An ontology note says **what the thing is, how it relates to the device, what regulatory role it plays, and what other things depend on it**.

## 2. What an ontology note represents

An ontology note should normally represent one regulatory object that needs to be independently identifiable.

| Ontology note | Represents |
|---|---|
| `DeviceConfiguration` | A particular regulated configuration of a device |
| `IntendedPurpose` | A controlled intended-purpose definition |
| `ClassificationDecision` | The reasoning and conclusion for MDR classification |
| `ComplianceRequirementInstance` | A requirement as it applies to a specific device |
| `Risk` | An identified device risk |
| `RiskControlMeasure` | A control used to reduce a risk |
| `ClinicalClaim` | A claim that needs clinical support |
| `EvidenceItem` | Evidence supporting a requirement, control, claim or decision |
| `Change` | A proposed or implemented product/process change |
| `ComplianceGap` | A detected missing, inconsistent or stale compliance condition |
| `PMSignal` | A post-market finding requiring assessment |
| `Certificate` | A regulatory certificate and its validity state |
| `Rule` | Machine-readable regulatory or operational reasoning logic |
| `Constraint` | A condition that a valid compliance state must satisfy |
| `CompetencyQuestion` | A reusable reasoning and retrieval plan |

## 3. What should be inside an ontology note

An ontology note should normally contain two layers:

```text
Structured semantic metadata
+
Human-readable explanation
```

Example:

```markdown
---
id: RISK-014
type: risk
title: Loss of therapy due to premature battery depletion
status: accepted
applies_to_configuration:
  - "[[DEVC-DEVICE-X-REV-C]]"
hazard:
  - "[[HAZ-006-ELECTRICAL-ENERGY]]"
controlled_by:
  - "[[RCM-017-BATTERY-MONITORING]]"
  - "[[RCM-021-LOW-BATTERY-ALARM]]"
supported_by:
  - "[[EVD-044-RISK-ANALYSIS]]"
documented_in:
  - "[[Risk-Analysis.xlsx]]"
valid_from: 2026-02-12
review_status: approved
---

# Loss of therapy due to premature battery depletion

## Description

The risk concerns loss or interruption of the intended therapy when available battery capacity becomes insufficient before the expected operating interval has been completed.

## Controls

- [[RCM-017-BATTERY-MONITORING]]
- [[RCM-021-LOW-BATTERY-ALARM]]

## Evidence

The current risk assessment is documented in [[Risk-Analysis.xlsx]].
```

The frontmatter makes the note computable. The body makes it understandable.

## 4. Stable identity

An ontology note gives a concept an identity that survives changes in filenames, folders and documents.

```text
RISK-014
```

can remain stable even if:

```text
Risk Analysis Rev 4.xlsx
```

becomes:

```text
Risk Analysis Rev 5.xlsx
```

The ontology separates the regulatory concept from the current document that records it.

## 5. Ontology notes are graph nodes

Conceptually, a note such as `RISK-014` becomes a graph node:

```text
                RISK-014
                   │
         ┌─────────┼──────────┐
         ▼         ▼          ▼
       Hazard    Harm       Controls
                              │
                              ▼
                         Verification
                              │
                              ▼
                           Evidence
```

Other notes can connect to it:

```text
CHG-0042
→ impacts
→ RISK-014
```

```text
SIGNAL-007
→ requires_reassessment_of
→ RISK-014
```

The value comes from the network of typed relationships between notes.

## 6. One semantic subject per note

A useful rule is:

> One note should normally correspond to one thing the system may need to reason about independently.

Prefer:

```text
DEVM-001 Device X
IP-001 Intended Purpose
CLD-001 Classification Decision
RISK-014 Battery Depletion
CER-007 Clinical Evaluation
CERT-002 MDR Certificate
PMS-001 PMS System
```

A broad page such as `Device X Regulatory Information.md` should normally be a view over those nodes rather than the only semantic source.

## 7. Functional families of ontology notes

| Note family | Primary purpose |
|---|---|
| Entity notes | Represent device, organisation, component, risk, supplier, etc. |
| Decision notes | Capture regulatory conclusions and rationale |
| Requirement notes | Represent generic or device-specific obligations |
| Evidence notes | Represent evidence and its applicability |
| Process/activity notes | Represent work performed to satisfy requirements |
| Event/change notes | Represent events that cause reassessment |
| State/gap notes | Represent compliance condition |
| Source notes | Preserve provenance |
| Rule notes | Encode derivation logic |
| Constraint notes | Encode validity/completeness requirements |
| Question notes | Define competency questions and answer plans |

## 8. Device notes

A `DeviceConfiguration` note establishes the central reasoning context.

```yaml
---
id: DEVC-001
type: device-configuration
title: Device X Rev C / Software 4.2
device_model:
  - "[[DEVM-001]]"
intended_purpose:
  - "[[IP-003]]"
software_version:
  - "[[SW-0042]]"
classification_decision:
  - "[[CLD-002]]"
configuration_baseline:
  - "[[BASE-018]]"
lifecycle_state: marketed
market:
  - EU
---
```

Its purpose is to establish exactly which product state subsequent compliance conclusions concern.

## 9. Intended-purpose notes

The intended purpose affects:

```text
qualification
classification
clinical evaluation
risk management
GSPR applicability
labelling
UDI implications
```

Structured fields may include:

```yaml
medical_purpose:
indications:
target_population:
intended_users:
use_environment:
anatomical_site:
duration:
contraindications:
limitations:
operating_principle:
```

The ontology should distinguish structured interpretation from the authoritative controlled wording.

## 10. Decision notes

A regulatory conclusion should often have its own note.

Instead of only:

```yaml
risk_class: IIb
```

use:

```text
DeviceConfiguration
→ classified_by
→ ClassificationDecision
```

Example:

```yaml
---
id: CLD-002
type: classification-decision
concerns:
  - "[[DEVC-001]]"
conclusion:
  - "[[CLASS-IIb]]"
rules_considered:
  - "[[MDR-ANNEX-VIII-RULE-9]]"
  - "[[MDR-ANNEX-VIII-RULE-11]]"
controlling_facts:
  - "[[AST-021-ACTIVE-DEVICE]]"
  - "[[AST-022-THERAPEUTIC-FUNCTION]]"
supported_by:
  - "[[EVD-CLASS-002]]"
status: approved
decision_date: 2026-02-03
---
```

The note stores not only the class but why it was concluded.

## 11. Compliance requirement notes

A manufacturer needs both a generic requirement and a device-specific requirement instance.

```text
GSPR-14-2
```

and:

```text
CRI-DEVICE-X-GSPR-14-2
```

Example:

```yaml
---
id: CRI-0142
type: compliance-requirement-instance
applies_to:
  - "[[DEVC-001]]"
instantiates:
  - "[[GSPR-14-2]]"
applicability: applicable
compliance_method:
  - "[[METHOD-ELECTRICAL-VERIFICATION]]"
satisfied_by:
  - "[[EVD-045]]"
status: satisfied
---
```

This is what makes compliance device-specific.

## 12. Evidence notes

Evidence notes describe what a piece of evidence proves and what it covers.

```yaml
---
id: EVD-045
type: test-evidence
title: Battery endurance validation report
source_file:
  - "[[Battery-Endurance-Validation-Rev-B.pdf]]"
applies_to_configuration:
  - "[[DEVC-001]]"
verifies:
  - "[[RCM-017]]"
demonstrates_compliance_with:
  - "[[CRI-0142]]"
status: approved
approved_at: 2026-03-14
---
```

The note adds semantic information that the file itself may not expose reliably.

## 13. Risk and risk-control notes

Risk and control notes connect hazard, harm, device configuration, verification, evidence, GSPRs, PMS, complaints, changes and CAPAs.

Example control note:

```yaml
---
id: RCM-017
type: risk-control-measure
title: Battery state monitoring
mitigates:
  - "[[RISK-014]]"
implemented_by:
  - "[[SWR-032-BATTERY-MONITORING]]"
verified_by:
  - "[[EVD-045]]"
communicated_in:
  - "[[IFU-DEVICE-X-REV-8]]"
---
```

## 14. Change notes

A change note represents a regulatory event.

```yaml
---
id: CHG-0042
type: supplier-change
title: Battery supplier replacement
affects_configuration:
  - "[[DEVC-001]]"
changes:
  - "[[COMP-BATTERY-A]]"
replacement:
  - "[[COMP-BATTERY-B]]"
impacts:
  - "[[RISK-014]]"
  - "[[CRI-0142]]"
impact_assessment:
  - "[[CIA-0042]]"
status: under-assessment
---
```

This connects engineering change control to regulatory consequences.

## 15. Compliance-gap notes

A gap note represents something missing, invalid, stale or contradictory.

```yaml
---
id: GAP-0121
type: compliance-gap
title: Battery endurance evidence does not cover Rev C
subject:
  - "[[DEVC-001]]"
constraint:
  - "[[CON-EVID-CONFIG-COVERAGE]]"
related_evidence:
  - "[[EVD-044]]"
gap_type: configuration-mismatch
severity: major
status: open
owner:
  - "[[ROLE-VERIFICATION]]"
blocks:
  - "[[GATE-MARKET-RELEASE]]"
---
```

A gap can then be assigned, tracked, closed, audited and reported.

## 16. Rule notes

A rule note defines machine-executable reasoning and should explain:

```text
why the rule exists
what inputs it expects
what it derives
which source supports it
what its limitations are
```

Preferred pattern:

```text
Markdown rule note
→ parsed by reasoner
→ executable representation
```

## 17. Constraint notes

Rules answer:

> What follows from these facts?

Constraints answer:

> Is this compliance state acceptable?

Example:

```text
If device is marketed
THEN a current PMS plan must exist.
```

A constraint should define target, condition, required state, severity, violation result and source basis.

## 18. Source notes

Source notes represent provenance such as:

```text
PROV-MDR-ARTICLE-10
PROV-MDR-ANNEX-I-GSPR-17
SRC-MDCG-2020-6
SRC-EN-ISO-14971
```

They should record publisher, version, dates, normative status, official location, supersession and retrieval date.

## 19. Question notes

Competency questions can themselves be ontology notes.

```yaml
---
id: CQ-02-01
type: competency-question
starts_from:
  - DeviceConfiguration
requires_context:
  - IntendedPurpose
  - Duration
  - Invasiveness
  - SoftwareFunction
traverses:
  - classified_by
  - considers_rule
  - based_on_characteristic
rule_family:
  - classification
answer_pattern:
  - "[[AP-CLASS]]"
---
```

The question note is a reusable reasoning specification.

## 20. Frontmatter versus body

| Put in frontmatter | Put in body |
|---|---|
| identity | explanation |
| type | rationale |
| machine-readable relations | regulatory context |
| statuses | interpretation |
| dates | discussion |
| references to other nodes | caveats |
| applicability | human-readable summary |
| ownership | examples |
| provenance links | notes for reviewers |

If software needs to query it deterministically, it normally belongs in structured metadata.

## 21. Avoid uncontrolled duplicated facts

Prefer:

```text
ClassificationDecision
→ concludes_class
→ IIb
```

as the semantic source rather than independently writing `Class IIb` into multiple notes.

Other pages should derive or reference that fact.

## 22. Note origin

Ontology notes may be:

| Origin | Example |
|---|---|
| Human-authored | Classification decision |
| Human-reviewed extraction | Risk extracted from spreadsheet |
| Imported | UDI master data |
| Derived | Next PSUR due date |
| Generated | Compliance dashboard |
| LLM-assisted, human-approved | Clinical claim extraction |

LLM-extracted content should not automatically become accepted regulatory truth.

## 23. Temporal validity

Notes should support fields such as:

```yaml
valid_from: 2026-03-01
valid_to:
status: current
```

Superseded facts should remain queryable historically.

## 24. Configuration scope

Evidence validity is often configuration-dependent.

```text
Test report
→ valid for Rev B
```

does not automatically imply:

```text
Test report
→ valid for Rev C
```

The ontology can therefore detect evidence/configuration mismatches.

## 25. Bidirectional navigation

The graph should support traversal from any direction.

```text
GSPR
→ requirement instances
→ devices
→ evidence
```

```text
Test report
→ requirements
→ risk controls
→ device configuration
```

```text
Change
→ risks
→ evidence
→ technical documents
```

```text
Complaint
→ signal
→ risk
→ CAPA
→ change
```

## 26. Note granularity test

Ask:

> Does this object need its own identity because another object might refer to it, it may change independently, it needs provenance, it participates in reasoning, or it needs to be queried?

If yes, it is probably a good ontology-note candidate.

## 27. Ontology notes as a regulatory API

A note such as `RISK-014` allows software to ask:

```text
What device does this risk apply to?
What hazard causes it?
What controls mitigate it?
What evidence verifies those controls?
Which changes affect it?
Which PMS signals relate to it?
When was it last reviewed?
Which technical-file document records it?
```

The Markdown representation makes this API human-readable.

# How the LLM uses ontology notes

## 28. Core principle

The LLM should use ontology notes as **structured reasoning context**, not as ordinary documents to summarize.

```text
User question
→ identify relevant ontology entities
→ retrieve ontology notes and linked neighbours
→ evaluate rules/constraints
→ retrieve supporting technical-file evidence
→ build a compact context packet
→ LLM explains the result
```

## 29. Entity resolution

Ontology notes help resolve ambiguous user language.

```text
"Device X"
→ DEVM-001
→ current configuration
→ DEVC-001 Rev C
```

This prevents reasoning over the wrong product revision, software version, intended purpose or market.

## 30. Controlled facts

The LLM receives structured facts such as:

```yaml
risk_class: IIb
intended_purpose: IP-003
lifecycle_state: marketed
software_version: SW-4.2
```

instead of repeatedly inferring them from prose.

## 31. Relationship traversal

Ontology notes define the reasoning paths.

```text
Change
→ impacts
→ Risk
→ controlled_by
→ RiskControl
→ verified_by
→ Evidence
```

This is more reliable than relying only on semantic similarity.

## 32. Rule selection

The system identifies relevant encoded rules.

For example:

```text
DeviceConfiguration
→ DeviceClass
→ PSURRule
→ LastPSUR
→ NextDueDate
```

The LLM does not have to remember the rule from model training.

## 33. Constraint results

The LLM should receive explicit validation results.

```text
CON-EVID-001 = failed

Reason:
EVD-0045 covers Rev B, not current Rev C.
```

The LLM then explains the compliance gap.

## 34. Evidence retrieval

Ontology traversal identifies the relevant evidence.

```text
RISK-014
→ verified_by
→ EVD-045
→ source_file
→ Battery-Endurance-Validation.pdf
```

Only then does the application inspect the necessary technical-file content.

## 35. Provenance

Ontology notes preserve where conclusions come from.

```text
Conclusion
→ derived_by_rule
→ RULE-PMS-001
→ derived_from
→ MDR Article 86
```

or:

```text
ClassificationDecision
→ supported_by
→ Classification Rationale
→ derived_from
→ MDR Annex VIII
```

The LLM can explain both the conclusion and its basis.

## 36. Missing-information detection

The ontology can explicitly state:

```text
implantable_status = unknown
duration_category = known
intended_purpose = current
```

The LLM should then say that the conclusion cannot yet be finalized instead of inventing the missing fact.

Useful explicit states include:

```text
unknown
not_assessed
not_applicable
not_available
conflicting
stale
pending_review
```

## 37. Change-impact reasoning

A change may create a graph such as:

```text
CHG-0042
→ Battery B
→ affects RISK-014
→ affects RCM-017
→ invalidates EVD-044
→ requires new validation
→ creates GAP-0121
→ blocks MarketReleaseGate
```

The LLM turns this structured impact graph into a readable regulatory explanation.

## 38. Question-specific reasoning plans

Question notes can specify:

```yaml
starts_from:
  - DeviceConfiguration
requires_context:
  - IntendedPurpose
  - Duration
  - Invasiveness
traverses:
  - classified_by
  - considers_rule
applies_rule_family:
  - classification
```

This becomes a reusable reasoning plan for the application and LLM.

## 39. Division of responsibilities

```text
Ontology notes
= semantic memory

Rules
= deterministic reasoning

Constraints
= compliance validation

Technical files
= evidence

LLM
= explanation, synthesis and dialogue
```

The LLM should be the last reasoning layer, not the first source of truth.

## 40. Context packet provided to the LLM

A practical implementation should build a compact packet such as:

```yaml
question: "Can Device X Rev C be released?"

resolved_context:
  device_configuration: DEVC-001
  date: 2026-08-15
  market: EU

facts:
  risk_class: IIb
  lifecycle_state: pre-release

derived_facts:
  release_gate: blocked

constraint_results:
  - constraint: CON-EVID-001
    status: failed
    reason: "Battery validation evidence does not cover Rev C"

open_gaps:
  - GAP-0121
  - GAP-0127

evidence:
  - EVD-045
  - CER-007
  - CERT-002

sources:
  - PROV-MDR-ANNEX-I
  - PROV-MDR-ARTICLE-10

answer_pattern: AP-MARKET
```

The LLM turns this structured packet into a readable answer while preserving the reasoning trace.

## 41. Recommended runtime sequence

```text
1. Parse user question.
2. Identify question type.
3. Resolve manufacturer/device/configuration/date/market.
4. Load the primary ontology node.
5. Traverse question-specific relations.
6. Retrieve current accepted assertions.
7. Evaluate applicable rules.
8. Run constraints.
9. Identify open gaps and unresolved facts.
10. Retrieve linked evidence notes.
11. Retrieve relevant technical-file sections if needed.
12. Retrieve source provenance.
13. Build a compact context packet.
14. Ask the LLM to synthesize the answer.
15. Return explanation + reasoning trace + evidence + sources + related notes.
```

## 42. Example: release-readiness question

User:

> Can Device X Rev C be released?

Ontology retrieval:

```text
Device X
→ current configuration
→ classification decision
→ applicable requirement instances
→ current evidence
→ conformity state
→ registration state
→ open gaps
→ release gate
```

Reasoner result:

```text
Classification: complete
Clinical evaluation: current
Certificate: valid
GSPRs: 124/126 satisfied
Open gaps: 2
Market release gate: BLOCKED
```

The LLM explains a conclusion already grounded in the graph.

## 43. Example: evidence question

User:

> Is battery endurance adequately verified for Device X?

The system should:

```text
1. Resolve current DeviceConfiguration.
2. Find battery-related risks.
3. Find associated RiskControlMeasures.
4. Find their VerificationEvidence.
5. Check evidence configuration coverage.
6. Check evidence approval/current status.
7. Run evidence constraints.
8. Retrieve the relevant test-report section if necessary.
9. Build the context packet.
10. Ask the LLM to explain the result.
```

This is preferable to blindly searching all PDFs for the word "battery."

## 44. Example: classification question

User:

> Why is Device X Class IIb?

The system retrieves:

```text
DEVC-001
→ CLD-002 ClassificationDecision
→ controlling facts
→ Annex VIII rules considered
→ rule evaluations
→ final class
→ classification rationale
→ source provisions
```

The LLM explains the reasoning without having to reconstruct it from scratch.

## 45. Example: change question

User:

> What must we reassess if the battery supplier changes?

The ontology traverses:

```text
SupplierChange
→ component
→ device configuration
→ affected risks
→ risk controls
→ evidence
→ GSPRs
→ clinical impact
→ technical documentation
→ UDI impact
→ notified-body impact
→ PMS relevance
```

Rules derive the required reassessments; constraints determine what remains unresolved; the LLM produces the human-readable impact summary.

## 46. Why ontology-first retrieval is preferable to pure RAG

Pure RAG often behaves like:

```text
Question
→ semantic similarity search
→ document chunks
→ LLM synthesis
```

Ontology-first reasoning behaves like:

```text
Question
→ entity resolution
→ typed graph traversal
→ deterministic rules
→ constraint validation
→ evidence retrieval
→ source retrieval
→ LLM synthesis
```

This provides better control over:

- device revision;
- intended-purpose version;
- evidence applicability;
- current versus superseded records;
- regulatory provenance;
- missing information;
- reasoning traceability;
- change propagation;
- lifecycle state.

Semantic similarity can still supplement graph traversal, but should not replace it.

## 47. Final design principle

Ontology notes transform the vault from:

```text
folder containing regulatory documents
```

into:

```text
regulatory knowledge graph
whose evidence includes those documents
```

The key architecture is:

> **The ontology tells the LLM what the relevant regulatory world looks like; rules and constraints determine what follows from it; technical files provide the evidence; and the LLM explains the resulting state to the user.**
