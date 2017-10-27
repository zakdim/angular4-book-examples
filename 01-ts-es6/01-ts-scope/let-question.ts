var funcs = [];
for (var i = 0; i < 5; i += 1) {
    var y = i;              // global scope
    funcs.push(function() {
      console.log(y);
    })
}
funcs.forEach(function (func) {
  func()
});
// prints:
// 4
// 4
// 4
// 4
// 4
