import { Entity } from "../entity";
import {AutoDeletableEntity} from "../deletable";

export class Illness extends AutoDeletableEntity{
    adjective = "";
    type = "";

    time = "";
    timeKnown = "";
    timeInternalKnown = "";
    timeHandlingKnown = "";

    onset = "";
    onsetKnown = "";
    onsetInternalKnown = "";
    onsetHandlingKnown = "";

    impactOnFunctioning = "";
    impactOnFunctioningKnown = "";
    impactOnFunctioningInternalKnown = "";
    impactOnFunctioningHandlingKnown = "";
    
    beginningSymptoms: string[] = [];
    beginningSymptomsKnown = "";
    beginningSymptomsInternalKnown = "";
    beginningSymptomsHandlingKnown = "";

    symptoms: string[] = [];
    symptomsKnown = "";
    symptomsInternalKnown = "";
    symptomsHandlingKnown = "";

    origin = "";
    originKnown = "";
    originInternalKnown = "";
    originHandlingKnown = "";

    worldEffect = "";
    worldEffectKnown = "";
    worldEffectInternalKnown = "";
    worldEffectHandlingKnown = "";

    lore = "";
    loreKnown = "";
    loreInternalKnown = "";
    loreHandlingKnown = "";

    age = "";
    ageKnown = "";
    ageInternalKnown = "";
    ageHandlingKnown = "";

    transmission = "";
    transmissionKnown = "";
    transmissionInternalKnown = "";
    transmissionHandlingKnown = "";

    prognosis = "";
    prognosisKnown = "";
    prognosisInternalKnown = "";
    prognosisHandlingKnown = "";

    severity = "";

    cure = "";
    cureKnown = "";
    cureInternalKnown = "";
    cureHandlingKnown = "";

    cureEffectiveness = "";
    cureEffectivenessKnown = "";
    cureEffectivenessInternalKnown = "";
    cureEffectivenessHandlingKnown = "";

    cureAvailability = "";
    cureAvailabilityKnown = "";
    cureAvailabilityInternalKnown = "";
    cureAvailabilityHandlingKnown = "";

    cureSideEffects = "";
    cureSideEffectsKnown = "";
    cureSideEffectsInternalKnown = "";
    cureSideEffectsHandlingKnown = "";

    cureDuration = "";
    cureDurationKnown = "";
    cureDurationInternalKnown = "";
    cureDurationHandlingKnown = "";

    cureComplexity = "";
    cureComplexityKnown = "";
    cureComplexityInternalKnown = "";
    cureComplexityHandlingKnown = "";

    cureDifficulty = ""

    symptomObviousness = "";
    symptomObviousnessKnown = "";
    symptomObviousnessInternalKnown = "";
    symptomObviousnessHandlingKnown = "";

    symptomConsistency = "";
    symptomConsistencyKnown = "";
    symptomConsistencyInternalKnown = "";
    symptomConsistencyHandlingKnown = "";

    incubationPeriod = "";
    incubationPeriodKnown = "";
    incubationPeriodInternalKnown = "";
    incubationPeriodHandlingKnown = "";

    illnessMimicry = "";
    illnessMimicryKnown = "";
    illnessMimicryInternalKnown = "";
    illnessMimicryHandlingKnown = "";

    detectionMethodComplexity = "";
    detectionMethodComplexityKnown = "";
    detectionMethodComplexityInternalKnown = "";
    detectionMethodComplexityHandlingKnown = "";

    diagnoseDifficulty = "";

    reproductionRate = "";
    reproductionRateKnown = "";
    reproductionRateInternalKnown = "";
    reproductionRateHandlingKnown = "";

    infectiousPeriod = "";
    infectiousPeriodKnown = "";
    infectiousPeriodInternalKnown = "";
    infectiousPeriodHandlingKnown = "";

    attackRate = "";
    attackRateKnown = "";
    attackRateInternalKnown = "";
    attackRateHandlingKnown = "";

    asymptomaticSpread = "";
    asymptomaticSpreadKnown = "";
    asymptomaticSpreadInternalKnown = "";
    asymptomaticSpreadHandlingKnown = "";

    environmentalResilience = "";
    environmentalResilienceKnown = "";
    environmentalResilienceInternalKnown = "";
    environmentalResilienceHandlingKnown = "";

    crossSpeciesTransmission = "";
    crossSpeciesTransmissionKnown = "";
    crossSpeciesTransmissionInternalKnown = "";
    crossSpeciesTransmissionHandlingKnown = "";

    geographicSpread = "";
    geographicSpreadKnown = "";
    geographicSpreadInternalKnown = "";
    geographicSpreadHandlingKnown = "";

    hostDiversity = "";
    hostDiversityKnown = "";
    hostDiversityInternalKnown = "";
    hostDiversityHandlingKnown = "";

    seasonality = "";
    seasonalityKnown = "";
    seasonalityInternalKnown = "";
    seasonalityHandlingKnown = "";

    vectorInvolvement = "";
    vectorInvolvementKnown = "";
    vectorInvolvementInternalKnown = "";
    vectorInvolvementHandlingKnown = "";

    contagiousness = "";

    known = "";
}