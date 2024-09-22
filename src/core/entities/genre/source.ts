export class Source{
    name = "";
    description = "";
    link = "";

    withName(name: string) {
        this.name = name;
        return this;
    }

    withLink(link: string) {
        this.link = link;
        return this;
    }

    withDescription(description: string) {
        this.description = description;
        return this;
    }
}