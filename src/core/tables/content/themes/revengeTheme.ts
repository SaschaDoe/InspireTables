import {Theme} from "../../../entities/genre/theme";
import {Source} from "../../../entities/genre/source";

export const RevengeThemeName = "revenge";

export class RevengeTheme extends Theme {
    constructor() {
        super();
        this.name = RevengeThemeName;
        this.description = "Explore the concept of revenge, its motivations, consequences, and moral implications";
        this.sources.push(
            new Source()
                .withName("The Count of Monte Cristo")
                .withLink("https://en.wikipedia.org/wiki/The_Count_of_Monte_Cristo")
                .withDescription("classic tale of elaborate revenge"),
            new Source()
                .withName("John Wick")
                .withLink("https://en.wikipedia.org/wiki/John_Wick")
                .withDescription("modern action revenge story"),
        );

        this.subjects = ["Vengeance", "Retribution", "Justice", "Betrayal", "Redemption", "Obsession", "Closure"];
        this.verbs = ["seeks", "plots", "exacts", "consumes", "drives", "transforms", "haunts"];
        this.objects = ["past wrongs", "personal injustices", "betrayers", "lost loved ones", "shattered lives", "stolen opportunities", "tarnished honor"];
        this.modifiers = ["relentless", "calculated", "all-consuming", "bitter", "righteous", "destructive", "cold-blooded"];
        this.connectors = ["against", "in pursuit of", "driven by", "blinded by", "at the cost of", "in the name of", "consumed by"];
        this.outcomes = [
            "achieving hollow victory",
            "losing one's humanity",
            "perpetuating cycles of violence",
            "finding unexpected redemption",
            "confronting moral dilemmas",
            "uncovering hidden truths",
            "sacrificing everything for vengeance",
            "realizing the futility of revenge",
            "becoming the very thing once hated"
        ];
        this.contexts = [
            "criminal underworlds",
            "family feuds",
            "corrupt political systems",
            "post-war societies",
            "corporate power struggles",
            "personal betrayals",
            "historical injustices",
            "vigilante crusades",
            "dystopian futures",
            "psychological battlegrounds"
        ];
    }
}