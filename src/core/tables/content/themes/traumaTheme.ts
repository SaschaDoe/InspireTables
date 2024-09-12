import { Theme } from "./theme";
import { Source } from "./source";

export const TraumaThemeName = "trauma";

export class TraumaTheme extends Theme {
    constructor() {
        super();
        this.name = TraumaThemeName;
        this.description = "Explore the impact and aftermath of traumatic experiences across various contexts";
        this.sources.push(
            new Source()
                .withName("The Things They Carried")
                .withLink("https://en.wikipedia.org/wiki/The_Things_They_Carried")
                .withDescription("Vietnam War soldiers dealing with trauma (Literature)"),
            new Source()
                .withName("Inception")
                .withLink("https://en.wikipedia.org/wiki/Inception")
                .withDescription("Cobb's trauma affecting his subconscious (Film)"),
            new Source()
                .withName("The Last of Us")
                .withLink("https://en.wikipedia.org/wiki/The_Last_of_Us")
                .withDescription("Joel's trauma influencing his actions (Video Game)"),
            new Source()
                .withName("Beloved")
                .withLink("https://en.wikipedia.org/wiki/Beloved_(novel)")
                .withDescription("Intergenerational trauma from slavery (Literature)")
        );

        this.subjects = ["Memory", "Survivor", "PTSD", "Healing", "Guilt", "Resilience", "Flashback"];
        this.verbs = ["haunts", "triggers", "overcomes", "processes", "confronts", "suppresses", "transforms"];
        this.objects = ["the psyche", "relationships", "daily life", "future choices", "self-perception", "coping mechanisms", "reality"];
        this.modifiers = ["debilitating", "persistent", "hidden", "complex", "raw", "unresolved", "transformative"];
        this.connectors = ["yet", "while", "consequently", "despite", "gradually", "painfully", "unexpectedly"];
        this.outcomes = [
            "leading to personal growth",
            "causing recurring nightmares",
            "altering perception of reality",
            "strengthening bonds with others",
            "inspiring artistic expression",
            "challenging societal norms",
            "driving a quest for justice",
            "reshaping identity",
            "influencing future generations"
        ];
        this.contexts = [
            "post-war society",
            "dystopian future",
            "family dynamics",
            "psychological thriller",
            "historical injustice",
            "natural disaster aftermath",
            "coming-of-age narrative",
            "domestic violence survival",
            "pandemic recovery",
            "exploration of the subconscious"
        ];
    }
}