import {ModelBaseAP} from "./Base.model";
import {ObjectAPFields} from "./Object.model";

// TODO: types
// https://www.w3.org/TR/activitystreams-core/#intransitiveactivities
export interface IntransitiveActivityAPFields extends ObjectAPFields {
    actor?: any; // Actor?
    target?: any;
    origin?: any;
    result?: any;
    instrument?: any;
}

export class IntransitiveActivityAP extends ModelBaseAP<IntransitiveActivityAPFields>{
    constructor(fields: IntransitiveActivityAPFields) {
        super(fields);
    }
}