import { Theme } from "../../../entities/genre/theme";
import { Source } from "../../../entities/genre/source";

export const FriendsToLoversThemeName = "friendsToLovers";

export class FriendsToLoversTheme extends Theme {
    constructor() {
        super();
        this.name = FriendsToLoversThemeName;
        this.description = "Explore the transition from platonic friendship to romantic love";
        this.sources.push(
            new Source()
                .withName("When Harry Met Sally")
                .withLink("https://en.wikipedia.org/wiki/When_Harry_Met_Sally...")
                .withDescription("Classic romantic comedy exploring whether men and women can be just friends"),
            new Source()
                .withName("Jane Austen's Emma")
                .withLink("https://en.wikipedia.org/wiki/Emma_(novel)")
                .withDescription("Novel where the protagonist realizes she's in love with her longtime friend"),
        );

        this.subjects = ["Friendship", "Trust", "Intimacy", "Compatibility", "Loyalty", "Attraction", "Boundaries"];
        this.verbs = ["evolves", "deepens", "challenges", "transforms", "complicates", "enriches", "redefines"];
        this.objects = ["relationship", "dynamics", "expectations", "comfort zones", "feelings", "perceptions", "future"];
        this.modifiers = ["gradual", "unexpected", "natural", "conflicting", "intense", "comfortable", "revelatory"];
        this.connectors = ["over time", "suddenly", "reluctantly", "inevitably", "mutually", "unexpectedly", "hesitantly"];
        this.outcomes = [
            "strengthening the existing bond",
            "risking the friendship",
            "discovering deeper compatibility",
            "navigating new relationship dynamics",
            "overcoming fear of change",
            "balancing romance and friendship",
            "redefining personal boundaries",
            "facing external judgments",
            "building on a strong foundation"
        ];
        this.contexts = [
            "longtime childhood friends",
            "college roommates",
            "work colleagues",
            "in a friend group",
            "during a shared adventure",
            "through hardship",
            "in the digital age",
            "after failed relationships with others",
            "during life transitions",
            "in a small community"
        ];
    }
}