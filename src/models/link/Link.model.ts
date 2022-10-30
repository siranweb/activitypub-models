import {ASBase} from "../asBase/ASBase.model";
import { LinkFields } from "./Link.types";
import {ASModelType} from "../../common/common.types";

export class Link extends ASBase<LinkFields>{
    constructor(fields: LinkFields) {
        super({
            type: ASModelType.Link,
            ...fields
        })
    }
}