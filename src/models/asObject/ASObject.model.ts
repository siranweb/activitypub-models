import {ASBase} from "../ASBase.model";
import { ASObjectFields } from "./ASObject.types";
import {ModelType} from "../../common/common.types";

/**
 * Describes an object of any kind. The Object type serves as the base type for most of
 * the other kinds of objects defined in the Activity Vocabulary,
 * including other Core types such as Activity, intransitiveActivity, Collection and OrderedCollection.
 *
 * {@link https://www.w3.org/ns/activitystreams#Object Docs}
 */
export class ASObject extends ASBase<ASObjectFields>{
    constructor(fields: ASObjectFields) {
        super(ModelType.Object, fields);
    }
}