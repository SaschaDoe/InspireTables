export abstract class BaseEntity {
    abstract id: string;

    // This method returns the name of the class
    static get entityType(): string {
        return this.name;
    }

    // Instance method to get entity type
    get entityType(): string {
        return (this.constructor as typeof BaseEntity).entityType;
    }
}