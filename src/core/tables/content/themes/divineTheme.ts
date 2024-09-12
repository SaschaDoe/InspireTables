import { Theme } from "./theme";
import { Source } from "./source";

export const DivineThemeName = "divine";

export class DivineTheme extends Theme {
    constructor() {
        super();
        this.name = DivineThemeName;
        this.description = "Explore concepts of divinity, godhood, and the supernatural across various genres and cultural contexts";
        this.sources.push(
            new Source()
                .withName("American Gods")
                .withLink("https://en.wikipedia.org/wiki/American_Gods")
                .withDescription("Modern fantasy novel blending mythology with contemporary America"),
            new Source()
                .withName("Contact")
                .withLink("https://en.wikipedia.org/wiki/Contact_(1997_American_film)")
                .withDescription("Science fiction exploration of faith, science, and the possibility of higher intelligence"),
            new Source()
                .withName("The Miracle Worker")
                .withLink("https://en.wikipedia.org/wiki/The_Miracle_Worker_(1962_film)")
                .withDescription("Biographical drama about human perseverance and the 'miraculous'"),
            new Source()
                .withName("Bruce Almighty")
                .withLink("https://en.wikipedia.org/wiki/Bruce_Almighty")
                .withDescription("Comedy examining the concept of godhood in everyday life"),
            new Source()
                .withName("The Leftovers")
                .withLink("https://en.wikipedia.org/wiki/The_Leftovers_(TV_series)")
                .withDescription("Drama series exploring faith, loss, and the unexplainable")
        );

        this.subjects = ["Deity", "Faith", "Miracle", "Prophecy", "Creation", "Enlightenment", "Transcendence", "Worship", "Divine law", "Morality", "Free will", "Cosmic order"];
        this.verbs = ["blesses", "judges", "inspires", "creates", "transforms", "reveals", "challenges", "empowers", "questions", "guides", "manifests", "transcends"];
        this.objects = ["human understanding", "natural laws", "fate", "reality", "consciousness", "moral compass", "universal truths", "earthly existence", "spiritual realm", "divine plan", "human potential", "cosmic balance"];
        this.modifiers = ["omnipotent", "ineffable", "miraculous", "sublime", "transcendent", "enigmatic", "awe-inspiring", "paradoxical", "ethereal", "profound", "cosmic", "revelatory"];
        this.connectors = ["through", "beyond", "within", "despite", "amidst", "throughout", "beneath", "above", "between", "across", "during", "without"];
        this.outcomes = [
            "achieving enlightenment",
            "questioning one's beliefs",
            "experiencing a paradigm shift",
            "uncovering hidden truths",
            "reconciling science and faith",
            "facing moral dilemmas",
            "witnessing the inexplicable",
            "discovering inner divinity",
            "challenging established dogmas",
            "transforming society",
            "redefining the nature of reality",
            "bridging mortal and divine realms"
        ];
        this.contexts = [
            "ancient pantheons in modern world",
            "scientific exploration of the cosmos",
            "everyday miracles and coincidences",
            "philosophical debates on existence",
            "moral and ethical decision-making",
            "apocalyptic or post-apocalyptic scenarios",
            "personal spiritual journeys",
            "clashes between different belief systems",
            "technological singularity as divinity",
            "the search for extraterrestrial intelligence",
            "psychological exploration of faith and doubt",
            "the intersection of politics and religion",
            "virtual realities as divine realms",
            "evolutionary leaps in human consciousness"
        ];
    }
}