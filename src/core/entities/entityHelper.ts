import type {Entity} from "./entity";

export function summarizeEntities(entities: Entity[]): string {
    console.log("summarize: ", entities);
    const summary = entities.reduce((acc, entity, index) => {
        const type = entity.constructor.name;
        if (!acc[type]) {
            acc[type] = [];
        }
        acc[type].push(index);
        return acc;
    }, {} as Record<string, number[]>);

    return Object.entries(summary)
        .map(([type, indices]) => `${type}: ${indices.join(', ')}`)
        .join('; ');
}