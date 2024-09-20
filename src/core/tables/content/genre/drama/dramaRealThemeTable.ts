import {Table} from "../../../table";

export const dramaRealThemes = [
    "in the tapestry of life, our greatest strengths and deepest flaws are often woven from the same thread",
    "the wounds we inherit from our past shape the legacy we leave for our future",
    "true growth often comes from embracing the pain we've spent a lifetime trying to avoid",
    "in the face of tragedy, the human spirit's capacity for resilience knows no bounds",
    "the quest for authenticity in a world of expectations can be both liberating and isolating",
    "love, in its purest form, sometimes demands sacrifice of self",
    "the weight of unspoken words can crush relationships more surely than any spoken conflict",
    "in the crucible of adversity, we often discover versions of ourselves we never knew existed",
    "the path to forgiveness is a journey that transforms both the forgiver and the forgiven",
    "our deepest fears and greatest dreams often spring from the same well of human experience",
    "the bonds of family, whether forged by blood or choice, can be both our greatest strength and our heaviest burden",
    "in the silence between words, we often find the truths we're most afraid to face",
    "the pursuit of dreams can illuminate our lives, but also cast long shadows of regret",
    "in the dance between destiny and free will, our choices become the music of our lives",
    "the masks we wear to protect ourselves often become the cages that confine us",
    "true empathy requires us to not only walk in another's shoes, but to feel the blisters they've formed",
    "in the mirror of relationships, we often see reflections of ourselves we're not prepared to face",
    "the price of ambition is often paid in the currency of personal connections",
    "in the depths of our vulnerabilities lie the seeds of our greatest strengths",
    "the journey of self-discovery is a lifelong odyssey with no fixed destination",
    "in the twilight of life, it's not our achievements that shine brightest, but the lives we've touched",
    "the most profound transformations often occur in the quietest moments of introspection"
]

export const DramaRealThemesTableName = "Drama Real Themes"

export class DramaRealThemeTable extends Table{
    constructor() {
        super();
        this.title = DramaRealThemesTableName;
        this.addEntriesFromList(dramaRealThemes);
    }
}