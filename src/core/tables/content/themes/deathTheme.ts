import { Theme } from "./theme";
import { Source } from "./source";

export class DeathTheme extends Theme {
    constructor() {
        super();
        this.name = "death";
        this.description = "Exploration of mortality, its impact on individuals and society, and how humans grapple with the inevitability and mystery of death.";
        this.sources.push(
            new Source()
                .withName("The Death of Ivan Ilyich")
                .withLink("https://en.wikipedia.org/wiki/The_Death_of_Ivan_Ilyich")
                .withDescription("Novella by Leo Tolstoy examining one man's confrontation with mortality"),
            new Source()
                .withName("Six Feet Under")
                .withLink("https://en.wikipedia.org/wiki/Six_Feet_Under_(TV_series)")
                .withDescription("TV series centered around a family-run funeral home, exploring various aspects of death"),
        );

        this.subjects = ["Individual", "Family", "Society", "Philosopher", "Scientist", "Spiritual seeker", "Survivor"];
        this.verbs = ["confronts", "avoids", "accepts", "fears", "studies", "ritualizes", "transcends"];
        this.objects = ["mortality", "afterlife", "legacy", "grief", "meaning of life", "biological processes", "cultural traditions"];
        this.modifiers = ["inevitably", "peacefully", "tragically", "scientifically", "spiritually", "suddenly", "gradually"];
        this.connectors = ["in the face of", "despite", "through understanding", "while grappling with", "in search of", "as a means to", "in defiance of"];
        this.outcomes = [
            "finding peace with mortality",
            "redefining life's priorities",
            "experiencing profound grief",
            "seeking meaning in existence",
            "challenging religious or spiritual beliefs",
            "advancing medical or scientific knowledge",
            "preserving legacies",
            "transforming societal attitudes",
            "confronting ethical dilemmas"
        ];
        this.contexts = [
            "end-of-life care",
            "funeral traditions",
            "war and conflict",
            "medical breakthroughs",
            "philosophical inquiries",
            "near-death experiences",
            "grief counseling",
            "legal and ethical debates",
            "artistic expressions",
            "religious and spiritual practices"
        ];
    }
}