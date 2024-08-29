export enum RelationalOperator {
    GREATER = "greater",
    SMALLER = "smaller",
    EQUAL = "equal"
}

export class ComparisonResult {
    rolledRandomNumber: number;
    relationalOperator: RelationalOperator;
    threshold: number;
    description: string;

    constructor(
        rolledRandomNumber: number,
        relationalOperator: RelationalOperator,
        threshold: number,
        description: string
    ) {
        this.rolledRandomNumber = rolledRandomNumber;
        this.relationalOperator = relationalOperator;
        this.threshold = threshold;
        this.description = description;
    }

    compare(): boolean {
        switch (this.relationalOperator) {
            case RelationalOperator.GREATER:
                return this.rolledRandomNumber > this.threshold;
            case RelationalOperator.SMALLER:
                return this.rolledRandomNumber < this.threshold;
            case RelationalOperator.EQUAL:
                return this.rolledRandomNumber === this.threshold;
            default:
                throw new Error("Invalid relational operator");
        }
    }

    toString(): string {
        return `${this.rolledRandomNumber} ${this.relationalOperator} ${this.threshold} = ${this.compare()} for ${this.description}`;
    }
}