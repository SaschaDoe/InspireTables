export class Interval{
    start = 0;
    end = 0;

    get probability(){
        return this.end - this.start;
    }

    withStart(number: number) {
        this.start = number;
        return this;
    }

    withEnd(number: number) {
        this.end = number;
        return this;
    }

    toString(): string {
        let output;
        if(this.start === this.end){
            output = `${this.start}`;
        }else{
            output = `${this.start}-${this.end}`;
        }
        return output;
    }

}