import { describe, it, expect, beforeEach } from 'vitest';
import {Illness} from "../../../../core/entities/status/illness";
import {IllnessViewModel} from "../../../../core/entities/status/illnessViewModel";
import {prognosis} from "../../../../core/tables/illness/prognosisTable";
import {strength} from "../../../../core/tables/other/strengthTable";
import {times} from "../../../../core/tables/other/timeTable";
import {impact} from "../../../../core/tables/other/impactTable";

describe('IllnessViewModel', () => {
    let illness: Illness;
    let viewModel: IllnessViewModel;

    beforeEach(() => {
        illness = new Illness();
        illness.prognosis = prognosis[0];
        illness.impactOnFunctioning = impact[0];
        illness.onset = times[times.length - 1];
        illness.time = times[0];
        illness.levelOfCare = strength[0];
        viewModel = new IllnessViewModel(illness);
    });

    it('lowest severity', () => {
        expect(viewModel.severity).toEqual(strength[0]);
    });

    it('highest severity', () => {
        expect(viewModel.severity).toEqual(strength[0]);
    });
});