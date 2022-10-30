
import {ASObjectFields} from "../asObject/ASObject.types";
import {DescribesValue} from "../../common/common.types";

export interface ProfileFields extends ASObjectFields {

    /**
     * On a Profile object, the describes property identifies
     * the object described by the Profile.
     *
     * {@link https://www.w3.org/ns/activitystreams#describes Docs}
     */
    describes?: DescribesValue;
}
