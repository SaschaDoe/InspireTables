import {Table} from "../../../table";

export const loveRealThemes = [
    "true love often requires sacrifice, but should never demand the sacrifice of one's self",
    "the greatest love story is not found, but built day by day through small acts of kindness",
    "in opening our hearts to love, we become vulnerable to both immense joy and profound pain",
    "love, in its purest form, is a choice we make every day, not just a feeling we fall into",
    "the journey of love is not about finding the perfect person, but seeing an imperfect person perfectly",
    "sometimes, the bravest act of love is letting go",
    "in the crucible of shared adversity, love either strengthens or shatters",
    "true love doesn't complete us, it inspires us to complete ourselves",
    "the deepest love often grows from friendship, nurtured by trust and understanding",
    "in love, we often find the courage to become the person we've always wanted to be",
    "love is not about possession, but about appreciation",
    "the greatest challenge in love is not finding it, but maintaining it through life's changes",
    "in loving another, we learn to love the parts of ourselves we once rejected",
    "sometimes, the most profound act of love is choosing to walk away",
    "love doesn't require perfection, but it does demand honesty and effort",
    "in the silence between words, true love often speaks the loudest",
    "the heart's capacity for love is not finite; it grows with every person we choose to cherish",
    "love is not just about grand gestures, but about showing up in the mundane moments",
    "in love, we find both our greatest strength and our most profound vulnerability",
    "true love doesn't erase the past, it helps us write a better future",
    "the most enduring love stories are often those that face the greatest challenges",
    "in loving deeply, we risk great loss, but to not love at all is the greatest loss of all",
    "love is not about finding someone to live with, but finding someone you can't imagine living without",
    "the truest test of love is not how we feel in its presence, but who we become in its absence",
    "in the dance of love, it's not about never stepping on each other's toes, but learning to apologize and keep dancing",
    "love is not about changing the other person, but about inspiring them to change themselves",
    "the greatest love affairs are not just between lovers, but between people and their passions",
    "in love, we often find the reflection of our truest selves in the eyes of another",
    "love is not just a noun to be found, but a verb to be enacted every day",
    "the most beautiful love stories are those where two people refuse to give up on each other"
]

export const LoveRealThemesTableName = "Love Real Themes"

export class LoveRealThemeTable extends Table{
    constructor() {
        super();
        this.title = LoveRealThemesTableName;
        this.addEntriesFromList(loveRealThemes);
    }
}