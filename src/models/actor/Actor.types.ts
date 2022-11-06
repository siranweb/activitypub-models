import {APObjectFields} from "../apObject/APObject.types";
import {
    FollowersValue,
    FollowingValue,
    InboxValue,
    LikedValue,
    OauthAuthorizationEndpointValue,
    OauthTokenEndpointValue,
    OutboxValue,
    PreferredUsernameMapValue,
    PreferredUsernameValue,
    ProvideClientKeyValue,
    ProxyUrlValue, SharedInboxValue,
    SignClientKeyValue,
    StreamsValue
} from "../../common/types";

export interface EndpointsValue {

    /**
     * Endpoint URI so this actor's clients may access remote ActivityStreams
     * objects which require authentication to access. To use this endpoint,
     * the client posts an x-www-form-urlencoded id parameter with the value
     * being the id of the requested ActivityStreams object.
     *
     * {@link https://www.w3.org/TR/activitypub/#actors Docs}
     */
    proxyUrl?: ProxyUrlValue;

    /**
     * If OAuth 2.0 bearer tokens [RFC6749] [RFC6750] are being used for authenticating
     * client to server interactions, this endpoint specifies a URI at which a
     * browser-authenticated user may obtain a new authorization grant.
     *
     * {@link https://www.w3.org/TR/activitypub/#actors Docs}
     */
    oauthAuthorizationEndpoint?: OauthAuthorizationEndpointValue;

    /**
     * If OAuth 2.0 bearer tokens [RFC6749] [RFC6750] are being used for authenticating
     * client to server interactions, this endpoint specifies a URI at which a client
     * may acquire an access token.
     *
     * {@link https://www.w3.org/TR/activitypub/#actors Docs}
     */
    oauthTokenEndpoint?: OauthTokenEndpointValue;

    /**
     * If Linked Data Signatures and HTTP Signatures are being used for authentication
     * and authorization, this endpoint specifies a URI at which browser-authenticated
     * users may authorize a client's public key for client to server interactions.
     *
     * {@link https://www.w3.org/TR/activitypub/#actors Docs}
     */
    provideClientKey?: ProvideClientKeyValue;

    /**
     * If Linked Data Signatures and HTTP Signatures are being used for authentication an
     * authorization, this endpoint specifies a URI at which a client key may be signed
     * by the actor's key for a time window to act on behalf of the actor in interacting
     * with foreign servers.
     *
     * {@link https://www.w3.org/TR/activitypub/#actors Docs}
     */
    signClientKey?: SignClientKeyValue;

    /**
     * An optional endpoint used for wide delivery of publicly addressed activities and
     * activities sent to followers. sharedInbox endpoints SHOULD also be publicly readable
     * OrderedCollection objects containing objects addressed to the Public special collection.
     * Reading from the sharedInbox endpoint MUST NOT present objects which are not addressed
     * to the Public endpoint.
     *
     * {@link https://www.w3.org/TR/activitypub/#actors Docs}
     */
    sharedInbox?: SharedInboxValue;
}

export interface ActorFields extends APObjectFields {

    /**
     *  The inbox is discovered through the inbox property of an actor's profile.
     *  The inbox MUST be an OrderedCollection. The inbox stream contains all activities
     *  received by the actor. The server SHOULD filter content according to the
     *  requester permission. In general, the owner of an inbox is likely to be
     *  able to access all of their inbox contents. Depending on access control,
     *  some other content may be public, whereas other content may require
     *  authentication for non-owner users, if they can access the inbox at all.
     *
     * {@link https://www.w3.org/TR/activitypub/#inbox Docs}
     */
    inbox: InboxValue;

    /**
     *  The outbox is discovered through the outbox property of an actor's profile.
     *  The outbox MUST be an OrderedCollection. The outbox stream contains activities
     *  the user has published, subject to the ability of the requester to retrieve the
     *  activity (that is, the contents of the outbox are filtered by the permissions
     *  of the person reading it). If a user submits a request without Authorization the
     *  server should respond with all the Public posts. This could potentially be all
     *  relevant objects published by the user, though the number of available items is
     *  left to the discretion of those implementing and deploying the server.
     *
     * {@link https://www.w3.org/TR/activitypub/#outbox Docs}
     */
    outbox: OutboxValue;

    /**
     * Every actor SHOULD have a collection of following. This is a list of everybody that
     * the actor has followed, added as a side effect. The following collection MUST be
     * either an OrderedCollection or a Collection and MAY be filtered on privileges of an
     * authenticated user or as appropriate when no authentication is given.
     *
     * {@link https://www.w3.org/TR/activitypub/#following Docs}
     */
    following?: FollowingValue;

    /**
     * Every actor SHOULD have a collection of followers. This is a list of everyone who has
     * sent a Follow activity for the actor, added as a side effect. This is where one would
     * find a list of all the actors that are following the actor. The followers collection
     * MUST be either an OrderedCollection or a Collection and MAY be filtered on privileges
     * of an authenticated user or as appropriate when no authentication is given.
     *
     * NOTE: The follow activity generally is a request to see the objects an actor creates.
     * This makes the Followers collection an appropriate default target for delivery of notifications.
     *
     * {@link https://www.w3.org/TR/activitypub/#followers Docs}
     */
    followers?: FollowersValue;

    /**
     * Every actor MAY have a liked collection. This is a list of every object from all the
     * actor's Like activities, added as a side effect. The liked collection MUST be either
     * an OrderedCollection or a Collection and MAY be filtered on privileges of an
     * authenticated user or as appropriate when no authentication is given.
     *
     * {@link https://www.w3.org/TR/activitypub/#liked Docs}
     */
    liked?: LikedValue;

    /**
     * A list of supplementary Collections which may be of interest.
     *
     * {@link https://www.w3.org/TR/activitypub/#actors Docs}
     */
    streams?: StreamsValue | StreamsValue[];

    // TODO preferredUsername or preferredUsernameMap at one time

    /**
     * A short username which may be used to refer to the actor, with no uniqueness guarantees.
     * [For multiple language-tagged values use preferredUsernameMap property]
     *
     * {@link https://www.w3.org/TR/activitypub/#actors Docs}
     */
    preferredUsername?: PreferredUsernameValue;

    /**
     * A short username which may be used to refer to the actor, with no uniqueness guarantees.
     * [For a single value use preferredUsername property]
     *
     * {@link https://www.w3.org/TR/activitypub/#actors Docs}
     */
    preferredUsernameMap?: PreferredUsernameMapValue;

    /**
     * A json object which maps additional (typically server/domain-wide) endpoints which may
     * be useful either for this actor or someone referencing this actor. This mapping may be
     * nested inside the actor document as the value or may be a link to a JSON-LD document with
     * these properties.
     *
     * {@link https://www.w3.org/TR/activitypub/#actors Docs}
     */
    endpoints?: EndpointsValue;

}
