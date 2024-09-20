import {Table} from "../../../table";

export const crimeRealThemes = [
    "in the pursuit of justice, the hunter risks becoming the hunted",
    "power, once tasted, has the potency to corrupt even the most virtuous souls",
    "behind the badge of law lies a minefield of moral ambiguities",
    "the wheels of crime and punishment turn in an endless cycle, each feeding the other",
    "poverty and desperation often sow the seeds from which criminal empires grow",
    "a life outside the law exacts a toll paid not in currency, but in peace of mind",
    "in a world painted in shades of gray, the line between hero and villain blurs with each decision",
    "loyalty in the underworld is a currency more valuable than gold, yet more fragile than glass",
    "redemption's path is paved with good intentions, but littered with the remnants of past sins",
    "the siren song of criminal life promises freedom, but delivers a gilded cage",
    "a single act of crime ripples through time, reshaping the shores of countless lives",
    "we are all prisoners of circumstance, but some choose to pick the lock",
    "in the crucible of justice, even the most noble intentions may be forged into cruelty",
    "the greatest heists are not of wealth, but of the human psyche",
    "when survival hangs in the balance, morality becomes a luxury few can afford",
    "within every saint lurks the potential for sin, and within every sinner, a glimmer of virtue",
    "in the game of crime, fate deals the cards, but choice plays the hand",
    "genius and madness are two sides of the same coin, spinning in the minds of those who defy the law",
    "in the age of information, deception is the most valuable contraband",
    "in a world of masks and mirrors, the greatest mystery is often one's true self",
    "the weight of unspoken crimes can crush a soul more surely than any prison",
    "in the labyrinth of justice, the path of righteousness often leads to moral crossroads"
]

export const CrimeRealThemesTableName = "Criminal Real Themes"

export class CrimeRealThemeTable extends Table{
    constructor() {
        super();
        this.title = CrimeRealThemesTableName;
        this.addEntriesFromList(crimeRealThemes);
    }
}