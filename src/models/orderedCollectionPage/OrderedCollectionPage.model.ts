import {APBase} from "../apBase/APBase.model";
import {ASModelType} from "../../common/types";
import {OrderedCollectionPageFields} from "./OrderedCollectionPage.types";

/**
 * Used to represent ordered subsets of items from an OrderedCollection.
 *
 * {@link https://www.w3.org/ns/activitystreams#OrderedCollectionPage Docs}
 */
export class OrderedCollectionPage extends APBase<OrderedCollectionPageFields>{
    static create(fields: OrderedCollectionPageFields) {
        return APBase._create<OrderedCollectionPageFields>({
            type: ASModelType.OrderedCollectionPage,
            ...fields,
        });
    }
}