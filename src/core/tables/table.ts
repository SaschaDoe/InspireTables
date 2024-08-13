import {RollResult} from "./rollResult";
import {Entry} from "./core/entry/entry";
import {Dice} from "./dice";
import {FunctionEntry} from "./core/entry/functionEntry";
import {Interval} from "./interval";
import {EntrySetting} from "./entrySetting";

type ProbabilityType = 'prevalent' | 'common' | 'even' | 'uncommon' | 'rare';

export class Table {
    values: string[] = [];
    title: string = "";
    entries: Entry[] = [];
    dice: Dice = new Dice();
    gonzoFactor = 0;

    private static probabilityMap: Map<ProbabilityType, number> = new Map([
        ['prevalent', 0.9],
        ['common', 2/3],
        ['even', 0.5],
        ['uncommon', 1/3],
        ['rare', 0.1]
    ]);

    withEntriesFromList(inputs: string[]): Table {
        this.values = inputs;
        const entriesWithEvenProbability: [ProbabilityType, string][] = inputs.map(input => ['even', input]);
        return this.withProbabilityEntriesFrom(entriesWithEvenProbability);
    }


    withProbabilityEntriesFrom(entries: [ProbabilityType, string][]): Table {
        const totalWeight = entries.reduce((sum, [type]) => sum + (Table.probabilityMap.get(type) || 0), 0);

        for (let [type, text] of entries) {
            const baseProbability = Table.probabilityMap.get(type) || 0;
            const adjustedProbability = (baseProbability / totalWeight) * 100;
            this.addEntry(new Entry().withText(text), adjustedProbability);
        }

        this.normalizeProbabilities();
        this.updateIntervals();
        return this;
    }

    private normalizeProbabilities(): void {
        const totalProbability = this.entries.reduce((sum, entry) => sum + entry.setting.probabilityInPercent, 0);

        if (totalProbability === 0) {
            // If no probabilities were set, distribute evenly
            const evenProbability = 100 / this.entries.length;
            this.entries.forEach(entry => entry.setting.probabilityInPercent = evenProbability);
        } else {
            const scaleFactor = 100 / totalProbability;
            for (let entry of this.entries) {
                entry.setting.probabilityInPercent *= scaleFactor;
            }
        }

        // Round probabilities and adjust to ensure sum is exactly 100
        let sum = 0;
        for (let i = 0; i < this.entries.length; i++) {
            if (i === this.entries.length - 1) {
                // For the last entry, set it to whatever's left to reach 100
                this.entries[i].setting.probabilityInPercent = 100 - sum;
            } else {
                this.entries[i].setting.probabilityInPercent = Math.round(this.entries[i].setting.probabilityInPercent * 10) / 10; // Round to 1 decimal place
                sum += this.entries[i].setting.probabilityInPercent;
            }
        }
    }

    addEntry(entry: Entry, probabilityInPercent: number = 0){
        entry.withSetting(new EntrySetting().withProbability(probabilityInPercent));
        this.entries.push(entry);
        return this;
    }

    withDice(dice: Dice) {
        this.dice = dice;
        return this;
    }

    roll(): RollResult {
        let result = this.dice.rollInterval(0, this.entries.length - 1);
        let entry = this.entries[result];
        let rollResult = new RollResult(entry).withRolledIndex(result);

        for (let part of entry.parts) {
            let input = part.input;
            if (input instanceof Table) {
                let subResult = input.roll();
                rollResult.results.push(subResult);
                rollResult.addEntities(subResult.entities);
            } else if (input instanceof FunctionEntry) {
                let entities = input.costumeFunction(null); // You might want to pass appropriate input here
                rollResult.addEntities(entities);
            }
        }

        return rollResult;
    }

    updateIntervals() {
        let startPercentage = 0;

        for (let entry of this.entries) {
            const probability = entry.setting.probabilityInPercent / 100; // Convert to 0-1 range
            const endPercentage = startPercentage + probability;
            entry.interval = new Interval().withPercentage(startPercentage, endPercentage);
            startPercentage = endPercentage;
        }

        // Ensure the last interval ends exactly at 1
        if (this.entries.length > 0) {
            this.entries[this.entries.length - 1].interval.endPercentage = 1;
        }
    }
}