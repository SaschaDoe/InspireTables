import { Entity } from "../entity";

export class Genre extends Entity {
    name: string = "";

    // Core genre attributes for story generation
    themes: string[] = []; // Potential themes for the story
    settings: string[] = []; // Possible settings or worlds
    magicSystemTypes: string[] = []; // Types of magic systems (if applicable) TODO this are under the settings thing... how to handle that?
    technologyLevels: string[] = []; // Possible technology levels

    characterTypes: string[] = []; // Character archetypes or roles
    plotTropes: string[] = []; // Key plot elements TODO: should be a class of itself because there is beginning middle end etc
    plotStructures: string[] = [];
    narrativePerspectives: string[] = []; //In rpg is this the narrator voice of the game master

    // Mood and pacing
    moodOptions: string[] = [];
    paceOptions: string[] = [];
}
