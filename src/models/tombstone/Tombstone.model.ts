import {APBase} from "../apBase/APBase.model";
import {ASModelType} from "../../common/common.types";
import {TombstoneFields} from "./Tombstone.types";

/**
 * A Tombstone represents a content object that has been deleted.
 * It can be used in Collections to signify that there used to be an object
 * at this position, but it has been deleted.
 *
 * {@link https://www.w3.org/ns/activitystreams#Tombstone Docs}
 */
export class Tombstone extends APBase<TombstoneFields>{
    constructor(fields: TombstoneFields) {
        super({
            type: ASModelType.Tombstone,
            ...fields
        })
    }
}