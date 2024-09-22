import {Table} from "../../table";

const sacrificeThemeStatements = [
    // Direct statements
    "sacrifice is the measure of love",
    "in sacrifice, we find the true worth of things",
    "sacrifice is the currency of the soul",
    "through sacrifice, the ordinary becomes extraordinary",
    "sacrifice is the bridge between dreams and reality",
    "in sacrifice, we discover what truly matters",

    // Storytelling elements and lessons learned
    "the hardest choices require the strongest wills",
    "in giving up everything, we sometimes gain even more",
    "true heroism is measured by what one is willing to give up",
    "the greatest gifts often come wrapped in loss",
    "in the crucible of loss, we forge our strongest selves",
    "sometimes, letting go is the bravest thing we can do",
    "the path of the hero is paved with personal cost",
    "in our darkest moments, we discover what we're truly made of",
    "the most profound changes often require the deepest cuts",
    "in choosing for others, we sometimes lose ourselves",

    // Quotes (without authors)
    "greater love hath no man than this, that a man lay down his life for his friends",
    "ask not what your country can do for you – ask what you can do for your country",
    "the needs of the many outweigh the needs of the few",
    "i am prepared to die, but there is no cause for which i am prepared to kill",
    "it is not hard to die for a friend, but it is hard to find a friend worth dying for",

    // Statements without directly using "sacrifice"
    "in giving, we receive more than we lose",
    "the truest measure of a person is what they're willing to give up",
    "sometimes, the hardest goodbye leads to the best hello",
    "the weight of the crown is felt most by those who wear it",
    "in the ashes of what we leave behind, new life often sprouts",
    "the deepest love is shown not in what we keep, but in what we let go",
    "heroes are forged in the fires of adversity",
    "the sweetest victories often come with the highest costs",
    "in choosing for others, we write our own legacy",
    "the noblest deeds are often done in silence and shadow",
    "true strength is shown in what we endure, not what we possess",
    "in the garden of life, pruning allows for new growth",
    "the most valuable things cannot be bought, only earned through giving",
    "in the equation of love, sometimes subtraction leads to multiplication",
    "the brightest lights often burn at both ends"
];

export const SacrificeThemeStatementTableName = "sacrifice theme statement";

export class SacrificeThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = SacrificeThemeStatementTableName;
        this.addEntriesFromList(sacrificeThemeStatements);
    }
}