import {ASBase} from "../ASBase.model";
import {ASModelType} from "../../common/common.types";
import {ASEventFields} from "./ASEvent.types";

/**
 * Represents any kind of event
 *
 * {@link https://www.w3.org/ns/activitystreams#Event Docs}
 */
export class ASEvent extends ASBase<ASEventFields>{
    constructor(fields: ASEventFields) {
        super(ASModelType.Event, fields);
    }
}