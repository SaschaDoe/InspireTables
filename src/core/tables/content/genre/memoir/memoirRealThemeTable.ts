import {Table} from "../../../table";

export const memoirRealThemes = [
    "our past shapes us, but does not define our future",
    "resilience in the face of adversity reveals the true strength of the human spirit",
    "self-discovery is a lifelong journey, often catalyzed by unexpected experiences",
    "the stories we tell ourselves have the power to limit or liberate us",
    "embracing vulnerability is the key to authentic connections and personal growth",
    "cultural identity is a complex tapestry woven from heritage, experience, and choice",
    "the path to success is rarely straight, often marked by failures that teach invaluable lessons",
    "forgiveness, especially of oneself, is a powerful catalyst for personal transformation",
    "our greatest challenges often become the source of our most profound wisdom",
    "the search for belonging is a universal human experience that shapes our life's journey",
    "small acts of kindness can have ripple effects that change lives in unexpected ways",
    "confronting our fears opens doors to possibilities we never imagined",
    "the journey of healing is not linear, but a series of spirals that lead to growth",
    "our truest self often emerges in moments of great adversity or profound joy",
    "the power of perseverance can overcome seemingly insurmountable obstacles",
    "understanding our roots is crucial to charting our future course",
    "success is not just about personal achievement, but about lifting others as we rise",
    "the most profound changes often begin with a single moment of clarity or decision",
    "our legacy is not what we leave for people, but what we leave in them",
    "embracing imperfection is the first step towards authentic living",
    "the pursuit of passion can lead to a life of purpose and fulfillment",
    "reconciling with our past is essential for embracing our future",
    "true strength often lies in admitting our weaknesses and seeking help",
    "the stories of our lives gain meaning through the lens of reflection and perspective",
    "breaking cycles of generational trauma requires conscious effort and deep self-awareness",
    "finding one's voice is a powerful act of self-affirmation and societal change",
    "the intersection of personal narrative and historical context shapes our understanding of both",
    "our most profound growth often occurs in the spaces between our plans",
    "the courage to be authentic can inspire others to embrace their true selves",
    "life's most valuable lessons are often learned through experience, not instruction",
    "in a gentle way, you can shake the world",
    "those who dare to fail miserably can achieve greatly",
    "the ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy",
    "your time is limited, don't waste it living someone else's life",
    "the greatest glory in living lies not in never falling, but in rising every time we fall",
    "I have not failed. I've just found 10,000 ways that won't work",
    "life is what happens to you while you're busy making other plans",
    "the only way to do great work is to love what you do",
    "be the change you wish to see in the world",
    "the future belongs to those who believe in the beauty of their dreams"
]

export const MemoirRealThemesTableName = "Memoir Real Themes"

export class MemoirRealThemeTable extends Table{
    constructor() {
        super();
        this.title = MemoirRealThemesTableName;
        this.addEntriesFromList(memoirRealThemes);
    }
}