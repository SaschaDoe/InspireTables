import {Table} from "../../table";

const changeThemeStatements = [
    "the only constant in life is transformation",
    "growth demands a temporary surrender of security",
    "in the crucible of adversity, we forge our new selves",
    "yesterday's truths may be tomorrow's misconceptions",
    "evolution is the dance of adaptation to life's ever-shifting rhythms",
    "the butterfly emerges only after the caterpillar's world dissolves",
    "rivers carve canyons not through force, but persistent flow",
    "our choices today shape the landscape of our tomorrows",
    "in letting go of who we were, we create space for who we might become",
    "progress is impossible without deviation from the norm",
    "be the change you wish to see in the world",
    "the secret of change is to focus all of your energy, not on fighting the old, but on building the new",
    "to improve is to change; to be perfect is to change often",
    "those who cannot change their minds cannot change anything",
    "everyone thinks of changing the world, but no one thinks of changing himself",
    "nothing is so painful to the human mind as a great and sudden change",
    "the measure of intelligence is the ability to change",
    "if you don't like something, change it. If you can't change it, change your attitude",
    "the world as we have created it is a process of our thinking. It cannot be changed without changing our thinking",
    "yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself",
    "life belongs to the living, and he who lives must be prepared for changes",
    "the only way to make sense out of change is to plunge into it, move with it, and join the dance",
    "you never change things by fighting the existing reality. To change something, build a new model that makes the existing model obsolete",
    "the pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails",
    "if you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward",
    "you must be the change you wish to see in the world",
    "the snake which cannot cast its skin has to die. As well the minds which are prevented from changing their opinions; they cease to be mind",
    "for what it's worth: it's never too late or, in my case, too early to be whoever you want to be",
    "i alone cannot change the world, but I can cast a stone across the waters to create many ripples",
    "the art of life lies in a constant readjustment to our surroundings",
    "if you want to make enemies, try to change something",
    "the bamboo that bends is stronger than the oak that resists",
    "we cannot become what we want by remaining what we are",
    "it is not the strongest or the most intelligent who will survive but those who can best manage change",
    "the only way to make sense out of change is to plunge into it, move with it, and join the dance",
    "progress is impossible without change, and those who cannot change their minds cannot change anything",
    "nothing endures but change",
    "i can't go back to yesterday because I was a different person then",
    "the only way to survive is to embrace change and adapt",
    "you never change your life until you step out of your comfort zone; change begins at the end of your comfort zone"
];

export const ChangeThemeStatementTableName = "Change theme statement";

export class ChangeThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = ChangeThemeStatementTableName;
        this.addEntriesFromList(changeThemeStatements);
    }
}