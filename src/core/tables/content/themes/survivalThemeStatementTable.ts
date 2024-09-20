import {Table} from "../../table";

const survivalThemeStatements = [
    "in the face of adversity, the human spirit finds its true strength",
    "when pushed to the brink, we discover resources within us we never knew existed",
    "adaptation is the key to overcoming life's harshest challenges",
    "in the darkest times, hope becomes our most precious resource",
    "the will to persevere is often the difference between life and death",
    "nature tests us, but also teaches us the art of resilience",
    "in crisis, we learn the true measure of our capabilities",
    "endurance is not just about physical strength, but mental fortitude",
    "the strongest steel is forged in the hottest fires",
    "in life's harshest moments, we find out who we truly are",
    "it's not the strongest who prevail, but those most responsive to change",
    "what doesn't kill you makes you stronger",
    "i am not what happened to me, i am what i choose to become",
    "the human capacity for burden is like bamboo - far more flexible than you'd ever believe at first glance",
    "rock bottom became the solid foundation on which i rebuilt my life",
    "life is not about waiting for the storm to pass, it's about learning to dance in the rain",
    "the ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy",
    "do not judge me by my success, judge me by how many times i fell down and got back up again",
    "when we long for life without difficulties, remind us that oaks grow strong in contrary winds and diamonds are made under pressure",
    "the world breaks everyone, and afterward, some are strong at the broken places",
    "out of suffering have emerged the strongest souls; the most massive characters are seared with scars",
    "i can be changed by what happens to me. but i refuse to be reduced by it",
    "the bamboo that bends is stronger than the oak that resists",
    "when the going gets tough, the tough get going",
    "fall seven times, stand up eight",
    "the gem cannot be polished without friction, nor man perfected without trials",
    "the most beautiful people we have known are those who have known defeat, known suffering, known struggle, known loss, and have found their way out of the depths",
    "we don't develop courage by being happy every day. we develop it by surviving difficult times and challenging adversity",
    "you never know how strong you are until being strong is your only choice",
    "the greatest glory in living lies not in never falling, but in rising every time we fall",
    "in the midst of winter, i found there was, within me, an invincible summer",
    "it is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better",
    "i'm not afraid of storms, for i'm learning how to sail my ship",
    "life doesn't get easier or more forgiving; we get stronger and more resilient",
    "tough times never last, but tough people do",
    "the oak fought the wind and was broken, the willow bent when it must and survived",
    "courage doesn't always roar. sometimes courage is the quiet voice at the end of the day saying, 'i will try again tomorrow'",
    "the human spirit is stronger than anything that can happen to it",
    "you may encounter many defeats, but you must not be defeated",
    "it is in the roots, not the branches, that a tree's greatest strength lies"
];

export const SurvivalThemeStatementTableName = "Survival theme statement";

export class SurvivalThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = SurvivalThemeStatementTableName;
        this.addEntriesFromList(survivalThemeStatements);
    }
}