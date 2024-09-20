import {Table} from "../../table";

const unknownThemeStatements = [
    "the most beautiful experience we can have is the mysterious",
    "in the fields of observation chance favors only the prepared mind",
    "the universe is full of magical things patiently waiting for our wits to grow sharper",
    "what we know is a drop, what we don't know is an ocean",
    "the more i learn, the more i realize how much i don't know",
    "curiosity is the wick in the candle of learning",
    "the only true wisdom is in knowing you know nothing",
    "the most exciting phrase to hear in science, the one that heralds new discoveries, is not 'eureka!' but 'that's funny...'",
    "the important thing is not to stop questioning. curiosity has its own reason for existing",
    "we keep moving forward, opening new doors, and doing new things, because we're curious and curiosity keeps leading us down new paths",
    "i have no special talents. i am only passionately curious",
    "the larger the island of knowledge, the longer the shoreline of wonder",
    "it is not the answer that enlightens, but the question",
    "the world is full of obvious things which nobody by any chance ever observes",
    "the possession of knowledge does not kill the sense of wonder and mystery. there is always more mystery",
    "the most beautiful thing we can experience is the mysterious. it is the source of all true art and science",
    "the greatest obstacle to discovery is not ignorance - it is the illusion of knowledge",
    "be patient toward all that is unsolved in your heart and try to love the questions themselves",
    "i would rather have questions that can't be answered than answers that can't be questioned",
    "the day you stop learning is the day you begin decaying",
    "those who have knowledge, don't predict. those who predict, don't have knowledge",
    "the more you know, the more you realize you don't know",
    "to know that we know what we know, and to know that we do not know what we do not know, that is true knowledge",
    "the capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice",
    "imagination is more important than knowledge. knowledge is limited. imagination encircles the world",
    "we are all in the gutter, but some of us are looking at the stars",
    "the only true wisdom is in knowing you know nothing",
    "wonder is the beginning of wisdom",
    "the noblest pleasure is the joy of understanding",
    "the more i see, the less i know for sure",
    "doubt is the beginning of wisdom",
    "not knowing everything is all that makes it okay sometimes",
    "mysteries abound where most we seek for answers",
    "the oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown",
    "the mind once enlightened cannot again become dark",
    "somewhere, something incredible is waiting to be known",
    "the most incomprehensible thing about the world is that it is comprehensible",
    "the beginning of knowledge is the discovery of something we do not understand",
    "there are known knowns. there are things we know we know. we also know there are known unknowns. that is to say, we know there are some things we do not know. but there are also unknown unknowns, the ones we don't know we don't know",
    "the universe is not only stranger than we imagine, it is stranger than we can imagine"
];

export const UnknownThemeStatementTableName = "Unknown theme statement";

export class UnknownThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = UnknownThemeStatementTableName;
        this.addEntriesFromList(unknownThemeStatements);
    }
}