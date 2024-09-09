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

export function reduceList(list: [string, number][], index: number, variation: number): [string, number][] {
    let copiedList = list.map(item => [...item]);

    for (let i = 0; i < copiedList.length; i++) {
        if (i < index || i >= index + variation + 1) {
            copiedList[i][1] = 0;
        }
    }

    return copiedList;
}

export const techLevelsWithProbabilities: [string, number][] = [
    [TechLevels.StoneAge, 3],
    [TechLevels.BronzeAge, 4],
    [TechLevels.IronAge, 6],
    [TechLevels.Classical, 8],
    [TechLevels.Medieval, 16],
    [TechLevels.Renaissance, 7], //1500 //5.
    [TechLevels.EarlyModern, 9], //1600
    [TechLevels.Industrial, 10], //1750 - 1900
    [TechLevels.Modern, 15], //1900 //8.
    [TechLevels.AtomicAge, 7],
    [TechLevels.InformationAge, 14], //10.
    [TechLevels.Cyber, 11],
    [TechLevels.SpaceTravel, 5],
    [TechLevels.Interstellar, 2],
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
