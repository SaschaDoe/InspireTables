<script lang="ts">
        import type { Illness } from '../../../core/entities/status/illness';

        export let entity: Illness;

        let detailLevel = 0; // 0: minimal, 1: detailed, 2: known attributes

        function toggleDetail() {
                detailLevel = (detailLevel + 1) % 3;
        }

        function getButtonText() {
                switch (detailLevel) {
                        case 0: return 'More ▼';
                        case 1: return 'Known Attributes ▼';
                        case 2: return 'Less ▼';
                }
        }
</script>

<style>
        .scroll-container {
                overflow-x: auto;
        }
        .attribute {
                white-space: nowrap;
        }
</style>

<div class=" w-full">
        <div class="flex justify-between items-center mb-2">
                <h3 class="text-lg">{`${entity.adjective} ${entity.type}: ${entity.id}`}</h3>
                <button
                        on:click={toggleDetail}
                        class="text-sm font-medium"
                >
                        {getButtonText()}
                </button>
        </div>
        <div class="scroll-container text-sm">
                <div class="attribute"><span class="font-bold">Beginning Symptoms:</span> {entity.beginningSymptoms.join(', ')}
                        {#if detailLevel === 2}
                                <div class="ml-4 text-sm text-gray-600">
                                        <div>Beginning Symptoms Known: {entity.beginningSymptomsKnown}</div>
                                        <div>Beginning Symptoms Internal Known: {entity.beginningSymptomsInternalKnown}</div>
                                        <div>Beginning Symptoms Handling Known: {entity.beginningSymptomsHandlingKnown}</div>
                                </div>
                        {/if}
                </div>
                <div class="attribute"><span class="font-bold">Symptoms:</span> {entity.symptoms.join(', ')}
                        {#if detailLevel === 2}
                                <div class="ml-4 text-sm text-gray-600">
                                        <div>Symptoms Known: {entity.symptomsKnown}</div>
                                        <div>Symptoms Internal Known: {entity.symptomsInternalKnown}</div>
                                        <div>Symptoms Handling Known: {entity.symptomsHandlingKnown}</div>
                                </div>
                        {/if}
                </div>
                <div class="attribute"><span class="font-bold">Contagiousness:</span> {entity.contagiousness}</div>
                <div><span class="font-bold">Severity:</span> {entity.severity}</div>
                <div><span class="font-bold">Diagnose Difficulty:</span> {entity.diagnoseDifficulty}</div>
                <div><span class="font-bold">Cure Difficulty:</span> {entity.cureDifficulty}</div>
                <div>
                        <span class="font-bold">Known:</span> {entity.known}
                        {#if detailLevel === 2}
                                <div class="ml-4 text-sm text-gray-600">
                                        <div>Known: {entity.known}</div>
                                </div>
                        {/if}
                </div>
        </div>
        {#if detailLevel >= 1}
                <div class="mt-4 border-t pt-4">
                        <div class="grid grid-cols-1 gap-2 text-sm">
                                <div class="bg-amber-500">
                                        <span class="font-bold ">Time:</span> {entity.time}
                                        {#if detailLevel === 2}
                                                <div class="ml-4 text-sm text-gray-600">
                                                        <div>Time Known: {entity.timeKnown}</div>
                                                        <div>Time Internal Known: {entity.timeInternalKnown}</div>
                                                        <div>Time Handling Known: {entity.timeHandlingKnown}</div>
                                                </div>
                                        {/if}
                                </div>
                                <div>
                                        <span class="font-bold">Onset:</span> {entity.onset}
                                        {#if detailLevel === 2}
                                                <div class="ml-4 text-sm text-gray-600">
                                                        <div>Onset Known: {entity.onsetKnown}</div>
                                                        <div>Onset Internal Known: {entity.onsetInternalKnown}</div>
                                                        <div>Onset Handling Known: {entity.onsetHandlingKnown}</div>
                                                </div>
                                        {/if}
                                </div>
                                <div>
                                        <span class="font-bold">Impact on Functioning:</span> {entity.impactOnFunctioning}
                                        {#if detailLevel === 2}
                                                <div class="ml-4 text-sm text-gray-600">
                                                        <div>Impact on Functioning Known: {entity.impactOnFunctioningKnown}</div>
                                                        <div>Impact on Functioning Internal Known: {entity.impactOnFunctioningInternalKnown}</div>
                                                        <div>Impact on Functioning Handling Known: {entity.impactOnFunctioningHandlingKnown}</div>
                                                </div>
                                        {/if}
                                </div>
                                <div>
                                        <span class="font-bold">Origin:</span> {entity.origin}
                                        {#if detailLevel === 2}
                                                <div class="ml-4 text-sm text-gray-600">
                                                        <div>Origin Known: {entity.originKnown}</div>
                                                        <div>Origin Internal Known: {entity.originInternalKnown}</div>
                                                        <div>Origin Handling Known: {entity.originHandlingKnown}</div>
                                                </div>
                                        {/if}
                                </div>
                                <div>
                                        <span class="font-bold">World Effect:</span> {entity.worldEffect}
                                        {#if detailLevel === 2}
                                                <div class="ml-4 text-sm text-gray-600">
                                                        <div>World Effect Known: {entity.worldEffectKnown}</div>
                                                        <div>World Effect Internal Known: {entity.worldEffectInternalKnown}</div>
                                                        <div>World Effect Handling Known: {entity.worldEffectHandlingKnown}</div>
                                                </div>
                                        {/if}
                                </div>
                                <div>
                                        <span class="font-bold">Lore:</span> {entity.lore}
                                        {#if detailLevel === 2}
                                                <div class="ml-4 text-sm text-gray-600">
                                                        <div>Lore Known: {entity.loreKnown}</div>
                                                        <div>Lore Internal Known: {entity.loreInternalKnown}</div>
                                                        <div>Lore Handling Known: {entity.loreHandlingKnown}</div>
                                                </div>
                                        {/if}
                                </div>
                                <div>
                                        <span class="font-bold">Age:</span> {entity.age}
                                        {#if detailLevel === 2}
                                                <div class="ml-4 text-sm text-gray-600">
                                                        <div>Age Known: {entity.ageKnown}</div>
                                                        <div>Age Internal Known: {entity.ageInternalKnown}</div>
                                                        <div>Age Handling Known: {entity.ageHandlingKnown}</div>
                                                </div>
                                        {/if}
                                </div>
                                <div>
                                        <span class="font-bold">Transmission:</span> {entity.transmission}
                                        {#if detailLevel === 2}
                                                <div class="ml-4 text-sm text-gray-600">
                                                        <div>Transmission Known: {entity.transmissionKnown}</div>
                                                        <div>Transmission Internal Known: {entity.transmissionInternalKnown}</div>
                                                        <div>Transmission Handling Known: {entity.transmissionHandlingKnown}</div>
                                                </div>
                                        {/if}
                                </div>
                                <div>
                                        <span class="font-bold">Prognosis:</span>

                                        {entity.prognosis}
                                        {#if detailLevel === 2}
                                                <div class="ml-4 text-sm text-gray-600">
                                                        <div>Prognosis Known: {entity.prognosisKnown}</div>
                                                        <div>Prognosis Internal Known: {entity.prognosisInternalKnown}</div>
                                                        <div>Prognosis Handling Known: {entity.prognosisHandlingKnown}</div>
                                                </div>
                                        {/if}
                                </div>
                                <div>
                                        <span class="font-bold">Cure:</span> {entity.cure}
                                        {#if detailLevel === 2}
                                                <div class="ml-4 text-sm text-gray-600">
                                                        <div>Cure Known: {entity.cureKnown}</div>
                                                        <div>Cure Internal Known: {entity.cureInternalKnown}</div>
                                                        <div>Cure Handling Known: {entity.cureHandlingKnown}</div>
                                                </div>
                                        {/if}
                                </div>
                                <div>
                                        <span class="font-bold">Cure Effectiveness:</span> {entity.cureEffectiveness}
                                        {#if detailLevel === 2}
                                                <div class="ml-4 text-sm text-gray-600">
                                                        <div>Cure Effectiveness Known: {entity.cureEffectivenessKnown}</div>
                                                        <div>Cure Effectiveness Internal Known: {entity.cureEffectivenessInternalKnown}</div>
                                                        <div>Cure Effectiveness Handling Known: {entity.cureEffectivenessHandlingKnown}</div>
                                                </div>
                                        {/if}
                                </div>
                                <div>
                                        <span class="font-bold">Cure Availability:</span> {entity.cureAvailability}
                                        {#if detailLevel === 2}
                                                <div class="ml-4 text-sm text-gray-600">
                                                        <div>Cure Availability Known: {entity.cureAvailabilityKnown}</div>
                                                        <div>Cure Availability Internal Known: {entity.cureAvailabilityInternalKnown}</div>
                                                        <div>Cure Availability Handling Known: {entity.cureAvailabilityHandlingKnown}</div>
                                                </div>
                                        {/if}
                                </div>
                                <div>
                                        <span class="font-bold">Cure Side Effects:</span> {entity.cureSideEffects}
                                        {#if detailLevel === 2}
                                                <div class="ml-4 text-sm text-gray-600">
                                                        <div>Cure Side Effects Known: {entity.cureSideEffectsKnown}</div>
                                                        <div>Cure Side Effects Internal Known: {entity.cureSideEffectsInternalKnown}</div>
                                                        <div>Cure Side Effects Handling Known: {entity.cureSideEffectsHandlingKnown}</div>
                                                </div>
                                        {/if}
                                </div>
                                <div>
                                        <span class="font-bold">Cure Duration:</span> {entity.cureDuration}
                                        {#if detailLevel === 2}
                                                <div class="ml-4 text-sm text-gray-600">
                                                        <div>Cure Duration Known: {entity.cureDurationKnown}</div>
                                                        <div>Cure Duration Internal Known: {entity.cureDurationInternalKnown}</div>
                                                        <div>Cure Duration Handling Known: {entity.cureDurationHandlingKnown}</div>
                                                </div>
                                        {/if}
                                </div>
                                <div>
                                        <span class="font-bold">Cure Complexity:</span> {entity.cureComplexity}
                                        {#if detailLevel === 2}
                                                <div class="ml-4 text-sm text-gray-600">
                                                        <div>Cure Complexity Known: {entity.cureComplexityKnown}</div>
                                                        <div>Cure Complexity Internal Known: {entity.cureComplexityInternalKnown}</div>
                                                        <div>Cure Complexity Handling Known: {entity.cureComplexityHandlingKnown}</div>
                                                </div>
                                        {/if}
                                </div>
                                <div>
                                        <span class="font-bold">Symptom Obviousness:</span> {entity.symptomObviousness}
                                        {#if detailLevel === 2}
                                                <div class="ml-4 text-sm text-gray-600">
                                                        <div>Symptom Obviousness Known: {entity.symptomObviousnessKnown}</div>
                                                        <div>Symptom Obviousness Internal Known: {entity.symptomObviousnessInternalKnown}</div>
                                                        <div>Symptom Obviousness Handling Known: {entity.symptomObviousnessHandlingKnown}</div>
                                                </div>
                                        {/if}
                                </div>
                                <div>
                                        <span class="font-bold">Symptom Consistency:</span> {entity.symptomConsistency}
                                        {#if detailLevel === 2}
                                                <div class="ml-4 text-sm text-gray-600">
                                                        <div>Symptom Consistency Known: {entity.symptomConsistencyKnown}</div>
                                                        <div>Symptom Consistency Internal Known: {entity.symptomConsistencyInternalKnown}</div>
                                                        <div>Symptom Consistency Handling Known: {entity.symptomConsistencyHandlingKnown}</div>
                                                </div>
                                        {/if}
                                </div>
                                <div>
                                        <span class="font-bold">Incubation Period:</span> {entity.incubationPeriod}
                                        {#if detailLevel === 2}
                                                <div class="ml-4 text-sm text-gray-600">
                                                        <div>Incubation Period Known: {entity.incubationPeriodKnown}</div>
                                                        <div>Incubation Period Internal Known: {entity.incubationPeriodInternalKnown}</div>
                                                        <div>Incubation Period Handling Known: {entity.incubationPeriodHandlingKnown}</div>
                                                </div>
                                        {/if}
                                </div>
                                <div>
                                        <span class="font-bold">Illness Mimicry:</span> {entity.illnessMimicry}
                                        {#if detailLevel === 2}
                                                <div class="ml-4 text-sm text-gray-600">
                                                        <div>Illness Mimicry Known: {entity.illnessMimicryKnown}</div>
                                                        <div>Illness Mimicry Internal Known: {entity.illnessMimicryInternalKnown}</div>
                                                        <div>Illness Mimicry Handling Known: {entity.illnessMimicryHandlingKnown}</div>
                                                </div>
                                        {/if}
                                </div>
                                <div>
                                        <span class="font-bold">Detection Method Complexity:</span> {entity.detectionMethodComplexity}
                                        {#if detailLevel === 2}
                                                <div class="ml-4 text-sm text-gray-600">
                                                        <div>Detection Method Complexity Known: {entity.detectionMethodComplexityKnown}</div>
                                                        <div>Detection Method Complexity Internal Known: {entity.detectionMethodComplexityInternalKnown}</div>
                                                        <div>Detection Method Complexity Handling Known: {entity.detectionMethodComplexityHandlingKnown}</div>
                                                </div>
                                        {/if}
                                </div>
                                <div>
                                        <span class="font-bold">Reproduction Rate:</span> {entity.reproductionRate}
                                        {#if detailLevel === 2}
                                                <div class="ml-4 text-sm text-gray-600">
                                                        <div>Reproduction Rate Known: {entity.reproductionRateKnown}</div>
                                                        <div>Reproduction Rate Internal Known: {entity.reproductionRateInternalKnown}</div>
                                                        <div>Reproduction Rate Handling Known: {entity.reproductionRateHandlingKnown}</div>
                                                </div>
                                        {/if}
                                </div>
                                <div>
                                        <span class="font-bold">Infectious Period:</span> {entity.infectiousPeriod}
                                        {#if detailLevel === 2}
                                                <div class="ml-4 text-sm text-gray-600">
                                                        <div>Infectious Period Known: {entity.infectiousPeriodKnown}</div>
                                                        <div>Infectious Period Internal Known: {entity.infectiousPeriodInternalKnown}</div>
                                                        <div>Infectious Period Handling Known: {entity.infectiousPeriodHandlingKnown}</div>
                                                </div>
                                        {/if}
                                </div>
                                <div>
                                        <span class="font-bold">Attack Rate:</span> {entity.attackRate}
                                        {#if detailLevel === 2}
                                                <div class="ml-4 text-sm text-gray-600">
                                                        <div>Attack Rate Known: {entity.attackRateKnown}</div>
                                                        <div>Attack Rate Internal Known: {entity.attackRateInternalKnown}</div>
                                                        <div>Attack Rate Handling Known: {entity.attackRateHandlingKnown}</div>
                                                </div>
                                        {/if}
                                </div>
                                <div>
                                        <span class="font-bold">Asymptomatic Spread:</span> {entity.asymptomaticSpread}
                                        {#if detailLevel === 2}
                                                <div class="ml-4 text-sm text-gray-600">
                                                        <div>Asymptomatic Spread Known: {entity.asymptomaticSpreadKnown}</div>
                                                        <div>Asymptomatic Spread Internal Known: {entity.asymptomaticSpreadInternalKnown}</div>
                                                        <div>Asymptomatic Spread Handling Known: {entity.asymptomaticSpreadHandlingKnown}</div>
                                                </div>
                                        {/if}
                                </div>
                                <div>
                                        <span class="font-bold">Environmental Resilience:</span> {entity.environmentalResilience}
                                        {#if detailLevel === 2}
                                                <div class="ml-4 text-sm text-gray-600">
                                                        <div>Environmental Resilience Known: {entity.environmentalResilienceKnown}</div>
                                                        <div>Environmental Resilience Internal Known: {entity.environmentalResilienceInternalKnown}</div>
                                                        <div>Environmental Resilience Handling Known:

                                                                {entity.environmentalResilienceHandlingKnown}</div>
                                                </div>
                                        {/if}
                                </div>
                                <div>
                                        <span class="font-bold">Cross-Species Transmission:</span> {entity.crossSpeciesTransmission}
                                        {#if detailLevel === 2}
                                                <div class="ml-4 text-sm text-gray-600">
                                                        <div>Cross-Species Transmission Known: {entity.crossSpeciesTransmissionKnown}</div>
                                                        <div>Cross-Species Transmission Internal Known: {entity.crossSpeciesTransmissionInternalKnown}</div>
                                                        <div>Cross-Species Transmission Handling Known: {entity.crossSpeciesTransmissionHandlingKnown}</div>
                                                </div>
                                        {/if}
                                </div>
                                <div>
                                        <span class="font-bold">Geographic Spread:</span> {entity.geographicSpread}
                                        {#if detailLevel === 2}
                                                <div class="ml-4 text-sm text-gray-600">
                                                        <div>Geographic Spread Known: {entity.geographicSpreadKnown}</div>
                                                        <div>Geographic Spread Internal Known: {entity.geographicSpreadInternalKnown}</div>
                                                        <div>Geographic Spread Handling Known: {entity.geographicSpreadHandlingKnown}</div>
                                                </div>
                                        {/if}
                                </div>
                                <div>
                                        <span class="font-bold">Host Diversity:</span> {entity.hostDiversity}
                                        {#if detailLevel === 2}
                                                <div class="ml-4 text-sm text-gray-600">
                                                        <div>Host Diversity Known: {entity.hostDiversityKnown}</div>
                                                        <div>Host Diversity Internal Known: {entity.hostDiversityInternalKnown}</div>
                                                        <div>Host Diversity Handling Known: {entity.hostDiversityHandlingKnown}</div>
                                                </div>
                                        {/if}
                                </div>
                                <div>
                                        <span class="font-bold">Seasonality:</span> {entity.seasonality}
                                        {#if detailLevel === 2}
                                                <div class="ml-4 text-sm text-gray-600">
                                                        <div>Seasonality Known: {entity.seasonalityKnown}</div>
                                                        <div>Seasonality Internal Known: {entity.seasonalityInternalKnown}</div>
                                                        <div>Seasonality Handling Known: {entity.seasonalityHandlingKnown}</div>
                                                </div>
                                        {/if}
                                </div>
                                <div>
                                        <span class="font-bold">Vector Involvement:</span> {entity.vectorInvolvement}
                                        {#if detailLevel === 2}
                                                <div class="ml-4 text-sm text-gray-600">
                                                        <div>Vector Involvement Known: {entity.vectorInvolvementKnown}</div>
                                                        <div>Vector Involvement Internal Known: {entity.vectorInvolvementInternalKnown}</div>
                                                        <div>Vector Involvement Handling Known: {entity.vectorInvolvementHandlingKnown}</div>
                                                </div>
                                        {/if}
                                </div>
                        </div>
                </div>
        {/if}
</div>