import {GenreMix} from "./genreMix";
import {getStore} from "../persist/stores";
import {GenreCreator} from "./genreCreator";
import {CreationResult} from "../creationResult";
import {BaseCreator} from "../baseCreator";

export class GenreMixCreator extends BaseCreator<GenreMix> {
    create(): CreationResult {
        let genreMix = new GenreMix();

        let creationResult = new CreationResult();
        let primaryGenreCreationResult = new GenreCreator(this.tableManager).create();
        creationResult.addCreationResult(primaryGenreCreationResult);
        genreMix.primaryGenre = primaryGenreCreationResult.getCreation();
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