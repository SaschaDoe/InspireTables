import {Table} from "../../table";

const psychosomaticDualityThemeStatements = [
    "the mind and body whisper to each other in a language we're only beginning to understand",
    "our thoughts cast shadows on our physical form",
    "in the dance between consciousness and flesh, who truly leads?",
    "the body keeps the score of the mind's silent battles",
    "our physical ailments often speak the words our hearts cannot utter",
    "healing begins when the mind and body find harmony",
    "we are not just our thoughts, nor merely our flesh, but the intricate interplay between them",
    "the scars on our skin often reflect the wounds within our psyche",
    "our bodies rebel when our minds refuse to listen",
    "in every cell of our being, thoughts and matter engage in constant dialogue",
    "the blueprint of our health is written in both our genes and our beliefs",
    "our physical state is but a mirror reflecting the landscape of our inner world",
    "the power of belief can mend bones and break spirits alike",
    "in the alchemy of wellness, thoughts are as potent as any medicine",
    "our flesh bears witness to the stories our minds weave",
    "it is no measure of health to be well adjusted to a profoundly sick society",
    "the part can never be well unless the whole is well",
    "healing is a matter of time, but it is sometimes also a matter of opportunity",
    "the greatest weapon against stress is our ability to choose one thought over another",
    "there is more wisdom in your body than in your deepest philosophy",
    "the wish for healing has always been half of health",
    "the secret of health for both mind and body is not to mourn for the past, worry about the future, or anticipate troubles, but to live in the present moment wisely and earnestly",
    "our bodies are our gardens, to which our wills are gardeners",
    "the body is the instrument of the soul, and it can be tuned",
    "the mind has great influence over the body, and maladies often have their origin there",
    "what the mind doesn't understand, it worships or fears",
    "the natural healing force within each one of us is the greatest force in getting well",
    "the highest spiritual practice is self-observation without judgment",
    "our bodies are apt to be our autobiographies",
    "the pain of the mind is worse than the pain of the body",
    "a sound mind in a sound body is a short but full description of a happy state in this world",
    "treat the patient, not the disease",
    "the body manifests what the mind harbors",
    "every cell in your body is eavesdropping on your thoughts",
    "your body hears everything your mind says",
    "the mind is everything. what you think you become",
    "change your thoughts and you change your world",
    "as a single footstep will not make a path on the earth, so a single thought will not make a pathway in the mind",
    "the sovereign invigorator of the body is exercise, and of all the exercises walking is the best",
    "to keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear"
];

export const PsychosomaticDualityThemeStatementTableName = "Psychosomatic Duality theme statement";

export class PsychosomaticDualityThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = PsychosomaticDualityThemeStatementTableName;
        this.addEntriesFromList(psychosomaticDualityThemeStatements);
    }
}