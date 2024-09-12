import { Theme } from "./theme";
import { Source } from "./source";

export const IsolationThemeName = "isolation";

export class IsolationTheme extends Theme {
    constructor() {
        super();
        this.name = IsolationThemeName;
        this.description = "Explore the physical, emotional, and psychological effects of isolation in various contexts";
        this.sources.push(
            new Source()
                .withName("Cast Away")
                .withLink("https://en.wikipedia.org/wiki/Cast_Away")
                .withDescription("physical isolation on a deserted island"),
            new Source()
                .withName("The Shining")
                .withLink("https://en.wikipedia.org/wiki/The_Shining_(film)")
                .withDescription("psychological isolation in a remote hotel"),
        );

        this.subjects = ["Solitude", "Loneliness", "Self-reliance", "Introspection", "Survival", "Mental health", "Connection"];
        this.verbs = ["intensifies", "challenges", "reveals", "transforms", "tests", "breaks", "strengthens"];
        this.objects = ["human psyche", "relationships", "social norms", "personal limits", "perception of reality", "sense of self", "survival instincts"];
        this.modifiers = ["deafening", "oppressive", "enlightening", "maddening", "liberating", "crushing", "transformative"];
        this.connectors = ["yet", "while", "consequently", "paradoxically", "inevitably", "gradually", "ultimately"];
        this.outcomes = [
            "leading to self-discovery",
            "causing mental breakdown",
            "fostering creativity",
            "altering perception of time",
            "deepening appreciation for connection",
            "revealing hidden strengths",
            "challenging societal expectations",
            "redefining personal values",
            "triggering hallucinations"
        ];
        this.contexts = [
            "a deserted island",
            "a space station",
            "a pandemic lockdown",
            "a prison cell",
            "a remote research station",
            "a digital world",
            "an empty city",
            "the depths of one's mind",
            "a dystopian future",
            "a spiritual retreat"
        ];
    }
}