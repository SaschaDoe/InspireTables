import {Table} from "../../table";

const fakeRelationshipThemeStatements = [
    "beneath the veneer of perfection, lies a hollow connection",
    "in the theater of love, some actors forget they're playing a part",
    "the illusion of intimacy often masks a profound loneliness",
    "some bonds are forged not by the heart, but by convenience",
    "in the game of appearances, authentic emotions are the first casualty",
    "the loudest declarations of love often ring the most hollow",
    "some partnerships are built on sand, destined to crumble",
    "in the dance of deception, both partners lose their footing",
    "the façade of togetherness can be the loneliest place",
    "some hearts connect only on the surface, never reaching the depths",
    "we accept the love we think we deserve",
    "the worst kind of hurt is pretending you're okay just to see if they care",
    "sometimes people don't want to hear the truth because they don't want their illusions destroyed",
    "the hardest thing to do is watch the one you love, love someone else",
    "it is better to be hated for what you are than to be loved for what you are not",
    "the greatest lie ever told about love is that it sets you free",
    "people may not always tell you what you want to hear, but they will always show you who they are",
    "the opposite of love is not hate, it's indifference",
    "love looks not with the eyes, but with the mind",
    "one is loved because one is loved. No reason is needed for loving",
    "the giving of love is an education in itself",
    "love is a smoke made with the fume of sighs",
    "the heart wants what it wants. There's no logic to these things",
    "the heart was made to be broken",
    "there is always some madness in love. But there is also always some reason in madness",
    "love is an irresistible desire to be irresistibly desired",
    "the course of true love never did run smooth",
    "to love oneself is the beginning of a lifelong romance",
    "the deeper that sorrow carves into your being, the more joy you can contain",
    "the most painful thing is losing yourself in the process of loving someone too much",
    "it takes courage to love, but pain through love is the purifying fire which those who love generously know",
    "the emotion that can break your heart is sometimes the very one that heals it",
    "the way to love anything is to realize that it may be lost",
    "love is a battlefield",
    "all discarded lovers should be given a second chance, but with somebody else",
    "the meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed",
    "love is the delusion that one woman differs from another",
    "love is blind, but marriage restores its sight",
    "the art of love is largely the art of persistence",
    "love is a game that two can play and both win"
];

export const FakeRelationshipThemeStatementTableName = "Fake Relationship theme statement";

export class FakeRelationshipThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = FakeRelationshipThemeStatementTableName;
        this.addEntriesFromList(fakeRelationshipThemeStatements);
    }
}