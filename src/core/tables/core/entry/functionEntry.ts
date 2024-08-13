import type {CreatedEntities} from "../../../entities/creator";

function Nothing(input: any) :CreatedEntities {
    return {};
}

export class FunctionEntry {
    costumeFunction: (input: any) => CreatedEntities = Nothing;
    description = "";

    withFunction(func: (input: any) => CreatedEntities) {
        this.costumeFunction = func;
        return this;
    }
}