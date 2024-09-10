import {Entry} from "../entry/entry";
import {probabilityBuzzwords} from "./probabilityBuzzwords";
import type {FunctionFactory} from "../entry/functionFactory";
import {Interval} from "../../interval";

export class EntryList {
    entries: Entry[] = [];
    isProbabilitySet = false;
    gonzoFactor: number = 0;

    getEntry(intervalValue: number): Entry {
        for (let entry of this.entries) {
            if(entry.interval.start < intervalValue && entry.interval.end >= intervalValue) {
                return entry;
            }
        }
        throw new Error(`Interval has holes at: ${intervalValue}`);
    }

    withPlainList(plainList: string[]){
        for(let text of plainList){
            this.entries.push(new Entry().withText(text));
        }

        return this;
    }

    with(entry: Entry){
        for (const entryElement of this.entries) {
            if(entryElement === entry){
                throw new Error("Entry element already exists");
            }
        }

        this.entries.push(entry);
        this.isProbabilitySet = false;
        return this;
    }

    withEntryList(entries: Entry[]){
        for(let entry of entries){
            this.with(entry);
        }
        return this;
    }

    withGonzo(gonzoFactor: number) {
        this.gonzoFactor = gonzoFactor;
        return this;
    }

    setProbabilities(){

        this.isProbabilitySet = true;
        //calculate remaining probability after number entries
        let cumulativeProb = 0;
        for(let i = 0; i < this.entries.length; i++){
            let entry = this.entries[i];
            entry.interval = new Interval();
            let probability = entry.setting.probabilityInPercent;
            cumulativeProb += probability; //add because - is not precise enough
            if(cumulativeProb > 100){
                throw new Error(`Cumulative probability over 100: ${cumulativeProb} at index: ${i}`);
            }
        }

        // Calculate total weight for remaining entries
        let remainingWeight = 0;
        let totalWeight = 0;
        let stringProbabilityMap = new Map<string, number>(probabilityBuzzwords);

        for (let entry of this.entries) {
            totalWeight++;
            if (entry.setting.probabilityInPercent === 0) {
                remainingWeight++;
                //when not set than it is even automatically
            }
        }

        if (cumulativeProb > 100 && remainingWeight > 0) {
            throw new Error("No probability left for plain and string list entries");
        }

        cumulativeProb = 100 - cumulativeProb; //it is easier that way around

        let intervalStart = 0;
        let previousEntry: undefined | Entry;
        for (let i = 0; i < this.entries.length; i++) {
            let entry = this.entries[i];
            let previousEntryEndProb = 0;
            if (previousEntry) {
                previousEntryEndProb = previousEntry.interval.end;
            }
            entry.interval.start = intervalStart;
            let remainingEvenProbability = cumulativeProb / remainingWeight;
            let totalEvenProbability = 100 / totalWeight;
            if (entry.setting.probabilityInPercent != 0) {
                let gonzoAdjustedProbability = this.adjustProbability(
                    entry.setting.probabilityInPercent * (1 - this.gonzoFactor) + totalEvenProbability * this.gonzoFactor
                );
                entry.interval.end = entry.interval.start + gonzoAdjustedProbability;
            }
            else { //Plain is represented as "even"
                let weight = stringProbabilityMap.get(entry.setting.probabilityAsWord) || 100;
                remainingWeight--;
                let adjustedProbability = this.adjustProbability(
                    (weight * remainingEvenProbability) * (1 - this.gonzoFactor) + totalEvenProbability * this.gonzoFactor
                );
                entry.interval.end = previousEntryEndProb + adjustedProbability;
                cumulativeProb -= entry.interval.probability;
            }
            intervalStart = entry.interval.end;
            previousEntry = entry;
        }

        // Normalize probabilities to ensure they sum to 100
        let totalProbability = this.entries[this.entries.length - 1].interval.end;
        if (totalProbability !== 100) {
            let scaleFactor = 100 / totalProbability;
            let currentStart = 0;
            for (let entry of this.entries) {
                entry.interval.start = currentStart;
                entry.interval.end = currentStart + (entry.interval.end - entry.interval.start) * scaleFactor;
                currentStart = entry.interval.end;
            }
        }

        let lastEntry = this.entries[this.entries.length - 1];
        lastEntry.interval.end = 100;
    }

    private adjustProbability(value: number, minValue: number = 0.001): number {
        return Math.max(minValue, value);
    }

    static fromJSON(json: any, functionFactory: FunctionFactory): EntryList {
        const entryList = new EntryList();
        entryList.entries = json.entries.map((entryJson: any) => Entry.fromJSON(entryJson, functionFactory));
        entryList.gonzoFactor = json.gonzoFactor;
        return entryList;
    }


}