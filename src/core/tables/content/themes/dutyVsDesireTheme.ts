import { Theme } from "../../../entities/genre/theme";
import { Source } from "../../../entities/genre/source";

export const DutyVsDesireThemeName = "dutyVsDesire";

export class DutyVsDesireTheme extends Theme {
    constructor() {
        super();
        this.name = DutyVsDesireThemeName;
        this.description = "Explore the conflict between personal wants and societal or moral obligations";
        this.sources.push(
            new Source()
                .withName("Romeo and Juliet")
                .withLink("https://en.wikipedia.org/wiki/Romeo_and_Juliet")
                .withDescription("Shakespeare's play about love versus family duty"),
            new Source()
                .withName("The Remains of the Day")
                .withLink("https://en.wikipedia.org/wiki/The_Remains_of_the_Day")
                .withDescription("Kazuo Ishiguro's novel about a butler's lifelong devotion to duty"),
            new Source()
                .withName("Mulan")
                .withLink("https://en.wikipedia.org/wiki/Mulan_(1998_film)")
                .withDescription("Disney film about balancing family duty with personal aspirations"),
            new Source()
                .withName("The Kite Runner")
                .withLink("https://en.wikipedia.org/wiki/The_Kite_Runner")
                .withDescription("Khaled Hosseini's novel exploring personal redemption and moral duty"),
            new Source()
                .withName("Atonement")
                .withLink("https://en.wikipedia.org/wiki/Atonement_(novel)")
                .withDescription("Ian McEwan's novel about the consequences of following desire over duty")
        );

        this.subjects = ["Obligation", "Desire", "Responsibility", "Passion", "Morality", "Ambition", "Honor", "Temptation", "Loyalty", "Self-fulfillment", "Sacrifice", "Integrity"];
        this.verbs = ["conflicts", "chooses", "sacrifices", "struggles", "balances", "reconciles", "defies", "upholds", "yearns", "surrenders", "compromises", "transcends"];
        this.objects = ["personal dreams", "societal expectations", "moral code", "family traditions", "professional responsibilities", "forbidden love", "civic duties", "individual happiness", "greater good", "personal integrity", "cultural norms", "ethical principles"];
        this.modifiers = ["conflicting", "torn", "dutiful", "passionate", "obligated", "yearning", "honorable", "tempted", "loyal", "unfulfilled", "principled", "rebellious"];
        this.connectors = ["between", "against", "despite", "in spite of", "at the cost of", "in conflict with", "in harmony with", "at odds with", "in balance with", "in defiance of", "in service to", "in pursuit of"];
        this.outcomes = [
            "choosing duty over personal desires",
            "rebelling against societal expectations",
            "finding a balance between obligation and personal fulfillment",
            "sacrificing individual happiness for the greater good",
            "redefining personal duty to align with desires",
            "facing consequences of prioritizing desire over duty",
            "discovering personal fulfillment through duty",
            "challenging the definition of duty",
            "reconciling conflicting obligations",
            "transforming societal expectations",
            "achieving harmony between personal and social responsibilities",
            "learning the true meaning of duty through desire",
            "realizing the cost of neglecting personal desires",
            "finding unexpected freedom within the confines of duty"
        ];
        this.contexts = [
            "a conservative society with strict social norms",
            "a family business with generational expectations",
            "a military or law enforcement setting",
            "a politically arranged marriage",
            "a religious or spiritual calling",
            "a high-stakes professional environment",
            "a society on the brink of change",
            "a culture with strong familial obligations",
            "a secret or forbidden relationship",
            "a position of political or social leadership",
            "a morally ambiguous situation requiring difficult choices",
            "a coming-of-age scenario with conflicting expectations",
            "a post-war society rebuilding its values",
            "a multicultural environment with clashing value systems",
            "a futuristic world with redefined social contracts"
        ];
    }
}