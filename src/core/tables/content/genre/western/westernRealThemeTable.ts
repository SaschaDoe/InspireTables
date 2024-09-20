import {Table} from "../../../table";

export const westernRealThemes = [
    "out here, a man settles his own problems",
    "there's right and there's wrong. you gotta do one or the other. you do the one and you're living. you do the other and you may be walking around, but you're dead as a beaver hat",
    "when you pull a gun, kill a man",
    "a man's got to have a code, a creed to live by",
    "civilization ends at the city limits",
    "out here, due process is a bullet",
    "a man's gotta do what a man's gotta do",
    "there are two kinds of people in this world: those with loaded guns and those who dig",
    "in the west, when the legend becomes fact, print the legend",
    "courage is being scared to death but saddling up anyway",
    "a man who won't stand for something will fall for anything",
    "never trust a man who doesn't drink",
    "a good horse is worth more than riches",
    "sometimes you gotta be a bastard to be a man",
    "the only good indian is a dead indian",
    "i've never killed a man who didn't deserve it",
    "you can't start a new life with a dirty gun",
    "out here, a man's word is his bond",
    "in the old west, you were either the fastest gun or the smartest",
    "the measure of a man is how he treats someone who can do him absolutely no good",
    "the west was built on violence, but it was tamed by justice",
    "sometimes a man's gotta be big enough to see how small he is",
    "the difference between a brave man and a coward is a coward thinks twice before jumping in the cage with a lion. the brave man doesn't know what a lion is",
    "a gun is a tool, marian; no better or no worse than any other tool: an axe, a shovel or anything. a gun is as good or as bad as the man using it",
    "when you side with a man, you stay with him. and if you can't do that, you're like some animal"
]

export const WesternRealThemesTableName = "Western Real Themes"

export class WesternRealThemeTable extends Table{
    constructor() {
        super();
        this.title = WesternRealThemesTableName;
        this.addEntriesFromList(westernRealThemes);
    }
}