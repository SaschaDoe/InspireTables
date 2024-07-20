import {MainGenreTable} from "./genre/mainGenres";
import {ActionSubGenreTable} from "./genre/actionSubGenreTable";
import {ComedySubGenreTable} from "./genre/comedySubGenreTable";
import {AllGenreTable} from "./genre/allGenreTable";
import {Category} from "./category";
import {IllnessAdjectiveTable} from "./illness/illnessAdjectiveTable";

export function allCategories(): Category[] {
    let allCategories: Category[] = [];
    let genreCategory = new Category()
        .withName("Genres")
        .withTable(new AllGenreTable())
        .withTable(new MainGenreTable())
        .withTable(new ActionSubGenreTable())
        .withTable(new ComedySubGenreTable());
    allCategories.push(genreCategory);

    let illnessCategory = new Category()
        .withName("illness")
        .withTable(new IllnessAdjectiveTable());
    allCategories.push(illnessCategory);

    return allCategories;
}