export enum FunctionType {
    Nothing = "Nothing",
    CreateIllness = "CreateIllness",
    CreateCharacterWithIllness = "CreateCharacterWithIllness",
}

export type CreatedEntities = Record<string, any[]>;

export function Nothing(input: any): CreatedEntities {
    return {};
}