import {Table} from "../../table";

const afterlifeThemeStatements = [
    "the afterlife serves as a mirror reflecting the choices made in life",
    "death is not the end, but a new beginning in a different realm",
    "the boundary between life and afterlife is more permeable than we imagine",
    "our actions in life shape our experience in the afterlife",
    "the afterlife challenges our preconceptions about existence and morality",
    "in the afterlife, we confront the unresolved issues from our earthly lives",
    "the concept of an afterlife offers hope and comfort in the face of mortality",
    "the afterlife reveals the true nature of a person's soul",
    "time and space operate differently in the afterlife, altering our perception of reality",
    "the afterlife serves as a platform for redemption and second chances",
    "what lies beyond death shapes how we live",
    "the eternal soul transcends physical existence",
    "karma dictates our fate in the great beyond",
    "unfinished business keeps spirits tethered to the mortal world",
    "the veil between worlds thins at pivotal moments",
    "judgment awaits all in the realm beyond",
    "love persists even after the heart stops beating",
    "memories are the bridge between life and eternity",
    "the journey of the soul continues after the body's demise",
    "redemption is possible even after the final breath",
    "to die will be an awfully big adventure",
    "death is but the next great adventure",
    "i do not fear death. i had been dead for billions and billions of years before i was born, and had not suffered the slightest inconvenience from it",
    "death cannot stop true love. all it can do is delay it for a while",
    "we are all just walking each other home",
    "life is pleasant. death is peaceful. it's the transition that's troublesome",
    "to the well-organized mind, death is but the next great adventure",
    "do not stand at my grave and weep. i am not there. i do not sleep",
    "our dead are never dead to us, until we have forgotten them"
];

export const AfterlifeThemeStatementTableName = "Afterlife theme statement";

export class AfterlifeThemeStatementTable extends Table{
    constructor() {
        super();
        this.title = AfterlifeThemeStatementTableName;
        this.addEntriesFromList(afterlifeThemeStatements);
    }
}