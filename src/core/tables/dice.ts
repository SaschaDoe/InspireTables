export class Dice {
    numberOfSides = 0;
    private percentage = 0;

    withSides(numberOfSides: number){
        this.numberOfSides = numberOfSides;
    }

    rollPercentage(){
        let result = Math.random()*100;
        return result > this.percentage;

    }

    roll(): number{
        return Math.floor(Math.random() * (this.numberOfSides - 1 + 1)) + 1;
    }

    rollInterval(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getRandom(){
        return Math.random();
    }

    rollWith(numberOfSides: number): number {
        return this.rollInterval(1,numberOfSides);
    }

    withPercentage(percentage: number) {
        this.percentage = percentage;
        return this;
    }
}