import { readFile } from "node:fs/promises"
import path from "node:path"

const typeKey = (name) => name
  .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
  .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
  .replace(/[\s_/]+/g, "-")
  .replace(/[^A-Za-z0-9-]+/g, "-")
  .replace(/-+/g, "-")
  .replace(/^-|-$/g, "")
  .toLowerCase()

const aliases = {
  "clinical-evaluation": "clinical-evaluation-process",
  "clinical-evaluation-report": "cer",
  "fsn": "field-safety-notice",
  "gspr-requirement": "gspr",
  "risk-control-measure": "risk-control",
  "technical-documentation-set": "technical-documentation",
}

// Definitions not present as rows in eu-mdr-ontology-entity-definitions.md.
// These complete the executable class catalogue while retaining the glossary's
// distinction between legal, industry and ontology terminology.
const supplementalDefinitions = {
  "activity": "A unit of work performed by an actor or process to fulfil, assess or maintain a regulatory, quality or product obligation.",
  "actor-registration": "The EUDAMED registration record and process through which an economic operator obtains or maintains its actor identity, including its Single Registration Number where applicable.",
  "answer-pattern": "A reusable structure specifying which facts, relationships, evidence, decisions and provenance should be assembled to answer a competency question.",
  "article10a-assessment": "A documented assessment of whether an anticipated supply interruption or discontinuation meets the conditions that trigger notification under MDR Article 10a.",
  "article10a-notification": "A notification made to the relevant competent authority and affected economic operators or institutions when the conditions in MDR Article 10a are met.",
  "assertion": "A reviewable subject-predicate-object statement whose status, provenance, evidence and temporal validity can be recorded and evaluated.",
  "assessment": "A structured evaluation of defined information against stated criteria that produces a documented finding, conclusion or decision input.",
  "audit": "A systematic, independent and documented examination used to determine whether activities and results conform to planned arrangements and applicable requirements.",
  "benefit-risk-determination": "A documented conclusion comparing the device's demonstrated benefits with its individual and overall residual risks for the intended purpose and population.",
  "ce-marking-state": "The controlled status describing whether and on what basis CE marking may be affixed to a device configuration.",
  "certificate-registration": "The EUDAMED record representing the registration or update of a conformity-assessment certificate and its regulatory status.",
  "change": "A controlled modification to a product, process, supplier, document, software item or regulatory state that requires impact assessment and approval.",
  "change-impact-assessment": "A documented evaluation of how a proposed or implemented change affects device configuration, risk, clinical evidence, regulatory status, documentation and required actions.",
  "classification-decision": "The approved, traceable conclusion assigning a device class by applying relevant Annex VIII rules to controlled device facts.",
  "clinical-claim": "A manufacturer statement about a device's clinical benefit, performance or outcome that must remain consistent with the intended purpose and supported by clinical evidence.",
  "clinical-evaluation-plan": "The controlled plan defining the scope, methods, data sources, appraisal criteria and outputs for clinical evaluation of a device.",
  "clinical-investigation": "A systematic investigation involving one or more human subjects undertaken to assess the safety or performance of a medical device.",
  "common-specification": "A set of technical or clinical requirements, other than a standard, issued by the European Commission for devices, processes or systems under the MDR.",
  "comparator-device": "A device selected as a reference for clinical, performance, state-of-the-art or equivalence analysis.",
  "competency-question": "A question the ontology must be able to answer using explicitly represented facts, relationships, rules, evidence and provenance.",
  "competent-authority": "A national authority designated by a Member State to carry out functions assigned under the MDR.",
  "compliance-gap": "A recorded absence, insufficiency, inconsistency or unresolved state that prevents a requirement or lifecycle gate from being demonstrated as satisfied.",
  "compliance-requirement-instance": "A device-, configuration-, market- and lifecycle-specific instance of a generic requirement, including applicability, responsible party, required evidence and compliance state.",
  "compliance-state": "A controlled status expressing the evaluated condition of a requirement instance, such as satisfied, not satisfied, not applicable or unresolved.",
  "configuration-baseline": "An approved, uniquely identified snapshot of the product and documentation items that together define a device configuration at a point in time.",
  "conformity-assessment-route": "The selected MDR conformity-assessment procedure applicable to a device, considering its class, characteristics and any notified-body involvement.",
  "constraint": "A machine-checkable condition that valid ontology data or a compliant product context is required to satisfy.",
  "controlled-vocabulary": "A governed set of permitted values and meanings used to keep ontology data consistent and machine-checkable.",
  "decision": "An approved conclusion selected from available alternatives on the basis of stated facts, criteria, evidence and authority.",
  "design-change": "A controlled modification to the device design, design requirements or design outputs that is evaluated for downstream safety, performance and regulatory impact.",
  "device": "An instrument, apparatus, appliance, software, implant, reagent, material or other article intended by its manufacturer for a medical purpose and meeting the MDR definition of a medical device.",
  "device-registration": "The EUDAMED record and process used to register and maintain required device and UDI information.",
  "distributor": "A natural or legal person in the supply chain, other than the manufacturer or importer, that makes a device available on the market up until putting it into service.",
  "document": "A controlled information object that may have one or more identified versions and can serve as a source, record or evidence container.",
  "document-version": "A uniquely identified revision of a controlled document with defined status, approval, effective dates and supersession relationships.",
  "equivalence-assessment": "A documented comparison evaluating whether clinical, technical and biological characteristics support a claim of equivalence between devices.",
  "eu-regulation": "A binding legislative act of the European Union that is directly applicable in Member States and can serve as a legal source for requirements.",
  "eudamed-module": "A functional part of EUDAMED used for a defined regulatory information domain such as actor, UDI/device, certificate or vigilance data.",
  "event": "A time-bounded occurrence relevant to a device, organisation, process or regulatory state that may trigger assessment or action.",
  "evidence-item": "A controlled piece of objective information used to support or challenge a requirement, claim, decision, risk control or compliance conclusion.",
  "evidence-type": "A category describing the nature and expected content of evidence required for a regulatory or quality purpose.",
  "evidence-update": "A controlled revision, replacement or addition that changes the evidence available for an assessment or compliance conclusion.",
  "gate-decision": "The approved outcome of evaluating a lifecycle gate, stating whether progression is allowed and recording any conditions or unresolved gaps.",
  "guidance": "A non-binding interpretive or implementation source issued by an authority or recognised regulatory group.",
  "hardware-revision": "A controlled version of the physical design or hardware implementation included in a device configuration.",
  "harmonised-standard": "A European standard cited in the Official Journal of the European Union that may confer a presumption of conformity for the requirements it covers.",
  "identifier": "A controlled code or value used to distinguish and reference an ontology object without treating the identifier as the object itself.",
  "ifu": "The manufacturer-supplied instructions for use describing the information needed to use a device safely and as intended.",
  "importer": "A natural or legal person established in the Union that places a device from a third country on the Union market.",
  "incident-assessment": "A documented evaluation determining the nature, seriousness, reportability, causal factors and required actions for a device-related incident or complaint.",
  "intended-purpose-version": "A controlled revision of the manufacturer's intended-purpose statement used to scope classification, risk, clinical evaluation and evidence.",
  "internal-evidence": "Evidence generated or controlled within the manufacturer organisation rather than obtained from an external source.",
  "internal-requirement": "A manufacturer-controlled requirement derived from design, quality, risk, business or process needs rather than directly from an external normative source.",
  "internal-source": "A manufacturer-controlled source document from which internal requirements, decisions or evidence context are derived.",
  "label": "Written, printed or graphic information appearing on the device, its packaging or accompanying materials to identify it and support safe use.",
  "labelling-change": "A controlled modification to a label, instructions for use, packaging text, symbol, translation or other manufacturer-supplied information.",
  "landing-page": "A navigational entry page that introduces the knowledge system and directs users to its principal views and content areas.",
  "legal-provision": "A traceable article, annex, paragraph or other bounded fragment of binding law from which requirements, rules or decisions may be derived.",
  "legal-source": "A binding legal instrument used as authoritative provenance for regulatory requirements and decisions.",
  "lifecycle-gate": "A defined review point at which stated evidence and compliance criteria must be evaluated before a product or process advances.",
  "lifecycle-state": "A controlled status representing the current stage of a product, document, process or regulatory object during its lifecycle.",
  "management-review": "A formal review by top management of the continuing suitability, adequacy and effectiveness of the quality management system.",
  "manufacturing-change": "A controlled modification to a manufacturing method, process parameter, site, equipment or production control.",
  "market": "A jurisdiction or geographic regulatory context in which a device is intended to be placed, supplied or maintained.",
  "market-release-gate": "The lifecycle gate that verifies whether a defined device configuration is ready for lawful release or placement on a specified market.",
  "material-specification": "A controlled definition of the identity, properties, acceptance criteria and use of a material in a device configuration.",
  "mdcg-guidance": "A non-binding guidance document endorsed by the Medical Device Coordination Group to support consistent interpretation or implementation of medical-device legislation.",
  "meta-page": "A project-governance page explaining the ontology's modelling conventions, maintenance approach or use.",
  "no-action-decision": "A documented decision that no corrective, preventive, regulatory or product action is required, including the evidence and rationale supporting that conclusion.",
  "notified-body": "A conformity-assessment body designated under the MDR to perform specified third-party assessment activities.",
  "notified-body-application": "A manufacturer's formal application to a notified body for an MDR conformity-assessment activity, with defined device and procedure scope.",
  "ontology-class": "A governed category of entities sharing a defined meaning and role in the ontology.",
  "organisation": "A legal, administrative or operational body represented as an actor, owner or responsible party in the manufacturer compliance system.",
  "packaging-configuration": "The controlled combination of packaging levels, materials, labels and presentation associated with a device configuration.",
  "person": "An individual represented because they perform a role, hold responsibility or participate in a regulatory or quality activity.",
  "pmcf-plan": "The controlled plan for proactively collecting and evaluating clinical data from use of a CE-marked device within its intended purpose.",
  "pmcf-result": "A discrete finding or conclusion produced by a post-market clinical follow-up activity.",
  "pms-data": "A collected post-market data item or dataset concerning device quality, performance, safety, use or market experience.",
  "pms-data-source": "A defined origin of post-market information, such as complaints, vigilance reports, literature, registries, surveys or service data.",
  "pms-finding": "A documented observation or conclusion resulting from analysis of post-market surveillance data.",
  "pms-plan": "The documented plan defining how the manufacturer will proactively collect and evaluate post-market information for a device.",
  "pms-system": "The manufacturer-managed system of processes, responsibilities and records used to plan, collect, analyse and act on post-market surveillance information.",
  "process": "A controlled set of related activities that transforms inputs into defined outputs under assigned responsibilities and controls.",
  "production-unit": "An individual manufactured item, batch, lot or other production-level object to which production identifiers and records may apply.",
  "qms": "The organisational structure, responsibilities, procedures, processes and resources used to implement quality management and meet applicable regulatory requirements.",
  "qms-process": "A controlled process operating within the quality management system with defined inputs, outputs, ownership, controls and records.",
  "record-type": "A governed category specifying the expected purpose, content and retention context of a record.",
  "registration-state": "A controlled status indicating the current condition of an actor, device, certificate or submission registration.",
  "regulatory-change": "A controlled change to an applicable law, guidance, standard, registration, certificate or regulatory interpretation that may affect the device or QMS.",
  "relation-definition": "The governed contract for an ontology predicate, including its label, domain, range and logical or provenance constraints.",
  "requirement": "A stated need, obligation or condition that a product, process, organisation or evidence set is expected to fulfil.",
  "residual-risk": "The risk remaining after risk-control measures have been implemented and verified.",
  "responsibility-assignment": "A traceable allocation of a duty, decision right, review, approval or ownership obligation to an organisation, role or person.",
  "risk-management": "The coordinated application of policies, procedures and practices to analyse, evaluate, control and monitor risk throughout the device lifecycle.",
  "role": "A defined set of responsibilities and authority that may be assigned to a person or organisational function.",
  "rule": "A declared inference or decision rule that derives a conclusion from stated conditions while retaining its source and rationale.",
  "scientific-literature": "A published scientific source used as evidence or state-of-the-art input in clinical, risk or performance evaluation.",
  "sequence-of-events": "The ordered chain of events and conditions that can lead from a hazard to a hazardous situation and possible harm.",
  "shortage-risk": "The evaluated possibility and consequence of insufficient device supply for patients or healthcare systems.",
  "software-change": "A controlled modification to software requirements, code, configuration, architecture, data or cybersecurity characteristics.",
  "source": "An identifiable origin of information used as provenance for a requirement, rule, assertion, decision or evidence item.",
  "source-fragment": "A bounded, citable part of a source used to provide precise provenance for an ontology statement.",
  "source-update": "A new version, amendment or status change affecting a legal, guidance, standard, scientific or internal source.",
  "srn": "The Single Registration Number issued through EUDAMED to identify a registered economic operator.",
  "sscp": "The manufacturer-prepared summary of safety and clinical performance required for applicable implantable and Class III devices and validated by the notified body.",
  "standard": "A document established by consensus and approved by a recognised body that provides rules, guidelines or characteristics for repeated use.",
  "state-of-the-art": "The generally acknowledged current level of technical and clinical development used as a benchmark for safety, performance and benefit-risk evaluation.",
  "submission": "A controlled package or transmission of regulatory information sent to an authority, notified body or regulatory information system.",
  "supplier-change": "A controlled modification involving a supplier, supplied item, outsourced process, site or supplier-control status.",
  "supplier-control-process": "The QMS process used to select, qualify, monitor and control suppliers and outsourced processes according to their risk and impact.",
  "supply-discontinuation": "The planned permanent cessation of supply of a device in a market or to affected customers.",
  "supply-forecast": "A time-based estimate of expected device availability, demand and potential supply constraints.",
  "supply-status": "A controlled status describing current or anticipated device availability in a defined market and time period.",
  "system": "A combination of interacting components or devices organised to perform a defined function in a product or operational context.",
  "team-nb-guidance": "A non-binding position paper or guidance document issued by the European association of medical-device notified bodies.",
  "training": "A planned activity that develops and records the competence needed to perform assigned work correctly.",
  "traceability-record": "A record linking an identifier, product, organisation, transaction, submission or lifecycle event so its history and context can be reconstructed.",
  "translation": "A controlled language version of manufacturer-supplied information, linked to its source version and review or approval state.",
  "use-case-demonstration": "A worked example showing how represented entities, relationships, rules and evidence answer a high-impact manufacturer use case.",
  "use-limitation": "A condition or restriction that narrows where, how, by whom or for whom a device may be used safely and as intended.",
  "view": "A curated navigation or query page that presents ontology content for a particular task or perspective.",
}

const mdrTerms = new Set([
  "accessory", "actor-registration", "article10a-assessment", "article10a-notification", "authorised-representative",
  "basic-udi-di", "ce-marking-state", "certificate", "certificate-registration", "classification-rule",
  "clinical-evaluation", "clinical-evidence", "clinical-investigation", "common-specification", "competent-authority",
  "conformity-assessment", "declaration-of-conformity", "device", "device-class", "device-registration", "distributor",
  "eudamed-module", "fsca", "fsn", "gspr-requirement", "importer", "intended-purpose", "manufacturer",
  "notified-body", "notified-body-application", "pmcf-plan", "pmcf-report", "pms-plan", "pms-report", "pms-system",
  "prrc", "psur", "risk", "risk-management-process", "serious-incident", "srn", "sscp", "supply-interruption",
  "technical-documentation-set", "trend", "udi-di", "udi-pi",
])

const regulatoryIndustryTerms = new Set([
  "audit", "capa", "cer", "clinical-evaluation-report", "complaint", "competent-authority", "contraindication",
  "emdn-code", "equivalence-assessment", "eu-regulation", "guidance", "harm", "harmonised-standard", "hazard",
  "hazardous-situation", "ifu", "indication", "label", "management-review", "mdcg-guidance", "qms", "qms-process",
  "residual-risk", "risk-control-measure", "risk-management", "scientific-literature", "standard", "state-of-the-art",
  "supplier", "team-nb-guidance", "test-report", "training",
])

const normalizeGlossaryType = (raw) => {
  if (/MDR/i.test(raw)) return "MDR"
  if (/ontology/i.test(raw)) return "Ontology"
  return "Regulatory/industry"
}

export async function loadEntityDefinitions(root) {
  const glossary = await readFile(path.join(root, "eu-mdr-ontology-entity-definitions.md"), "utf8")
  const sourceEntries = new Map()
  for (const line of glossary.split(/\r?\n/)) {
    const match = line.match(/^\| \*\*([^*]+)\*\* \| ([^|]+) \| (.+) \|$/)
    if (!match) continue
    sourceEntries.set(typeKey(match[1]), {
      terminologyType: normalizeGlossaryType(match[2].trim()),
      definition: match[3].trim().replaceAll("`", ""),
    })
  }

  return (classKey) => {
    const sourceKey = aliases[classKey] ?? classKey
    const source = sourceEntries.get(sourceKey)
    const definition = supplementalDefinitions[classKey] ?? source?.definition
    if (!definition) throw new Error(`No entity definition is available for ontology class ${classKey}`)
    const terminologyType = mdrTerms.has(classKey)
      ? "MDR"
      : regulatoryIndustryTerms.has(classKey)
        ? "Regulatory/industry"
        : source?.terminologyType ?? "Ontology"
    return { definition, terminologyType }
  }
}
