import {CollectionFields} from "../collection/Collection.types";
import {CollectionPageNextValue, CollectionPagePartOfValue, CollectionPagePrevValue} from "../../common/common.types";

export interface CollectionPageFields extends CollectionFields {

    /**
     * Identifies the Collection to which a CollectionPage objects items belong.
     *
     * {@link https://www.w3.org/ns/activitystreams#partOf Docs}
     */
    partOf?: CollectionPagePartOfValue;

    /**
     * In a paged Collection, indicates the next page of items.
     *
     * {@link https://www.w3.org/ns/activitystreams#next Docs}
     */
    next?: CollectionPageNextValue;

    /**
     * In a paged Collection, identifies the previous page of items.
     *
     * {@link https://www.w3.org/ns/activitystreams#prev Docs}
     */
    prev?: CollectionPagePrevValue;
}
