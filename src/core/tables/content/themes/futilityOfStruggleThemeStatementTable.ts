import {Table} from "../../table";

const futilityOfStruggleThemeStatements = [
    "sometimes, the harder we fight, the deeper we sink",
    "in the face of inevitability, resistance becomes a hollow gesture",
    "the illusion of control often masks the reality of powerlessness",
    "some battles are lost before they even begin",
    "the universe remains indifferent to our greatest efforts",
    "in the grand scheme, our struggles are but ripples on an infinite ocean",
    "the path of least resistance often leads to the same destination",
    "against the tide of fate, even the strongest swimmer tires",
    "the most exhausting battles are those we wage against the inevitable",
    "in acceptance lies peace; in resistance, endless torment",
    "rage, rage against the dying of the light",
    "tomorrow, and tomorrow, and tomorrow, creeps in this petty pace from day to day",
    "life's but a walking shadow, a poor player that struts and frets his hour upon the stage and then is heard no more",
    "all the world's a stage, and all the men and women merely players",
    "we are here on earth to fart around, and don't let anybody tell you different",
    "it is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change",
    "the mass of men lead lives of quiet desperation",
    "we're all going to die, all of us, what a circus! That alone should make us love each other but it doesn't",
    "existence precedes essence",
    "hell is other people",
    "one must imagine Sisyphus happy",
    "i have of late, but wherefore I know not, lost all my mirth",
    "life is a tale told by an idiot, full of sound and fury, signifying nothing",
    "the world breaks everyone, and afterward, some are strong at the broken places",
    "the only way to deal with this life is to embrace the chaos",
    "we're all mad here",
    "it was the best of times, it was the worst of times",
    "in the midst of winter, I found there was, within me, an invincible summer",
    "do not go gentle into that good night",
    "the cure for pain is in the pain",
    "i became insane, with long intervals of horrible sanity",
    "the most merciful thing in the world, I think, is the inability of the human mind to correlate all its contents",
    "the sleep of reason produces monsters",
    "we live as we dream--alone",
    "everything was beautiful and nothing hurt",
    "all animals are equal, but some animals are more equal than others",
    "it was a pleasure to burn",
    "in the beginning, the universe was created. This has made a lot of people very angry and been widely regarded as a bad move",
    "so it goes",
    "i must not fear. Fear is the mind-killer"
];

export const FutilityOfStruggleThemeStatementTableName = "Futility of Struggle theme statement";

export class FutilityOfStruggleThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = FutilityOfStruggleThemeStatementTableName;
        this.addEntriesFromList(futilityOfStruggleThemeStatements);
    }
}