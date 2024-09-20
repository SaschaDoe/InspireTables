import {Table} from "../../../table";

export const comedyRealThemes = [
    "laughter is the best medicine",
    "love conquers all, even in the most ridiculous situations",
    "the underdog can triumph through wit and perseverance",
    "appearances can be deceiving",
    "the importance of friendship and community",
    "embracing one's quirks and imperfections",
    "the absurdity of social norms and expectations",
    "the power of positive thinking",
    "finding humor in everyday life",
    "the clash between tradition and modernity",
    "the journey is more important than the destination",
    "truth is often stranger than fiction",
    "the transformative power of self-acceptance",
    "the fine line between genius and insanity",
    "the importance of family, both biological and chosen",
    "the universal nature of human folly",
    "the catharsis of shared embarrassment",
    "the unexpected wisdom found in foolishness",
    "the liberation that comes from not taking oneself too seriously",
    "the comedy inherent in the human struggle for control",
    "the healing power of forgiveness, especially of oneself",
    "the beauty of imperfection in a world striving for perfection"
]

export const ComedyRealThemesTableName = "Comedy Real Themes"

export class ComedyRealThemeTable extends Table{
    constructor() {
        super();
        this.title = ComedyRealThemesTableName;
        this.addEntriesFromList(comedyRealThemes);
    }
}