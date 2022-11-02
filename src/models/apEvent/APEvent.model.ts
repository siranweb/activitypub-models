import {APBase} from "../apBase/APBase.model";
import {ASModelType} from "../../common/common.types";
import {APEventFields} from "./APEvent.types";

/**
 * Represents any kind of event
 *
 * {@link https://www.w3.org/ns/activitystreams#Event Docs}
 */
export class APEvent extends APBase<APEventFields>{
    constructor(fields: APEventFields) {
        super({
            type: ASModelType.Event,
            ...fields
        })
    }
}