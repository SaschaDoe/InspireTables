import { Theme } from "../../../entities/genre/theme";
import { Source } from "../../../entities/genre/source";

export const ApocalypseThemeName = "apocalypse";

export class ApocalypseTheme extends Theme {
    constructor() {
        super();
        this.name = ApocalypseThemeName;
        this.description = "Explore the concept of apocalypse, its causes, consequences, and impact on individuals and society across various scenarios and scales";
        this.sources.push(
            new Source()
                .withName("On the Beach")
                .withLink("https://en.wikipedia.org/wiki/On_the_Beach_(novel)")
                .withDescription("Depicts the gradual end of human civilization due to nuclear fallout"),
            new Source()
                .withName("The Road")
                .withLink("https://en.wikipedia.org/wiki/The_Road")
                .withDescription("Explores a post-apocalyptic world and the struggle for survival and humanity"),
            new Source()
                .withName("Good Omens")
                .withLink("https://en.wikipedia.org/wiki/Good_Omens")
                .withDescription("A humorous take on the biblical apocalypse and the forces trying to stop it"),
            new Source()
                .withName("Melancholia")
                .withLink("https://en.wikipedia.org/wiki/Melancholia_(2011_film)")
                .withDescription("Examines personal and global apocalypse through the lens of depression and cosmic events")
        );

        this.subjects = ["Civilization", "Humanity", "Nature", "Technology", "Morality", "Survival", "Legacy"];
        this.verbs = ["collapses", "transforms", "challenges", "redefines", "eradicates", "resurrects", "transcends"];
        this.objects = ["social order", "ecosystems", "human nature", "cultural norms", "scientific understanding", "spiritual beliefs", "global infrastructure"];
        this.modifiers = ["catastrophic", "gradual", "inevitable", "unexpected", "transformative", "cyclical", "irreversible"];
        this.connectors = ["while", "yet", "thereby", "despite", "through", "beyond", "amidst"];
        this.outcomes = [
            "leading to the rebirth of civilization",
            "exposing the resilience of human spirit",
            "reshaping the natural world",
            "challenging notions of progress and technology",
            "redefining the concept of humanity",
            "unveiling hidden truths about society",
            "forcing adaptation to extreme circumstances",
            "exploring the limits of survival",
            "examining the legacy of lost civilizations"
        ];
        this.contexts = [
            "a world ravaged by climate change",
            "the aftermath of a global pandemic",
            "a planet struck by cosmic catastrophe",
            "a society collapsed by technological failure",
            "the dawn of artificial superintelligence",
            "a world transformed by supernatural events",
            "the last days of a dying Earth",
            "a civilization facing resource depletion",
            "the convergence of multiple global crises",
            "a world where reality itself is unraveling"
        ];
    }
}