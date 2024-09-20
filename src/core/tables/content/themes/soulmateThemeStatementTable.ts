import {Table} from "../../table";

const soulmateThemeStatements = [
    "in a sea of faces, one stands out as if illuminated from within",
    "some connections transcend time, space, and reason",
    "true unity is finding someone who makes you more yourself",
    "the heart recognizes its other half in an instant",
    "when two souls align, the universe itself takes notice",
    "in the tapestry of life, some threads are destined to intertwine",
    "the deepest bonds are forged in the fires of mutual understanding",
    "finding your perfect complement is like discovering a missing piece of yourself",
    "some people enter our lives and immediately feel like home",
    "true connection goes beyond words, residing in the realm of unspoken understanding",
    "love is when you meet someone who tells you something new about yourself",
    "what greater thing is there for two human souls than to feel that they are joined",
    "i seem to have loved you in numberless forms, numberless times, in life after life, in age after age forever",
    "in all the world, there is no heart for me like yours. in all the world, there is no love for you like mine",
    "whatever our souls are made of, his and mine are the same",
    "i love you not only for what you are, but for what i am when i am with you",
    "i recognize the way you make me feel and i'm addicted to it",
    "if i know what love is, it is because of you",
    "you make me want to be a better man",
    "i look at you and see the rest of my life in front of my eyes",
    "it's like my life isn't even real to me unless you're there and you're in it and i'm sharing it with you",
    "you are my today and all of my tomorrows",
    "i fell in love the way you fall asleep: slowly, and then all at once",
    "you don't love someone for their looks, or their clothes, or for their fancy car, but because they sing a song only you can hear",
    "i want all of you, forever, you and me, every day",
    "to love and be loved is to feel the sun from both sides",
    "the best love is the kind that awakens the soul and makes us reach for more",
    "you are the finest, loveliest, tenderest, and most beautiful person i have ever known—and even that is an understatement",
    "if you live to be a hundred, i want to live to be a hundred minus one day, so i never have to live without you",
    "i wish i could turn back the clock. i'd find you sooner and love you longer",
    "i love you. i am who i am because of you. you are every reason, every hope, and every dream i've ever had",
    "when i saw you i fell in love, and you smiled because you knew",
    "i've never had a moment's doubt. i love you. i believe in you completely. you are my dearest one. my reason for life",
    "i would rather spend one lifetime with you, than face all the ages of this world alone",
    "you are my heart, my life, my one and only thought",
    "if i had a flower for every time i thought of you... i could walk through my garden forever",
    "you are the last thought in my mind before i drift off to sleep and the first thought when i wake up each morning",
    "i love you not because of who you are, but because of who i am when i am with you",
    "i knew the second i met you that there was something about you i needed. turns out it wasn't something about you at all. it was just you",
    "i swear i couldn't love you more than i do right now, and yet i know i will tomorrow"
];

export const SoulmateThemeStatementTableName = "Soulmate theme statement";

export class SoulmateThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = SoulmateThemeStatementTableName;
        this.addEntriesFromList(soulmateThemeStatements);
    }
}