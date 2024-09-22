import { Theme } from "../../../entities/genre/theme";
import { Source } from "../../../entities/genre/source";

export const ChangeThemeName = "change";

export class ChangeTheme extends Theme {
    constructor() {
        super();
        this.name = ChangeThemeName;
        this.description = "Explore the concept of change in its many forms, from personal transformation to societal shifts, and its impact on individuals and the world";
        this.sources.push(
            new Source()
                .withName("To Kill a Mockingbird")
                .withLink("https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird")
                .withDescription("Social change and personal growth (Literature)"),
            new Source()
                .withName("The Metamorphosis")
                .withLink("https://en.wikipedia.org/wiki/The_Metamorphosis")
                .withDescription("Sudden, drastic personal change (Surrealist Fiction)"),
            new Source()
                .withName("An Inconvenient Truth")
                .withLink("https://en.wikipedia.org/wiki/An_Inconvenient_Truth")
                .withDescription("Environmental change and its consequences (Documentary)"),
            new Source()
                .withName("The Social Network")
                .withLink("https://en.wikipedia.org/wiki/The_Social_Network")
                .withDescription("Technological change reshaping society (Biographical Drama)")
        );

        this.subjects = ["Individual", "Society", "Nature", "Technology", "Relationship", "Ideology", "Culture", "System"];
        this.verbs = ["transforms", "evolves", "adapts", "resists", "embraces", "catalyzes", "reverses", "accelerates"];
        this.objects = ["perspective", "status quo", "environment", "paradigm", "identity", "structure", "norm", "balance"];
        this.modifiers = ["gradual", "sudden", "profound", "subtle", "irreversible", "cyclical", "disruptive", "progressive"];
        this.connectors = ["through", "despite", "amidst", "following", "triggering", "alongside", "beneath", "beyond"];
        this.outcomes = [
            "personal growth",
            "societal progress",
            "environmental transformation",
            "technological revolution",
            "cultural shift",
            "paradigm change",
            "relationship evolution",
            "systemic overhaul",
            "ideological transformation",
            "historical turning point"
        ];
        this.contexts = [
            "coming of age",
            "political upheaval",
            "scientific breakthrough",
            "economic crisis",
            "natural disaster",
            "technological innovation",
            "social movement",
            "personal crisis",
            "global pandemic",
            "cultural renaissance",
            "climate change",
            "space exploration",
            "artificial intelligence development",
            "war and conflict",
            "demographic shift"
        ];
    }
}