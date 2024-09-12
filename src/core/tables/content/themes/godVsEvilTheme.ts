import { Theme } from "./theme";
import {Source} from "./source";

export const GoodVsEvilThemeName = "good_vs_evil";

export class GoodVsEvilTheme extends Theme {
    constructor() {
        super();
        this.name = GoodVsEvilThemeName;
        this.description = "Explore the eternal struggle between good and evil across various contexts and narratives";
        this.sources.push(
            new Source()
                .withName("Lord of the Rings")
                .withLink("https://en.wikipedia.org/wiki/The_Lord_of_the_Rings")
                .withDescription("you can beat the evil also when you are small"),
            new Source()
                .withName("Star Wars")
                .withLink("https://en.wikipedia.org/wiki/Star_Wars")
                .withDescription("your emotions could lead to the dark side"),
            new Source()
                .withName("Harry Potter")
                .withLink("https://en.wikipedia.org/wiki/Harry_Potter")
                .withDescription("The fight against dark magic and those who seek to abuse power")
        );

        this.subjects = ["Heroes", "Villains", "Morality", "Justice", "Temptation", "Redemption", "Corruption"];
        this.verbs = ["confronts", "battles", "resists", "succumbs to", "transforms", "illuminates", "challenges"];
        this.objects = ["darkness", "light", "moral dilemmas", "power", "human nature", "cosmic balance", "societal norms"];
        this.modifiers = ["epic", "internal", "timeless", "complex", "subtle", "stark", "nuanced"];
        this.connectors = ["while", "yet", "ultimately", "thereby", "despite", "through which", "revealing"];
        this.outcomes = [
            "shaping the fate of worlds",
            "testing the human spirit",
            "redefining moral boundaries",
            "inspiring hope in darkness",
            "exposing the gray areas of morality",
            "challenging preconceptions",
            "forging unlikely alliances"
        ];
        this.contexts = [
            "fantasy realms",
            "dystopian futures",
            "everyday life",
            "historical conflicts",
            "the human psyche",
            "intergalactic wars",
            "coming-of-age stories",
            "political intrigues"
        ];
    }
}

export function generateThematicStatement(theme: Theme): string {
    const subject = getRandomElement(theme.subjects);
    const verb = getRandomElement(theme.verbs);
    const object = getRandomElement(theme.objects);
    const modifier = getRandomElement(theme.modifiers);
    const connector = getRandomElement(theme.connectors);
    const outcome = getRandomElement(theme.outcomes);
    const context = getRandomElement(theme.contexts);

    const patterns = [
        `${modifier} ${subject} ${verb} ${object}, ${connector} ${outcome}.`,
        `In ${context}, ${subject} ${verb} ${object}, ${connector} ${outcome}.`,
        `${subject} ${verb} ${object}, ${connector} ${modifier} ${outcome}.`,
        `When ${modifier} ${subject} ${verb} ${object}, it ${connector} ${outcome} in ${context}.`,
        `${subject} in ${context} ${verb} ${object}, ${connector} ${modifier} ${outcome}.`,
        `The ${modifier} nature of ${subject} ${verb} ${object} in ${context}, ${connector} ${outcome}.`,
        `${subject} and ${object} clash to create ${modifier} ${outcome} in ${context}.`,
        `Through ${modifier} ${subject}, ${object} is ${verb}, ${connector} ${outcome} in ${context}.`,
        `${context} reveals how ${subject} can ${verb} ${object}, ${connector} ${modifier} ${outcome}.`,
        `${subject} serves as a ${modifier} force to ${verb} ${object} in ${context}, ${connector} ${outcome}.`
    ];

    return patterns[Math.floor(Math.random() * patterns.length)];
}

function getRandomElement(array: string[]): string {
    return array[Math.floor(Math.random() * array.length)];
}