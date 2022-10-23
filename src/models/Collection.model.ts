import {ASCollectionBase, ASCollectionBaseFields} from "./ASCollectionBase.model";

// TODO: types
// https://www.w3.org/TR/activitystreams-core/#collection
export interface CollectionFields extends ASCollectionBaseFields {
    items?: any; // Objects? Links?
}

export class Collection extends ASCollectionBase {
    constructor(fields: CollectionFields) {
        super(fields);
    }
}