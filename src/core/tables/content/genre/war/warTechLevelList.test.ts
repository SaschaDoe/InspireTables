import {describe, expect, test} from "vitest";
import {warTechLevelList} from "./warTechLevelList";

describe('War Tech Level List', () => {
    test('tests explorer tech level list', () => {
        const totalProbability = warTechLevelList.reduce((sum, level) => sum + level[1], 0);
        expect(totalProbability).toBeCloseTo(100, 2); // Allow for slight rounding errors
    });

    test('ensures no probability is under 0.01', () => {
        const lowProbabilityLevels = warTechLevelList
            .filter(([_, probability]) => probability < 0.01)
            .map(([techLevel, probability]) => `${techLevel}: ${probability}`);

        expect(lowProbabilityLevels,
            `The following tech levels have probabilities under 0.01:\n${lowProbabilityLevels.join('\n')}`
        ).toHaveLength(0);
    });
});