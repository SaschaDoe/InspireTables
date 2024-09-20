import {Table} from "../../table";

const magicThemeStatements = [
    "the unexplained often hides in plain sight, waiting for those with eyes to see",
    "true power lies in the ability to shape reality with mere thoughts and gestures",
    "in a world of science, the inexplicable still finds ways to awe and inspire",
    "the boundary between the possible and impossible is often just a matter of belief",
    "some forces in the universe defy conventional explanation, yet undeniably exist",
    "the most profound transformations often seem to defy the laws of nature",
    "there's a thin line between illusion and reality, and some walk it with ease",
    "in the right hands, the ordinary becomes extraordinary",
    "true wonder lies not in tricks and deception, but in opening one's mind to the impossible",
    "the most potent energies are often invisible to the naked eye",
    "some skills appear superhuman to those who don't understand their underlying principles",
    "the universe holds more mysteries than our current knowledge can explain",
    "imagination is the key that unlocks doors to unseen realms",
    "in every myth and legend lies a kernel of truth, waiting to be discovered",
    "the most powerful forces often work in subtle, unseen ways",
    "those who do not believe in magic will never find it",
    "the world is full of magic things, patiently waiting for our senses to grow sharper",
    "and above all, watch with glittering eyes the whole world around you because the greatest secrets are always hidden in the most unlikely places",
    "it's still magic even if you know how it's done",
    "we do not need magic to transform our world. we carry all of the power we need inside ourselves already",
    "any sufficiently advanced technology is indistinguishable from magic",
    "there is no exquisite beauty without some strangeness in the proportion",
    "the moment you doubt whether you can fly, you cease forever to be able to do it",
    "words are, in my not-so-humble opinion, our most inexhaustible source of wonder",
    "reality is not always probable, or likely",
    "the universe is full of magical things patiently waiting for our wits to grow sharper",
    "if you see the magic in a fairy tale, you can face the future",
    "i address you all tonight for who you truly are: wizards, mermaids, travelers, adventurers, and magicians. you are the true dreamers",
    "some people see things others cannot, and they are right, and we call them creative geniuses",
    "the secret of genius is to carry the spirit of the child into old age, which means never losing your enthusiasm",
    "if you have good thoughts they will shine out of your face like sunbeams and you will always look lovely",
    "in every job that must be done, there is an element of fun",
    "never say there's nothing beautiful in the world anymore. there's always something to wonder at",
    "i have always believed that hope is that stubborn thing inside us that insists, despite all the evidence to the contrary, that something better awaits us",
    "all our dreams can come true if we have the courage to pursue them",
    "the way to get started is to quit talking and begin doing",
    "a little nonsense now and then is relished by the wisest men",
    "sometimes the questions are complicated and the answers are simple",
    "where there is kindness, there is goodness. and where there is goodness, there is magic",
    "we are all apprentices in a craft where no one ever becomes a master"
];

export const MagicThemeStatementTableName = "Magic theme statement";

export class MagicThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = MagicThemeStatementTableName;
        this.addEntriesFromList(magicThemeStatements);
    }
}