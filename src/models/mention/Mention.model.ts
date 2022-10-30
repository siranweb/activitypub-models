import {ASBase} from "../asBase/ASBase.model";
import {MentionFields} from "./Mention.types";
import {ASModelType} from "../../common/common.types";
/**
 * A specialized Link that represents an @mention.
 *
 * {@link https://www.w3.org/ns/activitystreams#Mention Docs}
 */
export class Mention extends ASBase<MentionFields>{
    constructor(fields: MentionFields) {
        super({
            type: ASModelType.Mention,
            ...fields
        })
    }
}