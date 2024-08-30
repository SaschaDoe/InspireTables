import { type CreatedEntities, FunctionType, Nothing } from "./functionType";
import { Illness } from "../../../entities/status/illness";
import { CharacterCreator } from "../../../entities/character/characterCreator";
import type {TableManager} from "../../../entities/persist/tableManager";
import type {CreationResult} from "../../../entities/creationResult";
import {IllnessCreator} from "../../../entities/status/IllnessCreator";

type FunctionCreator = (input: any) => CreationResult;

export class FunctionFactory {
    private customFunctions: Map<FunctionType, FunctionCreator> = new Map();
    private tableManager: TableManager | undefined;

    getFunction(type: FunctionType): FunctionCreator {
        if (this.customFunctions.has(type)) {
            return this.customFunctions.get(type)!;
        }

        if(this.tableManager){
            let tableManager = this.tableManager;
            switch (type) {
                case FunctionType.Nothing:
                    return Nothing;
                case FunctionType.CreateIllness:
                    return () => {
                        return new IllnessCreator(tableManager).create();
                    }
                case FunctionType.CreateCharacterWithIllness:
                    return () => {
                        let characterCreator = new CharacterCreator(tableManager);
                        characterCreator.hasIllness = true;
                        return characterCreator.create();

                    };
                default:
                    console.warn(`Unknown function type: ${type}. Using default Nothing function.`);
                    return Nothing;
            }
        }else{
            throw new Error("Table manager forgotten for function Factory");
        }


    }

    withTableManager(tableManager: TableManager){
        this.tableManager = tableManager;
        return this;
    }

    registerFunction(type: FunctionType, func: FunctionCreator): void {
        this.customFunctions.set(type, func);
    }
}

export const functionFactory = new FunctionFactory();