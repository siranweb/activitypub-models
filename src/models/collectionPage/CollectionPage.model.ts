import {APBase} from "../apBase/APBase.model";
import {ASModelType} from "../../common/types";
import {CollectionPageFields} from "./CollectionPage.types";

/**
 * Used to represent distinct subsets of items from a Collection.
 *
 * {@link https://www.w3.org/ns/activitystreams#CollectionPage Docs}
 */
export class CollectionPage extends APBase<CollectionPageFields>{
    static create(fields: CollectionPageFields) {
        return APBase._create<CollectionPageFields>({
            type: ASModelType.CollectionPage,
            ...fields,
        });
    }
}