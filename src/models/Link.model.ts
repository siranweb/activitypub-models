import {ASBase} from "./ASBase.model";

// TODO: types
// https://www.w3.org/TR/activitystreams-core/#dfn-link
export interface LinkFields {
    id?: string;
    name?: any;
    hreflang?: any;
    mediaType?: any;
    rel?: any;
    height?: any;
    width?: any;
}

export class Link extends ASBase<LinkFields>{
    constructor(fields: LinkFields) {
        super(fields);
    }
}