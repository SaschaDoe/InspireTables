import {Table} from "../../table";

const revengeThemeStatements = [
    "the sweetest fruit often grows from the bitterest soil of past wrongs",
    "in seeking to punish others, we often wound ourselves more deeply",
    "the cycle of retribution spins endlessly, grinding both victim and perpetrator",
    "justice served cold loses its flavor, leaving only the aftertaste of regret",
    "the sword of vengeance has two edges, one of which wounds the wielder",
    "in the ledger of grievances, every entry demands a costly payment",
    "the scales of retribution are rarely balanced, often tipping towards further injustice",
    "the poison of resentment corrodes the vessel that carries it",
    "in the pursuit of settling old scores, we often incur new debts",
    "the fire of retaliation burns not only its target but also the one who lights it",
    "karma has no menu. you get served what you deserve",
    "an eye for an eye leaves the whole world blind",
    "before you embark on a journey of retribution, dig two graves",
    "if you prick us, do we not bleed? if you tickle us, do we not laugh? if you poison us, do we not die? and if you wrong us, shall we not seek redress?",
    "resentment is like drinking poison and waiting for the other person to die",
    "he who seeks vengeance must dig two graves: one for his enemy and one for himself",
    "the best revenge is to be unlike him who performed the injury",
    "living well is the best retribution",
    "i don't get mad, i get even",
    "if you spend your time hoping someone will suffer the consequences for what they did to your heart, then you're allowing them to hurt you a second time in your mind",
    "in taking retribution, a man is but even with his enemy; but in passing it over, he is superior",
    "to exact a just penalty is one thing, but to harbor unmitigated hatred is another",
    "when you begin a journey of retribution, start by digging two graves: one for your enemy, and one for yourself",
    "those who plot the destruction of others often perish in the attempt",
    "it is always better to forgive than to seek an eye for an eye",
    "success is the best retort to injury",
    "the axe forgets, but the tree remembers",
    "injuries may be forgiven, but not forgotten",
    "to seek retribution is to invite disaster upon oneself",
    "the man who strikes first admits that his ideas have given out",
    "bitterness is like cancer. it eats upon the host. but anger is like fire. it burns it all clean",
    "i can forgive, but i cannot forget, is only another way of saying, i will not forgive",
    "retribution often means that we eventually do to ourselves what we have done unto others",
    "returning the wrath of your enemies doubles your own burden",
    "in the long run, the sharpest weapon of all is a kind and gentle spirit",
    "to refrain from imitation is the best form of retribution",
    "the smallest act of kindness is worth more than the grandest intention",
    "darkness cannot drive out darkness; only light can do that. hate cannot drive out hate; only love can do that",
    "the noblest form of retort is to not resemble your adversary",
    "the best way to destroy an enemy is to make him a friend"
];

export const RevengeThemeStatementTableName = "Revenge theme statement";

export class RevengeThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = RevengeThemeStatementTableName;
        this.addEntriesFromList(revengeThemeStatements);
    }
}