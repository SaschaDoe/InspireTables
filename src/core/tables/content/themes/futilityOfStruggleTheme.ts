import { Theme } from "../../../entities/genre/theme";
import { Source } from "../../../entities/genre/source";

export const FutilityOfStruggleThemeName = "futility of struggle";

export class FutilityOfStruggleTheme extends Theme {
    constructor() {
        super();
        this.name = FutilityOfStruggleThemeName;
        this.description = "Explore the concept of prolonged, difficult efforts that ultimately prove pointless or counterproductive, with a focus on war and broader contexts";
        this.sources.push(
            new Source()
                .withName("Catch-22")
                .withLink("https://en.wikipedia.org/wiki/Catch-22")
                .withDescription("Absurdity and futility of war (Literature)"),
            new Source()
                .withName("The Myth of Sisyphus")
                .withLink("https://en.wikipedia.org/wiki/The_Myth_of_Sisyphus")
                .withDescription("Endless, pointless struggle (Philosophy)"),
            new Source()
                .withName("The Wire")
                .withLink("https://en.wikipedia.org/wiki/The_Wire")
                .withDescription("Systemic issues in urban America (TV Series)"),
            new Source()
                .withName("Waiting for Godot")
                .withLink("https://en.wikipedia.org/wiki/Waiting_for_Godot")
                .withDescription("Meaningless wait and repetitive actions (Theater)"),
            new Source()
                .withName("All Quiet on the Western Front")
                .withLink("https://en.wikipedia.org/wiki/All_Quiet_on_the_Western_Front")
                .withDescription("Futility and dehumanization of trench warfare (Literature)"),
            new Source()
                .withName("Apocalypse Now")
                .withLink("https://en.wikipedia.org/wiki/Apocalypse_Now")
                .withDescription("Descent into madness during the Vietnam War (Film)"),
            new Source()
                .withName("Gallipoli")
                .withLink("https://en.wikipedia.org/wiki/Gallipoli_(1981_film)")
                .withDescription("Futile charge in World War I (Film)")
        );

        this.subjects = [
            "Effort", "Struggle", "System", "Individual", "Society", "Progress", "Cycle",
            "Soldier", "Battle", "Campaign", "Strategy", "Victory", "Defeat", "Peace"
        ];
        this.verbs = [
            "perpetuates", "undermines", "exhausts", "traps", "deceives", "consumes", "repeats",
            "devastates", "sacrifices", "advances", "retreats", "destroys", "rebuilds", "endures"
        ];
        this.objects = [
            "hope", "resources", "lives", "time", "potential", "ideals", "humanity",
            "territory", "morale", "civilians", "infrastructure", "alliances", "enemies", "nations"
        ];
        this.modifiers = [
            "endless", "fruitless", "absurd", "draining", "circular", "inevitable", "pointless",
            "bloody", "pyrrhic", "strategic", "tactical", "moral", "political", "economic"
        ];
        this.connectors = [
            "yet", "while", "despite", "endlessly", "hopelessly", "ironically", "repeatedly",
            "relentlessly", "stubbornly", "blindly", "courageously", "foolishly", "desperately"
        ];
        this.outcomes = [
            "leading to disillusionment",
            "revealing systemic flaws",
            "questioning the meaning of existence",
            "breeding cynicism",
            "inspiring dark humor",
            "provoking existential crises",
            "exposing human resilience",
            "challenging societal norms",
            "spurring philosophical debate",
            "causing widespread destruction",
            "redrawing national boundaries",
            "creating power vacuums",
            "sparking technological advancements",
            "reshaping global alliances"
        ];
        this.contexts = [
            "bureaucratic systems",
            "societal expectations",
            "economic struggles",
            "political ideologies",
            "environmental conservation",
            "technological advancement",
            "pursuit of happiness",
            "quest for perfection",
            "fight against injustice",
            "search for meaning",
            "trench warfare",
            "guerrilla conflicts",
            "nuclear standoffs",
            "peacekeeping missions",
            "arms races",
            "propaganda campaigns",
            "home front efforts"
        ];
    }
}