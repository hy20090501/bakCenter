var koa = require('koa');
var app = koa();

// x-response-time

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
  console.log('in x-response-time...')
});

// logger

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
  console.log('in logger...')
});

// response

app.use(function *(){
	console.log('in body...');
  	this.body = 'Hello World';
});

app.listen(8888);


// var koa = require('koa');
// var app = koa();
// app.use(function *(){
// 	this.body = 'Hello Worlddd';
// });

// app.listen(8888);

// var http = require("http");
// http.createServer(function(request,response){
// 	response.writeHead(200,{"Content-Type":"text/plain"});
// 	response.write("Hello World");
// 	response.end();
// }).listen(8888);