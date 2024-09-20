import {Table} from "../../../table";

export const thrillerRealThemes = [
    "in the game of cat and mouse, the mouse never knows when it's about to be caught",
    "trust is a luxury few can afford in a world of deception",
    "the greatest threats often lurk in plain sight",
    "every tick of the clock brings us closer to the inevitable",
    "in the world of espionage, loyalty is always questionable",
    "sometimes, the only way out is through the heart of darkness",
    "paranoia is just a heightened state of awareness",
    "the line between justice and revenge is thinner than you think",
    "in a high-stakes game, everyone has something to lose",
    "the past always catches up, no matter how fast you run",
    "in the face of fear, true character is revealed",
    "sometimes, the most dangerous enemy is the one inside your own mind",
    "in a world of conspiracies, the truth is the ultimate weapon",
    "when push comes to shove, survival instincts take over",
    "the higher you climb, the farther you have to fall",
    "in the underworld, power is the only currency that matters",
    "behind every locked door lies a potential threat",
    "in the heat of pursuit, milliseconds can mean the difference between life and death",
    "sometimes, the only way to catch a predator is to become one",
    "in a world of shadows, trust your instincts above all else",
    "the greatest thrill is dancing on the edge of disaster",
    "in the game of deception, even the deceiver can be deceived",
    "when the stakes are life and death, morality becomes a luxury",
    "in a web of lies, the truth is both salvation and damnation",
    "the calm before the storm is often the most terrifying moment of all"
]

export const ThrillerRealThemesTableName = "Thriller Real Themes"

export class ThrillerRealThemeTable extends Table{
    constructor() {
        super();
        this.title = ThrillerRealThemesTableName;
        this.addEntriesFromList(thrillerRealThemes);
    }
}