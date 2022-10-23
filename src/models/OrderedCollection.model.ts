import {ASCollectionBase, ASCollectionBaseFields} from "./ASCollectionBase.model";

// TODO: types
// https://www.w3.org/TR/activitystreams-core/#collection
export interface OrderedCollectionFields extends ASCollectionBaseFields {
    orderedItems?: any; // Objects? Links?
}

// TODO: sort method?
export class OrderedCollection extends ASCollectionBase {
    constructor(fields: OrderedCollectionFields) {
        super(fields);
    }
}