import type {Entity} from "../../../core/entities/entity";
import {describe, expect, test} from "vitest";
import {Table} from "../../../core/tables/table";
import {Illness} from "../../../core/entities/status/illness";
import {Entry} from "../../../core/tables/entry";
import {FunctionEntry} from "../../../core/tables/functionEntry";
import {IllnessCreator} from "../../../core/entities/status/illnessCreator";
import {summarizeEntities} from "../../../core/entities/entityHelper";
import {Character} from "../../../core/entities/character/character";

describe('EntityHelper', () => {
    test('SummerizeEntities', () => {
        let entity = new Illness();

        let entityText = summarizeEntities([entity]);

        expect(entityText).toBe("Illness: 0"); //see: summarizeEntities
    });

    test('SummerizeEntities', () => {
        let entity = new Illness();
        let secondEntity = new Character();

        let entityText = summarizeEntities([entity, secondEntity]);

        expect(entityText).toBe("Illness: 0; Character: 1");
    });
});