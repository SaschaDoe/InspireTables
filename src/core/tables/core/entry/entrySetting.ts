import {probabilityBuzzwords} from "../list/probabilityBuzzwords";

export class EntrySetting{

    get probabilityAsWord(): string {
        return this._probabilityAsWord;
    }
    get probabilityInPercent(): number {
        return this._probabilityInPercent;
    }
    private _probabilityInPercent = 0;
    private _probabilityAsWord = probabilityBuzzwords[3][0];

    withProbability(probabilityInPercent: number){
        this._probabilityInPercent = probabilityInPercent;
        if(probabilityInPercent < 0){
            throw new Error(`Probability ${probabilityInPercent} is under 0`);
        }
        return this;
    }

    withProbabilityWord(probabilityWord: string){
        if(this._probabilityInPercent){
            throw new Error(`Probability as percent already set to: ${this._probabilityInPercent}`);
        }
        if(!probabilityBuzzwords.some(subArray => subArray.includes(probabilityWord))){
            throw new Error(`${probabilityWord} is not a valid probability word`);
        }

        this._probabilityAsWord = probabilityWord;
        return this;
    }

}