import { Theme } from "./theme";
import { Source } from "./source";

export const AgonyThemeName = "agony";

export class AgonyTheme extends Theme {
    constructor() {
        super();
        this.name = AgonyThemeName;
        this.description = "Explore the concept of agony in its various physical, emotional, and existential forms";
        this.sources.push(
            new Source()
                .withName("Dante's Inferno")
                .withLink("https://en.wikipedia.org/wiki/Inferno_(Dante)")
                .withDescription("depictions of various forms of suffering in Hell"),
            new Source()
                .withName("The Crucifixion")
                .withLink("https://en.wikipedia.org/wiki/Crucifixion_of_Jesus")
                .withDescription("symbol of extreme physical and spiritual suffering"),
            new Source()
                .withName("1984 by George Orwell")
                .withLink("https://en.wikipedia.org/wiki/Nineteen_Eighty-Four")
                .withDescription("psychological and physical torment in Room 101"),
            new Source()
                .withName("Sophie's Choice by William Styron")
                .withLink("https://en.wikipedia.org/wiki/Sophie%27s_Choice_(novel)")
                .withDescription("the agony of an impossible decision"),
            new Source()
                .withName("The Bell Jar by Sylvia Plath")
                .withLink("https://en.wikipedia.org/wiki/The_Bell_Jar")
                .withDescription("the agony of depression and mental illness")
        );

        this.subjects = ["Pain", "Suffering", "Torment", "Anguish", "Despair", "Grief", "Trauma"];
        this.verbs = ["endures", "inflicts", "overwhelms", "consumes", "transforms", "haunts", "intensifies"];
        this.objects = ["the body", "the mind", "the soul", "relationships", "memories", "hopes", "identity"];
        this.modifiers = ["excruciating", "relentless", "unbearable", "profound", "searing", "crushing", "existential"];
        this.connectors = ["yet", "while", "until", "despite", "inevitably", "hopelessly", "inexorably"];
        this.outcomes = [
            "leading to profound transformation",
            "resulting in emotional numbness",
            "forging resilience",
            "shattering illusions",
            "inspiring artistic expression",
            "prompting philosophical inquiry",
            "fostering empathy and compassion",
            "driving one to the brink of madness",
            "culminating in catharsis"
        ];
        this.contexts = [
            "physical torture",
            "emotional trauma",
            "loss and bereavement",
            "war and conflict",
            "terminal illness",
            "existential crisis",
            "societal oppression",
            "natural disasters",
            "personal failure",
            "unrequited love"
        ];
    }
}