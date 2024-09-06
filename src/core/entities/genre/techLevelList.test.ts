import {describe, expect, test} from "vitest";
import {TechLevelList} from "./techLevelList";
import {techLevelsWithProbabilities} from "../../tables/content/other/techLevelTable";
import {TechLevelSetting} from "./techLevelSetting";

export let testTechLevels: [string, number][] = [
    ["ancient", 50],
    ["modern", 50],
]


export let testTechLevelsWithThree: [string, number][] = [
    ["ancient", 33],
    ["modern", 33],
    ["future", 33],
]

describe('Tech Level List', () => {
    test('Base 0, Delta 10', () => {
        let techLevels = new TechLevelList()
            .withSetting(new TechLevelSetting()
                .withBase(0)
                .withPercentDelta(10))
            .withTechLevels(testTechLevels)
            .getTechLevelsWithProbabilities();

        expect(techLevels[0][1]).toBe(60);
        expect(techLevels[1][1]).toBe(40);
    });

    test('Base 1, Delta 10', () => {
        let techLevels = new TechLevelList()
            .withSetting(new TechLevelSetting()
                .withBase(1)
                .withPercentDelta(10))
            .withTechLevels(testTechLevels)
            .getTechLevelsWithProbabilities();

        expect(techLevels[0][1]).toBe(40);
        expect(techLevels[1][1]).toBe(60);
    });

    test('Three: Base 0, Delta 10', () => {
        let techLevels = new TechLevelList()
            .withSetting(new TechLevelSetting()
                .withBase(0)
                .withPercentDelta(10))
            .withTechLevels(testTechLevelsWithThree)
            .getTechLevelsWithProbabilities();

        expect(techLevels[0][1]).toBe(43);
        expect(techLevels[1][1]).toBe(28.5);
        expect(techLevels[2][1]).toBe(28.5);
    });

    test('Base 0 - Delta 10, Base 1 - Delta 10', () => {
        let techLevels = new TechLevelList()
            .withSetting(new TechLevelSetting()
                .withBase(0)
                .withPercentDelta(10))
            .withSetting(new TechLevelSetting()
                .withBase(1)
                .withPercentDelta(10))
            .withTechLevels(testTechLevelsWithThree)
            .getTechLevelsWithProbabilities();

        expect(techLevels[0][1]).toBe(43);
        expect(techLevels[1][1]).toBe(43);
        expect(techLevels[2][1]).toBe(14);
    });
});