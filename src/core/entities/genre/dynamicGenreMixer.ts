import type {Dice} from "../../tables/dice";

interface GenreCompatibility {
    [key: string]: { [key: string]: number };
}

export class DynamicGenreMixer {
    private genreCompatibility: GenreCompatibility = {
        "fantasy": { "action": 18, "adventure": 17, "myth": 14, "war": 9, "mystery": 8, "horror": 7, "drama": 6, "explorer": 5, "sciFi": 5, "love": 4, "comedy": 3, "thriller": 2, "crime": 2 },
        "sciFi": { "action": 20, "adventure": 15, "mystery": 10, "thriller": 10, "war": 8, "horror": 7, "drama": 7, "explorer": 6, "fantasy": 5, "love": 4, "comedy": 4, "crime": 3, "myth": 1 },
        "action": { "sciFi": 20, "fantasy": 18, "adventure": 16, "thriller": 15, "war": 12, "crime": 10, "mystery": 8, "horror": 7, "comedy": 6, "drama": 5, "explorer": 4, "love": 3, "myth": 2 },
        "adventure": { "action": 16, "fantasy": 17, "sciFi": 15, "explorer": 14, "mystery": 10, "thriller": 9, "war": 8, "comedy": 7, "drama": 6, "horror": 5, "myth": 5, "crime": 4, "love": 3 },
        "mystery": { "thriller": 18, "crime": 16, "sciFi": 10, "adventure": 10, "fantasy": 8, "horror": 8, "drama": 7, "action": 8, "war": 4, "love": 4, "comedy": 3, "explorer": 2, "myth": 2 },
        "thriller": { "mystery": 18, "action": 15, "crime": 14, "sciFi": 10, "horror": 10, "war": 8, "adventure": 9, "drama": 7, "fantasy": 2, "love": 3, "comedy": 2, "explorer": 1, "myth": 1 },
        "war": { "action": 12, "thriller": 8, "drama": 10, "sciFi": 8, "fantasy": 9, "adventure": 8, "mystery": 4, "horror": 5, "crime": 3, "love": 3, "comedy": 2, "explorer": 2, "myth": 2 },
        "horror": { "thriller": 10, "mystery": 8, "fantasy": 7, "sciFi": 7, "action": 7, "drama": 6, "war": 5, "adventure": 5, "crime": 4, "love": 2, "comedy": 2, "explorer": 1, "myth": 3 },
        "drama": { "love": 12, "war": 10, "crime": 9, "mystery": 7, "thriller": 7, "sciFi": 7, "fantasy": 6, "action": 5, "adventure": 6, "horror": 6, "comedy": 5, "explorer": 3, "myth": 3 },
        "explorer": { "adventure": 14, "sciFi": 6, "fantasy": 5, "action": 4, "mystery": 2, "drama": 3, "war": 2, "thriller": 1, "horror": 1, "love": 1, "comedy": 1, "crime": 1, "myth": 2 },
        "love": { "drama": 12, "comedy": 8, "fantasy": 4, "sciFi": 4, "adventure": 3, "action": 3, "mystery": 4, "thriller": 3, "war": 3, "horror": 2, "explorer": 1, "crime": 2, "myth": 2 },
        "comedy": { "love": 8, "action": 6, "adventure": 7, "sciFi": 4, "fantasy": 3, "mystery": 3, "drama": 5, "war": 2, "thriller": 2, "horror": 2, "explorer": 1, "crime": 2, "myth": 1 },
        "crime": { "mystery": 16, "thriller": 14, "action": 10, "drama": 9, "war": 3, "sciFi": 3, "adventure": 4, "fantasy": 2, "horror": 4, "love": 2, "comedy": 2, "explorer": 1, "myth": 1 },
        "myth": { "fantasy": 14, "adventure": 5, "horror": 3, "sciFi": 1, "action": 2, "mystery": 2, "thriller": 1, "war": 2, "drama": 3, "explorer": 2, "love": 2, "comedy": 1, "crime": 1 }

    };

    public mixGenres(selectedGenres: string[]): { [key: string]: number } {
        let combinedCompatibility: { [key: string]: number } = {};

        // Combine compatibilities of selected genres
        for (let genre of selectedGenres) {
            if (this.genreCompatibility[genre]) {
                for (let [compatibleGenre, probability] of Object.entries(this.genreCompatibility[genre])) {
                    if (!selectedGenres.includes(compatibleGenre)) {
                        combinedCompatibility[compatibleGenre] = (combinedCompatibility[compatibleGenre] || 0) + probability;
                    }
                }
            }
        }

        // Normalize probabilities
        let total = Object.values(combinedCompatibility).reduce((sum, value) => sum + value, 0);
        for (let genre in combinedCompatibility) {
            combinedCompatibility[genre] = Number(((combinedCompatibility[genre] / total) * 100).toFixed(2));
        }

        return combinedCompatibility;
    }

    public getNextGenre(selectedGenres: string[], dice: Dice): string {
        const compatibilities = this.mixGenres(selectedGenres);
        const roll = dice.rollIntervalFloat(0, 100);
        let cumulativeProbability = 0;

        for (const [genre, probability] of Object.entries(compatibilities)) {
            cumulativeProbability += probability;
            if (roll <= cumulativeProbability) {
                return genre;
            }
        }

        // In case of any floating point errors, return the last genre
        return Object.keys(compatibilities)[Object.keys(compatibilities).length - 1];
    }
}