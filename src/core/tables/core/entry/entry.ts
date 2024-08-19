import { Table } from "../../table";
import { FunctionEntry } from "./functionEntry";
import {EntryPart} from "./entryPart";
import {EntrySetting} from "./entrySetting";
import {Interval} from "../../interval";

export class Entry {
    parts: EntryPart[] = [];
    interval = new Interval();
    setting = new EntrySetting();

    withSetting(setting: EntrySetting) {
        this.setting = setting;
        return this;
    }

    withProbability(probabilityInPercent: number = 0){
        this.setting.withProbability(probabilityInPercent);
        return this;
    }

    withProbabilityAsWord(probabilityAsWord: string){
        this.setting.withProbabilityWord(probabilityAsWord);
        return this;
    }

    withPart(part: EntryPart) {
        this.parts.push(part);

        return this;
    }

    withFunction(func: FunctionEntry) {
        this.withPart((new EntryPart()
            .withFunction(func)));
        return this;
    }

    withTable(table: Table) {
        this.withPart((new EntryPart()
            .withTable(table)));
        return this;
    }

    withText(text: string, probability: number = 0){
        this.withPart((new EntryPart()
            .withText(text)));
        this.setting = new EntrySetting().withProbability(probability);
        return this;
    }

    get descriptionText(): string {
        return this.parts.map(part => {
            if (part.input instanceof Table) {
                return `{${part.input.title}}`;
            } else if (part.input instanceof FunctionEntry) {
                return `{${part.input.description}}`;
            } else {
                return part.input;
            }
        }).join('');
    }




}
