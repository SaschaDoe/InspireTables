export class EntryElement{
    name = "";
    description = "";

    constructor(name: string) {
        this.name = name;
    }

    withDescription(description: string) {
        this.description = description;
        return this;
    }
}