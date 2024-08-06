import {describe, expect, test} from "vitest";
import {Table} from "../../../core/tables/table";
import {Interval} from "../../../core/tables/interval";

describe('Interval', () => {
    test('getString with same interval start and end', () => {
        let interval = new Interval().withStart(1).withEnd(1);

        let intervalString = interval.toString();

        expect(intervalString).toBe("1");
    })

    test('getString with different interval start and end', () => {
        let interval = new Interval().withStart(1).withEnd(2);

        let intervalString = interval.toString();

        expect(intervalString).toBe("1-2");
    })
});