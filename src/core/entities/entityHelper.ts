import type {Entity} from "./entity";

export function summarizeEntities(entities: Entity[]): string {
    console.log("summarize: ", entities);
    const summary = entities.reduce((acc, entity) => {
        const type = entity.constructor.name;
        if (!acc[type]) {
            acc[type] = [];
        }
        if (entity.id !== null) {
            acc[type].push(entity.id);
        } else {
            acc[type].push(-1);
        }
        return acc;
    }, {} as Record<string, (number | string)[]>);

    return Object.entries(summary)
        .map(([type, ids]) => `${type}: ${ids.join(', ')}`)
        .join('; ');
}