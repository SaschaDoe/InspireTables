import {Entry} from "../entry/entry";
import {probabilityBuzzwords} from "./probabilityBuzzwords";

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

    setProbabilities(){
        this.isProbabilitySet = true;
        //calculate remaining probability after number entries
        let cumulativeProb = 100;
        for(let i = 0; i < this.entries.length; i++){
            let entry = this.entries[i];
            let probability = entry.setting.probabilityInPercent;
            cumulativeProb -= probability;
            if(cumulativeProb < 0){
                throw new Error(`Cumulative probability under 0: ${cumulativeProb} at index: ${i}`);
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

        if (cumulativeProb === 0 && remainingWeight > 0) {
            throw new Error("No probability left for plain and string list entries");
        }

        let intervalStart = 0;
        let previousEntry: undefined | Entry;
        for (let i = 0; i < this.entries.length; i++) {
            let entry = this.entries[i];
            let previousEntryEndProb = 0;
            if(previousEntry){
                previousEntryEndProb = previousEntry.interval.end;

            }
            entry.interval.start = intervalStart;
            let remainingEvenProbability = cumulativeProb / remainingWeight;
            let totalEvenProbability = 100 / totalWeight;
            if(entry.setting.probabilityInPercent != 0){
                let gonzoAdjustedProbability = entry.setting.probabilityInPercent * (1 - this.gonzoFactor) + totalEvenProbability * this.gonzoFactor;
                entry.interval.end = entry.interval.start + gonzoAdjustedProbability;
            }
            else{ //Plain is represented as "even"
                let weight = stringProbabilityMap.get(entry.setting.probabilityAsWord) || 100;
                remainingWeight--;
                entry.interval.end = previousEntryEndProb + (weight * remainingEvenProbability) * (1 - this.gonzoFactor) + totalEvenProbability * this.gonzoFactor;
                cumulativeProb -= entry.interval.probability;
            }

            intervalStart = entry.interval.end;
            previousEntry = entry;
        }

        let lastEntry = this.entries[this.entries.length - 1];
        lastEntry.interval.end = 100;
    }

    withGonzo(gonzoFactor: number) {
        this.gonzoFactor = gonzoFactor;
        return this;
    }
}