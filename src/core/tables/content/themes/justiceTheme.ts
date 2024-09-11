import {Theme} from "./theme";
import {Source} from "./source";

export class JusticeTheme extends Theme {
    constructor() {
        super();
        this.name = "justice";
        this.description = "Explore the concept of justice, its pursuit, and its various interpretations in society";
        this.sources.push(
            new Source()
                .withName("To Kill a Mockingbird")
                .withLink("https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird")
                .withDescription("legal drama exploring racial injustice"),
            new Source()
                .withName("Batman")
                .withLink("https://en.wikipedia.org/wiki/Batman")
                .withDescription("vigilante justice in a corrupt city"),
        );

        this.subjects = ["Fairness", "Law", "Morality", "Equality", "Retribution", "Reform", "Accountability"];
        this.verbs = ["upholds", "seeks", "challenges", "enforces", "restores", "fights for", "demands"];
        this.objects = ["legal systems", "social norms", "corrupt institutions", "individual rights", "societal wrongs", "power imbalances", "ethical principles"];
        this.modifiers = ["impartial", "restorative", "vigilante", "blind", "poetic", "social", "divine"];
        this.connectors = ["in the face of", "despite", "through", "by means of", "in pursuit of", "at the cost of", "in defiance of"];
        this.outcomes = [
            "exposing corruption",
            "reforming broken systems",
            "balancing scales of fairness",
            "challenging societal norms",
            "protecting the vulnerable",
            "confronting moral dilemmas",
            "sacrificing personal gain for greater good",
            "redefining societal values",
            "inspiring social change"
        ];
        this.contexts = [
            "courtroom dramas",
            "police investigations",
            "vigilante crusades",
            "political conspiracies",
            "dystopian societies",
            "historical injustices",
            "corporate wrongdoings",
            "personal vendettas",
            "international conflicts",
            "supernatural judgments"
        ];
    }
}