import {ASBase} from "./ASBase.model";

// TODO: types
// https://www.w3.org/TR/activitystreams-core/#object
export interface ASObjectFields {
    /** @remarks Example remark for id */
    id?: any;

    type?: any;
    attachment?: any;
    attributedTo?: any;
    audience?: any;
    content?: any;
    name?: any;
    endTime?: any;
    generator?: any;
    icon?: any;
    image?: any; // Link?
    inReplyTo?: any;
    location?: any;
    preview?: any;
    published?: any;
    replies?: any;
    startTime?: any;
    summary?: any;
    tag?: any;
    updated?: any;
    url?: any;
    to?: any;
    bto?: any;
    cc?: any;
    bcc?: any;
    mediaType?: any;
    duration?: any;
}

export class ASObject extends ASBase<ASObjectFields>{
    constructor(fields: ASObjectFields) {
        super(fields);
    }
}