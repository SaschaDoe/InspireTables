import { Theme } from "./theme";
import { Source } from "./source";

export class PersonalGrowthTheme extends Theme {
    constructor() {
        super();
        this.name = "personal growth";
        this.description = "The journey of self-improvement, self-discovery, and transformation that characters undergo, often in response to challenges, experiences, or internal conflicts.";
        this.sources.push(
            new Source()
                .withName("Eat, Pray, Love")
                .withLink("https://en.wikipedia.org/wiki/Eat,_Pray,_Love")
                .withDescription("A woman's journey of self-discovery across three countries"),
            new Source()
                .withName("The Shawshank Redemption")
                .withLink("https://en.wikipedia.org/wiki/The_Shawshank_Redemption")
                .withDescription("A man's journey of hope and personal transformation while wrongfully imprisoned"),
        );

        this.subjects = ["Individual", "Student", "Professional", "Artist", "Survivor", "Leader", "Seeker"];
        this.verbs = ["overcomes", "learns", "discovers", "confronts", "develops", "transforms", "embraces"];
        this.objects = ["fear", "self-doubt", "past trauma", "new skill", "inner strength", "true passion", "personal limitations"];
        this.modifiers = ["gradually", "courageously", "painfully", "joyfully", "reluctantly", "unexpectedly", "profoundly"];
        this.connectors = ["through experiences of", "while facing", "by embracing", "despite challenges from", "with support from", "in pursuit of", "after realizing"];
        this.outcomes = [
            "gaining self-awareness",
            "overcoming personal obstacles",
            "finding life purpose",
            "healing emotional wounds",
            "developing resilience",
            "improving relationships",
            "achieving long-held dreams",
            "accepting oneself",
            "contributing to society in meaningful ways"
        ];
        this.contexts = [
            "life-changing journey",
            "career transition",
            "recovery from addiction",
            "spiritual awakening",
            "educational experience",
            "overcoming physical challenges",
            "cultural immersion",
            "mentorship relationship",
            "personal crisis or loss",
            "creative breakthrough"
        ];
    }
}