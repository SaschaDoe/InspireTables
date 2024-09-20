import {Table} from "../../table";

const comingOfAgeThemeStatements = [
    "coming of age is the bridge between innocence and understanding",
    "in the crucible of youth, we forge our adult selves",
    "the journey from child to adult is paved with both wonder and disillusionment",
    "coming of age is the moment we realize our parents are human too",
    "adolescence is nature's way of preparing us for disappointment",
    "in growing up, we trade magic for knowledge, and innocence for wisdom",
    "the path to adulthood is marked by the milestones of self-discovery",
    "coming of age is when we start writing our own story",
    "in the twilight of childhood, we glimpse the dawn of our adult lives",
    "the transition to adulthood is a series of small awakenings",
    "youth is a dream, a form of chemical madness",
    "we are all apprentices in a craft where no one ever becomes a master",
    "growing up is losing some illusions, in order to acquire others",
    "maturity is when you stop complaining and make something of yourself",
    "adolescence is like cactus",
    "the day the child realizes that all adults are imperfect, he becomes an adolescent",
    "teenagers are never going to be in a good mood",
    "at sixteen, the conscience is formed; at twenty, it is solid",
    "youth is the time to study wisdom, old age is the time to practice it",
    "one of the signs of passing youth is the birth of a sense of fellowship with other human beings",
    "when I was a boy of 14, my father was so ignorant I could hardly stand to have the old man around. But when I got to be 21, I was astonished at how much the old man had learned in seven years",
    "the young always have the same problem - how to rebel and conform at the same time",
    "youth comes but once in a lifetime",
    "childhood is the kingdom where nobody dies",
    "the hardest part about growing up is letting go of what you were used to",
    "the moment you feel you have to prove your worth to someone is the moment to absolutely and utterly walk away",
    "growing up is a terribly hard thing to do. It is much easier to skip it and go from one childhood to another",
    "what is it about childhood that never leaves us, that always remains?",
    "it takes courage to grow up and become who you really are",
    "the most important thing that parents can teach their children is how to get along without them"
];

export const ComingOfAgeThemeStatementTableName = "Coming of Age theme statement";

export class ComingOfAgeThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = ComingOfAgeThemeStatementTableName;
        this.addEntriesFromList(comingOfAgeThemeStatements);
    }
}