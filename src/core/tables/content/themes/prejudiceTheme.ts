import { Theme } from "../../../entities/genre/theme";
import { Source } from "../../../entities/genre/source";

export const PrejudiceThemeName = "prejudice";

export class PrejudiceTheme extends Theme {
    constructor() {
        super();
        this.name = PrejudiceThemeName;
        this.description = "Explore biases, discrimination, and preconceived notions based on race, gender, class, or other factors, and their impact on individuals and society";
        this.sources.push(
            new Source()
                .withName("To Kill a Mockingbird")
                .withLink("https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird")
                .withDescription("Harper Lee's novel addressing racial prejudice in the American South"),
            new Source()
                .withName("Pride and Prejudice")
                .withLink("https://en.wikipedia.org/wiki/Pride_and_Prejudice")
                .withDescription("Jane Austen's novel exploring social and class prejudices"),
            new Source()
                .withName("The Color Purple")
                .withLink("https://en.wikipedia.org/wiki/The_Color_Purple")
                .withDescription("Alice Walker's novel dealing with racial and gender prejudice"),
            new Source()
                .withName("Crash")
                .withLink("https://en.wikipedia.org/wiki/Crash_(2004_film)")
                .withDescription("Film exploring racial tensions and prejudices in Los Angeles"),
            new Source()
                .withName("X-Men")
                .withLink("https://en.wikipedia.org/wiki/X-Men")
                .withDescription("Comic series and films using mutants as an allegory for prejudice")
        );

        this.subjects = ["Discrimination", "Bias", "Stereotypes", "Intolerance", "Racism", "Sexism", "Xenophobia", "Equality", "Diversity", "Acceptance", "Segregation", "Social justice"];
        this.verbs = ["discriminates", "stereotypes", "oppresses", "excludes", "judges", "marginalizes", "stigmatizes", "alienates", "segregates", "overlooks", "misunderstands", "scapegoats"];
        this.objects = ["minority groups", "cultural differences", "social norms", "individual rights", "equal opportunities", "societal perceptions", "systemic barriers", "personal identity", "human dignity", "social harmony", "unearned privilege", "historical injustices"];
        this.modifiers = ["biased", "discriminatory", "intolerant", "ignorant", "unfair", "divisive", "harmful", "deep-rooted", "systemic", "unconscious", "overt", "institutionalized"];
        this.connectors = ["against", "despite", "in spite of", "due to", "because of", "regardless of", "in the face of", "as a result of", "in reaction to", "stemming from", "rooted in", "perpetuated by"];
        this.outcomes = [
            "overcoming societal prejudices",
            "challenging ingrained stereotypes",
            "bridging cultural divides",
            "exposing systemic discrimination",
            "achieving personal growth through confronting biases",
            "fostering understanding between different groups",
            "dismantling discriminatory systems",
            "reclaiming personal identity in the face of prejudice",
            "creating inclusive communities",
            "breaking cycles of intergenerational prejudice",
            "transforming societal attitudes",
            "reconciling conflicting cultural values",
            "empowering marginalized voices",
            "revealing the common humanity beneath surface differences"
        ];
        this.contexts = [
            "a racially segregated community",
            "a workplace with gender discrimination",
            "a school integrating students from diverse backgrounds",
            "a society grappling with immigration",
            "a futuristic world with new forms of prejudice",
            "a courtroom drama involving bias",
            "a family dealing with intergenerational cultural conflicts",
            "a sports team overcoming racial barriers",
            "a political campaign addressing social inequalities",
            "a historically oppressed community fighting for rights",
            "a media landscape perpetuating harmful stereotypes",
            "a scientific community challenging biased research",
            "a religious community confronting internal prejudices",
            "a social movement combating systemic discrimination",
            "a personal journey of unlearning internalized biases"
        ];
    }
}