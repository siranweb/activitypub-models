import {ASBase} from "../ASBase.model";
import {ASModelType} from "../../common/common.types";
import {OrganizationFields} from "./Organization.types";

/**
 * Represents an organization
 *
 * {@link https://www.w3.org/ns/activitystreams#Organization Docs}
 */
export class Organization extends ASBase<OrganizationFields>{
    constructor(fields: OrganizationFields) {
        super(ASModelType.Organization, fields);
    }
}