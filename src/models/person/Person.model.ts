import {ASBase} from "../asBase/ASBase.model";
import {ASModelType} from "../../common/common.types";
import {PersonFields} from "./Person.types";

/**
 * Represents an individual person
 *
 * {@link https://www.w3.org/ns/activitystreams#Person Docs}
 */
export class Person extends ASBase<PersonFields>{
    constructor(fields: PersonFields) {
        super({
            type: ASModelType.Person,
            ...fields
        })
    }
}