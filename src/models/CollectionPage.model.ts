import {ASCollectionBase, ASCollectionBaseFields} from "./ASCollectionBase.model";

// TODO: types
// https://www.w3.org/TR/activitystreams-core/#collection
export interface CollectionPageFields extends ASCollectionBaseFields {
    partOf?: any;
    first?: any;
    next?: any;
    prev?: any;
    last?: any;
    current?: any;
}

export class CollectionPage extends ASCollectionBase {
    constructor(fields: CollectionPageFields) {
        super(fields);
    }
}