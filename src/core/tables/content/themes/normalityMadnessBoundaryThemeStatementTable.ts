import {Table} from "../../table";

const normalityMadnessBoundaryThemeStatements = [
    "the line between genius and insanity is measured only by success",
    "in a world gone astray, the adjusted man is deemed peculiar",
    "society's standards are often the true measure of lunacy",
    "what appears eccentric today may be tomorrow's convention",
    "the most vibrant minds often dance on the edge of reason",
    "conformity is the jailer of freedom and the enemy of growth",
    "in the asylum of life, the sane inmate seems like the odd one out",
    "the truly enlightened often appear unhinged to the masses",
    "one person's delusion is another's reality",
    "the greatest ideas often emerge from minds unfettered by convention",
    "societal norms are but collective illusions we agree to believe",
    "in a mad world, only the mad are sane",
    "the most dangerous people are those who are certain of their sanity",
    "eccentricity is often the public face of genius",
    "what we call madness is often just a new perspective",
    "it is sometimes an appropriate response to reality to go insane",
    "the only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time",
    "we're all mad here. i'm mad. you're mad. you must be, or you wouldn't have come here",
    "reality is merely an illusion, albeit a very persistent one",
    "the distance between insanity and genius is measured only by success",
    "there is no great genius without a mixture of madness",
    "better to be alone than in bad company",
    "those who were seen dancing were thought to be insane by those who could not hear the music",
    "the men of action are, after all, only the unconscious instruments of the men of thought",
    "it is no measure of health to be well adjusted to a profoundly sick society",
    "i became insane, with long intervals of horrible sanity",
    "the world we see that seems so insane is the result of a belief system that is not working",
    "sanity is very rare: every man almost, and every woman, has a dash of madness",
    "a man needs a little madness, or else he never dares cut the rope and be free",
    "the individual has always had to struggle to keep from being overwhelmed by the tribe",
    "you're only given a little spark of madness. you mustn't lose it",
    "insanity is relative. it depends on who has who locked in what cage",
    "the most dangerous people are those who are certain of their sanity",
    "humans are the only creatures who create their own hell and call it paradise",
    "the only difference between the sane and the insane is that the sane have the power to lock up the insane",
    "the statistics on sanity are that one out of every four people is suffering from a mental illness. look at your 3 best friends. if they're ok, then it's you",
    "just because you're paranoid doesn't mean they aren't after you",
    "when we remember we are all mad, the mysteries disappear and life stands explained",
    "the whole world is about three drinks behind",
    "what sane person could live in this world and not be crazy?"
];

export const NormalityMadnessBoundaryThemeStatementTableName = "Normality Madness Boundary theme statement";

export class NormalityMadnessBoundaryThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = NormalityMadnessBoundaryThemeStatementTableName;
        this.addEntriesFromList(normalityMadnessBoundaryThemeStatements);
    }
}