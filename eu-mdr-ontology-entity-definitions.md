---
id: DOC-MDR-ONTOLOGY-DEFINITIONS-001
type: ontology-glossary
title: EU MDR Manufacturer-Centric Ontology — Entity Definitions
version: 1.0
status: draft
tags:
  - eu-mdr
  - ontology
  - manufacturer
  - glossary
  - obsidian
  - quartz
---

# EU MDR Manufacturer-Centric Ontology — Entity Definitions

This glossary defines the ontology entities used in the manufacturer-centric EU MDR model.

Terminology classification:

- **MDR term** — explicitly defined or directly established by Regulation (EU) 2017/745.
- **Regulatory/industry term** — used in MDR practice, standards, guidance, QMS, clinical, risk-management, or vigilance practice, but not necessarily defined as an MDR Article 2 term.
- **Ontology term** — introduced deliberately by this ontology to make manufacturer information computable and traceable.

## Organisation

| Entity | Type | Definition for the ontology |
|---|---|---|
| **Manufacturer** | MDR term | A natural or legal person that manufactures or fully refurbishes a device, or has a device designed, manufactured or fully refurbished, and markets it under its name or trademark. In the ontology this is the organisation that ultimately bears the MDR manufacturer obligations for the device. |
| **LegalManufacturer** | Ontology term | The specific legal entity that fulfils the MDR `Manufacturer` role for a given device. It is useful where a corporate group contains multiple subsidiaries, manufacturing sites or brand owners. Normally `LegalManufacturer` is a specialization or role of `Manufacturer`, not a separate MDR economic-operator category. |
| **ManufacturingSite** | Ontology term | A controlled physical facility at which manufacturing, assembly, testing, packaging, sterilisation, release or another manufacturing activity is carried out. A manufacturer may have several manufacturing sites, and outsourced sites may belong to suppliers. |
| **PRRC** | MDR term | **Person Responsible for Regulatory Compliance**. The qualified person whose availability the manufacturer must ensure under Article 15 and to whom specified regulatory-compliance responsibilities are assigned. |
| **RegulatoryAffairsFunction** | Ontology/organisational term | The organisational function responsible for activities such as regulatory strategy, device qualification/classification, submissions, conformity-assessment interaction, registration, regulatory intelligence and maintenance of regulatory status. It is a function, not an MDR economic operator. |
| **QualityFunction** | Ontology/organisational term | The organisational function responsible for the quality-management system and associated controls such as document control, audits, nonconformity, CAPA, supplier quality and release oversight. |
| **Supplier** | Regulatory/QMS term | An external organisation providing a component, material, service or outsourced process used by the manufacturer. Manufacturer responsibility is not transferred merely because work is outsourced. |
| **CriticalSupplier** | Ontology/QMS term | A supplier whose product, service or process has a significant potential effect on device safety, performance, regulatory conformity or essential manufacturing controls. Criticality should be determined through risk-based supplier-control criteria rather than treated as an MDR legal category. |
| **AuthorisedRepresentative** | MDR term | A natural or legal person established in the EU that has received and accepted a written mandate from a manufacturer located outside the EU to act on the manufacturer's behalf in relation to specified MDR obligations. |

## Product

| Entity | Type | Definition for the ontology |
|---|---|---|
| **DeviceFamily** | Ontology term | A manufacturer-defined grouping of related devices sharing substantial design, technology, intended-purpose or regulatory characteristics. It is useful for portfolio reasoning and evidence grouping but must not be assumed to have a single universally applicable MDR legal meaning. |
| **DeviceModel** | Ontology term | A named product design or commercial model controlled by the manufacturer. It represents a stable product identity above individual variants or configurations. |
| **DeviceVariant** | Ontology term | A distinguishable version of a model differing in attributes such as size, capacity, geometry, option set, intended population or presentation while remaining related to the same model. |
| **DeviceConfiguration** | Ontology term | The exact controlled combination of hardware, software, materials, accessories, packaging, labelling, manufacturing baseline and intended-purpose version for which compliance is being assessed. This should normally be the principal scope of evidence and release reasoning. |
| **Accessory** | MDR term | An article that is not itself a medical device but is intended by its manufacturer to be used together with one or more particular medical devices specifically to enable the device to be used according to its intended purpose or to specifically and directly assist its medical functionality. |
| **Component** | Ontology/engineering term | A constituent part, material, subassembly or software element incorporated into or used by a device. A component is not automatically a separately regulated medical device. |
| **SoftwareVersion** | Ontology term | A controlled release/version of software incorporated in, forming part of, or itself constituting a device. It allows evidence, risk and configuration state to be tied to a precise software baseline. |
| **PackagingLevel** | UDI/ontology term | A defined level in the device's packaging hierarchy, such as unit package, box or higher commercial packaging level. It is relevant because UDI carriers and UDI-DIs can be associated with device and higher packaging levels, while shipping containers are treated differently. |

## Regulatory identity

| Entity | Type | Definition for the ontology |
|---|---|---|
| **BasicUDI-DI** | MDR/UDI term | The primary identifier of a device model/group used as the main key connecting devices with the same intended purpose, risk class and essential design/manufacturing characteristics. It is independent of packaging or production information and serves as a principal access key in EUDAMED. |
| **UDI-DI** | MDR/UDI term | The **Device Identifier** portion of the UDI. It is specific to a manufacturer and a device or packaging level and is used to identify the particular device identity in the UDI system. |
| **UDI-PI** | MDR/UDI term | The **Production Identifier** portion of the UDI. It identifies production-related information such as lot, serial number, software identification or manufacturing/expiry information where applicable. |
| **EMDNCode** | Regulatory term | A code from the **European Medical Device Nomenclature**, the nomenclature manufacturers use when registering medical devices in EUDAMED. |
| **DeviceClass** | MDR term | The regulatory risk class assigned under MDR Annex VIII: Class I, IIa, IIb or III. The class influences conformity-assessment route and multiple downstream obligations. |
| **ClassificationRule** | MDR term | A rule or sub-rule in Annex VIII used to determine a device's risk class from characteristics such as duration, invasiveness, active function, anatomical location or software function. |
| **Certificate** | MDR regulatory term | A conformity-assessment certificate issued by a notified body where the applicable MDR conformity-assessment procedure requires certification. The ontology should record its type, scope, issuing notified body, validity and device/configuration coverage. |
| **DeclarationOfConformity** | MDR term | The manufacturer's formal EU declaration stating that the applicable MDR requirements have been fulfilled for the device(s) covered. It is issued by the manufacturer after completion of the applicable conformity-assessment obligations. |

## Intended use / safety

| Entity | Type | Definition for the ontology |
|---|---|---|
| **IntendedPurpose** | MDR term | The use for which the manufacturer intends the device according to information supplied by the manufacturer, including the label, IFU, promotional/sales materials and clinical evaluation. It is one of the most consequential semantic objects in the ontology. |
| **Indication** | Clinical/regulatory term | A specific medical condition, disease, state, population or clinical circumstance for which use of the device is intended. It is usually narrower than the overall intended purpose. |
| **Contraindication** | Clinical/regulatory term | A circumstance, condition or patient characteristic in which the device should not be used because the expected risk is unacceptable or use is inappropriate. |
| **TargetPopulation** | Ontology/clinical term | The patient or subject population for which the device is intended, characterized for example by age, condition, anatomy or other relevant clinical attributes. |
| **IntendedUser** | Ontology/regulatory term | The type of person expected to operate or otherwise use the device, such as healthcare professional, trained operator, patient or lay person. |
| **UseEnvironment** | Ontology/risk term | The physical and operational environment in which the device is intended to be used, such as hospital, ambulance, home, operating theatre or laboratory. |
| **Hazard** | Risk-management term | A potential source of harm. It may originate from energy, biological material, software behaviour, mechanical conditions, usability, substances, cybersecurity or other sources. |
| **HazardousSituation** | Risk-management term | A circumstance in which people, property or the environment are exposed to one or more hazards. It links a hazard to a possible harm. |
| **Harm** | Risk-management term | Injury or damage to health, property or the environment resulting from a hazardous situation. In medical-device reasoning, patient or user injury is normally the primary concern. |
| **Risk** | MDR/risk-management concept | The combination of the probability of occurrence of harm and the severity of that harm. In the ontology a risk should link to the relevant device configuration, hazardous situation, harms and controls. |
| **RiskControl** | Risk-management term | A measure implemented to reduce risk, for example inherently safe design, protective measures or safety information. In the ontology it should normally be represented as `RiskControlMeasure`. |

## Requirements

| Entity | Type | Definition for the ontology |
|---|---|---|
| **GSPR** | MDR term | A **General Safety and Performance Requirement** from MDR Annex I. GSPRs establish the safety, performance, design and information requirements devices must satisfy when applicable. |
| **RegulatoryRequirement** | Ontology superclass | Any obligation, condition or required state derived from legislation, implementing/delegated legislation or another applicable regulatory source. A GSPR is one kind of RegulatoryRequirement. |
| **StandardRequirement** | Ontology term | A requirement or normative provision derived from a standard used by the manufacturer. It should retain provenance to the exact standard/version/clause and must not be confused with an MDR legal obligation. |
| **DesignRequirement** | Engineering/ontology term | A controlled requirement that the device design must satisfy. It may be derived from user needs, risk controls, GSPRs, standards, clinical needs or engineering specifications. |
| **ClinicalRequirement** | Ontology term | A requirement concerning clinical safety, clinical performance, clinical evidence, clinical evaluation, clinical investigation or PMCF. |
| **PMSRequirement** | Ontology term | A requirement concerning post-market surveillance, including PMS planning, data collection, reporting, trend analysis, PMCF or PSUR obligations. |

## Evidence

| Entity | Type | Definition for the ontology |
|---|---|---|
| **TechnicalDocumentation** | MDR term | The manufacturer-controlled body of documentation described principally in MDR Annexes II and III demonstrating device design, manufacturing, safety, performance and post-market compliance. It is better represented as a structured set of evidence than as one file. |
| **TestReport** | Evidence term | A controlled record describing a test method, test object/configuration, conditions, results, acceptance criteria and conclusion. |
| **VerificationEvidence** | Engineering/ontology term | Evidence demonstrating that specified design or process outputs satisfy specified requirements — essentially, evidence that the implementation meets its specifications. |
| **ValidationEvidence** | Engineering/ontology term | Evidence demonstrating that the resulting device, process or system is suitable for its intended use or intended purpose under applicable conditions. |
| **ClinicalEvidence** | MDR term | Clinical data and clinical-evaluation results pertaining to a device of sufficient amount and quality to permit a qualified assessment of whether the device is safe and achieves the intended clinical benefit when used as intended. |
| **CER** | Regulatory term | **Clinical Evaluation Report**: the controlled report documenting the clinical evaluation, its evidence, methodology, assessment and conclusions. |
| **PMCFReport** | MDR/clinical term | A report documenting results and conclusions of post-market clinical follow-up activities and the implications for clinical evaluation, risk management and other post-market activities. |
| **RiskManagementFile** | Risk-management term | The set of records and evidence documenting risk-management activities for the device throughout its lifecycle. It may be one managed collection rather than one physical file. |
| **UsabilityFile** | Usability-engineering term | A controlled collection of usability-engineering records, including use specification, use-related risk analysis, formative work and usability validation evidence. |
| **BiologicalEvaluation** | Regulatory/scientific term | The documented assessment of biological safety for device materials and patient/user contact, based on biological risks, existing information and testing as justified. |
| **SoftwareDocumentation** | Ontology umbrella term | The controlled documentation used to demonstrate software lifecycle and regulatory conformity, including architecture, software requirements, risk controls, cybersecurity information, verification, validation, configuration and release evidence. |

## Lifecycle / process

| Entity | Type | Definition for the ontology |
|---|---|---|
| **DesignProcess** | QMS/ontology term | The controlled process through which user needs and regulatory requirements are transformed into device design requirements, outputs, verification, validation and released design. |
| **RiskManagementProcess** | MDR/QMS concept | The continuous lifecycle process for identifying hazards, estimating/evaluating risks, implementing and verifying controls, evaluating residual risk and updating the analysis from production and post-market information. |
| **ClinicalEvaluationProcess** | MDR term/concept | The systematic and planned process of continuously generating, collecting, analysing and assessing clinical data relating to a device to verify safety, performance and clinical benefit when used as intended. |
| **ConformityAssessment** | MDR term | The process demonstrating whether the MDR requirements relating to a device have been fulfilled. Depending on device class and route, this can involve manufacturer activities and notified-body assessment. |
| **ProductionProcess** | QMS/ontology term | The controlled set of manufacturing activities that transform approved inputs/components into the finished device, including relevant process controls and validation. |
| **ReleaseProcess** | QMS/ontology term | The controlled decision process confirming that a finished device/configuration satisfies defined manufacturing, quality and regulatory prerequisites before release or placement on the market. |
| **PMSProcess** | MDR term/concept | The manufacturer's systematic and proactive process for gathering, recording and analysing data on quality, performance and safety throughout the device's lifetime and determining necessary preventive or corrective action. |
| **VigilanceProcess** | MDR regulatory term/concept | The process for assessing and reporting serious incidents and FSCAs and interacting with competent authorities regarding reportable safety events. |
| **CAPA** | QMS term | **Corrective and Preventive Action** system/process for investigating actual or potential quality/compliance problems, determining causes, implementing actions and verifying effectiveness. |
| **ChangeControl** | QMS/ontology term | The formal process used to propose, assess, approve, implement and verify changes to devices, software, processes, suppliers, labelling, documentation or regulatory state. |

## Post-market / events

| Entity | Type | Definition for the ontology |
|---|---|---|
| **Complaint** | QMS/PMS term | A communication alleging a deficiency related to the identity, quality, durability, reliability, usability, safety or performance of a released device. A complaint may or may not constitute an MDR incident. |
| **Incident** | MDR term | A malfunction or deterioration in device characteristics or performance, including use error due to ergonomic features, inadequacy in manufacturer-supplied information, or an undesirable side-effect. |
| **SeriousIncident** | MDR term | An incident that directly or indirectly led, might have led or might lead to death, serious deterioration in health, or a serious public-health threat, subject to the specific MDR criteria. |
| **Trend** | MDR/PMS concept | A statistically or clinically significant increase in the frequency or severity of certain incidents or expected undesirable side-effects that may significantly affect benefit-risk and may trigger trend reporting. |
| **Signal** | PMS/vigilance ontology term | A new or changed indication arising from one or more data sources suggesting a potentially meaningful safety, performance or benefit-risk issue requiring assessment. `Signal` is useful operationally but should not be treated as though MDR Article 2 defines it as a standalone legal entity. |
| **FSCA** | MDR term | **Field Safety Corrective Action**: corrective action taken by a manufacturer for technical or medical reasons to prevent or reduce the risk of a serious incident associated with a device made available on the market. |
| **FieldSafetyNotice** | MDR term | A communication sent by the manufacturer to users or customers concerning an FSCA. Often abbreviated **FSN**. |
| **Nonconformity** | QMS/regulatory term | Failure to fulfil a specified requirement. It can concern product, process, QMS, technical documentation or regulatory requirements. |
| **CorrectiveAction** | QMS/MDR concept | Action taken to eliminate the cause of a detected nonconformity or other undesirable situation and prevent recurrence. In post-market contexts it can include field action where appropriate. |
| **PreventiveAction** | QMS term | Action intended to eliminate the cause of a potential nonconformity or undesirable condition before occurrence. In modern risk-based QMS practice preventive controls are often embedded throughout risk management rather than handled only as isolated CAPA records. |
| **PSUR** | MDR term | **Periodic Safety Update Report**. For specified device classes, the manufacturer summarizes PMS results and conclusions, including benefit-risk conclusions, PMCF findings, sales/use information and population characteristics, and updates it at the applicable MDR frequency. |
| **PMSReport** | MDR term | A post-market surveillance report for Class I devices summarising results and conclusions from PMS data and describing preventive and corrective actions taken. |
| **SupplyInterruption** | MDR regulatory/ontology term | An anticipated interruption in supply of certain devices that may fall within current MDR manufacturer notification obligations where the specified legal conditions are met. The ontology represents the event separately from the legal determination that notification is required. |
