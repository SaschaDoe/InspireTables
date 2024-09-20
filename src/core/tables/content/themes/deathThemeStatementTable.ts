import {Table} from "../../table";

const deathThemeStatements = [
    "death is the great equalizer, reminding us of our shared mortality",
    "in facing death, we often find the true meaning of life",
    "death gives life its significance and urgency",
    "the fear of death is the beginning of slavery",
    "to live fully is to learn to dance with the inevitability of death",
    "death is not the opposite of life, but a part of it",
    "in the shadow of death, the colors of life shine brighter",
    "death is the price we pay for the privilege of love and memory",
    "confronting our mortality teaches us to cherish every moment",
    "death is the mother of beauty",
    "to the well-organized mind, death is but the next great adventure",
    "the boundaries which divide Life from Death are at best shadowy and vague",
    "life is pleasant. Death is peaceful. It's the transition that's troublesome",
    "do not go gentle into that good night",
    "death smiles at us all. All a man can do is smile back",
    "the fear of death follows from the fear of life",
    "our dead are never dead to us, until we have forgotten them",
    "it is not death that a man should fear, but he should fear never beginning to live",
    "each night, when I go to sleep, I die. And the next morning, when I wake up, I am reborn",
    "the last enemy that shall be destroyed is death",
    "death is no more than passing from one room into another",
    "lives are like rivers: eventually they go where they must, not where we want them to",
    "death – the last sleep? No, it is the final awakening",
    "for life and death are one, even as the river and the sea are one",
    "we all die. The goal isn't to live forever, the goal is to create something that will",
    "to the organized mind, death is but the next great adventure",
    "that it will never come again is what makes life so sweet",
    "the reports of my death are greatly exaggerated",
    "I'm not afraid of death. I just don't want to be there when it happens",
    "death is nothing, but to live defeated and inglorious is to die daily",
    "the flesh is but a vision, all that we truly have is what lies within",
    "every man dies, not every man really lives",
    "life is a journey that must be traveled no matter how bad the roads and accommodations",
    "the cradle rocks above an abyss, and common sense tells us that our existence is but a brief crack of light between two eternities of darkness",
    "our lives are but specks of dust falling through the fingers of time",
    "we are all just walking each other home",
    "the boundaries of our lives are defined by the horizon of our perspectives",
    "to be, or not to be, that is the question",
    "rage, rage against the dying of the light",
    "we are here for a spell and then disappear",
    "the song is ended, but the melody lingers on",
    "life is a dream walking, death is going home",
    "the light that burns twice as bright burns half as long",
    "we're all just passing through",
    "our days are numbered. We cannot afford to be idle",
    "the world is full of magical things patiently waiting for our wits to grow sharper",
    "what we have done for ourselves alone dies with us; what we have done for others and the world remains and is immortal",
    "life is short, and it is up to you to make it sweet",
    "the life of the dead is placed in the memory of the living",
    "it matters not how a man dies, but how he lives"
];

export const DeathThemeStatementTableName = "Death theme statement";

export class DeathThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = DeathThemeStatementTableName;
        this.addEntriesFromList(deathThemeStatements);
    }
}