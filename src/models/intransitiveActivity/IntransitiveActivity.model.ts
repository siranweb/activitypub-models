import {APBase} from "../apBase/APBase.model";
import {IntransitiveActivityFields} from './IntransitiveActivity.types';
import {ASModelType} from "../../common/types";

/**
 * Instances of intransitiveActivity are a subtype of
 * Activity representing intransitive actions. The
 * object property is therefore inappropriate for these activities.
 *
 * {@link https://www.w3.org/ns/activitystreams#IntransitiveActivity Docs}
 */
export class IntransitiveActivity extends APBase<IntransitiveActivityFields>{
    static create(fields: IntransitiveActivityFields) {
        return APBase._create<IntransitiveActivityFields>({
            type: ASModelType.Activity,
            ...fields,
        });
    }
}