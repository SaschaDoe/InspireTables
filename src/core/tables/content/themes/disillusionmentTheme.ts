import {Theme} from "./theme";
import {Source} from "./source";

export class DisillusionmentTheme extends Theme {
    constructor() {
        super();
        this.name = "disillusionment";
        this.description = "Explore the concept of disillusionment, the shattering of ideals, and the gap between expectations and reality";
        this.sources.push(
            new Source()
                .withName("The Great Gatsby")
                .withLink("https://en.wikipedia.org/wiki/The_Great_Gatsby")
                .withDescription("disillusionment with the American Dream"),
            new Source()
                .withName("1984")
                .withLink("https://en.wikipedia.org/wiki/Nineteen_Eighty-Four")
                .withDescription("disillusionment with societal structures and ideologies"),
        );

        this.subjects = ["Dreams", "Ideals", "Expectations", "Cultural Myths", "Promises", "Hope", "Faith"];
        this.verbs = ["shatters", "unravels", "fades", "betrays", "crumbles", "exposes", "challenges"];
        this.objects = ["reality", "truth", "human nature", "societal norms", "cultural values", "personal beliefs", "collective aspirations"];
        this.modifiers = ["harsh", "bitter", "gradual", "sudden", "inevitable", "eye-opening", "transformative"];
        this.connectors = ["in contrast to", "despite", "revealing", "contrary to", "beneath the surface of", "in the face of", "stripped of"];
        this.outcomes = [
            "confronting harsh realities",
            "loss of innocence",
            "questioning long-held beliefs",
            "reevaluating personal values",
            "seeking new meaning",
            "cynicism and apathy",
            "personal growth through adversity",
            "redefining success and happiness",
            "uncovering hidden truths"
        ];
        this.contexts = [
            "coming of age",
            "post-war societies",
            "political upheavals",
            "cultural revolutions",
            "economic crises",
            "technological advancements",
            "social movements",
            "personal relationships",
            "professional careers",
            "spiritual journeys"
        ];
    }
}