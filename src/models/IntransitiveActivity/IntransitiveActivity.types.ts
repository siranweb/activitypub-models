import {ActivityFields} from "../activity/Activity.types";

export interface IntransitiveActivityFields extends Omit<ActivityFields, 'object'> {}
