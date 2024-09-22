import { Theme } from "../../../entities/genre/theme";
import { Source } from "../../../entities/genre/source";

export const PoliticalPhilosophyThemeName = "political-philosophy";

export class PoliticalPhilosophyTheme extends Theme {
    constructor() {
        super();
        this.name = PoliticalPhilosophyThemeName;
        this.description = "Explore various political philosophies and systems through diverse fictional works";

        this.sources.push(
            new Source()
                .withName("1984")
                .withLink("https://en.wikipedia.org/wiki/Nineteen_Eighty-Four")
                .withDescription("Dystopian novel exploring totalitarianism and surveillance states"),
            new Source()
                .withName("Brave New World")
                .withLink("https://en.wikipedia.org/wiki/Brave_New_World")
                .withDescription("Science fiction novel examining a hedonistic but restrictive society"),
            new Source()
                .withName("Animal Farm")
                .withLink("https://en.wikipedia.org/wiki/Animal_Farm")
                .withDescription("Allegorical novella critiquing Stalinism and revolutions"),
            new Source()
                .withName("The Hunger Games")
                .withLink("https://en.wikipedia.org/wiki/The_Hunger_Games")
                .withDescription("Young adult dystopian series exploring class struggle and rebellion"),
            new Source()
                .withName("Lord of the Flies")
                .withLink("https://en.wikipedia.org/wiki/Lord_of_the_Flies")
                .withDescription("Novel examining the descent from democracy to tribalism"),
            new Source()
                .withName("V for Vendetta")
                .withLink("https://en.wikipedia.org/wiki/V_for_Vendetta")
                .withDescription("Graphic novel exploring anarchism versus fascism"),
            new Source()
                .withName("The Dispossessed")
                .withLink("https://en.wikipedia.org/wiki/The_Dispossessed")
                .withDescription("Science fiction novel contrasting anarcho-syndicalism with capitalism"),
            new Source()
                .withName("The Handmaid's Tale")
                .withLink("https://en.wikipedia.org/wiki/The_Handmaid%27s_Tale")
                .withDescription("Dystopian novel examining theocracy and women's rights"),
            new Source()
                .withName("Fahrenheit 451")
                .withLink("https://en.wikipedia.org/wiki/Fahrenheit_451")
                .withDescription("Dystopian novel about censorship and the suppression of knowledge"),
            new Source()
                .withName("Les Misérables")
                .withLink("https://en.wikipedia.org/wiki/Les_Mis%C3%A9rables")
                .withDescription("Historical novel exploring social injustice in 19th-century France")
        );

        this.subjects = ["Government", "Power", "Freedom", "Equality", "Justice", "Revolution", "Oppression", "Democracy", "Totalitarianism", "Anarchism"];
        this.verbs = ["controls", "liberates", "oppresses", "balances", "corrupts", "revolts", "manipulates", "reforms", "indoctrinates", "empowers"];
        this.objects = ["the masses", "individual rights", "social classes", "political ideologies", "economic systems", "human nature", "knowledge", "technology", "religion", "national identity"];
        this.modifiers = ["dystopian", "utopian", "authoritarian", "egalitarian", "revolutionary", "oppressive", "democratic", "anarchic", "totalitarian", "capitalist", "socialist"];
        this.connectors = ["versus", "in contrast to", "despite", "through", "at the cost of", "in pursuit of", "in the name of", "under the guise of", "in rebellion against", "in harmony with"];
        this.outcomes = [
            "sparking a revolution",
            "establishing a new world order",
            "exposing corruption",
            "achieving true equality",
            "descending into chaos",
            "attaining personal freedom",
            "sacrificing individuality for stability",
            "overthrowing oppressive regimes",
            "redefining social norms",
            "balancing order and liberty"
        ];
        this.contexts = [
            "a post-apocalyptic world",
            "a seemingly perfect society",
            "a totalitarian regime",
            "a class-divided nation",
            "an anarchist commune",
            "a surveillance state",
            "a theocratic government",
            "a capitalist dystopia",
            "a war-torn country",
            "a technologically advanced civilization",
            "a society rebuilding after revolution"
        ];
    }
}