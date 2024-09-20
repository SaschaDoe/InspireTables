import {Table} from "../../table";

const innocenceThemeStatements = [
    "the purest eyes are those untainted by the world's harsh realities",
    "in the garden of childhood, wonder blooms without effort",
    "before knowledge, there is a canvas of endless possibilities",
    "the unspoiled heart sees beauty where others see ordinary",
    "in simplicity lies the essence of untarnished joy",
    "the world is full of magic things, patiently waiting for our senses to grow sharper",
    "to see the world through a child's eyes is to rediscover marvel",
    "before judgment, there is acceptance; before cynicism, there is trust",
    "the unmarked soul carries no burden of past mistakes",
    "in naivety, there's a freedom that wisdom often envies",
    "every child is an artist. The problem is how to remain an artist once we grow up",
    "it takes a very long time to become young",
    "there are no seven wonders of the world in the eyes of a child. There are seven million",
    "the soul is healed by being with children",
    "children are the living messages we send to a time we will not see",
    "the secret of genius is to carry the spirit of the child into old age",
    "adults are just outdated children",
    "a child can teach an adult three things: to be happy for no reason, to always be busy with something, and to know how to demand with all his might that which he desires",
    "we could never have loved the earth so well if we had had no childhood in it",
    "there is always one moment in childhood when the door opens and lets the future in",
    "childhood is the most beautiful of all life's seasons",
    "what we want to see is the child in pursuit of knowledge, not knowledge in pursuit of the child",
    "a child's world is fresh and new and beautiful, full of wonder and excitement",
    "the greatest poems are yet to be written, those we lose ourselves in, in the writing",
    "in every real man a child is hidden that wants to play",
    "we don't stop playing because we grow old; we grow old because we stop playing",
    "the creative adult is the child who survived",
    "children have never been very good at listening to their elders, but they have never failed to imitate them",
    "the fondest memories of a man are those of his childhood",
    "if you carry your childhood with you, you never become older",
    "the child is the father of the man",
    "there are no grown-ups. Everyone is making it up as they go along",
    "growing up is losing some illusions, in order to acquire others",
    "the great man is he who does not lose his child's-heart",
    "there is no land like the land of your childhood",
    "all children are artists. The problem is how to remain an artist once he grows up",
    "the older I get, the more I see the power of that young woman, my mother",
    "that's the real trouble with the world, too many people grow up",
    "the first fall of snow is not only an event, it is a magical event. You go to bed in one kind of a world and wake up in another quite different",
    "the end of childhood is when things cease to astonish us"
];

export const InnocenceThemeStatementTableName = "Innocence theme statement";

export class InnocenceThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = InnocenceThemeStatementTableName;
        this.addEntriesFromList(innocenceThemeStatements);
    }
}