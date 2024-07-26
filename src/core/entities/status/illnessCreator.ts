import { Illness } from "./illness";
import { Creator, type CreatedEntities } from "../creator";
import { IllnessAdjectiveTable } from "../../tables/illness/illnessAdjectiveTable";
import { TimeTable } from "../../tables/other/TimeTable";
import { IllnessTypeTable } from "../../tables/illness/illnessTypeTable";
import { IllnessSymptomTable } from "../../tables/illness/illnessSymptomTable";
import { IllnessCureTable } from "../../tables/illness/illnessCureTable";
import { IllnessOriginTable } from "../../tables/illness/illnessOriginTable";
import { IllnessWorldEffectTable } from "../../tables/illness/illnessWorldEffectTable";
import { IllnessLoreTable } from "../../tables/illness/illnessLoreTable";
import { IllnessTransmissionTable } from "../../tables/illness/illnessTransmissionTable";
import { illnessStore } from "../persist/stores";

export class IllnessCreator extends Creator {
    create(): CreatedEntities {
        let illness = new Illness();
        illness.adjective = new IllnessAdjectiveTable().withDice(this.dice).roll().combinedString;
        illness.time = new TimeTable().withDice(this.dice).roll().combinedString;
        illness.type = new IllnessTypeTable().withDice(this.dice).roll().combinedString;

        let numberBeginningSymptoms = this.dice.rollWith(3);
        for(let i = 0; i < numberBeginningSymptoms; i++) {
            illness.beginningSymptoms.push(new IllnessSymptomTable().withDice(this.dice).roll().combinedString);
        }

        let numberOfSymptoms = this.dice.rollWith(3);
        for(let i = 0; i < numberOfSymptoms; i++) {
            illness.symptoms.push(new IllnessSymptomTable().withDice(this.dice).roll().combinedString);
        }

        illness.cure = new IllnessCureTable().withDice(this.dice).roll().combinedString;
        illness.origin = new IllnessOriginTable().withDice(this.dice).roll().combinedString;
        illness.worldEffect = new IllnessWorldEffectTable().withDice(this.dice).roll().combinedString;
        illness.lore = new IllnessLoreTable().withDice(this.dice).roll().combinedString;
        illness.age = new TimeTable().withDice(this.dice).roll().combinedString;
        illness.transmission = new IllnessTransmissionTable().withDice(this.dice).roll().combinedString;

        return { Illness: [illness] };
    }

    async persist(entities: CreatedEntities): Promise<void> {
        if (!entities.Illness || entities.Illness.length === 0) {
            console.log("No illnesses to persist.");
            return;
        }

        try {
            await illnessStore.saveSpecificEntities(entities.Illness);
            console.log(`Illnesses saved successfully.`);
        } catch (error) {
            console.error(`Failed to save illnesses:`, error);
            throw error;
        }
    }

    getEntityType(): string {
        return 'Illness';
    }
}