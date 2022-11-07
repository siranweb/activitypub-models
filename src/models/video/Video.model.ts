import {APBase} from "../apBase/APBase.model";
import {ASModelType} from "../../common/types";
import {VideoFields} from "./Video.types";

/**
 * Represents a video document of any kind
 *
 * {@link https://www.w3.org/ns/activitystreams#Video Docs}
 */
export class Video extends APBase<VideoFields>{
    static create(fields: VideoFields) {
        return APBase._create<VideoFields>({
            type: ASModelType.Video,
            ...fields,
        });
    }
}