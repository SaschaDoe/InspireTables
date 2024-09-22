import { Theme } from "../../../entities/genre/theme";
import { Source } from "../../../entities/genre/source";

export const PublicPerceptionThemeName = "public perception";

export class PublicPerceptionTheme extends Theme {
    constructor() {
        super();
        this.name = PublicPerceptionThemeName;
        this.description = "Exploration of how public opinion is formed, manipulated, and impacts individuals and society, examining the power of media, rumors, and collective beliefs.";
        this.sources.push(
            new Source()
                .withName("Gone Girl")
                .withLink("https://en.wikipedia.org/wiki/Gone_Girl_(film)")
                .withDescription("Thriller exploring media influence on public perception in a missing person case"),
            new Source()
                .withName("The Social Network")
                .withLink("https://en.wikipedia.org/wiki/The_Social_Network")
                .withDescription("Drama about the creation of Facebook and the power of public image"),
        );

        this.subjects = ["Media", "Public figure", "Community", "Individual", "Government", "Corporation", "Activist"];
        this.verbs = ["shapes", "manipulates", "challenges", "reacts to", "exploits", "misinterprets", "transforms"];
        this.objects = ["public opinion", "reputation", "media narrative", "social norms", "truth", "image", "popular beliefs"];
        this.modifiers = ["rapidly", "subtly", "dramatically", "misleadingly", "unexpectedly", "persistently", "powerfully"];
        this.connectors = ["in response to", "despite evidence of", "through the lens of", "at the expense of", "in the wake of", "under the influence of", "in contrast with"];
        this.outcomes = [
            "shaping policy decisions",
            "affecting personal relationships",
            "influencing legal proceedings",
            "driving social movements",
            "altering career trajectories",
            "impacting mental health",
            "changing consumer behavior",
            "redefining cultural norms",
            "exposing hidden truths or creating new misconceptions"
        ];
        this.contexts = [
            "high-profile criminal cases",
            "political campaigns",
            "celebrity scandals",
            "corporate crises",
            "social media trends",
            "scientific discoveries",
            "environmental issues",
            "cultural phenomena",
            "historical revisionism",
            "technological advancements"
        ];
    }
}