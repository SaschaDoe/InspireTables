export class Dice {

    roll(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    getRandom(){
        return Math.random();
    }

    rollWith(numberOfSides: number): number {
        return this.roll(1,numberOfSides);
    }
}