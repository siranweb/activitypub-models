import { ObjectAP } from './models/Object.model';

const obj = new ObjectAP({
    id: 'someId',
});
const obj2 = new ObjectAP({
    cc: '123',
    content: obj,
}).addContext();

console.log(obj2.plain());
console.log(obj2.json());
