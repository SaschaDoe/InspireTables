import {AutoDeletableEntity} from "../deletable";
import {Campaign} from "../campaign/campaign";
import {NarrativeMediumTypes} from "../campaign/narrativeMediumTypes";

export class Profile extends AutoDeletableEntity{
    name = "";
    campaign = new Campaign();
    narrativeMediumType = NarrativeMediumTypes.RPG;
    isSelected = false;
}