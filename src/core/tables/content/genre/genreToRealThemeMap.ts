import {ActionRealThemesTableName} from "./action/actionRealThemeTable";
import {ComedyRealThemesTableName} from "./comedy/comedyRealThemeTable";
import {CrimeRealThemesTableName} from "./crime/crimeRealThemeTable";
import {DramaRealThemesTableName} from "./drama/dramaRealThemeTable";
import {ExplorerRealThemesTableName} from "./explorer/explorerRealThemeTable";
import {FantasyRealThemesTableName} from "./fantasy/fantasyRealthemeTable";
import {GangsterRealThemesTableName} from "./gangster/gangsterRealThemeTable";
import {HeistRealThemesTableName} from "./heist/heistRealThemeTable";
import {HorrorRealThemesTableName} from "./horror/horrorRealThemeTable";
import {LoveRealThemesTableName} from "./love/loveRealThemeTable";
import {MemoirRealThemesTableName} from "./memoir/memoirRealThemeTable";
import {MysteryRealThemesTableName} from "./mystery/mysteryRealThemeTable";
import {MythicRealThemesTableName} from "./mythic/mythicRealThemeTable";
import {PerformanceRealThemesTableName} from "./performance/performanceRealThemeTable";
import {SciFiRealThemesTableName} from "./sciFi/sciFiRealThemeTable";
import {ThrillerRealThemesTableName} from "./thriller/thrillerRealThemeTable";
import {WarRealThemesTableName} from "./war/warRealThemeTable";
import {WesternRealThemesTableName} from "./western/westernRealThemeTable";

export let genreToRealThemeMap: { [p: string]: string };
genreToRealThemeMap = {
    "action": ActionRealThemesTableName,
    "comedy": ComedyRealThemesTableName,
    "crime": CrimeRealThemesTableName,
    "drama": DramaRealThemesTableName,
    "explorer": ExplorerRealThemesTableName,
    "fantasy": FantasyRealThemesTableName,
    "gangster": GangsterRealThemesTableName,
    "heist": HeistRealThemesTableName,
    "horror": HorrorRealThemesTableName,
    "love": LoveRealThemesTableName,
    "memoir": MemoirRealThemesTableName,
    "mystery": MysteryRealThemesTableName,
    "myth": MythicRealThemesTableName,
    "performance": PerformanceRealThemesTableName,
    "sciFi": SciFiRealThemesTableName,
    "thriller": ThrillerRealThemesTableName,
    "war": WarRealThemesTableName,
    "western": WesternRealThemesTableName,
}