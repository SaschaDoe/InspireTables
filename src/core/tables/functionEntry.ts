function Nothing(input: any) :any {
    return "";
}

export class FunctionEntry {
    costumeFunction: (input: any) => any | any[] = Nothing;
    description = "";

    withFunction(func: (input: any) => any | any[]) {
        this.costumeFunction = func;
        return this;
    }
}