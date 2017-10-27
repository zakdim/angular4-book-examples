function func() {
  if (true) {
    const tmp = 123;
  }
  console.log(tmp); // Uncaught ReferenceError: tmp is not defined
}
func();
