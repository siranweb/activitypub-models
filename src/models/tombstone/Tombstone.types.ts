import {DeletedValue, FormerTypeValue} from "../../common/common.types";
import {ASObjectFields} from "../asObject/ASObject.types";

export interface TombstoneFields extends ASObjectFields {

    /**
     * On a Tombstone object, the formerType property identifies
     * the type of the object that was deleted.
     *
     * {@link https://www.w3.org/ns/activitystreams#formerType  Docs}
     */
    formerType?: FormerTypeValue;

    /**
     * On a Tombstone object, the deleted property is a timestamp
     * for when the object was deleted.
     *
     * If time must be specified - use {@link https://www.w3schools.blog/xsd-date-and-time-data-types xsd:dateTime}
     *
     * {@link https://www.w3.org/ns/activitystreams#deleted Docs}
     */
    deleted?: DeletedValue;
}
