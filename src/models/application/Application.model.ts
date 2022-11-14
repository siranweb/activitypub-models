import {APBase} from "../apBase/APBase.model";
import {ASModelType} from "../../common/types";
import {ApplicationFields} from "./Application.types";

/**
 * Describes a software application
 *
 * {@link https://www.w3.org/ns/activitystreams#Application Docs}
 */
export class Application extends APBase<ApplicationFields>{
    static create(fields: ApplicationFields) {
        return APBase._create<ApplicationFields>({
            type: ASModelType.Application,
            ...fields,
        });
    }
}