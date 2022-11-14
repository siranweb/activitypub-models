import {APBase} from "../apBase/APBase.model";
import {ASModelType} from "../../common/types";
import {ProfileFields} from "./Profile.types";

/**
 * A Profile is a content object that describes another Object,
 * typically used to describe Actor Type objects. The describes property
 * is used to reference the object being described by the profile.
 *
 * {@link https://www.w3.org/ns/activitystreams#Profile Docs}
 */
export class Profile extends APBase<ProfileFields>{
    static create(fields: ProfileFields) {
        return APBase._create<ProfileFields>({
            type: ASModelType.Profile,
            ...fields,
        });
    }
}