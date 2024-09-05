import {LoveSubGenreTableName} from "./loveSubGenreTable";
import {MemoirSubGenreTableName} from "./memoirSubGenreTable";
import {ActionSubGenreTableName} from "./actionSubGenreTable";
import {ComedySubGenreTableName} from "./comedySubGenreTable";
import {CrimeSubGenreTableName} from "./crimeSubGenreTable";
import {ExplorerSubGenreTableName} from "./explorerSubGenreTable";
import {FantasySubGenreTableName} from "./fantasySubGenreTable";
import {GangsterSubGenreTableName} from "./gangsterSubGenreTable";
import {HeistSubGenreTableName} from "./heistSubGenreTable";
import {HorrorSubGenreTableName} from "./horrorSubGenreTable";
import {MythSubGenreTableName} from "./mythicSubGenreTable";
import {SciFiSubGenreTableName} from "./sciFiSubGenreTable";
import {PerformanceSubGenreName} from "./performanceSubGenreTable";
import {ThrillerSubGenreTableName} from "./thrillerSubGenreTable";
import {WarSubGenreTableName} from "./warSubGenreTable";
import {WesternSubGenreTableName} from "./westernSubGenreTable";

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