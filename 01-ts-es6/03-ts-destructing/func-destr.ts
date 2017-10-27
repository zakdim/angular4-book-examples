'use strict';

function f(options) {
  console.log(options.x);
}
f({x:1}); // 1

function f2({x}) {
  console.log(x); // refer to x directly
}
f2({x:1}); // 1

// With default values
function f3({x=0}) {
  console.log(x); // refer to x directly
}
f3({}); // 1
