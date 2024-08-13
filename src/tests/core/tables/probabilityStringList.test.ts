import {describe, test, expect} from "vitest";
import {ProbabilityStringList} from "../../../core/tables/core/list/probabilityStringList";

describe('probability string list', () => {
    const testCases = [
        { input: ["one"], expected: [["one", "even"]] },
        { input: ["one", "two"], expected: [["one", "even"], ["two", "even"]] },
        { input: ["one", "two", "three"], expected: [["one", "even"], ["two", "even"], ["three", "even"]] }
    ];

    testCases.forEach(({ input, expected }, index) => {
        test(`${input.length} plain ${input.length === 1 ? 'entry' : 'entries'}`, () => {
            let entryList = new ProbabilityStringList().addPlainList(input);
            let probabilityList = entryList.getProbabilityStringList();

            expect(probabilityList.length).toBe(expected.length);

            expected.forEach((item, i) => {
                expect(probabilityList[i][0]).toBe(item[0]);
                expect(probabilityList[i][1]).toBe(item[1]);
            });
        });
    });

    test('string list - one likely', () => {
        const stringList: [string, string][] = [["one", "likely"]];
        let probabilityNumberList = new ProbabilityStringList()
            .addStringList(stringList);

        expect(probabilityNumberList.getProbabilityStringList()).toEqual([
            ["one", "likely"]
        ]);
    });


});