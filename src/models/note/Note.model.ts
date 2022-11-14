import {APBase} from "../apBase/APBase.model";
import {ASModelType} from "../../common/types";
import {NoteFields} from "./Note.types";

/**
 * Represents a short written work typically less than a single paragraph in length.
 *
 * {@link https://www.w3.org/ns/activitystreams#Note Docs}
 */
export class Note extends APBase<NoteFields>{
    static create(fields: NoteFields) {
        return APBase._create<NoteFields>({
            type: ASModelType.Note,
            ...fields,
        });
    }
}