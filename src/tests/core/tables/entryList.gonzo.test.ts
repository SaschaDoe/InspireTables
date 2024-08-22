import {describe, expect, test} from "vitest";
import {EntryList} from "../../../core/tables/core/list/entryList";
import {Entry} from "../../../core/tables/core/entry/entry";
import {MainGenreTable} from "../../../core/tables/content/genre/mainGenres";

const EPSILON = 0.01; // Define a small value for floating-point comparison


describe('entry list gonzo', () => {
    function checkIntervals(entryList: EntryList, expectedProb: number[]) {
        entryList.setProbabilities();
        expectedProb.forEach((prob, index) => {
            expect(entryList.entries[index].interval.probability).toBeCloseTo(prob, EPSILON);
        });
    }

    test('prevent negative probability', () => {
        let entryList = new MainGenreTable().entryList;

        entryList.withGonzo(2);
        entryList.setProbabilities();
        let probability = entryList.entries[0].interval.probability;
        expect(probability).toBeCloseTo(0, EPSILON);
    });

    test('prob 10, 90 - gonzo 0 = 50, 50', () => {
        let entryList = new EntryList()
            .withGonzo(1)
            .with(new Entry().withProbability(10))
            .with(new Entry().withProbability(90));

        checkIntervals(entryList, [
            50,50]);
    });

    test('prob 10, 10, 80 - gonzo 0 = 50, 50, 50', () => {
        let entryList = new EntryList()
            .withGonzo(1)
            .with(new Entry().withProbability(10))
            .with(new Entry().withProbability(10))
            .with(new Entry().withProbability(80));

        checkIntervals(entryList, [
            33,33,33]);
    });

    test('prob 10, 10, 80 - gonzo 0 = 50, 50, 50', () => {
        let entryList = new EntryList()
            .withGonzo(1)
            .with(new Entry())
            .with(new Entry().withProbability(10))
            .with(new Entry().withProbability(80));

        checkIntervals(entryList, [
            33,33,33]);
    });

    test('prob 10, 10, 80 - gonzo 0 = 50, 50, 50', () => {
        let entryList = new EntryList()
            .withGonzo(1)
            .with(new Entry())
            .with(new Entry().withProbabilityAsWord("likely"))
            .with(new Entry().withProbability(80));

        checkIntervals(entryList, [
            33,33,33]);
    });

    test('prob 10, 90 - gonzo 2 = 90, 10', () => {
        let entryList = new EntryList()
            .withGonzo(2)
            .with(new Entry().withProbability(10))
            .with(new Entry().withProbability(90));

        checkIntervals(entryList, [
            90,10]);
    });
});