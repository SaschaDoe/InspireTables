import {describe, expect, test} from "vitest";
import {DynamicGenreMixer} from "../../../../core/entities/genre/dynamicGenreMixer";
import {DiceMock} from "../../tables/diceMock";

describe('DynamicGenreMixer', () => {
    test('get a highly probable mix', () => {
        let dynamicGenreMixer = new DynamicGenreMixer();

        let mockDice = new DiceMock().withResults([1]);
        let nextGenre = dynamicGenreMixer.getNextGenre(["action"], mockDice);

        expect(nextGenre).toBe("sciFi");
    });
});