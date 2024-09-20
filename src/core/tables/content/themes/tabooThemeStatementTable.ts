import {Table} from "../../table";

const tabooThemeStatements = [
    "society's boundaries are often drawn in invisible ink",
    "the forbidden fruit is always the sweetest",
    "what lies beyond the pale often holds the greatest allure",
    "in crossing lines, we often find our true selves",
    "the most profound truths often hide in the shadows of propriety",
    "societal norms are but fragile constructs, easily shattered by human desire",
    "the edge of acceptability is where the most intriguing stories unfold",
    "what society deems untouchable often becomes the most tempting",
    "in breaking rules, we sometimes forge new understandings",
    "the most powerful desires are often those we're told to suppress",
    "convention is the enemy of progress",
    "the only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion",
    "the most courageous act is still to think for yourself. aloud",
    "to sin by silence, when we should protest, makes cowards out of men",
    "your silence will not protect you",
    "civilization is the progress toward a society of privacy",
    "every act of rebellion expresses a nostalgia for innocence and an appeal to the essence of being",
    "the first condition of progress is the removal of censorship",
    "if liberty means anything at all, it means the right to tell people what they do not want to hear",
    "censorship is telling a man he can't have a steak just because a baby can't chew it",
    "the peculiar evil of silencing the expression of an opinion is that it is robbing the human race",
    "free speech is not just one particular freedom, it's the means by which we protect all our other freedoms",
    "art is dangerous. it is one of the attractions: when it ceases to be dangerous you don't want it",
    "the books that the world calls immoral are books that show the world its own shame",
    "i disapprove of what you say, but i will defend to the death your right to say it",
    "if we don't believe in freedom of expression for people we despise, we don't believe in it at all",
    "freedom is always the freedom of dissenters",
    "once a government is committed to the principle of silencing the voice of opposition, it has only one way to go, and that is down the path of increasingly repressive measures",
    "fear of serious injury cannot alone justify suppression of free speech and assembly",
    "restriction of free thought and free speech is the most dangerous of all subversions",
    "may we never confuse honest dissent with disloyal subversion",
    "heresy is another word for freedom of thought",
    "every burned book enlightens the world",
    "forbidden things have a secret charm",
    "the most dangerous creation of any society is the man who has nothing to lose",
    "the urge to censor is greatest where debate is most disquieting",
    "the disease of 'socially-acceptable' language is mortal",
    "that which is forbidden must be even more delightful",
    "in a time of universal deceit, telling the truth is a revolutionary act",
    "the real problem is not whether machines think but whether men do"
];

export const TabooThemeStatementTableName = "Taboo theme statement";

export class TabooThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = TabooThemeStatementTableName;
        this.addEntriesFromList(tabooThemeStatements);
    }
}