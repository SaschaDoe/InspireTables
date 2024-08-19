import {describe, expect, test} from "vitest";
import {Table} from "../../../core/tables/table";
import {Entry} from "../../../core/tables/core/entry/entry";
import {FunctionEntry} from "../../../core/tables/core/entry/functionEntry";
import {Illness} from "../../../core/entities/status/illness";
import {CharacterCreator} from "../../../core/entities/character/characterCreator";

describe('RollResult', () => {
    test('get one entity', () => {
        let table = new Table();
        let illness = new Illness();
        table.entryList.with(new Entry().withFunction(new FunctionEntry().withFunction(() => ({ Illness: [illness] }))));

        let result = table.roll();
        expect(Object.keys(result.entities).length).toBe(1);
        expect(result.entities.Illness).toBeDefined();
        expect(result.entities.Illness.length).toBe(1);
        expect(result.entities.Illness[0]).toBe(illness);
    });

    test('get two entities', () => {
        let table = new Table();
        let illness = new Illness();
        let illness2 = new Illness();
        table.entryList.with(new Entry()
            .withFunction(new FunctionEntry().withFunction(() => ({ Illness: [illness] })))
            .withFunction(new FunctionEntry().withFunction(() => ({ Illness: [illness2] }))));

        let result = table.roll();
        expect(Object.keys(result.entities).length).toBe(1);
        expect(result.entities.Illness.length).toBe(2);
        expect(result.entities.Illness[0]).toBe(illness);
        expect(result.entities.Illness[1]).toBe(illness2);
    });

    test('get two entities from one function', () => {
        let table = new Table();
        let illness = new Illness();
        let illness2 = new Illness();
        table.entryList.with((new Entry()
            .withFunction(new FunctionEntry().withFunction(() => ({ Illness: [illness, illness2] })))));
        let result = table.roll();
        expect(Object.keys(result.entities).length).toBe(1);
        expect(result.entities.Illness.length).toBe(2);
        expect(result.entities.Illness[0]).toBe(illness);
        expect(result.entities.Illness[1]).toBe(illness2);
    });

    test('get two entities from one entity', () => {
        let table = new Table();
        table.entryList.with((new Entry()
            .withFunction(new FunctionEntry().withFunction(() => {
                let characterCreator = new CharacterCreator();
                characterCreator.hasIllness = true;
                return characterCreator.create();
            }))));
        let result = table.roll();

        expect(Object.keys(result.entities).length).toBe(2);
        expect(result.entities.Character.length).toBe(1);
        expect(result.entities.Illness.length).toBe(1);
    });
});