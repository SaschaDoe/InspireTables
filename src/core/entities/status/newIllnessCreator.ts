import {IllnessAdjectiveTable} from "../../tables/illness/illnessAdjectiveTable";
import {TimeTable} from "../../tables/other/timeTable";
import {IllnessTypeTable} from "../../tables/illness/illnessTypeTable";
import {IllnessSymptomTable} from "../../tables/illness/illnessSymptomTable";
import {IllnessCureTable} from "../../tables/illness/illnessCureTable";
import {IllnessOriginTable} from "../../tables/illness/illnessOriginTable";
import {IllnessWorldEffectTable} from "../../tables/illness/illnessWorldEffectTable";
import {IllnessLoreTable} from "../../tables/illness/illnessLoreTable";
import {IllnessTransmissionTable} from "../../tables/illness/illnessTransmissionTable";
import {illnessStore} from "../persist/stores";
import {prognosis, PrognosisTable} from "../../tables/illness/prognosisTable";
import {ImpactTable} from "../../tables/other/impactTable";
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
import {AttributeDefinition} from "../attributeDefinition";
import {SymptomObviousnessTable} from "../../tables/illness/symptomObviousnessTable";
import {SymptomConsistencyTable} from "../../tables/illness/symptomConsistencyTable";
import {IncubationPeriodTable} from "../../tables/illness/incubationPeriodTable";
import {IllnessMimicryTable} from "../../tables/illness/illnessMimicryTable";
import {DetectionMethodComplexityTable} from "../../tables/illness/detectionMethodComplexityTable";
import {type CreatedEntities, Creator} from "../creator";
import {Illness} from "./illness";
import type {Table} from "../../tables/table";
import {Experiment} from "../experiment";
import type {CureDifficulty} from "./cureDifficulty";
import type {Severity} from "./severity";

type IllnessAttribute = keyof Illness;
export class NewIllnessCreator extends Creator{
    attributeDefinitions: AttributeDefinition[] = [
        new AttributeDefinition().withName('adjective').withTable(new IllnessAdjectiveTable()),
        new AttributeDefinition().withName('time').withTable(new TimeTable()).withWeight(-1),
        new AttributeDefinition().withName('onset').withTable(new TimeTable()),
        new AttributeDefinition().withName('impactOnFunctioning').withTable(new ImpactTable()),
        new AttributeDefinition().withName('levelOfCare').withTable(new StrengthTable()),
        new AttributeDefinition().withName('type').withTable(new IllnessTypeTable()),
        new AttributeDefinition().withName('origin').withTable(new IllnessOriginTable()),
        new AttributeDefinition().withName('worldEffect').withTable(new IllnessWorldEffectTable()),
        new AttributeDefinition().withName('lore').withTable(new IllnessLoreTable()),
        new AttributeDefinition().withName('age').withTable(new TimeTable()),
        new AttributeDefinition().withName('transmission').withTable(new IllnessTransmissionTable()),
        new AttributeDefinition().withName('prognosis').withTable(new PrognosisTable()),
        new AttributeDefinition().withName('crossSpeciesTransmission').withTable(new CrossSpeciesTransmissionTable()),
        new AttributeDefinition().withName('geographicSpread').withTable(new GeographicSpreadTable()),
        new AttributeDefinition().withName('hostDiversity').withTable(new HostDiversityTable()),
        new AttributeDefinition().withName('seasonality').withTable(new SeasonalityTable()),
        new AttributeDefinition().withName('vectorInvolvement').withTable(new VectorInvolvementTable()),
        new AttributeDefinition().withName('cure').withTable(new IllnessCureTable()),
        new AttributeDefinition().withName('cureEffectiveness').withTable(new CureEffectivenessTable()),
        new AttributeDefinition().withName('cureAvailability').withTable(new CureAvailabilityTable()),
        new AttributeDefinition().withName('cureSideEffects').withTable(new CureSideEffectsTable()),
        new AttributeDefinition().withName('cureDuration').withTable(new CureDurationTable()),
        new AttributeDefinition().withName('cureComplexity').withTable(new CureComplexityTable()),
        new AttributeDefinition().withName('symptomObviousness').withTable(new SymptomObviousnessTable()),
        new AttributeDefinition().withName('symptomConsistency').withTable(new SymptomConsistencyTable()),
        new AttributeDefinition().withName('incubationPeriod').withTable(new IncubationPeriodTable()),
        new AttributeDefinition().withName('illnessMimicry').withTable(new IllnessMimicryTable()),
        new AttributeDefinition().withName('detectionMethodComplexity').withTable(new DetectionMethodComplexityTable()),
    ];

    getEntityType(): string {
        return 'Illness';
    }

    create(): CreatedEntities {
        let illness = new Illness();

        for (const pair of this.attributeDefinitions) {
            if (this.isIllnessAttribute(pair.name)) {
                this.rollAndSetAttribute(illness, pair.name, pair.table);
            } else {
                console.warn(`Attribute ${pair.name} is not a valid key of Illness.`);
            }
        }

        this.rollAndSetSymptoms(illness, 'beginningSymptoms');
        this.rollAndSetSymptoms(illness, 'symptoms');

        let diagnoseDifficulty = this.dice.roll(0,amounts.length-1);
        this.calculateDiagnoseDifficulty(illness, diagnoseDifficulty);
        let cureDifficulty = this.dice.roll(0,amounts.length-1);
        this.calculateCureDifficulty(illness, cureDifficulty);
        let severity = this.dice.roll(0, strengths.length-1);
        this.calculateSeverity(illness, severity);

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

    private isIllnessAttribute(key: string): key is keyof Illness {
        return key in Illness.prototype;
    }

    private calculateAttribute<T>(
        illness: Illness,
        attributeNames: string[],
        target: number,
        resultArray: string[],
        createInstance: () => T,
        setIllnessAttributes: (illness: Illness, result: T) => void,
        setFinalAttribute: (illness: Illness, value: string) => void
    ): [number, T] {
        let filteredDefinitions = this.filterAttributeDefinitions(attributeNames, this.attributeDefinitions);

        const experiment = new Experiment<T>(this.dice);

        let nearestResult = experiment
            .withNumberOfTries(100)
            .generateMatchingInstance(
                filteredDefinitions,
                target,
                resultArray.length,
                createInstance
            );

        setIllnessAttributes(illness, nearestResult[1]);
        setFinalAttribute(illness, resultArray[nearestResult[0]]);

        return nearestResult;
    }

    calculateDiagnoseDifficulty(illness: Illness, target: number): [number, DiagnoseDifficulty] {
        return this.calculateAttribute<DiagnoseDifficulty>(
            illness,
            ["symptomObviousness", "symptomConsistency", "incubationPeriod", "illnessMimicry", "detectionMethodComplexity"],
            target,
            amounts,
            () => ({} as DiagnoseDifficulty),
            (illness, result) => {
                illness.symptomObviousness = result.symptomObviousness;
                illness.symptomConsistency = result.symptomConsistency;
                illness.incubationPeriod = result.incubationPeriod;
                illness.illnessMimicry = result.illnessMimicry;
                illness.detectionMethodComplexity = result.detectionMethodComplexity;
            },
            (illness, value) => illness.diagnoseDifficulty = value
        );
    }

    private calculateCureDifficulty(illness: Illness, target: number): [number, CureDifficulty] {
        return this.calculateAttribute<CureDifficulty>(
            illness,
            ["cureEffectiveness", "cureAvailability", "cureSideEffects", "cureDuration", "cureComplexity"],
            target,
            amounts,
            () => ({} as CureDifficulty),
            (illness, result) => {
                illness.cureComplexity = result.cureComplexity;
                illness.cureDuration = result.cureDuration;
                illness.cureSideEffects = result.cureSideEffects;
                illness.cureAvailability = result.cureAvailability;
                illness.cureEffectiveness = result.cureEffectiveness;
            },
            (illness, value) => illness.cureDifficulty = value
        );
    }

    private calculateSeverity(illness: Illness, target: number): [number, Severity] {
        return this.calculateAttribute<Severity>(
            illness,
            ["onset", "impactOnFunctioning", "time", "prognosis"],
            target,
            strengths,
            () => ({} as Severity),
            (illness, result) => {
                illness.onset = result.onset;
                illness.impactOnFunctioning = result.impactOnFunctioning;
                illness.time = result.time;
                illness.prognosis = result.prognosis;
            },
            (illness, value) => illness.severity = value
        );
    }

    private filterAttributeDefinitions(
        neededAttributes: string[],
        allDefinitions: AttributeDefinition[]
    ): AttributeDefinition[] {
        return allDefinitions.filter(def => neededAttributes.includes(def.name));
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
}