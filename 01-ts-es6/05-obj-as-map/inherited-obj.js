'use strict';
var base = { a: 1, b: 2 };
var obj = Object.create(base);
obj['c'] = 3;
for (var prop in obj)
    console.log(prop);
var base2 = { a: 1, b: 2 };
var obj2 = Object.create(base2);
obj2['c'] = 3;
for (var prop in obj) {
    if (obj2.hasOwnProperty(prop))
        console.log(prop);
}
