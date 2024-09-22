import { Theme } from "../../../entities/genre/theme";
import { Source } from "../../../entities/genre/source";

export const SacrificeThemeName = "sacrifice";

export class SacrificeTheme extends Theme {
    constructor() {
        super();
        this.name = SacrificeThemeName;
        this.description = "Explore the concept of giving up something valuable for a greater cause, the good of others, or personal growth";
        this.sources.push(
            new Source()
                .withName("A Tale of Two Cities")
                .withLink("https://en.wikipedia.org/wiki/A_Tale_of_Two_Cities")
                .withDescription("Charles Dickens' novel featuring ultimate self-sacrifice"),
            new Source()
                .withName("The Hunger Games")
                .withLink("https://en.wikipedia.org/wiki/The_Hunger_Games")
                .withDescription("Suzanne Collins' series where characters sacrifice for family and freedom"),
            new Source()
                .withName("Schindler's List")
                .withLink("https://en.wikipedia.org/wiki/Schindler%27s_List")
                .withDescription("Film about a man sacrificing wealth and safety to save others"),
            new Source()
                .withName("The Gift of the Magi")
                .withLink("https://en.wikipedia.org/wiki/The_Gift_of_the_Magi")
                .withDescription("O. Henry's short story about sacrificial love"),
            new Source()
                .withName("The Green Mile")
                .withLink("https://en.wikipedia.org/wiki/The_Green_Mile_(novel)")
                .withDescription("Stephen King's novel featuring supernatural sacrifice")
        );

        this.subjects = ["Altruism", "Self-sacrifice", "Greater good", "Heroism", "Loss", "Martyrdom", "Selflessness", "Commitment", "Valor", "Benevolence", "Devotion", "Renunciation"];
        this.verbs = ["surrenders", "gives up", "forfeits", "relinquishes", "endures", "offers", "abandons", "dedicates", "risks", "forgoes", "yields", "renounces"];
        this.objects = ["personal desires", "life", "freedom", "comfort", "safety", "wealth", "power", "love", "dreams", "identity", "future", "beliefs"];
        this.modifiers = ["selfless", "noble", "heart-wrenching", "ultimate", "voluntary", "necessary", "painful", "heroic", "profound", "bittersweet", "life-changing", "transformative"];
        this.connectors = ["for the sake of", "in exchange for", "to ensure", "at the cost of", "in the name of", "to protect", "in service of", "to save", "in hopes of", "to preserve", "in honor of", "to redeem"];
        this.outcomes = [
            "saving lives at great personal cost",
            "achieving victory through personal loss",
            "ensuring the greater good by forsaking individual happiness",
            "transforming society through martyrdom",
            "preserving a way of life by giving up one's own",
            "atoning for past wrongs through self-sacrifice",
            "inspiring others through selfless acts",
            "securing a better future for loved ones",
            "discovering inner strength through sacrifice",
            "changing the course of history through individual action",
            "finding redemption through selflessness",
            "breaking cycles of violence or oppression",
            "achieving spiritual or moral growth through renunciation",
            "forging unbreakable bonds through shared sacrifice"
        ];
        this.contexts = [
            "a war-torn country",
            "a community facing a natural disaster",
            "a family in crisis",
            "a society under oppression",
            "a world threatened by supernatural forces",
            "a competitive professional environment",
            "a post-apocalyptic survival scenario",
            "a religious or spiritual journey",
            "a revolutionary movement",
            "a scientific expedition with high stakes",
            "a dystopian society where individuality is suppressed",
            "a time-travel scenario where one must alter the past",
            "a space colonization mission",
            "an undercover operation requiring deep personal compromise",
            "a community ritual or tradition demanding sacrifice"
        ];
    }
}