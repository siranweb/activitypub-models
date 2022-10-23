import {ModelBaseAP} from "./Base.model";

// TODO: types
// https://www.w3.org/TR/activitystreams-core/#object
export interface ObjectAPFields {
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

export class ObjectAP extends ModelBaseAP<ObjectAPFields>{
    constructor(fields: ObjectAPFields) {
        super(fields);
    }
}