'use strict';
var decimal = 6;
var done = false;
var color = "blue";
var list = [1, 2, 3];
var list2 = [1, 2, 3];
var fun = function () { return console.log("Hello"); };
function returnNumber() {
    return 1;
}
fun();
console.log(returnNumber());
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var go;
go = Direction.Up;
console.log(go);
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
;
var person;
var people;
var notsure = 1;
notsure = "hello";
// void
function returnNothing() {
    console.log("Moo");
}
// type assertion
var value = "Assim Hussain";
var len = value.length;
