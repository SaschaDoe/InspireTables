import { Theme } from "./theme";
import { Source } from "./source";

export const NatureAsEnemyThemeName = "nature as an enemy";

export class NatureAsEnemyTheme extends Theme {
    constructor() {
        super();
        this.name = NatureAsEnemyThemeName;
        this.description = "The struggle of humans against powerful, indifferent, or hostile natural forces, emphasizing the conflict between civilization and the wild.";
        this.sources.push(
            new Source()
                .withName("The Perfect Storm")
                .withLink("https://en.wikipedia.org/wiki/The_Perfect_Storm_(film)")
                .withDescription("Film about a fishing boat caught in a massive storm system"),
            new Source()
                .withName("Into the Wild")
                .withLink("https://en.wikipedia.org/wiki/Into_the_Wild_(film)")
                .withDescription("Story of a young man's fatal journey into the Alaskan wilderness"),
        );

        this.subjects = ["Explorer", "Survivor", "Scientist", "Settler", "Athlete", "Sailor", "Farmer"];
        this.verbs = ["battles", "endures", "confronts", "survives", "challenges", "adapts to", "succumbs to"];
        this.objects = ["harsh elements", "wilderness", "natural disaster", "extreme weather", "dangerous wildlife", "inhospitable terrain", "environmental change"];
        this.modifiers = ["desperately", "resourcefully", "stubbornly", "fearfully", "courageously", "hopelessly", "ingeniously"];
        this.connectors = ["while facing", "against the backdrop of", "in the heart of", "despite the overwhelming force of", "amidst the chaos of", "in a desperate attempt to overcome", "through the unforgiving"];
        this.outcomes = [
            "overcoming impossible odds",
            "learning respect for nature",
            "experiencing a profound transformation",
            "discovering inner strength",
            "suffering tragic consequences",
            "gaining a new perspective on life",
            "achieving a pyrrhic victory",
            "forming an unlikely alliance",
            "uncovering hidden truths about nature or oneself"
        ];
        this.contexts = [
            "treacherous mountain climb",
            "desert survival scenario",
            "arctic expedition",
            "tropical storm or hurricane",
            "earthquake or volcanic eruption",
            "forest fire",
            "drought-stricken farmland",
            "tsunami or flood",
            "animal attack or infestation",
            "climate change consequences"
        ];
    }
}