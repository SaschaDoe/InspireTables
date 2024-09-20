import {Table} from "../../table";

const obsessionThemeStatements = [
    "some thoughts are parasites, feeding on the mind until nothing else remains",
    "in the pursuit of perfection, we often lose sight of reality",
    "a single idea can consume a lifetime, for better or worse",
    "the line between passion and madness is often blurred",
    "in the depths of fixation, the world narrows to a single point",
    "the mind can be both a sanctuary and a prison of our own making",
    "some desires burn so bright they threaten to consume everything in their path",
    "in the relentless pursuit of a goal, we may lose ourselves entirely",
    "the most dangerous traps are those we set for ourselves",
    "a mind focused on a single thought becomes a lens, burning all else to ash",
    "in the echo chamber of our desires, reason's voice grows faint",
    "some quests become chains, binding us to an endless pursuit",
    "the sweetest nectar can become poison if indulged in excess",
    "in the labyrinth of a single idea, we may lose the thread of our own story",
    "the most formidable prison is the one built by our own persistent thoughts",
    "there is no passion to be found playing small - in settling for a life that is less than the one you are capable of living",
    "the mind is its own place, and in itself can make a heaven of hell, a hell of heaven",
    "we are what we repeatedly do. excellence, then, is not an act, but a habit",
    "i have no special talents. i am only passionately curious",
    "the only way to get rid of a temptation is to yield to it",
    "nothing in the world is ever completely wrong. even a stopped clock is right twice a day",
    "you will become way less concerned with what other people think of you when you realize how seldom they do",
    "the only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved",
    "i have measured out my life with coffee spoons",
    "we can be redeemed only to the extent to which we see ourselves",
    "you are what you love, not what loves you",
    "to be possessed is to be possessed by one's possessions",
    "until you make the unconscious conscious, it will direct your life and you will call it fate",
    "the hardest thing to do is to be true to yourself, especially when everybody is watching",
    "there is no great genius without a mixture of madness",
    "the creative person is both more primitive and more cultivated, more destructive and more constructive, a lot madder and a lot saner, than the average person",
    "the difference between a dream and a goal is a deadline",
    "you can't wait for inspiration. you have to go after it with a club",
    "art is the only way to run away without leaving home",
    "i would rather die of passion than of boredom",
    "a man may die, nations may rise and fall, but an idea lives on",
    "the mind is everything. what you think you become",
    "there is only one way to avoid criticism: do nothing, say nothing, and be nothing",
    "the most difficult thing is the decision to act, the rest is merely tenacity",
    "i have not failed. i've just found 10,000 ways that won't work"
];

export const ObsessionThemeStatementTableName = "Obsession theme statement";

export class ObsessionThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = ObsessionThemeStatementTableName;
        this.addEntriesFromList(obsessionThemeStatements);
    }
}