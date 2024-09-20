import {Table} from "../../table";

const natureAsEnemyThemeStatements = [
    "the wilderness does not forgive weakness or hesitation",
    "in the face of elemental forces, human ambition often proves futile",
    "civilization is but a thin veneer over the savage heart of the world",
    "our greatest technological marvels crumble before the relentless assault of time and elements",
    "the calm before the storm is nature's cruel deception",
    "in the grand theater of existence, humanity is at the mercy of a capricious stage manager",
    "our concrete jungles offer little refuge when the earth shakes its foundations",
    "the most beautiful landscapes often hide the deadliest perils",
    "in the blink of an eye, paradise can transform into purgatory",
    "the relentless cycle of growth and decay spares no one and nothing",
    "our deepest instincts are honed by eons of struggle against an indifferent universe",
    "the illusion of control shatters when the sky darkens and the wind howls",
    "in the face of a tsunami, our mightiest defenses are but sandcastles",
    "the serene forest of day becomes a labyrinth of terrors by night",
    "our proudest achievements are dwarfed by the awesome destructive power of a volcano",
    "i am against nature. i don't dig nature at all. i think nature is very unnatural",
    "civilization exists by geological consent, subject to change without notice",
    "the universe is not required to be in perfect harmony with human ambition",
    "nature is not always the best mother, sometimes she is the wicked stepmother",
    "the most dangerous thing in the world is to try to leap a chasm in two jumps",
    "human beings are strong because we have the ability to change ourselves",
    "we must not try to force nature on our own trivial paths and limited outlets",
    "nature never appeals to intelligence until habit and instinct are useless",
    "we are like butterflies who flutter for a day and think it is forever",
    "the earth does not belong to man, man belongs to the earth",
    "the mountains are calling and i must go... to my doom",
    "in every walk with nature one receives far more than he seeks... sometimes more than he bargained for",
    "look deep into nature, and then you will understand everything better... including your own insignificance",
    "the goal of life is to make your heartbeat match the beat of the universe, to match your nature with nature... and hope you survive the synchronization",
    "adopt the pace of nature: her secret is patience... and ruthlessness",
    "nature does not hurry, yet everything is accomplished... including our eventual downfall",
    "the clearest way into the universe is through a forest wilderness... but beware, for the universe cares not for your safe passage",
    "to forget how to dig the earth and to tend the soil is to forget ourselves... and to invite our own extinction",
    "i go to nature to be soothed and healed, and to have my senses put in order... and to be reminded of my mortality",
    "those who contemplate the beauty of the earth find reserves of strength that will endure as long as life lasts... they will need every ounce of it",
    "the creation of a thousand forests is in one acorn... as is the potential destruction of a thousand civilizations",
    "we do not inherit the earth from our ancestors, we borrow it from our children... and we may be forced to return it prematurely",
    "when one tugs at a single thing in nature, he finds it attached to the rest of the world... and sometimes, the world tugs back",
    "the world is big and i want to have a good look at it before it gets dark... for in the darkness, unseen dangers lurk",
    "in all things of nature there is something of the marvelous... and something of the terrifying"
];

export const NatureAsEnemyThemeStatementTableName = "Nature as Enemy theme statement";

export class NatureAsEnemyThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = NatureAsEnemyThemeStatementTableName;
        this.addEntriesFromList(natureAsEnemyThemeStatements);
    }
}