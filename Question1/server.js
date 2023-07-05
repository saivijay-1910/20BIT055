var http = require('http');
var f = require('./file.js');
const server = http.createServer(function (req, res) {
  res.write(
    '<html><head></head><body><h2>Question 1</h2><h2>Number Management HTTP Microservice</h2></body></html>'
  );
  if (req.url == '/number') {
    res.write('{number :[1,2,5,8,13]}');
    res.end();
  }
  else if (req.url == '/number/prime') {
    res.write('{number :[2,3,5,7,11,13,17,19,23,29,31,37,39,41,43,47]}');
    res.end();
  }
  else if (req.url == '/number/fibo') {
    res.write('{number :[0,1,1,2,3,5,8,13,21,34,55,89,144]}');
    res.end();
  } 
  else if (req.url == '/number/odd') {
    res.write('{number :[1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31]}');
    res.end();
  }
  else if (req.url == '/number/even') {
    res.write('{number :[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30]}');
    res.end();
  } 
  else if (req.url == '/number/rand') {
    res.write('{number :[5,17,3,19,76,24,1,5,10,34,8,27,7]}');
    res.end();
  } 
  else {
    res.write('try different url');
  }
});
server.listen(8008);
console.log('server running at port 8008');
