import {Entity} from "../entity";
import {Settings} from "./settings";

export class Campaign extends Entity{
    name = "";
    description = "";
    settings: Settings = new Settings();
}