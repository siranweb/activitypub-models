import {APBase} from "../apBase/APBase.model";
import {ASModelType} from "../../common/types";
import {OrganizationFields} from "./Organization.types";

/**
 * Represents an organization
 *
 * {@link https://www.w3.org/ns/activitystreams#Organization Docs}
 */
export class Organization extends APBase<OrganizationFields>{
    constructor(fields: OrganizationFields) {
        super({
            type: ASModelType.Organization,
            ...fields
        })
    }
}