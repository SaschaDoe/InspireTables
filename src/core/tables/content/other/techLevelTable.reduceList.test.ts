import {describe, expect, test} from "vitest";
import {reduceList, TechLevels} from "./techLevelTable";

export const testList: [string, number][] = [
    ["test", 100],
];

export const bigTestList: [string, number][] = [
    ["test1", 100],
    ["test2", 100],
    ["test3", 100],
];

describe('reduce list', () => {
    test('one entry, 0 variation', () => {
        let reducedTestList = reduceList(testList,0,0);

        expect(reducedTestList.length).toBe(1);
        expect(reducedTestList[0][0]).toBe("test");
        expect(reducedTestList[0][1]).toBe(100);
    });

    test('three entries, 0 variation', () => {
        let reducedTestList = reduceList(bigTestList,0,0);

        expect(reducedTestList.length).toBe(3);
        expect(reducedTestList[0][0]).toBe("test1");
        expect(reducedTestList[0][1]).toBe(100);
        expect(reducedTestList[1][0]).toBe("test2");
        expect(reducedTestList[1][1]).toBe(0);
        expect(reducedTestList[2][0]).toBe("test3");
        expect(reducedTestList[2][1]).toBe(0);
    });

    test('three entry, 1 variation', () => {
        let reducedTestList = reduceList(bigTestList,0,1);

        expect(reducedTestList.length).toBe(3);
        expect(reducedTestList[0][0]).toBe("test1");
        expect(reducedTestList[0][1]).toBe(100);
        expect(reducedTestList[1][0]).toBe("test2");
        expect(reducedTestList[1][1]).toBe(100);
        expect(reducedTestList[2][0]).toBe("test3");
        expect(reducedTestList[2][1]).toBe(0);
    });

    test('three entry, 2 variation', () => {
        let reducedTestList = reduceList(bigTestList,0,2);

        expect(reducedTestList.length).toBe(3);
        expect(reducedTestList[0][0]).toBe("test1");
        expect(reducedTestList[0][1]).toBe(100);
        expect(reducedTestList[1][0]).toBe("test2");
        expect(reducedTestList[1][1]).toBe(100);
        expect(reducedTestList[2][0]).toBe("test3");
        expect(reducedTestList[2][1]).toBe(100);
    });
});