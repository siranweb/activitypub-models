import {Link} from "../Link.model";
import {Collection} from "../Collection.model";
import { ASObject } from "./ASObject.model";
import {
    DateTime,
    Duration,
    UrlField,
    IconField,
    ImageField,
    AttachmentField,
    AudienceField,
    InReplyToField,
    LocationField,
    PreviewField,
    ToField,
    BtoField,
    CcField,
    BccField,
    AttributedToField,
    TagField,
} from "../../common/common.types";

// TODO: types
// https://www.w3.org/TR/activitystreams-core/#object
export interface ASObjectFields {
    /**
     * Provides the globally unique identifier for
     * an {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-object Object}
     *
     * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-object Docs (@id)}
     */
    id?: string;

    /**
     * Identifies the {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-object Object}
     * type. Multiple values may be specified.
     *
     * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-object Docs (@type)}
     */
    type?: string | string[];

    /**
     * Identifies resources attached or related to an object that potentially requires special handling.
     * The intent is to provide a model that is at least semantically similar to attachments in email.
     *
     * {@link https://www.w3.org/ns/activitystreams#attachment Docs}
     */
    attachment?: AttachmentField | AttachmentField[];


    /**
     * Identifies one or more entities to which this object is attributed.
     * The attributed entities might not be Actors. For instance,
     * an object might be attributed to the completion of another activity.
     *
     * {@link https://www.w3.org/ns/activitystreams#attributedTo Docs}
     */
    attributedTo?: AttributedToField | AttributedToField[];

    /**
     * Identifies one or more entities that represent the total population of entities
     * for which the object can be considered to be relevant.
     *
     * {@link https://www.w3.org/ns/activitystreams#audience Docs}
     */
    audience?: AudienceField | AudienceField[];

    // TODO: only content or contentMap at one time

    /**
     * The content or textual representation of the Object encoded as a JSON string.
     * By default, the value of content is HTML. The mediaType property can be
     * used in the object to indicate a different content type.
     * [For multiple language-tagged values use contentMap property].
     *
     * {@link https://www.w3.org/ns/activitystreams#content Docs}
     */
    content?: string;

    /**
     * The content or textual representation of the Object encoded as a JSON string.
     * By default, the value of content is HTML. The mediaType property can be
     * used in the object to indicate a different content type.
     * [For a single value use content property].
     *
     * {@link https://www.w3.org/ns/activitystreams#content Docs}
     */
    contentMap?: Record<string, string | undefined>;

    // TODO: make type as MIME Media Type
    /**
     * When used on an Object, identifies the MIME media type of the value of the content property.
     * If not specified, the content property is assumed to contain text/html content.
     * Works different with Link
     *
     * {@link https://www.w3.org/ns/activitystreams#mediaType Docs}
     */
    mediaType?: string;

    // TODO: only name or nameMap at one time

    /**
     * A simple, human-readable, plain-text name for the object.
     * HTML markup MUST NOT be included.
     * [For multiple language-tagged values use nameMap property]
     *
     * {@link https://www.w3.org/ns/activitystreams#name Docs}
     */
    name?: string;

    /**
     * A simple, human-readable, plain-text name for the object.
     * HTML markup MUST NOT be included.
     * [For a single value use name property]
     *
     * {@link https://www.w3.org/ns/activitystreams#name Docs}
     */
    nameMap?: Record<string, string | undefined>;

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
    endTime?: DateTime;

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
    startTime?: DateTime;

    /**
     * Identifies the entity (e.g. an application) that generated the object.
     *
     * {@link https://www.w3.org/ns/activitystreams#generator Docs}
     */
    generator?: (string | ASObject | Link);

    /**
     * Indicates an entity (or entities) that describes an icon for this object.
     * Unlike image property, the icon should have an aspect ratio of one (horizontal)
     * to one (vertical) and should be suitable for presentation at a small size.
     *
     * {@link https://www.w3.org/ns/activitystreams#icon Docs}
     */
    icon?: IconField | IconField[];

    /**
     * Indicates an entity that describes an image for this object.
     * Unlike the icon property, there are no aspect ratio or display size limitations assumed.
     *
     * {@link https://www.w3.org/ns/activitystreams#image Docs}
     */
    image?: ImageField | ImageField[];

    /**
     * Indicates one or more entities for which this object is considered a response.
     *
     * {@link https://www.w3.org/ns/activitystreams#inReplyTo Docs}
     */
    inReplyTo?: InReplyToField | InReplyToField[];

    /**
     * Indicates one or more physical or logical locations associated with the object.
     *
     * {@link https://www.w3.org/ns/activitystreams#location Docs}
     */
    location?: LocationField | LocationField[];

    /**
     * Identifies an entity that provides a preview of this object.
     *
     * {@link https://www.w3.org/ns/activitystreams#preview Docs}
     */
    preview?: PreviewField;

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
    published?: DateTime;

    /**
     * Identifies a Collection containing objects considered to be responses to this object.
     *
     * {@link https://www.w3.org/ns/activitystreams#replies Docs}
     */
    replies?: Collection;

    // TODO: only summary or summaryMap at one time

    /**
     * A natural language summarization of the object encoded as HTML.
     * Multiple language tagged summaries MAY be provided.
     * [For multiple language-tagged values use summaryMap property]
     *
     * {@link https://www.w3.org/ns/activitystreams#summary Docs}
     */
    summary?: string;

    /**
     * A natural language summarization of the object encoded as HTML.
     * Multiple language tagged summaries MAY be provided.
     * [For a single value use summary property]
     *
     * {@link https://www.w3.org/ns/activitystreams#summary Docs}
     */
    summaryMap?: Record<string, string | undefined>;

    /**
     * One or more "tags" that have been associated with an objects. A tag can be any kind of Object.
     * The key difference between attachment and tag is that the former implies association by
     * inclusion, while the latter implies associated by reference.
     *
     * {@link https://www.w3.org/ns/activitystreams#tag Docs}
     */
    tag?: TagField | TagField[];

    /**
     * The date and time at which the object was updated.
     *
     * {@link https://www.w3.org/ns/activitystreams#published Docs}
     *
     * Must be provided in {@link https://www.w3schools.blog/xsd-date-and-time-data-types xsd:dateTime}
     *
     * @example
     * 2020-08-08T08:30:11-03:00Z
     * 2020-08-08T08:30:11-03:00
     * 2020-08-08T08:30:11Z
     * 2020-08-08T08:30:11
     * 2020-08-08
     */
    updated?: DateTime;

    /**
     * Identifies one or more links to representations of the object.
     *
     * {@link https://www.w3.org/ns/activitystreams#url Docs}
     */
    url?: UrlField | UrlField[];

    /**
     * Identifies an entity or entities considered to be part of the public primary audience of an Object.
     *
     * {@link https://www.w3.org/ns/activitystreams#to Docs}
     */
    to?: ToField | ToField[];

    /**
     * Identifies an Object that is part of the private primary audience of this Object.
     *
     * {@link https://www.w3.org/ns/activitystreams#bto Docs}
     */
    bto?: BtoField | BtoField[];

    /**
     * Identifies an Object that is part of the public secondary audience of this Object.
     *
     * {@link https://www.w3.org/ns/activitystreams#cc Docs}
     */
    cc?: CcField | CcField[];

    /**
     * Identifies one or more Objects that are part of the private secondary audience of this Object.
     *
     * {@link https://www.w3.org/ns/activitystreams#bcc Docs}
     */
    bcc?: BccField | BccField[];

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
    duration?: Duration;
}