import {Settings} from "./settings";
import {GenreMix} from "../genre/genreMix";
import type {Adventure} from "../adventure/adventure";
import {AutoDeletableEntity} from "../deletable";

export class Campaign extends AutoDeletableEntity{
    name = "";
    description = "";
    settings: Settings = new Settings();
    genreMix: GenreMix = new GenreMix();
    adventures: Adventure[] = [];
}