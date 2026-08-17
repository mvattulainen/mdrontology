import { compileOntology, createContextPacket } from "./lib/ontology.mjs"

const [questionId = "CQ-02-01", subjectId = "DEVC-0001", relevantDate] = process.argv.slice(2)
const api = await compileOntology({ write: false, relevantDate: relevantDate ?? new Date().toISOString().slice(0, 10) })
console.log(JSON.stringify(createContextPacket(api, questionId, subjectId, relevantDate), null, 2))

