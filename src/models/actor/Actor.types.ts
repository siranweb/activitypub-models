import {APObjectFields} from "../apObject/APObject.types";

// TODO edit
type Endpoints = {
    proxyUrl?: any;
    oauthAuthorizationEndpoint?: any;
    oauthTokenEndpoint?: any;
    provideClientKey?: any;
    signClientKey?: any;
    sharedInbox?: any;
}

export interface ActorFields extends APObjectFields {
    inbox: any;
    outbox: any;
    following?: any;
    followers?: any;
    liked?: any;
    streams?: any;

    // TODO preferredUsername or preferredUsernameMap at one time

    preferredUsername?: any;
    preferredUsernameMap?: any;
    endpoints?: any;

}
