import {describe, expect, test} from "vitest";
import {addList, reduceList} from "./techLevelTable";

export const testList: [string, number][] = [
    ["test", 100],
];

export const test50List: [string, number][] = [
    ["test", 50],
];

export const test75List: [string, number][] = [
    ["test", 75],
    ["test", 25],
];

export const test25List: [string, number][] = [
    ["test", 25],
    ["test", 75],
];

export const bigTestList: [string, number][] = [
    ["test1", 33.33],
    ["test2", 33.33],
    ["test3", 33.33],
];

describe('reduce list', () => {
    test('one entry, still one 100', () => {
        let reducedTestList = addList(testList, testList);

        expect(reducedTestList.length).toBe(1);
        expect(reducedTestList[0][0]).toBe("test");
        expect(reducedTestList[0][1]).toBe(100);
    });

    test('one entry, still one 100', () => {
        let reducedTestList = addList(test50List, test50List);

        expect(reducedTestList.length).toBe(1);
        expect(reducedTestList[0][0]).toBe("test");
        expect(reducedTestList[0][1]).toBe(100);
    });

    test('two entries, 75 - 25 is 50 both', () => {
        let addedList = addList(test75List, test25List);

        expect(addedList.length).toBe(2);
        expect(addedList[0][0]).toBe("test");
        expect(addedList[0][1]).toBe(50);
        expect(addedList[1][0]).toBe("test");
        expect(addedList[1][1]).toBe(50);
    });
});