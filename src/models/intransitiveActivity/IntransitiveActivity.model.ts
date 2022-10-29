import {ASBase} from "../ASBase.model";
import {IntransitiveActivityFields} from './IntransitiveActivity.types';
import {ASModelType} from "../../common/common.types";

/**
 * Instances of intransitiveActivity are a subtype of
 * Activity representing intransitive actions. The
 * object property is therefore inappropriate for these activities.
 *
 * {@link https://www.w3.org/ns/activitystreams#IntransitiveActivity Docs}
 */
export class IntransitiveActivity extends ASBase<IntransitiveActivityFields>{
    constructor(fields: IntransitiveActivityFields) {
        super({
            type: ASModelType.Activity,
            ...fields
        })
    }
}