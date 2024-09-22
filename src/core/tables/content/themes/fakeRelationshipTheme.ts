import { Theme } from "../../../entities/genre/theme";
import { Source } from "../../../entities/genre/source";

export const FakeRelationshipThemeName = "fake relationship";

export class FakeRelationshipTheme extends Theme {
    constructor() {
        super();
        this.name = FakeRelationshipThemeName;
        this.description = "Explore the dynamics and consequences of pretend romantic partnerships that often lead to real feelings";
        this.sources.push(
            new Source()
                .withName("To All the Boys I've Loved Before")
                .withLink("https://en.wikipedia.org/wiki/To_All_the_Boys_I%27ve_Loved_Before_(film)")
                .withDescription("A teen romance where a fake relationship leads to genuine feelings"),
            new Source()
                .withName("The Proposal")
                .withLink("https://en.wikipedia.org/wiki/The_Proposal_(film)")
                .withDescription("A romantic comedy where a boss and assistant fake an engagement for mutual benefit"),
        );

        this.subjects = ["Deception", "Pretense", "Convenience", "Attraction", "Boundaries", "Authenticity", "Vulnerability"];
        this.verbs = ["pretends", "fakes", "simulates", "evolves", "complicates", "reveals", "challenges"];
        this.objects = ["feelings", "public image", "personal space", "expectations", "true desires", "social pressures", "self-perception"];
        this.modifiers = ["convenient", "unexpected", "convincing", "conflicting", "transformative", "risky", "revealing"];
        this.connectors = ["for mutual benefit", "to avoid scrutiny", "despite initial reluctance", "while maintaining boundaries", "until real feelings develop", "against better judgment", "to meet external expectations"];
        this.outcomes = [
            "developing genuine feelings",
            "exposing hidden truths",
            "complicating existing relationships",
            "challenging personal values",
            "public exposure of the deception",
            "redefining the nature of love",
            "personal growth through pretense",
            "confronting unacknowledged desires",
            "learning the value of authenticity"
        ];
        this.contexts = [
            "high school or college settings",
            "workplace environments",
            "family gatherings or events",
            "social media and online presence",
            "arranged marriages or cultural expectations",
            "celebrity or public figure status",
            "immigration or visa issues",
            "avoidance of unwanted suitors",
            "maintaining appearances for professional reasons",
            "fulfilling contractual obligations"
        ];
    }
}