import { ASObject } from './models/ASObject.model';

const obj = new ASObject({
    id: 'someId',
});
const obj2 = new ASObject({
    cc: '123',
    content: obj,
}).addContext();

console.log(obj2.plain());
console.log(obj2.json());
