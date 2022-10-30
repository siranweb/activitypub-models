import {ASBase} from "../asBase/ASBase.model";
import {ASModelType} from "../../common/common.types";
import {PlaceFields} from "./Place.types";

/**
 * Represents a logical or physical location. See
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#places 5.3 Representing Places}
 * for additional information.
 *
 * {@link https://www.w3.org/ns/activitystreams#Place Docs}
 */
export class Place extends ASBase<PlaceFields>{
    constructor(fields: PlaceFields) {
        super({
            type: ASModelType.Place,
            ...fields
        })
    }
}