import {describe, expect, test} from "vitest";
import {crimeTechLevelList} from "./crimeTechLevelList";

describe('Crime Tech Level List', () => {
    test('levels right when big changes made', () => {
        const totalProbability = crimeTechLevelList.reduce((sum, level) => sum + level[1], 0);
        expect(totalProbability).toBeCloseTo(100, 2); // Allow for slight rounding errors
        expect(crimeTechLevelList[0][1]).toBeCloseTo(1.47);
        expect(crimeTechLevelList[1][1]).toBeCloseTo(1.96);
        expect(crimeTechLevelList[2][1]).toBeCloseTo(2.93);
        expect(crimeTechLevelList[3][1]).toBeCloseTo(3.91);
        expect(crimeTechLevelList[4][1]).toBeCloseTo(4);
        expect(crimeTechLevelList[5][1]).toBeCloseTo(3.42);
        expect(crimeTechLevelList[6][1]).toBeCloseTo(4.4);
        expect(crimeTechLevelList[7][1]).toBeCloseTo(17);
        expect(crimeTechLevelList[8][1]).toBeCloseTo(17);
        expect(crimeTechLevelList[9][1]).toBeCloseTo(9);
        expect(crimeTechLevelList[10][1]).toBeCloseTo(19);
        expect(crimeTechLevelList[11][1]).toBeCloseTo(12);
        expect(crimeTechLevelList[12][1]).toBeCloseTo(2.44);
        expect(crimeTechLevelList[13][1]).toBeCloseTo(0.98);
        expect(crimeTechLevelList[14][1]).toBeCloseTo(0.49);
    });

});