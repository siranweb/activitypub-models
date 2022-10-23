import express from 'express';
import { ObjectAP } from './models/Object.model';

// const app = express();
// app.listen(3000, () => console.log('Listening on port 3000!'));

const obj = new ObjectAP({
    id: 'someId',
});
const obj2 = new ObjectAP({
    cc: '123',
    content: obj,
}).addContext();

console.log(obj2.plain());
console.log(obj2.json());
