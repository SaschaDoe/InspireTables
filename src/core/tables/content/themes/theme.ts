import type {Source} from "./source";

export class Theme {
    name: string = "";
    description: string = "";
    sources: Source[] = [];
    subjects: string[] = [];
    verbs: string[] = [];
    objects: string[] = [];
    modifiers: string[] = [];
    connectors: string[] = [];
    outcomes: string[] = [];
    contexts: string[] = [];
    statements: string[] = [];
}

export function generateThematicStatement(theme: Theme): string {
    const subject = getRandomElement(theme.subjects);
    const verb = getRandomElement(theme.verbs);
    const object = getRandomElement(theme.objects);
    const modifier = getRandomElement(theme.modifiers);
    const connector = getRandomElement(theme.connectors);
    const outcome = getRandomElement(theme.outcomes);
    const context = getRandomElement(theme.contexts);

    const patterns = [
        `${modifier} ${subject} ${verb} ${object}, ${connector} ${outcome}.`,
        `${subject} ${verb} ${object}, ${connector} ${modifier} ${outcome}.`,
        `When ${modifier} ${subject} ${verb} ${object}, it ${connector} ${outcome} in ${context}.`,
        `${subject} in ${context} ${verb} ${object}, ${connector} ${modifier} ${outcome}.`,
        `${context} reveals how ${subject} can ${verb} ${object}, ${connector} ${modifier} ${outcome}.`,
        `${subject} serves as a ${modifier} force to ${verb} ${object} in ${context}, ${connector} ${outcome}.`
    ];

    return patterns[Math.floor(Math.random() * patterns.length)];
}

function getRandomElement(array: string[]): string {
    return array[Math.floor(Math.random() * array.length)];
}