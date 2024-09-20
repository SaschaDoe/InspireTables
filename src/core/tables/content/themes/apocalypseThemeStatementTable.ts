import {Table} from "../../table";

const apocalypseThemeStatements = [
    "the apocalypse serves as a mirror for society's deepest fears and anxieties",
    "in the face of apocalypse, human nature is stripped to its core",
    "apocalyptic scenarios challenge our notions of civilization and morality",
    "the threat of apocalypse forces us to confront our place in the universe",
    "apocalyptic fiction often serves as a warning about current societal trends",
    "in apocalyptic settings, the line between hero and villain blurs",
    "the apocalypse reveals the resilience and adaptability of the human spirit",
    "post-apocalyptic worlds serve as a canvas for reimagining society",
    "the concept of apocalypse challenges our perception of time and history",
    "apocalyptic themes explore the tension between individual survival and collective responsibility",
    "in apocalyptic scenarios, nature often reclaims what humanity has built",
    "the apocalypse strips away social constructs, revealing raw human nature",
    "apocalyptic stories often serve as parables for environmental stewardship",
    "the fear of apocalypse reflects humanity's struggle with its own mortality",
    "post-apocalyptic narratives explore the persistence of hope in dire circumstances",
    "we're in the middle of an apocalypse, and we don't even know it",
    "apocalypse is not something which is coming. the apocalypse has arrived in major portions of the planet and it's only because we live within a bubble of incredible privilege and social insulation that we still have the luxury of anticipating the apocalypse",
    "every apocalypse is a world of hope",
    "the apocalypse is not something which is coming. the apocalypse has arrived in major portions of the planet and it's only because we live within a bubble of incredible privilege and social insulation that we still have the luxury of anticipating the apocalypse",
    "i've always been drawn to apocalyptic stories, whether they be movies or books or just stories that someone tells you",
    "the reality of the apocalypse is that it is a change in reality",
    "what's the use of preserving a planet if no one worth a damn can live on it",
    "if the world were to end tomorrow, i would still plant an apple tree today",
    "the apocalypse only needs to happen once",
    "we are living in the apocalypse. the world as we know it has already ended",
    "the end is not an event, it's a process",
    "civilization ends with a whimper, not a bang",
    "in the ruins of the old world, we build the new",
    "when society crumbles, true human nature emerges",
    "the greatest threat to our existence is our own actions",
    "in the face of extinction, every choice matters",
    "the world doesn't end all at once - it ends for someone every day",
    "survival is insufficient in a world stripped bare",
    "when the lights go out, humanity's true colors shine",
    "the end of the world is just the beginning of another",
    "in the ashes of what was, we find who we truly are",
    "the fall of civilization is the rise of the individual",
    "when systems fail, communities prevail",
    "the death of the old world is the birth of infinite possibilities",
    "in the wasteland, hope is the most precious resource"
];

export const ApocalypseThemeStatementTableName = "Apocalypse theme statement";

export class ApocalypseThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = ApocalypseThemeStatementTableName;
        this.addEntriesFromList(apocalypseThemeStatements);
    }
}