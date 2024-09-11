import {Theme} from "./theme";
import {Source} from "./source";

export class GreedTheme extends Theme {
    constructor() {
        super();
        this.name = "greed";
        this.description = "Explore the concept of greed, its manifestations, consequences, and impact on individuals and society";
        this.sources.push(
            new Source()
                .withName("The Wolf of Wall Street")
                .withLink("https://en.wikipedia.org/wiki/The_Wolf_of_Wall_Street_(2013_film)")
                .withDescription("excessive greed in the financial sector"),
            new Source()
                .withName("A Christmas Carol")
                .withLink("https://en.wikipedia.org/wiki/A_Christmas_Carol")
                .withDescription("the transformation of a greedy man"),
        );

        this.subjects = ["Wealth", "Power", "Ambition", "Excess", "Materialism", "Selfishness", "Desire"];
        this.verbs = ["consumes", "corrupts", "drives", "blinds", "motivates", "destroys", "transforms"];
        this.objects = ["individuals", "relationships", "societies", "moral values", "resources", "opportunities", "futures"];
        this.modifiers = ["insatiable", "all-consuming", "ruthless", "blinding", "corrupting", "destructive", "addictive"];
        this.connectors = ["at the cost of", "fueled by", "leading to", "overshadowing", "sacrificing", "exploiting", "disregarding"];
        this.outcomes = [
            "accumulating vast wealth",
            "losing human connections",
            "moral decay",
            "societal inequality",
            "environmental destruction",
            "personal downfall",
            "legal consequences",
            "spiritual emptiness",
            "generational impacts"
        ];
        this.contexts = [
            "corporate boardrooms",
            "stock markets",
            "political arenas",
            "family dynamics",
            "resource-rich regions",
            "consumer culture",
            "real estate empires",
            "technological innovations",
            "artistic pursuits",
            "healthcare systems"
        ];
    }
}