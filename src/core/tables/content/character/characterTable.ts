import {CharacterCreator} from "../../../entities/character/characterCreator";
import {Table} from "../../table";
import {Entry} from "../../core/entry/entry";
import {FunctionEntry} from "../../core/entry/functionEntry";
import {functionFactory} from "../../core/entry/functionFactory";
import type {TableManager} from "../../../entities/persist/tableManager";

export function NewCharacter(input: any, tableManager: TableManager):any{
    return new CharacterCreator(tableManager).create();
    //How to know about the illness this should be also an entity...
    //Show illness and character as Components and say if you will persist them...
}

export class CharacterTable extends Table{
    constructor() {
        super();
        this.title = "Character";
        let functionEntry = new FunctionEntry(functionFactory);
        functionEntry.costumeFunction = NewCharacter;
        functionEntry.description = "<create new character>";
        this.entryList.with(new Entry().withFunction(functionEntry));
    }
}