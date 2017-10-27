var funcs = [];
for (var i = 0; i < 5; i += 1) {
    let y = i;              // block level scope
    funcs.push(function() {
      console.log(y);
    })
}
funcs.forEach(function (func) {
  func()
});
