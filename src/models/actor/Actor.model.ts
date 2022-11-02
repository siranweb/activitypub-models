import {APBase} from "../apBase/APBase.model";
import {ASModelType} from "../../common/common.types";
import {ActorFields} from "./Actor.types";

/**
 * ActivityPub actors are generally one of the ActivityStreams Actor Types, but
 * they don't have to be. For example, a Profile object might be used as an actor,
 * or a type from an ActivityStreams extension. Actors are retrieved like any other
 * Object in ActivityPub. Like other ActivityStreams objects, actors have an id,
 * which is a URI. When entered directly into a user interface (for example on a
 * login form), it is desirable to support simplified naming.
 *
 * {@link https://www.w3.org/TR/activitypub/#actors Docs}
 */
export class Actor extends APBase<ActorFields>{
    constructor(fields: ActorFields) {
        super({
            type: ASModelType.Profile,
            ...fields
        })
    }
}