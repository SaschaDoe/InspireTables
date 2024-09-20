import {Table} from "../../../table";

export const performanceRealThemes = [
    "the stage is a blank canvas, waiting to be filled with life",
    "in sports and art, practice makes progress, not perfection",
    "behind every great performance lies countless hours of unseen effort",
    "i have not failed. i've just found 10,000 ways that won't work",
    "the body achieves what the mind believes",
    "every setback is a setup for a comeback",
    "art is not what you see, but what you make others see",
    "champions keep playing until they get it right",
    "creativity is allowing yourself to make mistakes; art is knowing which ones to keep",
    "it's not whether you get knocked down, it's whether you get up",
    "art is the lie that enables us to realize the truth",
    "i've missed more than 9000 shots in my career. i've failed over and over and over again in my life. and that is why i succeed",
    "if you hear a voice within you say 'you cannot paint,' then by all means paint, and that voice will be silenced",
    "the more difficult the victory, the greater the happiness in winning",
    "all the world's a stage, and all the men and women merely players",
    "to be an artist is to believe in life",
    "pressure is a privilege - it only comes to those who earn it",
    "art is never finished, only abandoned",
    "the difference between the impossible and the possible lies in a person's determination",
    "the only way to do great work is to love what you do",
    "success is not final, failure is not fatal: it is the courage to continue that counts",
    "art enables us to find ourselves and lose ourselves at the same time",
    "you miss 100% of the shots you don't take",
    "the pain you feel today will be the strength you feel tomorrow",
    "every artist was first an amateur"
]

export const PerformanceRealThemesTableName = "Performance Real Themes"

export class PerformanceRealThemeTable extends Table{
    constructor() {
        super();
        this.title = PerformanceRealThemesTableName;
        this.addEntriesFromList(performanceRealThemes);
    }
}