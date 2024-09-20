import {Table} from "../../table";

const truthThemeStatements = [
    "in a world of deception, honesty is a revolutionary act",
    "the light of veracity often illuminates uncomfortable realities",
    "what is right is not always popular, and what is popular is not always right",
    "integrity has no need of rules",
    "facts do not cease to exist because they are ignored",
    "the first step in the acquisition of wisdom is silence, the second listening, the third memory, the fourth practice, the fifth teaching others",
    "sincerity is the way of heaven",
    "a clear conscience is the softest pillow",
    "honesty is the first chapter in the book of wisdom",
    "reality is that which, when you stop believing in it, doesn't go away",
    "if you tell the truth, you don't have to remember anything",
    "a lie can travel halfway around the world while the truth is putting on its shoes",
    "there are three types of lies -- lies, damn lies, and statistics",
    "the pure and simple truth is rarely pure and never simple",
    "in a time of deceit, telling the truth is a revolutionary act",
    "honesty is the best policy",
    "the high-minded man must care more for the truth than for what people think",
    "speak the truth, even if your voice shakes",
    "the greatest enemy of knowledge is not ignorance, it is the illusion of knowledge",
    "a half truth is a whole lie",
    "if you look for truth, you may find comfort in the end; if you look for comfort you will not get either comfort or truth",
    "to know what you know and what you do not know, that is true knowledge",
    "the truth will set you free, but first it will piss you off",
    "there's a world of difference between truth and facts. facts can obscure the truth",
    "the truth is rarely pure and never simple",
    "three things cannot be long hidden: the sun, the moon, and the truth",
    "if you do not tell the truth about yourself you cannot tell it about other people",
    "i'm for truth, no matter who tells it. i'm for justice, no matter who it's for or against",
    "a man is never more truthful than when he acknowledges himself a liar",
    "the truth is incontrovertible. malice may attack it, ignorance may deride it, but in the end, there it is",
    "everything we hear is an opinion, not a fact. everything we see is a perspective, not the truth",
    "seek not greatness, but seek truth and you will find both",
    "the truth is like a lion; you don't have to defend it. let it loose; it will defend itself",
    "if you shut up truth and bury it under the ground, it will but grow, and gather to itself such explosive power that the day it bursts through it will blow up everything in its way",
    "it is not what a lawyer tells me i may do; but what humanity, reason, and justice tell me i ought to do",
    "the object of the superior man is truth",
    "rather than love, than money, than fame, give me truth",
    "there are only two mistakes one can make along the road to truth; not going all the way, and not starting",
    "if you want to tell people the truth, make them laugh, otherwise they'll kill you",
    "in order to be effective truth must penetrate like an arrow - and that is likely to hurt"
];

export const TruthThemeStatementTableName = "Truth theme statement";

export class TruthThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = TruthThemeStatementTableName;
        this.addEntriesFromList(truthThemeStatements);
    }
}