import {ASBase} from "../ASBase.model";
import {ASModelType} from "../../common/common.types";
import {ProfileFields} from "./Profile.types";

/**
 * A Tombstone represents a content object that has been deleted.
 * It can be used in Collections to signify that there used to be an object
 * at this position, but it has been deleted.
 *
 * {@link https://www.w3.org/ns/activitystreams#Tombstone Docs}
 */
export class Tombstone extends ASBase<ProfileFields>{
    constructor(fields: ProfileFields) {
        super({
            type: ASModelType.Tombstone,
            ...fields
        })
    }
}