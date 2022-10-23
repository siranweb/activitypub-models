import {ModelBaseAP} from "./Base.model";
import {IntransitiveActivityAPFields} from "./IntransitiveActivity.model";

// TODO: types
// https://www.w3.org/TR/activitystreams-core/#activities
export interface ActivityAPFields extends IntransitiveActivityAPFields {
    object?: any; // Object?
}

export class ActivityAP extends ModelBaseAP<ActivityAPFields>{
    constructor(fields: ActivityAPFields) {
        super(fields);
    }
}