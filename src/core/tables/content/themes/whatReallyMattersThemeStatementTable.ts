import {Table} from "../../table";

const whatReallyMattersThemeStatements = [
    "in the end, we will remember not the words of our enemies, but the silence of our friends",
    "the best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart",
    "to live is the rarest thing in the world. most people exist, that is all",
    "it is not the years in your life that count. it's the life in your years",
    "the purpose of life is not to be happy. it is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well",
    "the true meaning of life is to plant trees, under whose shade you do not expect to sit",
    "the greatest glory in living lies not in never falling, but in rising every time we fall",
    "in three words i can sum up everything i've learned about life: it goes on",
    "life is really simple, but we insist on making it complicated",
    "in the end, it's not the years in your life that count. it's the life in your years",
    "the two most important days in your life are the day you are born and the day you find out why",
    "life isn't about finding yourself. life is about creating yourself",
    "to be yourself in a world that is constantly trying to make you something else is the greatest accomplishment",
    "the only way to do great work is to love what you do",
    "happiness is not something ready-made. it comes from your own actions",
    "the meaning of life is to find your gift. the purpose of life is to give it away",
    "the soul is dyed the color of its thoughts",
    "how we spend our days is, of course, how we spend our lives",
    "the most important things in life aren't things",
    "the only person you are destined to become is the person you decide to be",
    "the good life is one inspired by love and guided by knowledge",
    "your time is limited, don't waste it living someone else's life",
    "the biggest adventure you can take is to live the life of your dreams",
    "the greatest wealth is to live content with little",
    "it is not what we get. but who we become, what we contribute... that gives meaning to our lives",
    "the secret of life is enjoying the passage of time",
    "life shrinks or expands in proportion to one's courage",
    "the goal of life is living in agreement with nature",
    "the art of living is more like wrestling than dancing",
    "you have within you right now, everything you need to deal with whatever the world can throw at you",
    "the privilege of a lifetime is being who you are",
    "to love. to be loved. to never forget your own insignificance. to never get used to the unspeakable violence and the vulgar disparity of life around you",
    "we are here to add what we can to life, not to get what we can from life",
    "the only way to do great work is to love what you do",
    "the quality, not the longevity, of one's life is what is important",
    "life is a succession of lessons which must be lived to be understood",
    "the unexamined life is not worth living",
    "to live is so startling it leaves little time for anything else",
    "in the depth of winter, i finally learned that within me there lay an invincible summer",
    "life is what happens to you while you're busy making other plans"
];

export const WhatReallyMattersThemeStatementTableName = "What Really Matters theme statement";

export class WhatReallyMattersThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = WhatReallyMattersThemeStatementTableName;
        this.addEntriesFromList(whatReallyMattersThemeStatements);
    }
}