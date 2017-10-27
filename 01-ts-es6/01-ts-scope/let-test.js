// Location 1340
function hello() {
    var a = "function";
    for (var i = 0; i < 5; i++) {
        var a_1 = "block"; // let creates block level scope variable
    }
    console.log(a); // prints: functions
}
hello();
