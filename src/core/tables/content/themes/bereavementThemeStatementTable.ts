import {Table} from "../../table";

const bereavementThemeStatements = [
    "bereavement is the price we pay for love",
    "in grief, we learn the true depth of our capacity to feel",
    "loss shapes us in ways we never anticipated",
    "bereavement is a journey, not a destination",
    "in the absence of those we love, we find pieces of ourselves we never knew existed",
    "grief is the last act of love we can give to those we loved",
    "bereavement teaches us that the heart can break and still beat",
    "in loss, we are reminded of the preciousness of life",
    "the pain of parting is nothing to the joy of meeting again",
    "bereavement is a wound that never fully heals, but loses its sting over time",
    "the void left by a loved one can never be filled, only carried",
    "in the garden of memory, love blossoms forever",
    "absence is a house so vast that inside you will pass through its walls and hang pictures on the air",
    "what we have once enjoyed we can never lose; all that we love deeply becomes a part of us",
    "the heart will break, but broken live on",
    "to live in hearts we leave behind is not to die",
    "the song is ended, but the melody lingers on",
    "how lucky i am to have something that makes saying goodbye so hard",
    "the pain of absence is just another sign of love's presence",
    "in the night of death, hope sees a star, and listening love can hear the rustle of a wing",
    "when someone you love becomes a memory, the memory becomes a treasure",
    "the dead are never truly gone until they are forgotten",
    "love knows not its own depth until the hour of separation",
    "the highest tribute to the dead is not grief but gratitude",
    "what is lovely never dies, but passes into other loveliness",
    "the sun can break through the darkest cloud",
    "even in its darkest passages, the heart is unconquerable",
    "the deeper that sorrow carves into your being, the more joy you can contain",
    "in the end, it's not the years in your life that count. it's the life in your years",
    "those we love don't go away, they walk beside us every day"
];

export const BereavementThemeStatementTableName = "Bereavement theme statement";

export class BereavementThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = BereavementThemeStatementTableName;
        this.addEntriesFromList(bereavementThemeStatements);
    }
}