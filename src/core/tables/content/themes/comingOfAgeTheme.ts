import { Theme } from "./theme";
import { Source } from "./source";

export const ComingOfAgeThemeName = "coming of age";

export class ComingOfAgeTheme extends Theme {
    constructor() {
        super();
        this.name = ComingOfAgeThemeName;
        this.description = "The transitional journey from childhood to adulthood, marked by significant personal growth, self-discovery, and societal challenges.";
        this.sources.push(
            new Source()
                .withName("The Catcher in the Rye")
                .withLink("https://en.wikipedia.org/wiki/The_Catcher_in_the_Rye")
                .withDescription("Classic novel about teenage angst and alienation"),
            new Source()
                .withName("Boyhood")
                .withLink("https://en.wikipedia.org/wiki/Boyhood_(2014_film)")
                .withDescription("Film depicting 12 years in the life of a boy growing up"),
        );

        this.subjects = ["Adolescent", "Teenager", "Young adult"];
        this.verbs = ["discovers", "questions", "rebels", "matures", "experiments", "learns", "transforms"];
        this.objects = ["identity", "sexuality", "social norms", "responsibilities", "personal values", "future aspirations", "relationships"];
        this.modifiers = ["awkwardly", "courageously", "naively", "painfully", "exuberantly", "reluctantly", "gradually"];
        this.connectors = ["while grappling with", "in the process of", "as they navigate", "through experiences of", "despite challenges of", "in search of", "by confronting"];
        this.outcomes = [
            "gaining self-awareness",
            "forming personal identity",
            "accepting responsibilities",
            "challenging societal expectations",
            "developing meaningful relationships",
            "making life-altering decisions",
            "overcoming personal insecurities",
            "discovering passions and talents",
            "learning from mistakes and failures"
        ];
        this.contexts = [
            "high school experiences",
            "first romantic relationships",
            "family conflicts",
            "peer pressure situations",
            "academic challenges",
            "summer of self-discovery",
            "cultural or religious rites of passage",
            "moving away from home",
            "first job or internship",
            "confronting loss or tragedy"
        ];
    }
}