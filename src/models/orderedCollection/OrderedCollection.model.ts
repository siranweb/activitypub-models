import {APBase} from "../apBase/APBase.model";
import {ASModelType} from "../../common/common.types";
import {OrderedCollectionFields} from "./OrderedCollection.types";

/**
 * A subtype of Collection in which members of
 * the logical collection are assumed to always be strictly ordered.
 *
 * {@link https://www.w3.org/ns/activitystreams#OrderedCollection Docs}
 */
export class OrderedCollection extends APBase<OrderedCollectionFields>{
    constructor(fields: OrderedCollectionFields) {
        super({
            type: ASModelType.OrderedCollection,
            ...fields
        })
    }
}