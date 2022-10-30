import {ASObject} from "../models/asObject/ASObject.model";
import {Collection} from "../models/collection/Collection.model";
import {OrderedCollection} from "../models/orderedCollection/OrderedCollection.model";
import {Article} from "../models/article/Article.model";
import {Audio} from "../models/audio/Audio.model";
import {Document} from "../models/document/Document.model";
import {ASEvent} from "../models/asEvent/ASEvent.model";
import {Image} from "../models/image/Image.model";
import {Note} from "../models/note/Note.model";
import {Page} from "../models/page/Page.model";
import {Place} from "../models/place/Place.model";
import {Profile} from "../models/profile/Profile.model";
import {Relationship} from "../models/relationship/Relationship.model";
import {Tombstone} from "../models/tombstone/Tombstone.model";
import {Video} from "../models/video/Video.model";
import {Link} from "../models/link/Link.model";
import {Mention} from "../models/mention/Mention.model";
import {CollectionPage} from "../models/collectionPage/CollectionPage.model";
import {OrderedCollectionPage} from "../models/orderedCollectionPage/OrderedCollectionPage.model";

export enum ASModelType {
    Object = 'Object',
    Activity = 'Activity',
    Application = 'Application',
    Article = 'Article',
    Document = 'Document',
    Event = 'Event',
    Group = 'Group',
    Note = 'Note',
    Organization = 'Organization',
    Person = 'Person',
    Service = 'Service',
    Audio = 'Audio',
    Image = 'Image',
    Page = 'Page',
    Video = 'Video',
    Place = 'Place',
    Relationship = 'Relationship',
    Question = 'Question',
    Tombstone = 'Tombstone',
    Profile = 'Profile',
    Link = 'Link',
    Mention = 'Mention',
    Collection = 'Collection',
    CollectionPage = 'CollectionPage',
    OrderedCollection = 'OrderedCollection',
    OrderedCollectionPage = 'OrderedCollectionPage',
}

export type AnyCollection = Collection | OrderedCollection;
export type AnyASObject = ASObject | Article | Audio | Document | ASEvent | Image | Note | Page | Place | Profile | Relationship | Tombstone | Video | AnyCollection;

export type DateTime = string;
export type LanguageTag = string;
export type MediaType = string;
export type Duration = string;

export type UrlValue = string | Link;
export type IdValue = string;
export type TypeValue = string;
export type DurationValue = Duration;
export type ContentValue = string;
export type ContentMapValue = Record<string, string>;
export type MediaTypeValue = MediaType;
export type NameValue = string;
export type NameMapValue = Record<string, string>;
export type SummaryValue = string;
export type SummaryMapValue = Record<string, string>;
export type EndTimeValue = DateTime;
export type StartTimeValue = DateTime;
export type PublishedValue = DateTime;
export type UpdatedValue = DateTime;
export type RepliesValue = string | AnyCollection;
export type RelationshipValue = string | AnyASObject;
export type IconValue = string | Image | Link;
export type ImageValue = string | Image | Link;
export type AttachmentValue = string | AnyASObject | Link;
export type AudienceValue = string | AnyASObject | Link;
export type InReplyToValue = string | AnyASObject | Link;
export type LocationValue = string | Place | Link;
export type PreviewValue = string | AnyASObject | Link;
export type ToValue = string | AnyASObject | Link;
export type BtoValue = string | AnyASObject | Link;
export type CcValue = string | AnyASObject | Link;
export type BccValue = string | AnyASObject | Link;
export type GeneratorValue = string | AnyASObject | Link;
export type ObjectValue = string | AnyASObject | Link;
export type AttributedToValue = string | AnyASObject | Link | Mention;
export type TagValue = string | AnyASObject | Link | Mention;
export type ActorValue = string | AnyASObject | Link;
export type TargetValue = string | AnyASObject | Link;
export type ResultValue = string | AnyASObject | Link;
export type OriginValue = string | AnyASObject | Link;
export type InstrumentValue = string | AnyASObject | Link;
export type OneOfValue = string | AnyASObject | Link;
export type AnyOfValue = string | AnyASObject | Link;
export type SubjectValue = string | AnyASObject | Link;
export type AccuracyValue = number;
export type AltitudeValue = number;
export type LatitudeValue = number;
export type LongitudeValue = number;
export type RadiusValue = number;
export type UnitsValue = 'cm' | 'feet' | 'inches' | 'km' | 'm' | 'miles' | string;
export type ClosedValue = string | AnyASObject | Link | DateTime | boolean;
export type FormerTypeValue = string;
export type DeletedValue = DateTime;
export type DescribesValue = string | AnyASObject;
export type HrefValue = string;
export type HreflangValue = LanguageTag;
export type RelValue = string;
export type HeightValue = number;
export type WidthValue = number;
export type TotalItemsValue = number;
export type CollectionCurrentValue = string | CollectionPage | Link;
export type CollectionFirstValue = string | CollectionPage | Link;
export type CollectionLastValue = string | CollectionPage | Link;
export type CollectionItemsValue = string | CollectionPage | Link;
export type CollectionPagePartOfValue = string | Collection | Link;
export type CollectionPageNextValue = string | Collection | Link;
export type CollectionPagePrevValue = string | Collection | Link;
export type OrderedCollectionCurrentValue = string | OrderedCollectionPage | Link;
export type OrderedCollectionFirstValue = string | OrderedCollectionPage | Link;
export type OrderedCollectionLastValue = string | OrderedCollectionPage | Link;
export type OrderedCollectionItemsValue = string | OrderedCollectionPage | Link;
export type OrderedCollectionPagePartOfValue = string | OrderedCollection | Link;
export type OrderedCollectionPageNextValue = string | OrderedCollection | Link;
export type OrderedCollectionPagePrevValue = string | OrderedCollection | Link;
export type StartIndexValue = number;