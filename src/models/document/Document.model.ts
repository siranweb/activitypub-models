import {ASBase} from "../asBase/ASBase.model";
import {ASModelType} from "../../common/common.types";
import {DocumentFields} from "./Document.types";

/**
 * Represents a document of any kind
 *
 * {@link https://www.w3.org/ns/activitystreams#Document Docs}
 */
export class Document extends ASBase<DocumentFields>{
    constructor(fields: DocumentFields) {
        super({
            type: ASModelType.Document,
            ...fields
        })
    }
}