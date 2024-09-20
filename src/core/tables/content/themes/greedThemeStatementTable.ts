import {Table} from "../../table";

const greedThemeStatements = [
    "the more we have, the more we think we need",
    "in the pursuit of wealth, we often lose sight of what truly matters",
    "the hunger for more is a bottomless pit that can never be filled",
    "accumulation without purpose leads to spiritual poverty",
    "the richest person is not the one who has the most, but the one who needs the least",
    "in the race for abundance, we often sacrifice our humanity",
    "the cost of avarice is paid in the currency of the soul",
    "excessive desire is the root of all suffering",
    "true wealth is measured not by what we have, but by what we give",
    "the loudest wants often drown out the quietest needs",
    "money is a good servant but a bad master",
    "it is not the man who has too little, but the man who craves more, that is poor",
    "he who is not contented with what he has, would not be contented with what he would like to have",
    "the love of money is the root of all evil",
    "earth provides enough to satisfy every man's needs, but not every man's greed",
    "you can never get enough of what you don't really need",
    "the more you know, the less you need",
    "we make a living by what we get, but we make a life by what we give",
    "it's good to have money and the things that money can buy, but it's good, too, to check up once in a while and make sure that you haven't lost the things that money can't buy",
    "he who is not contented with what he has, would not be contented with what he would like to have",
    "poverty wants much; but avarice, everything",
    "there is no calamity greater than lavish desires",
    "the highest use of capital is not to make more money, but to make money do more for the betterment of life",
    "the hardest thing in the world to understand is the income tax",
    "i'd like to live as a poor man with lots of money",
    "too many people spend money they haven't earned, to buy things they don't want, to impress people they don't like",
    "the only way to get rid of temptation is to yield to it",
    "i can resist everything except temptation",
    "the trouble with the rat race is that even if you win, you're still a rat",
    "annual income twenty pounds, annual expenditure nineteen six, result happiness. Annual income twenty pounds, annual expenditure twenty pound ought and six, result misery",
    "there are people who have money and people who are rich",
    "if you want to know what God thinks of money, just look at the people he gave it to",
    "a wise person should have money in their head, but not in their heart",
    "money often costs too much",
    "when the last tree is cut down, the last fish eaten, and the last stream poisoned, you will realize that you cannot eat money",
    "what we really want to do is what we are really meant to do. When we do what we are meant to do, money comes to us, doors open for us, we feel useful, and the work we do feels like play to us",
    "the greatest wealth is to live content with little",
    "contentment is natural wealth, luxury is artificial poverty",
    "he who knows he has enough is rich",
    "it is preoccupation with possession, more than anything else, that prevents men from living freely and nobly"
];

export const GreedThemeStatementTableName = "Greed theme statement";

export class GreedThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = GreedThemeStatementTableName;
        this.addEntriesFromList(greedThemeStatements);
    }
}