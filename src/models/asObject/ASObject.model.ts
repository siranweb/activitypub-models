import {ASBase} from "../ASBase.model";
import { ASObjectFields } from "./ASObject.types";

export class ASObject extends ASBase<ASObjectFields>{
    constructor(fields: ASObjectFields) {
        super(fields);
    }
}