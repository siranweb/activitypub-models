import {APBase} from "../apBase/APBase.model";
import {ASModelType} from "../../common/common.types";
import {CollectionFields} from "./Collection.types";

/**
 * A Collection is a subtype of Object that represents
 * ordered or unordered sets of Object or Link instances.
 *
 * {@link https://www.w3.org/ns/activitystreams#Collection Docs}
 */
export class Collection extends APBase<CollectionFields>{
    constructor(fields: CollectionFields) {
        super({
            type: ASModelType.Collection,
            ...fields
        })
    }
}