import {Table} from "../../table";

const clashOfCulturesThemeStatements = [
    "when cultures collide, new perspectives emerge",
    "in the meeting of different worlds, both conflict and growth are inevitable",
    "clash of cultures reveals both the uniqueness and universality of human experience",
    "cultural differences can be bridges or barriers, depending on our approach",
    "in the crucible of cultural conflict, society's true values are revealed",
    "the friction between cultures sparks the fire of innovation",
    "when traditions collide, the old and new dance an uneasy tango",
    "cultural misunderstandings are the growing pains of a globalizing world",
    "in the intersection of different ways of life, we find the essence of humanity",
    "the meeting of cultures is a mirror reflecting our own biases and beliefs",
    "east is east and west is west, and never the twain shall meet",
    "no culture can live if it attempts to be exclusive",
    "civilization is the process of reducing the infinite to the finite",
    "the most important thing in communication is hearing what isn't said",
    "the real voyage of discovery consists not in seeking new landscapes, but in having new eyes",
    "travel is fatal to prejudice, bigotry, and narrow-mindedness",
    "the beauty of the world lies in the diversity of its people",
    "where cultures mix, creativity thrives",
    "in diversity there is beauty and there is strength",
    "the test of a first-rate intelligence is the ability to hold two opposed ideas in mind at the same time and still retain the ability to function",
    "the eye sees only what the mind is prepared to comprehend",
    "every man is the architect of his own fortune",
    "one's destination is never a place, but a new way of seeing things",
    "the single story creates stereotypes, and the problem with stereotypes is not that they are untrue, but that they are incomplete",
    "the first step in the evolution of ethics is a sense of solidarity with other human beings",
    "we may have different religions, different languages, different colored skin, but we all belong to one human race",
    "our ability to reach unity in diversity will be the beauty and the test of our civilization",
    "the only way to make sense out of change is to plunge into it, move with it, and join the dance",
    "culture makes people understand each other better",
    "the world is a book and those who do not travel read only one page"
];

export const ClashOfCulturesThemeStatementTableName = "Clash of Cultures theme statement";

export class ClashOfCulturesThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = ClashOfCulturesThemeStatementTableName;
        this.addEntriesFromList(clashOfCulturesThemeStatements);
    }
}