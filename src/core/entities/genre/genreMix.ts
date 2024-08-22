import { Entity } from "../entity";

export class GenreMix extends Entity {
    primaryGenre: string = ""; // The dominant genre in the mix
    mainGenres: string[] = [];
    subGenres: string[] = []; // e.g., ["Action(hero)", "Mystery(noir)"] or ["Action", ""] if no subgenre
    genreWeights: Map<string, number> = new Map(); // Relative weights of each genre

    blendIntensity: number = 0; // 0-10 scale, 0 being barely mixed, 10 being deeply intertwined
    genreTransitions: string = ""; // How the story moves between genre elements

}
