import {APBase} from "../apBase/APBase.model";
import { LinkFields } from "./Link.types";
import {ASModelType} from "../../common/types";

/**
 * A Link is an indirect, qualified reference to a resource identified by a URL.
 * The fundamental model for links is established by [RFC5988]. Many of the properties
 * defined by the Activity Vocabulary allow values that are either instances of Object
 * or Link. When a Link is used, it establishes a qualified relation connecting the
 * subject (the containing object) to the resource identified by the href. Properties
 * of the Link are properties of the reference as opposed to properties of the resource.
 *
 * {@link https://www.w3.org/ns/activitystreams#Link Docs}
 */
export class Link extends APBase<LinkFields>{
    constructor(fields: LinkFields) {
        super({
            type: ASModelType.Link,
            ...fields
        })
    }
}