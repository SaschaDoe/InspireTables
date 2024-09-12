import { Theme } from "./theme";
import { Source } from "./source";

export class GuiltTheme extends Theme {
    constructor() {
        super();
        this.name = "guilt";
        this.description = "Explore the psychological and moral implications of guilt across various contexts";
        this.sources.push(
            new Source()
                .withName("Crime and Punishment")
                .withLink("https://en.wikipedia.org/wiki/Crime_and_Punishment")
                .withDescription("Classic novel exploring the psychological torment of guilt"),
            new Source()
                .withName("The Tell-Tale Heart")
                .withLink("https://en.wikipedia.org/wiki/The_Tell-Tale_Heart")
                .withDescription("Short story about guilt manifesting as paranoia"),
            new Source()
                .withName("Atonement")
                .withLink("https://en.wikipedia.org/wiki/Atonement_(novel)")
                .withDescription("Novel examining the lifelong effects of a childhood transgression"),
            new Source()
                .withName("Breaking Bad")
                .withLink("https://en.wikipedia.org/wiki/Breaking_Bad")
                .withDescription("TV series showing the gradual erosion of morality and guilt"),
            new Source()
                .withName("Macbeth")
                .withLink("https://en.wikipedia.org/wiki/Macbeth")
                .withDescription("Shakespearean tragedy depicting guilt's destructive power")
        );

        this.subjects = ["Conscience", "Remorse", "Sin", "Redemption", "Justice", "Memory", "Responsibility"];
        this.verbs = ["haunts", "consumes", "motivates", "distorts", "redeems", "punishes", "transforms"];
        this.objects = ["the psyche", "relationships", "one's future", "perception of reality", "moral compass", "self-image", "past actions"];
        this.modifiers = ["overwhelming", "insidious", "redemptive", "paralyzing", "unresolved", "cathartic", "corrosive"];
        this.connectors = ["until", "although", "because", "nevertheless", "gradually", "relentlessly", "unexpectedly"];
        this.outcomes = [
            "leading to self-destruction",
            "motivating attempts at redemption",
            "distorting reality and relationships",
            "driving confessions or revelations",
            "prompting moral reflection",
            "causing psychological breakdown",
            "inspiring acts of atonement",
            "perpetuating cycles of harm",
            "facilitating personal growth"
        ];
        this.contexts = [
            "the criminal underworld",
            "familial relationships",
            "historical atrocities",
            "religious or spiritual settings",
            "the aftermath of war",
            "professional ethics violations",
            "childhood traumas",
            "romantic entanglements",
            "political scandals",
            "moral dilemmas in daily life"
        ];
    }
}