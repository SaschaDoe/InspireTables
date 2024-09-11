import { Theme } from "./theme";
import { Source } from "./source";

export class SoulmatesTheme extends Theme {
    constructor() {
        super();
        this.name = "soulmates";
        this.description = "Explore profound connections between individuals that transcend conventional relationships, across various genres and contexts";
        this.sources.push(
            new Source()
                .withName("The Time Traveler's Wife")
                .withLink("https://en.wikipedia.org/wiki/The_Time_Traveler%27s_Wife")
                .withDescription("A romance novel about a couple whose relationship transcends time"),
            new Source()
                .withName("Outlander")
                .withLink("https://en.wikipedia.org/wiki/Outlander_(novel)")
                .withDescription("A historical romance series featuring soulmates across centuries"),
            new Source()
                .withName("Good Omens")
                .withLink("https://en.wikipedia.org/wiki/Good_Omens")
                .withDescription("A fantasy novel featuring an angel and demon with a profound bond"),
            new Source()
                .withName("His Dark Materials")
                .withLink("https://en.wikipedia.org/wiki/His_Dark_Materials")
                .withDescription("A fantasy trilogy exploring the concept of daemons as external souls")
        );

        this.subjects = ["Connection", "Destiny", "Compatibility", "Understanding", "Synchronicity", "Companionship", "Recognition"];
        this.verbs = ["transcends", "unites", "completes", "resonates", "transforms", "anchors", "enlightens"];
        this.objects = ["souls", "lifetimes", "dimensions", "barriers", "personal growth", "shared purpose", "inner truth"];
        this.modifiers = ["profound", "inexplicable", "eternal", "instantaneous", "transformative", "cosmic", "complementary"];
        this.connectors = ["across time and space", "despite physical separation", "through shared experiences", "in parallel lives", "beyond words or explanation", "against all odds", "in perfect harmony"];
        this.outcomes = [
            "finding completion in another",
            "achieving a higher purpose together",
            "overcoming seemingly insurmountable obstacles",
            "experiencing personal transformation",
            "challenging the nature of reality",
            "redefining the concept of love",
            "fulfilling an ancient prophecy",
            "bridging different worlds or dimensions",
            "achieving spiritual enlightenment"
        ];
        this.contexts = [
            "across different time periods",
            "in parallel universes",
            "between different species or beings",
            "in the realm of spirituality or religion",
            "through psychic or empathic connections",
            "in the context of reincarnation",
            "among teammates or partners in high-stakes situations",
            "between an individual and a concept or ideal",
            "in virtual or technologically created realities",
            "as part of a cosmic or universal plan"
        ];
    }
}