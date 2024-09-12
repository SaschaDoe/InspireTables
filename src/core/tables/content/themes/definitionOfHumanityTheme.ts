import { Theme } from "./theme";
import { Source } from "./source";

export class DefinitionOfHumanityTheme extends Theme {
    constructor() {
        super();
        this.name = "definition-of-humanity";
        this.description = "Explore the concept of humanity through comparisons with non-human entities and diverse cultural perspectives";

        this.sources.push(
            new Source()
                .withName("Frankenstein")
                .withLink("https://en.wikipedia.org/wiki/Frankenstein")
                .withDescription("Gothic novel exploring the boundaries of human creation and monstrosity"),
            new Source()
                .withName("Blade Runner")
                .withLink("https://en.wikipedia.org/wiki/Blade_Runner")
                .withDescription("Science fiction film questioning the nature of humanity and artificial intelligence"),
            new Source()
                .withName("Planet of the Apes")
                .withLink("https://en.wikipedia.org/wiki/Planet_of_the_Apes_(1968_film)")
                .withDescription("Science fiction exploring the line between humans and evolved animals"),
            new Source()
                .withName("Ex Machina")
                .withLink("https://en.wikipedia.org/wiki/Ex_Machina_(film)")
                .withDescription("Psychological thriller examining artificial intelligence and human emotions"),
            new Source()
                .withName("The Metamorphosis")
                .withLink("https://en.wikipedia.org/wiki/The_Metamorphosis")
                .withDescription("Surrealist novella about a man transforming into an insect, questioning human identity"),
            new Source()
                .withName("To Kill a Mockingbird")
                .withLink("https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird")
                .withDescription("Classic novel exploring human nature, morality, and social inequality")
        );

        this.subjects = ["Consciousness", "Empathy", "Morality", "Creativity", "Emotion", "Reason", "Self-awareness", "Compassion"];
        this.verbs = ["defines", "challenges", "transcends", "mimics", "questions", "evolves", "blurs", "embodies"];
        this.objects = ["human nature", "artificial intelligence", "animal instinct", "monstrous traits", "social constructs", "biological limitations", "ethical boundaries", "cultural values"];
        this.modifiers = ["sentient", "synthetic", "primal", "monstrous", "evolved", "compassionate", "rational", "prejudiced"];
        this.connectors = ["yet", "despite", "through", "beyond", "within", "alongside", "against", "amidst"];
        this.outcomes = [
            "redefining the concept of humanity",
            "bridging the gap between species",
            "challenging ethical norms",
            "unveiling hidden potentials",
            "blurring the lines of consciousness",
            "provoking existential questions",
            "inspiring technological advancements",
            "fostering empathy across boundaries",
            "reshaping societal perceptions",
            "confronting social injustices"
        ];
        this.contexts = [
            "a dystopian future",
            "a laboratory of mad science",
            "an evolved animal society",
            "the depths of human psyche",
            "an alien encounter",
            "a world of sentient machines",
            "the fringes of human civilization",
            "a surreal metamorphosis",
            "the aftermath of genetic engineering",
            "a philosophical debate on consciousness",
            "a racially divided community"
        ];
    }
}