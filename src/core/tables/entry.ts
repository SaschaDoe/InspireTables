import {Table} from "./table";

export class Entry{
    name:string = "";
    parts:(string|Table)[]=[];
    descriptionParts:(string|Table)[]=[];

    withText(text: string):Entry {
        this.parts.push(text);
        this.descriptionParts.push(text);
        return this;
    }

    withTable(table: Table) {
        this.parts.push(table);
        this.descriptionParts.push(table);
        return this;
    }

    withDescription(description: string) {
        this.descriptionParts.push(description);
        return this;
    }

    get getDescriptionText(): string {
        return this.descriptionParts.map(part =>
        {if(part instanceof Table){
            return `{${part.title}}`;
        }else{
            return part;
        }}).join('');
    }
}