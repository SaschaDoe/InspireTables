import { Table } from "../../table";
export enum TechLevels {
    StoneAge = "stone age",
    BronzeAge = "bronze age",
    IronAge = "iron age",
    Classical = "classical",
    Medieval = "medieval",
    Renaissance = "renaissance",
    EarlyModern = "early modern",
    Industrial = "industrial",
    Modern = "modern",
    AtomicAge = "atomic age",
    InformationAge = "information age",
    Cyber = "cyber",
    SpaceTravel = "space travel",
    Interstellar = "interstellar",
    Intergalactic = "intergalactic",
}

export function reduceList(list: [string, number][], index: number, variation: number) {
    let copiedList: [string,number][] = list.map(item => [...item]);
    let totalValue = 0;
    let nonZeroCount = 0;

    // First pass: set values to 0 for entries outside the range and count non-zero entries
    for (let i = 0; i < copiedList.length; i++) {
        if (i < index || i >= index + variation + 1) {
            copiedList[i][1] = 0;
        } else {
            totalValue += copiedList[i][1];
            nonZeroCount++;
        }
    }

    // If all entries are zero, return the list as is
    if (nonZeroCount === 0) return copiedList;

    // Calculate the scaling factor to make the sum 100
    const scalingFactor = 100 / totalValue;

    // Second pass: scale the non-zero values
    for (let i = 0; i < copiedList.length; i++) {
        if (copiedList[i][1] !== 0) {
            copiedList[i][1] = Number((copiedList[i][1] * scalingFactor).toFixed(2));
        }
    }

    // Final adjustment to ensure sum is exactly 100
    let sum = copiedList.reduce((acc, item) => acc + item[1], 0);
    let diff = 100 - sum;
    if (diff !== 0) {
        for (let i = copiedList.length - 1; i >= 0; i--) {
            if (copiedList[i][1] !== 0) {
                copiedList[i][1] = Number((copiedList[i][1] + diff).toFixed(2));
                break;
            }
        }
    }

    return copiedList;
}

export function addList(firstList: [string, number][], secondList: [string, number][]) {
    // Ensure both lists have the same length
    if (firstList.length !== secondList.length) {
        throw new Error("Lists must have the same length");
    }

    let resultList: [string, number][] = [];
    let totalSum = 0;

    // First pass: add probabilities and calculate total sum of non-zero values
    for (let i = 0; i < firstList.length; i++) {
        const sum = firstList[i][1] + secondList[i][1];
        if (sum !== 0) {
            totalSum += sum;
        }
        resultList.push([firstList[i][0], sum]);
    }

    // If all values are zero, return the result as is
    if (totalSum === 0) {
        return resultList;
    }

    // Second pass: normalize non-zero values to sum up to 100
    const scalingFactor = 100 / totalSum;
    let finalSum = 0;

    for (let i = 0; i < resultList.length; i++) {
        if (resultList[i][1] !== 0) {
            resultList[i][1] = Number((resultList[i][1] * scalingFactor).toFixed(2));
            finalSum += resultList[i][1];
        }
    }

    // Final adjustment to ensure sum is exactly 100
    let diff = 100 - finalSum;
    if (diff !== 0) {
        for (let i = resultList.length - 1; i >= 0; i--) {
            if (resultList[i][1] !== 0) {
                resultList[i][1] = Number((resultList[i][1] + diff).toFixed(2));
                break;
            }
        }
    }

    return resultList;
}

export const techLevelsWithProbabilities: [string, number][] = [
    [TechLevels.StoneAge, 3],
    [TechLevels.BronzeAge, 3],
    [TechLevels.IronAge, 5],
    [TechLevels.Classical, 7],
    [TechLevels.Medieval, 14],
    [TechLevels.Renaissance, 6],
    [TechLevels.EarlyModern, 8],
    [TechLevels.Industrial, 8],
    [TechLevels.Modern, 13],
    [TechLevels.AtomicAge, 6],
    [TechLevels.InformationAge, 12],
    [TechLevels.Cyber, 9],
    [TechLevels.SpaceTravel, 4],
    [TechLevels.Interstellar, 1],
    [TechLevels.Intergalactic, 1],
];

export const TechLevelTableName = "Tech Level"

export class TechLevelTable extends Table {
    constructor() {
        super();
        this.title = TechLevelTableName;
        this.addProbabilityList(techLevelsWithProbabilities);
    }
}
