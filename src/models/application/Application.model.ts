import {ASBase} from "../ASBase.model";
import {ASModelType} from "../../common/common.types";
import {ApplicationFields} from "./Application.types";

/**
 * Describes a software application
 *
 * {@link https://www.w3.org/ns/activitystreams#Application Docs}
 */
export class Application extends ASBase<ApplicationFields>{
    constructor(fields: ApplicationFields) {
        super({
            type: ASModelType.Application,
            ...fields
        })
    }
}