import {Table} from "../../table";

const loyaltyThemeStatements = [
    "true allegiance is tested not in times of comfort, but in moments of adversity",
    "unwavering support often comes at a personal cost",
    "the strongest bonds are forged through shared struggles",
    "faithfulness to principles can sometimes mean standing alone",
    "in a world of shifting alliances, constancy becomes a rare virtue",
    "the depth of one's commitment is revealed in the face of temptation",
    "steadfast dedication can be both a strength and a vulnerability",
    "true fidelity extends beyond mere words to consistent actions",
    "the most profound connections withstand the test of time and tribulation",
    "unwavering support can be a beacon in someone's darkest hour",
    "the essence of trust lies in reliability during uncertain times",
    "sometimes, the greatest act of devotion is knowing when to let go",
    "in the crucible of difficult choices, true allegiances are revealed",
    "the strength of a bond is measured by what it can endure",
    "steadfast support can be a transformative force in one's life",
    "the only people I owe my loyalty to are those who never made me question theirs",
    "you don't earn loyalty in a day. you earn loyalty day by day",
    "if you can't value loyalty, you're not ready for love",
    "distance means so little when someone means so much",
    "i don't like to give up on people when they need someone not to give up on them",
    "the strength of a family, like the strength of an army, is in its loyalty to each other",
    "you cannot buy the revolution. you cannot make the revolution. you can only be the revolution",
    "if put to the pinch, an ounce of loyalty is worth a pound of cleverness",
    "the highest compact we can make with our fellow is - 'Let there be truth between us two forevermore'",
    "i'll take fifty percent efficiency to get one hundred percent loyalty",
    "a person is born with feelings of envy and hate. if he gives way to them, they will lead him to violence and crime, and any sense of loyalty and good faith will be abandoned",
    "hold faithfulness and sincerity as first principles",
    "you don't earn loyalty in a day. you earn loyalty day by day",
    "the glory of friendship is not the outstretched hand, not the kindly smile, nor the joy of companionship; it is the spiritual inspiration that comes to one when you discover that someone else believes in you and is willing to trust you with a friendship",
    "i look for these qualities and characteristics in people. honesty is number one, respect, and absolutely the third would have to be loyalty",
    "unless you can find some sort of loyalty, you cannot find unity and peace in your active living",
    "where there is loyalty, weapons are of no use",
    "the foundation stones for a balanced success are honesty, character, integrity, faith, love and loyalty",
    "it isn't an easy thing to give your loyalty to someone you don't know, especially when that person chooses to reveal nothing of himself",
    "loyalty and devotion lead to bravery. bravery leads to the spirit of self-sacrifice. the spirit of self-sacrifice creates trust in the power of love",
    "if you cheat on someone who is willing to do anything for you, you actually cheated yourself out of true loyalty",
    "the first step in the evolution of ethics is a sense of solidarity with other human beings",
    "love is friendship that has caught fire. it is quiet understanding, mutual confidence, sharing and forgiving. it is loyalty through good and bad times. it settles for less than perfection and makes allowances for human weaknesses",
    "my whole thing is loyalty. loyalty over royalty; word is bond",
    "it gives me strength to have somebody to fight for; i can never fight for myself, but, for others, i can kill"
];

export const LoyaltyThemeStatementTableName = "Loyalty theme statement";

export class LoyaltyThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = LoyaltyThemeStatementTableName;
        this.addEntriesFromList(loyaltyThemeStatements);
    }
}