import {Theme} from "./theme";
import {Source} from "./source";

export class DavidVsGoliathTheme extends Theme {
    constructor() {
        super();
        this.name = "David vs. Goliath";
        this.description = "Explore the concept of an underdog facing overwhelming odds, using wit, skill, or determination to challenge a seemingly invincible opponent";
        this.sources.push(
            new Source()
                .withName("Rocky")
                .withLink("https://en.wikipedia.org/wiki/Rocky")
                .withDescription("underdog boxer challenging the heavyweight champion"),
            new Source()
                .withName("Erin Brockovich")
                .withLink("https://en.wikipedia.org/wiki/Erin_Brockovich_(film)")
                .withDescription("lone legal clerk taking on a powerful corporation"),
        );

        this.subjects = ["Underdog", "Giant", "Courage", "Ingenuity", "Perseverance", "Power", "Justice"];
        this.verbs = ["challenges", "overcomes", "outsmarts", "perseveres", "inspires", "transforms", "triumphs"];
        this.objects = ["odds", "expectations", "limitations", "systems", "prejudices", "resources", "conventional wisdom"];
        this.modifiers = ["unlikely", "determined", "resourceful", "overwhelming", "powerful", "innovative", "inspiring"];
        this.connectors = ["against all odds", "in the face of", "despite", "through sheer", "by leveraging", "in defiance of", "with nothing but"];
        this.outcomes = [
            "achieving the impossible",
            "inspiring others to action",
            "exposing corruption or injustice",
            "redefining success",
            "personal growth through adversity",
            "changing the balance of power",
            "proving the value of determination",
            "challenging societal norms",
            "revolutionizing an industry or field"
        ];
        this.contexts = [
            "sports competitions",
            "legal battles",
            "business rivalries",
            "social movements",
            "scientific breakthroughs",
            "political campaigns",
            "technological innovations",
            "academic achievements",
            "environmental activism",
            "personal challenges"
        ];
    }
}