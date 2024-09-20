import {Table} from "../../table";

const starCrossedLoversThemeStatements = [
    "some loves are written in the stars, yet challenged by earthly constraints",
    "destiny brings them together, but fate conspires to keep them apart",
    "their hearts beat as one, while the world pulls them in opposite directions",
    "in defiance of society, family, and fortune, their love burns brighter",
    "across battle lines and bloodlines, their forbidden bond endures",
    "time, distance, and circumstance conspire against them, yet their love persists",
    "theirs is a tale of passion that dares to challenge the very foundations of their world",
    "in a realm where their union is forbidden, they find strength in each other",
    "against all odds, against all reason, their hearts remain intertwined",
    "society may deem their love impossible, but their souls know no such boundaries",
    "two hearts, one soul, divided by an unforgiving world",
    "in the face of adversity, their love becomes an act of rebellion",
    "caught between duty and desire, they choose a path fraught with peril",
    "the universe conspires to separate them, yet their bond defies cosmic forces",
    "their love story is written with tears, whispers, and stolen moments",
    "for never was a story of more woe than this of juliet and her romeo",
    "the course of true love never did run smooth",
    "i would rather share one lifetime with you than face all the ages of this world alone",
    "if you love someone, you are always joined with them – in joy, in absence, in solitude, in silence",
    "love is heavy and light, bright and dark, hot and cold, sick and healthy, asleep and awake- its everything except what it is!",
    "my bounty is as boundless as the sea, my love as deep; the more i give to thee, the more i have, for both are infinite",
    "don't waste your love on somebody who doesn't value it",
    "these violent delights have violent ends",
    "love is a smoke made with the fume of sighs",
    "i love you. remember. they cannot take it",
    "we loved with a love that was more than love",
    "i have spread my dreams under your feet. tread softly because you tread on my dreams",
    "when you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible",
    "if equal affection cannot be, let the more loving one be me",
    "whatever our souls are made of, his and mine are the same",
    "i am half agony, half hope",
    "you pierce my soul. i am half agony, half hope. tell me not that i am too late",
    "if i loved you less, i might be able to talk about it more",
    "i wish i knew how to quit you",
    "i carry your heart with me (i carry it in my heart)",
    "we accept the love we think we deserve",
    "it was love at first sight, at last sight, at ever and ever sight",
    "i loved her against reason, against promise, against peace, against hope, against happiness, against all discouragement that could be",
    "you and i, it's as though we have been taught to kiss in heaven and sent down to earth together, to see if we know what we were taught",
    "i fell in love the way you fall asleep: slowly, and then all at once"
];

export const StarCrossedLoversThemeStatementTableName = "Star-Crossed Lovers theme statement";

export class StarCrossedLoversThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = StarCrossedLoversThemeStatementTableName;
        this.addEntriesFromList(starCrossedLoversThemeStatements);
    }
}