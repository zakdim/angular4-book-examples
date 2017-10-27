var obj = { first: 'Asim', last: 'Hussain', age: 39 };
// const f = obj.first;
// const l = obj.last;
// console.log(f); // Asim
// console.log(l); // Hussain
// OR
var f = obj.first, l = obj.last;
console.log(f); // Asim
console.log(l); // Hussain
// Extract the propertie into variable with the same name
// const {first: first, last: last} = obj;
// console.log(first); // Asim
// console.log(last); // Hussain
// {prop} is short for {prop: prop}
var first = obj.first, last = obj.last;
console.log(first); // Asim
console.log(last); // Hussain
