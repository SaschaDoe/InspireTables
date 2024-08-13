import {Table} from "../../table";

//TODO: combination of causes
//TODO: probability from risk to ceratin
//TODO: all attributes can be known and unknown
//TODO: leading to one overall known status
//TODO: Necessary vs sufficient causes
export const illnessOrigins: string[] = [
    "diet",
    "autoimmune reaction",
    "toxins", //TODO which one
    "radiation",
    "lack of physical activity",
    "stress",
    "isolation",
    "natural mutation",
    "laboratory accident",
    "biological warfare",
    "environmental factors",
    "zoonotic transfer",
    "mystical curse",
    "divine punishment",
    "alien organism",
    "magical experimentation",
    "ancient relic",
    "genetic predisposition",
    "mythical creature",
    "demonic presence",
    "planetary alignment",
    "failed alchemy",
    "vampire bite",
    "necromantic magic",
    "otherworldly portal",
    "eldritch entity",
    "divine intervention",
    "arcane contagion",
    "witch's brew",
    "pollution",
    "radiation",
    "psychosomatic response",
    "technological malfunction",
    "time travel paradox",
    "interdimensional rift"
];

export class IllnessOriginTable extends Table{
    constructor() {
        super();
        this.title = "Illness Origin";
        this.withEntriesFromList(illnessOrigins);
    }
}