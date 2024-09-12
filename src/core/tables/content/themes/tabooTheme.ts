import { Theme } from "./theme";
import { Source } from "./source";

export const TabooLoveThemeName = "tabooLove";

export class TabooLoveTheme extends Theme {
    constructor() {
        super();
        this.name = TabooLoveThemeName;
        this.description = "Explore love that defies societal norms, cultural expectations, or moral boundaries";
        this.sources.push(
            new Source()
                .withName("Lolita")
                .withLink("https://en.wikipedia.org/wiki/Lolita")
                .withDescription("Nabokov's controversial novel about an older man's obsession with a young girl"),
            new Source()
                .withName("Brokeback Mountain")
                .withLink("https://en.wikipedia.org/wiki/Brokeback_Mountain")
                .withDescription("Story of a forbidden and secretive relationship between two cowboys"),
        );

        this.subjects = ["Transgression", "Secrecy", "Desire", "Morality", "Identity", "Power dynamics", "Social norms"];
        this.verbs = ["defies", "challenges", "conceals", "consumes", "transforms", "scandalizes", "liberates"];
        this.objects = ["societal expectations", "cultural taboos", "personal values", "family honor", "legal boundaries", "moral codes", "traditional roles"];
        this.modifiers = ["forbidden", "scandalous", "clandestine", "passionate", "controversial", "transformative", "dangerous"];
        this.connectors = ["despite societal condemnation", "in secret", "against all odds", "at great personal risk", "challenging deeply held beliefs", "defying expectations", "breaking cultural norms"];
        this.outcomes = [
            "facing social ostracism",
            "challenging societal norms",
            "personal growth through adversity",
            "redefining relationship boundaries",
            "confronting internalized prejudices",
            "sacrificing everything for love",
            "sparking social change",
            "grappling with moral dilemmas",
            "finding acceptance in unlikely places"
        ];
        this.contexts = [
            "across significant age gaps",
            "between members of feuding families",
            "amidst religious restrictions",
            "in conservative societies",
            "during times of war or conflict",
            "within professional power dynamics",
            "challenging gender norms",
            "across class divides",
            "in totalitarian regimes",
            "within closed communities"
        ];
    }
}