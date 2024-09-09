import {GenreMix} from "./genreMix";
import {getStore} from "../persist/stores";
import {GenreCreator} from "./genreCreator";
import {CreationResult} from "../creationResult";
import {BaseCreator} from "../baseCreator";
import type {Genre} from "./genre";
import {NarrativeMediumTypes} from "../campaign/narrativeMediumTypes";
import {RollResult} from "../../tables/rollResult";

export class GenreMixCreator extends BaseCreator {
    narrativeMedium: NarrativeMediumTypes = NarrativeMediumTypes.RPG;

    withNarrativeMedium(narrativeMedium: NarrativeMediumTypes) {
        this.narrativeMedium = narrativeMedium;
        return this;
    }

    async create() {
        let genreMix = new GenreMix();

        let creationResult = new CreationResult();
        let primaryGenreCreationResult = await this.createUniqueGenre(genreMix);
        creationResult.addCreationResult(primaryGenreCreationResult);
        genreMix.primaryGenre = primaryGenreCreationResult.getCreation() as Genre;
        let min = 0;
        let hasJustOneGenre = this.dice.getRandom() > 0.8;
        if(!hasJustOneGenre){
            min = 1;
        }
        let numberOfGenres = this.dice.rollInterval(min, 4);
        let numberOfGenresRollResult = new RollResult().withInterval(1, 4, "number of genres", numberOfGenres);
        creationResult.addRollResult(numberOfGenresRollResult);

        for (let i = 0; i < numberOfGenres; i++) {
            let genreCreationResult = await this.createUniqueGenre(genreMix);
            creationResult.addCreationResult(genreCreationResult);
            genreMix.subGenres.push(genreCreationResult.getCreation() as Genre);
        }

        let remainingWeight = 100;

        // Assign weight to primary genre
        let primaryGenreWeight = this.dice.rollInterval(40, 70);
        if(numberOfGenres === 0){
            primaryGenreWeight = 100;
        }
        let primaryGenreWeightResult = new RollResult().withInterval(20, 80, "primary genre weight", primaryGenreWeight);
        creationResult.addRollResult(primaryGenreWeightResult);

        genreMix.genreWeights.set(genreMix.primaryGenre.fullName, primaryGenreWeight);
        console.log("GenreMix: ",genreMix);
        remainingWeight -= primaryGenreWeight;

        for (let i = 0; i < genreMix.subGenres.length; i++) {
            let subGenre = genreMix.subGenres[i];
            let weight: number;

            if (i === genreMix.subGenres.length - 1) {
                weight = remainingWeight;
            } else {
                let min = 1;
                let max = remainingWeight - (genreMix.subGenres.length - i - 1);
                weight = this.dice.rollInterval(min, max);
                let genreWeightResult = new RollResult().withInterval(min, max, `genre weight for ${subGenre.fullName}`, weight);
                creationResult.addRollResult(genreWeightResult);
                remainingWeight -= weight;
            }

            genreMix.genreWeights.set(subGenre.fullName, weight);

            let subGenreWeightResult = new RollResult().withInterval(1, 100, `${subGenre.fullName} weight`, weight);
            creationResult.addRollResult(subGenreWeightResult);
        }

        creationResult.addCreation(genreMix);

        return creationResult;
    }

    async createUniqueGenre(genreMix: GenreMix): Promise<CreationResult> {
        let genreCreationResult;
        let genre: Genre;

        do {
            genreCreationResult = await new GenreCreator(this.tableManager)
                .withNarrativeMedium(this.narrativeMedium)
                .create();
            genre = genreCreationResult.getCreation() as Genre;
        } while (this.isGenreDuplicate(genreMix, genre));

        return genreCreationResult;
    }

    isGenreDuplicate(genreMix: GenreMix, otherGenre: Genre): boolean {
        // Combine primary genre and sub-genres into one array
        const allGenres = [genreMix.primaryGenre, ...genreMix.subGenres].filter(Boolean);

        // Check if any genre in the list matches the logic you provided
        return allGenres.some(genre =>
            genre?.fullName === otherGenre.fullName
            ||
            genre?.name === otherGenre.name &&
            otherGenre.subGenreName === ""
        );
    }

    async persist(genreMix: GenreMix): Promise<void> {
        console.log("persist genreMix", genreMix.id);
        try {
            let store = await getStore('genreMixStore');
            await store.saveEntity(genreMix);
            console.log(`genre mix saved successfully.`);
        } catch (error) {
            console.error(`Failed to save entities:`, error);
            throw error;
        }
    }
}
