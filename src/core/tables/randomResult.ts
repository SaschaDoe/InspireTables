export class RandomResult {
    description = "";
    result = 0;

    toString(): string {
        return `${this.result} for ${this.description}`;
    }

    withDescription(description: string) {
        this.description = description;
        return this;
    }

    withResult(result: number){
        this.result = result;
        return this;
    }
}