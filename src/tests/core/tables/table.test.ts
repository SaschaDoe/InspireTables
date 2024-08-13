import { test, expect, describe } from "vitest"
import { Table } from "../../../core/tables/table";
import { Entry } from "../../../core/tables/core/entry/entry";
import { DiceMock } from "./diceMock";
import {EntryPart} from "../../../core/tables/core/entry/entryPart";
import {EntrySetting} from "../../../core/tables/entrySetting";

describe('Table', () => {
    test('get all entries from input', () => {
        let table = new Table();
        let inputs = ["bla"];
        table.withEntriesFromList(inputs);
        expect(table.entries.length).toBe(1);
        expect(table.entries[0].descriptionText).toBe("bla");
    })

    test('roll single entry', () => {
        let table = new Table();
        let entry = new Entry().withText("Test Entry");
        table.entries.push(entry);

        let rollResult = table.roll();

        expect(rollResult.entry).toBe(entry);
    })

    testTableRoll(0, 0);
    testTableRoll(1, 1);

    function testTableRoll(rollResult: number, expectedEntryIndex: number) {
        test(`roll entry at index ${expectedEntryIndex} when dice rolls ${rollResult}`, () => {
            const table = new Table();
            const diceMock = new DiceMock().withResults([rollResult]);
            table.withDice(diceMock);

            const entries = [new Entry().withText("Entry 1"), new Entry().withText("Entry 2")];
            table.entries.push(...entries);

            const actualRollResult = table.roll();

            expect(actualRollResult.entry).toBe(entries[expectedEntryIndex]);
        });
    }

    test('roll inner Table', () => {
        let table = new Table();
        let innerTable = new Table();
        let innerEntry = new Entry();
        innerTable.entries.push(innerEntry);
        let entry = new Entry().withTable(innerTable);
        table.entries.push(entry);

        let rollResult = table.roll();

        expect(rollResult.entry).toBe(entry);
        expect(rollResult.results.length).toBe(1);
        expect(rollResult.results[0].entry).toBe(innerEntry);
    })

    test('roll inner Table combined description', () => {
        let table = new Table();
        let innerTable = new Table();
        let innerEntry = new Entry().withText("Inner Entry");
        innerTable.entries.push(innerEntry);
        let entry = new Entry().withText("Main Entry: ").withTable(innerTable);
        table.entries.push(entry);

        let rollResult = table.roll();

        expect(rollResult.combinedString).toBe("Main Entry: Inner Entry");
    })

    test('roll two inner Tables combined description', () => {
        let table = new Table();
        let innerTable = new Table();
        let deepestTable = new Table();
        let deepestEntry = new Entry().withText(".");
        deepestTable.entries.push(deepestEntry);
        let innerEntry = new Entry().withText("Inner Entry").withTable(deepestTable);
        innerTable.entries.push(innerEntry);
        let entry = new Entry().withText("Main Entry: ").withTable(innerTable);
        table.entries.push(entry);

        let rollResult = table.roll();

        expect(rollResult.combinedString).toBe("Main Entry: Inner Entry.");
    })

    test('probability check - one entry', () => {
        let table = new Table()
            .withEntry(new Entry());

        table.updateIntervals();

        expect(table.entries[0].interval.startPercentage).toBe(0)
        expect(table.entries[0].interval.endPercentage).toBe(1)
    })

    test('probability check - two entries', () => {
        let table = new Table()
            .withEntry(new Entry())
            .withEntry(new Entry());

        table.updateIntervals();

        expect(table.entries[0].interval.startPercentage).toBe(0)
        expect(table.entries[0].interval.endPercentage).toBe(0.5)
        expect(table.entries[1].interval.startPercentage).toBe(0.5)
        expect(table.entries[1].interval.endPercentage).toBe(1)
    })

    test('probability check - three entries', () => {
        let table = new Table()
            .withEntry(new Entry())
            .withEntry(new Entry())
            .withEntry(new Entry());

        table.updateIntervals();

        expect(table.entries[0].interval.startPercentage).toBe(0)
        expect(table.entries[0].interval.endPercentage).toBeCloseTo(0.3,0.1)
        expect(table.entries[1].interval.startPercentage).toBeCloseTo(0.3,0.1)
        expect(table.entries[1].interval.endPercentage).toBeCloseTo(0.6,0.1)
        expect(table.entries[2].interval.startPercentage).toBeCloseTo(0.6,0.1)
        expect(table.entries[2].interval.endPercentage).toBeCloseTo(1,0.1)
    })

    test('probability check - three entries and probability', () => {
        let table = new Table()
            .withEntry(new Entry(),0.8)
            .withEntry(new Entry())
            .withEntry(new Entry());

        table.updateIntervals();

        expect(table.entries[0].interval.startPercentage).toBe(0)
        expect(table.entries[0].interval.endPercentage).toBeCloseTo(0.8,0.1)
        expect(table.entries[1].interval.startPercentage).toBeCloseTo(0.8,0.1)
        expect(table.entries[1].interval.endPercentage).toBeCloseTo(0.9,0.1)
        expect(table.entries[2].interval.startPercentage).toBeCloseTo(0.9,0.1)
        expect(table.entries[2].interval.endPercentage).toBeCloseTo(1,0.1)
    });

    test('probability check - three entries and two 0.4 probability', () => {
        let table = new Table()
            .withEntry(new Entry(),0.4)
            .withEntry(new Entry(),0.4)
            .withEntry(new Entry());

        table.updateIntervals();

        expect(table.entries[0].interval.startPercentage).toBe(0)
        expect(table.entries[0].interval.endPercentage).toBeCloseTo(0.4,0.1)
        expect(table.entries[1].interval.startPercentage).toBeCloseTo(0.4,0.1)
        expect(table.entries[1].interval.endPercentage).toBeCloseTo(0.8,0.1)
        expect(table.entries[2].interval.startPercentage).toBeCloseTo(0.8,0.1)
        expect(table.entries[2].interval.endPercentage).toBeCloseTo(1,0.1)
    });

    test('probability check - three entries and no probability in the middle', () => {
        let table = new Table()
            .withEntry(new Entry(),0.4)
            .withEntry(new Entry())
            .withEntry(new Entry(),0.4);

        table.updateIntervals();

        expect(table.entries[0].interval.startPercentage).toBe(0)
        expect(table.entries[0].interval.endPercentage).toBeCloseTo(0.4,0.1)
        expect(table.entries[1].interval.startPercentage).toBeCloseTo(0.4,0.1)
        expect(table.entries[1].interval.endPercentage).toBeCloseTo(0.6,0.1)
        expect(table.entries[2].interval.startPercentage).toBeCloseTo(0.6,0.1)
        expect(table.entries[2].interval.endPercentage).toBeCloseTo(1,0.1)
    });

});