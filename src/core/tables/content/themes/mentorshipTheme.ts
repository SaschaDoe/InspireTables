import { Theme } from "../../../entities/genre/theme";
import { Source } from "../../../entities/genre/source";

export const MentorshipThemeName = "mentorship";

export class MentorshipTheme extends Theme {
    constructor() {
        super();
        this.name = MentorshipThemeName;
        this.description = "Explore the concept of mentorship in various contexts, including personal development, professional growth, and fictional narratives";
        this.sources.push(
            new Source()
                .withName("The Odyssey")
                .withLink("https://en.wikipedia.org/wiki/Odyssey")
                .withDescription("Mentor as a guide for Telemachus, establishing the archetypal mentor figure"),
            new Source()
                .withName("Star Wars")
                .withLink("https://en.wikipedia.org/wiki/Star_Wars")
                .withDescription("Obi-Wan Kenobi and Yoda as mentors to Luke Skywalker"),
            new Source()
                .withName("To Kill a Mockingbird")
                .withLink("https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird")
                .withDescription("Atticus Finch as a moral mentor to his children"),
            new Source()
                .withName("The Karate Kid")
                .withLink("https://en.wikipedia.org/wiki/The_Karate_Kid")
                .withDescription("Mr. Miyagi as a life and martial arts mentor to Daniel"),
            new Source()
                .withName("Tuesdays with Morrie")
                .withLink("https://en.wikipedia.org/wiki/Tuesdays_with_Morrie")
                .withDescription("Morrie Schwartz as a life mentor sharing wisdom about living and dying")
        );

        this.subjects = ["Guidance", "Wisdom", "Experience", "Leadership", "Growth", "Support", "Knowledge"];
        this.verbs = ["imparts", "nurtures", "challenges", "inspires", "shapes", "transforms", "empowers"];
        this.objects = ["skills", "character", "potential", "understanding", "confidence", "perspective", "legacy"];
        this.modifiers = ["patient", "wise", "nurturing", "challenging", "inspirational", "transformative", "empowering"];
        this.connectors = ["while", "through", "as", "despite", "ultimately", "gradually", "profoundly"];
        this.outcomes = [
            "fostering personal growth",
            "developing professional skills",
            "building self-confidence",
            "expanding worldviews",
            "overcoming challenges",
            "achieving goals",
            "passing on knowledge",
            "creating lasting impact",
            "forming lifelong bonds"
        ];
        this.contexts = [
            "academic settings",
            "professional development",
            "spiritual guidance",
            "life coaching",
            "apprenticeships",
            "coming-of-age stories",
            "hero's journeys",
            "sports training",
            "artistic development",
            "leadership programs"
        ];
    }
}