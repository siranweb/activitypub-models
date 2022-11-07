import {APBase} from "../apBase/APBase.model";
import {ASModelType} from "../../common/types";
import {RelationshipFields} from "./Relationship.types";

/**
 * Describes a relationship between two individuals. The subject and
 * object properties are used to identify the connected individuals.
 * See {@link https://www.w3.org/TR/activitystreams-vocabulary/#connections 5.2 Representing Relationships Between Entities}
 * for additional information.
 *
 * {@link https://www.w3.org/ns/activitystreams#Relationship Docs}
 */
export class Relationship extends APBase<RelationshipFields>{
    static create(fields: RelationshipFields) {
        return APBase._create<RelationshipFields>({
            type: ASModelType.Relationship,
            ...fields,
        });
    }
}