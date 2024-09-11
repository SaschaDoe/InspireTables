import {Table} from "../../../table";
import {FishOutOfWaterTheme} from "../../themes/fishOutOfWaterTheme";
import {MistakenIdentityTheme} from "../../themes/mistakenIdentity";
import {FamilyTheme} from "../../themes/familyTheme";
import {ComingOfAgeTheme} from "../../themes/comingOfAgeTheme";
import {CultureClashesTheme} from "../../themes/cultureClashTheme";

export let comedyThemes = [
    new FishOutOfWaterTheme().name,
    new MistakenIdentityTheme().name,
    new FamilyTheme().name,
    new ComingOfAgeTheme().name,
    new CultureClashesTheme().name,
];

export const ComedyThemeTableName = "Comedy Theme";

export class ComedyThemeTable extends Table{
    constructor() {
        super();
        this.title = ComedyThemeTableName;
        this.addEntriesFromList(comedyThemes);
    }
}