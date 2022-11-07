import {
    HeightValue,
    HreflangValue,
    HrefValue,
    MediaTypeValue,
    NameMapValue,
    NameValue, PreviewValue,
    RelValue, TypeValue, WidthValue
} from "../../common/types";

export interface LinkFields {
    '@context': never;

    /**
     * Identifies the {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-object Object}
     * type. Multiple values may be specified.
     *
     * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-object Docs (@type)}
     */
    type?: TypeValue | TypeValue[];

    /**
     * A simple, human-readable, plain-text name for the object.
     * HTML markup MUST NOT be included.
     * [For multiple language-tagged values use nameMap property]
     *
     * {@link https://www.w3.org/ns/activitystreams#name Docs}
     */
    name?: NameValue;

    /**
     * A simple, human-readable, plain-text name for the object.
     * HTML markup MUST NOT be included.
     * [For a single value use name property]
     *
     * {@link https://www.w3.org/ns/activitystreams#name Docs}
     */
    nameMap?: NameMapValue;

    /**
     * The target resource pointed to by a Link.
     *
     * {@link https://www.w3.org/ns/activitystreams#href Docs}
     */
    href?: HrefValue;

    /**
     * Hints as to the language used by the target resource.
     * Value MUST be a [BCP47] Language-Tag.
     *
     * {@link https://www.w3.org/ns/activitystreams#hreflang Docs}
     */
    hreflang?: HreflangValue;

    /**
     * When used on a Link, identifies the MIME media type of the referenced resource
     *
     * {@link https://www.w3.org/ns/activitystreams#mediaType Docs}
     */
    mediaType?: MediaTypeValue;

    /**
     * A link relation associated with a Link. The value MUST conform to both
     * the [HTML5] and [RFC5988] "link relation" definitions. In the [HTML5],
     * any string not containing the "space" U+0020, "tab" (U+0009), "LF" (U+000A), "FF" (U+000C), "CR" (U+000D) or "," (U+002C)
     * characters can be used as a valid link relation.
     *
     * {@link https://www.w3.org/ns/activitystreams#rel Docs}
     */
    rel?: RelValue | RelValue[];

    /**
     * On a Link, specifies a hint as to the rendering height in
     * device-independent pixels of the linked resource.
     * Type: Non negative integer
     *
     * {@link https://www.w3.org/ns/activitystreams#height Docs}
     */
    height?: HeightValue;

    /**
     * On a Link, specifies a hint as to the rendering width in
     * device-independent pixels of the linked resource.
     * Type: Non negative integer
     *
     * {@link https://www.w3.org/ns/activitystreams#width Docs}
     */
    width?: WidthValue;

    /**
     * Identifies an entity that provides a preview of this object.
     *
     * {@link https://www.w3.org/ns/activitystreams#preview Docs}
     */
    preview?: PreviewValue;
}
