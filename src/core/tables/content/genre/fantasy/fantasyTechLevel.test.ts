import {describe, expect, test} from "vitest";
import {fantasyTechLevelList} from "./fantasyTechLevelList";

describe('Explorer Tech Level List', () => {
    test('tests explorer tech level list', () => {
        const totalProbability = fantasyTechLevelList.reduce((sum, level) => sum + level[1], 0);
        expect(totalProbability).toBeCloseTo(100, 2); // Allow for slight rounding errors

        expect(fantasyTechLevelList[0][1]).toBeCloseTo(3.46);
        expect(fantasyTechLevelList[1][1]).toBeCloseTo(4.62);
        expect(fantasyTechLevelList[2][1]).toBeCloseTo(6.92);
        expect(fantasyTechLevelList[3][1]).toBeCloseTo(16);
        expect(fantasyTechLevelList[4][1]).toBeCloseTo(22);
        expect(fantasyTechLevelList[5][1]).toBeCloseTo(17);
        expect(fantasyTechLevelList[6][1]).toBeCloseTo(4);
        expect(fantasyTechLevelList[7][1]).toBeCloseTo(5);
        expect(fantasyTechLevelList[8][1]).toBeCloseTo(5);
        expect(fantasyTechLevelList[9][1]).toBeCloseTo(1);
        expect(fantasyTechLevelList[10][1]).toBeCloseTo(4);
        expect(fantasyTechLevelList[11][1]).toBeCloseTo(1);
        expect(fantasyTechLevelList[12][1]).toBeCloseTo(1);
        expect(fantasyTechLevelList[13][1]).toBeCloseTo(5);
        expect(fantasyTechLevelList[14][1]).toBeCloseTo(4);
    });

});