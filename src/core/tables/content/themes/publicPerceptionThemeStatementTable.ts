import {Table} from "../../table";

const publicPerceptionThemeStatements = [
    "the lens through which society views us often distorts our true reflection",
    "in the court of popular opinion, facts are sometimes mere suggestions",
    "the masses are moved more by images than by realities",
    "reputation is but a shadow, often larger than the object that casts it",
    "in the age of information, misinformation spreads faster than truth",
    "the collective mind is a fickle judge, swift to condemn and slow to forgive",
    "our public image is a painting we struggle to control, yet others freely retouch",
    "society's mirror often reflects what it wants to see, not what truly exists",
    "in the theatre of life, we all wear masks crafted by others' expectations",
    "the loudest voice often drowns out the most truthful one",
    "appearances can imprison us in others' preconceptions",
    "in the echo chamber of public discourse, nuance is the first casualty",
    "the crowd sees the crown, not the heavy head that wears it",
    "our reputation often arrives at a destination long before we do",
    "in the public eye, actions whisper while rumors scream",
    "it takes many good deeds to build a good reputation, and only one bad one to lose it",
    "the way to gain a good reputation is to endeavor to be what you desire to appear",
    "if you want to improve your image, you have to improve yourself, not the image",
    "you've got to be very careful if you don't know where you are going, because you might not get there",
    "people will always have their opinion of you despite who you are and what you're capable of",
    "if you tell the truth, you don't have to remember anything",
    "a lie gets halfway around the world before the truth has a chance to get its pants on",
    "to see ourselves as others see us is a most salutary gift. hardly less important is the capacity to see others as they see themselves",
    "be who you are and say what you feel, because those who mind don't matter and those who matter don't mind",
    "people rarely see what you do; they see what they think you do",
    "what people say about you behind your back is your standing in the community",
    "your reputation is in the hands of others. that's what the reputation is. you can't control that. the only thing you can control is your character",
    "it takes 20 years to build a reputation and five minutes to ruin it. if you think about that, you'll do things differently",
    "we judge ourselves by our intentions and others by their behavior",
    "the greatest deception men suffer is from their own opinions",
    "everyone sees what you appear to be, few experience what you really are",
    "how people treat you is their karma; how you react is yours",
    "you can't build a reputation on what you are going to do",
    "character is like a tree and reputation like a shadow. the shadow is what we think of it; the tree is the real thing",
    "the world is a looking glass and gives back to every man the reflection of his own face",
    "people tend to judge others by their past, forgetting that we all have the capacity to change",
    "your brand is what people say about you when you're not in the room",
    "in the digital age, your reputation can be your most valuable asset or your biggest liability",
    "actions speak louder than words, but whispers travel faster across social networks",
    "in a world of instant communication, perception becomes reality faster than ever before"
];

export const PublicPerceptionThemeStatementTableName = "Public Perception theme statement";

export class PublicPerceptionThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = PublicPerceptionThemeStatementTableName;
        this.addEntriesFromList(publicPerceptionThemeStatements);
    }
}