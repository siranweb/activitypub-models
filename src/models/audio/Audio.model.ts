import {ASBase} from "../asBase/ASBase.model";
import {ASModelType} from "../../common/common.types";
import {AudioFields} from "./Audio.types";

/**
 * Represents an audio document of any kind
 *
 * {@link https://www.w3.org/ns/activitystreams#Audio Docs}
 */
export class Audio extends ASBase<AudioFields>{
    constructor(fields: AudioFields) {
        super({
            type: ASModelType.Audio,
            ...fields
        })
    }
}