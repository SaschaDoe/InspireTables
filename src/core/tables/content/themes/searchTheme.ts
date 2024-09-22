import { Theme } from "../../../entities/genre/theme";
import { Source } from "../../../entities/genre/source";

export const SearchThemeName = "search";

export class SearchTheme extends Theme {
    constructor() {
        super();
        this.name = SearchThemeName;
        this.description = "The pursuit of something lost, hidden, or desired, often involving physical, emotional, or intellectual exploration.";
        this.sources.push(
            new Source()
                .withName("The Da Vinci Code")
                .withLink("https://en.wikipedia.org/wiki/The_Da_Vinci_Code")
                .withDescription("Thriller involving a search for hidden religious secrets"),
            new Source()
                .withName("Eternal Sunshine of the Spotless Mind")
                .withLink("https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind")
                .withDescription("Film about searching for lost memories and love"),
        );

        this.subjects = ["Detective", "Scientist", "Adventurer", "Lover", "Historian", "Spiritual seeker", "Parent"];
        this.verbs = ["investigates", "explores", "uncovers", "pursues", "decodes", "excavates", "yearns for"];
        this.objects = ["truth", "lost artifact", "missing person", "hidden knowledge", "inner peace", "cure", "meaning of life"];
        this.modifiers = ["relentlessly", "methodically", "desperately", "cautiously", "passionately", "cleverly", "obsessively"];
        this.connectors = ["while battling against", "through a series of", "despite obstacles from", "by following clues in", "with the help of", "across vast expanses of", "within the depths of"];
        this.outcomes = [
            "solving a mystery",
            "reuniting with a loved one",
            "discovering a shocking truth",
            "finding inner peace",
            "uncovering a conspiracy",
            "achieving a scientific breakthrough",
            "locating a priceless treasure",
            "understanding one's true identity",
            "revealing a hidden history"
        ];
        this.contexts = [
            "crime scene investigation",
            "archaeological dig",
            "deep space exploration",
            "historical research",
            "spiritual pilgrimage",
            "medical diagnosis",
            "wilderness expedition",
            "digital data mining",
            "psychological introspection",
            "undercover mission"
        ];
    }
}