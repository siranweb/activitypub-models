import {
    OrderedCollectionCurrentValue,
    OrderedCollectionFirstValue, OrderedCollectionItemsValue,
    OrderedCollectionLastValue
} from "../../common/common.types";
import {CollectionFields} from "../collection/Collection.types";
import {Modify} from "../../common/utils";

export interface OrderedCollectionFields extends Modify<CollectionFields, {

    /**
     * In a paged OrderedCollection, indicates the page that contains
     * the most recently updated member items.
     *
     * {@link https://www.w3.org/ns/activitystreams#current Docs}
     */
    current?: OrderedCollectionCurrentValue;

    /**
     * In a paged OrderedCollection, indicates the furthest proceeding
     * page of items in the collection.
     *
     * {@link https://www.w3.org/ns/activitystreams#first Docs}
     */
    first?: OrderedCollectionFirstValue;

    /**
     * In a paged OrderedCollection, indicates the furthest proceeding
     * page of the collection.
     *
     * {@link https://www.w3.org/ns/activitystreams#last Docs}
     */
    last?: OrderedCollectionLastValue;

    /**
     * Identifies the items contained in a collection.
     * The items might be ordered or unordered.
     *
     * {@link https://www.w3.org/ns/activitystreams#items Docs}
     */
    items?: OrderedCollectionItemsValue[];
}> {}
