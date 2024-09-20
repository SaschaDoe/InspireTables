import {Table} from "../../table";

const searchThemeStatements = [
    "the journey of discovery begins with a single question",
    "in the pursuit of knowledge, every horizon conquered reveals new landscapes to explore",
    "wisdom is not a destination, but an endless expedition",
    "the most profound truths often hide in the least expected places",
    "curiosity is the compass that leads us to uncharted territories of understanding",
    "in the quest for answers, we often find ourselves",
    "the path to enlightenment is paved with relentless inquiry",
    "every stone unturned is a potential gateway to revelation",
    "the greatest explorers are those who venture into the unknown territories of thought",
    "in the labyrinth of life, we are all seekers of our own truths",
    "not all those who wander are lost",
    "the only true wisdom is in knowing you know nothing",
    "to find yourself, think for yourself",
    "the important thing is not to stop questioning",
    "the unexamined life is not worth living",
    "we are all in the gutter, but some of us are looking at the stars",
    "life is a journey, not a destination",
    "the farther one travels, the less one knows",
    "i have not failed. i've just found 10,000 ways that won't work",
    "the real voyage of discovery consists not in seeking new landscapes, but in having new eyes",
    "it is not the answer that enlightens, but the question",
    "the most beautiful thing we can experience is the mysterious",
    "curiosity is the wick in the candle of learning",
    "the only journey is the one within",
    "the mind once enlightened cannot again become dark",
    "follow your bliss and the universe will open doors where there were only walls",
    "the cave you fear to enter holds the treasure you seek",
    "the world is a book and those who do not travel read only one page",
    "the greatest obstacle to discovery is not ignorance - it is the illusion of knowledge",
    "the larger the island of knowledge, the longer the shoreline of wonder",
    "you can never cross the ocean unless you have the courage to lose sight of the shore",
    "the most difficult thing is the decision to act, the rest is merely tenacity",
    "we must not cease from exploration. and the end of all our exploring will be to arrive where we started and know the place for the first time",
    "the quieter you become, the more you can hear",
    "the only way to do great work is to love what you do. if you haven't found it yet, keep looking",
    "the way is not in the sky. the way is in the heart",
    "two roads diverged in a wood, and i—i took the one less traveled by, and that has made all the difference",
    "be curious, not judgmental",
    "the only true wisdom is in knowing you know nothing",
    "the beginning of knowledge is the discovery of something we do not understand"
];

export const SearchThemeStatementTableName = "Search theme statement";

export class SearchThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = SearchThemeStatementTableName;
        this.addEntriesFromList(searchThemeStatements);
    }
}