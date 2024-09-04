import {AutoDeletableEntity} from "../deletable";
import type {Table} from "../../tables/table";
import type {Profile} from "./profile";
import type {Campaign} from "../campaign/campaign";

export class GlobalEntity extends AutoDeletableEntity{
    selectedSubTables: Table[] = [];
    selectedAltTables: Table[] = [];
    currentProfile: Profile | null = null;
    currentCampaign: Campaign | null = null;
}