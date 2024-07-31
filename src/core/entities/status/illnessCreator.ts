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
import {impacts, ImpactTable} from "../../tables/other/impactTable";
import {strengths, StrengthTable} from "../../tables/other/strengthTable";
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
import type {Table} from "../../tables/table";

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

type IllnessAttribute = keyof Illness;

interface AttributeTablePair {
    attribute: IllnessAttribute;
    table: Table;  // You might want to create a more specific type for tables
}

export class IllnessCreator extends Creator {
            private attributeTablePairs: AttributeTablePair[] = [
                { attribute: 'adjective', table: new IllnessAdjectiveTable() },
                { attribute: 'time', table: new TimeTable() },
                { attribute: 'onset', table: new TimeTable() },
                { attribute: 'impactOnFunctioning', table: new ImpactTable() },
                { attribute: 'levelOfCare', table: new StrengthTable() },
                { attribute: 'type', table: new IllnessTypeTable() },
                { attribute: 'origin', table: new IllnessOriginTable() },
                { attribute: 'worldEffect', table: new IllnessWorldEffectTable() },
                { attribute: 'lore', table: new IllnessLoreTable() },
                { attribute: 'age', table: new TimeTable() },
                { attribute: 'transmission', table: new IllnessTransmissionTable() },
                { attribute: 'prognosis', table: new PrognosisTable() },
                { attribute: 'crossSpeciesTransmission', table: new CrossSpeciesTransmissionTable() },
                { attribute: 'geographicSpread', table: new GeographicSpreadTable() },
                { attribute: 'hostDiversity', table: new HostDiversityTable() },
                { attribute: 'seasonality', table: new SeasonalityTable() },
                { attribute: 'vectorInvolvement', table: new VectorInvolvementTable() },
                { attribute: 'cure', table: new IllnessCureTable() },
                { attribute: 'cureEffectiveness', table: new CureEffectivenessTable() },
                { attribute: 'cureAvailability', table: new CureAvailabilityTable() },
                { attribute: 'cureSideEffects', table: new CureSideEffectsTable() },
                { attribute: 'cureDuration', table: new CureDurationTable() },
                { attribute: 'cureComplexity', table: new CureComplexityTable() },
                { attribute: 'symptomObviousness', table: new SymptomObviousnessTable() },
                { attribute: 'symptomConsistency', table: new SymptomConsistencyTable() },
                { attribute: 'incubationPeriod', table: new IncubationPeriodTable() },
                { attribute: 'illnessMimicry', table: new IllnessMimicryTable() },
                { attribute: 'detectionMethodComplexity', table: new DetectionMethodComplexityTable() },

            ];

            create(): CreatedEntities {
                let illness = new Illness();

                for (const pair of this.attributeTablePairs) {
                    this.rollAndSetAttribute(illness, pair.attribute, pair.table);
                }

                this.rollAndSetSymptoms(illness, 'beginningSymptoms');
                this.rollAndSetSymptoms(illness, 'symptoms');

                let diagnoseDifficulty = this.dice.roll(0,amounts.length-1);

                illness.diagnoseDifficulty = this.calculateDiagnoseDifficulty(illness, diagnoseDifficulty);
                illness.severity = this.calculateSeverity(illness);
                illness.known = this.calculateKnown(illness);

                let cureDifficulty = this.dice.roll(0,amounts.length-1);
                illness.cureDifficulty = this.calculateDifficultyLevel(this.getCureDifficultyAttributes(illness), cureDifficulty);

                //let contagiousness = this.dice.roll(0,amounts.length-1);
                //illness.contagiousness = this.calculateDifficultyLevel(this.getContagiousnessAttributes(illness));

                return { Illness: [illness] };
            }

            private rollAndSetAttribute(illness: Illness, attribute: IllnessAttribute, table: Table): void {
                const value = table.withDice(this.dice).roll().combinedString;
                this.setIllnessAttribute(illness, attribute, value);
                this.setIllnessAttribute(illness, `${attribute}Known` as IllnessAttribute, new AmountTable().withDice(this.dice).roll().combinedString);
                this.setIllnessAttribute(illness, `${attribute}InternalKnown` as IllnessAttribute, new AmountTable().withDice(this.dice).roll().combinedString);
                this.setIllnessAttribute(illness, `${attribute}HandlingKnown` as IllnessAttribute, new AmountTable().withDice(this.dice).roll().combinedString);
            }

            private rollAndSetSymptoms(illness: Illness, symptomType: 'beginningSymptoms' | 'symptoms'): void {
                const numberOfSymptoms = this.dice.rollWith(3);
                illness[symptomType] = [];
                for (let i = 0; i < numberOfSymptoms; i++) {
                    illness[symptomType].push(new IllnessSymptomTable().withDice(this.dice).roll().combinedString);
                }
                this.setIllnessAttribute(illness, `${symptomType}Known` as IllnessAttribute, new AmountTable().withDice(this.dice).roll().combinedString);
                this.setIllnessAttribute(illness, `${symptomType}InternalKnown` as IllnessAttribute, new AmountTable().withDice(this.dice).roll().combinedString);
                this.setIllnessAttribute(illness, `${symptomType}HandlingKnown` as IllnessAttribute, new AmountTable().withDice(this.dice).roll().combinedString);
            }

            private setIllnessAttribute(illness: any, attribute: string, value: string): void {
                if (illness.hasOwnProperty(attribute)) {
                    (illness as any)[attribute] = value;
                } else {
                    console.warn(`Attribute ${attribute} not found on Illness object.`);
                }
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
                    {values: impacts, current: illness.impactOnFunctioning},
                    {values: strengths, current: illness.levelOfCare}
                ];

                const totalSeverity = this.calculateAttributeTotal(attributes);
                const averageSeverity = totalSeverity / attributes.length;
                const severityIndex = Math.min(Math.round(averageSeverity * 6), 7) - 1;

                return strengths[severityIndex];
            }

            private calculateAttributeTotal(attributes: Attribute[]): number {
                return attributes.reduce((total, attr) => {
                    if (this.isAttributeWithMapping(attr)) {
                        const mappingValue = attr.mapping[attr.current as TimeValue];
                        if (mappingValue !== undefined) {
                            return total + (mappingValue - 1) / (Object.keys(attr.mapping).length - 1);
                        }
                    } else {
                        const index = attr.values.indexOf(attr.current);
                        if (index !== -1) {
                            return total + index / (attr.values.length - 1);
                        }
                    }
                    return total;
                }, 0);
            }

            private isAttributeWithMapping(attr: Attribute): attr is AttributeWithMapping {
                return 'mapping' in attr;
            }

            private calculateDiagnoseDifficulty(illness: Illness, target: number): string {
                const attributes = [
                    { values: amounts, current: illness.symptomsKnown, weight: 1, },
                    { values: symptomObviousness, current: illness.symptomObviousness, weight: 1 },
                    { values: symptomConsistency, current: illness.symptomConsistency, weight: 1 },
                    { values: incubationPeriod, current: illness.incubationPeriod, weight: 1 },
                    { values: illnessMimicry, current: illness.illnessMimicry, weight: 1 },
                    { values: detectionMethodComplexity, current: illness.detectionMethodComplexity, weight: 1 },
                ];

                return this.calculateDifficultyLevel(attributes, target);
            }

            private calculateKnown(illness: Illness): string {
                const knownAttributes = Object.keys(illness)
                    .filter(key => key.endsWith('Known') || key.endsWith('InternalKnown') || key.endsWith('HandlingKnown'))
                    .map(key => (illness as any)[key]);

                const totalKnown = knownAttributes.reduce((total, attr) => {
                    const index = amounts.indexOf(attr);
                    if (index !== -1) {
                        return total + (amounts.length - 1 - index) / (amounts.length - 1);
                    }
                    return total;
                }, 0);

                const averageKnown = totalKnown / knownAttributes.length;
                const knownIndex = Math.min(Math.round(averageKnown * 6), 6);

                return amounts[knownIndex];
            }

            private getCureDifficultyAttributes(illness: Illness): Array<{values: string[], current: string, weight: number}> {
                return [
                    { values: cureEffectiveness, current: illness.cureEffectiveness, weight: 2 },
                    { values: cureAvailability, current: illness.cureAvailability, weight: 1.5 },
                    { values: cureSideEffects, current: illness.cureSideEffects, weight: 1 },
                    { values: cureDuration, current: illness.cureDuration, weight: 0.5 },
                    { values: cureComplexity, current: illness.cureComplexity, weight: 1 },
                    { values: difficultyLevels, current: illness.diagnoseDifficulty, weight: 1 },
                ];
            }

            private getContagiousnessAttributes(illness: Illness): Array<{values: string[], current: string, weight: number}> {
                return [
                    { values: amounts, current: illness.cureDifficulty, weight: 2 },
                    // TODO: Add more attributes here
                ];
            }

            private calculateDifficultyLevel(attributes: Array<{values: string[], current: string, weight: number}>, target: number): string {
                const totalDifficulty = attributes.reduce((total, attr) => {
                    const index = attr.values.indexOf(attr.current);
                    if (index !== -1) {
                        const normalizedValue = index / (attr.values.length - 1);
                        return total + normalizedValue * attr.weight;
                    }
                    return total;
                }, 0);

                const totalWeight = attributes.reduce((total, attr) => total + attr.weight, 0);
                const averageDifficulty = totalDifficulty / totalWeight;
                const difficultyIndex = Math.min(Math.round(averageDifficulty * (difficultyLevels.length - 1)), difficultyLevels.length - 1);

                return difficultyLevels[difficultyIndex];
            }
        }