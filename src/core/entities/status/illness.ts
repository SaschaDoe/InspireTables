import {Entity} from "../entity";

export class Illness extends Entity{
    time = "";
    type = "";
    beginningSymptoms: string[] = [];
    symptoms: string[] = [];
    cure = "";
    origin = "";
    worldEffect = "";
    lore = "";
    age = "";
    transmission = "";
    adjective = "";
    onset = "";
    prognosis = "";
    impactOnFunctioning = "";
    levelOfCare = "";

}