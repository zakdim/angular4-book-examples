function hello() {
  var a = "function";
  for (var i=0; i<5; i++) {
    (function() {       // iife
       var a = "block";
    })();
  }
  console.log(a); // prints: function
}
hello();
