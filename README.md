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

Install with npm:
```
npm i activitypub-models
```
Install with yarn:
```
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

You also can create models with plain JS, but you will lose types. Can be fixed with .d.ts and jsdoc:
```typescript
// CustomNote.d.ts
import { APBase, NoteFields, WithContext } from "activitypub-models";
export interface CustomNotesFields extends NoteFields {
    myField: string | string[];
}
export type CustomNoteType = APBase<CustomNotesFields> & CustomNotesFields & WithContext;

// CustomNote.js
import {APBase, ASModelType} from "activitypub-models";

class CustomNote extends APBase {
    static create(fields) {
        return APBase._create({
            type: ASModelType.Note,
            ...fields,
        });
    }
}

/** @type {CustomNoteType} */
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