import { Theme } from "./theme";
import { Source } from "./source";

export class LossOfControlTheme extends Theme {
    constructor() {
        super();
        this.name = "lossOfControl";
        this.description = "Explore the psychological, social, and existential implications of losing control in various aspects of life";
        this.sources.push(
            new Source()
                .withName("A Beautiful Mind")
                .withLink("https://en.wikipedia.org/wiki/A_Beautiful_Mind_(film)")
                .withDescription("loss of control due to mental illness"),
            new Source()
                .withName("Black Swan")
                .withLink("https://en.wikipedia.org/wiki/Black_Swan_(film)")
                .withDescription("loss of control through psychological pressure and perfectionism"),
            new Source()
                .withName("Falling Down")
                .withLink("https://en.wikipedia.org/wiki/Falling_Down")
                .withDescription("loss of control in face of societal pressures and personal frustrations"),
        );

        // The rest of the class remains the same
        this.subjects = ["Autonomy", "Free will", "Power", "Stability", "Identity", "Reality", "Destiny"];
        this.verbs = ["erodes", "challenges", "shatters", "questions", "redefines", "surrenders", "confronts"];
        this.objects = ["personal agency", "societal structures", "perception of reality", "self-determination", "established norms", "individual rights", "sense of security"];
        this.modifiers = ["gradual", "sudden", "insidious", "overwhelming", "liberating", "terrifying", "transformative"];
        this.connectors = ["while", "yet", "inevitably", "paradoxically", "consequently", "ultimately", "despite"];
        this.outcomes = [
            "leading to existential crisis",
            "sparking a quest for redemption",
            "revealing hidden strengths",
            "forcing adaptation to new realities",
            "challenging fundamental beliefs",
            "exposing societal vulnerabilities",
            "inspiring collective action",
            "triggering personal growth",
            "reshaping interpersonal dynamics"
        ];
        this.contexts = [
            "a crumbling democratic system",
            "the onset of a debilitating illness",
            "the aftermath of a natural disaster",
            "a rapidly changing technological landscape",
            "the breakdown of a long-held belief system",
            "the chaos of addiction",
            "an economic collapse",
            "the throes of a mental health crisis",
            "the unpredictability of quantum phenomena",
            "the whims of a capricious universe"
        ];
    }
}