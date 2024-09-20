import {Table} from "../../table";

const catAndMouseThemeStatements = [
    "in the game of cat and mouse, the chase is often more thrilling than the capture",
    "power dynamics shift constantly in a relentless pursuit",
    "the hunter and the hunted dance an eternal waltz",
    "in every chase, roles can reverse in the blink of an eye",
    "cat and mouse games reveal the thin line between predator and prey",
    "the thrill of the hunt is matched only by the excitement of evasion",
    "in a world of constant pursuit, survival becomes an art form",
    "the clever prey can often outsmart even the most determined hunter",
    "cat and mouse scenarios test the limits of strategy and endurance",
    "in the grand game of pursuit, patience often trumps speed",
    "the hunted knows the terrain better than the hunter",
    "in the dance of pursuit, each step could be a trap or an escape",
    "the game isn't over until one side admits defeat",
    "sometimes the best strategy is to hide in plain sight",
    "the pursued often becomes the pursuer",
    "in a chase, the difference between victory and defeat can be a split-second decision",
    "the most dangerous opponent is the one you underestimate",
    "survival often depends on outsmarting rather than outrunning",
    "in the world of strategy, appearances can be deceiving",
    "the best trap is the one that doesn't look like a trap at all",
    "sometimes winning means knowing when to stop running",
    "in a battle of wits, the cleverer player usually prevails",
    "the most intense battles are often fought in silence",
    "every move has a counter-move; every strategy, a counter-strategy",
    "sometimes the best way to win is to change the rules of the game",
    "in a world of predators and prey, adaptability is key to survival",
    "the greatest victories are often won through misdirection",
    "in the game of pursuit, knowing when to retreat is as important as knowing when to advance",
    "sometimes the mouse tricks the cat",
    "in the end, it's not about strength, but about outsmarting your opponent"
];

export const CatAndMouseThemeStatementTableName = "Cat and Mouse theme statement";

export class CatAndMouseThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = CatAndMouseThemeStatementTableName;
        this.addEntriesFromList(catAndMouseThemeStatements);
    }
}