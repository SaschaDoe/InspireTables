import { Theme } from "./theme";
import { Source } from "./source";

export const NormalityMadnessBoundaryThemeName = "the thin line between normalcy and madness";

export class NormalityMadnessBoundaryTheme extends Theme {
    constructor() {
        super();
        this.name = NormalityMadnessBoundaryThemeName;
        this.description = "Exploration of the blurred boundaries between socially accepted behavior and actions deemed abnormal or insane, questioning the nature of sanity and social norms.";
        this.sources.push(
            new Source()
                .withName("American Psycho")
                .withLink("https://en.wikipedia.org/wiki/American_Psycho_(film)")
                .withDescription("Satirical psychological thriller blurring lines between normalcy and psychopathy"),
            new Source()
                .withName("One Flew Over the Cuckoo's Nest")
                .withLink("https://en.wikipedia.org/wiki/One_Flew_Over_the_Cuckoo%27s_Nest_(novel)")
                .withDescription("Novel questioning the definition of insanity in a mental institution setting"),
        );

        this.subjects = ["Individual", "Society", "Authority figure", "Outsider", "Conformist", "Rebel", "Observer"];
        this.verbs = ["questions", "challenges", "blurs", "transgresses", "redefines", "navigates", "confronts"];
        this.objects = ["social norms", "sanity", "morality", "reality", "identity", "perception", "boundaries"];
        this.modifiers = ["gradually", "shockingly", "subtly", "deceptively", "disturbingly", "unexpectedly", "profoundly"];
        this.connectors = ["while maintaining", "despite appearing", "in conflict with", "under the guise of", "in response to", "at the cost of", "in pursuit of"];
        this.outcomes = [
            "revealing hidden truths about society",
            "challenging preconceived notions of normality",
            "exposing the fragility of social constructs",
            "questioning the nature of reality and perception",
            "blurring the lines between protagonist and antagonist",
            "forcing reevaluation of moral standards",
            "uncovering the potential for madness in everyday life",
            "highlighting the subjective nature of sanity",
            "exploring the consequences of societal pressure"
        ];
        this.contexts = [
            "seemingly ordinary suburban life",
            "high-pressure corporate environments",
            "closed institutions (prisons, asylums, etc.)",
            "wartime or conflict situations",
            "alternative subcultures",
            "futuristic or dystopian societies",
            "academic or scientific settings",
            "religious or cult environments",
            "artistic or creative communities",
            "isolated or extreme living conditions"
        ];
    }
}