import {Theme} from "../../../entities/genre/theme";
import {Source} from "../../../entities/genre/source";

export const PowerThemeName = "power";

export class PowerTheme extends Theme {
    constructor() {
        super();
        this.name = PowerThemeName;
        this.description = "Explore the concept of power, its acquisition, use, abuse, and consequences in various contexts";
        this.sources.push(
            new Source()
                .withName("Game of Thrones")
                .withLink("https://en.wikipedia.org/wiki/Game_of_Thrones")
                .withDescription("political power struggles in a fantasy setting"),
            new Source()
                .withName("Spider-Man")
                .withLink("https://en.wikipedia.org/wiki/Spider-Man")
                .withDescription("the responsibility that comes with great power"),
        );

        this.subjects = ["Authority", "Control", "Influence", "Dominance", "Leadership", "Manipulation", "Empowerment"];
        this.verbs = ["seizes", "wields", "corrupts", "challenges", "balances", "abuses", "transforms"];
        this.objects = ["political systems", "social hierarchies", "personal relationships", "resources", "information", "technology", "supernatural forces"];
        this.modifiers = ["absolute", "corrupting", "fleeting", "shared", "inherited", "earned", "tyrannical"];
        this.connectors = ["in pursuit of", "at the cost of", "through the use of", "in defiance of", "balanced against", "corrupted by", "transformed through"];
        this.outcomes = [
            "rising to leadership",
            "toppling oppressive regimes",
            "corrupting once-noble ideals",
            "achieving personal ambitions",
            "sacrificing ethics for control",
            "empowering the powerless",
            "facing the consequences of power abuse",
            "learning the burden of responsibility",
            "reshaping societal structures"
        ];
        this.contexts = [
            "political arenas",
            "corporate boardrooms",
            "criminal underworlds",
            "superhero narratives",
            "dystopian societies",
            "magical realms",
            "technological advancements",
            "social movements",
            "interstellar conflicts",
            "personal transformations"
        ];
    }
}