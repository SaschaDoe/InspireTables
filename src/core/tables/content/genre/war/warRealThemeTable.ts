import {Table} from "../../../table";

export const warRealThemes = [
    "in war, truth is the first casualty",
    "there are no winners in war, only survivors",
    "the enemy is not a person, but war itself",
    "heroism is endurance for one moment more",
    "in the trenches, all men are equal",
    "war does not determine who is right - only who is left",
    "the true soldier fights not because he hates what is in front of him, but because he loves what is behind him",
    "in war, the young bury the old",
    "courage is fear holding on a minute longer",
    "war makes murderers out of ordinary men",
    "the deadliest weapon in war is a determined man",
    "in war, there are no unwounded soldiers",
    "the only thing necessary for evil to triumph is for good men to do nothing",
    "war does not make boys men, it makes men dead",
    "a soldier will fight long and hard for a bit of colored ribbon",
    "in peace, sons bury their fathers. in war, fathers bury their sons",
    "the cost of freedom is always high, but americans have always paid it",
    "it is well that war is so terrible, otherwise we should grow too fond of it",
    "never think that war, no matter how necessary, nor how justified, is not a crime",
    "war is not just the business of killing. it is the killing of all human feelings",
    "in war, resolution; in defeat, defiance; in victory, magnanimity",
    "the object of war is not to die for your country but to make the other bastard die for his",
    "older men declare war. but it is youth that must fight and die",
    "war is peace. freedom is slavery. ignorance is strength",
    "if we don't end war, war will end us",
    "i have seen war. i have seen war on land and sea. i have seen blood running from the wounded. i have seen the dead in the mud. i have seen cities destroyed. i have seen children starving. i have seen the agony of mothers and wives. i hate war",
    "war is cruelty, and you cannot refine it",
    "it is forbidden to kill; therefore all murderers are punished unless they kill in large numbers and to the sound of trumpets",
    "i know war as few other men now living know it, and nothing to me is more revolting",
    "all wars are civil wars, because all men are brothers",
    "the supreme art of war is to subdue the enemy without fighting",
    "war is not an adventure. it is a disease. it is like typhus",
    "i am tired and sick of war. its glory is all moonshine. it is only those who have neither fired a shot nor heard the shrieks and groans of the wounded who cry aloud for blood, more vengeance, more desolation. war is hell",
    "if you want to make peace with your enemy, you have to work with your enemy. then he becomes your partner",
    "mankind must put an end to war before war puts an end to mankind"
]

export const WarRealThemesTableName = "War Real Themes"

export class WarRealThemeTable extends Table{
    constructor() {
        super();
        this.title = WarRealThemesTableName;
        this.addEntriesFromList(warRealThemes);
    }
}