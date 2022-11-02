
import {APObjectFields} from "../apObject/APObject.types";
import {DescribesValue} from "../../common/common.types";

export interface ProfileFields extends APObjectFields {

    /**
     * On a Profile object, the describes property identifies
     * the object described by the Profile.
     *
     * {@link https://www.w3.org/ns/activitystreams#describes Docs}
     */
    describes?: DescribesValue;
}
