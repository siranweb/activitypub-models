# ActivityPub Models

Extendable ActivityPub JS/TS models with official docs

## Table of Contents

- [Features](#features)
- [Docs](#docs)
- [Roadmap](#future-plans)
- [Contact](#contact)
- [License](#license)

## Features

- All models implemented
- In-code documentation
- Ability to create/extend own models
- TypeScript and JavaScript support

## Docs

Installation:
```
# with npm
npm i activitypub-models
# with yarn
yarn add activitypub-models
```

Use of models:
```typescript
import { Note, Link, contexts } from 'activitypub-models';

// "type" already provided, but can be rewrited
const imageLink = Link.create({
    href: 'https://example.org/martin/image.jpg',
    mediaType: 'image/jpeg'
});

const note = Note.create({
    '@context': contexts.activityStreamsV2,
    mediaType: 'text/plain',
    image: imageLink, // supports nested objects
});

note.content = 'some content';
note.content = 123; // TypeError: only string available for "content"

const obj = note.toPlain(); // convert to simple JS object
const json = note.toJSON(); // convert to JSON
```

Creating own models with TypeScript:
```typescript
import { NoteFields, APBase, ASModelType } from 'activitypub-models';

interface CustomNoteFields extends NoteFields {
    myField: string | string[];
}

class CustomNote extends APBase<CustomNoteFields> {
    static create(fields: CustomNoteFields) {
        return APBase._create<CustomNoteFields>({
            type: ASModelType.Note,
            ...fields,
        });
    }
}

const customNote = CustomNote.create({
    myField: 'I am a new field!'
});
```

Creating own models with JavaScript:
```javascript
import { NoteFields, APBase, ASModelType } from 'activitypub-models';

/**
 * @typedef {Object} CustomNoteFields
 * @property {string | string[]} myField
 */

class CustomNote extends APBase {
    /** @param {NoteFields & CustomNoteFields} fields */
    static create(fields) {
        return APBase._create({
            type: ASModelType.Note,
            ...fields,
        });
    }
}

const customNote = CustomNote.create({
    myField: 'I am a new field!'
});
```

## Future plans

You can check current tasks [here](https://github.com/orgs/activitypub-js/projects/1)

## Contact

You can contact me via [matrix](https://matrix.to/#/@siranweb:matrix.org) or [telegram](https://t.me/KirillG_web) 

## License

[MIT](LICENSE)