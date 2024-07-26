function Nothing(input: any) :any {
    return "";
}

export class FunctionEntry {
    costumeFunction: (input: any) => any[] = Nothing;
    description = "";

    withFunction(func: (input: any) => any[]) {
        this.costumeFunction = func;
        return this;
    }
}