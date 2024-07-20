import { test, expect } from "vitest"
import {Table} from "../../../core/tables/table";

test('get all entries from input', () => {
    let table = new Table();
    let inputs = ["bla"];
    table.withEntriesFromList(inputs);
    expect(table.entries.length).toBe(1);
    expect(table.entries[0].name).toBe("bla");
})