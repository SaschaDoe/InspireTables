import {Table} from "../../table";

const disillusionmentThemeStatements = [
    "the shattering of ideals often paves the way for wisdom",
    "in the gap between expectation and reality, disappointment flourishes",
    "the loss of innocence is the price of knowledge",
    "facades crumble, revealing the harsh truths beneath",
    "the journey from hope to cynicism is paved with broken promises",
    "when the veil of naivety lifts, the world appears in stark clarity",
    "disenchantment is the silent aftermath of shattered dreams",
    "the bitter taste of reality often follows the sweet dreams of youth",
    "in the wake of lost illusions, a new understanding emerges",
    "the death of idealism gives birth to pragmatism",
    "growing up is losing some illusions, in order to acquire others",
    "the most beautiful things in the world are the most useless",
    "we are all in the gutter, but some of us are looking at the stars",
    "one day, in retrospect, the years of struggle will strike you as the most beautiful",
    "experience is simply the name we give our mistakes",
    "the world breaks everyone, and afterward, some are strong at the broken places",
    "you can't go home again",
    "the mass of men lead lives of quiet desperation",
    "if you're going through hell, keep going",
    "the road to hell is paved with good intentions",
    "there is no great genius without a mixture of madness",
    "the most common way people give up their power is by thinking they don't have any",
    "the only way to deal with this life is to embrace the chaos",
    "it is easier to build strong children than to repair broken men",
    "the truth will set you free, but first it will piss you off",
    "what a weary time those years were - to have the desire and the need to live but not the ability",
    "in a time of deceit telling the truth is a revolutionary act",
    "the truth is rarely pure and never simple",
    "the only true wisdom is in knowing you know nothing",
    "the higher we soar, the smaller we appear to those who cannot fly",
    "life is a series of natural and spontaneous changes. Don't resist them - that only creates sorrow",
    "the most terrifying fact about the universe is not that it is hostile but that it is indifferent",
    "the world is a tragedy to those who feel, but a comedy to those who think",
    "the older I grow, the more I distrust the familiar doctrine that age brings wisdom",
    "the hardest thing to learn in life is which bridge to cross and which to burn",
    "the visionary lies to himself, the liar only to others",
    "there are two tragedies in life. One is to lose your heart's desire. The other is to gain it",
    "life is not always a matter of holding good cards, but sometimes, playing a poor hand well",
    "you have to know the past to understand the present",
    "the most dangerous creation of any society is the man who has nothing to lose"
];

export const DisillusionmentThemeStatementTableName = "Disillusionment theme statement";

export class DisillusionmentThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = DisillusionmentThemeStatementTableName;
        this.addEntriesFromList(disillusionmentThemeStatements);
    }
}