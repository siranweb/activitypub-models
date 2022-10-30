import {ASBase} from "../asBase/ASBase.model";
import {ASModelType} from "../../common/common.types";
import {ServiceFields} from "./Service.types";

/**
 * Represents a service of any kind
 *
 * {@link https://www.w3.org/ns/activitystreams#Service Docs}
 */
export class Service extends ASBase<ServiceFields>{
    constructor(fields: ServiceFields) {
        super({
            type: ASModelType.Service,
            ...fields
        })
    }
}