import {ModelBaseAP} from "./Base.model";

// TODO: types
// https://www.w3.org/TR/activitystreams-core/#dfn-link
export interface ObjectAPFields {
    id?: any;
    name?: any;
    hreflang?: any;
    mediaType?: any;
    rel?: any;
    height?: any;
    width?: any;
}

export class LinkAP extends ModelBaseAP<ObjectAPFields>{
    constructor(fields: ObjectAPFields) {
        super(fields);
    }
}