import {Table} from "../../table";

const illnessMythologyLore: string[] = [
    "originated from a fallen god's tears",
    "a curse by ancient witches",
    "foretold by an old prophecy",
    "emerged from a forbidden ancient text",
    "a punishment from the sea deity",
    "created in a duel between mages",
    "a side effect of a powerful spell gone wrong",
    "born from the heart of a dying star",
    "a result of the wrath of the forest spirits",
    "linked to the phases of the moon",
    "believed to be the earth's way of seeking balance",
    "said to be a test by the gods for humanity",
    "emerged from the depths of an uncharted dungeon",
    "a manifestation of people's collective nightmares",
    "linked to the disappearance of an ancient civilization",
    "a byproduct of a cosmic event",
    "said to grant visions of other worlds to the afflicted",
    "believed to be a weapon created by a long-lost empire",
    "originates from the breath of a mythical beast",
    "tied to the alignment of mystical ley lines",
    "thought to be the earth's immune response against magic",
    "a consequence of tampering with forbidden alchemy",
    "emerged from the rifts between different realms",
    "seen as a passage to attain enlightenment",
    "associated with a legendary hero's fall",
    "engineered as a bioweapon by an advanced alien civilization",
    "a mutation caused by exposure to cosmic radiation",
    "a side effect of experimental space travel technology",
    "originated from a terraformed planet's unique ecosystem",
    "developed in a lab accident during gene editing experiments",
    "a result of long-term exposure to an artificial intelligence's radiation",
    "spread through the galaxy by interstellar traders",
    "an ancient disease revived from cryogenically frozen samples",
    "created by nanobots malfunctioning in the human body",
    "a viral agent designed to sabotage rival colonies",
    "emerged from a black hole's quantum fluctuations",
    "accidentally brought back by explorers from a parallel universe",
    "a psychological condition induced by prolonged space isolation",
    "a genetic modification gone wrong in a utopian society",
    "an adaptive pathogen from a hostile extraterrestrial world",
    "linked to the consumption of an alien species' food source",
    "a digital virus capable of affecting cybernetic implants",
    "spread through a network of intergalactic wormholes",
    "a byproduct of a failed anti-aging experiment",
    "an evolutionary response to a planet's harsh environment",
    "triggered by exposure to a rare element found in asteroid mines",
    "a remnant of an ancient, advanced civilization's biological research",
    "caused by contamination from a synthetic atmosphere",
    "a syndrome affecting humans adapted to zero-gravity environments",
    "a relic of a bioengineered weapon from a forgotten interstellar war"
    //TODO: only probability for High Techlevel
];

export class IllnessLoreTable extends Table{
    constructor() {
        super();
        this.title = "Illness Mythology";
        this.addEntriesFromList(illnessMythologyLore);
    }
}
