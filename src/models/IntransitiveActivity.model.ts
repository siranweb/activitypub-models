import {ASBase} from "./ASBase.model";
import {ASObjectFields} from "./ASObject.model";

// TODO: types
// https://www.w3.org/TR/activitystreams-core/#intransitiveactivities
export interface IntransitiveActivityFields extends ASObjectFields {
    actor?: any; // Actor?
    target?: any;
    origin?: any;
    result?: any;
    instrument?: any;
}

export class IntransitiveActivity extends ASBase<IntransitiveActivityFields>{
    constructor(fields: IntransitiveActivityFields) {
        super(fields);
    }
}