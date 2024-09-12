import {Table} from "../../../table";
import {InnocenceThemeName} from "../../themes/innocenceTheme";
import {BereavementThemeName} from "../../themes/bereavementTheme";
import {ComingOfAgeThemeName} from "../../themes/comingOfAgeTheme";
import {DeathThemeName} from "../../themes/deathTheme";
import {DestinyThemeName} from "../../themes/destinyTheme";
import {FamilyThemeName} from "../../themes/familyTheme";
import {FishOutOfWaterThemeName} from "../../themes/fishOutOfWaterTheme";
import {PersonalGrowthThemeName} from "../../themes/personalGrowthTheme";
import {SearchThemeName} from "../../themes/searchTheme";
import {RecallThemeName} from "../../themes/recallTheme";
import {PriceOfSuccessThemeName} from "../../themes/priceOfSuccessTheme";
import {GuiltThemeName} from "../../themes/guiltTheme";
import {TraumaThemeName} from "../../themes/traumaTheme";
import {NostalgiaThemeName} from "../../themes/nostalgiaTheme";
import {ChangeThemeName} from "../../themes/changeTheme";

export let memoirThemes = [
    InnocenceThemeName,
    BereavementThemeName,
    ComingOfAgeThemeName,
    DeathThemeName,
    DestinyThemeName,
    FamilyThemeName,
    FishOutOfWaterThemeName,
    PersonalGrowthThemeName,
    SearchThemeName,
    RecallThemeName,
    PriceOfSuccessThemeName,
    GuiltThemeName,
    TraumaThemeName,
    NostalgiaThemeName,
    ChangeThemeName,
];

export const MemoirThemeTableName = "Memoir Theme";

export class MemoirThemesTable extends Table{
    constructor() {
        super();
        this.title = MemoirThemeTableName;
        this.addEntriesFromList(memoirThemes);
    }
}