import {APBase} from "../apBase/APBase.model";
import {ASModelType} from "../../common/types";
import {DocumentFields} from "./Document.types";

/**
 * Represents a document of any kind
 *
 * {@link https://www.w3.org/ns/activitystreams#Document Docs}
 */
export class Document extends APBase<DocumentFields>{
    constructor(fields: DocumentFields) {
        super({
            type: ASModelType.Document,
            ...fields
        })
    }
}