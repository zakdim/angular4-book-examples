// locatoin 1439
const foo = {};
foo = {}; // TypeError: Assignment to constnat variable

foo['prop'] = "Moo";  // This works!
console.log(foo);
