import { Theme } from "./theme";
import { Source } from "./source";

export const TimeThemeName = "time";

export class TimeTheme extends Theme {
    constructor() {
        super();
        this.name = TimeThemeName;
        this.description = "The exploration of time's nature, impact, and manipulation in narratives, encompassing its passage, perception, and consequences on characters and events.";
        this.sources.push(
            new Source()
                .withName("The Time Traveler's Wife")
                .withLink("https://en.wikipedia.org/wiki/The_Time_Traveler%27s_Wife")
                .withDescription("A love story complicated by uncontrollable time travel"),
            new Source()
                .withName("Groundhog Day")
                .withLink("https://en.wikipedia.org/wiki/Groundhog_Day_(film)")
                .withDescription("A man relives the same day repeatedly, exploring the nature of time and personal growth"),
        );

        this.subjects = ["Time traveler", "Philosopher", "Scientist", "Ordinary person", "Historian", "Futurist", "Ancient being"];
        this.verbs = ["experiences", "manipulates", "observes", "transcends", "grapples with", "distorts", "contemplates"];
        this.objects = ["time flow", "past events", "future possibilities", "temporal paradoxes", "historical eras", "personal timeline", "time's relativity"];
        this.modifiers = ["paradoxically", "nostalgically", "futuristically", "cyclically", "linearly", "subjectively", "eternally"];
        this.connectors = ["while pondering the nature of", "across the vastness of", "despite the constraints of", "through the lens of", "in defiance of", "trapped within the confines of", "by unraveling the mysteries of"];
        this.outcomes = [
            "altering the course of history",
            "achieving personal growth",
            "understanding the interconnectedness of events",
            "confronting the consequences of past actions",
            "reconciling with mortality",
            "experiencing multiple timelines",
            "discovering the true nature of time",
            "breaking free from temporal constraints",
            "realizing the value of the present moment"
        ];
        this.contexts = [
            "time travel experiment",
            "historical reenactment",
            "futuristic society",
            "memory reconstruction",
            "time dilation in space",
            "parallel universes",
            "ancient prophecy fulfillment",
            "life flashing before one's eyes",
            "time loop scenario",
            "aging or immortality exploration"
        ];
    }
}