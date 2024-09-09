import { Entity } from "../entity";
import {AutoDeletableEntity} from "../deletable";

export class Genre extends AutoDeletableEntity{
    name: string = "";
    subGenreName: string = ""

    settings: string[] = []; // Possible settings or worlds
    magicSystemTypes: string[] = []; // Types of magic systems (if applicable) like in high fantasy TODO this are under the settings thing... how to handle that?
    technologyLevels: [string, number][] = []; // Possible technology  like the genre steamPunk etc

    characterTypes: string[] = []; // Character archetypes or roles
    plotTropes: string[] = []; // Key plot elements TODO: should be a class of itself because there is beginning middle end etc
    plotStructures: string[] = [];
    narrativePerspectives: string[] = []; //In rpg is this the narrator voice of the game master

    // Mood and pacing
    moodOptions: string[] = [];
    paceOptions: string[] = [];

    //for subGenre it is like "action(superhero)"
    get fullName(){
        if(this.subGenreName !== ""){
            return `${this.name}(${this.subGenreName})`;
        }

        return this.name;
    }
}
