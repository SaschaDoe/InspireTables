import {ProbabilityList} from "./probabilityList";

export class ProbabilityStringList extends ProbabilityList{

    getProbabilityStringList(): [string, string][] {
        let probabilityStringList: [string, string][] = [];

        let allEntries = this.getAllEntries();
        for (let entry of allEntries) {
            switch (entry.type) {
                case 'plain':
                    for (let plainString of entry.data as string[]) {
                        probabilityStringList.push([plainString, "even"]);
                    }
                    break;
                case 'number':
                    for (let [name, _] of entry.data as [string, number][]) {
                        probabilityStringList.push([name, "even"]);
                    }
                    break;
                case 'string':
                    probabilityStringList.push(...(entry.data as [string, string][]));
                    break;
            }
        }

        return probabilityStringList;
    }
}