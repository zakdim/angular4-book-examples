// Location 1340
function hello() {
    var a = "function";
    for(var i=0; i<5; i++) {
      let a = "block";  // let creates block level scope variable
    }
    console.log(a);   // prints: functions
}
hello();
