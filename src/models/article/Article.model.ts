import {APBase} from "../apBase/APBase.model";
import {ASModelType} from "../../common/common.types";
import {ArticleFields} from "./Article.types";

/**
 * Represents any kind of multi-paragraph written work
 *
 * {@link https://www.w3.org/ns/activitystreams#Article Docs}
 */
export class Article extends APBase<ArticleFields>{
    constructor(fields: ArticleFields) {
        super({
            type: ASModelType.Article,
            ...fields
        })
    }
}