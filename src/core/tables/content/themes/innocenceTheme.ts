import { Theme } from "./theme";
import { Source } from "./source";

export class InnocenceTheme extends Theme {
    constructor() {
        super();
        this.name = "innocence";
        this.description = "Explore the concept of innocence and its loss across various genres and contexts";
        this.sources.push(
            new Source()
                .withName("To Kill a Mockingbird")
                .withLink("https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird")
                .withDescription("childhood innocence confronting societal injustice"),
            new Source()
                .withName("Lord of the Flies")
                .withLink("https://en.wikipedia.org/wiki/Lord_of_the_Flies")
                .withDescription("the loss of innocence in extreme circumstances"),
        );

        this.subjects = ["Child", "Society", "Nature", "Knowledge", "Evil", "Purity", "Experience"];
        this.verbs = ["corrupts", "preserves", "challenges", "shatters", "nurtures", "questions", "reveals"];
        this.objects = ["worldview", "moral compass", "childhood memories", "trust in others", "idealism", "naivety", "innocence itself"];
        this.modifiers = ["fragile", "enduring", "shattered", "cherished", "bittersweet", "lost", "rediscovered"];
        this.connectors = ["yet", "while", "until", "despite", "gradually", "suddenly", "inevitably"];
        this.outcomes = [
            "leading to disillusionment",
            "fostering wisdom and growth",
            "revealing harsh truths",
            "inspiring nostalgia",
            "challenging societal norms",
            "sparking moral awakening",
            "preserving hope in adversity",
            "confronting complex realities",
            "nurturing empathy and understanding"
        ];
        this.contexts = [
            "coming-of-age stories",
            "war narratives",
            "dystopian worlds",
            "pastoral settings",
            "urban environments",
            "fantastical realms",
            "historical periods",
            "contemporary society",
            "familial relationships",
            "educational institutions"
        ];
    }
}