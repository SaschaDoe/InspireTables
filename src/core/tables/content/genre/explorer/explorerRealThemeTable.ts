import {Table} from "../../../table";

export const explorerRealThemes = [
    "the greatest frontiers we conquer are often the landscapes within ourselves",
    "in pushing the boundaries of the known world, we redefine the limits of human potential",
    "true discovery lies not in finding new lands, but in seeing with new eyes",
    "the path less traveled rewards not with treasure, but with transformation",
    "in the face of nature's grandeur, we often discover our own insignificance and magnificence",
    "the journey outward inevitably leads to a journey inward",
    "in the crucible of adventure, ordinary individuals forge extraordinary legacies",
    "the unknown is not a void to be feared, but a canvas awaiting our boldest strokes",
    "in challenging the impossible, we redefine what's possible for all of humanity",
    "the most valuable maps are those that chart the territories of the human spirit",
    "in the silence of uncharted lands, we often hear the loudest truths about ourselves",
    "true explorers know that every ending is but a prelude to a new beginning",
    "the greatest risk in life is not taking one in pursuit of our dreams",
    "in the wilderness of the world, we often find the civilized core of our being",
    "the most profound discoveries are made when we venture beyond the borders of our comfort",
    "in confronting the raw forces of nature, we strip away the veneer of civilization to reveal our true selves",
    "the quest for the unknown is often a disguised search for self-understanding",
    "in the tapestry of exploration, failure and success are merely different hues of the same grand adventure",
    "true adventurers know that the destination is merely an excuse for the journey",
    "in pushing past our perceived limits, we expand the realm of human experience for all",
    "the most valuable treasures we find are often those we didn't know we were seeking",
    "in the uncharted territories of life, courage is the only compass we can truly rely on"
]

export const ExplorerRealThemesTableName = "Explorer Real Themes"

export class ExplorerRealThemeTable extends Table{
    constructor() {
        super();
        this.title = ExplorerRealThemesTableName;
        this.addEntriesFromList(explorerRealThemes);
    }
}