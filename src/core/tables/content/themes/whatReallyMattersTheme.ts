import { Theme } from "./theme";
import { Source } from "./source";

export const WhatReallyMattersThemeName = "what really matters";

export class WhatReallyMattersTheme extends Theme {
    constructor() {
        super();
        this.name = WhatReallyMattersThemeName;
        this.description = "Explore the core values, priorities, and meaningful aspects of life across various perspectives and contexts";
        this.sources.push(
            new Source()
                .withName("It's a Wonderful Life")
                .withLink("https://en.wikipedia.org/wiki/It%27s_a_Wonderful_Life")
                .withDescription("Classic film examining the impact of one person's life on their community"),
            new Source()
                .withName("The Alchemist")
                .withLink("https://en.wikipedia.org/wiki/The_Alchemist_(novel)")
                .withDescription("Novel about personal legend and life's true purpose"),
            new Source()
                .withName("Into the Wild")
                .withLink("https://en.wikipedia.org/wiki/Into_the_Wild_(film)")
                .withDescription("Film exploring the search for meaning through nature and solitude"),
            new Source()
                .withName("The Pursuit of Happyness")
                .withLink("https://en.wikipedia.org/wiki/The_Pursuit_of_Happyness")
                .withDescription("Biographical drama about perseverance and parental love"),
            new Source()
                .withName("The Good Place")
                .withLink("https://en.wikipedia.org/wiki/The_Good_Place")
                .withDescription("TV series examining ethics, morality, and what it means to be a good person")
        );

        this.subjects = ["Love", "Family", "Friendship", "Purpose", "Happiness", "Growth", "Integrity", "Empathy", "Time", "Health", "Knowledge", "Legacy"];
        this.verbs = ["cherishes", "nurtures", "discovers", "questions", "prioritizes", "cultivates", "reflects on", "appreciates", "challenges", "transforms", "embraces", "lets go of"];
        this.objects = ["relationships", "personal growth", "inner peace", "life's purpose", "true happiness", "meaningful work", "authentic connections", "self-awareness", "community", "wisdom", "personal values", "life experiences"];
        this.modifiers = ["genuinely", "deeply", "consciously", "wholeheartedly", "compassionately", "mindfully", "courageously", "authentically", "patiently", "gratefully", "humbly", "unconditionally"];
        this.connectors = ["through", "despite", "alongside", "beyond", "within", "amidst", "throughout", "during", "because of", "in spite of", "while", "by means of"];
        this.outcomes = [
            "finding inner peace",
            "strengthening relationships",
            "discovering life's purpose",
            "overcoming adversity",
            "learning to forgive",
            "achieving personal growth",
            "making a positive impact",
            "finding true happiness",
            "living authentically",
            "leaving a meaningful legacy",
            "cultivating gratitude",
            "embracing vulnerability"
        ];
        this.contexts = [
            "life-changing events",
            "everyday moments of joy",
            "personal crises and turning points",
            "social and cultural expectations",
            "technological distractions",
            "pursuit of success and ambition",
            "facing mortality",
            "balancing work and personal life",
            "global challenges and social issues",
            "intergenerational relationships",
            "self-reflection and mindfulness practices",
            "ethical dilemmas and moral choices",
            "cultural diversity and understanding",
            "environmental consciousness and sustainability"
        ];
    }
}