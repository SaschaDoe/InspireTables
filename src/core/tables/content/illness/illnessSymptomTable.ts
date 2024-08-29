import {Table} from "../../table";

const illnessSymptoms: string[] = [
    "fever",
    "cough",
    "sore throat",
    "runny nose",
    "headache",
    "muscle aches",
    "fatigue",
    "nausea",
    "vomiting",
    "diarrhea",
    "shortness of breath",
    "chest pain",
    "dizziness",
    "loss of appetite",
    "sweating",
    "chills",
    "joint pain",
    "rash",
    "swelling",
    "dehydration",
    "congestion",
    "earache",
    "sneezing",
    "weight loss",
    "night sweats",
    "insomnia",
    "abdominal pain",
    "constipation",
    "blurry vision",
    "confusion",
    "mood swings",
    "dizziness",
    "blurred vision",
    "hallucinations",
    "loss of magic",
    "mana depletion",
    "poisoned",
    "burned",
    "frozen",
    "paralyzed",
    "cursed",
    "sleeping",
    "confused",
    "silenced",
    "enchanted",
    "weakened",
    "strengthened",
    "hasted",
    "slowed",
    "regenerating",
    "bleeding",
    "stunned",
    "petrified",
    "charmed",
    "berserk",
    "invisible",
    "fatigued",
    "exhausted",
    "vulnerable",
];

export const IllnessSymptomTableName = "Illness Symptom";

export class IllnessSymptomTable extends Table{
    constructor() {
        super();
        this.title = IllnessSymptomTableName;
        this.addEntriesFromList(illnessSymptoms);
    }
}