import {Table} from "../../../table";

export const sciFiRealThemes = [
    "any sufficiently advanced technology is indistinguishable from magic",
    "the future is already here — it's just not very evenly distributed",
    "i'm sorry, dave. i'm afraid i can't do that",
    "science fiction is the improbable made possible",
    "in the face of the unknown, humanity's greatest strength is its adaptability",
    "do or do not. there is no try",
    "the more we learn about the universe, the more we realize how little we know",
    "i've seen things you people wouldn't believe",
    "sometimes to create, one must first destroy",
    "the line between man and machine blurs with each passing day",
    "in space, no one can hear you dream",
    "time is the fire in which we burn",
    "reality is that which, when you stop believing in it, doesn't go away",
    "we are all in the gutter, but some of us are looking at the stars",
    "i must not fear. fear is the mind-killer",
    "the saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom",
    "imagination is the only weapon in the war against reality",
    "there is no darkness in space. only the absence of light",
    "we are an impossibility in an impossible universe",
    "the universe is not only stranger than we imagine, it is stranger than we can imagine",
    "two possibilities exist: either we are alone in the universe or we are not. both are equally terrifying",
    "science fiction is any idea that occurs in the head and doesn't exist yet, but soon will",
    "the only way to discover the limits of the possible is to go beyond them into the impossible",
    "in the long run, the pessimist may be proven right, but the optimist has a better time on the trip",
]

export const SciFiRealThemesTableName = "SciFi Real Themes"

export class SciFiRealThemeTable extends Table{
    constructor() {
        super();
        this.title = SciFiRealThemesTableName;
        this.addEntriesFromList(sciFiRealThemes);
    }
}