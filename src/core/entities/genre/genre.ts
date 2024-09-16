import {AutoDeletableEntity} from "../deletable";

export class Genre extends AutoDeletableEntity{
    name: string = "";
    subGenreName: string = ""

    settings: string[] = []; // Possible settings or worlds
    magicSystemTypes: string[] = []; // Types of magic systems (if applicable) like in high fantasy TODO this are under the settings thing... how to handle that?
    technologyLevels: [string, number][] = []; // Possible technology  like the genre steamPunk etc
    techLevelBase: string = "";

    characterTypes: string[] = []; // Character archetypes or roles
    plotTropes: string[] = []; // Key plot elements TODO: should be a class of itself because there is beginning middle end etc
    plotStructures: string[] = [];
    narrativePerspectives: string[] = []; //In rpg is this the narrator voice of the game master

    // Mood and pacing
    moodOptions: string[] = [];
    paceOptions: string[] = [];
}

export function getGenreFullName(name: string, subGenreName: string){
    if(subGenreName !== ""){
        return `${name}(${subGenreName})`;
    }

    return name;
}

export function getJustMainGenreName(input: string): string{
        // Check if the genreName contains a parenthesis
        let index = input.indexOf('(');
        if (index !== -1) {
            // Return the substring before the parenthesis
            return input.substring(0, index).trim();
        } else {
            // Return the original genreName if there's no parenthesis
            return input.trim();
        }
}