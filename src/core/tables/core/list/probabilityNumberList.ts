import { ProbabilityList } from "./probabilityList";
import { ProbabilityStringList } from "./probabilityStringList";

export class ProbabilityNumberList extends ProbabilityList {
    private probabilityBuzzwords: [string, number][] = [
        ["probable", 175],
        ["likely", 150],
        ["common", 125],
        ["even", 100], // get 100% of your share of the still missing probability
        ["improbable", 75],
        ["unlikely", 50],
        ["rare", 25],
    ];

    getProbabilityList(): [string, number][] {
        let numberList: [string, number][] = [];
        let cumulativeProbability = 100;
        let allEntries = this.getAllEntries();

        // First pass: calculate remaining probability after number entries
        let inputNumberList = this.getNumberLists();
        for (let i = 0; i < inputNumberList.length; i++){
            let entry = inputNumberList[i];
            let probability = entry[1];
            if (probability < 0) {
                throw new Error(`Probability under 0 at index: ${i}`);
            }
            cumulativeProbability -= probability;
            if (cumulativeProbability < 0) {
                throw new Error(`Cumulative probability under 0: ${cumulativeProbability} at index: ${i}`);
            }
        }

        // Calculate total weight for remaining entries
        let totalWeight = 0;
        let remainingEntriesCount = 0;
        let stringProbabilityMap = new Map<string, number>(this.probabilityBuzzwords);

        for (let entry of allEntries) {
            if (entry.type === 'string') {
                for (let [, probabilityString] of entry.data as [string, string][]) {
                    totalWeight += stringProbabilityMap.get(probabilityString) || 100;
                }
                remainingEntriesCount += (entry.data as [string, string][]).length;
            } else if (entry.type === 'plain') {
                totalWeight += 100 * (entry.data as string[]).length;
                remainingEntriesCount += (entry.data as string[]).length;
            }
        }

        if (cumulativeProbability === 0 && remainingEntriesCount > 0) {
            throw new Error("No probability left for plain and string list entries");
        }

        let probabilityUnit = cumulativeProbability / totalWeight;

        // Second pass: distribute probabilities in order
        for (let entry of allEntries) {
            switch (entry.type) {
                case 'number':
                    for (let [name, probability] of entry.data as [string, number][]) {
                        numberList.push([name, probability]);
                    }
                    break;
                case 'string':
                    for (let [name, probabilityString] of entry.data as [string, string][]) {
                        let weight = stringProbabilityMap.get(probabilityString) || 100;
                        let probability = weight * probabilityUnit;
                        numberList.push([name, probability]);
                    }
                    break;
                case 'plain':
                    for (let name of entry.data as string[]) {
                        let probability = 100 * probabilityUnit;
                        numberList.push([name, probability]);
                    }
                    break;
            }
        }

        // Normalize probabilities
        let total = numberList.reduce((sum, [, prob]) => sum + prob, 0);
        numberList = numberList.map(([name, prob]) => [name, (prob / total) * 100]);

        // Round up last entry
        if (numberList.length > 0) {
            let sum = numberList.reduce((sum, [, prob]) => sum + prob, 0);
            let lastEntry = numberList[numberList.length - 1];
            lastEntry[1] = parseFloat((lastEntry[1] + (100 - sum)).toFixed(2));
        }

        return numberList;
    }
}