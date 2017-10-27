function func() {
    if (true) {
        var tmp = 123;
    }
    console.log(tmp); // Uncaught ReferenceError: tmp is not defined
}
func();
