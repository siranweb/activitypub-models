import {APObjectFields} from "../apObject/APObject.types";
import {
    ActorValue,
    InstrumentValue,
    ObjectValue,
    OriginValue,
    ResultValue,
    TargetValue
} from "../../common/types";

export interface ActivityFields extends APObjectFields {

    /**
     * Describes one or more entities that either performed or are expected to perform the activity.
     * Any single activity can have multiple actors. The actor MAY be specified using an indirect Link.
     *
     * {@link https://www.w3.org/ns/activitystreams#actor Docs}
     */
    actor?: ActorValue | ActorValue[];

    /**
     * When used within an Activity, describes the direct object of the activity.
     * For instance, in the activity "John added a movie to his wishlist",
     * the object of the activity is the movie added.
     *
     * {@link https://www.w3.org/ns/activitystreams#object Docs}
     */
    object?: ObjectValue | ObjectValue[];

    /**
     * Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent
     * on the type of action being described but will often be the object of the English preposition "to".
     * For instance, in the activity "John added a movie to his wishlist", the target of the activity
     * is John's wishlist. An activity can have more than one target.
     *
     * {@link https://www.w3.org/ns/activitystreams#target Docs}
     */
    target?: TargetValue | TargetValue[];

    /**
     * Describes the result of the activity. For instance, if a particular action results
     * in the creation of a new resource, the result property can be used to describe that new resource.
     *
     * {@link https://www.w3.org/ns/activitystreams#result Docs}
     */
    result?: ResultValue | ResultValue[];

    /**
     * Describes an indirect object of the activity from which the activity is directed.
     * The precise meaning of the origin is the object of the English preposition "from".
     * For instance, in the activity "John moved an item to List B from List A",
     * the origin of the activity is "List A".
     *
     * {@link https://www.w3.org/ns/activitystreams#origin Docs}
     */
    origin?: OriginValue | OriginValue[];

    /**
     * Identifies one or more objects used (or to be used)
     * in the completion of an Activity.
     *
     * {@link https://www.w3.org/ns/activitystreams#instrument Docs}
     */
    instrument?: InstrumentValue | InstrumentValue[];
}
