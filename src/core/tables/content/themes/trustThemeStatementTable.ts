import {Table} from "../../table";

const trustThemeStatements = [
    "confidence is the invisible cement that binds relationships",
    "in the garden of integrity, loyalty blooms",
    "faith in others is the foundation upon which communities are built",
    "reliability is the cornerstone of every lasting bond",
    "the currency of human connection is paid in kept promises",
    "bridges between hearts are built with consistent actions",
    "in a world of uncertainty, dependability is a beacon of light",
    "the strongest fortresses are those built on mutual belief",
    "true strength lies in the ability to be vulnerable with another",
    "the measure of a person's character is in their follow-through",
    "relationships thrive in the soil of shared confidence",
    "the most valuable gift one can give is their word, kept",
    "in the dance of human interaction, reliability leads",
    "the fabric of society is woven with threads of mutual assurance",
    "faith in others is the first step on the path to greatness",
    "tell me who you walk with, and i'll tell you who you are",
    "the best way to find out if you can rely on somebody is to rely on them",
    "we're all just walking each other home",
    "i don't trust words. i trust actions",
    "it takes years to build and only seconds to break",
    "you must be brave enough to give yourself permission to be trusted, respected, and heard",
    "confidence is a plant of slow growth in an aged bosom",
    "the glue that holds all relationships together – including the relationship between the leader and the led – is integrity",
    "we are all connected to each other biologically, to the earth chemically, and to the rest of the universe atomically",
    "to be loved but not known is comforting but superficial. to be known and not loved is our greatest fear. but to be fully known and truly loved is, well, a lot like being loved by god",
    "i would rather walk with a friend in the dark, than alone in the light",
    "love all, believe a few, do wrong to none",
    "you may be deceived if you do too much, but you will live in torment if you do too little",
    "the toughest thing about the power of confidence is that it can be verified only by its absence",
    "a single lie destroys a whole reputation of integrity",
    "the people when rightly and fully relied upon, can be the foundation of a stable government",
    "to be believed, make yourself believable",
    "reliance is the bedrock of any deep connection",
    "in matters of conscience, the law of the majority has no place",
    "the best proof of love is confidence",
    "faith in ourselves makes us stronger, but faith in each other makes us invincible",
    "the most important persuasion tool you have in your entire arsenal is integrity",
    "without integrity, all other virtues are worthless",
    "one must be fond of people and believe in them without being naive",
    "none of us knows what might happen even the next minute, yet still we go forward. because we believe"
];

export const TrustThemeStatementTableName = "Trust theme statement";

export class TrustThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = TrustThemeStatementTableName;
        this.addEntriesFromList(trustThemeStatements);
    }
}