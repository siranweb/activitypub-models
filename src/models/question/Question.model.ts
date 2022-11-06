import {APBase} from "../apBase/APBase.model";
import {ASModelType} from "../../common/types";
import {QuestionFields} from "./Question.types";

/**
 * Represents a question being asked. Question objects are an extension
 * of IntransitiveActivity. That is, the Question object is an Activity,
 * but the direct object is the question itself, and therefore it would
 * not contain an object property.
 *
 * Either of the anyOf and oneOf properties MAY be used to express possible
 * answers, but a Question object MUST NOT have both properties.
 *
 * {@link https://www.w3.org/ns/activitystreams#Question Docs}
 */
export class Question extends APBase<QuestionFields>{
    constructor(fields: QuestionFields) {
        super({
            type: ASModelType.Question,
            ...fields
        })
    }
}