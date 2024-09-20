import {Table} from "../../table";

const corruptionThemeStatements = [
    "corruption is a cancer that eats away at the foundation of society",
    "power tends to corrupt, and absolute power corrupts absolutely",
    "in a world where everything has a price, integrity becomes priceless",
    "corruption flourishes in the shadows of secrecy",
    "the rot starts at the top and seeps downward",
    "in corrupt systems, honesty becomes a revolutionary act",
    "corruption is the abuse of public power for private gain",
    "the most dangerous corruption is the justification of it",
    "where money speaks, truth is silent",
    "corruption is a tree, whose branches are of an immeasurable length",
    "the fish rots from the head down",
    "when wealth is lost, nothing is lost; when health is lost, something is lost; when character is lost, all is lost",
    "integrity has no need of rules",
    "the challenge of modernity is to live without illusions and without becoming disillusioned",
    "in a room where people unanimously maintain a conspiracy of silence, one word of truth sounds like a pistol shot",
    "the world will not be destroyed by those who do evil, but by those who watch them without doing anything",
    "the first sign of corruption in a society that is still alive is that the end justifies the means",
    "he who fights with monsters should look to it that he himself does not become a monster",
    "the surest way to corrupt a youth is to instruct him to hold in higher esteem those who think alike than those who think differently",
    "it is not power that corrupts but fear. fear of losing power corrupts those who wield it",
    "the accomplice to the crime of corruption is frequently our own indifference",
    "the duty of youth is to challenge corruption",
    "money and corruption are ruining the land",
    "the more corrupt the state, the more numerous the laws",
    "a lack of transparency results in distrust and a deep sense of insecurity",
    "when morality comes up against profit, it is seldom that profit loses",
    "the only thing necessary for the triumph of evil is for good men to do nothing",
    "in a closed society where everybody's guilty, the only crime is getting caught",
    "a nation that tolerates corruption will soon find its democracy in peril",
    "the price of apathy towards public affairs is to be ruled by evil men"
];

export const CorruptionThemeStatementTableName = "Corruption theme statement";

export class CorruptionThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = CorruptionThemeStatementTableName;
        this.addEntriesFromList(corruptionThemeStatements);
    }
}