import {Table} from "../../table";

const fishOutOfWaterThemeStatements = [
    "in unfamiliar waters, even the strongest swimmer may flounder",
    "the greatest growth often comes from the most uncomfortable situations",
    "adaptation is the key to survival in foreign environments",
    "sometimes, the path to belonging begins with feeling out of place",
    "in the ocean of life, we all occasionally find ourselves in strange tides",
    "the outsider's perspective can illuminate the blind spots of the insider",
    "comfort zones are beautiful places, but nothing ever grows there",
    "in the tapestry of life, sometimes we're the odd thread that stands out",
    "the journey of self-discovery often begins with feeling lost",
    "adaptability is the greatest asset in a world of constant change",
    "no man is an island, entire of itself",
    "the only way to make sense out of change is to plunge into it, move with it, and join the dance",
    "the real voyage of discovery consists not in seeking new landscapes, but in having new eyes",
    "life begins at the end of your comfort zone",
    "do not go where the path may lead, go instead where there is no path and leave a trail",
    "the ache for home lives in all of us",
    "to exist is to change, to change is to mature, to mature is to go on creating oneself endlessly",
    "you have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose",
    "the world is a book and those who do not travel read only one page",
    "not until we are lost do we begin to understand ourselves",
    "the man who views the world at 50 the same as he did at 20 has wasted 30 years of his life",
    "if you're going through hell, keep going",
    "be not afraid of growing slowly, be afraid only of standing still",
    "the bamboo that bends is stronger than the oak that resists",
    "the bird a nest, the spider a web, man friendship",
    "a smooth sea never made a skilled sailor",
    "the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle",
    "it is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change",
    "the greatest glory in living lies not in never falling, but in rising every time we fall",
    "we must be willing to let go of the life we planned so as to have the life that is waiting for us",
    "the shell must break before the bird can fly",
    "you never really understand a person until you consider things from his point of view",
    "the cave you fear to enter holds the treasure you seek",
    "a mind that is stretched by a new experience can never go back to its old dimensions",
    "the only true voyage of discovery would be not to visit strange lands but to possess other eyes",
    "we are all in the gutter, but some of us are looking at the stars",
    "sometimes it takes a wrong turn to get you to the right place",
    "life is either a daring adventure or nothing at all",
    "the only way to make sense out of change is to plunge into it, move with it, and join the dance",
    "it is never too late to be what you might have been"
];

export const FishOutOfWaterThemeStatementTableName = "Fish Out of Water theme statement";

export class FishOutOfWaterThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = FishOutOfWaterThemeStatementTableName;
        this.addEntriesFromList(fishOutOfWaterThemeStatements);
    }
}