import {Table} from "../../table";

const secondChanceRomanceThemeStatements = [
    "love's flame, once extinguished, can reignite with even greater warmth",
    "the heart never forgets its first true connection",
    "time apart often reveals what truly matters",
    "in life's vast ocean, some ships are destined to cross paths twice",
    "wisdom gained through separation can strengthen reunited hearts",
    "the sweetest love stories are often those rewritten with experience",
    "sometimes, the right person comes at the wrong time, only to return when the time is right",
    "old flames can burn brighter when rekindled with maturity",
    "the universe has a way of bringing back what's meant for you",
    "growth apart can lead to stronger growth together",
    "some love stories aren't over, they're just on pause",
    "the heart knows no statute of limitations",
    "in matters of the heart, timing is everything",
    "true love doesn't have an expiration date",
    "sometimes you have to lose someone to realize how much they meant",
    "if you're brave enough to say goodbye, life will reward you with a new hello",
    "love is lovelier the second time around",
    "absence diminishes small loves and increases great ones, as the wind blows out the candle and fans the bonfire",
    "if you love something, set it free. if it comes back, it's yours. if it doesn't, it never was",
    "we come to love not by finding a perfect person, but by learning to see an imperfect person perfectly",
    "it's better to have loved and lost than never to have loved at all",
    "the most precious possession that ever comes to a man in this world is a woman's heart",
    "love isn't something you find. love is something that finds you",
    "sometimes the heart sees what is invisible to the eye",
    "the course of true love never did run smooth",
    "there is no remedy for love but to love more",
    "love is an endless act of forgiveness",
    "love is friendship that has caught fire",
    "the greatest happiness of life is the conviction that we are loved",
    "to love and be loved is to feel the sun from both sides",
    "the heart has reasons that reason does not understand",
    "love recognizes no barriers. it jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope",
    "a loving heart is the truest wisdom",
    "the best love is the kind that awakens the soul and makes us reach for more",
    "where there is love there is life",
    "the giving of love is an education in itself",
    "love is composed of a single soul inhabiting two bodies",
    "in all the world, there is no heart for me like yours",
    "when you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible",
    "it's amazing how two paths can cross years later and have a whole new beginning"
];

export const SecondChanceRomanceThemeStatementTableName = "Second Chance Romance theme statement";

export class SecondChanceRomanceThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = SecondChanceRomanceThemeStatementTableName;
        this.addEntriesFromList(secondChanceRomanceThemeStatements);
    }
}