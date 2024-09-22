import { Theme } from "../../../entities/genre/theme";
import { Source } from "../../../entities/genre/source";

export const LoveTriangleThemeName = "love triangle";

export class LoveTriangleTheme extends Theme {
    constructor() {
        super();
        this.name = LoveTriangleThemeName;
        this.description = "Explore the complexities and conflicts arising from romantic entanglements involving three people";
        this.sources.push(
            new Source()
                .withName("The Great Gatsby")
                .withLink("https://en.wikipedia.org/wiki/The_Great_Gatsby")
                .withDescription("F. Scott Fitzgerald's novel featuring the complex relationship between Gatsby, Daisy, and Tom"),
            new Source()
                .withName("Twilight")
                .withLink("https://en.wikipedia.org/wiki/Twilight_(Meyer_novel)")
                .withDescription("Stephenie Meyer's vampire romance involving Bella, Edward, and Jacob"),
        );

        this.subjects = ["Rivalry", "Jealousy", "Indecision", "Loyalty", "Desire", "Betrayal", "Self-discovery"];
        this.verbs = ["complicates", "intensifies", "divides", "challenges", "transforms", "reveals", "strains"];
        this.objects = ["relationships", "emotions", "loyalties", "self-perception", "future plans", "moral values", "personal growth"];
        this.modifiers = ["passionate", "conflicted", "intense", "heartbreaking", "transformative", "unexpected", "tumultuous"];
        this.connectors = ["torn between", "despite loyalty to", "secretly yearning for", "conflicted by feelings for", "struggling to choose between", "drawn to both", "caught between"];
        this.outcomes = [
            "choosing between two loves",
            "losing both potential partners",
            "discovering true feelings",
            "breaking long-standing relationships",
            "forming unexpected alliances",
            "questioning one's desires",
            "redefining personal values",
            "causing collateral damage to others",
            "finding an unconventional resolution"
        ];
        this.contexts = [
            "high school drama",
            "workplace romance",
            "long-term friendships tested",
            "reuniting with a past love",
            "arranged marriage versus true love",
            "wartime romances",
            "online versus real-life connections",
            "cross-cultural relationships",
            "supernatural or paranormal settings",
            "political or royal entanglements"
        ];
    }
}