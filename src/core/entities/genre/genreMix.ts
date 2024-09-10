import { Entity } from "../entity";
import {Genre} from "./genre";
import {AutoDeletableEntity} from "../deletable";

export class GenreMix extends AutoDeletableEntity {
    //Genres themselves have more attributes like the tropes they could have and the tropes
    //they actually play or contradict etc. 

    primaryGenre: Genre = new Genre(); // The dominant genre in the mix
    subGenres: Genre[] = []; // e.g., ["Action(hero)", "Mystery(noir)"] or ["Action", ""] if no subgenre
    genreWeights: Map<string, number> = new Map(); // Relative weights of each genre
    techList: [string, number][] = [];

    blendIntensity: number = 0; // 0-10 scale, 0 being barely mixed, 10 being deeply intertwined
    genreTransitions: string = ""; // How the story moves between genre elements
}
