import {APBase} from "../apBase/APBase.model";
import {ASModelType} from "../../common/types";
import {ServiceFields} from "./Service.types";

/**
 * Represents a service of any kind
 *
 * {@link https://www.w3.org/ns/activitystreams#Service Docs}
 */
export class Service extends APBase<ServiceFields>{
    static create(fields: ServiceFields) {
        return APBase._create<ServiceFields>({
            type: ASModelType.Service,
            ...fields,
        });
    }
}