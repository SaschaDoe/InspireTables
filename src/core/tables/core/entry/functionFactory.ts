import { type CreatedEntities, FunctionType, Nothing } from "./functionType";
import { Illness } from "../../../entities/status/illness";
import { CharacterCreator } from "../../../entities/character/characterCreator";

type FunctionCreator = (input: any) => CreatedEntities;

export class FunctionFactory {
    private customFunctions: Map<FunctionType, FunctionCreator> = new Map();

    getFunction(type: FunctionType): FunctionCreator {
        if (this.customFunctions.has(type)) {
            return this.customFunctions.get(type)!;
        }

        switch (type) {
            case FunctionType.Nothing:
                return Nothing;
            case FunctionType.CreateIllness:
                return () => ({ Illness: [new Illness()] });
            case FunctionType.CreateCharacterWithIllness:
                return () => {
                    let characterCreator = new CharacterCreator();
                    characterCreator.hasIllness = true;
                    return characterCreator.create();
                };
            default:
                console.warn(`Unknown function type: ${type}. Using default Nothing function.`);
                return Nothing;
        }
    }

    registerFunction(type: FunctionType, func: FunctionCreator): void {
        this.customFunctions.set(type, func);
    }
}

export const functionFactory = new FunctionFactory();