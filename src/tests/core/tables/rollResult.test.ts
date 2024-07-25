import {describe, expect, test} from "vitest";
import {Table} from "../../../core/tables/table";
import {Entry} from "../../../core/tables/entry";
import {FunctionEntry} from "../../../core/tables/functionEntry";
import {IllnessCreator} from "../../../core/entities/status/illnessCreator";
import {Illness} from "../../../core/entities/status/illness";
import {Character} from "../../../core/entities/character/character";
import {CharacterCreator} from "../../../core/entities/character/characterCreator";

describe('RollResult', () => {
    test('get one entity', () => {
        let table = new Table();
        let illness = new Illness();
        table.entries.push(new Entry().withFunction(new FunctionEntry().withFunction(() => illness)));

        let result = table.roll();
        expect(result.entities.length).toBe(1);
        expect(result.entities[0]).toBe(illness);
    });

    test('get two entities', () => {
        let table = new Table();
        let illness = new Illness();
        let illness2 = new Illness();
        table.entries.push(new Entry()
            .withFunction(new FunctionEntry().withFunction(() => illness))
            .withFunction(new FunctionEntry().withFunction(() => illness2)));

        let result = table.roll();
        expect(result.entities.length).toBe(2);
        expect(result.entities[0]).toBe(illness);
        expect(result.entities[1]).toBe(illness2);
    });

    test('get two entities from one function', () => {
        let table = new Table();
        let illness = new Illness();
        let illness2 = new Illness();
        table.entries.push(new Entry()
            .withFunction(new FunctionEntry().withFunction(() => [illness,illness2])));
        let result = table.roll();
        expect(result.entities.length).toBe(2);
        expect(result.entities[0]).toBe(illness);
        expect(result.entities[1]).toBe(illness2);
    });

    test('get two entities from one entity', () => {
        let table = new Table();
        table.entries.push(new Entry()
            .withFunction(new FunctionEntry().withFunction(() => {
                let characterCreator = new CharacterCreator();
                characterCreator.hasIllness = true;
                return characterCreator.create();
            })));
        let result = table.roll();

        expect(result.entities.length).toBe(2);
        expect(result.entities[0]).toBeInstanceOf(Character);
        expect(result.entities[1]).toBeInstanceOf(Illness);
    });
});