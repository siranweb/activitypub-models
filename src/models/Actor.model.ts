import {ASBase} from "./ASBase.model";
import {ASObjectFields} from "./asObject/ASObject.model";

export enum ActorTypes {
    Application = 'Application',
    Group = 'Group',
    Organization = 'Organization',
    Person = 'Person',
    Service = 'Service'
}

// TODO: types
// https://www.w3.org/TR/activitystreams-core/#actors
export interface ActorFields extends ASObjectFields {
    type?: any | ActorTypes; // ?
}

export class Actor extends ASBase<ActorFields>{
    constructor(fields: ActorFields) {
        super(fields);
    }
}