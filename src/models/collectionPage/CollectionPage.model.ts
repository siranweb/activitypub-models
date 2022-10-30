import {ASBase} from "../asBase/ASBase.model";
import {ASModelType} from "../../common/common.types";
import {CollectionPageFields} from "./CollectionPage.types";

/**
 * Used to represent distinct subsets of items from a Collection.
 *
 * {@link https://www.w3.org/ns/activitystreams#CollectionPage Docs}
 */
export class CollectionPage extends ASBase<CollectionPageFields>{
    constructor(fields: CollectionPageFields) {
        super({
            type: ASModelType.CollectionPage,
            ...fields
        })
    }
}