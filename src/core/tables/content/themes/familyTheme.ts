import { Theme } from "./theme";
import { Source } from "./source";

export class FamilyTheme extends Theme {
    constructor() {
        super();
        this.name = "family";
        this.description = "The complex dynamics, relationships, and experiences within immediate and extended family units.";
        this.sources.push(
            new Source()
                .withName("Modern Family")
                .withLink("https://en.wikipedia.org/wiki/Modern_Family")
                .withDescription("TV series showcasing diverse family structures"),
            new Source()
                .withName("The Royal Tenenbaums")
                .withLink("https://en.wikipedia.org/wiki/The_Royal_Tenenbaums")
                .withDescription("Film about an eccentric family's reunification"),
        );

        this.subjects = ["Family", "Extended family"];
        this.verbs = ["supports", "challenges", "evolves", "reunites", "celebrates", "struggles", "adapts"];
        this.objects = ["traditions", "relationships", "expectations", "conflicts", "milestones", "secrets", "legacies"];
        this.modifiers = ["unconditionally", "reluctantly", "joyfully", "unexpectedly", "gradually", "humorously", "dramatically"];
        this.connectors = ["despite", "through", "in the face of", "while navigating", "by embracing", "in the process of", "as they confront"];
        this.outcomes = [
            "strengthening bonds",
            "overcoming differences",
            "creating new traditions",
            "resolving long-standing issues",
            "adapting to changes",
            "discovering shared values",
            "balancing individual and family needs",
            "redefining relationships",
            "finding unity in diversity"
        ];
        this.contexts = [
            "family gatherings",
            "life-changing events",
            "everyday routines",
            "generational shifts",
            "cultural blending",
            "family crises",
            "reunions and reconciliations",
            "family decisions and choices",
            "external pressures on family",
            "changing family structures"
        ];
    }
}