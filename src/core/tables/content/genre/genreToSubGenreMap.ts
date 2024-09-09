import {LoveSubGenreTableName} from "./love/loveSubGenreTable";
import {MemoirSubGenreTableName} from "./memoir/memoirSubGenreTable";
import {ActionSubGenreTableName} from "./action/actionSubGenreTable";
import {ComedySubGenreTableName} from "./comedy/comedySubGenreTable";
import {CrimeSubGenreTableName} from "./crime/crimeSubGenreTable";
import {ExplorerSubGenreTableName} from "./explorer/explorerSubGenreTable";
import {FantasySubGenreTableName} from "./fantasy/fantasySubGenreTable";
import {GangsterSubGenreTableName} from "./gangster/gangsterSubGenreTable";
import {HeistSubGenreTableName} from "./heist/heistSubGenreTable";
import {HorrorSubGenreTableName} from "./horror/horrorSubGenreTable";
import {MythSubGenreTableName} from "./mythic/mythicSubGenreTable";
import {SciFiSubGenreTableName} from "./sciFi/sciFiSubGenreTable";
import {PerformanceSubGenreName} from "./performance/performanceSubGenreTable";
import {ThrillerSubGenreTableName} from "./thriller/thrillerSubGenreTable";
import {WarSubGenreTableName} from "./war/warSubGenreTable";
import {WesternSubGenreTableName} from "./western/westernSubGenreTable";

export const genreToSubGenreMap: { [genre: string]: string } = {
    "love": LoveSubGenreTableName,
    "memoir": MemoirSubGenreTableName,
    "action": ActionSubGenreTableName,
    "comedy": ComedySubGenreTableName,
    "crime": CrimeSubGenreTableName,
    "explorer": ExplorerSubGenreTableName,
    "fantasy": FantasySubGenreTableName,
    "gangster": GangsterSubGenreTableName,
    "heist": HeistSubGenreTableName,
    "horror": HorrorSubGenreTableName,
    "myth": MythSubGenreTableName,
    "sciFi": SciFiSubGenreTableName,
    "performance": PerformanceSubGenreName,
    "thriller": ThrillerSubGenreTableName,
    "war": WarSubGenreTableName,
    "western": WesternSubGenreTableName,
}