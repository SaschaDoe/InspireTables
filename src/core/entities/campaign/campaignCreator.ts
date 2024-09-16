import {BaseCreator} from "../baseCreator";
import type { Entity } from "../entity";
import {Campaign} from "./campaign";
import {GenreMixCreator} from "../genre/genreMixCreator";
import type {GenreMix} from "../genre/genreMix";
import {NarrativeMediumTypes} from "./narrativeMediumTypes";
import {Settings} from "./settings";
import {WorldCreator} from "../world/worldCreator";
import type {World} from "../world/world";
import {getStore} from "../persist/stores";

export class CampaignCreator extends BaseCreator {
    narrativeMedium: NarrativeMediumTypes = NarrativeMediumTypes.RPG;

    withNarrativeMedium(narrativeMedium: NarrativeMediumTypes){
        this.narrativeMedium = narrativeMedium;
        return this;
    }

    async create() {
        const campaign = new Campaign();
        const creationResult = this.initializeCreation(campaign);
        let genreCreationResult = await new GenreMixCreator(this.tableManager)
            .withNarrativeMedium(this.narrativeMedium)
            .create();
        creationResult.addCreationResult(genreCreationResult);
        campaign.settings = new Settings();
        campaign.settings.narrativeMediumType = this.narrativeMedium;

        //Gives you also the TechLevel for setting and theme
        campaign.genreMix = genreCreationResult.getCreation() as GenreMix;

        console.log("Campaign: ", campaign);
        await this.setId(campaign);
        return creationResult;
    }



    async generateWorld(campaign: Campaign){
        let worldCreationResult = new WorldCreator(this.tableManager)
            .withGenreMix(campaign.genreMix)
            .create();
        campaign.world = worldCreationResult.getCreation() as World;
        let worldStore = await getStore('worldStore');
        await worldStore.saveEntity(campaign.world);
        await this.persist(campaign);
    }

    async persist(entity: Entity): Promise<void> {
        let campaign = entity as Campaign;
        console.log("persist campaign: ", campaign);
        let campaignStore = await getStore('campaignStore');
        await campaignStore.saveEntity(campaign);
    }



}