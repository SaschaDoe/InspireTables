import {Table} from "../../table";

const loveTriangleThemeStatements = [
    "the heart's capacity for love often exceeds societal expectations",
    "in matters of the heart, choices can feel impossibly difficult",
    "passion and loyalty wage an eternal battle within the human soul",
    "the line between friendship and romance is often blurrier than we admit",
    "sometimes, the greatest act of love is letting go",
    "emotional entanglements reveal our deepest vulnerabilities and strengths",
    "the complexity of human relationships defies simple categorization",
    "in the crucible of competing affections, true character is revealed",
    "forbidden fruit tastes sweetest, but often leaves a bitter aftertaste",
    "the heart wants what it wants, logic and reason be damned",
    "love's path is rarely straight, often branching in unexpected directions",
    "in the dance of romance, three steps can be more challenging than two",
    "divided loyalties test the boundaries of trust and commitment",
    "sometimes, the hardest person to be honest with is yourself",
    "the heart's desires and moral obligations don't always align",
    "if you love two people at the same time, choose the second. because if you really loved the first one, you wouldn't have fallen for the second",
    "the heart has its reasons which reason knows nothing of",
    "in love, there is always one who kisses and one who offers the cheek",
    "it is not a lack of love, but a lack of friendship that makes unhappy marriages",
    "love is so short, forgetting is so long",
    "the course of true love never did run smooth",
    "the greatest happiness of life is the conviction that we are loved",
    "there is always madness in love. but there is also always some reason in madness",
    "we accept the love we think we deserve",
    "you don't love someone because they're perfect, you love them in spite of the fact that they're not",
    "the one you love and the one who loves you are never, ever the same person",
    "love is a fire. but whether it is going to warm your hearth or burn down your house, you can never tell",
    "to love at all is to be vulnerable",
    "the essence of romantic love is that wonderful beginning, after which sadness and impossibility may become the rule",
    "the worst way to miss someone is to be sitting right beside them knowing you can't have them",
    "there is no remedy for love but to love more",
    "we are most alive when we're in love",
    "love is an untamed force. when we try to control it, it destroys us. when we try to imprison it, it enslaves us",
    "the giving of love is an education in itself",
    "love is the emblem of eternity; it confounds all notion of time",
    "where there is love there is life",
    "it takes courage to love, but pain through love is the purifying fire which those who love generously know",
    "the truth is, everyone is going to hurt you. you just got to find the ones worth suffering for",
    "one is loved because one is loved. no reason is needed for loving",
    "the hunger for love is much more difficult to remove than the hunger for bread"
];

export const LoveTriangleThemeStatementTableName = "Love Triangle theme statement";

export class LoveTriangleThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = LoveTriangleThemeStatementTableName;
        this.addEntriesFromList(loveTriangleThemeStatements);
    }
}