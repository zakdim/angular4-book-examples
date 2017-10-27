function f(options) {
    console.log(options.x);
}
f({ x: 1 }); // 1
function f2(_a) {
    var x = _a.x;
    console.log(x); // refer to x directly
}
f2({ x: 1 }); // 1
// With default values
function f3(_a) {
    var _b = _a.x, x = _b === void 0 ? 0 : _b;
    console.log(x); // refer to x directly
}
f3({}); // 1
