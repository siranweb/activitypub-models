import {ASBase} from "../ASBase.model";
import {ASModelType} from "../../common/common.types";
import {ArticleFields} from "./Article.types";

/**
 * Represents any kind of multi-paragraph written work
 *
 * {@link https://www.w3.org/ns/activitystreams#Article Docs}
 */
export class Article extends ASBase<ArticleFields>{
    constructor(fields: ArticleFields) {
        super({
            type: ASModelType.Article,
            ...fields
        })
    }
}