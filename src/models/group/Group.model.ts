import {ASBase} from "../asBase/ASBase.model";
import {ASModelType} from "../../common/common.types";
import {GroupFields} from "./Group.types";

/**
 * Represents a formal or informal collective of Actors
 *
 * {@link https://www.w3.org/ns/activitystreams#Group Docs}
 */
export class Group extends ASBase<GroupFields>{
    constructor(fields: GroupFields) {
        super({
            type: ASModelType.Group,
            ...fields
        })
    }
}