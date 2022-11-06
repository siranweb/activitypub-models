import {
    UrlValue,
    IconValue,
    ImageValue,
    AttachmentValue,
    AudienceValue,
    InReplyToValue,
    LocationValue,
    PreviewValue,
    ToValue,
    BtoValue,
    CcValue,
    BccValue,
    AttributedToValue,
    TagValue,
    GeneratorValue,
    IdValue,
    TypeValue,
    ContentValue,
    ContentMapValue,
    MediaTypeValue,
    NameValue,
    NameMapValue,
    EndTimeValue,
    StartTimeValue,
    PublishedValue,
    RepliesValue,
    SummaryValue,
    SummaryMapValue,
    UpdatedValue,
    DurationValue, SourceValue, LikesValue, SharesValue,
} from "../../common/common.types";

export interface APObjectFields {
    /**
     * Provides the globally unique identifier for
     * an {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-object Object}
     * All objects must have unique global identifier (unless the object is transient,
     * in which case the id MAY be omitted).
     *
     * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-object AS Docs (@id)}
     *
     * {@link https://www.w3.org/TR/activitypub/#obj-id AP Docs}
     */
    id?: IdValue;

    /**
     * Identifies the {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-object Object}
     * type. Multiple values may be specified.
     * All objects must have type. There is already a bunch of default types presented by this library.
     *
     * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-object AS Docs (@type)}
     *
     * {@link https://www.w3.org/TR/activitypub/#obj-id AP Docs}
     */
    type?: TypeValue | TypeValue[];

    /**
     * Identifies resources attached or related to an object that potentially requires special handling.
     * The intent is to provide a model that is at least semantically similar to attachments in email.
     *
     * {@link https://www.w3.org/ns/activitystreams#attachment Docs}
     */
    attachment?: AttachmentValue | AttachmentValue[];


    /**
     * Identifies one or more entities to which this object is attributed.
     * The attributed entities might not be Actors. For instance,
     * an object might be attributed to the completion of another activity.
     *
     * {@link https://www.w3.org/ns/activitystreams#attributedTo Docs}
     */
    attributedTo?: AttributedToValue | AttributedToValue[];

    /**
     * Identifies one or more entities that represent the total population of entities
     * for which the object can be considered to be relevant.
     *
     * {@link https://www.w3.org/ns/activitystreams#audience Docs}
     */
    audience?: AudienceValue | AudienceValue[];

    // TODO: only content or contentMap at one time

    /**
     * The content or textual representation of the Object encoded as a JSON string.
     * By default, the value of content is HTML. The mediaType property can be
     * used in the object to indicate a different content type.
     * [For multiple language-tagged values use contentMap property]
     *
     * {@link https://www.w3.org/ns/activitystreams#content Docs}
     */
    content?: ContentValue;

    /**
     * The content or textual representation of the Object encoded as a JSON string.
     * By default, the value of content is HTML. The mediaType property can be
     * used in the object to indicate a different content type.
     * [For a single value use content property]
     *
     * {@link https://www.w3.org/ns/activitystreams#content Docs}
     */
    contentMap?: ContentMapValue;

    /**
     * When used on an Object, identifies the MIME media type of the value of the content property.
     * If not specified, the content property is assumed to contain text/html content.
     * Works different with Link
     *
     * {@link https://www.w3.org/ns/activitystreams#mediaType Docs}
     */
    mediaType?: MediaTypeValue;

    // TODO: only name or nameMap at one time

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
     * The date and time describing the actual or expected ending time of the object.
     * When used with an Activity object, for instance, the endTime property specifies
     * the moment the activity concluded or is expected to conclude.
     *
     * Must be provided in {@link https://www.w3schools.blog/xsd-date-and-time-data-types xsd:dateTime}
     *
     * {@link https://www.w3.org/ns/activitystreams#endTime Docs}
     *
     * @example
     * 2020-08-08T08:30:11-03:00Z
     * 2020-08-08T08:30:11-03:00
     * 2020-08-08T08:30:11Z
     * 2020-08-08T08:30:11
     * 2020-08-08
     */
    endTime?: EndTimeValue;

    /**
     * The date and time describing the actual or expected starting time of the object.
     * When used with an Activity object, for instance, the startTime property specifies
     * the moment the activity began or is scheduled to begin.
     *
     * Must be provided in {@link https://www.w3schools.blog/xsd-date-and-time-data-types xsd:dateTime}
     *
     * {@link https://www.w3.org/ns/activitystreams#startTime Docs}
     *
     * @example
     * 2020-08-08T08:30:11-03:00Z
     * 2020-08-08T08:30:11-03:00
     * 2020-08-08T08:30:11Z
     * 2020-08-08T08:30:11
     * 2020-08-08
     */
    startTime?: StartTimeValue;

    /**
     * Identifies the entity (e.g. an application) that generated the object.
     *
     * {@link https://www.w3.org/ns/activitystreams#generator Docs}
     */
    generator?: GeneratorValue;

    /**
     * Indicates an entity (or entities) that describes an icon for this object.
     * Unlike image property, the icon should have an aspect ratio of one (horizontal)
     * to one (vertical) and should be suitable for presentation at a small size.
     *
     * {@link https://www.w3.org/ns/activitystreams#icon Docs}
     */
    icon?: IconValue | IconValue[];

    /**
     * Indicates an entity that describes an image for this object.
     * Unlike the icon property, there are no aspect ratio or display size limitations assumed.
     *
     * {@link https://www.w3.org/ns/activitystreams#image Docs}
     */
    image?: ImageValue | ImageValue[];

    /**
     * Indicates one or more entities for which this object is considered a response.
     *
     * {@link https://www.w3.org/ns/activitystreams#inReplyTo Docs}
     */
    inReplyTo?: InReplyToValue | InReplyToValue[];

    /**
     * Indicates one or more physical or logical locations associated with the object.
     *
     * {@link https://www.w3.org/ns/activitystreams#location Docs}
     */
    location?: LocationValue | LocationValue[];

    /**
     * Identifies an entity that provides a preview of this object.
     *
     * {@link https://www.w3.org/ns/activitystreams#preview Docs}
     */
    preview?: PreviewValue;

    /**
     * The date and time at which the object was published.
     *
     * Must be provided in {@link https://www.w3schools.blog/xsd-date-and-time-data-types xsd:dateTime}
     *
     * {@link https://www.w3.org/ns/activitystreams#published Docs}
     *
     * @example
     * 2020-08-08T08:30:11-03:00Z
     * 2020-08-08T08:30:11-03:00
     * 2020-08-08T08:30:11Z
     * 2020-08-08T08:30:11
     * 2020-08-08
     */
    published?: PublishedValue;

    /**
     * Identifies a Collection containing objects considered to be responses to this object.
     *
     * {@link https://www.w3.org/ns/activitystreams#replies Docs}
     */
    replies?: RepliesValue;

    // TODO: only summary or summaryMap at one time

    /**
     * A natural language summarization of the object encoded as HTML.
     * Multiple language tagged summaries MAY be provided.
     * [For multiple language-tagged values use summaryMap property]
     *
     * {@link https://www.w3.org/ns/activitystreams#summary Docs}
     */
    summary?: SummaryValue;

    /**
     * A natural language summarization of the object encoded as HTML.
     * Multiple language tagged summaries MAY be provided.
     * [For a single value use summary property]
     *
     * {@link https://www.w3.org/ns/activitystreams#summary Docs}
     */
    summaryMap?: SummaryMapValue;

    /**
     * One or more "tags" that have been associated with an objects. A tag can be any kind of Object.
     * The key difference between attachment and tag is that the former implies association by
     * inclusion, while the latter implies associated by reference.
     *
     * {@link https://www.w3.org/ns/activitystreams#tag Docs}
     */
    tag?: TagValue | TagValue[];

    /**
     * The date and time at which the object was updated.
     *
     * Must be provided in {@link https://www.w3schools.blog/xsd-date-and-time-data-types xsd:dateTime}
     *
     * {@link https://www.w3.org/ns/activitystreams#published Docs}
     *
     * @example
     * 2020-08-08T08:30:11-03:00Z
     * 2020-08-08T08:30:11-03:00
     * 2020-08-08T08:30:11Z
     * 2020-08-08T08:30:11
     * 2020-08-08
     */
    updated?: UpdatedValue;

    /**
     * Identifies one or more links to representations of the object.
     *
     * {@link https://www.w3.org/ns/activitystreams#url Docs}
     */
    url?: UrlValue | UrlValue[];

    /**
     * Identifies an entity or entities considered to be part of the public primary audience of an Object.
     *
     * {@link https://www.w3.org/ns/activitystreams#to Docs}
     */
    to?: ToValue | ToValue[];

    /**
     * Identifies an Object that is part of the private primary audience of this Object.
     *
     * {@link https://www.w3.org/ns/activitystreams#bto Docs}
     */
    bto?: BtoValue | BtoValue[];

    /**
     * Identifies an Object that is part of the public secondary audience of this Object.
     *
     * {@link https://www.w3.org/ns/activitystreams#cc Docs}
     */
    cc?: CcValue | CcValue[];

    /**
     * Identifies one or more Objects that are part of the private secondary audience of this Object.
     *
     * {@link https://www.w3.org/ns/activitystreams#bcc Docs}
     */
    bcc?: BccValue | BccValue[];

    /**
     * When the object describes a time-bound resource, such as an audio or video, a meeting, etc.,
     * the duration property indicates the object's approximate duration.
     *
     * {@link https://www.w3.org/ns/activitystreams#duration Docs}
     *
     * Must be provided in {@link http://www.datypic.com/sc/xsd/t-xsd_duration.html xsd:duration}
     *
     * @example
     * PT20M (20 minutes)
     * P1DT2H (1 day, 2 hours)
     * P2Y6M5DT12H35M30S (2 years, 6 months, 5 days, 12 hours, 35 minutes, 30 seconds)
     */
    duration?: DurationValue;

    /**
     * ActivityPub extends the Object by supplying the source property. The source property is intended to
     * convey some sort of source from which the content markup was derived, as a form of provenance, or to
     * support future editing by clients. In general, clients do the conversion from source to content, not
     * the other way around.
     * The value of source is itself an object which uses its own content and mediaType fields to supply source information.
     *
     * {@link https://www.w3.org/TR/activitypub/#source-property Docs}
     */
    source?: SourceValue;

    /**
     * Every object MAY have a "likes" collection. This is a list of all Like activities with this object as
     * the object property, added as a side effect. The likes collection MUST be either an OrderedCollection
     * or a Collection and MAY be filtered on privileges of an authenticated user or as appropriate when
     * no authentication is given.
     *
     * {@link https://www.w3.org/TR/activitypub/#likes Docs}
     */
    likes?: LikesValue;

    /**
     * Every object MAY have a "shares" collection. This is a list of all Announce activities with this object as
     * the object property, added as a side effect. The shares collection MUST be either an OrderedCollection
     * or a Collection and MAY be filtered on privileges of an authenticated user or as appropriate when
     * no authentication is given.
     *
     * {@link https://www.w3.org/TR/activitypub/#shares Docs}
     */
    shares?: SharesValue;
}