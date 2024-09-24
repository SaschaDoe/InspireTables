import {Table} from "../../table";
import {FunctionEntry} from "./functionEntry";
import {EntryPart} from "./entryPart";
import {EntrySetting} from "./entrySetting";
import {Interval} from "../../interval";
import type {FunctionFactory} from "./functionFactory";
import {EntryElement} from "../entryElement";

export class Entry {
    public parts: EntryPart[] = [];
    public interval = new Interval();
    public setting = new EntrySetting();

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

    withEntryElement(element: EntryElement, probability: number = 0){
        this.withPart((new EntryPart()
            .withElement(element)));
        this.setting = new EntrySetting().withProbability(probability);
        return this;
    }

    get descriptionText(): string {
        return this.parts.map((part) => {
            let output: string;
            if (part.input instanceof Table) {
                output = `{${part.input.title}}`;
            } else if (part.input instanceof FunctionEntry) {
                output = `{${part.input.description}}`;
            }
            else if (part.input instanceof EntryElement){
                output = part.input.name;
            } else {
                output = part.input;
            }
            return output;
        }).join('');
    }

    static fromJSON(json: any, functionFactory: FunctionFactory): Entry {
        const entry = new Entry();

        entry.setting = EntrySetting.fromJSON(json.setting);
        entry.parts = json.parts.map((partJson: any) =>
            EntryPart.fromJSON(partJson, functionFactory)
        );

        let descriptionText = entry.descriptionText;
        console.log(descriptionText);
        return entry;
    }

}
