'use strict';

let base = {a:1, b:2};
let obj = Object.create(base);
obj['c'] = 3;
for (let prop in obj) console.log(prop);

let base2 = {a:1, b:2};
let obj2 = Object.create(base2);
obj2['c'] = 3;
for (let prop in obj) {
  if (obj2.hasOwnProperty(prop))
    console.log(prop);
}
