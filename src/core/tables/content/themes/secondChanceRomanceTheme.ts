import { Theme } from "./theme";
import { Source } from "./source";

export const SecondChanceRomanceThemeName =  "secondChanceRomance";

export class SecondChanceRomanceTheme extends Theme {
    constructor() {
        super();
        this.name = SecondChanceRomanceThemeName;
        this.description = "Explore the rekindling of love between individuals who have a shared romantic history";
        this.sources.push(
            new Source()
                .withName("Persuasion")
                .withLink("https://en.wikipedia.org/wiki/Persuasion_(novel)")
                .withDescription("Jane Austen's novel about rekindled love after years apart"),
            new Source()
                .withName("Sweet Home Alabama")
                .withLink("https://en.wikipedia.org/wiki/Sweet_Home_Alabama_(film)")
                .withDescription("Film where a woman returns to her hometown and reunites with her ex-husband"),
        );

        this.subjects = ["Reconciliation", "Growth", "Forgiveness", "Nostalgia", "Maturity", "Redemption", "Timing"];
        this.verbs = ["rekindles", "heals", "challenges", "reignites", "transforms", "confronts", "resolves"];
        this.objects = ["past hurts", "unresolved feelings", "shared history", "lost time", "lingering doubts", "old wounds", "future possibilities"];
        this.modifiers = ["unexpected", "healing", "passionate", "cautious", "transformative", "bittersweet", "destined"];
        this.connectors = ["despite past mistakes", "after years apart", "through newfound maturity", "amidst life changes", "with renewed perspective", "against all odds", "when fate intervenes"];
        this.outcomes = [
            "healing old wounds",
            "rediscovering lost love",
            "overcoming past mistakes",
            "building a stronger relationship",
            "confronting unresolved issues",
            "blending past and present",
            "redefining the relationship",
            "proving personal growth",
            "creating a new shared future"
        ];
        this.contexts = [
            "high school sweethearts reuniting",
            "divorced couple reconciling",
            "childhood friends reconnecting",
            "former colleagues meeting again",
            "during a hometown visit",
            "at a significant life event",
            "through a chance encounter",
            "in the wake of personal crisis",
            "amidst career changes",
            "while co-parenting"
        ];
    }
}