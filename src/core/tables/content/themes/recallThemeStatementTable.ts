import {Table} from "../../table";

const recallThemeStatements = [
    "the mind is a time machine, transporting us to moments long past",
    "in the gallery of our minds, some portraits remain vivid while others fade",
    "the past lives on in the echoes of our thoughts",
    "memories are the invisible threads that weave our lives together",
    "yesterday's experiences are today's wisdom, if we can summon them",
    "the human brain: an archive where fact and fiction often blur",
    "our personal history is written in the ink of recollection",
    "in the theatre of the mind, past scenes replay with ever-changing scripts",
    "the art of remembering is also the art of reimagining",
    "our minds are time capsules, preserving fragments of who we once were",
    "the past is never dead. it's not even past",
    "imagination is the soil in which old experiences blossom into new insights",
    "we carry our history with us, a silent passenger shaping our journey",
    "in the labyrinth of memory, some paths grow clearer with time, others fade away",
    "the mind's eye: a lens that can focus on distant times as if they were yesterday",
    "life can only be understood backwards; but it must be lived forwards",
    "i know nothing with any certainty, but the sight of the stars makes me dream",
    "we are made of memories, but we make them too",
    "the past beats inside me like a second heart",
    "what you remember saves you",
    "memory is a way of holding onto the things you love, the things you are, the things you never want to lose",
    "the advantage of a bad memory is that one enjoys several times the same good things for the first time",
    "the palest ink is better than the best memory",
    "memory is the diary that we all carry about with us",
    "the existence of forgetting has never been proved: we only know that some things do not come to our mind when we want them to",
    "memory is the mother of all wisdom",
    "the true art of memory is the art of attention",
    "the moment is the only thing we ever have and can ever experience",
    "the difference between false memories and true ones is the same as for jewels: it is always the false ones that look the most real, the most brilliant",
    "one lives in the hope of becoming a memory",
    "memories warm you up from the inside. but they also tear you apart",
    "the worst part of holding the memories is not the pain. it's the loneliness of it. memories need to be shared",
    "we are nothing but a collection of our memories. and memories are fleeting",
    "the most beautiful things are not associated with money; they are memories and moments",
    "the best memories come from bad ideas done with friends",
    "memories are the key not to the past, but to the future",
    "some memories are realities, and are better than anything that can ever happen to one again",
    "the heart's memory eliminates the bad and magnifies the good",
    "he who has gone, so we but cherish his memory, abides with us, more potent, nay, more present than the living man",
    "the world is shaped by two things — stories told and the memories they leave behind"
];

export const RecallThemeStatementTableName = "Recall theme statement";

export class RecallThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = RecallThemeStatementTableName;
        this.addEntriesFromList(recallThemeStatements);
    }
}