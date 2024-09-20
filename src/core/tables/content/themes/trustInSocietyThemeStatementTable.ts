import {Table} from "../../table";

const trustInSocietyThemeStatements = [
    "a nation's strength lies in the bonds between its people",
    "the fabric of community is woven with threads of mutual reliance",
    "in a world of strangers, faith in our fellow man is the invisible glue that holds us together",
    "societies flourish when citizens believe in the goodwill of their neighbors",
    "the cornerstone of civilization is the unspoken agreement to look out for one another",
    "progress is impossible without faith in human potential",
    "a house divided against itself cannot stand",
    "the strength of a nation derives from the integrity of the home",
    "to build a better world, start by believing in the goodness of people",
    "social cohesion begins with the assumption of good intentions",
    "the measure of a society is found in how it treats its most vulnerable members",
    "a chain is only as strong as its weakest link",
    "united we stand, divided we fall",
    "the health of a democracy is dependent on the faith of its citizens",
    "prosperity flows where confidence in institutions runs deep",
    "in unity there is strength",
    "faith in each other is the foundation upon which great nations are built",
    "a society grows great when old men plant trees whose shade they know they shall never sit in",
    "the true test of civilization is not the census, nor the size of cities, nor the crops, but the kind of man that the country turns out",
    "i think we all have a little voice inside us that will guide us. it may be God, i don't know. but i think that if we shut out all the noise and clutter from our lives and listen to that voice, it will tell us the right thing to do",
    "we must learn to live together as brothers or perish together as fools",
    "civility costs nothing and buys everything",
    "the ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy",
    "do your little bit of good where you are; it's those little bits of good put together that overwhelm the world",
    "never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has",
    "the best way to find out if you can trust somebody is to trust them",
    "society is unity in diversity",
    "if you want to go quickly, go alone. if you want to go far, go together",
    "the greatness of a community is most accurately measured by the compassionate actions of its members",
    "we rise by lifting others",
    "alone we can do so little; together we can do so much",
    "the way to right wrongs is to turn the light of truth upon them",
    "we must accept finite disappointment, but never lose infinite hope",
    "our lives begin to end the day we become silent about things that matter",
    "injustice anywhere is a threat to justice everywhere",
    "the ultimate tragedy is not the oppression and cruelty by the bad people but the silence over that by the good people",
    "civilization is a method of living, an attitude of equal respect for all men",
    "if we have no peace, it is because we have forgotten that we belong to each other",
    "the test of our progress is not whether we add more to the abundance of those who have much; it is whether we provide enough for those who have too little",
    "the opposite of poverty is not wealth. the opposite of poverty is justice"
];

export const TrustInSocietyThemeStatementTableName = "Trust in Society theme statement";

export class TrustInSocietyThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = TrustInSocietyThemeStatementTableName;
        this.addEntriesFromList(trustInSocietyThemeStatements);
    }
}