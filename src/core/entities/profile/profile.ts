import {AutoDeletableEntity} from "../deletable";
import {Campaign} from "../campaign/campaign";
import {NarrativeMediumTypes} from "../campaign/narrativeMediumTypes";
import type {Table} from "../../tables/table";

export class Profile extends AutoDeletableEntity{
    name = "";
    campaign = new Campaign();
    narrativeMediumType = NarrativeMediumTypes.RPG;
    isSelected = false;

    selectedSubTables: Table[] = [];
    selectedAltTables: Table[] = [];
}