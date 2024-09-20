import {Table} from "../../table";

const mistakenIdentityThemeStatements = [
    "appearances can be deceiving, even to those who think they know us best",
    "in the mirror of others' perceptions, we sometimes see a stranger",
    "the masks we wear often become the face others recognize",
    "true understanding requires looking beyond surface impressions",
    "in the game of life, sometimes we're dealt the wrong name tag",
    "the gap between who we are and who others think we are can be a chasm",
    "assumptions are the shortest path to misunderstanding",
    "in a world of quick judgments, nuance is often the first casualty",
    "the stories we tell about others are often more fiction than fact",
    "first impressions are rarely the whole story",
    "in the theatre of life, we sometimes find ourselves playing the wrong role",
    "the labels others give us can be ill-fitting costumes",
    "true recognition often comes from those who take the time to look deeper",
    "in the rush to categorize, we often misfile the most interesting people",
    "the persona we project and the person we are can be worlds apart",
    "be yourself; everyone else is already taken",
    "we are what we pretend to be, so we must be careful about what we pretend to be",
    "i am not what i think i am, and i am not what you think i am. i am what i think you think i am",
    "we all wear masks, and the time comes when we cannot remove them without removing some of our own skin",
    "the world is a stage, but the play is badly cast",
    "there are no strangers here; only friends you haven't yet met",
    "all the world's a stage, and all the men and women merely players",
    "i'm not a stranger. i'm someone you haven't had the chance to meet properly yet",
    "the greatest friend of truth is time, her greatest enemy is prejudice, and her constant companion is humility",
    "to be yourself in a world that is constantly trying to make you something else is the greatest accomplishment",
    "we are so accustomed to disguise ourselves to others that in the end we become disguised to ourselves",
    "we understand how dangerous a mask can be. we all become what we pretend to be",
    "i think the reward for conformity is that everyone likes you except yourself",
    "man is least himself when he talks in his own person. give him a mask, and he will tell you the truth",
    "we are what we pretend to be, so we must be careful about what we pretend to be",
    "you wear a mask for so long, you forget who you were beneath it",
    "we all have a hidden side, but some of us hide it even from ourselves",
    "it's not what you look at that matters, it's what you see",
    "the eye sees only what the mind is prepared to comprehend",
    "there are things known and there are things unknown, and in between are the doors of perception",
    "the single biggest problem in communication is the illusion that it has taken place",
    "the most common way people give up their power is by thinking they don't have any",
    "we don't see things as they are, we see them as we are",
    "in a world of appearances, look for the essence",
    "sometimes the heart sees what is invisible to the eye"
];

export const MistakenIdentityThemeStatementTableName = "Mistaken Identity theme statement";

export class MistakenIdentityThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = MistakenIdentityThemeStatementTableName;
        this.addEntriesFromList(mistakenIdentityThemeStatements);
    }
}