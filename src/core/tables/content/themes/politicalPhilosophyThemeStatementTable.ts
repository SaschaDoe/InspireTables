import {Table} from "../../table";

const politicalPhilosophyThemeStatements = [
    "the social contract is renegotiated with each generation",
    "true freedom lies in the balance between individual rights and collective responsibility",
    "power, unchecked, inevitably corrupts those who wield it",
    "the ideal society is one where justice and equality are not just aspirations, but realities",
    "governance is the art of balancing competing interests for the greater good",
    "the strength of a nation lies not in its military might, but in the well-being of its citizens",
    "democracy is not a spectator sport; it requires active participation",
    "in the realm of ideas, revolution is perpetual",
    "the most dangerous tyranny is that which masquerades as virtue",
    "true leadership is service to the people, not dominion over them",
    "the foundations of a just society are built on education, empathy, and equal opportunity",
    "dissent is not disloyalty; it is the lifeblood of progress",
    "the measure of a society is found in how it treats its most vulnerable members",
    "liberty without responsibility breeds chaos; authority without accountability breeds tyranny",
    "the pen, wielded with wisdom, is mightier than any sword",
    "man is born free, and everywhere he is in chains",
    "the price of freedom is eternal vigilance",
    "i have a dream that one day this nation will rise up and live out the true meaning of its creed",
    "absolute power corrupts absolutely",
    "those who would give up essential liberty to purchase a little temporary safety, deserve neither liberty nor safety",
    "the best argument against democracy is a five-minute conversation with the average voter",
    "one has a moral responsibility to disobey unjust laws",
    "a house divided against itself cannot stand",
    "ask not what your country can do for you – ask what you can do for your country",
    "the only thing necessary for the triumph of evil is for good men to do nothing",
    "no man is good enough to govern another man without the other's consent",
    "the oppressed are allowed once every few years to decide which particular representatives of the oppressing class are to represent and repress them",
    "the ballot is stronger than the bullet",
    "injustice anywhere is a threat to justice everywhere",
    "where you see wrong or inequality or injustice, speak out, because this is your country. this is your democracy. make it. protect it. pass it on",
    "the care of human life and happiness, and not their destruction, is the first and only object of good government",
    "a nation's greatness is measured by how it treats its weakest members",
    "if you want to rebel, rebel from inside the system. that's much more powerful than rebelling outside the system",
    "the most common way people give up their power is by thinking they don't have any",
    "the duty of a patriot is to protect his country from its government",
    "when the people fear the government, there is tyranny. when the government fears the people, there is liberty",
    "we have it in our power to begin the world over again",
    "government of the people, by the people, for the people, shall not perish from the earth",
    "the death of democracy is not likely to be an assassination from ambush. it will be a slow extinction from apathy, indifference, and undernourishment",
    "change will not come if we wait for some other person or some other time. we are the ones we've been waiting for. we are the change that we seek"
];

export const PoliticalPhilosophyThemeStatementTableName = "Political Philosophy theme statement";

export class PoliticalPhilosophyThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = PoliticalPhilosophyThemeStatementTableName;
        this.addEntriesFromList(politicalPhilosophyThemeStatements);
    }
}