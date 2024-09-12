import { Theme } from "./theme";
import { Source } from "./source";

export class RecallTheme extends Theme {
    constructor() {
        super();
        this.name = "recall";
        this.description = "Explore the intricacies of memory and perception, and how they shape our understanding of reality and self";

        this.sources.push(
            new Source()
                .withName("Memento")
                .withLink("https://en.wikipedia.org/wiki/Memento_(film)")
                .withDescription("Neo-noir thriller: A man with short-term memory loss attempts to find his wife's killer"),
            new Source()
                .withName("The Remains of the Day")
                .withLink("https://en.wikipedia.org/wiki/The_Remains_of_the_Day")
                .withDescription("Literary fiction: A butler reflects on his past, revealing the unreliability of memory"),
            new Source()
                .withName("We Were Liars")
                .withLink("https://en.wikipedia.org/wiki/We_Were_Liars")
                .withDescription("Young adult mystery: A teenager tries to remember the truth about a tragic summer"),
        );

        this.subjects = ["Memory", "Perception", "Identity", "Truth", "Reality", "Consciousness", "Time"];
        this.verbs = ["distorts", "reveals", "conceals", "reconstructs", "fragments", "blurs", "shapes"];
        this.objects = ["the past", "one's identity", "truth", "reality", "relationships", "decisions", "the future"];
        this.modifiers = ["unreliable", "fragmented", "subjective", "elusive", "malleable", "haunting", "deceptive"];
        this.connectors = ["while", "yet", "until", "as", "though", "despite", "inevitably"];
        this.outcomes = [
            "uncovering hidden truths",
            "questioning one's identity",
            "rewriting personal history",
            "confronting suppressed trauma",
            "solving long-forgotten mysteries",
            "reconciling past and present",
            "challenging the nature of reality",
            "discovering self-deception",
            "healing through remembrance"
        ];
        this.contexts = [
            "the labyrinth of the mind",
            "a world where memories can't be trusted",
            "the intersection of past and present",
            "a reality shaped by perception",
            "the struggle against forgetting",
            "a journey through time and consciousness",
            "the reconstruction of a fragmented past",
            "the blurred lines between memory and imagination",
            "a quest for truth in a world of unreliable narrators"
        ];
    }
}