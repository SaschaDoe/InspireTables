import { Theme } from "./theme";
import { Source } from "./source";

export const MistakenIdentityThemeName = "mistaken identity";

export class MistakenIdentityTheme extends Theme {
    constructor() {
        super();
        this.name = "mistaken identity";
        this.description = "Characters are confused for someone else, leading to comical situations and misunderstandings.";
        this.sources.push(
            new Source()
                .withName("The Comedy of Errors")
                .withLink("https://en.wikipedia.org/wiki/The_Comedy_of_Errors")
                .withDescription("Shakespeare's play about two sets of identical twins"),
            new Source()
                .withName("Mrs. Doubtfire")
                .withLink("https://en.wikipedia.org/wiki/Mrs._Doubtfire")
                .withDescription("Man disguises himself as a female housekeeper"),
        );

        this.subjects = ["Impostor", "Look-alike", "Twin", "Doppelganger", "Disguised person", "Confused individual", "Victim of misidentification"];
        this.verbs = ["impersonates", "masquerades as", "is mistaken for", "pretends to be", "assumes the role of", "is confused with", "unwittingly replaces"];
        this.objects = ["celebrity", "authority figure", "loved one", "stranger", "enemy", "historical figure", "person of different social status"];
        this.modifiers = ["hilarious", "chaotic", "unexpected", "elaborate", "coincidental", "absurd", "farcical"];
        this.connectors = ["leading to", "resulting in", "causing", "sparking", "triggering", "culminating in", "setting off a chain of"];
        this.outcomes = [
            "comedic misunderstandings",
            "snowballing lies",
            "ridiculous situations",
            "near-miss revelations",
            "unexpected benefits",
            "complicated love triangles",
            "farcical confrontations",
            "identity crises",
            "ultimate revelations and reconciliations"
        ];
        this.contexts = [
            "high-stakes social events",
            "workplace scenarios",
            "family gatherings",
            "romantic encounters",
            "crime investigations",
            "historical settings",
            "theatrical productions",
            "cases of mistaken celebrity",
            "spy missions gone wrong",
            "virtual or online identities"
        ];
    }
}