import {TimeTableName} from "../../tables/content/other/timeTable";
import {IllnessTableName} from "../../tables/content/illness/illnessTypeTable";
import {IllnessSymptomTableName} from "../../tables/content/illness/illnessSymptomTable";
import {IllnessCureTableName} from "../../tables/content/illness/illnessCureTable";
import {IllnessOriginTableName} from "../../tables/content/illness/illnessOriginTable";
import {
    IllnessWordEffectTableName
} from "../../tables/content/illness/illnessWorldEffectTable";
import {IllnessLoreTableName} from "../../tables/content/illness/illnessLoreTable";
import {
    IllnessTransmissionTableName
} from "../../tables/content/illness/illnessTransmissionTable";
import {PrognosisTableName} from "../../tables/content/illness/prognosisTable";
import {ImpactTableName} from "../../tables/content/other/impactTable";
import {strengths} from "../../tables/content/other/strengthTable";
import {amounts, AmountTable, AmountTableName} from "../../tables/content/other/amountTable";
import {VectorInvolvementTableName} from "../../tables/content/illness/vectorInvolvementTable";
import {SeasonalityTableName} from "../../tables/content/illness/seasonalityTable";
import {HostDiversityTableName} from "../../tables/content/illness/hostDiversityTable";
import {GeographicSpreadTableName} from "../../tables/content/illness/geographicSpreadTable";
import {
    CrossSpeciesTransmissionTableName
} from "../../tables/content/illness/crossSpeciesTransmissionTable";
import {CureEffectivenessTableName} from "../../tables/content/illness/cureEffectivnessTable";
import {CureAvailabilityTableName} from "../../tables/content/illness/cureAvailabilityTable";
import {CureSideEffectsTableName} from "../../tables/content/illness/cureSideEffectsTable";
import {CureDurationTableName} from "../../tables/content/illness/cureDurationTable";
import {CureComplexityTableName} from "../../tables/content/illness/cureComplexityTable";
import {AttributeDefinition} from "../attributeDefinition";
import {
    SymptomObviousnessTableName
} from "../../tables/content/illness/symptomObviousnessTable";
import {
    SymptomConsistencyTableName
} from "../../tables/content/illness/symptomConsistencyTable";
import {IncubationPeriodTableName} from "../../tables/content/illness/incubationPeriodTable";
import {IllnessMimicryTableName} from "../../tables/content/illness/illnessMimicryTable";
import {
    DetectionMethodComplexityTableName
} from "../../tables/content/illness/detectionMethodComplexityTable";
import {Illness} from "./illness";
import {Experiment} from "../experiment";
import type {CureDifficulty} from "./cureDifficulty";
import type {Severity} from "./severity";
import {SpeedTableName} from "../../tables/content/other/speedTable";
import {
    AsymptomaticSpreadTableName
} from "../../tables/content/illness/asymptomaticSpreadTable";
import {
    EnvironmentalResilienceTableName
} from "../../tables/content/illness/environmentalResilienceTable";
import type {Contagiousness} from "./contagiousness";
import {intensityLevels} from "../../tables/content/other/intensityTable";
import {difficultyLevels} from "../../tables/content/other/difficultTable";
import {IllnessAdjectiveGenerator} from "./illnessAdjectiveGenerator";
import {getStore} from "../persist/stores";
import {BaseCreator} from "../baseCreator";
import {CreationResult} from "../creationResult";

type IllnessAttribute = keyof Illness;

export class IllnessCreator extends BaseCreator{
    attributeDefinitions: AttributeDefinition[] = [
        new AttributeDefinition().withName('type').withTable(IllnessTableName),
        new AttributeDefinition().withName('time').withTable(TimeTableName).withWeight(-1),
        new AttributeDefinition().withName('onset').withTable(TimeTableName),
        new AttributeDefinition().withName('impactOnFunctioning').withTable(ImpactTableName),
        new AttributeDefinition().withName('origin').withTable(IllnessOriginTableName),
        new AttributeDefinition().withName('worldEffect').withTable(IllnessWordEffectTableName),
        new AttributeDefinition().withName('lore').withTable(IllnessLoreTableName),
        new AttributeDefinition().withName('age').withTable(TimeTableName),
        new AttributeDefinition().withName('transmission').withTable(IllnessTransmissionTableName),
        new AttributeDefinition().withName('prognosis').withTable(PrognosisTableName),
        new AttributeDefinition().withName('crossSpeciesTransmission').withTable(CrossSpeciesTransmissionTableName),
        new AttributeDefinition().withName('geographicSpread').withTable(GeographicSpreadTableName),
        new AttributeDefinition().withName('hostDiversity').withTable(HostDiversityTableName),
        new AttributeDefinition().withName('seasonality').withTable(SeasonalityTableName),
        new AttributeDefinition().withName('vectorInvolvement').withTable(VectorInvolvementTableName),
        new AttributeDefinition().withName('cure').withTable(IllnessCureTableName),
        new AttributeDefinition().withName('cureEffectiveness').withTable(CureEffectivenessTableName),
        new AttributeDefinition().withName('cureAvailability').withTable(CureAvailabilityTableName),
        new AttributeDefinition().withName('cureSideEffects').withTable(CureSideEffectsTableName),
        new AttributeDefinition().withName('cureDuration').withTable(CureDurationTableName),
        new AttributeDefinition().withName('cureComplexity').withTable(CureComplexityTableName),
        new AttributeDefinition().withName('symptomObviousness').withTable(SymptomObviousnessTableName),
        new AttributeDefinition().withName('symptomConsistency').withTable(SymptomConsistencyTableName),
        new AttributeDefinition().withName('incubationPeriod').withTable(IncubationPeriodTableName),
        new AttributeDefinition().withName('illnessMimicry').withTable(IllnessMimicryTableName),
        new AttributeDefinition().withName('detectionMethodComplexity').withTable(DetectionMethodComplexityTableName),
        new AttributeDefinition().withName('reproductionRate').withTable(SpeedTableName),// weight: -1
        new AttributeDefinition().withName('incubationPeriod').withTable(TimeTableName),// weight: -1
        new AttributeDefinition().withName('infectiousPeriod').withTable(TimeTableName),
        new AttributeDefinition().withName('attackRate').withTable(AmountTableName),
        new AttributeDefinition().withName('asymptomaticSpread').withTable(AsymptomaticSpreadTableName),
        new AttributeDefinition().withName('environmentalResilience').withTable(EnvironmentalResilienceTableName),
    ];

    create(): CreationResult {
        let illness = new Illness();

        illness.adjective = new IllnessAdjectiveGenerator().withDice(this.dice).generate();

        for (const pair of this.attributeDefinitions) {
            if (this.isIllnessAttribute(pair.name)) {
                this.rollAndSetAttribute(illness, pair.name, pair.tableName);
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

        return new CreationResult();
    }

    private rollAndSetAttribute(illness: Illness, attribute: IllnessAttribute, tableName: string): void {
        const value = this.tableManager.getTable(tableName).withDice(this.dice).roll().combinedString;
        this.setIllnessAttribute(illness, attribute, value);
        this.setIllnessAttribute(illness, `${attribute}Known` as IllnessAttribute, new AmountTable().withDice(this.dice).roll().combinedString);
        this.setIllnessAttribute(illness, `${attribute}InternalKnown` as IllnessAttribute, new AmountTable().withDice(this.dice).roll().combinedString);
        this.setIllnessAttribute(illness, `${attribute}HandlingKnown` as IllnessAttribute, new AmountTable().withDice(this.dice).roll().combinedString);
    }

    private rollAndSetSymptoms(illness: Illness, symptomType: 'beginningSymptoms' | 'symptoms'): void {
        const numberOfSymptoms = this.dice.rollWith(3);
        illness[symptomType] = [];
        for (let i = 0; i < numberOfSymptoms; i++) {
            illness[symptomType].push(this.tableManager.getTable(IllnessSymptomTableName).withDice(this.dice).roll().combinedString);
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

    async persist(illness: Illness): Promise<void> {
        try {
            let store = await getStore('illnessStore');
            await store.saveEntity(illness);
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