import {APBase} from "../apBase/APBase.model";
import {ASModelType} from "../../common/types";
import {APEventFields} from "./APEvent.types";

/**
 * Represents any kind of event
 *
 * {@link https://www.w3.org/ns/activitystreams#Event Docs}
 */
export class APEvent extends APBase<APEventFields>{
    static create(fields: APEventFields) {
        return APBase._create<APEventFields>({
            type: ASModelType.Event,
            ...fields,
        });
    }
}