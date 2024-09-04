import {BaseCreator} from "../baseCreator";
import type { CreationResult } from "../creationResult";
import type { Entity } from "../entity";
import {Profile} from "./profile";
import {getStore} from "../persist/stores";

export class ProfileCreator extends BaseCreator {
    async create(){
        const profile = new Profile();
        const creationResult = this.initializeCreation(profile);
        await this.setId(profile);
        return creationResult
    }
    async persist(entity: Entity): Promise<void> {
        let profile = entity as Profile;
        let profileStore = await getStore('profileStore');
        await profileStore.saveEntity(profile);
    }

}