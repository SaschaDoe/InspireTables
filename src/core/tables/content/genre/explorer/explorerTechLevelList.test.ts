import {describe, expect, test} from "vitest";
import {explorerTechLevelList} from "./explorerTechLevelList";

describe('Explorer Tech Level List', () => {
    test('tests explorer tech level list', () => {
        const totalProbability = explorerTechLevelList.reduce((sum, level) => sum + level[1], 0);
        expect(totalProbability).toBeCloseTo(100, 2); // Allow for slight rounding errors

        expect(explorerTechLevelList[0][1]).toBeCloseTo(3.72);
        expect(explorerTechLevelList[1][1]).toBeCloseTo(4.97);
        expect(explorerTechLevelList[2][1]).toBeCloseTo(7.45);
        expect(explorerTechLevelList[3][1]).toBeCloseTo(10);
        expect(explorerTechLevelList[4][1]).toBeCloseTo(19.86);
        expect(explorerTechLevelList[5][1]).toBeCloseTo(11);
        expect(explorerTechLevelList[6][1]).toBeCloseTo(17);
        expect(explorerTechLevelList[7][1]).toBeCloseTo(12);
        expect(explorerTechLevelList[8][1]).toBeCloseTo(1);
        expect(explorerTechLevelList[9][1]).toBeCloseTo(1);
        expect(explorerTechLevelList[10][1]).toBeCloseTo(1);
        expect(explorerTechLevelList[11][1]).toBeCloseTo(1);
        expect(explorerTechLevelList[12][1]).toBeCloseTo(1);
        expect(explorerTechLevelList[13][1]).toBeCloseTo(5);
        expect(explorerTechLevelList[14][1]).toBeCloseTo(4);
    });

});