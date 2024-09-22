import { Theme } from "../../../entities/genre/theme";
import { Source } from "../../../entities/genre/source";

export const PriceOfSuccessThemeName = "priceOfSuccess";

export class PriceOfSuccessTheme extends Theme {
    constructor() {
        super();
        this.name = PriceOfSuccessThemeName;
        this.description = "Explore the concept of the price of success, including personal, social, and ethical costs associated with achieving goals and ambitions";
        this.sources.push(
            new Source()
                .withName("The Great Gatsby")
                .withLink("https://en.wikipedia.org/wiki/The_Great_Gatsby")
                .withDescription("The moral decay and emptiness behind the facade of the American Dream"),
            new Source()
                .withName("Death of a Salesman")
                .withLink("https://en.wikipedia.org/wiki/Death_of_a_Salesman")
                .withDescription("The destructive nature of unrealistic ambitions and the American Dream"),
            new Source()
                .withName("The Social Network")
                .withLink("https://en.wikipedia.org/wiki/The_Social_Network")
                .withDescription("The personal relationships sacrificed in the pursuit of business success"),
            new Source()
                .withName("Whiplash")
                .withLink("https://en.wikipedia.org/wiki/Whiplash_(2014_film)")
                .withDescription("The physical and emotional toll of pursuing musical excellence"),
            new Source()
                .withName("The Picture of Dorian Gray")
                .withLink("https://en.wikipedia.org/wiki/The_Picture_of_Dorian_Gray")
                .withDescription("The moral degradation in exchange for eternal youth and beauty")
        );

        this.subjects = ["Ambition", "Achievement", "Sacrifice", "Compromise", "Dedication", "Obsession", "Consequences"];
        this.verbs = ["demands", "costs", "requires", "consumes", "transforms", "tarnishes", "overshadows"];
        this.objects = ["relationships", "integrity", "health", "happiness", "time", "innocence", "principles"];
        this.modifiers = ["relentless", "all-consuming", "pyrrhic", "bittersweet", "hard-won", "hollow", "transformative"];
        this.connectors = ["yet", "while", "despite", "at the expense of", "in pursuit of", "ultimately", "ironically"];
        this.outcomes = [
            "achieving dreams at great personal cost",
            "realizing the emptiness of material success",
            "losing oneself in the pursuit of goals",
            "sacrificing relationships for career advancement",
            "compromising ethics for financial gain",
            "neglecting personal well-being for professional achievements",
            "gaining fame but losing privacy",
            "reaching the top but feeling unfulfilled",
            "succeeding professionally while failing personally"
        ];
        this.contexts = [
            "corporate ladder climbing",
            "artistic pursuits",
            "athletic competition",
            "academic achievement",
            "political power struggles",
            "entrepreneurial ventures",
            "celebrity culture",
            "scientific breakthroughs",
            "social activism",
            "personal reinvention"
        ];
    }
}