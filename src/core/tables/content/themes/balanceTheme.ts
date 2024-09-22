import { Theme } from "../../../entities/genre/theme";
import { Source } from "../../../entities/genre/source";

export const BalanceThemeName =  "balance";

export class BalanceTheme extends Theme {
    constructor() {
        super();
        this.name = BalanceThemeName;
        this.description = "Explore the concept of balance in various aspects of life and society";
        this.sources.push(
            new Source()
                .withName("Yin and Yang")
                .withLink("https://en.wikipedia.org/wiki/Yin_and_yang")
                .withDescription("ancient Chinese philosophy of dualism and harmony"),
            new Source()
                .withName("Work-Life Balance")
                .withLink("https://en.wikipedia.org/wiki/Work%E2%80%93life_balance")
                .withDescription("modern concept of equilibrium between career and personal life"),
            new Source()
                .withName("Avatar: The Last Airbender")
                .withLink("https://en.wikipedia.org/wiki/Avatar:_The_Last_Airbender")
                .withDescription("balance between the four elements and the physical and spirit worlds"),
            new Source()
                .withName("Dune by Frank Herbert")
                .withLink("https://en.wikipedia.org/wiki/Dune_(novel)")
                .withDescription("ecological balance on Arrakis and balance of power in the universe"),
            new Source()
                .withName("The Giver by Lois Lowry")
                .withLink("https://en.wikipedia.org/wiki/The_Giver")
                .withDescription("balance between individuality and societal harmony")
        );

        this.subjects = ["Harmony", "Equilibrium", "Moderation", "Compromise", "Stability", "Duality", "Integration"];
        this.verbs = ["maintains", "disrupts", "restores", "seeks", "achieves", "challenges", "harmonizes"];
        this.objects = ["opposing forces", "personal needs", "societal demands", "natural ecosystems", "mental health", "global politics", "technological progress"];
        this.modifiers = ["delicate", "dynamic", "essential", "elusive", "sustainable", "precarious", "holistic"];
        this.connectors = ["yet", "while", "thus", "despite", "carefully", "ultimately", "consistently"];
        this.outcomes = [
            "leading to personal fulfillment",
            "ensuring sustainable growth",
            "promoting mental well-being",
            "fostering social harmony",
            "maintaining ecological stability",
            "achieving diplomatic solutions",
            "enhancing productivity and creativity",
            "preserving cultural heritage",
            "advancing scientific understanding"
        ];
        this.contexts = [
            "personal relationships",
            "professional environments",
            "ecosystems and nature",
            "psychological well-being",
            "economic systems",
            "political ideologies",
            "technological advancements",
            "spiritual practices",
            "educational methodologies",
            "artistic expressions"
        ];
    }
}