import  {type Illness} from "./illness";
import {strength} from "../../tables/other/strengthTable";
import {prognosis} from "../../tables/illness/prognosisTable";
import {times} from "../../tables/other/timeTable";
import {impact} from "../../tables/other/impactTable";

type TimeValue = typeof times[number];

type PointMapping = {
    [key in TimeValue]: number;
};

const pointMappings: {
    onset: PointMapping;
    timeToCure: PointMapping;
} = {
    onset: {
        short: 3,
        mid: 2,
        long: 1,
        infinite: 4,
        immediately: 5,
    },
    timeToCure: {
        immediately: 0,
        short: 1,
        mid: 2,
        long: 3,
        infinite: 4,
    }
};

export class IllnessViewModel {
    illness: Illness;
    private _severity = "";

    constructor(illness: Illness) {
        this.illness = illness;
    }

    get severity(): string | number {
        this.calculateSeverity();
        return this._severity;
    }

    private calculateSeverity(): void {
        const attributes = [
            {values: prognosis, current: this.illness.prognosis},
            {values: times, current: this.illness.onset, mapping: pointMappings.onset},
            {values: times, current: this.illness.time, mapping: pointMappings.timeToCure},
            {values: impact, current: this.illness.impactOnFunctioning},
            {values: strength, current: this.illness.levelOfCare}
        ];

        let totalSeverity = 0;

        for (const attr of attributes) {
            if (attr.mapping) {
                // Use point mapping if available
                totalSeverity += (attr.mapping[attr.current] - 1) / (Object.keys(attr.mapping).length - 1);
            } else {
                // Use index-based calculation for attributes without mapping
                const index = attr.values.indexOf(attr.current);
                if (index !== -1) {
                    totalSeverity += index / (attr.values.length - 1);
                }
            }
        }
        const averageSeverity = totalSeverity / attributes.length;
        const severityIndex = Math.min(Math.round(averageSeverity * 6), 7)-1;

        this._severity = strength[severityIndex];
    }
}