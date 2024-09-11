import {Theme} from "./theme";
import {Source} from "./source";

export class UnknownTheme extends Theme {
    constructor() {
        super();
        this.name = "the unknown";
        this.description = "Explore the concept of the unknown, encompassing mystery, discovery, and venturing into uncharted territories";
        this.sources.push(
            new Source()
                .withName("Frozen II")
                .withLink("https://en.wikipedia.org/wiki/Frozen_II")
                .withDescription("journey into the unknown and self-discovery"),
            new Source()
                .withName("The Call of Cthulhu")
                .withLink("https://en.wikipedia.org/wiki/The_Call_of_Cthulhu")
                .withDescription("cosmic horror and the terror of the unknown"),
        );

        this.subjects = ["Mystery", "Discovery", "Exploration", "Transformation", "Fear", "Wonder", "Growth"];
        this.verbs = ["beckons", "challenges", "reveals", "transforms", "awakens", "conceals", "unravels"];
        this.objects = ["hidden truths", "inner potential", "ancient secrets", "new horizons", "forgotten memories", "cosmic mysteries", "untapped abilities"];
        this.modifiers = ["enigmatic", "uncharted", "mysterious", "transformative", "daunting", "alluring", "revelatory"];
        this.connectors = ["beyond", "within", "through", "despite", "amidst", "beneath", "upon encountering"];
        this.outcomes = [
            "uncovering hidden truths",
            "facing one's deepest fears",
            "discovering inner strength",
            "challenging established beliefs",
            "embracing change and growth",
            "unlocking mystical powers",
            "understanding one's true nature",
            "bridging worlds",
            "redefining reality"
        ];
        this.contexts = [
            "the boundaries of human knowledge",
            "the frontiers of scientific understanding",
            "the depths of the human psyche",
            "the limits of perception",
            "the edge of the observable universe",
            "the intersection of reality and imagination",
            "the unexplored realms of consciousness",
            "the gaps in historical records",
            "the uncharted territories of technological advancement",
            "the blurred lines between different dimensions"
        ];
    }
}