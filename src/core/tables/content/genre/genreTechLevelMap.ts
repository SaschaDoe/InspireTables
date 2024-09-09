import {loveTechLevelList} from "./love/loveTechLevelList";
import {memoirTechLevelList} from "./memoir/memoirTechLevelList";
import {actionTechLevelList} from "./action/actionTechLevelList";
import {comedyTechLevelList} from "./comedy/comedyTechLevelList";
import {crimeTechLevelList} from "./crime/crimeTechLevelList";
import {explorerTechLevelList} from "./explorer/explorerTechLevelList";
import {fantasyTechLevelList} from "./fantasy/fantasyTechLevelList";
import {gangsterTechLevelList} from "./gangster/gangsterTechLevelList";
import {heistTechLevelList} from "./heist/heistTechLevelList";
import {horrorTechLevelList} from "./horror/horrorTechLevelList";
import {sciFiTechLevelList} from "./sciFi/sciFiTechLevelList";
import {mythicTechLevelList} from "./mythic/mythicTechLevelList";
import {performanceTechLevelList} from "./performance/performanceTechLevelList";
import {thrillerTechLevelList} from "./thriller/thrillerTechLevelList";
import {warTechLevelList} from "./war/warTechLevelList";
import {westernTechLevelList} from "./western/westernTechLevelList";


export const genreToTechLevelMap: { [genre: string]: [string,number][] } = {
    "love": loveTechLevelList,
    "memoir": memoirTechLevelList,
    "action": actionTechLevelList,
    "comedy": comedyTechLevelList,
    "crime": crimeTechLevelList,
    "explorer": explorerTechLevelList,
    "fantasy": fantasyTechLevelList,
    "gangster": gangsterTechLevelList,
    "heist": heistTechLevelList,
    "horror": horrorTechLevelList,
    "myth": mythicTechLevelList,
    "sciFi": sciFiTechLevelList,
    "performance": performanceTechLevelList,
    "thriller": thrillerTechLevelList,
    "war": warTechLevelList,
    "western": westernTechLevelList,
};