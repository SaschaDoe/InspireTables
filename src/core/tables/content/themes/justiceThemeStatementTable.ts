import {Table} from "../../table";

const justiceThemeStatements = [
    "equality before the law is the cornerstone of a fair society",
    "true fairness considers both the letter and the spirit of the law",
    "in the pursuit of what's right, we often confront difficult moral choices",
    "the scales must balance for society to function harmoniously",
    "accountability is essential for maintaining social order",
    "the law is a living entity, evolving with societal values",
    "mercy and punishment often walk a fine line",
    "in an ideal world, actions would always have proportionate consequences",
    "the courtroom is a battleground for competing truths",
    "societal progress is measured by how we treat the most vulnerable",
    "true equity goes beyond mere legal equality",
    "rehabilitation and retribution are often at odds in penal systems",
    "the quest for fairness is a never-ending journey",
    "power and morality must be balanced for true societal harmony",
    "ethical considerations should guide the application of laws",
    "the arc of the moral universe is long, but it bends toward justice",
    "injustice anywhere is a threat to justice everywhere",
    "for there to be peace, there must first be justice",
    "the law is reason, free from passion",
    "justice will not be served until those who are unaffected are as outraged as those who are",
    "justice delayed is justice denied",
    "in matters of truth and justice, there is no difference between large and small problems",
    "if you tremble with indignation at every injustice, then you are a comrade of mine",
    "there may be times when we are powerless to prevent injustice, but there must never be a time when we fail to protest",
    "it is better that ten guilty persons escape than that one innocent suffer",
    "true peace is not merely the absence of tension; it is the presence of justice",
    "the dead cannot cry out for justice. it is a duty of the living to do so for them",
    "until the great mass of the people shall be filled with the sense of responsibility for each other's welfare, social justice can never be attained",
    "the moral arc of the universe bends at the elbow of justice",
    "we must not confuse dissent with disloyalty",
    "the opposite of poverty is not wealth. the opposite of poverty is justice",
    "ethics is knowing the difference between what you have a right to do and what is right to do",
    "in a gentle way, you can shake the world",
    "the ultimate tragedy is not the oppression and cruelty by the bad people but the silence over that by the good people",
    "courage is of no value unless accompanied by justice",
    "if we do not maintain justice, justice will not maintain us",
    "freedom and justice cannot be parceled out in pieces to suit political convenience",
    "there is no crueler tyranny than that which is perpetuated under the shield of law and in the name of justice",
    "an eye for an eye will only make the whole world blind",
    "the right to do something does not mean that doing it is right"
];

export const JusticeThemeStatementTableName = "Justice theme statement";

export class JusticeThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = JusticeThemeStatementTableName;
        this.addEntriesFromList(justiceThemeStatements);
    }
}