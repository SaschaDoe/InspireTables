import { describe, expect, test } from "vitest";
import { EntryList } from "../../../core/tables/core/list/entryList";
import { Entry } from "../../../core/tables/core/entry/entry";

const EPSILON = 0.01; // Define a small value for floating-point comparison

describe('entry list', () => {
    function checkIntervals(entryList: EntryList, expectedIntervals: [number, number][]) {
        entryList.setProbabilities();
        expectedIntervals.forEach((interval, index) => {
            expect(entryList.entries[index].interval.start).toBeCloseTo(interval[0], EPSILON);
            expect(entryList.entries[index].interval.end).toBeCloseTo(interval[1], EPSILON);
        });
    }

    test('one plain entry', () => {
        let entryList = new EntryList().with(new Entry());
        checkIntervals(entryList, [[0, 100]]);
    });

    test('adding duplicate entry throws error', () => {
        let entry = new Entry();
        let entryList = new EntryList().with(entry);

        expect(() => {
            entryList.with(entry);
        }).toThrow("Entry element already exists");
    });

    test('two plain entries', () => {
        let entryList = new EntryList()
            .with(new Entry())
            .with(new Entry());

        checkIntervals(entryList, [
            [0, 50],
            [50, 100]
        ]);
    });

    test('three plain entries', () => {
        let entryList = new EntryList()
            .with(new Entry())
            .with(new Entry())
            .with(new Entry());

        checkIntervals(entryList, [
            [0, 33.33],
            [33.33, 66.66],
            [66.66, 100]
        ]);
    });

    test('prob 10 and plain', () => {
        let entryList = new EntryList()
            .with(new Entry().withProbability(10))
            .with(new Entry())

        checkIntervals(entryList, [
            [0, 10],
            [10, 100]
        ]);
    });

    test('plain and prob 10', () => {
        let entryList = new EntryList()
            .with(new Entry())
            .with(new Entry().withProbability(10))

        checkIntervals(entryList, [
            [0, 90],
            [90, 100]
        ]);
    });

    test('plain, plain and prob 10', () => {
        let entryList = new EntryList()
            .with(new Entry())
            .with(new Entry())
            .with(new Entry().withProbability(10))

        checkIntervals(entryList, [
            [0, 45],
            [45, 90],
            [90, 100]
        ]);
    });

    test('plain, prob 10, plain', () => {
        let entryList = new EntryList()
            .with(new Entry())
            .with(new Entry().withProbability(10))
            .with(new Entry());


        checkIntervals(entryList, [
            [0, 45],
            [45, 55],
            [55, 100]
        ]);
    });

    test('plain, prob 10, prob 89', () => {
        let entryList = new EntryList()
            .with(new Entry())
            .with(new Entry().withProbability(10))
            .with(new Entry().withProbability(89));


        checkIntervals(entryList, [
            [0, 1],
            [1, 11],
            [11, 100]
        ]);
    });

    test('even', () => {
        let entryList = new EntryList()
            .with(new Entry().withProbabilityAsWord("even"))
        checkIntervals(entryList, [
            [0, 100],
        ]);
    });

    test('likely', () => {
        let entryList = new EntryList()
            .with(new Entry().withProbabilityAsWord("likely"))
        checkIntervals(entryList, [
            [0, 100],
        ]);
    });

    test('even, even', () => {
        let entryList = new EntryList()
            .with(new Entry().withProbabilityAsWord("even"))
            .with(new Entry().withProbabilityAsWord("even"))
        checkIntervals(entryList, [
            [0, 50],
            [50, 100],
        ]);
    });

    test('likely, unlikely', () => {
        let entryList = new EntryList()
            .with(new Entry().withProbabilityAsWord("likely"))
            .with(new Entry().withProbabilityAsWord("unlikely"));
        checkIntervals(entryList, [
            [0, 85.7],
            [85.7, 100],
        ]);
    });

    test('likely, plain, unlikely', () => {
        let entryList = new EntryList()
            .with(new Entry().withProbabilityAsWord("likely"))
            .with(new Entry())
            .with(new Entry().withProbabilityAsWord("unlikely"));
        checkIntervals(entryList, [
            [0, 57.1],
            [57.1, 77.5],
            [77.5, 100],
        ]);
    });

    test('likely, plain, 90', () => {
        let entryList = new EntryList()
            .with(new Entry().withProbabilityAsWord("likely"))
            .with(new Entry())
            .with(new Entry().withProbability(90));
        checkIntervals(entryList, [
            [0, 7.5],
            [7.5, 10],
            [10, 100],
        ]);
    });
});