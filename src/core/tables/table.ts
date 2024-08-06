import {RollResult} from "./rollResult";
import {Entry} from "./entry";
import {Dice} from "./dice";
import {FunctionEntry} from "./functionEntry";
import {Interval} from "./interval";
import {EntrySetting} from "./entrySetting";

export class Table {
    values: string[] = [];
    title: string = "";
    entries: Entry[] = [];
    dice: Dice = new Dice();

    withEntriesFromList(inputs: string[]): Table {
        this.values = inputs;
        for (let input of inputs) {
            this.withEntry(new Entry().withText(input));
        }
        return this;
    }

    withEntry(entry: Entry, probabilityInPercent: number = 0){
        entry.withSetting(new EntrySetting().withProbability(probabilityInPercent));
        this.entries.push(entry);
        return this;
    }

    withValues(values: string[]){
        this.values = values;
        return this;
    }

    withDice(dice: Dice) {
        this.dice = dice;
        return this;
    }

    add(entry: Entry): void {
        this.entries.push(entry);
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

    public probabilityCheck() {
        var lastSetting = null;
        var differenceTo100Percent = 0;
        for(var i = 0; i < this.entries.length; i++){
            var entry = this.entries[i];
            for(var j = 0; j < entry.parts.length; j++){
                var part = entry.parts[j];
                for(var n = 0; n < part.settings.length; n++){
                    var setting = part.settings[n];
                    differenceTo100Percent += setting.probabilityInPercent;
                    lastSetting = setting;
                }
            }
        }

        differenceTo100Percent = differenceTo100Percent - 100;
        if(differenceTo100Percent < 0 && lastSetting != null){
            lastSetting.probabilityInPercent += -1*differenceTo100Percent;
        }

        if(differenceTo100Percent > 0 && lastSetting != null){
            lastSetting.probabilityInPercent += differenceTo100Percent;
        }
    }

    public updateIntervals() {
        const entryCount = this.entries.length;
        let startPercentage = 0;

        for (let i = 0; i < entryCount; i++) {
            let endPercentage = 0;
            let entry = this.entries[i];
            let probability = entry.setting.probabilityInPercent;
            if(probability !== 0){
                endPercentage = startPercentage + probability;
            }else{
                let available = 1-startPercentage;
                let numberOfEntries = entryCount-i;
                if(numberOfEntries === 1){
                    endPercentage = 1;
                }else{
                    endPercentage = startPercentage + (available/numberOfEntries);
                }

            }
            this.entries[i].interval = new Interval().withPercentage(startPercentage, endPercentage);
            startPercentage = endPercentage;
        }
    }
}