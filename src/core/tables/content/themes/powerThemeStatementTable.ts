import {Table} from "../../table";

const powerThemeStatements = [
    "in the hands of the wise, authority becomes a tool for positive change",
    "true strength lies not in domination, but in empowering others",
    "the mightiest empires are built on the foundations of ideas",
    "influence whispers while force shouts, yet the former often achieves more",
    "the most potent control is that which goes unnoticed by the controlled",
    "in the chess game of life, knowledge moves kings",
    "the pen can topple what the sword has built",
    "those who stand atop the pyramid often forget the shoulders they climbed upon",
    "real leadership is earned, not appointed",
    "the strongest chains are those we willingly wear",
    "true authority comes from respect, not fear",
    "in unity, the masses find a force that shakes empires",
    "the most dangerous weapon is a mind armed with reason",
    "wealth whispers instructions that armies hasten to obey",
    "the ability to inspire is mightier than the power to command",
    "nearly all men can stand adversity, but if you want to test a man's character, give him power",
    "knowledge is power. information is liberating. education is the premise of progress, in every society, in every family",
    "the measure of a man is what he does with power",
    "when the whole world is silent, even one voice becomes powerful",
    "the day the power of love overrules the love of power, the world will know peace",
    "the most common way people give up their power is by thinking they don't have any",
    "if you want to test a man's character, give him power",
    "there is no greater power than a community discovering what it cares about",
    "the secret of change is to focus all of your energy, not on fighting the old, but on building the new",
    "the ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy",
    "to handle yourself, use your head; to handle others, use your heart",
    "the difference between a boss and a leader: a boss says 'go!' a leader says 'let's go!'",
    "if you want to go fast, go alone. if you want to go far, go together",
    "where there is power, there is resistance",
    "i am not interested in picking up crumbs of compassion thrown from the table of someone who considers himself my master. i want the full menu of rights",
    "in politics, if you want anything said, ask a man. if you want anything done, ask a woman",
    "the single story creates stereotypes, and the problem with stereotypes is not that they are untrue, but that they are incomplete",
    "those who deny freedom to others deserve it not for themselves",
    "the only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion",
    "our lives begin to end the day we become silent about things that matter",
    "decisions are made by those who show up",
    "whoever fights monsters should see to it that in the process he does not become a monster",
    "the world suffers a lot. not because of the violence of bad people, but because of the silence of good people",
    "the supreme art of war is to subdue the enemy without fighting",
    "the price of greatness is responsibility"
];

export const PowerThemeStatementTableName = "Power theme statement";

export class PowerThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = PowerThemeStatementTableName;
        this.addEntriesFromList(powerThemeStatements);
    }
}