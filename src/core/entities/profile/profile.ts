import {AutoDeletableEntity} from "../deletable";
import {Campaign} from "../campaign/campaign";

export class Profile extends AutoDeletableEntity{
    name = "";
    campaign = new Campaign();
}