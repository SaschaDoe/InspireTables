import { Theme } from "./theme";
import { Source } from "./source";

export const BereavementThemeName = "bereavement";

export class BereavementTheme extends Theme {
    constructor() {
        super();
        this.name = BereavementThemeName;
        this.description = "Explore the complex emotions and experiences of grief, loss, and mourning across various contexts";
        this.sources.push(
            new Source()
                .withName("Hamlet")
                .withLink("https://en.wikipedia.org/wiki/Hamlet")
                .withDescription("grief and revenge following the loss of a father"),
            new Source()
                .withName("A Monster Calls")
                .withLink("https://en.wikipedia.org/wiki/A_Monster_Calls")
                .withDescription("a child's struggle with impending loss and grief"),
        );

        this.subjects = ["Mourner", "Memory", "Time", "Absence", "Healing", "Legacy", "Acceptance"];
        this.verbs = ["haunts", "transforms", "lingers", "heals", "shapes", "overwhelms", "reconciles"];
        this.objects = ["memories", "relationships", "daily life", "future plans", "self-identity", "worldview", "emotional landscape"];
        this.modifiers = ["profound", "lasting", "bittersweet", "raw", "transformative", "complex", "cathartic"];
        this.connectors = ["yet", "while", "although", "nevertheless", "gradually", "unexpectedly", "inevitably"];
        this.outcomes = [
            "leading to personal growth",
            "altering life's trajectory",
            "deepening empathy and understanding",
            "challenging faith or beliefs",
            "strengthening family bonds",
            "inspiring creative expression",
            "prompting life reassessment",
            "fostering resilience",
            "uncovering hidden strengths"
        ];
        this.contexts = [
            "family dynamics",
            "wartime experiences",
            "coming-of-age narratives",
            "psychological landscapes",
            "cultural mourning practices",
            "supernatural encounters",
            "medical settings",
            "natural disasters",
            "personal memoirs",
            "philosophical explorations"
        ];
    }
}