import { Theme } from "../../../entities/genre/theme";
import { Source } from "../../../entities/genre/source";

export const CultureClashesThemeName = "culture clashes";

export class CultureClashesTheme extends Theme {
    constructor() {
        super();
        this.name = CultureClashesThemeName;
        this.description = "The dynamic interplay, conflicts, and growth that arise when different cultural backgrounds, values, and practices intersect or collide.";
        this.sources.push(
            new Source()
                .withName("My Big Fat Greek Wedding")
                .withLink("https://en.wikipedia.org/wiki/My_Big_Fat_Greek_Wedding")
                .withDescription("Romantic comedy highlighting Greek and American cultural differences"),
            new Source()
                .withName("The Namesake")
                .withLink("https://en.wikipedia.org/wiki/The_Namesake_(film)")
                .withDescription("Drama about Indian-American immigrant experiences"),
        );

        this.subjects = ["Immigrant", "Tourist", "Local resident", "Expatriate", "Cultural minority"];
        this.verbs = ["confronts", "adapts to", "misunderstands", "embraces", "resists", "bridges", "reconciles"];
        this.objects = ["traditions", "customs", "language barriers", "social norms", "cultural expectations", "religious practices", "cultural stereotypes"];
        this.modifiers = ["awkwardly", "humorously", "reluctantly", "enthusiastically", "naively", "diplomatically", "stubbornly"];
        this.connectors = ["while navigating", "in the face of", "despite differences in", "through misunderstandings about", "by learning to appreciate", "in an attempt to reconcile", "while challenging"];
        this.outcomes = [
            "developing cross-cultural understanding",
            "overcoming cultural biases",
            "creating cultural fusion",
            "preserving cultural identity",
            "challenging stereotypes",
            "building bridges between communities",
            "experiencing personal growth through cultural exposure",
            "navigating identity in a multicultural context",
            "finding common ground amid differences"
        ];
        this.contexts = [
            "international marriages",
            "workplace diversity",
            "immigrant neighborhoods",
            "study abroad programs",
            "cultural festivals",
            "international business dealings",
            "multicultural educational settings",
            "cross-cultural friendships",
            "travel and tourism experiences",
            "global online communities"
        ];
    }
}