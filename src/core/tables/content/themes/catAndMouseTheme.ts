import { Theme } from "../../../entities/genre/theme";
import { Source } from "../../../entities/genre/source";

export const CatAndMouseThemeName = "cat and mouse";

export class CatAndMouseTheme extends Theme {
    constructor() {
        super();
        this.name = CatAndMouseThemeName;
        this.description = "The intense psychological and strategic interplay between two opposing forces, characterized by pursuit, evasion, and complex power dynamics.";
        this.sources.push(
            new Source()
                .withName("Tom and Jerry")
                .withLink("https://en.wikipedia.org/wiki/Tom_and_Jerry")
                .withDescription("Classic cartoon series featuring endless pursuit and clever evasions"),
            new Source()
                .withName("Catch Me If You Can")
                .withLink("https://en.wikipedia.org/wiki/Catch_Me_If_You_Can")
                .withDescription("Biographical crime film about a con artist evading an FBI agent"),
        );

        this.subjects = ["Pursuer", "Pursued", "Rival", "Competitor", "Predator", "Prey", "Opponent"];
        this.verbs = ["chases", "evades", "outsmarts", "anticipates", "baits", "traps", "confronts"];
        this.objects = ["strategy", "weakness", "next move", "hidden agenda", "true intentions", "resources", "allies"];
        this.modifiers = ["relentlessly", "cleverly", "desperately", "patiently", "aggressively", "subtly", "unpredictably"];
        this.connectors = ["while attempting to", "in order to", "despite the risk of", "by leveraging", "through a series of", "on the brink of", "with the aim of"];
        this.outcomes = [
            "achieving a narrow victory",
            "reaching a stalemate",
            "changing roles unexpectedly",
            "forming an unlikely alliance",
            "escalating the conflict",
            "experiencing mutual growth",
            "discovering shared goals",
            "facing unintended consequences",
            "evolving the nature of the pursuit"
        ];
        this.contexts = [
            "business rivalries",
            "political campaigns",
            "romantic pursuits",
            "academic competitions",
            "sports contests",
            "legal battles",
            "scientific races",
            "social media conflicts",
            "philosophical debates",
            "survival situations"
        ];
    }
}