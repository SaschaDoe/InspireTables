import { Theme } from "./theme";
import { Source } from "./source";

export class TrustInSocietyTheme extends Theme {
    constructor() {
        super();
        this.name = "trust in society";
        this.description = "Exploration of the role, fragility, and importance of trust in maintaining social structures, relationships, and institutions, and the consequences when that trust is broken or manipulated.";
        this.sources.push(
            new Source()
                .withName("The Wire")
                .withLink("https://en.wikipedia.org/wiki/The_Wire")
                .withDescription("TV series examining trust and distrust across various societal institutions"),
            new Source()
                .withName("1984")
                .withLink("https://en.wikipedia.org/wiki/Nineteen_Eighty-Four")
                .withDescription("Novel depicting a society built on distrust and surveillance"),
        );

        this.subjects = ["Citizen", "Institution", "Community", "Leader", "Whistleblower", "Newcomer", "Authority"];
        this.verbs = ["builds", "erodes", "tests", "restores", "exploits", "questions", "depends on"];
        this.objects = ["social contract", "institutions", "relationships", "information", "promises", "reputation", "shared values"];
        this.modifiers = ["gradually", "suddenly", "cautiously", "blindly", "reluctantly", "mutually", "conditionally"];
        this.connectors = ["in the face of", "despite", "through acts of", "at the risk of", "in exchange for", "as a result of", "in the absence of"];
        this.outcomes = [
            "strengthening community bonds",
            "facilitating cooperation and progress",
            "exposing vulnerabilities in systems",
            "leading to societal breakdown",
            "fostering innovation and growth",
            "causing isolation and paranoia",
            "redefining social norms",
            "empowering individuals or groups",
            "rebuilding after betrayal"
        ];
        this.contexts = [
            "political systems",
            "economic markets",
            "criminal justice processes",
            "healthcare systems",
            "educational institutions",
            "family and interpersonal relationships",
            "online communities and social media",
            "scientific research and publication",
            "religious organizations",
            "multicultural societies"
        ];
    }
}