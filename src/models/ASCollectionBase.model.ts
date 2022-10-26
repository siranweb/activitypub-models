import { ASObject, ASObjectFields } from "./asObject/ASObject.model";

// TODO: types
// https://www.w3.org/TR/activitystreams-core/#collection
export interface ASCollectionBaseFields extends ASObjectFields {
    totalItems?: any;
    first?: any;
    last?: any;
    current?: any;
}

export class ASCollectionBase extends ASObject {
    constructor(fields: ASCollectionBaseFields) {
        super(fields);
    }
}