import {Table} from "../../table";

const destinyThemeStatements = [
    "our choices shape the path that fate has laid before us",
    "the future is not written, it is waiting to be crafted",
    "in the tapestry of life, we are both the weaver and the thread",
    "what seems like chance may be the unseen hand of destiny",
    "our actions echo through time, shaping the world to come",
    "the seeds of tomorrow are planted in the soil of today",
    "we are not merely passengers in life, but captains of our own journey",
    "the universe conspires to fulfill the destiny of those who dare to dream",
    "our potential is limitless, constrained only by our imagination and will",
    "in every ending lies the promise of a new beginning",
    "character is destiny",
    "we make our fortunes and we call them fate",
    "the best way to predict the future is to create it",
    "there is no chance, no destiny, no fate, that can hinder or control the firm resolve of a determined soul",
    "man is his own star; and the soul that can render an honest and a perfect man, commands all light, all influence, all fate",
    "our wills and fates do so contrary run that our devices still are overthrown",
    "accept the things to which fate binds you, and love the people with whom fate brings you together",
    "we are not permitted to choose the frame of our destiny. But what we put into it is ours",
    "it is not in the stars to hold our destiny but in ourselves",
    "I can control my destiny, but not my fate. Destiny means there are opportunities to turn right or left, but fate is a one-way street",
    "the only person you are destined to become is the person you decide to be",
    "watch your thoughts, they become words. Watch your words, they become actions. Watch your actions, they become habits. Watch your habits, they become character. Watch your character, it becomes your destiny",
    "we dream to give ourselves hope. To stop dreaming - well, that's like saying you can never change your fate",
    "you often meet your fate on the road you take to avoid it",
    "for a man to conquer himself is the first and noblest of all victories",
    "the future belongs to those who believe in the beauty of their dreams",
    "we are made wise not by the recollection of our past, but by the responsibility for our future",
    "the path to our destination is not always a straight one",
    "life is what happens to you while you're busy making other plans",
    "there are no wrong turnings. Only paths we had not known we were meant to walk",
    "the wheel of fortune turns round incessantly, and who can say to himself, 'I shall today be uppermost'?",
    "we cannot direct the wind, but we can adjust the sails",
    "the future is not laid out on a track. It is something that we can decide, and to the extent that we do not violate any known laws of the universe, we can probably make it work the way that we want to",
    "you are the master of your destiny. You can influence, direct and control your own environment",
    "every man gotta right to decide his own destiny",
    "our destiny exercises its influence over us even when, as yet, we have not learned its nature: it is our future that lays down the law of our today",
    "you can't connect the dots looking forward; you can only connect them looking backwards",
    "the ink of the scholar is more sacred than the blood of the martyr",
    "the only limit to our realization of tomorrow will be our doubts of today",
    "we are not makers of history. We are made by history"
];

export const DestinyThemeStatementTableName = "Destiny theme statement";

export class DestinyThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = DestinyThemeStatementTableName;
        this.addEntriesFromList(destinyThemeStatements);
    }
}