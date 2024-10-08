import { Character } from "./character";
import {IllnessCreator} from "../status/IllnessCreator";
import {getStore} from "../persist/stores";
import {BaseCreator} from "../baseCreator";
import {CreationResult} from "../creationResult";
import {RollResult} from "../../tables/rollResult";
import {ComparisonResult, RelationalOperator} from "../../tables/comparisonResult";
import {genderTableName} from "../../tables/content/other/genderTable";
import type {Creator} from "../creator";
import type {Illness} from "../status/illness";

export class CharacterCreator extends BaseCreator{
    hasIllness: boolean = false;

    async create(): Promise<CreationResult> {
        let creationResult = new CreationResult();
        let character = new Character();
        let genderTable = this.tableManager.getTable(genderTableName);
        if(genderTable){
            let genderRollResult = genderTable.withDice(this.dice).roll();
            creationResult.addRollResult(genderRollResult);
            character.gender = genderRollResult.combinedString;
        }
        this.setIllness(character, creationResult);
        await this.setId(character);
        creationResult.addCreation(character);
        return creationResult;
    }

    private async setIllness(character: Character, creationResult: CreationResult) {
        if (!this.hasIllness) {
            let comparisonResult = new ComparisonResult(
                this.dice.getRandom(),
                RelationalOperator.GREATER,
                0.1,
                "has illness");
            creationResult.addRollResult(new RollResult().withComparisonResult(comparisonResult))
            this.hasIllness = comparisonResult.compare();
        }
        if (this.hasIllness) {
            let illnessResult = await new IllnessCreator(this.tableManager).create();
            let illness = illnessResult.getCreation() as Illness;
            character.illnesses.push(illness);

            creationResult.addCreationResult(illnessResult);
        }
    }

    async persist(character: Character): Promise<void> {
        console.log("persist character", character.id);
        try {
            let store = await getStore('characterStore');
            await store.saveEntity(character);
            console.log(`Characters saved successfully.`);
        } catch (error) {
            console.error(`Failed to save entities:`, error);
            throw error;
        }
    }
}