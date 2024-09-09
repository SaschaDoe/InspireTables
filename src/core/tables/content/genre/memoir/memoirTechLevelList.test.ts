import {describe, expect, test} from "vitest";
import {memoirTechLevelList} from "./memoirTechLevelList";

describe('Memoir Tech Level List', () => {
    test('tests explorer tech level list', () => {
        const totalProbability = memoirTechLevelList.reduce((sum, level) => sum + level[1], 0);
        expect(totalProbability).toBeCloseTo(100, 2); // Allow for slight rounding errors
    });
});