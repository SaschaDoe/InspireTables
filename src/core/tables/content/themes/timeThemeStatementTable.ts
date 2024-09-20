import {Table} from "../../table";

const timeThemeStatements = [
    "the clock ticks for all of us, but each hears it differently",
    "yesterday is history, tomorrow is a mystery, today is a gift",
    "life is what happens to you while you're busy making other plans",
    "the present moment is the only moment available to us, and it is the door to all moments",
    "lost opportunities never come back",
    "the future is something which everyone reaches at the rate of sixty minutes an hour",
    "procrastination is the thief of possibilities",
    "the past is a foreign country; they do things differently there",
    "eternity is not something that begins after you are dead. it is going on all the time",
    "we are made of memories, but we live for the moments yet to come",
    "the wisest are the most annoyed at the loss of it",
    "you can't have a better tomorrow if you are thinking about yesterday all the time",
    "don't watch the clock; do what it does. keep going",
    "the trouble is, you think you have time",
    "lost time is never found again",
    "the two most powerful warriors are patience and time",
    "nothing is a waste of time if you use the experience wisely",
    "life, if well lived, is long enough",
    "you will never find time for anything. if you want time, you must make it",
    "the past beats inside me like a second heart",
    "the butterfly counts not months but moments, and has time enough",
    "the only reason for time is so that everything doesn't happen at once",
    "the future starts today, not tomorrow",
    "it's not that we have little time, but more that we waste a good deal of it",
    "the best thing about the future is that it comes one day at a time",
    "there's only one thing more precious than our time and that's who we spend it on",
    "we must use time wisely and forever realize that the time is always ripe to do right",
    "the key is in not spending time, but in investing it",
    "all we have to decide is what to do with the time that is given us",
    "the bad news is time flies. the good news is you're the pilot",
    "you can't make up for lost time. you can only do better in the future",
    "the way we spend our days is, of course, how we spend our lives",
    "life is long if you know how to use it",
    "the only true luxury is that of human connection",
    "each moment is a place you've never been",
    "for every minute you are angry you lose sixty seconds of happiness",
    "you can't turn back the clock. but you can wind it up again",
    "the most precious resource we all have is time",
    "life is a succession of moments. to live each one is to succeed",
    "forever is composed of nows"
];

export const TimeThemeStatementTableName = "Time theme statement";

export class TimeThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = TimeThemeStatementTableName;
        this.addEntriesFromList(timeThemeStatements);
    }
}