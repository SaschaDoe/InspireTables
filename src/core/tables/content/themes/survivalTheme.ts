import {Theme} from "./theme";
import {Source} from "./source";

export class SurvivalTheme extends Theme {
    constructor() {
        super();
        this.name = "survival";
        this.description = "Explore the human struggle to survive against overwhelming odds and harsh conditions";
        this.sources.push(
            new Source()
                .withName("The Martian")
                .withLink("https://en.wikipedia.org/wiki/The_Martian_(film)")
                .withDescription("survival on a hostile planet"),
            new Source()
                .withName("127 Hours")
                .withLink("https://en.wikipedia.org/wiki/127_Hours")
                .withDescription("survival in extreme outdoor conditions"),
        );

        this.subjects = ["Endurance", "Resilience", "Adaptation", "Instinct", "Resourcefulness", "Willpower", "Self-reliance"];
        this.verbs = ["struggles", "perseveres", "adapts", "overcomes", "endures", "innovates", "fights"];
        this.objects = ["harsh environments", "limited resources", "physical injuries", "isolation", "predators", "natural disasters", "time constraints"];
        this.modifiers = ["desperate", "ingenious", "primal", "relentless", "life-or-death", "harrowing", "against-all-odds"];
        this.connectors = ["in the face of", "despite", "through", "by means of", "against", "in defiance of", "while confronting"];
        this.outcomes = [
            "discovering hidden strengths",
            "pushing beyond perceived limits",
            "developing innovative solutions",
            "forming unlikely alliances",
            "reconnecting with primal instincts",
            "gaining new perspectives on life",
            "overcoming seemingly insurmountable obstacles",
            "learning the true value of resources",
            "finding meaning in extreme adversity"
        ];
        this.contexts = [
            "deserted islands",
            "harsh wilderness",
            "post-apocalyptic worlds",
            "extreme weather conditions",
            "alien environments",
            "war zones",
            "underwater or subterranean settings",
            "disaster-stricken areas",
            "isolated space stations",
            "hostile urban landscapes"
        ];
    }
}