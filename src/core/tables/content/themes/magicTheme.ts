import {Theme} from "../../../entities/genre/theme";
import {Source} from "../../../entities/genre/source";

export const MagicThemeName = "magic";

export class MagicTheme extends Theme {
    constructor() {
        super();
        this.name = MagicThemeName;
        this.description = "Discover the history and how it works and what can it do for you and your dreams";
        this.sources.push(new Source()
            .withName("Harry Potter")
            .withLink("https://en.wikipedia.org/wiki/Harry_Potter"));

        this.subjects = ["Magic", "Spellcasting", "Wizardry", "Enchantment", "Sorcery"];
        this.verbs = ["transforms", "conjures", "enchants", "mystifies", "transcends"];
        this.objects = ["reality", "the impossible", "natural laws", "human limitations", "the mundane"];
        this.modifiers = ["arcane", "mystical", "otherworldly", "ethereal", "supernatural"];
        this.connectors = ["while", "thus", "and", "thereby", "yet"];
        this.outcomes = ["revealing hidden truths", "unlocking new possibilities", "bending the fabric of reality", "challenging our understanding", "manifesting the unimaginable"];
        this.contexts = ["the realm of fantasy", "a world of wonder", "the arcane arts", "mystical practices", "supernatural phenomena"];
    }
}