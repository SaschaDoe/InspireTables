import {Table} from "../../table";

const definitionOfHumanityThemeStatements = [
    "compassion is the essence of our shared existence",
    "the capacity for both cruelty and kindness defines our nature",
    "consciousness and self-awareness set us apart in the natural world",
    "our ability to create and appreciate art reveals our deeper selves",
    "the pursuit of knowledge and understanding drives our species forward",
    "empathy is the bridge that connects individual experiences",
    "our mortality gives meaning to our choices and actions",
    "the power to shape our environment is both a gift and a responsibility",
    "language and communication form the foundation of our societies",
    "the struggle between individual desires and collective needs shapes our cultures",
    "to err is human; to forgive, divine",
    "I think, therefore I am",
    "man is the only animal that blushes. Or needs to",
    "we are what we repeatedly do. Excellence, then, is not an act, but a habit",
    "the unexamined life is not worth living",
    "be the change you wish to see in the world",
    "no man is an island, entire of itself",
    "the proper study of mankind is man",
    "know thyself",
    "what a piece of work is man! How noble in reason, how infinite in faculty",
    "man is the measure of all things",
    "the glory of God is man fully alive",
    "we are the universe experiencing itself",
    "the only way to deal with this life is to embrace the chaos",
    "we are all in the gutter, but some of us are looking at the stars",
    "the world is a stage, and all the men and women merely players",
    "existence precedes essence",
    "I am not what happened to me, I am what I choose to become",
    "the mass of men lead lives of quiet desperation",
    "we are the stories we tell ourselves",
    "civilization is the progress toward a society of privacy",
    "the soul becomes dyed with the color of its thoughts",
    "we are not human beings having a spiritual experience. We are spiritual beings having a human experience",
    "the purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate",
    "we are all different. That's what makes us interesting and special",
    "the highest possible stage in moral culture is when we recognize that we ought to control our thoughts",
    "we are what we pretend to be, so we must be careful about what we pretend to be",
    "every man is a piece of the continent, a part of the main",
    "our lives begin to end the day we become silent about things that matter",
    "the only true wisdom is in knowing you know nothing",
    "in the dance between human and machine, it is our imperfections that make us irreplaceable",
    "the measure of intelligence is the ability to change",
    "it is not the strongest of the species that survives, nor the most intelligent. It is the one most adaptable to change",
    "the human spirit must prevail over technology",
    "machines can calculate, but they cannot comprehend the poetry of a sunset",
    "in the age of AI, our humanity becomes our most precious resource",
    "what separates us from machines is not our ability to think, but our ability to love",
    "the more we become like machines, the more we need to cultivate our humanity",
    "our flaws and vulnerabilities are not weaknesses, but the essence of our humanity",
    "a computer can beat us at chess, but it can never feel the thrill of victory",
    "in a world of algorithms, spontaneity becomes revolutionary",
    "the beauty of being human lies in our ability to find meaning in chaos",
    "we are not mere biological machines, but beings capable of transcending our programming",
    "our mortality is not a flaw, but the fire that fuels our passions and dreams",
    "what defines us is not our processing power, but our power to empathize",
    "in the race against machines, our creativity is our greatest advantage",
    "the difference between humans and beasts is our ability to question our nature",
    "we are not just flesh and blood, but the sum of our experiences and choices",
    "our humanity shines brightest in moments of compassion towards those unlike us"
];

export const DefinitionOfHumanityThemeStatementTableName = "Definition of Humanity theme statement";

export class DefinitionOfHumanityThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = DefinitionOfHumanityThemeStatementTableName;
        this.addEntriesFromList(definitionOfHumanityThemeStatements);
    }
}