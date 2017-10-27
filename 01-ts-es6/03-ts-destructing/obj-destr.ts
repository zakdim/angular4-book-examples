const obj = {first: 'Asim', last: 'Hussain', age: 39 };

// const f = obj.first;
// const l = obj.last;
// console.log(f); // Asim
// console.log(l); // Hussain

// OR
const {first: f, last: l} = obj;
console.log(f); // Asim
console.log(l); // Hussain

// Extract the propertie into variable with the same name
// const {first: first, last: last} = obj;
// console.log(first); // Asim
// console.log(last); // Hussain

// {prop} is short for {prop: prop}
const {first, last} = obj;
console.log(first); // Asim
console.log(last); // Hussain
