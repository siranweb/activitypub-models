import {ASObjectFields} from "../asObject/ASObject.types";
import {SubjectValue, ObjectValue, RelationshipValue} from "../../common/common.types";

export interface RelationshipFields extends ASObjectFields {

    /**
     * On a Relationship object, the subject property identifies one of the connected individuals.
     * For instance, for a Relationship object describing "John is related to Sally",
     * subject would refer to John.
     *
     * {@link https://www.w3.org/ns/activitystreams#subject Docs}
     */
    subject?: SubjectValue;

    /**
     * When used within a Relationship describes the entity to which the subject is related.
     *
     * {@link https://www.w3.org/ns/activitystreams#object Docs}
     */
    object?: ObjectValue | ObjectValue[];

    /**
     * On a Relationship object, the relationship property
     * identifies the kind of relationship that exists between subject and object.
     *
     * {@link https://www.w3.org/ns/activitystreams#relationship Docs}
     */
    relationship?: RelationshipValue;
}
