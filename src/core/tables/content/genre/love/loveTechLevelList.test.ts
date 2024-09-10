import {describe, expect, test} from "vitest";
import {loveTechLevelList} from "./loveTechLevelList";

describe('Love Tech Level List', () => {
    test('tests tech level list', () => {
        const totalProbability = loveTechLevelList.reduce((sum, level) => sum + level[1], 0);
        expect(totalProbability).toBeCloseTo(100, 0); // Allow for slight rounding errors
    });

    test('ensures no probability is under 0.01', () => {
        const lowProbabilityLevels = loveTechLevelList
            .filter(([_, probability]) => probability < 0.01)
            .map(([techLevel, probability]) => `${techLevel}: ${probability}`);

        expect(lowProbabilityLevels,
            `The following tech levels have probabilities under 0.01:\n${lowProbabilityLevels.join('\n')}`
        ).toHaveLength(0);
    });
});