import {Table} from "../../table";

const attractionThemeStatements = [
    "attraction is the invisible force that draws two souls together",
    "in the dance of attraction, chemistry leads while reason follows",
    "the eyes are the windows to attraction, revealing what words cannot express",
    "attraction defies logic, operating on a level beyond conscious control",
    "the spark of attraction can ignite the flame of lasting love",
    "in matters of the heart, attraction is the first chapter of an unwritten story",
    "attraction is nature's way of ensuring the continuation of the species",
    "the mystery of attraction lies in its ability to transcend physical appearance",
    "attraction is the silent language spoken between kindred spirits",
    "the power of attraction can bridge gaps of culture, age, and background",
    "like moths to a flame, we are drawn to that which captivates us",
    "the heart wants what it wants, reason be damned",
    "there's a thin line between love and hate, fueled by the same intensity",
    "opposites don't just attract, they ignite",
    "some connections are beyond explanation, defying the laws of nature",
    "the right person can make your world stop spinning",
    "in a room full of people, you'll always find your way to them",
    "chemistry isn't made in labs, it's born in stolen glances",
    "the pull of desire is as inevitable as gravity",
    "true connection transcends the physical, resonating at a soul level",
    "when you know, you know - the heart recognizes its match",
    "the right person can feel like home, even in a crowded room",
    "some people enter your life and immediately you wonder how you ever lived without them",
    "the most powerful connections are often the ones we least expect",
    "in the symphony of life, finding harmony with another is the sweetest melody",
    "the right energy can light up your entire being",
    "some souls are meant to collide, creating a beautiful chaos",
    "the heart has reasons that reason cannot understand",
    "in the presence of the right person, time loses all meaning",
    "the most magnetic force in the universe is the connection between two people"
];

export const AttractionThemeStatementTableName = "Attraction theme statement";

export class AttractionThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = AttractionThemeStatementTableName;
        this.addEntriesFromList(attractionThemeStatements);
    }
}