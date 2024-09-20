import {Table} from "../../table";

const nostalgiaThemeStatements = [
    "memories are the architecture of our identity",
    "the past is a foreign country; they do things differently there",
    "in recollection, we often find a sweeter version of reality",
    "yesterday's simplicities shine brighter in today's complex world",
    "the scent of a forgotten perfume can unlock a thousand memories",
    "we carry our childhood with us, a secret country of the heart",
    "time softens the edges of our recollections, painting them in gentler hues",
    "in the rearview mirror of life, even potholes can seem quaint",
    "the taste of grandmother's cookies lingers long after the plate is empty",
    "old songs are time machines, transporting us to moments long past",
    "we often long for a time we never actually experienced",
    "the good old days are a construct of selective memory",
    "in yearning for the past, we sometimes forget to live in the present",
    "childhood summers stretch endlessly in memory, golden and warm",
    "the farther we move from our past, the more we polish its rough edges",
    "how we long to steal past the watchful dragons and find that country again",
    "memory is a way of holding onto the things you love, the things you are, the things you never want to lose",
    "i always find myself gravitating to the analogue, to the physical, to something you can hold",
    "life moves forward, but the heart often looks backward",
    "we collect childhood, preserving it in memory's amber",
    "the past beats inside me like a second heart",
    "what i like about photographs is that they capture a moment that's gone forever, impossible to reproduce",
    "it's funny how the colors of the real world only seem really real when you watch them on a screen",
    "sometimes you will never know the value of a moment until it becomes a memory",
    "they say you can't go home again. i've found that to be true only if 'home' is a place bound by time",
    "we leave something of ourselves behind when we leave a place, we stay there, even though we go away",
    "the music of youth, heard in adulthood, always stops the clock",
    "in longing for the past, we often forget that we are creating the good old days of tomorrow",
    "old books exude a particular scent, a perfume of lost time",
    "childhood smells of perfume and brownies",
    "we don't remember days, we remember moments",
    "there are places i'll remember all my life, though some have changed",
    "it's a strange thing to discover and to believe that you are loved when you know that there is nothing in you for anybody but a parent or a god to love",
    "when we are young, the words are scattered all around us. as they are assembled by experience, so also are we, sentence by sentence, until the story takes shape",
    "when you finally go back to your old home, you find it wasn't the old home you missed but your childhood",
    "the longing for paradise is man's longing not to be man",
    "we look back on our life as a thing of broken pieces, because our mistakes and failures are always the first to strike us, and outweigh in our imagination what we have accomplished and attained",
    "i don't want to repeat my innocence. i want the pleasure of losing it again",
    "the world has moved on, and we cannot go back. only forward",
    "you can't go back to how things were. how you thought they were. all you really have is... now"
];

export const NostalgiaThemeStatementTableName = "Nostalgia theme statement";

export class NostalgiaThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = NostalgiaThemeStatementTableName;
        this.addEntriesFromList(nostalgiaThemeStatements);
    }
}