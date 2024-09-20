import {Table} from "../../../table";

export const horrorRealThemes = [
    "curiosity about the unknown can lead to terrible consequences",
    "the price of immortality is often one's humanity",
    "evil thrives when good people choose to look away",
    "the past never truly dies; it waits patiently to resurface",
    "in isolation, the mind becomes its own worst enemy",
    "technological progress without ethical consideration leads to disaster",
    "the line between science and madness is thinner than we think",
    "family secrets have the power to destroy generations",
    "human nature, when pushed to extremes, reveals its darkest capabilities",
    "the quest for forbidden knowledge often leads to self-destruction",
    "in the face of cosmic forces, human struggles become insignificant",
    "the most terrifying monsters are those that live within us",
    "death is not always the end, but sometimes a gateway to something worse",
    "the pursuit of perfection often creates monstrosities",
    "faith can be both a shield against evil and a catalyst for it",
    "the sins of the parents are often visited upon their children",
    "in times of crisis, humanity's true nature is revealed",
    "the road to hell is paved with good intentions",
    "what we choose to fear often becomes our reality",
    "the greatest horror lies in the loss of one's own identity",
    "even in the darkest of times, hope can be a powerful weapon",
    "the veneer of civilization is thinner than we'd like to believe",
    "our deepest fears have the power to manifest in reality",
    "the cycle of abuse perpetuates itself unless consciously broken",
    "in the absence of reason, superstition fills the void",
    "the true nature of evil is its ability to appear ordinary",
    "in facing our fears, we often become what we dread",
    "the most haunted places are the landscapes of our own minds",
    "humanity's greatest threat often comes from within, not without",
    "in the struggle for survival, morality becomes a luxury few can afford"
]

export const HorrorRealThemesTableName = "Horror Real Themes"

export class HorrorRealThemeTable extends Table{
    constructor() {
        super();
        this.title = HorrorRealThemesTableName;
        this.addEntriesFromList(horrorRealThemes);
    }
}