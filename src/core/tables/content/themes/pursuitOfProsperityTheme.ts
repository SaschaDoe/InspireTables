import { Theme } from "../../../entities/genre/theme";
import { Source } from "../../../entities/genre/source";

export const PursuitOfProsperityThemeName = "pursuit of prosperity";

export class PursuitOfProsperityTheme extends Theme {
    constructor() {
        super();
        this.name = PursuitOfProsperityThemeName;
        this.description = "Explore the universal human aspiration for a better life, including material success, personal fulfillment, and societal progress";
        this.sources.push(
            new Source()
                .withName("Slumdog Millionaire")
                .withLink("https://en.wikipedia.org/wiki/Slumdog_Millionaire")
                .withDescription("Rags to riches story in India (Film)"),
            new Source()
                .withName("The Alchemist")
                .withLink("https://en.wikipedia.org/wiki/The_Alchemist_(novel)")
                .withDescription("Personal legend and universal dream (Literature)"),
            new Source()
                .withName("Glengarry Glen Ross")
                .withLink("https://en.wikipedia.org/wiki/Glengarry_Glen_Ross")
                .withDescription("Cutthroat pursuit of success (Theater/Film)"),
            new Source()
                .withName("The Treasure of the Sierra Madre")
                .withLink("https://en.wikipedia.org/wiki/The_Treasure_of_the_Sierra_Madre_(film)")
                .withDescription("Gold prospectors in Mexico pursuing wealth (Western Film)"),
            new Source()
                .withName("There Will Be Blood")
                .withLink("https://en.wikipedia.org/wiki/There_Will_Be_Blood")
                .withDescription("Oil prospector's ruthless pursuit of wealth in the American West (Western Drama)")
        );

        // The rest of the constructor remains the same
        this.subjects = ["Individual", "Family", "Community", "Society", "Immigrant", "Entrepreneur", "Dreamer", "Worker", "Prospector", "Settler"];
        this.verbs = ["strives", "sacrifices", "innovates", "perseveres", "builds", "transforms", "overcomes", "adapts", "prospects", "pioneers"];
        this.objects = ["wealth", "status", "happiness", "freedom", "opportunity", "legacy", "identity", "security", "land", "resources"];
        this.modifiers = ["ambitious", "relentless", "innovative", "determined", "hopeful", "disillusioned", "transformative", "precarious", "rugged", "untamed"];
        this.connectors = ["despite", "through", "while", "ultimately", "gradually", "unexpectedly", "persistently", "cleverly", "ruthlessly", "tirelessly"];
        this.outcomes = [
            "achieving financial success",
            "finding personal fulfillment",
            "advancing social mobility",
            "confronting systemic barriers",
            "redefining success",
            "balancing materialism and happiness",
            "inspiring future generations",
            "challenging societal norms",
            "creating new opportunities",
            "facing moral dilemmas",
            "taming the wilderness",
            "establishing new communities"
        ];
        this.contexts = [
            "economic boom",
            "social upheaval",
            "technological revolution",
            "cultural assimilation",
            "political change",
            "urban development",
            "rural transformation",
            "global migration",
            "educational advancement",
            "environmental challenges",
            "post-colonial societies",
            "emerging economies",
            "welfare states",
            "capitalist systems",
            "socialist experiments",
            "frontier expansion",
            "gold rush",
            "homesteading"
        ];
    }
}