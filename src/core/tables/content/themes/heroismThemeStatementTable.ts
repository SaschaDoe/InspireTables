import {Table} from "../../table";

const heroismThemeStatements = [
    "true courage is facing danger when you are afraid",
    "in the darkest times, one person's light can ignite hope in many",
    "greatness lies not in being strong, but in the right use of strength",
    "the ordinary person can rise to extraordinary heights in extraordinary times",
    "sacrifice of self for the greater good is the noblest act",
    "bravery is not the absence of fear, but action in the face of it",
    "one person with conviction can change the world",
    "in adversity, we discover the strength we never knew we had",
    "the truest test of character is what one does when no one is watching",
    "real strength lies in lifting others when you yourself are weak",
    "it is not the size of the dog in the fight, it's the size of the fight in the dog",
    "the ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy",
    "courage is grace under pressure",
    "i learned that courage was not the absence of fear, but the triumph over it",
    "a hero is an ordinary individual who finds the strength to persevere and endure in spite of overwhelming obstacles",
    "the greatest glory in living lies not in never falling, but in rising every time we fall",
    "it is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better",
    "be the change you wish to see in the world",
    "where there is a brave man, in the thickest of the fight, there is the post of honor",
    "the only way to deal with bullies is to stand up to them",
    "the world is moved along, not only by the mighty shoves of its heroes, but also by the aggregate of tiny pushes of each honest worker",
    "to have a right to do a thing is not at all the same as to be right in doing it",
    "ask not what your country can do for you – ask what you can do for your country",
    "with great power comes great responsibility",
    "the only thing necessary for the triumph of evil is for good men to do nothing",
    "the brave man is not he who does not feel afraid, but he who conquers that fear",
    "it is not the strength of the body that counts, but the strength of the spirit",
    "no one has ever become poor by giving",
    "the price of greatness is responsibility",
    "do what you can, with what you have, where you are",
    "it is amazing what you can accomplish if you do not care who gets the credit",
    "the secret of getting ahead is getting started",
    "we must become the change we want to see in the world",
    "success is not final, failure is not fatal: it is the courage to continue that counts",
    "to be yourself in a world that is constantly trying to make you something else is the greatest accomplishment",
    "i would rather die on my feet than live on my knees",
    "whoever saves one life, saves the world entire",
    "if you're going through hell, keep going",
    "the only easy day was yesterday"
];

export const HeroismThemeStatementTableName = "Heroism theme statement";

export class HeroismThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = HeroismThemeStatementTableName;
        this.addEntriesFromList(heroismThemeStatements);
    }
}