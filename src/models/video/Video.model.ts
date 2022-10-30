import {ASBase} from "../ASBase.model";
import {ASModelType} from "../../common/common.types";
import {VideoFields} from "./Video.types";

/**
 * Represents a video document of any kind
 *
 * {@link https://www.w3.org/ns/activitystreams#Video Docs}
 */
export class Video extends ASBase<VideoFields>{
    constructor(fields: VideoFields) {
        super({
            type: ASModelType.Video,
            ...fields
        })
    }
}