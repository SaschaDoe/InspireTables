import type {Source} from "./source";

export class ThemeDto{
    name="";
    description = "";
    sources: Source[] = [];
}