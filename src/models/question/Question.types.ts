import {IntransitiveActivityFields} from "../intransitiveActivity/IntransitiveActivity.types";
import {AnyOfValue, ClosedValue, OneOfValue} from "../../common/common.types";

export interface QuestionFields extends IntransitiveActivityFields {

    // TODO: only oneOf or anyOf at one time
    /**
     * Identifies an exclusive option for a Question.
     * Use of oneOf implies that the Question can have only a single answer.
     * To indicate that a Question can have multiple answers, use anyOf.
     *
     * {@link https://www.w3.org/ns/activitystreams#oneOf Docs}
     */
    oneOf?: OneOfValue[];

    /**
     * Identifies an inclusive option for a Question.
     * Use of anyOf implies that the Question can have multiple answers.
     * To indicate that a Question can have only one answer, use oneOf.
     *
     * {@link https://www.w3.org/ns/activitystreams#anyOf Docs}
     */
    anyOf?: AnyOfValue[];

    /**
     * Indicates that a question has been closed, and answers are no longer accepted.
     *
     * {@link https://www.w3.org/ns/activitystreams#closed Docs}
     */
    closed?: ClosedValue;
}
