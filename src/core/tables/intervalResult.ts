export class IntervalResult{
    min  = 0;
    max = 0;
    result = 0;
    description = "";

    withMin(min: number){
        this.min = min;
        return this;
    }

    withMax(max: number){
        this.max = max;
        return this;
    }

    withResult(result: number){
        this.result = result;
        return this;
    }

    withDescription(description: string){
        this.description = description;
        return this;
    }
}