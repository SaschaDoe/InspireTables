import {Table} from "../../table";

const priceOfSuccessThemeStatements = [
    "behind every triumph lies a trail of sacrifices",
    "greatness demands payment in sweat, tears, and sleepless nights",
    "the path to the top is paved with missed dinners and forgotten birthdays",
    "every 'yes' to ambition is a 'no' to something else",
    "the higher you climb, the more you leave behind",
    "brilliance often burns at both ends of the candle",
    "the fruits of labor are sweetest when the labor is hardest",
    "in the pursuit of excellence, comfort is the first casualty",
    "the crown weighs heavy on the head that wears it",
    "achievement's shadow is cast by the light of countless unseen efforts",
    "the pedestal of accomplishment is built on a foundation of failures",
    "glory's price tag is often written in the currency of personal life",
    "the higher the peak, the harder the climb and the thinner the air",
    "in reaching for the stars, we often lose touch with the ground",
    "the brightest flames often leave the deepest scorch marks",
    "i've missed more than 9000 shots in my career. i've lost almost 300 games. 26 times, i've been trusted to take the game winning shot and missed. i've failed over and over and over again in my life. and that is why i succeed",
    "some seek fame and fortune, not realizing it's a mask that eats into the face",
    "the only place where success comes before work is in the dictionary",
    "what we achieve inwardly will change outer reality",
    "the distance between insanity and genius is measured only by success",
    "if you can dream it, you can do it",
    "to be successful, you must accept all challenges that come your way. you can't just accept the ones you like",
    "all roads that lead to success have to pass through hard work boulevard at some point",
    "many of life's failures are people who did not realize how close they were to success when they gave up",
    "i find that the harder i work, the more luck i seem to have",
    "there are no shortcuts to any place worth going",
    "the brick walls are there for a reason. they're not there to keep us out. the brick walls are there to give us a chance to show how badly we want something",
    "if you're going through hell, keep going",
    "the difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will",
    "people tend to assume that becoming rich means enjoying an easy life. the reality is that being successful demands great sacrifice",
    "it's not about perfect. it's about effort. and when you bring that effort every single day, that's where transformation happens. that's how change occurs",
    "there are two types of pain you will go through in life, the pain of discipline and the pain of regret. discipline weighs ounces while regret weighs tonnes",
    "if you really look closely, most overnight successes took a long time",
    "opportunities don't happen. you create them",
    "your time is limited, don't waste it living someone else's life",
    "the only place where success comes before work is in the dictionary",
    "the ones who are crazy enough to think they can change the world, are the ones that do",
    "if you are not willing to risk the usual, you will have to settle for the ordinary",
    "all progress takes place outside the comfort zone",
    "if you want to achieve excellence, you can get there today. as of this second, quit doing less-than-excellent work"
];

export const PriceOfSuccessThemeStatementTableName = "Price of Success theme statement";

export class PriceOfSuccessThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = PriceOfSuccessThemeStatementTableName;
        this.addEntriesFromList(priceOfSuccessThemeStatements);
    }
}