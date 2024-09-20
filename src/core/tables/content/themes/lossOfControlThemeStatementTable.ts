import {Table} from "../../table";

const lossOfControlThemeStatements = [
    "in chaos, we discover what truly matters",
    "the illusion of mastery shatters in unpredictable moments",
    "when the reins slip, true character emerges",
    "powerlessness reveals our deepest fears and strongest resilience",
    "in the face of uncertainty, adaptability becomes our greatest asset",
    "the dance between order and chaos defines the human experience",
    "surrender often precedes breakthrough",
    "in letting go, we sometimes find our greatest strength",
    "the myth of absolute control crumbles in life's crucible",
    "when plans falter, improvisation becomes our lifeline",
    "true wisdom lies in knowing what we cannot change",
    "in turbulence, we find our hidden reserves of courage",
    "the unexpected often leads us to uncharted growth",
    "when familiar structures collapse, new possibilities emerge",
    "vulnerability and powerlessness can be gateways to profound change",
    "life is what happens to you while you're busy making other plans",
    "the only way to make sense out of change is to plunge into it, move with it, and join the dance",
    "you must learn to let go. release the stress. you were never in control anyway",
    "sometimes you just have to take the leap and build your wings on the way down",
    "the best way to find out if you can trust somebody is to trust them",
    "it's not the load that breaks you down, it's the way you carry it",
    "when nothing is sure, everything is possible",
    "the only constant in life is change",
    "surrender to what is. let go of what was. have faith in what will be",
    "you can't stop the waves, but you can learn to surf",
    "what you resist, persists",
    "the more you struggle to control the uncontrollable, the more out of control you feel",
    "acceptance of what has happened is the first step to overcoming the consequences of any misfortune",
    "in the midst of chaos, there is also opportunity",
    "the greatest discovery of my generation is that human beings can alter their lives by altering their attitudes of mind",
    "when we are no longer able to change a situation, we are challenged to change ourselves",
    "the oak fought the wind and was broken, the willow bent when it must and survived",
    "life is a series of natural and spontaneous changes. don't resist them; that only creates sorrow",
    "you can't calm the storm, so stop trying. what you can do is calm yourself. the storm will pass",
    "the greatest mistake you can make in life is to be continually fearing you will make one",
    "the only true wisdom is in knowing you know nothing",
    "sometimes letting things go is an act of far greater power than defending or hanging on",
    "the secret of change is to focus all of your energy, not on fighting the old, but on building the new",
    "when you can't control what's happening, challenge yourself to control the way you respond to what's happening. that's where your power is",
    "it's not about perfect control. it's about perfect coping"
];

export const LossOfControlThemeStatementTableName = "Loss of Control theme statement";

export class LossOfControlThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = LossOfControlThemeStatementTableName;
        this.addEntriesFromList(lossOfControlThemeStatements);
    }
}