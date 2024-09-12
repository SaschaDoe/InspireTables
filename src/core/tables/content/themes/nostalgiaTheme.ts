import { Theme } from "./theme";
import { Source } from "./source";

export class NostalgiaTheme extends Theme {
    constructor() {
        super();
        this.name = "nostalgia";
        this.description = "Explore the bittersweet longing for the past and its impact on the present and future";
        this.sources.push(
            new Source()
                .withName("Midnight in Paris")
                .withLink("https://en.wikipedia.org/wiki/Midnight_in_Paris")
                .withDescription("Romanticizing past eras (Film)"),
            new Source()
                .withName("Stranger Things")
                .withLink("https://en.wikipedia.org/wiki/Stranger_Things")
                .withDescription("1980s nostalgia in a modern series (TV)"),
            new Source()
                .withName("Once Upon a Time in Hollywood")
                .withLink("https://en.wikipedia.org/wiki/Once_Upon_a_Time_in_Hollywood")
                .withDescription("Nostalgia for Golden Age Hollywood (Film)"),
            new Source()
                .withName("Unforgiven")
                .withLink("https://en.wikipedia.org/wiki/Unforgiven")
                .withDescription("Deconstructing nostalgia for the Old West (Western Film)")
        );

        // The rest of the constructor remains largely the same, with some additions
        this.subjects = ["Memory", "Past", "Childhood", "Era", "Home", "Tradition", "Heritage", "Icon", "Frontier", "Legend"];
        this.verbs = ["reminisces", "yearns", "recreates", "idealizes", "preserves", "romanticizes", "revisits", "longs for", "mythologizes", "deconstructs"];
        this.objects = ["bygone days", "lost love", "simpler times", "cultural touchstones", "family traditions", "forgotten places", "past glories", "shared experiences", "Wild West", "frontier spirit"];
        this.modifiers = ["bittersweet", "wistful", "sentimental", "rose-tinted", "melancholic", "comforting", "evocative", "poignant", "mythic", "rugged"];
        this.connectors = ["while", "yet", "despite", "fondly", "longingly", "whimsically", "achingly", "tenderly", "reluctantly", "critically"];
        this.outcomes = [
            "finding comfort in memories",
            "struggling to adapt to change",
            "reconnecting with roots",
            "confronting idealized pasts",
            "bridging generational gaps",
            "preserving cultural heritage",
            "grappling with present realities",
            "inspiring creative works",
            "driving consumer trends",
            "influencing political movements",
            "deconstructing historical myths",
            "reexamining cultural legends"
        ];
        this.contexts = [
            "rapid technological change",
            "cultural shifts",
            "personal milestones",
            "historical anniversaries",
            "family gatherings",
            "revisited hometowns",
            "retro fashion trends",
            "music revivals",
            "historical reenactments",
            "vintage collectibles",
            "memoir writing",
            "heritage tourism",
            "reboot culture",
            "social media throwbacks",
            "oral history projects",
            "Western genre revisionism",
            "frontier mythology",
            "cowboy culture celebrations"
        ];
    }
}