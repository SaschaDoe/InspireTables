import { describe, expect, test, vi } from "vitest";
import { Table } from "../../../core/tables/table";
import { Experiment } from "../../../core/entities/experiment";
import { AttributeDefinition } from "../../../core/entities/attributeDefinition";
import { RollResult } from "../../../core/tables/rollResult";
import { Entry } from "../../../core/tables/core/entry/entry";
import type { Dice } from "../../../core/tables/dice";
import {EntryPart} from "../../../core/tables/core/entry/entryPart";

describe('Experiment', () => {
    test('generateMatchingInstance returns expected result', () => {
        const mockDice: Dice = {
            roll: vi.fn().mockReturnValue(0)
        } as any;

        const rollSpy = vi.fn(() => {
            const mockEntry = new Entry();
            let entryPart = new EntryPart().withText("test value")
            mockEntry.parts.push(entryPart);
            return new RollResult(mockEntry).withRolledIndex(0);
        });

        class MockTable extends Table {
            withDice(dice: Dice): this {
                super.withDice(dice);
                this.roll = rollSpy;
                return this;
            }
        }

        const attributeDefinitions: AttributeDefinition[] = [
            new AttributeDefinition()
                .withName('testAttr')
                .withTable(new MockTable())
                .withWeight(1)
        ];

        const experiment = new Experiment<{ testAttr: string }>(mockDice);

        const numberOfTries = 10;
        experiment.withNumberOfTries(numberOfTries);

        const [index, instance] = experiment.generateMatchingInstance(
            attributeDefinitions,
            0, // target index
            2, // result length
            () => ({ testAttr: '' }) // create instance function
        );

        expect(index).toBe(0);
        expect(instance).toEqual({ testAttr: 'test value' });
        expect(rollSpy).toHaveBeenCalled();
        console.log(`rollSpy was called ${rollSpy.mock.calls.length} times`);
    });
});