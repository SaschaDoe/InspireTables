import {Table} from "../../table";

const dutyVsDesireThemeStatements = [
    "the heart wants what it wants, but duty demands what it must",
    "in the battle between desire and duty, character is forged",
    "the greatest test of will is choosing between what we want and what we ought",
    "duty is the scaffold upon which desire builds its dreams",
    "the path of desire is easy to tread, but the road of duty leads to greatness",
    "in the tension between duty and desire, we find the essence of human drama",
    "duty without desire is drudgery, desire without duty is selfishness",
    "the noblest souls are those who can align their desires with their duties",
    "we are pulled by our passions but anchored by our obligations",
    "the weight of duty is heavy, but the regret of unfulfilled desire is heavier still",
    "in choosing duty over desire, we often discover a deeper satisfaction",
    "desire asks 'what do I want?', duty asks 'what is right?'",
    "the truest freedom lies in willingly embracing our duties",
    "our desires shape our dreams, but our duties shape our character",
    "the conflict between duty and desire is the crucible of maturity",
    "to balance duty and desire is to master the art of living",
    "duty calls us to be who we need to be, desire whispers who we want to be",
    "in the dance between duty and desire, we find the rhythm of life",
    "duty is the compass that guides us when desire would lead us astray",
    "the sweetest victories are those where duty and desire align",
    "we are defined not by our desires, but by the duties we choose to honor",
    "duty constrains us, but in those constraints, we often find our greatest strengths",
    "desire paints the world in vibrant colors, duty provides the canvas",
    "in fulfilling our duties, we often discover desires we never knew we had",
    "the heart may yearn, but it is duty that gives life its meaning",
    "desire is the spark of life, duty is the fuel that keeps it burning",
    "we dream in the language of desire, but we build in the currency of duty",
    "duty is the price we pay for the privileges we enjoy",
    "in the silence of duty, we often hear the true voice of our desires",
    "the greatest leaders are those who can transform duty into desire",
    "desire asks 'why not?', duty reminds us 'why'",
    "in the gap between duty and desire, we find the measure of our integrity",
    "duty is the invisible thread that binds society together",
    "our desires reveal who we are, our duties reveal who we can become",
    "the most fulfilling life is one where duty and desire walk hand in hand",
    "duty without desire is hollow, desire without duty is chaotic",
    "in choosing duty, we often fulfill our deepest, unrecognized desires",
    "the music of life is composed in the key of duty, with desire as its melody",
    "duty is the chisel with which we carve our character from the marble of desire",
    "in the end, we regret more the duties we neglected than the desires we denied",
    "the head and the heart often speak different languages",
    "between 'should' and 'want' lies the battlefield of the soul",
    "what we yearn for and what we owe often stand at odds",
    "the sweetest fruit often grows just beyond the fence of obligation",
    "in the crucible of conflicting impulses, we forge our true selves",
    "the most difficult choices lie between the easy path and the right one",
    "our passions pull us forward, while our responsibilities keep us grounded",
    "the noblest struggles are often internal, between what we crave and what we must do",
    "we are shaped by the promises we keep, not by the longings we indulge",
    "the truest test of character is choosing between personal gain and moral imperative",
    "our legacy is built not on what we dreamed, but on what we accomplished",
    "the heart's whispers are loud, but conscience speaks in a voice we cannot ignore",
    "we are judged not by our wants, but by our actions",
    "between temptation and obligation, we discover our true nature",
    "the most profound growth often comes from denying our immediate wants"
];

export const DutyVsDesireThemeStatementTableName = "Duty vs Desire theme statement";

export class DutyVsDesireThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = DutyVsDesireThemeStatementTableName;
        this.addEntriesFromList(dutyVsDesireThemeStatements);
    }
}