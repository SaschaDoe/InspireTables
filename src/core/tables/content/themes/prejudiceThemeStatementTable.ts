import {Table} from "../../table";

const prejudiceThemeStatements = [
    // Direct statements
    "prejudice is the child of ignorance",
    "the roots of prejudice run deep, but understanding can dig deeper",
    "in the mirror of prejudice, we see our own fears reflected",
    "prejudice builds walls where bridges should stand",
    "the cost of prejudice is paid in human dignity",
    "prejudice is a prison for both the judged and the judging",

    // Storytelling elements and lessons learned
    "through the eyes of another, we learn to see ourselves",
    "the greatest enemy of prejudice is personal connection",
    "in diversity, we find strength; in uniformity, we find stagnation",
    "the journey from fear to understanding often begins with a single conversation",
    "our differences are not divisions, but opportunities for growth",
    "in challenging our assumptions, we open doors to new worlds",
    "the loudest voices of hate often come from the quietest places of pain",
    "in embracing others, we often find parts of ourselves we never knew existed",
    "the hardest prejudices to overcome are the ones we don't realize we have",
    "true change begins when we question the stories we've always been told",
    "no one is born hating another person because of the color of his skin, or his background, or his religion",
    "the highest result of education is tolerance",
    "travel is fatal to prejudice, bigotry, and narrow-mindedness",
    "hating people because of their color is wrong. And it doesn't matter which color does the hating. It's just plain wrong",
    "the unknown is only frightening until it becomes familiar",
    "in the garden of humanity, every flower has its place",
    "the strongest bonds are often forged between the most unlikely allies",
    "our perceptions shape our reality, but reality need not be bound by our perceptions",
    "the first step towards change is to question what we've always assumed to be true",
    "in the tapestry of life, every thread contributes to the beauty of the whole",
    "the walls we build to keep others out often become the prisons that keep us in",
    "the richest societies are those that value every voice",
    "in the school of life, our greatest teachers are often those we least expect",
    "the mirror of society reflects not just who we are, but who we choose to be",
    "the loudest judgments often come from the quietest insecurities",
    "in the face of difference, curiosity is the antidote to fear",
    "the most powerful lens is the one that allows us to see through another's eyes",
    "in the symphony of humanity, harmony is found not in sameness, but in complement",
    "the truest measure of character is how we treat those who are different from us"
];

export const PrejudiceThemeStatementTableName = "Prejudice theme statement";

export class PrejudiceThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = PrejudiceThemeStatementTableName;
        this.addEntriesFromList(prejudiceThemeStatements);
    }
}