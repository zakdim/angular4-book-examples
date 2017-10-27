"use strict";
var foo = Object.freeze({});
foo.prop = 123;
console.log(foo.prop); // undefined
