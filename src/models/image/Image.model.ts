import {APBase} from "../apBase/APBase.model";
import {ASModelType} from "../../common/types";
import {ImageFields} from "./Image.types";

/**
 * An image document of any kind
 *
 * {@link https://www.w3.org/ns/activitystreams#Image Docs}
 */
export class Image extends APBase<ImageFields>{
    constructor(fields: ImageFields) {
        super({
            type: ASModelType.Image,
            ...fields
        })
    }
}