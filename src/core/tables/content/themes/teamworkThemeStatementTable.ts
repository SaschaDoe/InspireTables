import {Table} from "../../table";

const teamworkThemeStatements = [
    "individually, we are one drop. together, we are an ocean",
    "the strength of the pack is the wolf, and the strength of the wolf is the pack",
    "united we stand, divided we fall",
    "many hands make light work",
    "alone we can do so little; together we can do so much",
    "the whole is greater than the sum of its parts",
    "no one can whistle a symphony. it takes an orchestra to play it",
    "if you want to go fast, go alone. if you want to go far, go together",
    "collaboration is multiplication",
    "in unity there is strength",
    "none of us is as smart as all of us",
    "coming together is a beginning, staying together is progress, and working together is success",
    "the ratio of we's to i's is the best indicator of the development of a team",
    "it is literally true that you can succeed best and quickest by helping others to succeed",
    "if everyone is moving forward together, then success takes care of itself",
    "talent wins games, but intelligence and teamwork win championships",
    "find a group of people who challenge and inspire you, spend a lot of time with them, and it will change your life",
    "the best way to predict the future is to create it",
    "great things in business are never done by one person. they're done by a team of people",
    "a group becomes a team when each member is sure enough of himself and his contribution to praise the skills of others",
    "the secret is to gang up on the problem, rather than each other",
    "if i have seen further, it is by standing on the shoulders of giants",
    "the way a team plays as a whole determines its success. you may have the greatest bunch of individual stars in the world, but if they don't play together, the club won't be worth a dime",
    "it is amazing how much people can get done if they do not worry about who gets the credit",
    "remember, upon the conduct of each depends the fate of all",
    "no matter how brilliant your mind or strategy, if you're playing a solo game, you'll always lose out to a team",
    "coming together is a beginning. keeping together is progress. working together is success",
    "the nicest thing about teamwork is that you always have others on your side",
    "none of us, including me, ever do great things. but we can all do small things, with great love, and together we can do something wonderful",
    "the strength of the team is each individual member. the strength of each member is the team",
    "individual commitment to a group effort--that is what makes a team work, a company work, a society work, a civilization work",
    "teamwork begins by building trust. and the only way to do that is to overcome our need for invulnerability",
    "the achievements of an organization are the results of the combined effort of each individual",
    "the way to achieve your own success is to be willing to help somebody else get it first",
    "if you can laugh together, you can work together",
    "one piece of log creates a small fire, adequate to warm you up, add just a few more pieces to blast an immense bonfire, large enough to warm up your entire circle of friends; needless to say that individuality counts but teamwork dynamites",
    "a successful team is a group of many hands but of one mind",
    "the leaders who work most effectively, it seems to me, never say 'i'. and that's not because they have trained themselves not to say 'i'. they don't think 'i'. they think 'we'; they think 'team'",
    "in the long history of humankind (and animal kind, too) those who learned to collaborate and improvise most effectively have prevailed",
    "it takes two flints to make a fire"
];

export const TeamworkThemeStatementTableName = "Teamwork theme statement";

export class TeamworkThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = TeamworkThemeStatementTableName;
        this.addEntriesFromList(teamworkThemeStatements);
    }
}