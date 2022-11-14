import {APBase} from "../apBase/APBase.model";
import {ASModelType} from "../../common/types";
import {CollectionFields} from "./Collection.types";

/**
 * A Collection is a subtype of Object that represents
 * ordered or unordered sets of Object or Link instances.
 *
 * {@link https://www.w3.org/ns/activitystreams#Collection Docs}
 */
export class Collection extends APBase<CollectionFields>{
    static create(fields: CollectionFields) {
        return APBase._create<CollectionFields>({
            type: ASModelType.Collection,
            ...fields,
        });
    }
}