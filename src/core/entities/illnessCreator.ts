import {Illness} from "./illness";
import {Creator} from "./creator";
import {IllnessAdjectiveTable} from "../tables/illness/illnessAdjectiveTable";
import {TimeTable} from "../tables/other/TimeTable";
import {IllnessTypeTable} from "../tables/illness/illnessTypeTable";
import {IllnessSymptomTable} from "../tables/illness/illnessSymptomTable";
import {IllnessCureTable} from "../tables/illness/illnessCureTable";
import {IllnessOriginTable} from "../tables/illness/illnessOriginTable";
import {IllnessWorldEffectTable} from "../tables/illness/illnessWorldEffectTable";
import {IllnessLoreTable} from "../tables/illness/illnessLoreTable";
import {IllnessTransmissionTable} from "../tables/illness/illnessTransmissionTable";
import {illnessStore} from "./stores";

export class IllnessCreator extends Creator{
    create(){
        let illness = new Illness();
        illness.adjective = new IllnessAdjectiveTable().withDice(this.dice).roll().combinedString;
        illness.time = new TimeTable().withDice(this.dice).roll().combinedString;
        illness.type = new IllnessTypeTable().withDice(this.dice).roll().combinedString;
        let numberBeginningSymptoms = this.dice.rollWith(3)
        for(let i = 0; i < numberBeginningSymptoms; i++){
            illness.beginningSymptoms.push(new IllnessSymptomTable().withDice(this.dice).roll().combinedString);
        }
        let numberOfSymptoms = this.dice.rollWith(3);
        for(let i = 0; i < numberOfSymptoms; i++){
            illness.symptoms.push(new IllnessSymptomTable().withDice(this.dice).roll().combinedString);
        }
        /* TODO
        let numberOfMagicalSymptoms = this.dice.rollWith(1)-1;
        for(let i = 0; i < numberOfMagicalSymptoms; i++){
            illness.symptoms.push(new MagicTalentTable().withDice(this.dice).roll().combinedString);
        }*/
        illness.cure = new IllnessCureTable().roll().combinedString;
        illness.origin = new IllnessOriginTable().roll().combinedString;
        illness.worldEffect = new IllnessWorldEffectTable().roll().combinedString;
        illness.lore = new IllnessLoreTable().roll().combinedString;
        illness.age = new TimeTable().roll().combinedString;
        illness.transmission = new IllnessTransmissionTable().roll().combinedString;
        return illness;
    }

    async createWithPersistence() {
        let illness = this.create();
        try {
            await illnessStore.saveEntity(illness);
            console.log(`Illness with id ${illness.id} saved successfully.`);
        } catch (error) {
            console.error(`Failed to save illness with id ${illness.id}:`, error);
        }
        return illness;
    }
}