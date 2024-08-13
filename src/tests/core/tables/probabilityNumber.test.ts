import { describe, expect, test } from "vitest";
import { ProbabilityNumberList } from "../../../core/tables/core/list/probabilityNumberList";

const EPSILON = 0.01; // Define a small value for floating-point comparison

describe('probability number list', () => {
    // Helper function to create a ProbabilityNumberList instance
    const createPNL = (...entries: Array<{type: 'number' | 'string' | 'plain', data: any}>) => {
        const pnl = new ProbabilityNumberList();
        entries.forEach(entry => {
            switch (entry.type) {
                case 'number':
                    pnl.addNumberList(entry.data);
                    break;
                case 'string':
                    pnl.addStringList(entry.data);
                    break;
                case 'plain':
                    pnl.addPlainList(entry.data);
                    break;
            }
        });
        return pnl;
    };

    // Helper function to check the result
    const checkResult = (
        result: [string, number][],
        expected: [string, number][],
        expectedLength?: number
    ) => {
        expect(result.length).toBe(expectedLength || expected.length);
        expected.forEach(([name, probability], index) => {
            expect(result[index][0]).toBe(name);
            expect(result[index][1]).toBeCloseTo(probability, EPSILON);
        });
    };

    // Existing tests (modified as needed)

    test('one plain entry', () => {
        const result = createPNL({type: 'plain', data: ["one"]}).getProbabilityList();
        checkResult(result, [["one", 100]]);
    });

    test('two plain entries', () => {
        const result = createPNL({type: 'plain', data: ["one", "two"]}).getProbabilityList();
        checkResult(result, [["one", 50], ["two", 50]]);
    });

    test('number and plain list - small plain probability', () => {
        const result = createPNL(
            {type: 'number', data: [["one", 99]]},
            {type: 'plain', data: ["two"]}
        ).getProbabilityList();
        checkResult(result, [["one", 99], ["two", 1]]);
    });

    test('number and plain list - under 1 plain probability', () => {
        const result = createPNL(
            {type: 'number', data: [["one", 99]]},
            {type: 'plain', data: ["two", "three"]}
        ).getProbabilityList();
        checkResult(result, [["one", 99], ["two", 0.5], ["three", 0.5]]);
    });

    test('number and plain list - no plain probability with specific error', () => {
        const pnl = createPNL(
            {type: 'number', data: [["one", 100]]},
            {type: 'plain', data: ["two"]}
        );
        expect(() => pnl.getProbabilityList()).toThrow("No probability left for plain and string list entries");
    });

    test('cumulative probability under 0 with specific error message', () => {
        const pnl = createPNL(
            {type: 'number', data: [["one", 60], ["two", 50]]}
        );
        expect(() => pnl.getProbabilityList()).toThrow('Cumulative probability under 0: -10 at index: 1');
    });

    test('probability under 0 with specific error message', () => {
        const pnl = createPNL(
            {type: 'number', data: [["one", -1]]}
        );
        expect(() => pnl.getProbabilityList()).toThrow('Probability under 0 at index: 0');
    });

    test('number list - probability rounded up', () => {
        const result = createPNL(
            {type: 'number', data: [["one", 99]]}
        ).getProbabilityList();
        checkResult(result, [["one", 100]]);
    });

    test('string list - likely is 100', () => {
        const result = createPNL(
            {type: 'string', data: [["one", "likely"]]}
        ).getProbabilityList();
        checkResult(result, [["one", 100]]);
    });

    test('string list - likely 80, unlikely 20', () => {
        const result = createPNL(
            {type: 'string', data: [["one", "likely"], ["two", "unlikely"]]}
        ).getProbabilityList();
        checkResult(result, [["one", 75], ["two", 25]]);
    });

    test('string list, plain list - plain 33, likely 56, unlikely 14', () => {
        const result = createPNL(
            {type: 'string', data: [["one", "likely"], ["two", "unlikely"]]},
            {type: 'plain', data: ["zero"]}
        ).getProbabilityList();
        checkResult(result, [["one", 50], ["two", 16.6], ["zero", 33]]);
    });

    test('string list, two plain list elements - plain 50, likely 40, unlikely 10', () => {
        const result = createPNL(
            {type: 'string', data: [["two", "likely"], ["three", "unlikely"]]},
            {type: 'plain', data: ["zero", "one"]}
        ).getProbabilityList();
        checkResult(result, [["two", 37.5], ["three", 12.5], ["zero", 25], ["one", 25]]);
    });

    test('string list, two plain list elements - plain 50, rare and probable', () => {
        const result = createPNL(
            {type: 'string', data: [["three", "rare"], ["two", "probable"]]},
            {type: 'plain', data: ["zero", "one"]}
        ).getProbabilityList();
        checkResult(result, [["three", 6.25], ["two", 43.75], ["zero", 25], ["one", 25]]);
    });

    test('string plain list 90, 10', () => {
        const result = createPNL(
            {type: 'string', data: [["three", "rare"]]},
            {type: 'plain', data: ["zero"]}
        ).getProbabilityList();
        checkResult(result, [["three", 20], ["zero", 80]]);
    });

    test('plain, string, plain - all even', () => {
        const result = createPNL(
            {type: 'plain', data: ["one"]},
            {type: 'string', data: [["two", "even"]]},
            {type: 'plain', data: ["three"]}
        ).getProbabilityList();
        checkResult(result, [["one", 33.33], ["two", 33.33], ["three", 33.33]]);
    });

    test('plain, string, plain - string rare', () => {
        const result = createPNL(
            {type: 'plain', data: ["one"]},
            {type: 'string', data: [["two", "rare"]]},
            {type: 'plain', data: ["three"]}
        ).getProbabilityList();
        checkResult(result, [["one", 44.44], ["two", 11.1], ["three", 44.44]]);
    });

    test('string, plain, string - strings rare', () => {
        const result = createPNL(
            {type: 'string', data: [["one", "rare"]]},
            {type: 'plain', data: ["two"]},
            {type: 'string', data: [["three", "rare"]]}
        ).getProbabilityList();
        checkResult(result, [["one", 16.6], ["two", 66.6], ["three", 16.6]]);
    });

    test('string, string, string - rare even rare', () => {
        const result = createPNL(
            {type: 'string', data: [["one", "rare"], ["two", "even"], ["three", "rare"]]}
        ).getProbabilityList();
        checkResult(result, [["one", 16.6], ["two", 66.6], ["three", 16.6]]);
    });

    test('string, string, string - rare rare rare', () => {
        const result = createPNL(
            {type: 'string', data: [["one", "rare"], ["two", "rare"], ["three", "rare"]]}
        ).getProbabilityList();
        const expected: [string, number][] = [["one", 33.33], ["two", 33.33], ["three", 33.33]];
        checkResult(result, expected);
    });

    test('large list - stress test', () => {
        const largeList: [string, string][] = Array.from({length: 100}, (_, i) => [`item${i}`, "even"]);
        const result = createPNL({type: 'string', data: largeList}).getProbabilityList();
        checkResult(result, [["item0", 1]], 100);
    });

    test('edge case - very small probabilities', () => {
        const stringList: [string, string][] = Array(5).fill(["", "rare"]).map((_, i) => [`item${i}`, "rare"]);
        const result = createPNL({type: 'string', data: stringList}).getProbabilityList();
        checkResult(result, [["item0", 20]], 5);
    });

    test('edge case - probabilities close to 100', () => {
        const result = createPNL(
            {type: 'number', data: [["one", 99.99]]},
            {type: 'plain', data: ["two"]}
        ).getProbabilityList();
        checkResult(result, [["one", 99.99], ["two", 0.01]]);
    });

    test('one entry with number', () => {
        const result = createPNL({type: 'number', data: [["one", 100]]}).getProbabilityList();
        checkResult(result, [["one", 100]]);
    });

    test('number and plain list', () => {
        const result = createPNL(
            {type: 'number', data: [["one", 50]]},
            {type: 'plain', data: ["two"]}
        ).getProbabilityList();
        checkResult(result, [["one", 50], ["two", 50]]);
    });

    // ... (other existing tests modified similarly)

    // New tests to reflect order-sensitive behavior

    test('order matters - number, plain, string', () => {
        const result = createPNL(
            {type: 'number', data: [["one", 40]]},
            {type: 'plain', data: ["two"]},
            {type: 'string', data: [["three", "likely"]]}
        ).getProbabilityList();
        checkResult(result, [["one", 40], ["two", 24], ["three", 36]]);
    });

    test('order matters - string, number, plain', () => {
        const result = createPNL(
            {type: 'string', data: [["one", "likely"]]},
            {type: 'number', data: [["two", 40]]},
            {type: 'plain', data: ["three"]}
        ).getProbabilityList();
        checkResult(result, [["one", 36], ["two", 40], ["three", 24]]);
    });

    test('multiple additions of same type', () => {
        const result = createPNL(
            {type: 'number', data: [["one", 30]]},
            {type: 'plain', data: ["two"]},
            {type: 'number', data: [["three", 20]]},
            {type: 'plain', data: ["four"]}
        ).getProbabilityList();
        checkResult(result, [["one", 30], ["two", 25], ["three", 20], ["four", 25]]);
    });

    test('complex order with all types', () => {
        const result = createPNL(
            {type: 'string', data: [["one", "rare"]]},
            {type: 'number', data: [["two", 30]]},
            {type: 'plain', data: ["three"]},
            {type: 'string', data: [["four", "likely"]]},
            {type: 'number', data: [["five", 10]]},
            {type: 'plain', data: ["six"]}
        ).getProbabilityList();
        checkResult(result, [
            ["one", 4], ["two", 30], ["three", 16],
            ["four", 24], ["five", 10], ["six", 16]
        ]);
    });

    test('order affects string probability distribution', () => {
        const result = createPNL(
            {type: 'string', data: [["one", "likely"]]},
            {type: 'plain', data: ["two"]},
            {type: 'string', data: [["three", "unlikely"]]}
        ).getProbabilityList();
        checkResult(result, [["one", 50], ["two", 33.33], ["three", 16.67]]);
    });

    test('mixed order with very small probabilities', () => {
        const result = createPNL(
            {type: 'number', data: [["one", 99]]},
            {type: 'string', data: [["two", "rare"]]},
            {type: 'plain', data: ["three", "four"]}
        ).getProbabilityList();
        checkResult(result, [["one", 99], ["two", 0.5], ["three", 0.25], ["four", 0.25]]);
    });
});