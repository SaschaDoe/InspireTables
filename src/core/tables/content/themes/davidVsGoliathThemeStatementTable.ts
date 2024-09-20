import {Table} from "../../table";

const davidVsGoliathThemeStatements = [
    "the underdog's triumph is a testament to human spirit",
    "size and strength are no match for courage and cunning",
    "in the face of overwhelming odds, true character is revealed",
    "victory often goes not to the strongest, but to the most determined",
    "the greatest battles are won in the mind before they are fought on the field",
    "sometimes, the smallest stone can topple the mightiest giant",
    "faith and conviction can overcome seemingly insurmountable obstacles",
    "the power of the underdog lies in being underestimated",
    "innovation and strategy can level any playing field",
    "in the struggle against giants, we discover our own strength",
    "it's not the size of the dog in the fight, it's the size of the fight in the dog",
    "the bigger they are, the harder they fall",
    "impossible is just a big word thrown around by small men",
    "the only giant we have to fear is the one inside our own minds",
    "strength does not come from physical capacity. It comes from an indomitable will",
    "every Goliath has their weakness; every David has their stone",
    "the key to defeating giants is finding their Achilles' heel",
    "sometimes you have to fight bigger than you are",
    "great achievement often springs from great adversity",
    "the most unlikely heroes are often the most inspiring",
    "never tell me the odds",
    "it's not about the size of the man in the fight, but the size of the fight in the man",
    "the greatest glory in living lies not in never falling, but in rising every time we fall",
    "if you think you are too small to make a difference, try sleeping with a mosquito",
    "don't judge me by my successes, judge me by how many times I fell down and got back up again",
    "the secret of happiness is freedom, the secret of freedom is courage",
    "courage is not the absence of fear, but the triumph over it",
    "success is not final, failure is not fatal: it is the courage to continue that counts",
    "the ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy",
    "it is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better"
];

export const DavidVsGoliathThemeStatementTableName = "David vs Goliath theme statement";

export class DavidVsGoliathThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = DavidVsGoliathThemeStatementTableName;
        this.addEntriesFromList(davidVsGoliathThemeStatements);
    }
}