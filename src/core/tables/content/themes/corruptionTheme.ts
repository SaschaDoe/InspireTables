import {Theme} from "../../../entities/genre/theme";
import {Source} from "../../../entities/genre/source";

export const CorruptionThemeName = "corruption";

export class CorruptionTheme extends Theme {
    constructor() {
        super();
        this.name = CorruptionThemeName;
        this.description = "Explore the concept of corruption, its causes, manifestations, and consequences in various contexts";
        this.sources.push(
            new Source()
                .withName("Chinatown")
                .withLink("https://en.wikipedia.org/wiki/Chinatown_(1974_film)")
                .withDescription("corruption in local government and business"),
            new Source()
                .withName("The Wire")
                .withLink("https://en.wikipedia.org/wiki/The_Wire")
                .withDescription("systemic corruption in urban institutions"),
        );

        this.subjects = ["Greed", "Dishonesty", "Abuse of Power", "Moral Decay", "Bribery", "Manipulation", "Exploitation"];
        this.verbs = ["infects", "spreads", "undermines", "exposes", "resists", "perpetuates", "unravels"];
        this.objects = ["political systems", "law enforcement", "corporations", "individuals", "societal values", "institutions", "relationships"];
        this.modifiers = ["systemic", "insidious", "pervasive", "deep-rooted", "blatant", "subtle", "widespread"];
        this.connectors = ["in the pursuit of", "at the expense of", "hidden beneath", "masked by", "eroding", "feeding on", "exposed through"];
        this.outcomes = [
            "exposing hidden truths",
            "toppling corrupt regimes",
            "sacrificing integrity for gain",
            "fighting against overwhelming odds",
            "losing faith in institutions",
            "uncovering vast conspiracies",
            "personal moral compromises",
            "societal breakdown",
            "inspiring grassroots resistance"
        ];
        this.contexts = [
            "political campaigns",
            "police departments",
            "corporate boardrooms",
            "judicial systems",
            "media organizations",
            "religious institutions",
            "sports leagues",
            "educational systems",
            "humanitarian aid efforts",
            "environmental protection agencies"
        ];
    }
}