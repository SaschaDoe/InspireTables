import { Theme } from "../../../entities/genre/theme";
import { Source } from "../../../entities/genre/source";

export const TechnologicalInnovationThemeName = "technological innovation";

export class TechnologicalInnovationTheme extends Theme {
    constructor() {
        super();
        this.name = TechnologicalInnovationThemeName;
        this.description = "The exploration of new technologies and their impact on individuals, society, and the human condition, often highlighting both the potential benefits and unforeseen consequences of innovation.";
        this.sources.push(
            new Source()
                .withName("Black Mirror")
                .withLink("https://en.wikipedia.org/wiki/Black_Mirror")
                .withDescription("Anthology series exploring the unanticipated consequences of new technologies"),
            new Source()
                .withName("The Martian")
                .withLink("https://en.wikipedia.org/wiki/The_Martian_(film)")
                .withDescription("Story of an astronaut using ingenuity and scientific knowledge to survive on Mars"),
        );

        this.subjects = ["Inventor", "Scientist", "Engineer", "Entrepreneur", "AI", "Hacker", "Ordinary user"];
        this.verbs = ["creates", "disrupts", "revolutionizes", "adapts to", "struggles with", "exploits", "questions"];
        this.objects = ["artificial intelligence", "renewable energy", "genetic engineering", "virtual reality", "nanotechnology", "space technology", "cybernetic enhancements"];
        this.modifiers = ["rapidly", "cautiously", "ingeniously", "recklessly", "ethically", "covertly", "collaboratively"];
        this.connectors = ["while grappling with", "in an attempt to solve", "despite the ethical implications of", "by leveraging the power of", "in response to the challenges of", "through the unexpected application of", "at the intersection of"];
        this.outcomes = [
            "transforming society",
            "solving global challenges",
            "creating unforeseen problems",
            "redefining human capabilities",
            "bridging digital divides",
            "challenging ethical boundaries",
            "achieving scientific breakthroughs",
            "disrupting traditional industries",
            "altering human relationships and communication"
        ];
        this.contexts = [
            "cutting-edge research laboratory",
            "tech startup environment",
            "space exploration mission",
            "cybersecurity crisis",
            "medical breakthrough scenario",
            "smart city implementation",
            "virtual world creation",
            "human augmentation program",
            "environmental restoration project",
            "artificial general intelligence development"
        ];
    }
}