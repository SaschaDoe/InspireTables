import { Theme } from "./theme";
import { Source } from "./source";

export class InvasionTheme extends Theme {
    constructor() {
        super();
        this.name = "invasion";
        this.description = "Explore the concept of invasion across various scales: body, home, and society";
        this.sources.push(
            new Source()
                .withName("The Body Snatchers")
                .withLink("https://en.wikipedia.org/wiki/The_Body_Snatchers")
                .withDescription("invasion of individual bodies and identities"),
            new Source()
                .withName("Parasite")
                .withLink("https://en.wikipedia.org/wiki/Parasite_(2019_film)")
                .withDescription("invasion of home and class boundaries"),
            new Source()
                .withName("War of the Worlds")
                .withLink("https://en.wikipedia.org/wiki/The_War_of_the_Worlds")
                .withDescription("invasion of society by alien forces"),
        );

        this.subjects = ["Intruders", "Boundaries", "Identity", "Privacy", "Autonomy", "Culture", "Security"];
        this.verbs = ["violates", "transforms", "challenges", "corrupts", "overwhelms", "assimilates", "disrupts"];
        this.objects = ["personal space", "bodily integrity", "social norms", "individual rights", "collective consciousness", "national sovereignty", "cultural identity"];
        this.modifiers = ["insidious", "violent", "subtle", "rapid", "unstoppable", "transformative", "alien"];
        this.connectors = ["while", "yet", "consequently", "gradually", "suddenly", "inevitably", "systematically"];
        this.outcomes = [
            "leading to loss of self",
            "sparking resistance movements",
            "reshaping societal structures",
            "blurring lines between us and them",
            "exposing hidden vulnerabilities",
            "triggering paranoia and mistrust",
            "forcing adaptation and evolution",
            "challenging notions of humanity",
            "revealing underlying societal issues"
        ];
        this.contexts = [
            "a quiet suburban neighborhood",
            "a person's own mind and body",
            "global political landscape",
            "digital privacy and cybersecurity",
            "cultural assimilation in immigration",
            "microscopic world of pathogens",
            "ecological balance in nature",
            "corporate takeover of industries",
            "virtual reality and online identities",
            "genetic engineering and body modification"
        ];
    }
}