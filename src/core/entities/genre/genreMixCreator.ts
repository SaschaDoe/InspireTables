import {GenreMix} from "./genreMix";
import {getStore} from "../persist/stores";
import {GenreCreator} from "./genreCreator";
import {CreationResult} from "../creationResult";
import {BaseCreator} from "../baseCreator";
import type {Genre} from "./genre";
import {NarrativeMediumTypes} from "../campaign/narrativeMediumTypes";

export class GenreMixCreator extends BaseCreator {
    narrativeMedium: NarrativeMediumTypes = NarrativeMediumTypes.RPG;

    withNarrativeMedium(narrativeMedium: NarrativeMediumTypes){
        this.narrativeMedium = narrativeMedium;
        return this;
    }

    async create() {
        let genreMix = new GenreMix();

        let creationResult = new CreationResult();
        let primaryGenreCreationResult = await new GenreCreator(this.tableManager)
            .withNarrativeMedium(this.narrativeMedium)
            .create();
        creationResult.addCreationResult(primaryGenreCreationResult);
        let genre = primaryGenreCreationResult.getCreation() as Genre;
        if(genre){
            genreMix.primaryGenre = genre;
        }

        creationResult.addCreation(genreMix);

        return creationResult;
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