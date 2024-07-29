import { Illness } from "./illness";
import { Creator, type CreatedEntities } from "../creator";
import { IllnessAdjectiveTable } from "../../tables/illness/illnessAdjectiveTable";
import {times, TimeTable} from "../../tables/other/timeTable";
import { IllnessTypeTable } from "../../tables/illness/illnessTypeTable";
import { IllnessSymptomTable } from "../../tables/illness/illnessSymptomTable";
import { IllnessCureTable } from "../../tables/illness/illnessCureTable";
import { IllnessOriginTable } from "../../tables/illness/illnessOriginTable";
import { IllnessWorldEffectTable } from "../../tables/illness/illnessWorldEffectTable";
import { IllnessLoreTable } from "../../tables/illness/illnessLoreTable";
import { IllnessTransmissionTable } from "../../tables/illness/illnessTransmissionTable";
import { illnessStore } from "../persist/stores";
import {prognosis, PrognosisTable} from "../../tables/illness/prognosisTable";
import {impact, ImpactTable} from "../../tables/other/impactTable";
import {strength, StrengthTable} from "../../tables/other/strengthTable";
import {amounts, AmountTable} from "../../tables/other/amountTable";
import {VectorInvolvementTable} from "../../tables/illness/vectorInvolvementTable";
import {SeasonalityTable} from "../../tables/illness/seasonalityTable";
import {HostDiversityTable} from "../../tables/illness/hostDiversityTable";
import {GeographicSpreadTable} from "../../tables/illness/geographicSpreadTable";
import {CrossSpeciesTransmissionTable} from "../../tables/illness/crossSpeciesTransmissionTable";
import {cureEffectiveness, CureEffectivenessTable} from "../../tables/illness/cureEffectivnessTable";
import {cureAvailability, CureAvailabilityTable} from "../../tables/illness/cureAvailabilityTable";
import {cureSideEffects, CureSideEffectsTable} from "../../tables/illness/cureSideEffectsTable";
import {cureDuration, CureDurationTable} from "../../tables/illness/cureDurationTable";
import {cureComplexity, CureComplexityTable} from "../../tables/illness/cureComplexityTable";
import {difficultyLevels} from "../../tables/other/difficultTable";
import {
    detectionMethodComplexity,
    DetectionMethodComplexityTable
} from "../../tables/illness/detectionMethodComplexityTable";
import {illnessMimicry, IllnessMimicryTable} from "../../tables/illness/illnessMimicryTable";
import {incubationPeriod, IncubationPeriodTable} from "../../tables/illness/incubationPeriodTable";
import {symptomConsistency, SymptomConsistencyTable} from "../../tables/illness/symptomConsistencyTable";
import {symptomObviousness, SymptomObviousnessTable} from "../../tables/illness/symptomObviousnessTable";

type TimeValue = typeof times[number];

type PointMapping = {
    [key in TimeValue]: number;
};

type AttributeWithMapping = {
    values: string[];
    current: string;
    mapping: PointMapping;
};

type AttributeWithoutMapping = {
    values: string[];
    current: string;
};

type Attribute = AttributeWithMapping | AttributeWithoutMapping;

export class IllnessCreator extends Creator {
    create(): CreatedEntities {
        let illness = new Illness();
        illness.adjective = new IllnessAdjectiveTable().withDice(this.dice).roll().combinedString;
        illness.adjectiveKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.adjectiveInternalKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.adjectiveHandlingKnown = new AmountTable().withDice(this.dice).roll().combinedString;

        illness.time = new TimeTable().withDice(this.dice).roll().combinedString;
        illness.timeKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.timeInternalKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.timeHandlingKnown = new AmountTable().withDice(this.dice).roll().combinedString;

        illness.onset = new TimeTable().withDice(this.dice).roll().combinedString;
        illness.onsetKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.onsetInternalKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.onsetHandlingKnown = new AmountTable().withDice(this.dice).roll().combinedString;

        illness.impactOnFunctioning = new ImpactTable().withDice(this.dice).roll().combinedString;
        illness.impactKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.impactInternalKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.impactHandlingKnown = new AmountTable().withDice(this.dice).roll().combinedString;

        illness.levelOfCare = new StrengthTable().withDice(this.dice).roll().combinedString;
        illness.levelOfCareKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.levelOfCareInternalKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.levelOfCareHandlingKnown = new AmountTable().withDice(this.dice).roll().combinedString;

        illness.type = new IllnessTypeTable().withDice(this.dice).roll().combinedString;
        illness.typeKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.typeInternalKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.typeHandlingKnown = new AmountTable().withDice(this.dice).roll().combinedString;

        let numberBeginningSymptoms = this.dice.rollWith(3);
        for(let i = 0; i < numberBeginningSymptoms; i++) {
            illness.beginningSymptoms.push(new IllnessSymptomTable().withDice(this.dice).roll().combinedString);
        }
        illness.beginningSymptomsKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.beginningSymptomsInternalKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.beginningSymptomsHandlingKnown = new AmountTable().withDice(this.dice).roll().combinedString;

        let numberOfSymptoms = this.dice.rollWith(3);
        for(let i = 0; i < numberOfSymptoms; i++) {
            illness.symptoms.push(new IllnessSymptomTable().withDice(this.dice).roll().combinedString);
        }
        illness.symptomsKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.symptomsInternalKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.symptomsHandlingKnown = new AmountTable().withDice(this.dice).roll().combinedString;

        illness.origin = new IllnessOriginTable().withDice(this.dice).roll().combinedString;
        illness.originKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.originInternalKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.originHandlingKnown = new AmountTable().withDice(this.dice).roll().combinedString;

        illness.worldEffect = new IllnessWorldEffectTable().withDice(this.dice).roll().combinedString;
        illness.worldEffectKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.worldEffectInternalKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.worldEffectHandlingKnown = new AmountTable().withDice(this.dice).roll().combinedString;

        illness.lore = new IllnessLoreTable().withDice(this.dice).roll().combinedString;
        illness.loreKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.loreInternalKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.loreHandlingKnown = new AmountTable().withDice(this.dice).roll().combinedString;

        illness.age = new TimeTable().withDice(this.dice).roll().combinedString;
        illness.ageKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.ageInternalKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.ageHandlingKnown = new AmountTable().withDice(this.dice).roll().combinedString;

        illness.transmission = new IllnessTransmissionTable().withDice(this.dice).roll().combinedString;
        illness.transmissionKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.transmissionInternalKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.transmissionHandlingKnown = new AmountTable().withDice(this.dice).roll().combinedString;

        illness.prognosis = new PrognosisTable().withDice(this.dice).roll().combinedString;
        illness.prognosisKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.prognosisInternalKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.prognosisHandlingKnown = new AmountTable().withDice(this.dice).roll().combinedString;

        //contagious
        illness.crossSpeciesTransmission = new CrossSpeciesTransmissionTable().withDice(this.dice).roll().combinedString;
        illness.crossSpeciesTransmissionKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.crossSpeciesTransmissionInternalKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.crossSpeciesTransmissionHandlingKnown = new AmountTable().withDice(this.dice).roll().combinedString;

        illness.geographicSpread = new GeographicSpreadTable().withDice(this.dice).roll().combinedString;
        illness.geographicSpreadKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.geographicSpreadInternalKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.geographicSpreadHandlingKnown = new AmountTable().withDice(this.dice).roll().combinedString;

        illness.hostDiversity = new HostDiversityTable().withDice(this.dice).roll().combinedString;
        illness.hostDiversityKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.hostDiversityInternalKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.hostDiversityHandlingKnown = new AmountTable().withDice(this.dice).roll().combinedString;

        illness.seasonality = new SeasonalityTable().withDice(this.dice).roll().combinedString;
        illness.seasonalityKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.seasonalityInternalKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.seasonalityHandlingKnown = new AmountTable().withDice(this.dice).roll().combinedString;

        illness.vectorInvolvement = new VectorInvolvementTable().withDice(this.dice).roll().combinedString;
        illness.vectorInvolvementKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.vectorInvolvementInternalKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.vectorInvolvementHandlingKnown = new AmountTable().withDice(this.dice).roll().combinedString;

        illness.cure = new IllnessCureTable().withDice(this.dice).roll().combinedString;
        illness.cureKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.cureInternalKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.cureHandlingKnown = new AmountTable().withDice(this.dice).roll().combinedString;

        illness.cureEffectiveness = new CureEffectivenessTable().withDice(this.dice).roll().combinedString;
        illness.cureEffectivenessKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.cureEffectivenessInternalKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.cureEffectivenessHandlingKnown = new AmountTable().withDice(this.dice).roll().combinedString;

        illness.cureAvailability = new CureAvailabilityTable().withDice(this.dice).roll().combinedString;
        illness.cureAvailabilityKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.cureAvailabilityInternalKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.cureAvailabilityHandlingKnown = new AmountTable().withDice(this.dice).roll().combinedString;

        illness.cureSideEffects = new CureSideEffectsTable().withDice(this.dice).roll().combinedString;
        illness.cureSideEffectsKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.cureSideEffectsInternalKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.cureSideEffectsHandlingKnown = new AmountTable().withDice(this.dice).roll().combinedString;

        illness.cureDuration = new CureDurationTable().withDice(this.dice).roll().combinedString;
        illness.cureDurationKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.cureDurationInternalKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.cureDurationHandlingKnown = new AmountTable().withDice(this.dice).roll().combinedString;

        illness.cureComplexity = new CureComplexityTable().withDice(this.dice).roll().combinedString;
        illness.cureComplexityKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.cureComplexityInternalKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.cureComplexityHandlingKnown = new AmountTable().withDice(this.dice).roll().combinedString;

        illness.symptomObviousness = new SymptomObviousnessTable().withDice(this.dice).roll().combinedString;
        illness.symptomObviousnessKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.symptomObviousnessInternalKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.symptomObviousnessHandlingKnown = new AmountTable().withDice(this.dice).roll().combinedString;

        illness.symptomConsistency = new SymptomConsistencyTable().withDice(this.dice).roll().combinedString;
        illness.symptomConsistencyKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.symptomConsistencyInternalKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.symptomConsistencyHandlingKnown = new AmountTable().withDice(this.dice).roll().combinedString;

        illness.incubationPeriod = new IncubationPeriodTable().withDice(this.dice).roll().combinedString;
        illness.incubationPeriodKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.incubationPeriodInternalKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.incubationPeriodHandlingKnown = new AmountTable().withDice(this.dice).roll().combinedString;

        illness.illnessMimicry = new IllnessMimicryTable().withDice(this.dice).roll().combinedString;
        illness.illnessMimicryKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.illnessMimicryInternalKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.illnessMimicryHandlingKnown = new AmountTable().withDice(this.dice).roll().combinedString;

        illness.detectionMethodComplexity = new DetectionMethodComplexityTable().withDice(this.dice).roll().combinedString;
        illness.detectionMethodComplexityKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.detectionMethodComplexityInternalKnown = new AmountTable().withDice(this.dice).roll().combinedString;
        illness.detectionMethodComplexityHandlingKnown = new AmountTable().withDice(this.dice).roll().combinedString;

        //TODO: This is always the middle value because there are so many attributes
        //It is better to roll for these 5 and than try to alter the rolls for the other

        illness.diagnoseDifficulty = this.calculateDiagnoseDifficulty(illness)
        illness.severity = this.calculateSeverity(illness);
        illness.known = this.calculateKnown(illness);
        illness.cureDifficulty = this.calculateCureDifficulty(illness);
        illness.contagiousness = this.calculateContagiousness(illness);

        return { Illness: [illness] };
    }

    async persist(entities: CreatedEntities): Promise<void> {
        if (!entities.Illness || entities.Illness.length === 0) {
            console.log("No illnesses to persist.");
            return;
        }

        try {
            await illnessStore.saveSpecificEntities(entities.Illness);
            console.log(`Illnesses saved successfully.`);
        } catch (error) {
            console.error(`Failed to save illnesses:`, error);
            throw error;
        }
    }

    getEntityType(): string {
        return 'Illness';
    }

    private calculateSeverity(illness: Illness): string {
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

        const attributes: Attribute[] = [
            {values: prognosis, current: illness.prognosis},
            {values: times, current: illness.onset, mapping: pointMappings.onset},
            {values: times, current: illness.time, mapping: pointMappings.timeToCure},
            {values: impact, current: illness.impactOnFunctioning},
            {values: strength, current: illness.levelOfCare}
        ];

        let totalSeverity = 0;

        for (const attr of attributes) {
            if (this.isAttributeWithMapping(attr)) {
                const mappingValue = attr.mapping[attr.current as TimeValue];
                if (mappingValue !== undefined) {
                    totalSeverity += (mappingValue - 1) / (Object.keys(attr.mapping).length - 1);
                }
            } else {
                const index = attr.values.indexOf(attr.current);
                if (index !== -1) {
                    totalSeverity += index / (attr.values.length - 1);
                }
            }
        }
        const averageSeverity = totalSeverity / attributes.length;
        const severityIndex = Math.min(Math.round(averageSeverity * 6), 7) - 1;

        return strength[severityIndex];
    }

    private isAttributeWithMapping(attr: Attribute): attr is AttributeWithMapping {
        return 'mapping' in attr;
    }

    private calculateDiagnoseDifficulty(illness : Illness):string {
        const attributes = [
            { values: amounts, current: illness.symptomsKnown, weight: 1 },
            { values: symptomObviousness, current: illness.symptomObviousness, weight: 1 },
            { values: symptomConsistency, current: illness.symptomConsistency, weight: 1 },
            { values: incubationPeriod, current: illness.incubationPeriod, weight: 1 },
            { values: illnessMimicry, current: illness.illnessMimicry, weight: 1 },
            { values: detectionMethodComplexity, current: illness.detectionMethodComplexity, weight: 1 },
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

        return illness.diagnoseDifficulty = difficultyLevels[difficultyIndex];
    }

    private calculateKnown(illness: Illness): string {
        const knownAttributes = [
            illness.adjectiveKnown, illness.adjectiveInternalKnown, illness.adjectiveHandlingKnown,
            illness.timeKnown, illness.timeInternalKnown, illness.timeHandlingKnown,
            illness.onsetKnown, illness.onsetInternalKnown, illness.onsetHandlingKnown,
            illness.impactKnown, illness.impactInternalKnown, illness.impactHandlingKnown,
            illness.levelOfCareKnown, illness.levelOfCareInternalKnown, illness.levelOfCareHandlingKnown,
            illness.typeKnown, illness.typeInternalKnown, illness.typeHandlingKnown,
            illness.beginningSymptomsKnown, illness.beginningSymptomsInternalKnown, illness.beginningSymptomsHandlingKnown,
            illness.symptomsKnown, illness.symptomsInternalKnown, illness.symptomsHandlingKnown,
            illness.originKnown, illness.originInternalKnown, illness.originHandlingKnown,
            illness.worldEffectKnown, illness.worldEffectInternalKnown, illness.worldEffectHandlingKnown,
            illness.loreKnown, illness.loreInternalKnown, illness.loreHandlingKnown,
            illness.ageKnown, illness.ageInternalKnown, illness.ageHandlingKnown,
            illness.transmissionKnown, illness.transmissionInternalKnown, illness.transmissionHandlingKnown,
            illness.prognosisKnown, illness.prognosisInternalKnown, illness.prognosisHandlingKnown,
            illness.crossSpeciesTransmissionKnown, illness.crossSpeciesTransmissionInternalKnown, illness.crossSpeciesTransmissionHandlingKnown,
            illness.geographicSpreadKnown, illness.geographicSpreadInternalKnown, illness.geographicSpreadHandlingKnown,
            illness.hostDiversityKnown, illness.hostDiversityInternalKnown, illness.hostDiversityHandlingKnown,
            illness.seasonalityKnown, illness.seasonalityInternalKnown, illness.seasonalityHandlingKnown,
            illness.vectorInvolvementKnown, illness.vectorInvolvementInternalKnown, illness.vectorInvolvementHandlingKnown,
            illness.cureKnown, illness.cureInternalKnown, illness.cureHandlingKnown,
            illness.cureEffectivenessKnown, illness.cureEffectivenessInternalKnown, illness.cureEffectivenessHandlingKnown,
            illness.cureAvailabilityKnown, illness.cureAvailabilityInternalKnown, illness.cureAvailabilityHandlingKnown,
            illness.cureSideEffectsKnown, illness.cureSideEffectsInternalKnown, illness.cureSideEffectsHandlingKnown,
            illness.cureDurationKnown, illness.cureDurationInternalKnown, illness.cureDurationHandlingKnown,
            illness.cureComplexityKnown, illness.cureComplexityInternalKnown, illness.cureComplexityHandlingKnown,
            illness.symptomObviousnessKnown, illness.symptomObviousnessInternalKnown, illness.symptomObviousnessHandlingKnown,
            illness.symptomConsistencyKnown, illness.symptomConsistencyInternalKnown, illness.symptomConsistencyHandlingKnown,
            illness.incubationPeriodKnown, illness.incubationPeriodInternalKnown, illness.incubationPeriodHandlingKnown,
            illness.illnessMimicryKnown, illness.illnessMimicryInternalKnown, illness.illnessMimicryHandlingKnown,
            illness.detectionMethodComplexityKnown, illness.detectionMethodComplexityInternalKnown, illness.detectionMethodComplexityHandlingKnown
        ];

        let totalKnown = 0;

        for (const attr of knownAttributes) {
            const index = amounts.indexOf(attr);
            if (index !== -1) {
                totalKnown += (amounts.length - 1 - index) / (amounts.length - 1);
            }
        }

        const averageKnown = totalKnown / knownAttributes.length;
        const knownIndex = Math.min(Math.round(averageKnown * 6), 6);

        return amounts[knownIndex];
    }

    private calculateCureDifficulty(illness: Illness): string {
        const attributes = [
            { values: cureEffectiveness, current: illness.cureEffectiveness, weight: 2 },
            { values: cureAvailability, current: illness.cureAvailability, weight: 1.5 },
            { values: cureSideEffects, current: illness.cureSideEffects, weight: 1 },
            { values: cureDuration, current: illness.cureDuration, weight: 0.5 },
            { values: cureComplexity, current: illness.cureComplexity, weight: 1 },
            { values: difficultyLevels, current: illness.diagnoseDifficulty, weight: 1 },
        ];

        return this.calculateDifficultyLevel(attributes);
    }

    private calculateContagiousness(illness: Illness): string {
        const attributes = [
            { values: amounts, current: illness.cureDifficulty, weight: 2 },
            // TODO: Add more attributes here
        ];

        return this.calculateDifficultyLevel(attributes);
    }

    private calculateDifficultyLevel(attributes: Array<{values: string[], current: string, weight: number}>): string {
        let totalDifficulty = 0;
        let totalWeight = 0;

        for (const attr of attributes) {
            const index = attr.values.indexOf(attr.current);
            if (index !== -1) {
                const normalizedValue = index / (attr.values.length - 1);
                totalDifficulty += normalizedValue * attr.weight;
                totalWeight += attr.weight;
            }
        }

        const averageDifficulty = totalDifficulty / totalWeight;
        const difficultyIndex = Math.min(Math.round(averageDifficulty * (difficultyLevels.length - 1)), difficultyLevels.length - 1);

        return difficultyLevels[difficultyIndex];
    }

}