import {Table} from "../../table";

const divineThemeStatements = [
    "the sacred resides in the everyday, waiting to be discovered",
    "in moments of awe, we glimpse the eternal",
    "the infinite manifests in finite forms",
    "transcendence is found in the depths of human experience",
    "the search for meaning leads to encounters with the sublime",
    "in silence, the voice of the ineffable speaks",
    "the universe whispers its secrets to those who listen",
    "miracles are not contrary to nature, but only contrary to what we know about nature",
    "the path to enlightenment is paved with ordinary moments",
    "in the face of mystery, we touch the hem of the divine",
    "to see a world in a grain of sand and heaven in a wild flower",
    "there are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle",
    "the kingdom of heaven is within you",
    "as above, so below",
    "God is a circle whose center is everywhere and circumference nowhere",
    "the unexamined life is not worth living",
    "beauty is truth, truth beauty",
    "we are not human beings having a spiritual experience. We are spiritual beings having a human experience",
    "the cosmos is within us. We are made of star-stuff",
    "in the beginning was the Word",
    "I think, therefore I am",
    "know thyself",
    "the only true wisdom is in knowing you know nothing",
    "the wound is the place where the light enters you",
    "we are all just walking each other home",
    "the infinite is in the finite of every instant",
    "the soul becomes dyed with the color of its thoughts",
    "the heart has its reasons which reason knows not",
    "the universe is not only stranger than we imagine, it is stranger than we can imagine",
    "there is a crack in everything, that's how the light gets in",
    "the cave you fear to enter holds the treasure you seek",
    "we are here to awaken from our illusion of separateness",
    "the goal of life is to make your heartbeat match the beat of the universe",
    "the privilege of a lifetime is to become who you truly are",
    "the glory of God is man fully alive",
    "the mind is its own place, and in itself can make a heaven of hell, a hell of heaven",
    "eternity is in love with the productions of time",
    "the essence of all beautiful art, all great art, is gratitude",
    "the world is full of magic things, patiently waiting for our senses to grow sharper",
    "we are not drops in the ocean, but the entire ocean in a drop"
];

export const DivineThemeStatementTableName = "Divine theme statement";

export class DivineThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = DivineThemeStatementTableName;
        this.addEntriesFromList(divineThemeStatements);
    }
}