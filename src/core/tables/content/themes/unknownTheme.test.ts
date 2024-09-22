import {describe, expect, test} from "vitest";
import {mysteryTechLevelList} from "../genre/mystery/mysteryTechLevelList";
import {UnknownTheme} from "./unknownTheme";
import {generateThematicStatement} from "../../../entities/genre/theme";

describe('Unknown theme', () => {
    test('thematic statement', () => {
       let thematicStatement = generateThematicStatement(new UnknownTheme());
       console.log(thematicStatement);
    });
});