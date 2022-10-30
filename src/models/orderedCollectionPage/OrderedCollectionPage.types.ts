import {OrderedCollectionFields} from "../orderedCollection/OrderedCollection.types";
import {
    OrderedCollectionPageNextValue,
    OrderedCollectionPagePartOfValue,
    OrderedCollectionPagePrevValue,
    StartIndexValue
} from "../../common/common.types";
import {CollectionPageFields} from "../collectionPage/CollectionPage.types";
import {Modify} from "../../common/utils";

interface OmittedCollectionPageFields extends Omit<CollectionPageFields, 'current' | 'first' | 'items' | 'last'> {}

export interface OrderedCollectionPageFields
    extends
        OrderedCollectionFields,
        Modify<OmittedCollectionPageFields, {

            /**
             * Identifies the OrderedCollection to which a OrderedCollectionPage objects items belong.
             *
             * {@link https://www.w3.org/ns/activitystreams#partOf Docs}
             */
            partOf?: OrderedCollectionPagePartOfValue;

            /**
             * In a paged OrderedCollection, indicates the next page of items.
             *
             * {@link https://www.w3.org/ns/activitystreams#next Docs}
             */
            next?: OrderedCollectionPageNextValue;

            /**
             * In a paged OrderedCollection, identifies the previous page of items.
             *
             * {@link https://www.w3.org/ns/activitystreams#prev Docs}
             */
            prev?: OrderedCollectionPagePrevValue;
        }> {

    /**
     * A non-negative integer value identifying the relative position
     * within the logical view of a strictly ordered collection.
     *
     * {@link https://www.w3.org/ns/activitystreams#startIndex Docs}
     */
    startIndex?: StartIndexValue;
}
