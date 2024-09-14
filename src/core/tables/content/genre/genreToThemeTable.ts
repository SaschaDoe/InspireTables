import {ActionThemeTableName} from "./action/actionThemeTable";
import {ComedyThemeTableName} from "./comedy/comedyThemeTable";
import {CrimeThemeTableName} from "./crime/crimeThemeTable";
import {DramaThemeTableName} from "./drama/dramaThemeTable";
import {ExplorerThemeTableName} from "./explorer/explorerThemeTable";
import {FantasyThemeTableName} from "./fantasy/fantasyThemeTable";
import {MemoirThemeTableName} from "./memoir/memoirThemeTable";
import {MysteryThemeTableName} from "./mystery/mysteryThemeTable";
import {PerformanceThemeTableName} from "./performance/performanceThemeTable";
import {SciFiThemeTableName} from "./sciFi/sciFiThemeTable";
import {ThrillerThemeTableName} from "./thriller/thrillerThemeTable";
import {WarThemeTableName} from "./war/warThemeTable";
import {WesternThemeTableName} from "./western/westernThemeTable";
import {MythicThemeTableName} from "./mythic/mythicThemeTable";
import {HorrorThemeTableName} from "./horror/horrorThemeTable";
import {HeistThemeTableName} from "./heist/heistThemeTable";
import {GangsterThemeTableName} from "./gangster/gangsterThemeTable";
import {LoveThemeTableName} from "./love/loveThemeTable";

export const genreToThemeTableMap: { [key: string]: string } = {
    action: ActionThemeTableName,
    comedy: ComedyThemeTableName,
    crime: CrimeThemeTableName,
    drama: DramaThemeTableName,
    explorer: ExplorerThemeTableName,
    fantasy: FantasyThemeTableName,
    gangster: GangsterThemeTableName,
    heist: HeistThemeTableName,
    horror: HorrorThemeTableName,
    myth: MythicThemeTableName,
    love: LoveThemeTableName,
    memoir: MemoirThemeTableName,
    mystery: MysteryThemeTableName,
    performance: PerformanceThemeTableName,
    sciFi: SciFiThemeTableName,
    thriller: ThrillerThemeTableName,
    war: WarThemeTableName,
    western: WesternThemeTableName,
};