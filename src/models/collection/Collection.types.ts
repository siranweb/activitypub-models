import {ASObjectFields} from "../asObject/ASObject.types";
import {
    CollectionCurrentValue,
    CollectionFirstValue, CollectionItemsValue,
    CollectionLastValue,
    TotalItemsValue
} from "../../common/common.types";

export interface CollectionFields extends ASObjectFields {

    /**
     * A non-negative integer specifying the total number of objects contained by
     * the logical view of the collection. This number might not reflect the actual
     * number of items serialized within the Collection object instance.
     *
     * {@link https://www.w3.org/ns/activitystreams#totalItems Docs}
     */
    totalItems?: TotalItemsValue;

    /**
     * In a paged Collection, indicates the page that contains
     * the most recently updated member items.
     *
     * {@link https://www.w3.org/ns/activitystreams#current Docs}
     */
    current?: CollectionCurrentValue;

    /**
     * In a paged Collection,indicates the furthest proceeding
     * page of items in the collection.
     *
     * {@link https://www.w3.org/ns/activitystreams#first Docs}
     */
    first?: CollectionFirstValue;

    /**
     * In a paged Collection, indicates the furthest proceeding
     * page of the collection.
     *
     * {@link https://www.w3.org/ns/activitystreams#last Docs}
     */
    last?: CollectionLastValue;

    /**
     * Identifies the items contained in a collection.
     * The items might be ordered or unordered.
     *
     * {@link https://www.w3.org/ns/activitystreams#items Docs}
     */
    items?: CollectionItemsValue[];
}
