import {Theme} from "./theme";
import {Source} from "./source";

export const TeamworkThemeName = "teamwork";

export class TeamworkTheme extends Theme {
    constructor() {
        super();
        this.name = TeamworkThemeName;
        this.description = "Explore the concept of teamwork, collaboration, and collective effort across various contexts and genres";
        this.sources.push(
            new Source()
                .withName("Remember the Titans")
                .withLink("https://en.wikipedia.org/wiki/Remember_the_Titans")
                .withDescription("diverse team overcoming racial tensions in sports"),
            new Source()
                .withName("The Avengers")
                .withLink("https://en.wikipedia.org/wiki/The_Avengers_(2012_film)")
                .withDescription("superheroes learning to work together to save the world"),
        );

        this.subjects = ["Collaboration", "Unity", "Diversity", "Communication", "Leadership", "Support", "Synergy"];
        this.verbs = ["unites", "overcomes", "achieves", "strengthens", "transforms", "empowers", "harmonizes"];
        this.objects = ["goals", "challenges", "differences", "weaknesses", "strengths", "conflicts", "visions"];
        this.modifiers = ["collective", "cooperative", "diverse", "synchronized", "supportive", "complementary", "cohesive"];
        this.connectors = ["through", "despite", "by leveraging", "in the face of", "while embracing", "by overcoming", "in harmony with"];
        this.outcomes = [
            "achieving shared goals",
            "overcoming insurmountable odds",
            "fostering mutual understanding",
            "innovating through collaboration",
            "building lasting relationships",
            "turning weaknesses into strengths",
            "creating a whole greater than its parts",
            "learning from one another",
            "sacrificing for the common good"
        ];
        this.contexts = [
            "sports teams",
            "workplace projects",
            "community initiatives",
            "crisis situations",
            "scientific research",
            "artistic collaborations",
            "military operations",
            "educational settings",
            "family dynamics",
            "global challenges"
        ];
    }
}