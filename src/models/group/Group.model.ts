import {APBase} from "../apBase/APBase.model";
import {ASModelType} from "../../common/types";
import {GroupFields} from "./Group.types";

/**
 * Represents a formal or informal collective of Actors
 *
 * {@link https://www.w3.org/ns/activitystreams#Group Docs}
 */
export class Group extends APBase<GroupFields>{
    static create(fields: GroupFields) {
        return APBase._create<GroupFields>({
            type: ASModelType.Group,
            ...fields,
        });
    }
}