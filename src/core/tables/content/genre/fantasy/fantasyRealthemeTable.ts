import {Table} from "../../../table";

export const fantasyRealThemes = [
    "in worlds of magic, the greatest power often lies in the strength of the human heart",
    "the monsters we fear in the dark are often reflections of the shadows within ourselves",
    "true magic resides not in spells and incantations, but in the transformative power of choice",
    "in the tapestry of fate, even the smallest thread can alter the entire design",
    "the line between hero and villain blurs when viewed through the prism of perspective",
    "in realms of wonder, the impossible becomes possible when belief defies reality",
    "the mightiest empires are built not on conquest, but on the foundations of unity and understanding",
    "in the face of destiny, free will becomes both our greatest burden and our most precious gift",
    "the truest forms of magic are often found in the bonds we forge with others",
    "in worlds beyond imagination, we often discover the most fundamental truths about our own",
    "the greatest quests are not for artifacts of power, but for the strength that lies dormant within",
    "in the clash between light and darkness, the most pivotal battles are fought in the twilight of the soul",
    "the wisdom of ages often speaks loudest through the whispers of nature and the songs of the forgotten",
    "in fantasy realms, the impossible becomes possible, yet human nature remains eternally complex",
    "the most potent enchantments are woven not by sorcerers, but by the threads of compassion and sacrifice",
    "in the mirror of magical worlds, we often see the reflections of our own society's deepest truths",
    "the path of the chosen one is paved not with destiny, but with the burdens of responsibility and choice",
    "in realms where dragons soar, the greatest fires to be tamed are often those that burn within",
    "the true measure of a hero lies not in the strength of their sword, but in the resilience of their spirit",
    "in lands of eternal twilight, we learn that light and darkness are not opponents, but dance partners in the ballet of existence",
    "the most powerful artifacts are often the intangible legacies we leave in the hearts of others",
    "in the grand tapestry of fantasy, every thread of magic is woven with strands of our shared humanity",
    "the enchanted forest of moral ambiguity often yields the sweetest fruit of wisdom",
    "in the crucible of fairy tale trials, the dross of innocence is transmuted into the gold of enlightenment",
    "the true curse is not the transformation of the body, but the stagnation of the mind",
    "in the labyrinth of magical realms, the minotaur of truth often lurks in the shadows of our preconceptions",
    "the wand of power is weightless, yet no burden is heavier upon the soul",
    "in the alchemy of fantasy, lead circumstances transmute into golden opportunities through the philosopher's stone of perspective",
    "the siren song of absolute power harmonizes dangerously with the human propensity for self-deception",
    "in the garden of forking paths, each choice nurtures a different reality, yet all are rooted in the soil of consequence",
    "the most fearsome dragon to be slain is often the illusion of separateness that divides us",
    "in the realm of faerie, time flows like honey, sweet and slow, revealing the illusion of our mortal haste",
    "the greatest magic mirror reflects not our appearance, but the true nature of our desires and fears",
    "in the epic of existence, each being is both the hero of their own tale and a side character in countless others",
    "the most profound metamorphoses occur not through spells, but through the quiet magic of self-reflection and growth",
    "in the cosmic game of chess, we are simultaneously the players, the pieces, and the board itself",
    "the true elixir of immortality is found not in a potion, but in the enduring impact of our choices and creations",
    "in the chronicles of imagined worlds, we often find the unwritten histories of our own",
    "the most enchanted doors open not to other worlds, but to unexplored chambers of our own psyche",
    "in the ballet of elemental forces, human will is the choreographer of destiny",
    "the highest tower of ivory is built upon the foundation of earthly experience and understanding",
    "in the fellowship of diverse beings, we learn that unity does not require uniformity, but harmony in diversity",
    "the most profound magic lies not in bending the external world to our will, but in aligning our will with the flow of existence"
]

export const FantasyRealThemesTableName = "Fantasy Real Themes"

export class FantasyRealThemeTable extends Table{
    constructor() {
        super();
        this.title = FantasyRealThemesTableName;
        this.addEntriesFromList(fantasyRealThemes);
    }
}