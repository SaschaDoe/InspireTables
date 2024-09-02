import {BaseCreator} from "../baseCreator";
import type { CreationResult } from "../creationResult";
import type { Entity } from "../entity";
import {Profile} from "./profile";
import {getStore} from "../persist/stores";

export class ProfileCreator extends BaseCreator {
    create(): CreationResult {
        const profile = new Profile();
        const creationResult = this.initializeCreation(profile);

        return creationResult
    }
    async persist(entity: Entity): Promise<void> {
        let profile = entity as Profile;
        let profileStore = await getStore('profileStore');
        await profileStore.saveEntity(profile);
    }

}