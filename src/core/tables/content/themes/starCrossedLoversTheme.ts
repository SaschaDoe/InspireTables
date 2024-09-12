import { Theme } from "./theme";
import { Source } from "./source";

export const StarCrossedLoversThemeName = "starCrossedLovers";

export class StarCrossedLoversTheme extends Theme {
    constructor() {
        super();
        this.name = StarCrossedLoversThemeName;
        this.description = "Explore the tragic romance of lovers fated to be kept apart";
        this.sources.push(
            new Source()
                .withName("Romeo and Juliet")
                .withLink("https://en.wikipedia.org/wiki/Romeo_and_Juliet")
                .withDescription("Shakespeare's classic tale of young star-crossed lovers"),
            new Source()
                .withName("Tristan and Isolde")
                .withLink("https://en.wikipedia.org/wiki/Tristan_and_Iseult")
                .withDescription("Medieval romance of forbidden love and tragedy"),
        );

        this.subjects = ["Love", "Fate", "Family", "Society", "Tragedy", "Passion", "Conflict"];
        this.verbs = ["defies", "challenges", "unites", "separates", "transcends", "dooms", "transforms"];
        this.objects = ["social norms", "family expectations", "destiny", "barriers", "time", "circumstances", "hearts"];
        this.modifiers = ["passionate", "forbidden", "doomed", "eternal", "fleeting", "intense", "ill-fated"];
        this.connectors = ["despite", "against all odds", "tragically", "hopelessly", "defiantly", "inevitably", "fatefully"];
        this.outcomes = [
            "ending in tragedy",
            "challenging societal norms",
            "transcending death",
            "sparking social change",
            "revealing the power of love",
            "questioning fate's design",
            "inspiring future generations",
            "exposing family conflicts",
            "sacrificing everything for love"
        ];
        this.contexts = [
            "warring families",
            "different social classes",
            "opposing kingdoms",
            "across time periods",
            "amidst political turmoil",
            "during times of war",
            "against religious differences",
            "in a dystopian future",
            "between different species or worlds"
        ];
    }
}