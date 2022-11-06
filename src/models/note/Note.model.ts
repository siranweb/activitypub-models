import {APBase} from "../apBase/APBase.model";
import {ASModelType} from "../../common/common.types";
import {NoteFields} from "./Note.types";

/**
 * Represents a short written work typically less than a single paragraph in length.
 *
 * {@link https://www.w3.org/ns/activitystreams#Note Docs}
 */
export class Note extends APBase<NoteFields>{
    constructor(fields: NoteFields) {
        super({
            type: ASModelType.Note,
            ...fields
        })
    }
}