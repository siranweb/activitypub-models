import {APBase} from "../apBase/APBase.model";
import {ASModelType} from "../../common/types";
import {PageFields} from "./Page.types";

/**
 * Represents a Web Page
 *
 * {@link https://www.w3.org/ns/activitystreams#Page Docs}
 */
export class Page extends APBase<PageFields>{
    constructor(fields: PageFields) {
        super({
            type: ASModelType.Page,
            ...fields
        })
    }
}