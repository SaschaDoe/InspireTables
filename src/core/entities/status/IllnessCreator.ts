import {TimeTable} from "../../tables/content/other/timeTable";
import {IllnessTypeTable} from "../../tables/illness/illnessTypeTable";
import {IllnessSymptomTable} from "../../tables/illness/illnessSymptomTable";
import {IllnessCureTable} from "../../tables/illness/illnessCureTable";
import {IllnessOriginTable} from "../../tables/illness/illnessOriginTable";
import {IllnessWorldEffectTable} from "../../tables/illness/illnessWorldEffectTable";
import {IllnessLoreTable} from "../../tables/illness/illnessLoreTable";
import {IllnessTransmissionTable} from "../../tables/illness/illnessTransmissionTable";
import {illnessStore} from "../persist/stores";
import {PrognosisTable} from "../../tables/illness/prognosisTable";
import {ImpactTable} from "../../tables/content/other/impactTable";
import {strengths} from "../../tables/content/other/strengthTable";
import {amounts, AmountTable} from "../../tables/content/other/amountTable";
import {VectorInvolvementTable} from "../../tables/illness/vectorInvolvementTable";
import {SeasonalityTable} from "../../tables/illness/seasonalityTable";
import {HostDiversityTable} from "../../tables/illness/hostDiversityTable";
import {GeographicSpreadTable} from "../../tables/illness/geographicSpreadTable";
import {CrossSpeciesTransmissionTable} from "../../tables/illness/crossSpeciesTransmissionTable";
import {CureEffectivenessTable} from "../../tables/illness/cureEffectivnessTable";
import {CureAvailabilityTable} from "../../tables/illness/cureAvailabilityTable";
import {CureSideEffectsTable} from "../../tables/illness/cureSideEffectsTable";
import {CureDurationTable} from "../../tables/illness/cureDurationTable";
import {CureComplexityTable} from "../../tables/illness/cureComplexityTable";
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
import {SpeedTable} from "../../tables/content/other/speedTable";
import {AsymptomaticSpreadTable} from "../../tables/illness/asymptomaticSpreadTable";
import {EnvironmentalResilienceTable} from "../../tables/illness/environmentalResilienceTable";
import type {Contagiousness} from "./contagiousness";
import {intensityLevels} from "../../tables/content/other/intensityTable";
import {difficultyLevels} from "../../tables/content/other/difficultTable";
import {IllnessAdjectiveGenerator} from "./illnessAdjectiveGenerator";

type IllnessAttribute = keyof Illness;

export class IllnessCreator extends Creator{
    attributeDefinitions: AttributeDefinition[] = [
        new AttributeDefinition().withName('type').withTable(new IllnessTypeTable()),
        new AttributeDefinition().withName('time').withTable(new TimeTable()).withWeight(-1),
        new AttributeDefinition().withName('onset').withTable(new TimeTable()),
        new AttributeDefinition().withName('impactOnFunctioning').withTable(new ImpactTable()),
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
        new AttributeDefinition().withName('reproductionRate').withTable(new SpeedTable()),// weight: -1
        new AttributeDefinition().withName('incubationPeriod').withTable(new TimeTable()),// weight: -1
        new AttributeDefinition().withName('infectiousPeriod').withTable(new TimeTable()),
        new AttributeDefinition().withName('attackRate').withTable(new AmountTable()),
        new AttributeDefinition().withName('asymptomaticSpread').withTable(new AsymptomaticSpreadTable()),
        new AttributeDefinition().withName('environmentalResilience').withTable(new EnvironmentalResilienceTable()),
    ];

    getEntityType(): string {
        return 'Illness';
    }

    create(): CreatedEntities {
        let illness = new Illness();

        illness.adjective = new IllnessAdjectiveGenerator().withDice(this.dice).generate();

        for (const pair of this.attributeDefinitions) {
            if (this.isIllnessAttribute(pair.name)) {
                this.rollAndSetAttribute(illness, pair.name, pair.table);
            } else {
                console.warn(`Attribute ${pair.name} is not a valid key of Illness.`);
            }
        }

        this.rollAndSetSymptoms(illness, 'beginningSymptoms');
        this.rollAndSetSymptoms(illness, 'symptoms');

        let diagnoseDifficulty = this.dice.rollInterval(0,difficultyLevels.length-1);
        this.calculateDiagnoseDifficulty(illness, diagnoseDifficulty);
        let cureDifficulty = this.dice.rollInterval(0,difficultyLevels.length-1);
        this.calculateCureDifficulty(illness, cureDifficulty);
        let severity = this.dice.rollInterval(0, strengths.length-1);
        this.calculateSeverity(illness, severity);
        let contagiousness = this.dice.rollInterval(0,intensityLevels.length-1);
        this.calculateContagiousness(illness, contagiousness);
        this.calculateKnown(illness);

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
        return key in new Illness();
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
            difficultyLevels,
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
            difficultyLevels,
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

    private calculateContagiousness(illness: Illness, target: number): [number, Contagiousness] {
        return this.calculateAttribute<Contagiousness>(
            illness,
            [
                "transmissionMode",
                "reproductionRate",
                "incubationPeriod",
                "infectiousPeriod",
                "attackRate",
                "asymptomaticSpread",
                "environmentalResilience",
                "vectorInvolvement",
                "seasonality",
                "hostDiversity",
                "geographicSpread",
                "crossSpeciesTransmission"],
            target,
            intensityLevels,
            () => ({} as Contagiousness),
            (illness, result) => {
                illness.transmission = result.transmissionMode;
                illness.reproductionRate = result.reproductionRate;
                illness.incubationPeriod = result.incubationPeriod;
                illness.infectiousPeriod = result.infectiousPeriod;
                illness.attackRate = result.attackRate;
                illness.asymptomaticSpread = result.asymptomaticSpread;
                illness.environmentalResilience = result.environmentalResilience;
                illness.vectorInvolvement = result.vectorInvolvement;
                illness.seasonality = result.seasonality;
                illness.hostDiversity = result.hostDiversity;
                illness.geographicSpread = result.geographicSpread;
                illness.crossSpeciesTransmission = result.crossSpeciesTransmission;
            },
            (illness, value) => illness.contagiousness = value
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

    getAmountValue(amount: string): number {
        return amounts.indexOf(amount);
    }

    calculateKnown(illness: Illness) {
        const knownProperties = Object.keys(illness).filter(key => key.endsWith('Known'));

        const sum = knownProperties.reduce((acc, key) => {
            const value = illness[key as keyof Illness] as string;
            return acc + this.getAmountValue(value);
        }, 0);

        const average = sum / knownProperties.length;
        const roundedIndex = Math.round(average);

        illness.known = amounts[roundedIndex];
    }
}