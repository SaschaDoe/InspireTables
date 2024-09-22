import { Theme } from "../../../entities/genre/theme";
import { Source } from "../../../entities/genre/source";

export const AttractionThemeName = "attraction";

export class AttractionTheme extends Theme {
    constructor() {
        super();
        this.name = AttractionThemeName;
        this.description = "Explore the various facets of romantic and interpersonal attraction";
        this.sources.push(
            new Source()
                .withName("Pride and Prejudice")
                .withLink("https://en.wikipedia.org/wiki/Pride_and_Prejudice")
                .withDescription("Jane Austen's classic novel of attraction overcoming first impressions"),
            new Source()
                .withName("The Notebook")
                .withLink("https://en.wikipedia.org/wiki/The_Notebook_(novel)")
                .withDescription("Nicholas Sparks' tale of passionate, enduring attraction"),
        );

        this.subjects = ["Chemistry", "Desire", "Compatibility", "Intimacy", "Passion", "Connection", "Romance"];
        this.verbs = ["sparks", "ignites", "develops", "intensifies", "challenges", "transforms", "endures"];
        this.objects = ["hearts", "minds", "relationships", "perceptions", "expectations", "boundaries", "lives"];
        this.modifiers = ["magnetic", "instant", "slow-burning", "unexpected", "powerful", "subtle", "undeniable"];
        this.connectors = ["despite", "gradually", "passionately", "inexplicably", "inevitably", "mutually", "secretly"];
        this.outcomes = [
            "leading to a deep connection",
            "overcoming personal barriers",
            "challenging societal norms",
            "transforming both individuals",
            "creating a lasting partnership",
            "inspiring personal growth",
            "rekindling lost passion",
            "bridging differences",
            "defying expectations"
        ];
        this.contexts = [
            "at first sight",
            "between longtime friends",
            "in a professional setting",
            "across cultural divides",
            "in the digital age",
            "during personal crisis",
            "in the aftermath of past relationships",
            "amidst family pressures",
            "in unlikely circumstances",
            "through shared adversity"
        ];
    }
}