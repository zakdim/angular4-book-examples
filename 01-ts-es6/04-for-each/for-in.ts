'use strict';

var obj = {a:1, b:2};
for (let prop in obj) {
  console.log(prop);
};
// a
// b

let array = [10, 20, 30];
for (let index in array) {
  console.log(index);
};
// 0
// 1
// 2
let array2 = [10, 20, 30];
for (let index in array2) {
  console.log(typeof(index));
};
// string
// string
// string
