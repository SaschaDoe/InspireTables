import { Theme } from "./theme";
import { Source } from "./source";

export const AfterlifeThemeName = "afterlife";

export class AfterlifeTheme extends Theme {
    constructor() {
        super();
        this.name = AfterlifeThemeName;
        this.description = "Explore concepts of the afterlife across various cultures, belief systems, and genres";
        this.sources.push(
            new Source()
                .withName("Egyptian Book of the Dead")
                .withLink("https://en.wikipedia.org/wiki/Book_of_the_Dead")
                .withDescription("Ancient Egyptian guide to the afterlife"),
            new Source()
                .withName("Dante's Divine Comedy")
                .withLink("https://en.wikipedia.org/wiki/Divine_Comedy")
                .withDescription("Medieval Christian vision of the afterlife"),
            new Source()
                .withName("The Lovely Bones")
                .withLink("https://en.wikipedia.org/wiki/The_Lovely_Bones")
                .withDescription("Modern novel mixing afterlife with crime thriller"),
            new Source()
                .withName("Coco")
                .withLink("https://en.wikipedia.org/wiki/Coco_(2017_film)")
                .withDescription("Animated film blending Mexican folklore with family drama"),
            new Source()
                .withName("The Good Place")
                .withLink("https://en.wikipedia.org/wiki/The_Good_Place")
                .withDescription("TV comedy series exploring ethics and the afterlife")
        );

        this.subjects = ["Soul", "Judgment", "Eternity", "Reincarnation", "Paradise", "Underworld", "Spirits", "Memory", "Legacy", "Redemption", "Closure", "Unfinished business"];
        this.verbs = ["transcends", "judges", "transforms", "purifies", "reunites", "wanders", "ascends", "haunts", "lingers", "evolves", "reconciles", "illuminates"];
        this.objects = ["mortal coil", "divine realms", "karmic cycle", "ancestral spirits", "eternal rest", "cosmic balance", "final destination", "parallel universes", "collective consciousness", "personal growth", "earthly attachments", "universal truths"];
        this.modifiers = ["ethereal", "eternal", "mysterious", "divine", "haunting", "redemptive", "cyclical", "bittersweet", "surreal", "cathartic", "liminal", "transcendent"];
        this.connectors = ["beyond", "through", "amidst", "within", "eternally", "cyclically", "transcendentally", "paradoxically", "retrospectively", "metaphysically", "introspectively", "universally"];
        this.outcomes = [
            "achieving eternal peace",
            "facing divine judgment",
            "reuniting with loved ones",
            "continuing the cycle of rebirth",
            "exploring celestial realms",
            "atoning for earthly sins",
            "becoming one with the universe",
            "guiding the living",
            "unveiling cosmic truths",
            "resolving unfinished emotional business",
            "influencing the world of the living",
            "challenging the nature of reality itself",
            "finding closure and acceptance",
            "transcending cultural and personal limitations"
        ];
        this.contexts = [
            "the weighing of the heart ceremony",
            "the River Styx",
            "the Elysian Fields",
            "purgatory",
            "Valhalla",
            "the Summerlands",
            "Nirvana",
            "the astral plane",
            "the realms of gods and spirits",
            "the cosmic cycle of death and rebirth",
            "a limbo between life and death",
            "a bureaucratic afterlife system",
            "a subjective, personalized afterlife",
            "a shared dreamscape of collective memories",
            "a multiverse of possible afterlives",
            "a virtual reality construct",
            "a time loop of relived experiences"
        ];
    }
}