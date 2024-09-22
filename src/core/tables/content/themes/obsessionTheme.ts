import { Theme } from "../../../entities/genre/theme";
import { Source } from "../../../entities/genre/source";

export const ObsessionThemeName = "obsession";

export class ObsessionTheme extends Theme {
    constructor() {
        super();
        this.name = ObsessionThemeName;
        this.description = "Explore the consuming nature of obsession and its impacts across various contexts and genres";

        this.sources.push(
            new Source()
                .withName("Moby-Dick")
                .withLink("https://en.wikipedia.org/wiki/Moby-Dick")
                .withDescription("Classic literature: Captain Ahab's obsessive pursuit of the white whale"),
            new Source()
                .withName("Black Swan")
                .withLink("https://en.wikipedia.org/wiki/Black_Swan_(film)")
                .withDescription("Psychological thriller film: A ballerina's obsession with perfection"),
            new Source()
                .withName("The Collector")
                .withLink("https://en.wikipedia.org/wiki/The_Collector")
                .withDescription("Crime novel: A man's obsession leads to kidnapping"),
        );

        this.subjects = ["Fixation", "Desire", "Compulsion", "Passion", "Monomania", "Addiction", "Infatuation"];
        this.verbs = ["consumes", "drives", "corrupts", "motivates", "blinds", "transforms", "destroys"];
        this.objects = ["the mind", "relationships", "rationality", "morality", "self-control", "reality", "one's soul"];
        this.modifiers = ["all-consuming", "relentless", "irrational", "destructive", "transformative", "haunting", "maddening"];
        this.connectors = ["until", "while", "despite", "leading to", "ultimately", "gradually", "inexorably"];
        this.outcomes = [
            "descending into madness",
            "achieving the impossible",
            "losing everything",
            "discovering hidden truths",
            "transforming into the object of obsession",
            "sacrificing humanity",
            "reaching enlightenment through focus",
            "destroying oneself and others",
            "attaining twisted perfection"
        ];
        this.contexts = [
            "the depths of the human psyche",
            "a world of unfulfilled desires",
            "the fine line between genius and insanity",
            "the pursuit of the unattainable",
            "the darkness within the human heart",
            "a society that values achievement above all",
            "the blurred boundaries of reality and fantasy",
            "a journey into the abyss of fixation",
            "the collision of passion and reason"
        ];
    }
}