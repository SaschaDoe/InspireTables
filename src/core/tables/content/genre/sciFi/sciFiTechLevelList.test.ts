import {describe, expect, test} from "vitest";
import {sciFiTechLevelList} from "./sciFiTechLevelList";
import {Table} from "../../../table";
import {performanceTechLevelList} from "../performance/performanceTechLevelList";

describe('SciFi Tech Level List', () => {
    test('tests explorer tech level list', () => {
        const totalProbability = sciFiTechLevelList.reduce((sum, level) => sum + level[1], 0);
        expect(totalProbability).toBeCloseTo(100, 0);

        let count = 100;
        let probabilitiesString = "";
        for(let i = 0; i < sciFiTechLevelList.length; i++) {
            count -= sciFiTechLevelList[i][1];
            probabilitiesString += `${sciFiTechLevelList[i][0]}: ${sciFiTechLevelList[i][1]}, `;
        }
        console.log("Probabilities:", probabilitiesString);

        let table = new Table();
        table.addProbabilityList(sciFiTechLevelList);
        let result = table.roll().combinedString
        console.log(result);
    });

    test('ensures no probability is under 0.01', () => {
        const lowProbabilityLevels = sciFiTechLevelList
            .filter(([_, probability]) => probability < 0.01)
            .map(([techLevel, probability]) => `${techLevel}: ${probability}`);

        expect(lowProbabilityLevels,
            `The following tech levels have probabilities under 0.01:\n${lowProbabilityLevels.join('\n')}`
        ).toHaveLength(0);
    });
});

