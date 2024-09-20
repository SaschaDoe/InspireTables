import {Table} from "../../table";

const isolationThemeStatements = [
    "in the depths of solitude, we often find our truest selves",
    "the weight of silence can be heavier than any noise",
    "sometimes, the loudest cry for help is silence",
    "in a world of connection, disconnection becomes a deafening roar",
    "the walls we build for protection often become our prison",
    "in the absence of others, our thoughts become our only companions",
    "the most crowded place can be the loneliest",
    "detachment from the world can lead to attachment to inner truths",
    "in separation, we learn the value of togetherness",
    "the journey inward is often the longest and most challenging",
    "no man is an island, entire of itself",
    "hell is other people",
    "i think therefore I am",
    "all the lonely people, where do they all come from?",
    "the mass of men lead lives of quiet desperation",
    "the eternal silence of these infinite spaces frightens me",
    "we're born alone, we live alone, we die alone",
    "loneliness and the feeling of being unwanted is the most terrible poverty",
];

export const IsolationThemeStatementTableName = "Isolation theme statement";

export class IsolationThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = IsolationThemeStatementTableName;
        this.addEntriesFromList(isolationThemeStatements);
    }
}

