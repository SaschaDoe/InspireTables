import { Theme } from "../../../entities/genre/theme";
import { Source } from "../../../entities/genre/source";

export const FishOutOfWaterThemeName = "fish out of water";

export class FishOutOfWaterTheme extends Theme {
    constructor() {
        super();
        this.name = FishOutOfWaterThemeName;
        this.description = "A character finds themselves in an unfamiliar or uncomfortable environment.";
        this.sources.push(
            new Source()
                .withName("Coming to America")
                .withLink("https://en.wikipedia.org/wiki/Coming_to_America")
                .withDescription("African prince moves to Queens, New York"),
            new Source()
                .withName("The Little Mermaid")
                .withLink("https://en.wikipedia.org/wiki/The_Little_Mermaid_(1989_film)")
                .withDescription("Mermaid leaves the sea for the human world"),
        );

        this.subjects = ["Outsider", "Newcomer", "Immigrant", "Traveler", "Misfit", "Stranger", "Novice"];
        this.verbs = ["adapts", "struggles", "learns", "misunderstands", "discovers", "embraces", "clashes with"];
        this.objects = ["new culture", "unfamiliar customs", "strange environment", "social norms", "language barriers", "local traditions", "unexpected challenges"];
        this.modifiers = ["bewildered", "overwhelmed", "naive", "curious", "determined", "out-of-place", "culture-shocked"];
        this.connectors = ["while trying to", "in an attempt to", "despite", "as they navigate", "while learning to", "in the process of", "as they struggle with"];
        this.outcomes = [
            "finding unexpected friendship",
            "gaining new perspectives",
            "overcoming cultural barriers",
            "discovering hidden talents",
            "challenging stereotypes",
            "growing personally",
            "bridging different worlds",
            "learning valuable life lessons",
            "finding a new sense of belonging"
        ];
        this.contexts = [
            "foreign countries",
            "different time periods",
            "alien planets",
            "contrasting social classes",
            "unfamiliar professions",
            "rural vs urban settings",
            "high school cliques",
            "fantasy realms",
            "opposing political systems",
            "unexpected family situations"
        ];
    }
}