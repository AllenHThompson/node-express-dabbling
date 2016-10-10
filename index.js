var express = require('express');
var http = require('http');
var fs = require('fs');
var app = express();
var m1 = require('./module1.js');

app.get('/', function(request, response){

     response.send('Hello World!');
     //console.log("Response object: ", response)
     //console.log("response: ", response);
     // if (error) {
     //      console.log("err")
     //      return;
     // } else {
     //      console.log("response")
     //      response.send('Hello World!');
     // }
});

app.get('/test', function(request, response){
     console.log("Request oject: ", request)
     response.send('Test Route!');
});

// http.createServer(function(request, response){
//      response.writeHead(200);
//      response.write("Hello World!");
//      response.end();
// }).listen(8080)
//      console.log("Listening on port 8080...")


// console.log(m1)
//
// console.log(app.listen)

var content;

//app.get('./read.txt', function(request, response) {
     //content = fs.readFileSync("./read.txt")

fs.readFile("./read.txt", function(err, data) {
     if (err) {
          console.log("error: " + err);
          throw err;

     }
     content = data;
     console.log("content read: " + content);
     //response.send(content)
});

fs.writeFile("./read1.txt", "test write", function(err, data) {
     if (err) {
          console.log("error: " + err);
          throw err;
     }
     content = data;
     console.log("content write: " + content);
     //response.send(content)
});



// http.get('http://api.social.com/people/1.json', function(err, res) {
//      if (err) throw new Error(err);
//      var person = JSON.parse(res.data), name = person.name;
//      console.log(name); // 'Lorem Ipson'
// })

/*


// GET method route
app.get('/', function(request, response){
     response.send('GET request to the homepage');
});

//POST method route
app.post('/', function(request, response) {
     response.send('POST request to the homepage');
});
*/

app.listen(8000, function(){
     console.log('listening on port 8000');
});
