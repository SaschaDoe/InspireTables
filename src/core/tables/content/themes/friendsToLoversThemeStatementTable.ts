import {Table} from "../../table";

const friendsToLoversThemeStatements = [
    "sometimes the heart sees what is invisible to the eye",
    "the best love stories often begin with a strong foundation of friendship",
    "in the garden of companionship, romance can blossom unexpectedly",
    "the line between friendship and love is often blurred by the heart",
    "true connection transcends the boundaries of platonic affection",
    "the most enduring partnerships are built on mutual understanding and trust",
    "sometimes, the person you're looking for is right beside you",
    "in the journey of life, a friend can become the most cherished traveling companion",
    "the deepest bonds are forged through shared experiences and mutual growth",
    "love often sneaks up on those who aren't looking for it",
    "it's not about who you've known the longest, it's about who came and never left your side",
    "the best relationships are the ones you never saw coming",
    "a soulmate is someone who has locks that fit our keys, and keys to fit our locks",
    "love is friendship that has caught fire",
    "there is no love without friendship",
    "the most beautiful discovery true friends make is that they can grow separately without growing apart",
    "friendship is the golden thread that ties the heart of all the world",
    "in everyone's life, at some time, our inner fire goes out. It is then burst into flame by an encounter with another human being",
    "each friend represents a world in us, a world possibly not born until they arrive",
    "a true friend is someone who sees the pain in your eyes while everyone else believes the smile on your face",
    "friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one'",
    "the greatest happiness of life is the conviction that we are loved",
    "we're all a little weird. And life is a little weird. And when we find someone whose weirdness is compatible with ours, we join up with them and fall into mutually satisfying weirdness",
    "you don't love someone for their looks, or their clothes, or for their fancy car, but because they sing a song only you can hear",
    "the meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed",
    "when you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible",
    "I love you not only for what you are, but for what I am when I am with you",
    "we loved with a love that was more than love",
    "to love and be loved is to feel the sun from both sides",
    "the best thing to hold onto in life is each other",
    "you know you're in love when you can't fall asleep because reality is finally better than your dreams",
    "i would rather walk with a friend in the dark, than alone in the light",
    "true love is not so much a matter of romance as it is a matter of anxious concern for the well-being of one's companion",
    "the best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart",
    "love does not consist of gazing at each other, but in looking outward together in the same direction",
    "i'm not telling you it is going to be easy - I'm telling you it's going to be worth it",
    "the beginning of love is to let those we love be perfectly themselves, and not to twist them to fit our own image",
    "if you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you",
    "when you meet the right person, you know it. You can't stop thinking about them. They are your best friend and your soulmate. You can't wait to spend the rest of your life with them",
    "i fell in love the way you fall asleep: slowly, and then all at once"
];

export const FriendsToLoversThemeStatementTableName = "Friends to Lovers theme statement";

export class FriendsToLoversThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = FriendsToLoversThemeStatementTableName;
        this.addEntriesFromList(friendsToLoversThemeStatements);
    }
}