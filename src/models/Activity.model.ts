import {ASBase} from "./ASBase.model";
import {IntransitiveActivityFields} from "./IntransitiveActivity.model";

// TODO: types
// https://www.w3.org/TR/activitystreams-core/#activities
export interface ActivityFields extends IntransitiveActivityFields {
    object?: any; // Object?
}

export class Activity extends ASBase<ActivityFields>{
    constructor(fields: ActivityFields) {
        super(fields);
    }
}