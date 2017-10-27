'use strict';
// Supported starting from ES2016
// run: tsc -t ES2016 map-test.ts
let map = new Map();
map.set("A", 1);
map.set("B", 2);
map.set("C", 3);
let map2 = new Map()
    .set("A", 1)
    .set("B", 2)
    .set("C", 3);
let map3 = new Map([
    ["A", 1],
    ["B", 2],
    ["C", 3]
]);
console.log(map3.get("A"));
console.log(map3.has("A"));
console.log(map3.delete("A"));
console.log(map3.size);
map3.clear();
console.log(map3.size);
