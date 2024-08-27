import { probabilityBuzzwords } from "../list/probabilityBuzzwords";

export class EntrySetting {
    probabilityAsWord = probabilityBuzzwords[3][0];
    probabilityInPercent = 0;

    withProbability(probabilityInPercent: number) {
        this.probabilityInPercent = probabilityInPercent;
        if (probabilityInPercent < 0) {
            throw new Error(`Probability ${probabilityInPercent} is under 0`);
        }
        return this;
    }

    withProbabilityWord(probabilityWord: string) {
        if (this.probabilityInPercent && probabilityWord !== probabilityBuzzwords[3][0]) {
            throw new Error(`Probability as percent already set to: ${this.probabilityInPercent}`);
        }
        if (!probabilityBuzzwords.some(subArray => subArray.includes(probabilityWord))) {
            throw new Error(`${probabilityWord} is not a valid probability word`);
        }

        this.probabilityAsWord = probabilityWord;
        return this;
    }

    static fromJSON(json: any): EntrySetting {
        const setting = new EntrySetting();

        if (json.probabilityInPercent !== undefined) {
            setting.withProbability(json.probabilityInPercent);
        }

        if (json.probabilityAsWord) {
            setting.withProbabilityWord(json.probabilityAsWord);
        }

        return setting;
    }
}