import {Table} from "../../table";

const traumaThemeStatements = [
    "the wounds that never heal can be our greatest teachers",
    "in the depths of winter, i finally learned that within me there lay an invincible summer",
    "scars remind us where we've been. they don't have to dictate where we're going",
    "the oak grew strong in contrary winds and diamonds form under pressure",
    "what doesn't kill you makes you stronger, but also leaves invisible marks",
    "out of suffering have emerged the strongest souls; the most massive characters are seared with scars",
    "the human capacity for burden is like bamboo- far more flexible than you'd ever believe at first glance",
    "healing doesn't mean the damage never existed. it means the damage no longer controls our lives",
    "rock bottom became the solid foundation on which i rebuilt my life",
    "the world breaks everyone and afterward many are strong at the broken places",
    "there is no timestamp on transformation",
    "sometimes when things are falling apart, they may actually be falling into place",
    "the only way out is through",
    "your present circumstances don't determine where you can go; they merely determine where you start",
    "it's not the load that breaks you down, it's the way you carry it",
    "we don't heal in isolation, but in community",
    "the greatest glory in living lies not in never falling, but in rising every time we fall",
    "broken crayons still color",
    "you may not control all the events that happen to you, but you can decide not to be reduced by them",
    "what lies behind us and what lies before us are tiny matters compared to what lies within us",
    "the most beautiful people we have known are those who have known defeat, known suffering, known struggle, known loss, and have found their way out of the depths",
    "there is a crack in everything. that's how the light gets in",
    "you never know how strong you are until being strong is your only choice",
    "i am not what happened to me, i am what i choose to become",
    "the wound is the place where the light enters you",
    "if you're going through hell, keep going",
    "it's not about waiting for the storm to pass, it's about learning to dance in the rain",
    "in the middle of difficulty lies opportunity",
    "the soul would have no rainbow had the eyes no tears",
    "although the world is full of suffering, it is also full of the overcoming of it",
    "turn your wounds into wisdom",
    "the past does not equal the future",
    "courage doesn't always roar. sometimes courage is the quiet voice at the end of the day saying, 'i will try again tomorrow'",
    "what we achieve inwardly will change outer reality",
    "the only way to make sense out of change is to plunge into it, move with it, and join the dance",
    "life doesn't get easier or more forgiving; we get stronger and more resilient",
    "there is no greater agony than bearing an untold story inside you",
    "we are not our trauma. we are not our brain chemistry. that's part of who we are, but we're so much more than that",
    "grief is in two parts. the first is loss. the second is the remaking of life",
    "the paradox of trauma is that it has both the power to destroy and the power to transform and resurrect"
];

export const TraumaThemeStatementTableName = "Trauma theme statement";

export class TraumaThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = TraumaThemeStatementTableName;
        this.addEntriesFromList(traumaThemeStatements);
    }
}