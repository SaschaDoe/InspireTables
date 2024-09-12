import {Theme} from "./theme";
import {Source} from "./source";

export const DestinyThemeName = "destiny";

export class DestinyTheme extends Theme {
    constructor() {
        super();
        this.name = DestinyThemeName;
        this.description = "Explore the concept of destiny through various cultural and mythological lenses";
        this.sources.push(
            new Source()
                .withName("Oedipus")
                .withLink("https://en.wikipedia.org/wiki/Oedipus")
                .withDescription("when you fulfill your destiny"),
            new Source()
                .withName("Mulan")
                .withLink("https://en.wikipedia.org/wiki/Mulan_(1998_film)")
                .withDescription("when you don't fulfill your destiny"),
        );

        this.subjects = ["Fate", "Prophecy", "Free will", "Honor", "Identity", "Duty", "Courage"];
        this.verbs = ["shapes", "defies", "fulfills", "challenges", "transforms", "reveals", "overcomes"];
        this.objects = ["one's path", "the future", "human choices", "divine will", "family legacy", "societal expectations", "personal destiny"];
        this.modifiers = ["inescapable", "tragic", "self-fulfilling", "empowering", "transformative", "heroic", "predetermined"];
        this.connectors = ["yet", "while", "thus", "despite", "inevitably", "courageously", "ultimately"];
        this.outcomes = [
            "leading to unforeseen consequences",
            "uncovering hidden truths",
            "challenging moral boundaries",
            "questioning free will",
            "fulfilling ancient prophecies",
            "forging a new path",
            "discovering true self",
            "honoring family",
            "challenging stereotypes"
        ];
        this.contexts = [
            "ancient Greek tragedy",
            "the realm of gods and mortals",
            "the human psyche",
            "the tapestry of fate",
            "the struggle against destiny",
            "ancient China",
            "a time of war",
            "patriarchal society",
            "the journey of self-discovery",
            "the balance of tradition and progress"
        ];
    }
}