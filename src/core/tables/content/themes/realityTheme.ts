import {Theme} from "./theme";
import {Source} from "./source";

export class RealityTheme extends Theme {
    constructor() {
        super();
        this.name = "reality";
        this.description = "Explore the concept of reality, including its nature, perception, and the boundaries between what's real and what isn't";
        this.sources.push(
            new Source()
                .withName("The Matrix")
                .withLink("https://en.wikipedia.org/wiki/The_Matrix")
                .withDescription("questioning the nature of perceived reality"),
            new Source()
                .withName("Plato's Allegory of the Cave")
                .withLink("https://en.wikipedia.org/wiki/Allegory_of_the_cave")
                .withDescription("exploring the nature of reality and perception"),
        );

        this.subjects = ["Perception", "Existence", "Consciousness", "Illusion", "Truth", "Simulation", "Objectivity"];
        this.verbs = ["perceives", "constructs", "distorts", "reveals", "challenges", "simulates", "transcends"];
        this.objects = ["sensory input", "cognitive biases", "shared beliefs", "physical laws", "subjective experiences", "alternate dimensions", "fundamental truths"];
        this.modifiers = ["subjective", "objective", "perceived", "simulated", "quantum", "metaphysical", "consensual"];
        this.connectors = ["beyond", "within", "despite", "through the lens of", "in contrast to", "at the intersection of", "underlying"];
        this.outcomes = [
            "questioning fundamental assumptions",
            "expanding consciousness",
            "breaking perceptual barriers",
            "unveiling hidden truths",
            "reconciling conflicting realities",
            "transcending physical limitations",
            "redefining existence",
            "merging subjective and objective realities",
            "discovering universal constants"
        ];
        this.contexts = [
            "the nature of consciousness",
            "the fabric of spacetime",
            "the limits of human perception",
            "the intersection of quantum and classical physics",
            "the boundary between dreams and wakefulness",
            "the construction of social reality",
            "the impact of technology on perceived reality",
            "the role of language in shaping reality",
            "the influence of cultural beliefs on individual realities",
            "the exploration of altered states of consciousness"
        ];
    }
}