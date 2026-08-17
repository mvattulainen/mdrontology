---
id: DOC-MDR-MFR-USECASES-001
type: use-case-catalogue
title: EU MDR Manufacturer-Centric Ontology — Use Cases 1–19
version: 1.0
status: draft
tags:
  - eu-mdr
  - ontology
  - medical-device-manufacturer
  - use-cases
  - obsidian
  - quartz
---

# EU MDR Manufacturer-Centric Ontology — Use Cases 1–19

The solution is best understood as a **manufacturer regulatory knowledge platform**, not merely an MDR reference website. Its main value comes from connecting device facts, requirements, processes, evidence, decisions, lifecycle state, and regulatory provenance into one navigable and machine-reasonable structure.

## 1. Device-specific regulatory decision support

A regulatory affairs specialist could ask:

> How should Device X be classified under MDR?

Instead of returning generic text about Annex VIII, the system would assemble the actual device context:

```text
DeviceConfiguration
→ IntendedPurpose
→ duration
→ invasiveness
→ anatomical location
→ active-device characteristics
→ software function
→ candidate classification rules
→ classification decision
```

The result could explain which rules were considered, which facts triggered them, what evidence supports those facts, and why the final class was selected.

This use case applies equally to qualification, classification, accessory status, implantable status, software classification, substance-based devices, and similar regulatory boundary questions.

The important benefit is that the answer becomes **device-specific and auditable**, rather than generic MDR guidance.

---

## 2. Regulatory compliance gap assessment

The ontology can answer:

> What is missing before Device X complies with MDR?

Because requirements are represented as `ComplianceRequirementInstance` objects, the system can compare:

```text
Applicable requirement
    ↓
required activity
    ↓
required evidence
    ↓
actual evidence
    ↓
compliance status
```

For example:

```text
GSPR 14.x
    applicable = true
    compliance method = IEC/EN test
    required evidence = EMC test report
    current evidence = none
```

The ontology can create:

```text
ComplianceGap
    type = missing evidence
    owner = Verification
    blocks = MarketReleaseGate
```

This enables automated or semi-automated **MDR readiness assessments**.

---

## 3. Market-release readiness

One of the strongest practical applications is answering:

> Can we release this configuration onto the EU market?

The system could evaluate a lifecycle gate such as:

```text
MarketReleaseReady
```

against prerequisites including:

```text
classification complete
GSPR assessment complete
risk management acceptable
clinical evaluation current
verification complete
validation complete
technical documentation complete
conformity assessment valid
certificate valid where required
Declaration of Conformity approved
UDI assigned
required registrations completed
label and IFU released
PMS system established
```

Instead of a manually maintained checklist, the gate is backed by actual ontology relationships.

The answer could therefore be:

> Release blocked: 3 of 126 applicable compliance requirements remain unsatisfied.

and identify precisely which ones.

---

## 4. Technical-documentation traceability

A manufacturer frequently needs to answer questions such as:

> Which evidence demonstrates compliance with this GSPR?

or:

> Why is this test report in the technical file?

The ontology can traverse:

```text
GSPR
→ ComplianceRequirementInstance
→ ComplianceMethod
→ RiskControl
→ VerificationActivity
→ TestReport
→ DeviceConfiguration
```

That makes the system useful for preparing and maintaining Annex II/III technical documentation.

A reviewer could navigate from a device to a requirement, then to its evidence, or work backwards from a test report to see every requirement and risk control it supports.

This creates a **living GSPR matrix** rather than a spreadsheet that rapidly becomes stale.

---

## 5. Change-impact analysis

This may be one of the highest-value manufacturer use cases.

Suppose engineering proposes:

> Replace supplier A's polymer with material from supplier B.

The ontology can traverse the consequences:

```text
SupplierChange
→ Material
→ DeviceConfiguration
→ BiologicalRisk
→ RiskControl
→ BiocompatibilityEvidence
→ ClinicalEvaluation
→ GSPRs
→ Verification/Validation
→ TechnicalDocumentation
→ UDI assessment
→ NotifiedBody assessment
```

The system could produce an impact report such as:

```text
Potentially affected:
- biological evaluation
- material specifications
- supplier qualification
- risk-management file
- verification evidence
- clinical evaluation
- GSPR 10.x evidence
- notified-body change assessment

Not apparently affected:
- intended purpose
- software
- UDI-DI
```

The same mechanism can support software changes, packaging changes, sterilisation changes, manufacturing changes, labelling changes, and intended-purpose changes.

This turns the ontology into a **regulatory impact engine**.

---

## 6. Risk-management traceability

Instead of treating the risk-management file as a document, the system can model:

```text
Hazard
→ sequence of events
→ hazardous situation
→ harm
→ risk
→ risk control
→ verification
→ residual risk
→ benefit-risk determination
```

That permits questions such as:

> Which risk controls have no verification evidence?

> Which harms are associated with this complaint?

> Which residual risks appear in the IFU?

> Which GSPRs are supported by this risk control?

It can therefore augment ISO 14971-style risk-management activities while maintaining the MDR regulatory context.

---

## 7. Clinical-evidence management

A clinical team could use the ontology to investigate:

> Which clinical claims are not adequately supported?

The graph could connect:

```text
ClinicalClaim
→ IntendedPurpose
→ ClinicalEvidence
→ Literature
→ ClinicalInvestigation
→ EquivalenceAssessment
→ PMCF
→ ClinicalEvaluation
```

The system could identify, for example:

```text
Claim A
  supported by 4 evidence items

Claim B
  supported by 1 outdated study

Claim C
  no supporting evidence
```

It could also help determine which parts of the clinical evaluation require reconsideration after:

- a design change;
- new PMCF results;
- a new safety signal;
- changes in state of the art;
- introduction of a new clinical claim.

This supports maintaining the CER as a **continuous evidence model**, rather than periodically rewriting a standalone document.

---

## 8. PMS and vigilance reasoning

Post-market surveillance produces information that should propagate back into the device's compliance system.

For example:

```text
Complaint
→ adverse event
→ PMS signal
→ risk reassessment
→ clinical reassessment
→ CAPA
→ design change
→ labelling change
```

The ontology could answer:

> Which open PMS signals have not yet been reflected in risk management?

or:

> Which complaints contributed to this CAPA?

or:

> Does this event potentially meet serious-incident criteria?

The same architecture can support:

```text
PMS Plan
PMS Report
PSUR
PMCF
Trend
Incident
Serious Incident
FSCA
FSN
CAPA
```

This creates the closed feedback loop expected of a mature MDR compliance system.

---

## 9. PSUR and regulatory due-date management

Because rules and time are represented explicitly, the system can derive deadlines.

For example:

```text
Device Class IIb
+
Last PSUR approved 2026-03-15
+
PSUR cadence rule
=
Next review/update due 2027-03-15
```

Similar logic can support:

- certificate expiration;
- periodic clinical-evaluation review;
- supplier review;
- audit schedules;
- PMCF milestones;
- registration maintenance;
- source-review dates.

The ontology therefore becomes useful for **regulatory operations**, not just knowledge retrieval.

---

## 10. Audit and notified-body preparation

Before a notified-body audit or technical-documentation assessment, the manufacturer could ask:

> Show everything related to cybersecurity compliance for Device X.

The system could assemble:

```text
applicable GSPRs
→ cybersecurity risks
→ software requirements
→ risk controls
→ verification
→ validation
→ standards
→ test reports
→ unresolved CAPAs
→ PMS findings
```

Similarly:

> Show all open compliance gaps for the devices covered by Certificate Y.

That makes the vault useful as an **audit navigation layer** over otherwise fragmented regulatory records.

It does not replace the controlled document management system, but it can make the relationships between those records much easier to inspect.

---

## 11. Regulatory source impact analysis

A conventional document repository can tell you that a new MDCG document was published.

The ontology could eventually answer the more useful question:

> What does this source change potentially affect?

For example:

```text
Updated guidance
→ interpreted requirements
→ active rules
→ affected device classes
→ affected requirement instances
→ affected evidence
→ affected decisions
```

The result might be:

```text
New guidance potentially affects:
17 device configurations
4 classification decisions
11 clinical evaluations
3 internal procedures
2 active projects
```

This is a foundation for **regulatory intelligence linked directly to the product portfolio**.

---

## 12. Portfolio-level regulatory oversight

The ontology is not limited to one device.

Management or regulatory operations could query across the portfolio:

> Which Class III devices have open clinical evidence gaps?

> Which devices have certificates expiring within 12 months?

> Which marketed configurations have overdue PSURs?

> Which devices rely on the same critical supplier?

> Which devices use evidence generated against a superseded configuration?

> Which open CAPAs affect multiple device families?

This turns the graph into a regulatory portfolio-management system.

Quartz views could expose these as generated dashboards.

---

## 13. Responsibility and accountability mapping

Because roles and responsibilities are explicit, the system can answer:

> Who owns this obligation?

For example:

```text
ComplianceRequirementInstance
→ responsible_party
→ Regulatory Affairs

EvidenceItem
→ owner
→ Verification Engineer

CAPA
→ owner
→ Quality

ClinicalEvaluation
→ approved_by
→ Clinical Affairs
```

This is useful both operationally and during audits because it connects requirements to accountable organisational roles.

It can also distinguish activities performed by suppliers from responsibilities retained by the legal manufacturer.

---

## 14. Supplier and outsourced-process control

The ontology can show how suppliers affect regulatory compliance:

```text
Supplier
→ Component
→ DeviceConfiguration
→ Risk
→ Requirement
→ Verification
```

This enables questions such as:

> Which products are affected if Supplier X changes its manufacturing process?

or:

> Which critical supplier qualifications are linked to currently marketed products?

or:

> Which verification evidence depends on Supplier Y's component?

That makes supplier control part of the regulatory graph rather than an isolated QMS activity.

---

## 15. UDI and EUDAMED consistency checking

The ontology distinguishes the manufacturer's internal product model from its regulatory registrations.

That allows reconciliation such as:

```text
Internal Device Master
↔ Basic UDI-DI
↔ UDI-DI
↔ EMDN
↔ EUDAMED Device Registration
```

Potential queries include:

> Which released devices do not yet have a corresponding registration?

> Does the EUDAMED registration reflect the current intended purpose?

> Which change may require a new UDI-DI?

> Which internal device data differs from registered regulatory data?

This is essentially **regulatory master-data quality control**.

---

## 16. Training and MDR education

The 90 competency questions give the ontology a second major role: education.

Instead of teaching MDR as a sequence of Articles, training could start with manufacturer questions such as:

> When is PMCF required?

and then visually show:

```text
Device
→ clinical evidence
→ residual risks
→ evidence gaps
→ PMS
→ PMCF requirement
→ PMCF plan
→ resulting clinical evaluation updates
```

This teaches how regulatory obligations relate to actual product-development work.

The Quartz website could therefore serve simultaneously as:

- a reference manual;
- training environment;
- interactive ontology browser;
- question-based MDR learning resource.

---

## 17. Onboarding new regulatory personnel

A new regulatory specialist normally has to learn both MDR and the manufacturer's internal structure.

The ontology connects the two.

For example, a new employee could browse:

```text
Device X
→ intended purpose
→ classification
→ GSPR assessment
→ risk-management file
→ CER
→ certificate
→ PMS
→ open changes
```

This gives them an immediate mental model of both the product and its regulatory state.

The result is potentially much more useful than presenting them with several hundred documents in a document management system.

---

## 18. Grounding an LLM regulatory assistant

The ontology is particularly valuable for LLM use because it changes the architecture from:

```text
Question
→ retrieve similar text
→ LLM guesses answer
```

into:

```text
Question
→ identify device and context
→ retrieve ontology nodes
→ traverse relationships
→ execute deterministic rules
→ validate constraints
→ retrieve evidence and sources
→ LLM explains result
```

For example:

> Can we release software 4.2?

The LLM could receive:

```text
SoftwareVersion 4.2
belongs to DeviceConfiguration 18
Change CHG-023
Risk assessment complete
Software validation complete
Cybersecurity test missing
Clinical evaluation unaffected
UDI impact = none
NB notification assessment pending
MarketReleaseGate = blocked
```

The LLM's job is then primarily to **explain the structured conclusion**, rather than invent the conclusion itself.

This considerably reduces hallucination risk.

---

## 19. Explainable AI for regulatory reasoning

Because assertions carry provenance, an answer can show:

```text
Conclusion
    ↓
derived from Rule R
    ↓
using Facts A, B, C
    ↓
supported by Evidence E1, E2
    ↓
Rule R derived from MDR Provision P
```

This provides something ordinary RAG systems often lack: **reasoning traceability**.

A user can inspect why the system concluded something rather than merely seeing citations attached to generated prose.
