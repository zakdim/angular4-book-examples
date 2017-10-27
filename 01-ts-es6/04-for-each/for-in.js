'use strict';
var obj = { a: 1, b: 2 };
for (var prop in obj) {
    console.log(prop);
}
;
// a
// b
var array = [10, 20, 30];
for (var index in array) {
    console.log(index);
}
;
// 0
// 1
// 2
var array2 = [10, 20, 30];
for (var index in array2) {
    console.log(typeof (index));
}
;
