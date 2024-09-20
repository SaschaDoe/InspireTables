import {Table} from "../../table";

const invasionThemeStatements = [
    "the walls of normalcy crumble when the unfamiliar arrives uninvited",
    "in the face of encroachment, even the familiar becomes alien",
    "the drums of change often sound like marching feet",
    "when strangers cross borders, worlds collide",
    "the sanctity of home is shattered by unwelcome intrusion",
    "in the wake of conquest, cultures clash and merge",
    "the price of unpreparedness is paid in sovereignty",
    "the tide of history often comes as a flood, not a trickle",
    "in times of incursion, unity becomes survival",
    "the landscape of identity shifts when outsiders plant their flags",
    "all that is necessary for evil to triumph is for good men to do nothing",
    "the only thing we have to fear is fear itself",
    "give me liberty, or give me death",
    "united we stand, divided we fall",
    "the tree of liberty must be refreshed from time to time with the blood of patriots and tyrants",
    "ask not what your country can do for you – ask what you can do for your country",
    "from this day to the ending of the world, we in it shall be remembered",
    "we shall defend our island, whatever the cost may be",
    "the only thing necessary for the triumph of evil is for good men to do nothing",
    "i have nothing to offer but blood, toil, tears, and sweat",
    "we shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets",
    "it is not the strongest of the species that survives, nor the most intelligent that survives. It is the one that is most adaptable to change",
    "the supreme art of war is to subdue the enemy without fighting",
    "if you know the enemy and know yourself, you need not fear the result of a hundred battles",
    "in war, truth is the first casualty",
    "the roots of violence: wealth without work, pleasure without conscience, knowledge without character, commerce without morality, science without humanity, worship without sacrifice, politics without principles",
    "civilization is like a thin layer of ice upon a deep ocean of chaos and darkness",
    "the past was erased, the erasure was forgotten, the lie became truth",
    "war does not determine who is right - only who is left",
    "if you want peace, prepare for war",
    "the enemy of my enemy is my friend",
    "those who do not remember the past are condemned to repeat it",
    "a house divided against itself cannot stand",
    "the price of freedom is eternal vigilance",
    "we sleep safely at night because rough men stand ready to visit violence on those who would harm us",
    "the best defense is a good offense",
    "in times of peace, prepare for war",
    "when the enemy is making a false movement we must take good care not to interrupt him",
    "keep your friends close, but your enemies closer",
    "the greatest victory is that which requires no battle"
];

export const InvasionThemeStatementTableName = "Invasion theme statement";

export class InvasionThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = InvasionThemeStatementTableName;
        this.addEntriesFromList(invasionThemeStatements);
    }
}