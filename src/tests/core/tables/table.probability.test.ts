import { test, expect, describe } from "vitest"
import {Table} from "../../../core/tables/table";

describe('withProbabilityEntriesFrom - comprehensive probability tests', () => {
    /*
    const probabilityMap = {
        prevalent: 0.9,
        common: 2/3,
        even: 0.5,
        uncommon: 1/3,
        rare: 0.1
    };

    const combinationTests = [
        { input: ['prevalent'], expected: [1.0] },
        { input: ['common'], expected: [1.0] },
        { input: ['even'], expected: [1.0] },
        { input: ['uncommon'], expected: [1.0] },
        { input: ['rare'], expected: [1.0] },
        { input: ['prevalent', 'rare'], expected: [0.9, 0.1] },
        { input: ['common', 'uncommon'], expected: [0.67, 0.33] },
        { input: ['even', 'even'], expected: [0.5, 0.5] },
        { input: ['even', 'even', 'even'], expected: [0.33, 0.33, 0.33] },
        { input: ['common', 'uncommon', 'rare'], expected: [0.67, 0.28, 0.05] },
        { input: ['prevalent', 'common', 'rare'], expected: [0.73, 0.24, 0.03] },
        { input: ['even', 'uncommon', 'rare'], expected: [0.61, 0.30, 0.09] },
        { input: ['prevalent', 'even', 'uncommon'], expected: [0.69, 0.23, 0.08] },
        { input: ['rare', 'rare', 'rare', 'rare'], expected: [0.25, 0.25, 0.25, 0.25] },
        { input: ['prevalent', 'common', 'even', 'uncommon', 'rare'], expected: [0.47, 0.26, 0.16, 0.08, 0.03] },
    ];

    function testProbabilityCombination(input: string[], expected: number[]) {
        const table = new Table();
        const entries: [string, string][] = input.map(type => [type, `${type} test`]);

        table.withProbabilityEntriesFrom(entries);

        expect(table.entries.length).toBe(input.length);

        table.entries.forEach((entry, index) => {
            expect(entry.descriptionText).toBe(`${input[index]} test`);
            expect(entry.setting.probabilityInPercent).toBeCloseTo(expected[index] * 100, 1);
        });

        // Ensure probabilities sum to 100%
        const totalProbability = table.entries.reduce((sum, entry) => sum + entry.setting.probabilityInPercent, 0);
        expect(totalProbability).toBeCloseTo(100, 1);
    }

    combinationTests.forEach(({ input, expected }) => {
        test(`Combination: [${input.join(', ')}]`, () => {
            testProbabilityCombination(input, expected);
        });
    });
    */
     
});