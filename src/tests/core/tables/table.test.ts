import { test, expect, describe } from "vitest"
import { Table } from "../../../core/tables/table";
import { Entry } from "../../../core/tables/core/entry/entry";
import { DiceMock } from "./diceMock";
import {ProbabilityTable} from "../../../core/tables/content/other/probabilityTable";

describe('Table', () => {
    test('get all entries from input', () => {
        let table = new Table();
        let inputs = ["bla"];
        table.addEntriesFromList(inputs);
        expect(table.entryList.entries.length).toBe(1);
        expect(table.entryList.entries[0].descriptionText).toBe("bla");
    })

    test('roll single entry', () => {
        let table = new Table();
        let entry = new Entry().withText("Test Entry");
        table.entryList.with(entry);

        let rollResult = table.roll();

        expect(rollResult.entry).toBe(entry);
    })

    testTableRoll(1, 0);
    testTableRoll(51, 1);
    function testTableRoll(rollResult: number, expectedEntryIndex: number) {
        test(`roll entry at index ${expectedEntryIndex} when dice rolls ${rollResult}`, () => {
            const table = new Table();
            const diceMock = new DiceMock().withResults([rollResult]);
            table.withDice(diceMock);

            const entries = [new Entry().withText("Entry 1"), new Entry().withText("Entry 2")];
            table.entryList.withEntryList(entries);

            const actualRollResult = table.roll();

            expect(actualRollResult.entry).toBe(entries[expectedEntryIndex]);
        });
    }

    test('roll inner Table', () => {
        let table = new Table();
        let innerTable = new Table();
        let innerEntry = new Entry();
        innerTable.entryList.with(innerEntry);
        let entry = new Entry().withTable(innerTable);
        table.entryList.with(entry);

        let rollResult = table.roll();

        expect(rollResult.entry).toBe(entry);
        expect(rollResult.results.length).toBe(1);
        expect(rollResult.results[0].entry).toBe(innerEntry);
    })

    test('roll inner Table combined description', () => {
        let table = new Table();
        let innerTable = new Table();
        let innerEntry = new Entry().withText("Inner Entry");
        innerTable.entryList.with(innerEntry);
        let entry = new Entry().withText("Main Entry: ").withTable(innerTable);
        table.entryList.with(entry);

        let rollResult = table.roll();

        expect(rollResult.combinedString).toBe("Main Entry: Inner Entry");
    })

    test('roll two inner Tables combined description', () => {
        let table = new Table();
        let innerTable = new Table();
        let deepestTable = new Table();
        let deepestEntry = new Entry().withText(".");
        deepestTable.entryList.with(deepestEntry);
        let innerEntry = new Entry().withText("Inner Entry").withTable(deepestTable);
        innerTable.entryList.with((innerEntry));
        let entry = new Entry().withText("Main Entry: ").withTable(innerTable);
        table.entryList.with((entry));

        let rollResult = table.roll();

        expect(rollResult.combinedString).toBe("Main Entry: Inner Entry.");
    })

    test('probability table is not even distributed', () => {
        let table = new ProbabilityTable();

        let isEvenDistributed = table.isEvenDistributed;

        expect(isEvenDistributed).toBe(false);
    })
});