import {describe, expect, test} from "vitest";
import {mythicTechLevelList} from "./mythicTechLevelList";

describe('Mythic Tech Level List', () => {
    test('tests explorer tech level list', () => {
        const totalProbability = mythicTechLevelList.reduce((sum, level) => sum + level[1], 0);
        expect(totalProbability).toBeCloseTo(100, 2); // Allow for slight rounding errors
    });
});