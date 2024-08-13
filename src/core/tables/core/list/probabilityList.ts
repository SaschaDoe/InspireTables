export abstract class ProbabilityList {
    protected entries: Array<{
        type: 'plain' | 'number' | 'string',
        data: string[] | [string, number][] | [string, string][]
    }> = [];

    addPlainList(plainList: string[]) {
        this.entries.push({ type: 'plain', data: plainList });
        return this;
    }

    addNumberList(numberList: [string, number][]) {
        this.entries.push({ type: 'number', data: numberList });
        return this;
    }

    addStringList(stringList: [string, string][]) {
        this.entries.push({ type: 'string', data: stringList });
        return this;
    }

    protected getPlainLists(): string[] {
        return this.entries
            .filter(entry => entry.type === 'plain')
            .flatMap(entry => entry.data as string[]);
    }

    protected getNumberLists(): [string, number][] {
        return this.entries
            .filter(entry => entry.type === 'number')
            .flatMap(entry => entry.data as [string, number][]);
    }

    protected getStringLists(): [string, string][] {
        return this.entries
            .filter(entry => entry.type === 'string')
            .flatMap(entry => entry.data as [string, string][]);
    }

    protected getAllEntries(): Array<{
        type: 'plain' | 'number' | 'string',
        data: string[] | [string, number][] | [string, string][]
    }> {
        return this.entries;
    }
}