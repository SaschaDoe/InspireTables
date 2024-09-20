import {Table} from "../../table";

const personalityGrowthThemeStatements = [
    "every challenge faced is a chance to forge a stronger self",
    "in the crucible of adversity, our true character is revealed and refined",
    "the journey of self-discovery is a lifelong adventure",
    "each interaction with others offers a mirror to better understand ourselves",
    "wisdom often comes from embracing our mistakes and learning from them",
    "the path to becoming our best selves is paved with both triumphs and setbacks",
    "true strength lies in the ability to continually reinvent oneself",
    "our experiences shape us, but our responses to them define us",
    "self-awareness is the first step on the road to self-improvement",
    "in pushing our boundaries, we discover the extent of our capabilities",
    "change is inevitable, but transformation is a choice",
    "the greatest battle we face is often with our own limiting beliefs",
    "every day offers a new opportunity to become a better version of ourselves",
    "resilience is not about bouncing back, but about growing through adversity",
    "the quality of our relationships often reflects our internal growth",
    "be the change you wish to see in the world",
    "life isn't about finding yourself. life is about creating yourself",
    "the curious paradox is that when i accept myself just as i am, then i can change",
    "the only person you are destined to become is the person you decide to be",
    "you must be the change you wish to see in the world",
    "i am not what happened to me, i am what i choose to become",
    "we cannot become what we want by remaining what we are",
    "and the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom",
    "life is not a problem to be solved, but a reality to be experienced",
    "the greatest discovery of any generation is that a human being can alter his life by altering his attitude",
    "you cannot swim for new horizons until you have courage to lose sight of the shore",
    "the only way to do great work is to love what you do",
    "your time is limited, don't waste it living someone else's life",
    "we are what we repeatedly do. excellence, then, is not an act, but a habit",
    "the most difficult thing is the decision to act, the rest is merely tenacity",
    "twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do",
    "happiness is not something readymade. it comes from your own actions",
    "the only person you are destined to become is the person you decide to be",
    "if you don't like something, change it. if you can't change it, change your attitude",
    "the best way to predict your future is to create it",
    "life is 10% what happens to you and 90% how you react to it",
    "you must do the things you think you cannot do",
    "the only limit to our realization of tomorrow will be our doubts of today",
    "what lies behind us and what lies before us are tiny matters compared to what lies within us",
    "it is never too late to be what you might have been"
];

export const PersonalityGrowthThemeStatementTableName = "Personality Growth theme statement";

export class PersonalityGrowthThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = PersonalityGrowthThemeStatementTableName;
        this.addEntriesFromList(personalityGrowthThemeStatements);
    }
}