import {AutoDeletableEntity, type Deletable} from "../deletable";
import {Campaign} from "../campaign/campaign";
import {NarrativeMediumTypes} from "../campaign/narrativeMediumTypes";
import type {Table} from "../../tables/table";
import {getStore, getStores} from "../persist/stores";
import type {World} from "../world/world";
import type {EntityStorageManager} from "../persist/entityStorageManager";
import type {Entity} from "../entity";

//Is the one Entity where nearly all entities are saved under
export class Profile extends AutoDeletableEntity{
    name = "";
    campaigns: Campaign[] = [];
    campaignIds: number[] = [];
    narrativeMediumType = NarrativeMediumTypes.RPG;
    store: EntityStorageManager<Entity & Deletable>| undefined;

    selectedSubTables: Table[] = [];
    selectedAltTables: Table[] = [];

    async saveCampaign(campaign: Campaign){
        let profileStore= await this.getProfileStore();
        let index = this.campaigns.indexOf(campaign);
        if(index !== -1){
            this.campaigns[index] = campaign;
        }
        await profileStore.saveEntity(this);
    }

    async getProfileStore(){
        if(this.store){
            return this.store;
        }else{
            let profileStore=  await getStore('profileStore');
            this.store = profileStore;
            return profileStore;
        }
    }
}