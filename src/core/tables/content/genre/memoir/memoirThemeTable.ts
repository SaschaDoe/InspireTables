import {Table} from "../../../table";
import {InnocenceTheme} from "../../themes/innocenceTheme";
import {BereavementTheme} from "../../themes/bereavementTheme";
import {ComingOfAgeTheme} from "../../themes/comingOfAgeTheme";
import {DeathTheme} from "../../themes/deathTheme";
import {DestinyTheme} from "../../themes/destinyTheme";
import {FamilyTheme} from "../../themes/familyTheme";
import {FishOutOfWaterTheme} from "../../themes/fishOutOfWaterTheme";
import {PersonalGrowthTheme} from "../../themes/personalGrowthTheme";
import {SearchTheme} from "../../themes/searchTheme";
import {RecallTheme} from "../../themes/recallTheme";
import {PriceOfSuccessTheme} from "../../themes/priceOfSuccessTheme";
import {GuiltTheme} from "../../themes/guiltTheme";
import {TraumaTheme} from "../../themes/traumaTheme";
import {NostalgiaTheme} from "../../themes/nostalgiaTheme";

export let memoirThemes = [
    new InnocenceTheme().name,
    new BereavementTheme().name,
    new ComingOfAgeTheme().name,
    new DeathTheme().name,
    new DestinyTheme().name,
    new FamilyTheme().name,
    new FishOutOfWaterTheme().name,
    new PersonalGrowthTheme().name,
    new SearchTheme().name,
    new RecallTheme().name,
    new PriceOfSuccessTheme().name,
    new GuiltTheme().name,
    new TraumaTheme().name,
    new NostalgiaTheme().name,
];

export const MemoirThemeTableName = "Memoir Theme";

export class MemoirThemesTable extends Table{
    constructor() {
        super();
        this.title = MemoirThemeTableName;
        this.addEntriesFromList(memoirThemes);
    }
}