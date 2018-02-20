var connect = require('connect'),
	  serveStatic = require('serve-static');

var app = connect();
//app.use(serveStatic("C:/learn/angularjs/pro-angularjs/examples"));
//app.use(serveStatic("."));
app.use(serveStatic("."));
app.listen(5000);

console.log('Server running at http://localhost:5000/');
