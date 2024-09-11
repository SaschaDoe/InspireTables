import { Theme } from "./theme";
import { Source } from "./source";

export class TruthTheme extends Theme {
    constructor() {
        super();
        this.name = "truth";
        this.description = "Exploration of the nature of truth, its pursuit, manipulation, and impact on individuals and society, including the challenges of discerning and accepting truth in various contexts.";
        this.sources.push(
            new Source()
                .withName("Rashomon")
                .withLink("https://en.wikipedia.org/wiki/Rashomon")
                .withDescription("Film exploring the subjective nature of truth through multiple perspectives"),
            new Source()
                .withName("1984")
                .withLink("https://en.wikipedia.org/wiki/Nineteen_Eighty-Four")
                .withDescription("Novel depicting a society where truth is systematically manipulated"),
            new Source()
                .withName("True Detective (Season 1)")
                .withLink("https://en.wikipedia.org/wiki/True_Detective_(season_1)")
                .withDescription("Crime series delving into the complexities of truth, memory, and perception in a murder investigation")
        );

        // The rest of the class remains the same
        this.subjects = ["Seeker", "Whistleblower", "Scientist", "Philosopher", "Journalist", "Authority", "Witness"];
        this.verbs = ["discovers", "conceals", "distorts", "pursues", "questions", "manipulates", "reveals"];
        this.objects = ["facts", "evidence", "perception", "reality", "lies", "beliefs", "information"];
        this.modifiers = ["objectively", "subjectively", "painfully", "gradually", "deceptively", "courageously", "reluctantly"];
        this.connectors = ["in the face of", "despite", "through rigorous", "at the cost of", "in pursuit of", "while grappling with", "in defiance of"];
        this.outcomes = [
            "uncovering hidden realities",
            "challenging established beliefs",
            "fostering social change",
            "causing personal transformation",
            "provoking ethical dilemmas",
            "advancing knowledge",
            "eroding trust in institutions",
            "reconciling conflicting perspectives",
            "confronting personal biases"
        ];
        this.contexts = [
            "scientific research",
            "journalistic investigations",
            "legal proceedings",
            "historical revisions",
            "personal relationships",
            "political campaigns",
            "philosophical debates",
            "religious doctrines",
            "technological advancements",
            "psychological self-discovery"
        ];
    }
}