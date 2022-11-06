import {APBase} from "../apBase/APBase.model";
import {ASModelType} from "../../common/types";
import {PersonFields} from "./Person.types";

/**
 * Represents an individual person
 *
 * {@link https://www.w3.org/ns/activitystreams#Person Docs}
 */
export class Person extends APBase<PersonFields>{
    constructor(fields: PersonFields) {
        super({
            type: ASModelType.Person,
            ...fields
        })
    }
}