import {Table} from "../../table";

const realityThemeStatements = [
    "what we perceive is not always what truly exists",
    "the world we see is but a canvas painted by our minds",
    "truth often hides behind the veil of our assumptions",
    "in the tapestry of existence, each thread is both illusion and substance",
    "our senses are both windows and barriers to the world around us",
    "the map is not the territory, but often we mistake one for the other",
    "in the dance between observer and observed, who truly leads?",
    "what we call truth is often just the most convenient explanation",
    "the solid ground beneath our feet is less firm than we imagine",
    "in the mirror of consciousness, the universe observes itself",
    "perception shapes experience more than we care to admit",
    "the boundaries between dream and waking life are more porous than we think",
    "in questioning our assumptions, we glimpse the true nature of things",
    "the world is not as it is, but as we are",
    "consciousness is the lens through which the universe experiences itself",
    "everything we see is a perspective, not the truth",
    "the eyes see only what the mind is prepared to comprehend",
    "we don't see things as they are, we see them as we are",
    "there are more things in heaven and earth than are dreamt of in your philosophy",
    "what you see and what you hear depends a great deal on where you are standing",
    "the only true wisdom is in knowing you know nothing",
    "all that we see or seem is but a dream within a dream",
    "there is nothing either good or bad, but thinking makes it so",
    "the universe is not only stranger than we imagine, it is stranger than we can imagine",
    "the world is full of magical things patiently waiting for our wits to grow sharper",
    "what you do speaks so loudly that i cannot hear what you say",
    "the unexamined life is not worth living",
    "i think, therefore i am",
    "man is the measure of all things",
    "perception is reality",
    "life is but a dream",
    "all the world's a stage, and all the men and women merely players",
    "the cave you fear to enter holds the treasure you seek",
    "to see a world in a grain of sand and heaven in a wild flower",
    "the mind is everything. what you think you become",
    "we are what we repeatedly do. excellence, then, is not an act, but a habit",
    "the only way to make sense out of change is to plunge into it, move with it, and join the dance",
    "the truth will set you free, but first it will piss you off",
    "you do not see the world as it is. you see it as you are",
    "the most beautiful experience we can have is the mysterious"
];

export const RealityThemeStatementTableName = "Reality theme statement";

export class RealityThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = RealityThemeStatementTableName;
        this.addEntriesFromList(realityThemeStatements);
    }
}