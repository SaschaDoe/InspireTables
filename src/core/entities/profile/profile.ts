import {AutoDeletableEntity} from "../deletable";
import {Campaign} from "../campaign/campaign";
import {NarrativeMediumTypes} from "../campaign/narrativeMediumTypes";
import type {Table} from "../../tables/table";

export class Profile extends AutoDeletableEntity{
    name = "";
    campaigns: Campaign[] = [];
    narrativeMediumType = NarrativeMediumTypes.RPG;

    selectedSubTables: Table[] = [];
    selectedAltTables: Table[] = [];
}