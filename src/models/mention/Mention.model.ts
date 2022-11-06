import {APBase} from "../apBase/APBase.model";
import {MentionFields} from "./Mention.types";
import {ASModelType} from "../../common/common.types";
/**
 * A specialized Link that represents an @mention.
 *
 * {@link https://www.w3.org/ns/activitystreams#Mention Docs}
 */
export class Mention extends APBase<MentionFields>{
    constructor(fields: MentionFields) {
        super({
            type: ASModelType.Mention,
            ...fields
        })
    }
}