import { Creator, type CreatedEntities } from "../creator";
import { Character } from "./character";
import { GenderTable } from "../../tables/content/other/genderTable";
import { IllnessCreator } from "../status/illnessCreator";
import { characterStore, illnessStore } from "../persist/stores";
import type { Illness } from "../status/illness";

export class CharacterCreator extends Creator {
    hasIllness: boolean = false;

    create(): CreatedEntities {
        let character = new Character();
        character.gender = new GenderTable().withDice(this.dice).roll().combinedString;
        const illnesses = this.setIllness(character);

        return {
            Character: [character],
            Illness: illnesses
        };
    }

    private setIllness(character: Character): Illness[] {
        if (!this.hasIllness) {
            this.hasIllness = this.dice.getRandom() > 0.1;
        }
        if (this.hasIllness) {
            const createdEntities = new IllnessCreator().create();
            if (createdEntities.Illness && createdEntities.Illness.length > 0) {
                const illness = createdEntities.Illness[0] as Illness;
                character.illnesses.push(illness);
                return [illness];
            }
        }
        return [];
    }

    async persist(entities: CreatedEntities): Promise<void> {
        console.log("persist: ", entities);
        try {
            if (entities.Character && entities.Character.length > 0) {
                await characterStore.saveSpecificEntities(entities.Character);
                console.log(`Characters saved successfully.`);
            }
            if (entities.Illness && entities.Illness.length > 0) {
                await illnessStore.saveSpecificEntities(entities.Illness);
                console.log(`Illnesses saved successfully.`);
            }
        } catch (error) {
            console.error(`Failed to save entities:`, error);
            throw error;
        }
    }

    getEntityType(): string {
        return 'Character';
    }
}