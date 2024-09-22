import { Theme } from "../../../entities/genre/theme";
import { Source } from "../../../entities/genre/source";

export const FreedomVsOppressionThemeName = "freedomVsOppression";

export class FreedomVsOppressionTheme extends Theme {
    constructor() {
        super();
        this.name = FreedomVsOppressionThemeName;
        this.description = "Explore the struggle for liberty against various forms of tyranny, societal constraints, or oppressive systems";
        this.sources.push(
            new Source()
                .withName("1984")
                .withLink("https://en.wikipedia.org/wiki/Nineteen_Eighty-Four")
                .withDescription("George Orwell's dystopian novel about totalitarian control"),
            new Source()
                .withName("The Handmaid's Tale")
                .withLink("https://en.wikipedia.org/wiki/The_Handmaid%27s_Tale")
                .withDescription("Margaret Atwood's novel exploring gender oppression"),
            new Source()
                .withName("V for Vendetta")
                .withLink("https://en.wikipedia.org/wiki/V_for_Vendetta")
                .withDescription("Graphic novel and film about rebellion against a fascist state"),
            new Source()
                .withName("Brave New World")
                .withLink("https://en.wikipedia.org/wiki/Brave_New_World")
                .withDescription("Aldous Huxley's novel on societal control through pleasure"),
            new Source()
                .withName("The Hunger Games")
                .withLink("https://en.wikipedia.org/wiki/The_Hunger_Games")
                .withDescription("Young adult series depicting rebellion against an oppressive regime")
        );

        this.subjects = ["Liberty", "Tyranny", "Rebellion", "Rights", "Censorship", "Resistance", "Conformity", "Individuality", "Democracy", "Totalitarianism", "Dissent", "Surveillance"];
        this.verbs = ["liberates", "oppresses", "resists", "rebels", "controls", "fights", "conforms", "dissents", "survives", "revolutionizes", "challenges", "emancipates"];
        this.objects = ["societal norms", "political systems", "personal freedoms", "human rights", "free will", "propaganda", "resistance movements", "power structures", "cultural identity", "thought control", "civil liberties", "revolutionary ideas"];
        this.modifiers = ["oppressive", "liberating", "rebellious", "totalitarian", "revolutionary", "subversive", "conformist", "authoritarian", "defiant", "dystopian", "emancipatory", "clandestine"];
        this.connectors = ["against", "despite", "through", "beyond", "within", "amidst", "beneath", "alongside", "behind", "under", "over", "throughout"];
        this.outcomes = [
            "overthrowing an oppressive regime",
            "achieving personal liberation",
            "establishing a new social order",
            "sacrificing freedom for security",
            "exposing hidden oppression",
            "sparking widespread rebellion",
            "preserving individuality in a conformist society",
            "dismantling systems of control",
            "reclaiming cultural identity",
            "fighting for equal rights",
            "challenging ingrained societal norms",
            "creating underground resistance networks",
            "navigating moral dilemmas in oppressive systems",
            "rediscovering lost freedoms"
        ];
        this.contexts = [
            "a totalitarian state",
            "an seemingly utopian society with hidden oppression",
            "a post-apocalyptic world with strict survival rules",
            "a surveillance state",
            "a society divided by strict class or caste systems",
            "a world where technology is used for control",
            "an occupied territory fighting for independence",
            "a society where thought is policed",
            "a world recovering from revolution",
            "a corporate-controlled future",
            "a society where conformity is enforced",
            "a world where personal freedom is traded for comfort",
            "an underground resistance movement",
            "a world where history and information are controlled",
            "a society grappling with the balance between security and liberty"
        ];
    }
}