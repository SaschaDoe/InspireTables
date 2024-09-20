import {Table} from "../../table";

const goodVsEvilThemeStatements = [
    "in the battle between light and darkness, each soul must choose its allegiance",
    "the line between virtue and vice is often thinner than we'd like to admit",
    "in every heart, a war rages between the angels of our better nature and the demons of our worst impulses",
    "the greatest conflicts are not between two people but between one person and himself",
    "in the face of injustice, neutrality is complicity",
    "the true measure of a person is how they treat those who can do nothing for them",
    "the road to perdition is paved with good intentions",
    "in times of moral crisis, silence is a statement",
    "the shadow proves the sunshine",
    "one man's hero is another man's villain",
    "the only thing necessary for the triumph of evil is for good men to do nothing",
    "there is no greatness where there is not simplicity, goodness, and truth",
    "the world is a dangerous place, not because of those who do evil, but because of those who look on and do nothing",
    "to see a World in a Grain of Sand, and a Heaven in a Wild Flower",
    "there is some good in the worst of us and some evil in the best of us",
    "the line separating good and evil passes not through states, nor between classes, nor between political parties either – but right through every human heart",
    "it is not power that corrupts but fear. Fear of losing power corrupts those who wield it and fear of the scourge of power corrupts those who are subject to it",
    "the path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men",
    "he who fights with monsters should look to it that he himself does not become a monster",
    "the world isn't split into good people and Death Eaters. We've all got both light and dark inside us",
    "there are two ways to be fooled. One is to believe what isn't true; the other is to refuse to believe what is true",
    "the world is indeed full of peril, and in it there are many dark places; but still there is much that is fair",
    "all that is necessary for evil to succeed is that good men do nothing",
    "it is our choices that show what we truly are, far more than our abilities",
    "the truth is rarely pure and never simple",
    "there is nothing either good or bad, but thinking makes it so",
    "the road to hell is paved with good intentions",
    "the devil's finest trick is to persuade you that he does not exist",
    "the only way to deal with this world is to embrace the chaos",
    "in keeping silent about evil, in burying it so deep within us that no sign of it appears on the surface, we are implanting it, and it will rise up a thousand fold in the future",
    "the sad truth is that most evil is done by people who never make up their minds to be good or evil",
    "the welfare of the people is the highest law",
    "there are no gray areas when it comes to survival",
    "we can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light",
    "the ultimate tragedy is not the oppression and cruelty by the bad people but the silence over that by the good people",
    "the greatest trick the devil ever pulled was convincing the world he didn't exist",
    "the darkest places in hell are reserved for those who maintain their neutrality in times of moral crisis",
    "it is better to be a warrior in a garden than a gardener in a war",
    "the hottest places in hell are reserved for those who, in times of great moral crisis, maintain their neutrality",
    "the price of greatness is responsibility"
];

export const GoodVsEvilThemeStatementTableName = "Good vs Evil theme statement";

export class GoodVsEvilThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = GoodVsEvilThemeStatementTableName;
        this.addEntriesFromList(goodVsEvilThemeStatements);
    }
}