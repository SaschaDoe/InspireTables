import {Table} from "../../table";

const guiltThemeStatements = [
    "the weight of unspoken regrets can crush the strongest spirit",
    "in the mirror of conscience, we often see our darkest reflections",
    "the ghosts of our past actions haunt the corridors of our mind",
    "remorse is the echo of a deed left undone or a word left unsaid",
    "the heaviest burden one carries is the load of one's own misdeeds",
    "in the courtroom of our conscience, we are both judge and defendant",
    "the ache of responsibility for harm done lingers long after the act",
    "self-forgiveness is often the steepest mountain to climb",
    "the shadow of what could have been often darkens the light of what is",
    "in the silence of night, our misdeeds speak the loudest",
    "the mind is its own place, and in itself can make a heaven of hell, a hell of heaven",
    "what's done cannot be undone",
    "tomorrow, and tomorrow, and tomorrow, creeps in this petty pace from day to day",
    "the lady doth protest too much, methinks",
    "we are our own devils; we drive ourselves out of our Edens",
    "the evil that men do lives after them; the good is oft interred with their bones",
    "no man chooses evil because it is evil; he only mistakes it for happiness, the good he seeks",
    "there is no witness so terrible and no accuser so powerful as conscience which dwells within us",
    "our deeds still travel with us from afar, and what we have been makes us what we are",
    "the past is never dead. It's not even past",
    "in the depths of winter, I finally learned that within me there lay an invincible summer",
    "we are each our own devil, and we make this world our hell",
    "the truth will set you free, but first it will make you miserable",
    "to err is human, to forgive, divine",
    "the greatest torment of a guilty conscience is the dread of not being able to repent",
    "the human heart has hidden treasures, in secret kept, in silence sealed",
    "it is not the punishment that displays the guilt, the guilt was displayed by the commission of the crime",
    "there is no pillow so soft as a clear conscience",
    "the guilty think all talk is of themselves",
    "the worst guilt is to accept an unearned guilt",
    "nothing is more wretched than the mind of a man conscious of guilt",
    "he who has a clear conscience can never be truly unhappy",
    "guilt is perhaps the most painful companion of death",
    "the more things a man is ashamed of, the more respectable he is",
    "guilt: the gift that keeps on giving",
    "there is no refuge from confession but suicide; and suicide is confession",
    "the difference between guilt and shame is the difference between 'I did something bad' and 'I am bad'",
    "the only thing worse than being caught in a lie is being caught in the truth",
    "we judge ourselves by what we feel capable of doing, while others judge us by what we have already done",
    "the guilty person is always his own hangman"
];

export const GuiltThemeStatementTableName = "Guilt theme statement";

export class GuiltThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = GuiltThemeStatementTableName;
        this.addEntriesFromList(guiltThemeStatements);
    }
}