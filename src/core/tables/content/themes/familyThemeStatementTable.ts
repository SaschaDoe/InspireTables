import {Table} from "../../table";

const familyThemeStatements = [
    "blood is thicker than water, but love is thicker than blood",
    "in the tapestry of life, our loved ones are the golden threads",
    "the strength of a house lies in the foundation of its values",
    "our roots ground us, while our branches reach for the sky",
    "in the symphony of life, our kin provide the most beautiful harmonies",
    "the warmth of belonging can melt the coldest of hearts",
    "our first teachers in love and loyalty are those who raise us",
    "the echoes of our ancestors resound in our daily lives",
    "in the garden of life, our closest bonds are the most cherished flowers",
    "the stories we share become the legends of our lineage",
    "other things may change us, but we start and end with those closest to us",
    "home is where one starts from",
    "the greatest gifts are not wrapped in paper, but in love",
    "happiness is homemade",
    "we may have our differences, but we stick together",
    "the love in our lives is the sum of small kindnesses repeated day after day",
    "in the end, we will remember not the words of our enemies, but the silence of our friends",
    "the bond that links your true siblings is not one of blood, but of respect and joy in each other's life",
    "call it a clan, call it a network, call it a tribe, call it a family: whatever you call it, whoever you are, you need one",
    "ohana means family, and family means nobody gets left behind or forgotten",
    "a house divided against itself cannot stand",
    "children begin by loving their parents; as they grow older they judge them; sometimes they forgive them",
    "all happy families are alike; each unhappy family is unhappy in its own way",
    "the greatest thing in family life is to take a hint when a hint is intended-and not to take a hint when a hint isn't intended",
    "in time of test, family is best",
    "families are like fudge - mostly sweet with a few nuts",
    "we are born of love; love is our mother",
    "the strength of a nation derives from the integrity of the home",
    "a happy family is but an earlier heaven",
    "the most important thing a father can do for his children is to love their mother",
    "a mother's love for her child is like nothing else in the world",
    "home is not a place, it's a feeling",
    "the memories we make with our family is everything",
    "a man travels the world over in search of what he needs and returns home to find it",
    "there is no such thing as fun for the whole family",
    "a brother is a friend given by nature",
    "sisters are different flowers from the same garden",
    "you don't choose your family. They are God's gift to you, as you are to them",
    "the love of a family is life's greatest blessing",
    "a tree is known by its fruit; a man by his deeds"
];

export const FamilyThemeStatementTableName = "Family theme statement";

export class FamilyThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = FamilyThemeStatementTableName;
        this.addEntriesFromList(familyThemeStatements);
    }
}