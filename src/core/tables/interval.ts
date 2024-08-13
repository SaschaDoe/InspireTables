export class Interval{
    start = 0;
    end = 0;
    startPercentage = 0;
    endPercentage = 0;

    get probability(){
        return this.endPercentage - this.startPercentage;
    }

    withStart(number: number) {
        this.start = number;
        return this;
    }

    withEnd(number: number) {
        this.end = number;
        return this;
    }

    withPercentage(start: number, end: number){
        this.startPercentage = start;
        this.endPercentage = end;
        if(start < 0 || start > 100){
            throw Error(`Invalid interval percentage: ${start}`);
        }
        if(end < 0 || end > 100){
            throw Error(`Invalid interval percentage: ${end}`);
        }
        if(start > end){
            throw Error(`Start: ${start} is greater than End: ${end}`);
        }
        return this;
    }

    toString(): string {
        let output = "";
        if(this.start === this.end){
            output = `${this.start}`;
        }else{
            output = `${this.start}-${this.end}`;
        }
        return output;
    }

}