export class EntrySetting{
    probabilityInPercent = 0;

    withProbability(probabilityInPercent: number){
        this.probabilityInPercent = probabilityInPercent;
        return this;
    }
}