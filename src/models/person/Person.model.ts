import {APBase} from "../apBase/APBase.model";
import {ASModelType} from "../../common/types";
import {PersonFields} from "./Person.types";

/**
 * Represents an individual person
 *
 * {@link https://www.w3.org/ns/activitystreams#Person Docs}
 */
export class Person extends APBase<PersonFields>{
    static create(fields: PersonFields) {
        return APBase._create<PersonFields>({
            type: ASModelType.Person,
            ...fields,
        });
    }
}
