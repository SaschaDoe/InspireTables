import {AutoDeletableEntity} from "../deletable";
import type {Table} from "../../tables/table";
import type {Profile} from "./profile";

export class GlobalEntity extends AutoDeletableEntity{
    selectedSubTables: Table[] = [];
    selectedAltTables: Table[] = [];
    currentProfile: Profile | null = null;
}