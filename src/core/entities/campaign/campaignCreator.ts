import {BaseCreator} from "../baseCreator";
import { CreationResult } from "../creationResult";
import type { Entity } from "../entity";
import {Campaign} from "./campaign";
import {GenreMixCreator} from "../genre/genreMixCreator";
import type {GenreMix} from "../genre/genreMix";
import {NarrativeMediumTypes} from "./narrativeMediumTypes";
import {Settings} from "./settings";

export class CampaignCreator extends BaseCreator {
    narrativeMedium: NarrativeMediumTypes = NarrativeMediumTypes.RPG;

    withNarrativeMedium(narrativeMedium: NarrativeMediumTypes){
        this.narrativeMedium = narrativeMedium;
        return this;
    }

    create(): CreationResult {
        let campaign = new Campaign();
        let creationResult = new CreationResult();
        let genreCreationResult = new GenreMixCreator(this.tableManager)
            .withNarrativeMedium(this.narrativeMedium)
            .create();
        creationResult.addCreationResult(genreCreationResult);
        campaign.settings = new Settings();
        campaign.settings.narrativeMediumType = this.narrativeMedium;
        campaign.genreMix = genreCreationResult.getCreation() as GenreMix;

        creationResult.addCreation(campaign);
        return creationResult;
    }
    persist(entity: Entity): Promise<void> {
        throw new Error("Method not implemented.");
    }

}