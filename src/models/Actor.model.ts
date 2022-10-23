import {ModelBaseAP} from "./Base.model";
import {ObjectAPFields} from "./Object.model";

export enum ActorTypes {
    Application = 'Application',
    Group = 'Group',
    Organization = 'Organization',
    Person = 'Person',
    Service = 'Service'
}

// TODO: types
// https://www.w3.org/TR/activitystreams-core/#actors
export interface ActorAPFields extends ObjectAPFields {
    type?: any | ActorTypes; // ?
    actor?: any; // Actor?
    target?: any;
    origin?: any;
    result?: any;
    instrument?: any;
}

export class ActorAP extends ModelBaseAP<ActorAPFields>{
    constructor(fields: ActorAPFields) {
        super(fields);
    }
}