import {Theme} from "./theme";
import {Source} from "./source";

export const HeroismThemeName = "heroism";

export class HeroismTheme extends Theme {
    constructor() {
        super();
        this.name = HeroismThemeName;
        this.description = "What makes a normal person a hero?";
        this.sources.push(
            new Source()
                .withName("Beowulf")
                .withLink("https://en.wikipedia.org/wiki/Beowulf")
                .withDescription("ancient epic of a hero's deeds"),
            new Source()
                .withName("Marvel Cinematic Universe")
                .withLink("https://en.wikipedia.org/wiki/Marvel_Cinematic_Universe")
                .withDescription("modern interpretation of heroes"),
        );

        this.subjects = ["Courage", "Sacrifice", "Leadership", "Integrity", "Compassion", "Resilience", "Justice"];
        this.verbs = ["inspires", "challenges", "overcomes", "protects", "transforms", "unites", "redeems"];
        this.objects = ["evil forces", "societal norms", "personal fears", "injustice", "oppression", "adversity", "common good"];
        this.modifiers = ["selfless", "extraordinary", "unexpected", "legendary", "humble", "reluctant", "destined"];
        this.connectors = ["despite", "through", "against all odds", "in the face of", "with unwavering", "for the sake of", "rising above"];
        this.outcomes = [
            "inspiring future generations",
            "changing the course of history",
            "saving lives",
            "bringing hope to the hopeless",
            "sacrificing personal gain for others",
            "overcoming impossible odds",
            "uniting divided people",
            "exposing corruption",
            "redeeming past mistakes"
        ];
        this.contexts = [
            "ancient myths and legends",
            "modern urban landscapes",
            "dystopian futures",
            "everyday life",
            "times of war and conflict",
            "natural disasters",
            "fantastical realms",
            "the political arena",
            "scientific breakthroughs",
            "personal struggles"
        ];
    }
}