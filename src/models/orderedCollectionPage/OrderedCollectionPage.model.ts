import {ASBase} from "../asBase/ASBase.model";
import {ASModelType} from "../../common/common.types";
import {OrderedCollectionPageFields} from "./OrderedCollectionPage.types";

/**
 * Used to represent ordered subsets of items from an OrderedCollection.
 *
 * {@link https://www.w3.org/ns/activitystreams#OrderedCollectionPage Docs}
 */
export class OrderedCollectionPage extends ASBase<OrderedCollectionPageFields>{
    constructor(fields: OrderedCollectionPageFields) {
        super({
            type: ASModelType.OrderedCollectionPage,
            ...fields
        })
    }
}