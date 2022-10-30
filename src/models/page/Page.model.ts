import {ASBase} from "../asBase/ASBase.model";
import {ASModelType} from "../../common/common.types";
import {PageFields} from "./Page.types";

/**
 * Represents a Web Page
 *
 * {@link https://www.w3.org/ns/activitystreams#Page Docs}
 */
export class Page extends ASBase<PageFields>{
    constructor(fields: PageFields) {
        super({
            type: ASModelType.Page,
            ...fields
        })
    }
}