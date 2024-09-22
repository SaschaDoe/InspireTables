import { Theme } from "../../../entities/genre/theme";
import { Source } from "../../../entities/genre/source";

export const PsychosomaticDualityThemeName = "psychosomaticDuality";

export class PsychosomaticDualityTheme extends Theme {
    constructor() {
        super();
        this.name = PsychosomaticDualityThemeName;
        this.description = "Explore the complex interplay and potential conflicts between mind and body, examining how mental and physical states influence each other across various contexts and realities";
        this.sources.push(
            new Source()
                .withName("The Diving Bell and the Butterfly")
                .withLink("https://en.wikipedia.org/wiki/The_Diving_Bell_and_the_Butterfly_(film)")
                .withDescription("A man with locked-in syndrome dictates a book using only his eye movements"),
            new Source()
                .withName("The Matrix")
                .withLink("https://en.wikipedia.org/wiki/The_Matrix")
                .withDescription("Explores the concept of a simulated reality and its effects on the human mind and body"),
            new Source()
                .withName("Flowers for Algernon")
                .withLink("https://en.wikipedia.org/wiki/Flowers_for_Algernon")
                .withDescription("Examines the effects of artificially enhanced intelligence on perception and identity"),
            new Source()
                .withName("Ghost in the Shell")
                .withLink("https://en.wikipedia.org/wiki/Ghost_in_the_Shell")
                .withDescription("Explores the nature of consciousness and identity in a world of cybernetic bodies and uploadable minds")
        );

        // The rest of the class remains the same
        this.subjects = ["Consciousness", "Perception", "Will", "Embodiment", "Identity", "Reality", "Cognition"];
        this.verbs = ["transcends", "challenges", "harmonizes", "distorts", "liberates", "constrains", "integrates"];
        this.objects = ["physical limitations", "mental constructs", "sensory experiences", "bodily autonomy", "cognitive processes", "emotional states", "neural pathways"];
        this.modifiers = ["paradoxical", "synergistic", "conflicting", "transformative", "illusory", "visceral", "ethereal"];
        this.connectors = ["while", "yet", "thereby", "despite", "through", "beyond", "within"];
        this.outcomes = [
            "revealing hidden potentials of human consciousness",
            "questioning the nature of reality and perception",
            "exploring the limits of human adaptation",
            "challenging traditional notions of identity",
            "uncovering the power of mind over matter",
            "examining the physical manifestations of mental states",
            "probing the boundaries between self and environment",
            "investigating the role of embodiment in cognition",
            "exploring altered states of consciousness"
        ];
        this.contexts = [
            "a world where minds can be digitally transferred",
            "a society grappling with widespread psychosomatic illnesses",
            "the realm of lucid dreaming and astral projection",
            "a future where human consciousness can inhabit artificial bodies",
            "the subjective experience of time dilation",
            "a reality where thoughts have direct physical consequences",
            "the intersection of quantum physics and consciousness",
            "a culture that has achieved perfect mind-body harmony",
            "the psychology of phantom limb syndrome",
            "a universe where mental and physical realms constantly shift and merge"
        ];
    }
}