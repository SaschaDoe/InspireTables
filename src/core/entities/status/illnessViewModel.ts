import { type Illness } from "./illness";
import { strengths } from "../../tables/other/strengthTable";
import { prognosis } from "../../tables/illness/prognosisTable";
import { times } from "../../tables/other/timeTable";
import { impacts } from "../../tables/other/impactTable";
import { amounts } from "../../tables/other/amountTable";
import {cureComplexity} from "../../tables/illness/cureComplexityTable";
import {cureEffectiveness} from "../../tables/illness/cureEffectivnessTable";
import {cureAvailability} from "../../tables/illness/cureAvailabilityTable";
import {cureSideEffects} from "../../tables/illness/cureSideEffectsTable";
import {cureDuration} from "../../tables/illness/cureDurationTable";
import {difficultyLevels} from "../../tables/other/difficultTable";

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
    private _known = "";
    private _cureDifficulty = "";
    private _contagiousness = "";

    constructor(illness: Illness) {
        this.illness = illness;
    }

    get severity(): string {
        this.calculateSeverity();
        return this._severity;
    }

    get known(): string {
        this.calculateKnown();
        return this._known;
    }

    get cureDifficulty(): string{
        this.calculateCureDifficulty();
        this.illness.cureDifficulty = this._cureDifficulty;
        return this._cureDifficulty;
    }

    get contagiousness(): string{
        this.calculateContagiousness();
        return this._contagiousness;
    }

    private calculateSeverity(): void {
        const attributes = [
            {values: prognosis, current: this.illness.prognosis},
            {values: times, current: this.illness.onset, mapping: pointMappings.onset},
            {values: times, current: this.illness.time, mapping: pointMappings.timeToCure},
            {values: impacts, current: this.illness.impactOnFunctioning},
            {values: strengths, current: this.illness.levelOfCare}
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
        const severityIndex = Math.min(Math.round(averageSeverity * 6), 7) - 1;

        this._severity = strengths[severityIndex];
    }

    private calculateKnown(): void {
        const knownAttributes = [
            this.illness.adjectiveKnown,
            this.illness.adjectiveInternalKnown,
            this.illness.adjectiveHandlingKnown,
            this.illness.timeKnown,
            this.illness.timeInternalKnown,
            this.illness.timeHandlingKnown,
            this.illness.onsetKnown,
            this.illness.onsetInternalKnown,
            this.illness.onsetHandlingKnown,
            this.illness.impactKnown,
            this.illness.impactInternalKnown,
            this.illness.impactHandlingKnown,
            this.illness.levelOfCareKnown,
            this.illness.levelOfCareInternalKnown,
            this.illness.levelOfCareHandlingKnown,
            this.illness.typeKnown,
            this.illness.typeInternalKnown,
            this.illness.typeHandlingKnown,
            this.illness.beginningSymptomsKnown,
            this.illness.beginningSymptomsInternalKnown,
            this.illness.beginningSymptomsHandlingKnown,
            this.illness.symptomsKnown,
            this.illness.symptomsInternalKnown,
            this.illness.symptomsHandlingKnown,
            this.illness.cureKnown,
            this.illness.cureInternalKnown,
            this.illness.cureHandlingKnown,
            this.illness.originKnown,
            this.illness.originInternalKnown,
            this.illness.originHandlingKnown,
            this.illness.worldEffectKnown,
            this.illness.worldEffectInternalKnown,
            this.illness.worldEffectHandlingKnown,
            this.illness.loreKnown,
            this.illness.loreInternalKnown,
            this.illness.loreHandlingKnown,
            this.illness.ageKnown,
            this.illness.ageInternalKnown,
            this.illness.ageHandlingKnown,
            this.illness.transmissionKnown,
            this.illness.transmissionInternalKnown,
            this.illness.transmissionHandlingKnown,
            this.illness.prognosisKnown,
            this.illness.prognosisInternalKnown,
            this.illness.prognosisHandlingKnown,
            this.illness.crossSpeciesTransmissionKnown,
            this.illness.crossSpeciesTransmissionInternalKnown,
            this.illness.crossSpeciesTransmissionHandlingKnown,
            this.illness.geographicSpreadKnown,
            this.illness.geographicSpreadInternalKnown,
            this.illness.geographicSpreadHandlingKnown,
            this.illness.hostDiversityKnown,
            this.illness.hostDiversityInternalKnown,
            this.illness.hostDiversityHandlingKnown,
            this.illness.seasonalityKnown,
            this.illness.seasonalityInternalKnown,
            this.illness.seasonalityHandlingKnown,
            this.illness.vectorInvolvementKnown,
            this.illness.vectorInvolvementInternalKnown,
            this.illness.vectorInvolvementHandlingKnown,
        ];

        let totalKnown = 0;

        for (const attr of knownAttributes) {
            const index = amounts.indexOf(attr);
            if (index !== -1) {
                // Invert the index because "all" (index 0) should contribute more to the known value
                totalKnown += (amounts.length - 1 - index) / (amounts.length - 1);
            }
        }

        const averageKnown = totalKnown / knownAttributes.length;
        const knownIndex = Math.min(Math.round(averageKnown * 6), 6);

        this._known = amounts[knownIndex];
    }

    private calculateCureDifficulty() {
        const attributes = [
            { values: cureEffectiveness, current: this.illness.cureEffectiveness, weight: 2 },
            { values: cureAvailability, current: this.illness.cureAvailability, weight: 1.5 },
            { values: cureSideEffects, current: this.illness.cureSideEffects, weight: 1 },
            { values: cureDuration, current: this.illness.cureDuration, weight: 0.5 },
            { values: cureComplexity, current: this.illness.cureComplexity, weight: 1 },
            { values: difficultyLevels, current: this.illness.diagnoseDifficulty, weight: 1 },
            { values: amounts, current: this.illness.symptomsHandlingKnown, weight: 2 },
            { values: amounts, current: this.illness.beginningSymptomsHandlingKnown, weight: 2 },
        ];

        let totalDifficulty = 0;
        let totalWeight = 0;

        for (const attr of attributes) {
            const index = attr.values.indexOf(attr.current);
            if (index !== -1) {
                // Normalize the index to a value between 0 and 1
                const normalizedValue = index / (attr.values.length - 1);
                totalDifficulty += normalizedValue * attr.weight;
                totalWeight += attr.weight;
            }
        }

        const averageDifficulty = totalDifficulty / totalWeight;
        const difficultyIndex = Math.min(Math.round(averageDifficulty * (difficultyLevels.length - 1)), difficultyLevels.length - 1);

        this._cureDifficulty = difficultyLevels[difficultyIndex];
    }

    private calculateContagiousness() {
        const attributes = [
            { values: amounts, current: this.cureDifficulty, weight: 2 },
           //TODO
        ];

        let totalDifficulty = 0;
        let totalWeight = 0;

        for (const attr of attributes) {
            const index = attr.values.indexOf(attr.current);
            if (index !== -1) {
                // Normalize the index to a value between 0 and 1
                const normalizedValue = index / (attr.values.length - 1);
                totalDifficulty += normalizedValue * attr.weight;
                totalWeight += attr.weight;
            }
        }

        const averageDifficulty = totalDifficulty / totalWeight;
        const difficultyIndex = Math.min(Math.round(averageDifficulty * (difficultyLevels.length - 1)), difficultyLevels.length - 1);

        this._cureDifficulty = difficultyLevels[difficultyIndex];
    }
}