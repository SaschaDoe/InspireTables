import {describe, test, expect} from "vitest";
import {EntrySetting} from "../../../../../core/tables/core/entry/entrySetting";
import {probabilityBuzzwords} from "../../../../../core/tables/core/list/probabilityBuzzwords";

describe('EntrySetting', () => {
    test('withProbabilityWord - throws error when not from buzzwords', () => {
        const entrySetting = new EntrySetting();
        const invalidWord = 'invalidProbabilityWord';

        expect(() => entrySetting.withProbabilityWord(invalidWord)).toThrow(
            `${invalidWord} is not a valid probability word`
        );
    });

    test('withProbabilityWord - does not throw error for valid buzzword', () => {
        const entrySetting = new EntrySetting();
        const validWord = probabilityBuzzwords[0][0]; // Assuming the first word in the first subarray is valid

        expect(() => entrySetting.withProbabilityWord(validWord)).not.toThrow();
    });
});