import {Theme} from "./theme";
import {Source} from "./source";

export class LoyaltyTheme extends Theme {
    constructor() {
        super();
        this.name = "loyalty";
        this.description = "Explore the concept of loyalty, its strengths, challenges, and complexities in various relationships and situations";
        this.sources.push(
            new Source()
                .withName("Band of Brothers")
                .withLink("https://en.wikipedia.org/wiki/Band_of_Brothers_(miniseries)")
                .withDescription("loyalty among soldiers in wartime"),
            new Source()
                .withName("The Godfather")
                .withLink("https://en.wikipedia.org/wiki/The_Godfather")
                .withDescription("loyalty within a crime family"),
        );

        this.subjects = ["Allegiance", "Dedication", "Fidelity", "Trust", "Commitment", "Brotherhood", "Devotion"];
        this.verbs = ["upholds", "tests", "strengthens", "challenges", "betrays", "questions", "reaffirms"];
        this.objects = ["friendships", "family ties", "professional relationships", "ideals", "oaths", "traditions", "alliances"];
        this.modifiers = ["unwavering", "tested", "blind", "conflicted", "steadfast", "misplaced", "unbreakable"];
        this.connectors = ["in the face of", "despite", "at the cost of", "in service to", "torn between", "bound by", "questioning"];
        this.outcomes = [
            "strengthening bonds",
            "facing moral dilemmas",
            "sacrificing personal gain",
            "overcoming betrayal",
            "challenging societal expectations",
            "redefining relationships",
            "discovering true allegiances",
            "confronting conflicting loyalties",
            "paying the ultimate price for loyalty"
        ];
        this.contexts = [
            "military units",
            "crime syndicates",
            "political parties",
            "sports teams",
            "corporate environments",
            "revolutionary movements",
            "feudal societies",
            "clandestine organizations",
            "inter-species alliances",
            "childhood friendships tested by time"
        ];
    }
}