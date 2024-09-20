import {Table} from "../../table";

const pursuitOfProsperityThemeStatements = [
    "the path to abundance is paved with diligence and perseverance",
    "true wealth is measured not just in gold, but in the richness of experiences",
    "success is a journey of a thousand small steps, not a single giant leap",
    "in the garden of life, hard work is the most fertile soil",
    "the seeds of tomorrow's fortune are planted in today's efforts",
    "the most valuable currency is not money, but time well spent",
    "ambition without action is like a car without fuel",
    "the sweetest fruits are those picked after the longest climb",
    "in the race for success, consistency often outpaces raw talent",
    "the foundation of achievement is built brick by brick, day by day",
    "fortune favors not just the bold, but the prepared",
    "the most precious treasures are often found in the mines of adversity",
    "true abundance flows from the wellspring of passion and purpose",
    "the journey to success is a marathon, not a sprint",
    "in the alchemy of achievement, effort is the philosopher's stone",
    "the only place where success comes before work is in the dictionary",
    "your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work",
    "success is not final, failure is not fatal: it is the courage to continue that counts",
    "opportunities don't happen. you create them",
    "the successful warrior is the average man, with laser-like focus",
    "success usually comes to those who are too busy to be looking for it",
    "i find that the harder i work, the more luck i seem to have",
    "success is walking from failure to failure with no loss of enthusiasm",
    "the difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack of will",
    "success is not how high you have climbed, but how you make a positive difference to the world",
    "the road to success and the road to failure are almost exactly the same",
    "i never dreamed about success. i worked for it",
    "success is liking yourself, liking what you do, and liking how you do it",
    "try not to become a person of success, but rather try to become a person of value",
    "don't be afraid to give up the good to go for the great",
    "if you really look closely, most overnight successes took a long time",
    "there are no secrets to success. it is the result of preparation, hard work, and learning from failure",
    "success is not in what you have, but who you are",
    "the size of your success is measured by the strength of your desire, the size of your dream, and how you handle disappointment along the way",
    "success is not just about making money. it's about making a difference",
    "the greatest pleasure in life is doing what people say you cannot do",
    "the only limit to our realization of tomorrow will be our doubts of today",
    "success is stumbling from failure to failure with no loss of enthusiasm",
    "the secret of success is to do the common thing uncommonly well",
    "the only place where success comes before work is in the dictionary"
];

export const PursuitOfProsperityThemeStatementTableName = "Pursuit of Prosperity theme statement";

export class PursuitOfProsperityThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = PursuitOfProsperityThemeStatementTableName;
        this.addEntriesFromList(pursuitOfProsperityThemeStatements);
    }
}