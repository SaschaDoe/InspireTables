import {Entity} from "../entity";
import {Settings} from "./settings";
import {GenreMix} from "../genre/genreMix";
import type {Adventure} from "../adventure/adventure";

export class Campaign extends Entity{
    name = "";
    description = "";
    settings: Settings = new Settings();
    genreMix: GenreMix = new GenreMix();
    adventures: Adventure[] = [];
}