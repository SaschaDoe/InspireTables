import {describe, expect, test} from "vitest";
import {crimeTechLevelList} from "./crimeTechLevelList";

describe('Crime Tech Level List', () => {
    test('levels right when big changes made', () => {
        const totalProbability = crimeTechLevelList.reduce((sum, level) => sum + level[1], 0);
        expect(totalProbability).toBeCloseTo(100, 0); // Allow for slight rounding errorsq
    });

    test('ensures no probability is under 0.01', () => {
        const lowProbabilityLevels = crimeTechLevelList
            .filter(([_, probability]) => probability < 0.01)
            .map(([techLevel, probability]) => `${techLevel}: ${probability}`);

        expect(lowProbabilityLevels,
            `The following tech levels have probabilities under 0.01:\n${lowProbabilityLevels.join('\n')}`
        ).toHaveLength(0);
    });
});