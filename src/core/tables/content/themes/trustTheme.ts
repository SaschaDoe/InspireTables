import { Theme } from "./theme";
import { Source } from "./source";

export const TrustThemeName = "trust";

export class TrustTheme extends Theme {
    constructor() {
        super();
        this.name = TrustThemeName;
        this.description = "Explore the complexities of trust, its formation, breakdown, and impact on relationships and society";

        this.sources.push(
            new Source()
                .withName("The Girl on the Train")
                .withLink("https://en.wikipedia.org/wiki/The_Girl_on_the_Train_(novel)")
                .withDescription("Psychological thriller: An unreliable narrator grapples with trust issues while solving a mystery"),
            new Source()
                .withName("The Great Gatsby")
                .withLink("https://en.wikipedia.org/wiki/The_Great_Gatsby")
                .withDescription("Classic literature: Exploring trust and betrayal in the context of the American Dream"),
            new Source()
                .withName("Ex Machina")
                .withLink("https://en.wikipedia.org/wiki/Ex_Machina_(film)")
                .withDescription("Science fiction film: Trust and deception between humans and AI"),
        );

        this.subjects = ["Faith", "Betrayal", "Loyalty", "Honesty", "Vulnerability", "Suspicion", "Integrity"];
        this.verbs = ["builds", "erodes", "tests", "restores", "betrays", "challenges", "transforms"];
        this.objects = ["relationships", "societies", "institutions", "self-perception", "alliances", "reputations", "futures"];
        this.modifiers = ["fragile", "unshakeable", "blind", "cautious", "misplaced", "hard-earned", "implicit"];
        this.connectors = ["despite", "through", "until", "when", "although", "because", "while"];
        this.outcomes = [
            "forging unbreakable bonds",
            "uncovering painful truths",
            "rebuilding shattered relationships",
            "exposing deep-seated deceptions",
            "overcoming personal fears",
            "transforming communities",
            "questioning fundamental beliefs",
            "healing from past betrayals",
            "redefining personal boundaries"
        ];
        this.contexts = [
            "a world of shifting alliances",
            "the delicate balance of interpersonal relationships",
            "a society recovering from collective trauma",
            "the ethical landscape of technological advancement",
            "the intimate space between lovers",
            "a high-stakes political environment",
            "the complex dynamics of family ties",
            "a community divided by suspicion",
            "the internal struggle with self-trust"
        ];
    }
}