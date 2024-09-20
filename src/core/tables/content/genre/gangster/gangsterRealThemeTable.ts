import {Table} from "../../../table";

export const gangsterRealThemes = [
    "in the underworld's labyrinth, the path to power is paved with loyalty's bones",
    "the american dream's shadow often looms largest in the alleyways of organized crime",
    "family ties, when woven with threads of crime, become both a lifeline and a noose",
    "in the criminal's ascent to power, each rung of the ladder is a moral compromise",
    "the throne of the underworld sits upon a foundation of fallen friends and foes alike",
    "in the gangster's world, trust is the most valuable currency, yet the most counterfeit",
    "the line between law and lawlessness blurs when justice wears a price tag",
    "in the crucible of crime, the american melting pot boils with ambition and desperation",
    "the gangster's rise mirrors society's fall, each step a reflection of systemic failures",
    "in the urban jungle, survival often means choosing between one's soul and one's life",
    "the most dangerous weapon in a gangster's arsenal is not a gun, but charisma",
    "in the underbelly of society, today's oppressed often become tomorrow's oppressors",
    "the gangster's code of honor is written in blood, yet easily washed away by greed",
    "in the criminal empire, power is a throne that consumes those who sit upon it",
    "the pursuit of respect in the underworld often leads to a life unworthy of respect",
    "in the gangster's paradise, the fruits of success are always ripened with paranoia",
    "the bonds of brotherhood in crime are forged in fire, but can shatter like glass",
    "in the chess game of organized crime, even kings are merely pawns of fate",
    "the gangster's tragedy lies in achieving the american dream by betraying its ideals",
    "in the criminal underworld, redemption is a myth sold to those seeking an exit",
    "the gangster's legacy is written not in history books, but in the scars of communities",
    "in the twilight world of crime, moral absolutes dissolve into shades of survival",
    "the gangster's rise is a dark reflection of capitalism's excesses and failures",
    "in the criminal's journey, the ultimate heist is often of one's own humanity",
    "the most profound violence in the gangster's world is not physical, but spiritual",
    "in the criminal ecosystem, today's predator may become tomorrow's prey",
    "the gangster's tale is a cautionary fable of power's corrosive effect on the soul",
    "in the underworld economy, every fortune is built on a foundation of misfortune",
    "the gangster's dilemma: to rule in hell or serve in a heaven they can never enter",
    "in the criminal's ascent, each step towards power is a step away from redemption"
]

export const GangsterRealThemesTableName = "Gangster Real Themes"

export class GangsterRealThemeTable extends Table{
    constructor() {
        super();
        this.title = GangsterRealThemesTableName;
        this.addEntriesFromList(gangsterRealThemes);
    }
}