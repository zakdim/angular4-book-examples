var funcs = [];
var _loop_1 = function () {
    var y = i; // block level scope
    funcs.push(function () {
        console.log(y);
    });
};
for (var i = 0; i < 5; i += 1) {
    _loop_1();
}
funcs.forEach(function (func) {
    func();
});
