import {Table} from "../../table";

const balanceThemeStatements = [
    "balance is the key to a harmonious existence",
    "in nature, equilibrium is constantly sought and rarely achieved",
    "true balance lies not in perfection, but in the harmony of opposites",
    "life is a tightrope walk between conflicting desires and responsibilities",
    "balance requires constant adjustment, like a sailor trimming sails",
    "in balance, we find strength; in imbalance, we find growth",
    "the art of living lies in the fine equilibrium between holding on and letting go",
    "balance is not something you find, it's something you create",
    "in the dance of life, grace comes from poise amidst movement",
    "the universe seeks equilibrium in all things, from atoms to galaxies",
    "too much of anything becomes its opposite",
    "moderation is the silken string running through the pearl chain of all virtues",
    "the middle path is the way to wisdom",
    "excess on one side leads to deficiency on the other",
    "harmony arises when competing forces find their proper measure",
    "like a scale, life constantly seeks to even out",
    "in the push and pull of existence, find your center",
    "the wise know how to alternate between action and rest",
    "a well-lived life is a series of well-struck chords",
    "stability comes from constant micro-adjustments",
    "to everything there is a season, and a time to every purpose under heaven",
    "the key is not to prioritize what's on your schedule, but to schedule your priorities",
    "juggling isn't about catching, it's about throwing",
    "life is like riding a bicycle, to keep your balance you must keep moving",
    "the calm in one's life is the outward sign of inner equilibrium",
    "happiness is not a matter of intensity but of balance, order, rhythm and harmony",
    "the best and safest thing is to keep a balance in your life",
    "there is no decision that we can make that doesn't come with some sort of trade-off",
    "equilibrium is the state in which opposing forces neutralize each other",
    "like a river, find your way between the banks of excess and deficiency"
];

export const BalanceThemeStatementTableName = "Balance theme statement";

export class BalanceThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = BalanceThemeStatementTableName;
        this.addEntriesFromList(balanceThemeStatements);
    }
}