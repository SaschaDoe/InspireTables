import {Table} from "../../table";

const freedomVsOppressionThemeStatements = [
    // Direct statements
    "freedom is not given, it is taken",
    "oppression thrives in the silence of the masses",
    "the price of freedom is eternal vigilance",
    "in the face of oppression, silence is complicity",
    "freedom without responsibility leads to chaos",
    "oppression begins where apathy takes root",

    // Storytelling elements and lessons learned
    "a single act of defiance can spark a revolution",
    "true liberation comes from within before it manifests without",
    "the chains of the mind are often stronger than those of the body",
    "in unity, the oppressed find strength to overcome their oppressors",
    "knowledge is the key that unlocks the shackles of ignorance",
    "the loudest voices for freedom often come from the quietest corners",
    "sometimes, the greatest act of rebellion is to simply exist and thrive",
    "liberation often comes at a cost, but the price of inaction is higher",
    "the journey from oppression to freedom is paved with small, daily acts of courage",
    "in helping others break free, we often find our own liberation",
    "man is born free, and everywhere he is in chains",
    "none are more hopelessly enslaved than those who falsely believe they are free",
    "freedom is never voluntarily given by the oppressor; it must be demanded by the oppressed",
    "until we are all free, we are none of us free",
    "the only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion",
    "the caged bird sings of things unknown, but longed for still",
    "in the darkest night, even the faintest star brings hope",
    "the weight of chains is felt most by those who have glimpsed life without them",
    "a whisper of truth can shatter the loudest lies",
    "the human spirit, once awakened, can move mountains",
    "in the face of injustice, silence is the voice of complicity",
    "the strongest walls are those we build in our minds",
    "a single spark of courage can ignite a wildfire of change",
    "the sweetest air is breathed by those who have known suffocation",
    "in unity, the weak become strong, and the voiceless find their song",
    "the mightiest empires crumble when the smallest voices unite",
    "true power lies not in control, but in empowering others",
    "the pen, wielded with conviction, can break the mightiest sword",
    "in the garden of humanity, conformity breeds weeds, while diversity blooms",
    "the greatest revolutions begin with a change in perception"
];

export const FreedomVsOppressionThemeStatementTableName = "Freedom vs Oppression theme statement";

export class FreedomVsOppressionThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = FreedomVsOppressionThemeStatementTableName;
        this.addEntriesFromList(freedomVsOppressionThemeStatements);
    }
}