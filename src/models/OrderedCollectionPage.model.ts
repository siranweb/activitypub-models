import {CollectionPage, CollectionPageFields} from "./CollectionPage.model";

// TODO: types
// TODO: is it correct?
// https://www.w3.org/TR/activitystreams-core/#collection
export interface OrderedCollectionPageFields extends CollectionPageFields {
    startIndex?: any;
}

export class OrderedCollectionPage extends CollectionPage {
    constructor(fields: OrderedCollectionPageFields) {
        super(fields);
    }
}