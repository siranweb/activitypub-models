import {APBase} from "../apBase/APBase.model";
import {ASModelType} from "../../common/types";
import {AudioFields} from "./Audio.types";

/**
 * Represents an audio document of any kind
 *
 * {@link https://www.w3.org/ns/activitystreams#Audio Docs}
 */
export class Audio extends APBase<AudioFields>{
    constructor(fields: AudioFields) {
        super({
            type: ASModelType.Audio,
            ...fields
        })
    }
}